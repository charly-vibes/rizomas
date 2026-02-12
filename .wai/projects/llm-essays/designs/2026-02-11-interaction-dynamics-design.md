# Interaction Dynamics Design

> Companion to the research document (2026-02-11-interaction-dynamics-research.md)
> and OpenSpec change proposal `add-interaction-dynamics`. This document captures
> the design intent and rationale for the interaction system overhaul.

---

## Core Shift: Crystallization → Configuration

The existing interaction model is **crystallization**: click seeds to reveal
fixed content. The target model is **crystallization + configuration**: the
reader's path through the rhizome changes the rhizome itself.

This shift is grounded in Aarseth's cybertext typology (1997). The reader moves
from the "explorative" function (choosing path through pre-existing content) to
the "configurative" function (actions change what content exists, not just what
is visible). Each reading becomes genuinely unique.

This is also the most thematically resonant move. The essays describe how LLMs
produce different outputs depending on context. The interface should demonstrate
this: the same plateau produces different content depending on what the reader
has already encountered. The medium becomes the message.

---

## Theoretical Foundations

Every technique is grounded in established cognitive science:

| Technique | Foundation | Key Researcher |
|-----------|-----------|----------------|
| Question-seeds | Retrieval practice + information gap | Bjork (1994), Loewenstein (1994) |
| Fourth-wall seeds | Defamiliarization (ostranenie) | Shklovsky (1917) |
| Dangling references | Zeigarnik effect | Zeigarnik (1927) |
| Path-dependent content | Adaptive narrative + spacing effect | Inkle (2015), Bjork (2011) |
| Liminal transitions | Liminality as transformation | Turner (1969) |
| Ghostfading | Spacing effect + familiarity signal | Bjork (2011) |
| Dwell-reveal | Calm technology + reward for attention | Weiser & Brown (1996) |
| Cross-plateau retrieval | Retrieval practice + interleaving | Bjork (2011) |
| Background temperature | Ambient information, calm technology | Weiser & Brown (1996) |
| Scatter-to-text | Defamiliarization + explorable explanation | Shklovsky (1917), Victor (2011) |
| Author marginalia | Medieval manuscript tradition, dialogue | — |
| Micro-CYOA | Commitment principle + ergodic literature | Cialdini (2006), Klimas (2009) |
| Visible engagement | Self-awareness, defamiliarization | Shklovsky (1917) |
| Ghost trails | Probability distributions as reading paths | Borges (1941) |

---

## The Three Sources of Uncanny

The feeling of strangeness-that-makes-you-want-more comes from three forces
working together:

### 1. Unpredictability
Seeds that sometimes question back. Content that varies with reading history.
Whispers that acknowledge the reader's specific path. The reader cannot form a
complete model of the interface's behavior, which sustains attention.

