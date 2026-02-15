# Change: Add interactive visualizations to all scrolly plateaus

## Why
Every scrolly plateau spec defines rich interactive visuals (probability bars, sliders, toggles, gauges, timelines) for the scrolly engine's sticky left panel. Currently, none are implemented — all 12 scrolly plateaus render text-only steps with inline seeds but never pass `vizContent` or `scrubUpdate` to `buildScrolly` (which already supports both parameters). The essays read as static text, missing the "explorable explanation" core promise of the project.

## What Changes
- Add a `vizBuilders` dispatch map in `buildPlateauView` that calls per-plateau builder functions and passes their output as `vizContent` / `scrubUpdate` to the existing `buildScrolly` interface
- Implement 12 self-contained visualization builder functions, one per scrolly plateau, each returning `{ element, onStep, scrubUpdate?, cleanup }`
- Add base CSS for the visualization panel (canvas sizing, slider/toggle styling, common layout)
- All visualizations respect `prefers-reduced-motion`, use the `h()` helper for DOM, and follow the existing color palette (`--ink`, `--ink2`, `--acc`, `--seed`)
- Each visualization is scoped to a single plateau with no cross-dependencies

### Scope clarification
Of the 17 plateaus, 12 use the two-column scrolly layout and require interactive visualizations. The remaining 5 (Weight of Words, What Is Quality?, The Understanding Illusion, The Field Guide, The Tool-User) use seed clusters without the scrolly visual panel and are out of scope for this change.

### Plateau visualizations by tier

**Tier 1 — Core mechanics (P1, highest pedagogical value, fully specified):**
1. **Next Word** — Typing cursor, probability distribution bars, temperature dial
2. **Averaging Problem** — Distribution landscape, region sampling, prompt-specificity slider
3. **The Shaping** — Before/after toggle, RLHF rater mini-game

**Tier 2 — Remaining plateaus (P2, require a design pass before implementation):**
4. **Near-Zero Cost Impact** — Cost curve, content flood counter, risk dashboard, historical timeline, strategy landscape
5. **Digital Footprints** — Energy meter, carbon emission counter, resource map, sustainability dashboard
6. **Automation of Cognition** — Task migration flow, productivity-vs-displacement viz, wealth distribution curve, future-of-work landscape
7. **Algorithm as Muse** — Co-writing interface, authorship blur, homogeneity gallery, transparency slider
8. **Echoes of the Past** — Document scanning viz, bias gap highlights, confidence meter, diverging narrative paths
9. **Learning Machines, Learning Humans** — Adaptive learning interface, split view contrast, critical thinking gauge, evolving classroom
10. **Black Box Oracle** — Opaque model viz, XAI illumination, transparency-accuracy slider, accountability chain
11. **Artificial Brain** — Side-by-side neural network comparison, efficiency comparison, divergence diagram, consciousness spectrum
12. **Empathy Machine?** — Chatbot simulation, emotional bond indicators, manipulation warnings, connection spectrum

### File-size gate
After completing Tier 1, evaluate `index.html` file size. The current file is ~4325 lines; the soft limit in project.md is ~1500 (already exceeded). If Tier 1 pushes past ~5000 lines, introduce a lightweight build step (concatenation of partials) before proceeding to Tier 2.

## Impact
- Affected specs: `plateaus` (visual states per plateau)
- Affected code: `buildPlateauView` in `index.html` (add vizBuilders dispatch + pass to existing buildScrolly params), plus 12 new builder functions and base viz CSS
- The scrolly engine already accepts `vizContent` and `scrubUpdate` — no engine changes required
- No breaking changes — additive only
