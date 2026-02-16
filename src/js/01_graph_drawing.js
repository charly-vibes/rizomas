const initEngagement = (state, plateauId, totalSeeds) => {
  if (!state.eg[plateauId]) state.eg[plateauId] = { opened: 0, total: 0 };
  state.eg[plateauId].total = totalSeeds;
  saveState(state);
};

const getPlateau = (id) => GRAPH.nodes.find((node) => node.id === id);

const scaleCanvas = (canvas, width, height) => {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return ratio;
};

const getNodePx = (node, width, height) => ({
  x: node.x * width,
  y: node.y * height,
});

const edgeKey = (a, b) => a < b ? `${a}|${b}` : `${b}|${a}`;

const EDGE_SET = new Set(GRAPH.edges.map(([a, b]) => edgeKey(a, b)));

const deriveTraversedEdges = (trail) => {
  const traversed = new Set();
  for (let i = 1; i < trail.length; i++) {
    const key = edgeKey(trail[i - 1].p, trail[i].p);
    if (EDGE_SET.has(key)) traversed.add(key);
  }
  return traversed;
};

const getTrailSegments = (trail) => {
  const seen = new Set();
  const ordered = [];
  trail.forEach((entry) => {
    if (seen.has(entry.p)) return;
    seen.add(entry.p);
    const node = getPlateau(entry.p);
    if (node) ordered.push(node);
  });
  return ordered;
};

const getFlightOpacity = (state, plateauId) => {
  const trail = state.tr;
  if (!trail || trail.length === 0) return 1.0;
  const lastIndex = trail.findLastIndex((e) => e.p === plateauId);
  if (lastIndex === -1) return 1.0;
  const segCount = trail.length - 1;
  if (segCount <= 0) return 0.45;
  const t = lastIndex / segCount;
  return 0.45 + 0.47 * (1 - t);
};

