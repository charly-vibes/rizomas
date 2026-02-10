# Routing & State

## Purpose
Hash-based SPA routing and persistent session state for the single-file application.

## Requirements

### Requirement: Hash-Based Routing
The application SHALL use hash-based routing to navigate between the landing page and plateaus. Routes follow the pattern `#/` for landing and `#/[plateau-id]` for plateaus. Navigation SHALL be driven by the `hashchange` event listener.

#### Scenario: Landing page loads on default route
- **WHEN** the user navigates to `#/` or the page loads with no hash
- **THEN** the landing page is displayed

#### Scenario: Plateau loads on named route
- **WHEN** the user navigates to `#/next-word`
- **THEN** the "The Next Word" plateau is rendered

#### Scenario: Invalid route falls back to landing
- **WHEN** the user navigates to `#/nonexistent-plateau`
- **THEN** the landing page is displayed

#### Scenario: Page transition animation
- **WHEN** the route changes
- **THEN** the current view fades out and the new view fades in per the motion timings defined in visual-design

### Requirement: Session State Persistence
The application SHALL persist visit tracking state in `localStorage` under the key `le5`. The state object SHALL contain `v` (array of visited plateau IDs) and `tr` (array of navigation trail entries with plateau ID `p` and timestamp `t`). The landing page route SHALL NOT be recorded as a visited plateau.

#### Scenario: Visit is recorded
- **WHEN** the user navigates to a plateau
- **THEN** the plateau ID is added to the `v` array (if not already present) and a trail entry `{p, t}` is appended to `tr`

#### Scenario: Landing page is not tracked
- **WHEN** the user navigates to `#/`
- **THEN** no entry is added to `v` or `tr`

#### Scenario: State persists across sessions
- **WHEN** the user closes and reopens the page
- **THEN** previously visited plateaus remain marked as visited in the rhizome navigator

#### Scenario: Corrupted state is reset
- **WHEN** the `le5` localStorage value cannot be parsed as valid JSON or is missing required keys
- **THEN** the state is reset to `{v: [], tr: []}`
