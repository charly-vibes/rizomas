## MODIFIED Requirements
### Requirement: Lines of Flight (Question Cards)
The primary mechanism for lateral movement between plateaus SHALL be question cards. These cards represent the "loose threads" of an essay's argument, made tangible.

- For **scrolly plateaus**, these cards appear on the final step, mirroring the questions that appeared as whispers.
- For **simple plateaus**, they appear at the bottom of the essay.

Each card SHALL contain an italic question and the destination plateau's name. They SHALL be clickable and keyboard-accessible, navigating to the destination via its hash route.

When a question card's destination plateau has been previously visited, the card SHALL render with reduced opacity proportional to how many jumps ago it was last visited in the reader's trail (`state.tr`). The recency-to-opacity mapping SHALL follow the same positional interpolation pattern used by the mini-map trail segments (`t = i / segCount`): the most recently visited destination renders at minimum opacity (0.45); destinations visited many jumps ago render with progressively higher opacity, approaching full visibility (~0.92). Unvisited destinations SHALL render at full opacity (1.0). The opacity SHALL be applied via an inline style on the card element and SHALL include a CSS transition matching `--t-ghostfade` timing. When `prefers-reduced-motion` is active, the transition SHALL be instant (no animation) but the opacity difference SHALL still apply. This styling is purely visual and SHALL NOT alter link text, `aria-label`, or keyboard accessibility.

#### Scenario: Question card navigates
- **WHEN** the user clicks a question card
- **THEN** the application navigates to the card's destination plateau.

#### Scenario: Most recently visited destination is most faded
- **WHEN** a question card links to a plateau the reader visited on their last jump
- **THEN** the card renders at approximately 0.45 opacity.

#### Scenario: Destination visited many jumps ago is nearly full opacity
- **WHEN** a question card links to a plateau the reader visited as their first plateau (and they have visited 10 plateaus since)
- **THEN** the card renders at approximately 0.90 opacity.

#### Scenario: Unvisited destination is full opacity
- **WHEN** a question card links to a plateau the reader has never visited
- **THEN** the card renders at full opacity (1.0).

#### Scenario: Reduced motion preserves opacity but skips animation
- **WHEN** `prefers-reduced-motion` is active and a card links to a recently visited plateau
- **THEN** the card renders at reduced opacity instantly, with no transition animation.
