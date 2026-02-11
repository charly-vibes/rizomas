# Consolidated LLM Essays Project: TODO List (v1)

This document consolidates and updates the project's development roadmap, reflecting the expansion to 16 plateaus and addressing the findings from the recent research review. It supersedes Section 11 of `2026-02-10-how-llms-actually-work-specification-v3-upda.md`.

## High Priority

- [ ] **Implement Interactive Elements for 14 Plateaus:** Develop and integrate "inline seeds," "whispers," and "constellation" functionality based on the designs documented in each of the 14 non-scrolly plateau design files. This includes:
    - `practical-guide`
    - `understanding-illusion`
    - `weight-of-words`
    - `quality`
    - `tool-user`
    - `algorithm-as-muse`
    - `echoes-of-the-past`
    - `learning-machines-learning-humans`
    - `automation-of-cognition`
    - `black-box-oracle`
    - `digital-footprints`
    - `artificial-brain`
    - `empathy-machine`
    - `near-zero-cost-impact`

- [ ] **Update Navigation Graph Data Implementation:** Implement the new graph data (nodes, edges, positions) as defined in `2026-02-11-graph-data-specification-v1.md` into the Rhizome mini-map and Rhizome overlay. This is critical for accurate navigation across all 16 plateaus.

## Medium Priority

- [ ] **Address Meta-Spec Inconsistencies:** Investigate and address the discrepancy between the "5 simple plateaus" listed in the original meta-specification (`how-llms-actually-work-specification-v3-upda.md`, Section 3.2) and the actual markdown files present in the repository (e.g., `steering` and `library-of-babel` are missing, while `the-tool-user` and `the-weight-of-words` exist but are uncategorized in the spec). Determine if `steering` and `library-of-babel` need to be created, or if the meta-spec needs further revision to reflect the true project inventory.

- [ ] **Review and Refine "The Averaging Problem" Step 1:**
    - Refine the wording of Step 1 (`ACC-001`).
    - Consider refining the title of Step 1 (`CLAR-001`).

- [ ] **Standardize Heading Hierarchy:** Ensure consistent use of `### Step X:` or `## Part X:` followed by `### Step Y:` across all 16 plateau documents for improved structural clarity (`CLAR-002`). (Note: `The Field Guide` already addressed in previous step).

## Low Priority

- [ ] **Explicitly Link to Project Goal in Conclusions:** Ensure each of the 16 plateau documents includes a concluding sentence or "Question for Reflection" that explicitly ties its content back to the broader project goal of encouraging critical engagement with AI technology (`ACT-001`). (Note: Addressed in previous step).

## Original TODOs (Re-evaluated for 16 Plateaus)

- [ ] Bug: something is broken (user report — needs diagnosis) - *Remains relevant*
- [ ] Mobile: whispers hidden below 480px — need alternative navigation cue - *Remains relevant, especially with more whispers.*
- [ ] Constellation layout doesn't account for different numbers of connections gracefully - *Remains relevant, especially with 16 nodes.*
- [ ] No accessibility audit (ARIA labels, keyboard nav for seeds, focus management) - *Remains relevant*
- [ ] No print stylesheet - *Remains relevant*
- [ ] Canvas network maps not keyboard accessible - *Remains relevant*
- [ ] Inline seeds not discoverable — no visual affordance besides background color - *Remains relevant, and becomes more critical with more seeds.*
