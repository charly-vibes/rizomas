# Landing Page

## Purpose
The entry point of the application, displaying the title and an interactive network map of all plateaus. This is separate from the rhizome mini-map (defined in navigation); the landing page map is a larger, centered canvas that serves as the primary call to action.
## Requirements
### Requirement: Landing Page Content
The landing page (route `#/`) SHALL display the title "How LLMs Actually Work", an italic subtitle, a two-sentence intro paragraph, an interactive canvas network map (460x360px), and a footer note "Click any node to begin."

The network map node labels SHALL display each plateau's **entry question** (abbreviated to fit) rather than or in addition to the plateau title. Entry questions serve as the primary navigation driver --- curiosity as the sole reason to click. Node labels SHALL show the short question form (≤40 characters) with the full entry question available as a tooltip (`title` attribute) and screen-reader label. The accessible anchor elements SHALL use the full entry question in their `aria-label` (e.g., "What is an LLM actually doing when it 'talks' to you? — The Next Word, not visited").

#### Scenario: Landing page renders on default route
- **WHEN** the user loads the page with no hash or `#/`
- **THEN** the title, subtitle, intro, interactive map, and footer note are displayed

#### Scenario: Node labels show entry questions
- **WHEN** the landing map renders
- **THEN** each node label displays an abbreviated entry question rather than only the plateau title

#### Scenario: Full question available on hover
- **WHEN** the user hovers over a node
- **THEN** a tooltip shows the full entry question

#### Scenario: Accessible labels include full question
- **WHEN** a screen reader encounters a node anchor
- **THEN** it announces the full entry question, plateau title, and visited status

### Requirement: Interactive Network Map
The landing page canvas SHALL display all 8 plateau nodes with labels and all edges, using the positions defined in graph-data. Visited nodes SHALL render with dark fill; unvisited nodes SHALL render as outlines. Nodes SHALL be clickable — clicking navigates to the corresponding plateau. Click detection SHALL use distance-to-node hit testing with a 22px radius. The cursor SHALL change to pointer on hover over a node.

The canvas SHALL have a DOM accessibility layer: a set of anchor elements (one per node) positioned absolutely over their canvas locations. Each anchor SHALL have `aria-label` text including the plateau title and visited status (e.g., "The Next Word, visited"). These anchors provide keyboard tab-order and screen-reader access. The footer note SHALL read "Click or tab to any node to begin." The canvas itself SHALL have `role="img"` and an `aria-label` describing it as a navigation map.

#### Scenario: Node click navigates to plateau
- **WHEN** the user clicks the "Next Word" node on the landing map
- **THEN** the application navigates to `#/next-word`

#### Scenario: Hover shows pointer cursor
- **WHEN** the user hovers within 22px of a node center
- **THEN** the cursor changes to pointer

#### Scenario: Visited nodes are visually distinct
- **WHEN** the user has previously visited 3 plateaus and returns to the landing page
- **THEN** those 3 nodes render with dark fill while the remaining 5 render as outlines

#### Scenario: Map scales on small viewports
- **WHEN** the viewport is narrower than 460px
- **THEN** the canvas scales down proportionally to fit within the viewport

#### Scenario: Map node is keyboard accessible via DOM anchors
- **WHEN** the user tabs through the landing page map
- **THEN** focus moves sequentially through all 8 node anchors, each announcing the plateau title and visited status

#### Scenario: Map node navigates via keyboard
- **WHEN** the user focuses a node anchor and presses Enter
- **THEN** the application navigates to the selected plateau

