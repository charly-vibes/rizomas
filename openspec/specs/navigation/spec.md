# Navigation

## Purpose
The rhizomatic navigation system, designed to make the non-linear structure of the content *felt* by the reader. The system is based on a "scattered murmurs → gathered choices" model. During an essay, "whispers" appear as faint suggestions, which then accumulate and converge into a clear branching choice at the end. This makes the final navigation feel like an earned conclusion to the essay, not just a menu.

This spec defines the visual behavior of all navigation elements. The `plateaus` spec owns which connections appear on each plateau.

## Requirements

### Requirement: Scrolly Navigation: Whispers to Constellation
The scrolly plateaus SHALL use a unified navigation system that progresses from whispers to a final constellation view.

1.  **Whispers**: As the user scrolls through an essay's steps, faint, italic questions ("whispers") SHALL appear in the right margin of the visual panel at thematically relevant moments. Each whisper is a clickable line of flight to another plateau.
2.  **Trace Pips**: A vertical rail of small dots SHALL be present on the visual panel's edge. Each pip corresponds to a whisper. As a whisper animates into view, its corresponding pip SHALL light up, creating a visual record of the connections the reader has encountered.
3.  **Constellation Finale**: At the final scroll step, the main visual SHALL crossfade into a local constellation map. The accumulated whispers from the essay SHALL animate to become the labels for the connections on this map. The text side of this final step SHALL display the same questions as clickable **Question Cards**.

#### Scenario: Whispers appear and leave a trace
- **WHEN** a user scrolls to a step that triggers a whisper
- **THEN** the whisper question fades in at the edge of the visual panel, and its corresponding trace pip lights up.

#### Scenario: Final step transforms whispers into a constellation
- **WHEN** the user reaches the final step of a scrolly plateau
- **THEN** the main visual is replaced by the constellation map, and the whispers animate to become the edge labels on that map.

---

### Requirement: Lines of Flight (Question Cards)
The primary mechanism for lateral movement between plateaus SHALL be question cards. These cards represent the "loose threads" of an essay's argument, made tangible.

- For **scrolly plateaus**, these cards appear on the final step, mirroring the questions that appeared as whispers.
- For **simple plateaus**, they appear at the bottom of the essay.

Each card SHALL contain an italic question and the destination plateau's name. They SHALL be clickable and keyboard-accessible, navigating to the destination via its hash route.

#### Scenario: Question card navigates
- **WHEN** the user clicks a question card
- **THEN** the application navigates to the card's destination plateau.

---

### Requirement: Rhizome Mini-Map
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 8 nodes and all edges, with visited nodes as dark fill and unvisited as outline. On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle. The mini-map container SHALL include a focusable button element with `aria-label="Open navigation map"` so keyboard and screen-reader users can activate the overlay without relying on canvas hit-testing.

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
- **THEN** all 8 nodes are shown with a trail path connecting the 3 visited nodes in order.

#### Scenario: Overlay closes on Escape
- **WHEN** the user presses the Escape key while the overlay is open
- **THEN** the overlay closes and focus returns to the mini-map button.
