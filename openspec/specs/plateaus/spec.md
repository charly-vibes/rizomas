# Plateaus

## Purpose
The 8 content sections (visual essays) of the application. Each plateau is a self-contained, explorable space designed around a central question. The primary interaction model is not linear reading, but **crystallization**: engaging with "seed" concepts causes content to grow and unfold, revealing different "facets" of an idea on demand.

This spec is the authoritative source for per-plateau content, visual states, and connections.

## Requirements

### Interaction Model: Crystallization
Each plateau SHALL follow the crystallization model:
- **Seed-based Exploration**: Plateaus SHALL initially present a sparse field of "seed" concepts or questions.
- **Outward Growth**: Engaging with a seed SHALL cause content (text or interactives) to expand outwards or in-place, not navigate away or simply un-hide a large block of text.
- **Recursive Depth**: Expanded content ("facets") MAY contain further inline seeds that can be crystallized recursively.
- **The goal**: To make the experience feel like a territory being revealed through exploration, rather than a document being read.

---

### Requirement: Scrolly Plateau — The Next Word
The "Next Word" plateau (`#/next-word`) SHALL be a full scrolly plateau. Its central visual SHALL demonstrate the core mechanic of next-token prediction.
- **Entry Question**: *What is an LLM actually doing when it "talks" to you?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A sentence being completed word-by-word with a visible typing cursor.
    2.  Probability distributions for the next word appear as visual weights.
    3.  A temperature dial appears, allowing the user to influence the "creativity" of the word choice and see the text diverge.
- **Rhizome Connections**: → The Averaging Problem, → The Understanding Illusion, → The Weight of Words

---

### Requirement: Scrolly Plateau — The Averaging Problem
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau that merges the concepts of the "Library of Babel" and the "Averaging Problem".
- **Entry Question**: *If you learn from a million essays, do you write like the best one or the average one?*
- **Visual States**: The visual SHALL progress through:
    1.  A visualization of the training data as a vast, uneven library or landscape.
    2.  An interactive element where the user can "sample" from different regions (e.g., abundant but low-quality vs. rare but high-quality) and see the resulting text style.
    3.  A "prompt specificity" slider that visually narrows a distribution curve from a wide, mediocre average to a sharp, high-quality tail.
- **Key Insight**: To make visceral the idea that prompting is *navigating a probability landscape*.
- **Rhizome Connections**: → The Next Word, → The Shaping, → The Field Guide

---

### Requirement: Scrolly Plateau — The Shaping
The "Shaping" plateau (`#/the-shaping`) SHALL be a full scrolly plateau demonstrating the impact of fine-tuning and RLHF.
- **Entry Question**: *What happened between "raw autocomplete" and "helpful assistant"?*
- **Visual States**: The central visual SHALL be an interactive before/after toggle.
    1.  The user sees a prompt answered by a raw base model (completion-oriented, not conversational).
    2.  The user can toggle to see the same prompt answered by an instruction-tuned model, showing the stark difference.
    3.  A simplified interactive where the user plays the role of an RLHF rater, picking between two responses, and seeing how their choices would theoretically "shape" the model's personality.
- **Rhizome Connections**: → The Weight of Words, → What Is Quality?, → The Field Guide

---

### Requirement: Simple Plateau — The Weight of Words
The "Weight of Words" plateau (`#/weight-of-words`) SHALL be a simple plateau focused on pretraining.
- **Entry Question**: *How does a model learn from trillions of words?*
- **Interaction**: This plateau presents a sparse field of seed concepts (e.g., "The Learning Loop," "Training Data Scale," "Scaling Laws," "Structure as Byproduct") that crystallize into short explanatory facets upon engagement.
- **Rhizome Connections**: → The Next Word, → The Shaping, → The Averaging Problem

---

### Requirement: Simple Plateau — What Is Quality?
The "Quality" plateau (`#/quality`) SHALL be a simple plateau examining the human element in defining "good" AI output.
- **Entry Question**: *When we say a model's output is "good," who decides?*
- **Interaction**: This plateau uses a spatial layout of seed concepts (e.g., "The Raters," "Helpful vs. Harmless," "Sycophancy," "Cultural Bias") that unfold into facets exploring the trade-offs and complexities of alignment.
- **Rhizome Connections**: → The Understanding Illusion, → The Field Guide, → The Shaping

---

### Requirement: Simple Plateau — The Understanding Illusion
The "Understanding Illusion" plateau (`#/understanding-illusion`) SHALL be a simple plateau exploring the debate around AI comprehension.
- **Entry Question**: *Does the model "understand" what it's saying?*
- **Interaction**: The plateau presents two opposing seed clusters: "Stochastic Parrot" and "Emergent World Models." Engaging with seeds in each cluster reveals arguments and evidence for that viewpoint (e.g., Chinese Room argument vs. Othello-GPT findings), leaving the reader in a state of productive tension.
- **Rhizome Connections**: → The Field Guide, → The Averaging Problem, → The Tool-User

---

### Requirement: Simple Plateau — The Field Guide
The "Field Guide" plateau (`#/practical-guide`) SHALL be a simple plateau structured as a pattern library.
- **Entry Question**: *So what do I actually do with all this?*
- **Interaction**: The plateau is organized into two main seed clusters: "How Prompting Works" and "Working With LLMs". Each seed crystallizes into a practical pattern (e.g., "Chain-of-Thought," "Trust Calibration") with a brief explanation grounded in the mechanical insights from other plateaus.
- **Rhizome Connections**: → The Weight of Words, → The Understanding Illusion, → The Tool-User

---

### Requirement: Simple Plateau — The Tool-User
The "Tool-User" plateau (`#/tool-user`) SHALL be a simple plateau introducing the emerging paradigm of agentic models.
- **Entry Question**: *What happens when the model can use tools?*
- **Interaction**: The plateau presents seeds like "Reasoning and Acting," "Mixture-of-Experts," and "The End of the Oracle," which unfold to explain how tool use and modular architectures are changing the capabilities of LLMs.
- **Rhizome Connections**: → The Field Guide, → The Understanding Illusion, → The Shaping
