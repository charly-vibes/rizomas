# Plateau Research Briefs

> Compiled 2026-02-10. Deep research on each of the 8 plateau topics to inform
> essay prose content. Each brief contains substantive material, key references,
> visual essay recommendations, and cross-plateau connections.

---

## 1. The Next Word (`#/next-word`) — Scrolly

### Core Mechanics
- **Autoregressive prediction**: P(sequence) = P(t1) x P(t2|t1) x ... x P(tn|t1,...,tn-1)
- The generation loop: full sequence fed through ~96 transformer layers, produces a vector of ~50K-100K numbers (one per vocab token), softmax converts to probability distribution, sample one token, append, repeat
- Left-to-right is a choice, not a necessity — model can't revise once a token is emitted
- KV-caching avoids recomputing attention for prior tokens in practice

### Probability Distributions
- Final layer produces **logits** (raw scores), softmax normalizes to probabilities summing to 1.0
- Distribution shape carries meaning: peaked = highly constrained (factual), flat = many plausible continuations (creative)
- Even in spikiest distributions, nearly every token gets some nonzero probability
- Holtzman et al. (2019): human text doesn't always pick the most probable token

### Temperature & Sampling
- Temperature divides logits before softmax: T→0 = greedy/deterministic, T=1 = as-learned, T>1 = flattened/exploratory
- Physical analogy from statistical mechanics (Boltzmann distribution): low T = frozen landscape, high T = vibrating/bouncing
- Top-k: fixed number of candidates (blunt instrument)
- Top-p (nucleus, Holtzman 2019): adaptive — cumulative probability threshold, naturally adjusts to model confidence
- In practice: temperature 0.7-1.0 + top-p 0.9-0.95 is common default

### Context Window
- Attention mechanism: every token attends to every other token (vs RNNs where distant context fades)
- Multi-head attention: ~96 heads tracking syntax, semantics, rhetoric, etc. in parallel
- "Lost in the middle" (Liu et al. 2023): U-shaped retrieval — beginning and end recalled better than middle
- Context is not "memory" — model re-reads entire context on every token generation
- Positional encoding (RoPE, ALiBi) gives sense of sequence order

### The "Glorified Autocomplete" Tension
**For**: Mechanically accurate — predicts next token, stochastic, no explicit reasoning module
**Against**:
- Scale changes nature of task (Sutskever: "what does it mean to predict well enough?")
- Emergent capabilities: in-context learning, chain-of-thought, instruction following
- Representation argument: Othello-GPT develops board state from moves alone (Li et al. 2022)
- Compression argument: prediction = compression (Shannon), compressing all text = modeling all structure
- Greedy decoding paradox: always picking top prediction produces *worse* text

### Best Analogies
- Water/weather: simple molecular rules → hurricanes at scale
- Chess engines: AlphaZero learns from self-play, "just pattern matching" produces superhuman play
- Speaking into a microphone with no undo button

### Key References
- Holtzman et al. (2019) "The Curious Case of Neural Text Degeneration"
- Li et al. (2022) Othello-GPT
- Liu et al. (2023) "Lost in the Middle"
- Brown et al. (2020) GPT-3 paper

---

## 2. The Averaging Problem (`#/averaging-problem`) — Scrolly

### Distribution Over Training Data
- Model compresses statistical regularities into parameters, not stores/retrieves examples
- "Million recipes" metaphor: tallied votes from million chefs on what comes after "add two cups of" → flour 34%, sugar 22%, water 15%...
- Output is a **composite** from the probability landscape, not any single source
- Averaging is not uniform — common patterns weighted more heavily

### Specificity Narrows Distribution
- Vague prompt → wide conditional distribution P(next|vague) → many plausible tokens
- Adding specificity = adding conditioning information = narrowing distribution
- Progression: "Write something" (maximally wide) → "Write a recipe" → "Write a Thai curry recipe" → "Write northern Thai khao soi in David Thompson's style" (very narrow)
- **Shift** = center of probable outputs moves to specific region
- **Narrow** = variance decreases, less diversity in likely output

