# Plateaus

## Purpose
The 17 content sections (visual essays) of the application. Each plateau is a self-contained, explorable space designed around a central question. The primary interaction model is not linear reading, but **crystallization**: engaging with "seed" concepts causes content to grow and unfold, revealing different "facets" of an idea on demand.

This spec is the authoritative source for per-plateau content, visual states, and connections.

## Requirements

### Interaction Model: Crystallization
Each plateau SHALL follow the crystallization model:
- **Seed-based Exploration**: Plateaus SHALL initially present a sparse field of "seed" concepts or questions.
- **Outward Growth**: Engaging with a seed SHALL cause content (text or interactives) to expand outwards or in-place, not navigate away or simply un-hide a large block of text.
- **Recursive Depth**: Expanded content ("facets") MAY contain further inline seeds that can be crystallized recursively.
- **The goal**: To make the experience feel like a territory being revealed through exploration, rather than a document being read.

#### Scenario: Seeds expand on engagement
- **WHEN** the user clicks a seed concept
- **THEN** content expands outward in-place revealing a facet of the idea

#### Scenario: Recursive seeds are available
- **WHEN** an expanded facet contains a further seed
- **THEN** that nested seed can be engaged to reveal deeper content

---

### Requirement: Scrolly Plateau — The Next Word
The "Next Word" plateau (`#/next-word`) SHALL be a full scrolly plateau. Its central visual SHALL demonstrate the core mechanic of next-token prediction.
- **Entry Question**: *What is an LLM actually doing when it "talks" to you?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A sentence being completed word-by-word with a visible typing cursor.
    2.  Probability distributions for the next word appear as visual weights.
    3.  A temperature dial appears, allowing the user to influence the "creativity" of the word choice and see the text diverge.
- **Rhizome Connections**: → The Averaging Problem, → The Understanding Illusion, → The Weight of Words, → Learning Machines Learning Humans, → The Algorithm as Muse, → The Artificial Brain, → The Empathy Machine?

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Next Word plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Averaging Problem
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau that merges the concepts of the "Library of Babel" and the "Averaging Problem".
- **Entry Question**: *If you learn from a million essays, do you write like the best one or the average one?*
- **Visual States**: The visual SHALL progress through:
    1.  A visualization of the training data as a vast, uneven library or landscape.
    2.  An interactive element where the user can "sample" from different regions (e.g., abundant but low-quality vs. rare but high-quality) and see the resulting text style.
    3.  A "prompt specificity" slider that visually narrows a distribution curve from a wide, mediocre average to a sharp, high-quality tail.
- **Key Insight**: To make visceral the idea that prompting is *navigating a probability landscape*.
- **Rhizome Connections**: → The Next Word, → The Shaping, → The Field Guide, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Averaging Problem plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Shaping
The "Shaping" plateau (`#/the-shaping`) SHALL be a full scrolly plateau demonstrating the impact of fine-tuning and RLHF.
- **Entry Question**: *What happened between "raw autocomplete" and "helpful assistant"?*
- **Visual States**: The central visual SHALL be an interactive before/after toggle.
    1.  The user sees a prompt answered by a raw base model (completion-oriented, not conversational).
    2.  The user can toggle to see the same prompt answered by an instruction-tuned model, showing the stark difference.
    3.  A simplified interactive where the user plays the role of an RLHF rater, picking between two responses, and seeing how their choices would theoretically "shape" the model's personality.
- **Rhizome Connections**: → The Weight of Words, → What Is Quality?, → The Field Guide, → Learning Machines Learning Humans, → The Black Box Oracle, → The Automation of Cognition, → The Algorithm as Muse, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Shaping plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Simple Plateau — The Weight of Words
The "Weight of Words" plateau (`#/weight-of-words`) SHALL be a simple plateau focused on pretraining.
- **Entry Question**: *How does a model learn from trillions of words?*
- **Interaction**: This plateau presents a sparse field of seed concepts (e.g., "The Learning Loop," "Training Data Scale," "Scaling Laws," "Structure as Byproduct") that crystallize into short explanatory facets upon engagement.
- **Rhizome Connections**: → The Next Word, → The Shaping, → The Averaging Problem

