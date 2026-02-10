# Graph Data

## Purpose
The fixed, immutable graph structure defining plateau nodes, their connections, and layout positions. This is the single source of truth for the topology that all navigation elements (landing map, mini-map, overlay, constellations) render from.

## Requirements

### Requirement: Node Definitions
The graph SHALL contain exactly 8 nodes, each with an ID, title, and short label:

| ID | Title | Short Label |
|---|---|---|
| `next-word` | The Next Word | Next Word |
| `library-of-babel` | The Library of Babel | Library |
| `averaging-problem` | The Averaging Problem | Averaging |
| `the-shaping` | The Shaping | Shaping |
| `steering` | Steering the Ship | Steering |
| `quality` | What Is Quality? | Quality |
| `understanding-illusion` | The Understanding Illusion | Understanding |
| `practical-guide` | The Field Guide | Field Guide |

#### Scenario: All 8 nodes exist
- **WHEN** the graph data is loaded
- **THEN** exactly 8 nodes are available with correct IDs, titles, and short labels

### Requirement: Edge Definitions
The graph SHALL contain exactly 18 bidirectional edges. Every node SHALL be reachable from every other node through some path. The complete edge list:

1. `next-word` ↔ `library-of-babel`
2. `next-word` ↔ `averaging-problem`
3. `next-word` ↔ `understanding-illusion`
4. `library-of-babel` ↔ `averaging-problem`
5. `library-of-babel` ↔ `the-shaping`
6. `library-of-babel` ↔ `understanding-illusion`
7. `averaging-problem` ↔ `the-shaping`
8. `averaging-problem` ↔ `steering`
9. `averaging-problem` ↔ `quality`
10. `averaging-problem` ↔ `understanding-illusion`
11. `averaging-problem` ↔ `practical-guide`
12. `the-shaping` ↔ `steering`
13. `the-shaping` ↔ `quality`
14. `the-shaping` ↔ `understanding-illusion`
15. `steering` ↔ `quality`
16. `steering` ↔ `practical-guide`
17. `quality` ↔ `understanding-illusion`
18. `understanding-illusion` ↔ `practical-guide`

Node degrees: `averaging-problem` (6), `understanding-illusion` (6), `the-shaping` (5), `library-of-babel` (4), `steering` (4), `quality` (4), `next-word` (3), `practical-guide` (3).

#### Scenario: All edges are bidirectional
- **WHEN** an edge exists between `next-word` and `library-of-babel`
- **THEN** navigation is possible in both directions

#### Scenario: Graph is fully connected
- **WHEN** any node is selected as a starting point
- **THEN** all other 7 nodes are reachable through edge traversal

#### Scenario: Edge count matches
- **WHEN** the edge list is enumerated
- **THEN** exactly 18 edges exist

### Requirement: Node Positions
Node positions SHALL be fixed and normalized to 0–1 coordinates. The graph data SHALL be immutable at runtime — no nodes, edges, or positions may be added or modified after initialization.

| Node | x | y |
|---|---|---|
| `next-word` | 0.50 | 0.08 |
| `library-of-babel` | 0.22 | 0.28 |
| `understanding-illusion` | 0.78 | 0.28 |
| `averaging-problem` | 0.50 | 0.44 |
| `the-shaping` | 0.20 | 0.62 |
| `quality` | 0.80 | 0.62 |
| `steering` | 0.40 | 0.78 |
| `practical-guide` | 0.65 | 0.90 |

#### Scenario: Positions scale to container
- **WHEN** the graph is rendered in a canvas of any size
- **THEN** node positions are multiplied by canvas dimensions to produce pixel coordinates

#### Scenario: Graph data is immutable
- **WHEN** the application is running
- **THEN** no code path adds, removes, or modifies nodes, edges, or positions
