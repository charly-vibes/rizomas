## 1. Spec updates
- [x] 1.1 MODIFY graph-data Node Positions with clustered layout coordinates
- [x] 1.2 MODIFY navigation Rhizome Mini-Map with progressive edge reveal rules
- [x] 1.3 MODIFY navigation Rhizome Overlay with progressive edge reveal rules
- [x] 1.4 MODIFY landing-page Interactive Network Map with progressive edge reveal

## 2. Implementation — Traversed Edge Derivation
- [x] 2.1 Add `deriveTraversedEdges(trail)` utility: scan `state.tr` consecutive pairs, filter to real graph edges, return `Set<string>` of canonicalized edge keys
- [x] 2.2 Call derivation on route change and pass result to all map renderers

## 3. Implementation — Layout
- [x] 3.1 Update GRAPH.nodes coordinates to clustered positions
- [x] 3.2 Update graph-data spec Node Positions table to match new coordinates

## 4. Implementation — Edge Rendering
- [x] 4.1 Modify `drawGraph()` to accept `traversedEdges` set and skip rendering edges not in the set
- [x] 4.2 Update `buildLandingMap()` to pass traversed edges filter
- [x] 4.3 Update `buildMiniMap()` to pass traversed edges filter
- [x] 4.4 Update `buildRhizomeOverlay()` to pass traversed edges filter

## 5. Verification
- [ ] 5.1 Verify fresh visitor sees only nodes (no edges) on landing page
- [ ] 5.2 Verify navigating between two connected nodes reveals that edge on all map views
- [ ] 5.3 Verify navigating from landing to first plateau does NOT create a traversed edge
- [ ] 5.4 Verify jumping to a non-neighbor via overlay does NOT create a traversed edge (but trail still draws)
- [ ] 5.5 Verify return visitor sees their previously traversed edges (derived from persisted `state.tr`)
- [ ] 5.6 Verify repeated navigation (A→B→A) does not duplicate edges
- [ ] 5.7 Verify mini-map on plateau shows only traversed edges among displayed nodes
- [ ] 5.8 Verify accessibility DOM layer unchanged (all 17 anchors still present and tabbable)
- [ ] 5.9 Verify `prefers-reduced-motion` — edge reveal is instant, no regressions
- [ ] 5.10 Verify node labels and circles are not clipped at 460px and 320px viewport widths
