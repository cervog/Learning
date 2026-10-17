registerLesson({
  id: "droit-famille",
  theme: "droit",
  title: "Le droit de la famille",
  subtitle: "Mariage, PACS, divorce et autorité parentale",
  minutes: 6,
  intro: "Se marier, se pacser, divorcer, élever un enfant : le **droit de la famille** encadre les grandes étapes de la vie. Il a profondément évolué depuis le Code civil de 1804.",
  sections: [
    {
      title: "Mariage, PACS, concubinage",
      text: "Il existe trois formes d'union en France :\n\n- le **mariage**, célébré **à la mairie** par un officier d'état civil. En France, le mariage **civil** doit obligatoirement précéder toute cérémonie religieuse. Depuis la loi du **17 mai 2013**, il est ouvert aux couples de **même sexe** (« mariage pour tous »). Il faut avoir au moins **18 ans** ;\n- le **PACS** (pacte civil de solidarité), créé en **1999** : un contrat entre deux personnes majeures pour organiser leur vie commune, conclu en mairie ou chez un notaire. Il est plus simple à rompre que le mariage ;\n- le **concubinage** (ou union libre) : une simple situation de fait, sans statut juridique protecteur entre les concubins."
    },
    {
      title: "Les effets du mariage",
      text: "Les époux se doivent mutuellement **respect, fidélité, secours et assistance** ; ils s'obligent à une **communauté de vie** et contribuent ensemble aux charges du ménage.\n\nSans contrat de mariage, les époux sont soumis au régime de la **communauté réduite aux acquêts** : les biens acquis **pendant** le mariage sont communs, ceux possédés avant ou reçus par donation ou héritage restent **propres**. Avec un **contrat de mariage** signé chez le notaire, les époux peuvent choisir un autre régime, comme la **séparation de biens**.\n\nEn cas de décès, l'époux survivant hérite ; ce n'est **pas** le cas du partenaire de PACS, sauf testament, ni du concubin."
    },
    {
      title: "Le divorce",
      text: "Il existe quatre cas de divorce :\n\n- le **divorce par consentement mutuel** : depuis **2017**, il se fait **sans juge**, par une convention signée par les époux et leurs **avocats** (un avocat chacun), puis enregistrée chez un **notaire** ;\n- le divorce pour **acceptation du principe de la rupture** ;\n- le divorce pour **altération définitive du lien conjugal**, après **un an** de séparation ;\n- le divorce **pour faute** (violences, infidélité grave…), aujourd'hui minoritaire.\n\nLe divorce par consentement mutuel est de loin le plus fréquent. Un époux peut avoir droit à une **prestation compensatoire** si le divorce crée une forte disparité de niveau de vie."
    },
    {
      title: "Parents et enfants",
      text: "Le lien juridique entre un parent et son enfant s'appelle la **filiation**. Depuis **2005**, il n'y a plus de distinction entre enfants « légitimes » (nés dans le mariage) et « naturels » : **tous les enfants ont les mêmes droits**.\n\nLes parents exercent l'**autorité parentale** jusqu'à la majorité de l'enfant (**18 ans** depuis 1974). Elle est en principe **conjointe**, même après une séparation : les décisions importantes (école, santé, religion) sont prises ensemble. Depuis **2019**, la loi précise qu'elle s'exerce **sans violences physiques ou psychologiques** : les « violences éducatives ordinaires », comme la fessée, sont interdites."
    },
    {
      title: "L'évolution du droit de la famille",
      text: "Le Code civil de 1804 consacrait la **puissance paternelle** et l'incapacité juridique de la femme mariée. Les grandes étapes de l'égalité :\n\n- **1938** : fin de l'incapacité juridique de la femme mariée ;\n- **1965** : une femme mariée peut ouvrir un compte en banque et travailler sans l'autorisation de son mari ;\n- **1970** : l'**autorité parentale** remplace la puissance paternelle ;\n- **1975** : rétablissement du divorce par consentement mutuel ; la même année, la **loi Veil** dépénalise l'IVG ;\n- **2002** : les parents peuvent transmettre le nom du père, de la mère ou les deux."
    }
  ],
  funFact: "Le **divorce** a été autorisé en France par la Révolution en **1792**, restreint par Napoléon, puis **supprimé** en **1816** sous la Restauration. Il n'a été rétabli qu'en **1884**, par la **loi Naquet**.",
  keyPoints: [
    "Trois formes d'union : mariage (ouvert aux couples de même sexe depuis 2013), PACS (1999), concubinage.",
    "Sans contrat, les époux sont mariés sous la communauté réduite aux acquêts.",
    "Quatre divorces ; le consentement mutuel se fait sans juge depuis 2017.",
    "Tous les enfants ont les mêmes droits ; l'autorité parentale est conjointe et s'exerce sans violences (2019).",
    "Le droit de la famille a évolué de la puissance paternelle vers l'égalité entre époux."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Depuis quelle année le mariage est-il ouvert aux couples de même sexe en France ?",
      options: ["1999", "2005", "2013", "2017"],
      answer: 2,
      explanation: "Loi du 17 mai 2013, dite « mariage pour tous »."
    },
    {
      type: "qcm",
      question: "Quel est le régime matrimonial par défaut, sans contrat de mariage ?",
      options: ["La séparation de biens", "La communauté universelle", "La communauté réduite aux acquêts", "La participation aux acquêts"],
      answer: 2,
      explanation: "Les biens acquis pendant le mariage sont communs."
    },
    {
      type: "vf",
      question: "Le partenaire de PACS hérite automatiquement de son partenaire décédé.",
      answer: false,
      explanation: "Faux : contrairement à l'époux, il n'hérite que s'il y a un testament en sa faveur."
    },
    {
      type: "qcm",
      question: "Depuis 2017, comment se fait le divorce par consentement mutuel ?",
      options: ["Devant le maire", "Sans juge, par une convention signée avec les avocats et enregistrée chez un notaire", "Devant la cour d'assises", "Par simple courrier"],
      answer: 1,
      explanation: "Chaque époux doit avoir son propre avocat."
    },
    {
      type: "qcm",
      question: "Depuis quand une femme mariée peut-elle ouvrir un compte en banque sans l'autorisation de son mari ?",
      options: ["1804", "1944", "1965", "1990"],
      answer: 2,
      explanation: "Grâce à la réforme des régimes matrimoniaux de 1965."
    }
  ]
});
