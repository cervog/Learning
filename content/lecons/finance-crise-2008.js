registerLesson({
  id: "finance-crise-2008",
  theme: "finance",
  title: "La crise financière de 2008",
  subtitle: "Des prêts immobiliers américains à la récession mondiale",
  minutes: 7,
  intro: "En septembre 2008, la faillite d'une banque américaine plonge le monde dans la pire crise économique depuis 1929. Comment des crédits immobiliers ont-ils pu ébranler toute la planète ?",
  sections: [
    {
      title: "Les subprimes",
      text: "Au début des années 2000, les taux d'intérêt sont bas et les prix de l'immobilier américain flambent. Les banques accordent massivement des prêts à des ménages **peu solvables** : ce sont les **subprimes**, souvent à **taux variable**.\n\nLe raisonnement : même si l'emprunteur ne peut pas rembourser, la maison prend de la valeur et peut être revendue. Tout repose sur l'hypothèse que **les prix de l'immobilier continueront de monter**."
    },
    {
      title: "La titrisation : le risque se propage",
      text: "Les banques ne gardent pas ces crédits : elles les regroupent et les transforment en **produits financiers** vendus à des investisseurs du monde entier. C'est la **titrisation**.\n\nCes produits complexes, mélangeant bons et mauvais crédits, reçoivent souvent d'excellentes notes des **agences de notation**. Résultat : des banques européennes, des fonds de pension, des assureurs détiennent des créances toxiques… souvent **sans le savoir**."
    },
    {
      title: "L'éclatement",
      text: "À partir de **2006–2007**, les taux remontent et les prix de l'immobilier **baissent**. Les ménages ne peuvent plus rembourser, les saisies se multiplient, et les produits titrisés perdent leur valeur.\n\nLes banques se méfient les unes des autres et cessent de se prêter de l'argent : le **crédit se bloque**. Le **15 septembre 2008**, la banque d'affaires **Lehman Brothers**, quatrième banque d'investissement américaine, **fait faillite**. Le gouvernement américain a refusé de la sauver. C'est la panique sur les marchés mondiaux."
    },
    {
      title: "La contagion mondiale",
      text: "La crise financière devient une **crise économique** : les entreprises n'obtiennent plus de crédit, l'activité chute, le chômage explose. En **2009**, le PIB mondial recule pour la première fois depuis la Seconde Guerre mondiale.\n\nLes États interviennent massivement : sauvetage de banques et de l'assureur **AIG**, plans de relance, baisse des taux à zéro par les banques centrales. Le **G20** devient un lieu central de coordination.\n\nEn Europe, la crise se prolonge en **crise des dettes souveraines** (2010–2012) : la **Grèce**, l'Irlande, le Portugal doivent être aidés. Le président de la BCE, **Mario Draghi**, promet en 2012 de faire « **tout ce qui sera nécessaire** » (*whatever it takes*) pour sauver l'euro."
    },
    {
      title: "Les leçons de la crise",
      text: "- Le **« too big to fail »** : certaines banques sont si grosses que leur faillite menacerait tout le système, ce qui les incite à prendre trop de risques.\n- Les régulateurs ont imposé aux banques davantage de **fonds propres** (accords de **Bâle III**) et des tests de résistance.\n- La zone euro a créé l'**Union bancaire** et un fonds de secours, le **MES**.\n\nLe film ***The Big Short*** (2015) raconte l'histoire de ceux qui avaient anticipé la crise."
    }
  ],
  funFact: "En **2009**, un mystérieux « **Satoshi Nakamoto** » lance le **bitcoin**. Dans le tout premier bloc, il a inscrit un titre du *Times* sur le sauvetage des banques britanniques : une critique implicite du système financier après la crise.",
  keyPoints: [
    "Les subprimes : prêts immobiliers risqués accordés à des ménages peu solvables aux États-Unis.",
    "La titrisation a dispersé ces crédits toxiques dans le monde entier.",
    "Faillite de Lehman Brothers le 15 septembre 2008 : panique mondiale.",
    "2009 : récession mondiale ; puis crise des dettes souveraines en zone euro (Grèce).",
    "Leçons : « too big to fail », renforcement des règles bancaires (Bâle III)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Que sont les « subprimes » ?",
      options: ["Des actions très rentables", "Des prêts immobiliers risqués accordés à des ménages peu solvables", "Des obligations d'État", "Une monnaie numérique"],
      answer: 1,
      explanation: "Souvent à taux variable, ils sont à l'origine de la crise."
    },
    {
      type: "qcm",
      question: "Quelle banque fait faillite le 15 septembre 2008 ?",
      options: ["Goldman Sachs", "Lehman Brothers", "BNP Paribas", "JPMorgan"],
      answer: 1,
      explanation: "Le gouvernement américain refuse de la sauver, ce qui provoque la panique."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que la titrisation ?",
      options: ["Donner un titre de noblesse", "Transformer des crédits en produits financiers revendus à des investisseurs", "Noter les entreprises", "Imprimer de la monnaie"],
      answer: 1,
      explanation: "Elle a dispersé les risques… et les crédits toxiques."
    },
    {
      type: "vf",
      question: "La crise de 2008 est restée limitée aux États-Unis.",
      answer: false,
      explanation: "Faux : elle s'est propagée au monde entier, avec une récession mondiale en 2009."
    },
    {
      type: "qcm",
      question: "Que signifie l'expression « too big to fail » ?",
      options: ["Une banque trop grande pour être rentable", "Une banque si importante que sa faillite menacerait tout le système", "Une entreprise trop petite pour survivre", "Un pays trop endetté"],
      answer: 1,
      explanation: "Ces banques savent que l'État devra probablement les sauver."
    }
  ]
});
