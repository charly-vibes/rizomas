# Scrolly Engine

## Purpose
Reusable `buildScrolly(spec, container)` function that constructs scrollytelling sections. The engine owns layout, step observation, and lifecycle hooks. It delegates visual behavior to the navigation spec (whispers, trace pips, constellation) and per-plateau visuals to the plateaus spec.

## Requirements

### Requirement: Scrolly Spec Interface
The `buildScrolly` function SHALL accept a spec object with: `steps` (array of string or DOM-building functions), `whispers` (array of step/question/destination entries), `vizInit` (function receiving the visual container and constellation container, returning a state object), and `onStep` (callback receiving step index, viz state, and whether the step is final).

#### Scenario: Spec with string steps
- **WHEN** a spec provides string values in the `steps` array
- **THEN** each string is rendered as the text content of a step element

#### Scenario: Spec with function steps
- **WHEN** a spec provides a function in the `steps` array
- **THEN** the function is called with the step element for imperative DOM construction

#### Scenario: Empty steps array
- **WHEN** a spec provides an empty `steps` array
- **THEN** the scrolly section renders with only the visual panel and no scrolling text column

### Requirement: Two-Column Layout
Scrolly sections SHALL render as a two-column layout: a left sticky visual panel (50% width, full viewport height, sticky-positioned) and a right scrolling text column (50% width). Each text step SHALL be approximately 65vh tall with centered content.

#### Scenario: Visual panel stays fixed during scroll
- **WHEN** the user scrolls through text steps
- **THEN** the visual panel remains fixed in the viewport while text scrolls beside it

#### Scenario: Responsive stacking
- **WHEN** the viewport is below the tablet breakpoint defined in visual-design
- **THEN** the layout stacks vertically with the visual panel on top

### Requirement: Step Observation
An IntersectionObserver SHALL watch all step elements. When a step crosses the observation threshold, it becomes the active step and `onStep` is called with its index. The active step SHALL receive full text color; inactive steps SHALL be faded. Step color transitions SHALL follow the motion timings defined in visual-design.

#### Scenario: Step becomes active on scroll
- **WHEN** a step crosses the intersection threshold while scrolling down
- **THEN** it becomes the active step and `onStep` is called with its index

#### Scenario: Step re-activates on scroll up
- **WHEN** the user scrolls back up to a previously active step
- **THEN** that step becomes active again and `onStep` is called with its index

### Requirement: Whisper and Trace Pip Containers
The engine SHALL create container elements for whispers and trace pips within the visual panel. The engine SHALL show/hide whispers based on the current active step and light trace pips accordingly. Whisper appearance behavior is defined in the navigation spec.

#### Scenario: Whisper container is created for each whisper entry
- **WHEN** a spec includes 3 whisper entries
- **THEN** 3 whisper containers and 3 trace pips are created in the visual panel

#### Scenario: All whispers hide on final step
- **WHEN** the final step becomes active
- **THEN** all whisper containers are hidden

### Requirement: Constellation Lifecycle
The engine SHALL create a hidden constellation container within the visual panel. When the final step is reached, the engine SHALL fade the main visual elements, hide whispers and trace pips, and reveal the constellation. Constellation content and layout are defined in the navigation spec.

#### Scenario: Final step triggers constellation transition
- **WHEN** the user scrolls to the last step
- **THEN** the visual fades out and the constellation fades in

#### Scenario: Leaving final step restores visual
- **WHEN** the user scrolls back up from the final step
- **THEN** the constellation hides and the main visual elements are restored

### Requirement: Cleanup Function
`buildScrolly` SHALL return a cleanup function that disconnects the IntersectionObserver and removes event listeners when called.

#### Scenario: Observer is disconnected on cleanup
- **WHEN** the cleanup function is called during a route change
- **THEN** the IntersectionObserver stops watching and no further `onStep` callbacks fire
