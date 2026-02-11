# Graph Data Specification v1

This document outlines the graph data (nodes, edges, and their positions) for the expanded collection of 16 LLM plateaus, enabling the rhizomatic navigation system (Rhizome mini-map and Rhizome overlay). This specification supersedes Section 7 of `2026-02-10-how-llms-actually-work-specification-v3-upda.md` for the canonical graph data.

### Nodes (16)

| ID | Title | Short label |
|---|---|---|
| `next-word` | The Next Word | Next Word |
| `averaging-problem` | The Averaging Problem | Averaging |
| `the-shaping` | The Shaping | Shaping |
| `practical-guide` | The Field Guide | Field Guide |
| `understanding-illusion` | The Understanding Illusion | Understanding |
| `weight-of-words` | The Weight of Words | Weight of Words |
| `quality` | What Is Quality? | Quality |
| `tool-user` | The Tool-User | Tool-User |
| `algorithm-as-muse` | The Algorithm as Muse: Co-creation and the Human Spark | Muse |
| `echoes-of-the-past` | Echoes of the Past: LLMs as Historical Lenses | Echoes Past |
| `learning-machines-learning-humans` | Learning Machines, Learning Humans: AI in the Classroom | Learning AI |
| `automation-of-cognition` | The Automation of Cognition: LLMs and the Future of Work | Auto Cognition |
| `black-box-oracle` | The Black Box Oracle: Trust, Transparency, and Accountability | Black Box |
| `digital-footprints` | Digital Footprints: The Environmental Cost of AI | Digital Footprint |
| `artificial-brain` | The Artificial Brain: Metaphors and Mismatches | Artificial Brain |
| `empathy-machine` | The Empathy Machine? AI and Human Connection | Empathy AI |
| `near-zero-cost-impact` | The Impact of Near-Zero Cost Production: Preparing for an Abundant Future | Near-Zero Cost |

### Edges (Based on conceptual links and whispers designed)

```
next-word ↔ averaging-problem
next-word ↔ understanding-illusion
next-word ↔ weight-of-words
next-word ↔ learning-machines-learning-humans
next-word ↔ algorithm-as-muse
next-word ↔ artificial-brain
next-word ↔ empathy-machine

averaging-problem ↔ the-shaping
averaging-problem ↔ quality
averaging-problem ↔ weight-of-words

the-shaping ↔ quality
the-shaping ↔ practical-guide
the-shaping ↔ tool-user
the-shaping ↔ learning-machines-learning-humans
the-shaping ↔ black-box-oracle
the-shaping ↔ automation-of-cognition
the-shaping ↔ algorithm-as-muse

quality ↔ understanding-illusion
quality ↔ practical-guide
quality ↔ echoes-of-the-past
quality ↔ black-box-oracle
quality ↔ empathy-machine
quality ↔ digital-footprints

understanding-illusion ↔ practical-guide
understanding-illusion ↔ artificial-brain
understanding-illusion ↔ empathy-machine
understanding-illusion ↔ echoes-of-the-past

practical-guide ↔ tool-user

tool-user ↔ automation-of-cognition
tool-user ↔ digital-footprints

automation-of-cognition ↔ digital-footprints
automation-of-cognition ↔ black-box-oracle

black-box-oracle ↔ empathy-machine

echoes-of-the-past ↔ digital-footprints
near-zero-cost-impact ↔ averaging-problem
near-zero-cost-impact ↔ what-is-quality
near-zero-cost-impact ↔ understanding-illusion
near-zero-cost-impact ↔ the-shaping
near-zero-cost-impact ↔ digital-footprints
near-zero-cost-impact ↔ automation-of-cognition
near-zero-cost-impact ↔ black-box-oracle
```

### Node Positions (fixed, normalized 0–1, aiming for visual balance)

```js
{
  'next-word':             {x:.5,   y:.08},
  'weight-of-words':       {x:.3,   y:.15},
  'algorithm-as-muse':     {x:.7,   y:.15},
  'averaging-problem':     {x:.5,   y:.28},
  'the-shaping':           {x:.2,   y:.35},
  'understanding-illusion':{x:.8,   y:.35},
  'learning-machines-learning-humans': {x:.05, y:.45},
  'echoes-of-the-past':    {x:.95,  y:.45},
  'tool-user':             {x:.35,  y:.55},
  'quality':               {x:.65,  y:.55},
  'black-box-oracle':      {x:.1,   y:.65},
  'practical-guide':       {x:.9,   y:.65},
  'automation-of-cognition':{x:.25,  y:.75},
  'digital-footprints':    {x:.75,  y:.75},
  'artificial-brain':      {x:.4,   y:.88},
  'empathy-machine':       {x:.6,   y:.88},
  'near-zero-cost-impact': {x:.5,   y:.65}
}
```