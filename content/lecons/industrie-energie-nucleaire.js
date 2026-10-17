registerLesson({
  id: "industrie-energie-nucleaire",
  theme: "industrie",
  title: "L'énergie nucléaire",
  subtitle: "Comment un atome fait tourner une turbine",
  minutes: 7,
  intro: "La France tire environ **deux tiers de son électricité** du nucléaire, un record mondial. Mais comment fonctionne une centrale, et pourquoi le sujet divise-t-il autant ?",
  sections: [
    {
      title: "La fission, au cœur du réacteur",
      text: "Une centrale nucléaire exploite la **fission** : on bombarde des noyaux d'**uranium 235** avec des **neutrons**. Le noyau se casse en deux, libère une énorme quantité de **chaleur** et éjecte d'autres neutrons, qui cassent d'autres noyaux : c'est la **réaction en chaîne**.\n\nDans une centrale, elle est **contrôlée** grâce à des barres qui absorbent les neutrons. Un seul gramme d'uranium produit autant d'énergie qu'environ **une tonne de pétrole**."
    },
    {
      title: "De la chaleur à l'électricité",
      text: "Au fond, une centrale nucléaire est une **bouilloire géante** :\n\n- la chaleur de la fission chauffe de l'eau ;\n- cette eau produit de la **vapeur** ;\n- la vapeur fait tourner une **turbine** reliée à un **alternateur**, qui produit l'électricité ;\n- la vapeur est refroidie grâce à l'eau d'un fleuve, de la mer, ou dans les grandes **tours de refroidissement**.\n\nLe panache blanc qui sort de ces tours n'est que de la **vapeur d'eau**, pas de la fumée ni de la radioactivité."
    },
    {
      title: "Le choix français",
      text: "Après le **choc pétrolier de 1973**, la France lance le **plan Messmer** (1974) pour gagner en indépendance énergétique. En quelques décennies, elle construit un parc d'environ **56 réacteurs** répartis sur 18 sites. Le réacteur **EPR de Flamanville**, longtemps retardé, a été raccordé au réseau fin 2024.\n\nDans le monde, le nucléaire fournit environ **9 %** de l'électricité. Les **États-Unis** ont le plus grand parc de réacteurs, et la **Chine** construit le plus de nouvelles centrales."
    },
    {
      title: "Avantages et inconvénients",
      text: "**Points forts** :\n\n- une électricité **très peu émettrice de CO₂**, comparable à l'éolien ;\n- une production **stable et pilotable**, qui ne dépend pas de la météo ;\n- peu de surface occupée.\n\n**Points faibles** :\n\n- le risque d'**accident grave** : **Tchernobyl** (Ukraine, URSS, 1986) et **Fukushima** (Japon, 2011, après un tsunami) ;\n- les **déchets radioactifs**, dont certains restent dangereux pendant des centaines de milliers d'années (projet de stockage profond **Cigéo** à Bure, dans la Meuse) ;\n- des **coûts** et délais de construction élevés."
    },
    {
      title: "Et la fusion ?",
      text: "La **fusion** est le phénomène inverse : on fusionne des noyaux légers (hydrogène) pour former un noyau plus lourd (hélium). C'est ce qui fait briller le **Soleil**.\n\nElle produirait beaucoup d'énergie avec peu de déchets durables, mais elle exige des températures de **plus de 100 millions de degrés**. Le projet international **ITER**, en construction à **Cadarache** (Bouches-du-Rhône), cherche à démontrer sa faisabilité. Une production commerciale n'est pas attendue avant plusieurs décennies."
    }
  ],
  funFact: "À **Oklo**, au **Gabon**, on a découvert des **réacteurs nucléaires naturels** : il y a environ 2 milliards d'années, des gisements d'uranium ont entretenu spontanément des réactions de fission pendant des centaines de milliers d'années !",
  keyPoints: [
    "Une centrale nucléaire utilise la fission de l'uranium 235 en réaction en chaîne contrôlée.",
    "La chaleur produit de la vapeur qui fait tourner une turbine et un alternateur.",
    "La France tire environ deux tiers de son électricité du nucléaire (plan Messmer, 1974).",
    "Atouts : peu de CO₂, production stable ; risques : accidents (Tchernobyl, Fukushima), déchets.",
    "La fusion (ITER à Cadarache) est encore expérimentale."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel phénomène est utilisé dans les centrales nucléaires actuelles ?",
      options: ["La fusion de l'hydrogène", "La fission de l'uranium", "La combustion du charbon", "La photosynthèse"],
      answer: 1,
      explanation: "On casse des noyaux d'uranium 235."
    },
    {
      type: "vf",
      question: "Le panache blanc qui s'échappe des tours de refroidissement est radioactif.",
      answer: false,
      explanation: "Faux : c'est simplement de la vapeur d'eau."
    },
    {
      type: "qcm",
      question: "Quelle part de l'électricité française est d'origine nucléaire ?",
      options: ["Environ 10 %", "Environ un tiers", "Environ deux tiers", "100 %"],
      answer: 2,
      explanation: "La France détient la plus forte part de nucléaire au monde."
    },
    {
      type: "qcm",
      question: "Quel accident nucléaire a eu lieu en 2011 ?",
      options: ["Tchernobyl", "Three Mile Island", "Fukushima", "Flamanville"],
      answer: 2,
      explanation: "Au Japon, après un séisme et un tsunami."
    },
    {
      type: "qcm",
      question: "Où se construit le réacteur expérimental de fusion ITER ?",
      options: ["Au Japon", "Aux États-Unis", "À Cadarache, en France", "En Suisse, au CERN"],
      answer: 2,
      explanation: "Dans les Bouches-du-Rhône, avec 35 pays partenaires."
    }
  ]
});
