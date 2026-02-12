## MODIFIED Requirements

### Requirement: Rhizome Mini-Map
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 17 nodes and all edges, with visited nodes as dark fill and unvisited as outline. On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle. The mini-map container SHALL include a focusable button element with `aria-label="Open navigation map"` so keyboard and screen-reader users can activate the overlay without relying on canvas hit-testing.

#### Scenario: Mini-map shows local context on plateau
- **WHEN** the user is on a plateau
- **THEN** the mini-map shows only the current node and its direct connections.

#### Scenario: Mini-map click opens overlay
- **WHEN** the user clicks the mini-map
- **THEN** the rhizome overlay opens.

---

### Requirement: Rhizome Overlay
A full-screen modal with frosted backdrop SHALL display a larger canvas (max 700x550px) showing all nodes and edges. The navigation trail SHALL be drawn as a faint path connecting visited nodes in chronological order (color defined in visual-design). The overlay SHALL close via close button, backdrop click, or Escape key. On viewports smaller than the max canvas size, the canvas SHALL scale down proportionally. The overlay SHALL set `role="dialog"` and `aria-modal="true"`, trap focus within it while open, and return focus to the trigger element on close.

The overlay SHALL include a DOM accessibility layer: a set of visually-hidden anchor elements (one per node, `role="link"`) positioned over their canvas locations. These anchors provide keyboard tab-order and screen-reader announcements (e.g., "Next Word, visited" or "Steering, not visited") without duplicating the visual rendering. All node navigation SHALL work through these anchors rather than canvas click detection alone.

#### Scenario: Overlay shows full graph with trail
- **WHEN** the user opens the rhizome overlay after visiting 3 plateaus
- **THEN** all 17 nodes are shown with a trail path connecting the 3 visited nodes in order.

#### Scenario: Overlay closes on Escape
- **WHEN** the user presses the Escape key while the overlay is open
- **THEN** the overlay closes and focus returns to the mini-map button.
