registerLesson({
  id: "sciences-big-bang",
  theme: "sciences",
  title: "Le Big Bang et l'histoire de l'Univers",
  subtitle: "13,8 milliards d'années en quelques minutes",
  minutes: 7,
  intro: "D'où vient l'Univers ? Depuis un siècle, les astronomes ont reconstitué son histoire avec une précision étonnante. Voici le récit du **Big Bang**.",
  sections: [
    {
      title: "Un Univers en expansion",
      text: "Dans les années 1920, le prêtre et physicien belge **Georges Lemaître** (1927) puis l'astronome américain **Edwin Hubble** (1929) montrent que les **galaxies s'éloignent de nous**, et d'autant plus vite qu'elles sont lointaines : l'**Univers est en expansion**.\n\nSi l'on remonte le temps, tout devait être autrefois concentré dans un état **extrêmement dense et chaud**. Lemaître parle d'« **atome primitif** »."
    },
    {
      title: "Un nom donné par un sceptique",
      text: "L'expression « **Big Bang** » a été lancée en 1949 par l'astronome britannique **Fred Hoyle**, qui ne croyait pas à cette théorie et voulait s'en moquer à la radio.\n\nAttention, l'image est trompeuse : le Big Bang n'est **pas une explosion dans l'espace**, mais l'expansion de l'espace lui-même, partout à la fois. Et la théorie ne dit pas ce qu'il y avait « avant » : elle décrit l'évolution de l'Univers à partir d'un état primordial."
    },
    {
      title: "Les grandes étapes",
      text: "- **Il y a environ 13,8 milliards d'années** : début de l'expansion.\n- **Les premières minutes** : formation des premiers noyaux atomiques (hydrogène, hélium).\n- **Environ 380 000 ans après** : l'Univers devient transparent ; la lumière s'échappe. C'est le **fond diffus cosmologique**.\n- **Quelques centaines de millions d'années** : naissance des premières **étoiles** et galaxies.\n- **Il y a 4,6 milliards d'années** : formation du **Soleil** et de la **Terre**.\n\nLes éléments plus lourds (carbone, oxygène, fer…) ont été fabriqués dans le cœur des étoiles : nous sommes littéralement faits de **poussières d'étoiles**."
    },
    {
      title: "Les preuves",
      text: "- **L'expansion** des galaxies (Hubble).\n- **Le fond diffus cosmologique** : une faible lumière micro-onde qui baigne tout le ciel, découverte **par hasard** en **1965** par **Penzias et Wilson** (prix Nobel 1978). C'est la plus ancienne lumière observable.\n- **L'abondance des éléments légers** : environ 75 % d'hydrogène et 25 % d'hélium, exactement ce que prédit la théorie."
    },
    {
      title: "Les mystères qui restent",
      text: "La matière que nous connaissons (atomes) ne représente qu'environ **5 %** du contenu de l'Univers. Le reste est composé de :\n\n- **matière noire** (environ 27 %) : invisible, elle n'est détectée que par ses effets gravitationnels sur les galaxies ;\n- **énergie noire** (environ 68 %) : une mystérieuse énergie qui **accélère l'expansion** de l'Univers, découverte en 1998 (Nobel 2011).\n\nLe télescope spatial **James Webb**, lancé fin 2021, observe aujourd'hui des galaxies formées quelques centaines de millions d'années seulement après le Big Bang."
    }
  ],
  funFact: "Une petite partie de la « neige » qui apparaissait sur les vieux téléviseurs mal réglés était due au **fond diffus cosmologique** : un écho direct du Big Bang !",
  keyPoints: [
    "L'Univers est en expansion (Lemaître 1927, Hubble 1929).",
    "Le Big Bang a eu lieu il y a environ 13,8 milliards d'années ; ce n'est pas une explosion dans l'espace.",
    "Le nom « Big Bang » vient de Fred Hoyle, un sceptique.",
    "Preuves : expansion, fond diffus cosmologique (1965), abondance d'hydrogène et d'hélium.",
    "La matière ordinaire ne fait que 5 % de l'Univers ; le reste : matière noire et énergie noire."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel est l'âge estimé de l'Univers ?",
      options: ["4,6 milliards d'années", "13,8 milliards d'années", "100 milliards d'années", "6 000 ans"],
      answer: 1,
      explanation: "4,6 milliards d'années, c'est l'âge du système solaire."
    },
    {
      type: "qcm",
      question: "Qui a inventé l'expression « Big Bang » ?",
      options: ["Albert Einstein", "Georges Lemaître", "Fred Hoyle, pour s'en moquer", "Stephen Hawking"],
      answer: 2,
      explanation: "En 1949, lors d'une émission de radio de la BBC."
    },
    {
      type: "vf",
      question: "Le Big Bang est une explosion qui s'est produite en un point précis de l'espace.",
      answer: false,
      explanation: "Faux : c'est l'expansion de l'espace lui-même, partout à la fois."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que le fond diffus cosmologique ?",
      options: ["Un trou noir géant", "La plus ancienne lumière observable, émise 380 000 ans après le Big Bang", "Le centre de la Voie lactée", "Un nuage de poussière"],
      answer: 1,
      explanation: "Découvert par hasard par Penzias et Wilson en 1965."
    },
    {
      type: "qcm",
      question: "Quelle part de l'Univers représente la matière ordinaire (atomes) ?",
      options: ["Environ 5 %", "Environ 50 %", "Environ 75 %", "100 %"],
      answer: 0,
      explanation: "Le reste est constitué de matière noire et d'énergie noire."
    }
  ]
});
