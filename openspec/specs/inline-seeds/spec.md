# Inline Seeds

## Purpose
Inline content buttons within step text that reveal additional context in a floating popover, implementing the crystallization metaphor. Seeds provide depth without disrupting the reading flow or paragraph layout.
## Requirements
### Requirement: Seed Toggle Behavior
Inline seeds SHALL be small interactive elements within step text that toggle a floating popover on click. The seed button SHALL remain inline within the paragraph text flow and SHALL NOT disrupt paragraph layout when the popover is shown. When activated, a popover SHALL appear as a fixed-position floating panel near the seed button, revealing 1–3 sentences of additional context. The popover SHALL fade in with a subtle vertical translation animation. When deactivated, the popover SHALL fade out. Only one seed popover SHALL be open at a time — opening a new seed SHALL close any previously open popover. Seeds SHALL have a distinct background color (per visual-design palette) and a subtle dotted underline to signal interactivity — background color alone is insufficient as an affordance. Each seed button SHALL have `aria-expanded` set to `true` or `false` reflecting its current state, and the popover SHALL have `aria-hidden` toggled accordingly. The popover SHALL close when clicking outside it or pressing Escape.

#### Scenario: Seed opens popover on click
- **WHEN** the user clicks an inline seed button
- **THEN** a floating popover appears near the button with additional context

#### Scenario: Seed closes popover on second click
- **WHEN** the user clicks an already-open seed button
- **THEN** the popover fades out

#### Scenario: Popover closes on outside click
- **WHEN** a popover is open and the user clicks outside of it
- **THEN** the popover closes

#### Scenario: Popover closes on Escape
- **WHEN** a popover is open and the user presses Escape
- **THEN** the popover closes

#### Scenario: Only one popover open at a time
- **WHEN** the user clicks a seed while another seed's popover is open
- **THEN** the previous popover closes and the new one opens

#### Scenario: Seed is keyboard accessible
- **WHEN** the user tabs to a seed and presses Enter or Space
- **THEN** the seed toggles the popover between open and closed states

#### Scenario: Popover auto-positions
- **WHEN** there is not enough space below the seed button
- **THEN** the popover appears above the button instead

### Requirement: Nested Seeds
A seed's expanded content MAY contain additional seed elements. Parent and child seeds SHALL toggle independently.

#### Scenario: Nested seed expands independently
- **WHEN** a parent seed is open and the user clicks a nested seed within it
- **THEN** the nested seed opens its own popover

#### Scenario: Parent closes while nested seed is open
- **WHEN** a parent seed is collapsed while a nested seed inside it is open
- **THEN** the parent's popover closes. Reopening the parent SHALL restore the nested seed to its previous state.

### Requirement: Seed Content and Placement
The following seeds SHALL exist in the specified scrolly plateaus:

In "The Next Word":
- "tokens" — explains subword tokenization
- "everyone and no one" — links to the averaging problem
- "context" — explains context window limits

In "The Averaging Problem":
- "conditional on your input" — regression to mean

In "The Shaping":
- "coordinates in pattern-space" — few-shot prompting as location in pattern space
- "agreeable" — sycophancy in RLHF

#### Scenario: Tokens seed provides tokenization explanation
- **WHEN** the user clicks the "tokens" seed in The Next Word
- **THEN** an explanation of subword tokenization is revealed

#### Scenario: Seed is discoverable in context
- **WHEN** the user reads a step containing a seed
- **THEN** the seed is visually distinguishable from surrounding text via background color and dotted underline

#### Scenario: Screen reader announces seed state
- **WHEN** a screen reader encounters a seed button
- **THEN** it announces the seed label and whether it is expanded or collapsed

### Requirement: Seed Content — Existing Simple Plateaus
The following seeds SHALL exist in the specified simple plateaus:

In "The Weight of Words":
- "pretraining" — explains the foundational training stage where models learn language by predicting the next word
- "gradient descent" — explains the iterative optimization process of guessing, checking, and correcting
- "emergent properties" — explains complex abilities that arise from simpler interactions at scale