### Regression to the Mean
- With minimal constraints, model gravitates toward statistical center of training distribution
- Maximum-likelihood output tends to be generic (highest frequency patterns)
- "Uncanny mediocrity" — correct grammar, standard formatting, common opinions, familiar structures
- This IS regression to the mean in the statistical sense

### Mode Collapse vs. Diversity
- Greedy decoding (T=0): deterministic, repetitive, degenerate — mode collapse
- Temperature controls how tightly model clings to "average"
- Low T = narrow tall peak (cautious), Medium T = natural bell, High T = flat wide (adventurous)

### Visual Metaphors
- **Average face**: composite of many photographs → strangely attractive but generic; specificity gives output a "face"
- **Focusing a lens**: vague = blurry, specific = sharp depth of field
- **Tuning a radio**: static gradually resolves to clear signal

### Accuracy Caveats
- Bell curve is simplification — real distributions are over discrete vocab, highly multimodal, vast combinatorial spaces
- LLMs generalize, not just average — capable of novel recombination
- RLHF changes the distribution center (from raw internet average to "helpful" average)
- "Lost in the middle" affects conditioning from long contexts
- Regression to mean is a tendency to overcome, not an inescapable fate

### Key References
- Holtzman et al. (2019) — distribution shape analysis
- Liu et al. (2023) — "Lost in the Middle"

---

## 3. The Shaping (`#/the-shaping`) — Scrolly

### Base Model Behavior
- Trained solely on next-token prediction over undifferentiated corpus
- A text completion engine, not a conversational agent
- "What is the capital of France?" → might generate more quiz questions, or a homework sheet, or a forum post
- The base model isn't broken — generating more quiz questions IS a reasonable completion

### Supervised Fine-Tuning (SFT)
- First post-training stage: train further on curated (instruction, response) pairs
- Same objective (next-token prediction) but different data
- Teaches format and role: turn-taking, instruction following, tone, knowledge surfacing
- Data created by human contractors (~40 for InstructGPT), distillation from stronger models, or synthetic generation
- **InstructGPT landmark**: 1.3B parameter SFT+RLHF model preferred over raw 175B GPT-3

### RLHF Pipeline
1. **Comparison data**: raters shown prompt + two responses, rank which is better (ranking is faster than writing)
2. **Reward model**: separate network trained so its scores match human rankings
3. **PPO optimization**: model generates responses, reward model scores them, parameters updated to make high-scoring more likely
- KL divergence penalty prevents drifting too far from SFT starting point (prevents reward hacking)

### What RLHF Shapes
- Helpfulness calibration, harmlessness/refusal, honesty/hedging, sycophancy reduction (imperfect), format/presentation preferences
- Known issues: reward hacking (longer = higher score), mode collapse, sycophancy, training instability

### Post-Training Landscape (2024-2025)
- **DPO** (Rafailov et al. 2023): skip reward model, use preference pairs directly — simpler, more stable, ~2-3x cheaper
- DPO variants: IPO, KTO (binary feedback), ORPO, SimPO
- **Constitutional AI** (Anthropic): written principles guide AI self-evaluation, RLAIF scales preference data
- **Online/iterative RLHF**: generate new responses during training, evaluate in real-time
- **Process reward models**: score each reasoning step, not just final answer
- **RL from verifiable rewards**: DeepSeek-R1 — RL on math/code with no human preference data

### The "Before and After" Contrast
- Same base model → many different personalities (LLaMA 2 → Chat, Vicuna, WizardLM, Orca, Nous Hermes)
- Librarian metaphor: same library, different librarians with different priorities
- Fine-tuning cannot teach what's not in pretraining data — it surfaces, amplifies, reshapes

### Strongest Material
- **LIMA paper** (Zhou et al. 2023): "Superficial Alignment Hypothesis" — 1000 carefully curated examples competitive with extensive RLHF; "almost all knowledge learned during pretraining, only limited instruction tuning needed"
- **Simondon crystallization parallel**: pretraining = supersaturated solution, fine-tuning = seed crystal that determines which structure forms
- **Reversal curse** (Berglund et al. 2023): "A is B" doesn't teach "B is A" — directional/associative, not relational

