## ADDED Requirements

### Requirement: Scroll-Scrubbed Visuals
The scrolly engine SHALL support a continuous scroll-scrubbing mode in addition to the existing threshold-based step transitions. When a spec provides a `scrubUpdate` callback, the engine SHALL compute a normalized scroll progress value (0.0--1.0) representing the reader's position within the current step's scroll range and call `scrubUpdate(stepIndex, progress, vizState)` on each scroll event (throttled to requestAnimationFrame). This enables animations that advance proportionally to scroll position --- the reader's scroll wheel controls the visual like a film reel.

The scroll progress for each step SHALL be calculated as: the proportion of the step element that has scrolled past the observation threshold. Progress 0.0 means the step just entered; 1.0 means the step is about to leave. The `scrubUpdate` callback is optional --- specs that do not provide it use the existing threshold-only behavior. The `onStep` callback continues to fire at threshold crossings as before; `scrubUpdate` is additional, not a replacement.

#### Scenario: Continuous scroll updates visual proportionally
- **WHEN** a spec provides a `scrubUpdate` callback and the reader scrolls slowly through a step
- **THEN** `scrubUpdate` is called repeatedly with progress values incrementing from 0.0 to 1.0

#### Scenario: Scrub updates are throttled to rAF
- **WHEN** the reader scrolls rapidly
- **THEN** `scrubUpdate` fires at most once per animation frame

#### Scenario: Specs without scrubUpdate use threshold-only behavior
- **WHEN** a spec does not provide a `scrubUpdate` callback
- **THEN** the scrolly engine behaves identically to the existing implementation

#### Scenario: Scroll-scrub works with responsive stacking
- **WHEN** the viewport is below the tablet breakpoint and the layout is stacked
- **THEN** `scrubUpdate` progress is calculated relative to the stacked scroll position
