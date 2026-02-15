# Change: Visited-aware styling for Lines of Flight (question cards)

## Why
Question cards (lines of flight) at the bottom of each essay all look identical regardless of whether the reader has already visited the destination plateau. This misses an opportunity to reinforce the reader's sense of their own trail through the rhizome — a core design value. By fading recently-visited destinations and gradually restoring them as the reader makes more jumps, the cards subtly guide re-exploration while honoring the reader's history.

## What Changes
- Question cards linking to already-visited plateaus SHALL render with reduced opacity proportional to how many jumps ago the destination was last visited in the trail (`state.tr`).
- A destination visited on the most recent jump appears most faded; a destination visited many jumps ago appears nearly at full opacity.
- Unvisited destinations remain unchanged (full opacity).
- The recency is measured in **trail position** (ordinal jumps), mirroring the mini-map trail's `t = i / segCount` interpolation pattern — not calendar time.
- The effect is purely visual (CSS opacity) and does not affect accessibility.

## Impact
- Affected specs: `navigation` (Lines of Flight / Question Cards requirement)
- Affected code: `buildScrolly` question-card rendering (~line 1805), simple plateau question-card rendering (~line 3698), and a small utility function to compute jump-based recency opacity from `state.tr`.