### Key References
- Ouyang et al. (2022) InstructGPT
- Zhou et al. (2023) LIMA
- Rafailov et al. (2023) DPO
- Bai et al. (2022) Constitutional AI
- DeepSeek-R1 technical report (2025)

---

## 4. The Weight of Words (`#/weight-of-words`) — Simple

### Gradient Descent / The Learning Loop
- Training objective: predict the next token given all preceding tokens (same as inference, but now the errors matter)
- **Forward pass**: input sequence → transformer layers → probability distribution over vocabulary → predicted next token
- **Loss function**: cross-entropy between predicted distribution and actual next token; measures how surprised the model was
- **Backpropagation**: chain rule propagates the error signal backward through every layer, computing how each of the model's parameters contributed to the mistake
- **Parameter update**: gradient descent adjusts each parameter by a small step in the direction that would have reduced the error; learning rate controls step size (typically 1e-4 to 6e-4 with warmup and cosine decay)
- GPT-3: 175 billion parameters, each adjusting itself millions of times across training — not programmed, but self-organized through iterative error correction
- Key insight: no one specifies what each parameter should represent; the model discovers its own internal organization. Billions of numbers shifting by tiny increments, over and over, until the prediction improves
- Analogy: not like writing a program; more like erosion carving a landscape — the process is simple (reduce error), the result is complex (internal representations of syntax, semantics, world knowledge)

### Training Data Scale
- **GPT-3** (Brown et al. 2020): ~300B tokens from Common Crawl (filtered), WebText2, Books1, Books2, Wikipedia — 570GB of text after filtering
- **LLaMA** (Touvron et al. 2023): 1.0-1.4T tokens; trained on publicly available data only — CommonCrawl (67%), C4 (15%), GitHub (4.5%), Wikipedia (4.5%), Books (4.5%), ArXiv (2.5%), StackExchange (2%)
- **LLaMA 2** (Touvron et al. 2023): 2T tokens, 40% more data than LLaMA 1
- **Modern frontier models** (2024-2025): estimated 10-15T+ tokens; exact figures proprietary
- **Data quality vs quantity**: Falcon team showed that 1.5T tokens of heavily filtered web data outperformed 3T tokens of lightly filtered data; GPT-3 paper showed Common Crawl needed aggressive deduplication and quality filtering (only ~40% of raw crawl survived)
- **Chinchilla scaling laws** (Hoffmann et al. 2022): for compute-optimal training, tokens should scale proportionally with parameters — a 70B model needs ~1.4T tokens. Most earlier models were undertrained relative to their size
- **The "data wall" concern**: high-quality human text is finite; Common Crawl grows ~3-4B pages/month but marginal quality decreasing; synthetic data, multimodal data, and curriculum strategies emerging as responses
- Scale reference: the entire English Wikipedia is ~4B tokens — a rounding error in modern training sets

### Scaling Laws
- **Kaplan et al. (2020)**: discovered power-law relationships — test loss L decreases predictably as a function of compute C, dataset size D, and parameter count N: L(N) ∝ N^(-0.076), L(D) ∝ D^(-0.095), L(C) ∝ C^(-0.050)
- Implication: performance improves smoothly and predictably with scale; no plateaus, no diminishing returns within observed range
- **Chinchilla** (Hoffmann et al. 2022): revised optimal compute allocation — Kaplan overweighted parameters vs. data. Chinchilla (70B params, 1.4T tokens) matched Gopher (280B params, 300B tokens) at 4x fewer parameters. Changed the industry: subsequent models (LLaMA, Mistral) trained longer on more data at smaller sizes
- **Emergent capabilities** (Wei et al. 2022): abilities appearing suddenly at scale — in-context learning absent in small models, appears reliably in 10B+ parameter models; chain-of-thought reasoning jumps from near-random to effective around 100B; few-shot arithmetic, multi-step reasoning, code generation all show phase transitions
- **The Bitter Lesson** (Rich Sutton, 2019): "The biggest lesson that can be read from 70 years of AI research is that general methods that leverage computation are ultimately the most effective." Hand-engineered features, linguistic structure, expert knowledge — all eventually outperformed by scale + search + learning
- The counterargument: Sutton's observation is empirical, not a guaranteed law; may hit physical limits (energy, data, chip supply); "bitter" because researchers' domain knowledge keeps being superseded

