registerLesson({
  id: "economie-keynes",
  theme: "economie",
  title: "Keynes contre les libéraux",
  subtitle: "L'État doit-il intervenir dans l'économie ?",
  minutes: 7,
  intro: "Quand l'économie va mal, faut-il laisser faire le marché ou que l'État dépense pour relancer l'activité ? Ce débat oppose depuis un siècle les **keynésiens** et les **libéraux**.",
  sections: [
    {
      title: "Le libéralisme classique",
      text: "Pour les économistes **classiques** comme **Adam Smith** (XVIIIe siècle) et **Jean-Baptiste Say**, le marché s'autorégule : les prix, les salaires et les taux d'intérêt s'ajustent pour ramener l'économie à l'équilibre. L'État doit se limiter à ses fonctions **régaliennes** (justice, police, défense) : c'est le « **laisser faire, laisser passer** ».\n\nLa **loi de Say** résume cet optimisme : « l'offre crée sa propre demande ». Un chômage durable serait donc impossible."
    },
    {
      title: "La Grande Dépression change la donne",
      text: "Après le krach de **1929**, le chômage atteint **25 %** aux États-Unis. Le marché ne se redresse pas tout seul.\n\nEn **1936**, l'économiste britannique **John Maynard Keynes** publie la ***Théorie générale de l'emploi, de l'intérêt et de la monnaie***. Il explique que l'économie peut rester **durablement bloquée** avec un chômage de masse si la **demande** (consommation + investissement) est insuffisante. Les entreprises ne produisent que ce qu'elles pensent pouvoir vendre."
    },
    {
      title: "La solution keynésienne",
      text: "Pour Keynes, l'**État** doit intervenir pour soutenir la demande, quitte à creuser un **déficit** :\n\n- **dépenses publiques** (grands travaux, infrastructures) ;\n- **baisse des impôts** ou aides aux ménages ;\n- **baisse des taux d'intérêt**.\n\nGrâce à l'**effet multiplicateur**, chaque euro dépensé par l'État génère des revenus qui sont à leur tour dépensés, augmentant la production totale. Le ***New Deal*** de Roosevelt (1933) s'en rapproche. Les **Trente Glorieuses** (1945–1975) sont l'âge d'or des politiques keynésiennes."
    },
    {
      title: "Le retour des libéraux",
      text: "Dans les années **1970**, les pays riches connaissent la **stagflation** : stagnation économique **et** forte inflation en même temps. Les recettes keynésiennes semblent inefficaces.\n\nLes économistes **libéraux** reviennent en force : **Friedrich Hayek** et **Milton Friedman** (le **monétarisme**) défendent la maîtrise de la monnaie, la baisse des impôts, les privatisations, la dérégulation. Ces idées inspirent **Margaret Thatcher** (Royaume-Uni, 1979) et **Ronald Reagan** (États-Unis, 1981)."
    },
    {
      title: "Un débat toujours vivant",
      text: "Lors des grandes crises, le keynésianisme fait son retour : plans de relance massifs après **2008**, puis le « **quoi qu'il en coûte** » pendant le **Covid-19** en 2020.\n\nAujourd'hui, la plupart des économistes combinent les deux approches : laisser fonctionner le marché en temps normal, mais faire intervenir l'État et la banque centrale en cas de crise. Le débat porte surtout sur le **degré** d'intervention et sur la soutenabilité de la **dette publique**."
    }
  ],
  funFact: "Keynes était aussi un brillant **investisseur** : il a fait fortune en Bourse et a géré avec succès les placements du King's College de Cambridge. Il a également dirigé la délégation britannique lors des accords de **Bretton Woods** (1944), qui ont créé le FMI et la Banque mondiale.",
  keyPoints: [
    "Les libéraux classiques (Smith, Say) pensent que le marché s'autorégule.",
    "Keynes (1936) : un chômage durable peut venir d'une demande insuffisante.",
    "Solution keynésienne : relance par les dépenses publiques, effet multiplicateur.",
    "Années 1970 : la stagflation favorise le retour des libéraux (Friedman, Hayek, Thatcher, Reagan).",
    "Les crises de 2008 et du Covid ont relancé les politiques keynésiennes."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel ouvrage Keynes publie-t-il en 1936 ?",
      options: ["La Richesse des nations", "Le Capital", "La Théorie générale de l'emploi, de l'intérêt et de la monnaie", "La Route de la servitude"],
      answer: 2,
      explanation: "La Route de la servitude est de Hayek (1944)."
    },
    {
      type: "qcm",
      question: "Selon Keynes, que doit faire l'État en cas de crise ?",
      options: ["Ne rien faire", "Soutenir la demande, quitte à faire un déficit", "Augmenter fortement les impôts", "Fermer les frontières"],
      answer: 1,
      explanation: "Par les dépenses publiques, la baisse des impôts ou des taux."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que la stagflation ?",
      options: ["Une croissance forte sans inflation", "Une stagnation économique combinée à une forte inflation", "Une baisse générale des prix", "Une hausse de la Bourse"],
      answer: 1,
      explanation: "Elle frappe les pays riches dans les années 1970."
    },
    {
      type: "vf",
      question: "Milton Friedman était un défenseur des politiques keynésiennes.",
      answer: false,
      explanation: "Faux : il est la grande figure du monétarisme, un courant libéral."
    },
    {
      type: "qcm",
      question: "Quelle politique américaine des années 1930 se rapproche des idées keynésiennes ?",
      options: ["Le plan Marshall", "Le New Deal de Roosevelt", "La prohibition", "La doctrine Monroe"],
      answer: 1,
      explanation: "Grands travaux et programmes sociaux pour sortir de la crise."
    }
  ]
});
