const GRAPH = {
  nodes: [
    { id: "next-word", title: "The Next Word", label: "Next Word", shortQ: "What does it do when it talks?", x: 0.42, y: 0.06 },
    { id: "weight-of-words", title: "The Weight of Words", label: "Weight", shortQ: "How does it learn from words?", x: 0.28, y: 0.18 },
    { id: "algorithm-as-muse", title: "The Algorithm as Muse", label: "Muse", shortQ: "When AI creates art, who's the artist?", x: 0.68, y: 0.12 },
    { id: "averaging-problem", title: "The Averaging Problem", label: "Averaging", shortQ: "Best essay or average essay?", x: 0.55, y: 0.22 },
    { id: "the-shaping", title: "The Shaping", label: "Shaping", shortQ: "Autocomplete to assistant?", x: 0.15, y: 0.34 },
    { id: "understanding-illusion", title: "The Understanding Illusion", label: "Understanding", shortQ: "Does it understand?", x: 0.85, y: 0.28 },
    { id: "learning-machines-learning-humans", title: "Learning Machines, Learning Humans", label: "Learning AI", shortQ: "What happens when AI has all answers?", x: 0.05, y: 0.44 },
    { id: "echoes-of-the-past", title: "Echoes of the Past", label: "Echoes", shortQ: "What if AI reads history with bias?", x: 0.92, y: 0.42 },
    { id: "tool-user", title: "The Tool-User", label: "Tool-User", shortQ: "What if it can use tools?", x: 0.30, y: 0.56 },
    { id: "quality", title: "What Is Quality?", label: "Quality", shortQ: "Who decides what's good?", x: 0.72, y: 0.48 },
    { id: "black-box-oracle", title: "The Black Box Oracle", label: "Black Box", shortQ: "Trust a decision you can't explain?", x: 0.08, y: 0.55 },
    { id: "near-zero-cost-impact", title: "The Near-Zero Cost Impact", label: "Near-Zero", shortQ: "When production cost approaches zero?", x: 0.52, y: 0.62 },
    { id: "practical-guide", title: "The Field Guide", label: "Field Guide", shortQ: "What do I actually do?", x: 0.38, y: 0.74 },
    { id: "automation-of-cognition", title: "The Automation of Cognition", label: "Automation", shortQ: "When machines do the thinking?", x: 0.12, y: 0.72 },
    { id: "digital-footprints", title: "Digital Footprints", label: "Footprints", shortQ: "What does AI cost the planet?", x: 0.62, y: 0.82 },
    { id: "artificial-brain", title: "The Artificial Brain", label: "Art. Brain", shortQ: "Is a neural network like a brain?", x: 0.35, y: 0.90 },
    { id: "empathy-machine", title: "The Empathy Machine?", label: "Empathy", shortQ: "Can simulated empathy help or harm?", x: 0.78, y: 0.68 },
  ],
  edges: [
    ["next-word", "averaging-problem"],
    ["next-word", "understanding-illusion"],
    ["next-word", "weight-of-words"],
    ["next-word", "learning-machines-learning-humans"],
    ["next-word", "algorithm-as-muse"],
    ["next-word", "artificial-brain"],
    ["next-word", "empathy-machine"],
    ["averaging-problem", "the-shaping"],
    ["averaging-problem", "quality"],
    ["averaging-problem", "weight-of-words"],
    ["averaging-problem", "practical-guide"],
    ["averaging-problem", "understanding-illusion"],
    ["averaging-problem", "near-zero-cost-impact"],
    ["the-shaping", "quality"],
    ["the-shaping", "practical-guide"],
    ["the-shaping", "tool-user"],
    ["the-shaping", "weight-of-words"],
    ["the-shaping", "learning-machines-learning-humans"],
    ["the-shaping", "black-box-oracle"],
    ["the-shaping", "automation-of-cognition"],
    ["the-shaping", "algorithm-as-muse"],
    ["the-shaping", "near-zero-cost-impact"],
    ["quality", "understanding-illusion"],
    ["quality", "practical-guide"],
    ["quality", "echoes-of-the-past"],
    ["quality", "black-box-oracle"],
    ["quality", "empathy-machine"],
    ["quality", "digital-footprints"],
    ["quality", "near-zero-cost-impact"],
    ["understanding-illusion", "practical-guide"],
    ["understanding-illusion", "artificial-brain"],
    ["understanding-illusion", "empathy-machine"],
    ["understanding-illusion", "echoes-of-the-past"],
    ["understanding-illusion", "tool-user"],
    ["understanding-illusion", "near-zero-cost-impact"],
    ["practical-guide", "tool-user"],
    ["practical-guide", "weight-of-words"],
    ["tool-user", "automation-of-cognition"],
    ["tool-user", "digital-footprints"],
    ["automation-of-cognition", "digital-footprints"],
    ["automation-of-cognition", "black-box-oracle"],
    ["automation-of-cognition", "near-zero-cost-impact"],
    ["black-box-oracle", "empathy-machine"],
    ["black-box-oracle", "near-zero-cost-impact"],
    ["echoes-of-the-past", "digital-footprints"],
    ["digital-footprints", "near-zero-cost-impact"],
  ],
};

const STORAGE_KEY = "le5";
const app = document.querySelector("#app");
let activeCleanup = () => {};

const h = (tag, attrs, ...children) => {
  const el = document.createElement(tag);
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === null || value === undefined) return;
      if (key === "class") {
        el.className = value;
        return;
      }
      if (key === "style" && typeof value === "object") {
        Object.assign(el.style, value);
        return;
      }
      if (key.startsWith("on") && typeof value === "function") {
        el.addEventListener(key.slice(2), value);
        return;
      }
      el.setAttribute(key, value);
    });
  }
  children.flat().forEach((child) => {
    if (child === null || child === undefined) return;
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });
  return el;
};

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { v: [], tr: [], si: {}, eg: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.v) || !Array.isArray(parsed.tr)) {
      throw new Error("Invalid state");
    }
    return {
      v: parsed.v,
      tr: parsed.tr,
      si: parsed.si && typeof parsed.si === "object" ? parsed.si : {},
      eg: parsed.eg && typeof parsed.eg === "object" ? parsed.eg : {},
    };
  } catch (error) {
    return { v: [], tr: [], si: {}, eg: {} };
  }
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const recordVisit = (state, plateauId) => {
  if (!state.v.includes(plateauId)) {
    state.v.push(plateauId);
  }
  state.tr.push({ p: plateauId, t: Date.now() });
  saveState(state);
};

const recordSeedOpen = (state, plateauId, seedId) => {
  if (!state.si[plateauId]) state.si[plateauId] = [];
  if (state.si[plateauId].includes(seedId)) return false;
  state.si[plateauId].push(seedId);
  if (!state.eg[plateauId]) state.eg[plateauId] = { opened: 0, total: 0 };
  state.eg[plateauId].opened++;
  saveState(state);
  return true;
};