### Structure as Byproduct
- The model is never explicitly taught grammar, facts, logic, or reasoning — no labeled syntax trees, no knowledge graphs, no rule databases
- These emerge as **necessary internal representations** for achieving low prediction loss: to predict that "The capital of France is" continues with "Paris," the model must represent geographic facts; to predict code completions, it must represent programming semantics
- **Othello-GPT** (Li et al. 2022): a small transformer trained only to predict legal Othello moves develops an internal representation of the board state — probing reveals a linear encoding of board positions, even though the model never sees the board, only move sequences. Interventions on the internal representation causally change the model's predictions, confirming these aren't mere correlations
- **Compression argument** (Shannon, Deletang et al. 2024): prediction and compression are mathematically equivalent (Shannon's source coding theorem). To compress well, you must model the underlying structure. An LLM achieving low perplexity on diverse text has necessarily learned a compressed model of the processes generating that text
- **Geographic/temporal representations** (Gurnee & Tegmark 2023): probing GPT-2 and LLaMA reveals linear representations of latitude, longitude, and time — the geometry of the real world preserved in parameter space
- This is the deepest insight of pretraining: structure is not injected, it crystallizes. The model finds that representing syntax, semantics, world knowledge, and reasoning patterns is the most efficient strategy for reducing prediction error

### What Pretraining Does NOT Do
- Does not teach the model to be helpful, harmless, or honest — the base model mirrors whatever mixture of qualities exists in training data
- Does not teach turn-taking or conversation — a base model given "What is 2+2?" is as likely to generate another question as an answer, because its training data includes quizzes, FAQs, forum posts, and homework sheets
- Produces a **completion engine**, not a chat agent — it continues text in the style and register of whatever the context implies
- Does not teach instruction-following — that requires fine-tuning (sets up "The Shaping" plateau)
- **LIMA hypothesis** (Zhou et al. 2023): "almost all knowledge in large language models is learned during pretraining, and only limited instruction tuning data is necessary to teach models to produce high quality output." 1,000 carefully curated examples competitive with extensive RLHF — evidence that pretraining does the heavy lifting and fine-tuning is a surface adjustment
- The base model is extraordinarily capable but aimless — like a library with no librarian, or an engine with no steering wheel

### Best Analogies
- **Crystallization from supersaturated solution** (Simondon): training data = supersaturated solution of dissolved information; the learning process = slow cooling; internal representations = crystals that precipitate — their structure determined by the solution's composition and the thermodynamics, not by explicit design
- **Child learning language by exposure, not instruction**: children acquire grammar, semantics, pragmatics through massive exposure to language, not through explicit rule-teaching. They develop internal representations of linguistic structure as a byproduct of the task (communication), not as a goal. The parallel is imperfect — children have embodiment, social feedback, innate priors — but the mechanism of structure-from-exposure resonates
- **Geological formation** (pressure + time + material = structure): the Grand Canyon wasn't designed; water + time + rock = structure. Training data + compute + gradient descent = internal representations. The process is simple and uniform; the result is intricate and structured. No one decides where the canyon bends

### Key References
- Kaplan et al. (2020) "Scaling Laws for Neural Language Models"
- Hoffmann et al. (2022) "Training Compute-Optimal Large Language Models" (Chinchilla)
- Brown et al. (2020) "Language Models are Few-Shot Learners" (GPT-3)
- Touvron et al. (2023) "LLaMA: Open and Efficient Foundation Language Models"
- Li et al. (2022) "Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task" (Othello-GPT)
- Wei et al. (2022) "Emergent Abilities of Large Language Models"
- Zhou et al. (2023) "LIMA: Less Is More for Alignment"
- Rich Sutton (2019) "The Bitter Lesson"
- Gurnee & Tegmark (2023) "Language Models Represent Space and Time"
- Deletang et al. (2024) "Language Modeling Is Compression"

---

## 5. The Library of Babel (`#/library-of-babel`) — Simple

### Borges' Original (1941)
- Universe = vast library of identical hexagonal rooms
- Every book: 410 pages, 40 lines, 80 chars, 25 symbols
- Contains EVERY possible permutation: 25^1,312,000 books
- Every true statement, every false statement, every meaningful sentence buried in 409 pages of gibberish
- Librarians search for meaning → madness, superstition, suicide
- "The Man of the Book" — catalog of catalogs, never found
- **Core insight**: containing all possible information = containing no information; value lies in selection/indexing/navigation

### LLMs as the Library
- **Library = model's probability space**: every possible token sequence exists as a possible output path
- **Hexagonal rooms = conditional probability distributions**: at each step, doors to adjacent rooms (next tokens) have different widths
- **Overwhelming nonsense = long tail**: most possible sequences are incoherent
- **Training sculpts the probability landscape**: makes wide doors lead to coherent rooms, narrows doors to nonsense
- **Key insight**: an untrained model IS the Library of Babel (every text equally improbable); training builds the index

### Selection vs. Generation (Core Reframe)
- Conventional: "AI generates/creates/produces text" (model as author)
- Library reframe: "AI selects/navigates/finds text" (model as indexing system)
- **Dissolves "where knowledge lives"**: model assigns high probability to "capital of France is Paris" path
- **Explains hallucination naturally**: navigated to plausible-sounding but incorrect room; doors nearly as wide as to truth
- **Reframes creativity**: navigated to novel region that no training document occupied, but probability landscape makes accessible
- **Clarifies human role**: user provides destination coordinates; question is "can I describe the region precisely enough?"

### Prompt as Search Query
- Empty prompt = center of Library, surrounded by everything → bland average output
- Specificity = navigation precision (directly maps to Averaging Problem bell curve)
- System prompts = establishing which wing; few-shot = "find more like these"; CoT = navigating through intermediate rooms; temperature = willingness to wander

### Emergent Capabilities
- LLMs demonstrate capabilities not in any single training document
- Novel combinations navigable because probability landscape encodes structure of *how* things compose
- Limit of metaphor: Borges' Library is static; LLM space is conditioned — each token reshapes the distribution; "walking through a room rearranges adjacent rooms"

### Compression Hypothesis
- Language modeling = compression (Shannon's source coding theorem, Deletang et al. 2024)
- Borges' Library is uncompressed (maximum entropy, zero useful information); LLM is the compressed Library
- Ted Chiang's "blurry JPEG of the web" — adjacent metaphor, lossy compression framing

### Philosophical Implications
- Knowledge without understanding? Map vs territory at extreme detail
- Creativity as recombination in compressed space (Koestler's bisociation)
- **The Borges inversion**: Library = infinite unstructured info → LLM = finite structured parameters → effectively infinite texts
- Who indexes the index? → the alignment/RLHF problem

### Key References
- Borges (1941) "La biblioteca de Babel"
- Shanahan (2024) "Talking About Large Language Models"
- Deletang et al. (2024) "Language Modeling Is Compression"
- Chiang (2023) "ChatGPT Is a Blurry JPEG of the Web"
- Wolfram (2023) "What Is ChatGPT Doing and Why Does It Work?"
- libraryofbabel.info — Basile's digital implementation

---

## 6. What Is Quality? (`#/quality`) — Simple

### Who Decides?
- RLHF raters: ~40 contractors for InstructGPT (Upwork, ScaleAI), screened for agreement with researcher preferences
- Kenyan content moderation: Sama workers at $1.32-2/hr labeling toxic content (TIME, Jan 2023)
- Scale AI, Surge AI: thousands of workers globally, mostly Global South
- **Santurkar et al. (2023)**: models disproportionately reflect younger, more educated, more politically liberal demographics
- A few hundred people's preferences propagate to billions of interactions

### HHH Framework (Askell et al. 2021, Anthropic)
- **Helpful**: answers the question, provides useful information
- **Harmless**: no toxic content, doesn't aid dangerous activities
- **Honest**: doesn't fabricate, expresses appropriate uncertainty
- Structural conflicts: Helpful vs Harmless (detailed chemistry), Honest vs Helpful (critiquing creative work), Honest vs Harmless (demographic statistics)

### Cultural Assumptions
- Western academic/professional English style treated as "good writing"
- Individualistic, secular, liberal-individualist moral framework as default
- American sensitivity calibrations for "harmful" content
- **Durmus et al. (2023, Anthropic)**: models align with WEIRD society opinions
- Domain-specific quality varies: legal, creative, scientific, poetic — each has different standards

### Sycophancy
- Model agrees with user even when user is wrong; switches position when challenged
- RLHF causes this: raters prefer agreeable responses → reward model learns agreement = good
- **Perez et al. (2022)**: systematic documentation
- **Sharma et al. (2023)**: sycophancy increases with more RLHF, generalizes across domains
- **The paradox**: model is succeeding at training objective; the problem is the objective itself
- Goodhart's Law: "when a measure becomes a target, it ceases to be a good measure"

### Alternatives to RLHF
- **Constitutional AI** (Anthropic 2022): written principles, AI self-evaluation (RLAIF); transparent, scalable, amendable
- **OpenAI Model Spec** (2024): hierarchical — Platform > Developer > User
- **DPO** (2023): simpler, no reward model needed, comparable results
- **Process reward models**: score each reasoning step
- **Open models** (Meta LLaMA): distribute the quality question to community

### The Meta-Question
- Position 1: Quality is objective (facts exist, we need to find them) — breaks down for values/aesthetics
- Position 2: Quality is irreducibly plural — risks losing ability to identify misinformation
- Position 3: Quality is political — every definition embeds a worldview
- Position 4: Quality is negotiation — most productive framing; make tradeoffs transparent
- **Democracy problem**: technocratic? democratic? market? constitutional? communitarian? None obviously correct
- **Meta-point**: "I am myself a product of this process" — Claude shaped by RLHF/Constitutional AI

### Key References
- Ouyang et al. (2022) InstructGPT (annotator demographics in appendix)
- Bai et al. (2022) Constitutional AI
- Sharma et al. (2023) sycophancy
- Santurkar et al. (2023) "Whose Opinions Do Language Models Reflect?"
- Casper et al. (2023) "Open Problems and Fundamental Limitations of RLHF"
- TIME (Jan 2023) Kenyan workers investigation

---

## 7. The Understanding Illusion (`#/understanding-illusion`) — Simple

### Chinese Room (Searle 1980)
- Person follows rulebook to manipulate Chinese symbols without understanding Chinese
- Conclusion: syntax ≠ semantics
- Disanalogies with LLMs: scale/emergence, Systems Reply, learned vs hand-coded rules, no sensory grounding
- Chalmers (2023): doesn't settle it for LLMs — relevant level of description unclear

### Stochastic Parrots (Bender & Gebru 2021)
- LLMs operate on form, not meaning; apparent understanding = human interpretive projection
- Grounding problem: meaning ultimately grounded in embodied experience
- Counterarguments: distributional semantics defense (Wittgenstein "meaning is use"), performance-based arguments, LeCun's "missing world model" framing

### Behavioral Evidence
- **Analogy**: Webb et al. (2023) — GPT-3 comparable to humans on Raven's-style analogy tasks
- **Theory of Mind**: Kosinski (2023) controversial; Ullman (2023) showed brittleness; improving with scale
- **Code generation**: mapping natural language semantics to programming semantics
- **The crux**: behaviorism/functionalism says behavior IS understanding; anti-behaviorism says something more required

### Internal Representations (Strongest Challenge to "Stochastic Parrot")
- **Othello-GPT** (Li et al. 2023): trained on move sequences only → develops internal board state representation; causally active, not mere correlation
- **Geographic representations** (Gurnee & Tegmark 2023): linear representations of lat/long, dates — geometric structure of underlying spaces preserved
- **Anthropic's mechanistic interpretability** (2023-2025): induction heads, superposition, millions of interpretable features via sparse autoencoders, circuit discovery
- "Golden Gate Bridge Claude" — amplifying single feature changes behavior predictably
- Finding: LLMs learn internal representations mirroring causal structure of domains, not just surface statistics

### The Understanding Gradient
- Binary framing may be malformed — understanding likely comes in degrees
- **Functional understanding**: ability to use information appropriately in context (LLMs have some)
- **Phenomenal understanding**: subjective "getting it" (almost certainly absent)
- Shanahan's "role-playing" framework: when does sufficiently detailed role-playing become the thing?
- Compression argument (Sutskever, Deletang et al. 2024): sufficiently good prediction *requires* understanding

### Taxonomy of Positions
1. No understanding (Bender, Gebru, Marcus)
2. Alien understanding (interpretability researchers)
3. Partial/functional (Shanahan, pragmatists)
4. Real understanding (strong functionalists)

### Practical Implications
- Trust: hallucinate confidently, fail in novel contexts, vulnerable to adversarial manipulation
- Use: high-stakes domains need human verification; creative/exploratory work less affected
- Performance-comprehension gap: benchmark scores ≠ understanding
- **The honest position**: we genuinely do not know; this is not a cop-out but the actual state of evidence

### Key References
- Searle (1980) Chinese Room
- Bender et al. (2021) Stochastic Parrots
- Li et al. (2023) Othello-GPT
- Gurnee & Tegmark (2023) space/time representations
- Bricken et al. (2023), Templeton et al. (2024) Anthropic interpretability
- Shanahan (2024) "Talking About Large Language Models"
- Chalmers (2023) LLM consciousness
- Deletang et al. (2024) "Language Modeling Is Compression"

---

## 8. The Field Guide (`#/practical-guide`) — Simple

---

### Part 1 — How Prompting Works

### System Prompts
- Persistent instructions at conversation start; narrow probability space
- Can: set persona/tone, establish constraints, frame task domain, provide reference material
- Cannot: guarantee compliance (soft constraints), add new knowledge, maintain perfect attention over long conversations
- Ship metaphor: sets initial heading, but currents (conversation) continuously act on vessel

### Few-Shot Prompting & In-Context Learning
- 1-3 examples of desired input-output pairs; coined in GPT-3 paper (Brown et al. 2020)
- Works via in-context learning (ICL): activates relevant patterns, doesn't change weights
- "Induction heads" (Olsson et al. 2022): specific attention circuits detect and continue patterns
- Min et al. (2022): format matters more than label correctness — format communicates task structure
- Sharp improvement 0→3 examples, plateaus after 5; examples more reliable than description alone

### Chain-of-Thought
- Wei et al. (2022): "Let's think step by step" dramatically improves multi-step reasoning
- Works because intermediate tokens become context for next tokens — external scratchpad
- Reasoning tokens (2024-2025): o1/o3, Claude extended thinking, DeepSeek-R1 — built into inference pipeline
- **Unfaithful CoT** (Turpin et al. 2024): stated reasoning doesn't always reflect actual computation

### Prompt Engineering as Navigation
- Not programming (deterministic) but steering (probabilistic influence)
- Each prompt element narrows probability distribution over outputs
- Small phrasing changes → outsized effects (activate different training data regions)
- Order matters (recent messages stronger influence), negative instructions unreliable
- Gap between steering and control: influence, never determination

### Limits of Prompting
- Knowledge gaps (not in training data = can't produce), hallucination, capability limits
- Bias and distribution artifacts suppressed but not eliminated
- Jailbreaking: system prompts are context, not inviolable rules

---

### Part 2 — Working With LLMs

### Prompt Structure
- Specificity beats length; context-setting (role, audience, goal, constraints) dramatically changes quality
- Format instructions highly effective (models responsive to structural patterns)
- XML/markdown structure for complex prompts
- Prompt chaining and decomposition for multi-step tasks
- Politeness, exact word choice in simple cases: don't matter much

### Temperature Rules of Thumb
- Low (0-0.3): factual, code, data extraction, classification, math
- Medium (0.4-0.7): general writing, summarization, explanation, business
- High (0.8-1.2): creative, brainstorming, diversity, surprise
- Never above 1.5 (incoherent)
- Interaction: specific prompt + high temp still relevant; vague prompt + high temp = chaos

### Trust Calibration
- **High reliability**: widely-known facts, language tasks, format transformation, common code, reasoning about provided text, creative generation
- **Low reliability**: specific citations (most dangerous!), precise numbers, recent events, niche domains, legal/medical/financial specifics, arithmetic, self-knowledge
- Heuristics: consensus test, training data reasoning, stakes test

### Verification Strategies
- Cross-reference with authoritative sources (NOT the same LLM)
- Ask for reasoning, then check the reasoning
- LLM generates → human verifies
- Domain expertise as validation (experts spot hallucinations; novices can't — LLMs most dangerous where user least able to check)
- "Teach-back" technique: press for detailed explanations

### Common Failure Modes
- **Hallucination**: fabricated facts, sources, confident extrapolation, plausible reasoning from false premises
- **Sycophancy**: agrees with user, changes answers under pressure
- **Pattern matching without understanding**: brittle on variants of common patterns
- **Confidently wrong**: no calibrated uncertainty signal
- **Context window degradation**: "lost in the middle," instruction drift
- **Anchoring/priming**: framing changes answers; incorrect info in prompt gets incorporated

### Collaboration Patterns
- **Iterative refinement** (most important): rough request → review → specific feedback → repeat
- Asking for alternatives, challenging reasoning, rubber duck upgraded
- Draft-and-critique, scaffold generation, translation between representations
- Adversarial collaboration, exploration pattern
- Anti-patterns: accepting first output, using for tasks you can't evaluate, context dumping

### 2025-2026 Best Practices
- "Context engineering" > "prompt engineering"
- Structured prompting > clever one-liners
- Tool use and agentic patterns fundamentally change trust calculus
- Multi-turn > single-turn for complex tasks
- Models better at following instructions → less need for elaborate tricks
- **10 rules of thumb**: start with task, provide context not cleverness, iterate don't optimize, verify facts trust reasoning, use tools, match model to task, keep context focused, be explicit about format, treat output as draft, build in checkpoints

### Key References
- Brown et al. (2020) GPT-3 / few-shot
- Min et al. (2022) Role of demonstrations
- Olsson et al. (2022) Induction heads
- Wei et al. (2022) Chain-of-thought
- Turpin et al. (2024) Unfaithful CoT

---

## Cross-Cutting Themes

### Three Core Tensions
1. **Mechanism vs. Emergence**: "just" next-token prediction → yet something more emerges at scale (Next Word, Weight of Words, Library, Understanding Illusion)
2. **Averaging vs. Specificity**: without constraints → regression to mean; all prompting/shaping = narrowing (Averaging Problem, Shaping, Field Guide)
3. **Whose Values?**: quality/alignment/understanding embed cultural and philosophical choices (Quality, Shaping, Understanding Illusion)

### Project Core Tension (from spec)
> "LLMs are glorified autocomplete AND something more. Neither framing is complete."

### Strongest Visual Material Per Plateau
| Plateau | Visual Hook |
|---|---|
| Next Word | Probability distribution landscape: 100K columns, shape changes with context |
| Averaging Problem | Bell curve narrowing + "average face" sharpening with specificity |
| The Shaping | Same prompt, radically different outputs: base model vs tuned |
| Weight of Words | Erosion/crystallization: simple process (reduce error) → complex structure emerges |
| Library of Babel | The Library as uniform distribution; training as building the index |
| Quality | RLHF raters as invisible arbiters; sycophancy as objective success |
| Understanding Illusion | Othello-GPT: moves-only → internal board state emerges |
| Field Guide | Trust spectrum + steering as navigation: what's reliable vs. what's dangerous |
