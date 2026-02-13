---
name: rizomas-interaction-dynamics
description: Applies principles from Non-Linear Interaction Dynamics research to validate and guide the design and implementation of Rizomas features (specs, tickets, implementations). Focuses on creating uncanny, question-provoking, and engaging reading experiences.
---

# Rizomas Interaction Dynamics Skill

This skill provides a framework for evaluating and designing features for the Rizomas project, ensuring alignment with principles of non-linear interaction dynamics, cognitive science, and defamiliarization theory. The goal is to move the reading experience from **explorative** to **configurative**, making each reading genuinely unique and highly engaging.

When reviewing specs, tickets, or implementations, apply the following principles and recommendations to ensure the proposed or existing solution:

## Guiding Principle: From Crystallization to Configuration

The core shift for Rizomas is from content being fixed and merely revealed, to the reader's path actively changing the content and experience. Your actions should alter the rhizome itself, not just navigate it.

## Validation Checklist & Design Recommendations

### Tier 1 - Content-Only Changes (High Impact, Low Effort)

These recommendations focus on content structuring and writing, requiring minimal or no code changes.

1.  **Question-seeds**:
    *   **Validation**: Are some inline seeds designed as questions that create an information gap (Loewenstein's theory) before revealing the answer?
    *   **Design**: Convert some existing content-seeds into interrogative forms.
2.  **Fourth-wall-breaking seeds**:
    *   **Validation**: Do 1-2 seeds per plateau reflect on the reader's behavior or cognitive processes, connecting it directly to the essay's thesis (e.g., about understanding, pattern-matching)?
    *   **Design**: Craft meta-commentary seeds that make the reader's interaction part of the argument.
3.  **Dangling references**:
    *   **Validation**: Do some seed expansions end with phrases that trail off into whispers to other plateaus, leveraging the Zeigarnik effect (incomplete tasks are better remembered)?
    *   **Design**: Integrate partial ideas or unresolved thoughts into seed content that naturally leads to another plateau.
4.  **Landing page as questions**:
    *   **Validation**: Does the landing page present plateaus as entry questions rather than just titles, using curiosity as the primary navigation driver?
    *   **Design**: Rephrase plateau introductions as compelling questions.
5.  **Author marginalia content**:
    *   **Validation**: Are there brief, parenthetical author asides (especially path-dependent ones) providing meta-commentary in simple plateaus?
    *   **Design**: Add thoughtful, concise marginalia that can adapt to the reader's journey.

### Tier 2 - Small JS/CSS Changes (Medium Impact, Medium Effort)

These recommendations involve minor code adjustments, often leveraging existing structures.

6.  **Path-dependent seed content**:
    *   **Validation**: Does seed content vary based on the reader's visit history (`state.v` or `state.tr`), providing tailored depth or context?
    *   **Design**: Implement conditional logic in seed-building functions to branch content based on previously visited plateaus.
7.  **Liminal transitions**:
    *   **Validation**: Is there a brief (500ms-1s) transition state between plateaus where the connecting question is centered on screen, creating a moment of orientation and highlighting the connection?
    *   **Design**: Implement CSS transitions and minor JS to create these focused interstitial moments.
8.  **Ghostfading visited concepts**:
    *   **Validation**: Do sections or concepts encountered in other plateaus show subtle opacity reduction (e.g., 0.85) as a visual signal of prior exposure?
    *   **Design**: Use CSS opacity manipulation tied to `localStorage` or `state.v` to create a visual "memory."
9.  **Visible engagement state**:
    *   **Validation**: Does the interface subtly indicate the reader's engagement (e.g., "You have opened X of Y seeds on this plateau")?
    *   **Design**: Implement a small JS counter for seeds or other interactions per plateau.
10. **Background temperature shift**:
    *   **Validation**: Does the page background subtly shift in color temperature as the reader progresses through a plateau (e.g., warmer going deeper, cooler approaching the constellation)?
    *   **Design**: Animate CSS custom properties (e.g., HSL values) based on scroll depth.

### Tier 3 - Medium JS Changes (Medium-High Impact, Medium-High Effort)

These recommendations involve more significant JavaScript implementation.

11. **Scroll-scrubbed visuals**:
    *   **Validation**: Do visuals within scrolly plateaus respond continuously to scroll position (e.g., a temperature dial rotating as the reader scrolls), allowing kinesthetic learning?
    *   **Design**: Use IntersectionObserver ratio tracking or `scrollTop` proportion calculations to link scroll position directly to visual animations.
12. **Scatter-to-text animation**:
    *   **Validation**: Do key terms or text elements dynamically arrange themselves from a scattered, high-entropy state into organized sentences as the reader scrolls, visually demonstrating concepts like "structure emerging from chaos"?
    *   **Design**: Implement CSS transforms and JS positioning to animate text elements based on scroll progress.
13. **Dwell-reveal annotations**:
    *   **Validation**: Do subtle annotations or additional context appear in the margin if the reader hovers/dwells on a paragraph for a few seconds, rewarding attentive reading?
    *   **Design**: Implement a mousemove timer to trigger marginal content after a set dwell time.
14. **Cross-plateau retrieval moments**:
    *   **Validation**: Does the interface occasionally surface interstitial questions that prompt the reader to connect concepts across previously visited plateaus, strengthening rhizomatic connections?
    *   **Design**: Implement logic to trigger brief UI prompts based on visit history.
15. **Micro-CYOA forks within plateaus**:
    *   **Validation**: Are there explicit, meaningful (but non-punishing) choices within plateaus (e.g., "Which frame feels more compelling?"), where the chosen path receives visual emphasis without hiding other options?
    *   **Design**: Implement branching seed clusters or similar mechanisms to offer explicit choices that influence presentation.

## How to Use This Skill

When assessing an existing feature or designing a new one for Rizomas, consider each point in the "Validation Checklist & Design Recommendations."

1.  **For Validation (Specs/Tickets/Implementations)**: Review the artifact against each point.
    *   **Identify gaps**: Where does the current design fall short of these principles?
    *   **Suggest improvements**: Propose specific changes to align with the recommendations, citing the relevant principle (e.g., "Consider adding Question-seeds here to leverage the information gap theory.").
    *   **Prioritize**: Use the Tier system to understand the impact vs. effort for potential changes.
2.  **For Design (New Features)**: Use this skill as a brainstorming and design guide.
    *   **Integrate early**: Incorporate these interaction dynamics from the initial design phase.
    *   **Experiment**: For each tier, explore how to apply at least one recommendation to enhance the user experience.
    *   **Document**: Ensure design documents or tickets clearly articulate how new features align with these principles.
