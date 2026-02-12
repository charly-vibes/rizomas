## MODIFIED Requirements

### Interaction Model: Crystallization
Each plateau SHALL follow the crystallization model, extended with **configuration**:
- **Seed-based Exploration**: Plateaus SHALL initially present a sparse field of "seed" concepts or questions.
- **Outward Growth**: Engaging with a seed SHALL cause content (text or interactives) to expand outwards or in-place, not navigate away or simply un-hide a large block of text.
- **Recursive Depth**: Expanded content ("facets") MAY contain further inline seeds that can be crystallized recursively.
- **Configuration**: The reader's path through the rhizome SHALL change what content appears. Seeds MAY show different content based on visit history (path-dependent seeds per inline-seeds spec). Whispers MAY acknowledge the reader's specific journey. The interaction model shifts from Aarseth's "explorative" function (user chooses path through pre-existing content) to "configurative" (user's actions change the content, not just the path through it).
- **The goal**: To make the experience feel like a territory being revealed AND configured through exploration --- each reading genuinely unique, the medium demonstrating what the content describes.

#### Scenario: Path-dependent content varies by visit history
- **WHEN** two readers with different visit histories open the same seed
- **THEN** they see different content appropriate to their accumulated context

#### Scenario: Exploration remains the primary mode
- **WHEN** a first-time reader with no visit history explores a plateau
- **THEN** all seeds provide self-contained explanations and the experience is complete without configuration effects

---

## ADDED Requirements

### Requirement: Author Marginalia
Simple plateaus MAY include a marginalia column containing brief, parenthetical, author-voice asides. Marginalia SHALL be rendered in a CSS grid layout with the main content column and a narrower margin column. Marginalia text SHALL use `--ink3` color, italic styling, and 0.78rem font size. Marginalia content MAY be path-dependent, appearing only when the reader's visit history makes it relevant (e.g., "If you came here from The Shaping, notice how RLHF doesn't change what the model knows --- it changes which knowledge surfaces" appears only if `state.v` includes `the-shaping`). On viewports below the tablet breakpoint (840px), marginalia SHALL collapse below their associated paragraph as indented blocks. Each marginalia item SHALL be associated with a specific paragraph via `data-margin-for` attribute referencing the paragraph's ID.

#### Scenario: Marginalia appears in margin column
- **WHEN** the reader views a simple plateau with marginalia on a desktop viewport
- **THEN** brief italic asides appear in the right margin beside their associated paragraphs

#### Scenario: Path-dependent marginalia appears conditionally
- **WHEN** the reader has visited "The Shaping" and views "What Is Quality?"
- **THEN** marginalia referencing The Shaping concepts appears in the margin

#### Scenario: Path-dependent marginalia hidden for new readers
- **WHEN** the reader has NOT visited "The Shaping"
- **THEN** the path-dependent marginalia for that reference does not appear

#### Scenario: Marginalia collapses on mobile
- **WHEN** the viewport is below 840px
- **THEN** marginalia appears as indented blocks below their associated paragraphs

---

### Requirement: Micro-CYOA Forks
Plateaus MAY include explicit interpretive forks where the reader chooses between two or more framings of a concept. Following Twine community conventions, forks SHALL be wide and shallow (multiple branches that reconverge) rather than narrow and deep (binary choices leading to exponential paths). Clicking one option SHALL not hide the others --- all options remain available --- but the chosen option SHALL expand first with more visual emphasis (full opacity, `--ink` color). Unchosen options SHALL render at 0.7 opacity with `--ink2` color until clicked. The reader's choice creates commitment (Cialdini's consistency principle) without punishment --- no content is lost. Fork containers SHALL use `role="group"` with `aria-label` describing the choice. Each option SHALL be a focusable button.

#### Scenario: Fork presents interpretive choice
- **WHEN** the reader reaches a CYOA fork in "The Understanding Illusion"
- **THEN** two options are presented: "The model understands nothing" and "The model understands differently"

#### Scenario: Chosen option expands with emphasis
- **WHEN** the reader clicks "The model understands differently"
- **THEN** that option's content expands at full opacity and the other option remains available at reduced opacity

#### Scenario: All options remain accessible
- **WHEN** the reader has chosen one option
- **THEN** they can still click the other option to expand it

#### Scenario: Fork is keyboard accessible
- **WHEN** the user tabs to a fork group
- **THEN** each option is focusable and activatable via Enter or Space

---

### Requirement: Scatter-to-Text Animation
The "Weight of Words" plateau's "Structure as Byproduct" section MAY use a scatter-to-text animation in the visual panel. Key terms (e.g., "syntax," "semantics," "reasoning," "facts") SHALL begin scattered randomly across the visual panel as individually positioned word elements. As the reader scrolls through the gradient descent explanation, the words SHALL animate toward organized positions --- first clustering by relatedness, then arranging into readable sentences. The animation SHALL advance proportionally to scroll position (scroll-scrubbed, not time-based). The visual IS the concept: structure emerging from the learning process. Words SHALL be absolutely positioned `<span>` elements within the visual panel. Initial positions SHALL be deterministic (seeded by word content) to ensure consistency across page loads. When `prefers-reduced-motion` is active, words SHALL display in their final positions immediately with no animation.

#### Scenario: Words begin scattered
- **WHEN** the reader enters the "Structure as Byproduct" section
- **THEN** key terms are scattered across the visual panel in seemingly random positions

#### Scenario: Words gather on scroll
- **WHEN** the reader scrolls through the gradient descent explanation
- **THEN** the scattered words animate toward organized, readable positions proportionally to scroll progress

#### Scenario: Reduced motion shows final positions
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** words display in their final readable positions immediately
