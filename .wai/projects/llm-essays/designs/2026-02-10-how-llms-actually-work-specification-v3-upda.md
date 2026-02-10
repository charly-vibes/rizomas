# How LLMs Actually Work — Specification v3

> **Snapshot**: Imported from original monolithic spec. The canonical source of truth
> is now the decomposed OpenSpec specs in `openspec/specs/`. This file is retained
> as a design artifact for historical context only — do not update it directly.

*Updated to match current build. Replaces all prior specs.*

---

## 1. Concept

A collection of 8 interconnected visual essays ("plateaus") about how LLMs work, aimed at a general audience. No linear order. Rhizomatic navigation — any essay can be an entry point, each connects laterally to others.

### Core tension

> LLMs are glorified autocomplete **AND** something more. Neither framing is complete.

### Philosophical scaffolding

- **Deleuze/Guattari:** Rhizome structure (no hierarchy, no start/end), plateaus (self-contained zones of intensity), lines of flight (lateral connections between ideas)
- **Simondon:** Crystallization metaphor for depth — content expands outward from seed concepts, gaining structure and facets, rather than descending into hidden layers

### Design reference

- **The Pudding:** Scrollytelling — sticky visual transforms as short text steps scroll by. The visual *makes* the argument; prose is connective tissue.
- Paper-like minimalism. Lora serif + system sans-serif UI. Muted warm palette.

---

## 2. Architecture

### Format

Single HTML file, zero dependencies (Google Fonts only). Vanilla JS. ~630 lines.

### Routing

Hash-based SPA. `#/` = landing, `#/next-word` = plateau. `hashchange` event listener. Page transition: 200ms opacity fade.

### State

```js
{
  v: string[],           // visited plateau IDs
  tr: {p:string,t:number}[]  // navigation trail (plateau + timestamp)
}
```

Stored in `localStorage` key `le5`. Persists across sessions. Used by rhizome navigator to show visited nodes and draw trail path.

### DOM construction

All DOM built imperatively with helper function `h(tag, attrs, ...children)`. No templates, no innerHTML for structural elements (innerHTML used only for step text content). No framework.

---

## 3. Plateau types

### 3.1 Scrolly plateaus (3 built)

Full Pudding-style scrollytelling. Two-column layout:

| Left (50%) | Right (50%) |
|---|---|
| Sticky visual panel (`position: sticky; top: 0; height: 100vh`) | Scrolling text steps |
| Visual transforms on each step | Each step ~65vh tall, centered content |
| Whispers appear at visual edge | Question cards on final step |
| Trace pips accumulate | |
| Constellation replaces visual on final step | |

**IntersectionObserver** watches steps at 0.45 threshold. Active step gets full ink color; inactive steps are faded (`--ink3`).

#### Built scrolly plateaus:

**"The Next Word"** (`#/next-word`)
- Visual states: typing cursor → probability bars animate in → token selected → temperature slider → context→prediction diagram → tension question
- 7 steps (6 content + 1 navigation)
- Whispers: averaging-problem (step 3), library-of-babel (step 1), understanding-illusion (step 5)
- Interactive: temperature slider (3 stops: safe/balanced/creative) swaps output text with fade

**"The Averaging Problem"** (`#/averaging-problem`)
- Visual: canvas-drawn bell curve that shifts position and narrows across steps
- States: wide center ("million recipes") → vague prompt → specific prompt (narrower, shifted right) → very specific (narrow, far right) → "you are here"
- 6 steps (5 content + 1 navigation)
- Whispers: steering (step 1), the-shaping (step 1), quality (step 3)
- Curve params: `{spread, center, label}` redrawn on each step change

**"The Shaping"** (`#/the-shaping`)
- Visual: base model vs tuned toggle with example prompt/response pairs
- Two example pairs (capital of France, photosynthesis) cycled across steps
- 5 steps (4 content + 1 navigation)
- Whispers: averaging-problem (step 0), quality (step 2), steering (step 3)
- Interactive: Base/Tuned toggle buttons swap output text with opacity fade

### 3.2 Simple plateaus (5 built)

Prose essays — single centered column (max-width 36em), no scrolly, no sticky visual. Header + body paragraphs + question cards at bottom.

| Plateau | ID | Route |
|---|---|---|
| Steering the Ship | `steering` | `#/steering` |
| The Library of Babel | `library-of-babel` | `#/library-of-babel` |
| What Is Quality? | `quality` | `#/quality` |
| The Understanding Illusion | `understanding-illusion` | `#/understanding-illusion` |
| The Field Guide | `practical-guide` | `#/practical-guide` |

