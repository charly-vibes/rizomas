
const buildSeedCluster = (seeds, { state, plateauId, onSeedOpen } = {}) => {
  const field = h("div", { class: "seed-field" });
  seeds.forEach((seed) => {
    const detailContent = typeof seed.detail === "function" ? seed.detail(state) : seed.detail;
    const inner = h("div", { class: "seed-growth-inner" });
    if (typeof detailContent === "string") {
      inner.appendChild(document.createTextNode(detailContent));
    } else if (detailContent instanceof Node) {
      inner.appendChild(detailContent);
    }

    if (seed.type === "dangling" && seed.danglingTo && seed.danglingText) {
      inner.appendChild(document.createTextNode(" "));
      inner.appendChild(
        h("a", { class: "dangling-link", href: `#/${seed.danglingTo}` }, seed.danglingText)
      );
    }

    const growth = h(
      "div",
      { class: "seed-growth", "aria-hidden": "true" },
      inner
    );
    const btnAttrs = {
      class: "seed-button",
      type: "button",
      "aria-expanded": "false",
    };
    if (seed.type) btnAttrs["data-seed-type"] = seed.type;
    const button = h("button", btnAttrs, seed.label);
    const item = h("div", { class: "seed-item" }, button, growth);

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      growth.classList.toggle("is-open", !isOpen);
      growth.setAttribute("aria-hidden", String(isOpen));
      if (!isOpen && onSeedOpen && seed.id) onSeedOpen(seed.id);
    });

    field.appendChild(item);
  });
  return field;
};

const buildScatterToText = () => {
  const words = LOCALE.scatterWords;
  const container = h("div", { class: "scatter-container" });
  const wordEls = [];

  const hash = (str) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return h;
  };

  const cols = 4;
  const rows = Math.ceil(words.length / cols);
  words.forEach((word, i) => {
    const seed = hash(word);
    const initX = ((seed & 0xff) / 255) * 80 + 5;
    const initY = (((seed >> 8) & 0xff) / 255) * 80 + 5;
    const finalCol = i % cols;
    const finalRow = Math.floor(i / cols);
    const finalX = 10 + (finalCol / (cols - 1)) * 80;
    const finalY = 20 + (finalRow / (rows - 1)) * 60;

    const el = h("span", { class: "scatter-word" }, word);
    el.style.left = `${finalX}%`;
    el.style.top = `${finalY}%`;
    el.dataset.initX = initX;
    el.dataset.initY = initY;
    el.dataset.finalX = finalX;
    el.dataset.finalY = finalY;

    if (!prefersReducedMotion()) {
      el.style.transform = `translate(${initX - finalX}vw, ${initY - finalY}vh)`;
    }
    container.appendChild(el);
    wordEls.push(el);
  });

  const update = (progress) => {
    if (prefersReducedMotion()) return;
    wordEls.forEach((el) => {
      const ix = parseFloat(el.dataset.initX);
      const iy = parseFloat(el.dataset.initY);
      const fx = parseFloat(el.dataset.finalX);
      const fy = parseFloat(el.dataset.finalY);
      const dx = (ix - fx) * (1 - progress);
      const dy = (iy - fy) * (1 - progress);
      el.style.transform = `translate(${dx}vw, ${dy}vh)`;
    });
  };

  return { container, update };
};

const setupDwellReveal = (container, annotations) => {
  const timers = new Map();
  const revealed = new Set();
  const DWELL_MS = 3000;

  const targets = container.querySelectorAll(".dwell-target");
  targets.forEach((target) => {
    const paraId = target.dataset.dwellId;
    if (!paraId || !annotations[paraId]) return;

    const annotation = h("div", {
      class: "dwell-annotation",
      "aria-live": "polite",
    }, annotations[paraId]);
    target.appendChild(annotation);

    let timer = null;
    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      if (revealed.has(paraId)) return;
      timer = setTimeout(() => {
        annotation.classList.add("is-revealed");
        revealed.add(paraId);
      }, DWELL_MS);
      timers.set(paraId, timer);
    };

    const clearTimer = () => {
      if (timer) clearTimeout(timer);
      timer = null;
    };

    target.addEventListener("mousemove", resetTimer);
    target.addEventListener("mouseleave", clearTimer);
  });

  return () => {
    timers.forEach((t) => clearTimeout(t));
    timers.clear();
  };
};

