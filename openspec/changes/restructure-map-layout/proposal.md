# Change: Restructure map layout into organic clusters with progressive edge reveal

## Why
The current map layout positions 17 nodes in a near-symmetric diamond grid with all 46 edges always visible. Despite the spec calling for "organic, asymmetric" positions, the result reads as a rigid diagram — a table of contents, not a living rhizome. The density of edges (even at low opacity) creates visual noise that overwhelms rather than invites. This contradicts the project's core metaphor: a rhizome grows through encounter, not through pre-drawn lines.

## What Changes
- **graph-data spec**: MODIFY Node Positions to organize nodes into 3–4 thematic clusters with irregular spacing and intentional negative space between clusters. Positions remain normalized 0–1 but shift from grid-like rows to clustered organic groupings.
- **navigation spec**: MODIFY Rhizome Mini-Map and Rhizome Overlay to hide edges by default and reveal them only when the reader traverses them (i.e., navigates between two connected nodes). Untraversed edges are invisible. The map grows with the reader's journey.
- **landing-page spec**: MODIFY Interactive Network Map to show only traversed edges instead of all edges. On first visit, no edges are shown; on return visits, previously traversed edges appear.
- No new state fields required — traversed edges are derived at runtime from consecutive pairs in `state.tr` that correspond to actual graph edges.

## Impact
- Affected specs: `graph-data`, `navigation`, `landing-page`
- Affected code: `GRAPH.nodes` positions in `index.html`, `drawGraph()` edge rendering logic, `buildLandingMap()`, `buildMiniMap()`, `buildRhizomeOverlay()`
- Subsumes ticket `rizomas-n4l` (edge pruning becomes moot — all edges are hidden until traversed)
- Partially addresses `rizomas-0s2` (overlay becomes more meaningful — shows personal journey map)
- Partially addresses `rizomas-bku` (traversed vs untraversed paths create natural visual differentiation)
- **No breaking changes** to routing, state schema, or accessibility DOM layers
- Traversed edges derived from `state.tr`: for each consecutive pair `tr[i-1].p → tr[i].p`, if that pair exists in `GRAPH.edges`, the edge is considered traversed. No new persisted state needed.
