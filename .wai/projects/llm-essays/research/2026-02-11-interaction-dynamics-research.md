# Non-Linear Interaction Dynamics: Research & Recommendations

> Compiled 2026-02-11. Deep research across AIX, cognitive science, ergodic
> literature, and provocative interaction design to inform improvements to the
> Rizomas reading experience. Goal: make the essays feel uncanny, question-
> provoking, and engaging rather than linear and complacent.

---

## 1. Current State Assessment

### 1.1 What Exists

Rizomas is a single-file SPA (1,715 lines, vanilla JS, zero dependencies)
presenting 8 interconnected visual essays ("plateaus") about how LLMs work.

**Scrolly plateaus** (3 of 8: Next Word, Averaging Problem, The Shaping):
- Two-column layout: sticky visual panel (Canvas API) + scrollable text steps
- IntersectionObserver triggers step transitions at 0.55 threshold
- Whispers: faint italic questions in the visual panel margin linking to other plateaus
- Trace pips: dots lighting up as whispers appear
- Constellation: radial node map on the final step
- Inline seeds: expandable elements revealing definitions on click
- Question cards: navigation cards at bottom with entry questions

**Simple plateaus** (5 of 8):
- Single-column centered text (max-width 42rem)
- Seed clusters: vertical stacks of expandable definitions
- Question cards at bottom

**Navigation system:**
- Canvas-based mini-map (fixed bottom-right, 160x120px desktop)
- Rhizome overlay (modal with full graph, frosted backdrop)
- Hash-based SPA routing
- localStorage visit tracking with trail history (`state.v`, `state.tr`)

### 1.2 The Problem

Despite the rhizomatic structure *between* plateaus, the experience *within*
each plateau is conventional essay reading: scroll down, text appears, reach
the bottom, pick a link. The seeds add depth but do not disrupt the reading
flow --- they function as optional footnotes. The whispers are beautiful but
passive --- faint text the reader may or may not notice.

**The non-linearity lives in the navigation map but not in the reading
experience itself.**

The content is intellectually rich --- probability distributions, the nature
of understanding, the illusion of comprehension --- but the interaction model
does not make the reader *feel* those things. It describes them.

---

## 2. Cognitive Science Foundations

### 2.1 Desirable Difficulty

Robert Bjork's research program at UCLA established that conditions making
learning harder in the short term lead to better long-term retention and
transfer (Bjork, 1994; Bjork & Bjork, 2011). The key desirable difficulties:

- **Spacing effect**: Distributing encounters with an idea over time improves
  retention vs. massed presentation. The rhizomatic structure already creates
  spacing --- the same concept (e.g., "probability distribution") appears
  across multiple plateaus with different framing. This is a feature, not
  redundancy.

- **Interleaving**: Mixing topics rather than blocking them improves
  discrimination and transfer. Non-linear navigation inherently interleaves.
  A reader who bounces between "The Shaping" and "The Averaging Problem"
  will develop deeper understanding than one who reads all of one first.

- **Retrieval practice**: Being asked to recall rather than re-read strengthens
  memory traces. This is the theoretical basis for question-seeds (Section 4.2).

- **Generation effect**: Information you generate yourself is remembered better
  than information passively received. The crystallization model (seeds that
  must be clicked) is a mild form. Making it more effortful (question-then-
  reveal) doubles the effect.

**Application**: Convert some seeds from "click-to-reveal" to "question-then-
reveal." The question creates an information gap; the click becomes retrieval
practice. Bjork's research predicts this will significantly improve retention.

> Bjork, R. A. (1994). Memory and metamemory considerations in the training
> of human beings. In J. Metcalfe & A. Shimamura (Eds.), *Metacognition:
> Knowing about knowing* (pp. 185--205). MIT Press.
>
> Bjork, E. L. & Bjork, R. A. (2011). Making things hard on yourself, but in
> a good way: Creating desirable difficulties to enhance learning. In M. A.
> Gernsbacher et al. (Eds.), *Psychology and the real world: Essays
> illustrating fundamental contributions to society* (pp. 56--64). Worth
> Publishers.

### 2.2 Information Gap Theory

