# Visual Design

## Purpose
Color palette, typography, responsive breakpoints, focus styles, and motion timings for the application. This spec is the single source of truth for all visual constants — other specs reference these values rather than restating them.

## Requirements

### Requirement: Color Palette
The application SHALL use the following CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#FAFAF8` | Page background |
| `--ink` | `#1A1A18` | Primary text, active step text |
| `--ink2` | `#6B6B66` | Secondary text, whisper questions |
| `--ink3` | `#B8B4AA` | Inactive step text, labels |
| `--ink4` | `#DDD9D0` | Borders, subtle lines, trace pips |
| `--seed` | `#EDEADF` | Inline seed background, output boxes |
| `--seedh` | `#E4E0D4` | Seed hover |
| `--hl` | `#FFF3C4` | Text selection highlight |
| `--acc` | `#4A6741` | Trail path color |

Dark mode is not supported. The palette is designed for light backgrounds only.

#### Scenario: Paper-like appearance
- **WHEN** the page loads
- **THEN** the background is warm off-white (`#FAFAF8`) and text is near-black (`#1A1A18`)

### Requirement: Typography
Body text SHALL use Lora (Google Fonts) with Georgia fallback, at 18px/1.65 line-height. UI elements SHALL use the system sans-serif stack at sizes ranging from 0.62rem to 0.95rem. Step text SHALL be 0.95rem, transitioning between `--ink3` (inactive) and `--ink` (active).

#### Scenario: Font loads from Google Fonts
- **WHEN** the page loads with network access
- **THEN** body text renders in Lora serif font

#### Scenario: Font fallback works offline
- **WHEN** Google Fonts is unavailable
- **THEN** body text falls back to Georgia

### Requirement: Responsive Breakpoints
Two breakpoints SHALL govern layout adaptation:

**Tablet (840px and below):**
- Scrolly layouts stack vertically — visual panel on top at 42vh sticky, text steps below at full width

**Mobile (480px and below):**
- Visual panel height reduces to 38vh
- Whispers are hidden (navigation relies on question cards and constellation only)
- Rhizome mini-map collapses to a 44px circle

#### Scenario: Tablet layout stacks vertically
- **WHEN** the viewport width is 840px or below
- **THEN** the scrolly visual panel sits above the text steps instead of beside them

#### Scenario: Mobile hides whispers
- **WHEN** the viewport width is 480px or below
- **THEN** whispers are not displayed and the mini-map is a 44px circle

### Requirement: Focus Styles
All interactive elements (whispers, question cards, seeds, constellation nodes, map nodes, mini-map, overlay close button) SHALL have a visible focus indicator when navigated via keyboard. The focus indicator SHALL be a 2px outline using `--ink` color with a 2px offset, ensuring visibility against the `--paper` background.

#### Scenario: Focus ring appears on tab
- **WHEN** the user tabs to an interactive element
- **THEN** a 2px outline focus indicator appears around the element

#### Scenario: Focus ring does not appear on click
- **WHEN** the user clicks an interactive element with a mouse
- **THEN** no focus ring is shown (focus-visible behavior)

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
