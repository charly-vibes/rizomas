const setView = ({ view, cleanup }) => {
  activeCleanup();
  const previous = Array.from(app.children);
  previous.forEach((el) => {
    el.classList.remove("is-visible");
    const remove = () => el.remove();
    el.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 300);
  });
  app.appendChild(view);
  requestAnimationFrame(() => {
    view.classList.add("is-visible");
  });
  activeCleanup = cleanup;
};

const buildNavigationChrome = (state, currentId) => {
  const miniMap = buildMiniMap(state, currentId);
  const overlay = buildOverlay(state);
  let lastActive = null;

  overlay.focusables.forEach((el) => {
    el.setAttribute("tabindex", "-1");
  });

  const openOverlay = () => {
    lastActive = document.activeElement;
    overlay.overlay.classList.add("is-open");
    overlay.overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("overlay-open");
    overlay.focusables.forEach((el) => {
      el.removeAttribute("tabindex");
    });
    overlay.closeButton.focus();
  };

  const closeOverlay = () => {
    overlay.overlay.classList.remove("is-open");
    overlay.overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overlay-open");
    overlay.focusables.forEach((el) => {
      el.setAttribute("tabindex", "-1");
    });
    if (lastActive && typeof lastActive.focus === "function") {
      lastActive.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeOverlay();
    }
    trapFocus(overlay.overlay, event);
  };

  miniMap.button.addEventListener("click", openOverlay);
  overlay.backdrop.addEventListener("click", closeOverlay);
  overlay.closeButton.addEventListener("click", closeOverlay);
  overlay.overlay.addEventListener("keydown", handleKeyDown);

  const updateOverlay = (newState) => {
    overlay.updateState(newState);
  };

  return {
    miniMap,
    overlay,
    updateOverlay,
    cleanup: () => {
      miniMap.cleanup();
      overlay.cleanup();
      miniMap.button.removeEventListener("click", openOverlay);
      overlay.backdrop.removeEventListener("click", closeOverlay);
      overlay.closeButton.removeEventListener("click", closeOverlay);
      overlay.overlay.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overlay-open");
      overlay.overlay.remove();
      miniMap.container.remove();
    },
  };
};

let liminalPending = null;

document.addEventListener("click", (e) => {
  const link = e.target.closest("a.whisper, a.simple-whisper, a.question-card, a.dangling-link");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#/")) return;
  if (link.classList.contains("whisper") || link.classList.contains("simple-whisper")) {
    liminalPending = link.textContent.trim();
  } else if (link.classList.contains("question-card")) {
    const span = link.querySelector("span");
    liminalPending = span ? span.textContent.trim() : link.textContent.trim();
  } else if (link.classList.contains("dangling-link")) {
    liminalPending = link.textContent.trim();
  }
});

const showLiminalTransition = (questionText, callback) => {
  if (prefersReducedMotion() || !questionText) {
    callback();
    return;
  }
  const overlay = h("div", { class: "liminal-transition" },
    h("p", { class: "liminal-question" }, questionText)
  );
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
    setTimeout(() => {
      overlay.classList.add("is-fading");
      overlay.classList.remove("is-visible");
      overlay.addEventListener("transitionend", () => {
        overlay.remove();
      }, { once: true });
      callback();
    }, 500);
  });
};

let bgTempCleanup = null;

const setupBgTemp = (isLanding) => {
  if (bgTempCleanup) bgTempCleanup();
  if (isLanding || prefersReducedMotion()) {
    document.documentElement.style.setProperty("--bg-temp", "0");
    bgTempCleanup = null;
    return;
  }
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;
      document.documentElement.style.setProperty("--bg-temp", progress.toFixed(3));
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  bgTempCleanup = () => {
    window.removeEventListener("scroll", onScroll);
    document.documentElement.style.setProperty("--bg-temp", "0");
  };
};

