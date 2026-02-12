# Change: Add 9 Societal Plateaus (Expand from 8 to 17)

## Why
The project was designed to expand from 8 to 17 plateaus, adding 9 new essays covering societal, philosophical, and economic dimensions of LLMs. Full design documents exist in `.wai/projects/llm-essays/designs/` including a complete 17-node graph topology, but the OpenSpec specs still only reflect the original 8 plateaus. This creates a gap between design intent and the authoritative spec.

## What Changes
- **plateaus**: Add 9 new scrolly plateau requirements; update rhizome connections for 6 existing plateaus that gain links to new nodes; update Purpose text ("8" → "17")
- **graph-data**: Expand from 8 to 17 nodes, 17 to 46 edges, 8 to 17 node positions
- **inline-seeds**: Add seed definitions for 9 new scrolly plateaus and 5 existing simple plateaus
- **navigation**: Update hardcoded "8" node counts to "17"
- **landing-page**: Update hardcoded "8" node counts to "17"
- **project.md**: Direct edit — "8 interconnected visual essays" → "17 interconnected visual essays"

## Impact
- Affected specs: plateaus, graph-data, inline-seeds, navigation, landing-page
- Affected code: All rendering, navigation, and data modules will need implementation
- No breaking changes to existing functionality — additive expansion
- The 9 new plateaus are all scrolly type, making the final mix 12 scrolly + 5 simple = 17
