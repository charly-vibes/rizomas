const buildVizNearZeroCostImpact = (state) => {
  const reduced = prefersReducedMotion;
  const counterTargets = { text: 250, images: 45, code: 9 };

  let currentState = 1;
  let counterRaf = null;
  let counterStart = null;

  const element = h("div", { class: "viz-near-zero", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": LOCALE.viz.nearZeroCost.ariaLabel });
  const canvasWrap = h("div", { style: {
    width: "100%", height: "210px", padding: "0 20px 8px", position: "relative",
  } });
  canvasWrap.appendChild(canvas);

  const buildPanel = () => h("div", { style: {
    display: "none",
    padding: "0 20px 12px",
    color: "var(--ink)",
    fontFamily: "'Lora', Georgia, serif",
    fontSize: "0.92rem",
    lineHeight: "1.6",
  } });

  const vnzc = LOCALE.viz.nearZeroCost;

  const panelCost = buildPanel();
  const chipWrap = h("div", { style: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "8px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--ink2)",
  } });
  const buildChip = (text) => h("span", { style: {
    padding: "6px 10px",
    borderRadius: "999px",
    border: "1px solid var(--ink4)",
    background: "var(--paper)",
  } }, text);
  vnzc.cost.chips.forEach((c) => chipWrap.appendChild(buildChip(c)));
  panelCost.append(
    chipWrap,
    h("div", null, vnzc.cost.caption)
  );

  const panelFlood = buildPanel();
  const floodGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "12px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.85rem",
  } });
  const buildCounter = (label) => {
    const value = h("div", { style: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "var(--ink)",
    } }, "0M/day");
    const caption = h("div", { style: {
      fontSize: "0.7rem",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--ink3)",
    } }, label);
    const wrap = h("div", { style: {
      padding: "10px 12px",
      borderRadius: "12px",
      border: "1px solid var(--ink4)",
      background: "var(--paper)",
    } }, value, caption);
    return { wrap, value };
  };
  const textCounter = buildCounter(vnzc.flood.counters[0].label);
  const imageCounter = buildCounter(vnzc.flood.counters[1].label);
  const codeCounter = buildCounter(vnzc.flood.counters[2].label);
  floodGrid.append(textCounter.wrap, imageCounter.wrap, codeCounter.wrap);
  panelFlood.append(
    floodGrid,
    h("div", { style: { marginTop: "8px", color: "var(--ink2)" } },
      vnzc.flood.caption
    )
  );

  const panelRisk = buildPanel();
  const riskList = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.8rem",
  } });
  vnzc.risk.items.forEach((item) => {
    riskList.appendChild(h("div", { style: {
      padding: "8px 10px",
      borderRadius: "10px",
      border: "1px solid var(--ink4)",
      background: "var(--paper)",
    } },
      h("div", { style: { color: "var(--ink)" } }, item.label),
      h("div", { style: { color: "var(--acc)", fontWeight: "600" } }, item.level)
    ));
  });
  panelRisk.append(
    riskList,
    h("div", { style: { marginTop: "8px", color: "var(--ink2)" } },
      vnzc.risk.caption
    )
  );

  const panelTimeline = buildPanel();
  const timelineList = h("div", { style: {
    display: "grid",
    gap: "6px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    color: "var(--ink2)",
  } });
  vnzc.timeline.items.forEach((item) => timelineList.appendChild(h("div", null, item.full)));
  panelTimeline.append(
    timelineList,
    h("div", { style: { marginTop: "8px", color: "var(--ink)" } },
      vnzc.timeline.caption
    )
  );

  const panelStrategy = buildPanel();
  const strategyGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "12px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  } });
  const buildStrategy = (title, items) => h("div", { style: {
    padding: "10px 12px",
    borderRadius: "12px",
    border: "1px solid var(--ink4)",
    background: "var(--paper)",
    color: "var(--ink2)",
  } },
    h("div", { style: { fontWeight: "600", color: "var(--ink)" } }, title),
    h("div", { style: { marginTop: "6px", display: "grid", gap: "4px" } },
      items.map((item) => h("div", null, item))
    )
  );
  vnzc.strategy.strategies.forEach((s) => strategyGrid.appendChild(buildStrategy(s.title, s.items)));
  panelStrategy.append(
    strategyGrid,
    h("div", { style: { marginTop: "8px", color: "var(--ink2)", textTransform: "none", letterSpacing: "normal" } },
      vnzc.strategy.caption
    )
  );

  const srStatus = h("div", {
    class: "viz-sr-status",
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  });

  element.append(
    canvasWrap,
    panelCost,
    panelFlood,
    panelRisk,
    panelTimeline,
    panelStrategy,
    srStatus
  );

  const getColors = () => {
    const styles = getComputedStyle(document.documentElement);
    return {
      ink: styles.getPropertyValue("--ink").trim(),
      ink2: styles.getPropertyValue("--ink2").trim(),
      ink3: styles.getPropertyValue("--ink3").trim(),
      ink4: styles.getPropertyValue("--ink4").trim(),
      acc: styles.getPropertyValue("--acc").trim(),
      seed: styles.getPropertyValue("--seed").trim(),
    };
  };

  const withCanvas = (drawFn) => {
    const rect = canvasWrap.getBoundingClientRect();
    const w = rect.width - 40;
    const h = rect.height;
    if (w <= 0 || h <= 0) return;
    const ratio = scaleCanvas(canvas, w, h);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, w, h);
    drawFn(ctx, w, h);
  };

  const drawCostCurve = (ctx, w, h) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const pad = { left: 32, right: 16, top: 18, bottom: 28 };
    const plotW = w - pad.left - pad.right;
    const plotH = h - pad.top - pad.bottom;

    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top);
    ctx.lineTo(pad.left, pad.top + plotH);
    ctx.lineTo(pad.left + plotW, pad.top + plotH);
    ctx.stroke();

    const legacy = [
      { x: 0, y: 0.95 },
      { x: 0.4, y: 0.7 },
      { x: 0.8, y: 0.4 },
      { x: 1, y: 0.25 },
    ];
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = ink3;
    ctx.beginPath();
    legacy.forEach((p, i) => {
      const px = pad.left + p.x * plotW;
      const py = pad.top + (1 - p.y) * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();
    ctx.setLineDash([]);

    const ai = [
      { x: 0, y: 1 },
      { x: 0.35, y: 0.6 },
      { x: 0.7, y: 0.2 },
      { x: 1, y: 0.02 },
    ];
    ctx.strokeStyle = acc;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ai.forEach((p, i) => {
      const px = pad.left + p.x * plotW;
      const py = pad.top + (1 - p.y) * plotH;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    ctx.fillStyle = ink2;
    ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(vnzc.cost.physicalGoods, pad.left + 6, pad.top + plotH * 0.25);
    ctx.textAlign = "right";
    ctx.fillText(vnzc.cost.aiOutputs, pad.left + plotW, pad.top + plotH - 6);
  };

  const drawContentFlood = (ctx, w, h) => {
    const { ink2, ink4, acc, seed } = getColors();
    const base = h - 30;
    const barW = 42;
    const gap = 32;
    const maxH = h - 60;
    const floodColors = [acc, ink2, seed];
    const items = vnzc.flood.canvasLabels.map((label, i) => ({
      label, color: floodColors[i], value: [250, 45, 9][i],
    }));
    const maxVal = 260;
    items.forEach((item, i) => {
      const x = 28 + i * (barW + gap);
      const barH = (item.value / maxVal) * maxH;
      ctx.fillStyle = ink4;
      ctx.fillRect(x, base - maxH, barW, maxH);
      ctx.fillStyle = item.color;
      ctx.fillRect(x, base - barH, barW, barH);
      ctx.fillStyle = ink2;
      ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.label, x + barW / 2, base + 14);
    });
  };

  const drawRiskDashboard = (ctx, w, h) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const risks = [0.9, 0.75, 0.68, 0.82];
    const left = 28;
    const top = 22;
    const barW = w - 60;
    const barH = 12;
    const gap = 26;
    risks.forEach((score, i) => {
      const y = top + i * gap;
      ctx.fillStyle = ink4;
      ctx.fillRect(left, y, barW, barH);
      ctx.fillStyle = acc;
      ctx.fillRect(left, y, barW * score, barH);
      ctx.fillStyle = ink3;
      ctx.fillRect(left + barW * 0.5, y - 2, 1, barH + 4);
      ctx.fillStyle = ink2;
      ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(Math.round(score * 100) + "%", left + barW + 12, y + 10);
    });
  };

  const drawTimeline = (ctx, w, h) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const items = vnzc.timeline.items;
    const left = 22;
    const right = w - 22;
    const y = h / 2;
    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();
    items.forEach((item, i) => {
      const x = left + (i / (items.length - 1)) * (right - left);
      ctx.fillStyle = i === items.length - 1 ? acc : ink3;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = ink4;
      ctx.beginPath();
      ctx.moveTo(x, y - 10);
      ctx.lineTo(x, y + 10);
      ctx.stroke();
      ctx.fillStyle = ink2;
      ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.year, x, y - 16);
      ctx.fillStyle = ink3;
      ctx.fillText(item.label, x, y + 22);
    });
  };

  const drawStrategyLandscape = (ctx, w, h) => {
    const { ink3, ink4, acc } = getColors();
    const lines = 5;
    const gap = h / (lines + 1);
    for (let i = 0; i < lines; i++) {
      const yBase = gap * (i + 1);
      ctx.strokeStyle = i === 2 ? acc : ink4;
      ctx.lineWidth = i === 2 ? 2 : 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 12) {
        const wave = Math.sin((x / w) * Math.PI * 2 + i) * 6;
        const y = yBase + wave + (i % 2 === 0 ? 3 : -3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.strokeStyle = ink3;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(6, 12, w - 12, h - 24);
    ctx.setLineDash([]);
  };

  const drawCanvas = () => {
    if (currentState === 1) return withCanvas(drawCostCurve);
    if (currentState === 2) return withCanvas(drawContentFlood);
    if (currentState === 3) return withCanvas(drawRiskDashboard);
    if (currentState === 4) return withCanvas(drawTimeline);
    return withCanvas(drawStrategyLandscape);
  };

  const setPanelVisibility = () => {
    panelCost.style.display = currentState === 1 ? "block" : "none";
    panelFlood.style.display = currentState === 2 ? "block" : "none";
    panelRisk.style.display = currentState === 3 ? "block" : "none";
    panelTimeline.style.display = currentState === 4 ? "block" : "none";
    panelStrategy.style.display = currentState === 5 ? "block" : "none";
  };

  const stopCounterAnimation = () => {
    if (counterRaf !== null) {
      cancelAnimationFrame(counterRaf);
      counterRaf = null;
    }
    counterStart = null;
  };

  const updateCounterText = (values) => {
    textCounter.value.textContent = `${Math.round(values.text)}M/day`;
    imageCounter.value.textContent = `${Math.round(values.images)}M/day`;
    codeCounter.value.textContent = `${Math.round(values.code)}M/day`;
  };

  const startCounterAnimation = () => {
    stopCounterAnimation();
    if (reduced()) {
      updateCounterText(counterTargets);
      return;
    }
    const duration = 1600;
    const animate = (timestamp) => {
      if (counterStart === null) counterStart = timestamp;
      const t = Math.min((timestamp - counterStart) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      updateCounterText({
        text: counterTargets.text * eased,
        images: counterTargets.images * eased,
        code: counterTargets.code * eased,
      });
      if (t < 1) {
        counterRaf = requestAnimationFrame(animate);
      } else {
        counterRaf = null;
      }
    };
    counterRaf = requestAnimationFrame(animate);
  };

  const updateState = () => {
    setPanelVisibility();
    drawCanvas();
    if (currentState === 2) {
      startCounterAnimation();
    } else {
      stopCounterAnimation();
    }
    if (currentState === 1) {
      srStatus.textContent = vnzc.cost.sr;
    } else if (currentState === 2) {
      srStatus.textContent = vnzc.flood.sr;
    } else if (currentState === 3) {
      srStatus.textContent = vnzc.risk.sr;
    } else if (currentState === 4) {
      srStatus.textContent = vnzc.timeline.sr;
    } else if (currentState === 5) {
      srStatus.textContent = vnzc.strategy.sr;
    }
  };

  const onStep = (idx) => {
    const totalSteps = 6;
    if (idx >= totalSteps - 1) {
      currentState = 0;
      setPanelVisibility();
      stopCounterAnimation();
      return;
    }
    currentState = Math.min(idx + 1, 5);
    updateState();
  };

  const resizeObserver = new ResizeObserver(() => {
    if (currentState > 0) drawCanvas();
  });
  resizeObserver.observe(canvasWrap);

  updateCounterText({ text: 0, images: 0, code: 0 });
  updateState();

  return {
    element,
    onStep,
    scrubUpdate: null,
    cleanup: () => {
      stopCounterAnimation();
      resizeObserver.disconnect();
    },
  };
};
