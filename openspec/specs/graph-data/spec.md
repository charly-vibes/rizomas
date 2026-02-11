# Graph Data

## Purpose
The fixed, immutable graph structure defining plateau nodes, their connections, and layout positions. This is the single source of truth for the topology that all navigation elements (landing map, mini-map, overlay, constellations) render from.

## Requirements

### Requirement: Node Definitions
The graph SHALL contain exactly 8 nodes, each with an ID, title, and short label:

| ID | Title | Short Label |
|---|---|---|
| `next-word` | The Next Word | Next Word |
| `averaging-problem` | The Averaging Problem | Averaging |
| `weight-of-words` | The Weight of Words | Weight |
| `the-shaping` | The Shaping | Shaping |
| `quality` | What Is Quality? | Quality |
| `understanding-illusion` | The Understanding Illusion | Understanding |
| `practical-guide` | The Field Guide | Field Guide |
| `tool-user` | The Tool-User | Tool-User |

#### Scenario: All 8 nodes exist
- **WHEN** the graph data is loaded
- **THEN** exactly 8 nodes are available with correct IDs, titles, and short labels

### Requirement: Edge Definitions
The graph SHALL contain exactly 17 bidirectional edges. Every node SHALL be reachable from every other node through some path. The complete edge list:

1. `next-word` ↔ `averaging-problem`
2. `next-word` ↔ `understanding-illusion`
3. `next-word` ↔ `weight-of-words`
4. `averaging-problem` ↔ `the-shaping`
5. `averaging-problem` ↔ `practical-guide`
6. `averaging-problem` ↔ `understanding-illusion`
7. `averaging-problem` ↔ `weight-of-words`
8. `the-shaping` ↔ `weight-of-words`
9. `the-shaping` ↔ `quality`
10. `the-shaping` ↔ `practical-guide`
11. `the-shaping` ↔ `tool-user`
12. `quality` ↔ `understanding-illusion`
13. `quality` ↔ `practical-guide`
14. `understanding-illusion` ↔ `practical-guide`
15. `understanding-illusion` ↔ `tool-user`
16. `practical-guide` ↔ `weight-of-words`
17. `practical-guide` ↔ `tool-user`

Node degrees: `practical-guide` (6), `averaging-problem` (5), `the-shaping` (5), `understanding-illusion` (5), `weight-of-words` (4), `next-word` (3), `quality` (3), `tool-user` (3).

#### Scenario: All edges are bidirectional
- **WHEN** an edge exists between `next-word` and `averaging-problem`
- **THEN** navigation is possible in both directions

#### Scenario: Graph is fully connected
- **WHEN** any node is selected as a starting point
- **THEN** all other 7 nodes are reachable through edge traversal

#### Scenario: Edge count matches
- **WHEN** the edge list is enumerated
- **THEN** exactly 17 edges exist

### Requirement: Node Positions
Node positions SHALL be fixed and normalized to 0–1 coordinates. The graph data SHALL be immutable at runtime — no nodes, edges, or positions may be added or modified after initialization.

| Node | x | y |
|---|---|---|
| `next-word` | 0.50 | 0.08 |
| `understanding-illusion` | 0.78 | 0.28 |
| `averaging-problem` | 0.50 | 0.44 |
| `weight-of-words` | 0.20 | 0.62 |
| `the-shaping` | 0.50 | 0.62 |
| `quality` | 0.80 | 0.62 |
| `practical-guide` | 0.35 | 0.85 |
| `tool-user` | 0.65 | 0.85 |

#### Scenario: Positions scale to container
- **WHEN** the graph is rendered in a canvas of any size
- **THEN** node positions are multiplied by canvas dimensions to produce pixel coordinates

#### Scenario: Graph data is immutable
- **WHEN** the application is running
- **THEN** no code path adds, removes, or modifies nodes, edges, or positions
