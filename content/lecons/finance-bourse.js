registerLesson({
  id: "finance-bourse",
  theme: "finance",
  title: "La Bourse et les actions",
  subtitle: "Comment on achète un morceau d'entreprise",
  minutes: 7,
  intro: "« Le CAC 40 recule de 2 % », « les valeurs technologiques s'envolent »… Mais au fond, qu'est-ce qu'une **action**, et à quoi sert la **Bourse** ?",
  sections: [
    {
      title: "Une action, c'est quoi ?",
      text: "Une **action** est un **titre de propriété** : une petite part du capital d'une entreprise. Si une société est divisée en un million d'actions et que vous en possédez mille, vous détenez 0,1 % de l'entreprise.\n\nL'actionnaire a des droits : il peut **voter** en assemblée générale et recevoir une part des bénéfices, appelée **dividende**. Il espère aussi une **plus-value** : revendre son action plus cher qu'il ne l'a achetée. Mais il prend un **risque** : si l'entreprise fait faillite, l'action peut ne plus rien valoir."
    },
    {
      title: "À quoi sert la Bourse ?",
      text: "La **Bourse** est un marché où s'échangent des titres financiers (actions, obligations…). Elle remplit deux fonctions :\n\n- **Financer les entreprises** : lors d'une **introduction en Bourse** (IPO), une entreprise vend des actions nouvelles pour lever des fonds et investir.\n- **Permettre les échanges** : ensuite, les investisseurs s'achètent et se revendent les actions entre eux, sur le **marché secondaire**. C'est l'essentiel de l'activité quotidienne.\n\nLe prix d'une action (son **cours**) varie en permanence selon l'**offre et la demande**, qui reflètent les anticipations sur les bénéfices futurs de l'entreprise."
    },
    {
      title: "Les indices boursiers",
      text: "Un **indice** suit l'évolution d'un panier d'actions représentatif :\n\n- le **CAC 40** : les 40 plus grandes capitalisations de la Bourse de Paris (Euronext) ;\n- le **Dow Jones** (30 grandes entreprises américaines, créé en 1896), le **S&P 500** (500 entreprises), le **Nasdaq** (dominé par la tech) ;\n- le **Nikkei** à Tokyo, le **DAX** à Francfort, le **FTSE 100** à Londres.\n\nLa **capitalisation boursière** d'une entreprise = nombre d'actions × cours. Les plus grandes entreprises du monde, comme Apple, Microsoft ou Nvidia, dépassent plusieurs milliers de milliards de dollars."
    },
    {
      title: "Risque, rendement et diversification",
      text: "Sur longue période, les actions ont historiquement offert un **rendement supérieur** aux livrets ou aux obligations… mais avec de fortes **variations** (la **volatilité**). Règle d'or : **plus le rendement espéré est élevé, plus le risque l'est aussi**.\n\nPour réduire le risque, on **diversifie** : ne pas mettre tous ses œufs dans le même panier. Les **ETF** (ou « trackers ») permettent d'acheter d'un coup tout un indice, avec des frais faibles. Et l'**horizon de placement** compte : en Bourse, on investit de l'argent dont on n'aura pas besoin avant plusieurs années."
    },
    {
      title: "Bulles et krachs",
      text: "Parfois, l'euphorie pousse les cours bien au-delà de la valeur réelle des entreprises : c'est une **bulle spéculative**. Quand elle éclate, c'est le **krach** :\n\n- **1929** : le krach de Wall Street (« jeudi noir », 24 octobre) déclenche la **Grande Dépression** ;\n- **1987** : le « lundi noir » (le Dow Jones perd près de 23 % en un jour) ;\n- **2000** : l'éclatement de la **bulle Internet** ;\n- **2008** : la crise des subprimes.\n\nOn parle de **marché haussier** (*bull market*, le taureau qui frappe vers le haut) et **baissier** (*bear market*, l'ours qui frappe vers le bas)."
    }
  ],
  funFact: "La première grande Bourse moderne est née à **Amsterdam** au début du XVIIe siècle, pour échanger les actions de la **Compagnie néerlandaise des Indes orientales** (VOC, fondée en 1602), souvent considérée comme la première société par actions cotée.",
  keyPoints: [
    "Une action est une part de propriété d'une entreprise ; elle peut rapporter dividendes et plus-values.",
    "La Bourse finance les entreprises (IPO) et permet d'échanger les titres.",
    "Le cours dépend de l'offre et de la demande, donc des anticipations de bénéfices.",
    "Indices : CAC 40 (Paris), Dow Jones, S&P 500, Nasdaq (États-Unis), Nikkei (Tokyo).",
    "Plus de rendement = plus de risque ; la diversification réduit le risque."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qu'est-ce qu'un dividende ?",
      options: ["Un impôt sur les actions", "Une part des bénéfices versée aux actionnaires", "Une dette de l'entreprise", "Le prix d'une action"],
      answer: 1,
      explanation: "L'entreprise peut distribuer une partie de ses bénéfices à ses actionnaires."
    },
    {
      type: "qcm",
      question: "Combien d'entreprises composent le CAC 40 ?",
      options: ["30", "40", "100", "500"],
      answer: 1,
      explanation: "Les 40 plus grandes capitalisations de la Bourse de Paris."
    },
    {
      type: "qcm",
      question: "Comment calcule-t-on la capitalisation boursière ?",
      options: ["Bénéfice × 10", "Nombre d'actions × cours de l'action", "Chiffre d'affaires − dettes", "Nombre de salariés × salaire moyen"],
      answer: 1,
      explanation: "C'est la valeur totale de l'entreprise selon le marché."
    },
    {
      type: "vf",
      question: "Diversifier ses placements permet de réduire le risque.",
      answer: true,
      explanation: "Vrai : les pertes d'un placement peuvent être compensées par les gains d'un autre."
    },
    {
      type: "qcm",
      question: "Quel krach a déclenché la Grande Dépression ?",
      options: ["Celui de 1929", "Celui de 1987", "Celui de 2000", "Celui de 2008"],
      answer: 0,
      explanation: "Le krach de Wall Street d'octobre 1929."
    }
  ]
});
