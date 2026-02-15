# Proposal: Add On-Demand References to Rizomas Essays

**Champion:** @charly

## 1. Abstract

This proposal outlines a plan to add source references to the essays in the Rizomas application. It introduces a new, on-demand interaction for references to distinguish them from the existing author marginalia, making them visible only to readers who actively seek them out.

## 2. Background

The essays in Rizomas are based on extensive research, but the application does not currently display the sources for the information presented. The user has requested that these references be added to the site, with the additional requirement that they should be less prominent than the existing marginalia and only visible on demand.

A previous investigation of the codebase revealed:

- The existence of an "Author Marginalia" feature.
- A pre-existing `MARGINALIA` JavaScript object in `index.html` to hold marginalia content.
- The necessary references are already compiled in the research document `2026-02-10-plateau-research-briefs.md`.
- The `index.html` file contains implementations for various UI components like popovers and collapsible sections that can be reused.

## 3. Proposal

This proposal suggests adding a subtle, on-demand reference section at the end of each essay. A small link or icon (e.g., "[references]") will be placed at the end of each essay's content. Clicking this link will reveal a list of the key references for that essay, likely in a popover or a small collapsible section.

### Advantages

-   **Clear Distinction:** Separates references from the more narrative "Author Marginalia".
-   **On-Demand Visibility:** Reduces clutter for the average reader while making references accessible to those who are interested.
-   **Reusability:** Leverages existing popover/collapsible section code from `index.html`, minimizing the need for new JavaScript and CSS.

### Implementation Details

1.  **Create a new UI component for references:**
    *   A new JavaScript function will be created to build the reference link and the container for the references (e.g., a popover).
    *   This function will be similar to the existing `buildInlineSeed` or `buildSeedCluster` functions.
    *   New CSS will be added to style the reference link and its container to be subtle and distinct from other UI elements.
2.  **Create a new data structure for references:**
    *   A new JavaScript object, similar to `MARGINALIA`, will be created to store the reference data. Let's call it `REFERENCES`.
    *   The `REFERENCES` object will be keyed by plateau ID, and the value will be an array of reference strings.
3.  **Extract and Format References:**
    *   The "Key References" for each plateau will be extracted from `.wai/projects/llm-essays/research/2026-02-10-plateau-research-briefs.md`.
    *   The references will be formatted into the `REFERENCES` object.
4.  **Integrate the new component:**
    *   The `buildPlateauView` function will be modified to call the new reference component builder, adding the reference link at the end of each essay.

## 4. Risks

- **Minor UI/UX Risk:** The new reference component needs to be designed and implemented carefully to be both unobtrusive and easy to use.
- **Minor Implementation Risk:** While existing code can be reused, some new JavaScript and CSS will be required. This introduces a small risk of bugs or inconsistencies with the existing design.

## 5. Unresolved questions

- What should the exact visual appearance and interaction of the reference link and its container be? (e.g., popover, collapsible section, etc.)
- Should the references be simple text, or should they link to external sources where possible?
