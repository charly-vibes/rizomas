const buildMiniMap = (state, currentId) => {
  const container = h("div", { class: "mini-map" });
  const canvas = h("canvas", { "aria-hidden": "true" });
  const button = h("button", {
    class: "mini-map-button",
    type: "button",
    "aria-label": "Open navigation map",
  });
  const icon = h("div", { class: "mini-map-icon" });
  icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="17" r="2"/><line x1="12" y1="9" x2="7" y2="7.2"/><line x1="12" y1="9" x2="17.2" y2="7.4"/><line x1="12" y1="15" x2="8.4" y2="16.8"/><line x1="12" y1="15" x2="16.6" y2="16.2"/></svg>';
  container.append(canvas, icon, button);

  let visited = new Set(state.v);
  let activeId = currentId || null;
  let highlightIds = new Set();
  let edgeFilter = null;
  let trailNodes = getTrailSegments(state.tr);
  let traversedEdges = state.te || deriveTraversedEdges(state.tr);
  let isVisible = true;
  let rafId = null;
  let breatheStart = null;
  let transitionStart = null;
  let prevHighlightIds = null;
  let prevEdgeFilter = null;
  let prevActiveId = null;

  const computeContext = (id) => {
    const hl = new Set();
    let ef = null;
    if (id) {
      hl.add(id);
      GRAPH.edges.forEach(([fromId, toId]) => {
        if (fromId === id) hl.add(toId);
        if (toId === id) hl.add(fromId);
      });
      ef = (fromId, toId) => fromId === id || toId === id;
    } else {
      GRAPH.nodes.forEach((node) => hl.add(node.id));
    }
    return { hl, ef };
  };

  const ctx = computeContext(currentId);
  highlightIds = ctx.hl;
  edgeFilter = ctx.ef;

  const isMobile = () => window.matchMedia("(max-width: 480px)").matches;

  const render = (alpha) => {
    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    drawGraph({
      canvas,
      width: rect.width,
      height: rect.height,
      visited,
      activeId,
      highlightIds,
      edgeFilter,
      showLabels: false,
      showTrail: trailNodes.length > 1,
      trailNodes,
      curvedEdges: true,
      softenUnvisited: true,
      activeGlow: !!activeId,
      breatheAlpha: alpha,
      traversedEdges,
    });
  };

  const animate = (timestamp) => {
    if (!isVisible) return;
    if (breatheStart === null) breatheStart = timestamp;
    const elapsed = (timestamp - breatheStart) / 1000;
    const alpha = 1 + 0.08 * Math.sin((2 * Math.PI * elapsed) / 5);

    if (transitionStart !== null) {
      const tElapsed = timestamp - transitionStart;
      const tProgress = Math.min(tElapsed / 300, 1);
      if (tProgress >= 1) {
        transitionStart = null;
        prevHighlightIds = null;
        prevEdgeFilter = null;
        prevActiveId = null;
      }
    }

    render(alpha);
    rafId = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (isMobile()) return;
    if (prefersReducedMotion()) {
      render(1);
      return;
    }
    if (rafId !== null) return;
    breatheStart = null;
    rafId = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const visObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible) {
      startAnimation();
    } else {
      stopAnimation();
    }
  });
  visObserver.observe(container);

  const resizeObserver = new ResizeObserver(() => {
    if (!isMobile() && prefersReducedMotion()) {
      render(1);
    }
  });
  resizeObserver.observe(container);

  if (!isMobile()) {
    render(1);
    startAnimation();
  }

  const updateContext = (newState, newCurrentId) => {
    const newVisited = new Set(newState.v);
    const newTrail = getTrailSegments(newState.tr);
    const newCtx = computeContext(newCurrentId);

    if (!prefersReducedMotion() && !isMobile() && activeId !== (newCurrentId || null)) {
      prevHighlightIds = highlightIds;
      prevEdgeFilter = edgeFilter;
      prevActiveId = activeId;
      transitionStart = performance.now();
    }

    visited = newVisited;
    activeId = newCurrentId || null;
    highlightIds = newCtx.hl;
    edgeFilter = newCtx.ef;
    trailNodes = newTrail;
    traversedEdges = newState.te || deriveTraversedEdges(newState.tr);

    if (!isMobile()) {
      if (prefersReducedMotion()) render(1);
    }
  };

  return {
    container,
    button,
    updateContext,
    cleanup: () => {
      stopAnimation();
      visObserver.disconnect();
      resizeObserver.disconnect();
    },
  };
};

