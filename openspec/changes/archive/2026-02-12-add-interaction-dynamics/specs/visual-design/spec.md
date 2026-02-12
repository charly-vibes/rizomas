## ADDED Requirements

### Requirement: Background Temperature Shift
The page background SHALL shift subtly in color temperature as the reader progresses through a plateau. A CSS custom property `--bg-temp` (range 0.0--1.0) SHALL be updated based on the reader's vertical scroll position within the current plateau (`scrollTop / scrollHeight`). The background color SHALL interpolate between `--paper` (#FAFAF8, cool) at the top and a slightly warmer variant (#FAF8F2) at the bottom. This creates subliminal spatial orientation --- the reader develops ambient sense of depth without conscious awareness. The interpolation SHALL be applied via `background-color` on the main content container. On the landing page, `--bg-temp` SHALL remain at 0 (cool). When `prefers-reduced-motion` is active, `--bg-temp` SHALL remain fixed at 0 (no shift).

#### Scenario: Background warms as reader scrolls deeper
- **WHEN** the reader scrolls to 75% depth in a plateau
- **THEN** the background color is noticeably warmer than at the top of the plateau

#### Scenario: Background resets on plateau change
- **WHEN** the reader navigates to a new plateau
- **THEN** `--bg-temp` resets to 0 and the background returns to `--paper`

#### Scenario: Landing page has no temperature shift
- **WHEN** the reader is on the landing page
- **THEN** the background remains at `--paper` regardless of scroll position

#### Scenario: Reduced motion disables temperature shift
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the background remains at `--paper` throughout

---

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
| Liminal overlay fade-in | 0.2s | opacity + backdrop-filter |
| Liminal overlay fade-out | 0.2s | opacity + backdrop-filter |
| Dwell-reveal annotation | 0.4s | opacity |
| Scatter-to-text gather | 0.6s per word | transform (staggered) |
| Ghostfading | 0.3s | opacity |
| Engagement state update | 0.2s | opacity |
| Background temperature | continuous | background-color (scroll-driven) |

When `prefers-reduced-motion: reduce` is active, all transition durations SHALL be set to 0s (instant).

#### Scenario: Reduced motion disables animations
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** all transition durations are 0s --- changes are instant

#### Scenario: Standard motion applies timings
- **WHEN** the user has no motion preference set
- **THEN** whispers animate in over 0.6s with opacity and horizontal slide

#### Scenario: Liminal transition respects motion timing
- **WHEN** the user navigates between plateaus with standard motion
- **THEN** the liminal overlay fades in over 0.2s and fades out over 0.2s
