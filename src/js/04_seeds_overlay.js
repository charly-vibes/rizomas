
let seedPopoverId = 0;
const buildInlineSeed = ({ id, label, detail, type, danglingTo, danglingText, state, plateauId, onOpen }) => {
  const popoverDomId = `seed-popover-${seedPopoverId++}`;
  const attrs = {
    class: "inline-seed-button",
    type: "button",
    "aria-expanded": "false",
    "aria-controls": popoverDomId,
  };
  if (type) attrs["data-seed-type"] = type;
  const button = h("button", attrs, label);

  const contentChildren = typeof detail === "function" ? detail(state) : detail;
  const contentEl = h("div", { class: "inline-seed-popover-content", "aria-live": "polite" });
  if (typeof contentChildren === "string") {
    contentEl.appendChild(document.createTextNode(contentChildren));
  } else if (contentChildren instanceof Node) {
    contentEl.appendChild(contentChildren);
  } else if (Array.isArray(contentChildren)) {
    contentChildren.forEach((c) => {
      if (typeof c === "string") contentEl.appendChild(document.createTextNode(c));
      else if (c instanceof Node) contentEl.appendChild(c);
    });
  }

  if (type === "dangling" && danglingTo && danglingText) {
    contentEl.appendChild(document.createTextNode(" "));
    contentEl.appendChild(
      h("a", { class: "dangling-link", href: `#/${danglingTo}` }, danglingText)
    );
  }

  const popover = h(
    "div",
    { class: "inline-seed-popover", id: popoverDomId, role: "region", "aria-hidden": "true" },
    contentEl
  );
  const wrapper = h("span", { class: "inline-seed" }, button);
  document.body.appendChild(popover);

  const positionPopover = () => {
    const rect = button.getBoundingClientRect();
    const popW = 360;
    const popH = popover.offsetHeight || 200;
    let top = rect.bottom + 6;
    let left = rect.left + rect.width / 2 - popW / 2;
    if (left < 8) left = 8;
    if (left + popW > window.innerWidth - 8) left = window.innerWidth - popW - 8;
    if (top + popH > window.innerHeight - 8) {
      top = rect.top - popH - 6;
    }
    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  };

  const closePopover = () => {
    button.setAttribute("aria-expanded", "false");
    popover.classList.remove("is-open");
    popover.setAttribute("aria-hidden", "true");
    document.removeEventListener("click", outsideClick, true);
    document.removeEventListener("keydown", escClose);
    window.removeEventListener("scroll", onScroll, true);
  };

  const onScroll = () => {
    positionPopover();
  };

  const outsideClick = (e) => {
    if (!popover.contains(e.target) && e.target !== button) {
      closePopover();
    }
  };

  const escClose = (e) => {
    if (e.key === "Escape") closePopover();
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closePopover();
    } else {
      document.querySelectorAll(".inline-seed-popover.is-open").forEach((p) => {
        p.classList.remove("is-open");
        p.setAttribute("aria-hidden", "true");
      });
      document.querySelectorAll('.inline-seed-button[aria-expanded="true"]').forEach((b) => {
        b.setAttribute("aria-expanded", "false");
      });
      positionPopover();
      button.setAttribute("aria-expanded", "true");
      popover.classList.add("is-open");
      popover.setAttribute("aria-hidden", "false");
      requestAnimationFrame(() => {
        document.addEventListener("click", outsideClick, true);
        document.addEventListener("keydown", escClose);
        window.addEventListener("scroll", onScroll, true);
      });
      if (onOpen && id) onOpen(id);
    }
  });

  return wrapper;
};

