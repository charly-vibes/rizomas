## ADDED Requirements

### Requirement: Question-Seeds
Some inline seeds SHALL present as questions rather than content labels, implementing the mnemonic medium pattern (Matuschak & Nielsen). A question-seed SHALL display its question text as the clickable label (e.g., "What actually gets 'predicted' in next-token prediction?"). On first click, the question-seed SHALL reveal both the information gap the question exposed and the explanatory content. Question-seeds SHALL be marked with `data-seed-type="question"`. The question text SHALL use italic styling to distinguish it from content-seeds. Question-seeds combine information gap theory (Loewenstein), retrieval practice (Bjork), and the mnemonic medium in a single interaction.

#### Scenario: Question-seed reveals answer on click
- **WHEN** the user clicks a question-seed
- **THEN** the growth zone expands to reveal the answer, and the seed label retains its question form

#### Scenario: Question-seed is visually distinct
- **WHEN** a step contains both content-seeds and question-seeds
- **THEN** question-seeds are distinguishable by italic question text and dotted underline, while content-seeds use their standard label styling

#### Scenario: Screen reader announces question-seed
- **WHEN** a screen reader encounters a question-seed
- **THEN** it announces the question text and its expanded/collapsed state

---

### Requirement: Fourth-Wall Seeds
A maximum of 2 seeds per plateau SHALL be fourth-wall seeds that reflect on the reader's own cognitive process and connect it to the essay's thesis. Fourth-wall seeds SHALL be marked with `data-seed-type="fourth-wall"`. Their expanded content SHALL contain meta-commentary that makes the reader's interaction part of the argument (e.g., reflecting on the information-gap feeling the reader just experienced and comparing it to LLM token prediction). Fourth-wall seeds SHALL use the same visual affordance as standard seeds to avoid telegraphing their nature before click.

#### Scenario: Fourth-wall seed provides meta-commentary
- **WHEN** the user clicks a fourth-wall seed in "The Understanding Illusion"
- **THEN** the expansion discusses the reader's own click behavior in relation to the essay's thesis about comprehension

#### Scenario: Fourth-wall seed density is limited
- **WHEN** a plateau is rendered
- **THEN** it contains no more than 2 fourth-wall seeds

---

### Requirement: Dangling-Reference Seeds
Some seed expansions SHALL trail off into whisper-style links to other plateaus, creating Zeigarnik-effect tension. A dangling-reference seed SHALL be marked with `data-seed-type="dangling"`. Its expanded content SHALL end with an incomplete thought rendered as a whisper link --- italic text that is itself a navigation link to another plateau (e.g., "This connects to something we haven't discussed yet --- how RLHF raters' preferences propagate..." where the trailing phrase links to The Shaping). The trailing reference SHALL use `--ink2` color and italic styling consistent with whisper text per the navigation spec.

#### Scenario: Dangling reference trails into a link
- **WHEN** the user opens a dangling-reference seed
- **THEN** the expansion ends with an incomplete thought that is a clickable navigation link to another plateau

#### Scenario: Dangling reference link navigates
- **WHEN** the user clicks the trailing whisper link within a dangling-reference seed
- **THEN** the application navigates to the linked plateau

#### Scenario: Dangling reference is keyboard accessible
- **WHEN** the user tabs within an open dangling-reference seed
- **THEN** the trailing whisper link is focusable and activatable via Enter

---

### Requirement: Path-Dependent Seed Content
Seeds MAY display different content depending on the reader's visit history (`state.v`). When a seed's content builder function receives the current visit state, it SHALL branch to produce content appropriate to the reader's accumulated context. If the reader has visited relevant prior plateaus, the content SHALL reference those concepts explicitly. If not, the content SHALL provide self-contained explanation. Path-dependent seeds SHALL use the same visual affordance as standard seeds --- the reader should not know in advance that the content is personalized.

#### Scenario: Seed shows deep content for experienced reader
- **WHEN** a reader who has visited "The Weight of Words" opens a seed in "The Understanding Illusion" about internal representations
- **THEN** the seed content references gradient descent and internal structure from the prior plateau

#### Scenario: Seed shows introductory content for new reader
- **WHEN** a reader who has NOT visited "The Weight of Words" opens the same seed
- **THEN** the seed content provides a self-contained explanation without referencing unseen material

#### Scenario: Path-dependent content is accessible
- **WHEN** a screen reader encounters a path-dependent seed
- **THEN** the announced content matches what is visually displayed, regardless of which branch was taken

---

### Requirement: Visible Engagement State
Each plateau SHALL display a subtle, low-contrast annotation indicating the reader's seed engagement progress (e.g., "4 of 7 seeds opened"). This annotation SHALL be positioned below the last seed cluster on simple plateaus or at the top of the text column on scrolly plateaus. The annotation SHALL update in real time as the reader opens seeds. It SHALL use `--ink3` color and small font size (0.72rem) to remain peripheral. The engagement state SHALL be announced to screen readers via `aria-live="polite"` when it updates.

#### Scenario: Engagement state displays seed count
- **WHEN** the reader has opened 3 of 5 seeds on a plateau
- **THEN** a subtle annotation reads "3 of 5 seeds opened"

#### Scenario: Engagement state updates on seed open
- **WHEN** the reader opens a previously unopened seed
- **THEN** the annotation count increments

#### Scenario: Engagement state is not gamified
- **WHEN** the reader has opened all seeds on a plateau
- **THEN** the annotation reads "7 of 7 seeds opened" with no additional reward, badge, or celebration