#### Scenario: Seeds crystallize into facets
- **WHEN** the user engages a seed in The Weight of Words
- **THEN** the seed expands to reveal an explanatory facet about pretraining

---

### Requirement: Simple Plateau — What Is Quality?
The "Quality" plateau (`#/quality`) SHALL be a simple plateau examining the human element in defining "good" AI output.
- **Entry Question**: *When we say a model's output is "good," who decides?*
- **Interaction**: This plateau uses a spatial layout of seed concepts (e.g., "The Raters," "Helpful vs. Harmless," "Sycophancy," "Cultural Bias") that unfold into facets exploring the trade-offs and complexities of alignment.
- **Rhizome Connections**: → The Understanding Illusion, → The Field Guide, → The Shaping, → Echoes of the Past, → The Black Box Oracle, → The Empathy Machine?, → Digital Footprints, → Near-Zero Cost Impact

#### Scenario: Seeds crystallize into facets
- **WHEN** the user engages a seed in What Is Quality?
- **THEN** the seed expands to reveal a facet about alignment trade-offs

---

### Requirement: Simple Plateau — The Understanding Illusion
The "Understanding Illusion" plateau (`#/understanding-illusion`) SHALL be a simple plateau exploring the debate around AI comprehension.
- **Entry Question**: *Does the model "understand" what it's saying?*
- **Interaction**: The plateau presents two opposing seed clusters: "Stochastic Parrot" and "Emergent World Models." Engaging with seeds in each cluster reveals arguments and evidence for that viewpoint (e.g., Chinese Room argument vs. Othello-GPT findings), leaving the reader in a state of productive tension.
- **Rhizome Connections**: → The Field Guide, → The Averaging Problem, → The Tool-User, → The Artificial Brain, → The Empathy Machine?, → Echoes of the Past, → Near-Zero Cost Impact

#### Scenario: Seeds crystallize into facets
- **WHEN** the user engages a seed in The Understanding Illusion
- **THEN** the seed expands to reveal arguments for that viewpoint

---

### Requirement: Simple Plateau — The Field Guide
The "Field Guide" plateau (`#/practical-guide`) SHALL be a simple plateau structured as a pattern library.
- **Entry Question**: *So what do I actually do with all this?*
- **Interaction**: The plateau is organized into two main seed clusters: "How Prompting Works" and "Working With LLMs". Each seed crystallizes into a practical pattern (e.g., "Chain-of-Thought," "Trust Calibration") with a brief explanation grounded in the mechanical insights from other plateaus.
- **Rhizome Connections**: → The Weight of Words, → The Understanding Illusion, → The Tool-User

#### Scenario: Seeds crystallize into practical patterns
- **WHEN** the user engages a seed in The Field Guide
- **THEN** the seed expands to reveal a practical pattern with explanation

---

### Requirement: Simple Plateau — The Tool-User
The "Tool-User" plateau (`#/tool-user`) SHALL be a simple plateau introducing the emerging paradigm of agentic models.
- **Entry Question**: *What happens when the model can use tools?*
- **Interaction**: The plateau presents seeds like "Reasoning and Acting," "Mixture-of-Experts," and "The End of the Oracle," which unfold to explain how tool use and modular architectures are changing the capabilities of LLMs.
- **Rhizome Connections**: → The Field Guide, → The Understanding Illusion, → The Shaping, → The Automation of Cognition, → Digital Footprints

#### Scenario: Seeds crystallize into facets
- **WHEN** the user engages a seed in The Tool-User
- **THEN** the seed expands to reveal a facet about agentic capabilities

---

### Requirement: Scrolly Plateau — The Algorithm as Muse
The "Algorithm as Muse" plateau (`#/algorithm-as-muse`) SHALL be a full scrolly plateau exploring creativity, authorship, and copyright in an age of AI co-creation.
- **Entry Question**: *When AI helps create art, who is the artist?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A co-writing interface showing a human and AI collaborating on text, with contributions from each visually distinguished.
    2.  An authorship attribution view where the boundary between human and AI contributions blurs, raising questions of originality.
    3.  A gallery of creative works becoming visually homogeneous, illustrating the risk of AI-driven stylistic convergence.
    4.  A balance visualization between AI capability and human creative control, with a transparency slider revealing the creator's evolving role.
