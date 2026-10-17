registerLesson({
  id: "droit-proces-penal",
  theme: "droit",
  title: "De l'enquête au procès pénal",
  subtitle: "Garde à vue, procureur, juge d'instruction, cour d'assises",
  minutes: 7,
  intro: "Que se passe-t-il entre le moment où une infraction est commise et celui où un tribunal rend son jugement ? Suivons le parcours d'une affaire pénale en France.",
  sections: [
    {
      title: "L'enquête",
      text: "Quand une infraction est signalée (par une **plainte**, un témoin, un constat de police), une **enquête** est ouverte. Elle est menée par la **police** ou la **gendarmerie**, sous la direction du **procureur de la République**, qui représente la société et l'intérêt général.\n\nOn distingue l'**enquête de flagrance** (l'infraction vient d'être commise : pouvoirs plus étendus, durée limitée) et l'**enquête préliminaire** (pour des faits plus anciens).\n\nPour les affaires graves ou complexes, et obligatoirement pour les **crimes**, le procureur saisit un **juge d'instruction** : un juge indépendant qui enquête « **à charge et à décharge** ». Il peut **mettre en examen** une personne contre laquelle il existe des indices graves ou concordants."
    },
    {
      title: "La garde à vue",
      text: "Une personne soupçonnée d'avoir commis une infraction punie de prison peut être placée en **garde à vue** : elle est retenue dans les locaux de la police ou de la gendarmerie pour être interrogée.\n\n- Sa durée est de **24 heures**, renouvelable une fois (**48 heures** au total), et jusqu'à 96 heures, voire plus, pour le terrorisme ou la criminalité organisée.\n- La personne a des **droits** : être informée des faits reprochés, **garder le silence**, être assistée par un **avocat** (dès le début), faire prévenir un proche, voir un **médecin**.\n\nUne personne qui n'est pas soupçonnée peut aussi être entendue librement, comme simple **témoin**."
    },
    {
      title: "La décision du procureur",
      text: "À la fin de l'enquête, le procureur a l'**opportunité des poursuites** : il décide de la suite à donner.\n\n- **Classer sans suite** : faute de preuves, d'auteur identifié, ou parce que l'infraction est mineure.\n- Proposer une **alternative aux poursuites** : avertissement, médiation, stage de citoyenneté, réparation du dommage, **composition pénale**…\n- **Engager des poursuites** devant un tribunal, éventuellement en **comparution immédiate** pour certains délits.\n\nLa **victime** peut, elle aussi, déclencher des poursuites en se **constituant partie civile**, ce qui lui permet d'obtenir réparation de son préjudice."
    },
    {
      title: "Le procès",
      text: "Selon la gravité de l'infraction, l'affaire est jugée par :\n\n- le **tribunal de police** pour les **contraventions** ;\n- le **tribunal correctionnel** pour les **délits** (vol, violences, escroquerie…), avec des juges professionnels ;\n- la **cour d'assises** pour les **crimes** les plus graves : elle réunit trois magistrats et **six jurés** citoyens tirés au sort (neuf en appel) ;\n- la **cour criminelle départementale**, généralisée en **2023**, composée uniquement de magistrats, pour les crimes punis de 15 à 20 ans de réclusion (comme le viol).\n\nLe procès est en principe **public** et **contradictoire** : chaque partie peut présenter ses arguments. Le **procureur** (ou avocat général) requiert une peine ; l'**avocat de la défense** plaide ; l'accusé a toujours **la parole en dernier**."
    },
    {
      title: "Après le jugement",
      text: "Le condamné comme le procureur peuvent faire **appel** : l'affaire est rejugée entièrement par une cour d'appel (ou une autre cour d'assises). Un **pourvoi en cassation** permet ensuite de contester l'application du droit, mais pas les faits.\n\nLes peines sont exécutées sous le contrôle du **juge de l'application des peines**, qui peut aménager une peine (bracelet électronique, semi-liberté…). Les condamnations sont inscrites au **casier judiciaire**.\n\nLe temps compte aussi : l'action publique se **prescrit** en principe après **1 an** pour une contravention, **6 ans** pour un délit et **20 ans** pour un crime. Les **crimes contre l'humanité** sont **imprescriptibles**."
    }
  ],
  funFact: "Pour être juré d'assises, il suffit d'être **inscrit sur les listes électorales**, d'avoir au moins **23 ans** et de savoir lire et écrire en français. Être tiré au sort est une **obligation civique** : refuser sans motif valable est puni d'une amende.",
  keyPoints: [
    "L'enquête est menée par la police sous la direction du procureur ; le juge d'instruction enquête à charge et à décharge.",
    "Garde à vue : 24 h renouvelable une fois, avec droit au silence, à un avocat et à un médecin.",
    "Le procureur peut classer sans suite, proposer une alternative ou poursuivre ; la victime peut se constituer partie civile.",
    "Tribunal de police (contraventions), tribunal correctionnel (délits), cour d'assises avec jurés (crimes).",
    "Appel, cassation, prescription (1, 6 ou 20 ans) ; crimes contre l'humanité imprescriptibles."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui dirige l'enquête de police en France ?",
      options: ["Le maire", "Le procureur de la République", "L'avocat de la victime", "Le préfet"],
      answer: 1,
      explanation: "Il représente la société et décide des suites à donner."
    },
    {
      type: "qcm",
      question: "Quelle est la durée normale d'une garde à vue ?",
      options: ["2 heures", "24 heures, renouvelable une fois", "7 jours", "1 mois"],
      answer: 1,
      explanation: "Soit 48 heures au maximum en droit commun."
    },
    {
      type: "vf",
      question: "En garde à vue, on a le droit de garder le silence et d'être assisté par un avocat.",
      answer: true,
      explanation: "Vrai : ce sont des droits fondamentaux de la personne gardée à vue."
    },
    {
      type: "qcm",
      question: "Combien de jurés siègent en cour d'assises en première instance ?",
      options: ["3", "6", "9", "12"],
      answer: 1,
      explanation: "Avec trois magistrats ; neuf jurés en appel."
    },
    {
      type: "qcm",
      question: "Que signifie « classer sans suite » ?",
      options: ["Condamner sans procès", "Décider de ne pas poursuivre l'affaire", "Envoyer l'affaire en appel", "Archiver le jugement"],
      answer: 1,
      explanation: "Le procureur peut le décider, par exemple faute de preuves."
    }
  ]
});
