# Content Accessibility Audit — rizomas-2fe

**Date:** 2026-02-15
**Scope:** All 17 plateaus in `index.html`, plus landing page, navigation, and metadata text.
**Goal:** Every piece of content comprehensible to someone without a technical background.

---

## 1. Acronym Inventory

### ❌ Never Expanded (needs fix)

| Acronym | Expansion | Where Used | Fix |
|---------|-----------|------------|-----|
| **LLM/LLMs** | Large Language Model(s) | Title, entry questions, 8+ plateaus | Add "(LLMs)" after first "Large Language Models" on landing; expand on first use in each plateau |
| **GPU** | Graphics Processing Unit | digital-footprints seed detail | Expand inline: "specialized GPU (graphics processing unit)" |
| **EU** | European Union | near-zero-cost-impact, black-box-oracle | Expand to "European Union (EU)" on first use |

### ⚠️ Partially Expanded (inconsistent)

| Acronym | Expansion | Status | Fix |
|---------|-----------|--------|-----|
| **AI** | Artificial Intelligence | Expanded in 4 plateaus' opening sentences; used without expansion in ~9 others | Acceptable — universally recognized. No action needed |
| **RLHF** | Reinforcement Learning from Human Feedback | Expanded once in the-shaping seed; used bare in 4 other locations | Add expansion on first use in each plateau where it appears |
| **ANN/ANNs** | Artificial Neural Network(s) | Full phrase precedes acronym in same paragraph (artificial-brain) | Acceptable — proximity expansion works |

### ✅ Properly Expanded

| Acronym | Where | Notes |
|---------|-------|-------|
| XAI | black-box-oracle | "Explainable AI (XAI)" |
| GDPR | black-box-oracle | Label uses acronym; seed detail expands it |
| UBI | automation-of-cognition | "Universal Basic Income (UBI)" |
| CO₂ | digital-footprints | Contextualized by "carbon dioxide" |

### Not Requiring Expansion

| Acronym | Reason |
|---------|--------|
| GPT | Only appears as proper name "Othello-GPT" |
| AI | Universally understood |

---

## 2. Jargon Inventory

### 🔴 High Priority — Essential terms with NO inline seed definition

These appear in visible essay text and would block comprehension for non-technical readers.

| Term | Plateaus | Recommendation |
|------|----------|----------------|
| **token(s)** | next-word, weight-of-words, practical-guide, tool-user, digital-footprints, understanding-illusion | Add inline seed on first use (next-word step 1). Definition: "A token is a chunk of text — usually a word or part of a word — that the model processes as a single unit." |
| **distribution** | next-word, averaging-problem, practical-guide, near-zero-cost-impact | Add inline seed in next-word. Definition: "A probability distribution maps every possible next word to a likelihood. The model doesn't pick one word — it weighs all of them." |
| **parameters** | weight-of-words, tool-user | Add inline seed in weight-of-words step 1. Definition: "Parameters are the individual numbers inside the model that get adjusted during training — billions of tiny dials that encode patterns." |
| **weights** | next-word, weight-of-words, practical-guide | Add inline seed or simplify to "internal patterns" where possible. If kept: "Weights are the learned numerical values that determine how the model responds to input." |
| **hallucination** | practical-guide, echoes-of-the-past, tool-user, empathy-machine | Add inline seed in practical-guide step 3. Definition: "When a model confidently states something that is factually wrong or entirely fabricated." |

### 🟡 Medium Priority — Terms only in seed details or infrequent

| Term | Where | Recommendation |
|------|-------|----------------|
| **alignment** | question cards, seed details (3 plateaus) | Add brief parenthetical: "alignment (the process of making models behave as intended)" |
| **pretraining** | weight-of-words body text | Add inline seed or replace with "initial training phase" |
| **gradient descent** | weight-of-words seed detail | Already inside a seed tooltip. Add parenthetical: "gradient descent (a method of learning by repeatedly correcting errors)" |
| **power law** | weight-of-words body text | Replace with "a smooth, predictable curve" or add brief parenthetical |
| **few-shot** | practical-guide seed detail | Already inside tooltip. Add brief gloss: "few-shot examples (showing the model a handful of input-output pairs)" |
| **chain-of-thought** | practical-guide seed detail, marginalia | Already inside tooltip. Add gloss: "chain-of-thought (asking the model to reason step by step)" |
| **phase transitions** | weight-of-words seed detail | Replace with "sudden jumps in capability" |
| **Chinchilla** | weight-of-words marginalia + seed detail | Add context: "Chinchilla, a 2022 research study" or remove proper name |

### ⚪ Low Priority — Single use or already well-contextualized

| Term | Where | Recommendation |
|------|-------|----------------|
| induction heads | practical-guide seed detail | Replace with "specific internal circuits that detect and continue patterns" |
| redistribution | automation-of-cognition | Adequately explained by surrounding text |
| freemium | near-zero-cost-impact | Replace with "free tiers" |
| de-skilling | near-zero-cost-impact | Self-explanatory from context |

### ✅ Already Has Inline Seed (no action needed)

