## MODIFIED Requirements
### Requirement: Rhizome Mini-Map
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 17 nodes and all edges, with visited nodes as dark fill (`--ink`) and unvisited as outline (`--ink3` stroke, `--paper` fill). On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle. The mini-map container SHALL include a focusable button element with `aria-label="Open navigation map"` so keyboard and screen-reader users can activate the overlay without relying on canvas hit-testing.

Edges between nodes SHALL render as quadratic bezier curves (not straight lines). The curve control point SHALL be offset perpendicular to the edge midpoint. Unvisited-node edges SHALL use `--ink4` at reduced opacity (0.06). Edges touching visited nodes SHALL use `--ink4` at opacity 0.25.

On plateaus, the active node SHALL display a radial gradient glow (center: `--ink` at 0.9 opacity, edge: transparent) extending 3px beyond the node radius, providing a soft "you are here" presence.

When `prefers-reduced-motion` is not active, nodes SHALL exhibit a subtle ambient breathing animation: a sinusoidal opacity oscillation with a 5s period and ±0.08 maximum delta, applied only to node fill opacity. The animation SHALL be paused via IntersectionObserver when the mini-map is not visible in the viewport. On mobile (mini-map collapsed to circle), the breathing animation SHALL be disabled.

When the reader has visited 2 or more plateaus, the mini-map SHALL render a faint journey trail connecting visited nodes in chronological order (using `state.tr`). The trail SHALL use `--acc` color at 0.2 opacity with curved segments matching the edge style.

On hover, the mini-map container SHALL subtly brighten (border opacity increases to `--ink3`). The mini-map instance SHALL persist across route changes to enable smooth context transitions; when navigating between plateaus, the highlighted nodes and edge filter SHALL crossfade over 0.3s rather than snapping.

#### Scenario: Mini-map shows local context on plateau
- **WHEN** the user is on a plateau
- **THEN** the mini-map shows only the current node and its direct connections.

#### Scenario: Mini-map click opens overlay
- **WHEN** the user clicks the mini-map
- **THEN** the rhizome overlay opens.

#### Scenario: Unvisited nodes render softly
- **WHEN** the mini-map renders nodes that have not been visited
- **THEN** they appear as outlines using `--ink3` stroke and `--paper` fill, not hard black.

#### Scenario: Active node glows on plateau
- **WHEN** the user is viewing a plateau
- **THEN** the current node displays a soft radial gradient glow extending beyond its radius.

#### Scenario: Breathing animation is ambient
- **WHEN** `prefers-reduced-motion` is not active and the mini-map is visible
- **THEN** node fill opacity oscillates with a 5s period and ±0.08 delta.

#### Scenario: Breathing pauses when not visible
- **WHEN** the mini-map scrolls out of view or the tab is backgrounded
- **THEN** the breathing animation loop is paused to conserve resources.

#### Scenario: Reduced motion disables breathing
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** no breathing animation runs; nodes render at static opacity.

#### Scenario: Journey trail appears after second visit
- **WHEN** the reader has visited 2 or more plateaus
- **THEN** a faint trail in `--acc` at 0.2 opacity connects visited nodes in visit order.

#### Scenario: Smooth context transition between plateaus
- **WHEN** the user navigates from one plateau to another
- **THEN** the mini-map crossfades between the two local contexts over 0.3s.
