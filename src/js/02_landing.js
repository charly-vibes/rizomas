
const buildLandingMap = (visitedSet, traversedEdges) => {
  const canvas = h("canvas", {
    role: "img",
    "aria-label": "Navigation map of LLM plateaus",
  });
  const overlay = h("div", { class: "map-overlay" });
  const wrap = h("div", { class: "map-wrap" }, canvas, overlay);
  const linkMap = new Map();
  const hitRadius = 22;
  let lastSize = { width: 0, height: 0 };
  let hoveredId = null;

  GRAPH.nodes.forEach((node) => {
    const fullQ = ENTRY_QUESTIONS[node.id] || node.title;
    const link = h("a", {
      class: "map-link",
      href: `#/${node.id}`,
      title: fullQ,
      "aria-label": `${fullQ} — ${node.title}, ${visitedSet.has(node.id) ? "visited" : "not visited"}`,
    });
    overlay.appendChild(link);
    linkMap.set(node.id, link);
  });

  const resizeCanvas = () => {
    const rect = wrap.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    lastSize = { width: Math.floor(rect.width), height: Math.floor(rect.height) };
    return lastSize;
  };

  const draw = () => {
    if (!resizeCanvas()) return;
    drawGraph({
      canvas,
      width: lastSize.width,
      height: lastSize.height,
      visited: visitedSet,
      showLabels: true,
      hoveredId,
      curvedEdges: true,
      softenUnvisited: true,
      traversedEdges,
    });

    GRAPH.nodes.forEach((node) => {
      const link = linkMap.get(node.id);
      if (!link) return;
      const pos = getNodePx(node, lastSize.width, lastSize.height);
      link.style.left = `${pos.x}px`;
      link.style.top = `${pos.y}px`;
      const fullQ = ENTRY_QUESTIONS[node.id] || node.title;
      link.setAttribute(
        "aria-label",
        `${fullQ} — ${node.title}, ${visitedSet.has(node.id) ? "visited" : "not visited"}`
      );
    });
  };

  const findHitNode = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return GRAPH.nodes.find((node) => {
      const pos = getNodePx(node, lastSize.width, lastSize.height);
      return Math.hypot(x - pos.x, y - pos.y) <= hitRadius;
    });
  };

  const handleMouseMove = (event) => {
    const hit = findHitNode(event);
    const newId = hit ? hit.id : null;
    canvas.style.cursor = newId ? "pointer" : "default";
    if (newId !== hoveredId) {
      hoveredId = newId;
      draw();
    }
  };

  const handleMouseLeave = () => {
    if (hoveredId) {
      hoveredId = null;
      draw();
    }
  };

  const handleClick = (event) => {
    const hit = findHitNode(event);
    if (hit) {
      location.hash = `#/${hit.id}`;
    }
  };

  const observer = new ResizeObserver(draw);
  observer.observe(wrap);
  wrap.addEventListener("mousemove", handleMouseMove);
  wrap.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("click", handleClick);
  draw();

  const cleanup = () => {
    observer.disconnect();
    wrap.removeEventListener("mousemove", handleMouseMove);
    wrap.removeEventListener("mouseleave", handleMouseLeave);
    canvas.removeEventListener("click", handleClick);
  };

  return { wrap, cleanup };
};

const buildLandingView = (state) => {
  const visitedSet = new Set(state.v);
  const header = h(
    "div",
    { class: "landing-header" },
    h("h1", null, "How LLMs Actually Work"),
    h("p", { class: "subtitle" }, "Seventeen essays on prediction, memory, and the strange logic of machines."),
    h(
      "p",
      null,
      "This is a network you can enter anywhere.",
      " Follow a node to see how the ideas braid together."
    )
  );

  const { wrap: mapWrap, cleanup } = buildLandingMap(visitedSet, state.te);

  const fallbackNav = h("nav", {
    class: "visually-hidden",
    "aria-label": "All essays",
  });
  const fallbackList = h("ul");
  GRAPH.nodes.forEach((node) => {
    fallbackList.appendChild(
      h("li", null, h("a", { href: `#/${node.id}` }, node.title))
    );
  });
  fallbackNav.appendChild(fallbackList);

  const mapSection = h(
    "div",
    { class: "landing-map" },
    mapWrap,
    fallbackNav,
    h("p", { class: "map-note" }, "Click or tab to any node to begin.")
  );

  const main = h("main", { class: "landing view" }, header, mapSection);
  return { view: main, cleanup };
};
