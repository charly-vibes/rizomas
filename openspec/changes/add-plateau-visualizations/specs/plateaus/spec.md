## MODIFIED Requirements

### Requirement: Scrolly Plateau — The Next Word
The "Next Word" plateau (`#/next-word`) SHALL be a full scrolly plateau. Its central visual SHALL demonstrate the core mechanic of next-token prediction.
- **Entry Question**: *What is an LLM actually doing when it "talks" to you?*
- **Visual States**: The visual panel SHALL progress through the following states as the user scrolls:
    1.  A sentence being completed word-by-word with a visible typing cursor. The cursor advances with scroll progress.
    2.  Probability distributions for candidate next tokens appear as horizontal bars. Bar widths represent relative probabilities.
    3.  A temperature dial appears, allowing the user to influence the "creativity" of the word choice. Low temperature sharpens the distribution toward the top candidate; high temperature flattens it. The text diverges visibly when temperature changes.
- **Accessibility**: An `aria-live="polite"` region SHALL announce the current visual state (e.g., distribution values). The temperature control SHALL have an accessible label and value announcement.
- **Reduced motion**: When `prefers-reduced-motion` is active, cursor and bar updates SHALL be instant without animation.
- **Rhizome Connections**: → The Averaging Problem, → The Understanding Illusion, → The Weight of Words, → Learning Machines Learning Humans, → The Algorithm as Muse, → The Artificial Brain, → The Empathy Machine?

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Next Word plateau
- **THEN** steps activate sequentially, the visual panel updates to match each state, and whispers appear at designated thresholds

#### Scenario: Temperature dial reshapes distribution
- **WHEN** the user adjusts the temperature control in visual state 3
- **THEN** probability bars redistribute in real time reflecting the new temperature value

#### Scenario: Visual is accessible
- **WHEN** a screen reader user reaches the visual panel
- **THEN** the aria-live region announces the current visual state in prose

---

### Requirement: Scrolly Plateau — The Averaging Problem
The "Averaging Problem" plateau (`#/averaging-problem`) SHALL be a full scrolly plateau that merges the concepts of the "Library of Babel" and the "Averaging Problem".
- **Entry Question**: *If you learn from a million essays, do you write like the best one or the average one?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A visualization of the training data as a distribution landscape with peaks (common styles) and valleys (rare styles).
    2.  An interactive element where the user can sample from different regions (e.g., abundant but low-quality vs. rare but high-quality) and see the resulting text style.
    3.  A "prompt specificity" control that visually narrows the distribution from a wide, mediocre average to a sharp, high-quality tail. A sample text SHALL update to reflect the narrowed distribution.
- **Accessibility**: An `aria-live="polite"` region SHALL announce the current region and sample text. The specificity control SHALL have an accessible label.
- **Reduced motion**: Landscape transitions SHALL update instantly without smooth animation.
- **Key Insight**: To make visceral the idea that prompting is *navigating a probability landscape*.
- **Rhizome Connections**: → The Next Word, → The Shaping, → The Field Guide, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Averaging Problem plateau
- **THEN** steps activate sequentially, the landscape updates, and whispers appear at designated thresholds

#### Scenario: Region sampling shows style variation
- **WHEN** the user interacts with a region of the distribution landscape in visual state 2
- **THEN** a text sample characteristic of that region's style appears

#### Scenario: Specificity control narrows distribution
- **WHEN** the user adjusts the prompt specificity control in visual state 3
- **THEN** the distribution curve narrows and the sample text quality shifts accordingly

---

### Requirement: Scrolly Plateau — The Shaping
The "Shaping" plateau (`#/the-shaping`) SHALL be a full scrolly plateau demonstrating the impact of fine-tuning and RLHF.
- **Entry Question**: *What happened between "raw autocomplete" and "helpful assistant"?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A prompt answered by a raw base model (completion-oriented, not conversational), visually styled as "unaligned."
    2.  A toggle allowing the user to switch between the base model response and an instruction-tuned response to the same prompt. The stark difference SHALL be visually highlighted.
    3.  A simplified interactive where the user plays the role of an RLHF rater, picking between two responses and seeing how their choices would theoretically shift the model's personality (e.g., along a helpful↔harmless axis).
