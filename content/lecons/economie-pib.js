registerLesson({
  id: "economie-pib",
  theme: "economie",
  title: "Le PIB et la croissance",
  subtitle: "L'indicateur le plus célèbre de l'économie… et ses limites",
  minutes: 6,
  intro: "On l'entend tous les jours : « la croissance du PIB est de 1 % ». Mais que mesure vraiment le **produit intérieur brut**, et pourquoi est-il si critiqué ?",
  sections: [
    {
      title: "Qu'est-ce que le PIB ?",
      text: "Le **PIB** (produit intérieur brut) mesure la **valeur de tout ce qui est produit** (biens et services) dans un pays pendant une période donnée, généralement un an.\n\nPour éviter de compter deux fois la même chose (la farine, puis le pain fabriqué avec), on additionne les **valeurs ajoutées** : la richesse créée à chaque étape de production.\n\nLe PIB moderne a été conçu dans les années 1930 aux États-Unis par l'économiste **Simon Kuznets**, pour mesurer les effets de la Grande Dépression."
    },
    {
      title: "Croissance et récession",
      text: "La **croissance économique** est l'augmentation du PIB d'une année sur l'autre. On la mesure en **volume** (ou « en termes réels »), c'est-à-dire en retirant l'effet de l'**inflation** : si les prix augmentent de 3 % et le PIB nominal de 3 %, la production n'a en réalité pas augmenté.\n\nOn parle souvent de **récession** quand le PIB recule pendant **deux trimestres consécutifs**. Une crise longue et profonde s'appelle une **dépression**."
    },
    {
      title: "Les plus grandes économies",
      text: "Les **États-Unis** ont le premier PIB du monde (environ 25 % du PIB mondial), devant la **Chine**. Suivent notamment l'Allemagne, le Japon et l'Inde. La **France** se situe autour de la 7e place, avec un PIB d'environ **3 000 milliards de dollars**.\n\nPour comparer le niveau de vie, on utilise le **PIB par habitant**, et souvent la **parité de pouvoir d'achat** (PPA), qui tient compte des différences de prix entre pays : en PPA, la Chine dépasse les États-Unis."
    },
    {
      title: "Ce que le PIB ne mesure pas",
      text: "- Le **travail non rémunéré** : tâches domestiques, bénévolat.\n- Les **inégalités** : un PIB élevé peut cacher une répartition très inégale.\n- L'**environnement** : une marée noire augmente le PIB (travaux de nettoyage) alors qu'elle détruit la nature.\n- Le **bien-être**, la santé, le temps libre.\n\nRobert Kennedy disait en 1968 que le PIB « mesure tout, sauf ce qui fait que la vie vaut la peine d'être vécue »."
    },
    {
      title: "D'autres indicateurs",
      text: "Pour compléter le PIB, l'ONU a créé en **1990** l'**IDH** (indice de développement humain), qui combine **revenu**, **santé** (espérance de vie) et **éducation**. Il a été conçu par l'économiste pakistanais **Mahbub ul Haq** avec le concours de l'Indien **Amartya Sen**.\n\nD'autres mesures existent : l'empreinte écologique, l'indice de bonheur national brut du **Bhoutan**, ou encore les indicateurs de la commission Stiglitz-Sen-Fitoussi (2009)."
    }
  ],
  funFact: "Le petit royaume himalayen du **Bhoutan** a inscrit le « **bonheur national brut** » dans sa Constitution en 2008 : le gouvernement doit chercher à améliorer le bonheur de la population, pas seulement sa richesse.",
  keyPoints: [
    "Le PIB mesure la valeur de la production d'un pays sur une période (somme des valeurs ajoutées).",
    "La croissance se mesure en volume, c'est-à-dire hors inflation.",
    "Récession : recul du PIB pendant deux trimestres consécutifs.",
    "États-Unis puis Chine : les deux premières économies mondiales.",
    "Le PIB ignore les inégalités, l'environnement et le travail non rémunéré ; l'IDH le complète."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Que mesure le PIB ?",
      options: ["La richesse totale accumulée par un pays", "La valeur de la production d'un pays sur une période", "Le bonheur des habitants", "La dette publique"],
      answer: 1,
      explanation: "Il mesure un flux de production (souvent annuel), pas un patrimoine."
    },
    {
      type: "qcm",
      question: "Quelle définition courante donne-t-on d'une récession ?",
      options: ["Une inflation supérieure à 5 %", "Deux trimestres consécutifs de recul du PIB", "Une hausse du chômage", "Une baisse de la Bourse"],
      answer: 1,
      explanation: "C'est la définition technique la plus utilisée."
    },
    {
      type: "vf",
      question: "Une marée noire peut faire augmenter le PIB.",
      answer: true,
      explanation: "Vrai : les travaux de nettoyage sont comptés comme de la production, alors que les dégâts ne sont pas retirés."
    },
    {
      type: "qcm",
      question: "Que combine l'IDH ?",
      options: ["PIB, dette et inflation", "Revenu, santé et éducation", "Population, superficie et climat", "Exportations et importations"],
      answer: 1,
      explanation: "L'indice de développement humain, créé par l'ONU en 1990."
    },
    {
      type: "qcm",
      question: "Quel pays a le premier PIB du monde (en dollars courants) ?",
      options: ["La Chine", "Le Japon", "Les États-Unis", "L'Allemagne"],
      answer: 2,
      explanation: "Les États-Unis, devant la Chine."
    }
  ]
});
