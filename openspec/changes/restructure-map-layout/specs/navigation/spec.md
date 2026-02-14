## MODIFIED Requirements

### Requirement: Rhizome Mini-Map
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 17 nodes with only traversed edges visible. On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only, with only traversed edges among those displayed nodes visible. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle. The mini-map container SHALL include a focusable button element with `aria-label="Open navigation map"` so keyboard and screen-reader users can activate the overlay without relying on canvas hit-testing.

An edge is "traversed" when the reader has navigated directly between its two endpoint nodes. Traversed edges SHALL be derived at runtime from consecutive pairs in `state.tr`: for each `i > 0`, if `(tr[i-1].p, tr[i].p)` exists in `GRAPH.edges`, that edge is traversed. Edge keys SHALL be canonicalized (`a < b ? a|b : b|a`) for deduplication. Untraversed edges SHALL NOT be rendered — they are invisible, not dimmed.

Traversed edges SHALL render as quadratic bezier curves using `--ink4`. The resting opacity for traversed edges SHALL be 0.25; edges touching a hovered node SHALL render at 0.5 opacity.

Unvisited-node rendering, active-node glow, breathing animation, journey trail, hover brightening, and smooth context transitions SHALL behave as previously specified.

#### Scenario: Mini-map shows local context on plateau
- **WHEN** the user is on a plateau
- **THEN** the mini-map shows the current node, its direct connections, and only the traversed edges among those displayed nodes.

#### Scenario: Mini-map click opens overlay
- **WHEN** the user clicks the mini-map
- **THEN** the rhizome overlay opens.

#### Scenario: Untraversed edges are invisible
- **WHEN** the mini-map renders and the reader has not navigated between two connected nodes
- **THEN** no edge is drawn between those nodes.

#### Scenario: Traversed edge appears after navigation
- **WHEN** the reader navigates from "Next Word" to "Averaging Problem"
- **THEN** the edge between those two nodes becomes visible on the mini-map.

#### Scenario: Landing to first plateau creates no edge
- **WHEN** the reader clicks a node on the landing page to visit their first plateau
- **THEN** no traversed edge is recorded because the landing page is not a graph node.

#### Scenario: Jump to non-neighbor creates no edge
- **WHEN** the reader uses the overlay to navigate from "Next Word" to "Digital Footprints" (no direct edge)
- **THEN** no traversed edge is recorded, but the journey trail draws a segment between the two visits.

#### Scenario: Repeated navigation does not duplicate edges
- **WHEN** the reader navigates A→B→A
- **THEN** the edge A↔B appears once; no duplicate is created.

#### Scenario: Hovered node brightens traversed edges
- **WHEN** the user hovers over a node on the mini-map
- **THEN** traversed edges touching that node render at 0.5 opacity; untraversed edges remain invisible.

#### Scenario: Active node glows on plateau
- **WHEN** the user is viewing a plateau
- **THEN** the current node displays a soft radial gradient glow extending beyond its radius.

#### Scenario: Breathing animation is ambient
- **WHEN** `prefers-reduced-motion` is not active and the mini-map is visible
- **THEN** node fill opacity oscillates with a 5s period and ±0.08 delta.

#### Scenario: Journey trail fades with distance
- **WHEN** the reader has visited 4 plateaus in sequence
- **THEN** the trail segment between the 1st and 2nd plateau is faint (0.06 opacity, 1px), and the segment between the 3rd and 4th is strong (0.28 opacity, 2.2px).

#### Scenario: Smooth context transition between plateaus
- **WHEN** the user navigates from one plateau to another
- **THEN** the mini-map crossfades between the two local contexts over 0.3s.

#### Scenario: Edge reveal respects reduced motion
- **WHEN** `prefers-reduced-motion` is active and a new edge is traversed
- **THEN** the edge appears instantly at resting opacity (0.25) with no animation.

### Requirement: Rhizome Overlay
A full-screen modal with frosted backdrop SHALL display a larger canvas (max 700x550px) showing all 17 nodes with only traversed edges visible. Traversed edges are derived from `state.tr` using the same algorithm as the mini-map. The navigation trail SHALL be drawn as a fading path connecting visited nodes in chronological order (same per-segment fade as the mini-map trail). Trail segments are drawn between all consecutive visits regardless of graph adjacency. The overlay SHALL close via close button, backdrop click, or Escape key. On viewports smaller than the max canvas size, the canvas SHALL scale down proportionally. The overlay SHALL set `role="dialog"` and `aria-modal="true"`, trap focus within it while open, and return focus to the trigger element on close.

When the user hovers over a node on the overlay canvas, the node's label (or short question) SHALL appear beside it, matching the home map hover behavior. The hover state SHALL brighten connected traversed edges to 0.5 opacity; untraversed edges remain invisible even on hover.

The overlay SHALL include a DOM accessibility layer: a set of visually-hidden anchor elements (one per node, `role="link"`) positioned over their canvas locations. These anchors provide keyboard tab-order and screen-reader announcements (e.g., "Next Word, visited" or "Steering, not visited") without duplicating the visual rendering. All node navigation SHALL work through these anchors rather than canvas click detection alone.

#### Scenario: Overlay shows traversed edges only
- **WHEN** the user opens the rhizome overlay after traversing 5 edges
- **THEN** all 17 nodes are shown but only the 5 traversed edges are visible.

#### Scenario: Overlay node hover brightens traversed edges
- **WHEN** the user hovers over a node on the overlay canvas
- **THEN** the node's label or short question appears beside it and connected traversed edges brighten to 0.5 opacity; untraversed edges remain invisible.

#### Scenario: Overlay closes on Escape
- **WHEN** the user presses the Escape key while the overlay is open
- **THEN** the overlay closes and focus returns to the mini-map button.

#### Scenario: Trail draws between non-neighbor visits
- **WHEN** the reader jumped from "Next Word" to "Digital Footprints" (no direct edge) and opens the overlay
- **THEN** a trail segment connects those two nodes even though no edge is drawn between them.
