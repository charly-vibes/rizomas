# Change: Restructure plateaus — merge Steering+Field Guide, add pretraining plateau

## Why
The current 8 plateaus have no dedicated section on how the base model learns (pretraining, gradient descent, scaling). This is the most fundamental "how does it actually work" question. Meanwhile, Steering the Ship and The Field Guide overlap significantly — both cover prompting techniques, few-shot examples, and chain-of-thought with shared references.

## What Changes
- **REMOVED**: "Steering the Ship" plateau (simple prose) — content folded into merged plateau
- **REMOVED**: "The Field Guide" plateau (simple prose) — content folded into merged plateau
- **ADDED**: "The Field Guide" plateau (simple prose) — merged version combining Steering's conceptual material ("prompting as probabilistic navigation") with Field Guide's practical guidance ("here's what to actually do")
- **ADDED**: "The Weight of Words" plateau (simple prose) — new pretraining plateau covering gradient descent, training data scale, scaling laws, and the insight that structure emerges as a byproduct of prediction
- Graph data updated: node count stays at 8, edges and positions adjusted for new topology
- Whisper assignments and question card destinations updated across affected plateaus

## Impact
- Affected specs: `plateaus`, `graph-data`
- Affected code: graph data in HTML, plateau routing, content
- Research briefs: new brief needed for "The Weight of Words"; merged brief for combined "Field Guide"
- Beads issues: content writing tasks for Steering and Field Guide need updating; new task for Weight of Words