- **Accessibility**: All text content SHALL be in the DOM. Toggle and rater controls SHALL have appropriate ARIA labels. Personality shift feedback SHALL be announced via `aria-live`.
- **Reduced motion**: Toggle transitions SHALL be instant without slide/fade animation.
- **Rhizome Connections**: → The Weight of Words, → What Is Quality?, → The Field Guide, → Learning Machines Learning Humans, → The Black Box Oracle, → The Automation of Cognition, → The Algorithm as Muse, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Shaping plateau
- **THEN** steps activate sequentially, the visual updates, and whispers appear at designated thresholds

#### Scenario: Before/after toggle shows contrast
- **WHEN** the user activates the toggle in visual state 2
- **THEN** the displayed response switches between base model and instruction-tuned model

#### Scenario: RLHF rater game responds to user choice
- **WHEN** the user picks a preferred response in the rater interactive in visual state 3
- **THEN** a personality shift indicator updates to reflect the choice

---

### Requirement: Scrolly Plateau — The Near-Zero Cost Impact
The "Near-Zero Cost Impact" plateau (`#/near-zero-cost-impact`) SHALL be a full scrolly plateau exploring the economic, societal, and historical implications of AI-driven near-zero marginal cost production.
- **Entry Question**: *What happens when the cost of producing everything approaches zero?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A cost curve showing marginal production costs collapsing toward zero for digital goods, with traditional business models disrupted. The curve SHALL animate with scroll progress.
    2.  A content flood showing the explosion of AI-generated material across domains — text, code, images — alongside information overload indicators.
    3.  A risk dashboard showing misinformation at scale, de-skilling, security vulnerabilities, and economic disruption. Each category SHALL illuminate as it is reached.
    4.  A historical timeline comparing the printing press, industrial revolution, and internet era to the current AI transformation, highlighting the unique speed and cognitive scope of the present shift.
    5.  A strategy landscape showing preparation approaches at individual (upskilling), societal (educational reform, UBI), and regulatory (AI Act, ethical frameworks) levels.
- **Accessibility**: `aria-live` regions for counter values and dashboard changes. Timeline events announced sequentially.
- **Reduced motion**: Counters update instantly, curve renders final state.
- **Rhizome Connections**: → The Averaging Problem, → What Is Quality?, → The Understanding Illusion, → The Shaping, → Digital Footprints, → The Automation of Cognition, → The Black Box Oracle

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Near-Zero Cost Impact plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 5 states

#### Scenario: Cost curve animates with scroll
- **WHEN** the user scrolls through visual state 1
- **THEN** the cost curve animates downward proportionally to scroll progress

---

### Requirement: Scrolly Plateau — Digital Footprints
The "Digital Footprints" plateau (`#/digital-footprints`) SHALL be a full scrolly plateau exploring the environmental costs of AI — energy consumption, carbon emissions, water use, and the path to sustainable AI.
- **Entry Question**: *What does AI cost the planet?*
- **Visual States**: The visual panel SHALL progress through:
    1.  An energy meter comparing the electricity consumed by a single AI query against a traditional web search, scaling up to show full model training costs.
    2.  Carbon emission counters accumulating as AI model training scales, with comparisons to familiar benchmarks (transatlantic flights, annual household emissions).
    3.  A resource map showing water consumption for data center cooling, hardware lifecycle impacts, and growing e-waste from rapid GPU obsolescence.
    4.  A sustainability dashboard comparing green AI strategies: renewable energy, algorithmic efficiency, and advanced cooling techniques.
- **Accessibility**: `aria-live` for meter values and counter updates. Resource map described in adjacent text.
- **Reduced motion**: Meters and counters render final values without animation.
- **Rhizome Connections**: → What Is Quality?, → The Tool-User, → The Automation of Cognition, → Echoes of the Past, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Digital Footprints plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Energy meter shows comparison
- **WHEN** visual state 1 is active
- **THEN** the energy meter shows a quantitative comparison between an AI query and a web search

---

### Requirement: Scrolly Plateau — The Automation of Cognition
The "Automation of Cognition" plateau (`#/automation-of-cognition`) SHALL be a full scrolly plateau exploring AI's impact on labor, jobs, wealth distribution, and the case for Universal Basic Income.
- **Entry Question**: *What happens when machines can do the thinking?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A flow diagram showing cognitive tasks migrating from human workers to AI systems, with white-collar professions highlighted as newly vulnerable.
    2.  A productivity-versus-displacement visualization showing AI automating reasoning, synthesis, and problem-solving alongside the risk of cognitive dependence.
    3.  A wealth distribution curve shifting as AI benefits concentrate, contrasting predistribution and redistribution approaches.
    4.  A future-of-work landscape showing human-AI collaboration zones, with UBI as a potential social safety net bridging the transition.