context window, temperature, reward model, base model, sycophancy, neural networks, deep learning, inference phase, Mixture of Experts, XAI, stochastic parrot, Othello-GPT, Chinese Room, qualia, embodied cognition, zero marginal cost, Goodhart's Law, predistribution, UBI, GDPR, deepfakes, anthropomorphize, parasocial relationships, textual corpora, Eurocentric, infobesity, cognitive load, cognitive struggle, carbon footprint, Sustainable AI, jailbreaks, copyright laws, homogenization, writer's block, personalized learning, counter-storytelling, AI psychosis, scaling laws, educational anxiety, white-collar jobs, ai-companion

### Terms NOT Present (no action)

logits, softmax, backpropagation, transformer, embedding, fine-tuning — these do not appear in any essay text.

---

## 3. Glossary/Tooltip Gap Analysis

The existing `buildInlineSeed()` system is the right mechanism — no new UI needed.

### Proposed New Seeds (5 additions)

1. **"token"** in `next-word` step 1 — wrap "next word" context to also define "token"
2. **"distribution"** in `next-word` step 2 — "The distribution of possibilities is a landscape" → make "distribution" a seed
3. **"parameters"** in `weight-of-words` step 1 — "Billions of parameters shift" → make "parameters" a seed
4. **"weights"** in `weight-of-words` seed detail — or simplify prose to avoid the term
5. **"hallucination"** in `practical-guide` step 3 — "The model will hallucinate" → make "hallucinate" a seed

### Seed-Detail Jargon (terms inside tooltips)

Several seed definitions use jargon that the seed is supposed to be explaining:
- **"The Learning Loop"** seed uses "Gradient descent" without definition → add parenthetical
- **"Scaling Laws"** seed uses "power-law relationships" and "phase transitions" → simplify
- **"Prompt Scaffolding"** seed uses "induction heads" → replace with plain language
- **"Chinchilla"** reference in marginalia/seed → add "a 2022 research study that showed"

---

## 4. Readability Review — Flagged Passages

### Plateau: `near-zero-cost-impact`

**Step 1 (line 2988):**
> "Traditional pricing collapses. Business models scramble to adapt — subscriptions, bundling, freemium — anything to capture value when the product itself trends toward free."

→ "freemium" is jargon. Replace with "free tiers" or "free-with-upgrades models."

### Plateau: `weight-of-words`

**Step 3 body (line 3460):**
> "Performance grows smoothly with compute, data, and parameters. No plateaus, no diminishing returns — just a power law stretching upward."

→ "power law" is opaque. Suggest: "…just a smooth, predictable curve stretching upward."

**Scaling Laws seed detail:**
> "Kaplan et al. discovered power-law relationships. But at certain thresholds, capabilities appear suddenly: in-context learning, chain-of-thought reasoning, code generation."

→ Three jargon terms in one sentence. Suggest: "…capabilities appear suddenly: the ability to learn from examples in conversation, to reason step by step, and to write code."

### Plateau: `practical-guide`

**Prompt Scaffolding seed detail (non-scrolly version, line 3859):**
> "Few-shot examples and chain-of-thought provide form, not just content, guiding the model's internal flow."

→ Assumes reader knows "few-shot" and "chain-of-thought." Suggest: "Showing the model a few input-output examples, or asking it to reason step by step, provides form — not just content — guiding how it responds."

**Prompt Scaffolding seed detail (scrolly version, line 3699):**
> "The induction heads — specific attention circuits — detect and continue patterns from examples."

→ "induction heads" and "attention circuits" are ML internals. Suggest: "Specific internal circuits detect and continue patterns from examples."

### Plateau: `quality`

**Step 3 body, Sycophancy seed (scrolly, line 3579):**
> "Goodhart's Law: when a measure becomes a target, it ceases to be a good measure."

→ Well-explained inline. ✅ No change needed.

### Plateau: `the-shaping`

**Step 2 body (scrolly, line 2944):**
> "This score becomes the gradient signal for the base model."

→ "gradient signal" is opaque to non-technical readers. Suggest: "This score becomes the training feedback that nudges the base model."

### Plateau: `understanding-illusion`

**Step 2 body (line 3631):**
> "Searle imagined a room where someone follows rules to manipulate Chinese symbols without understanding Chinese."

→ Good — explains the concept accessibly. ✅

### Plateau: `artificial-brain`

**Step 2 (line 3351):**
> "the brain predicts the world multisensorily, socially, and physically"

→ "multisensorily" is awkward. Suggest: "the brain predicts the world through multiple senses, social interaction, and physical experience."

### Plateau: `black-box-oracle`

**Step 1 (line 3243):**
> Dense paragraph mixes "deep learning models," "LLMs," "black boxes," "opacity," and "multi-layered connections" in quick succession.

→ Suggest breaking into two shorter paragraphs. The concept is clear but the density is high.

---

## 5. Recommended Execution Order

1. **Acronym fixes** — Expand LLM, GPU, EU, and ensure RLHF is expanded on each first use (~30 min)
2. **Add 5 new inline seeds** — token, distribution, parameters, weights, hallucination (~1 hr)
3. **Simplify seed-detail jargon** — gradient descent, power law, induction heads, Chinchilla (~30 min)
4. **Prose rewrites** — freemium, power law, multisensorily, gradient signal, Scaffolding details (~30 min)

Total estimated effort: ~2.5 hours of implementation work.
