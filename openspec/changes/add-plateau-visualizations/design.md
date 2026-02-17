## Context
The scrolly engine already supports `vizContent` (a DOM element for the sticky left panel) and `scrubUpdate(stepIndex, progress, vizContainer)` for scroll-driven animation (line 1776 of index.html). No plateau currently passes these parameters. Each of the 12 scrolly plateaus needs a self-contained visualization module that plugs into this existing interface.

The project is a single HTML file (~4325 lines) with zero dependencies. All DOM must be built with the `h()` helper. Canvas API is available and already used for maps. `prefers-reduced-motion` must be respected.

## Goals / Non-Goals
- **Goals**: Implement all 12 plateau visualizations as self-contained builder functions; wire them into the existing `buildScrolly` interface; keep each independently testable
- **Non-Goals**: Shared visualization framework, charting library, WebGL, external dependencies; we are NOT changing the scrolly engine's API (it already supports what we need)

## Decisions

### Decision: One builder function per plateau
Each visualization is a standalone `buildViz<Name>(state)` function that returns `{ element, onStep, scrubUpdate?, cleanup }`. No shared base class.
- **Rationale**: Keeps each plateau self-contained. Matches the project's convention of simple, function-based builders (e.g., `buildScatterToText`, `buildCYOAFork`).
- **Alternatives considered**: Shared `VizBase` class — rejected because visualizations are too heterogeneous.

### Decision: Wiring pattern — vizBuilders dispatch in buildPlateauView
The integration point is in `buildPlateauView`, NOT inside `buildScrolly`. The pattern:

```
// In buildPlateauView, before the buildScrolly call:
const vizBuilders = {
  "next-word": buildVizNextWord,
  "averaging-problem": buildVizAveragingProblem,
  // ... etc
};
const vizBuilder = vizBuilders[plateauId];
const viz = vizBuilder ? vizBuilder(state) : null;

// Then pass to existing buildScrolly:
const scrolly = buildScrolly({
  steps: scrollyConfig.steps,
  whispers: scrollyConfig.whispers,
  questionCards: questionCardMap[plateauId] || [],
  vizContent: viz ? viz.element : undefined,
  scrubUpdate: viz ? viz.scrubUpdate : undefined,
  state,
});

// Integrate viz.onStep with the engine's step observation:
// The engine's internal onStep handles step highlighting, whispers, and
// constellation. The viz.onStep is called separately — we hook into the
// IntersectionObserver callback or add a step-change callback that the
// engine exposes. Since the engine doesn't currently expose a step-change
// hook, the simplest approach is: after buildScrolly returns, set up a
// MutationObserver or re-use the same IntersectionObserver pattern to
// call viz.onStep(idx) when the active step changes.
//
// Preferred approach: extend the buildScrolly spec object with an
// optional `onStepChange(idx)` callback that the engine calls inside
// its existing onStep function. This is a minimal addition.
```

The viz builder's `cleanup()` is called alongside the scrolly cleanup on route change.

### Decision: Step-index mapping
Each visualization's `onStep(idx)` receives the scrolly step index (0-based). The mapping to visual states is:

- **3-state vizualizations** (Next Word, Averaging Problem, Shaping): steps 0–1 → visual state 1, step 2 → visual state 2, step 3 → visual state 3, step 4 (final/constellation) → viz fades out
- **4-state visualizations** (most Tier 2): steps 0 → state 1, step 1 → state 2, step 2 → state 3, step 3 → state 4, step 4 (final) → viz fades out
- **5-state visualizations** (Near-Zero Cost): steps 0–4 → states 1–5, step 5 (final) → viz fades out

The constellation step (always the last step) should trigger the viz to fade out, matching the engine's existing constellation transition. Each viz builder should treat `onStep(steps.length - 1)` as the fade-out signal.

### Decision: Canvas for data-driven visuals, DOM for interactive controls
- Probability bars, distribution curves, counters, gauges, neural networks → Canvas
- Sliders, toggles, buttons, text comparisons, cards → DOM with `h()` helper
- Hybrid visualizations layer DOM controls over canvas (using `position: absolute`)
- **Rationale**: Canvas excels at smooth animated data; DOM is inherently accessible for controls.

### Decision: Canvas HiDPI handling
All canvas visualizations SHALL handle `devicePixelRatio` for crisp rendering on retina displays, following the existing pattern in `drawGraph`:
```js
const dpr = window.devicePixelRatio || 1;
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
ctx.scale(dpr, dpr);
```

### Decision: Visual style constraint
All canvas visualizations SHALL use the existing color palette (`--ink`, `--ink2`, `--ink3`, `--acc`, `--seed`, `--paper`) and a line-art aesthetic consistent with the map canvas. No photorealistic rendering, no complex 3D, no custom color schemes.

