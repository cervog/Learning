registerLesson({
  id: "finance-bitcoin",
  theme: "finance",
  title: "Le bitcoin et les cryptomonnaies",
  subtitle: "Une monnaie sans banque centrale ?",
  minutes: 7,
  intro: "Né en 2009 dans les cercles de passionnés d'informatique, le **bitcoin** pèse aujourd'hui plus de mille milliards de dollars. Mais qu'est-ce qu'une **cryptomonnaie**, et pourquoi divise-t-elle autant ?",
  sections: [
    {
      title: "Un créateur mystérieux",
      text: "En **octobre 2008**, en pleine crise financière, un certain **Satoshi Nakamoto** publie un court document décrivant « un système de **paiement électronique de pair à pair** ». Le réseau **Bitcoin** démarre en **janvier 2009**.\n\nPersonne ne sait qui se cache derrière ce pseudonyme : une personne ou un groupe. Satoshi Nakamoto a disparu en **2011** et n'a jamais dépensé le million de bitcoins qu'il aurait accumulés au début."
    },
    {
      title: "La blockchain",
      text: "Le bitcoin repose sur la **blockchain** (« chaîne de blocs ») : un **registre public** de toutes les transactions, copié sur des milliers d'ordinateurs dans le monde. Les transactions sont regroupées en **blocs**, enchaînés les uns aux autres grâce à la **cryptographie**, ce qui les rend pratiquement impossibles à falsifier.\n\nIl n'y a **ni banque, ni banque centrale, ni État** pour contrôler le système : c'est la **décentralisation**. Les échanges se font directement d'un utilisateur à l'autre, depuis un « **portefeuille** » numérique."
    },
    {
      title: "Le minage et la rareté",
      text: "Les nouveaux bitcoins sont créés par le **minage** : des ordinateurs spécialisés résolvent des calculs complexes pour valider les blocs de transactions et reçoivent en récompense des bitcoins. Ce mécanisme, la **preuve de travail**, consomme énormément d'**électricité**, autant que certains pays entiers.\n\nLe nombre total de bitcoins est **plafonné à 21 millions**. La récompense des mineurs est divisée par deux environ tous les quatre ans (le **halving**). C'est cette **rareté programmée** qui fait dire à ses partisans que le bitcoin est un « **or numérique** »."
    },
    {
      title: "D'autres cryptomonnaies",
      text: "Des milliers de cryptomonnaies sont apparues :\n\n- **Ethereum** (2015), qui permet de créer des **contrats intelligents** (*smart contracts*) : des programmes qui s'exécutent automatiquement sur la blockchain ;\n- les **stablecoins** (comme l'USDT), dont la valeur est adossée au dollar ;\n- les **NFT**, des certificats numériques de propriété, et des « memecoins » très spéculatifs.\n\nDe leur côté, les banques centrales étudient des **monnaies numériques officielles** : la BCE prépare un **euro numérique**."
    },
    {
      title: "Promesses et risques",
      text: "**Pour ses partisans** : une monnaie qu'aucun État ne peut manipuler ni censurer, une protection contre l'inflation, un moyen de paiement mondial, utile dans les pays à monnaie instable. En **2021**, le **Salvador** en a fait une monnaie légale, avant de rendre son acceptation facultative en 2025.\n\n**Pour ses critiques** :\n\n- une **volatilité** extrême : le cours peut perdre plus de 50 % en quelques mois ;\n- une utilisation pour le **blanchiment** et les rançongiciels ;\n- un impact **environnemental** important ;\n- des faillites retentissantes, comme celle de la plateforme **FTX** en 2022.\n\nL'Union européenne a adopté le règlement **MiCA** (2023) pour encadrer les cryptoactifs."
    }
  ],
  funFact: "Le **22 mai 2010**, un programmeur américain, Laszlo Hanyecz, a payé **deux pizzas 10 000 bitcoins** : c'est la première transaction commerciale connue en bitcoin. Ces bitcoins vaudraient aujourd'hui plusieurs centaines de millions de dollars. Le 22 mai est devenu le « **Bitcoin Pizza Day** ».",
  keyPoints: [
    "Le bitcoin est créé en 2009 par le mystérieux Satoshi Nakamoto.",
    "Il repose sur la blockchain, un registre public, décentralisé et sécurisé par la cryptographie.",
    "Le minage (preuve de travail) consomme beaucoup d'électricité ; le nombre de bitcoins est plafonné à 21 millions.",
    "Ethereum permet les contrats intelligents ; les stablecoins sont adossés au dollar.",
    "Risques : volatilité, usages criminels, environnement ; l'UE encadre le secteur avec MiCA."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a créé le bitcoin ?",
      options: ["Elon Musk", "Satoshi Nakamoto, un pseudonyme", "La Banque centrale européenne", "Mark Zuckerberg"],
      answer: 1,
      explanation: "Sa véritable identité reste inconnue."
    },
    {
      type: "qcm",
      question: "Combien de bitcoins pourront exister au maximum ?",
      options: ["1 million", "21 millions", "1 milliard", "Il n'y a pas de limite"],
      answer: 1,
      explanation: "Cette rareté programmée est au cœur de son fonctionnement."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que la blockchain ?",
      options: ["Une banque en ligne", "Un registre public et décentralisé des transactions", "Un logiciel antivirus", "Une chaîne de magasins"],
      answer: 1,
      explanation: "Il est copié sur des milliers d'ordinateurs."
    },
    {
      type: "vf",
      question: "Le bitcoin est contrôlé par une banque centrale.",
      answer: false,
      explanation: "Faux : il fonctionne sans banque ni autorité centrale, c'est un système décentralisé."
    },
    {
      type: "qcm",
      question: "Quel pays a fait du bitcoin une monnaie légale en 2021 ?",
      options: ["La Suisse", "Le Salvador", "Le Japon", "La France"],
      answer: 1,
      explanation: "Le Salvador, en Amérique centrale."
    }
  ]
});
