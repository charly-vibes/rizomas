## MODIFIED Requirements

### Requirement: Interactive Network Map
The landing page canvas SHALL display all 17 plateau nodes with labels, using the positions defined in graph-data. Only traversed edges SHALL be visible; on a reader's first visit, no edges are shown. Traversed edges are derived from consecutive pairs in `state.tr` that correspond to actual graph edges. Visited nodes SHALL render with dark fill; unvisited nodes SHALL render as outlines. Nodes SHALL be clickable — clicking navigates to the corresponding plateau. Click detection SHALL use distance-to-node hit testing with a 22px radius. The cursor SHALL change to pointer on hover over a node. Mouse event listeners SHALL be attached to the map wrapper element (not the canvas directly) so that the DOM accessibility overlay does not intercept hover detection.

The canvas SHALL have a DOM accessibility layer: a set of anchor elements (one per node) positioned absolutely over their canvas locations. Each anchor SHALL have `aria-label` text including the plateau title and visited status (e.g., "The Next Word, visited"). These anchors provide keyboard tab-order and screen-reader access. The footer note SHALL read "Click or tab to any node to begin." The canvas itself SHALL have `role="img"` and an `aria-label` describing it as a navigation map.

#### Scenario: First visit shows nodes only
- **WHEN** a new reader loads the landing page with no prior history
- **THEN** all 17 nodes render with labels but zero edges are visible.

#### Scenario: Return visit shows traversed edges
- **WHEN** a reader who has previously navigated between 3 pairs of connected nodes returns to the landing page
- **THEN** those 3 edges are visible while the remaining edges are invisible.

#### Scenario: Node click navigates to plateau
- **WHEN** the user clicks the "Next Word" node on the landing map
- **THEN** the application navigates to `#/next-word`

#### Scenario: Hover shows pointer cursor
- **WHEN** the user hovers within 22px of a node center
- **THEN** the cursor changes to pointer

#### Scenario: Hover brightens traversed edges
- **WHEN** the user hovers over a node on the landing page map
- **THEN** traversed edges touching that node brighten to 0.5 opacity; untraversed edges remain invisible.

#### Scenario: Visited nodes are visually distinct
- **WHEN** the user has previously visited 3 plateaus and returns to the landing page
- **THEN** those 3 nodes render with dark fill while the remaining 14 render as outlines

#### Scenario: Map scales on small viewports
- **WHEN** the viewport is narrower than 460px
- **THEN** the canvas scales down proportionally to fit within the viewport

#### Scenario: Map node is keyboard accessible via DOM anchors
- **WHEN** the user tabs through the landing page map
- **THEN** focus moves sequentially through all 17 node anchors, each announcing the plateau title and visited status

#### Scenario: Map node navigates via keyboard
- **WHEN** the user focuses a node anchor and presses Enter
- **THEN** the application navigates to the selected plateau
