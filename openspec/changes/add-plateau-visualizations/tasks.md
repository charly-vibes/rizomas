## 1. Scaffolding
- [ ] 1.1 Add `vizBuilders` dispatch map in `buildPlateauView` mapping plateau IDs to builder functions (initially empty); when a builder exists, call it and pass `element` as `vizContent` and `scrubUpdate` to the existing `buildScrolly` call
- [ ] 1.2 Add an `onStepChange` callback to `buildScrolly` spec interface — the engine calls it inside its existing `onStep` with the active step index, so viz builders can react to step changes
- [ ] 1.3 Add base CSS for visualization panel: canvas fill behavior, slider/toggle styling (44px touch targets, full-width on mobile), common layout patterns using existing custom properties

## 2. Tier 1 — Core Mechanics
- [ ] 2.1 **Next Word visualization**: Implement per plateaus spec visual states 1–3. Author sample content: sentence, candidate tokens with probabilities, temperature-response curves. Map to scrolly steps per design.md step-index mapping.
- [ ] 2.2 **Averaging Problem visualization**: Implement per plateaus spec visual states 1–3. Author sample content: text samples for each style region. Map to scrolly steps per design.md step-index mapping.
- [ ] 2.3 **The Shaping visualization**: Implement per plateaus spec visual states 1–3. Author sample content: prompt, base-model completion, instruction-tuned response, 2–3 rater comparison pairs. Map to scrolly steps per design.md step-index mapping.

## 3. File-Size Gate
- [ ] 3.1 After Tier 1 is complete, measure `index.html` line count. If >5000 lines, introduce a lightweight build step (partial concatenation) before proceeding to Tier 2. Document the decision.

## 4. Tier 2 — Remaining Plateaus (each requires a design pass first)
- [ ] 4.1 **Near-Zero Cost Impact**: Design pass (wireframe-level DOM/canvas structure, sample data), then implement per plateaus spec visual states 1–5.
- [ ] 4.2 **Digital Footprints**: Design pass, then implement per plateaus spec visual states 1–4. Author energy/carbon/water data with source citations.
- [ ] 4.3 **Automation of Cognition**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.4 **Algorithm as Muse**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.5 **Echoes of the Past**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.6 **Learning Machines, Learning Humans**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.7 **Black Box Oracle**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.8 **Artificial Brain**: Design pass, then implement per plateaus spec visual states 1–4.
- [ ] 4.9 **Empathy Machine**: Design pass, then implement per plateaus spec visual states 1–4.

## 5. Integration & Verification
- [ ] 5.1 Verify all 12 visualizations respond correctly to step transitions and scrub progress
- [ ] 5.2 Verify `prefers-reduced-motion` disables animations in all visualizations
- [ ] 5.3 Verify keyboard accessibility for all interactive controls (sliders, toggles, buttons)
- [ ] 5.4 Verify screen reader announces visual state changes via aria-live regions
- [ ] 5.5 Manual cross-browser smoke test (Chrome, Firefox, Safari)
- [ ] 5.6 Verify mobile/responsive behavior: touch targets ≥44px, controls usable in stacked layout
