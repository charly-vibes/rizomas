const buildVizDigitalFootprints = (state) => {
  const reduced = prefersReducedMotion;
  let currentState = 1;

  const element = h("div", { class: "viz-digital-footprints", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": "Digital footprints environmental impact visualization" });
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

  // State 1 — Energy Meter
  const panelEnergy = buildPanel();
  const energyGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  const buildChip = (label, value) => h("div", { style: {
    padding: "8px 12px",
    borderRadius: "12px",
    border: "1px solid var(--ink4)",
    background: "var(--paper)",
  } },
    h("div", { style: { fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" } }, label),
    h("div", { style: { fontWeight: "600", color: "var(--ink)", marginTop: "2px" } }, value)
  );
  energyGrid.append(
    buildChip("AI query", "~0.01 kWh"),
    buildChip("Web search", "~0.001 kWh"),
    buildChip("Model training", "~1,300 MWh"),
  );
  panelEnergy.append(
    energyGrid,
    h("div", { style: { color: "var(--ink2)" } }, "A single AI query uses roughly 10× the energy of a web search. Training scales to hundreds of homes for a year.")
  );

  // State 2 — Carbon Emissions
  const panelCarbon = buildPanel();
  const carbonGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  carbonGrid.append(
    buildChip("Training emissions", "~552 t CO₂"),
    buildChip("Equiv. flights", "~5 transatlantic"),
    buildChip("Equiv. households", "~60 years"),
  );
  panelCarbon.append(
    carbonGrid,
    h("div", { style: { color: "var(--ink2)" } }, "As compute doubles, emissions follow. Carbon cost compounds with each generation of models.")
  );

  // State 3 — Resource Map
  const panelResources = buildPanel();
  const resourceGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  resourceGrid.append(
    buildChip("Water cooling", "~700K liters/day"),
    buildChip("GPU lifespan", "~3–5 years"),
    buildChip("E-waste growth", "~15%/year"),
  );
  panelResources.append(
    resourceGrid,
    h("div", { style: { color: "var(--ink2)" } }, "Data centers consume water like small towns. Rapid GPU obsolescence feeds a growing e-waste stream.")
  );

  // State 4 — Sustainability Dashboard
  const panelSustain = buildPanel();
  const sustainGrid = h("div", { style: {
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
  sustainGrid.append(
    buildStrategy("Energy", ["renewable sources", "grid optimization", "heat reuse"]),
    buildStrategy("Efficiency", ["model pruning", "sparse architectures", "distillation"]),
    buildStrategy("Cooling", ["liquid cooling", "free-air systems", "waste heat capture"]),
  );
  panelSustain.append(
    sustainGrid,
    h("div", { style: { marginTop: "8px", color: "var(--ink2)", textTransform: "none", letterSpacing: "normal" } },
      "Sustainability is not optional. It requires action at every layer of the stack.")
  );

  const srStatus = h("div", {
    class: "viz-sr-status",
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  });

  element.append(
    canvasWrap,
    panelEnergy,
    panelCarbon,
    panelResources,
    panelSustain,
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
    const ch = rect.height;
    if (w <= 0 || ch <= 0) return;
    const ratio = scaleCanvas(canvas, w, ch);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, w, ch);
    drawFn(ctx, w, ch);
  };

  // State 1 canvas: Energy comparison bars
  const drawEnergyMeter = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const pad = { left: 90, right: 16, top: 20, bottom: 50 };
    const plotW = w - pad.left - pad.right;
    const items = [
      { label: "AI query", value: 10, unit: "Wh" },
      { label: "Web search", value: 1, unit: "Wh" },
      { label: "Model training", value: 1300000, unit: "kWh", scale: true },
    ];
    const barH = 20;
    const gap = 28;

    // Draw first two bars on same scale
    const maxSmall = 10;
    for (let i = 0; i < 2; i++) {
      const y = pad.top + i * gap;
      const barW = (items[i].value / maxSmall) * plotW;
      ctx.fillStyle = ink4;
      ctx.fillRect(pad.left, y, plotW, barH);
      ctx.fillStyle = i === 0 ? acc : ink3;
      ctx.fillRect(pad.left, y, barW, barH);
      ctx.fillStyle = ink2;
      ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(items[i].label, pad.left - 8, y + barH / 2);
      ctx.textAlign = "left";
      ctx.fillText(`${items[i].value} ${items[i].unit}`, pad.left + barW + 8, y + barH / 2);
    }

    // Training: full-width bar with label
    const trainY = pad.top + 2 * gap;
    ctx.fillStyle = acc;
    ctx.fillRect(pad.left, trainY, plotW, barH);
    ctx.fillStyle = ink2;
    ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(items[2].label, pad.left - 8, trainY + barH / 2);
    ctx.textAlign = "left";
    ctx.fillText("1,300 MWh", pad.left + 8, trainY + barH / 2);

    // 10× label
    ctx.fillStyle = acc;
    ctx.font = "bold 12px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("10×", pad.left + plotW / 2, pad.top + gap - 6);

    // Scale note
    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("≈ 100 homes for a year", w / 2, trainY + barH + 16);
  };

  // State 2 canvas: Carbon emission accumulation bars
  const drawCarbonBars = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const base = ch - 30;
    const barW = 42;
    const gap = 32;
    const maxH = ch - 60;
    const items = [
      { label: "Training", value: 552, color: acc },
      { label: "Inference/yr", value: 180, color: ink2 },
      { label: "Hardware", value: 85, color: seed },
    ];
    const maxVal = 600;
    items.forEach((item, i) => {
      const x = 40 + i * (barW + gap);
      const barH = (item.value / maxVal) * maxH;
      ctx.fillStyle = ink4;
      ctx.fillRect(x, base - maxH, barW, maxH);
      ctx.fillStyle = item.color;
      ctx.fillRect(x, base - barH, barW, barH);
      ctx.fillStyle = ink2;
      ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.label, x + barW / 2, base + 14);
      ctx.fillText(`${item.value}t`, x + barW / 2, base - barH - 6);
    });

    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CO₂ equivalent (tonnes)", w / 2, 14);
  };

  // State 3 canvas: Resource usage horizontal bars
  const drawResourceMap = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const items = [
      { label: "Water use", value: 0.85, color: acc },
      { label: "GPU lifecycle", value: 0.65, color: seed },
      { label: "E-waste", value: 0.72, color: ink2 },
      { label: "Rare minerals", value: 0.58, color: ink3 },
    ];
    const left = 90;
    const top = 22;
    const barW = w - left - 30;
    const barH = 14;
    const gap = 28;
    items.forEach((item, i) => {
      const y = top + i * gap;
      ctx.fillStyle = ink4;
      ctx.fillRect(left, y, barW, barH);
      ctx.fillStyle = item.color;
      ctx.fillRect(left, y, barW * item.value, barH);
      ctx.fillStyle = ink2;
      ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(item.label, left - 8, y + barH / 2);
      ctx.textAlign = "left";
      ctx.fillText(Math.round(item.value * 100) + "%", left + barW + 6, y + barH / 2);
    });

    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Relative environmental impact", w / 2, ch - 10);
  };

  // State 4 canvas: Sustainability strategy contour lines
  const drawSustainability = (ctx, w, ch) => {
    const { ink3, ink4, acc } = getColors();
    const lines = 5;
    const gap = ch / (lines + 1);
    for (let i = 0; i < lines; i++) {
      const yBase = gap * (i + 1);
      ctx.strokeStyle = i === 2 ? acc : ink4;
      ctx.lineWidth = i === 2 ? 2 : 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 12) {
        const wave = Math.sin((x / w) * Math.PI * 3 + i * 0.8) * 5;
        const y = yBase + wave + (i % 2 === 0 ? 2 : -2);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Convergence arrows toward center
    const cx = w / 2;
    const cy = ch / 2;
    ctx.strokeStyle = acc;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    const arrows = [
      { x: 30, y: 30 }, { x: w - 30, y: 30 },
      { x: 30, y: ch - 30 }, { x: w - 30, y: ch - 30 },
    ];
    arrows.forEach((a) => {
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(cx, cy);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    ctx.fillStyle = acc;
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawCanvas = () => {
    if (currentState === 1) return withCanvas(drawEnergyMeter);
    if (currentState === 2) return withCanvas(drawCarbonBars);
    if (currentState === 3) return withCanvas(drawResourceMap);
    return withCanvas(drawSustainability);
  };

  const setPanelVisibility = () => {
    panelEnergy.style.display = currentState === 1 ? "block" : "none";
    panelCarbon.style.display = currentState === 2 ? "block" : "none";
    panelResources.style.display = currentState === 3 ? "block" : "none";
    panelSustain.style.display = currentState === 4 ? "block" : "none";
  };

  const updateState = () => {
    setPanelVisibility();
    drawCanvas();
    if (currentState === 1) {
      srStatus.textContent = "Energy meter compares AI query consumption to web searches and model training costs.";
    } else if (currentState === 2) {
      srStatus.textContent = "Carbon emissions from training, inference, and hardware manufacturing shown in tonnes of CO2.";
    } else if (currentState === 3) {
      srStatus.textContent = "Resource map showing water consumption, GPU lifecycle, e-waste, and rare mineral impacts.";
    } else if (currentState === 4) {
      srStatus.textContent = "Sustainability dashboard comparing green AI strategies: renewable energy, efficiency, and cooling.";
    }
  };

  const onStep = (idx) => {
    const totalSteps = 5;
    if (idx >= totalSteps - 1) {
      currentState = 0;
      setPanelVisibility();
      return;
    }
    currentState = Math.min(idx + 1, 4);
    updateState();
  };

  const resizeObserver = new ResizeObserver(() => {
    if (currentState > 0) drawCanvas();
  });
  resizeObserver.observe(canvasWrap);

  updateState();

  return {
    element,
    onStep,
    scrubUpdate: null,
    cleanup: () => {
      resizeObserver.disconnect();
    },
  };
};