### 2. Self-Awareness
The interface commenting on itself. Visible engagement state ("4 of 7 seeds
opened"). Fourth-wall breaks that are thematically relevant --- making the
reader's cognitive processes part of the argument about whether LLMs
"understand."

### 3. Incompleteness
Dangling references. Unanswered questions. The Zeigarnik pull toward unvisited
plateaus. Seeds that trail off into whispers. The mini-map showing unfilled
nodes. The reader carries cognitive tension from unfinished business --- which
is precisely the emotional state the content describes LLMs as occupying.

---

## Interaction Technique Inventory

### Tier 1 — Content Changes Only (Zero Code)

| # | Technique | Mechanism | Affected Spec |
|---|-----------|-----------|---------------|
| 1 | Question-seeds | Replace some content-seeds with questions that create information gaps before revealing answers | inline-seeds |
| 2 | Fourth-wall seeds | 1--2 seeds per plateau reflecting on reader behavior, connecting to essay thesis | inline-seeds |
| 3 | Dangling references | Seed expansions that trail off into whisper links to other plateaus | inline-seeds |
| 4 | Questions-first landing | Node labels show entry questions; curiosity as sole navigation driver | landing-page |
| 5 | Author marginalia | Parenthetical meta-commentary in margin column, some path-dependent | plateaus |

### Tier 2 — Small JS/CSS Changes

| # | Technique | Mechanism | Affected Spec |
|---|-----------|-----------|---------------|
| 6 | Path-dependent seeds | Branch on `state.v` in seed content builders | inline-seeds, routing-state |
| 7 | Liminal transitions | CSS + small JS; frosted overlay with connecting question between plateaus | navigation |
| 8 | Ghostfading | CSS opacity 0.85 + localStorage on visited-concept paragraphs | navigation |
| 9 | Visible engagement | Small JS counter showing seed progress per plateau | inline-seeds, routing-state |
| 10 | Background temperature | CSS `--bg-temp` custom property driven by scroll position | visual-design |

### Tier 3 — Medium JS Changes

| # | Technique | Mechanism | Affected Spec |
|---|-----------|-----------|---------------|
| 11 | Scroll-scrubbed visuals | `scrubUpdate` callback in scrolly engine, rAF-throttled | scrolly-engine |
| 12 | Scatter-to-text | CSS transforms + JS positioning, scroll-driven gather | plateaus |
| 13 | Dwell-reveal annotations | `mousemove` timer + marginal content appearing at 3s dwell | navigation |
| 14 | Cross-plateau retrieval | Visit history check + dismissible interstitial card | navigation |
| 15 | Micro-CYOA forks | Wide/shallow branching in The Understanding Illusion | plateaus |

### Tier 4 — Infrastructure Required

| # | Technique | Mechanism | Affected Spec |
|---|-----------|-----------|---------------|
| 16 | Ghost trails | Anonymized path aggregation + faint constellation overlay curves | navigation |

---

## Density Constraints

To avoid crossing from productive confusion into frustration:

- **Fourth-wall seeds**: Maximum 2 per plateau
- **Dangling references**: Maximum 2 per plateau
- **Question-seeds**: No more than 40% of seeds on any plateau
- **Marginalia**: Only where path-relevant; no more than 4 items per simple plateau
- **Micro-CYOA forks**: Maximum 1 per plateau
- **Dwell-reveal annotations**: Maximum 1 per 3 paragraphs (content is pre-authored, not every paragraph needs one)
- **Cross-plateau retrieval**: Maximum 1 per plateau visit, only after 3+ visits

---

## Accessibility Principles

All new interactions follow existing accessibility commitments:

1. **All dynamic content in DOM** — no canvas-only information
2. **`aria-live="polite"`** for dynamically appearing content (engagement state, dwell annotations, retrieval moments)
3. **Keyboard accessible** — all new interactive elements (question-seeds, CYOA forks, dangling links, marginalia links) are focusable and activatable
4. **`prefers-reduced-motion` gating** — all new animations disabled when reduced motion is active
5. **Path-independent completeness** — every content variant (path-dependent or not) provides a complete, self-contained experience
6. **Screen reader parity** — announced content matches visual content regardless of path or interaction state

---

## Key Design Decisions

1. **Seed variants via `data-seed-type` attribute** — keeps the seed builder unified
2. **Path-dependent branching via `state.v` conditionals** — no templating engine, just JS
3. **Liminal transitions as passive overlay** — not a dialog, no focus trapping
4. **Engagement state as passive counter** — not gamification
5. **Ghost trails deferred** — only technique requiring backend infrastructure
6. **Scatter-to-text with deterministic positions** — seeded by word content for consistency
7. **Dwell-reveal via `mousemove` timer** — more reliable than `mouseenter`/`mouseleave`

---

## Implementation Priority

Implementation follows tier order. Each tier is independently valuable:

- **After Tier 1**: Reading experience already feels different — questions provoke, fourth-wall breaks defamiliarize, dangling references create tension
- **After Tier 2**: The configurative model is live — content changes with path, transitions create breathing room, ghostfading signals accumulated knowledge
- **After Tier 3**: Full interaction dynamics — scroll-scrubbed visuals, scatter-to-text, dwell rewards, retrieval practice, interpretive forks
- **After Tier 4**: Meta-resonance — reading paths as probability distributions, the ultimate thematic connection

---

## Related Documents

- Research: `.wai/projects/llm-essays/research/2026-02-11-interaction-dynamics-research.md`
- OpenSpec proposal: `openspec/changes/add-interaction-dynamics/proposal.md`
- Design decisions: `openspec/changes/add-interaction-dynamics/design.md`
- Affected specs: inline-seeds, navigation, visual-design, plateaus, scrolly-engine, landing-page, routing-state
