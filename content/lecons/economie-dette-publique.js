registerLesson({
  id: "economie-dette-publique",
  theme: "economie",
  title: "Déficit et dette publique",
  subtitle: "Pourquoi les États empruntent, et jusqu'où ils peuvent aller",
  minutes: 6,
  intro: "La dette publique française dépasse **3 300 milliards d'euros**. Ce chiffre vertigineux fait régulièrement la une. Mais qu'est-ce que la dette d'un État, et est-elle forcément un problème ?",
  sections: [
    {
      title: "Déficit et dette : ne pas confondre",
      text: "- Le **déficit public** est un **flux** : sur une année, c'est la différence entre les **dépenses** et les **recettes** des administrations publiques (État, collectivités locales, Sécurité sociale). Quand les dépenses dépassent les recettes, il faut emprunter.\n- La **dette publique** est un **stock** : c'est la **somme** de tous les emprunts accumulés au fil des années et pas encore remboursés.\n\nImage simple : le déficit, c'est ce qui coule chaque année dans la baignoire ; la dette, c'est le niveau de l'eau."
    },
    {
      title: "Comment un État emprunte-t-il ?",
      text: "Un État emprunte principalement en émettant des **obligations** sur les marchés financiers. En France, ce sont les **OAT** (obligations assimilables du Trésor), gérées par l'**Agence France Trésor**.\n\nCes titres sont achetés par des banques, des assureurs, des fonds de pension, des banques centrales, français ou étrangers. L'État verse des **intérêts** et rembourse à l'échéance… souvent en réempruntant : on dit qu'il « **fait rouler** » sa dette. Un État ne rembourse donc presque jamais toute sa dette, contrairement à un ménage."
    },
    {
      title: "Quelques chiffres",
      text: "On mesure la dette en **pourcentage du PIB**, pour la comparer à la richesse produite :\n\n- la dette de la **France** atteint environ **115 % du PIB**, l'une des plus élevées de la zone euro, avec un déficit autour de **5 à 6 %** du PIB ces dernières années ;\n- le **Japon** dépasse **230 %** ;\n- l'**Italie** et la **Grèce** dépassent 135 % ;\n- l'**Allemagne** est autour de 63 %.\n\nLes règles européennes (traité de **Maastricht**, 1992) fixent comme références un déficit inférieur à **3 %** et une dette inférieure à **60 %** du PIB, des seuils souvent dépassés."
    },
    {
      title: "Bonne ou mauvaise dette ?",
      text: "**Arguments en faveur** de l'endettement :\n\n- financer des **investissements** utiles pour l'avenir (infrastructures, éducation, recherche, transition écologique) ;\n- **soutenir l'économie** en temps de crise (2008, Covid), comme le préconise Keynes.\n\n**Risques** d'une dette trop élevée :\n\n- la **charge des intérêts** pèse sur le budget : en France, elle dépasse **50 milliards d'euros** par an, autant que de grands ministères ;\n- la **perte de confiance** des prêteurs fait monter les taux, comme en **Grèce** en 2010 ;\n- elle reporte le poids sur les **générations futures**."
    },
    {
      title: "Comment réduire la dette ?",
      text: "Il existe plusieurs leviers, souvent combinés :\n\n- **réduire les dépenses** publiques ;\n- **augmenter les impôts** ;\n- favoriser la **croissance**, qui augmente le PIB et les recettes fiscales ;\n- l'**inflation**, qui réduit le poids réel de la dette (mais fait souvent monter les taux) ;\n- dans les cas extrêmes, le **défaut** ou la **restructuration** : l'État ne rembourse pas tout, comme la Grèce en 2012 ou l'Argentine à plusieurs reprises.\n\nLes **agences de notation** (S&P, Moody's, Fitch) évaluent la capacité des États à rembourser : une dégradation de la note peut renchérir les emprunts."
    }
  ],
  funFact: "La France n'a pas voté un budget **à l'équilibre** depuis **1974**. Depuis cette date, tous les budgets de l'État ont été votés en déficit.",
  keyPoints: [
    "Le déficit est annuel (dépenses − recettes) ; la dette est le stock des emprunts accumulés.",
    "Un État emprunte en émettant des obligations (en France, les OAT) et fait « rouler » sa dette.",
    "La dette française atteint environ 115 % du PIB ; les règles européennes visent 3 % de déficit et 60 % de dette.",
    "La dette peut financer l'investissement et amortir les crises, mais sa charge d'intérêts pèse.",
    "Leviers : moins de dépenses, plus d'impôts, croissance, inflation, ou défaut."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle est la différence entre déficit et dette ?",
      options: ["Il n'y en a aucune", "Le déficit est annuel, la dette est le stock accumulé", "La dette est annuelle, le déficit est accumulé", "Le déficit concerne les ménages, la dette les États"],
      answer: 1,
      explanation: "Le déficit est un flux, la dette un stock."
    },
    {
      type: "qcm",
      question: "Quel seuil de déficit public les règles européennes fixent-elles comme référence ?",
      options: ["1 % du PIB", "3 % du PIB", "10 % du PIB", "60 % du PIB"],
      answer: 1,
      explanation: "60 % est le seuil de référence pour la dette."
    },
    {
      type: "qcm",
      question: "Quel pays développé a la dette publique la plus élevée en pourcentage du PIB ?",
      options: ["La France", "L'Allemagne", "Le Japon", "Les États-Unis"],
      answer: 2,
      explanation: "Elle dépasse 230 % du PIB."
    },
    {
      type: "vf",
      question: "Un État rembourse généralement sa dette en totalité, comme un ménage.",
      answer: false,
      explanation: "Faux : il réemprunte pour rembourser les emprunts arrivés à échéance ; il « fait rouler » sa dette."
    },
    {
      type: "qcm",
      question: "Comment s'appellent les obligations émises par l'État français ?",
      options: ["Les OAT", "Les CAC", "Les ETF", "Les SICAV"],
      answer: 0,
      explanation: "Les obligations assimilables du Trésor."
    }
  ]
});
