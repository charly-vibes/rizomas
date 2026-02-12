## MODIFIED Requirements

### Requirement: Session State Persistence
The application SHALL persist visit tracking state in `localStorage` under the key `le5`. The state object SHALL contain:
- `v` — array of visited plateau IDs
- `tr` — array of navigation trail entries with plateau ID `p` and timestamp `t`
- `si` — object mapping plateau IDs to arrays of opened seed identifiers (e.g., `{"next-word": ["tokens", "context"], "the-shaping": ["agreeable"]}`)
- `eg` — object mapping plateau IDs to engagement counts: `{opened: number, total: number}` (e.g., `{"next-word": {opened: 2, total: 5}}`)

The `si` and `eg` keys support path-dependent content (inline-seeds spec) and visible engagement state. The landing page route SHALL NOT be recorded as a visited plateau. Seed interaction tracking (`si`) SHALL record the seed identifier when a seed is first opened. Engagement counts (`eg`) SHALL be updated when seeds are opened and when plateaus are entered (to set the total count).

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
- **THEN** the state is reset to `{v: [], tr: [], si: {}, eg: {}}`

#### Scenario: Seed interaction is recorded
- **WHEN** the user opens the "tokens" seed in "The Next Word" for the first time
- **THEN** `si["next-word"]` includes `"tokens"` and `eg["next-word"].opened` increments by 1

#### Scenario: Duplicate seed opens are not double-counted
- **WHEN** the user closes and reopens the "tokens" seed
- **THEN** `si["next-word"]` still contains exactly one `"tokens"` entry and `eg` count does not change

#### Scenario: Engagement total is set on plateau entry
- **WHEN** the user navigates to a plateau with 5 seeds
- **THEN** `eg[plateauId].total` is set to 5 (or updated if seeds have been added)
