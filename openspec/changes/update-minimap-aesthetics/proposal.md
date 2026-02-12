# Change: Update mini-map aesthetic and motion requirements

## Why
The Rhizome Mini-Map spec defines functional behavior (size, position, click-to-overlay) but says nothing about rendering aesthetics or animation. The current implementation uses hard black fills and straight lines, which feels utilitarian and disconnected from the project's rhizomatic philosophy. The mini-map should feel like a living part of the network — organic, ambient, and inviting.

## What Changes
- **navigation spec**: MODIFY the Rhizome Mini-Map requirement to specify soft rendering for unvisited nodes/edges, curved edge rendering, ambient node animation, active-node glow, and journey trail visualization
- **visual-design spec**: MODIFY Motion Timings to add canonical mini-map animation values

## Impact
- Affected specs: navigation, visual-design
- Affected code: `drawGraph()` function, `buildMiniMap()` function in index.html
- No breaking changes — visited node dark fill behavior is preserved per existing spec
