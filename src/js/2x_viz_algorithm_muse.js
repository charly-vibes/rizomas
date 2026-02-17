const buildVizAlgorithmAsMuse = (state) => {
  const reduced = prefersReducedMotion;
  let currentState = 1;

  const element = h("div", { class: "viz-algorithm-muse", style: {
    width: "100%", position: "relative", textTransform: "none", letterSpacing: "normal",
  } });

  const canvas = h("canvas", { role: "img", "aria-label": "Algorithm as Muse visualization" });
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

  // State 1 — Co-writing Interface
  const panelCowrite = buildPanel();
  const cowriteGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  cowriteGrid.append(
    buildChip("Human", "Draft & intent"),
    buildChip("AI", "Expansion & options"),
    buildChip("Result", "Co-created text"),
  );
  panelCowrite.append(
    cowriteGrid,
    h("div", { style: { color: "var(--ink2)" } }, "Human sets direction; AI generates variations. Each contribution is visually distinct\u2014for now.")
  );

  // State 2 — Authorship Blur
  const panelBlur = buildPanel();
  const blurGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  blurGrid.append(
    buildChip("Originality", "Uncertain"),
    buildChip("Attribution", "Dissolving"),
    buildChip("Legal status", "Gray area"),
  );
  panelBlur.append(
    blurGrid,
    h("div", { style: { color: "var(--ink2)" } }, "As contributions blend, the line between human and machine authorship fades. Who wrote what?")
  );

  // State 3 — Homogeneity Gallery
  const panelGallery = buildPanel();
  const galleryGrid = h("div", { style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "10px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    marginBottom: "8px",
  } });
  galleryGrid.append(
    buildChip("Style A", "Converging"),
    buildChip("Style B", "Converging"),
    buildChip("Style C", "Converging"),
  );
  panelGallery.append(
    galleryGrid,
    h("div", { style: { color: "var(--ink2)" } }, "When millions of creators use the same models, outputs converge. Diversity flattens toward a statistical mean.")
  );

  // State 4 — Balance Control
  const panelBalance = buildPanel();
  const balanceLabel = h("div", { style: {
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.82rem",
    color: "var(--ink2)",
    marginBottom: "8px",
    textAlign: "center",
  } }, "AI capability vs. human creative control");
  const sliderValue = h("div", { style: {
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    fontSize: "0.78rem",
    color: "var(--ink3)",
    textAlign: "center",
    marginTop: "4px",
  } }, "Creator\u2019s role: Collaborator");
  const slider = h("input", {
    type: "range", min: "0", max: "100", value: "50",
    "aria-label": "Balance between AI capability and human creative control",
    style: {
      width: "100%",
      minHeight: "44px",
      accentColor: "var(--acc)",
      cursor: "pointer",
    },
  });
  const roleLabels = ["Director", "Lead author", "Collaborator", "Editor", "Curator"];
  slider.addEventListener("input", () => {
    const v = parseInt(slider.value, 10);
    const roleIdx = Math.min(Math.floor(v / 21), roleLabels.length - 1);
    sliderValue.textContent = "Creator\u2019s role: " + roleLabels[roleIdx];
    if (currentState === 4) drawCanvas();
  });
  panelBalance.append(
    balanceLabel,
    slider,
    sliderValue,
    h("div", { style: { color: "var(--ink2)", marginTop: "8px", fontSize: "0.92rem" } },
      "Drag to explore how creative control shifts as AI capability increases.")
  );

  const srStatus = h("div", {
    class: "viz-sr-status",
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  });

  element.append(
    canvasWrap,
    panelCowrite,
    panelBlur,
    panelGallery,
    panelBalance,
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

  // State 1 canvas: Co-writing — two columns of text lines, human vs AI
  const drawCowriting = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const leftX = 18;
    const midX = w * 0.5;
    const rightX = w - 18;
    const top = 28;

    // Column headers
    ctx.fillStyle = ink3;
    ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("HUMAN", leftX, 14);
    ctx.textAlign = "right";
    ctx.fillText("AI", rightX, 14);

    // Interleaved text lines representing co-writing
    const lines = [
      { source: "human", width: 0.7 },
      { source: "ai", width: 0.55 },
      { source: "human", width: 0.5 },
      { source: "ai", width: 0.8 },
      { source: "human", width: 0.6 },
      { source: "ai", width: 0.45 },
      { source: "human", width: 0.35 },
    ];
    const lineH = 8;
    const gap = (ch - top - 20) / lines.length;

    lines.forEach((line, i) => {
      const y = top + i * gap;
      const isHuman = line.source === "human";
      const barX = isHuman ? leftX : midX + 8;
      const maxW = (isHuman ? midX - leftX - 16 : rightX - midX - 16);
      const barW = maxW * line.width;

      ctx.fillStyle = isHuman ? seed : acc;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.roundRect(barX, y, barW, lineH, 3);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Dividing line
    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(midX, top - 8);
    ctx.lineTo(midX, ch - 12);
    ctx.stroke();
    ctx.setLineDash([]);

    // Legend at bottom
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = seed;
    ctx.fillRect(w * 0.25 - 20, ch - 10, 10, 8);
    ctx.fillStyle = ink3;
    ctx.fillText("Human", w * 0.25 + 8, ch - 3);
    ctx.fillStyle = acc;
    ctx.fillRect(w * 0.65 - 20, ch - 10, 10, 8);
    ctx.fillStyle = ink3;
    ctx.fillText("AI", w * 0.65 + 2, ch - 3);
  };

  // State 2 canvas: Authorship blur — lines with fading color distinction
  const drawAuthorshipBlur = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const leftX = 18;
    const rightX = w - 18;
    const top = 28;
    const totalW = rightX - leftX;

    // Title
    ctx.fillStyle = ink3;
    ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("AUTHORSHIP FADING", w / 2, 14);

    // Progressive blend: lines go from distinct colors to a merged gray
    const lineCount = 8;
    const lineH = 8;
    const gap = (ch - top - 20) / lineCount;

    for (let i = 0; i < lineCount; i++) {
      const y = top + i * gap;
      const blend = i / (lineCount - 1); // 0 = distinct, 1 = fully blurred
      const barW = totalW * (0.5 + Math.sin(i * 1.2) * 0.2);

      // Left segment (human fading)
      const segW = barW * 0.5;
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = seed;
      ctx.globalAlpha = 0.7 * (1 - blend);
      ctx.beginPath();
      ctx.roundRect(leftX, y, segW, lineH, 3);
      ctx.fill();

      // Right segment (AI fading)
      ctx.fillStyle = acc;
      ctx.globalAlpha = 0.7 * (1 - blend);
      ctx.beginPath();
      ctx.roundRect(leftX + segW + 2, y, barW - segW - 2, lineH, 3);
      ctx.fill();

      // Merged overlay (growing)
      ctx.fillStyle = ink3;
      ctx.globalAlpha = 0.4 * blend;
      ctx.beginPath();
      ctx.roundRect(leftX, y, barW, lineH, 3);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Arrow indicating blur direction
    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Distinct \u2192", leftX, ch - 4);
    ctx.textAlign = "right";
    ctx.fillText("\u2192 Indistinguishable", rightX, ch - 4);
  };

  // State 3 canvas: Homogeneity gallery — works converging to same style
  const drawHomogeneityGallery = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const cols = 4;
    const rows = 2;
    const pad = 12;
    const cellW = (w - pad * 2 - (cols - 1) * 8) / cols;
    const cellH = (ch - 50 - (rows - 1) * 8) / rows;
    const top = 28;

    // Title
    ctx.fillStyle = ink3;
    ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CREATIVE OUTPUTS CONVERGING", w / 2, 14);

    // Pseudo-random helper
    const rng = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const x = pad + c * (cellW + 8);
        const y = top + r * (cellH + 8);

        // Convergence increases left-to-right, top-to-bottom
        const convergence = idx / (cols * rows - 1);

        // Frame
        ctx.strokeStyle = ink4;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellW, cellH);

        // Inner pattern: unique early, converging to same pattern
        const patternColor = convergence < 0.5 ? seed : acc;
        const baseAngle = convergence * 0.8;

        // Draw abstract "artwork" lines inside each cell
        ctx.save();
        ctx.beginPath();
        ctx.rect(x + 1, y + 1, cellW - 2, cellH - 2);
        ctx.clip();

        const lineCount = 4;
        for (let l = 0; l < lineCount; l++) {
          const uniqueness = 1 - convergence;
          const lx1 = x + rng(idx * 50 + l * 7) * cellW * uniqueness + cellW * 0.2 * convergence;
          const ly1 = y + rng(idx * 80 + l * 11) * cellH * uniqueness + cellH * (0.2 + l * 0.15) * convergence;
          const lx2 = x + rng(idx * 30 + l * 13) * cellW * uniqueness + cellW * 0.8 * convergence;
          const ly2 = y + rng(idx * 60 + l * 17) * cellH * uniqueness + cellH * (0.3 + l * 0.15) * convergence;

          ctx.strokeStyle = convergence > 0.6 ? ink3 : patternColor;
          ctx.globalAlpha = 0.5 + convergence * 0.3;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(lx1, ly1);
          ctx.lineTo(lx2, ly2);
          ctx.stroke();
        }
        ctx.restore();
        ctx.globalAlpha = 1;
      }
    }

    // Bottom label
    ctx.fillStyle = ink3;
    ctx.font = "10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Diverse \u2192", pad, ch - 4);
    ctx.textAlign = "right";
    ctx.fillText("\u2192 Homogeneous", w - pad, ch - 4);
  };

  // State 4 canvas: Balance scale — AI capability vs human control
  const drawBalanceControl = (ctx, w, ch) => {
    const { ink2, ink3, ink4, acc, seed } = getColors();
    const centerX = w / 2;
    const sliderVal = parseInt(slider.value, 10) / 100; // 0 = human control, 1 = AI capability

    // Fulcrum
    const fulcrumY = ch - 40;
    ctx.fillStyle = ink3;
    ctx.beginPath();
    ctx.moveTo(centerX - 10, fulcrumY + 12);
    ctx.lineTo(centerX + 10, fulcrumY + 12);
    ctx.lineTo(centerX, fulcrumY);
    ctx.closePath();
    ctx.fill();

    // Beam — tilts based on slider
    const tiltAngle = (sliderVal - 0.5) * 0.35;
    const beamLen = w * 0.38;
    const lx = centerX - Math.cos(tiltAngle) * beamLen;
    const ly = fulcrumY - Math.sin(tiltAngle) * beamLen;
    const rx = centerX + Math.cos(tiltAngle) * beamLen;
    const ry = fulcrumY + Math.sin(tiltAngle) * beamLen;

    ctx.strokeStyle = ink2;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(lx, ly);
    ctx.lineTo(rx, ry);
    ctx.stroke();

    // Left pan — human control (heavier when slider is low)
    const panW = 50;
    const panH = 6;
    ctx.fillStyle = seed;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(lx - panW / 2, ly, panW, panH);
    ctx.globalAlpha = 1;

    // Right pan — AI capability (heavier when slider is high)
    ctx.fillStyle = acc;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(rx - panW / 2, ry, panW, panH);
    ctx.globalAlpha = 1;

    // Weight indicators
    const humanWeight = 1 - sliderVal;
    const aiWeight = sliderVal;
    const maxDots = 5;

    const rng = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };

    // Human weight dots
    const humanDots = Math.round(humanWeight * maxDots);
    for (let i = 0; i < humanDots; i++) {
      ctx.fillStyle = seed;
      ctx.beginPath();
      ctx.arc(lx - panW / 2 + 8 + i * 10, ly - 6 - rng(i * 3) * 8, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // AI weight dots
    const aiDots = Math.round(aiWeight * maxDots);
    for (let i = 0; i < aiDots; i++) {
      ctx.fillStyle = acc;
      ctx.beginPath();
      ctx.arc(rx - panW / 2 + 8 + i * 10, ry - 6 - rng(i * 5 + 20) * 8, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Labels
    ctx.font = "bold 10px system-ui, -apple-system, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = seed;
    ctx.fillText("HUMAN CONTROL", lx, 16);
    ctx.fillStyle = acc;
    ctx.fillText("AI CAPABILITY", rx, 16);
  };

  const drawCanvas = () => {
    if (currentState === 1) return withCanvas(drawCowriting);
    if (currentState === 2) return withCanvas(drawAuthorshipBlur);
    if (currentState === 3) return withCanvas(drawHomogeneityGallery);
    return withCanvas(drawBalanceControl);
  };

  const setPanelVisibility = () => {
    panelCowrite.style.display = currentState === 1 ? "block" : "none";
    panelBlur.style.display = currentState === 2 ? "block" : "none";
    panelGallery.style.display = currentState === 3 ? "block" : "none";
    panelBalance.style.display = currentState === 4 ? "block" : "none";
  };

  const updateState = () => {
    setPanelVisibility();
    drawCanvas();
    if (currentState === 1) {
      srStatus.textContent = "Co-writing interface shows human and AI contributions visually distinguished, collaborating on text.";
    } else if (currentState === 2) {
      srStatus.textContent = "Authorship blur visualization where the boundary between human and AI contributions fades, questioning originality.";
    } else if (currentState === 3) {
      srStatus.textContent = "Homogeneity gallery showing creative works converging toward similar styles when using the same AI models.";
    } else if (currentState === 4) {
      srStatus.textContent = "Balance visualization between AI capability and human creative control. Use the slider to explore the creator's evolving role.";
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
