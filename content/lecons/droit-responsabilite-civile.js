registerLesson({
  id: "droit-responsabilite-civile",
  theme: "droit",
  title: "La responsabilité civile",
  subtitle: "Qui doit réparer un dommage ?",
  minutes: 6,
  intro: "Votre enfant casse la vitre du voisin, votre chien mord un passant, un dégât des eaux abîme l'appartement du dessous : qui doit payer ? C'est la question de la **responsabilité civile**.",
  sections: [
    {
      title: "Civil ou pénal ?",
      text: "Il ne faut pas confondre :\n\n- la **responsabilité pénale**, qui vise à **punir** l'auteur d'une infraction (amende, prison) au nom de la société ;\n- la **responsabilité civile**, qui vise à **réparer** le dommage subi par la victime, le plus souvent par le versement de **dommages et intérêts**.\n\nUn même fait peut engager les deux : un chauffard qui blesse un piéton peut être condamné pénalement et devoir indemniser la victime."
    },
    {
      title: "Le principe : l'article 1240",
      text: "L'article fondateur est l'**article 1240 du Code civil** (l'ancien article 1382, inchangé depuis **1804**) : « **Tout fait quelconque de l'homme, qui cause à autrui un dommage, oblige celui par la faute duquel il est arrivé à le réparer.** »\n\nPour engager la responsabilité de quelqu'un, il faut en principe réunir **trois conditions** :\n\n- un **fait générateur** (une faute, une imprudence, une négligence…) ;\n- un **dommage** (matériel, corporel ou moral) ;\n- un **lien de causalité** entre les deux."
    },
    {
      title: "Responsable sans faute",
      text: "Dans certains cas, on est responsable **même sans avoir commis de faute** :\n\n- **du fait des choses** que l'on a sous sa garde : un pot de fleurs qui tombe du balcon, un **animal** qui cause un dommage ;\n- **du fait d'autrui** : les **parents** sont responsables des dommages causés par leurs **enfants mineurs** qui vivent avec eux ; l'**employeur** est responsable des dommages causés par ses salariés dans le cadre de leur travail.\n\nC'est pourquoi l'**assurance responsabilité civile**, souvent incluse dans l'assurance habitation, est si importante."
    },
    {
      title: "Contractuelle ou délictuelle",
      text: "On distingue :\n\n- la **responsabilité contractuelle**, quand le dommage résulte de la mauvaise exécution d'un **contrat** (un artisan qui fait mal ses travaux) ;\n- la **responsabilité extracontractuelle** (ou délictuelle), quand il n'y a pas de contrat entre l'auteur et la victime (un accident entre deux inconnus).\n\nDes régimes spéciaux existent : la **loi Badinter** de **1985** protège particulièrement les victimes d'**accidents de la circulation**, notamment les piétons et les cyclistes, qui sont presque toujours indemnisés. L'assurance auto est d'ailleurs **obligatoire** depuis 1958."
    },
    {
      title: "Quels préjudices réparer ?",
      text: "Le principe est la **réparation intégrale** : replacer la victime, autant que possible, dans la situation où elle aurait été sans le dommage, « sans perte ni profit ». On répare :\n\n- le **préjudice matériel** : frais de réparation, perte de revenus ;\n- le **préjudice corporel** : frais médicaux, incapacité, souffrances endurées ;\n- le **préjudice moral** : douleur liée à la perte d'un proche, atteinte à la réputation.\n\nLa victime a en principe **5 ans** pour agir à partir du jour où elle a connu le dommage ; ce délai est de **10 ans** pour un dommage corporel."
    }
  ],
  funFact: "Le régime de la responsabilité du fait des choses est né d'une **interprétation audacieuse** des juges : en **1896**, l'arrêt **Teffaine** (l'explosion d'une machine à vapeur sur un remorqueur) et en **1930** l'arrêt **Jand'heur** (un camion renversant une jeune fille) ont créé une responsabilité sans faute à partir d'une simple phrase du Code civil.",
  keyPoints: [
    "La responsabilité pénale punit ; la responsabilité civile répare le dommage de la victime.",
    "Article 1240 du Code civil : celui qui cause un dommage par sa faute doit le réparer.",
    "Trois conditions : un fait générateur, un dommage, un lien de causalité.",
    "On peut être responsable sans faute : du fait des choses, des animaux, de ses enfants mineurs, de ses salariés.",
    "Réparation intégrale des préjudices matériel, corporel et moral ; délai de 5 ans (10 ans pour un dommage corporel)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel est le but principal de la responsabilité civile ?",
      options: ["Punir l'auteur", "Réparer le dommage de la victime", "Envoyer en prison", "Protéger l'État"],
      answer: 1,
      explanation: "La punition relève de la responsabilité pénale."
    },
    {
      type: "qcm",
      question: "Quelles sont les trois conditions classiques de la responsabilité civile ?",
      options: ["Un contrat, un juge, un avocat", "Un fait générateur, un dommage, un lien de causalité", "Une plainte, une enquête, un procès", "Une faute, une amende, une prison"],
      answer: 1,
      explanation: "Il faut relier le dommage au fait de la personne responsable."
    },
    {
      type: "vf",
      question: "Les parents sont responsables des dommages causés par leurs enfants mineurs qui vivent avec eux, même sans faute de leur part.",
      answer: true,
      explanation: "Vrai : c'est une responsabilité du fait d'autrui, d'où l'importance de l'assurance."
    },
    {
      type: "qcm",
      question: "Quelle loi de 1985 protège les victimes d'accidents de la circulation ?",
      options: ["La loi Badinter", "La loi Évin", "La loi Hamon", "La loi Veil"],
      answer: 0,
      explanation: "Robert Badinter, alors garde des Sceaux."
    },
    {
      type: "qcm",
      question: "Quel est le numéro de l'article fondateur de la responsabilité civile ?",
      options: ["Article 16", "Article 49.3", "Article 1240", "Article 2224"],
      answer: 2,
      explanation: "L'ancien article 1382, inchangé depuis 1804."
    }
  ]
});
