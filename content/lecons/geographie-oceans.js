registerLesson({
  id: "geographie-oceans",
  theme: "geographie",
  title: "Les océans",
  subtitle: "71 % de la planète, et pourtant si mal connus",
  minutes: 6,
  intro: "Vue de l'espace, la Terre est une **planète bleue** : les océans couvrent **71 %** de sa surface. Ils régulent le climat, produisent une grande partie de notre oxygène et restent l'un des milieux les moins explorés.",
  sections: [
    {
      title: "Cinq océans",
      text: "On distingue traditionnellement **cinq océans**, qui communiquent tous entre eux :\n\n- le **Pacifique**, le plus grand et le plus profond : il couvre environ un tiers de la planète, plus que toutes les terres émergées réunies ;\n- l'**Atlantique**, le deuxième, qui sépare l'Europe et l'Afrique des Amériques ;\n- l'**océan Indien** ;\n- l'**océan Austral**, autour de l'Antarctique ;\n- l'**océan Arctique**, le plus petit, en grande partie gelé.\n\nLes **mers** (Méditerranée, mer du Nord…) sont des étendues plus petites, souvent partiellement entourées de terres."
    },
    {
      title: "Les profondeurs",
      text: "La profondeur moyenne des océans est d'environ **3 700 mètres**. Le point le plus profond est la **fosse des Mariannes**, dans le Pacifique, avec environ **11 000 mètres** au point **Challenger Deep** : on pourrait y engloutir l'Everest avec plus de 2 km d'eau au-dessus.\n\nSeules quelques personnes y sont descendues, dont **Jacques Piccard** et Don Walsh en **1960**, et le cinéaste **James Cameron** en 2012. On dit souvent que nous connaissons mieux la surface de la Lune que les fonds marins."
    },
    {
      title: "Le régulateur du climat",
      text: "Les océans jouent un rôle essentiel dans le climat :\n\n- ils **stockent la chaleur** : ils ont absorbé environ **90 %** de l'excès de chaleur dû au réchauffement climatique ;\n- ils **absorbent** environ un quart du **CO₂** émis par les activités humaines, ce qui les rend plus acides ;\n- les **courants marins** transportent la chaleur à travers la planète, comme le **Gulf Stream** ;\n- le **phytoplancton**, des algues microscopiques, produit environ **la moitié de l'oxygène** de la planète."
    },
    {
      title: "Qui possède la mer ?",
      text: "La **Convention de Montego Bay** (**1982**) sur le droit de la mer définit plusieurs zones :\n\n- les **eaux territoriales** (jusqu'à **12 milles marins**, environ 22 km), où l'État est souverain ;\n- la **zone économique exclusive** (**ZEE**, jusqu'à **200 milles**, environ 370 km), où l'État exploite seul les ressources (pêche, pétrole) ;\n- au-delà, la **haute mer**, qui n'appartient à personne.\n\nGrâce à ses territoires d'outre-mer, la **France** possède la **deuxième ZEE du monde** (environ 10 millions de km²), juste derrière les États-Unis."
    },
    {
      title: "Des océans menacés",
      text: "Les océans subissent de nombreuses pressions : **surpêche** (plus d'un tiers des stocks de poissons sont surexploités), **pollution plastique** (des millions de tonnes par an, qui forment des « continents de plastique » dans les grands tourbillons océaniques), **réchauffement** et **acidification**, qui font blanchir les **coraux**.\n\nEn **2023**, les pays de l'ONU ont adopté le **traité sur la haute mer** pour protéger la biodiversité dans les eaux internationales ; entré en vigueur en janvier 2026, il permet de créer des aires marines protégées en haute mer, un outil clé pour l'objectif international de protéger 30 % des océans d'ici 2030."
    }
  ],
  funFact: "Le **Pacifique** doit son nom au navigateur **Magellan**, qui le traversa en 1520–1521 dans un calme inattendu après une terrible traversée du détroit qui porte aujourd'hui son nom. Il le baptisa *Mar Pacífico*, la « mer paisible ».",
  keyPoints: [
    "Les océans couvrent 71 % de la Terre ; le Pacifique est le plus grand et le plus profond.",
    "La fosse des Mariannes atteint environ 11 000 m de profondeur.",
    "Les océans absorbent chaleur et CO₂ ; le phytoplancton produit environ la moitié de l'oxygène.",
    "Montego Bay (1982) : eaux territoriales (12 milles), ZEE (200 milles), haute mer.",
    "La France possède la deuxième ZEE du monde grâce à l'outre-mer."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle part de la surface de la Terre les océans couvrent-ils ?",
      options: ["Environ 30 %", "Environ 50 %", "Environ 71 %", "Environ 90 %"],
      answer: 2,
      explanation: "D'où le surnom de « planète bleue »."
    },
    {
      type: "qcm",
      question: "Où se trouve le point le plus profond des océans ?",
      options: ["Dans l'Atlantique", "Dans la fosse des Mariannes, dans le Pacifique", "En Méditerranée", "Sous le pôle Nord"],
      answer: 1,
      explanation: "Environ 11 000 m au Challenger Deep."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que la ZEE ?",
      options: ["Une zone de pêche interdite", "La zone économique exclusive, jusqu'à 200 milles des côtes", "Une zone militaire", "Une réserve naturelle"],
      answer: 1,
      explanation: "L'État y exploite seul les ressources."
    },
    {
      type: "vf",
      question: "La France possède l'une des plus grandes zones maritimes du monde.",
      answer: true,
      explanation: "Vrai : la deuxième, grâce à ses territoires d'outre-mer."
    },
    {
      type: "qcm",
      question: "Qui produit environ la moitié de l'oxygène de la planète ?",
      options: ["Les forêts tropicales", "Le phytoplancton des océans", "Les baleines", "Les coraux"],
      answer: 1,
      explanation: "Ces algues microscopiques réalisent la photosynthèse."
    }
  ]
});