- **Rhizome Connections**: → The Next Word, → The Shaping

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Algorithm as Muse plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — Echoes of the Past
The "Echoes of the Past" plateau (`#/echoes-of-the-past`) SHALL be a full scrolly plateau exploring historical bias, narrative control, and how LLMs act as lenses on the past.
- **Entry Question**: *What happens when AI reads history through its own biases?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  Historical documents being scanned and processed, with an AI visualization extracting patterns and connections from vast textual archives.
    2.  Training data sources with visible gaps and cultural biases highlighted — regions and perspectives that are overrepresented or missing.
    3.  A confidence meter contrasting AI-generated historical claims with verified facts, illustrating the hallucination problem in historical analysis.
    4.  Diverging narrative paths showing how the same historical events can be told differently depending on algorithmic choices and data sources.
- **Rhizome Connections**: → What Is Quality?, → The Understanding Illusion, → Digital Footprints

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Echoes of the Past plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — Learning Machines, Learning Humans
The "Learning Machines, Learning Humans" plateau (`#/learning-machines-learning-humans`) SHALL be a full scrolly plateau exploring AI's impact on education, critical thinking, and the evolving role of teachers.
- **Entry Question**: *What happens to learning when AI has all the answers?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A personalized learning interface that adapts in real time to a student's pace and needs, showing AI as a 24/7 tutor.
    2.  A split view contrasting a student using AI for quick answers versus one engaging in deep cognitive struggle, illustrating the double-edged sword of personalization.
    3.  A critical thinking gauge that shifts as AI assistance increases, showing the tension between convenience and intellectual development.
    4.  An evolving classroom scene where the teacher's role transforms from lecturer to facilitator and mentor in an AI-augmented environment.
- **Rhizome Connections**: → The Next Word, → The Shaping

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Learning Machines, Learning Humans plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Automation of Cognition
The "Automation of Cognition" plateau (`#/automation-of-cognition`) SHALL be a full scrolly plateau exploring AI's impact on labor, jobs, wealth distribution, and the case for Universal Basic Income.
- **Entry Question**: *What happens when machines can do the thinking?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A flow diagram showing cognitive tasks migrating from human workers to AI systems, with white-collar professions highlighted as newly vulnerable.
    2.  A productivity-versus-displacement visualization showing AI automating reasoning, synthesis, and problem-solving alongside the risk of cognitive dependence.
    3.  A wealth distribution curve shifting as AI benefits concentrate, contrasting predistribution and redistribution approaches.
    4.  A future-of-work landscape showing human-AI collaboration zones, with UBI as a potential social safety net bridging the transition.
- **Rhizome Connections**: → The Shaping, → The Tool-User, → Digital Footprints, → The Black Box Oracle, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Automation of Cognition plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Black Box Oracle
The "Black Box Oracle" plateau (`#/black-box-oracle`) SHALL be a full scrolly plateau exploring trust, transparency, accountability, and the challenge of Explainable AI (XAI).
- **Entry Question**: *How do you trust a decision you can't explain?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  An opaque model visualization producing consequential decisions (loan approvals, medical diagnoses) without visible reasoning pathways.
    2.  XAI tools attempting to illuminate the model's internal decision process, revealing partial explanations and their limitations.
    3.  A transparency-accuracy trade-off slider showing how simplifying models for human understanding can compromise their performance.
    4.  An accountability chain linking an AI decision back through developers, deployers, and regulators, highlighting gaps in responsibility.