These have no interactives and no whispers. Navigation is via question cards only.

---

## 4. Navigation system

### 4.1 Whispers (margin annotations during scroll)

Appear on the right edge of the sticky visual panel at specific scroll steps. Each whisper contains:

- An italic question prefixed with → arrow
- The destination plateau short name in small caps below
- Clickable — navigates to destination plateau

**Behavior:**
- Hidden initially (`opacity: 0, translateX(6px)`)
- Fade in when their associated step is reached or passed
- All hide on the final step (replaced by constellation)
- Positioned absolutely within visual panel, spaced evenly across 18–88% of visual height

**CSS:** `.whisper` / `.whisper.visible`

### 4.2 Trace pips

Vertical rail of small dots on the right edge of visual panel (`.trace-rail`). One pip per whisper. Lights up (`.trace-pip.lit`) when corresponding whisper becomes visible. Visual accumulation of connections discovered during reading.

### 4.3 Constellation (final scroll step)

When the final step is reached:

1. All main viz elements fade to `opacity: 0`
2. Whispers hide
3. Trace rail hides
4. Constellation container (`.constellation`) fades in

Constellation content:
- Current node centered (solid black dot + bold name)
- Connected nodes arranged radially (equal angle spacing, radius = 36% of container)
- SVG lines from center to each destination
- Each destination shows: outline dot + whisper question text + plateau short name
- Clickable — navigates to destination

Built dynamically by `buildConstellation()` on each final-step entry.

### 4.4 Question cards (text side, final step)

On the scrolling text side, the final step contains 2–3 clickable cards (`.q-card`):

- Italic question (the same questions from whispers)
- Small caps destination name
- Border + hover state
- Links via `href="#/[plateau-id]"`

Simple plateaus also use question cards (in a `.simple-flights` container) as their sole navigation mechanism.

### 4.5 Rhizome mini-map

Fixed position bottom-right (`#rn`, 160×120px). Canvas-drawn. Shows:

- **On landing:** All 8 nodes + all edges. Visited = dark fill. Unvisited = outline.
- **On plateau:** Current node (large, black fill) + directly connected nodes only (subset of edges). Labels via absolutely positioned divs.

Single click opens overlay.

### 4.6 Rhizome overlay

Full-screen modal (`#rov`). Frosted backdrop. Larger canvas (700×550px max) showing:

- All nodes and edges
- Navigation trail drawn as a faint green path connecting visited nodes in order
- All nodes clickable — navigates to destination and closes overlay
- Labels as positioned divs with hover states
- Close via ×, backdrop click, or Escape key

---

## 5. Inline seeds

Remnant of the crystallization concept. Small inline buttons (`.iseed`) within step text that expand to reveal 1–3 sentences of additional context.

**Syntax:** Built programmatically via `iseed(label, html)` function that returns a `<span>` containing a `<button>` and a growth zone `<div class="igrowth">`.

**Behavior:**
- Click toggles open/closed
- Open: `max-height` animates from 0 to `scrollHeight`, left border appears, content indented
- Close: `max-height` collapses back to 0
- Can nest (growth zone content can contain more iseed calls)

**Current seeds in scrolly plateaus:**
- "tokens" — explains subword tokenization
- "everyone and no one" — links to averaging problem
- "context" — explains context window limits
- "conditional on your input" — regression to mean
- "coordinates in pattern-space" — few-shot as location
- "agreeable" — sycophancy in RLHF

---

## 6. Landing page

Route: `#/` (default)

Content:
- Title: "How LLMs Actually Work"
- Subtitle italic
- Two-sentence intro paragraph
- Interactive canvas network map (460×360px) — all 8 nodes with labels, all edges, clickable nodes navigate to plateaus
- Footer note: "Click any node to begin."

Canvas handles click detection via distance-to-node hit testing (22px radius). Cursor changes on hover.

---

## 7. Graph data

### Nodes (8)

| ID | Title | Short label |
|---|---|---|
| `next-word` | The Next Word | Next Word |
| `library-of-babel` | The Library of Babel | Library |
| `averaging-problem` | The Averaging Problem | Averaging |
| `the-shaping` | The Shaping | Shaping |
| `steering` | Steering the Ship | Steering |
| `quality` | What Is Quality? | Quality |
| `understanding-illusion` | The Understanding Illusion | Understanding |
| `practical-guide` | The Field Guide | Field Guide |

### Edges (18)