const GHOSTFADE_MAP = {
  "next-word": { requires: ["weight-of-words"], keywords: ["patterns it has seen", "training history"] },
  "averaging-problem": { requires: ["weight-of-words"], keywords: ["training data", "distribution"] },
  "the-shaping": { requires: ["quality"], keywords: ["preference", "rater"] },
  "weight-of-words": { requires: ["next-word"], keywords: ["predict tokens", "next token"] },
  quality: { requires: ["the-shaping"], keywords: ["RLHF", "alignment"] },
  "understanding-illusion": { requires: ["weight-of-words"], keywords: ["pattern", "prediction"] },
  "practical-guide": { requires: ["next-word", "averaging-problem"], keywords: ["distribution", "probability"] },
  "tool-user": { requires: ["the-shaping", "practical-guide"], keywords: ["reasoning", "agent"] },
  "algorithm-as-muse": { requires: ["next-word", "averaging-problem"], keywords: ["trained on vast amounts", "copyrighted material"] },
  "echoes-of-the-past": { requires: ["quality", "averaging-problem"], keywords: ["bias", "training data"] },
  "learning-machines-learning-humans": { requires: ["understanding-illusion"], keywords: ["critical thinking", "cognitive"] },
  "automation-of-cognition": { requires: ["tool-user"], keywords: ["automat", "cognitive tasks"] },
  "black-box-oracle": { requires: ["understanding-illusion", "the-shaping"], keywords: ["opacity", "interpretable", "explainable"] },
  "digital-footprints": { requires: ["averaging-problem"], keywords: ["training", "data center"] },
  "artificial-brain": { requires: ["understanding-illusion"], keywords: ["neural network", "comprehension"] },
  "empathy-machine": { requires: ["understanding-illusion"], keywords: ["understand", "genuine"] },
  "near-zero-cost-impact": { requires: ["averaging-problem", "quality"], keywords: ["average", "quality", "distribution"] },
};

const applyGhostfading = (container, plateauId, visited) => {
  const config = GHOSTFADE_MAP[plateauId];
  if (!config) return;
  const hasVisited = config.requires.some((req) => visited.has(req));
  if (!hasVisited) return;
  const paragraphs = container.querySelectorAll("p");
  paragraphs.forEach((p) => {
    const text = p.textContent.toLowerCase();
    if (config.keywords.some((kw) => text.includes(kw.toLowerCase()))) {
      p.classList.add("ghostfaded");
    }
  });
};

let persistentNavChrome = null;

const renderRoute = (liminalQuestion) => {
  const state = loadState();
  state.te = deriveTraversedEdges(state.tr);
  const hash = location.hash.replace(/^#\/?/, "");
  const currentId = hash && getPlateau(hash) ? hash : null;

  if (hash && !currentId) {
    location.hash = "#/";
    return;
  }

  const doRender = () => {
    if (persistentNavChrome) {
      persistentNavChrome.miniMap.updateContext(state, currentId);
      persistentNavChrome.updateOverlay(state);
    } else {
      persistentNavChrome = buildNavigationChrome(state, currentId);
      document.body.append(
        persistentNavChrome.miniMap.container,
        persistentNavChrome.overlay.overlay
      );
    }

    if (!hash) {
      setupBgTemp(true);
      const landing = buildLandingView(state);
      setView({
        view: landing.view,
        cleanup: () => {
          landing.cleanup();
        },
      });
      return;
    }
    if (currentId) {
      setupBgTemp(false);
      const plateau = buildPlateauView(state, hash);
      setView({
        view: plateau.view,
        cleanup: () => {
          plateau.cleanup();
          if (bgTempCleanup) bgTempCleanup();
        },
      });
      requestAnimationFrame(() => {
        applyGhostfading(plateau.view, currentId, new Set(state.v));

        const DWELL_ANNOTATIONS = {
          "next-word": {
            "step-0": "The simplest possible action, repeated billions of times.",
            "step-1": "Temperature is the only knob most users ever touch.",
            "step-2": "The context window is the model's entire reality.",
          },
          "averaging-problem": {
            "step-0": "The average is never anyone's voice. It's a new voice.",
            "step-2": "The base model is the most capable and the least useful.",
          },
          "the-shaping": {
            "step-0": "This is where the model learns to have opinions.",
            "step-1": "The reward model is a model of a model of human preference.",
          },
        };
        const dwellData = DWELL_ANNOTATIONS[currentId];
        if (dwellData) {
          const steps = plateau.view.querySelectorAll(".scrolly-step");
          steps.forEach((step, i) => {
            const key = `step-${i}`;
            if (dwellData[key]) {
              step.classList.add("dwell-target");
              step.dataset.dwellId = key;
            }
          });
          const dwellCleanup = setupDwellReveal(plateau.view, dwellData);
          const prevCleanup = plateau.cleanup;
          plateau.cleanup = () => { prevCleanup(); dwellCleanup(); };
        }
      });
    }
  };

  if (liminalQuestion) {
    showLiminalTransition(liminalQuestion, doRender);
  } else {
    doRender();
  }
};

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace(/^#\/?/, "");
  const targetId = hash && getPlateau(hash) ? hash : null;
  let question = null;
  if (targetId) {
    question = liminalPending || ENTRY_QUESTIONS[targetId] || null;
  }
  liminalPending = null;
  renderRoute(question);
});
renderRoute();