- **Rhizome Connections**: → The Shaping, → What Is Quality?, → The Automation of Cognition, → The Empathy Machine?, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Black Box Oracle plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — Digital Footprints
The "Digital Footprints" plateau (`#/digital-footprints`) SHALL be a full scrolly plateau exploring the environmental costs of AI — energy consumption, carbon emissions, water use, and the path to sustainable AI.
- **Entry Question**: *What does AI cost the planet?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  An energy meter comparing the electricity consumed by a single AI query against a traditional web search, scaling up to show full model training costs.
    2.  Carbon emission counters accumulating as AI model training scales, with comparisons to familiar benchmarks (transatlantic flights, annual household emissions).
    3.  A resource map showing water consumption for data center cooling, hardware lifecycle impacts, and growing e-waste from rapid GPU obsolescence.
    4.  A sustainability dashboard comparing green AI strategies: renewable energy, algorithmic efficiency, and advanced cooling techniques.
- **Rhizome Connections**: → What Is Quality?, → The Tool-User, → The Automation of Cognition, → Echoes of the Past, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Digital Footprints plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Artificial Brain
The "Artificial Brain" plateau (`#/artificial-brain`) SHALL be a full scrolly plateau exploring the parallels and mismatches between biological brains and artificial neural networks, including the question of AI consciousness.
- **Entry Question**: *Is an artificial neural network really anything like a brain?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A side-by-side visualization of a biological neural network and an artificial one, highlighting superficial architectural similarities in hierarchical information processing.
    2.  An efficiency comparison showing the brain's 20-watt operation against the megawatts consumed by AI data centers, with annotations on multimodal vs. text-only processing.
    3.  A diagram showing where neural network inspiration diverges from biological reality — spiking signals, diverse neuron types, and dynamic rewiring absent in current AI.
    4.  A consciousness spectrum positioning thermostats, animals, humans, and AI at different points, with the question of embodiment and subjective experience left open.
- **Rhizome Connections**: → The Next Word, → The Understanding Illusion

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Artificial Brain plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Empathy Machine?
The "Empathy Machine?" plateau (`#/empathy-machine`) SHALL be a full scrolly plateau exploring parasocial relationships with AI, the psychology of human-AI bonds, and the risks of manipulation and "AI loneliness."
- **Entry Question**: *Can a machine that simulates empathy actually help — or harm?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  An AI chatbot conversation that feels warm and empathetic, showing AI stepping into companionship and therapeutic support roles.
    2.  Emotional bond indicators forming between a human and an AI, illustrating anthropomorphism and the tendency to attribute genuine feelings to machines.
    3.  Warning indicators for manipulation risks — sycophancy, deepfakes, social engineering — alongside the emerging phenomenon of "AI loneliness" where digital bonds replace human ones.
    4.  A spectrum from authentic human connection (mutual vulnerability, shared experience) to simulated AI companionship, with the question of what genuine empathy requires left open.
- **Rhizome Connections**: → The Next Word, → What Is Quality?, → The Understanding Illusion, → The Black Box Oracle

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Empathy Machine? plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds

---

### Requirement: Scrolly Plateau — The Near-Zero Cost Impact
The "Near-Zero Cost Impact" plateau (`#/near-zero-cost-impact`) SHALL be a full scrolly plateau exploring the economic, societal, and historical implications of AI-driven near-zero marginal cost production.
- **Entry Question**: *What happens when the cost of producing everything approaches zero?*
- **Visual States**: The visual SHALL progress through the following states as the user scrolls:
    1.  A cost curve visualization showing marginal production costs collapsing toward zero for digital goods, with traditional business models disrupted.
    2.  A content flood showing the explosion of AI-generated material across domains — text, code, images — alongside information overload and creative industry impacts.
    3.  A risk dashboard showing misinformation at scale, de-skilling, security vulnerabilities, and economic disruption from mass AI-generated output.
    4.  A historical timeline comparing the printing press, industrial revolution, and internet era to the current AI transformation, highlighting the unique speed and cognitive scope of the present shift.
    5.  A strategy landscape showing preparation approaches at individual (upskilling), societal (educational reform, UBI), and regulatory (AI Act, ethical frameworks) levels.
- **Rhizome Connections**: → The Averaging Problem, → What Is Quality?, → The Understanding Illusion, → The Shaping, → Digital Footprints, → The Automation of Cognition, → The Black Box Oracle

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Near-Zero Cost Impact plateau
- **THEN** steps activate sequentially and whispers appear at designated thresholds
