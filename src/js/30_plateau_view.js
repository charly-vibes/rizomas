
const buildPlateauView = (state, plateauId) => {
  const plateau = getPlateau(plateauId);
  const entryQuestion = LOCALE.entryQuestions[plateauId] || "";
  const engagementEl = buildEngagementState(state, plateauId);
  const retrievalMoment = buildRetrievalMoment(state, plateauId);
  const visited = new Set(state.v);

  const onSeedOpen = (seedId) => {
    if (recordSeedOpen(state, plateauId, seedId)) {
      const eg = state.eg[plateauId];
      if (eg) engagementEl.textContent = LOCALE.ui.seedsExplored(eg.opened, eg.total);
    }
  };

  let cleanup = () => {};
  const main = h(
    "main",
    { class: "plateau view" },
    h("a", { class: "back-link", href: "#/" }, LOCALE.ui.backToMap),
    h("h1", null, plateau ? plateau.title : LOCALE.ui.plateauFallback),
    entryQuestion ? h("p", { class: "entry-question" }, entryQuestion) : null
  );
  if (retrievalMoment) main.appendChild(retrievalMoment);

  const ctx = { state, plateauId, onSeedOpen };
  const scrollyLocale = LOCALE.scrolly[plateauId];
  const steps = scrollyLocale.steps.map(({ content }) => (step) => {
    step.appendChild(renderContent(content, ctx));
  });

  const vizBuilders = {
    "next-word": buildVizNextWord,
    "averaging-problem": buildVizAveragingProblem,
    "the-shaping": buildVizShaping,
    "near-zero-cost-impact": buildVizNearZeroCostImpact,
    "digital-footprints": buildVizDigitalFootprints,
    "automation-of-cognition": buildVizAutomationOfCognition,
    "algorithm-as-muse": buildVizAlgorithmAsMuse,
  };
  const vizBuilder = vizBuilders[plateauId];
  const viz = vizBuilder ? vizBuilder(state) : null;

  const scrolly = buildScrolly({
    steps,
    whispers: scrollyLocale.whispers,
    questionCards: LOCALE.questionCards[plateauId] || [],
    vizContent: viz ? viz.element : undefined,
    scrubUpdate: viz ? viz.scrubUpdate : undefined,
    onStepChange: viz ? viz.onStep : undefined,
    state,
    plateauId,
  });
  main.append(scrolly.section, engagementEl);

  const totalInlineSeeds = scrolly.section.querySelectorAll(".inline-seed-button").length;
  initEngagement(state, plateauId, totalInlineSeeds);
  engagementEl.textContent = LOCALE.ui.seedsExplored((state.eg[plateauId] || {}).opened || 0, totalInlineSeeds);
  cleanup = () => {
    scrolly.cleanup();
    if (viz && viz.cleanup) viz.cleanup();
  };

  return { view: main, cleanup };
};