const buildScrolly = ({ steps, whispers, questionCards, scrubUpdate, vizContent, onStepChange, state, plateauId }) => {
  const hasViz = !!vizContent;
  const section = h("section", { class: hasViz ? "scrolly" : "scrolly scrolly-no-viz" });
  let viz = null;
  let vizMain = null;
  let constellation = null;
  if (hasViz) {
    viz = h("div", { class: "scrolly-viz" });
    vizMain = h("div", { class: "viz-main" });
    vizMain.appendChild(vizContent);
    const whispersLayer = h("div", { class: "whisper-layer" });
    const pips = h("div", { class: "trace-pips" });
    constellation = h("div", { class: "constellation" });
    if (plateauId) {
      const visited = new Set(state && state.v ? state.v : []);
      const constellationContent = buildSimpleConstellation(plateauId, visited, whispers);
      constellation.appendChild(constellationContent);
    }
    viz.append(vizMain, whispersLayer, pips, constellation);
  }

  const stepsWrap = h("div", { class: "scrolly-steps" });
  const stepEls = steps.map((content, index) => {
    const step = h("div", { class: "scrolly-step" });
    if (typeof content === "string") {
      step.appendChild(h("p", null, content));
    } else if (typeof content === "function") {
      content(step);
    }
    if (index === 0) step.classList.add("is-active");
    stepsWrap.appendChild(step);
    return step;
  });

  if (hasViz) {
    const whispersLayer = viz.querySelector(".whisper-layer");
    const pips = viz.querySelector(".trace-pips");
    whispers.forEach((whisper) => {
      const line = h("a", { class: "whisper", href: `#/${whisper.to}` }, whisper.text);
      whispersLayer.appendChild(line);
      const pip = h("span", { class: "trace-pip" });
      pips.appendChild(pip);
    });
  }

  const cards = h("div", { class: "question-cards" });
  questionCards.forEach((card) => {
    const el = h(
      "a",
      { class: "question-card", href: `#/${card.to}` },
      h("span", null, card.question),
      h("strong", null, card.title)
    );
    if (state) el.style.opacity = getFlightOpacity(state, card.to);
    cards.appendChild(el);
  });
  stepsWrap.appendChild(cards);

  if (viz) section.appendChild(viz);
  section.appendChild(stepsWrap);

  let activeStepIndex = 0;
  const onStep = (idx) => {
    activeStepIndex = idx;
    stepEls.forEach((step, index) => {
      step.classList.toggle("is-active", index === idx);
    });
    if (hasViz) {
      const whispersLayer = viz.querySelector(".whisper-layer");
      const pips = viz.querySelector(".trace-pips");
      whispers.forEach((whisper, index) => {
        const line = whispersLayer.children[index];
        const pip = pips.children[index];
        const isVisible = idx >= whisper.step && idx < steps.length - 1;
        line.classList.toggle("is-visible", isVisible);
        pip.classList.toggle("is-lit", idx >= whisper.step);
      });
      const isFinal = idx === steps.length - 1;
      viz.classList.toggle("is-constellation", isFinal);
      constellation.classList.toggle("is-visible", isFinal);
    }
    if (onStepChange) onStepChange(idx);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepEls.indexOf(entry.target);
          if (index >= 0) onStep(index);
        }
      });
    },
    { threshold: 0.55 }
  );

  stepEls.forEach((step) => observer.observe(step));

  let scrubTicking = false;
  let scrubCleanup = null;
  if (scrubUpdate) {
    const onScroll = () => {
      if (scrubTicking) return;
      scrubTicking = true;
      requestAnimationFrame(() => {
        const activeStep = stepEls[activeStepIndex];
        if (activeStep) {
          const rect = activeStep.getBoundingClientRect();
          const viewH = window.innerHeight;
          const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (rect.height + viewH))));
          scrubUpdate(activeStepIndex, progress, vizMain);
        }
        scrubTicking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    scrubCleanup = () => window.removeEventListener("scroll", onScroll);
  }

  const cleanup = () => {
    observer.disconnect();
    if (scrubCleanup) scrubCleanup();
  };

  return { section, vizMain, cleanup };
};
