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
A fixed-position canvas element (160x120px) SHALL appear at the bottom-right of the viewport. On the landing page, it SHALL show all 17 nodes and all edges, with visited nodes as dark fill (`--ink`) and unvisited as outline (`--ink3` stroke, `--paper` fill). On a plateau, it SHALL show the current node (large, filled) and directly connected nodes only. Clicking the mini-map SHALL open the rhizome overlay. On mobile viewports (per visual-design breakpoints), the mini-map SHALL collapse to a small circle. The mini-map container SHALL include a focusable button element with `aria-label="Open navigation map"` so keyboard and screen-reader users can activate the overlay without relying on canvas hit-testing.

Edges between nodes SHALL render as quadratic bezier curves (not straight lines). The curve control point SHALL be offset perpendicular to the edge midpoint. Unvisited-node edges SHALL use `--ink4` at reduced opacity (0.06). Edges touching visited nodes SHALL use `--ink4` at opacity 0.25.

On plateaus, the active node SHALL display a radial gradient glow (center: `--ink` at 0.9 opacity, edge: transparent) extending 3px beyond the node radius, providing a soft "you are here" presence.

When `prefers-reduced-motion` is not active, nodes SHALL exhibit a subtle ambient breathing animation: a sinusoidal opacity oscillation with a 5s period and ±0.08 maximum delta, applied only to node fill opacity. The animation SHALL be paused via IntersectionObserver when the mini-map is not visible in the viewport. On mobile (mini-map collapsed to circle), the breathing animation SHALL be disabled.

When the reader has visited 2 or more plateaus, the mini-map SHALL render a fading journey trail connecting visited nodes in chronological order (using `state.tr`). Each trail segment SHALL be drawn individually with opacity and line width increasing from oldest to most recent: the earliest segment uses `--acc` at 0.06 opacity and 1px width, ramping linearly to 0.28 opacity and 2.2px width at the most recent segment. Curved segments SHALL match the edge style.

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

#### Scenario: Journey trail fades with distance
- **WHEN** the reader has visited 4 plateaus in sequence
- **THEN** the trail segment between the 1st and 2nd plateau is faint (0.06 opacity, 1px), and the segment between the 3rd and 4th is strong (0.28 opacity, 2.2px).

#### Scenario: Smooth context transition between plateaus
- **WHEN** the user navigates from one plateau to another
- **THEN** the mini-map crossfades between the two local contexts over 0.3s.

---

### Requirement: Rhizome Overlay
A full-screen modal with frosted backdrop SHALL display a larger canvas (max 700x550px) showing all nodes and edges with curved bezier edges matching the mini-map style. The navigation trail SHALL be drawn as a fading path connecting visited nodes in chronological order (same per-segment fade as the mini-map trail). The overlay SHALL close via close button, backdrop click, or Escape key. On viewports smaller than the max canvas size, the canvas SHALL scale down proportionally. The overlay SHALL set `role="dialog"` and `aria-modal="true"`, trap focus within it while open, and return focus to the trigger element on close.

When the user hovers over a node on the overlay canvas, the node's label (or short question) SHALL appear beside it, matching the home map hover behavior. The hover state SHALL also brighten connected edges.

The overlay SHALL include a DOM accessibility layer: a set of visually-hidden anchor elements (one per node, `role="link"`) positioned over their canvas locations. These anchors provide keyboard tab-order and screen-reader announcements (e.g., "Next Word, visited" or "Steering, not visited") without duplicating the visual rendering. All node navigation SHALL work through these anchors rather than canvas click detection alone.

#### Scenario: Overlay shows full graph with trail
- **WHEN** the user opens the rhizome overlay after visiting 3 plateaus
- **THEN** all 17 nodes are shown with a trail path connecting the 3 visited nodes in order.

#### Scenario: Overlay node hover shows label
- **WHEN** the user hovers over a node on the overlay canvas
- **THEN** the node's label or short question appears beside it and connected edges brighten.

#### Scenario: Overlay closes on Escape
- **WHEN** the user presses the Escape key while the overlay is open
- **THEN** the overlay closes and focus returns to the mini-map button.

