registerLesson({
  id: "finance-taux-interet",
  theme: "finance",
  title: "Taux d'intérêt et banques centrales",
  subtitle: "Comment le « prix de l'argent » pilote l'économie",
  minutes: 7,
  intro: "Quand la BCE « relève ses taux », votre crédit immobilier devient plus cher et votre livret rapporte plus. Pourquoi ? Plongée dans le rôle des **taux d'intérêt** et des **banques centrales**.",
  sections: [
    {
      title: "Le taux d'intérêt, prix du temps",
      text: "Un **taux d'intérêt** est le **prix de l'argent emprunté**. Si vous empruntez 1 000 € à 5 % par an, vous rembourserez 1 050 € au bout d'un an. Pour le prêteur, c'est la rémunération du risque et du fait de renoncer à utiliser son argent tout de suite.\n\nAvec les **intérêts composés**, les intérêts produisent eux-mêmes des intérêts : 1 000 € placés à 5 % deviennent environ **1 629 € en 10 ans**. Un repère pratique, la « **règle de 72** » : à 6 %, un capital double en environ 72 / 6 = **12 ans**."
    },
    {
      title: "Les banques centrales",
      text: "Une **banque centrale** est la « banque des banques ». Elle émet la monnaie et prête aux banques commerciales à un taux qu'elle fixe : le **taux directeur**.\n\n- La **Banque centrale européenne (BCE)**, à **Francfort**, créée en **1998**, gère l'euro pour les pays de la zone euro.\n- La **Réserve fédérale (Fed)**, créée en **1913**, est la banque centrale des États-Unis.\n\nLa mission principale de la BCE est la **stabilité des prix** : elle vise une **inflation de 2 %** à moyen terme. Elle est **indépendante** des gouvernements."
    },
    {
      title: "Le mécanisme",
      text: "Quand la banque centrale **augmente** ses taux :\n\n- les banques empruntent plus cher et **prêtent plus cher** aux ménages et entreprises ;\n- on emprunte moins, on investit et consomme moins ;\n- la demande ralentit… et **l'inflation baisse**. Revers : la croissance ralentit et le chômage peut augmenter.\n\nQuand elle **baisse** ses taux, c'est l'inverse : elle **stimule** le crédit, l'activité… au risque de faire monter les prix."
    },
    {
      title: "Des années récentes mouvementées",
      text: "Après la crise de 2008, les banques centrales baissent fortement leurs taux. La BCE va même jusqu'aux **taux négatifs** (de 2014 à 2022) : les banques payaient pour déposer leur argent chez elle !\n\nEn 2022, l'inflation s'envole (sortie du Covid, guerre en Ukraine, flambée de l'énergie) et dépasse **10 %** en zone euro. La BCE relève alors ses taux à un rythme record à partir de **juillet 2022**, jusqu'à **4 %** pour son taux de dépôt en 2023, avant de recommencer à les baisser en 2024."
    },
    {
      title: "Taux et obligations",
      text: "Une **obligation** est un titre de dette : un État ou une entreprise emprunte et verse un intérêt fixe (le coupon). Règle essentielle : **quand les taux montent, le prix des obligations existantes baisse** (et inversement), car les nouvelles obligations rapportent davantage.\n\nLe **taux auquel un État emprunte** reflète aussi la confiance des investisseurs : plus un pays semble risqué, plus il paie cher."
    }
  ],
  funFact: "La plus ancienne banque centrale encore en activité est la **Riksbank** suédoise, fondée en **1668**. La Banque de France a été créée par Bonaparte en **1800**.",
  keyPoints: [
    "Le taux d'intérêt est le prix de l'argent emprunté ; les intérêts composés font croître un capital de façon exponentielle.",
    "La BCE (Francfort, 1998) vise une inflation de 2 % ; la Fed est la banque centrale américaine (1913).",
    "Hausse des taux → crédit plus cher → moins de demande → inflation en baisse.",
    "2022–2023 : forte hausse des taux pour combattre l'inflation, après des années de taux négatifs.",
    "Quand les taux montent, le prix des obligations existantes baisse."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Où se trouve le siège de la Banque centrale européenne ?",
      options: ["Bruxelles", "Paris", "Francfort", "Luxembourg"],
      answer: 2,
      explanation: "La BCE siège à Francfort, en Allemagne."
    },
    {
      type: "qcm",
      question: "Quel est l'objectif d'inflation de la BCE ?",
      options: ["0 %", "2 %", "5 %", "10 %"],
      answer: 1,
      explanation: "Elle vise 2 % à moyen terme."
    },
    {
      type: "qcm",
      question: "Pour lutter contre une forte inflation, une banque centrale va généralement…",
      options: ["Baisser ses taux", "Augmenter ses taux", "Imprimer davantage de billets", "Supprimer l'euro"],
      answer: 1,
      explanation: "Des taux plus élevés freinent le crédit et la demande, donc les prix."
    },
    {
      type: "vf",
      question: "Quand les taux d'intérêt montent, le prix des obligations déjà émises augmente.",
      answer: false,
      explanation: "Faux : il baisse, car les nouvelles obligations offrent un meilleur rendement."
    },
    {
      type: "qcm",
      question: "D'après la règle de 72, en combien de temps un capital placé à 6 % double-t-il ?",
      options: ["6 ans", "12 ans", "20 ans", "72 ans"],
      answer: 1,
      explanation: "72 ÷ 6 = 12 ans environ."
    }
  ]
});
