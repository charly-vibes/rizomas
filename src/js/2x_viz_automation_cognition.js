const buildVizAutomationOfCognition = (state) => {
  const reduced = prefersReducedMotion;
  let currentState = 1;

  const element = h("div", { class: "viz-automation-cognition", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": "Automation of cognition visualization" });
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

  const buildChip = (label, value) => h("div", { style: {
    padding: "8px 12px",
    borderRadius: "12px",
    border: "1px solid var(--ink4)",
    background: "var(--paper)",
  } },
    h("div", { style: { fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" } }, label),
    h("div", { style: { fontWeight: "600", color: "var(--ink)", marginTop: "2px" } }, value)
  );

  // State 1 — Task Migration Flow
  const panelMigration = buildPanel();
  const migrationGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  migrationGrid.append(
    buildChip("Data analysis", "High exposure"),
    buildChip("Content generation", "High exposure"),
    buildChip("Legal research", "Moderate"),
  );
  panelMigration.append(
    migrationGrid,
    h("div", { style: { color: "var(--ink2)" } }, "White-collar cognitive tasks are migrating to AI systems. The shift targets reasoning and synthesis, not just routine.")
  );

  // State 2 — Productivity vs Displacement
  const panelProductivity = buildPanel();
  const productivityGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  productivityGrid.append(
    buildChip("Productivity gain", "+40% avg."),
    buildChip("Displacement risk", "~30% of roles"),
    buildChip("Cognitive dependence", "Rising"),
  );
  panelProductivity.append(
    productivityGrid,
    h("div", { style: { color: "var(--ink2)" } }, "Productivity rises as cognitive load shifts to machines—but over-reliance risks atrophying human problem-solving.")
  );

  // State 3 — Wealth Distribution
  const panelWealth = buildPanel();
  const wealthGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  wealthGrid.append(
    buildChip("Predistribution", "Equity at source"),
    buildChip("Redistribution", "Correction after"),
    buildChip("Concentration risk", "Accelerating"),
  );
  panelWealth.append(
    wealthGrid,
    h("div", { style: { color: "var(--ink2)" } }, "AI benefits concentrate unless policy intervenes. The question is whether to prevent inequality or correct it.")
  );

  // State 4 — Future of Work Landscape
  const panelFuture = buildPanel();
  const futureGrid = h("div", { style: {
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
  futureGrid.append(
    buildStrategy("Human strengths", ["creativity", "empathy", "strategy"]),
    buildStrategy("AI strengths", ["speed", "scale", "consistency"]),
    buildStrategy("Safety nets", ["UBI", "retraining", "transition funds"]),
  );
  panelFuture.append(
    futureGrid,
    h("div", { style: { marginTop: "8px", color: "var(--ink2)", textTransform: "none", letterSpacing: "normal" } },
      "The future workplace is a collaboration zone. UBI bridges the gap while humans find new footing.")
  );

  const srStatus = h("div", {
    class: "viz-sr-status",
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  });

  element.append(
    canvasWrap,
    panelMigration,
    panelProductivity,
    panelWealth,
    panelFuture,
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

  // State 1 canvas: Task migration flow — arrows from human roles to AI
  const drawTaskMigration = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const roles = [
      { label: "Data analysis", exposure: 0.9 },
      { label: "Content gen.", exposure: 0.85 },
      { label: "Legal research", exposure: 0.65 },
      { label: "Medical inquiry", exposure: 0.55 },
      { label: "Strategy", exposure: 0.2 },
    ];
    const leftX = 18;
    const midX = w * 0.48;
    const rightX = w - 18;
    const top = 20;
    const gap = (ch - top - 20) / roles.length;

    // Column headers
    ctx.fillStyle = ink3;
    ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("HUMAN", leftX, 12);
    ctx.textAlign = "right";
    ctx.fillText("AI", rightX, 12);

    roles.forEach((role, i) => {
      const y = top + i * gap + gap / 2;

      // Role label on left
      ctx.fillStyle = ink2;
      ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(role.label, leftX, y + 4);

      // Arrow from mid to right, length proportional to exposure
      const arrowEnd = midX + (rightX - midX) * role.exposure;
      ctx.strokeStyle = role.exposure > 0.7 ? acc : ink3;
      ctx.lineWidth = role.exposure > 0.7 ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(midX, y);
      ctx.lineTo(arrowEnd, y);
      ctx.stroke();

      // Arrowhead
      ctx.fillStyle = role.exposure > 0.7 ? acc : ink3;
      ctx.beginPath();
      ctx.moveTo(arrowEnd, y - 4);
      ctx.lineTo(arrowEnd + 6, y);
      ctx.lineTo(arrowEnd, y + 4);
      ctx.closePath();
      ctx.fill();

      // Exposure percentage
      ctx.fillStyle = ink3;
      ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(Math.round(role.exposure * 100) + "%", rightX, y + 4);
    });
  };

  // State 2 canvas: Productivity vs displacement dual bars
  const drawProductivityDisplacement = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const items = [
      { label: "Reasoning", prod: 0.7, disp: 0.6 },
      { label: "Synthesis", prod: 0.8, disp: 0.5 },
      { label: "Routine", prod: 0.95, disp: 0.85 },
      { label: "Creative", prod: 0.4, disp: 0.15 },
    ];
    const left = 70;
    const barW = (w - left - 20) / 2 - 4;
    const barH = 16;
    const gap = 30;
    const top = 28;

    // Legend
    ctx.fillStyle = acc;
    ctx.fillRect(left, 8, 10, 10);
    ctx.fillStyle = ink2;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Productivity", left + 14, 16);
    ctx.fillStyle = seed;
    ctx.fillRect(left + 90, 8, 10, 10);
    ctx.fillStyle = ink2;
    ctx.fillText("Displacement", left + 104, 16);

    items.forEach((item, i) => {
      const y = top + i * gap;

      ctx.fillStyle = ink2;
      ctx.font = "11px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(item.label, left - 8, y + barH / 2);

      // Productivity bar
      ctx.fillStyle = ink4;
      ctx.fillRect(left, y, barW, barH);
      ctx.fillStyle = acc;
      ctx.fillRect(left, y, barW * item.prod, barH);

      // Displacement bar
      const rightStart = left + barW + 8;
      ctx.fillStyle = ink4;
      ctx.fillRect(rightStart, y, barW, barH);
      ctx.fillStyle = seed;
      ctx.fillRect(rightStart, y, barW * item.disp, barH);
    });

    ctx.textBaseline = "alphabetic";
  };

  // State 3 canvas: Wealth distribution curve shift
  const drawWealthDistribution = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc } = getColors();
    const pad = { left: 32, right: 16, top: 22, bottom: 28 };
    const plotW = w - pad.left - pad.right;
    const plotH = ch - pad.top - pad.bottom;

    // Axes
    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, pad.top);
    ctx.lineTo(pad.left, pad.top + plotH);
    ctx.lineTo(pad.left + plotW, pad.top + plotH);
    ctx.stroke();

    // Pre-AI distribution (more even bell)
    const drawCurve = (points, color, dashed) => {
      if (dashed) ctx.setLineDash([6, 4]);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      points.forEach((p, i) => {
        const px = pad.left + p.x * plotW;
        const py = pad.top + (1 - p.y) * plotH;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // Pre-AI: broader distribution
    const preAI = [
      { x: 0, y: 0.05 }, { x: 0.15, y: 0.2 }, { x: 0.3, y: 0.55 },
      { x: 0.5, y: 0.7 }, { x: 0.7, y: 0.5 }, { x: 0.85, y: 0.2 },
      { x: 1, y: 0.05 },
    ];
    drawCurve(preAI, ink3, true);

    // Post-AI: skewed right, concentrated
    const postAI = [
      { x: 0, y: 0.02 }, { x: 0.15, y: 0.05 }, { x: 0.3, y: 0.08 },
      { x: 0.55, y: 0.15 }, { x: 0.75, y: 0.35 }, { x: 0.88, y: 0.85 },
      { x: 1, y: 0.6 },
    ];
    drawCurve(postAI, acc, false);

    // Labels
    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Pre-AI", pad.left + 8, pad.top + 14);
    ctx.fillStyle = acc;
    ctx.fillText("Post-AI", pad.left + plotW * 0.65, pad.top + 14);

    // Axis labels
    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Population → Wealth", pad.left + plotW / 2, ch - 6);
  };

  // State 4 canvas: Future-of-work collaboration zones
  const drawFutureOfWork = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();

    // Three zones
    const zones = [
      { label: "Human domain", x: 0.05, w: 0.25, color: seed },
      { label: "Collaboration", x: 0.35, w: 0.3, color: acc },
      { label: "AI domain", x: 0.7, w: 0.25, color: ink3 },
    ];
    const top = 28;
    const zoneH = ch - 60;

    zones.forEach((zone) => {
      const zx = zone.x * w;
      const zw = zone.w * w;
      ctx.fillStyle = zone.color;
      ctx.globalAlpha = 0.12;
      ctx.fillRect(zx, top, zw, zoneH);
      ctx.globalAlpha = 1;

      ctx.strokeStyle = zone.color;
      ctx.lineWidth = 1;
      ctx.strokeRect(zx, top, zw, zoneH);

      ctx.fillStyle = zone.color;
      ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(zone.label, zx + zw / 2, top - 8);
    });

    // UBI safety net line at bottom
    const netY = top + zoneH + 10;
    ctx.strokeStyle = acc;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.moveTo(w * 0.05, netY);
    ctx.lineTo(w * 0.95, netY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = acc;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("UBI safety net", w / 2, netY + 14);

    // Dots representing workers in each zone
    ctx.globalAlpha = 0.6;
    const rng = (s) => {
      let x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };
    zones.forEach((zone, zi) => {
      const count = zi === 1 ? 8 : 5;
      for (let i = 0; i < count; i++) {
        const dx = zone.x * w + rng(zi * 100 + i * 7) * zone.w * w;
        const dy = top + 10 + rng(zi * 200 + i * 13) * (zoneH - 20);
        ctx.fillStyle = zone.color;
        ctx.beginPath();
        ctx.arc(dx, dy, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  };

  const drawCanvas = () => {
    if (currentState === 1) return withCanvas(drawTaskMigration);
    if (currentState === 2) return withCanvas(drawProductivityDisplacement);
    if (currentState === 3) return withCanvas(drawWealthDistribution);
    return withCanvas(drawFutureOfWork);
  };

  const setPanelVisibility = () => {
    panelMigration.style.display = currentState === 1 ? "block" : "none";
    panelProductivity.style.display = currentState === 2 ? "block" : "none";
    panelWealth.style.display = currentState === 3 ? "block" : "none";
    panelFuture.style.display = currentState === 4 ? "block" : "none";
  };

  const updateState = () => {
    setPanelVisibility();
    drawCanvas();
    if (currentState === 1) {
      srStatus.textContent = "Task migration flow shows cognitive tasks shifting from human workers to AI, with white-collar professions highlighted.";
    } else if (currentState === 2) {
      srStatus.textContent = "Productivity versus displacement chart compares AI gains in reasoning, synthesis, and routine tasks against job displacement risk.";
    } else if (currentState === 3) {
      srStatus.textContent = "Wealth distribution curves shift as AI benefits concentrate, contrasting pre-AI and post-AI distributions.";
    } else if (currentState === 4) {
      srStatus.textContent = "Future-of-work landscape shows human, collaboration, and AI domains with UBI as a safety net bridging the transition.";
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
