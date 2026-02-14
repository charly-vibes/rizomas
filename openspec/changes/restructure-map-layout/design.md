## Context
The map currently renders all 46 edges at all times and positions nodes in a quasi-symmetric grid. This produces a rigid, information-dense visualization that contradicts the rhizomatic metaphor. The redesign introduces two complementary changes: clustered node positions and progressive edge reveal.

## Goals / Non-Goals
- **Goals**: Make the map feel organic, alive, and personal to each reader's journey. Reduce visual noise. Reward exploration.
- **Non-Goals**: Changing the graph topology (edges/connections remain the same 46). Dynamic/physics-based layout. Changing node count or IDs. Adding new persisted state fields.

## Decisions

### Cluster Organization
Nodes grouped into 3–4 thematic clusters with negative space between them. Clusters are an internal layout heuristic — they are never labeled or exposed to the reader.

- **Core Mechanics** (top-center): `next-word`, `averaging-problem`, `weight-of-words`, `the-shaping` — the "how it works" essays
- **Mind & Meaning** (right): `understanding-illusion`, `quality`, `echoes-of-the-past`, `empathy-machine` — epistemological/philosophical essays
- **Agency & Tools** (left): `tool-user`, `automation-of-cognition`, `black-box-oracle`, `practical-guide` — practical/societal impact essays
- **Bridges** (scattered): `algorithm-as-muse`, `learning-machines-learning-humans`, `artificial-brain`, `digital-footprints`, `near-zero-cost-impact` — cross-cutting essays positioned in the negative space between clusters

Positions within clusters use irregular spacing (no two nodes at the same y-coordinate within a cluster). Bridge nodes sit between clusters to break symmetry. High-degree nodes are not placed centrally to avoid implying a hub/root structure.

All node coordinates SHALL stay within the range [0.05, 0.95] to ensure node circles and labels are not clipped at small viewport sizes.

- **Alternative considered**: Force-directed layout at runtime. Rejected — adds JS complexity, produces inconsistent layouts across visits, and makes the accessibility anchor positions unstable.
- **Alternative considered**: Random jitter on fixed positions. Rejected — jitter per-visit breaks spatial memory; readers can't build a mental map.

### Progressive Edge Reveal — Derived from Trail
Edges are invisible until traversed. An edge is "traversed" when the reader navigates directly between two connected nodes in either direction.

**Traversed-edge derivation algorithm:**
1. On route change, determine `fromId` (previous plateau) and `toId` (new plateau).
2. If both are valid plateau IDs and `(fromId, toId)` exists in `GRAPH.edges`, the edge is traversed.
3. The set of traversed edges is derived at runtime by scanning `state.tr` consecutive pairs: for each `i > 0`, check if `(tr[i-1].p, tr[i].p)` is a graph edge. If yes, include it.
4. Edge keys are canonicalized as `a < b ? a|b : b|a` for deduplication.

No new persisted state is needed — `state.tr` already records every plateau navigation with `{p, t}` entries, and the routing-state spec is unchanged.

**Rendering rules by context:**
- On **landing page**: No edges on first visit. Returning visitors see their traversed edges.
- On **mini-map** (plateau view): Only traversed edges among the displayed nodes (current node + neighbors) are shown.
- On **overlay**: All traversed edges are shown across the full graph.
- The **journey trail** (`state.tr`) continues to render as before — it overlays on top of revealed edges. Trail segments are drawn between all consecutive visits regardless of graph adjacency (the trail is the reader's personal path, not a graph property).

**Edge reveal animation:** When `prefers-reduced-motion` is not active, a newly traversed edge MAY briefly render at higher opacity (0.5) for 400ms before settling to its resting opacity (0.25). When `prefers-reduced-motion` is active, edges appear instantly at resting opacity.

- **Alternative considered**: Adding `state.te` as a separate persisted field. Rejected — `state.tr` already captures every navigation, so `te` is derivable and adding it would require a routing-state spec change and migration logic for existing users.
- **Alternative considered**: Show all edges but dim untraversed ones heavily. Rejected — even at very low opacity, 46 edges create visual structure that telegraphs the full topology. The point is that the reader shouldn't see connections they haven't made.
- **Alternative considered**: Reveal edges on hover (preview before traversal). This could work as a future enhancement but adds complexity. Starting with traversal-only reveal.

## Risks / Trade-offs
- **First-visit emptiness**: A map with only nodes and no edges might feel sparse or confusing. Mitigation: the landing page text says "Click any node to begin" — nodes are clearly clickable (pointer cursor, focus rings, DOM anchors), and the absence of edges creates curiosity rather than confusion.
- **Returning visitors with few traversals**: A map with 2–3 edges might look incomplete. Mitigation: the journey trail provides visual structure even with few edges, and the node clusters create implicit groupings.
- **Non-neighbor jumps**: If a reader uses the overlay to jump to a non-adjacent plateau, no edge is created (correct — no graph edge exists). The trail still draws a segment between the visits, which is the reader's actual path. This is intentional: trail ≠ edges.

## Open Questions
- Should the overlay offer a "show all connections" toggle for readers who want the full topology? (Deferred — can be added later without spec changes.)