const buildCYOAFork = ({ prompt, options }) => {
  const group = h("div", {
    class: "cyoa-fork",
    role: "group",
    "aria-label": prompt,
  });
  const label = h("p", { style: { color: "var(--ink2)", fontStyle: "italic", fontSize: "0.92rem" } }, prompt);
  group.appendChild(label);
  let chosen = null;

  options.forEach((opt) => {
    const expansion = h("div", { class: "cyoa-expansion" },
      h("div", { class: "cyoa-expansion-inner" }, opt.content)
    );
    const btn = h("button", {
      class: "cyoa-option",
      type: "button",
    }, opt.label);

    btn.addEventListener("click", () => {
      if (!chosen) {
        chosen = opt.label;
        group.querySelectorAll(".cyoa-option").forEach((b) => {
          if (b === btn) {
            b.classList.add("is-chosen");
            b.classList.remove("is-unchosen");
          } else {
            b.classList.add("is-unchosen");
            b.classList.remove("is-chosen");
          }
        });
      }
      expansion.classList.toggle("is-open");
    });

    group.appendChild(btn);
    group.appendChild(expansion);
  });

  return group;
};

const buildRetrievalMoment = (state, plateauId) => {
  if (state.v.length < 3) return null;
  const visited = new Set(state.v);
  const getter = LOCALE.retrievalQuestions[plateauId];
  if (!getter) return null;
  const question = getter(visited);
  if (!question) return null;

  const closeBtn = h("button", {
    class: "retrieval-close",
    type: "button",
    "aria-label": LOCALE.ui.dismissReflection,
    title: "Dismiss",
  }, "\u00d7");
  const card = h("div", {
    class: "retrieval-moment",
    role: "note",
    "aria-label": LOCALE.ui.reflectionAriaLabel,
  },
    h("p", { style: { margin: "0", flex: "1" } }, question),
    closeBtn
  );
  closeBtn.addEventListener("click", () => {
    card.classList.add("is-dismissed");
  });
  return card;
};

const buildEngagementState = (state, plateauId) => {
  const eg = state.eg[plateauId] || { opened: 0, total: 0 };
  const el = h("div", {
    class: "engagement-state",
    "aria-live": "polite",
    title: "Seeds are the expandable elements above \u2014 click them to explore deeper layers of this essay",
  }, LOCALE.ui.seedsExplored(eg.opened, eg.total));
  return el;
};

const _UNUSED_MARGINALIA = {
  "weight-of-words": [
    { forParagraph: 0, text: "The loop never actually converges. It just gets close enough." },
    { forParagraph: 2, text: "Chinchilla showed: more data per parameter beats more parameters per data.", condition: (v) => v.has("averaging-problem") },
  ],
  quality: [
    { forParagraph: 0, text: "The raters are never told they're defining the soul of the model." },
    { forParagraph: 2, text: "If you came here from The Shaping, notice how RLHF doesn't change what the model knows\u2014it changes which knowledge surfaces.", condition: (v) => v.has("the-shaping") },
  ],
  "understanding-illusion": [
    { forParagraph: 0, text: "The question itself might be wrong. But it's the question everyone asks." },
    { forParagraph: 1, text: "Searle's argument assumed computation and understanding are separate categories. What if they're not?", condition: (v) => v.has("weight-of-words") },
  ],
  "practical-guide": [
    { forParagraph: 0, text: "Everything in this plateau is a heuristic. The model doesn't know about any of it." },
    { forParagraph: 1, text: "Chain-of-thought works because the model can attend to its own reasoning tokens.", condition: (v) => v.has("next-word") },
  ],
  "tool-user": [
    { forParagraph: 0, text: "The shift from oracle to agent happened faster than anyone predicted." },
    { forParagraph: 2, text: "When the model writes code that writes code, the oracle metaphor breaks completely.", condition: (v) => v.has("practical-guide") },
  ],
  "near-zero-cost-impact": [
    { forParagraph: 0, text: "The marginal cost of the next copy is zero. The marginal cost of trust is not." },
    { forParagraph: 2, text: "Every previous revolution had friction that slowed adoption. AI's friction is approaching zero too.", condition: (v) => v.has("the-shaping") },
  ],
};

