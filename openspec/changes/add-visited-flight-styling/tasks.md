## 1. Implementation
- [ ] 1.1 Add a utility function `getFlightOpacity(state, plateauId)` that returns an opacity value (0.45–1.0) based on how many jumps ago the destination was last visited in `state.tr`. Uses the same positional interpolation pattern as the mini-map trail (`t = i / segCount`): most recent visit → 0.45, oldest trail entry → ~0.92, unvisited → 1.0.
- [ ] 1.2 In `buildScrolly`, when creating question cards, look up each `card.to` in state and apply the recency opacity to the card element.
- [ ] 1.3 In the simple plateau question-card loop (~line 3698), apply the same recency opacity.
- [ ] 1.4 Add a CSS transition on `.question-card` opacity so the effect feels organic (use existing `--t-ghostfade` timing).
- [ ] 1.5 Ensure `prefers-reduced-motion` disables the opacity transition (instant apply is fine, just no animation).
- [ ] 1.6 Manual browser test: visit several plateaus, confirm cards fade proportionally to trail distance and restore as more jumps are made.
