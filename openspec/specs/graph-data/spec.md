# Graph Data

## Purpose
The fixed, immutable graph structure defining plateau nodes, their connections, and layout positions. This is the single source of truth for the topology that all navigation elements (landing map, mini-map, overlay, constellations) render from.

## Requirements

### Requirement: Node Definitions
The graph SHALL contain exactly 17 nodes, each with an ID, title, and short label:

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
| `algorithm-as-muse` | The Algorithm as Muse | Muse |
| `echoes-of-the-past` | Echoes of the Past | Echoes |
| `learning-machines-learning-humans` | Learning Machines, Learning Humans | Learning AI |
| `automation-of-cognition` | The Automation of Cognition | Automation |
| `black-box-oracle` | The Black Box Oracle | Black Box |
| `digital-footprints` | Digital Footprints | Footprints |
| `artificial-brain` | The Artificial Brain | Art. Brain |
| `empathy-machine` | The Empathy Machine? | Empathy |
| `near-zero-cost-impact` | The Near-Zero Cost Impact | Near-Zero |

#### Scenario: All 17 nodes exist
- **WHEN** the graph data is loaded
- **THEN** exactly 17 nodes are available with correct IDs, titles, and short labels

### Requirement: Edge Definitions
The graph SHALL contain exactly 46 bidirectional edges. Every node SHALL be reachable from every other node through some path. The complete edge list:

1. `next-word` ↔ `averaging-problem`
2. `next-word` ↔ `understanding-illusion`
3. `next-word` ↔ `weight-of-words`
4. `next-word` ↔ `learning-machines-learning-humans`
5. `next-word` ↔ `algorithm-as-muse`
6. `next-word` ↔ `artificial-brain`
7. `next-word` ↔ `empathy-machine`
8. `averaging-problem` ↔ `the-shaping`
9. `averaging-problem` ↔ `quality`
10. `averaging-problem` ↔ `weight-of-words`
11. `averaging-problem` ↔ `practical-guide`
12. `averaging-problem` ↔ `understanding-illusion`
13. `averaging-problem` ↔ `near-zero-cost-impact`
14. `the-shaping` ↔ `quality`
15. `the-shaping` ↔ `practical-guide`
16. `the-shaping` ↔ `tool-user`
17. `the-shaping` ↔ `weight-of-words`
18. `the-shaping` ↔ `learning-machines-learning-humans`
19. `the-shaping` ↔ `black-box-oracle`
20. `the-shaping` ↔ `automation-of-cognition`
21. `the-shaping` ↔ `algorithm-as-muse`
22. `the-shaping` ↔ `near-zero-cost-impact`
23. `quality` ↔ `understanding-illusion`
24. `quality` ↔ `practical-guide`
25. `quality` ↔ `echoes-of-the-past`
26. `quality` ↔ `black-box-oracle`
27. `quality` ↔ `empathy-machine`
28. `quality` ↔ `digital-footprints`
29. `quality` ↔ `near-zero-cost-impact`
30. `understanding-illusion` ↔ `practical-guide`
31. `understanding-illusion` ↔ `artificial-brain`
32. `understanding-illusion` ↔ `empathy-machine`
33. `understanding-illusion` ↔ `echoes-of-the-past`
34. `understanding-illusion` ↔ `tool-user`
35. `understanding-illusion` ↔ `near-zero-cost-impact`
36. `practical-guide` ↔ `tool-user`
37. `practical-guide` ↔ `weight-of-words`
38. `tool-user` ↔ `automation-of-cognition`
39. `tool-user` ↔ `digital-footprints`
40. `automation-of-cognition` ↔ `digital-footprints`
41. `automation-of-cognition` ↔ `black-box-oracle`
42. `automation-of-cognition` ↔ `near-zero-cost-impact`
43. `black-box-oracle` ↔ `empathy-machine`
44. `black-box-oracle` ↔ `near-zero-cost-impact`
45. `echoes-of-the-past` ↔ `digital-footprints`
46. `digital-footprints` ↔ `near-zero-cost-impact`

Node degrees: `the-shaping` (10), `quality` (9), `understanding-illusion` (9), `next-word` (7), `averaging-problem` (7), `near-zero-cost-impact` (7), `practical-guide` (6), `automation-of-cognition` (5), `black-box-oracle` (5), `digital-footprints` (5), `tool-user` (5), `empathy-machine` (4), `weight-of-words` (4), `echoes-of-the-past` (3), `algorithm-as-muse` (2), `artificial-brain` (2), `learning-machines-learning-humans` (2).

#### Scenario: All edges are bidirectional
- **WHEN** an edge exists between `next-word` and `averaging-problem`
- **THEN** navigation is possible in both directions

#### Scenario: Graph is fully connected
- **WHEN** any node is selected as a starting point
- **THEN** all other 16 nodes are reachable through edge traversal

#### Scenario: Edge count matches
- **WHEN** the edge list is enumerated
- **THEN** exactly 46 edges exist

### Requirement: Node Positions
Node positions SHALL be fixed and normalized to 0–1 coordinates. The graph data SHALL be immutable at runtime — no nodes, edges, or positions may be added or modified after initialization.

| Node | x | y |
|---|---|---|
| `next-word` | 0.50 | 0.08 |
| `weight-of-words` | 0.30 | 0.15 |
| `algorithm-as-muse` | 0.70 | 0.15 |
| `averaging-problem` | 0.50 | 0.28 |
| `the-shaping` | 0.20 | 0.35 |
| `understanding-illusion` | 0.80 | 0.35 |
| `learning-machines-learning-humans` | 0.05 | 0.45 |
| `echoes-of-the-past` | 0.95 | 0.45 |
| `tool-user` | 0.35 | 0.55 |
| `quality` | 0.65 | 0.55 |
| `black-box-oracle` | 0.10 | 0.65 |
| `near-zero-cost-impact` | 0.50 | 0.65 |
| `practical-guide` | 0.90 | 0.65 |
| `automation-of-cognition` | 0.25 | 0.75 |
| `digital-footprints` | 0.75 | 0.75 |
| `artificial-brain` | 0.40 | 0.88 |
| `empathy-machine` | 0.60 | 0.88 |

#### Scenario: Positions scale to container
- **WHEN** the graph is rendered in a canvas of any size
- **THEN** node positions are multiplied by canvas dimensions to produce pixel coordinates

#### Scenario: Graph data is immutable
- **WHEN** the application is running
- **THEN** no code path adds, removes, or modifies nodes, edges, or positions
