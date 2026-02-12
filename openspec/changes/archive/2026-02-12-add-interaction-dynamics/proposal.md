# Change: Add Interaction Dynamics System

## Why

The current reading experience within each plateau is conventional linear
reading: scroll down, text appears, reach the bottom, pick a link. The
non-linearity lives in the navigation map but not in the reading experience
itself. The content describes probability distributions, the nature of
understanding, and the illusion of comprehension --- but the interaction model
does not make the reader *feel* those things. It describes them.

The interaction dynamics research (2026-02-11) identifies cognitive science
foundations --- desirable difficulty (Bjork), information gap theory
(Loewenstein), the Zeigarnik effect, productive confusion (D'Mello & Graesser),
and defamiliarization (Shklovsky) --- and maps them to 16 concrete interaction
techniques. These techniques shift the interaction model from **explorative**
(user chooses path through pre-existing content) to **configurative** (user's
actions change the content, not just the path through it).

## What Changes

### Seed System (inline-seeds)
- **Question-seeds**: Some seeds present a question that creates an information
  gap before revealing the answer (retrieval practice + mnemonic medium)
- **Fourth-wall seeds**: 1--2 seeds per plateau that reflect on the reader's
  cognitive process and connect it to the essay's thesis
- **Dangling-reference seeds**: Seed expansions that trail off into whisper links
  to other plateaus, leveraging the Zeigarnik effect
- **Path-dependent seeds**: Seed content branches on `state.v` visit history,
  showing different depth depending on what the reader has already encountered
- **Visible engagement state**: Subtle annotation showing seed engagement
  progress per plateau ("4 of 7 seeds opened")

### Navigation System (navigation)
- **Liminal transitions**: 500ms--1s transitional moment between plateaus showing
  the connecting question centered on a frosted background
- **Ghostfading**: Subtle opacity reduction (0.85) on sections the reader has
  encountered in other plateaus
- **Dwell-reveal annotations**: Marginal annotations appearing when the reader
  holds their cursor still over a paragraph for 3+ seconds
- **Cross-plateau retrieval moments**: Brief interstitials after 3+ plateau visits
  referencing earlier concepts to strengthen rhizomatic memory
- **Ghost trails** (future/Tier 4): Aggregated anonymized reader paths shown as
  faint curves on the constellation overlay

### Visual Design (visual-design)
- **Background temperature shift**: Page background shifts subtly in color
  temperature as the reader progresses through a plateau
- **New motion timings**: Liminal transition, dwell-reveal, scatter-to-text,
  and ghostfading durations

### Content & Layout (plateaus)
- **Interaction model shift**: From pure crystallization to crystallization +
  configuration (Aarseth's explorative → configurative)
- **Author marginalia**: Brief parenthetical meta-commentary in a margin column,
  some path-dependent
- **Micro-CYOA forks**: Explicit interpretive forks within plateaus (wide and
  shallow branching that reconverges)
- **Scatter-to-text animation**: Words begin scattered across the visual panel
  and gather into readable text during scroll

### Scrolly Engine (scrolly-engine)
- **Scroll-scrubbed visuals**: Animations that advance proportionally to scroll
  position, not just triggering at thresholds

### Landing Page (landing-page)
- **Questions-first content**: Entry questions as primary navigation driver,
  replacing plateau titles as the main call to action

### State (routing-state)
- **Extended state**: Track seed interactions per plateau and engagement metrics
  to support path-dependent content and visible engagement state

## Impact
- Affected specs: inline-seeds, navigation, visual-design, plateaus,
  scrolly-engine, landing-page, routing-state (all 7 non-graph-data specs)
- Affected code: `index.html` (single-file app)
- **Not a breaking change** --- all new capabilities layer on top of existing
  behavior. Existing seeds, whispers, and navigation continue to work as before.
- Ghost trails (Tier 4) require minimal analytics infrastructure and are deferred.