### Requirement: Landing Page Map
The landing page SHALL display a canvas-based graph map showing all 17 nodes and all edges with labels. Node positions SHALL use organic, asymmetric coordinates — no grid alignment or mirror symmetry — to reinforce the rhizomatic nature of the content. When the user hovers over a node, the node's label SHALL switch to its short question, connected edges SHALL brighten, and the cursor SHALL change to pointer. Clicking a node SHALL navigate to that plateau. Mouse event listeners SHALL be attached to the map wrapper element (not the canvas directly) so that the DOM accessibility overlay does not intercept hover detection.

#### Scenario: Landing map hover shows question
- **WHEN** the user hovers over a node on the landing page map
- **THEN** the node's short question replaces its label and connected edges brighten.

#### Scenario: Landing map node positions are organic
- **WHEN** the landing page map renders
- **THEN** nodes are positioned with irregular, non-symmetric coordinates that avoid grid alignment.

---

### Requirement: Liminal Transitions
When navigating between plateaus, the application SHALL display a transitional moment lasting 500ms--1s. A frosted overlay SHALL appear centered on the viewport, displaying the connecting question (the whisper text or question card text that triggered the navigation). The transition sequence SHALL be: (1) current view begins fading out, (2) frosted overlay fades in over 200ms showing the connecting question centered in italic text, (3) overlay holds for 500ms, (4) overlay fades out over 200ms as the new plateau fades in. The connecting question SHALL use `--ink` color at 1.1rem on a frosted `--paper` background. When `prefers-reduced-motion` is active, the liminal transition SHALL be skipped entirely --- navigation SHALL be instant. When navigation is triggered from the landing page map (no connecting question), the destination plateau's entry question SHALL be used instead. The overlay SHALL not trap focus --- it is a passive visual transition, not a dialog.

#### Scenario: Whisper-triggered navigation shows connecting question
- **WHEN** the user clicks a whisper linking to "The Shaping"
- **THEN** a frosted overlay appears with the whisper's question text centered, holds briefly, then fades to reveal The Shaping

#### Scenario: Question card navigation shows card question
- **WHEN** the user clicks a question card with text "What happened between raw autocomplete and helpful assistant?"
- **THEN** the liminal transition displays that question before revealing the destination plateau

#### Scenario: Landing page navigation uses entry question
- **WHEN** the user clicks a node on the landing page map
- **THEN** the liminal transition displays the destination plateau's entry question

#### Scenario: Reduced motion skips liminal transition
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** navigation is instant with no liminal overlay

---

### Requirement: Ghostfading Visited Concepts
Sections of text that cover concepts the reader has encountered in other plateaus SHALL render with subtly reduced opacity (0.85). Ghostfading SHALL be applied at the paragraph level based on a mapping between plateau concepts and text sections. The mapping SHALL be defined in the plateaus spec as `ghostfade` annotations on relevant paragraphs. Ghostfading signals "you've been near this idea before" without hiding content. The opacity reduction SHALL be applied via a CSS class (`.ghostfaded`) and SHALL NOT affect interactive elements (seeds, whisper links) within the ghostfaded section. When `prefers-reduced-motion` is active, ghostfading SHALL be applied instantly (no transition). Ghostfading SHALL not alter the DOM text or screen-reader announcements --- it is a purely visual signal.

#### Scenario: Visited concept paragraph is ghostfaded
- **WHEN** the reader has visited "The Weight of Words" and reads a paragraph in "The Averaging Problem" about training data distribution
- **THEN** that paragraph renders at 0.85 opacity

#### Scenario: Unvisited concept is not ghostfaded
- **WHEN** the reader has NOT visited "The Weight of Words"
- **THEN** the same paragraph renders at full opacity

#### Scenario: Interactive elements within ghostfaded text remain full opacity
- **WHEN** a ghostfaded paragraph contains an inline seed
- **THEN** the seed button renders at full opacity against the slightly faded text

---

