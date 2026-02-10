# Plateaus

## Purpose
The 8 content sections (visual essays) of the application. Three are scrolly plateaus with interactive visuals; five are simple prose plateaus. This spec is the authoritative source for per-plateau content, visual states, whisper-step assignments, and question card destinations.

## Requirements

### Requirement: Scrolly Plateau — The Next Word
The "Next Word" plateau (`#/next-word`) SHALL be a full scrolly plateau with 7 steps (6 content + 1 navigation). The visual SHALL progress through the following states, one per step: (1) typing cursor, (2) probability bars animate in, (3) token selected, (4) temperature slider, (5) context-to-prediction diagram, (6) tension question. It SHALL include an interactive temperature slider with 3 stops (safe/balanced/creative) that swaps output text with a fade.

Whisper assignments:
- Step 1: "library-of-babel" — *What if it had read every book ever written?*
- Step 3: "averaging-problem" — *What does average even mean here?*
- Step 5: "understanding-illusion" — *But does it understand what it's saying?*

Question cards (final step):
- → The Averaging Problem
- → The Library of Babel
- → The Understanding Illusion

#### Scenario: Temperature slider interaction
- **WHEN** the user moves the temperature slider to "creative"
- **THEN** the output text swaps to the creative variant with a fade transition

#### Scenario: Visual state advances per step
- **WHEN** the user scrolls from step 1 to step 2
- **THEN** the visual transitions from typing cursor to probability bars animating in

### Requirement: Scrolly Plateau — The Averaging Problem
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau with 6 steps (5 content + 1 navigation). The visual SHALL be a canvas-drawn bell curve that shifts position and narrows across steps: (1) wide center ("million recipes"), (2) vague prompt, (3) specific prompt (narrower, shifted right), (4) very specific (narrow, far right), (5) "you are here." Curve parameters `{spread, center, label}` SHALL be redrawn on each step change.

Whisper assignments:
- Step 1: "steering" — *What if you could steer it?*
- Step 1: "the-shaping" — *How did it learn to narrow down?*
- Step 3: "quality" — *Who decides what "good" means?*

Question cards (final step):
- → Steering the Ship
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
- Step 0: "averaging-problem" — *What was the model before shaping?*
- Step 2: "quality" — *Who decides what good tuning looks like?*
- Step 3: "steering" — *Can you steer without retraining?*

Question cards (final step):
- → The Averaging Problem
- → What Is Quality?
- → Steering the Ship

#### Scenario: Base/Tuned toggle interaction
- **WHEN** the user clicks the "Tuned" toggle button
- **THEN** the output text swaps to the tuned model response with an opacity fade

#### Scenario: Example pairs cycle across steps
- **WHEN** the user scrolls from step 1 to step 2
- **THEN** the example prompt/response pair changes from capital of France to photosynthesis

### Requirement: Simple Plateau — Steering the Ship
The "Steering" plateau (`#/steering`) SHALL render as a centered prose essay (max-width 36em) exploring how users can guide LLM output through prompting techniques, system prompts, and few-shot examples without retraining the model.

Question cards:
- → What Is Quality?
- → The Field Guide

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/steering`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Library of Babel
The "Library of Babel" plateau (`#/library-of-babel`) SHALL render as a centered prose essay exploring the Borges metaphor — LLMs as containing all possible texts, with the challenge being selection rather than generation.

Question cards:
- → The Averaging Problem
- → The Understanding Illusion

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/library-of-babel`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — What Is Quality?
The "Quality" plateau (`#/quality`) SHALL render as a centered prose essay examining who defines quality in LLM outputs — RLHF raters, users, cultural norms — and the tension between helpfulness and truth.

Question cards:
- → The Understanding Illusion
- → Steering the Ship

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/quality`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Understanding Illusion
The "Understanding Illusion" plateau (`#/understanding-illusion`) SHALL render as a centered prose essay exploring whether LLMs understand language or merely simulate understanding, and why the distinction matters.

Question cards:
- → The Field Guide
- → The Averaging Problem

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/understanding-illusion`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom

### Requirement: Simple Plateau — The Field Guide
The "Field Guide" plateau (`#/practical-guide`) SHALL render as a centered prose essay providing practical guidance for working with LLMs effectively — prompt structure, temperature choice, when to trust output, and when to verify.

Question cards:
- → Steering the Ship
- → The Understanding Illusion

#### Scenario: Renders as prose with navigation
- **WHEN** the user navigates to `#/practical-guide`
- **THEN** a centered prose column is displayed with header, body paragraphs, and question cards at the bottom
