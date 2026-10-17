registerLesson({
  id: "economie-inflation",
  theme: "economie",
  title: "L'inflation",
  subtitle: "Pourquoi tout augmente, et pourquoi ce n'est pas toujours grave",
  minutes: 6,
  intro: "Votre baguette coûtait 0,90 € il y a quelques années, elle en coûte plus d'un euro aujourd'hui. C'est l'**inflation**. D'où vient-elle et pourquoi les banques centrales la surveillent-elles de si près ?",
  sections: [
    {
      title: "Définition",
      text: "L'**inflation** est la **hausse générale et durable des prix**. Elle signifie aussi une **baisse du pouvoir d'achat de la monnaie** : avec 100 €, on peut acheter moins de choses qu'avant.\n\nEn France, elle est mesurée par l'**INSEE** grâce à l'**indice des prix à la consommation** (IPC), qui suit les prix d'un « panier » représentatif de biens et services (alimentation, énergie, loyers, transports…).\n\nL'inverse, une baisse générale des prix, s'appelle la **déflation**."
    },
    {
      title: "D'où vient l'inflation ?",
      text: "- **Inflation par la demande** : quand la demande dépasse ce que l'économie peut produire, les prix montent (forte consommation, crédit facile, dépenses publiques).\n- **Inflation par les coûts** : quand les coûts de production augmentent (énergie, matières premières, salaires), les entreprises répercutent la hausse sur leurs prix. C'est le cas lors des **chocs pétroliers** de 1973 et 1979, ou de la flambée de l'énergie en 2022.\n- **Inflation monétaire** : si l'on crée trop de monnaie par rapport aux biens disponibles, chaque euro vaut moins. Milton Friedman disait : « l'inflation est toujours et partout un phénomène monétaire »."
    },
    {
      title: "Gagnants et perdants",
      text: "**Perdants** : les **épargnants** (si leur épargne rapporte moins que l'inflation), les personnes aux **revenus fixes** non indexés, les créanciers.\n\n**Gagnants** : les **emprunteurs** à taux fixe, car leur dette pèse moins lourd en valeur réelle. C'est aussi le cas des **États endettés**.\n\nUne inflation faible et stable (autour de **2 %**) est jugée saine : elle évite la déflation et facilite les ajustements. C'est l'objectif de la **BCE**."
    },
    {
      title: "Hyperinflation et déflation : les deux extrêmes",
      text: "Quand l'inflation devient incontrôlable (plus de 50 % par mois), on parle d'**hyperinflation**. Exemples célèbres :\n\n- l'**Allemagne en 1923** : un pain coûtait des **milliards de marks** et l'on payait les salaires deux fois par jour ;\n- le **Zimbabwe** dans les années 2000, qui a émis un billet de **100 000 milliards** de dollars zimbabwéens ;\n- le **Venezuela** dans les années 2010.\n\nLa **déflation** est aussi dangereuse : si les prix baissent, on reporte ses achats, les entreprises vendent moins, licencient… Le **Japon** l'a connue pendant des années à partir des années 1990."
    },
    {
      title: "Le retour de l'inflation en 2022",
      text: "Après des décennies d'inflation faible, les prix flambent en **2021–2022** : reprise post-Covid, pénuries de composants, puis **guerre en Ukraine** et envolée des prix de l'énergie et de l'alimentation. L'inflation atteint environ **10 %** dans la zone euro fin 2022 et plus de **9 %** aux États-Unis.\n\nLes banques centrales ont réagi en **relevant fortement leurs taux d'intérêt**, et l'inflation est redescendue vers 2 % à partir de 2024."
    }
  ],
  funFact: "En 1946, la **Hongrie** a connu la pire hyperinflation de l'histoire : les prix doublaient environ **toutes les 15 heures**. Le pays a imprimé un billet de 100 trillions (10²⁰) de pengő.",
  keyPoints: [
    "L'inflation est une hausse générale et durable des prix, mesurée par l'IPC (INSEE).",
    "Causes : excès de demande, hausse des coûts (énergie), création monétaire excessive.",
    "Elle pénalise les épargnants et avantage les emprunteurs à taux fixe.",
    "Hyperinflation (Allemagne 1923, Zimbabwe) et déflation (Japon) sont deux dangers.",
    "La BCE vise environ 2 % ; en 2022, l'inflation a atteint environ 10 % en zone euro."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qu'est-ce que l'inflation ?",
      options: ["La hausse de la Bourse", "La hausse générale et durable des prix", "La hausse des salaires", "La hausse de la population"],
      answer: 1,
      explanation: "Elle réduit le pouvoir d'achat de la monnaie."
    },
    {
      type: "qcm",
      question: "Qui profite généralement de l'inflation ?",
      options: ["Les épargnants", "Les retraités aux pensions fixes", "Les emprunteurs à taux fixe", "Les créanciers"],
      answer: 2,
      explanation: "La valeur réelle de leur dette diminue."
    },
    {
      type: "qcm",
      question: "Quel pays a connu une hyperinflation célèbre en 1923 ?",
      options: ["La France", "L'Allemagne", "Les États-Unis", "Le Royaume-Uni"],
      answer: 1,
      explanation: "Sous la République de Weimar."
    },
    {
      type: "vf",
      question: "La déflation (baisse générale des prix) est toujours une bonne nouvelle pour l'économie.",
      answer: false,
      explanation: "Faux : elle pousse à reporter les achats et peut entraîner récession et chômage."
    },
    {
      type: "qcm",
      question: "Quel organisme mesure l'inflation en France ?",
      options: ["La Banque de France", "L'INSEE", "Le ministère de l'Économie", "La BCE"],
      answer: 1,
      explanation: "Grâce à l'indice des prix à la consommation (IPC)."
    }
  ]
});
