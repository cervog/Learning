registerLesson({
  id: "geographie-fleuves",
  theme: "geographie",
  title: "Les grands fleuves du monde",
  subtitle: "Ces routes d'eau qui ont fait naître les civilisations",
  minutes: 6,
  intro: "Le Nil, l'Amazone, le Yangtsé, le Mississippi… Les grands fleuves ont nourri les premières civilisations et restent aujourd'hui des enjeux économiques et politiques majeurs.",
  sections: [
    {
      title: "Fleuve ou rivière ?",
      text: "En français, un **fleuve** se jette dans la **mer** ou l'océan ; une **rivière** se jette dans un autre cours d'eau. La Seine est donc un fleuve, la Marne une rivière (elle se jette dans la Seine).\n\nUn fleuve draine un **bassin versant** : tout le territoire dont les eaux de pluie finissent dans ce fleuve. L'endroit où il se jette dans la mer peut former un **delta** (le Nil, le Rhône) ou un **estuaire** (la Seine, la Gironde)."
    },
    {
      title: "Les géants",
      text: "- **Le Nil** et **l'Amazone** se disputent le titre de **plus long fleuve** du monde, avec environ **6 400 à 7 000 km** selon la manière dont on mesure leur source. Le Nil est traditionnellement cité en premier.\n- **L'Amazone** est de très loin le plus **puissant** : il déverse environ **20 % de toute l'eau douce** qui arrive dans les océans, plus que les sept fleuves suivants réunis. Son bassin couvre une grande partie de l'Amérique du Sud.\n- **Le Yangtsé** (Chine) est le plus long fleuve d'Asie (environ 6 300 km).\n- **Le Mississippi**, avec son affluent le Missouri, est le plus grand système fluvial d'Amérique du Nord."
    },
    {
      title: "Berceaux de civilisations",
      text: "Les premières grandes civilisations sont nées au bord des fleuves, grâce à l'eau et aux terres fertiles :\n\n- la **Mésopotamie** (« entre les fleuves »), entre le **Tigre** et l'**Euphrate**, où apparaît l'écriture vers 3300 av. J.-C. ;\n- l'**Égypte** sur le **Nil** ;\n- la civilisation de l'**Indus** (Pakistan actuel) ;\n- la Chine ancienne sur le **fleuve Jaune** (Huang He).\n\nLe **Gange**, fleuve sacré de l'hindouisme, fait vivre aujourd'hui des centaines de millions de personnes."
    },
    {
      title: "Les fleuves de France",
      text: "La France compte cinq grands fleuves :\n\n- **la Loire** (environ 1 000 km), le plus long fleuve entièrement français, surnommé le « dernier fleuve sauvage d'Europe » ; ses châteaux sont classés à l'UNESCO ;\n- **la Seine**, qui traverse Paris et se jette dans la Manche au Havre ;\n- **le Rhône**, né en Suisse, le plus puissant, qui forme le delta de la **Camargue** ;\n- **la Garonne**, qui forme avec la Dordogne l'estuaire de la Gironde ;\n- **le Rhin**, qui marque la frontière avec l'Allemagne avant de traverser l'Allemagne et les Pays-Bas."
    },
    {
      title: "Les enjeux de l'eau",
      text: "Les fleuves sont des **voies de transport** (le Rhin est l'une des voies navigables les plus fréquentées du monde), des sources d'**énergie** (barrages hydroélectriques) et d'**irrigation**.\n\nIls sont aussi source de **tensions** quand ils traversent plusieurs pays. Le **Grand barrage de la Renaissance**, construit par l'**Éthiopie** sur le Nil Bleu, inquiète l'**Égypte**, qui dépend du Nil pour l'essentiel de son eau. Le **barrage des Trois-Gorges** en Chine, sur le Yangtsé, est la plus grande centrale électrique du monde."
    }
  ],
  funFact: "L'Amazone ne possède **aucun pont** sur tout son cours principal : la forêt, les crues et la largeur du fleuve (plusieurs kilomètres, voire des dizaines en saison des pluies) rendent les constructions très difficiles et peu utiles.",
  keyPoints: [
    "Un fleuve se jette dans la mer ; une rivière dans un autre cours d'eau.",
    "Le Nil et l'Amazone sont les plus longs ; l'Amazone est de loin le plus puissant.",
    "Les premières civilisations sont nées au bord des fleuves (Tigre et Euphrate, Nil, Indus, fleuve Jaune).",
    "Cinq grands fleuves en France : Loire (le plus long), Seine, Rhône, Garonne, Rhin.",
    "Les fleuves sont des enjeux de transport, d'énergie et de tensions (barrage éthiopien sur le Nil)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle est la différence entre un fleuve et une rivière ?",
      options: ["La longueur", "Un fleuve se jette dans la mer, une rivière dans un autre cours d'eau", "La couleur de l'eau", "Il n'y en a aucune"],
      answer: 1,
      explanation: "C'est la définition utilisée en français."
    },
    {
      type: "qcm",
      question: "Quel est le fleuve le plus puissant du monde ?",
      options: ["Le Nil", "Le Mississippi", "L'Amazone", "Le Yangtsé"],
      answer: 2,
      explanation: "Il apporte environ 20 % de l'eau douce qui arrive dans les océans."
    },
    {
      type: "qcm",
      question: "Que signifie « Mésopotamie » ?",
      options: ["Pays du soleil", "Entre les fleuves", "Terre noire", "Grande plaine"],
      answer: 1,
      explanation: "Elle s'étend entre le Tigre et l'Euphrate."
    },
    {
      type: "qcm",
      question: "Quel est le plus long fleuve entièrement français ?",
      options: ["La Seine", "Le Rhône", "La Loire", "La Garonne"],
      answer: 2,
      explanation: "Environ 1 000 km. Le Rhône et le Rhin prennent leur source en Suisse."
    },
    {
      type: "vf",
      question: "La Seine se jette dans la mer Méditerranée.",
      answer: false,
      explanation: "Faux : elle se jette dans la Manche, au Havre. C'est le Rhône qui se jette dans la Méditerranée."
    }
  ]
});