const buildOverlay = (state) => {
  const overlay = h("div", {
    class: "rhizome-overlay",
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": "true",
    "aria-label": "Navigate to another essay",
  });
  const backdrop = h("div", { class: "overlay-backdrop" });
  const panel = h("div", { class: "overlay-panel" });
  const closeButton = h("button", {
    class: "overlay-close",
    type: "button",
    "aria-label": "Close navigation map",
  }, "Close");
  const heading = h("p", {
    style: {
      margin: "0 0 12px 0",
      color: "var(--ink2)",
      fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
      fontSize: "0.75rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  }, "Jump to an essay");
  const mapWrap = h("div", { class: "overlay-map" });
  const canvas = h("canvas", {
    role: "img",
    "aria-label": "Full navigation map of all plateaus \u2014 click a node to navigate",
  });
  const linkLayer = h("div", { class: "overlay-links" });

  mapWrap.append(canvas, linkLayer);
  panel.append(closeButton, heading, mapWrap);
  overlay.append(backdrop, panel);

  let visited = new Set(state.v);
  let trailNodes = getTrailSegments(state.tr);
  let traversedEdges = state.te || deriveTraversedEdges(state.tr);
  const linkMap = new Map();
  const hitRadius = 22;
  let lastSize = { width: 0, height: 0 };
  let hoveredId = null;

  GRAPH.nodes.forEach((node) => {
    const link = h("a", {
      class: "overlay-link",
      href: `#/${node.id}`,
      role: "link",
    });
    linkLayer.appendChild(link);
    linkMap.set(node.id, link);
  });

  const redraw = () => {
    if (!lastSize.width || !lastSize.height) return;
    drawGraph({
      canvas,
      width: lastSize.width,
      height: lastSize.height,
      visited,
      showLabels: true,
      showTrail: true,
      trailNodes,
      hoveredId,
      curvedEdges: true,
      traversedEdges,
    });
  };

  const resize = () => {
    const rect = mapWrap.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    lastSize = { width: rect.width, height: rect.height };
    redraw();
    GRAPH.nodes.forEach((node) => {
      const link = linkMap.get(node.id);
      if (!link) return;
      const pos = getNodePx(node, rect.width, rect.height);
      link.style.left = `${pos.x}px`;
      link.style.top = `${pos.y}px`;
      link.setAttribute(
        "aria-label",
        `${node.title}, ${visited.has(node.id) ? "visited" : "not visited"}`
      );
    });
  };

  const handleMouseMove = (event) => {
    const rect = mapWrap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = GRAPH.nodes.find((node) => {
      const pos = getNodePx(node, lastSize.width, lastSize.height);
      return Math.hypot(x - pos.x, y - pos.y) <= hitRadius;
    });
    const newId = hit ? hit.id : null;
    canvas.style.cursor = newId ? "pointer" : "default";
    if (newId !== hoveredId) {
      hoveredId = newId;
      redraw();
    }
  };

  const handleMouseLeave = () => {
    if (hoveredId) {
      hoveredId = null;
      redraw();
    }
  };

  const handleClick = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const hit = GRAPH.nodes.find((node) => {
      const pos = getNodePx(node, lastSize.width, lastSize.height);
      const dx = x - pos.x;
      const dy = y - pos.y;
      return Math.hypot(dx, dy) <= hitRadius;
    });
    if (hit) {
      location.hash = `#/${hit.id}`;
    }
  };

  const observer = new ResizeObserver(resize);
  observer.observe(mapWrap);
  mapWrap.addEventListener("mousemove", handleMouseMove);
  mapWrap.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("click", handleClick);
  resize();

  const focusables = Array.from(linkLayer.querySelectorAll("a")).concat([closeButton]);

  const updateState = (newState) => {
    visited = new Set(newState.v);
    trailNodes = getTrailSegments(newState.tr);
    traversedEdges = newState.te || deriveTraversedEdges(newState.tr);
    resize();
  };

  return {
    overlay,
    backdrop,
    closeButton,
    focusables,
    updateState,
    cleanup: () => {
      observer.disconnect();
      mapWrap.removeEventListener("mousemove", handleMouseMove);
      mapWrap.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    },
  };
};

const getFocusable = (container) =>
  Array.from(container.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])"));

const trapFocus = (container, event) => {
  if (event.key !== "Tab") return;
  const focusable = getFocusable(container);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};
