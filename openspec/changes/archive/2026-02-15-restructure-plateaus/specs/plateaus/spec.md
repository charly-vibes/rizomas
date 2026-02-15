## REMOVED Requirements

### Requirement: Simple Plateau — Steering the Ship
**Reason**: Merged into expanded "The Field Guide" plateau. Steering's conceptual material (prompting as probabilistic navigation, system prompts, few-shot, chain-of-thought mechanics) is folded into the merged plateau's first half.
**Migration**: Content absorbed into modified "Simple Plateau — The Field Guide".

### Requirement: Simple Plateau — The Field Guide
**Reason**: Replaced by expanded version that merges Steering the Ship content with practical guidance.
**Migration**: Replaced by new requirement below with same name but broader scope.

## ADDED Requirements

### Requirement: Simple Plateau — The Weight of Words
The "Weight of Words" plateau (`#/weight-of-words`) SHALL render as a centered prose essay (max-width 36em) exploring how the base model acquires its capabilities through pretraining — gradient descent as iterative self-correction, the scale of training data (trillions of tokens), scaling laws (more data + more parameters = qualitatively different behavior), and the insight that the model discovers structure (syntax, facts, reasoning patterns) as a byproduct of getting better at next-token prediction.

Question cards:
- → The Next Word
- → The Shaping
- → The Averaging Problem

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/weight-of-words`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Field Guide (Merged)
The "Field Guide" plateau (`#/practical-guide`) SHALL render as a centered prose essay structured in two parts: (1) a conceptual section on how prompting works mechanically — system prompts as probability narrowing, few-shot as in-context learning via induction heads, chain-of-thought as external scratchpad, and the gap between steering and control; (2) a practical section providing guidance for working with LLMs effectively — prompt structure, temperature choice, trust calibration, verification strategies, common failure modes, and collaboration patterns.

Question cards:
- → The Weight of Words
- → The Understanding Illusion
- → The Averaging Problem

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/practical-guide`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

## MODIFIED Requirements

### Requirement: Scrolly Plateau — The Averaging Problem
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau with 6 steps (5 content + 1 navigation). The visual SHALL be a canvas-drawn bell curve that shifts position and narrows across steps: (1) wide center ("million recipes"), (2) vague prompt, (3) specific prompt (narrower, shifted right), (4) very specific (narrow, far right), (5) "you are here." Curve parameters `{spread, center, label}` SHALL be redrawn on each step change.

Whisper assignments:
- Step 1: "weight-of-words" — *How did it learn all this?*
- Step 1: "the-shaping" — *How did it learn to narrow down?*
- Step 3: "quality" — *Who decides what "good" means?*

Question cards (final step):
- → The Weight of Words
- → The Shaping
- → What Is Quality?

#### Scenario: Bell curve narrows on specific prompt
- **WHEN** the user scrolls to the "specific prompt" step
- **THEN** the bell curve shifts right and narrows compared to the "vague prompt" step

#### Scenario: Curve redraws on each step
- **WHEN** the active step changes
- **THEN** the canvas redraws the bell curve with the new step's spread, center, and label parameters

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
