# Proposal: Respect `prefers-reduced-motion`

## Problem
The application is not respecting the `prefers-reduced-motion` media query. Animations are still running even when the user has requested reduced motion.

## Proposed Solution
Implement the logic to disable all animations when `prefers-reduced-motion: reduce` is active. This should be a global setting that affects all animations in the application.