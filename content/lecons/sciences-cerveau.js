registerLesson({
  id: "sciences-cerveau",
  theme: "sciences",
  title: "Le cerveau humain",
  subtitle: "L'organe le plus complexe de l'Univers connu",
  minutes: 6,
  intro: "Il pèse environ **1,4 kg**, consomme **20 %** de l'énergie de votre corps et contient des dizaines de milliards de cellules. Petit tour du **cerveau**, cet organe qui vous permet de lire ces lignes.",
  sections: [
    {
      title: "Des milliards de neurones",
      text: "Le cerveau humain compte environ **86 milliards de neurones**, des cellules spécialisées qui communiquent par des signaux **électriques** et **chimiques**.\n\nChaque neurone peut être relié à des milliers d'autres par des **synapses** : il y en aurait plusieurs centaines de milliers de milliards. À la synapse, le signal passe d'un neurone à l'autre grâce à des molécules appelées **neurotransmetteurs**, comme la **dopamine** (plaisir, motivation) ou la **sérotonine** (humeur)."
    },
    {
      title: "Les grandes régions",
      text: "- Le **cortex cérébral**, la couche externe plissée, est le siège des fonctions les plus élaborées. Il est divisé en **lobes** : **frontal** (décision, planification, langage), **pariétal** (toucher, espace), **temporal** (audition, mémoire), **occipital** (vision).\n- Le **cervelet**, à l'arrière, coordonne les **mouvements** et l'équilibre.\n- Le **tronc cérébral** contrôle les fonctions vitales automatiques : respiration, battements du cœur.\n- L'**hippocampe** joue un rôle clé dans la **mémoire**, l'**amygdale** dans les **émotions**, notamment la peur."
    },
    {
      title: "Deux hémisphères",
      text: "Le cerveau est divisé en deux **hémisphères**, reliés par le **corps calleux**. Chaque hémisphère contrôle surtout la **moitié opposée** du corps : l'hémisphère gauche commande le côté droit, et inversement.\n\nCertaines fonctions sont plutôt localisées d'un côté : chez la plupart des gens, le **langage** dépend surtout de l'hémisphère **gauche** (aires de **Broca** et de **Wernicke**). Mais l'idée qu'il existerait des personnes « cerveau gauche » (logiques) et « cerveau droit » (créatives) est un **mythe** : les deux hémisphères travaillent en permanence ensemble."
    },
    {
      title: "La plasticité cérébrale",
      text: "Le cerveau n'est pas figé : il se **transforme** tout au long de la vie selon nos expériences et nos apprentissages. C'est la **plasticité cérébrale**. Apprendre une langue, un instrument ou un nouveau geste renforce certaines connexions.\n\nCette plasticité permet aussi de récupérer partiellement après un **AVC** : d'autres zones peuvent prendre le relais de celles qui ont été endommagées. Le **sommeil** joue un rôle essentiel pour consolider les souvenirs et « nettoyer » le cerveau."
    },
    {
      title: "Idées reçues",
      text: "- **« On n'utilise que 10 % de son cerveau »** : faux ! L'imagerie médicale montre que toutes les zones du cerveau sont actives, même si elles ne le sont pas toutes en même temps.\n- **« Les neurones ne se renouvellent jamais »** : partiellement faux. Il existe une production de nouveaux neurones (la **neurogenèse**) dans certaines zones, comme l'hippocampe, même si son ampleur chez l'adulte est encore débattue.\n- **« Un gros cerveau rend plus intelligent »** : faux. Le cerveau d'Einstein était plutôt plus petit que la moyenne."
    }
  ],
  funFact: "Le cerveau ne ressent pas la douleur : il ne possède pas de récepteurs de la douleur. C'est pourquoi certaines opérations du cerveau peuvent être réalisées sur un **patient éveillé**, qui parle ou joue d'un instrument pendant l'intervention pour aider les chirurgiens.",
  keyPoints: [
    "Le cerveau pèse environ 1,4 kg, consomme 20 % de l'énergie du corps et compte environ 86 milliards de neurones.",
    "Les neurones communiquent par des synapses et des neurotransmetteurs (dopamine, sérotonine).",
    "Cortex et ses lobes, cervelet (mouvement), tronc cérébral (fonctions vitales), hippocampe (mémoire).",
    "Chaque hémisphère contrôle surtout la moitié opposée du corps ; « cerveau gauche/droit » est un mythe.",
    "La plasticité cérébrale permet d'apprendre toute la vie ; le mythe des 10 % est faux."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Combien de neurones compte environ le cerveau humain ?",
      options: ["86 millions", "86 milliards", "86 000 milliards", "1 million"],
      answer: 1,
      explanation: "Environ 86 milliards."
    },
    {
      type: "qcm",
      question: "Quelle partie du cerveau coordonne les mouvements et l'équilibre ?",
      options: ["Le cortex frontal", "Le cervelet", "L'hippocampe", "L'amygdale"],
      answer: 1,
      explanation: "Il est situé à l'arrière du cerveau."
    },
    {
      type: "vf",
      question: "Nous n'utilisons que 10 % de notre cerveau.",
      answer: false,
      explanation: "Faux : toutes les zones sont utilisées, même si ce n'est pas simultanément."
    },
    {
      type: "qcm",
      question: "L'hémisphère gauche du cerveau commande principalement…",
      options: ["le côté gauche du corps", "le côté droit du corps", "uniquement les yeux", "les deux côtés de la même façon"],
      answer: 1,
      explanation: "Le contrôle moteur est croisé."
    },
    {
      type: "qcm",
      question: "Qu'appelle-t-on la plasticité cérébrale ?",
      options: ["La capacité du cerveau à se transformer selon les expériences", "La consistance molle du cerveau", "Une maladie du cerveau", "La taille du cerveau"],
      answer: 0,
      explanation: "C'est ce qui permet d'apprendre toute la vie."
    }
  ]
});