- **Accessibility**: Flow diagram described via aria text. Gauges and curves announced via `aria-live`.
- **Reduced motion**: Transitions between states are instant, no animated flows.
- **Rhizome Connections**: → The Shaping, → The Tool-User, → Digital Footprints, → The Black Box Oracle, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Automation of Cognition plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Task migration shows flow
- **WHEN** visual state 1 is active
- **THEN** the flow diagram shows cognitive tasks migrating from human to AI with visible directional indicators

---

### Requirement: Scrolly Plateau — The Algorithm as Muse
The "Algorithm as Muse" plateau (`#/algorithm-as-muse`) SHALL be a full scrolly plateau exploring creativity, authorship, and copyright in an age of AI co-creation.
- **Entry Question**: *When AI helps create art, who is the artist?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A co-writing interface showing a human and AI collaborating on text, with contributions from each visually distinguished.
    2.  An authorship attribution view where the boundary between human and AI contributions blurs, raising questions of originality.
    3.  A gallery of creative works becoming visually homogeneous, illustrating the risk of AI-driven stylistic convergence.
    4.  A balance visualization between AI capability and human creative control, with a control revealing the creator's evolving role.
- **Accessibility**: All text in DOM. Attribution and homogeneity changes announced via `aria-live`.
- **Reduced motion**: Visual transitions are instant.
- **Rhizome Connections**: → The Next Word, → The Shaping

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Algorithm as Muse plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Co-writing interface distinguishes contributions
- **WHEN** visual state 1 is active
- **THEN** human and AI text contributions are visually distinguished

---

### Requirement: Scrolly Plateau — Echoes of the Past
The "Echoes of the Past" plateau (`#/echoes-of-the-past`) SHALL be a full scrolly plateau exploring historical bias, narrative control, and how LLMs act as lenses on the past.
- **Entry Question**: *What happens when AI reads history through its own biases?*
- **Visual States**: The visual panel SHALL progress through:
    1.  Historical documents being scanned and processed, with an AI visualization extracting patterns and connections from vast textual archives.
    2.  Training data sources with visible gaps and cultural biases highlighted — regions and perspectives that are overrepresented or missing.
    3.  A confidence meter contrasting AI-generated historical claims with verified facts, illustrating the hallucination problem in historical analysis.
    4.  Diverging narrative paths showing how the same historical events can be told differently depending on algorithmic choices and data sources.
- **Accessibility**: Scanning described via aria text. Bias gaps, confidence values, and narrative differences announced via `aria-live`.
- **Reduced motion**: Scanning animation replaced with static state.
- **Rhizome Connections**: → What Is Quality?, → The Understanding Illusion, → Digital Footprints

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Echoes of the Past plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Bias gaps are visible
- **WHEN** visual state 2 is active
- **THEN** overrepresented and missing perspectives are visually distinguished in the data source visualization

---

### Requirement: Scrolly Plateau — Learning Machines, Learning Humans
The "Learning Machines, Learning Humans" plateau (`#/learning-machines-learning-humans`) SHALL be a full scrolly plateau exploring AI's impact on education, critical thinking, and the evolving role of teachers.
- **Entry Question**: *What happens to learning when AI has all the answers?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A personalized learning interface that adapts in real time to a student's pace and needs, showing AI as a 24/7 tutor.
    2.  A split view contrasting a student using AI for quick answers versus one engaging in deep cognitive struggle, illustrating the double-edged sword of personalization.
    3.  A critical thinking gauge that shifts as AI assistance increases, showing the tension between convenience and intellectual development.
    4.  An evolving classroom scene where the teacher's role transforms from lecturer to facilitator and mentor in an AI-augmented environment.
- **Accessibility**: All content in DOM. Gauge and role changes announced via `aria-live`.
- **Reduced motion**: Layout transitions are instant.
- **Rhizome Connections**: → The Next Word, → The Shaping

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Learning Machines, Learning Humans plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Split view contrasts engagement
- **WHEN** visual state 2 is active
- **THEN** two contrasting student scenarios are displayed side by side with visual differentiation

---

