# Proposal: Fix Minimap Context on Plateaus

## Problem
The minimap on a plateau is currently showing all nodes, not just the current node and its direct connections as specified in the `navigation` spec.

## Proposed Solution
Update the minimap rendering logic to correctly filter the nodes and edges based on the current plateau.