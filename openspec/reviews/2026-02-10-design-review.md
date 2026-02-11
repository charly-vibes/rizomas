# Design and Optionality Review - 2026-02-10

This document contains a design practice and optionality review of the project's specifications as of 2026-02-10.

## Part 1: Design Practice Review

### PHASE 1: DESCRIBE (System Description)

The project is a single-page web application designed to be a collection of 8 interconnected visual essays ("plateaus") about how Large Language Models (LLMs) work. The application is built with vanilla JavaScript, with no external dependencies other than Google Fonts. It is designed to be a single HTML file with no build step.

**Core Concepts:**

*   **Rhizomatic Navigation:** A non-linear navigation structure allowing users to move between essays laterally.
*   **Plateaus:** Individual essays, either "scrolly" (rich, animated) or "simple" (text-based).
*   **Crystallization:** An interaction model where content is revealed progressively.
*   **Whispers:** Faint, clickable questions in the margin of scrolly plateaus that link to other plateaus.
*   **Constellation:** A navigation map formed by the "whispers" at the end of a scrolly plateau.

**Technical Architecture:**

*   **Single File Application:** All DOM elements are built imperatively using a JavaScript helper function `h()`.
*   **Vanilla JavaScript:** No frameworks are used.
*   **Hash-Based Routing:** Uses the URL hash (`#`) for navigation.
*   **State Management:** Session state is persisted in `localStorage`.
*   **Scrolly Engine:** A reusable `buildScrolly()` function creates the scrollytelling sections.
*   **Canvas API:** Used for rendering network maps.
*   **Accessibility:** Includes `aria` attributes, keyboard navigation, and a parallel DOM for canvas elements.

### PHASE 2: DIAGNOSE (Proactive Diagnosis)

This phase identifies potential areas of concern in the existing design.

1.  **Single File Architecture at Scale:** The `project.md` notes that the single HTML file approach may become a bottleneck. As the project grows, a single large file becomes difficult to manage and forces users to download the entire application at once.
2.  **Manual Testing Only:** The reliance on manual testing means that regressions can be easily introduced. This becomes increasingly time-consuming and error-prone as the project's complexity grows.
3.  **Accessibility of Canvas Elements:** Providing a parallel DOM for canvas elements is notoriously difficult to get right. The two can easily get out of sync, leading to a subpar experience for screen reader users.
4.  **Performance of Imperative DOM Construction:** Without a virtual DOM, there's a risk of inefficient DOM updates and performance issues, especially on mobile devices.

### PHASE 3: DELIMIT (Scope)

This review focuses on the architectural and design decisions as documented in the specs. It does not involve code implementation or changes.

---

## Part 2: Optionality Review

### Final Report

**Scores Summary:**

*   Reversibility: 3/10
*   Resilience: 6/10
*   Future Value: 5/10
*   **Overall Optionality: 4/10** (LOCKED_IN)

**Verdict:**

**Optionality Assessment:** LOCKED_IN

**Key Findings:**

1.  The project's core architectural decisions (single file, no framework, imperative DOM) create a "locked-in" design. This is a deliberate trade-off for simplicity and portability.
2.  The lack of automated testing is the single biggest risk to the project's long-term stability.
3.  The accessibility of the canvas elements is a potential weakness that needs to be carefully monitored.

**Recommendations:**

*   **Before proceeding:**
    *   **Acknowledge the "locked-in" nature of the design.** This is not necessarily a bad thing, but it's important to be aware of the trade-offs. The current design is optimized for a single author creating a self-contained piece of work.
    *   **Create a "smoke test" suite.** Even a small set of automated tests for the most critical user journeys would provide a lot of value. This could be done with a lightweight tool like Playwright or Cypress.
*   **Build in over time:**
    *   **Monitor the file size.** Be prepared to act on the "introduce a build step" escape hatch if the project grows.
    *   **Continuously test for accessibility.** This should be a part of the manual testing process for every change.

**The Bottom Line:**

The design is a beautiful example of a highly-constrained, artisanal approach to software development. It prioritizes simplicity, portability, and authorial control over flexibility and scalability. The level of lock-in is appropriate for the project's stated goals, but the lack of automated testing is a significant and unnecessary risk.

**Human review recommended:** YES. The accessibility of the canvas elements in particular would benefit from a review by an accessibility expert.