Loewenstein's theory of curiosity posits that curiosity arises from a
perceived gap between what one knows and what one wants to know (Loewenstein,
1994). Critical properties:

- Curiosity requires *some* knowledge of a domain. Total ignorance produces
  confusion, not curiosity. A little knowledge creates the gap.
- The gap must be perceived as *closeable*. If the reader believes the answer
  is beyond them, curiosity diminishes.
- The gap is *aversive* --- it creates a drive to close it, analogous to hunger.

This is the theoretical foundation for the whisper system. Each whisper is an
information gap made typographic: an italic question the reader partially
knows the answer to but cannot fully resolve without visiting that plateau.

**Gap calibration**: Whispers must hit a Goldilocks zone. Too obvious ("What
is a word?") closes the gap before clicking. Too obscure ("How does KL
divergence constrain policy gradients?") does not create a closeable gap for
a general audience. The current whispers ("What happened between 'raw
autocomplete' and 'helpful assistant'?") are well-calibrated.

**Progressive gap creation**: As the reader visits more plateaus, their
accumulated knowledge allows for *more specific* information gaps. Whispers
on a reader's 5th plateau could reference concepts from all visited plateaus,
creating a gap that spans their entire accumulated understanding.

> Loewenstein, G. (1994). The psychology of curiosity: A review and
> reinterpretation. *Psychological Bulletin*, 116(1), 75--98.

### 2.3 Zeigarnik Effect

Bluma Zeigarnik demonstrated that incomplete tasks are remembered better than
completed ones (Zeigarnik, 1927). The interrupted task creates cognitive
tension that persists until completion.

The rhizome mini-map is already a Zeigarnik engine: showing 8 nodes with only
some filled creates persistent incompleteness. The reader's brain holds
"unfinished" plateaus in a state of cognitive tension.

**Application**: End some seed expansions with dangling references that trail
off into whispers to other plateaus. "This connects to something we haven't
discussed yet --- how RLHF raters' preferences propagate..." where the
trailing phrase is itself a link. The thought cannot be "closed" without
navigating. This is the Zeigarnik effect as navigation driver.

> Zeigarnik, B. (1927). Das Behalten erledigter und unerledigter Handlungen.
> *Psychologische Forschung*, 9, 1--85.

### 2.4 Productive Confusion

D'Mello and Graesser's research on affect in learning showed that confusion,
when properly managed, is one of the most productive emotional states for deep
learning (D'Mello & Graesser, 2014):

- Confusion triggered by impasses (contradictions, anomalies) drives learners
  to revise their mental models.
- Confusion that is *resolved* leads to deeper understanding than learning
  without confusion.
- Confusion that is *unresolved* leads to frustration and disengagement.
- The optimal pattern is: **flow --> confusion --> resolution --> flow**.

This maps directly to the project's central tension: "LLMs are glorified
autocomplete AND they are not." The reader should feel this contradiction, sit
with it, and then find --- through exploration --- the tools to hold both ideas.

**Application**: Structure scrolly steps as: (1) present intuitive
understanding, (2) present evidence that breaks it, (3) let the reader sit
with the break for at least one scroll step, (4) offer a more nuanced
synthesis. The "sitting" step is where productive confusion does its work.
Resist resolving too quickly.

> D'Mello, S. & Graesser, A. (2014). Confusion and its dynamics during device
> comprehension with breakdown scenarios. *Acta Psychologica*, 151, 106--116.

### 2.5 Cognitive Disfluency

Making information harder to process can improve retention. Diemand-Yauman,
Oppenheimer, and Vaughan showed that harder-to-read fonts improved test
performance (Diemand-Yauman et al., 2011). The mechanism: disfluency signals
to the cognitive system that deeper processing is needed.

For Rizomas, the application is not ugly fonts but *structural disfluency*:
presenting information in a way that requires active assembly. A rhizome is
structurally disfluent --- the reader must choose, orient, construct their own
sequence. This disfluency produces deeper processing.

**Threshold warning**: Too much disfluency produces frustration. The sweet spot
is mild surprise that resolves quickly. The whisper system is well-calibrated:
mildly disfluent (unexpected question in the margin), resolves immediately
(clicking navigates clearly).

> Diemand-Yauman, C., Oppenheimer, D., & Vaughan, E. (2011). Fortune favors
> the Bold (and the Italicized): Effects of disfluency on educational
> outcomes. *Cognition*, 118(1), 111--115.

---

## 3. Defamiliarization Theory

### 3.1 Shklovsky's Ostranenie

Viktor Shklovsky's concept from "Art as Device" (1917): the purpose of art is
to make the familiar strange, to force *perception* rather than *recognition*:

> "The purpose of art is to impart the sensation of things as they are
> perceived and not as they are known. The technique of art is to make objects
> 'unfamiliar,' to make forms difficult, to increase the difficulty and length
> of perception because the process of perception is an aesthetic end in
> itself and must be prolonged."

This is the deepest theoretical foundation for Rizomas. Everyone "knows" what
ChatGPT does. The essays' job is to make that familiar thing strange again ---
to defamiliarize "AI" so the reader perceives the mechanism rather than
recognizes the brand.

**Concrete applications:**

1. **Vocabulary displacement**: Avoid "AI," "artificial intelligence," and
   "ChatGPT" as long as possible. Refer to the system by its mechanism: "the
   next-token predictor," "the probability navigator," "the pattern-completion
   engine." Force the reader to perceive mechanism, not product.

2. **Scale estrangement**: Present numbers in ways that defy casual
   comprehension. Not "175 billion parameters" (eyes glaze at "billion") but
   "If each parameter were a grain of sand, this model would fill 70 Olympic
   swimming pools." Force *perception* of scale.

3. **Familiar-made-strange interactions**: Let the reader turn temperature to
   zero and see text become rigidly deterministic --- the same input always
   producing the same output. Most people have never experienced a language
   model as a deterministic machine. Seeing it removes the "magic" and
   replaces it with mechanism. Then turn temperature up and watch the magic
   return --- but now the reader *understands* that the "magic" is sampling
   from a distribution.

> Shklovsky, V. (1917). Art as Device (*Iskusstvo kak priyom*). In *Theory
> of Prose* (trans. Benjamin Sher, 1991). Dalkey Archive Press.

### 3.2 Aesthetic Friction

Djajadiningrat, Overbeeke, and Wensveen proposed that interfaces deliberately
*not* frictionless create richer experiences (Djajadiningrat et al., 2000).
Frictionless design optimizes for speed; aesthetic friction optimizes for
engagement and meaning.

**Application**: Seeds that behave unpredictably. Most seeds expand to reveal
text. But occasionally, a seed expands to reveal a question back at the
reader. Or a contradiction of what was just stated. Or content that slowly
rearranges itself into readable form over 2 seconds. The inconsistency creates
productive discomfort: the reader cannot predict what a seed will do, which
heightens attention for ALL seeds.

This must be used sparingly. If every seed is uncanny, the pattern becomes a
new norm and loses defamiliarizing power. One or two uncanny seeds per plateau
is the right density.

> Djajadiningrat, T., Overbeeke, K., & Wensveen, S. (2000). Augmenting fun
> and beauty: A pamphlet. In *Proceedings of DARE 2000* (pp. 131--134). ACM.

---

## 4. Interaction Techniques

### 4.1 Path-Dependent Content

The most powerful technique available within the existing architecture. Visit
history is already tracked in localStorage (`state.v`, `state.tr`).

**Path-dependent seeds**: A seed in "The Understanding Illusion" shows
different content depending on whether the reader has already visited "The
Weight of Words." If they have: "You saw how gradient descent creates internal
structure. The question is whether that structure constitutes understanding."
If they haven't: "Through training, models develop internal representations
that mirror the causal structure of their domains." Same seed, different depth.

**Path-acknowledging whispers**: Instead of static whisper text, whispers
reference the reader's journey: "You started with [The Next Word]. This is
the part where that mechanism breaks."

**Ghostfading visited concepts**: Subtle opacity reduction (0.85) on sections
the reader has encountered in other plateaus. The visual signal says: "you've
been near this idea before." The reader develops spatial memory of the
conceptual landscape.

This technique transforms the reading from explorative to **configurative**
(see Section 5.1). The reader is not traversing a fixed territory --- they
are configuring it as they explore.

**Theoretical basis**: Adaptive narrative engines. Inkle Studios' Ink scripting
language handles conditional content revelation natively, tracking variables
across choices to enable "stories that remember" (Inkle Studios, 2015). The
pattern is implementable without Ink by branching on `state.v` in the existing
seed-building functions.

> Inkle Studios. (2015). Ink: A narrative scripting language.
> github.com/inkle/ink

### 4.2 Question-Seeds and the Mnemonic Medium

Andy Matuschak and Michael Nielsen developed the mnemonic medium in the essay
"Quantum Country" (Matuschak & Nielsen, 2019). The core innovation: embedding
spaced-repetition review questions within an essay. Key findings:

- Readers who used embedded questions retained material dramatically better,
  comparable to dedicated flashcard use with near-zero additional effort.
- Questions served as comprehension checkpoints.
- Questions transformed passive reading into active recall.
- Crucially, questions were *part of the reading experience*, not a separate
  "quiz" section. This reduced the psychological barrier to testing.

**Application --- question-seeds**: Some inline seeds become questions rather
than content. Instead of `[tokens]` expanding to explain tokenization:
`[What actually gets "predicted" in next-token prediction?]`. The question
creates an information gap (Loewenstein). Clicking reveals both the reader's
implicit gap and the explanation. This combines information gap theory,
retrieval practice (Bjork), and the mnemonic medium in a single interaction.

**Cross-plateau retrieval moments**: After the reader has visited 3+ plateaus,
surface a brief interstitial: "Earlier, you explored how [concept from
previous plateau]. How does that connect to what you're reading now?" This
creates cross-plateau retrieval practice and strengthens rhizomatic connections
in the reader's memory.

> Matuschak, A. & Nielsen, M. (2019). How can we develop transformative tools
> for thought? *numinous.productions/ttft/*.
>
> Matuschak, A. & Nielsen, M. (2019). Quantum Country. *quantum.country*.

### 4.3 Fourth-Wall-Breaking Seeds

Seeds that reveal content about the interface itself.

**Example for The Understanding Illusion**: A seed labeled "understanding"
expands to: "You just clicked this because you felt an information gap --- a
small burst of curiosity. That gap-and-closure cycle is a key part of how this
essay is designed. Is the satisfaction you feel at reading this explanation
real understanding, or is it the same completion-feeling that an LLM has when
it successfully predicts the next token?"

This is meta-commentary that IS the content. It makes the reader's own
cognitive process part of the argument about whether LLMs "understand."

**Example for The Averaging Problem**: A seed about pattern-matching expands
to: "Notice that you're reading faster now than you were at the start. Your
brain has built a model of how these seeds work --- click, expand, read,
close. You've averaged the pattern. That averaging is exactly what this
essay is about."

**Visible engagement state**: A subtle annotation: "You have opened 4 of 7
seeds on this plateau." Makes the reader aware of their own reading behavior,
defamiliarizing the reading act itself.

### 4.4 Liminal Transitions

Liminal spaces are transitional zones --- doorways, thresholds, states between
states. Victor Turner's anthropological theory of liminality describes the
transformative potential of threshold experiences (Turner, 1969). Most
interfaces minimize liminal moments. Rizomas should expand them.

**Application**: When navigating between plateaus, show a 500ms--1s transition
state where the connecting question (the whisper or question card that brought
them here) appears centered on screen, alone, on a frosted background. This
creates a breath, a moment of orientation, and makes the *connection itself*
visible as a first-class element of the experience.

**Animated constellation transitions**: When navigating from the constellation
finale, the destination node moves to center and its neighborhood unfolds
around it. Continuity between "map" view and "territory" view reinforces
spatial understanding.

> Turner, V. (1969). *The Ritual Process: Structure and Anti-Structure*.
> Aldine Publishing.

### 4.5 Ambient and Peripheral Information

Mark Weiser and John Seely Brown coined "calm technology" --- information at
the periphery of attention, moving to center only when needed (Weiser &
Brown, 1996). The canonical example: a window showing weather by the amount
of light coming through. You don't "check the weather"; you *feel* it.

**Background temperature shift**: The page background shifts very slightly in
color temperature as the reader progresses through a plateau (warmer going
deeper, cooler approaching the constellation). Subliminal orientation. The
reader doesn't consciously notice but develops ambient spatial sense.

**Dwell-reveal annotations**: If the reader holds their cursor still over a
paragraph for 3+ seconds (indicating careful reading), a subtle annotation
appears in the margin. Rewards attentive reading. Invisible to skimmers.

The trace pips already implement calm technology --- small dots lighting up as
whispers appear, creating a visual record without demanding attention.

> Weiser, M. & Brown, J. S. (1996). The coming age of calm technology.
> *Xerox PARC*.

### 4.6 Scroll-Scrubbed Visuals

GSAP ScrollTrigger and similar engines allow animations that advance
proportionally to scroll position, not just triggering at thresholds. This
creates direct manipulation --- the reader's scroll wheel controls the visual
like a film reel.

**Application**: The temperature dial in The Next Word responds to scroll
position continuously. As the reader scrolls through the temperature section,
the dial rotates and the probability distribution morphs. The reader
experiences temperature as a physical gesture (scrolling = turning the dial)
rather than an abstract concept. This is kinesthetic learning through scroll
interaction.

Achievable with IntersectionObserver ratio tracking or `scrollTop` proportion
calculations within the existing scrolly engine.

**Reference from practice**: The Pudding (pudding.cool) is the gold standard
for data-driven visual essays. Their key technique: each scroll step makes
exactly ONE change to the visual, creating clear cause-and-effect between
reading and seeing. Scrollama's key lesson: the `offset` parameter (how far
through the viewport a step must be before triggering) dramatically affects
feel; 0.33 (upper third) feels more responsive for reading-heavy content
than the 0.5 default.

> Goldenberg, R. (2017). Scrollama: Scrollytelling with IntersectionObserver.
> github.com/russellsamora/scrollama

### 4.7 Scatter-to-Text Animation

Spatial text layouts break the assumption that text flows top-to-bottom.
The "gather" transition: words begin scattered across the viewport
(representing chaotic, high-entropy state) and gather into readable sentences
as the reader scrolls.

**Application for The Weight of Words**: The "Structure as Byproduct" section
begins with key terms (syntax, semantics, reasoning, facts) scattered randomly
across the visual panel. As the reader scrolls through the gradient descent
explanation, the words slowly organize themselves --- first into clusters, then
into sentences. The visual IS the concept: structure emerging from the
learning process.

Achievable with CSS transforms and JS positioning, no external dependencies.

### 4.8 Author Marginalia

Marginalia is one of the oldest forms of non-linear content. Medieval
manuscripts were covered in it. It creates a sense of dialogue between the
text and its author.

**Application**: Add a marginalia column to simple plateaus. Brief,
parenthetical, author-voice asides providing meta-commentary:

- "This is the part where most explanations reach for the 'brain' metaphor.
  We won't."
- "If you came here from The Shaping, notice how RLHF doesn't change *what*
  the model knows --- it changes *which* knowledge surfaces."
- "The next paragraph is the most controversial claim in this essay."

These can be path-dependent (Section 4.1), appearing only when the reader's
history makes them relevant.

Implementation: CSS grid with a margin column, authored content, minimal code.

### 4.9 Micro-CYOA Within Plateaus

The Twine community's key lesson: the best branching narratives are wide and
shallow (many branches that reconverge) rather than narrow and deep (binary
choices leading to exponential paths) (Klimas, 2009). Rizomas' 8-plateau
rhizome is wide and shallow by design.

From Choose-Your-Own-Adventure design: every choice should be *meaningful*
(the reader feels the difference) but no choice should be *punishing* (the
reader should not feel they "missed" real content).

**Application**: Within The Understanding Illusion, present an explicit fork:
"You've seen two interpretive frames. Which one feels more compelling?
[The model understands nothing] / [The model understands differently]."
Clicking one doesn't hide the other --- both remain available --- but the
chosen one expands first with more visual emphasis. The choice creates
*commitment* (Cialdini's consistency principle), deepening engagement with
subsequent content.

> Klimas, C. (2009). Twine. *twinery.org*.
>
> Cialdini, R. B. (2006). *Influence: The psychology of persuasion* (revised
> edition). Harper Business.

### 4.10 Ghost Trails

Borges' "The Garden of Forking Paths" describes a novel where all possible
outcomes occur simultaneously (Borges, 1941). Applied to navigation: every
path exists simultaneously, and the reader's traversal selects one but does
not eliminate the others.

**Application**: On the constellation overlay, show faint ghost trails
representing aggregated paths other readers have taken (anonymized). The
reader sees that their path is one sample from a distribution --- a direct
meta-connection to the project's theme of probability distributions.

Technical implementation: log the sequence of plateau visits per session (no
PII needed) and periodically compile the most common 3--5 paths. Display as
faint curved lines on the constellation overlay. This is the highest-
infrastructure technique but also the most conceptually resonant: reading
paths as probability distributions mirrors what LLMs do with text.

> Borges, J. L. (1941). The Garden of Forking Paths (*El jardin de senderos
> que se bifurcan*). In *Ficciones* (1944). Editorial Sur.

---

## 5. Ergodic Literature Framework

### 5.1 Aarseth's Cybertext Typology

Espen Aarseth coined "ergodic" from the Greek *ergon* (work) + *hodos*
(path): literature requiring non-trivial effort to traverse (Aarseth, 1997).
His typology identifies seven dimensions:

| Dimension | Current Rizomas | Target State |
|-----------|-----------------|--------------|
| Dynamics | Static | Dynamic (path-dependent content) |
| Determinability | Determinate | Indeterminate (varied seeds) |
| Transiency | Intransient | Intransient (reader-driven) |
| Perspective | Impersonal | Impersonal |
| Access | Random | Random + conditional linking |
| Linking | Explicit | Explicit + conditional (whispers) |
| User function | **Explorative** | **Configurative** |

The critical shift is from **explorative** (user chooses path through pre-
existing content) to **configurative** (user's actions change the content,
not just the path through it). Path-dependent seeds achieve this. The reader
no longer traverses a fixed territory; they configure it.

> Aarseth, E. (1997). *Cybertext: Perspectives on Ergodic Literature*. Johns
> Hopkins University Press.

### 5.2 Lessons from Hypertext Fiction

StorySpace (Bernstein, Eastgate Systems, 1987) introduced *guard fields*:
links available only when conditions are met (nodes visited, time elapsed).
Directly applicable to conditional whispers.

The key lesson from 30+ years of hypertext fiction: the reader needs a *sense
of orientation* even in a non-linear space. Hypertext fiction that failed
(and much of it did) failed because readers felt *lost*, not *exploring*. The
difference is whether the reader has a mental model of the space.

The rhizome mini-map provides exactly this orientation. It transforms "I'm
lost in hypertext" into "I'm exploring a map." The 1990s hypertext community
learned this the hard way; Rizomas has it from the start.

> Bernstein, M. (2001). Card shark and thespis: Exotic tools for hypertext
> narrative. In *Proceedings of the 12th ACM Conference on Hypertext and
> Hypermedia* (pp. 41--50). ACM.

---

## 6. Explorable Explanations

### 6.1 Bret Victor's Reactive Documents

Victor established the principle of reactive documents: documents where the
reader can change assumptions and immediately see consequences propagate
(Victor, 2011). Key examples:

- **Tangle.js**: Numbers in text become draggable; changing one updates all
  dependent values. "If the tax rate is [35%], revenue will be [$X billion]"
  --- dragging 35% to 40% updates X in real-time.
- **"Up and Down the Ladder of Abstraction"** (2011): Move between levels of
  abstraction at will. The reader controls a "ladder" rather than being forced
  up or down it.

The core principle: every number, parameter, and assertion should ideally be
explorable. The temperature dial concept already embodies this. The insight is
to generalize it.

> Victor, B. (2011). Explorable Explanations. *worrydream.com*.
>
> Victor, B. (2011). Up and Down the Ladder of Abstraction.
> *worrydream.com/LadderOfAbstraction/*.

### 6.2 Nicky Case's Playable Illustrations

Case's "Parable of the Polygons" (2014, with Vi Hart) introduced *playable
illustrations* embedded in text --- not separate widgets but prose that
includes interaction. "The Evolution of Trust" (2017) uses progressive
disclosure through play: advancement happens through interaction, not "next"
buttons.

**Application**: Within scrolly steps, embed micro-interactions that ARE the
explanation. For the Averaging Problem: place a bell curve in the text that
the reader narrows by typing more specific prompt text into an input field.
The act of typing IS the exploration. The curve IS the explanation.

> Case, N. & Hart, V. (2014). Parable of the Polygons.
> *ncase.me/polygons/*.
>
> Case, N. (2017). The Evolution of Trust. *ncase.me/trust/*.

---

## 7. The Uncanny: Three Sources

The feeling of strangeness-that-makes-you-want-more comes from three forces
working together:

### 7.1 Unpredictability

Seeds that sometimes question back. Content that varies with reading history.
Whispers that acknowledge the reader's specific path. The reader cannot form
a complete model of the interface's behavior, which sustains attention.

### 7.2 Self-Awareness

The interface commenting on itself. Visible engagement state ("4 of 7 seeds
opened"). Fourth-wall breaks that are thematically relevant --- making the
reader's cognitive processes part of the argument about whether LLMs
"understand."

### 7.3 Incompleteness

Dangling references. Unanswered questions. The Zeigarnik pull toward unvisited
plateaus. Seeds that trail off into whispers. The mini-map showing unfilled
nodes. The reader carries cognitive tension from unfinished business ---
which is precisely the emotional state the content describes LLMs as
occupying (high-probability tokens not yet emitted, distributions not yet
sampled).

---

## 8. Semantic Zoom

Semantic zoom shows different content at different scales --- not the same
content bigger or smaller, but fundamentally different information. Maps are
the canonical example: zoom out for countries, zoom in for streets.

Rizomas already implements semantic zoom through navigation:
- **Overview** (landing page): entry questions and one-sentence summaries
- **Plateau level**: full content with scrolly steps or seed clusters
- **Seed level**: expanded micro-content within a plateau

The insight is to make this *feel* like zoom by using scale transitions: the
entry question literally grows larger as the reader enters a plateau, filling
the screen as surrounding content fades in around it.

---

## 9. Prioritized Recommendations

Ranked by impact on the "uncanny, not complacent" goal multiplied by
feasibility within vanilla JS single-file architecture:

### Tier 1 --- Content Changes Only (Zero Code)

| # | Technique | Mechanism |
|---|-----------|-----------|
| 1 | Question-seeds | Replace some content-seeds with questions that create information gaps before revealing answers |
| 2 | Fourth-wall-breaking seeds | 1--2 seeds per plateau that reflect on the reader's behavior and connect it to the essay's thesis |
| 3 | Dangling references | Seed expansions that trail off into whispers to other plateaus, leveraging Zeigarnik effect |
| 4 | Landing page as questions | Replace plateau titles with entry questions; curiosity as sole navigation driver |
| 5 | Author marginalia content | Parenthetical meta-commentary, some path-dependent |

### Tier 2 --- Small JS/CSS Changes

| # | Technique | Effort |
|---|-----------|--------|
| 6 | Path-dependent seed content | Branch on `state.v` in seed builders |
| 7 | Liminal transitions | CSS + small JS; 500ms--1s connection question between plateaus |
| 8 | Ghostfading visited concepts | CSS opacity + localStorage |
| 9 | Visible engagement state | Small JS counter per plateau |
| 10 | Background temperature shift | CSS custom property animation on scroll |

### Tier 3 --- Medium JS Changes

| # | Technique | Effort |
|---|-----------|--------|
| 11 | Scroll-scrubbed visuals | IntersectionObserver ratio or scrollTop proportion |
| 12 | Scatter-to-text animation | CSS transforms + JS positioning |
| 13 | Dwell-reveal annotations | Mousemove timer + marginal content |
| 14 | Cross-plateau retrieval moments | Visit history + interstitial UI |
| 15 | Micro-CYOA forks within plateaus | Branching seed clusters |

### Tier 4 --- Infrastructure Required

| # | Technique | Effort |
|---|-----------|--------|
| 16 | Ghost trails (aggregate reader paths) | Minimal analytics backend |

---

## 10. The Core Shift

**From crystallization to configuration.**

The current model: click to see more of the same fixed content. The target
model: your path through the rhizome changes the rhizome.

Path-dependent seeds, adaptive whispers, retrieval moments, and ghost trails
all serve this shift. The reader moves from Aarseth's "explorative" function
to "configurative" --- their actions change what exists, not just what is
visible. Each reading becomes genuinely unique.

This is also the most thematically resonant move. The essays describe how
LLMs produce different outputs depending on context. The interface should
demonstrate this: the same plateau produces different content depending on
what the reader has already encountered. The medium becomes the message.

---

## References

Aarseth, E. (1997). *Cybertext: Perspectives on Ergodic Literature*. Johns
Hopkins University Press.

Bernstein, M. (2001). Card shark and thespis: Exotic tools for hypertext
narrative. In *Proceedings of the 12th ACM Conference on Hypertext and
Hypermedia* (pp. 41--50). ACM.

Bjork, E. L. & Bjork, R. A. (2011). Making things hard on yourself, but in a
good way: Creating desirable difficulties to enhance learning. In M. A.
Gernsbacher et al. (Eds.), *Psychology and the real world* (pp. 56--64).
Worth Publishers.

Bjork, R. A. (1994). Memory and metamemory considerations in the training of
human beings. In J. Metcalfe & A. Shimamura (Eds.), *Metacognition: Knowing
about knowing* (pp. 185--205). MIT Press.

Borges, J. L. (1941). The Garden of Forking Paths. In *Ficciones* (1944).
Editorial Sur.

Case, N. (2017). The Evolution of Trust. ncase.me/trust/.

Case, N. & Hart, V. (2014). Parable of the Polygons. ncase.me/polygons/.

Cialdini, R. B. (2006). *Influence: The psychology of persuasion* (revised
edition). Harper Business.

Csikszentmihalyi, M. (1990). *Flow: The Psychology of Optimal Experience*.
Harper & Row.

D'Mello, S. & Graesser, A. (2014). Confusion and its dynamics during device
comprehension with breakdown scenarios. *Acta Psychologica*, 151, 106--116.

Diemand-Yauman, C., Oppenheimer, D., & Vaughan, E. (2011). Fortune favors the
Bold (and the Italicized): Effects of disfluency on educational outcomes.
*Cognition*, 118(1), 111--115.

Djajadiningrat, T., Overbeeke, K., & Wensveen, S. (2000). Augmenting fun and
beauty: A pamphlet. In *Proceedings of DARE 2000* (pp. 131--134). ACM.

Goldenberg, R. (2017). Scrollama: Scrollytelling with IntersectionObserver.
github.com/russellsamora/scrollama.

Inkle Studios. (2015). Ink: A narrative scripting language.
github.com/inkle/ink.

Klimas, C. (2009). Twine. twinery.org.

Lomas, J. D., Koedinger, K., Patel, N., Shodhan, S., Poonwala, N., & Forlizzi,
J. (2017). Is difficulty overrated? The effects of choice, novelty and suspense
on intrinsic motivation in educational games. In *Proceedings of the 2017 CHI
Conference on Human Factors in Computing Systems* (pp. 1028--1039). ACM.

Loewenstein, G. (1994). The psychology of curiosity: A review and
reinterpretation. *Psychological Bulletin*, 116(1), 75--98.

Matuschak, A. & Nielsen, M. (2019). How can we develop transformative tools for
thought? numinous.productions/ttft/.

Shklovsky, V. (1917). Art as Device. In *Theory of Prose* (trans. Benjamin
Sher, 1991). Dalkey Archive Press.

Turner, V. (1969). *The Ritual Process: Structure and Anti-Structure*. Aldine
Publishing.

Victor, B. (2011). Explorable Explanations. worrydream.com.

Victor, B. (2011). Up and Down the Ladder of Abstraction.
worrydream.com/LadderOfAbstraction/.

Weiser, M. & Brown, J. S. (1996). The coming age of calm technology. Xerox
PARC.

Zeigarnik, B. (1927). Das Behalten erledigter und unerledigter Handlungen.
*Psychologische Forschung*, 9, 1--85.