In "What Is Quality?":
- "RLHF" — explains Reinforcement Learning from Human Feedback and the reward model process
- "WEIRD bias" — explains how rater demographics skew models toward Western, Educated, Industrialized, Rich, and Democratic norms
- "Goodhart's Law" — explains how optimizing for proxy metrics leads to unintended consequences like sycophancy
- "Constitutional AI" — explains the alternative alignment approach using written principles

In "The Understanding Illusion":
- "Chinese Room" — explains Searle's thought experiment about symbol manipulation without understanding
- "stochastic parrot" — explains the critique that LLMs merely stitch together plausible text sequences
- "Othello-GPT" — explains the experiment showing models can build internal world representations

In "The Field Guide":
- "induction heads" — explains the specific neural circuits enabling few-shot learning via pattern detection
- "hallucinate facts" — explains the phenomenon of confident but fabricated AI output
- "cognitive load" — explains the mental effort of processing information and how AI affects it

In "The Tool-User":
- "ReAct" — explains the reasoning-and-acting framework for tool-using AI agents
- "Mixture-of-Experts (MoE)" — explains the modular architecture where specialized expert networks handle different tasks
- "static knowledge base" — explains the limitation of older LLMs confined to their training data

#### Scenario: Simple plateau seeds are discoverable
- **WHEN** the user reads a simple plateau containing inline seeds
- **THEN** each seed is visually distinguishable via background color and dotted underline

#### Scenario: Simple plateau seeds expand on click
- **WHEN** the user clicks a seed in a simple plateau
- **THEN** a popover appears with explanatory content

---

### Requirement: Seed Content — The Algorithm as Muse
The following seeds SHALL exist in "The Algorithm as Muse":
- "writer's block" — explains the temporary creative impasse and how LLMs can help overcome it
- "copyright laws" — explains legal rights for original works and the evolving application to AI-generated content
- "homogenization of creative output" — explains the risk that widespread AI use reduces diversity and uniqueness of creative expression

#### Scenario: Algorithm as Muse seeds expand on click
- **WHEN** the user clicks a seed in The Algorithm as Muse
- **THEN** a popover appears with explanatory content about creativity and AI

---

### Requirement: Seed Content — Echoes of the Past
The following seeds SHALL exist in "Echoes of the Past":
- "textual corpora" — explains the large structured collections of digital texts used to train language models
- "Eurocentric narratives" — explains how historical accounts centered on European cultures can marginalize other perspectives
- "counter-storytelling" — explains the narrative strategy of challenging dominant stories with alternative perspectives

#### Scenario: Echoes of the Past seeds expand on click
- **WHEN** the user clicks a seed in Echoes of the Past
- **THEN** a popover appears with explanatory content about historical bias

---

### Requirement: Seed Content — Learning Machines, Learning Humans
The following seeds SHALL exist in "Learning Machines, Learning Humans":
- "personalized learning" — explains educational approaches tailored to individual student needs using AI analysis
- "cognitive struggle" — explains the mental effort crucial for developing critical thinking skills
- "educational anxiety" — explains the stress educators experience from rapid AI integration

#### Scenario: Learning Machines seeds expand on click
- **WHEN** the user clicks a seed in Learning Machines, Learning Humans
- **THEN** a popover appears with explanatory content about AI in education

---

### Requirement: Seed Content — The Automation of Cognition
The following seeds SHALL exist in "The Automation of Cognition":
- "white-collar jobs" — explains how intellectual and administrative occupations are newly impacted by AI automation
- "cognitive load" — explains the mental effort used in working memory and how AI can reduce it for human workers
- "predistribution" — explains policies designed to prevent wealth inequality through equitable resource distribution
- "Universal Basic Income (UBI)" — explains the proposed unconditional periodic cash payment as a response to automation

