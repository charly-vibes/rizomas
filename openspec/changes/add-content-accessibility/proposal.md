# Change: Add content accessibility for non-technical readers

## Why
The essays contain unexpanded acronyms (LLM, RLHF, GPT), technical jargon (gradient, stochastic, inference, softmax), and domain-specific vocabulary that assumes prior knowledge. The project targets a general audience, but no systematic mechanism ensures content is comprehensible to non-technical readers beyond the existing inline-seeds pattern.

## What Changes
- Introduce a cross-cutting **content accessibility** spec that establishes rules for acronym expansion, plain-language guidelines, and a glossary mechanism for unavoidable technical terms.
- All acronyms MUST be expanded on first use within each plateau.
- Technical terms that cannot be simplified MUST be wrapped in an inline glossary mechanism (leveraging the existing seed/tooltip pattern) that provides a plain-language definition.
- Content SHOULD be reviewed against readability heuristics to keep complexity appropriate for a general audience.

## Impact
- New spec: `content-accessibility`
- Affected specs: `plateaus` (content authoring guidelines), `inline-seeds` (glossary seed pattern)
- Affected code: `index.html` (essay text content, potential glossary tooltip markup)
- Related issue: `rizomas-2fe`
