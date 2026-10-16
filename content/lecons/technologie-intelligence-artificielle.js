registerLesson({
  id: "technologie-intelligence-artificielle",
  theme: "technologie",
  title: "L'intelligence artificielle",
  subtitle: "Des premiers programmes aux IA génératives",
  minutes: 8,
  intro: "Elle traduit, rédige, reconnaît des visages et conduit des voitures. Mais qu'est-ce que l'**intelligence artificielle** (IA), d'où vient-elle et comment fonctionne-t-elle ?",
  sections: [
    {
      title: "Les origines",
      text: "En **1950**, le mathématicien britannique **Alan Turing** pose la question : « Les machines peuvent-elles penser ? ». Il propose le **test de Turing** (le « jeu de l'imitation ») : une machine est jugée intelligente si un humain, en conversant avec elle par écrit, ne peut pas la distinguer d'un humain.\n\nLe terme « **intelligence artificielle** » naît lors de la **conférence de Dartmouth** (États-Unis) en **1956**, organisée notamment par **John McCarthy** et **Marvin Minsky**."
    },
    {
      title: "Deux grandes approches",
      text: "- **L'IA symbolique** : on écrit à la main des règles logiques (« si… alors… »). Elle donne les **systèmes experts** des années 1980, par exemple pour le diagnostic médical. Limite : impossible d'écrire des règles pour tout.\n- **L'apprentissage automatique** (*machine learning*) : au lieu de programmer les règles, on fournit à la machine **beaucoup d'exemples** et elle en déduit elle-même des régularités.\n\nL'histoire de l'IA alterne enthousiasme et désillusions : les périodes de reflux des financements sont appelées « **hivers de l'IA** »."
    },
    {
      title: "La révolution du deep learning",
      text: "L'**apprentissage profond** (*deep learning*) utilise des **réseaux de neurones artificiels** à nombreuses couches, vaguement inspirés du cerveau. L'idée est ancienne, mais elle décolle au début des années **2010** grâce à deux ingrédients : les **données massives** d'Internet et la puissance des **processeurs graphiques** (GPU).\n\nEn **2012**, le réseau **AlexNet** pulvérise les records de reconnaissance d'images. En **2016**, **AlphaGo** (DeepMind) bat le champion **Lee Sedol** au jeu de go. Trois pionniers, **Geoffrey Hinton**, **Yann LeCun** (un Français) et **Yoshua Bengio**, reçoivent le **prix Turing 2018**."
    },
    {
      title: "Les IA génératives",
      text: "En **2017**, des chercheurs de Google publient l'architecture **Transformer** (article « *Attention Is All You Need* »). Elle permet d'entraîner des **grands modèles de langage** (LLM) sur d'immenses quantités de textes.\n\nLe principe de base : **prédire le mot suivant** (plus précisément le « *token* » suivant), encore et encore. Après un entraînement massif puis un affinage pour suivre des instructions, ces modèles savent répondre à des questions, résumer, coder… Le lancement de **ChatGPT** en **novembre 2022** a fait découvrir ces outils au grand public."
    },
    {
      title: "Les enjeux",
      text: "- **Fiabilité** : les modèles peuvent produire des réponses fausses mais convaincantes, appelées « **hallucinations** ».\n- **Biais** : ils peuvent reproduire les préjugés présents dans leurs données d'entraînement.\n- **Énergie** : l'entraînement et l'utilisation demandent d'énormes centres de calcul.\n- **Travail et société** : automatisation de tâches, désinformation, droit d'auteur.\n\nL'Union européenne a adopté en **2024** l'**AI Act**, première grande loi encadrant l'IA selon le niveau de risque des usages."
    }
  ],
  funFact: "Dès **1966**, le programme **ELIZA** (MIT) simulait un psychothérapeute en reformulant les phrases de l'utilisateur. Certains se sont attachés à lui, alors qu'il ne « comprenait » rien : on parle depuis d'**effet ELIZA**.",
  keyPoints: [
    "Turing (1950) propose son test ; le terme « intelligence artificielle » naît à Dartmouth en 1956.",
    "IA symbolique (règles écrites à la main) vs apprentissage automatique (apprendre à partir d'exemples).",
    "Deep learning : réseaux de neurones + données massives + GPU ; AlphaGo bat Lee Sedol en 2016.",
    "Les grands modèles de langage (architecture Transformer, 2017) prédisent le token suivant ; ChatGPT sort en novembre 2022.",
    "Enjeux : hallucinations, biais, énergie, emploi ; l'UE adopte l'AI Act en 2024."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Lors de quel événement le terme « intelligence artificielle » est-il né ?",
      options: ["L'Exposition universelle de 1900", "La conférence de Dartmouth en 1956", "Le lancement d'Internet en 1983", "La sortie de ChatGPT en 2022"],
      answer: 1,
      explanation: "La conférence de Dartmouth, organisée notamment par McCarthy et Minsky."
    },
    {
      type: "qcm",
      question: "Que vérifie le test de Turing ?",
      options: ["La vitesse de calcul d'une machine", "Si un humain peut distinguer la machine d'un humain en conversation", "La capacité d'une machine à jouer aux échecs", "La consommation d'énergie d'un ordinateur"],
      answer: 1,
      explanation: "Une machine « réussit » si l'humain ne peut pas la distinguer d'une personne."
    },
    {
      type: "qcm",
      question: "Sur quel principe de base reposent les grands modèles de langage ?",
      options: ["Chercher la réponse dans une base de données", "Prédire le mot (token) suivant", "Copier des pages Web", "Appliquer des règles écrites à la main"],
      answer: 1,
      explanation: "Ils prédisent statistiquement la suite d'un texte, token après token."
    },
    {
      type: "vf",
      question: "Une « hallucination » d'IA est une réponse fausse présentée de façon convaincante.",
      answer: true,
      explanation: "Vrai : d'où l'importance de vérifier les informations importantes."
    },
    {
      type: "qcm",
      question: "Quel programme a battu le champion de go Lee Sedol en 2016 ?",
      options: ["Deep Blue", "Watson", "AlphaGo", "ELIZA"],
      answer: 2,
      explanation: "AlphaGo, développé par DeepMind. (Deep Blue avait battu Kasparov aux échecs en 1997.)"
    },
    {
      type: "qcm",
      question: "Lequel de ces pionniers du deep learning est français ?",
      options: ["Geoffrey Hinton", "Yann LeCun", "Yoshua Bengio", "Alan Turing"],
      answer: 1,
      explanation: "Yann LeCun, prix Turing 2018 avec Hinton et Bengio."
    }
  ]
});
