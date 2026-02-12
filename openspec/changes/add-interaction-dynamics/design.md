## Context

Rizomas is a single-file SPA (vanilla JS, zero dependencies) presenting 8
interconnected visual essays about how LLMs work. The current interaction model
is **crystallization** --- click seeds to reveal content. The research document
(2026-02-11) proposes shifting to **crystallization + configuration**, where
the reader's path through the rhizome changes the rhizome itself.

All changes must work within the single-file, zero-dependency architecture.
No external libraries, no build step, no analytics backend (except Ghost Trails
which is explicitly deferred to Tier 4).

### Stakeholders
- Single author/developer
- General audience readers (non-technical)

### Constraints
- Single HTML file (already at ~1,715 lines; will grow)
- Zero external JS dependencies
- `prefers-reduced-motion` must be respected for all new animations
- Accessibility: all new interactive elements must be keyboard-accessible and
  screen-reader compatible
- Canvas elements must maintain parallel DOM accessibility layers

## Goals / Non-Goals

### Goals
- Make the reading experience within plateaus feel non-linear, uncanny, and
  question-provoking
- Implement the configurative model: reader's path changes the content
- Ground every interaction technique in cognitive science (desirable difficulty,
  information gaps, Zeigarnik effect, productive confusion)
- Maintain the zero-dependency, single-file architecture
- Implement in priority order (Tier 1 → 4) so value is delivered incrementally

### Non-Goals
- Real-time collaboration or multiplayer reading
- Server-side analytics (except Ghost Trails, deferred)
- Automated A/B testing of interaction variants
- Mobile-first redesign (existing responsive behavior is sufficient)
- Dark mode

## Decisions

### Decision: Seed variant types via data attributes, not subclasses
Question-seeds, fourth-wall seeds, and dangling-reference seeds are **variants**
of the existing seed element, distinguished by a `data-seed-type` attribute
(`question`, `fourth-wall`, `dangling`). This avoids class proliferation and
keeps the seed builder function unified.

**Alternatives considered:**
- Separate builder functions per seed type → rejected; too much duplication
- CSS class-based variants → rejected; data attributes are more semantic and
  queryable

### Decision: Path-dependent content via `state.v` branching in seed builders
Seed content functions receive `state.v` (visited plateaus array) and branch
to produce different content. No templating engine --- just JS conditionals
in the content-building functions.

**Alternatives considered:**
- Ink scripting language → rejected; external dependency
- Markdown with conditional blocks → rejected; adds parsing complexity

### Decision: Liminal transitions as a CSS + small JS overlay
A dedicated `<div>` element (`.liminal-transition`) is absolutely positioned
over the viewport during route changes. It displays the connecting question,
fades in over 200ms, holds for 500ms, fades out over 200ms. Total: ~900ms.
This is inserted into the existing `hashchange` handler.

**Alternatives considered:**
- Full-page crossfade with question embedded → rejected; disrupts the page
  transition timing defined in visual-design
- No transition (current behavior) → rejected; misses the liminal moment

### Decision: Background temperature shift via CSS custom property
A single `--bg-temp` custom property (range 0--1) is updated on scroll via
`scrollTop / scrollHeight`. The background color interpolates between
`--paper` (cool, top) and a slightly warmer variant (warm, bottom). This is
a CSS-only change once the JS sets the property.

### Decision: Engagement state as passive counter, not gamification
The "4 of 7 seeds opened" annotation is a subtle, low-contrast text element
--- not a progress bar, not a badge, not a score. It defamiliarizes the
reading act without turning it into a game.

### Decision: Dwell-reveal via `mousemove` timer, not `mouseenter`
Tracking `mousemove` events and checking if the cursor hasn't moved for 3+
seconds is more reliable than paragraph-level `mouseenter`/`mouseleave` for
detecting careful reading. Debounced to fire at most once per second.

### Decision: Ghost Trails deferred to Tier 4
Requires a minimal backend to aggregate anonymized path data. All other
techniques are client-side only. Ghost Trails are specced but marked as
future work.

### Decision: Scatter-to-text via CSS transforms + JS positioning
Words are positioned absolutely within the visual panel with random initial
positions. On scroll progress, their `transform` values interpolate toward
their final reading-order positions. No external animation library needed.

## Risks / Trade-offs

### Risk: File size growth
The single HTML file is already at ~1,715 lines. Adding all interaction
dynamics code could push it past 2,500 lines.
**Mitigation**: Implement in priority tiers. Tier 1 (content changes) adds
zero code. Tier 2 adds ~200 lines. Monitor and consider the build-step
escape hatch documented in project.md if the file becomes unwieldy.

### Risk: Overcrowding the reading experience
Too many uncanny elements per plateau could produce confusion instead of
productive confusion.
**Mitigation**: Strict density limits --- 1--2 fourth-wall seeds per plateau,
1 micro-CYOA fork per plateau maximum, marginalia only where path-relevant.
Test with real readers and iterate.

### Risk: Accessibility of new dynamic content
Path-dependent seeds, dwell-reveal annotations, and liminal transitions
introduce content that changes based on context.
**Mitigation**: All dynamic content must be in the DOM (not canvas-only),
use `aria-live="polite"` for dynamically appearing content, and provide
equivalent information regardless of interaction path.

### Risk: Motion sensitivity
New animations (scatter-to-text, background shift, liminal transitions) add
motion.
**Mitigation**: All animations gated behind `prefers-reduced-motion`. When
reduced motion is active, scatter-to-text shows final positions immediately,
background shift is static, liminal transition is instant.

## Migration Plan

No migration needed --- all changes are additive. Existing seeds, whispers,
navigation, and routing continue to work unchanged. New capabilities activate
alongside existing ones.

Implementation order follows the research document's tier structure:
1. **Tier 1** (content only): Question-seeds, fourth-wall seeds, dangling
   references, questions-first landing, author marginalia
2. **Tier 2** (small JS/CSS): Path-dependent seeds, liminal transitions,
   ghostfading, engagement state, background temperature shift
3. **Tier 3** (medium JS): Scroll-scrubbed visuals, scatter-to-text,
   dwell-reveal, cross-plateau retrieval, micro-CYOA
4. **Tier 4** (infrastructure): Ghost trails

## Open Questions

- What is the optimal density of fourth-wall seeds per plateau? The research
  suggests 1--2 but this needs real-reader testing.
- Should cross-plateau retrieval moments be opt-in (reader can dismiss) or
  mandatory (always shown)?
- Should ghostfading apply to individual paragraphs or entire seed clusters?
