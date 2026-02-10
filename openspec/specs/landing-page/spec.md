# Landing Page

## Purpose
The entry point of the application, displaying the title and an interactive network map of all plateaus. This is separate from the rhizome mini-map (defined in navigation); the landing page map is a larger, centered canvas that serves as the primary call to action.

## Requirements

### Requirement: Landing Page Content
The landing page (route `#/`) SHALL display the title "How LLMs Actually Work", an italic subtitle, a two-sentence intro paragraph, an interactive canvas network map (460x360px), and a footer note "Click any node to begin."

#### Scenario: Landing page renders on default route
- **WHEN** the user loads the page with no hash or `#/`
- **THEN** the title, subtitle, intro, interactive map, and footer note are displayed

### Requirement: Interactive Network Map
The landing page canvas SHALL display all 8 plateau nodes with labels and all edges, using the positions defined in graph-data. Visited nodes SHALL render with dark fill; unvisited nodes SHALL render as outlines. Nodes SHALL be clickable — clicking navigates to the corresponding plateau. Click detection SHALL use distance-to-node hit testing with a 22px radius. The cursor SHALL change to pointer on hover over a node.

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

#### Scenario: Map node is keyboard accessible
- **WHEN** the user tabs to the map and uses arrow keys or tab to select a node, then presses Enter
- **THEN** the application navigates to the selected plateau
