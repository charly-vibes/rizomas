const setView = ({ view, cleanup }) => {
  activeCleanup();
  const previous = Array.from(app.children);
  previous.forEach((el) => {
    el.classList.remove("is-visible");
    const remove = () => el.remove();
    el.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 300);
  });
  window.scrollTo(0, 0);
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
    closeOverlay,
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
  "next-word": { requires: ["weight-of-words"] },
  "averaging-problem": { requires: ["weight-of-words"] },
  "the-shaping": { requires: ["quality"] },
  "weight-of-words": { requires: ["next-word"] },
  quality: { requires: ["the-shaping"] },
  "understanding-illusion": { requires: ["weight-of-words"] },
  "practical-guide": { requires: ["next-word", "averaging-problem"] },
  "tool-user": { requires: ["the-shaping", "practical-guide"] },
  "algorithm-as-muse": { requires: ["next-word", "averaging-problem"] },
  "echoes-of-the-past": { requires: ["quality", "averaging-problem"] },
  "learning-machines-learning-humans": { requires: ["understanding-illusion"] },
  "automation-of-cognition": { requires: ["tool-user"] },
  "black-box-oracle": { requires: ["understanding-illusion", "the-shaping"] },
  "digital-footprints": { requires: ["averaging-problem"] },
  "artificial-brain": { requires: ["understanding-illusion"] },
  "empathy-machine": { requires: ["understanding-illusion"] },
  "near-zero-cost-impact": { requires: ["averaging-problem", "quality"] },
};

const applyGhostfading = (container, plateauId, visited) => {
  const config = GHOSTFADE_MAP[plateauId];
  if (!config) return;
  const hasVisited = config.requires.some((req) => visited.has(req));
  if (!hasVisited) return;
  const keywords = LOCALE.ghostfadeKeywords[plateauId];
  if (!keywords) return;
  const paragraphs = container.querySelectorAll("p");
  paragraphs.forEach((p) => {
    const text = p.textContent.toLowerCase();
    if (keywords.some((kw) => text.includes(kw.toLowerCase()))) {
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
    if (currentId) {
      recordVisit(state, currentId);
    }

    if (persistentNavChrome) {
      persistentNavChrome.closeOverlay();
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

        const dwellData = LOCALE.dwellAnnotations[currentId];
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
    question = liminalPending || LOCALE.entryQuestions[targetId] || null;
  }
  liminalPending = null;
  renderRoute(question);
});
renderRoute();
