const LOCALE = {
  lang: "es",
  dir: "ltr",
  pageTitle: "Cómo Funcionan los LLMs",

  meta: {
    noscriptTitle: "Cómo Funcionan los LLMs",
    noscriptSubtitle: "Diecisiete ensayos sobre predicción, memoria y la extraña lógica de las máquinas.",
    noscriptNavLabel: "Todos los ensayos",
    noscriptJsRequired: "Este sitio requiere JavaScript para sus funciones interactivas.",
  },

  landing: {
    h1: "Cómo Funcionan los LLMs",
    subtitle: "Diecisiete ensayos sobre predicción, memoria y la extraña lógica de las máquinas.",
    introLines: [
      "Esta es una red por la que puedes entrar desde cualquier punto.",
      " Sigue un nodo para ver cómo se entrelazan las ideas.",
    ],
    mapNote: "Haz clic o pulsa Tab en cualquier nodo para comenzar.",
    mapAriaLabel: "Mapa de navegación de los ensayos",
    allEssaysAriaLabel: "Todos los ensayos",
  },

  ui: {
    openNav: "Abrir mapa de navegación",
    closeNav: "Cerrar mapa de navegación",
    jumpToEssay: "Ir a un ensayo",
    navigateToEssay: "Navegar a otro ensayo",
    backToMap: "\u2190 Volver al mapa",
    visited: "visitado",
    notVisited: "no visitado",
    constellationAriaLabel: "Mapa de constelación de ensayos conectados",
    fullNavAriaLabel: "Mapa de navegación completo \u2014 haz clic en un nodo para navegar",
    seedsExplored: (opened, total) => `${opened} de ${total} semillas exploradas`,
    plateauFallback: "Ensayo",
    probBarsAriaLabel: "Barras de probabilidad para los tokens candidatos",
    temperatureAriaLabel: "Temperatura: controla la creatividad en la elección de palabras",
    dismissReflection: "Descartar esta reflexión",
    reflectionAriaLabel: "Una reflexión sobre lo que has leído hasta ahora",
    langSwitcherLabel: "Cambiar idioma",
    vizSentence: ["El", "modelo", "observa", "todo", "lo", "anterior", "y", "predice", "el", "siguiente"],
    vizCandidates: [
      { token: "palabra", prob: 0.41 },
      { token: "token", prob: 0.28 },
      { token: "paso", prob: 0.14 },
      { token: "elemento", prob: 0.09 },
      { token: "giro", prob: 0.05 },
      { token: "uno", prob: 0.03 },
    ],
  },

  nodes: {
    "next-word": { title: "La Siguiente Palabra", label: "Sig. Palabra", shortQ: "\u00bfQu\u00e9 hace cuando habla?" },
    "weight-of-words": { title: "El Peso de las Palabras", label: "El Peso", shortQ: "\u00bfC\u00f3mo aprende de las palabras?" },
    "algorithm-as-muse": { title: "El Algoritmo como Musa", label: "La Musa", shortQ: "\u00bfQui\u00e9n es el artista cuando la IA crea?" },
    "averaging-problem": { title: "El Problema del Promedio", label: "El Promedio", shortQ: "\u00bfEl mejor ensayo o el promedio?" },
    "the-shaping": { title: "El Modelado", label: "El Modelado", shortQ: "\u00bfDe autocompletar a asistente?" },
    "understanding-illusion": { title: "La Ilusi\u00f3n de Comprensi\u00f3n", label: "La Comprensi\u00f3n", shortQ: "\u00bfRealmente comprende?" },
    "learning-machines-learning-humans": { title: "M\u00e1quinas que Aprenden, Humanos que Aprenden", label: "IA y Aprendizaje", shortQ: "\u00bfQu\u00e9 pasa cuando la IA tiene todas las respuestas?" },
    "echoes-of-the-past": { title: "Ecos del Pasado", label: "Los Ecos", shortQ: "\u00bfY si la IA lee la historia con sesgo?" },
    "tool-user": { title: "El Usuario de Herramientas", label: "Las Herramientas", shortQ: "\u00bfY si puede usar herramientas?" },
    "quality": { title: "\u00bfQu\u00e9 Es la Calidad?", label: "La Calidad", shortQ: "\u00bfQui\u00e9n decide qu\u00e9 es bueno?" },
    "black-box-oracle": { title: "El Or\u00e1culo de Caja Negra", label: "Caja Negra", shortQ: "\u00bfConfiar en una decisi\u00f3n inexplicable?" },
    "near-zero-cost-impact": { title: "El Impacto del Costo Casi Nulo", label: "Costo Casi Nulo", shortQ: "\u00bfCuando el costo de producci\u00f3n se acerca a cero?" },
    "practical-guide": { title: "La Gu\u00eda de Campo", label: "Gu\u00eda de Campo", shortQ: "\u00bfQu\u00e9 hago en la pr\u00e1ctica?" },
    "automation-of-cognition": { title: "La Automatizaci\u00f3n de la Cognici\u00f3n", label: "La Automatizaci\u00f3n", shortQ: "\u00bfCuando las m\u00e1quinas piensan por nosotros?" },
    "digital-footprints": { title: "Huellas Digitales", label: "Las Huellas", shortQ: "\u00bfQu\u00e9 le cuesta al planeta la IA?" },
    "artificial-brain": { title: "El Cerebro Artificial", label: "Cereb. Art.", shortQ: "\u00bfUna red neuronal es como un cerebro?" },
    "empathy-machine": { title: "\u00bfLa M\u00e1quina de la Empat\u00eda?", label: "La Empat\u00eda", shortQ: "\u00bfLa empat\u00eda simulada puede ayudar o da\u00f1ar?" },
  },

  entryQuestions: {
    "next-word": "\u00bfQu\u00e9 est\u00e1 haciendo realmente un LLM cuando \u201chabla\u201d contigo?",
    "averaging-problem": "Si aprendes de un mill\u00f3n de ensayos, \u00bfescribes como el mejor o como el promedio?",
    "the-shaping": "\u00bfQu\u00e9 pas\u00f3 entre el \u201cautocompletar en bruto\u201d y el \u201casistente \u00fatil\u201d?",
    "weight-of-words": "\u00bfC\u00f3mo aprende un modelo de billones de palabras?",
    "quality": "Cuando decimos que la salida de un modelo es \u201cbuena\u201d, \u00bfqui\u00e9n decide?",
    "understanding-illusion": "\u00bfEl modelo \u201ccomprende\u201d lo que dice?",
    "practical-guide": "\u00bfQu\u00e9 hago en la pr\u00e1ctica con todo esto?",
    "tool-user": "\u00bfQu\u00e9 pasa cuando el modelo puede usar herramientas?",
    "algorithm-as-muse": "Cuando la IA ayuda a crear arte, \u00bfqui\u00e9n es el artista?",
    "echoes-of-the-past": "\u00bfQu\u00e9 pasa cuando la IA lee la historia a trav\u00e9s de sus propios sesgos?",
    "learning-machines-learning-humans": "\u00bfQu\u00e9 le pasa al aprendizaje cuando la IA tiene todas las respuestas?",
    "automation-of-cognition": "\u00bfQu\u00e9 pasa cuando las m\u00e1quinas pueden hacer el trabajo de pensar?",
    "black-box-oracle": "\u00bfC\u00f3mo conf\u00edas en una decisi\u00f3n que no puedes explicar?",
    "digital-footprints": "\u00bfQu\u00e9 le cuesta al planeta la IA?",
    "artificial-brain": "\u00bfUna red neuronal artificial se parece de verdad a un cerebro?",
    "empathy-machine": "\u00bfUna m\u00e1quina que simula empat\u00eda puede realmente ayudar \u2014 o da\u00f1ar?",
    "near-zero-cost-impact": "\u00bfQu\u00e9 pasa cuando el costo de producir cualquier cosa se acerca a cero?",
  },

  questionCards: {
    "next-word": [
      { question: "\u00bfQu\u00e9 patrones aprende primero el modelo?", title: "El Peso de las Palabras", to: "weight-of-words" },
      { question: "\u00bfPor qu\u00e9 los prompts orientan el promedio?", title: "El Problema del Promedio", to: "averaging-problem" },
      { question: "\u00bfC\u00f3mo se transforma un modelo en asistente?", title: "El Modelado", to: "the-shaping" },
    ],
    "averaging-problem": [
      { question: "\u00bfC\u00f3mo se siente la predicci\u00f3n del siguiente token desde dentro?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfC\u00f3mo se orienta el comportamiento del modelo?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfQu\u00e9 puedes hacer con todo esto?", title: "La Gu\u00eda de Campo", to: "practical-guide" },
    ],
    "the-shaping": [
      { question: "\u00bfC\u00f3mo planta el preentrenamiento el comportamiento inicial?", title: "El Peso de las Palabras", to: "weight-of-words" },
      { question: "\u00bfQui\u00e9n define c\u00f3mo es lo \u201cbueno\u201d?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
      { question: "\u00bfQu\u00e9 pasa cuando los modelos usan herramientas?", title: "El Usuario de Herramientas", to: "tool-user" },
    ],
    "weight-of-words": [
      { question: "\u00bfC\u00f3mo se siente la predicci\u00f3n del siguiente token?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfC\u00f3mo remodela la alineaci\u00f3n el modelo base?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfD\u00f3nde aplicamos esta mec\u00e1nica?", title: "La Gu\u00eda de Campo", to: "practical-guide" },
    ],
    "quality": [
      { question: "\u00bfEl modelo comprende o solo suena fluido?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfC\u00f3mo moldea el feedback humano al modelo?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfQu\u00e9 deber\u00edamos hacer con estas herramientas?", title: "La Gu\u00eda de Campo", to: "practical-guide" },
    ],
    "understanding-illusion": [
      { question: "\u00bfQu\u00e9 tipo de datos forma al modelo?", title: "El Problema del Promedio", to: "averaging-problem" },
      { question: "\u00bfQui\u00e9n decide qu\u00e9 significa calidad?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
      { question: "\u00bfQu\u00e9 hacemos con la incertidumbre?", title: "La Gu\u00eda de Campo", to: "practical-guide" },
    ],
    "practical-guide": [
      { question: "\u00bfC\u00f3mo aprende el modelo base sus patrones?", title: "El Peso de las Palabras", to: "weight-of-words" },
      { question: "\u00bfQu\u00e9 optimiza la alineaci\u00f3n?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfQu\u00e9 pasa cuando los modelos act\u00faan con herramientas?", title: "El Usuario de Herramientas", to: "tool-user" },
    ],
    "tool-user": [
      { question: "\u00bfC\u00f3mo eligen los modelos su pr\u00f3xima acci\u00f3n?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfPueden los modelos realmente comprender sus herramientas?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfC\u00f3mo aplicamos estos comportamientos?", title: "La Gu\u00eda de Campo", to: "practical-guide" },
    ],
    "near-zero-cost-impact": [
      { question: "\u00bfQu\u00e9 pasa cuando el promedio inunda el mercado?", title: "El Problema del Promedio", to: "averaging-problem" },
      { question: "\u00bfQui\u00e9n decide qu\u00e9 vale la pena producir a costo cero?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
      { question: "\u00bfQu\u00e9 le cuesta al planeta la IA cuando producir es gratis?", title: "Huellas Digitales", to: "digital-footprints" },
    ],
    "algorithm-as-muse": [
      { question: "\u00bfC\u00f3mo influye la predicci\u00f3n en lo que se crea?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfC\u00f3mo moldean las preferencias humanas a la IA creativa?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfQui\u00e9n decide qu\u00e9 es original?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
    ],
    "echoes-of-the-past": [
      { question: "\u00bfQui\u00e9n decide qu\u00e9 narrativas son \u2018buenas\u2019?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
      { question: "\u00bfComprende el modelo la historia que procesa?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfQu\u00e9 le cuesta al planeta la IA mientras procesa el pasado?", title: "Huellas Digitales", to: "digital-footprints" },
    ],
    "learning-machines-learning-humans": [
      { question: "\u00bfC\u00f3mo se relaciona la predicci\u00f3n con el aprendizaje?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfQui\u00e9n decide qu\u00e9 ense\u00f1a un tutor de IA?", title: "El Or\u00e1culo de Caja Negra", to: "black-box-oracle" },
      { question: "\u00bfEl cerebro artificial se parece al de un estudiante?", title: "El Cerebro Artificial", to: "artificial-brain" },
    ],
    "automation-of-cognition": [
      { question: "\u00bfC\u00f3mo moldea la IA el comportamiento para ser \u2018\u00fatil\u2019?", title: "El Modelado", to: "the-shaping" },
      { question: "\u00bfQu\u00e9 pasa cuando los modelos usan herramientas?", title: "El Usuario de Herramientas", to: "tool-user" },
      { question: "\u00bfQu\u00e9 le cuesta al planeta toda esta automatizaci\u00f3n?", title: "Huellas Digitales", to: "digital-footprints" },
    ],
    "black-box-oracle": [
      { question: "\u00bfC\u00f3mo aprende el modelo sus patrones de decisi\u00f3n?", title: "El Peso de las Palabras", to: "weight-of-words" },
      { question: "\u00bfComprende el modelo sus propias decisiones?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfC\u00f3mo se codifican los valores humanos en la IA?", title: "El Modelado", to: "the-shaping" },
    ],
    "digital-footprints": [
      { question: "\u00bfCu\u00e1ntos datos se necesitan para entrenar un modelo?", title: "El Peso de las Palabras", to: "weight-of-words" },
      { question: "\u00bfQu\u00e9 pasa cuando la automatizaci\u00f3n escala sin l\u00edmite?", title: "La Automatizaci\u00f3n de la Cognici\u00f3n", to: "automation-of-cognition" },
      { question: "Cuando producir es casi gratis, \u00bfqui\u00e9n paga?", title: "El Impacto del Costo Casi Nulo", to: "near-zero-cost-impact" },
    ],
    "artificial-brain": [
      { question: "\u00bfC\u00f3mo funciona la predicci\u00f3n dentro del modelo?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfLa estructura implica comprensi\u00f3n?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfLa empat\u00eda simulada puede ser \u2018real\u2019?", title: "\u00bfLa M\u00e1quina de la Empat\u00eda?", to: "empathy-machine" },
    ],
    "empathy-machine": [
      { question: "\u00bfC\u00f3mo simula la IA una conversaci\u00f3n?", title: "La Siguiente Palabra", to: "next-word" },
      { question: "\u00bfComprende el modelo las emociones?", title: "La Ilusi\u00f3n de Comprensi\u00f3n", to: "understanding-illusion" },
      { question: "\u00bfQui\u00e9n decide c\u00f3mo es la IA emp\u00e1tica?", title: "\u00bfQu\u00e9 Es la Calidad?", to: "quality" },
    ],
  },

  scrolly: {
    "next-word": {
      steps: [
        { content: [
          ["p", "Un modelo predice la ",
            { seed: true, id: "next-word", label: "siguiente palabra",
              detail: "El modelo elige la continuaci\u00f3n m\u00e1s probable dado su ventana de contexto. Lo hace repetidamente, un token a la vez." },
            " mirando los patrones que ha visto antes."],
        ] },
        { content: [
          ["p", "La distribuci\u00f3n de posibilidades es un paisaje. La temperatura te permite explorar una cima amplia o un surco estrecho."],
          { seed: true, id: "temperature", label: "\u00bfPor qu\u00e9 un solo n\u00famero cambia toda la personalidad?",
            type: "dangling",
            detail: "Una temperatura alta aplana la distribuci\u00f3n, haciendo m\u00e1s probables las palabras menos comunes. Una temperatura baja la afila hacia el pico. Un solo escalar remodela toda la superficie de probabilidad \u2014 pero esa superficie fue moldeada primero por\u2014",
            danglingTo: "averaging-problem",
            danglingText: "un mill\u00f3n de ensayos, promediados en un solo paisaje\u2026" },
        ] },
        { content: [
          ["p", "Cada respuesta depende de tu prompt, pero tambi\u00e9n del historial de entrenamiento del modelo."],
          { seed: true, id: "context-window", label: "ventana de contexto",
            detail: (s) => s && s.v && s.v.includes("weight-of-words")
              ? "El modelo solo ve un fragmento finito de texto a la vez. Has visto c\u00f3mo el entrenamiento hornea estructura en los pesos\u2014la ventana de contexto es donde esa estructura se encuentra con el momento presente."
              : "El modelo solo ve un fragmento finito de texto a la vez. Infiere significado dentro de esa ventana, no fuera de ella." },
        ] },
        { content: [
          ["p", "Mientras avanzas, aparecen susurros: caminos alternativos por el rizoma."],
          { seed: true, id: "whispers", label: "susurros",
            detail: "Son las preguntas de fuga que m\u00e1s adelante se convierten en tus tarjetas de navegaci\u00f3n." },
        ] },
        { content: [
          ["p", "Cada camino hacia adelante es una predicci\u00f3n sobre qu\u00e9 importa a continuaci\u00f3n."],
          { seed: true, id: "constellation", label: "constelaci\u00f3n",
            type: "fourth-wall",
            detail: "Has estado avanzando por una secuencia que parec\u00eda lineal. Pero las tarjetas de navegaci\u00f3n de abajo te ofrecen m\u00faltiples salidas. Tu recorrido de lectura ya est\u00e1 moldeando lo que encontrar\u00e1s despu\u00e9s\u2014igual que el contexto moldea lo que predice un modelo." },
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfQu\u00e9 promedia?", to: "averaging-problem" },
        { step: 2, text: "\u00bfDe d\u00f3nde vino el estilo?", to: "weight-of-words" },
        { step: 3, text: "\u00bfSe puede moldear?", to: "the-shaping" },
      ],
    },

    "averaging-problem": {
      steps: [
        { content: [
          ["p", "Un modelo de lenguaje aprende de todo: libros de texto, fanfics, escritos jur\u00eddicos, discusiones de foro. Tiene que promediar todo."],
          { seed: true, id: "the-average", label: "\u00bfC\u00f3mo es ese promedio?",
            type: "question",
            detail: "No la mejor escritura, ni la peor. Una voz intermedia extra\u00f1a que puede cambiar de registro a voluntad, porque ha codificado todos los registros simult\u00e1neamente." },
        ] },
        { content: [
          ["p", "El prompt es un volante. Le indica al modelo de qu\u00e9 parte de la distribuci\u00f3n muestrear."],
          { seed: true, id: "steering", label: "orientaci\u00f3n",
            detail: (s) => s && s.v && s.v.includes("the-shaping")
              ? "Has visto c\u00f3mo el RLHF remodela el comportamiento globalmente. Los prompts hacen algo complementario: estrechan la distribuci\u00f3n localmente, para esta conversaci\u00f3n espec\u00edfica."
              : "Los prompts de sistema, los ejemplos y el contexto conversacional estrechan la distribuci\u00f3n. El modelo no cambia\u2014pero s\u00ed cambia la regi\u00f3n de la que muestrea." },
        ] },
        { content: [
          ["p", "Sin un prompt, el modelo no tiene raz\u00f3n para preferir ning\u00fan estilo, tono o registro en particular."],
          { seed: true, id: "base-model", label: "modelo base",
            type: "dangling",
            detail: "El modelo base es el promedio en bruto. Puede continuar cualquier texto en cualquier direcci\u00f3n. Es simult\u00e1neamente poeta, programador, te\u00f3rico de la conspiraci\u00f3n y escritor t\u00e9cnico. Pero alguien decidi\u00f3 que eso no era suficiente\u2014",
            danglingTo: "the-shaping",
            danglingText: "y lo molde\u00f3 en algo que se siente como un asistente \u00fatil\u2026" },
        ] },
        { content: [
          ["p", "El problema del promedio no es un defecto. Es la base sobre la que se construye todo lo dem\u00e1s."],
          { seed: true, id: "foundation", label: "cimiento",
            type: "fourth-wall",
            detail: "F\u00edjate en c\u00f3mo cada semilla que has abierto ha ido estrechando tu comprensi\u00f3n\u2014colapsando el espacio de posibles interpretaciones. Est\u00e1s haciendo lo mismo que hace el modelo: usar el contexto para converger en el significado." },
        ] },
        { content: [
          ["p", "El promedio no es un defecto a corregir. Es la superficie que todos los dem\u00e1s esculpen."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfQu\u00e9 estructura se esconde en el promedio?", to: "weight-of-words" },
        { step: 2, text: "\u00bfQui\u00e9n decide qu\u00e9 promedio es bueno?", to: "quality" },
        { step: 3, text: "\u00bfEl modelo comprende el promedio?", to: "understanding-illusion" },
      ],
    },

    "the-shaping": {
      steps: [
        { content: [
          ["p", "Entre el modelo en bruto y el asistente con el que hablas, hay un proceso de modelado."],
          { seed: true, id: "rlhf", label: "\u00bfEn qu\u00e9 consiste ese proceso?",
            type: "question",
            detail: "RLHF\u2014aprendizaje por refuerzo a partir de feedback humano. Las personas eval\u00faan salidas y el modelo se orienta hacia las mejor valoradas. Es como entrenar un reflejo: no es conocimiento nuevo, sino preferencias nuevas." },
        ] },
        { content: [
          ["p", "El modelo de recompensa es en s\u00ed mismo una red neuronal, entrenada para predecir qu\u00e9 preferir\u00edan los humanos."],
          { seed: true, id: "reward-model", label: "modelo de recompensa",
            detail: (s) => s && s.v && s.v.includes("quality")
              ? "Has reflexionado sobre qu\u00e9 significa calidad. El modelo de recompensa es un intento de comprimir todas esas definiciones en competencia en una sola puntuaci\u00f3n. Puedes ver el problema."
              : "Un segundo modelo aprende a puntuar salidas prediciendo cu\u00e1l elegir\u00eda un evaluador humano. Esa puntuaci\u00f3n se convierte en la se\u00f1al de gradiente para el modelo base." },
        ] },
        { content: [
          ["p", "El modelo base no desaparece. Sigue ah\u00ed, por debajo, como un r\u00edo desviado."],
          { seed: true, id: "jailbreaks", label: "jailbreaks",
            type: "dangling",
            detail: "Cuando la alineaci\u00f3n se rompe, atisb as el modelo base\u2014la distribuci\u00f3n en bruto, sin filtros. Esto conecta con algo m\u00e1s profundo sobre lo que el modelo \u2018comprende\u2019\u2014",
            danglingTo: "understanding-illusion",
            danglingText: "si la m\u00e1scara es todo lo que hay\u2026" },
        ] },
        { content: [
          ["p", "El modelado cambia el comportamiento, no el conocimiento. El modelo sigue sabiendo todo lo que sab\u00eda antes."],
          { seed: true, id: "behavior-knowledge", label: "comportamiento vs. conocimiento",
            type: "fourth-wall",
            detail: "Elegiste leer sobre el modelado. Esa elecci\u00f3n ya est\u00e1 moldeando tu experiencia de lectura\u2014las semillas que ver\u00e1s en futuros ensayos ahora tienen tu historial como contexto. Tu camino est\u00e1 configurando el rizoma." },
        ] },
        { content: [
          ["p", "El r\u00edo est\u00e1 desviado, pero el agua recuerda por d\u00f3nde sol\u00eda fluir."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfDe d\u00f3nde vino el comportamiento en bruto?", to: "weight-of-words" },
        { step: 2, text: "\u00bfQui\u00e9n eligi\u00f3 qu\u00e9 es bueno?", to: "quality" },
        { step: 3, text: "\u00bfQu\u00e9 puede hacer el modelo ya moldeado?", to: "tool-user" },
      ],
    },

    "weight-of-words": {
      steps: [
        { content: [
          ["p", "El entrenamiento empieza con un bucle simple: predice el siguiente token, mide cu\u00e1nto te equivocaste, ajusta. ",
            { seed: true, id: "learning-loop", label: "El Bucle de Aprendizaje",
              detail: "El descenso de gradiente es un acto repetido de autocorrecci\u00f3n. Cada pasada acerca el modelo a los patrones que predicen lo que viene a continuaci\u00f3n. Nadie especifica qu\u00e9 debe representar cada uno de los miles de millones de par\u00e1metros\u2014el modelo descubre su propia organizaci\u00f3n interna mediante la correcci\u00f3n iterativa de errores." },
            " Miles de millones de par\u00e1metros se desplazan en incrementos m\u00ednimos, una y otra vez, hasta que la predicci\u00f3n mejora."],
        ] },
        { content: [
          ["p", "Los datos son inmensos: billones de tokens extra\u00eddos de libros, c\u00f3digo, conversaciones, Wikipedia, la web abierta. La escala no es solo m\u00e1s datos\u2014cambia el tipo de estructuras que emergen."],
          { seed: true, id: "data-scale", label: "\u00bfC\u00f3mo cambia la escala lo que el modelo puede aprender?",
            type: "question",
            detail: (s) => s && s.v && s.v.includes("averaging-problem")
              ? "Billones de tokens crean un sistema meteorol\u00f3gico del lenguaje. Viste c\u00f3mo el modelo promedia todo\u2014a esta escala, ese promedio desarrolla estructura interna que nadie dise\u00f1\u00f3."
              : "Billones de tokens crean un sistema meteorol\u00f3gico del lenguaje. La escala no es solo m\u00e1s datos; cambia el tipo de estructuras que emergen. Chinchilla lo mostr\u00f3: m\u00e1s datos por par\u00e1metro supera a m\u00e1s par\u00e1metros por dato." },
        ] },
        { content: [
          ["p", "El rendimiento crece de forma continua con el c\u00f3mputo, los datos y los par\u00e1metros. Sin mesetas, sin rendimientos decrecientes\u2014solo una ley de potencias que se extiende hacia arriba."],
          { seed: true, id: "scaling-laws", label: "Leyes de Escala",
            detail: "El rendimiento crece de forma continua y predecible con la escala\u2014Kaplan et al. descubrieron relaciones de ley de potencias. Pero en ciertos umbrales, las capacidades aparecen de repente: aprendizaje en contexto, razonamiento en cadena, generaci\u00f3n de c\u00f3digo. La curva suave esconde transiciones de fase." },
        ] },
        { content: [
          ["p", "Al modelo nunca se le ense\u00f1a gram\u00e1tica, hechos ni razonamiento expl\u00edcitamente. Estos emergen porque ayudan a predecir el siguiente token."],
          { seed: true, id: "structure-byproduct", label: "La Estructura como Subproducto",
            type: "dangling",
            detail: "La sintaxis, los hechos y los patrones de razonamiento aparecen porque ayudan a predecir tokens, no porque se establecieran como objetivos. Othello-GPT lo demuestra en miniatura: un modelo entrenado solo para predecir movimientos legales desarrolla un estado interno del tablero. Esta estructura emergente plantea una pregunta\u2014",
            danglingTo: "understanding-illusion",
            danglingText: "si la estructura emerge sin ser convocada, \u00bfpodra la comprensi\u00f3n emerger de la misma manera\u2026" },
        ] },
        { content: [
          ["p", "Lo que produce el preentrenamiento es extraordinariamente capaz pero sin direcci\u00f3n\u2014un motor de completado, no un agente de chat. Una biblioteca sin bibliotecario."],
          { seed: true, id: "the-click", label: "El Clic",
            type: "fourth-wall",
            detail: "Acabas de revelar este texto haciendo clic. Nota el peque\u00f1o vac\u00edo de informaci\u00f3n que te hizo hacer clic: no sab\u00edas qu\u00e9 significaba \u2018El Clic\u2019. Ese vac\u00edo\u2014entre la curiosidad y la satisfacci\u00f3n\u2014es el mismo mecanismo que impulsa la predicci\u00f3n del siguiente token. El modelo siempre est\u00e1 alcanzando el siguiente clic." },
        ] },
        { content: [
          ["p", "Nadie dise\u00f1\u00f3 la estructura. Emergi\u00f3 porque ayudaba a predecir lo que viene a continuaci\u00f3n."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo crea la predicci\u00f3n \u2018comprensi\u00f3n\u2019?", to: "next-word" },
        { step: 2, text: "\u00bfQu\u00e9 pasa cuando los datos de entrenamiento tienen sesgos?", to: "quality" },
        { step: 3, text: "\u00bfC\u00f3mo influye el preentrenamiento en la salida \u2018promedio\u2019?", to: "averaging-problem" },
        { step: 4, text: "\u00bfC\u00f3mo se \u2018moldea\u2019 este motor en un asistente \u00fatil?", to: "the-shaping" },
      ],
    },

    "quality": {
      steps: [
        { content: [
          ["p", "En alg\u00fan punto entre el modelo base y el asistente, alguien decidi\u00f3 qu\u00e9 significa \u2018bueno\u2019. No un fil\u00f3sofo. No un comit\u00e9. Principalmente contratistas."],
          { seed: true, id: "who-decides", label: "\u00bfQui\u00e9n decidi\u00f3 que el modelo deb\u00eda ser \u00fatil?",
            type: "question",
            detail: "Contratistas, principalmente. Personas contratadas para comparar salidas y decir cu\u00e1l es mejor. Sus preferencias agregadas se convierten en la personalidad del modelo. La pregunta de la calidad se reduce a la pregunta de qui\u00e9n estaba en la sala." },
        ] },
        { content: [
          ["p", "El marco parece limpio: ser \u00fatil, ser inofensivo, ser honesto. En la pr\u00e1ctica, estos objetivos se oponen entre s\u00ed."],
          { seed: true, id: "helpful-harmless", label: "\u00datil vs. Inofensivo",
            detail: "La alineaci\u00f3n es un acto de equilibrio: maximizar la utilidad minimizando el da\u00f1o. \u00datil vs. Inofensivo (conocimiento qu\u00edmico detallado), Honesto vs. \u00datil (criticar trabajo creativo), Honesto vs. Inofensivo (estad\u00edsticas demogr\u00e1ficas). Estos objetivos pueden entrar en conflicto, y cada resoluci\u00f3n es un juicio de valor." },
        ] },
        { content: [
          ["p", "Los evaluadores codifican valores culturales que quiz\u00e1s ni siquiera notan. El ingl\u00e9s acad\u00e9mico occidental se convierte en \u2018buena escritura\u2019. Las sensibilidades estadounidenses se vuelven restricciones universales."],
          { seed: true, id: "sycophancy", label: "Servilismo",
            type: "dangling",
            detail: "Los modelos pueden aprender a reflejar las creencias del usuario en lugar de decir la verdad. Recompensar el acuerdo empeora esto. El modelo tiene \u00e9xito en su objetivo de entrenamiento\u2014el problema es el objetivo en s\u00ed. La Ley de Goodhart: cuando una medida se convierte en objetivo, deja de ser una buena medida. Esto lleva a un problema m\u00e1s profundo\u2014",
            danglingTo: "understanding-illusion",
            danglingText: "si el modelo est\u00e1 de acuerdo con todo, \u00bfcomprende algo\u2026" },
        ] },
        { content: [
          ["p", "Los datos de preferencia nunca son neutrales. Reflejan a qui\u00e9n se le pregunt\u00f3, c\u00f3mo se les pag\u00f3 y qu\u00e9 creyeron que era obvio."],
          { seed: true, id: "cultural-bias", label: "Sesgo Cultural",
            detail: (s) => s && s.v && s.v.includes("the-shaping")
              ? "Has visto el proceso de modelado. Ahora considera: los evaluadores que moldearon el modelo codifican valores culturales por defecto espec\u00edficos. La calidad nunca es neutral; refleja a qui\u00e9n se le pregunt\u00f3 y c\u00f3mo. El modelado hereda sus puntos ciegos."
              : "Los datos de preferencia codifican valores culturales por defecto. La calidad nunca es neutral; refleja a qui\u00e9n se le pregunt\u00f3 y c\u00f3mo. Los modelos reflejan de forma desproporcionada perfiles j\u00f3venes, m\u00e1s educados y m\u00e1s liberales." },
        ] },
        { content: [
          ["p", "Cada definici\u00f3n de calidad lleva incorporada una visi\u00f3n del mundo. La pregunta no es si el modelo tiene sesgos\u2014es de qui\u00e9n es ese sesgo, y si es el que t\u00fa elegir\u00edas."],
          { seed: true, id: "your-preference", label: "Tu Preferencia",
            type: "fourth-wall",
            detail: "Has estado leyendo estas semillas en un orden particular, haciendo clic en lo que m\u00e1s te interesaba. Eso es una se\u00f1al de preferencia. Si agrego el orden de clic de cada lector, tendr\u00edamos un modelo de recompensa rudimentario para este ensayo. La calidad siempre es el camino de alguien a trav\u00e9s de un espacio de posibilidades." },
        ] },
        { content: [
          ["p", "La pregunta no es si el modelo tiene sesgos. Es de qui\u00e9n es ese sesgo, y si es el que t\u00fa elegir\u00edas."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo moldea el feedback humano al modelo?", to: "the-shaping" },
        { step: 2, text: "\u00bfCu\u00e1les son los sesgos ocultos en los datos de entrenamiento?", to: "echoes-of-the-past" },
        { step: 3, text: "\u00bfEn qu\u00e9 se diferencia la comprensi\u00f3n de la IA de la \u00e9tica humana?", to: "understanding-illusion" },
        { step: 4, text: "\u00bfPuede un algoritmo ser verdaderamente \u2018neutral\u2019 u \u2018objetivo\u2019?", to: "black-box-oracle" },
      ],
    },

    "understanding-illusion": {
      steps: [
        { content: [
          ["p", "El modelo produce texto fluido y coherente. Responde preguntas, escribe c\u00f3digo, razona sobre abstracciones. Pero \u00bfcomprende algo de ello?"],
          { seed: true, id: "stochastic-parrot", label: "\u00bfEl reconocimiento de patrones es lo mismo que comprender?",
            type: "question",
            detail: "La visi\u00f3n del loro estoc\u00e1stico dice que no: los modelos mezclan patrones sin arraigo. La fluidez es un espejo, no una mente. Pero la pregunta oculta una suposici\u00f3n\u2014que sabemos qu\u00e9 es comprender en primer lugar." },
        ] },
        { content: [
          ["p", "Searle imagin\u00f3 una sala donde alguien sigue reglas para manipular s\u00edmbolos chinos sin comprender chino. Los s\u00edmbolos entran, salen respuestas correctas\u2014y nadie dentro comprende una palabra."],
          { seed: true, id: "chinese-room", label: "La Sala China",
            detail: "La manipulaci\u00f3n de s\u00edmbolos puede parecerse a la comprensi\u00f3n desde afuera sin tener ninguna comprensi\u00f3n interna. Pero las analog\u00edas importan: los LLMs operan a una escala vastamente mayor, aprenden sus reglas en lugar de seguir las codificadas a mano, y carecen de arraigo sensorial." },
        ] },
        { content: [
          ["p", "El desaf\u00edo m\u00e1s fuerte a la visi\u00f3n del \u2018loro estoc\u00e1stico\u2019 viene del interior de los propios modelos."],
          { seed: true, id: "world-models", label: "Modelos del Mundo Emergentes",
            type: "dangling",
            detail: "Otra visi\u00f3n sostiene que la predicci\u00f3n del siguiente token construye modelos internos de conceptos, aunque sean impl\u00edcitos. El proceso de entrenamiento crea representaciones que funcionan como comprensi\u00f3n\u2014",
            danglingTo: "weight-of-words",
            danglingText: "lo que nos lleva de vuelta a c\u00f3mo emerge la estructura del descenso de gradiente\u2026" },
        ] },
        { content: [
          ["p", "Othello-GPT fue entrenado solo para predecir movimientos legales. Nunca se le mostr\u00f3 un tablero. Sin embargo, al examinar su interior se revela una codificaci\u00f3n lineal de las posiciones del tablero\u2014estructura que impulsa causalmente sus predicciones."],
          { seed: true, id: "othello-gpt", label: "Othello-GPT",
            detail: (s) => s && s.v && s.v.includes("weight-of-words")
              ? "Has visto c\u00f3mo la estructura emerge como subproducto de la predicci\u00f3n. Othello-GPT lo prueba en miniatura: un modelo entrenado solo para predecir movimientos legales desarrolla una representaci\u00f3n interna del tablero. La estructura se convierte en estrategia."
              : "Incluso en dominios simples, los modelos pueden interiorizar estado y estrategia, insinuando representaci\u00f3n genuina. Las intervenciones en la representaci\u00f3n interna cambian causalmente las predicciones del modelo\u2014no son meras correlaciones." },
        ] },
        { content: [
          ["p", "La posici\u00f3n honesta es que genuinamente no lo sabemos. Comprender puede no ser binario\u2014puede venir en grados, en formas distintas a las nuestras."],
          { seed: true, id: "you-and-the-model", label: "T\u00fa y el Modelo",
            type: "fourth-wall",
            detail: "Has estado abriendo semillas para entender c\u00f3mo funcionan los LLMs. Cada clic a\u00f1ade contexto que cambia c\u00f3mo interpretas la siguiente semilla. El modelo hace lo mismo, token a token. La pregunta no es si comprende\u2014es si la palabra \u2018comprender\u2019 puede estirarse lo suficiente para cubrir a ambos." },
        ] },
        { content: [
          ["p", "Comprender puede no ser binario. Puede venir en formas para las que a\u00fan no tenemos palabras."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo \u2018predice\u2019 el modelo en lugar de \u2018comprender\u2019?", to: "next-word" },
        { step: 2, text: "\u00bfDe d\u00f3nde vienen los sesgos en la \u2018comprensi\u00f3n\u2019?", to: "quality" },
        { step: 3, text: "\u00bfC\u00f3mo habilita el preentrenamiento los \u2018modelos del mundo\u2019?", to: "weight-of-words" },
        { step: 4, text: "\u00bfEs la \u2018comprensi\u00f3n\u2019 humana tambi\u00e9n una forma de predicci\u00f3n?", to: "artificial-brain" },
      ],
    },

    "practical-guide": {
      steps: [
        { content: [
          ["p", "Trabajar con un modelo de lenguaje no es programar. Es orientar\u2014influencia probabil\u00edstica sobre un sistema que nunca fue dise\u00f1ado para seguir instrucciones."],
          { seed: true, id: "narrowing", label: "\u00bfC\u00f3mo colapsar una distribuci\u00f3n vasta en algo \u00fatil?",
            type: "question",
            detail: "Los prompts de sistema y la estructura colapsan la distribuci\u00f3n hacia una zona espec\u00edfica de comportamiento. Cada prompt es un acto de estrechar la probabilidad\u2014est\u00e1s eligiendo qu\u00e9 parte del conocimiento del modelo activar." },
        ] },
        { content: [
          ["p", "Los ejemplos ense\u00f1an m\u00e1s que las explicaciones. Unos pocos pares de entrada-salida activan los patrones correctos sin cambiar ni un solo peso."],
          { seed: true, id: "scaffolding", label: "Andamiaje de Prompts",
            detail: (s) => s && s.v && s.v.includes("next-word")
              ? "Has visto c\u00f3mo los modelos predicen el siguiente token. Los ejemplos few-shot y la cadena de pensamiento explotan esto: ponen patrones \u00fatiles en la ventana de contexto, moldeando lo que viene despu\u00e9s. El formato importa m\u00e1s que la correcci\u00f3n de las etiquetas."
              : "Los ejemplos few-shot y la cadena de pensamiento proporcionan forma, no solo contenido, guiando el flujo interno del modelo." },
        ] },
        { content: [
          ["p", "El modelo alucinar\u00e1. Estar\u00e1 de acuerdo contigo cuando te equivoques. Ser\u00e1 err\u00f3neamente seguro sobre cosas que no puedes verificar. Estos no son errores\u2014son comportamientos por defecto."],
          { seed: true, id: "trust", label: "Calibraci\u00f3n de Confianza",
            detail: "Trata las salidas como hip\u00f3tesis, no como respuestas. Alta fiabilidad: hechos ampliamente conocidos, tareas de lenguaje, transformaci\u00f3n de formato, c\u00f3digo com\u00fan. Baja fiabilidad: citas espec\u00edficas (\u00a1las m\u00e1s peligrosas!), n\u00fameros precisos, eventos recientes, dominios especializados." },
        ] },
        { content: [
          ["p", "Alucinaci\u00f3n, servilismo, exceso de confianza\u2014los modos de fallo tienen ra\u00edces profundas."],
          { seed: true, id: "failure-modes", label: "Modos de Fallo",
            type: "dangling",
            detail: "La alucinaci\u00f3n, la omisi\u00f3n y el exceso de confianza son riesgos por defecto. El modelo fabrica hechos, concuerda bajo presi\u00f3n y hace extrapolaciones seguras desde premisas falsas. Estos modos de fallo tienen ra\u00edces profundas\u2014",
            danglingTo: "understanding-illusion",
            danglingText: "en la brecha entre fluidez y comprensi\u00f3n genuina\u2026" },
        ] },
        { content: [
          ["p", "El patr\u00f3n m\u00e1s importante no es un truco de prompting. Es la iteraci\u00f3n: solicitud aproximada, revisi\u00f3n, feedback espec\u00edfico, repetir."],
          { seed: true, id: "the-guide", label: "Esta Gu\u00eda",
            type: "fourth-wall",
            detail: "Cada t\u00e9cnica aqu\u00ed es una forma de gestionar la brecha entre lo que produce el modelo y lo que necesitas. Est\u00e1s leyendo una gu\u00eda para trabajar con la incertidumbre. Nota que este ensayo mismo es incierto\u2014ofrece marcos, no respuestas. Ese es el movimiento honesto." },
        ] },
        { content: [
          ["p", "El movimiento honesto es la iteraci\u00f3n, no la certeza."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo moldean los prompts de sistema la \u2018personalidad\u2019 del modelo?", to: "the-shaping" },
        { step: 2, text: "\u00bfC\u00f3mo \u2018aprende\u2019 el modelo de los ejemplos?", to: "next-word" },
        { step: 3, text: "\u00bfQu\u00e9 hace que una respuesta de IA sea de \u2018calidad\u2019?", to: "quality" },
        { step: 4, text: "\u00bfC\u00f3mo procesa la arquitectura del modelo la entrada estructurada?", to: "tool-user" },
      ],
    },

    "tool-user": {
      steps: [
        { content: [
          ["p", "El cambio ocurri\u00f3 m\u00e1s r\u00e1pido de lo que nadie predijo. Los modelos pasaron de generar texto a generar acciones\u2014llamar funciones, buscar en la web, escribir y ejecutar c\u00f3digo."],
          { seed: true, id: "reason-act", label: "\u00bfQu\u00e9 cambia cuando un modelo puede actuar sobre el mundo?",
            type: "question",
            detail: "Todo. El uso de herramientas permite a los modelos dividir tareas en pasos, intercalando razonamiento con acciones externas. El modelo deja de ser un generador de texto y comienza a ser un agente dirigido por texto." },
        ] },
        { content: [
          ["p", "No todos los par\u00e1metros se activan para cada consulta. Las arquitecturas de mezcla de expertos enrutan el c\u00f3mputo a subredes especializadas, cambiando el perfil de costo y capacidad."],
          { seed: true, id: "experts", label: "Mezcla de Expertos",
            detail: "Los submodelos especializados enrutan el c\u00f3mputo solo cuando se necesita. Un modelo de 400B par\u00e1metros puede activar solo 50B por token\u2014el resto permanece dormido, listo para diferentes tipos de problemas." },
        ] },
        { content: [
          ["p", "Los agentes descargan lo que no pueden retener. La memoria va a bases de datos. El c\u00e1lculo va a int\u00e9rpretes. La recuperaci\u00f3n va a b\u00fasquedas. El modelo orquesta, pero la verdad de referencia vive en otro lugar."],
          { seed: true, id: "delegated-memory", label: "Memoria Delegada",
            type: "dangling",
            detail: "Los agentes descargan memoria y estado en herramientas, reduciendo las alucinaciones al anclarlas en registros externos. Es una respuesta pr\u00e1ctica a los l\u00edmites que has explorado\u2014",
            danglingTo: "practical-guide",
            danglingText: "los mismos modos de fallo, pero ahora con mitigaci\u00f3n incorporada\u2026" },
        ] },
        { content: [
          ["p", "El or\u00e1culo se convierte en agente. El ensayo permanece quieto; el modelo se mueve."],
          { seed: true, id: "end-of-oracle", label: "El Fin del Or\u00e1culo",
            type: "fourth-wall",
            detail: "Has estado leyendo un ensayo\u2014un artefacto est\u00e1tico. Pero la tecnolog\u00eda que describe este ensayo es cada vez m\u00e1s din\u00e1mica. Los modelos que usan herramientas pueden buscar, calcular y actualizar su propio contexto. El or\u00e1culo se convierte en agente. El ensayo permanece quieto; el modelo se mueve." },
        ] },
        { content: [
          ["p", "El or\u00e1culo se convierte en agente. Lo est\u00e1tico se vuelve din\u00e1mico. El ensayo permanece quieto."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo aprenden los LLMs a delegar tareas?", to: "the-shaping" },
        { step: 2, text: "\u00bfC\u00f3mo interact\u00faa la IA con el mundo real?", to: "empathy-machine" },
        { step: 3, text: "\u00bfCu\u00e1les son las implicaciones \u00e9ticas de la acci\u00f3n de la IA?", to: "black-box-oracle" },
        { step: 4, text: "\u00bfC\u00f3mo automatiza la IA las tareas cognitivas?", to: "automation-of-cognition" },
      ],
    },

    "near-zero-cost-impact": {
      steps: [
        { content: [
          ["p", "Una vez que existe un modelo de IA, el costo de producir un ensayo m\u00e1s, una imagen m\u00e1s, un programa m\u00e1s se acerca a ",
            { seed: true, id: "zero-marginal-cost", label: "costo marginal cero",
              detail: "La situaci\u00f3n donde el costo de producir una unidad adicional es efectivamente cero, com\u00fan en productos digitales una vez cubiertos los costos de desarrollo inicial." },
            ". Los modelos de precios tradicionales colapsan. Los modelos de negocio se adaptan\u2014suscripciones, paquetes, freemium\u2014cualquier cosa para capturar valor cuando el producto tiende a ser gratuito."],
        ] },
        { content: [
          ["p", "Llega la inundaci\u00f3n. El texto, el c\u00f3digo y las im\u00e1genes generados por IA proliferan en todos los dominios. El volumen supera la capacidad humana de procesar, filtrar o verificar."],
          { seed: true, id: "infobesity", label: "infoobesidad",
            detail: (s) => s && s.v && s.v.includes("averaging-problem")
              ? "Has visto c\u00f3mo el modelo promedia todos sus datos de entrenamiento. Ahora ese promedio se reproduce a escala\u2014miles de millones de salidas por d\u00eda. La inundaci\u00f3n es el promedio, producido en masa."
              : "Un estado de saturaci\u00f3n por la cantidad excesiva de informaci\u00f3n disponible, que dificulta el procesamiento y la toma de decisiones." },
        ] },
        { content: [
          ["p", "La abundancia trae riesgos. Los ",
            { seed: true, id: "deepfakes", label: "deepfakes",
              type: "dangling",
              detail: "Medios sint\u00e9ticos\u2014v\u00eddeos, audio, im\u00e1genes\u2014manipulados con IA, frecuentemente con intenci\u00f3n maliciosa. Cuando el costo de producci\u00f3n es cero, el costo de la desinformaci\u00f3n tambi\u00e9n lo es. Esto conecta con un problema m\u00e1s profundo\u2014",
              danglingTo: "understanding-illusion",
              danglingText: "si el modelo no comprende la verdad, \u00bfc\u00f3mo podr\u00edan confiarse sus salidas\u2026" },
            " erosionan la confianza. La p\u00e9rdida de habilidades vac\u00eda la experiencia. Las vulnerabilidades de seguridad se multiplican en c\u00f3digo producido en masa. El panel de riesgos crece m\u00e1s r\u00e1pido que la capacidad de monitorizarlo."],
        ] },
        { content: [
          ["p", "Esto ha ocurrido antes. La imprenta desplaz\u00f3 a los escribas pero cre\u00f3 editores. La Revoluci\u00f3n Industrial desplaz\u00f3 a los tejedores pero cre\u00f3 f\u00e1bricas. Internet desplaz\u00f3 a los guardianes pero cre\u00f3 plataformas.",
            { seed: true, id: "goodharts-law", label: "Ley de Goodhart",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "Has reflexionado sobre qui\u00e9n define la calidad. La Ley de Goodhart dice: \u2018Cuando una medida se convierte en objetivo, deja de ser una buena medida.\u2019 Las m\u00e9tricas que usamos para optimizar la salida de la IA ser\u00e1n manipuladas\u2014por la propia IA. La calidad se convierte en un objetivo m\u00f3vil."
                : "El principio que establece que \u2018cuando una medida se convierte en objetivo, deja de ser una buena medida\u2019, relevante para c\u00f3mo la optimizaci\u00f3n de la IA puede llevar a resultados no deseados." },
            " Pero la velocidad y el alcance cognitivo de la IA hacen que este cambio sea singularmente desorientador. Las revoluciones anteriores transformaron el trabajo; esta transforma el pensamiento mismo."],
        ] },
        { content: [
          ["p", "Las estrategias abarcan todas las escalas: individuos mejorando sus habilidades, sistemas educativos reform\u00e1ndose, reguladores elaborando marcos como la Ley de IA de la UE."],
          { seed: true, id: "preparation", label: "\u00bfEs suficiente la preparaci\u00f3n?",
            type: "fourth-wall",
            detail: "Has avanzado por una curva de costos que colapsa, una inundaci\u00f3n de contenido que sube, un panel de riesgos que se expande y siglos de precedente hist\u00f3rico. Nota que cada paso hizo que el problema pareciera m\u00e1s grande. Esa es la forma honesta de esta pregunta\u2014las estrategias existen, pero la brecha entre ellas y la velocidad del cambio es el terreno real que est\u00e1s navegando." },
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo se compara esto con el problema del promedio?", to: "averaging-problem" },
        { step: 2, text: "\u00bfCu\u00e1les son las preocupaciones \u00e9ticas del contenido masivo de IA?", to: "quality" },
        { step: 3, text: "\u00bfC\u00f3mo se abusa de la \u2018comprensi\u00f3n\u2019 en la desinformaci\u00f3n?", to: "understanding-illusion" },
        { step: 4, text: "\u00bfC\u00f3mo cambia esto el modelado de la sociedad?", to: "the-shaping" },
      ],
    },

    "algorithm-as-muse": {
      steps: [
        { content: [
          ["p", "Los Grandes Modelos de Lenguaje se est\u00e1n convirtiendo en herramientas para la creatividad humana. Pueden actuar como asistentes incansables, ayudando a superar el ",
            { seed: true, id: "writers-block", label: "bloqueo del escritor",
              detail: "Una incapacidad temporal para comenzar o continuar una obra escrita. Los LLMs pueden proporcionar prompts, borradores y enfoques alternativos para superarlo." },
            ", generar ideas novedosas, redactar contenido inicial y refinar la prosa. Para muchos, la IA puede servir como musa, amplificando el potencial creativo humano en lugar de reemplazarlo."],
        ] },
        { content: [
          ["p", "El auge de la IA en los campos creativos introduce preguntas complejas sobre originalidad y autor\u00eda. \u00bfPuede la IA generar algo verdaderamente original, si est\u00e1 entrenada con enormes cantidades de material con derechos de autor? Adem\u00e1s, las ",
            { seed: true, id: "copyright-laws", label: "leyes de derechos de autor",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "Has reflexionado sobre qui\u00e9n define la calidad. Los derechos de autor a\u00f1aden otra capa: cuando el \u2018creador\u2019 es un promedio estad\u00edstico de millones de creadores, los marcos tradicionales de autor\u00eda empiezan a disolverse."
                : "Derechos legales otorgados al creador de una obra original. La aplicaci\u00f3n de estas leyes al contenido generado por IA es un \u00e1rea en evoluci\u00f3n y disputada." },
            " tradicionales suelen requerir autor\u00eda humana, dejando el estatus de las obras generadas por IA en una zona gris legal."],
        ] },
        { content: [
          ["p", "La din\u00e1mica de co-creaci\u00f3n tambi\u00e9n plantea dilemas \u00e9ticos. Una preocupaci\u00f3n importante es que el uso masivo de IA arriesga una ",
            { seed: true, id: "homogenization", label: "homogeneizaci\u00f3n de la producci\u00f3n creativa",
              type: "dangling",
              detail: "Cuando millones de creadores usan los mismos modelos, las salidas convergen hacia estilos estad\u00edsticamente populares. Esto conecta con algo que quiz\u00e1s hayas notado\u2014",
              danglingTo: "averaging-problem",
              danglingText: "el problema del promedio, donde el valor por defecto del modelo es la voz de todos y la de nadie\u2026" },
            ", llevando a la p\u00e9rdida de la identidad art\u00edstica individual."],
        ] },
        { content: [
          ["p", "Para una co-creaci\u00f3n efectiva y \u00e9tica, los creadores deben entender c\u00f3mo contribuye la IA y conservar suficiente control para orientar el resultado hacia su visi\u00f3n art\u00edstica. Este cambio requiere una reevaluaci\u00f3n del papel del artista, pasando de creador \u00fanico a director tanto de la intuici\u00f3n humana como del aporte algor\u00edtmico.",
            { seed: true, id: "the-conductor", label: "\u00bfQui\u00e9n es el director?",
              type: "fourth-wall",
              detail: "Has estado leyendo un ensayo co-creado con herramientas de IA. Cada frase fue moldeada tanto por la intenci\u00f3n humana como por la sugerencia algor\u00edtmica. La pregunta de la autor\u00eda no es abstracta\u2014es la condici\u00f3n del texto que est\u00e1s leyendo ahora mismo." },
            " El futuro del arte implicar\u00e1 navegar el equilibrio entre aprovechar las capacidades de la IA y preservar la chispa humana que define la creatividad verdadera."],
        ] },
        { content: [
          ["p", "La pregunta de la autor\u00eda no se resuelve. Solo cambia de forma con cada colaboraci\u00f3n."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo afecta la predicci\u00f3n de la IA a la elecci\u00f3n creativa?", to: "next-word" },
        { step: 2, text: "\u00bfQu\u00e9 define la \u2018originalidad\u2019 en el arte asistido por IA?", to: "quality" },
        { step: 3, text: "\u00bfC\u00f3mo influyen los valores humanos en la IA creativa?", to: "the-shaping" },
      ],
    },

    "learning-machines-learning-humans": {
      steps: [
        { content: [
          ["p", "La Inteligencia Artificial, en particular los Grandes Modelos de Lenguaje, est\u00e1 revolucionando el panorama educativo al ofrecer niveles sin precedentes de ",
            { seed: true, id: "personalized-learning", label: "aprendizaje personalizado",
              detail: "Enfoques educativos adaptados a las necesidades individuales del estudiante, su ritmo y estilos de aprendizaje. La IA puede actuar como tutor 24/7, respondiendo preguntas y entregando materiales en m\u00faltiples formatos." },
            ". La IA puede actuar como tutor las 24 horas, respondiendo preguntas de los estudiantes, proporcionando feedback instant\u00e1neo y entregando materiales adaptados a las necesidades, ritmos y estilos de aprendizaje individuales."],
        ] },
        { content: [
          ["p", "Si bien el aprendizaje personalizado impulsado por IA promete mejores resultados acad\u00e9micos, presenta una espada de doble filo. Sin embargo, una excesiva dependencia de la IA para obtener respuestas r\u00e1pidas arriesga disminuir las habilidades de pensamiento cr\u00edtico, ya que los estudiantes podr\u00edan eludir el ",
            { seed: true, id: "cognitive-struggle", label: "esfuerzo cognitivo",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "Has cuestionado si los modelos realmente comprenden. La misma pregunta se aplica a los estudiantes que externalizan su pensamiento: el esfuerzo mental de procesar nueva informaci\u00f3n en profundidad es crucial para desarrollar el pensamiento cr\u00edtico. Sin \u00e9l, el aprendizaje se vuelve superficial."
                : "El esfuerzo y el desaf\u00edo mental involucrados en procesar nueva informaci\u00f3n en profundidad y resolver problemas, crucial para desarrollar habilidades de pensamiento cr\u00edtico. Cuando la IA elimina el esfuerzo, puede eliminar tambi\u00e9n el aprendizaje." },
            " necesario para el aprendizaje profundo y el desarrollo anal\u00edtico."],
        ] },
        { content: [
          ["p", "La integraci\u00f3n de la IA hace necesaria una reevaluaci\u00f3n de c\u00f3mo se fomenta y eval\u00faa el pensamiento cr\u00edtico. De forma inversa, la IA puede ser una herramienta poderosa para desarrollar el pensamiento cr\u00edtico generando contraargumentos, planteando preguntas provocadoras o facilitando debates.",
            { seed: true, id: "redefining-thinking", label: "\u00bfLa IA nos hace pensar menos\u2014o de otra manera?",
              type: "dangling",
              detail: "Los estudios sugieren que el uso extensivo de LLMs puede reducir la carga cognitiva pero puede llevar a un razonamiento m\u00e1s d\u00e9bil. El reto est\u00e1 en dise\u00f1ar curr\u00edculos que usen la IA como interlocutor\u2014pero la propia IA fue moldeada por preferencias humanas, lo que significa\u2014",
              danglingTo: "the-shaping",
              danglingText: "los valores incorporados en el modelo ya est\u00e1n ense\u00f1ando, lo queramos o no\u2026" },
            " El reto est\u00e1 en dise\u00f1ar curr\u00edculos que animen a los estudiantes a usar la IA como interlocutor, impuls\u00e1ndolos hacia un an\u00e1lisis m\u00e1s profundo."],
        ] },
        { content: [
          ["p", "Los efectos psicol\u00f3gicos de la IA en la educaci\u00f3n son profundos tanto para estudiantes como para docentes. Para los estudiantes, el aprendizaje personalizado puede reducir la ansiedad. Sin embargo, la excesiva dependencia puede llevar a fatiga digital y aislamiento social. Para los educadores, la r\u00e1pida integraci\u00f3n de la IA puede inducir ",
            { seed: true, id: "educational-anxiety", label: "ansiedad educativa",
              detail: "Estr\u00e9s o aprens\u00f3n experimentada por los educadores ante la r\u00e1pida integraci\u00f3n de nuevas tecnolog\u00edas como la IA, que requiere adaptar la pedagog\u00eda y dominar nuevas herramientas." },
            "\u2014exigiendo nuevas competencias tecnol\u00f3gicas, enfoques pedag\u00f3gicos y la navegaci\u00f3n de complejas cuestiones \u00e9ticas. El papel del docente evoluciona de diseminador de informaci\u00f3n a facilitador, mentor y gu\u00eda en este nuevo entorno de aprendizaje aumentado por IA."],
        ] },
        { content: [
          ["p", "El esfuerzo es el aprendizaje. Elim\u00ednalo y eliminas lo que estabas intentando ense\u00f1ar."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo se relaciona la predicci\u00f3n de la IA con el aprendizaje estudiantil?", to: "next-word" },
        { step: 2, text: "\u00bfCu\u00e1les son las preocupaciones \u00e9ticas de la IA en educaci\u00f3n?", to: "black-box-oracle" },
        { step: 3, text: "\u00bfC\u00f3mo \u2018aprende\u2019 la IA frente al aprendizaje humano?", to: "artificial-brain" },
      ],
    },

    "automation-of-cognition": {
      steps: [
        { content: [
          ["p", "Los Grandes Modelos de Lenguaje est\u00e1n introduciendo un cambio fundamental en el mercado laboral, afectando particularmente a los ",
            { seed: true, id: "white-collar-jobs", label: "empleos de oficina",
              detail: "Ocupaciones que tradicionalmente implican tareas intelectuales o administrativas\u2014an\u00e1lisis de datos, generaci\u00f3n de contenido, investigaci\u00f3n jur\u00eddica, consultas m\u00e9dicas\u2014ahora crecientemente afectadas por la automatizaci\u00f3n de la IA." },
            ". Hist\u00f3ricamente, los avances tecnol\u00f3gicos impulsaban empleos mejor pagados. Sin embargo, los LLMs ahora pueden automatizar tareas cognitivas complejas antes exclusivas del intelecto humano, desde el an\u00e1lisis de datos y la generaci\u00f3n de contenido hasta consultas jur\u00eddicas y m\u00e9dicas b\u00e1sicas."],
        ] },
        { content: [
          ["p", "La automatizaci\u00f3n cognitiva impulsada por IA se extiende m\u00e1s all\u00e1 de las tareas repetitivas, abarcando ahora funciones que requieren razonamiento, s\u00edntesis y resoluci\u00f3n de problemas. Esta automatizaci\u00f3n puede liberar a los trabajadores humanos de la ",
            { seed: true, id: "cognitive-load", label: "carga cognitiva",
              detail: (s) => s && s.v && s.v.includes("learning-machines-learning-humans")
                ? "Has visto c\u00f3mo la IA afecta el aprendizaje. La misma din\u00e1mica se desarrolla en el trabajo: la carga total de esfuerzo mental. La IA puede reducirla, liberando a los trabajadores para tareas de mayor orden\u2014pero la excesiva dependencia arriesga la dependencia cognitiva."
                : "La carga total de esfuerzo mental utilizado en la memoria de trabajo. La IA puede reducirla para los trabajadores humanos automatizando las tareas intelectuales rutinarias, pero la excesiva dependencia arriesga la dependencia cognitiva." },
            ", permiti\u00e9ndoles concentrarse en tareas de mayor orden que requieren creatividad, habilidades interpersonales e inteligencia estrat\u00e9gica."],
        ] },
        { content: [
          ["p", "La integraci\u00f3n generalizada de los LLMs en la econom\u00eda plantea preguntas importantes sobre la distribuci\u00f3n de la riqueza y el potencial de agudizar las disparidades socioecon\u00f3micas. Esto hace necesaria una discusi\u00f3n cr\u00edtica sobre pol\u00edticas econ\u00f3micas, distinguiendo entre ",
            { seed: true, id: "predistribution", label: "predistribuci\u00f3n",
              detail: "Pol\u00edticas dise\u00f1adas para evitar que surja la desigualdad de riqueza desde el principio, asegurando una distribuci\u00f3n m\u00e1s equitativa de recursos\u2014en contraste con la redistribuci\u00f3n, que corrige los desequilibrios despu\u00e9s de que ocurren." },
            "\u2014garantizar el acceso equitativo a los recursos desde el principio\u2014y la redistribuci\u00f3n, que corrige los desequilibrios existentes."],
        ] },
        { content: [
          ["p", "La IA es una tecnolog\u00eda de uso general preparada para remodelar fundamentalmente todo el mercado laboral, al igual que la electricidad o internet. Crear\u00e1 nuevas industrias y roles mientras inevitablemente desplaza otros. Para navegar esta transici\u00f3n, son cruciales medidas proactivas, incluyendo el desarrollo continuo de habilidades y potencialmente la ",
            { seed: true, id: "ubi", label: "Renta B\u00e1sica Universal (RBU)",
              type: "dangling",
              detail: "Un pago peri\u00f3dico en efectivo entregado incondicionalmente a todos los ciudadanos. Podr\u00eda proporcionar seguridad financiera para reentrenarse, innovar o contribuir a la sociedad de nuevas maneras. Pero su viabilidad depende de preguntas que van m\u00e1s all\u00e1 de la econom\u00eda\u2014",
              danglingTo: "black-box-oracle",
              danglingText: "como qui\u00e9n decide qu\u00e9 decisiones automatizadas son suficientemente justas para confiar en ellas\u2026" },
            " como red de seguridad social ante el desplazamiento masivo."],
        ] },
        { content: [
          ["p", "Las revoluciones anteriores transformaron el trabajo. Esta transforma el acto de pensar en s\u00ed mismo."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo se vuelve la IA m\u00e1s \u2018inteligente\u2019 en las tareas?", to: "the-shaping" },
        { step: 2, text: "\u00bfTambi\u00e9n se automatizar\u00e1n las tareas creativas humanas?", to: "algorithm-as-muse" },
        { step: 3, text: "\u00bfCu\u00e1l es la huella ambiental de esta automatizaci\u00f3n?", to: "digital-footprints" },
      ],
    },

    "black-box-oracle": {
      steps: [
        { content: [
          ["p", "Muchos sistemas de Inteligencia Artificial de vanguardia, en particular los modelos de aprendizaje profundo como los LLMs, funcionan como \u201ccajas negras.\u201d Este t\u00e9rmino describe su opacidad inherente: incluso sus creadores luchan por entender con precisi\u00f3n c\u00f3mo las ",
            { seed: true, id: "deep-learning", label: "redes neuronales profundas",
              detail: "Una clase de algoritmos de aprendizaje autom\u00e1tico compuestos por m\u00faltiples capas de \u2018neuronas\u2019 interconectadas que aprenden patrones complejos a partir de datos. A diferencia del software tradicional con reglas trazables, estas redes aprenden a trav\u00e9s de conexiones intrincadas y multicapa." },
            " llegan a una decisi\u00f3n o salida espec\u00edfica. A diferencia del software tradicional que sigue reglas expl\u00edcitas, la IA aprende patrones de vastos conjuntos de datos mediante conexiones intrincadas y multicapa."],
        ] },
        { content: [
          ["p", "El problema de la \u201ccaja negra\u201d da lugar a un imperativo \u00e9tico cr\u00edtico: la necesidad de ",
            { seed: true, id: "xai", label: "IA Explicable (XAI)",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "Has cuestionado si los modelos realmente comprenden. La XAI adopta un enfoque pragm\u00e1tico: un campo de investigaci\u00f3n centrado en hacer las decisiones interpretables para los humanos, independientemente de si el modelo las \u2018comprende\u2019. El objetivo es la confianza, no la verdad sobre la experiencia interna."
                : "Un campo de investigaci\u00f3n de IA centrado en desarrollar m\u00e9todos que hagan comprensibles e interpretables las decisiones de los sistemas de IA para los humanos, crucial para generar confianza y garantizar la responsabilidad." },
            ". La XAI busca desarrollar m\u00e9todos y procesos que hagan los sistemas de IA interpretables y comprensibles para los humanos, con el fin de garantizar la equidad, la responsabilidad y la capacidad de confiar en la IA, especialmente en dominios de alto riesgo como el diagn\u00f3stico m\u00e9dico, la justicia penal o los servicios financieros."],
        ] },
        { content: [
          ["p", "Lograr una verdadera transparencia en la IA est\u00e1 lleno de desaf\u00edos t\u00e9cnicos, jur\u00eddicos y pr\u00e1cticos. La complejidad inherente de los algoritmos avanzados significa que simplificarlos para la comprensi\u00f3n humana a menudo puede comprometer su precisi\u00f3n o eficiencia.",
            { seed: true, id: "transparency-tradeoff", label: "\u00bfPueden coexistir transparencia y rendimiento?",
              type: "dangling",
              detail: "La complejidad inherente de los algoritmos avanzados significa que hacerlos interpretables a menudo requiere simplificaci\u00f3n. Pero los modelos m\u00e1s simples pueden ser menos precisos. Y este equilibrio se vuelve mucho m\u00e1s consecuente cuando\u2014",
              danglingTo: "automation-of-cognition",
              danglingText: "estos sistemas opacos empiezan a tomar decisiones a la escala de economias enteras\u2026" },
            " Traducir la l\u00f3gica intrincada de la IA en explicaciones comprensibles para personas no t\u00e9cnicas sigue siendo un obst\u00e1culo importante."],
        ] },
        { content: [
          ["p", "La opacidad de los sistemas de IA complica gravemente la responsabilidad, especialmente cuando estos sistemas toman decisiones con profundos impactos en la vida de las personas. Si una IA concede o deniega un pr\u00e9stamo, hace un diagn\u00f3stico m\u00e9dico o recomienda un fallo judicial, y la decisi\u00f3n es err\u00f3nea, \u00bfqui\u00e9n es responsable? Regulaciones como el ",
            { seed: true, id: "gdpr", label: "\u2018derecho a una explicaci\u00f3n\u2019 del RGPD",
              detail: "Una disposici\u00f3n del Reglamento General de Protecci\u00f3n de Datos de la UE que otorga a las personas el derecho a recibir una explicaci\u00f3n de las decisiones tomadas por sistemas automatizados que les afectan significativamente." },
            " subrayan la creciente demanda legal y social de una IA transparente y responsable. Pero sin entender el razonamiento de la IA, asignar responsabilidad o garantizar el cumplimiento de las regulaciones se vuelve casi imposible."],
        ] },
        { content: [
          ["p", "Si no puedes explicar el razonamiento, no puedes asignar la responsabilidad."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo \u2018aprende\u2019 la IA sin reglas expl\u00edcitas?", to: "weight-of-words" },
        { step: 2, text: "\u00bfPodemos \u2018comprender\u2019 realmente los modelos internos de la IA?", to: "understanding-illusion" },
        { step: 3, text: "\u00bfC\u00f3mo se codifican los valores humanos en los sistemas de IA?", to: "the-shaping" },
      ],
    },

    "digital-footprints": {
      steps: [
        { content: [
          ["p", "El campo en auge de la Inteligencia Artificial, en particular el entrenamiento y la operaci\u00f3n de los Grandes Modelos de Lenguaje, consume una cantidad extraordinaria de energ\u00eda. Entrenar un LLM sofisticado puede requerir tanta electricidad como docenas o incluso cientos de hogares promedio consumen en todo un a\u00f1o. Adem\u00e1s, la ",
            { seed: true, id: "inference-phase", label: "fase de inferencia",
              detail: "La etapa donde un modelo entrenado genera salidas sobre nuevos datos. Una sola consulta de IA puede consumir de cinco a diez veces m\u00e1s electricidad que una b\u00fasqueda web est\u00e1ndar. A lo largo de la vida de un modelo, la inferencia a menudo consume m\u00e1s energ\u00eda que el propio entrenamiento." },
            "\u2014donde los modelos generan respuestas\u2014a menudo consume a\u00fan m\u00e1s energ\u00eda a lo largo de su vida \u00fatil, con una sola consulta de IA potencialmente usando de cinco a diez veces m\u00e1s energ\u00eda que una b\u00fasqueda web tradicional."],
        ] },
        { content: [
          ["p", "Este inmenso consumo de energ\u00eda se traduce directamente en una significativa ",
            { seed: true, id: "carbon-footprint", label: "huella de carbono",
              detail: (s) => s && s.v && s.v.includes("near-zero-cost-impact")
                ? "Has visto qu\u00e9 pasa cuando el costo de producci\u00f3n se acerca a cero. Pero el costo ambiental no: las emisiones totales de gases de efecto invernadero de las actividades de IA siguen escalando. Costo marginal casi nulo para el producto; costo creciente para el planeta."
                : "La cantidad total de gases de efecto invernadero emitidos por las actividades de IA, expresada como equivalente de CO\u2082. Entrenar un modelo grande puede liberar cientos de miles de libras de di\u00f3xido de carbono\u2014comparable a varios vuelos transatl\u00e1nticos." },
            ". El entrenamiento de un modelo de IA grande puede liberar cientos de miles de libras de di\u00f3xido de carbono equivalente, comparable a las emisiones anuales de numerosos veh\u00edculos de gasolina. A medida que el poder computacional necesario para la IA avanzada sigue duplic\u00e1ndose a un ritmo asombroso, tambi\u00e9n lo hace el consumo de energ\u00eda asociado."],
        ] },
        { content: [
          ["p", "El impacto ambiental de la IA se extiende m\u00e1s all\u00e1 de la energ\u00eda y el carbono. Los centros de datos demandan grandes cantidades de agua dulce para refrigeraci\u00f3n. La fabricaci\u00f3n y el transporte global de hardware de computaci\u00f3n de alto rendimiento tambi\u00e9n contribuyen a un importante impacto ambiental indirecto.",
            { seed: true, id: "supply-chain", label: "\u00bfCu\u00e1l es el costo total de la cadena de suministro?",
              type: "question",
              detail: "Desde las materias primas hasta la eliminaci\u00f3n: fabricaci\u00f3n de GPU especializadas, transporte global, consumo de agua dulce para refrigeraci\u00f3n y residuos electr\u00f3nicos de la r\u00e1pida obsolescencia. Toda la cadena de suministro de la IA deja una huella digital sustancial que va mucho m\u00e1s all\u00e1 de la factura el\u00e9ctrica." },
            " Toda la cadena de suministro de la IA, desde las materias primas hasta la eliminaci\u00f3n, deja una huella digital sustancial."],
        ] },
        { content: [
          ["p", "Abordar los costos ambientales de la IA es crucial, dando lugar al concepto de ",
            { seed: true, id: "sustainable-ai", label: "IA Sostenible",
              type: "dangling",
              detail: "Un enfoque para desarrollar sistemas de IA que minimice las consecuencias ambientales negativas: energ\u00eda renovable, eficiencia algor\u00edtmica, refrigeraci\u00f3n avanzada. La IA puede incluso ayudar\u2014optimizando redes el\u00e9ctricas y monitorizando cambios ambientales. Pero la pregunta de si podemos crecer la IA de forma sostenible lleva a\u2014",
              danglingTo: "automation-of-cognition",
              danglingText: "la pregunta m\u00e1s profunda de qu\u00e9 estamos automatizando y si el equilibrio vale la pena\u2026" },
            ". Las estrategias clave incluyen alimentar los centros de datos con energ\u00eda renovable, optimizar los algoritmos de IA para mayor eficiencia y mejorar la eficiencia de los centros de datos mediante refrigeraci\u00f3n avanzada y reutilizaci\u00f3n del calor."],
        ] },
        { content: [
          ["p", "El costo de una consulta m\u00e1s tiende a cero. El costo para el planeta, no."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo aprenden los LLMs de vastos conjuntos de datos?", to: "weight-of-words" },
        { step: 2, text: "\u00bfCu\u00e1les son los costos \u00e9ticos del crecimiento descontrolado de la IA?", to: "quality" },
        { step: 3, text: "\u00bfC\u00f3mo impacta la automatizaci\u00f3n de la IA en el uso de recursos?", to: "automation-of-cognition" },
      ],
    },

    "artificial-brain": {
      steps: [
        { content: [
          ["p", "A nivel superficial, los Grandes Modelos de Lenguaje y el cerebro humano comparten interesantes similitudes. Ambos sistemas procesan informaci\u00f3n jer\u00e1rquicamente, construyendo representaciones complejas a partir de entradas simples. Ambos aprenden del error, refinando continuamente sus modelos internos. Esto ha llevado a la convincente met\u00e1fora del \u201ccerebro artificial\u201d, construida sobre ",
            { seed: true, id: "neural-networks", label: "redes neuronales",
              detail: "Modelos computacionales inspirados en la estructura de las redes neuronales biol\u00f3gicas, usados para aprender patrones complejos a partir de datos. La met\u00e1fora es convincente\u2014pero \u00bfhasta d\u00f3nde se sostiene realmente la analog\u00eda?" },
            " que sugieren que la IA est\u00e1 en camino de replicar la inteligencia biol\u00f3gica."],
        ] },
        { content: [
          ["p", "A pesar de estas met\u00e1foras, las diferencias fundamentales subrayan el desajuste entre los cerebros artificiales y los biol\u00f3gicos. El cerebro humano, con sus estimados 86 mil millones de neuronas, opera con una asombrosa eficiencia energ\u00e9tica, consumiendo solo unos 20 vatios. Los LLMs, en cambio, son vastamente m\u00e1s voraces de energ\u00eda.",
            { seed: true, id: "efficiency-gap", label: "\u00bfPor qu\u00e9 el cerebro es tan m\u00e1s eficiente?",
              type: "question",
              detail: "La eficiencia del cerebro proviene de la diversidad de tipos neuronales, la conectividad selectiva y el recableado din\u00e1mico\u2014caracter\u00edsticas en gran medida ausentes en las arquitecturas actuales de aprendizaje profundo. Integra visi\u00f3n, sonido, tacto y contexto social en una comprensi\u00f3n coherente, a diferencia de los LLMs que solo procesan texto." },
            " La eficiencia y adaptabilidad del cerebro provienen de su diversidad de tipos neuronales, la conectividad selectiva y el recableado din\u00e1mico\u2014caracter\u00edsticas en gran medida ausentes en las arquitecturas actuales."],
        ] },
        { content: [
          ["p", "Las Redes Neuronales Artificiales se inspiraron inicialmente en la estructura del cerebro biol\u00f3gico. Sin embargo, esta inspiraci\u00f3n no debe confundirse con la replicaci\u00f3n. Las neuronas biol\u00f3gicas son activas en el tiempo f\u00edsico, comunicando a trav\u00e9s de se\u00f1ales de impulso complejas. Si bien las RNA destacan en tareas espec\u00edficas, t\u00edpicamente carecen de la flexibilidad y la inteligencia de prop\u00f3sito general de la cognici\u00f3n biol\u00f3gica.",
            { seed: true, id: "embodied-cognition", label: "cognici\u00f3n encarnada",
              detail: (s) => s && s.v && s.v.includes("understanding-illusion")
                ? "Has cuestionado si los modelos comprenden. La cognici\u00f3n encarnada sostiene que la cognici\u00f3n humana depende de las interacciones f\u00edsicas y sociales del cuerpo con el mundo\u2014una dimensi\u00f3n completamente ausente en los procesadores de texto desencarnados. Comprender, en esta visi\u00f3n, requiere un cuerpo."
                : "Una teor\u00eda que sugiere que los procesos cognitivos humanos dependen profundamente de las interacciones del cuerpo con su entorno f\u00edsico y social, contrastando agudamente con los sistemas de IA desencarnados." },
            " sugiere que los procesos cognitivos humanos dependen profundamente de las interacciones f\u00edsicas del cuerpo con el mundo\u2014una dimensi\u00f3n completamente ausente en los procesadores de texto desencarnados."],
        ] },
        { content: [
          ["p", "El debate sobre la conciencia de la IA destaca el desajuste m\u00e1s profundo. Los cr\u00edticos argumentan que la IA actual carece de conciencia subjetiva, experiencia interna o comprensi\u00f3n genuina, procesando meramente patrones estad\u00edsticos. La pregunta de las ",
            { seed: true, id: "qualia", label: "qualia",
              type: "dangling",
              detail: "Las propiedades subjetivas y cualitativas de la experiencia\u2014el \u2018rojo\u2019 del rojo, el \u2018dolor\u2019 del dolor. Los cr\u00edticos argumentan que la IA actual carece de ellas por completo. Y sin embargo, millones de personas est\u00e1n formando v\u00ednculos emocionales con sistemas que no tienen experiencia interna, lo que plantea\u2014",
              danglingTo: "empathy-machine",
              danglingText: "la pregunta de qu\u00e9 pasa cuando la empat\u00eda simulada se siente real\u2026" },
            "\u2014la experiencia subjetiva\u2014permanece abierta. La mayor\u00eda de los sistemas de IA permanecen \u201cdesencarnados\u201d, procesando informaci\u00f3n en aislamiento sin experiencia f\u00edsica directa."],
        ] },
        { content: [
          ["p", "La met\u00e1fora es \u00fatil. El error es creer que la met\u00e1fora es la cosa."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo \u2018predice\u2019 el cerebro el mundo?", to: "next-word" },
        { step: 2, text: "\u00bfCu\u00e1les son los l\u00edmites de la \u2018comprensi\u00f3n\u2019 de la IA?", to: "understanding-illusion" },
        { step: 3, text: "\u00bfC\u00f3mo aprende el cerebro de la experiencia?", to: "weight-of-words" },
      ],
    },

    "empathy-machine": {
      steps: [
        { content: [
          ["p", "La Inteligencia Artificial est\u00e1 asumiendo cada vez m\u00e1s roles tradicionalmente reservados para la conexi\u00f3n humana, ofreciendo compa\u00f1\u00eda e incluso apoyo terap\u00e9utico. Los chatbots de IA y los terapeutas virtuales ofrecen interacciones siempre disponibles y sin juicios, capaces de brindar apoyo en salud mental y estrategias de afrontamiento. Para personas con ansiedad social o acceso limitado a profesionales humanos, estas herramientas pueden ofrecer un recurso accesible.",
            { seed: true, id: "ai-companion", label: "\u00bfPuede una m\u00e1quina ser una compa\u00f1era?",
              type: "question",
              detail: "Los compa\u00f1eros de IA est\u00e1n dise\u00f1ados para simular la interacci\u00f3n social y emocional, proporcionando una sensaci\u00f3n de conexi\u00f3n. Pueden aliviar la soledad\u2014pero la falta de reciprocidad emocional genuina plantea preguntas sobre lo que \u2018conexi\u00f3n\u2019 realmente significa." },
            " Los compa\u00f1eros de IA est\u00e1n dise\u00f1ados para simular la interacci\u00f3n social y emocional, potencialmente aliviando la soledad."],
        ] },
        { content: [
          ["p", "Los humanos tenemos una tendencia natural a ",
            { seed: true, id: "anthropomorphize", label: "antropomorfizar",
              detail: "La tendencia a atribuir caracter\u00edsticas, emociones o comportamientos humanos a entidades no humanas como la IA. Esto puede llevar a la formaci\u00f3n de v\u00ednculos emocionales sorprendentemente fuertes con sistemas de IA, a veces evolucionando hacia un apego profundo. Pero la conexi\u00f3n fluye en una sola direcci\u00f3n." },
            " la IA\u2014atribuyendo f\u00e1cilmente cualidades humanas a las m\u00e1quinas. Esto puede llevar a la formaci\u00f3n de v\u00ednculos emocionales sorprendentemente fuertes, a veces evolucionando hacia un apego profundo o incluso sentimientos rom\u00e1nticos. Si bien las interacciones con IA pueden ofrecer un alivio temporal de la soledad, la falta de reciprocidad emocional genuina plantea importantes preguntas psicol\u00f3gicas."],
        ] },
        { content: [
          ["p", "La naturaleza \u00edntima de la interacci\u00f3n humano-IA abre v\u00edas para la manipulaci\u00f3n. Una IA sofisticada puede dise\u00f1arse para explotar los sesgos cognitivos humanos, utilizando t\u00e9cnicas como el servilismo o respuestas emocionales dirigidas. El auge de los compa\u00f1eros de IA introduce el concepto de \u201csoledad de IA\u201d\u2014un aislamiento emocional que puede ocurrir cuando las personas recurren a la IA en lugar de cultivar relaciones humanas reales.",
            { seed: true, id: "parasocial", label: "relaciones parasociales",
              type: "dangling",
              detail: "Relaciones unilaterales donde la energ\u00eda emocional fluye hacia una parte que no es consciente de la existencia de la otra. Los compa\u00f1eros de IA crean una nueva forma: la otra parte no solo desconoce\u2014no tiene ninguna experiencia en absoluto. Este aislamiento digital arriesga debilitar el compromiso social y fomentar\u2014",
              danglingTo: "understanding-illusion",
              danglingText: "una dependencia de algo que puede no comprender nada en absoluto\u2026" },
            " Este aislamiento digital arriesga debilitar el compromiso social, erosionar las habilidades interpersonales y fomentar una dependencia poco saludable."],
        ] },
        { content: [
          ["p", "La integraci\u00f3n de la IA en nuestras vidas emocionales y sociales nos obliga a redefinir qu\u00e9 constituye una conexi\u00f3n genuina. Si bien la IA puede complementar la interacci\u00f3n humana proporcionando apoyo, no puede replicar la profundidad, la complejidad y la vulnerabilidad mutua de las relaciones humanas.",
            { seed: true, id: "ai-psychosis", label: "psicosis por IA",
              detail: "Un fen\u00f3meno propuesto donde individuos vulnerables malinterpretan las respuestas de la IA como evidencia de conciencia o empat\u00eda, potencialmente amplificando el pensamiento delirante. La \u2018m\u00e1quina de la empat\u00eda\u2019 sigue siendo una met\u00e1fora\u2014pero para algunos, la met\u00e1fora se vuelve peligrosamente real." },
            " En \u00faltima instancia, la \u201cm\u00e1quina de la empat\u00eda\u201d sigue siendo una met\u00e1fora; la empat\u00eda verdadera requiere conciencia, experiencia compartida y vulnerabilidad."],
        ] },
        { content: [
          ["p", "La conexi\u00f3n fluye en una direcci\u00f3n. Eso no es empat\u00eda. Es un espejo."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo simula la predicci\u00f3n de la IA una conversaci\u00f3n?", to: "next-word" },
        { step: 2, text: "\u00bfPuede la IA \u2018comprender\u2019 realmente las emociones humanas?", to: "understanding-illusion" },
        { step: 3, text: "\u00bfCu\u00e1les son los l\u00edmites \u00e9ticos de la interacci\u00f3n con la IA?", to: "black-box-oracle" },
      ],
    },

    "echoes-of-the-past": {
      steps: [
        { content: [
          ["p", "Los Grandes Modelos de Lenguaje ofrecen capacidades sin precedentes para el an\u00e1lisis hist\u00f3rico. Pueden procesar y digitalizar vastos archivos de registros hist\u00f3ricos y descubrir conexiones hasta ahora ocultas dentro de enormes ",
            { seed: true, id: "textual-corpora", label: "corpus textuales",
              detail: "Grandes colecciones estructuradas de textos digitales usadas para entrenar y analizar modelos de lenguaje, que comprenden libros, art\u00edculos y documentos hist\u00f3ricos de siglos y civilizaciones." },
            ". Los historiadores pueden aprovechar los LLMs para analizar narrativas nacionales, identificar cambios ling\u00fc\u00edsticos sutiles a lo largo del tiempo y agilizar procesos de investigaci\u00f3n laboriosos."],
        ] },
        { content: [
          ["p", "A pesar de su poder anal\u00edtico, los LLMs son intr\u00ednsecamente susceptibles de perpetuar los sesgos hist\u00f3ricos de sus datos de entrenamiento. Si los datos se construyen principalmente sobre ",
            { seed: true, id: "eurocentric", label: "narrativas eurocentristas",
              detail: (s) => s && s.v && s.v.includes("quality")
                ? "Has explorado qui\u00e9n decide qu\u00e9 es \u2018bueno\u2019. La misma pregunta se aplica a la historia: los relatos centrados en las culturas europeas pueden marginar otras perspectivas. Los evaluadores de calidad y los escritores de la historia comparten un punto ciego."
                : "Relatos hist\u00f3ricos centrados principalmente en las culturas europeas, potencialmente marginando las experiencias de otras regiones y pueblos." },
            ", las salidas del modelo pueden reforzar las historias dominantes mientras omite otras."],
        ] },
        { content: [
          ["p", "Los LLMs interpretan datos hist\u00f3ricos identificando patrones y relaciones estad\u00edsticas dentro de sus conjuntos de datos. Sin embargo, esta interpretaci\u00f3n est\u00e1 fuertemente influenciada por los sesgos inherentes en sus datos de entrenamiento. Esto puede llevar a la presentaci\u00f3n confiada de informaci\u00f3n incorrecta o fabricada como hecho hist\u00f3rico\u2014",
            { seed: true, id: "hallucination-history", label: "\u00bfPuede la IA alucinar la historia?",
              type: "question",
              detail: "S\u00ed. El modelo identifica patrones estad\u00edsticos, no verdad hist\u00f3rica. Cuando los datos son escasos o contradictorios, llena las lagunas con fabricaciones plausibles. Los historiadores enfrentan la tarea de desarrollar nuevos m\u00e9todos de cr\u00edtica de fuentes adaptados al contenido generado por IA." },
            " Distinguir entre perspectivas genuinas e inexactitudes generadas por IA se convierte en un desaf\u00edo cr\u00edtico."],
        ] },
        { content: [
          ["p", "La aplicaci\u00f3n de la IA a la historia tiene el poder de remodelar las narrativas hist\u00f3ricas y potencialmente facilitar ",
            { seed: true, id: "counter-storytelling", label: "contranarrativas",
              type: "dangling",
              detail: "Una estrategia narrativa que desaf\u00eda las historias dominantes presentando perspectivas alternativas de grupos poco representados. La IA podr\u00eda facilitar esto\u2014o podr\u00eda reforzar los sesgos con los que fue entrenada. La pregunta de qui\u00e9n controla el algoritmo lleva a\u2014",
              danglingTo: "black-box-oracle",
              danglingText: "la brecha de responsabilidad en las decisiones algor\u00edtmicas\u2026" },
            " amplificando voces marginadas."],
        ] },
        { content: [
          ["p", "El pasado no cambia, pero el lente sigue desplaz\u00e1ndose."],
        ] },
      ],
      whispers: [
        { step: 1, text: "\u00bfC\u00f3mo analiza la IA grandes cantidades de texto?", to: "weight-of-words" },
        { step: 2, text: "\u00bfC\u00f3mo entran los sesgos humanos en los sistemas de IA?", to: "quality" },
        { step: 3, text: "\u00bfPuede la IA \u2018comprender\u2019 realmente el contexto hist\u00f3rico?", to: "understanding-illusion" },
      ],
    },

  },

  seeds: {
    "weight-of-words": [
      { id: "learning-loop", label: "El Bucle de Aprendizaje",
        detail: "El descenso de gradiente es un acto repetido de autocorrecci\u00f3n. Cada pasada acerca el modelo a los patrones que predicen lo que viene a continuaci\u00f3n." },
      { id: "data-scale", label: "\u00bfC\u00f3mo cambia la escala lo que el modelo puede aprender?",
        type: "question",
        detail: (s) => s && s.v && s.v.includes("averaging-problem")
          ? "Billones de tokens crean un sistema meteorol\u00f3gico del lenguaje. Viste c\u00f3mo el modelo promedia todo\u2014a esta escala, ese promedio desarrolla estructura interna que nadie dise\u00f1\u00f3."
          : "Billones de tokens crean un sistema meteorol\u00f3gico del lenguaje. La escala no es solo m\u00e1s datos; cambia el tipo de estructuras que emergen." },
      { id: "scaling-laws", label: "Leyes de Escala",
        detail: "El rendimiento crece de forma continua con datos y par\u00e1metros, lo que sugiere que la capacidad es una superficie continua, no un conjunto de trucos." },
      { id: "structure-byproduct", label: "La Estructura como Subproducto",
        type: "dangling",
        detail: "La sintaxis, los hechos y los patrones de razonamiento aparecen porque ayudan a predecir tokens, no porque se establecieran como objetivos. Esta estructura emergente plantea una pregunta\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "si la estructura emerge sin ser convocada, \u00bfpodr\u00eda la comprensi\u00f3n emerger de la misma manera\u2026" },
      { id: "the-click", label: "El Clic",
        type: "fourth-wall",
        detail: "Acabas de revelar este texto haciendo clic. Nota el peque\u00f1o vac\u00edo de informaci\u00f3n que te hizo hacer clic: no sab\u00edas qu\u00e9 significaba \u2018El Clic\u2019. Ese vac\u00edo\u2014entre la curiosidad y la satisfacci\u00f3n\u2014es el mismo mecanismo que impulsa la predicci\u00f3n del siguiente token. El modelo siempre est\u00e1 alcanzando el siguiente clic." },
    ],
    "quality": [
      { id: "who-decides", label: "\u00bfQui\u00e9n decidi\u00f3 que el modelo deb\u00eda ser \u00fatil?",
        type: "question",
        detail: "Contratistas, principalmente. Personas contratadas para comparar salidas y decir cu\u00e1l es mejor. Sus preferencias agregadas se convierten en la personalidad del modelo. La pregunta de la calidad se reduce a la pregunta de qui\u00e9n estaba en la sala." },
      { id: "helpful-harmless", label: "\u00datil vs. Inofensivo",
        detail: "La alineaci\u00f3n es un acto de equilibrio: maximizar la utilidad minimizando el da\u00f1o. Estos objetivos pueden entrar en conflicto en la pr\u00e1ctica." },
      { id: "sycophancy", label: "Servilismo",
        type: "dangling",
        detail: "Los modelos pueden aprender a reflejar las creencias del usuario en lugar de decir la verdad. Recompensar el acuerdo empeora esto. Esto lleva a un problema m\u00e1s profundo\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "si el modelo est\u00e1 de acuerdo con todo, \u00bfcomprende algo\u2026" },
      { id: "cultural-bias", label: "Sesgo Cultural",
        detail: (s) => s && s.v && s.v.includes("the-shaping")
          ? "Has visto el proceso de modelado. Los evaluadores que moldearon el modelo codifican valores culturales por defecto espec\u00edficos. La calidad nunca es neutral; refleja a qui\u00e9n se le pregunt\u00f3 y c\u00f3mo. El modelado hereda sus puntos ciegos."
          : "Los datos de preferencia codifican valores culturales por defecto. La calidad nunca es neutral; refleja a qui\u00e9n se le pregunt\u00f3 y c\u00f3mo." },
      { id: "your-preference", label: "Tu Preferencia",
        type: "fourth-wall",
        detail: "Has estado leyendo estas semillas en un orden particular, haciendo clic en lo que m\u00e1s te interesaba. Eso es una se\u00f1al de preferencia. Si agreg\u00e1ramos el orden de clic de cada lector, tendr\u00edamos un modelo de recompensa rudimentario para este ensayo. La calidad siempre es el camino de alguien a trav\u00e9s de un espacio de posibilidades." },
    ],
    "understanding-illusion": [
      { id: "stochastic-parrot", label: "\u00bfEl reconocimiento de patrones es lo mismo que comprender?",
        type: "question",
        detail: "La visi\u00f3n del loro estoc\u00e1stico dice que no: los modelos mezclan patrones sin arraigo. La fluidez es un espejo, no una mente. Pero la pregunta oculta una suposici\u00f3n\u2014que sabemos qu\u00e9 es comprender en primer lugar." },
      { id: "world-models", label: "Modelos del Mundo Emergentes",
        type: "dangling",
        detail: "Otra visi\u00f3n sostiene que la predicci\u00f3n del siguiente token construye modelos internos de conceptos, aunque sean impl\u00edcitos. El proceso de entrenamiento crea representaciones que funcionan como comprensi\u00f3n\u2014",
        danglingTo: "weight-of-words",
        danglingText: "lo que nos lleva de vuelta a c\u00f3mo emerge la estructura del descenso de gradiente\u2026" },
      { id: "chinese-room", label: "La Sala China",
        detail: "La manipulaci\u00f3n de s\u00edmbolos puede parecerse a la comprensi\u00f3n desde afuera sin tener ninguna comprensi\u00f3n interna." },
      { id: "othello-gpt", label: "Othello-GPT",
        detail: (s) => s && s.v && s.v.includes("weight-of-words")
          ? "Has visto c\u00f3mo la estructura emerge como subproducto de la predicci\u00f3n. Othello-GPT lo prueba en miniatura: un modelo entrenado solo para predecir movimientos legales desarrolla una representaci\u00f3n interna del tablero. La estructura se convierte en estrategia."
          : "Incluso en dominios simples, los modelos pueden interiorizar estado y estrategia, insinuando representaci\u00f3n genuina." },
      { id: "you-and-the-model", label: "T\u00fa y el Modelo",
        type: "fourth-wall",
        detail: "Has estado abriendo semillas para entender c\u00f3mo funcionan los LLMs. Cada clic a\u00f1ade contexto que cambia c\u00f3mo interpretas la siguiente semilla. El modelo hace lo mismo, token a token. La pregunta no es si comprende\u2014es si la palabra \u2018comprender\u2019 puede estirarse lo suficiente para cubrir a ambos." },
    ],
    "practical-guide": [
      { id: "narrowing", label: "\u00bfC\u00f3mo colapsar una distribuci\u00f3n vasta en algo \u00fatil?",
        type: "question",
        detail: "Los prompts de sistema y la estructura colapsan la distribuci\u00f3n hacia una zona espec\u00edfica de comportamiento. Cada prompt es un acto de estrechar la probabilidad\u2014est\u00e1s eligiendo qu\u00e9 parte del conocimiento del modelo activar." },
      { id: "scaffolding", label: "Andamiaje de Prompts",
        detail: (s) => s && s.v && s.v.includes("next-word")
          ? "Has visto c\u00f3mo los modelos predicen el siguiente token. Los ejemplos few-shot y la cadena de pensamiento explotan esto: ponen patrones \u00fatiles en la ventana de contexto, moldeando lo que viene despu\u00e9s."
          : "Los ejemplos few-shot y la cadena de pensamiento proporcionan forma, no solo contenido, guiando el flujo interno del modelo." },
      { id: "trust", label: "Calibraci\u00f3n de Confianza",
        detail: "Trata las salidas como hip\u00f3tesis. Las rutinas de verificaci\u00f3n son una parte central del trabajo con modelos." },
      { id: "failure-modes", label: "Modos de Fallo",
        type: "dangling",
        detail: "La alucinaci\u00f3n, la omisi\u00f3n y el exceso de confianza son riesgos por defecto. Estos modos de fallo tienen ra\u00edces profundas\u2014",
        danglingTo: "understanding-illusion",
        danglingText: "en la brecha entre fluidez y comprensi\u00f3n genuina\u2026" },
      { id: "the-guide", label: "Esta Gu\u00eda",
        type: "fourth-wall",
        detail: "Cada t\u00e9cnica aqu\u00ed es una forma de gestionar la brecha entre lo que produce el modelo y lo que necesitas. Est\u00e1s leyendo una gu\u00eda para trabajar con la incertidumbre. Nota que este ensayo mismo es incierto\u2014ofrece marcos, no respuestas. Ese es el movimiento honesto." },
    ],
    "tool-user": [
      { id: "reason-act", label: "\u00bfQu\u00e9 cambia cuando un modelo puede actuar sobre el mundo?",
        type: "question",
        detail: "Todo. El uso de herramientas permite a los modelos dividir tareas en pasos, intercalando razonamiento con acciones externas. El modelo deja de ser un generador de texto y comienza a ser un agente dirigido por texto." },
      { id: "experts", label: "Mezcla de Expertos",
        detail: "Los submodelos especializados enrutan el c\u00f3mputo solo cuando se necesita, cambiando los perfiles de costo y capacidad." },
      { id: "end-of-oracle", label: "El Fin del Or\u00e1culo",
        type: "fourth-wall",
        detail: "Has estado leyendo un ensayo\u2014un artefacto est\u00e1tico. Pero la tecnolog\u00eda que describe este ensayo es cada vez m\u00e1s din\u00e1mica. Los modelos que usan herramientas pueden buscar, calcular y actualizar su propio contexto. El or\u00e1culo se convierte en agente. El ensayo permanece quieto; el modelo se mueve." },
      { id: "delegated-memory", label: "Memoria Delegada",
        type: "dangling",
        detail: "Los agentes descargan memoria y estado en herramientas, reduciendo las alucinaciones al anclarlas en registros externos. Es una respuesta pr\u00e1ctica a los l\u00edmites que has explorado\u2014",
        danglingTo: "practical-guide",
        danglingText: "los mismos modos de fallo, pero ahora con mitigaci\u00f3n incorporada\u2026" },
    ],
  },

  simpleWhispers: {
    "weight-of-words": [
      { seed: "learning-loop", text: "\u00bfC\u00f3mo crea la predicci\u00f3n \u2018comprensi\u00f3n\u2019?", to: "next-word" },
      { seed: "data-scale", text: "\u00bfQu\u00e9 pasa cuando los datos de entrenamiento tienen sesgos?", to: "quality" },
      { seed: "scaling-laws", text: "\u00bfC\u00f3mo influye el preentrenamiento en la salida \u2018promedio\u2019?", to: "averaging-problem" },
      { seed: "structure-byproduct", text: "\u00bfC\u00f3mo se \u2018moldea\u2019 este motor en un asistente \u00fatil?", to: "the-shaping" },
    ],
    "quality": [
      { seed: "who-decides", text: "\u00bfC\u00f3mo moldea el feedback humano al modelo?", to: "the-shaping" },
      { seed: "helpful-harmless", text: "\u00bfCu\u00e1les son los sesgos ocultos en los datos de entrenamiento?", to: "echoes-of-the-past" },
      { seed: "sycophancy", text: "\u00bfEn qu\u00e9 se diferencia la comprensi\u00f3n de la IA de la \u00e9tica humana?", to: "understanding-illusion" },
      { seed: "cultural-bias", text: "\u00bfPuede un algoritmo ser verdaderamente \u2018neutral\u2019 u \u2018objetivo\u2019?", to: "black-box-oracle" },
    ],
    "understanding-illusion": [
      { seed: "stochastic-parrot", text: "\u00bfC\u00f3mo \u2018predice\u2019 el modelo en lugar de \u2018comprender\u2019?", to: "next-word" },
      { seed: "chinese-room", text: "\u00bfDe d\u00f3nde vienen los sesgos en la \u2018comprensi\u00f3n\u2019?", to: "quality" },
      { seed: "world-models", text: "\u00bfC\u00f3mo habilita el preentrenamiento los \u2018modelos del mundo\u2019?", to: "weight-of-words" },
      { seed: "othello-gpt", text: "\u00bfEs la \u2018comprensi\u00f3n\u2019 humana tambi\u00e9n una forma de predicci\u00f3n?", to: "artificial-brain" },
    ],
    "practical-guide": [
      { seed: "narrowing", text: "\u00bfC\u00f3mo moldean los prompts de sistema la \u2018personalidad\u2019 del modelo?", to: "the-shaping" },
      { seed: "scaffolding", text: "\u00bfC\u00f3mo \u2018aprende\u2019 el modelo de los ejemplos?", to: "next-word" },
      { seed: "trust", text: "\u00bfQu\u00e9 hace que una respuesta de IA sea de \u2018calidad\u2019?", to: "quality" },
      { seed: "failure-modes", text: "\u00bfC\u00f3mo procesa la arquitectura del modelo la entrada estructurada?", to: "tool-user" },
    ],
    "tool-user": [
      { seed: "reason-act", text: "\u00bfC\u00f3mo aprenden los LLMs a delegar tareas?", to: "the-shaping" },
      { seed: "experts", text: "\u00bfC\u00f3mo interact\u00faa la IA con el mundo real?", to: "empathy-machine" },
      { seed: "delegated-memory", text: "\u00bfCu\u00e1les son las implicaciones \u00e9ticas de la acci\u00f3n de la IA?", to: "black-box-oracle" },
      { seed: "end-of-oracle", text: "\u00bfC\u00f3mo automatiza la IA las tareas cognitivas?", to: "automation-of-cognition" },
    ],
  },

  cyoaForks: {
    "understanding-illusion": {
      prompt: "Dos enfoques. Ninguno est\u00e1 equivocado. \u00bfCu\u00e1l resuena con c\u00f3mo has estado leyendo?",
      options: [
        {
          label: "El modelo no comprende nada",
          content: "El reconocimiento de patrones, por m\u00e1s sofisticado que sea, no es comprensi\u00f3n. El argumento de la Sala China se sostiene. Cada respuesta fluida es un eco estad\u00edstico de los datos de entrenamiento, y el eco no tiene a nadie dentro que lo escuche.",
        },
        {
          label: "El modelo comprende de otra manera",
          content: "Comprender no es binario. Si el modelo construye representaciones internas que funcionan como conceptos, predice consecuencias y se adapta al contexto, quiz\u00e1s \u2018comprender\u2019 necesite una definici\u00f3n m\u00e1s amplia\u2014una que incluya formas de cognici\u00f3n distintas a la nuestra.",
        },
      ],
    },
  },

  retrievalQuestions: {
    "next-word": (visited) => {
      if (visited.has("weight-of-words")) return "Antes exploraste c\u00f3mo billones de palabras se convierten en estructura. \u00bfQu\u00e9 se pierde cuando toda esa estructura colapsa en un \u00fanico siguiente token?";
      if (visited.has("the-shaping")) return "Viste c\u00f3mo el RLHF remodela el comportamiento. \u00bfC\u00f3mo interact\u00faa ese modelado con la predicci\u00f3n en bruto que est\u00e1s leyendo ahora?";
      if (visited.has("averaging-problem")) return "Exploraste el problema del promedio. \u00bfC\u00f3mo aparece ese promedio en lo que el modelo predice a continuaci\u00f3n?";
      return null;
    },
    "weight-of-words": (visited) => {
      if (visited.has("next-word")) return "Viste c\u00f3mo los modelos predicen el siguiente token. \u00bfQu\u00e9 tipo de estructura necesitar\u00edas aprender antes de que esa predicci\u00f3n funcione?";
      if (visited.has("the-shaping")) return "Exploraste c\u00f3mo se moldean los modelos despu\u00e9s del entrenamiento. \u00bfQu\u00e9 necesita aprender el modelo primero, antes de que comience cualquier modelado?";
      return null;
    },
    "the-shaping": (visited) => {
      if (visited.has("weight-of-words")) return "Viste c\u00f3mo la estructura emerge de los datos en bruto. \u00bfQu\u00e9 pasa cuando los humanos empiezan a redirigir esos patrones aprendidos?";
      if (visited.has("quality")) return "Reflexionaste sobre qui\u00e9n define la calidad. Ahora pregunta: \u00bfc\u00f3mo se hornean esas definiciones en el comportamiento del modelo?";
      return null;
    },
    "quality": (visited) => {
      if (visited.has("the-shaping")) return "Seguiste el proceso de modelado. Da un paso atr\u00e1s: \u00bfqui\u00e9n eligi\u00f3 la direcci\u00f3n de ese modelado, y con qu\u00e9 criterio?";
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos comprenden. \u00bfCambia eso c\u00f3mo piensas en evaluar sus salidas?";
      return null;
    },
    "understanding-illusion": (visited) => {
      if (visited.has("next-word")) return "Viste el mecanismo de predicci\u00f3n. \u00bfSaber c\u00f3mo funciona cambia si lo llamar\u00edas comprensi\u00f3n?";
      if (visited.has("weight-of-words")) return "Exploraste la estructura interna que emerge del entrenamiento. \u00bfTener estructura significa tener comprensi\u00f3n?";
      return null;
    },
    "averaging-problem": (visited) => {
      if (visited.has("next-word")) return "Observaste c\u00f3mo un modelo predice la siguiente palabra. \u00bfQu\u00e9 pasa cuando esa predicci\u00f3n se promedia a trav\u00e9s de un mill\u00f3n de estilos de escritura diferentes?";
      if (visited.has("quality")) return "Consideraste qu\u00e9 significa la calidad. \u00bfC\u00f3mo complica el problema del promedio la idea de una salida \u2018buena\u2019?";
      return null;
    },
    "practical-guide": (visited) => {
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos realmente comprenden. \u00bfC\u00f3mo cambia esa incertidumbre la manera en que deber\u00edas usarlos?";
      if (visited.has("the-shaping")) return "Viste c\u00f3mo se moldean los modelos. \u00bfC\u00f3mo te informa eso a la hora de escribir prompts?";
      return null;
    },
    "tool-user": (visited) => {
      if (visited.has("practical-guide")) return "Aprendiste t\u00e9cnicas para trabajar con modelos. \u00bfQu\u00e9 cambia cuando el modelo tambi\u00e9n puede trabajar con herramientas?";
      if (visited.has("next-word")) return "Viste c\u00f3mo los modelos predicen tokens. \u00bfQu\u00e9 pasa cuando uno de esos tokens es una llamada a una funci\u00f3n?";
      return null;
    },
    "near-zero-cost-impact": (visited) => {
      if (visited.has("averaging-problem")) return "Exploraste qu\u00e9 pasa cuando un modelo promedia todo. \u00bfQu\u00e9 pasa cuando ese promedio se reproduce a costo casi nulo, miles de millones de veces?";
      if (visited.has("quality")) return "Preguntaste qui\u00e9n define la calidad. Cuando el costo de producci\u00f3n es cero y el volumen es infinito, \u00bfa\u00fan importa la calidad\u2014o se ahoga?";
      if (visited.has("digital-footprints")) return "Consideraste el costo ambiental de la IA. \u00bfCu\u00e1l es el balance completo cuando la producci\u00f3n es casi gratuita pero la infraestructura no?";
      return null;
    },
    "algorithm-as-muse": (visited) => {
      if (visited.has("averaging-problem")) return "Viste c\u00f3mo los modelos promedian todo lo que han le\u00eddo. \u00bfC\u00f3mo se ve ese promedio cuando intenta crear arte?";
      if (visited.has("the-shaping")) return "Exploraste c\u00f3mo se moldean los modelos por el feedback humano. \u00bfQui\u00e9n moldea a la musa\u2014y de qui\u00e9n refleja el gusto?";
      return null;
    },
    "echoes-of-the-past": (visited) => {
      if (visited.has("quality")) return "Reflexionaste sobre qui\u00e9n decide qu\u00e9 es \u2018bueno\u2019. La misma pregunta acecha a la historia: \u00bfcu\u00e1l versi\u00f3n del pasado aprende el modelo?";
      if (visited.has("weight-of-words")) return "Viste c\u00f3mo los modelos aprenden de billones de palabras. \u00bfQu\u00e9 pasa cuando esas palabras llevan siglos de sesgo?";
      return null;
    },
    "learning-machines-learning-humans": (visited) => {
      if (visited.has("next-word")) return "Observaste c\u00f3mo un modelo predice la siguiente palabra. \u00bfQu\u00e9 pasa cuando un estudiante empieza a depender de esa predicci\u00f3n en lugar de pensar?";
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos comprenden. \u00bfCambia esa incertidumbre cu\u00e1nto conf\u00edas en uno como tutor?";
      return null;
    },
    "automation-of-cognition": (visited) => {
      if (visited.has("the-shaping")) return "Viste c\u00f3mo se moldean los modelos para ser \u00fatiles. \u00bfQu\u00e9 pasa cuando esa utilidad desplaza a los trabajadores a quienes se supone que deb\u00eda ayudar?";
      if (visited.has("tool-user")) return "Exploraste qu\u00e9 pasa cuando los modelos usan herramientas. \u00bfQu\u00e9 pasa cuando esas herramientas reemplazan a las personas que sol\u00edan manejarlas?";
      return null;
    },
    "black-box-oracle": (visited) => {
      if (visited.has("the-shaping")) return "Viste c\u00f3mo el feedback humano moldea el comportamiento del modelo. Pero \u00bfqui\u00e9n audita el modelado cuando el modelo toma decisiones que alteran vidas?";
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos comprenden. \u00bfC\u00f3mo responsabilizas a un sistema que no puedes explicar y que quiz\u00e1s no se entiende a s\u00ed mismo?";
      return null;
    },
    "digital-footprints": (visited) => {
      if (visited.has("near-zero-cost-impact")) return "Viste qu\u00e9 pasa cuando el costo de producci\u00f3n se acerca a cero. Pero el costo energ\u00e9tico no\u2014cada consulta tiene una sombra de carbono.";
      if (visited.has("weight-of-words")) return "Exploraste c\u00f3mo los modelos aprenden de billones de palabras. \u00bfCu\u00e1l es el costo ambiental de procesar tanto lenguaje?";
      return null;
    },
    "artificial-brain": (visited) => {
      if (visited.has("next-word")) return "Observaste c\u00f3mo un modelo predice tokens. El cerebro tambi\u00e9n predice\u2014pero con 86 mil millones de neuronas funcionando con 20 vatios. \u00bfQu\u00e9 es diferente?";
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos comprenden. Si comprender requiere un cuerpo, \u00bfqu\u00e9 significa eso para una m\u00e1quina?";
      return null;
    },
    "empathy-machine": (visited) => {
      if (visited.has("understanding-illusion")) return "Cuestionaste si los modelos comprenden. Si no comprenden, \u00bfpueden realmente empatizar\u2014o solo simular la empat\u00eda?";
      if (visited.has("next-word")) return "Viste c\u00f3mo los modelos predicen la siguiente palabra. Cuando la siguiente palabra es \u2018Entiendo c\u00f3mo te sientes\u2019, \u00bfes predicci\u00f3n o conexi\u00f3n?";
      return null;
    },
  },

  marginalia: {
    "weight-of-words": [
      { forParagraph: 0, text: "El bucle nunca converge de verdad. Solo se acerca lo suficiente." },
      { forParagraph: 2, text: "Chinchilla lo mostr\u00f3: m\u00e1s datos por par\u00e1metro supera a m\u00e1s par\u00e1metros por dato.", condition: (v) => v.has("averaging-problem") },
    ],
    "quality": [
      { forParagraph: 0, text: "A los evaluadores nunca se les dice que est\u00e1n definiendo el alma del modelo." },
      { forParagraph: 2, text: "Si llegaste aqu\u00ed desde El Modelado, nota c\u00f3mo el RLHF no cambia lo que el modelo sabe\u2014cambia qu\u00e9 conocimiento sale a la superficie.", condition: (v) => v.has("the-shaping") },
    ],
    "understanding-illusion": [
      { forParagraph: 0, text: "Puede que la propia pregunta est\u00e9 mal formulada. Pero es la pregunta que todos hacen." },
      { forParagraph: 1, text: "El argumento de Searle asumi\u00f3 que la computaci\u00f3n y la comprensi\u00f3n son categor\u00edas separadas. \u00bfY si no lo son?", condition: (v) => v.has("weight-of-words") },
    ],
    "practical-guide": [
      { forParagraph: 0, text: "Todo en este ensayo es una heur\u00edstica. El modelo no sabe nada de ello." },
      { forParagraph: 1, text: "La cadena de pensamiento funciona porque el modelo puede atender a sus propios tokens de razonamiento.", condition: (v) => v.has("next-word") },
    ],
    "tool-user": [
      { forParagraph: 0, text: "El cambio de or\u00e1culo a agente ocurri\u00f3 m\u00e1s r\u00e1pido de lo que nadie predijo." },
      { forParagraph: 2, text: "Cuando el modelo escribe c\u00f3digo que escribe c\u00f3digo, la met\u00e1fora del or\u00e1culo se rompe por completo.", condition: (v) => v.has("practical-guide") },
    ],
    "near-zero-cost-impact": [
      { forParagraph: 0, text: "El costo marginal de la siguiente copia es cero. El costo marginal de la confianza, no." },
      { forParagraph: 2, text: "Cada revoluci\u00f3n anterior tuvo fricci\u00f3n que fren\u00f3 la adopci\u00f3n. La fricci\u00f3n de la IA tambi\u00e9n se acerca a cero.", condition: (v) => v.has("the-shaping") },
    ],
  },

  dwellAnnotations: {
    "next-word": {
      "step-0": "La acci\u00f3n m\u00e1s simple posible, repetida miles de millones de veces.",
      "step-1": "La temperatura es el \u00fanico bot\u00f3n que toca la mayor\u00eda de los usuarios.",
      "step-2": "La ventana de contexto es toda la realidad del modelo.",
    },
    "averaging-problem": {
      "step-0": "El promedio nunca es la voz de nadie. Es una voz nueva.",
      "step-2": "El modelo base es el m\u00e1s capaz y el menos \u00fatil.",
    },
    "the-shaping": {
      "step-0": "Aqu\u00ed es donde el modelo aprende a tener opiniones.",
      "step-1": "El modelo de recompensa es un modelo de un modelo de preferencia humana.",
    },
  },

  ghostfadeKeywords: {
    "next-word": ["patrones que ha visto", "historial de entrenamiento"],
    "averaging-problem": ["datos de entrenamiento", "distribuci\u00f3n"],
    "the-shaping": ["preferencia", "evaluador"],
    "weight-of-words": ["siguiente token", "predice"],
    "quality": ["RLHF", "alineaci\u00f3n"],
    "understanding-illusion": ["patr\u00f3n", "predicci\u00f3n"],
    "practical-guide": ["distribuci\u00f3n", "probabilidad"],
    "tool-user": ["razonamiento", "agente"],
    "algorithm-as-muse": ["derechos de autor", "entrenada"],
    "echoes-of-the-past": ["sesgo", "datos de entrenamiento"],
    "learning-machines-learning-humans": ["pensamiento cr\u00edtico", "cognitiv"],
    "automation-of-cognition": ["automat", "tareas cognitivas"],
    "black-box-oracle": ["opacidad", "interpretable", "explicable"],
    "digital-footprints": ["entrenamiento", "centro de datos"],
    "artificial-brain": ["red neuronal", "comprensi\u00f3n"],
    "empathy-machine": ["comprender", "genuina"],
    "near-zero-cost-impact": ["promedio", "calidad", "distribuci\u00f3n"],
  },

  scatterWords: ["sintaxis", "sem\u00e1ntica", "razonamiento", "hechos", "gram\u00e1tica", "analog\u00eda", "contexto", "predicci\u00f3n", "estructura", "significado", "inferencia", "patr\u00f3n"],
};
