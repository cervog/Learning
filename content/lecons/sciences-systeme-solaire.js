registerLesson({
  id: "sciences-systeme-solaire",
  theme: "sciences",
  title: "Le système solaire",
  subtitle: "Une étoile, huit planètes et beaucoup de cailloux",
  minutes: 6,
  intro: "Notre petit coin de l'Univers tourne autour d'une étoile banale : le **Soleil**. Faisons le tour de son étonnant cortège de planètes.",
  sections: [
    {
      title: "Le Soleil",
      text: "Le système solaire s'est formé il y a environ **4,6 milliards d'années** à partir de l'effondrement d'un nuage de gaz et de poussières.\n\nLe **Soleil** concentre à lui seul **plus de 99,8 %** de la masse du système solaire. C'est une étoile de taille moyenne, une gigantesque boule d'hydrogène et d'hélium où se produisent des réactions de **fusion nucléaire**. Sa lumière met environ **8 minutes et 20 secondes** pour nous parvenir, à 150 millions de kilomètres (une **unité astronomique**)."
    },
    {
      title: "Les planètes rocheuses",
      text: "Les quatre planètes les plus proches du Soleil sont petites et rocheuses :\n\n- **Mercure** : la plus petite et la plus proche, sans atmosphère, très chaude le jour, glaciale la nuit.\n- **Vénus** : la plus **chaude** (environ 460 °C) à cause d'un effet de serre extrême ; elle tourne sur elle-même dans le sens inverse des autres.\n- **La Terre** : la seule planète connue abritant la vie, avec de l'eau liquide en surface.\n- **Mars** : la « planète rouge », couverte d'oxyde de fer, avec le plus haut volcan du système solaire, l'**Olympus Mons** (environ 22 km)."
    },
    {
      title: "Les planètes géantes",
      text: "Au-delà d'une **ceinture d'astéroïdes** se trouvent quatre géantes :\n\n- **Jupiter** : la plus grande, plus de **1 300 fois** le volume de la Terre. Sa **Grande Tache rouge** est une tempête plus vaste que la Terre.\n- **Saturne** : célèbre pour ses **anneaux** de glace et de roche ; sa densité est si faible qu'elle flotterait sur l'eau.\n- **Uranus** : elle tourne « couchée » sur le côté.\n- **Neptune** : la plus lointaine, balayée par les vents les plus rapides du système solaire.\n\nJupiter et Saturne sont des **géantes gazeuses** ; Uranus et Neptune des **géantes de glaces**."
    },
    {
      title: "Et Pluton ?",
      text: "Découverte en **1930**, **Pluton** a longtemps été la neuvième planète. Mais en **2006**, l'**Union astronomique internationale** l'a reclassée en **planète naine** : elle n'a pas « nettoyé » son orbite, partagée avec de nombreux autres objets de la **ceinture de Kuiper**.\n\nIl existe d'autres planètes naines, comme **Cérès** (dans la ceinture d'astéroïdes) ou **Éris**. Plus loin encore, le **nuage d'Oort** est le réservoir de nombreuses **comètes**."
    },
    {
      title: "Explorer le système solaire",
      text: "Seule la **Lune** a été foulée par des humains : 12 astronautes entre **1969 et 1972** (programme Apollo). Des robots ont exploré les autres planètes : les rovers martiens (**Curiosity**, **Perseverance**), la sonde **Cassini** autour de Saturne, **New Horizons** qui a survolé Pluton en 2015.\n\nLancées en **1977**, les sondes **Voyager 1 et 2** ont quitté la zone d'influence directe du Soleil et sont les objets humains les plus lointains, à plus de 20 milliards de kilomètres."
    }
  ],
  funFact: "Un moyen mnémotechnique pour retenir l'ordre des planètes : « **M**on **V**ieux **T**u **M**'as **J**eté **S**ur **U**ne **N**appe » : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.",
  keyPoints: [
    "Le système solaire a environ 4,6 milliards d'années ; le Soleil contient plus de 99,8 % de sa masse.",
    "Planètes rocheuses : Mercure, Vénus (la plus chaude), Terre, Mars.",
    "Planètes géantes : Jupiter (la plus grande), Saturne (anneaux), Uranus, Neptune.",
    "Pluton est une planète naine depuis 2006.",
    "La lumière du Soleil met environ 8 minutes pour atteindre la Terre."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle est la planète la plus chaude du système solaire ?",
      options: ["Mercure", "Vénus", "Mars", "Jupiter"],
      answer: 1,
      explanation: "Vénus, à cause de son effet de serre extrême, bien qu'elle soit plus loin du Soleil que Mercure."
    },
    {
      type: "qcm",
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["Saturne", "Neptune", "Jupiter", "La Terre"],
      answer: 2,
      explanation: "Jupiter, plus de 1 300 fois le volume de la Terre."
    },
    {
      type: "vf",
      question: "Pluton est toujours officiellement considérée comme la neuvième planète.",
      answer: false,
      explanation: "Faux : elle est classée planète naine depuis 2006."
    },
    {
      type: "qcm",
      question: "Combien de temps met la lumière du Soleil pour atteindre la Terre ?",
      options: ["Instantanément", "Environ 8 minutes", "Environ 1 heure", "Environ 1 jour"],
      answer: 1,
      explanation: "Environ 8 minutes et 20 secondes."
    },
    {
      type: "qcm",
      question: "Quelle planète suit immédiatement la Terre en s'éloignant du Soleil ?",
      options: ["Vénus", "Jupiter", "Mars", "Mercure"],
      answer: 2,
      explanation: "Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune."
    }
  ]
});
