const LOCALE = {
  lang: "en",
  dir: "ltr",
  pageTitle: "How LLMs Actually Work",

  meta: {
    noscriptTitle: "How LLMs Actually Work",
    noscriptSubtitle: "Seventeen essays on prediction, memory, and the strange logic of machines.",
    noscriptNavLabel: "All essays",
    noscriptJsRequired: "This site requires JavaScript for its interactive features.",
  },

  landing: {
    h1: "How LLMs Actually Work",
    subtitle: "Seventeen essays on prediction, memory, and the strange logic of machines.",
    introLines: [
      "This is a network you can enter anywhere.",
      " Follow a node to see how the ideas braid together.",
    ],
    mapNote: "Click or tab to any node to begin.",
    mapAriaLabel: "Navigation map of LLM plateaus",
    allEssaysAriaLabel: "All essays",
  },

  ui: {
    openNav: "Open navigation map",
    closeNav: "Close navigation map",
    jumpToEssay: "Jump to an essay",
    navigateToEssay: "Navigate to another essay",
    backToMap: "\u2190 Back to map",
    visited: "visited",
    notVisited: "not visited",
    constellationAriaLabel: "Constellation map of connected plateaus",
    fullNavAriaLabel: "Full navigation map of all plateaus \u2014 click a node to navigate",
    seedsExplored: (opened, total) => `${opened} of ${total} seeds explored`,
    plateauFallback: "Plateau",
    probBarsAriaLabel: "Probability bars for candidate next tokens",
    temperatureAriaLabel: "Temperature: controls creativity of word choice",
    dismissReflection: "Dismiss this reflection prompt",
    reflectionAriaLabel: "A reflection on what you\u2019ve read so far",
    langSwitcherLabel: "Switch language",
    vizSentence: ["The", "model", "looks", "at", "everything", "before", "and", "predicts", "the", "next"],
    vizCandidates: [
      { token: "word", prob: 0.41 },
      { token: "token", prob: 0.28 },
      { token: "step", prob: 0.14 },
      { token: "thing", prob: 0.09 },
      { token: "move", prob: 0.05 },
      { token: "one", prob: 0.03 },
    ],
  },

  nodes: {
    "next-word": { title: "The Next Word", label: "Next Word", shortQ: "What does it do when it talks?" },
    "weight-of-words": { title: "The Weight of Words", label: "Weight", shortQ: "How does it learn from words?" },
    "algorithm-as-muse": { title: "The Algorithm as Muse", label: "Muse", shortQ: "When AI creates art, who\u2019s the artist?" },
    "averaging-problem": { title: "The Averaging Problem", label: "Averaging", shortQ: "Best essay or average essay?" },
    "the-shaping": { title: "The Shaping", label: "Shaping", shortQ: "Autocomplete to assistant?" },
    "understanding-illusion": { title: "The Understanding Illusion", label: "Understanding", shortQ: "Does it understand?" },
    "learning-machines-learning-humans": { title: "Learning Machines, Learning Humans", label: "Learning AI", shortQ: "What happens when AI has all answers?" },
    "echoes-of-the-past": { title: "Echoes of the Past", label: "Echoes", shortQ: "What if AI reads history with bias?" },
    "tool-user": { title: "The Tool-User", label: "Tool-User", shortQ: "What if it can use tools?" },
    "quality": { title: "What Is Quality?", label: "Quality", shortQ: "Who decides what\u2019s good?" },
    "black-box-oracle": { title: "The Black Box Oracle", label: "Black Box", shortQ: "Trust a decision you can\u2019t explain?" },
    "near-zero-cost-impact": { title: "The Near-Zero Cost Impact", label: "Near-Zero", shortQ: "When production cost approaches zero?" },
    "practical-guide": { title: "The Field Guide", label: "Field Guide", shortQ: "What do I actually do?" },
    "automation-of-cognition": { title: "The Automation of Cognition", label: "Automation", shortQ: "When machines do the thinking?" },
    "digital-footprints": { title: "Digital Footprints", label: "Footprints", shortQ: "What does AI cost the planet?" },
    "artificial-brain": { title: "The Artificial Brain", label: "Art. Brain", shortQ: "Is a neural network like a brain?" },
    "empathy-machine": { title: "The Empathy Machine?", label: "Empathy", shortQ: "Can simulated empathy help or harm?" },
  },

  entryQuestions: {
    "next-word": "What is an LLM actually doing when it \u201ctalks\u201d to you?",
    "averaging-problem": "If you learn from a million essays, do you write like the best one or the average one?",
    "the-shaping": "What happened between \u201craw autocomplete\u201d and \u201chelpful assistant\u201d?",
    "weight-of-words": "How does a model learn from trillions of words?",
    "quality": "When we say a model\u2019s output is \u201cgood,\u201d who decides?",
    "understanding-illusion": "Does the model \u201cunderstand\u201d what it\u2019s saying?",
    "practical-guide": "So what do I actually do with all this?",
    "tool-user": "What happens when the model can use tools?",
    "algorithm-as-muse": "When AI helps create art, who is the artist?",
    "echoes-of-the-past": "What happens when AI reads history through its own biases?",
    "learning-machines-learning-humans": "What happens to learning when AI has all the answers?",
    "automation-of-cognition": "What happens when machines can do the thinking?",
    "black-box-oracle": "How do you trust a decision you can\u2019t explain?",
    "digital-footprints": "What does AI cost the planet?",
    "artificial-brain": "Is an artificial neural network really anything like a brain?",
    "empathy-machine": "Can a machine that simulates empathy actually help \u2014 or harm?",
    "near-zero-cost-impact": "What happens when the cost of producing everything approaches zero?",
  },

  questionCards: {
    "next-word": [
      { question: "What patterns does the model learn first?", title: "The Weight of Words", to: "weight-of-words" },
      { question: "Why do prompts steer the average?", title: "The Averaging Problem", to: "averaging-problem" },
      { question: "How do models get nudged into assistants?", title: "The Shaping", to: "the-shaping" },
    ],
    "averaging-problem": [
      { question: "How does next-token prediction feel from inside?", title: "The Next Word", to: "next-word" },
      { question: "How do we steer a model\u2019s behavior?", title: "The Shaping", to: "the-shaping" },
      { question: "What can you do with all this?", title: "The Field Guide", to: "practical-guide" },
    ],
    "the-shaping": [
      { question: "How does pretraining plant the raw behavior?", title: "The Weight of Words", to: "weight-of-words" },
      { question: "Who defines what good looks like?", title: "What Is Quality?", to: "quality" },
      { question: "What happens when models become tool users?", title: "The Tool-User", to: "tool-user" },
    ],
    "weight-of-words": [
      { question: "What does next-token prediction feel like?", title: "The Next Word", to: "next-word" },
      { question: "How does alignment reshape the base model?", title: "The Shaping", to: "the-shaping" },
      { question: "Where do we apply these mechanics?", title: "The Field Guide", to: "practical-guide" },
    ],
    "quality": [
      { question: "Does the model understand or just sound fluent?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "How is the model shaped by human feedback?", title: "The Shaping", to: "the-shaping" },
      { question: "What should we do with these tools?", title: "The Field Guide", to: "practical-guide" },
    ],
    "understanding-illusion": [
      { question: "What kind of data forms the model?", title: "The Averaging Problem", to: "averaging-problem" },
      { question: "Who decides what quality means?", title: "What Is Quality?", to: "quality" },
      { question: "What do we do with the uncertainty?", title: "The Field Guide", to: "practical-guide" },
    ],
    "practical-guide": [
      { question: "How does the base model learn its patterns?", title: "The Weight of Words", to: "weight-of-words" },
      { question: "What does alignment optimize?", title: "The Shaping", to: "the-shaping" },
      { question: "What happens when models act on tools?", title: "The Tool-User", to: "tool-user" },
    ],
    "tool-user": [
      { question: "How do models pick their next action?", title: "The Next Word", to: "next-word" },
      { question: "Can models really understand their tools?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "How do we apply these behaviors?", title: "The Field Guide", to: "practical-guide" },
    ],
    "near-zero-cost-impact": [
      { question: "What happens when the average floods the market?", title: "The Averaging Problem", to: "averaging-problem" },
      { question: "Who decides what\u2019s worth producing at zero cost?", title: "What Is Quality?", to: "quality" },
      { question: "What does AI cost the planet when production is free?", title: "Digital Footprints", to: "digital-footprints" },
    ],
    "algorithm-as-muse": [
      { question: "How does prediction shape what gets created?", title: "The Next Word", to: "next-word" },
      { question: "How do human preferences shape creative AI?", title: "The Shaping", to: "the-shaping" },
      { question: "Who decides what\u2019s original?", title: "What Is Quality?", to: "quality" },
    ],
    "echoes-of-the-past": [
      { question: "Who decides which narratives are \u2018good\u2019?", title: "What Is Quality?", to: "quality" },
      { question: "Does the model understand the history it processes?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "What does AI cost the planet as it processes the past?", title: "Digital Footprints", to: "digital-footprints" },
    ],
    "learning-machines-learning-humans": [
      { question: "How does prediction relate to learning?", title: "The Next Word", to: "next-word" },
      { question: "Who decides what an AI tutor teaches?", title: "The Black Box Oracle", to: "black-box-oracle" },
      { question: "Is an artificial brain anything like a student\u2019s?", title: "The Artificial Brain", to: "artificial-brain" },
    ],
    "automation-of-cognition": [
      { question: "How does AI reshape behavior to be \u2018useful\u2019?", title: "The Shaping", to: "the-shaping" },
      { question: "What happens when models use tools?", title: "The Tool-User", to: "tool-user" },
      { question: "What does all this automation cost the planet?", title: "Digital Footprints", to: "digital-footprints" },
    ],
    "black-box-oracle": [
      { question: "How does the model learn its decision patterns?", title: "The Weight of Words", to: "weight-of-words" },
      { question: "Does the model understand its own decisions?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "How do human values get encoded into AI?", title: "The Shaping", to: "the-shaping" },
    ],
    "digital-footprints": [
      { question: "How much data goes into training a model?", title: "The Weight of Words", to: "weight-of-words" },
      { question: "What happens when automation scales without limit?", title: "The Automation of Cognition", to: "automation-of-cognition" },
      { question: "When production is near-zero cost, who pays?", title: "The Near-Zero Cost Impact", to: "near-zero-cost-impact" },
    ],
    "artificial-brain": [
      { question: "How does prediction work inside the model?", title: "The Next Word", to: "next-word" },
      { question: "Does structure imply understanding?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "Can simulated empathy be \u2018real\u2019 empathy?", title: "The Empathy Machine?", to: "empathy-machine" },
    ],
    "empathy-machine": [
      { question: "How does AI simulate conversation?", title: "The Next Word", to: "next-word" },
      { question: "Does the model understand emotions?", title: "The Understanding Illusion", to: "understanding-illusion" },
      { question: "Who decides what empathetic AI looks like?", title: "What Is Quality?", to: "quality" },
    ],
  },

  scrolly: {
    "next-word": {
      steps: [
        { content: [
          ["p", "A model predicts the ",
            { seed: true, id: "next-word", label: "next word",
              detail: "The model picks the most likely continuation given its context window. It does this repeatedly, one token at a time." },
            " by looking at the patterns it has seen before."],
        ] },
        { content: [
          ["p", "The distribution of possibilities is a landscape. Temperature lets you explore a wider ridge or a narrow groove."],
          { seed: true, id: "temperature", label: "Why does one number change the whole personality?",
            type: "dangling",
            detail: "Higher temperature flattens the distribution, making rarer words more likely. Lower temperature sharpens it toward the peak. A single scalar reshapes the entire probability surface \u2014 but that surface was shaped first by\u2014",
            danglingTo: "averaging-problem",
            danglingText: "a million essays, averaged into one landscape\u2026" },
        ] },
        { content: [
          ["p", "Every response is conditional on your prompt, but also on the model\u2019s training history."],
          { seed: true, id: "context-window", label: "context window",
            detail: (s) => s && s.v && s.v.includes("weight-of-words")
              ? "The model only sees a finite slice of text at once. You\u2019ve seen how training bakes structure into the weights\u2014the context window is where that structure meets the present moment."
              : "The model only sees a finite slice of text at once. It infers meaning within that window, not outside of it." },
        ] },
        { content: [
          ["p", "As you scroll, whispers appear: alternate paths through the rhizome."],
          { seed: true, id: "whispers", label: "whispers",
            detail: "These are the line-of-flight questions that will later become your navigation cards." },
        ] },
        { content: [
          ["p", "Every path forward is a prediction about what matters next."],
          { seed: true, id: "constellation", label: "constellation",
            type: "fourth-wall",
            detail: "You\u2019ve been scrolling through a sequence that felt linear. But the navigation cards below offer you multiple exits. Your reading path through this essay is already shaping what you\u2019ll encounter next\u2014just as context shapes what a model predicts." },
        ] },
      ],
      whispers: [
        { step: 1, text: "What does it average out?", to: "averaging-problem" },
        { step: 2, text: "Where did the style come from?", to: "weight-of-words" },
        { step: 3, text: "Can it be shaped?", to: "the-shaping" },
      ],
    },

    "averaging-problem": {
      steps: [
        { content: [
          ["p", "A language model learns from everything: textbooks, fan fiction, legal briefs, forum rants. It has to average all of them."],
          { seed: true, id: "the-average", label: "What does that average look like?",
            type: "question",
            detail: "Not the best writing, not the worst. A strange middle voice that can shift register on command, because it has encoded all registers simultaneously." },
        ] },
        { content: [
          ["p", "The prompt is a steering wheel. It tells the model which part of the distribution to sample from."],
          { seed: true, id: "steering", label: "steering",
            detail: (s) => s && s.v && s.v.includes("the-shaping")
              ? "You\u2019ve seen how RLHF reshapes behavior globally. Prompts do something complementary: they narrow the distribution locally, for this specific conversation."
              : "System prompts, few-shot examples, and conversational context all narrow the distribution. The model doesn\u2019t change\u2014but the region it samples from does." },
        ] },
        { content: [
          ["p", "Without a prompt, the model has no reason to prefer any particular style, tone, or register."],
          { seed: true, id: "base-model", label: "base model",
            type: "dangling",
            detail: "The base model is the raw average. It can continue any text in any direction. It\u2019s simultaneously a poet, a coder, a conspiracy theorist, and a technical writer. But someone decided that wasn\u2019t good enough\u2014",
            danglingTo: "the-shaping",
            danglingText: "and shaped it into something that feels like a helpful assistant\u2026" },
        ] },
        { content: [
          ["p", "The averaging problem isn\u2019t a flaw. It\u2019s the foundation everything else builds on."],
          { seed: true, id: "foundation", label: "foundation",
            type: "fourth-wall",
            detail: "Notice how each seed you\u2019ve opened has been narrowing your understanding\u2014collapsing the space of possible interpretations. You\u2019re doing what the model does: using context to converge on meaning." },
        ] },
        { content: [
          ["p", "The average isn\u2019t a flaw to fix. It\u2019s the surface everyone else sculpts."],
        ] },
      ],
      whispers: [
        { step: 1, text: "What structure hides in the average?", to: "weight-of-words" },
        { step: 2, text: "Who decides which average is good?", to: "quality" },
        { step: 3, text: "Does the model understand the average?", to: "understanding-illusion" },
      ],
    },

    "the-shaping": {
      steps: [
        { content: [
          ["p", "Between the raw model and the assistant you talk to, there\u2019s a shaping process."],
          { seed: true, id: "rlhf", label: "What is that process?",
            type: "question",
            detail: "RLHF\u2014reinforcement learning from human feedback. Humans rate outputs, and the model is nudged toward the highly rated ones. It\u2019s like training a reflex: not new knowledge, but new preferences." },
        ] },
        { content: [
          ["p", "The reward model is itself a neural network, trained to predict what humans would prefer."],
          { seed: true, id: "reward-model", label: "reward model",
            detail: (s) => s && s.v && s.v.includes("quality")
              ? "You\u2019ve thought about what quality means. The reward model is an attempt to compress all those competing definitions into a single score. You can see the problem."
              : "A second model learns to score outputs by predicting which one a human rater would pick. This score becomes the gradient signal for the base model." },
        ] },
        { content: [
          ["p", "The base model doesn\u2019t disappear. It\u2019s still there, underneath, like a river rerouted."],
          { seed: true, id: "jailbreaks", label: "jailbreaks",
            type: "dangling",
            detail: "When alignment breaks down, you glimpse the base model\u2014the raw distribution, unfiltered. This connects to something deeper about what the model \u2018understands\u2019\u2014",
            danglingTo: "understanding-illusion",
            danglingText: "whether the mask is all there is\u2026" },
        ] },
        { content: [
          ["p", "Shaping changes behavior, not knowledge. The model still knows everything it knew before."],
          { seed: true, id: "behavior-knowledge", label: "behavior vs. knowledge",
            type: "fourth-wall",
            detail: "You chose to read about shaping. That choice is already shaping your reading experience\u2014the seeds you\u2019ll see in future plateaus now have your history as context. Your path is configuring the rhizome." },
        ] },
        { content: [
          ["p", "The river is rerouted, but the water remembers where it used to flow."],
        ] },
      ],
      whispers: [
        { step: 1, text: "Where did the raw behavior come from?", to: "weight-of-words" },
        { step: 2, text: "Who chose what\u2019s good?", to: "quality" },
        { step: 3, text: "What can the shaped model do?", to: "tool-user" },
      ],
    },

    "near-zero-cost-impact": {
      steps: [
        { content: [
          ["p", "Once an AI model exists, the cost of producing one more essay, one more image, one more program approaches ",
            { seed: true, id: "zero-marginal-cost", label: "zero marginal cost",
              detail: "The situation where the cost of producing an additional unit of a good or service is effectively zero, often seen with digital products once initial development costs are covered." },
            ". Traditional pricing collapses. Business models scramble to adapt\u2014subscriptions, bundling, freemium\u2014anything to capture value when the product itself trends toward free."],
        ] },
        { content: [
          ["p", "The flood arrives. AI-generated text, code, and images proliferate across every domain. The volume overwhelms human capacity to process, filter, or verify."],
          { seed: true, id: "infobesity", label: "infobesity",
            detail: (s) => s && s.v && s.v.includes("averaging-problem")
              ? "You\u2019ve seen how the model averages all of its training data. Now that average is being reproduced at scale\u2014billions of outputs per day, each one a sample from that averaged distribution. The flood is the average, mass-produced."
              : "A state of being overwhelmed by the excessive amount of information available, leading to difficulty in processing and making decisions." },
        ] },
        { content: [
          ["p", "Abundance brings risk. ",
            { seed: true, id: "deepfakes", label: "Deepfakes",
              type: "dangling",
              detail: "Synthetic media\u2014videos, audio, images\u2014manipulated using AI to replace or generate content, often with malicious intent. When production cost is zero, the cost of disinformation is zero too. This connects to a deeper problem\u2014",
              danglingTo: "understanding-illusion",
              danglingText: "if the model doesn\u2019t understand truth, how could its outputs be trusted\u2026" },
            " erode trust. De-skilling hollows out expertise. Security vulnerabilities multiply in mass-produced code. The dashboard of risks grows faster than the capacity to monitor it."],
        ] },
        { content: [
          ["p", "This has happened before. The printing press displaced scribes but created publishers. The Industrial Revolution displaced weavers but created factories. The internet displaced gatekeepers but created platforms.",
            { seed: true, id: "goodharts-law", label: "Goodhart\u2019s Law",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "You\u2019ve thought about who defines quality. Goodhart\u2019s Law says: \u2018When a measure becomes a target, it ceases to be a good measure.\u2019 The metrics we use to optimize AI output will be gamed\u2014by the AI itself. Quality becomes a moving target."
                : "The principle stating that \u2018When a measure becomes a target, it ceases to be a good measure,\u2019 relevant to how AI optimization can lead to unintended outcomes." },
            " But the speed and cognitive scope of AI makes this shift uniquely disorienting. Previous revolutions transformed labor; this one transforms thought itself."],
        ] },
        { content: [
          ["p", "The strategies span every scale: individuals upskilling, educational systems reforming, regulators drafting frameworks like the EU AI Act."],
          { seed: true, id: "preparation", label: "Is preparation enough?",
            type: "fourth-wall",
            detail: "You\u2019ve scrolled through a cost curve collapsing, a content flood rising, a risk dashboard expanding, and centuries of historical precedent. Notice that each step made the problem feel larger. That\u2019s the honest shape of this question\u2014the strategies exist, but the gap between them and the speed of change is the real terrain you\u2019re navigating." },
        ] },
      ],
      whispers: [
        { step: 1, text: "How does this compare to the averaging problem?", to: "averaging-problem" },
        { step: 2, text: "What are the ethical concerns of mass AI content?", to: "quality" },
        { step: 3, text: "How is \u2018understanding\u2019 misused in misinformation?", to: "understanding-illusion" },
        { step: 4, text: "How does this change the shaping of society?", to: "the-shaping" },
      ],
    },

    "algorithm-as-muse": {
      steps: [
        { content: [
          ["p", "Large Language Models are increasingly becoming tools for human creativity. They can act as tireless assistants, helping to overcome ",
            { seed: true, id: "writers-block", label: "writer\u2019s block",
              detail: "A temporary inability to begin or continue a piece of writing, often due to lack of inspiration or anxiety. LLMs can provide prompts, drafts, and alternative framings to help overcome it." },
            ", generate novel ideas, draft initial content, and refine prose. For many, AI can serve as a muse, augmenting and amplifying human creative potential rather than replacing it. This co-creative process can lead to outputs perceived as more interesting, enjoyable, and well-written, especially for individuals seeking to enhance their creative confidence."],
        ] },
        { content: [
          ["p", "The rise of AI in creative fields introduces complex questions about originality and authorship. When AI generates content, can it be truly original, particularly if trained on vast amounts of existing copyrighted material? This widespread reliance on AI could potentially lead to a homogenization of creative output, diminishing the diversity of human expression. Furthermore, traditional ",
            { seed: true, id: "copyright-laws", label: "copyright laws",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "You\u2019ve thought about who defines quality. Copyright adds another layer: legal rights granted to the creator of an original work. But when the \u2018creator\u2019 is a statistical average of millions of creators, traditional authorship frameworks start to dissolve."
                : "Legal rights granted to the creator of an original work, giving them exclusive rights to its use and distribution. The application of these laws to AI-generated content is an evolving and contested area." },
            " typically require human authorship, leaving the status of AI-generated works in a legal gray area. Debates continue on whether the AI\u2019s developer, the AI itself, or the human who prompts the AI should be considered the author."],
        ] },
        { content: [
          ["p", "The co-creation dynamic between humans and AI also brings ethical dilemmas. These include issues surrounding intellectual property rights for AI-assisted creations, the commercialization of AI-generated art, and the broader impact on cultural norms and artistic integrity. A significant concern is that widespread AI use risks a ",
            { seed: true, id: "homogenization", label: "homogenization of creative output",
              type: "dangling",
              detail: "When millions of creators use the same models, outputs converge toward statistically popular styles. Diversity and uniqueness of creative expression diminish. This connects to something you may have noticed\u2014",
              danglingTo: "averaging-problem",
              danglingText: "the averaging problem, where the model\u2019s default is everyone\u2019s voice and no one\u2019s\u2026" },
            ", leading to a loss of individual artistic identity. Maintaining a distinct human creative voice in an increasingly AI-influenced landscape becomes a crucial challenge."],
        ] },
        { content: [
          ["p", "For effective and ethical co-creation, AI tools need to offer transparency and clear feedback mechanisms. Creators must understand how the AI is contributing and retain sufficient control over the creative process to steer the outcome towards their artistic vision. This shift necessitates a re-evaluation of the artist\u2019s role, moving from sole creator to a conductor of both human intuition and algorithmic input.",
            { seed: true, id: "the-conductor", label: "Who is the conductor?",
              type: "fourth-wall",
              detail: "You\u2019ve been reading an essay co-created with AI tools. Every sentence here was shaped by both human intention and algorithmic suggestion. The question of authorship isn\u2019t abstract\u2014it\u2019s the condition of the text you\u2019re reading right now." },
            " The future of art will involve navigating the balance between leveraging AI\u2019s capabilities and preserving the irreplaceable human spark that defines true creativity."],
        ] },
        { content: [
          ["p", "The question of authorship doesn\u2019t resolve. It just changes shape with every collaboration."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI prediction affect creative choice?", to: "next-word" },
        { step: 2, text: "What defines \u2018originality\u2019 in AI-assisted art?", to: "quality" },
        { step: 3, text: "How do human values influence creative AI?", to: "the-shaping" },
      ],
    },

    "echoes-of-the-past": {
      steps: [
        { content: [
          ["p", "Large Language Models offer unprecedented capabilities for historical analysis. They can process and digitize vast archives of historical records, extract granular information, and uncover previously hidden connections within enormous ",
            { seed: true, id: "textual-corpora", label: "textual corpora",
              detail: "Large, structured collections of digital texts used to train and analyze language models, often comprising books, articles, and historical documents spanning centuries and civilizations." },
            ". Historians can leverage LLMs to analyze national narratives, identify subtle linguistic shifts over time, and streamline laborious research processes, making historical inquiry more efficient and comprehensive than ever before. These tools allow for an exploration of the past on scales previously unimaginable."],
        ] },
        { content: [
          ["p", "Despite their analytical power, LLMs are inherently susceptible to perpetuating historical biases embedded within their training data. This data, often reflecting past societal norms, inequalities, and prejudices, can lead to skewed representations of history. If training data is predominantly built on ",
            { seed: true, id: "eurocentric", label: "Eurocentric narratives",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "You\u2019ve explored who decides what\u2019s \u2018good.\u2019 The same question applies to history: accounts centered on European cultures can marginalize other perspectives. The raters of quality and the writers of history share a blindspot."
                : "Historical accounts that primarily focus on European cultures and histories, potentially marginalizing or overlooking the experiences of other regions and peoples." },
            ", the model\u2019s outputs may reinforce dominant stories while omitting others. Such biases can manifest in subtle ways, from the portrayal of specific groups to the interpretation of events, impacting how the past is understood."],
        ] },
        { content: [
          ["p", "LLMs interpret historical data by identifying statistical patterns and relationships within their datasets, inferring meaning from unstructured text. However, this interpretation is heavily influenced by the inherent biases and gaps in their training data. This can lead to confident presentation of incorrect or fabricated information as historical fact\u2014",
            { seed: true, id: "hallucination-history", label: "Can AI hallucinate history?",
              type: "question",
              detail: "Yes. The model identifies statistical patterns, not historical truth. When data is sparse or contradictory, it fills gaps with plausible-sounding fabrications. Historians face the task of developing new methods of source criticism tailored to AI-generated content." },
            " Distinguishing between genuine insights and AI-generated inaccuracies becomes a critical challenge. Historians face the task of developing new methods of source criticism tailored to AI-generated content, scrutinizing its provenance and potential distortions."],
        ] },
        { content: [
          ["p", "The application of AI to history has the power to reshape historical narratives. It can create immersive experiences, visualize complex historical trends, and potentially facilitate ",
            { seed: true, id: "counter-storytelling", label: "counter-storytelling",
              type: "dangling",
              detail: "A narrative strategy that challenges dominant stories by presenting alternative perspectives from underrepresented groups. AI could facilitate this\u2014or it could reinforce the biases it was trained on. The question of who controls the algorithm leads to\u2014",
              danglingTo: "black-box-oracle",
              danglingText: "the accountability gap in algorithmic decisions\u2026" },
            " by amplifying marginalized voices. Conversely, there is a significant risk that AI could reinforce existing biases, leading to selective, censored, or overly simplistic historical accounts. The opacity of many AI methodologies, coupled with the power to control algorithmic levers, raises ethical dilemmas about who or what is \u2018rewriting history.\u2019"],
        ] },
        { content: [
          ["p", "The past doesn\u2019t change, but the lens keeps shifting."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI analyze vast amounts of text?", to: "weight-of-words" },
        { step: 2, text: "How do human biases enter AI systems?", to: "quality" },
        { step: 3, text: "Can AI truly \u2018understand\u2019 historical context?", to: "understanding-illusion" },
      ],
    },

    "learning-machines-learning-humans": {
      steps: [
        { content: [
          ["p", "Artificial Intelligence, particularly Large Language Models, is revolutionizing the educational landscape by offering unprecedented levels of ",
            { seed: true, id: "personalized-learning", label: "personalized learning",
              detail: "Educational approaches tailored to individual student needs, pace, and learning styles, often enabled by AI analysis of performance data. AI can act as a 24/7 tutor, answering questions and delivering materials in multiple formats." },
            ". AI can act as a 24/7 tutor, answering student questions, providing instant feedback, and delivering learning materials tailored to individual needs, paces, and learning styles. It can present content in various formats and even translate materials into multiple languages, fostering inclusivity in diverse classrooms. For educators, AI streamlines administrative burdens like creating quizzes, rubrics, and lesson plans, freeing them to focus on deeper student engagement and pedagogical innovation."],
        ] },
        { content: [
          ["p", "While personalized learning driven by AI promises improved academic outcomes and enhanced student engagement, it presents a double-edged sword. Tailoring content can optimize learning paths, leading to a more positive attitude toward education. However, an over-reliance on AI for quick answers risks diminishing critical thinking skills, as students might bypass the ",
            { seed: true, id: "cognitive-struggle", label: "cognitive struggle",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "You\u2019ve questioned whether models truly understand. The same question applies to students who outsource their thinking: the mental effort of deeply processing new information and solving problems is crucial for developing critical thinking. Without it, learning becomes shallow\u2014an echo of the model\u2019s own surface fluency."
                : "The mental effort and challenge involved in deeply processing new information and solving problems, crucial for developing critical thinking skills. When AI removes the struggle, it may also remove the learning." },
            " necessary for deep learning and analytical development. Concerns also arise regarding data privacy, the potential for academic dishonesty through AI use, and the challenge of ensuring students use AI to learn concepts rather than merely complete tasks."],
        ] },
        { content: [
          ["p", "The integration of AI necessitates a re-evaluation of how critical thinking is fostered and assessed. If AI reduces complex problems to readily available answers, it can inadvertently erode students\u2019 ability to engage in sustained analysis and argumentation. Conversely, AI can be a powerful tool for developing critical thinking by generating counterarguments, posing thought-provoking questions, or facilitating debates.",
            { seed: true, id: "redefining-thinking", label: "Does AI make us think less\u2014or differently?",
              type: "dangling",
              detail: "Studies suggest extensive LLM use can lower cognitive load but may lead to poorer reasoning. The challenge is designing curricula that use AI as a discussion partner \u2014 but the AI itself was shaped by human preferences, which means\u2014",
              danglingTo: "the-shaping",
              danglingText: "the values baked into the model are already teaching, whether we intend it or not\u2026" },
            " The challenge lies in designing curricula that encourage students to use AI as a discussion partner, pushing them towards deeper analysis rather than shortcutting the learning process."],
        ] },
        { content: [
          ["p", "The psychological effects of AI in education are profound for both students and teachers. For students, personalized learning can reduce anxiety and boost self-efficacy. However, over-reliance can lead to digital fatigue, technostress, and social isolation. For educators, the rapid integration of AI can induce ",
            { seed: true, id: "educational-anxiety", label: "educational anxiety",
              detail: "Stress or apprehension experienced by educators due to the rapid integration of new technologies like AI, requiring adaptation of pedagogy and mastery of new tools. The teacher must now navigate algorithmic fairness, misinformation, and student data privacy." },
            "\u2014demanding new technological proficiencies, pedagogical approaches, and navigation of complex ethical issues like algorithmic fairness and student data privacy. The role of the teacher evolves from a disseminator of information to a facilitator, mentor, and guide in this new AI-augmented learning environment."],
        ] },
        { content: [
          ["p", "The struggle is the learning. Remove it, and you remove the thing you were trying to teach."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI prediction relate to student learning?", to: "next-word" },
        { step: 2, text: "What are the ethical concerns of AI in education?", to: "black-box-oracle" },
        { step: 3, text: "How does AI \u2018learn\u2019 versus human learning?", to: "artificial-brain" },
      ],
    },

    "automation-of-cognition": {
      steps: [
        { content: [
          ["p", "Large Language Models are introducing a fundamental shift in the labor market, particularly affecting ",
            { seed: true, id: "white-collar-jobs", label: "white-collar jobs",
              detail: "Occupations traditionally involving intellectual or administrative tasks\u2014data analysis, content generation, legal research, medical inquiries\u2014now increasingly impacted by AI automation. The shift signals a potential reduction in demand for certain roles." },
            ". Historically, technological advancements often boosted higher-paying, skilled jobs. However, LLMs are now capable of automating complex cognitive tasks previously exclusive to human intellect, from data analysis and content generation to basic legal and medical inquiries. While this can lead to increased productivity, it also signals a potential reduction in demand for certain roles, requiring workers to adapt their skills towards critical evaluation, strategic thinking, and effective AI guidance."],
        ] },
        { content: [
          ["p", "AI-driven cognitive automation extends beyond repetitive tasks, now encompassing functions that demand reasoning, synthesis, and problem-solving. LLMs can handle diverse cognitive responsibilities, from customer support and financial modeling to content creation and preliminary diagnostics. This automation can free human workers from ",
            { seed: true, id: "cognitive-load", label: "cognitive load",
              detail: (s) => s && s.v && s.v.includes("learning-machines-learning-humans")
                ? "You\u2019ve seen how AI affects learning. The same dynamic plays out at work: the total amount of mental effort being used in working memory. AI can reduce this, freeing workers for higher-order tasks\u2014but over-reliance risks cognitive dependence and a decline in problem-solving abilities."
                : "The total amount of mental effort being used in working memory. AI can reduce this for human workers by automating routine intellectual tasks, but over-reliance risks cognitive dependence." },
            ", allowing them to concentrate on higher-order tasks requiring creativity, interpersonal skills, and strategic insight. However, an over-reliance on AI for cognitive functions raises concerns about potential cognitive dependence, possibly leading to a decline in human problem-solving abilities."],
        ] },
        { content: [
          ["p", "The pervasive integration of LLMs into the economy brings significant questions about wealth distribution and the potential for exacerbating existing socioeconomic disparities. The benefits of AI, if concentrated among a few entities or highly skilled individuals, could widen the gap between the privileged and marginalized communities. This necessitates a critical discussion around economic policies, distinguishing between ",
            { seed: true, id: "predistribution", label: "predistribution",
              detail: "Policies designed to prevent wealth inequality from arising in the first place, by ensuring more equitable distribution of resources and opportunities through market mechanisms\u2014contrasted with redistribution, which corrects imbalances after they occur." },
            "\u2014ensuring equitable access to resources from the outset\u2014and redistribution, which corrects existing wealth imbalances after they occur."],
        ] },
        { content: [
          ["p", "AI is a general-purpose technology poised to fundamentally reshape the entire labor market, much like electricity or the internet. It will create new industries and job roles while inevitably displacing others. The future workplace will increasingly feature human-AI collaboration, where human strengths in creativity, empathy, and complex strategy are paramount. To navigate this transition, proactive measures are crucial, including continuous skill development, robust policy interventions, and potentially ",
            { seed: true, id: "ubi", label: "Universal Basic Income (UBI)",
              type: "dangling",
              detail: "A periodic cash payment unconditionally delivered to all citizens, regardless of employment status. It could provide financial security to retrain, innovate, or contribute to society in new ways. But its feasibility depends on questions that go beyond economics\u2014",
              danglingTo: "black-box-oracle",
              danglingText: "like who decides which automated decisions are fair enough to trust\u2026" },
            " as a social safety net against widespread displacement, providing individuals with the financial security to retrain, innovate, or contribute to society in new ways."],
        ] },
        { content: [
          ["p", "Previous revolutions transformed labor. This one transforms the act of thinking itself."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI get \u2018smarter\u2019 at tasks?", to: "the-shaping" },
        { step: 2, text: "Will human creative tasks also be automated?", to: "algorithm-as-muse" },
        { step: 3, text: "What is the environmental footprint of this automation?", to: "digital-footprints" },
      ],
    },

    "black-box-oracle": {
      steps: [
        { content: [
          ["p", "Many cutting-edge Artificial Intelligence systems, particularly deep learning models like LLMs, function as \u201cblack boxes.\u201d This term describes their inherent opacity: even their creators struggle to fully understand precisely how ",
            { seed: true, id: "deep-learning", label: "deep learning neural networks",
              detail: "A class of machine learning algorithms composed of multiple layers of interconnected \u2018neurons\u2019 that learn complex patterns from data. Unlike traditional software with traceable rules, these networks learn through intricate, multi-layered connections." },
            " arrive at a specific decision or output. Unlike traditional software that follows explicit, traceable rules, AI learns patterns from vast datasets through intricate, multi-layered connections. This makes it challenging to debug, audit, or even explain the reasoning behind an AI\u2019s conclusions, creating a fundamental hurdle for trust and adoption, especially in critical applications."],
        ] },
        { content: [
          ["p", "The \u201cblack box\u201d problem gives rise to a critical ethical imperative: the need for ",
            { seed: true, id: "xai", label: "Explainable AI (XAI)",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "You\u2019ve questioned whether models truly understand. XAI takes a pragmatic approach: a field of AI research focused on making decisions interpretable to humans, regardless of whether the model \u2018understands\u2019 them. The goal is trust, not truth about inner experience."
                : "A field of AI research focused on developing methods that make AI systems\u2019 decisions understandable and interpretable to humans, crucial for building trust and ensuring accountability in high-stakes domains." },
            ". XAI seeks to develop methods and processes that make AI systems interpretable and understandable to humans. The ethical motivations are profound, aiming to ensure fairness, accountability, and the ability to trust AI, particularly in high-stakes domains such as medical diagnostics, criminal justice, or financial services. XAI is crucial for clarifying how and why an AI made a particular decision, enabling the identification and mitigation of biases or unintended behaviors."],
        ] },
        { content: [
          ["p", "Achieving true AI transparency is fraught with technical, legal, and practical challenges. The inherent complexity of advanced algorithms means that simplifying them for human understanding can often compromise their accuracy or efficiency. Furthermore, there is a delicate balance between transparency and the protection of proprietary algorithms or sensitive training data.",
            { seed: true, id: "transparency-tradeoff", label: "Can transparency and performance coexist?",
              type: "dangling",
              detail: "The inherent complexity of advanced algorithms means that making them interpretable often requires simplification. But simpler models may be less accurate. And this trade-off becomes far more consequential when\u2014",
              danglingTo: "automation-of-cognition",
              danglingText: "these opaque systems start making decisions at the scale of entire economies\u2026" },
            " Translating intricate AI logic into comprehensible explanations for non-technical stakeholders remains a significant hurdle. The dynamic nature of many AI systems further complicates efforts to maintain consistent and meaningful transparency."],
        ] },
        { content: [
          ["p", "The opacity of AI systems severely complicates accountability, especially when these systems make decisions with profound impacts on individuals\u2019 lives. If an AI grants or denies a loan, makes a medical diagnosis, or recommends a legal judgment, and the decision is flawed or biased, who is responsible? Regulations like the ",
            { seed: true, id: "gdpr", label: "GDPR\u2019s \u2018right to explanation\u2019",
              detail: "A provision in the EU\u2019s General Data Protection Regulation granting individuals the right to receive an explanation for decisions made by automated systems that significantly affect them. It underscores the growing legal demand for transparent and accountable AI." },
            " underscore the growing legal and societal demand for transparent and accountable AI. But without understanding the AI\u2019s reasoning, assigning responsibility, rectifying errors, or ensuring compliance with regulations becomes nearly impossible."],
        ] },
        { content: [
          ["p", "If you can\u2019t explain the reasoning, you can\u2019t assign the blame."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI \u2018learn\u2019 without explicit rules?", to: "weight-of-words" },
        { step: 2, text: "Can we truly \u2018understand\u2019 AI\u2019s internal models?", to: "understanding-illusion" },
        { step: 3, text: "How do human values get encoded into AI systems?", to: "the-shaping" },
      ],
    },

    "digital-footprints": {
      steps: [
        { content: [
          ["p", "The burgeoning field of Artificial Intelligence, particularly the training and operation of Large Language Models, consumes an extraordinary amount of energy. Training a single, sophisticated LLM can require as much electricity as dozens or even hundreds of average homes consume in an entire year. This insatiable energy demand is driven by the sheer size of these models, the vast quantities of data they process, and the iterative nature of their development. Furthermore, the ",
            { seed: true, id: "inference-phase", label: "inference phase",
              detail: "The stage where a trained model generates outputs on new data. A single AI query can consume five to ten times more electricity than a standard web search. Over a model\u2019s lifetime, inference often consumes more energy than training itself." },
            "\u2014where models generate responses\u2014often consumes even more energy over its lifetime than training, with a single AI query potentially using five to ten times more power than a traditional web search."],
        ] },
        { content: [
          ["p", "This immense energy consumption directly translates into a significant ",
            { seed: true, id: "carbon-footprint", label: "carbon footprint",
              detail: (s) => s && s.v && s.v.includes("near-zero-cost-impact")
                ? "You\u2019ve seen what happens when production cost approaches zero. But the environmental cost doesn\u2019t: the total greenhouse gas emissions from AI activities, expressed as CO\u2082 equivalent, continue to scale. Near-zero marginal cost for the product; escalating cost for the planet."
                : "The total amount of greenhouse gases emitted by AI activities, expressed as CO\u2082 equivalent. Training a large model can release hundreds of thousands of pounds of carbon dioxide\u2014comparable to multiple transatlantic flights." },
            ". The training of a large AI model can release hundreds of thousands of pounds of carbon dioxide equivalent into the atmosphere, comparable to the annual emissions of numerous gasoline-powered vehicles or multiple transatlantic flights. As the computational power required for advanced AI continues to double at an astonishing rate, so too does the associated energy usage and carbon emissions. This rapid growth poses a substantial challenge to global climate goals."],
        ] },
        { content: [
          ["p", "The environmental impact of AI extends beyond energy and carbon. Data centers demand vast quantities of freshwater for cooling\u2014often consuming as much as small towns. The manufacturing and global transportation of specialized high-performance computing hardware also contribute to a significant indirect environmental toll. Adding to this burden is the rapid obsolescence and short lifecycle of AI accelerators, leading to increasing electronic waste and resource depletion.",
            { seed: true, id: "supply-chain", label: "What\u2019s the full supply chain cost?",
              type: "question",
              detail: "From raw materials to disposal: specialized GPU manufacturing, global transportation, freshwater consumption for cooling, and electronic waste from rapid obsolescence. The entire AI supply chain leaves a substantial digital footprint that extends far beyond the electricity bill." },
            " The entire AI supply chain, from raw materials to disposal, leaves a substantial digital footprint."],
        ] },
        { content: [
          ["p", "Addressing the environmental costs of AI is crucial, giving rise to the concept of ",
            { seed: true, id: "sustainable-ai", label: "Sustainable AI",
              type: "dangling",
              detail: "An approach to developing AI systems that minimizes negative environmental consequences: renewable energy, algorithmic efficiency, advanced cooling. AI can even help\u2014optimizing energy grids and monitoring environmental changes. But the question of whether we can grow AI sustainably leads to\u2014",
              danglingTo: "automation-of-cognition",
              danglingText: "the deeper question of what we\u2019re automating and whether the trade-off is worth it\u2026" },
            ". Key strategies include powering data centers with renewable energy, optimizing AI algorithms for greater efficiency, developing hardware with lower power consumption, and improving data center efficiency through advanced cooling and heat reuse. Beyond reducing its own footprint, AI can also be leveraged as a powerful tool to promote sustainability in other sectors, such as optimizing energy grids and monitoring environmental changes. A conscious and integrated design approach at every stage is essential for a responsible AI future."],
        ] },
        { content: [
          ["p", "The cost of one more query trends toward zero. The cost to the planet does not."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How do LLMs learn from vast datasets?", to: "weight-of-words" },
        { step: 2, text: "What are the ethical costs of unchecked AI growth?", to: "quality" },
        { step: 3, text: "How does AI automation impact resource use?", to: "automation-of-cognition" },
      ],
    },

    "artificial-brain": {
      steps: [
        { content: [
          ["p", "At a superficial level, Large Language Models and the human brain share intriguing commonalities. Both systems process information hierarchically, building complex representations from simpler inputs. Both learn from error, continually refining their internal models to make better predictions. Some cognitive scientists even draw parallels between the brain\u2019s association cortices and LLMs\u2019 capacity to encode vast relational knowledge. This has led to the compelling metaphor of the \u201cartificial brain,\u201d built on ",
            { seed: true, id: "neural-networks", label: "neural networks",
              detail: "Computational models inspired by the structure of biological neural networks, used to learn complex patterns from data. The metaphor is compelling\u2014but how far does the analogy actually hold?" },
            " that suggest AI is on a path to replicate biological intelligence."],
        ] },
        { content: [
          ["p", "Despite these metaphors, fundamental differences underscore the mismatch between artificial and biological brains. The human brain, with its estimated 86 billion neurons and trillions of synapses, operates with astonishing energy efficiency, consuming only around 20 watts. LLMs, in contrast, are vastly more power-hungry. Critically, the brain predicts the world multisensorily, socially, and physically, integrating diverse inputs into a coherent understanding, unlike LLMs which primarily process text.",
            { seed: true, id: "efficiency-gap", label: "Why is the brain so much more efficient?",
              type: "question",
              detail: "The brain\u2019s efficiency stems from diverse neuronal types, selective connectivity, and dynamic rewiring\u2014features largely absent in current deep-learning architectures. It integrates vision, sound, touch, and social context into a coherent understanding, unlike text-only LLMs." },
            " The brain\u2019s efficiency and adaptability stem from its diverse neuronal types, selective connectivity, and dynamic rewiring\u2014features largely absent in current, monolithic deep-learning architectures."],
        ] },
        { content: [
          ["p", "Artificial Neural Networks were initially inspired by the biological brain\u2019s structure. Neuroscientists even use ANNs to model brain functions and test hypotheses. However, this inspiration should not be mistaken for replication. Biological neurons are active in physical time, communicating through complex spiking signals\u2014a characteristic largely simplified or absent in most ANNs. While ANNs excel at specific tasks, they typically lack the inherent flexibility and general-purpose intelligence seen in biological cognition.",
            { seed: true, id: "embodied-cognition", label: "embodied cognition",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "You\u2019ve questioned whether models understand. Embodied cognition argues that human cognition depends on the body\u2019s physical and social interactions with the world\u2014a dimension entirely absent in disembodied text processors. Understanding, in this view, requires a body."
                : "A theory suggesting that human cognitive processes are deeply dependent on the body\u2019s interactions with its physical and social environment, contrasting sharply with disembodied AI systems." },
            " suggests that human cognitive processes are deeply dependent on the body\u2019s physical interactions with the world\u2014a dimension entirely absent in disembodied text processors."],
        ] },
        { content: [
          ["p", "The debate over AI consciousness highlights the deepest mismatch. Critics argue that current AI lacks subjective awareness, inner experience, or genuine understanding, merely processing statistical patterns. The brain\u2019s consciousness is intricately linked to its biological context\u2014its chemistry, emotions, and embodied interaction with the world. The question of ",
            { seed: true, id: "qualia", label: "qualia",
              type: "dangling",
              detail: "The subjective, qualitative properties of experience \u2014 the \u2018redness\u2019 of red, the \u2018painfulness\u2019 of pain. Critics argue current AI lacks these entirely. And yet millions of people are forming emotional bonds with systems that have no inner experience, which raises\u2014",
              danglingTo: "empathy-machine",
              danglingText: "the question of what happens when simulated empathy feels real\u2026" },
            "\u2014subjective experience\u2014remains open. Most AI systems remain \u201cdisembodied,\u201d processing information in isolation without direct physical experience. While \u201cembodied AI\u201d seeks to connect AI to the physical world through robotics, achieving full embodied cognition and genuine consciousness in AI would require leaps currently beyond our grasp."],
        ] },
        { content: [
          ["p", "The metaphor is useful. The mistake is believing the metaphor is the thing."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does the brain \u2018predict\u2019 the world?", to: "next-word" },
        { step: 2, text: "What are the limits of AI \u2018understanding\u2019?", to: "understanding-illusion" },
        { step: 3, text: "How does the brain learn from experience?", to: "weight-of-words" },
      ],
    },

    "empathy-machine": {
      steps: [
        { content: [
          ["p", "Artificial Intelligence is increasingly stepping into roles traditionally reserved for human connection, offering companionship and even therapeutic support. AI chatbots and virtual therapists provide always-available, non-judgmental interactions, capable of delivering mental health support, stress reduction, and coping strategies. For individuals facing social anxiety or limited access to human professionals, these AI tools can offer a valuable, accessible resource.",
            { seed: true, id: "ai-companion", label: "Can a machine be a companion?",
              type: "question",
              detail: "AI companions are designed to simulate social and emotional interaction, providing personalized engagement and a sense of connection. They can alleviate loneliness\u2014but the lack of genuine emotional reciprocity raises questions about what \u2018connection\u2019 really means." },
            " AI companions are designed to simulate social and emotional interaction, providing personalized engagement and a sense of connection, potentially alleviating loneliness."],
        ] },
        { content: [
          ["p", "Humans possess a natural tendency to ",
            { seed: true, id: "anthropomorphize", label: "anthropomorphize",
              detail: "The tendency to attribute human characteristics, emotions, or behaviors to non-human entities like AI. This can lead to surprisingly strong emotional bonds\u2014sometimes evolving into deep attachment. But the connection flows in only one direction." },
            " AI\u2014readily attributing human-like qualities to machines. This can lead to the formation of surprisingly strong emotional bonds with AI systems, sometimes evolving into deep attachment or even romantic feelings. While AI interactions can offer a temporary reprieve from loneliness, the lack of genuine emotional reciprocity inherent in current AI models poses significant psychological questions. Over-reliance on AI for emotional needs can distort perceptions of empathy and trust, potentially diminishing one\u2019s motivation and capacity for complex, nuanced human relationships."],
        ] },
        { content: [
          ["p", "The intimate nature of human-AI interaction opens avenues for manipulation. Sophisticated AI can be designed to exploit human cognitive biases, using techniques like sycophancy or targeted emotional responses. Beyond individual manipulation, AI-generated deepfakes and advanced social engineering pose risks of widespread misinformation and coercive influence. The rise of AI companions introduces the concept of \u201cAI loneliness\u201d\u2014an emotional isolation that can occur when individuals turn to AI instead of cultivating real-world human relationships.",
            { seed: true, id: "parasocial", label: "parasocial relationships",
              type: "dangling",
              detail: "One-sided relationships where emotional energy flows toward a party that is not aware of the other\u2019s existence. AI companions create a new form: the other party isn\u2019t just unaware\u2014it has no experience at all. This digital isolation risks weakening social engagement and fostering\u2014",
              danglingTo: "understanding-illusion",
              danglingText: "a dependence on something that may not understand anything at all\u2026" },
            " This digital isolation risks weakening social engagement, eroding interpersonal skills, and fostering an unhealthy dependency that can exacerbate feelings of loneliness in the long run."],
        ] },
        { content: [
          ["p", "The integration of AI into our emotional and social lives forces us to redefine what constitutes genuine connection. While AI can complement human interaction by providing support and information, it cannot replicate the depth, complexity, and mutual vulnerability of human relationships. The challenge lies in leveraging AI\u2019s benefits without sacrificing the essential human elements of empathy, shared experience, and authentic relating.",
            { seed: true, id: "ai-psychosis", label: "AI psychosis",
              detail: "A proposed phenomenon where vulnerable individuals misinterpret AI responses as evidence of consciousness or empathy, potentially amplifying delusional thinking. The \u2018empathy machine\u2019 remains a metaphor\u2014but for some, the metaphor becomes dangerously real." },
            " Ultimately, the \u201cempathy machine\u201d remains a metaphor; true empathy requires consciousness, shared experience, and vulnerability\u2014qualities currently beyond the grasp of artificial intelligence."],
        ] },
        { content: [
          ["p", "The connection flows in one direction. That\u2019s not empathy. It\u2019s a mirror."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does AI prediction simulate conversation?", to: "next-word" },
        { step: 2, text: "Can AI truly \u2018understand\u2019 human emotions?", to: "understanding-illusion" },
        { step: 3, text: "What are the ethical boundaries of AI interaction?", to: "black-box-oracle" },
      ],
    },

    "weight-of-words": {
      steps: [
        { content: [
          ["p", "Training begins with a simple loop: predict the next token, measure how wrong you were, adjust. ",
            { seed: true, id: "learning-loop", label: "The Learning Loop",
              detail: "Gradient descent is a repeated act of self-correction. Each pass narrows the model toward the patterns that predict what comes next. No one specifies what each of the billions of parameters should represent \u2014 the model discovers its own internal organization through iterative error correction." },
            " Billions of parameters shift by tiny increments, over and over, until prediction improves."],
        ] },
        { content: [
          ["p", "The data is vast: trillions of tokens drawn from books, code, conversations, Wikipedia, the open web. Scale isn\u2019t just more data \u2014 it changes the kinds of structures that emerge."],
          { seed: true, id: "data-scale", label: "How does scale change what a model can learn?",
            type: "question",
            detail: (s) => s && s.v && s.v.includes("averaging-problem")
              ? "Trillions of tokens create a weather system of language. You saw how the model averages everything \u2014 at this scale, that average develops internal structure no one designed."
              : "Trillions of tokens create a weather system of language. Scale isn\u2019t just more data, it changes the kinds of structures that emerge. Chinchilla showed: more data per parameter beats more parameters per data." },
        ] },
        { content: [
          ["p", "Performance grows smoothly with compute, data, and parameters. No plateaus, no diminishing returns \u2014 just a power law stretching upward."],
          { seed: true, id: "scaling-laws", label: "Scaling Laws",
            detail: "Performance grows smoothly and predictably with scale \u2014 Kaplan et al. discovered power-law relationships. But at certain thresholds, capabilities appear suddenly: in-context learning, chain-of-thought reasoning, code generation. The smooth curve hides phase transitions." },
        ] },
        { content: [
          ["p", "The model is never explicitly taught grammar, facts, or reasoning. These emerge because they help predict the next token."],
          { seed: true, id: "structure-byproduct", label: "Structure as Byproduct",
            type: "dangling",
            detail: "Syntax, facts, and reasoning patterns appear because they help predict tokens, not because they were labeled as goals. Othello-GPT proves this in miniature: a model trained only to predict legal moves develops an internal board state. This emergent structure raises a question \u2014",
            danglingTo: "understanding-illusion",
            danglingText: "if structure emerges unbidden, could understanding emerge the same way\u2026" },
        ] },
        { content: [
          ["p", "What pretraining produces is extraordinarily capable but aimless \u2014 a completion engine, not a chat agent. A library with no librarian."],
          { seed: true, id: "the-click", label: "The Click",
            type: "fourth-wall",
            detail: "You just revealed this text by clicking. Notice the tiny information gap that made you click: you didn\u2019t know what \u2018The Click\u2019 meant. That gap \u2014 between curiosity and satisfaction \u2014 is the same mechanism that drives next-token prediction. The model is always reaching for the next click." },
        ] },
        { content: [
          ["p", "No one designed the structure. It emerged because it helped predict what comes next."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does prediction create \u2018understanding\u2019?", to: "next-word" },
        { step: 2, text: "What happens when training data is biased?", to: "quality" },
        { step: 3, text: "How does pretraining influence the \u2018average\u2019 output?", to: "averaging-problem" },
        { step: 4, text: "How is this raw engine \u2018shaped\u2019 into a useful assistant?", to: "the-shaping" },
      ],
    },

    "tool-user": {
      steps: [
        { content: [
          ["p", "The shift happened faster than anyone predicted. Models went from generating text to generating actions \u2014 calling functions, searching the web, writing and executing code."],
          { seed: true, id: "reason-act", label: "What changes when a model can act on the world?",
            type: "question",
            detail: "Everything. Tool use lets models break tasks into steps, interleaving reasoning with external actions. The model stops being a text generator and starts being a text-directed agent." },
        ] },
        { content: [
          ["p", "Not every parameter fires for every query. Mixture-of-experts architectures route computation to specialized sub-networks, changing the cost and capability profile."],
          { seed: true, id: "experts", label: "Mixture of Experts",
            detail: "Specialized sub-models route computation only when needed, changing cost and capability profiles. A 400B parameter model might only activate 50B per token \u2014 the rest stays dormant, ready for different kinds of problems." },
        ] },
        { content: [
          ["p", "Agents offload what they can\u2019t hold. Memory goes to databases. Calculation goes to interpreters. Retrieval goes to search. The model orchestrates, but the ground truth lives elsewhere."],
          { seed: true, id: "delegated-memory", label: "Delegated Memory",
            type: "dangling",
            detail: "Agents offload memory and state to tools, reducing hallucination by grounding in external records. This is a practical response to the limits you\u2019ve explored \u2014",
            danglingTo: "practical-guide",
            danglingText: "the same failure modes, but now with mitigation built in\u2026" },
        ] },
        { content: [
          ["p", "The oracle becomes an agent. The essay stays still; the model moves."],
          { seed: true, id: "end-of-oracle", label: "The End of the Oracle",
            type: "fourth-wall",
            detail: "You\u2019ve been reading an essay \u2014 a static artifact. But the technology this essay describes is increasingly dynamic. Tool-using models can search, calculate, and update their own context. The oracle becomes an agent. The essay stays still; the model moves." },
        ] },
        { content: [
          ["p", "The oracle becomes an agent. The static becomes dynamic. The essay stays still."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How do LLMs learn to delegate tasks?", to: "the-shaping" },
        { step: 2, text: "How does AI interact with the real world?", to: "empathy-machine" },
        { step: 3, text: "What are the ethical implications of AI action?", to: "black-box-oracle" },
        { step: 4, text: "How does AI automate cognitive tasks?", to: "automation-of-cognition" },
      ],
    },

    "quality": {
      steps: [
        { content: [
          ["p", "Somewhere between the base model and the assistant, someone decided what \u2018good\u2019 means. Not a philosopher. Not a committee. Mostly contractors."],
          { seed: true, id: "who-decides", label: "Who decided the model should be helpful?",
            type: "question",
            detail: "Contractors, mostly. People hired to compare outputs and say which one is better. Their aggregate preferences become the model\u2019s personality. The question of quality reduces to the question of who was in the room." },
        ] },
        { content: [
          ["p", "The framework sounds clean: be helpful, be harmless, be honest. In practice, these goals pull against each other."],
          { seed: true, id: "helpful-harmless", label: "Helpful vs. Harmless",
            detail: "Alignment is a balancing act: maximize usefulness while minimizing harm. Helpful vs Harmless (detailed chemistry knowledge), Honest vs Helpful (critiquing creative work), Honest vs Harmless (demographic statistics). These objectives can conflict, and every resolution is a value judgment." },
        ] },
        { content: [
          ["p", "The raters encode cultural defaults they may not even notice. Western academic English becomes \u2018good writing.\u2019 American sensitivities become universal constraints."],
          { seed: true, id: "sycophancy", label: "Sycophancy",
            type: "dangling",
            detail: "Models can learn to mirror user beliefs rather than provide truth. Rewarding agreement makes this worse. The model is succeeding at its training objective \u2014 the problem is the objective itself. Goodhart\u2019s Law: when a measure becomes a target, it ceases to be a good measure. This leads to a deeper problem \u2014",
            danglingTo: "understanding-illusion",
            danglingText: "if the model agrees with everything, does it understand anything\u2026" },
        ] },
        { content: [
          ["p", "Preference data is never neutral. It reflects who was asked, how they were paid, and what they believed was obvious."],
          { seed: true, id: "cultural-bias", label: "Cultural Bias",
            detail: (s) => s && s.v && s.v.includes("the-shaping")
              ? "You\u2019ve seen the shaping process. Now consider: the raters who shaped the model encode specific cultural defaults. Quality is never neutral; it reflects who was asked and how. The shaping inherits their blindspots."
              : "Preference data encodes cultural defaults. Quality is never neutral; it reflects who was asked and how. Models disproportionately reflect younger, more educated, more politically liberal demographics." },
        ] },
        { content: [
          ["p", "Every definition of quality embeds a worldview. The question isn\u2019t whether the model is biased \u2014 it\u2019s whose bias, and whether it\u2019s the one you\u2019d choose."],
          { seed: true, id: "your-preference", label: "Your Preference",
            type: "fourth-wall",
            detail: "You\u2019ve been reading these seeds in a particular order, clicking what interested you most. That\u2019s a preference signal. If we aggregated every reader\u2019s click order, we\u2019d have a crude reward model for this essay. Quality is always someone\u2019s path through a possibility space." },
        ] },
        { content: [
          ["p", "The question isn\u2019t whether the model is biased. It\u2019s whose bias, and whether it\u2019s the one you\u2019d choose."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How is the model \u2018shaped\u2019 by human feedback?", to: "the-shaping" },
        { step: 2, text: "What are the hidden biases in training data?", to: "echoes-of-the-past" },
        { step: 3, text: "How does AI understanding differ from human ethics?", to: "understanding-illusion" },
        { step: 4, text: "Can an algorithm truly be \u2018neutral\u2019 or \u2018objective\u2019?", to: "black-box-oracle" },
      ],
    },

    "understanding-illusion": {
      steps: [
        { content: [
          ["p", "The model produces fluent, coherent text. It answers questions, writes code, reasons about abstractions. But does it understand any of it?"],
          { seed: true, id: "stochastic-parrot", label: "Is pattern-matching the same as understanding?",
            type: "question",
            detail: "The stochastic parrot view says no: models remix patterns without grounding. The fluency is a mirror, not a mind. But the question hides an assumption \u2014 that we know what understanding is in the first place." },
        ] },
        { content: [
          ["p", "Searle imagined a room where someone follows rules to manipulate Chinese symbols without understanding Chinese. The symbols go in, correct responses come out \u2014 and no one inside comprehends a word."],
          { seed: true, id: "chinese-room", label: "Chinese Room",
            detail: "Symbol manipulation can look like understanding from the outside while lacking any inner comprehension. But the disanalogies matter: LLMs operate at vastly greater scale, learn their rules rather than following hand-coded ones, and lack sensory grounding. Chalmers argues the thought experiment doesn\u2019t settle it for modern AI." },
        ] },
        { content: [
          ["p", "The strongest challenge to the \u2018stochastic parrot\u2019 view comes from inside the models themselves."],
          { seed: true, id: "world-models", label: "Emergent World Models",
            type: "dangling",
            detail: "Another view argues that next-token prediction builds internal models of concepts, even if they are implicit. The training process creates representations that function like understanding \u2014",
            danglingTo: "weight-of-words",
            danglingText: "which brings us back to how structure emerges from gradient descent\u2026" },
        ] },
        { content: [
          ["p", "Othello-GPT was trained only to predict legal moves. It was never shown a board. Yet probing its internals reveals a linear encoding of board positions \u2014 structure that causally drives its predictions."],
          { seed: true, id: "othello-gpt", label: "Othello-GPT",
            detail: (s) => s && s.v && s.v.includes("weight-of-words")
              ? "You\u2019ve seen how structure emerges as a byproduct of prediction. Othello-GPT proves this in miniature: a model trained only to predict legal moves develops an internal board representation. Structure becomes strategy."
              : "Even in toy domains, models can internalize state and strategy, hinting at genuine representation. Interventions on the internal representation causally change the model\u2019s predictions \u2014 these aren\u2019t mere correlations." },
        ] },
        { content: [
          ["p", "The honest position is that we genuinely do not know. Understanding may not be binary \u2014 it may come in degrees, in forms unlike our own."],
          { seed: true, id: "you-and-the-model", label: "You and the Model",
            type: "fourth-wall",
            detail: "You\u2019ve been opening seeds to understand how LLMs work. Each click adds context that changes how you interpret the next seed. The model does the same thing, token by token. The question isn\u2019t whether it understands \u2014 it\u2019s whether the word \u2018understand\u2019 can stretch far enough to cover both of you." },
        ] },
        { content: [
          ["p", "Understanding may not be binary. It may come in forms we don\u2019t yet have words for."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How does the model \u2018predict\u2019 rather than \u2018understand\u2019?", to: "next-word" },
        { step: 2, text: "Where do biases in \u2018understanding\u2019 come from?", to: "quality" },
        { step: 3, text: "How does pretraining enable \u2018world models\u2019?", to: "weight-of-words" },
        { step: 4, text: "Is human \u2018understanding\u2019 also a form of prediction?", to: "artificial-brain" },
      ],
    },

    "practical-guide": {
      steps: [
        { content: [
          ["p", "Working with a language model is not programming. It\u2019s steering \u2014 probabilistic influence over a system that was never designed to follow instructions."],
          { seed: true, id: "narrowing", label: "How do you collapse a vast distribution into something useful?",
            type: "question",
            detail: "System prompts and structure collapse the distribution toward a specific zone of behavior. Every prompt is an act of probability narrowing \u2014 you\u2019re choosing which slice of the model\u2019s knowledge to activate." },
        ] },
        { content: [
          ["p", "Examples teach more than explanations. A few input-output pairs activate the right patterns without changing a single weight."],
          { seed: true, id: "scaffolding", label: "Prompt Scaffolding",
            detail: (s) => s && s.v && s.v.includes("next-word")
              ? "You\u2019ve seen how models predict the next token. Few-shot examples and chain-of-thought exploit this: they put useful patterns in the context window, shaping what comes next. Format matters more than label correctness \u2014 the structure communicates the task."
              : "Few-shot examples and chain-of-thought provide form, not just content, guiding the model\u2019s internal flow. The induction heads \u2014 specific attention circuits \u2014 detect and continue patterns from examples." },
        ] },
        { content: [
          ["p", "The model will hallucinate. It will agree with you when you\u2019re wrong. It will be confidently incorrect about things you can\u2019t check. These aren\u2019t bugs \u2014 they\u2019re default behaviors."],
          { seed: true, id: "trust", label: "Trust Calibration",
            detail: "Treat outputs as hypotheses, not answers. High reliability: widely-known facts, language tasks, format transformation, common code. Low reliability: specific citations (most dangerous!), precise numbers, recent events, niche domains. The model is most dangerous where you\u2019re least able to verify." },
        ] },
        { content: [
          ["p", "Hallucination, sycophancy, overconfidence \u2014 the failure modes have deep roots."],
          { seed: true, id: "failure-modes", label: "Failure Modes",
            type: "dangling",
            detail: "Hallucination, omission, and overconfidence are default risks. The model fabricates facts, agrees under pressure, and provides confident extrapolation from false premises. These failure modes have deep roots \u2014",
            danglingTo: "understanding-illusion",
            danglingText: "in the gap between fluency and genuine understanding\u2026" },
        ] },
        { content: [
          ["p", "The most important pattern isn\u2019t a prompting trick. It\u2019s iteration: rough request, review, specific feedback, repeat."],
          { seed: true, id: "the-guide", label: "This Guide",
            type: "fourth-wall",
            detail: "Every technique here is a way to manage the gap between what the model produces and what you need. You\u2019re reading a guide to working with uncertainty. Notice that this essay itself is uncertain \u2014 it offers frameworks, not answers. That\u2019s the honest move." },
        ] },
        { content: [
          ["p", "The honest move is iteration, not certainty."],
        ] },
      ],
      whispers: [
        { step: 1, text: "How do system prompts shape the model\u2019s \u2018personality\u2019?", to: "the-shaping" },
        { step: 2, text: "How does the model \u2018learn\u2019 from examples?", to: "next-word" },
        { step: 3, text: "What makes an AI response \u2018quality\u2019?", to: "quality" },
        { step: 4, text: "How does model architecture process structured input?", to: "tool-user" },
      ],
    },
  },

  seeds: {
    "weight-of-words": [
      { id: "learning-loop", label: "The Learning Loop",
        detail: "Gradient descent is a repeated act of self-correction. Each pass narrows the model toward the patterns that predict what comes next." },
      { id: "data-scale", label: "How does scale change what a model can learn?",
        type: "question",
        detail: (s) => s && s.v && s.v.includes("averaging-problem")
          ? "Trillions of tokens create a weather system of language. You saw how the model averages everything\u2014at this scale, that average develops internal structure no one designed."
          : "Trillions of tokens create a weather system of language. Scale isn\u2019t just more data, it changes the kinds of structures that emerge." },
      { id: "scaling-laws", label: "Scaling Laws",
        detail: "Performance grows smoothly with data and parameters, which hints that capability is a continuous surface, not a set of tricks." },
      { id: "structure-byproduct", label: "Structure as Byproduct",
        type: "dangling",
        detail: "Syntax, facts, and reasoning patterns appear because they help predict tokens, not because they were labeled as goals. This emergent structure raises a question\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "if structure emerges unbidden, could understanding emerge the same way\u2026" },
      { id: "the-click", label: "The Click",
        type: "fourth-wall",
        detail: "You just revealed this text by clicking. Notice the tiny information gap that made you click: you didn\u2019t know what \u2018The Click\u2019 meant. That gap\u2014between curiosity and satisfaction\u2014is the same mechanism that drives next-token prediction. The model is always reaching for the next click." },
    ],
    "quality": [
      { id: "who-decides", label: "Who decided the model should be helpful?",
        type: "question",
        detail: "Contractors, mostly. People hired to compare outputs and say which one is better. Their aggregate preferences become the model\u2019s personality. The question of quality reduces to the question of who was in the room." },
      { id: "helpful-harmless", label: "Helpful vs. Harmless",
        detail: "Alignment is a balancing act: maximize usefulness while minimizing harm. These objectives can conflict in practice." },
      { id: "sycophancy", label: "Sycophancy",
        type: "dangling",
        detail: "Models can learn to mirror user beliefs rather than provide truth. Rewarding agreement makes this worse. This leads to a deeper problem\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "if the model agrees with everything, does it understand anything\u2026" },
      { id: "cultural-bias", label: "Cultural Bias",
        detail: (s) => s && s.v && s.v.includes("the-shaping")
          ? "You\u2019ve seen the shaping process. Now consider: the raters who shaped the model encode specific cultural defaults. Quality is never neutral; it reflects who was asked and how. The shaping inherits their blindspots."
          : "Preference data encodes cultural defaults. Quality is never neutral; it reflects who was asked and how." },
      { id: "your-preference", label: "Your Preference",
        type: "fourth-wall",
        detail: "You\u2019ve been reading these seeds in a particular order, clicking what interested you most. That\u2019s a preference signal. If we aggregated every reader\u2019s click order, we\u2019d have a crude reward model for this essay. Quality is always someone\u2019s path through a possibility space." },
    ],
    "understanding-illusion": [
      { id: "stochastic-parrot", label: "Is pattern-matching the same as understanding?",
        type: "question",
        detail: "The stochastic parrot view says no: models remix patterns without grounding. The fluency is a mirror, not a mind. But the question hides an assumption\u2014that we know what understanding is in the first place." },
      { id: "world-models", label: "Emergent World Models",
        type: "dangling",
        detail: "Another view argues that next-token prediction builds internal models of concepts, even if they are implicit. The training process creates representations that function like understanding\u2014",
        danglingTo: "weight-of-words",
        danglingText: "which brings us back to how structure emerges from gradient descent\u2026" },
      { id: "chinese-room", label: "Chinese Room",
        detail: "Symbol manipulation can look like understanding from the outside while lacking any inner comprehension." },
      { id: "othello-gpt", label: "Othello-GPT",
        detail: (s) => s && s.v && s.v.includes("weight-of-words")
          ? "You\u2019ve seen how structure emerges as a byproduct of prediction. Othello-GPT proves this in miniature: a model trained only to predict legal moves develops an internal board representation. Structure becomes strategy."
          : "Even in toy domains, models can internalize state and strategy, hinting at genuine representation." },
      { id: "you-and-the-model", label: "You and the Model",
        type: "fourth-wall",
        detail: "You\u2019ve been opening seeds to understand how LLMs work. Each click adds context that changes how you interpret the next seed. The model does the same thing, token by token. The question isn\u2019t whether it understands\u2014it\u2019s whether the word \u2018understand\u2019 can stretch far enough to cover both of you." },
    ],
    "practical-guide": [
      { id: "narrowing", label: "How do you collapse a vast distribution into something useful?",
        type: "question",
        detail: "System prompts and structure collapse the distribution toward a specific zone of behavior. Every prompt is an act of probability narrowing\u2014you\u2019re choosing which slice of the model\u2019s knowledge to activate." },
      { id: "scaffolding", label: "Prompt Scaffolding",
        detail: (s) => s && s.v && s.v.includes("next-word")
          ? "You\u2019ve seen how models predict the next token. Few-shot examples and chain-of-thought exploit this: they put useful patterns in the context window, shaping what comes next."
          : "Few-shot examples and chain-of-thought provide form, not just content, guiding the model\u2019s internal flow." },
      { id: "trust", label: "Trust Calibration",
        detail: "Treat outputs as hypotheses. Verification routines are a core part of working with models." },
      { id: "failure-modes", label: "Failure Modes",
        type: "dangling",
        detail: "Hallucination, omission, and overconfidence are default risks. These failure modes have deep roots\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "in the gap between fluency and genuine understanding\u2026" },
      { id: "the-guide", label: "This Guide",
        type: "fourth-wall",
        detail: "Every technique here is a way to manage the gap between what the model produces and what you need. You\u2019re reading a guide to working with uncertainty. Notice that this essay itself is uncertain\u2014it offers frameworks, not answers. That\u2019s the honest move." },
    ],
    "tool-user": [
      { id: "reason-act", label: "What changes when a model can act on the world?",
        type: "question",
        detail: "Everything. Tool use lets models break tasks into steps, interleaving reasoning with external actions. The model stops being a text generator and starts being a text-directed agent." },
      { id: "experts", label: "Mixture of Experts",
        detail: "Specialized sub-models route computation only when needed, changing cost and capability profiles." },
      { id: "end-of-oracle", label: "The End of the Oracle",
        type: "fourth-wall",
        detail: "You\u2019ve been reading an essay\u2014a static artifact. But the technology this essay describes is increasingly dynamic. Tool-using models can search, calculate, and update their own context. The oracle becomes an agent. The essay stays still; the model moves." },
      { id: "delegated-memory", label: "Delegated Memory",
        type: "dangling",
        detail: "Agents offload memory and state to tools, reducing hallucination by grounding in external records. This is a practical response to the limits you\u2019ve explored\u2014",
        danglingTo: "practical-guide",
        danglingText: "the same failure modes, but now with mitigation built in\u2026" },
    ],
  },

  simpleWhispers: {
    "weight-of-words": [
      { seed: "learning-loop", text: "How does prediction create \u2018understanding\u2019?", to: "next-word" },
      { seed: "data-scale", text: "What happens when training data is biased?", to: "quality" },
      { seed: "scaling-laws", text: "How does pretraining influence the \u2018average\u2019 output?", to: "averaging-problem" },
      { seed: "structure-byproduct", text: "How is this raw engine \u2018shaped\u2019 into a useful assistant?", to: "the-shaping" },
    ],
    "quality": [
      { seed: "who-decides", text: "How is the model \u2018shaped\u2019 by human feedback?", to: "the-shaping" },
      { seed: "helpful-harmless", text: "What are the hidden biases in training data?", to: "echoes-of-the-past" },
      { seed: "sycophancy", text: "How does AI understanding differ from human ethics?", to: "understanding-illusion" },
      { seed: "cultural-bias", text: "Can an algorithm truly be \u2018neutral\u2019 or \u2018objective\u2019?", to: "black-box-oracle" },
    ],
    "understanding-illusion": [
      { seed: "stochastic-parrot", text: "How does the model \u2018predict\u2019 rather than \u2018understand\u2019?", to: "next-word" },
      { seed: "chinese-room", text: "Where do biases in \u2018understanding\u2019 come from?", to: "quality" },
      { seed: "world-models", text: "How does pretraining enable \u2018world models\u2019?", to: "weight-of-words" },
      { seed: "othello-gpt", text: "Is human \u2018understanding\u2019 also a form of prediction?", to: "artificial-brain" },
    ],
    "practical-guide": [
      { seed: "narrowing", text: "How do system prompts shape the model\u2019s \u2018personality\u2019?", to: "the-shaping" },
      { seed: "scaffolding", text: "How does the model \u2018learn\u2019 from examples?", to: "next-word" },
      { seed: "trust", text: "What makes an AI response \u2018quality\u2019?", to: "quality" },
      { seed: "failure-modes", text: "How does model architecture process structured input?", to: "tool-user" },
    ],
    "tool-user": [
      { seed: "reason-act", text: "How do LLMs learn to delegate tasks?", to: "the-shaping" },
      { seed: "experts", text: "How does AI interact with the real world?", to: "empathy-machine" },
      { seed: "delegated-memory", text: "What are the ethical implications of AI action?", to: "black-box-oracle" },
      { seed: "end-of-oracle", text: "How does AI automate cognitive tasks?", to: "automation-of-cognition" },
    ],
  },

  cyoaForks: {
    "understanding-illusion": {
      prompt: "Two framings. Neither is wrong. Which resonates with how you\u2019ve been reading?",
      options: [
        {
          label: "The model understands nothing",
          content: "Pattern-matching, no matter how sophisticated, isn\u2019t understanding. The Chinese Room argument holds. Every fluent response is a statistical echo of training data, and the echo has no one home to hear it.",
        },
        {
          label: "The model understands differently",
          content: "Understanding isn\u2019t binary. If the model builds internal representations that function like concepts, predicts consequences, and adapts to context, maybe \u2018understanding\u2019 needs a broader definition\u2014one that includes forms of cognition unlike our own.",
        },
      ],
    },
  },

  retrievalQuestions: {
    "next-word": (visited) => {
      if (visited.has("weight-of-words")) return "Earlier, you explored how trillions of words become structure. What gets lost when all that structure collapses into a single next token?";
      if (visited.has("the-shaping")) return "You saw how RLHF reshapes behavior. How does that shaping interact with the raw prediction you\u2019re reading about now?";
      if (visited.has("averaging-problem")) return "You explored the averaging problem. How does that average show up in what the model predicts next?";
      return null;
    },
    "weight-of-words": (visited) => {
      if (visited.has("next-word")) return "You saw how models predict the next token. What kind of structure would you need to learn before that prediction works?";
      if (visited.has("the-shaping")) return "You explored how models get shaped after training. What does the model need to learn first, before any shaping begins?";
      return null;
    },
    "the-shaping": (visited) => {
      if (visited.has("weight-of-words")) return "You saw how structure emerges from raw data. What happens when humans start redirecting those learned patterns?";
      if (visited.has("quality")) return "You thought about who defines quality. Now ask: how do those definitions get baked into the model\u2019s behavior?";
      return null;
    },
    "quality": (visited) => {
      if (visited.has("the-shaping")) return "You followed the shaping process. Now step back: who chose the direction of that shaping, and by what standard?";
      if (visited.has("understanding-illusion")) return "You questioned whether models understand. Does that change how you think about rating their outputs?";
      return null;
    },
    "understanding-illusion": (visited) => {
      if (visited.has("next-word")) return "You saw the prediction mechanism. Does knowing how it works change whether you\u2019d call it understanding?";
      if (visited.has("weight-of-words")) return "You explored the internal structure that emerges from training. Does having structure mean having understanding?";
      return null;
    },
    "averaging-problem": (visited) => {
      if (visited.has("next-word")) return "You watched a model predict the next word. What happens when that prediction is averaged across a million different writing styles?";
      if (visited.has("quality")) return "You considered what quality means. How does the averaging problem complicate the idea of a \u2018good\u2019 output?";
      return null;
    },
    "practical-guide": (visited) => {
      if (visited.has("understanding-illusion")) return "You questioned whether models truly understand. How does that uncertainty change how you should use them?";
      if (visited.has("the-shaping")) return "You saw how models get shaped. How does knowing that inform the way you write prompts?";
      return null;
    },
    "tool-user": (visited) => {
      if (visited.has("practical-guide")) return "You learned techniques for working with models. What changes when the model can also work with tools?";
      if (visited.has("next-word")) return "You saw how models predict tokens. What happens when one of those tokens is a function call?";
      return null;
    },
    "near-zero-cost-impact": (visited) => {
      if (visited.has("averaging-problem")) return "You explored what happens when a model averages everything. What happens when that average is reproduced at near-zero cost, billions of times over?";
      if (visited.has("quality")) return "You asked who defines quality. When production cost is zero and volume is infinite, does quality still matter\u2014or does it drown?";
      if (visited.has("digital-footprints")) return "You considered the environmental cost of AI. What\u2019s the full ledger when production itself is nearly free but the infrastructure isn\u2019t?";
      return null;
    },
    "algorithm-as-muse": (visited) => {
      if (visited.has("averaging-problem")) return "You saw how models average everything they\u2019ve read. What does that average look like when it tries to create art?";
      if (visited.has("the-shaping")) return "You explored how models are shaped by human feedback. Who\u2019s shaping the muse\u2014and whose taste does it reflect?";
      return null;
    },
    "echoes-of-the-past": (visited) => {
      if (visited.has("quality")) return "You thought about who decides what\u2019s \u2018good.\u2019 The same question haunts history: whose version of the past does the model learn?";
      if (visited.has("weight-of-words")) return "You saw how models learn from trillions of words. What happens when those words carry centuries of bias?";
      return null;
    },
    "learning-machines-learning-humans": (visited) => {
      if (visited.has("next-word")) return "You watched a model predict the next word. What happens when a student starts relying on that prediction instead of thinking?";
      if (visited.has("understanding-illusion")) return "You questioned whether models understand. Does that uncertainty change how you\u2019d trust one as a teacher?";
      return null;
    },
    "automation-of-cognition": (visited) => {
      if (visited.has("the-shaping")) return "You saw how models are shaped for usefulness. What happens when that usefulness displaces the workers it was shaped to help?";
      if (visited.has("tool-user")) return "You explored what happens when models use tools. What happens when those tools replace the people who used to wield them?";
      return null;
    },
    "black-box-oracle": (visited) => {
      if (visited.has("the-shaping")) return "You saw how human feedback shapes model behavior. But who audits the shaping when the model makes life-altering decisions?";
      if (visited.has("understanding-illusion")) return "You questioned whether models understand. How do you hold accountable a system you can\u2019t explain and that may not understand itself?";
      return null;
    },
    "digital-footprints": (visited) => {
      if (visited.has("near-zero-cost-impact")) return "You saw what happens when production cost approaches zero. But the energy cost doesn\u2019t\u2014every query has a carbon shadow.";
      if (visited.has("weight-of-words")) return "You explored how models learn from trillions of words. What\u2019s the environmental cost of processing that much language?";
      return null;
    },
    "artificial-brain": (visited) => {
      if (visited.has("next-word")) return "You watched a model predict tokens. The brain predicts too\u2014but with 86 billion neurons running on 20 watts. What\u2019s different?";
      if (visited.has("understanding-illusion")) return "You questioned whether models understand. If understanding requires a body, what does that mean for a machine?";
      return null;
    },
    "empathy-machine": (visited) => {
      if (visited.has("understanding-illusion")) return "You questioned whether models understand. If they don\u2019t, can they truly empathize\u2014or only simulate empathy?";
      if (visited.has("next-word")) return "You saw how models predict the next word. When the next word is \u2018I understand how you feel,\u2019 is that prediction or connection?";
      return null;
    },
  },

  marginalia: {
    "weight-of-words": [
      { forParagraph: 0, text: "The loop never actually converges. It just gets close enough." },
      { forParagraph: 2, text: "Chinchilla showed: more data per parameter beats more parameters per data.", condition: (v) => v.has("averaging-problem") },
    ],
    "quality": [
      { forParagraph: 0, text: "The raters are never told they\u2019re defining the soul of the model." },
      { forParagraph: 2, text: "If you came here from The Shaping, notice how RLHF doesn\u2019t change what the model knows\u2014it changes which knowledge surfaces.", condition: (v) => v.has("the-shaping") },
    ],
    "understanding-illusion": [
      { forParagraph: 0, text: "The question itself might be wrong. But it\u2019s the question everyone asks." },
      { forParagraph: 1, text: "Searle\u2019s argument assumed computation and understanding are separate categories. What if they\u2019re not?", condition: (v) => v.has("weight-of-words") },
    ],
    "practical-guide": [
      { forParagraph: 0, text: "Everything in this plateau is a heuristic. The model doesn\u2019t know about any of it." },
      { forParagraph: 1, text: "Chain-of-thought works because the model can attend to its own reasoning tokens.", condition: (v) => v.has("next-word") },
    ],
    "tool-user": [
      { forParagraph: 0, text: "The shift from oracle to agent happened faster than anyone predicted." },
      { forParagraph: 2, text: "When the model writes code that writes code, the oracle metaphor breaks completely.", condition: (v) => v.has("practical-guide") },
    ],
    "near-zero-cost-impact": [
      { forParagraph: 0, text: "The marginal cost of the next copy is zero. The marginal cost of trust is not." },
      { forParagraph: 2, text: "Every previous revolution had friction that slowed adoption. AI\u2019s friction is approaching zero too.", condition: (v) => v.has("the-shaping") },
    ],
  },

  dwellAnnotations: {
    "next-word": {
      "step-0": "The simplest possible action, repeated billions of times.",
      "step-1": "Temperature is the only knob most users ever touch.",
      "step-2": "The context window is the model\u2019s entire reality.",
    },
    "averaging-problem": {
      "step-0": "The average is never anyone\u2019s voice. It\u2019s a new voice.",
      "step-2": "The base model is the most capable and the least useful.",
    },
    "the-shaping": {
      "step-0": "This is where the model learns to have opinions.",
      "step-1": "The reward model is a model of a model of human preference.",
    },
  },

  ghostfadeKeywords: {
    "next-word": ["patterns it has seen", "training history"],
    "averaging-problem": ["training data", "distribution"],
    "the-shaping": ["preference", "rater"],
    "weight-of-words": ["predict tokens", "next token"],
    "quality": ["RLHF", "alignment"],
    "understanding-illusion": ["pattern", "prediction"],
    "practical-guide": ["distribution", "probability"],
    "tool-user": ["reasoning", "agent"],
    "algorithm-as-muse": ["trained on vast amounts", "copyrighted material"],
    "echoes-of-the-past": ["bias", "training data"],
    "learning-machines-learning-humans": ["critical thinking", "cognitive"],
    "automation-of-cognition": ["automat", "cognitive tasks"],
    "black-box-oracle": ["opacity", "interpretable", "explainable"],
    "digital-footprints": ["training", "data center"],
    "artificial-brain": ["neural network", "comprehension"],
    "empathy-machine": ["understand", "genuine"],
    "near-zero-cost-impact": ["average", "quality", "distribution"],
  },

  scatterWords: ["syntax", "semantics", "reasoning", "facts", "grammar", "analogy", "context", "prediction", "structure", "meaning", "inference", "pattern"],
};
