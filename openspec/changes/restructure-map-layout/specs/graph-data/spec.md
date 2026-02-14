## MODIFIED Requirements

### Requirement: Node Positions
Node positions SHALL be fixed and normalized to 0–1 coordinates, with all values within the range [0.05, 0.95] to ensure nodes and labels are not clipped at small viewport sizes. The graph data SHALL be immutable at runtime — no nodes, edges, or positions may be added or modified after initialization.

Nodes SHALL be organized into thematic clusters with intentional negative space between clusters. Positions within clusters SHALL use irregular spacing — no two nodes at the same y-coordinate within a cluster. Clusters are an internal layout heuristic and SHALL NOT be labeled or exposed to the reader.

**Core Mechanics cluster** (upper-center):

| Node | x | y |
|---|---|---|
| `next-word` | 0.42 | 0.06 |
| `weight-of-words` | 0.28 | 0.18 |
| `averaging-problem` | 0.55 | 0.22 |
| `the-shaping` | 0.15 | 0.34 |

**Mind & Meaning cluster** (right):

| Node | x | y |
|---|---|---|
| `understanding-illusion` | 0.85 | 0.28 |
| `quality` | 0.72 | 0.48 |
| `echoes-of-the-past` | 0.92 | 0.42 |
| `empathy-machine` | 0.78 | 0.68 |

**Agency & Tools cluster** (lower-left):

| Node | x | y |
|---|---|---|
| `tool-user` | 0.30 | 0.56 |
| `automation-of-cognition` | 0.12 | 0.72 |
| `black-box-oracle` | 0.08 | 0.55 |
| `practical-guide` | 0.38 | 0.74 |

**Bridge nodes** (negative space between clusters):

| Node | x | y |
|---|---|---|
| `algorithm-as-muse` | 0.68 | 0.12 |
| `learning-machines-learning-humans` | 0.05 | 0.44 |
| `near-zero-cost-impact` | 0.52 | 0.62 |
| `digital-footprints` | 0.62 | 0.82 |
| `artificial-brain` | 0.35 | 0.90 |

#### Scenario: Positions scale to container
- **WHEN** the graph is rendered in a canvas of any size
- **THEN** node positions are multiplied by canvas dimensions to produce pixel coordinates

#### Scenario: Graph data is immutable
- **WHEN** the application is running
- **THEN** no code path adds, removes, or modifies nodes, edges, or positions

#### Scenario: Nodes form visible clusters with negative space
- **WHEN** the map renders
- **THEN** nodes appear in groupings separated by empty space, with no grid alignment

#### Scenario: Nodes are not clipped at small viewports
- **WHEN** the canvas renders at 320px width
- **THEN** all node circles and labels remain within the visible canvas area
