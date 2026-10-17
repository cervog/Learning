registerLesson({
  id: "sciences-vaccins",
  theme: "sciences",
  title: "Les vaccins et le système immunitaire",
  subtitle: "Comment on apprend au corps à se défendre",
  minutes: 6,
  intro: "Les vaccins ont permis d'éradiquer la variole et de faire reculer de nombreuses maladies mortelles. Mais comment fonctionnent-ils ?",
  sections: [
    {
      title: "Notre armée intérieure",
      text: "Le **système immunitaire** défend le corps contre les **microbes** : **bactéries**, **virus**, champignons, parasites. Il fonctionne en deux temps :\n\n- l'**immunité innée** réagit immédiatement et de façon générale (inflammation, fièvre, cellules qui « mangent » les intrus) ;\n- l'**immunité adaptative** est plus lente mais **ciblée** : les **lymphocytes** reconnaissent un microbe précis et fabriquent des **anticorps** contre lui.\n\nSurtout, elle garde une **mémoire** : lors d'une seconde rencontre, la riposte est beaucoup plus rapide et efficace. C'est pour cela qu'on n'attrape généralement la varicelle qu'une fois."
    },
    {
      title: "Le principe du vaccin",
      text: "Un **vaccin** présente au système immunitaire un microbe **affaibli**, **tué**, ou seulement **un morceau** de celui-ci. Le corps apprend à le reconnaître et se constitue une **mémoire immunitaire**, **sans subir la maladie**.\n\nSi le vrai microbe se présente plus tard, l'organisme est prêt à le combattre. Certains vaccins nécessitent des **rappels** pour entretenir cette mémoire."
    },
    {
      title: "Jenner et Pasteur",
      text: "En **1796**, le médecin anglais **Edward Jenner** remarque que les fermières ayant attrapé la **vaccine** (une maladie bénigne des vaches) ne contractent pas la **variole**. Il inocule la vaccine à un jeune garçon, qui devient protégé contre la variole. Le mot « **vaccin** » vient du latin *vacca*, la **vache** !\n\nEn **1885**, le Français **Louis Pasteur** met au point le **vaccin contre la rage** et le teste sur le jeune **Joseph Meister**, mordu par un chien enragé, qui survit. Pasteur généralise le principe de la vaccination à d'autres maladies."
    },
    {
      title: "Des victoires historiques",
      text: "- La **variole**, qui a tué des centaines de millions de personnes au cours de l'histoire, est déclarée **éradiquée** par l'OMS en **1980** : c'est la seule maladie humaine totalement éliminée à ce jour.\n- La **poliomyélite** a presque disparu (vaccins de **Salk** en 1955 et de **Sabin**).\n- La rougeole, la diphtérie, le tétanos ont fortement reculé.\n\nSelon l'OMS, la vaccination sauve **plusieurs millions de vies chaque année**. Lorsqu'une grande partie de la population est vaccinée, la circulation du microbe diminue et protège aussi les personnes non vaccinées : c'est l'**immunité collective**."
    },
    {
      title: "Les vaccins à ARN messager",
      text: "Pendant la pandémie de **Covid-19**, de nouveaux vaccins sont déployés en moins d'un an : les vaccins à **ARN messager** (Pfizer-BioNTech, Moderna). Au lieu d'injecter un morceau du virus, on injecte l'**instruction** (l'ARN) qui permet à nos cellules de fabriquer temporairement une protéine du virus, que le système immunitaire apprend à reconnaître. L'ARN est ensuite rapidement dégradé et **ne modifie pas l'ADN**.\n\nCette technologie, développée pendant des décennies, a valu le **prix Nobel de médecine 2023** à **Katalin Karikó** et **Drew Weissman**."
    }
  ],
  funFact: "Bien avant Jenner, on pratiquait en Chine, en Inde et dans l'Empire ottoman la **variolisation** : on inoculait volontairement une forme légère de variole. Lady Mary Wortley Montagu l'a fait connaître en Angleterre dès 1721.",
  keyPoints: [
    "Le système immunitaire combine immunité innée et immunité adaptative, qui garde une mémoire.",
    "Un vaccin entraîne le corps à reconnaître un microbe sans subir la maladie.",
    "Jenner (1796, variole) et Pasteur (1885, rage) sont les pionniers de la vaccination.",
    "La variole est éradiquée depuis 1980 ; l'immunité collective protège aussi les non-vaccinés.",
    "Les vaccins à ARN messager (Nobel 2023) ne modifient pas l'ADN."
  ],
  quiz: [
    {
      type: "qcm",
      question: "D'où vient le mot « vaccin » ?",
      options: ["Du nom d'un médecin", "Du latin vacca, la vache", "Du grec « protéger »", "D'une ville anglaise"],
      answer: 1,
      explanation: "Jenner a utilisé la vaccine, une maladie de la vache."
    },
    {
      type: "qcm",
      question: "Contre quelle maladie Pasteur a-t-il mis au point un vaccin en 1885 ?",
      options: ["La variole", "La rage", "La polio", "La grippe"],
      answer: 1,
      explanation: "Testé sur le jeune Joseph Meister."
    },
    {
      type: "qcm",
      question: "Quelle maladie a été totalement éradiquée grâce à la vaccination ?",
      options: ["La rougeole", "La variole", "La tuberculose", "Le paludisme"],
      answer: 1,
      explanation: "Déclarée éradiquée par l'OMS en 1980."
    },
    {
      type: "vf",
      question: "Les vaccins à ARN messager modifient l'ADN des personnes vaccinées.",
      answer: false,
      explanation: "Faux : l'ARN n'entre pas dans le noyau des cellules et est rapidement dégradé."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que l'immunité collective ?",
      options: ["Le fait que tout le monde tombe malade en même temps", "La protection indirecte des non-vaccinés quand une grande partie de la population est immunisée", "Un vaccin donné à toute une famille", "Une maladie contagieuse"],
      answer: 1,
      explanation: "Le microbe circule moins, ce qui protège aussi les plus fragiles."
    }
  ]
});
