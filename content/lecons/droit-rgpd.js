registerLesson({
  id: "droit-rgpd",
  theme: "droit",
  title: "Le RGPD et vos données personnelles",
  subtitle: "Ce que les entreprises ont le droit de faire de vos données",
  minutes: 6,
  intro: "Chaque clic, chaque achat, chaque recherche produit des **données personnelles**. Depuis 2018, un texte européen encadre strictement leur utilisation : le **RGPD**.",
  sections: [
    {
      title: "Qu'est-ce qu'une donnée personnelle ?",
      text: "Une **donnée personnelle** est toute information permettant d'**identifier une personne**, directement ou indirectement : nom, adresse, e-mail, numéro de téléphone, photo, adresse IP, localisation, numéro de client…\n\nCertaines données sont dites **sensibles** et bénéficient d'une protection renforcée : santé, origine, opinions politiques, convictions religieuses, orientation sexuelle, données génétiques et biométriques."
    },
    {
      title: "Le RGPD",
      text: "Le **Règlement général sur la protection des données** (RGPD) est un règlement de l'**Union européenne**, applicable depuis le **25 mai 2018**. Il s'applique à toute organisation (entreprise, association, administration) qui traite les données de personnes situées dans l'UE, **même si elle est installée hors d'Europe** (Google, Meta, Amazon…).\n\nEn France, il prolonge la loi **Informatique et libertés** de **1978**, l'une des premières lois au monde sur le sujet, qui avait créé la **CNIL**."
    },
    {
      title: "Les grands principes",
      text: "Une organisation qui collecte des données doit respecter plusieurs règles :\n\n- avoir une **base légale** : le **consentement** de la personne, l'exécution d'un contrat, une obligation légale ou un « intérêt légitime » ;\n- une **finalité** précise : on ne collecte des données que pour un objectif déterminé et annoncé ;\n- la **minimisation** : ne collecter que les données **strictement nécessaires** ;\n- une **durée de conservation** limitée ;\n- la **sécurité** des données. En cas de fuite, l'organisation doit prévenir la CNIL dans les **72 heures**.\n\nLe consentement doit être **libre, éclairé et explicite** : d'où les fameux bandeaux de **cookies**, qui doivent permettre de **refuser aussi facilement** que d'accepter."
    },
    {
      title: "Vos droits",
      text: "Toute personne dispose de droits sur ses données :\n\n- le **droit d'accès** : savoir quelles données une organisation détient sur vous ;\n- le **droit de rectification** des données inexactes ;\n- le **droit à l'effacement** (« **droit à l'oubli** ») dans certains cas ;\n- le **droit d'opposition**, notamment à la prospection commerciale ;\n- le **droit à la portabilité** : récupérer ses données pour les transférer à un autre service.\n\nL'organisation doit répondre en principe dans un délai d'**un mois**. En cas de refus, on peut porter plainte auprès de la **CNIL**."
    },
    {
      title: "Des sanctions lourdes",
      text: "Les autorités de protection des données, comme la **CNIL** en France, peuvent infliger des amendes allant jusqu'à **20 millions d'euros** ou **4 % du chiffre d'affaires mondial** de l'entreprise.\n\nQuelques sanctions marquantes :\n\n- **Meta** : **1,2 milliard d'euros** en **2023** (Irlande), pour des transferts de données d'Européens vers les États-Unis ;\n- **Amazon** : **746 millions d'euros** en **2021** (Luxembourg) ;\n- la CNIL a infligé des amendes de plusieurs dizaines à plusieurs centaines de millions d'euros à **Google** et à d'autres géants du numérique, notamment pour leurs cookies.\n\nLe « **droit à l'oubli** » sur les moteurs de recherche a été consacré par la Cour de justice de l'UE dès **2014** (arrêt *Google Spain*)."
    }
  ],
  funFact: "La loi française de **1978** est née d'un scandale : en **1974**, le journal *Le Monde* révèle le projet **SAFARI**, par lequel le gouvernement voulait interconnecter les fichiers administratifs grâce au numéro de sécurité sociale. Le titre de l'article : « **SAFARI ou la chasse aux Français** ».",
  keyPoints: [
    "Une donnée personnelle permet d'identifier une personne ; certaines données sont sensibles (santé, religion…).",
    "Le RGPD s'applique depuis le 25 mai 2018 à toute organisation traitant des données de personnes dans l'UE.",
    "Principes : base légale, finalité, minimisation, durée limitée, sécurité ; fuite signalée sous 72 h.",
    "Droits : accès, rectification, effacement, opposition, portabilité ; plainte auprès de la CNIL.",
    "Amendes jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires mondial (Meta : 1,2 milliard en 2023)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Depuis quand le RGPD s'applique-t-il ?",
      options: ["1978", "2014", "2018", "2022"],
      answer: 2,
      explanation: "Le 25 mai 2018."
    },
    {
      type: "qcm",
      question: "Quelle autorité protège les données personnelles en France ?",
      options: ["La DGCCRF", "La CNIL", "L'ANSSI", "L'Arcom"],
      answer: 1,
      explanation: "La Commission nationale de l'informatique et des libertés, créée en 1978."
    },
    {
      type: "vf",
      question: "Le RGPD ne s'applique pas aux entreprises américaines.",
      answer: false,
      explanation: "Faux : il s'applique à toute organisation qui traite les données de personnes situées dans l'UE."
    },
    {
      type: "qcm",
      question: "Quel est le montant maximal d'une amende RGPD ?",
      options: ["10 000 €", "1 million d'euros", "20 millions d'euros ou 4 % du chiffre d'affaires mondial", "Il n'y a pas d'amende"],
      answer: 2,
      explanation: "Le montant le plus élevé des deux est retenu."
    },
    {
      type: "qcm",
      question: "Quel droit permet de récupérer ses données pour les transférer à un autre service ?",
      options: ["Le droit d'accès", "Le droit à la portabilité", "Le droit d'opposition", "Le droit de rectification"],
      answer: 1,
      explanation: "Par exemple, pour changer de fournisseur de services."
    }
  ]
});
