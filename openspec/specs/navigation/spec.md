# Navigation

## Purpose
The rhizomatic navigation system defining the visual behavior of whispers, trace pips, constellation view, question cards, rhizome mini-map, and rhizome overlay. The scrolly-engine spec owns container creation and lifecycle hooks; this spec owns how navigation elements look and behave. The plateaus spec owns which whispers and question cards appear on each plateau.

## Requirements

### Requirement: Whisper Behavior
Whispers SHALL appear as margin annotations on the right edge of the sticky visual panel at specific scroll steps. Each whisper SHALL contain an italic question prefixed with an arrow and the destination plateau short name in small caps. Whispers SHALL be clickable and navigate to the destination plateau. They SHALL be hidden initially and fade in when their associated step is reached. All whispers SHALL hide on the final step (replaced by the constellation). Whispers SHALL be positioned absolutely within the visual panel, spaced evenly across the vertical range of the panel. Whisper appearance and entrance animation timings are defined in the visual-design spec.

#### Scenario: Whisper fades in on step
- **WHEN** the user scrolls to a step with an associated whisper
- **THEN** the whisper fades in at the right edge of the visual panel

#### Scenario: Whisper navigates on click
- **WHEN** the user clicks a whisper
- **THEN** the application navigates to the whisper's destination plateau

#### Scenario: Whispers hide on final step
- **WHEN** the user reaches the final step of a scrolly plateau
- **THEN** all whispers are hidden and replaced by the constellation

#### Scenario: Whisper is keyboard accessible
- **WHEN** the user tabs to a visible whisper and presses Enter
- **THEN** the application navigates to the whisper's destination plateau

### Requirement: Trace Pips
A vertical rail of small dots SHALL appear on the right edge of the visual panel, one pip per whisper. A pip SHALL light up when its corresponding whisper becomes visible, providing visual accumulation of connections discovered during reading. Trace pips SHALL reset when the user navigates to a different plateau.

#### Scenario: Pip accumulates as whispers appear
- **WHEN** three whispers have become visible during a reading session
- **THEN** three trace pips are lit

#### Scenario: Pips reset on route change
- **WHEN** the user navigates from one plateau to another
- **THEN** all trace pips are reset to unlit for the new plateau's whisper set

### Requirement: Constellation View
When the final step of a scrolly plateau is reached, the visual panel SHALL transition to a constellation view. The current node SHALL appear centered as a solid dot with bold name. Connected nodes SHALL be arranged radially with equal angle spacing. SVG lines SHALL connect the center to each destination. Each destination SHALL show an outline dot, the whisper question text, and the plateau short name. All destination nodes SHALL be clickable for navigation. Constellation fade timing is defined in the visual-design spec.

#### Scenario: Constellation replaces visual on final step
- **WHEN** the user reaches the final step
- **THEN** visual elements fade out, whispers and trace rail hide, and the constellation fades in showing the current node and its connections

#### Scenario: Constellation node navigates on click
- **WHEN** the user clicks a destination node in the constellation
- **THEN** the application navigates to that plateau

#### Scenario: Constellation node is keyboard accessible
- **WHEN** the user tabs to a constellation destination and presses Enter
- **THEN** the application navigates to that plateau

#### Scenario: Constellation handles varying connection counts
- **WHEN** a plateau has 6 connections versus one with 3
- **THEN** both constellations render with radially-spaced nodes without overlapping labels

### Requirement: Question Cards
The final step's scrolling text side SHALL contain clickable question cards. Each card SHALL display an italic question and a small caps destination name, with a border and hover state. Cards SHALL link via hash routes. Simple plateaus SHALL use question cards as their sole navigation mechanism. Card destinations are defined per-plateau in the plateaus spec.

#### Scenario: Question card navigates
- **WHEN** the user clicks a question card
- **THEN** the application navigates to the card's destination plateau

#### Scenario: Question card is keyboard accessible
- **WHEN** the user tabs to a question card and presses Enter
- **THEN** the application navigates to the card's destination plateau

### Requirement: Rhizome Mini-Map
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 8 nodes and all edges, with visited nodes as dark fill and unvisited as outline. On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle.

#### Scenario: Mini-map shows full graph on landing
- **WHEN** the user is on the landing page
- **THEN** the mini-map shows all 8 nodes with visited/unvisited distinction and all edges

#### Scenario: Mini-map shows local context on plateau
- **WHEN** the user is on a plateau
- **THEN** the mini-map shows only the current node and its direct connections

#### Scenario: Mini-map click opens overlay
- **WHEN** the user clicks the mini-map
- **THEN** the rhizome overlay opens

#### Scenario: Mini-map is keyboard accessible
- **WHEN** the user tabs to the mini-map and presses Enter
- **THEN** the rhizome overlay opens

### Requirement: Rhizome Overlay
A full-screen modal with frosted backdrop SHALL display a larger canvas (max 700x550px) showing all nodes and edges. The navigation trail SHALL be drawn as a faint path connecting visited nodes in chronological order (color defined in visual-design). All nodes SHALL be clickable for navigation. The overlay SHALL close via close button, backdrop click, or Escape key. On viewports smaller than the max canvas size, the canvas SHALL scale down proportionally.

#### Scenario: Overlay shows full graph with trail
- **WHEN** the user opens the rhizome overlay after visiting 3 plateaus
- **THEN** all 8 nodes are shown with a trail path connecting the 3 visited nodes in order

#### Scenario: Overlay closes on Escape
- **WHEN** the user presses the Escape key while the overlay is open
- **THEN** the overlay closes and returns to the current view

#### Scenario: Overlay scales on small viewports
- **WHEN** the overlay opens on a 500px-wide viewport
- **THEN** the canvas scales down proportionally to fit within the viewport
