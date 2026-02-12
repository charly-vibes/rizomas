## 1. State & Infrastructure

- [x] 1.1 Extend `routing-state` to track seed interactions per plateau (`si` key)
- [x] 1.2 Add engagement metrics to state (`eg` key with per-plateau seed counts)

## 2. Tier 1 — Content Changes (Zero Code)

- [x] 2.1 Author question-seed content for each plateau (questions that create information gaps)
- [x] 2.2 Author fourth-wall seed content (1--2 per plateau reflecting on reader behavior)
- [x] 2.3 Author dangling-reference seeds that trail into whisper links
- [x] 2.4 Rewrite landing page to lead with entry questions as primary content
- [x] 2.5 Author marginalia content for simple plateaus (some path-dependent)

## 3. Tier 2 — Small JS/CSS Changes

- [x] 3.1 Implement `data-seed-type` attribute support in seed builder (`question`, `fourth-wall`, `dangling`)
- [x] 3.2 Implement question-seed behavior: show question first, reveal answer on click
- [x] 3.3 Implement fourth-wall seed variant: distinct visual treatment
- [x] 3.4 Implement dangling-reference seeds: trailing whisper links in expansion content
- [x] 3.5 Implement path-dependent seed content: branch on `state.v` in seed builders
- [x] 3.6 Implement liminal transitions: frosted overlay with connecting question during route change
- [x] 3.7 Implement ghostfading: opacity reduction on visited-concept sections
- [x] 3.8 Implement visible engagement state: subtle seed counter per plateau
- [x] 3.9 Implement background temperature shift: `--bg-temp` CSS custom property on scroll
- [x] 3.10 Add marginalia column to simple plateau layout (CSS grid)
- [x] 3.11 Add new motion timings to CSS custom properties

## 4. Tier 3 — Medium JS Changes

- [x] 4.1 Implement scroll-scrubbed visuals in scrolly engine (continuous scroll position tracking)
- [x] 4.2 Implement scatter-to-text animation for "The Weight of Words" visual panel
- [x] 4.3 Implement dwell-reveal annotations (mousemove timer + marginal content)
- [x] 4.4 Implement cross-plateau retrieval moments (interstitial after 3+ visits)
- [x] 4.5 Implement micro-CYOA forks in "The Understanding Illusion" (wide/shallow branching)

## 5. Tier 4 — Infrastructure (Deferred)

- [ ] 5.1 Design minimal analytics schema for anonymous path aggregation
- [ ] 5.2 Implement ghost trail rendering on constellation overlay
- [ ] 5.3 Build lightweight backend for path data collection

## 6. Accessibility & Polish

- [x] 6.1 Ensure all new dynamic content uses `aria-live="polite"`
- [x] 6.2 Verify keyboard accessibility for question-seeds, CYOA forks, marginalia
- [x] 6.3 Test `prefers-reduced-motion` gating on all new animations
- [ ] 6.4 Manual accessibility audit of path-dependent content paths