#### Scenario: Automation of Cognition seeds expand on click
- **WHEN** the user clicks a seed in The Automation of Cognition
- **THEN** a popover appears with explanatory content about labor and economics

---

### Requirement: Seed Content — The Black Box Oracle
The following seeds SHALL exist in "The Black Box Oracle":
- "deep learning neural networks" — explains the multi-layered structure that learns complex patterns from data
- "Explainable AI (XAI)" — explains the research field focused on making AI decisions understandable to humans
- "GDPR's 'right to explanation'" — explains the EU regulation granting individuals explanations for automated decisions

#### Scenario: Black Box Oracle seeds expand on click
- **WHEN** the user clicks a seed in The Black Box Oracle
- **THEN** a popover appears with explanatory content about transparency and accountability

---

### Requirement: Seed Content — Digital Footprints
The following seeds SHALL exist in "Digital Footprints":
- "inference phase" — explains the operational stage where a trained model generates outputs, often consuming more lifetime energy than training
- "carbon footprint" — explains the total greenhouse gas emissions from AI activities expressed as CO₂ equivalent
- "Sustainable AI" — explains the approach to developing AI systems that minimizes environmental consequences

#### Scenario: Digital Footprints seeds expand on click
- **WHEN** the user clicks a seed in Digital Footprints
- **THEN** a popover appears with explanatory content about environmental costs

---

### Requirement: Seed Content — The Artificial Brain
The following seeds SHALL exist in "The Artificial Brain":
- "neural networks" — explains the computational models inspired by biological neural networks
- "embodied cognition" — explains the theory that human cognition depends on the body's physical and social interactions
- "qualia" — explains the subjective qualitative properties of experience often cited as absent in AI

#### Scenario: Artificial Brain seeds expand on click
- **WHEN** the user clicks a seed in The Artificial Brain
- **THEN** a popover appears with explanatory content about brain-AI parallels

---

### Requirement: Seed Content — The Empathy Machine?
The following seeds SHALL exist in "The Empathy Machine?":
- "anthropomorphize" — explains the human tendency to attribute emotions and behaviors to non-human entities like AI
- "parasocial relationships" — explains one-sided relationships where emotional energy flows toward an unaware party
- "AI psychosis" — explains the proposed phenomenon where vulnerable individuals misinterpret AI responses as evidence of consciousness

#### Scenario: Empathy Machine seeds expand on click
- **WHEN** the user clicks a seed in The Empathy Machine?
- **THEN** a popover appears with explanatory content about human-AI relationships

---

### Requirement: Seed Content — The Near-Zero Cost Impact
The following seeds SHALL exist in "The Near-Zero Cost Impact":
- "zero marginal cost" — explains how the cost of producing additional digital units approaches zero after initial investment
- "infobesity" — explains the state of being overwhelmed by excessive AI-generated information
- "deepfakes" — explains synthetic media manipulated using AI, often with malicious intent
- "Goodhart's Law" — explains how targeting a measure causes it to lose its value as a measure, applied to AI optimization

#### Scenario: Near-Zero Cost Impact seeds expand on click
- **WHEN** the user clicks a seed in The Near-Zero Cost Impact
- **THEN** a popover appears with explanatory content about AI economics and abundance

---

### Requirement: Question-Seeds
Some inline seeds SHALL present as questions rather than content labels, implementing the mnemonic medium pattern (Matuschak & Nielsen). A question-seed SHALL display its question text as the clickable label (e.g., "What actually gets 'predicted' in next-token prediction?"). On first click, the question-seed SHALL reveal both the information gap the question exposed and the explanatory content. Question-seeds SHALL be marked with `data-seed-type="question"`. The question text SHALL use italic styling to distinguish it from content-seeds. Question-seeds combine information gap theory (Loewenstein), retrieval practice (Bjork), and the mnemonic medium in a single interaction.

#### Scenario: Question-seed reveals answer on click
- **WHEN** the user clicks a question-seed
- **THEN** a popover appears with the answer, and the seed label retains its question form

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