### Requirement: Dwell-Reveal Annotations
If the reader holds their cursor still over a paragraph for 3 or more seconds (indicating careful reading), a subtle annotation SHALL appear in the margin. Dwell-reveal annotations reward attentive reading and are invisible to skimmers. The annotation SHALL fade in over 0.4s using `--ink3` color and italic styling, positioned in the right margin (scrolly plateaus) or left margin (simple plateaus). The dwell timer SHALL be implemented via `mousemove` event tracking --- if no `mousemove` fires for 3 seconds while the cursor is within a paragraph's bounding box, the annotation appears. Each paragraph SHALL trigger its dwell annotation at most once per page visit. On mobile viewports (below 480px), dwell-reveal annotations SHALL be disabled (no hover capability). Dwell annotations SHALL use `aria-live="polite"` to be announced by screen readers when they appear.

#### Scenario: Annotation appears after 3-second dwell
- **WHEN** the reader holds their cursor still over a paragraph for 3 seconds
- **THEN** a marginal annotation fades in beside that paragraph

#### Scenario: Quick scroll does not trigger annotation
- **WHEN** the reader scrolls past a paragraph without pausing
- **THEN** no dwell annotation appears

#### Scenario: Annotation appears only once per visit
- **WHEN** the reader dwells on a paragraph, sees its annotation, scrolls away, and returns to dwell again
- **THEN** the annotation is still visible but does not re-animate

#### Scenario: Mobile disables dwell annotations
- **WHEN** the viewport is below 480px
- **THEN** dwell-reveal annotation logic is not activated

---

### Requirement: Cross-Plateau Retrieval Moments
After the reader has visited 3 or more plateaus, the application MAY surface a brief interstitial retrieval moment when entering a new plateau. The retrieval moment SHALL appear as a subtle, dismissible card at the top of the plateau content, containing a question that references a concept from a previously visited plateau and asks the reader to connect it to the current plateau (e.g., "Earlier, you explored how temperature affects word choice. How does that connect to what you're about to read?"). The retrieval moment SHALL appear at most once per plateau visit and SHALL not appear on the reader's first 2 plateaus. It SHALL be dismissible via a close button or by scrolling past it. The retrieval card SHALL use `--seed` background color and `--ink2` text color, with a subtle top border in `--ink4`. It SHALL use `role="note"` and `aria-label="Retrieval moment"` for screen readers.

#### Scenario: Retrieval moment appears on 4th plateau
- **WHEN** a reader who has visited 3 plateaus navigates to a 4th
- **THEN** a retrieval moment card appears at the top of the plateau referencing a concept from a previously visited plateau

#### Scenario: Retrieval moment does not appear on early visits
- **WHEN** a reader navigates to their 2nd plateau
- **THEN** no retrieval moment is shown

#### Scenario: Retrieval moment is dismissible
- **WHEN** the reader clicks the close button on a retrieval moment
- **THEN** the card fades out and does not reappear on this plateau visit

#### Scenario: Retrieval moment dismissed by scroll
- **WHEN** the reader scrolls past the retrieval moment without clicking close
- **THEN** the card remains visible but does not obstruct reading

---

### Requirement: Ghost Trails (Future — Tier 4)
The constellation overlay MAY display faint ghost trails representing the most common 3--5 reading paths taken by previous readers. Ghost trails SHALL be rendered as faint curved lines (opacity 0.15, `--ink3` color) connecting nodes in sequence on the constellation canvas. Trail data SHALL be anonymized (no PII) and consist only of ordered sequences of plateau IDs. This feature requires a minimal backend for data collection and periodic compilation of common paths. Ghost trails create a meta-connection to the project's theme: reading paths as probability distributions mirror what LLMs do with text. Ghost trails are deferred until backend infrastructure is available. The specification is included here for completeness and future implementation.

#### Scenario: Ghost trails render on constellation overlay
- **WHEN** the user opens the rhizome overlay and ghost trail data is available
- **THEN** faint curved lines show the 3--5 most common reading paths

#### Scenario: Ghost trails degrade gracefully without data
- **WHEN** ghost trail data is not available (no backend, first deployment)
- **THEN** the constellation overlay renders normally without ghost trails