```
next-word ↔ library-of-babel
next-word ↔ averaging-problem
next-word ↔ understanding-illusion
library-of-babel ↔ averaging-problem
library-of-babel ↔ the-shaping
library-of-babel ↔ understanding-illusion
averaging-problem ↔ the-shaping
averaging-problem ↔ steering
averaging-problem ↔ quality
averaging-problem ↔ understanding-illusion
the-shaping ↔ steering
the-shaping ↔ quality
the-shaping ↔ understanding-illusion
steering ↔ quality
steering ↔ practical-guide
quality ↔ understanding-illusion
understanding-illusion ↔ practical-guide
averaging-problem ↔ practical-guide
```

### Node positions (fixed, normalized 0–1)

```js
{
  'next-word':             {x:.5,  y:.08},
  'library-of-babel':      {x:.22, y:.28},
  'understanding-illusion': {x:.78, y:.28},
  'averaging-problem':     {x:.5,  y:.44},
  'the-shaping':           {x:.2,  y:.62},
  'quality':               {x:.8,  y:.62},
  'steering':              {x:.4,  y:.78},
  'practical-guide':       {x:.65, y:.9}
}
```

---

## 8. Visual design

### Palette

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#FAFAF8` | Page background |
| `--ink` | `#1A1A18` | Primary text, active step text |
| `--ink2` | `#6B6B66` | Secondary text, whisper questions |
| `--ink3` | `#B8B4AA` | Inactive step text, labels |
| `--ink4` | `#DDD9D0` | Borders, subtle lines, trace pips |
| `--seed` | `#EDEADF` | Inline seed background, output boxes |
| `--seedh` | `#E4E0D4` | Seed hover |
| `--hl` | `#FFF3C4` | Text selection highlight |
| `--acc` | `#4A6741` | Trail path color (green, faint) |

### Typography

- Body: `Lora` (Google Fonts), Georgia fallback. 18px/1.65
- UI elements: System sans-serif stack. Various sizes (.62rem–.95rem)
- Step text: .95rem, transitions between `--ink3` (inactive) and `--ink` (active)

### Responsive breakpoints

| Width | Changes |
|---|---|
| ≤840px | Scrolly stacks vertically (visual on top 42vh sticky, steps below full width) |
| ≤480px | Visual 38vh, whispers hidden, rhizome mini-map collapses to 44px circle |

### Motion

- All transitions respect `prefers-reduced-motion`
- Step transitions: 0.4–0.5s color fade
- Whisper entrance: 0.6s opacity + translateX
- Constellation: 0.6s opacity fade-in
- Viz output swap: 0.25s opacity crossfade
- Page transitions: 0.2s opacity

---

## 9. buildScrolly engine

Reusable function that constructs a complete scrolly section. Signature:

```js
buildScrolly(spec, container) → cleanup function
```

### spec shape

```js
{
  steps: (string | (el: HTMLElement) => void)[],
  // string = innerHTML, function = imperative DOM build

  whispers: {step: number, q: string, dest: string}[],
  // appear when scroll reaches step N

  vizInit: (vizBox: HTMLElement, constEl: HTMLElement) => any,
  // build viz elements, insert before constEl, return state object

  onStep: (idx: number, vizState: any, isFinal: boolean) => void
  // called on each step change, update viz
}
```

### Internal mechanics

1. Creates `.scrolly` container with `.scrolly-visual` and `.scrolly-steps`
2. Inserts trace rail + whisper elements into visual panel
3. Creates constellation container (hidden) inside viz-box
4. IntersectionObserver on steps (threshold 0.45)
5. On step change: toggles active class, shows/hides whispers, lights pips
6. On final step: fades viz, hides whispers/rail, builds and shows constellation
7. Returns observer disconnect function for cleanup

---

## 10. Features NOT in current build

These existed in prior versions but have been removed:

- ❌ Text highlighting / annotations / notebook
- ❌ Crystal/facet terminology in UI (concept informs design but isn't surfaced)
- ❌ Prompt anatomy builder interactive
- ❌ Data landscape visualization
- ❌ RLHF rater simulation
- ❌ Distribution curve interactive (for Library of Babel)
- ❌ Specificity slider
- ❌ Progress indicators
- ❌ localStorage for annotations (state is visit-tracking only)

---

## 11. Known issues / TODO

- [ ] Bug: something is broken (user report — needs diagnosis)
- [ ] 5 simple plateaus need upgrade to scrolly format with visuals + whispers
- [ ] Mobile: whispers hidden below 480px — need alternative navigation cue
- [ ] Constellation layout doesn't account for different numbers of connections gracefully
- [ ] No accessibility audit (ARIA labels, keyboard nav for seeds, focus management)
- [ ] No print stylesheet
- [ ] Canvas network maps not keyboard accessible
- [ ] Inline seeds not discoverable — no visual affordance besides background color

