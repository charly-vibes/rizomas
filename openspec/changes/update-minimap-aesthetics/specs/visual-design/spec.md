## MODIFIED Requirements
### Requirement: Motion Timings
All transitions SHALL respect `prefers-reduced-motion`. The following timings are the canonical values referenced by all other specs:

| Animation | Duration | Property |
|---|---|---|
| Page transition | 0.2s | opacity |
| Step text color | 0.4s | color |
| Viz output swap | 0.25s | opacity crossfade |
| Whisper entrance | 0.6s | opacity + translateX |
| Constellation fade-in | 0.6s | opacity |
| Mini-map breathing | 5s period | node fill opacity (±0.08) |
| Mini-map context transition | 0.3s | opacity crossfade |
| Mini-map hover brighten | 0.2s | border-color |

When `prefers-reduced-motion: reduce` is active, all transition durations SHALL be set to 0s (instant).

#### Scenario: Reduced motion disables animations
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** all transition durations are 0s — changes are instant

#### Scenario: Standard motion applies timings
- **WHEN** the user has no motion preference set
- **THEN** whispers animate in over 0.6s with opacity and horizontal slide
