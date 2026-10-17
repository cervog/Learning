registerLesson({
  id: "philo-aristote",
  theme: "philosophie",
  title: "Aristote, le savant universel",
  subtitle: "Logique, éthique, politique : le « maître de ceux qui savent »",
  minutes: 6,
  intro: "Élève de Platon et précepteur d'Alexandre le Grand, **Aristote** a écrit sur presque tout : logique, biologie, physique, politique, morale, poésie. Pendant près de deux mille ans, il a été l'autorité intellectuelle par excellence.",
  sections: [
    {
      title: "Une vie entre Athènes et la Macédoine",
      text: "**Aristote** naît en **384 av. J.-C.** à Stagire, en Grèce du Nord (d'où son surnom, le « Stagirite »). Il étudie **vingt ans** à l'**Académie** de Platon.\n\nVers 343 av. J.-C., le roi Philippe II de Macédoine lui confie l'éducation de son fils, le futur **Alexandre le Grand**. De retour à Athènes, Aristote fonde sa propre école, le **Lycée**. Il y enseigne en marchant avec ses élèves, d'où le nom de **péripatéticiens** (« ceux qui se promènent »). Il meurt en 322 av. J.-C."
    },
    {
      title: "Rompre avec Platon",
      text: "« **Platon m'est cher, mais la vérité m'est plus chère encore.** » Aristote rejette l'idée d'un monde des Idées séparé : pour lui, les formes existent **dans les choses** elles-mêmes.\n\nIl part donc de l'**observation** du réel. Il étudie et classe des centaines d'espèces animales, ce qui fait de lui l'un des fondateurs de la **biologie**. Sur la célèbre fresque de Raphaël, *L'École d'Athènes*, Platon pointe le doigt vers le ciel, Aristote tend la main vers la terre."
    },
    {
      title: "L'inventeur de la logique",
      text: "Aristote est le premier à formaliser la **logique**, l'art de raisonner correctement. Son outil principal est le **syllogisme** :\n\n- Tous les hommes sont mortels.\n- Or Socrate est un homme.\n- Donc Socrate est mortel.\n\nIl pose aussi le **principe de non-contradiction** : une chose ne peut pas, en même temps et sous le même rapport, être et ne pas être. Sa logique est restée la référence jusqu'au XIXe siècle."
    },
    {
      title: "Le bonheur et le juste milieu",
      text: "Dans l'***Éthique à Nicomaque***, Aristote affirme que le but de toute vie humaine est le **bonheur** (*eudaimonia*), qui consiste à vivre selon la **raison** et la **vertu**.\n\nLa vertu est un **juste milieu** entre deux excès : le **courage** se situe entre la lâcheté et la témérité ; la **générosité** entre l'avarice et la prodigalité. Elle s'acquiert par l'**habitude** : « c'est en pratiquant la justice qu'on devient juste »."
    },
    {
      title: "« L'homme est un animal politique »",
      text: "Dans la ***Politique***, Aristote écrit que l'homme est « **un animal politique** » : il est fait pour vivre dans une **cité** (*polis*), car il possède le langage qui permet de débattre du juste et de l'injuste.\n\nIl compare les régimes (monarchie, aristocratie, démocratie…) en étudiant les constitutions de **158 cités**. Mais il défend aussi des idées aujourd'hui inacceptables, comme l'**esclavage** « naturel » ou l'infériorité des femmes.\n\nRedécouvert au Moyen Âge, notamment via les philosophes arabes comme **Averroès**, puis intégré à la pensée chrétienne par **Thomas d'Aquin**, il devient « **le Philosophe** »."
    }
  ],
  funFact: "Aristote pensait que les objets lourds tombent plus vite que les légers. Cette idée, fausse, n'a été réfutée qu'environ 1 900 ans plus tard par **Galilée**, ce qui montre le poids immense de son autorité.",
  keyPoints: [
    "Aristote (384–322 av. J.-C.), élève de Platon, précepteur d'Alexandre le Grand, fondateur du Lycée.",
    "Il part de l'observation du réel et fonde la biologie.",
    "Il invente la logique formelle et le syllogisme.",
    "Éthique : le bonheur par la vertu, définie comme un juste milieu.",
    "« L'homme est un animal politique » : il est fait pour vivre en cité."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel célèbre souverain Aristote a-t-il éduqué ?",
      options: ["Jules César", "Alexandre le Grand", "Périclès", "Ramsès II"],
      answer: 1,
      explanation: "À la demande de son père, Philippe II de Macédoine."
    },
    {
      type: "qcm",
      question: "Comment s'appelle l'école fondée par Aristote ?",
      options: ["L'Académie", "Le Lycée", "Le Portique", "Le Jardin"],
      answer: 1,
      explanation: "L'Académie est celle de Platon ; le Jardin celle d'Épicure."
    },
    {
      type: "qcm",
      question: "Selon Aristote, le courage est un juste milieu entre…",
      options: ["la peur et la colère", "la lâcheté et la témérité", "la force et la faiblesse", "la joie et la tristesse"],
      answer: 1,
      explanation: "La vertu se situe entre deux excès."
    },
    {
      type: "vf",
      question: "« Tous les hommes sont mortels, or Socrate est un homme, donc Socrate est mortel » est un syllogisme.",
      answer: true,
      explanation: "Vrai : c'est l'exemple classique du raisonnement formalisé par Aristote."
    },
    {
      type: "qcm",
      question: "Quelle formule d'Aristote décrit la nature sociale de l'homme ?",
      options: ["L'homme est un loup pour l'homme", "L'homme est un animal politique", "L'homme est un roseau pensant", "L'homme est la mesure de toute chose"],
      answer: 1,
      explanation: "Il est fait pour vivre dans une cité (polis)."
    }
  ]
});
