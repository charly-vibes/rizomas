## 1. Spec updates
- [ ] 1.1 Add MODIFIED Rhizome Mini-Map requirement with aesthetic sub-requirements
- [ ] 1.2 Add MODIFIED Motion Timings with mini-map breathing entry

## 2. Implementation
- [ ] 2.1 Soften unvisited node rendering (ink3/ink4 palette, outline-only with reduced stroke)
- [ ] 2.2 Replace straight-line edges with quadratic bezier curves in drawGraph (behind `curvedEdges` parameter)
- [ ] 2.3 Add active-node radial gradient glow (avoid ctx.shadowBlur for performance — use radial gradient fill)
- [ ] 2.4 Add breathing animation loop with IntersectionObserver visibility gate
- [ ] 2.5 Add journey trail rendering using state.tr (chronological trail array)
- [ ] 2.6 Refactor buildMiniMap lifecycle to persist across route changes (required for smooth transitions)
- [ ] 2.7 Add hover brightening and smooth plateau-transition morphing

## 3. Verification
- [ ] 3.1 Verify prefers-reduced-motion disables all new animations
- [ ] 3.2 Profile canvas performance on low-end device (target: steady 60fps)
- [ ] 3.3 Verify accessibility attributes unchanged (aria-hidden canvas, aria-label button)
- [ ] 3.4 Capture before/after screenshots for visual review
