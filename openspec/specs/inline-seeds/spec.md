# Inline Seeds

## Purpose
Expandable inline content buttons within step text that reveal additional context, implementing the crystallization metaphor. Seeds provide depth without disrupting the reading flow.

## Requirements

### Requirement: Seed Toggle Behavior
Inline seeds SHALL be small interactive elements within step text that toggle between collapsed and expanded states on click. When expanded, a growth zone SHALL animate open to reveal 1–3 sentences of additional context with a left border and indented content. When collapsed, the growth zone SHALL animate closed. Seeds SHALL have a distinct background color (per visual-design palette) and a subtle dotted underline to signal interactivity — background color alone is insufficient as an affordance. Each seed button SHALL have `aria-expanded` set to `true` or `false` reflecting its current state, and the growth zone SHALL have `aria-hidden` toggled accordingly.

#### Scenario: Seed expands on click
- **WHEN** the user clicks an inline seed button
- **THEN** the growth zone expands to reveal additional context with a left border

#### Scenario: Seed collapses on second click
- **WHEN** the user clicks an already-open seed button
- **THEN** the growth zone collapses back to hidden

#### Scenario: Seed is keyboard accessible
- **WHEN** the user tabs to a seed and presses Enter or Space
- **THEN** the seed toggles between expanded and collapsed states

### Requirement: Nested Seeds
A seed's expanded content MAY contain additional seed elements. Parent and child seeds SHALL toggle independently.

#### Scenario: Nested seed expands independently
- **WHEN** a parent seed is open and the user clicks a nested seed within it
- **THEN** the nested seed expands within the parent's growth zone

#### Scenario: Parent closes while nested seed is open
- **WHEN** a parent seed is collapsed while a nested seed inside it is open
- **THEN** the parent's growth zone collapses, hiding the nested seed's content. Reopening the parent SHALL restore the nested seed to its previous state.

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