const drawGraph = ({
  canvas,
  width,
  height,
  visited,
  activeId,
  highlightIds,
  edgeFilter,
  showLabels,
  showTrail,
  trailNodes,
  hoveredId,
  curvedEdges,
  softenUnvisited,
  activeGlow,
  breatheAlpha,
  traversedEdges,
}) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ratio = scaleCanvas(canvas, width, height);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const styles = getComputedStyle(document.documentElement);
  const ink = styles.getPropertyValue("--ink").trim();
  const ink3 = styles.getPropertyValue("--ink3").trim();
  const ink4 = styles.getPropertyValue("--ink4").trim();
  const acc = styles.getPropertyValue("--acc").trim();
  const paper = styles.getPropertyValue("--paper").trim();

  const drawEdgePath = (ctx, fromPos, toPos, curved, fromId, toId) => {
    ctx.beginPath();
    ctx.moveTo(fromPos.x, fromPos.y);
    if (curved) {
      const mx = (fromPos.x + toPos.x) / 2;
      const my = (fromPos.y + toPos.y) / 2;
      const dx = toPos.x - fromPos.x;
      const dy = toPos.y - fromPos.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const sign = (fromId < toId) ? 1 : -1;
      const offset = len * 0.15 * sign;
      const cpx = mx + (-dy / len) * offset;
      const cpy = my + (dx / len) * offset;
      ctx.quadraticCurveTo(cpx, cpy, toPos.x, toPos.y);
    } else {
      ctx.lineTo(toPos.x, toPos.y);
    }
  };

  GRAPH.edges.forEach(([fromId, toId]) => {
    if (edgeFilter && !edgeFilter(fromId, toId)) return;
    if (highlightIds && (!highlightIds.has(fromId) || !highlightIds.has(toId))) return;
    if (traversedEdges && !traversedEdges.has(edgeKey(fromId, toId))) return;
    const from = GRAPH.nodes.find((node) => node.id === fromId);
    const to = GRAPH.nodes.find((node) => node.id === toId);
    if (!from || !to) return;
    const fromPos = getNodePx(from, width, height);
    const toPos = getNodePx(to, width, height);
    const touchesActive = hoveredId && (fromId === hoveredId || toId === hoveredId);
    const touchesVisited = visited.has(fromId) || visited.has(toId);
    if (softenUnvisited) {
      ctx.globalAlpha = touchesActive ? 0.5 : touchesVisited ? 0.25 : 0.06;
    } else {
      ctx.globalAlpha = touchesActive ? 0.5 : touchesVisited ? 0.3 : 0.08;
    }
    ctx.strokeStyle = ink4;
    ctx.lineWidth = touchesActive ? 1.5 : 1;
    drawEdgePath(ctx, fromPos, toPos, curvedEdges, fromId, toId);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  if (showTrail && trailNodes && trailNodes.length > 1) {
    const segCount = trailNodes.length - 1;
    for (let i = 1; i < trailNodes.length; i++) {
      const prev = trailNodes[i - 1];
      const node = trailNodes[i];
      const prevPos = getNodePx(prev, width, height);
      const pos = getNodePx(node, width, height);
      const t = i / segCount;
      ctx.strokeStyle = acc;
      ctx.globalAlpha = 0.06 + 0.22 * t;
      ctx.lineWidth = 1 + 1.2 * t;
      ctx.beginPath();
      ctx.moveTo(prevPos.x, prevPos.y);
      if (curvedEdges) {
        const mx = (prevPos.x + pos.x) / 2;
        const my = (prevPos.y + pos.y) / 2;
        const dx = pos.x - prevPos.x;
        const dy = pos.y - prevPos.y;
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const offset = len * 0.15;
        const cpx = mx + (-dy / len) * offset;
        const cpy = my + (dx / len) * offset;
        ctx.quadraticCurveTo(cpx, cpy, pos.x, pos.y);
      } else {
        ctx.lineTo(pos.x, pos.y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  GRAPH.nodes.forEach((node) => {
    if (highlightIds && !highlightIds.has(node.id)) return;
    const pos = getNodePx(node, width, height);
    const isVisited = visited.has(node.id);
    const isActive = node.id === activeId;
    const isHovered = node.id === hoveredId;
    const radius = isActive ? 11.5 : isHovered ? 9.5 : 8.5;

    if (activeGlow && isActive) {
      const glowRadius = radius + 3;
      const gradient = ctx.createRadialGradient(pos.x, pos.y, radius * 0.5, pos.x, pos.y, glowRadius);
      gradient.addColorStop(0, "rgba(26,26,24,0.9)");
      gradient.addColorStop(1, "rgba(26,26,24,0)");
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    const nodeAlpha = breatheAlpha != null ? breatheAlpha : 1;

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    if (softenUnvisited && !isVisited && !isActive) {
      ctx.globalAlpha = nodeAlpha;
      ctx.fillStyle = paper;
      ctx.strokeStyle = ink3;
      ctx.lineWidth = isHovered ? 1.5 : 0.8;
    } else {
      ctx.globalAlpha = nodeAlpha;
      ctx.fillStyle = isVisited || isActive ? ink : paper;
      ctx.strokeStyle = ink;
      ctx.lineWidth = isHovered ? 2 : 1.3;
    }
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1;

    if (showLabels) {
      const isRevealed = isVisited || isHovered;
      const labelText = isHovered && node.shortQ ? node.shortQ : node.label;
      const labelFontSize = isHovered ? "11px" : "11px";
      const fontWeight = isHovered ? "600" : "normal";
      ctx.font = `${fontWeight} ${labelFontSize} system-ui, -apple-system, Segoe UI, sans-serif`;
      ctx.fillStyle = isHovered ? ink : isVisited ? ink : ink4;
      ctx.globalAlpha = isHovered ? 1 : isVisited ? 0.85 : 0.4;
      ctx.textBaseline = "middle";
      const alignRight = node.x > 0.68;
      ctx.textAlign = alignRight ? "right" : "left";
      const offset = alignRight ? -14 : 14;
      ctx.fillText(labelText, pos.x + offset, pos.y);
      ctx.globalAlpha = 1;
    }
  });
};

const ENTRY_QUESTIONS = {
  "next-word": "What is an LLM actually doing when it \"talks\" to you?",
  "averaging-problem": "If you learn from a million essays, do you write like the best one or the average one?",
  "the-shaping": "What happened between \"raw autocomplete\" and \"helpful assistant\"?",
  "weight-of-words": "How does a model learn from trillions of words?",
  quality: "When we say a model's output is \"good,\" who decides?",
  "understanding-illusion": "Does the model \"understand\" what it's saying?",
  "practical-guide": "So what do I actually do with all this?",
  "tool-user": "What happens when the model can use tools?",
  "algorithm-as-muse": "When AI helps create art, who is the artist?",
  "echoes-of-the-past": "What happens when AI reads history through its own biases?",
  "learning-machines-learning-humans": "What happens to learning when AI has all the answers?",
  "automation-of-cognition": "What happens when machines can do the thinking?",
  "black-box-oracle": "How do you trust a decision you can't explain?",
  "digital-footprints": "What does AI cost the planet?",
  "artificial-brain": "Is an artificial neural network really anything like a brain?",
  "empathy-machine": "Can a machine that simulates empathy actually help \u2014 or harm?",
  "near-zero-cost-impact": "What happens when the cost of producing everything approaches zero?",
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const buildSimpleConstellation = (currentId, visited, whisperQuestions) => {
  const size = 320;
  const canvas = h("canvas", {
    role: "img",
    "aria-label": "Constellation map of connected plateaus",
  });
  const wrap = h("div", { class: "simple-constellation" }, canvas);

  const connectedIds = new Set();
  GRAPH.edges.forEach(([a, b]) => {
    if (a === currentId) connectedIds.add(b);
    if (b === currentId) connectedIds.add(a);
  });

  const neighbors = GRAPH.nodes.filter((n) => connectedIds.has(n.id));
  const centerNode = getPlateau(currentId);
  if (!centerNode || neighbors.length === 0) return wrap;

  const ratio = scaleCanvas(canvas, size, size);
  const ctx = canvas.getContext("2d");
  if (!ctx) return wrap;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const styles = getComputedStyle(document.documentElement);
  const ink = styles.getPropertyValue("--ink").trim();
  const ink2 = styles.getPropertyValue("--ink2").trim();
  const ink3 = styles.getPropertyValue("--ink3").trim();
  const ink4 = styles.getPropertyValue("--ink4").trim();

  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;

  neighbors.forEach((neighbor, i) => {
    const angle = (i / neighbors.length) * Math.PI * 2 - Math.PI / 2;
    const nx = cx + Math.cos(angle) * radius;
    const ny = cy + Math.sin(angle) * radius;

    ctx.strokeStyle = ink4;
    ctx.lineWidth = 1;
    ctx.globalAlpha = visited.has(neighbor.id) ? 0.3 : 0.1;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(nx, ny);
    ctx.stroke();
    ctx.globalAlpha = 1;

    const nodeRadius = 5;
    ctx.beginPath();
    ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
    if (visited.has(neighbor.id)) {
      ctx.fillStyle = ink;
      ctx.fill();
    } else {
      ctx.strokeStyle = ink3;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    const whisper = whisperQuestions.find((w) => w.to === neighbor.id);
    const label = whisper ? whisper.text : neighbor.title;
    ctx.font = "italic 10px Lora, Georgia, serif";
    ctx.fillStyle = ink2;
    ctx.textAlign = Math.cos(angle) >= 0 ? "left" : "right";
    ctx.textBaseline = "middle";
    const labelX = nx + (Math.cos(angle) >= 0 ? 10 : -10);
    const labelY = ny;
    const maxW = size * 0.3;
    ctx.fillText(label, labelX, labelY, maxW);
  });

  const centerRadius = 7;
  ctx.beginPath();
  ctx.arc(cx, cy, centerRadius, 0, Math.PI * 2);
  ctx.fillStyle = ink;
  ctx.fill();

  ctx.font = "600 11px Lora, Georgia, serif";
  ctx.fillStyle = ink;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(centerNode.title, cx, cy + centerRadius + 6);

  return wrap;
};
