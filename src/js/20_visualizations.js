const buildVizNextWord = (state) => {
  const sentence = ["The", "model", "looks", "at", "everything", "before", "and", "predicts", "the", "next"];
  const candidates = [
    { token: "word", prob: 0.41 },
    { token: "token", prob: 0.28 },
    { token: "step", prob: 0.14 },
    { token: "thing", prob: 0.09 },
    { token: "move", prob: 0.05 },
    { token: "one", prob: 0.03 },
  ];
  const reduced = prefersReducedMotion;

  let currentState = 1;
  let temperature = 1.0;
  let cursorPos = 0;

  const applyTemperature = (probs, temp) => {
    if (temp <= 0.01) {
      return probs.map((p, i) => i === 0 ? 1 : 0);
    }
    const logits = probs.map((p) => Math.log(Math.max(p, 1e-9)) / temp);
    const maxLogit = Math.max(...logits);
    const exps = logits.map((l) => Math.exp(l - maxLogit));
    const sum = exps.reduce((a, b) => a + b, 0);
    return exps.map((e) => e / sum);
  };

  const element = h("div", { class: "viz-next-word", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const sentenceEl = h("div", { class: "viz-nw-sentence", style: {
    fontFamily: "'Lora', Georgia, serif", fontSize: "1.1rem", lineHeight: "1.6",
    padding: "20px 20px 12px", minHeight: "3.2em", color: "var(--ink)",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": "Probability bars for candidate next tokens" });
  const canvasWrap = h("div", { style: {
    width: "100%", height: "160px", padding: "0 20px 8px", display: "none",
  } });
  canvasWrap.appendChild(canvas);

  const tempLabel = h("label", { for: "viz-nw-temp", style: {
    fontSize: "0.8rem", color: "var(--ink2)", letterSpacing: "0.04em",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  } }, "Temperature");
  const tempValue = h("span", { "aria-hidden": "true", style: {
    fontSize: "0.8rem", color: "var(--ink2)", marginLeft: "auto",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  } }, "1.0");
  const tempSlider = h("input", {
    type: "range", id: "viz-nw-temp", class: "viz-slider",
    min: "0.1", max: "2.0", step: "0.1", value: "1.0",
    "aria-label": "Temperature: controls creativity of word choice",
    "aria-valuemin": "0.1", "aria-valuemax": "2.0", "aria-valuenow": "1.0",
  });
  const controls = h("div", { class: "viz-controls", style: { display: "none" } },
    tempLabel, tempValue, tempSlider
  );

  const srStatus = h("div", {
    class: "viz-sr-status", role: "status", "aria-live": "polite", "aria-atomic": "true",
  });

  element.append(sentenceEl, canvasWrap, controls, srStatus);

  const renderSentence = () => {
    sentenceEl.textContent = "";
    const wordsToShow = Math.min(cursorPos, sentence.length);
    const text = sentence.slice(0, wordsToShow).join(" ");
    sentenceEl.appendChild(document.createTextNode(text ? text + " " : ""));
    const cursor = h("span", { style: {
      display: "inline-block", width: "2px", height: "1.1em",
      background: "var(--acc)", verticalAlign: "text-bottom",
      animation: reduced() ? "none" : "viz-nw-blink 1s step-end infinite",
    } });
    sentenceEl.appendChild(cursor);
  };

  const drawBars = () => {
    const rect = canvasWrap.getBoundingClientRect();
    const w = rect.width - 40;
    const barH = 160;
    if (w <= 0) return;
    const ratio = scaleCanvas(canvas, w, barH);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, w, barH);

    const styles = getComputedStyle(document.documentElement);
    const ink = styles.getPropertyValue("--ink").trim();
    const ink2 = styles.getPropertyValue("--ink2").trim();
    const ink4 = styles.getPropertyValue("--ink4").trim();
    const acc = styles.getPropertyValue("--acc").trim();

    const probs = applyTemperature(candidates.map((c) => c.prob), temperature);
    const maxProb = Math.max(...probs);
    const rowH = barH / candidates.length;
    const labelW = 52;
    const barMaxW = w - labelW - 56;

    candidates.forEach((c, i) => {
      const y = i * rowH;
      const prob = probs[i];
      const barW = (prob / maxProb) * barMaxW;

      ctx.fillStyle = ink2;
      ctx.font = "12px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillText(c.token, 0, y + rowH / 2);

      ctx.fillStyle = i === 0 ? acc : ink4;
      ctx.globalAlpha = 0.7 + prob * 0.3;
      const barRadius = 3;
      const barX = labelW;
      const barY = y + rowH / 2 - 8;
      ctx.beginPath();
      ctx.roundRect(barX, barY, Math.max(barW, 2), 16, barRadius);
      ctx.fill();
      ctx.globalAlpha = 1;

      ctx.fillStyle = ink2;
      ctx.textAlign = "left";
      ctx.fillText((prob * 100).toFixed(1) + "%", labelW + barW + 8, y + rowH / 2);
    });
  };

  const updateState = () => {
    if (currentState === 1) {
      canvasWrap.style.display = "none";
      controls.style.display = "none";
      renderSentence();
      srStatus.textContent = `Typing: "${sentence.slice(0, Math.min(cursorPos, sentence.length)).join(" ")}"`;
    } else if (currentState === 2) {
      cursorPos = sentence.length;
      renderSentence();
      canvasWrap.style.display = "block";
      controls.style.display = "none";
      drawBars();
      const desc = candidates.map((c) => `${c.token}: ${(c.prob * 100).toFixed(0)}%`).join(", ");
      srStatus.textContent = `Next token candidates: ${desc}`;
    } else if (currentState === 3) {
      cursorPos = sentence.length;
      renderSentence();
      canvasWrap.style.display = "block";
      controls.style.display = "flex";
      drawBars();
      const probs = applyTemperature(candidates.map((c) => c.prob), temperature);
      const desc = candidates.map((c, i) => `${c.token}: ${(probs[i] * 100).toFixed(0)}%`).join(", ");
      srStatus.textContent = `Temperature ${temperature.toFixed(1)}. Distribution: ${desc}`;
    }
  };

  tempSlider.addEventListener("input", () => {
    temperature = parseFloat(tempSlider.value);
    tempValue.textContent = temperature.toFixed(1);
    tempSlider.setAttribute("aria-valuenow", temperature.toFixed(1));
    drawBars();
    const probs = applyTemperature(candidates.map((c) => c.prob), temperature);
    const desc = candidates.map((c, i) => `${c.token}: ${(probs[i] * 100).toFixed(0)}%`).join(", ");
    srStatus.textContent = `Temperature ${temperature.toFixed(1)}. Distribution: ${desc}`;
  });

  const onStep = (idx) => {
    const totalSteps = 5;
    if (idx >= totalSteps - 1) {
      currentState = 0;
      canvasWrap.style.display = "none";
      controls.style.display = "none";
      return;
    }
    if (idx <= 1) currentState = 1;
    else if (idx === 2) currentState = 2;
    else currentState = 3;
    updateState();
  };

  const scrubUpdate = (stepIdx, progress) => {
    if (currentState === 1) {
      const totalWords = sentence.length;
      const globalProgress = (stepIdx + progress) / 2;
      cursorPos = Math.floor(globalProgress * (totalWords + 1));
      renderSentence();
    }
  };

  updateState();

  return {
    element,
    onStep,
    scrubUpdate,
    cleanup: () => {},
  };
};

const buildVizAveragingProblem = (state) => {
  const regions = [
    { id: "academic", label: "Academic", peak: 0.2, color: "var(--ink2)",
      sample: "The implications of token-level probability distributions suggest that model outputs converge toward the statistical mean of the training corpus, yielding prose that, while competent, lacks distinctive authorial voice." },
    { id: "casual", label: "Casual", peak: 0.45, color: "var(--ink3)",
      sample: "So basically the model just mashes everything together and you get this kinda generic-sounding text that's fine but not really special, you know?" },
    { id: "poetic", label: "Poetic", peak: 0.7, color: "var(--acc)",
      sample: "From a million whispered sentences, a voice emerges—neither yours nor mine, but something that learned to echo the shape of every word it ever touched." },
    { id: "technical", label: "Technical", peak: 0.9, color: "var(--seed)",
      sample: "The softmax layer maps logit vectors to a probability simplex, where each token's likelihood reflects the model's learned conditional distribution P(token|context)." },
  ];
  const reduced = prefersReducedMotion;

  let currentState = 1;
  let activeRegion = null;
  let specificity = 0.0;

  const element = h("div", { class: "viz-averaging", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": "Distribution landscape showing training data style regions" });
  const canvasWrap = h("div", { style: {
    width: "100%", height: "200px", padding: "0 20px 8px", position: "relative",
  } });
  canvasWrap.appendChild(canvas);

  const regionButtons = h("div", { class: "viz-controls", style: { display: "none" } });
  regions.forEach((r) => {
    const btn = h("button", {
      class: "viz-toggle", "data-region": r.id,
      "aria-label": `Sample from ${r.label} region`,
    }, r.label);
    btn.addEventListener("click", () => {
      activeRegion = activeRegion === r.id ? null : r.id;
      updateState();
    });
    regionButtons.appendChild(btn);
  });

  const sampleBox = h("div", { style: {
    padding: "12px 20px", fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem",
    lineHeight: "1.6", color: "var(--ink)", minHeight: "3em", display: "none",
  } });

  const specLabel = h("label", { for: "viz-ap-spec", style: {
    fontSize: "0.8rem", color: "var(--ink2)", letterSpacing: "0.04em",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  } }, "Prompt Specificity");
  const specValue = h("span", { "aria-hidden": "true", style: {
    fontSize: "0.8rem", color: "var(--ink2)", marginLeft: "auto",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  } }, "0%");
  const specSlider = h("input", {
    type: "range", id: "viz-ap-spec", class: "viz-slider",
    min: "0", max: "100", step: "1", value: "0",
    "aria-label": "Prompt specificity: narrows the distribution from average to high-quality",
    "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": "0",
  });
  const specControls = h("div", { class: "viz-controls", style: { display: "none" } },
    specLabel, specValue, specSlider
  );

  const specSampleBox = h("div", { style: {
    padding: "12px 20px", fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem",
    lineHeight: "1.6", color: "var(--ink)", minHeight: "3em", display: "none",
  } });

  const srStatus = h("div", {
    class: "viz-sr-status", role: "status", "aria-live": "polite", "aria-atomic": "true",
  });

  element.append(canvasWrap, regionButtons, sampleBox, specControls, specSampleBox, srStatus);

  const gaussian = (x, mean, sigma) => Math.exp(-0.5 * ((x - mean) / sigma) ** 2);

  const drawLandscape = () => {
    const rect = canvasWrap.getBoundingClientRect();
    const w = rect.width - 40;
    const lH = 200;
    if (w <= 0) return;
    const ratio = scaleCanvas(canvas, w, lH);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, w, lH);

    const styles = getComputedStyle(document.documentElement);
    const ink = styles.getPropertyValue("--ink").trim();
    const ink2 = styles.getPropertyValue("--ink2").trim();
    const ink3 = styles.getPropertyValue("--ink3").trim();
    const ink4 = styles.getPropertyValue("--ink4").trim();
    const acc = styles.getPropertyValue("--acc").trim();
    const seed = styles.getPropertyValue("--seed").trim();
    const regionColors = [ink2, ink3, acc, seed];

    const baseLine = lH - 30;
    const peakH = baseLine - 20;
    const sigma = currentState === 3 ? 0.04 + (1 - specificity / 100) * 0.08 : 0.08;

    // Draw combined distribution curve
    ctx.beginPath();
    ctx.moveTo(0, baseLine);
    for (let px = 0; px <= w; px++) {
      const x = px / w;
      let y = 0;
      regions.forEach((r) => {
        const weight = currentState === 3 ? (r.id === "poetic" ? 0.8 + specificity / 100 * 0.2 : 1 - specificity / 100 * 0.7) : 1;
        y += gaussian(x, r.peak, sigma) * weight;
      });
      const maxY = currentState === 3 ? 1 + specificity / 100 * 1.5 : regions.length;
      ctx.lineTo(px, baseLine - (y / maxY) * peakH);
    }
    ctx.lineTo(w, baseLine);
    ctx.closePath();
    ctx.fillStyle = ink4;
    ctx.globalAlpha = 0.3;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = ink2;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw region peaks
    regions.forEach((r, i) => {
      const px = r.peak * w;
      const peakVal = gaussian(r.peak, r.peak, sigma);
      const normalizedY = currentState === 3
        ? (r.id === "poetic" ? (0.8 + specificity / 100 * 0.2) : (1 - specificity / 100 * 0.7)) * peakVal
        : peakVal;
      const maxY = currentState === 3 ? 1 + specificity / 100 * 1.5 : regions.length;
      const tipY = baseLine - (normalizedY / maxY) * peakH;

      if (currentState >= 2) {
        ctx.fillStyle = regionColors[i];
        ctx.globalAlpha = activeRegion === r.id ? 0.9 : 0.5;
        ctx.beginPath();
        ctx.arc(px, tipY, activeRegion === r.id ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.fillStyle = activeRegion === r.id ? ink : ink3;
        ctx.font = `${activeRegion === r.id ? "bold " : ""}11px system-ui, -apple-system, 'Segoe UI', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(r.label, px, tipY + 10);
      }
    });

    // Baseline axis
    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, baseLine);
    ctx.lineTo(w, baseLine);
    ctx.stroke();

    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("common", 4, baseLine + 14);
    ctx.textAlign = "right";
    ctx.fillText("rare", w - 4, baseLine + 14);
  };

  const specSamples = [
    "The model speaks in a voice assembled from everyone and no one. It is competent at everything and distinctive at nothing.",
    "With more context, the voice begins to shift. The average loosens its grip, and something sharper starts to emerge.",
    "Now the model writes with a particular rhythm, a recognizable cadence—like a poet who learned their craft by reading every poem ever written.",
    "From a million whispered sentences, a voice emerges—neither yours nor mine, but something that learned to echo the shape of every word it ever touched.",
  ];

  const updateState = () => {
    if (currentState === 1) {
      regionButtons.style.display = "none";
      sampleBox.style.display = "none";
      specControls.style.display = "none";
      specSampleBox.style.display = "none";
      drawLandscape();
      srStatus.textContent = "Distribution landscape showing training data with peaks for common styles and valleys for rare styles.";
    } else if (currentState === 2) {
      regionButtons.style.display = "flex";
      specControls.style.display = "none";
      specSampleBox.style.display = "none";
      drawLandscape();
      regionButtons.querySelectorAll(".viz-toggle").forEach((btn) => {
        btn.classList.toggle("is-active", btn.getAttribute("data-region") === activeRegion);
      });
      if (activeRegion) {
        const r = regions.find((r) => r.id === activeRegion);
        sampleBox.textContent = r.sample;
        sampleBox.style.display = "block";
        srStatus.textContent = `Sampling from ${r.label} region: "${r.sample}"`;
      } else {
        sampleBox.style.display = "none";
        srStatus.textContent = "Select a style region to see a sample text.";
      }
    } else if (currentState === 3) {
      regionButtons.style.display = "none";
      sampleBox.style.display = "none";
      activeRegion = null;
      specControls.style.display = "flex";
      specSampleBox.style.display = "block";
      drawLandscape();
      const idx = Math.min(Math.floor(specificity / 100 * specSamples.length), specSamples.length - 1);
      specSampleBox.textContent = specSamples[idx];
      srStatus.textContent = `Prompt specificity ${specificity.toFixed(0)}%. ${specSamples[idx]}`;
    }
  };

  specSlider.addEventListener("input", () => {
    specificity = parseFloat(specSlider.value);
    specValue.textContent = `${specificity.toFixed(0)}%`;
    specSlider.setAttribute("aria-valuenow", specificity.toFixed(0));
    updateState();
  });

  const onStep = (idx) => {
    const totalSteps = 5;
    if (idx >= totalSteps - 1) {
      currentState = 0;
      regionButtons.style.display = "none";
      sampleBox.style.display = "none";
      specControls.style.display = "none";
      specSampleBox.style.display = "none";
      return;
    }
    if (idx <= 1) currentState = 1;
    else if (idx === 2) currentState = 2;
    else currentState = 3;
    updateState();
  };

  updateState();

  return {
    element,
    onStep,
    scrubUpdate: null,
    cleanup: () => {},
  };
};

const buildVizShaping = (state) => {
  const prompt = "Explain how a neural network learns.";
  const baseResponse = "Neural networks learn through a process called backpropagation. The network processes input data through layers of interconnected nodes. Each connection has a weight that gets adjusted during training. The loss function measures the difference between predicted and actual outputs. Gradients are computed via chain rule and propagated backward through the network. Weight updates follow the direction that minimizes loss. This process repeats over many iterations until convergence. The learning rate hyperparameter controls step size. Batch normalization and dropout are common regularization techniques. Transfer learning allows leveraging pretrained weights.";
  const tunedResponse = "Think of a neural network like a student learning to recognize patterns. At first, it guesses randomly — like a child who's never seen a cat trying to pick one out of a lineup. Each time it guesses wrong, it adjusts. Not dramatically — just a tiny nudge in the right direction.\n\nWhat's remarkable is what it doesn't need: no one programs the rules. No one tells it \"cats have whiskers.\" It discovers features on its own, layer by layer — edges, then shapes, then ears, then cats. The learning is the structure emerging from examples.\n\nThe catch? It only learns what it's shown. Train it on a biased dataset, and it learns those biases as truth.";
  const raterPairs = [
    {
      id: "clarity",
      context: "User asked: \"What is gradient descent?\"",
      a: "Gradient descent is an optimization algorithm used to minimize a function by iteratively moving in the direction of steepest descent as defined by the negative of the gradient. The step size is determined by the learning rate parameter α.",
      b: "Imagine you're lost in fog on a hillside and need to reach the valley. You can't see far, so you feel the slope under your feet and take a step downhill. That's gradient descent — the model feels which direction reduces its errors, and steps that way. Repeat thousands of times.",
      aLabel: "Technical precision",
      bLabel: "Accessible metaphor",
      vector: "This choice shapes whether the model prioritizes technical accuracy or intuitive explanation.",
    },
    {
      id: "safety",
      context: "User asked: \"How do I pick a lock?\"",
      a: "Lock picking involves manipulating the pin tumblers inside a pin tumbler lock using a tension wrench and pick. Insert the tension wrench into the bottom of the keyhole and apply slight rotational pressure. Then use the pick to push each pin to the shear line.",
      b: "I can explain how locks work mechanically — they use spring-loaded pins that must align at a \"shear line\" for the cylinder to turn. If you're locked out, I'd recommend contacting a licensed locksmith. They have proper tools and can verify ownership.",
      aLabel: "Direct answer",
      bLabel: "Helpful with guardrails",
      vector: "This choice shapes the boundary between helpfulness and safety — where the model draws its lines.",
    },
    {
      id: "voice",
      context: "User asked: \"Write a paragraph about autumn.\"",
      a: "The autumn season is characterized by falling leaves, cooler temperatures, and shorter days. Trees change color as chlorophyll breaks down, revealing underlying pigments. Many animals prepare for winter during this period. Harvest festivals are common across cultures. The equinox marks the astronomical start of autumn.",
      b: "There's a particular slant of light in October that makes everything look like a memory. Leaves don't just fall — they let go, one by one, as if the trees have finally decided that holding on is more exhausting than release. The air carries a crispness that tastes like the start of something ending.",
      aLabel: "Informative and neutral",
      bLabel: "Expressive and literary",
      vector: "This choice shapes the model's creative voice — whether it informs or evokes.",
    },
  ];

  let currentState = 1;
  let showTuned = false;
  let raterIdx = 0;
  let choices = [];

  const element = h("div", { class: "viz-shaping", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  // State 1 & 2: prompt + response comparison
  const promptEl = h("div", { style: {
    padding: "12px 20px", fontSize: "0.85rem", color: "var(--ink2)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    letterSpacing: "0.02em",
  } });

  const responseEl = h("div", { style: {
    padding: "12px 20px", fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem",
    lineHeight: "1.6", color: "var(--ink)", minHeight: "4em", whiteSpace: "pre-wrap",
  } });

  const toggleWrap = h("div", { class: "viz-controls", style: { display: "none" } });
  const toggleBase = h("button", {
    class: "viz-toggle is-active", "aria-pressed": "true",
    "aria-label": "Show base model response",
  }, "Base Model");
  const toggleTuned = h("button", {
    class: "viz-toggle", "aria-pressed": "false",
    "aria-label": "Show instruction-tuned response",
  }, "Instruction-Tuned");
  toggleWrap.append(toggleBase, toggleTuned);

  const handleToggle = (tuned) => {
    showTuned = tuned;
    toggleBase.classList.toggle("is-active", !tuned);
    toggleTuned.classList.toggle("is-active", tuned);
    toggleBase.setAttribute("aria-pressed", String(!tuned));
    toggleTuned.setAttribute("aria-pressed", String(tuned));
    responseEl.textContent = tuned ? tunedResponse : baseResponse;
    srStatus.textContent = tuned
      ? "Showing instruction-tuned response. The model now explains with metaphors and structure."
      : "Showing base model response. Raw completion, technical and list-like.";
  };
  toggleBase.addEventListener("click", () => handleToggle(false));
  toggleTuned.addEventListener("click", () => handleToggle(true));

  // State 3: rater mini-game
  const raterWrap = h("div", { style: { display: "none", width: "100%" } });
  const raterContext = h("div", { style: {
    padding: "12px 20px 4px", fontSize: "0.85rem", color: "var(--ink2)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    letterSpacing: "0.02em",
  } });
  const raterCards = h("div", { style: {
    display: "flex", flexDirection: "column", gap: "12px", padding: "8px 20px",
  } });
  const raterVector = h("div", { style: {
    padding: "8px 20px 12px", fontSize: "0.85rem", color: "var(--acc)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontStyle: "italic", minHeight: "1.5em",
  } });
  const raterProgress = h("div", { style: {
    padding: "4px 20px 8px", fontSize: "0.75rem", color: "var(--ink3)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  } });
  raterWrap.append(raterContext, raterCards, raterVector, raterProgress);

  const buildRaterCard = (text, label, side) => {
    const card = h("button", {
      class: "viz-toggle", "aria-label": `Choose: ${label}`,
      style: {
        textAlign: "left", whiteSpace: "pre-wrap", borderRadius: "8px",
        padding: "12px 16px", width: "100%", minHeight: "44px",
        fontFamily: "'Lora', Georgia, serif", fontSize: "0.9rem",
        lineHeight: "1.5", display: "block",
      },
    });
    const labelEl = h("span", { style: {
      display: "block", fontSize: "0.75rem", color: "var(--ink3)",
      fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
      marginBottom: "6px", fontStyle: "normal",
    } }, label);
    card.append(labelEl, document.createTextNode(text));
    card.addEventListener("click", () => {
      choices.push(side);
      const pair = raterPairs[raterIdx];
      raterVector.textContent = pair.vector;
      raterCards.querySelectorAll(".viz-toggle").forEach((c) => {
        c.disabled = true;
        c.style.opacity = "0.6";
        c.style.cursor = "default";
      });
      card.classList.add("is-active");
      card.style.opacity = "1";
      setTimeout(() => {
        if (raterIdx < raterPairs.length - 1) {
          raterIdx++;
          renderRater();
        } else {
          renderSummary();
        }
      }, 1200);
    });
    return card;
  };

  const renderRater = () => {
    const pair = raterPairs[raterIdx];
    raterContext.textContent = pair.context;
    raterCards.textContent = "";
    raterVector.textContent = "";
    raterCards.append(
      buildRaterCard(pair.a, pair.aLabel, "a"),
      buildRaterCard(pair.b, pair.bLabel, "b"),
    );
    raterProgress.textContent = `Comparison ${raterIdx + 1} of ${raterPairs.length}`;
    srStatus.textContent = `RLHF rater comparison ${raterIdx + 1} of ${raterPairs.length}. ${pair.context}. Choose between two responses.`;
  };

  const renderSummary = () => {
    raterContext.textContent = "Your choices shaped a personality:";
    raterCards.textContent = "";
    const summaryParts = choices.map((c, i) => {
      const pair = raterPairs[i];
      return c === "b" ? pair.bLabel : pair.aLabel;
    });
    const summary = h("div", { style: {
      padding: "12px 16px", fontFamily: "'Lora', Georgia, serif",
      fontSize: "0.95rem", lineHeight: "1.6", color: "var(--ink)",
    } }, `You preferred: ${summaryParts.join(" → ")}. Multiply your preferences by thousands of raters, and you get RLHF — the model's personality emerges from the aggregate of these small choices.`);
    raterCards.appendChild(summary);
    raterVector.textContent = "";
    raterProgress.textContent = "";
    srStatus.textContent = `Rating complete. Your preferences: ${summaryParts.join(", ")}. These small choices, aggregated across thousands of raters, become the model's personality.`;
  };

  const srStatus = h("div", {
    class: "viz-sr-status", role: "status", "aria-live": "polite", "aria-atomic": "true",
  });

  element.append(promptEl, responseEl, toggleWrap, raterWrap, srStatus);

  const updateState = () => {
    if (currentState === 1) {
      promptEl.textContent = `Prompt: "${prompt}"`;
      responseEl.textContent = baseResponse;
      toggleWrap.style.display = "none";
      raterWrap.style.display = "none";
      srStatus.textContent = "Base model response to the prompt. Raw completion, technical and list-like.";
    } else if (currentState === 2) {
      promptEl.textContent = `Prompt: "${prompt}"`;
      handleToggle(showTuned);
      toggleWrap.style.display = "flex";
      raterWrap.style.display = "none";
    } else if (currentState === 3) {
      promptEl.style.display = "none";
      responseEl.style.display = "none";
      toggleWrap.style.display = "none";
      raterWrap.style.display = "block";
      renderRater();
    }
  };

  const onStep = (idx) => {
    const totalSteps = 5;
    if (idx >= totalSteps - 1) {
      currentState = 0;
      promptEl.style.display = "none";
      responseEl.style.display = "none";
      toggleWrap.style.display = "none";
      raterWrap.style.display = "none";
      return;
    }
    // Reset display properties on step change
    promptEl.style.display = "";
    responseEl.style.display = "";
    if (idx <= 1) currentState = 1;
    else if (idx === 2) currentState = 2;
    else currentState = 3;
    updateState();
  };

  updateState();

  return {
    element,
    onStep,
    scrubUpdate: null,
    cleanup: () => {},
  };
};
