## ADDED Requirements

### Requirement: Acronym Expansion
Every acronym used in plateau content SHALL be expanded on its first occurrence within each plateau. Because readers may enter at any plateau (rhizomatic navigation), expansion MUST NOT rely on a prior plateau having introduced the term. The expanded form SHALL appear inline as "ACRONYM (Full Name)" on first use; subsequent uses within the same plateau MAY use the acronym alone.

#### Scenario: Acronym expanded on first use
- **WHEN** a plateau contains the acronym "RLHF"
- **THEN** the first occurrence reads "RLHF (Reinforcement Learning from Human Feedback)"

#### Scenario: Acronym in a different plateau is independently expanded
- **WHEN** "RLHF" appears in both "The Shaping" and "What Is Quality?"
- **THEN** each plateau expands "RLHF" on its own first occurrence

#### Scenario: Subsequent uses within same plateau are abbreviated
- **WHEN** "RLHF" appears a second time in the same plateau after being expanded
- **THEN** it MAY appear as "RLHF" without expansion

### Requirement: Glossary Seeds for Technical Terms
Technical terms that cannot be replaced with simpler alternatives SHALL be wrapped in a glossary seed — an inline interactive element using the same affordance as content seeds (dotted underline, background color, `aria-expanded`). The glossary seed SHALL expand to reveal a 1–2 sentence plain-language definition. Glossary seeds SHALL be marked with `data-seed-type="glossary"`. Terms that already have an existing explanatory inline seed (per the inline-seeds spec) do not require a separate glossary seed.

#### Scenario: Glossary seed explains a technical term
- **WHEN** the user clicks a glossary seed for "stochastic"
- **THEN** the growth zone expands to reveal a plain-language definition (e.g., "Involving randomness — the model doesn't always pick the most likely next word, which is what makes its output varied and surprising.")

#### Scenario: Glossary seed uses standard seed affordance
- **WHEN** a glossary seed is rendered
- **THEN** it has a dotted underline and background color consistent with other inline seeds

#### Scenario: Glossary seed is accessible
- **WHEN** a screen reader encounters a glossary seed
- **THEN** it announces the term and whether the definition is expanded or collapsed

### Requirement: Plain Language Content Guidelines
Plateau content SHALL prefer plain language over technical jargon wherever possible. When a simpler word or phrase conveys the same meaning, it SHALL be used instead of the technical term. Content authors SHALL avoid assuming prior technical knowledge unless the term is essential to the essay's argument and is accompanied by a glossary seed or explanatory inline seed.

#### Scenario: Replaceable term is simplified
- **WHEN** content uses "probabilistic" where "based on likelihood" conveys the same meaning
- **THEN** the simpler phrasing is used

#### Scenario: Essential term is retained with explanation
- **WHEN** content uses "gradient descent" because it is central to the essay's argument
- **THEN** the term is accompanied by a glossary seed or existing explanatory seed

### Requirement: Jargon Inventory
The project SHALL maintain a jargon inventory listing every technical term and acronym used across all plateaus. Each entry SHALL include: the term, its plain-language definition, its classification (essential or replaceable), and which plateaus use it. The inventory serves as a reference for content authoring and review.

#### Scenario: Inventory covers all plateaus
- **WHEN** the jargon inventory is reviewed
- **THEN** it includes entries for every technical term and acronym found across all 17 plateaus

#### Scenario: Inventory classifies terms
- **WHEN** a term is listed in the inventory
- **THEN** it is marked as either "essential" (must be kept, needs glossary seed) or "replaceable" (should be simplified)
