## ADDED Requirements

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
