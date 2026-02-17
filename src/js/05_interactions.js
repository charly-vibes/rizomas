
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
  const words = ["syntax", "semantics", "reasoning", "facts", "grammar", "analogy", "context", "prediction", "structure", "meaning", "inference", "pattern"];
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

const RETRIEVAL_QUESTIONS = {
  "next-word": (visited) => {
    if (visited.has("weight-of-words")) return "Earlier, you explored how trillions of words become structure. What gets lost when all that structure collapses into a single next token?";
    if (visited.has("the-shaping")) return "You saw how RLHF reshapes behavior. How does that shaping interact with the raw prediction you're reading about now?";
    if (visited.has("averaging-problem")) return "You explored the averaging problem. How does that average show up in what the model predicts next?";
    return null;
  },
  "weight-of-words": (visited) => {
    if (visited.has("next-word")) return "You saw how models predict the next token. What kind of structure would you need to learn before that prediction works?";
    if (visited.has("the-shaping")) return "You explored how models get shaped after training. What does the model need to learn first, before any shaping begins?";
    return null;
  },
  "the-shaping": (visited) => {
    if (visited.has("weight-of-words")) return "You saw how structure emerges from raw data. What happens when humans start redirecting those learned patterns?";
    if (visited.has("quality")) return "You thought about who defines quality. Now ask: how do those definitions get baked into the model's behavior?";
    return null;
  },
  quality: (visited) => {
    if (visited.has("the-shaping")) return "You followed the shaping process. Now step back: who chose the direction of that shaping, and by what standard?";
    if (visited.has("understanding-illusion")) return "You questioned whether models understand. Does that change how you think about rating their outputs?";
    return null;
  },
  "understanding-illusion": (visited) => {
    if (visited.has("next-word")) return "You saw the prediction mechanism. Does knowing how it works change whether you'd call it understanding?";
    if (visited.has("weight-of-words")) return "You explored the internal structure that emerges from training. Does having structure mean having understanding?";
    return null;
  },
  "averaging-problem": (visited) => {
    if (visited.has("next-word")) return "You watched a model predict the next word. What happens when that prediction is averaged across a million different writing styles?";
    if (visited.has("quality")) return "You considered what quality means. How does the averaging problem complicate the idea of a 'good' output?";
    return null;
  },
  "practical-guide": (visited) => {
    if (visited.has("understanding-illusion")) return "You questioned whether models truly understand. How does that uncertainty change how you should use them?";
    if (visited.has("the-shaping")) return "You saw how models get shaped. How does knowing that inform the way you write prompts?";
    return null;
  },
  "tool-user": (visited) => {
    if (visited.has("practical-guide")) return "You learned techniques for working with models. What changes when the model can also work with tools?";
    if (visited.has("next-word")) return "You saw how models predict tokens. What happens when one of those tokens is a function call?";
    return null;
  },
  "near-zero-cost-impact": (visited) => {
    if (visited.has("averaging-problem")) return "You explored what happens when a model averages everything. What happens when that average is reproduced at near-zero cost, billions of times over?";
    if (visited.has("quality")) return "You asked who defines quality. When production cost is zero and volume is infinite, does quality still matter\u2014or does it drown?";
    if (visited.has("digital-footprints")) return "You considered the environmental cost of AI. What's the full ledger when production itself is nearly free but the infrastructure isn't?";
    return null;
  },
  "algorithm-as-muse": (visited) => {
    if (visited.has("averaging-problem")) return "You saw how models average everything they've read. What does that average look like when it tries to create art?";
    if (visited.has("the-shaping")) return "You explored how models are shaped by human feedback. Who's shaping the muse\u2014and whose taste does it reflect?";
    return null;
  },
  "echoes-of-the-past": (visited) => {
    if (visited.has("quality")) return "You thought about who decides what's 'good.' The same question haunts history: whose version of the past does the model learn?";
    if (visited.has("weight-of-words")) return "You saw how models learn from trillions of words. What happens when those words carry centuries of bias?";
    return null;
  },
  "learning-machines-learning-humans": (visited) => {
    if (visited.has("next-word")) return "You watched a model predict the next word. What happens when a student starts relying on that prediction instead of thinking?";
    if (visited.has("understanding-illusion")) return "You questioned whether models understand. Does that uncertainty change how you'd trust one as a teacher?";
    return null;
  },
  "automation-of-cognition": (visited) => {
    if (visited.has("the-shaping")) return "You saw how models are shaped for usefulness. What happens when that usefulness displaces the workers it was shaped to help?";
    if (visited.has("tool-user")) return "You explored what happens when models use tools. What happens when those tools replace the people who used to wield them?";
    return null;
  },
  "black-box-oracle": (visited) => {
    if (visited.has("the-shaping")) return "You saw how human feedback shapes model behavior. But who audits the shaping when the model makes life-altering decisions?";
    if (visited.has("understanding-illusion")) return "You questioned whether models understand. How do you hold accountable a system you can't explain and that may not understand itself?";
    return null;
  },
  "digital-footprints": (visited) => {
    if (visited.has("near-zero-cost-impact")) return "You saw what happens when production cost approaches zero. But the energy cost doesn't\u2014every query has a carbon shadow.";
    if (visited.has("weight-of-words")) return "You explored how models learn from trillions of words. What's the environmental cost of processing that much language?";
    return null;
  },
  "artificial-brain": (visited) => {
    if (visited.has("next-word")) return "You watched a model predict tokens. The brain predicts too\u2014but with 86 billion neurons running on 20 watts. What's different?";
    if (visited.has("understanding-illusion")) return "You questioned whether models understand. If understanding requires a body, what does that mean for a machine?";
    return null;
  },
  "empathy-machine": (visited) => {
    if (visited.has("understanding-illusion")) return "You questioned whether models understand. If they don't, can they truly empathize\u2014or only simulate empathy?";
    if (visited.has("next-word")) return "You saw how models predict the next word. When the next word is 'I understand how you feel,' is that prediction or connection?";
    return null;
  },
};

const buildRetrievalMoment = (state, plateauId) => {
  if (state.v.length < 3) return null;
  const visited = new Set(state.v);
  const getter = RETRIEVAL_QUESTIONS[plateauId];
  if (!getter) return null;
  const question = getter(visited);
  if (!question) return null;

  const closeBtn = h("button", {
    class: "retrieval-close",
    type: "button",
    "aria-label": "Dismiss this reflection prompt",
    title: "Dismiss",
  }, "\u00d7");
  const card = h("div", {
    class: "retrieval-moment",
    role: "note",
    "aria-label": "A reflection on what you've read so far",
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
  }, `${eg.opened} of ${eg.total} seeds explored`);
  return el;
};

const MARGINALIA = {
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

