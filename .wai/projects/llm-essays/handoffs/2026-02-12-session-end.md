---
date: 2026-02-12
project: llm-essays
phase: design
---

# Session Handoff — Mini-Map Redesign Planning

## What Was Done

1. **Created parent issue `rizomas-c1l`** — "Redesign mini-map for calm, exploratory feel" (P2 feature)
2. **Ran a first-pass review** using 5 universal dimensions (Clarity, Scope, Testability, Dependencies, Alignment) — scored 17/25, identified scope and testability gaps
3. **Updated `rizomas-c1l`** with acceptance criteria and phased structure
4. **Created 3 child tasks** with dependency chain:
   - `rizomas-c0x` (Phase 1) — Visual softening: soft palette, curved edges, active-node glow
   - `rizomas-niv` (Phase 2) — Ambient breathing animation + journey trail
   - `rizomas-71q` (Phase 3) — Hover interaction + smooth plateau transitions (blocked by P1 + P2)
5. **Ran Rule of 5 universal review** against project specs and philosophy — found 1 CRITICAL (spec contradiction on node fills), 5 HIGH issues
6. **Created openspec change proposal `update-minimap-aesthetics`** — modifies navigation spec (Rhizome Mini-Map requirement, 9 scenarios) and visual-design spec (3 new motion timing entries). Validates strict ✓
7. **Updated all 4 tickets** with:
   - Design rationale connecting each phase to Deleuze/Guattari's rhizome philosophy
   - Spec-compliant rendering rules (visited nodes keep `--ink` dark fill)
   - Technical corrections (radial gradient not shadowBlur, `curvedEdges` parameter, `state.tr` for trail, IntersectionObserver for visibility gating)
   - Architectural prerequisite documented for Phase 3 (buildMiniMap lifecycle refactor)

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| Visited nodes keep `--ink` dark fill | Navigation spec mandates "dark fill" — can't override without spec change |
| Softening scoped to unvisited nodes/edges only | Avoids spec contradiction while achieving visual calm |
| Radial gradient instead of `ctx.shadowBlur` | shadowBlur is expensive on high-DPI canvas, not hardware-accelerated |
| `curvedEdges` as drawGraph parameter | drawGraph is shared by mini-map, landing map, overlay — curves only on mini-map for now |
| Breathing: 5s period, ±0.08 opacity | Registered in visual-design motion timings table (single source of truth) |
| IntersectionObserver gates animation | Prevents battery drain when mini-map not visible (especially mobile) |
| Trail uses `state.tr` not `state.v` | `state.v` is unordered set; `state.tr` has chronological visit order |
| Phase 3 requires lifecycle refactor | buildMiniMap currently rebuilt on each route change — can't animate transitions without persistence |

## Open Questions

1. **Should curved edges eventually apply to all three graph renderings** (landing map, mini-map, overlay)? Currently scoped to mini-map only. Parent ticket notes a follow-up evaluation.
2. **How does `rizomas-0s2` (redundant modal) resolve?** Phase 3 hover/transition behavior depends on what the overlay becomes.
3. **Should the mini-map have a domain-vocabulary name?** (e.g., "root map," "mycelial view") — would help guide aesthetic coherence.

## Next Steps

### Immediate (before any implementation)
1. **Review and approve** openspec change `update-minimap-aesthetics`
   - Files: `openspec/changes/update-minimap-aesthetics/proposal.md`
   - Delta specs: `specs/navigation/spec.md`, `specs/visual-design/spec.md`
   - Validate: `openspec validate update-minimap-aesthetics --strict`

### After approval
2. **Implement Phase 1** (`rizomas-c0x`) — Visual softening
   - No blockers, can start immediately after spec approval
   - Scope: drawGraph changes + buildMiniMap rendering
3. **Implement Phase 2** (`rizomas-niv`) — Breathing + trail
   - Can run in parallel with Phase 1 (independent canvas logic)
   - Requires rAF loop + IntersectionObserver
4. **Implement Phase 3** (`rizomas-71q`) — Hover + transitions
   - Blocked by Phase 1 + Phase 2
   - Requires architectural refactor of buildMiniMap lifecycle first
   - Consider resolving `rizomas-0s2` (overlay behavior) before this

### Related work to keep in mind
- `rizomas-661` — Accessible fallback for canvas navigation (any mini-map changes must not regress accessibility)
- Visual coherence across the three graph renderings (landing map, mini-map, overlay)

## Context

### Issue tree

```
rizomas-c1l (parent) — Redesign mini-map for calm, exploratory feel
├── rizomas-c0x (Phase 1) — Visual softening [P2, no blockers]
├── rizomas-niv (Phase 2) — Breathing + trail [P2, no blockers]
└── rizomas-71q (Phase 3) — Hover + transitions [P3, blocked by c0x + niv]

Related:
├── rizomas-0s2 — Redundant Navigation Map Modal
└── rizomas-661 — Accessible fallback for canvas navigation
```

### Openspec change

```
openspec/changes/update-minimap-aesthetics/
├── proposal.md          — Why/what/impact
├── tasks.md             — 13 implementation tasks
└── specs/
    ├── navigation/spec.md      — MODIFIED Rhizome Mini-Map (9 scenarios)
    └── visual-design/spec.md   — MODIFIED Motion Timings (3 new entries)
```

### Uncommitted changes

```
 M .beads/issues.jsonl
?? openspec/changes/update-minimap-aesthetics/
```

### Thread reference
- Amp thread: https://ampcode.com/threads/T-019c5404-b645-75bd-8f7b-1634c5e7f631