### Decision: Mobile / responsive behavior
On viewports below the tablet breakpoint (where scrolly layout stacks vertically with viz on top), interactive controls (sliders, toggles, rater buttons) SHALL remain usable:
- Sliders: full-width, minimum 44px touch target height
- Buttons/toggles: minimum 44×44px touch target
- Canvas visualizations: aspect-ratio maintained, responsive width
- Text overlays on canvas: repositioned to avoid overflow

### Decision: Accessible fallbacks for all canvas visuals
Each canvas visualization SHALL have an adjacent `aria-live="polite"` region that describes the current visual state in prose. Interactive controls (sliders, toggles) are DOM elements with proper ARIA labels and value announcements. This follows the project constraint that accessibility is architectural.

### Decision: Tier-based implementation with design gate
- **Tier 1** (Next Word, Averaging Problem, The Shaping) is fully specified and ready to implement.
- **Tier 2** (remaining 9 plateaus) requires a UX design pass per visualization before implementation begins. Each Tier 2 ticket should produce a concrete wireframe-level description (specific DOM structure, canvas layout, interaction states) before coding starts. The current spec describes intent, not implementation.
- **File-size gate**: After Tier 1 is complete, evaluate index.html size. If >5000 lines, introduce a build step before proceeding to Tier 2.

### Decision: Content authoring
Each visualization needs concrete sample content (not just structural descriptions):
- **Next Word**: A specific sentence, candidate tokens with probabilities, temperature-response behavior
- **Averaging Problem**: Sample text for each style region (academic, casual, poetic, technical)
- **The Shaping**: A specific prompt, base-model completion, instruction-tuned response, 2–3 rater comparison pairs with personality-shift vectors

Content authoring is part of each Tier 1 task, not a separate ticket.

## Risks / Trade-offs
- **File size**: 12 visualization modules will significantly increase `index.html` (estimated +1800 lines). The file already exceeds the soft limit. Mitigation: file-size gate after Tier 1, potential build-step introduction.
- **Performance**: Multiple canvas elements + scroll listeners. Mitigation: only the active plateau's visualization is in the DOM; `cleanup()` removes listeners on route change.
- **Scope creep**: Tier 2 specs describe abstract UX concepts ("evolving classroom scene", "authorship attribution view where boundaries blur") that could become full applications. Mitigation: each is a stylized, minimal illustration (pedagogical insight, not production UI). Design pass required before implementation.

## Open Questions
- Exact `onStepChange` callback integration: minimal engine addition (preferred) vs external MutationObserver — decide during scaffolding implementation.

## Near-Zero Cost Impact — Design Pass

### Visual System Overview
- **Layout**: Single canvas (210px height) for the primary illustration with a DOM panel beneath for state-specific labels, counters, and summaries.
- **Canvas**: Line-art aesthetic using `--ink`, `--ink2`, `--ink3`, `--acc`, `--seed` with HiDPI scaling.
- **DOM panels**: Five state-specific blocks (cost curve, content flood, risk dashboard, timeline, strategy landscape) toggled via `display`.
- **Accessibility**: An `aria-live="polite"` status region narrates state changes; all labels are DOM text.

### State 1 — Cost Curve Collapse
- **Canvas**: X/Y axes, dashed legacy curve (gradual decline), solid AI curve plunging toward zero; markers at “Physical goods” vs “AI outputs”.
- **DOM panel**: Two stat chips: `Legacy marginal cost: ~$1.20/unit` and `AI marginal cost: ~$0.02/unit` plus a one-line summary.
- **Sample data**: Curve control points `[(0,1.0),(0.35,0.6),(0.7,0.2),(1,0.02)]`.

### State 2 — Content Flood
- **Canvas**: Three stacked bars (text, images, code) rising from baseline to convey volume growth.
- **DOM panel**: Animated counters with daily outputs: `Text: 250M/day`, `Images: 45M/day`, `Code: 9M/day`.
- **Interaction**: Counters tick upward for ~1.6s unless `prefers-reduced-motion`.

### State 3 — Risk Dashboard
- **Canvas**: Horizontal risk bars with severity markers for `Misinformation`, `De-skilling`, `Security flaws`, `Economic shock`.
- **DOM panel**: Matching labels with severity text (`High`, `Elevated`, etc.).
- **Sample data**: Risk scores `[0.9, 0.75, 0.68, 0.82]`.

### State 4 — Historical Timeline
- **Canvas**: Horizontal timeline with markers for `1440 Printing Press`, `1760 Industrial Revolution`, `1995 Internet Era`, `2023 AI Models`.
- **DOM panel**: Short callouts for each era, emphasizing acceleration of cognitive change.

### State 5 — Strategy Landscape
- **Canvas**: Contour-style terrain lines implying shifting ground.
- **DOM panel**: Three-column strategy list:
  - **Individuals**: “upskill”, “tool fluency”, “domain depth”
  - **Society**: “education reform”, “labor transition”, “public literacy”
  - **Policy**: “AI Act”, “safety audits”, “IP frameworks”
