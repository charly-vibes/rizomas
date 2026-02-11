# Plateaus

## Purpose
The 8 content sections (visual essays) of the application. Four are scrolly plateaus with interactive visuals; four are simple prose plateaus. This spec is the authoritative source for per-plateau content, visual states, whisper-step assignments, and question card destinations.

## Requirements

### Requirement: Scrolly Plateau — The Next Word
The "Next Word" plateau (`#/next-word`) SHALL be a full scrolly plateau with 7 steps (6 content + 1 navigation). The visual SHALL progress through the following states, one per step: (1) typing cursor, (2) probability bars animate in, (3) token selected, (4) temperature slider, (5) context-to-prediction diagram, (6) tension question. It SHALL include an interactive temperature slider with 3 stops (safe/balanced/creative) that swaps output text with a fade.

Whisper assignments:
- Step 3: "averaging-problem" — *What does average even mean here?*
- Step 5: "understanding-illusion" — *But does it understand what it's saying?*

Question cards (final step):
- → The Averaging Problem
- → The Understanding Illusion
- → The Weight of Words

#### Scenario: Temperature slider interaction
- **WHEN** the user moves the temperature slider to "creative"
- **THEN** the output text swaps to the creative variant with a fade transition

#### Scenario: Visual state advances per step
- **WHEN** the user scrolls from step 1 to step 2
- **THEN** the visual transitions from typing cursor to probability bars animating in

### Requirement: Scrolly Plateau — The Averaging Problem (MERGED)
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau telling the story of navigating from chaos to specificity. It merges the "Library of Babel" concept with the "Averaging Problem". The visual SHALL progress through these states: (1) A chaotic sea of random characters (The Library), (2) The characters coalesce into a wide, blurry bell curve ("The Average"), (3) A vague prompt fails to narrow the curve, (4) A specific prompt sharpens the curve dramatically, (5) The curve becomes a specific, located point: "you are here."

Whisper assignments:
- Step 1: "next-word" — *How does it pick just one path from the chaos?*
- Step 3: "the-shaping" — *Can we permanently change the average?*
- Step 4: "practical-guide" — *How do I write prompts that do this?*

Question cards (final step):
- → The Next Word
- → The Shaping
- → The Field Guide

#### Scenario: Bell curve sharpens on specific prompt
- **WHEN** the user scrolls from the "vague prompt" step to the "specific prompt" step
- **THEN** the bell curve visual narrows significantly and shifts its center.

#### Scenario: Visual transitions from Library to Average
- **WHEN** the user scrolls from step 1 to step 2
- **THEN** the chaotic character visual fades and reorganizes into a wide bell curve.

### Requirement: Scrolly Plateau — The Shaping
The "Shaping" plateau (`#/the-shaping`) SHALL be a full scrolly plateau with 5 steps (4 content + 1 navigation). The visual SHALL show a base model vs tuned model toggle with example prompt/response pairs. Two example pairs (capital of France, photosynthesis) SHALL cycle across steps.

Whisper assignments:
- Step 0: "weight-of-words" — *What was the model before shaping?*
- Step 2: "quality" — *Who decides what good tuning looks like?*
- Step 3: "practical-guide" — *Can you steer without retraining?*

Question cards (final step):
- → The Weight of Words
- → What Is Quality?
- → The Field Guide

#### Scenario: Base/Tuned toggle interaction
- **WHEN** the user clicks the "Tuned" toggle button
- **THEN** the output text swaps to the tuned model response with an opacity fade

#### Scenario: Example pairs cycle across steps
- **WHEN** the user scrolls from step 1 to step 2
- **THEN** the example prompt/response pair changes from capital of France to photosynthesis

### Requirement: Simple Plateau — The Weight of Words
The "Weight of Words" plateau (`#/weight-of-words`) SHALL render as a centered prose essay (max-width 36em) exploring how the base model acquires its capabilities through pretraining — gradient descent as iterative self-correction, the scale of training data (trillions of tokens), scaling laws (more data + more parameters = qualitatively different behavior), and the insight that the model discovers structure (syntax, facts, reasoning patterns) as a byproduct of getting better at next-token prediction.

Question cards:
- → The Next Word
- → The Shaping
- → The Averaging Problem

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/weight-of-words`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — What Is Quality?
The "Quality" plateau (`#/quality`) SHALL render as a centered prose essay examining who defines quality in LLM outputs — RLHF raters, users, cultural norms — and the tension between helpfulness and truth.

Question cards:
- → The Understanding Illusion
- → The Field Guide
- → The Shaping

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/quality`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Understanding Illusion
The "Understanding Illusion" plateau (`#/understanding-illusion`) SHALL render as a centered prose essay exploring whether LLMs understand language or merely simulate understanding, and why the distinction matters, referencing internal representations and tool use as evidence.

Question cards:
- → The Field Guide
- → The Averaging Problem
- → The Tool-User

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/understanding-illusion`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Field Guide
The "Field Guide" plateau (`#/practical-guide`) SHALL render as a centered prose essay structured in two parts: (1) a conceptual section on how prompting works mechanically — system prompts as probability narrowing, few-shot as in-context learning via induction heads, chain-of-thought as external scratchpad; (2) a practical section providing guidance for working with LLMs effectively — prompt structure, temperature choice, trust calibration, verification strategies, and collaboration patterns.

Question cards:
- → The Weight of Words
- → The Understanding Illusion
- → The Tool-User

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/practical-guide`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Tool-User (NEW)
The "Tool-User" plateau (`#/tool-user`) SHALL render as a centered prose essay that introduces the emerging paradigm of LLMs as reasoning engines that use tools. It SHALL cover tool use (e.g., calculators, web search), Mixture-of-Experts (MoE) architectures, and agentic patterns like ReAct (`Thought -> Action -> Observation`).

Question cards:
- → The Field Guide
- → The Understanding Illusion
- → The Shaping

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/tool-user`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom
