## MODIFIED Requirements

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