### Requirement: Scrolly Plateau — The Black Box Oracle
The "Black Box Oracle" plateau (`#/black-box-oracle`) SHALL be a full scrolly plateau exploring trust, transparency, accountability, and the challenge of Explainable AI (XAI).
- **Entry Question**: *How do you trust a decision you can't explain?*
- **Visual States**: The visual panel SHALL progress through:
    1.  An opaque model visualization producing consequential decisions (loan approvals, medical diagnoses) without visible reasoning pathways.
    2.  XAI tools attempting to illuminate the model's internal decision process, revealing partial explanations and their limitations.
    3.  A transparency-accuracy trade-off control showing how simplifying models for human understanding can compromise their performance.
    4.  An accountability chain linking an AI decision back through developers, deployers, and regulators, highlighting gaps in responsibility.
- **Accessibility**: Decision outputs and explanations in DOM text. Trade-off control has accessible label and value. Accountability chain described in prose.
- **Reduced motion**: Animations are static, pathway illumination is instant.
- **Rhizome Connections**: → The Shaping, → What Is Quality?, → The Automation of Cognition, → The Empathy Machine?, → Near-Zero Cost Impact

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Black Box Oracle plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Transparency control shows trade-off
- **WHEN** the user adjusts the transparency-accuracy control in visual state 3
- **THEN** the model visualization and accuracy indicator update in real time to reflect the trade-off

---

### Requirement: Scrolly Plateau — The Artificial Brain
The "Artificial Brain" plateau (`#/artificial-brain`) SHALL be a full scrolly plateau exploring the parallels and mismatches between biological brains and artificial neural networks, including the question of AI consciousness.
- **Entry Question**: *Is an artificial neural network really anything like a brain?*
- **Visual States**: The visual panel SHALL progress through:
    1.  A side-by-side visualization of a biological neural network and an artificial one, highlighting superficial architectural similarities in hierarchical information processing.
    2.  An efficiency comparison showing the brain's 20-watt operation against the megawatts consumed by AI data centers, with annotations on multimodal vs. text-only processing.
    3.  A diagram showing where neural network inspiration diverges from biological reality — spiking signals, diverse neuron types, and dynamic rewiring absent in current AI.
    4.  A consciousness spectrum positioning thermostats, animals, humans, and AI at different points, with the question of embodiment and subjective experience left open.
- **Accessibility**: Side-by-side described in text. Efficiency values in DOM. Spectrum positions announced via `aria-live`.
- **Reduced motion**: Network visualizations are static; spectrum renders final positions.
- **Rhizome Connections**: → The Next Word, → The Understanding Illusion

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Artificial Brain plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Side-by-side shows parallels and differences
- **WHEN** visual state 1 is active
- **THEN** biological and artificial neural networks are displayed side by side with visual distinctions

---

### Requirement: Scrolly Plateau — The Empathy Machine?
The "Empathy Machine?" plateau (`#/empathy-machine`) SHALL be a full scrolly plateau exploring parasocial relationships with AI, the psychology of human-AI bonds, and the risks of manipulation and "AI loneliness."
- **Entry Question**: *Can a machine that simulates empathy actually help — or harm?*
- **Visual States**: The visual panel SHALL progress through:
    1.  An AI chatbot conversation that feels warm and empathetic, showing AI stepping into companionship and therapeutic support roles. Messages appear progressively with scroll.
    2.  Emotional bond indicators forming between a human and an AI, illustrating anthropomorphism and the tendency to attribute genuine feelings to machines.
    3.  Warning indicators for manipulation risks — sycophancy, deepfakes, social engineering — alongside the emerging phenomenon of "AI loneliness" where digital bonds replace human ones.
    4.  A spectrum from authentic human connection (mutual vulnerability, shared experience) to simulated AI companionship, with the question of what genuine empathy requires left open.
- **Accessibility**: All chatbot text in DOM. Bond indicators and warnings announced via `aria-live`. Spectrum described in text.
- **Reduced motion**: Bond indicators and message appearance are instant.
- **Rhizome Connections**: → The Next Word, → What Is Quality?, → The Understanding Illusion, → The Black Box Oracle

#### Scenario: Scrolly steps advance on scroll
- **WHEN** the user scrolls through the Empathy Machine? plateau
- **THEN** steps activate sequentially and the visual panel transitions through all 4 states

#### Scenario: Chatbot simulation shows progressive messages
- **WHEN** visual state 1 is active and the user scrolls
- **THEN** chatbot messages appear progressively with scroll progress
