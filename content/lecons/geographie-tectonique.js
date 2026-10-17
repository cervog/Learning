registerLesson({
  id: "geographie-tectonique",
  theme: "geographie",
  title: "La tectonique des plaques",
  subtitle: "Pourquoi les continents bougent, et la Terre tremble",
  minutes: 6,
  intro: "L'Atlantique s'élargit chaque année d'environ **2 à 3 centimètres**, à peu près la vitesse de pousse de vos ongles. La surface de la Terre est en mouvement permanent : c'est la **tectonique des plaques**.",
  sections: [
    {
      title: "Wegener et la dérive des continents",
      text: "En **1912**, le météorologue allemand **Alfred Wegener** remarque que les côtes de l'Amérique du Sud et de l'Afrique s'emboîtent comme un puzzle. On retrouve aussi les **mêmes fossiles** et les mêmes roches des deux côtés de l'océan.\n\nIl en conclut que les continents formaient autrefois un supercontinent unique, la **Pangée**, qui s'est fragmenté il y a environ 200 millions d'années. Sa théorie de la **dérive des continents** est d'abord rejetée : il ne parvient pas à expliquer quelle force les fait bouger."
    },
    {
      title: "Des plaques qui flottent",
      text: "La preuve vient dans les années **1960**, grâce à l'exploration des fonds océaniques. La surface de la Terre (la **lithosphère**) est découpée en une quinzaine de grandes **plaques** rigides, qui se déplacent sur une couche plus chaude et déformable du manteau (l'**asthénosphère**).\n\nLe moteur : la **chaleur interne** de la Terre, qui provoque de lents mouvements de **convection** dans le manteau."
    },
    {
      title: "Trois types de frontières",
      text: "- **Divergence** : les plaques s'écartent. Du magma remonte et crée un nouveau plancher océanique, au niveau des **dorsales**, comme la dorsale médio-atlantique. L'**Islande** est posée dessus.\n- **Convergence** : les plaques se rapprochent. Une plaque océanique plonge sous une autre (**subduction**), créant des fosses et des volcans (la cordillère des **Andes**). Quand deux continents se heurtent, ils forment des chaînes de montagnes : l'**Himalaya** est né de la collision entre l'Inde et l'Asie.\n- **Coulissage** : les plaques glissent l'une contre l'autre, comme la **faille de San Andreas** en Californie."
    },
    {
      title: "Séismes et volcans",
      text: "La plupart des **séismes** et des **volcans** se situent aux frontières des plaques. La « **ceinture de feu du Pacifique** » concentre environ 75 % des volcans actifs et une grande partie des séismes (Japon, Indonésie, Chili, Californie).\n\nLa magnitude d'un séisme se mesure aujourd'hui sur l'échelle de **magnitude de moment**, qui a succédé à l'échelle de **Richter** : chaque degré correspond à environ **32 fois plus d'énergie**. Un séisme sous-marin peut provoquer un **tsunami**, comme en 2004 dans l'océan Indien ou en 2011 au Japon."
    },
    {
      title: "Le futur de la Terre",
      text: "Les plaques continuent de bouger : l'Atlantique s'élargit, la Méditerranée se referme lentement, l'Afrique de l'Est se déchire le long du **rift est-africain**. Dans environ 200 à 250 millions d'années, les continents pourraient se réunir en un nouveau supercontinent, que les géologues ont surnommé « **Pangée ultime** »."
    }
  ],
  funFact: "L'**Everest** grandit encore de quelques millimètres par an, poussé par la collision entre l'Inde et l'Asie. On trouve même des **fossiles marins** à son sommet : ces roches étaient autrefois au fond d'un océan disparu, la Téthys.",
  keyPoints: [
    "Wegener (1912) propose la dérive des continents et la Pangée.",
    "La lithosphère est découpée en plaques qui bougent grâce à la convection du manteau.",
    "Divergence (dorsales), convergence (subduction, montagnes), coulissage (San Andreas).",
    "Séismes et volcans se concentrent aux frontières de plaques (ceinture de feu du Pacifique).",
    "L'Himalaya est né de la collision entre l'Inde et l'Asie."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Comment s'appelait le supercontinent unique d'il y a environ 200 millions d'années ?",
      options: ["L'Atlantide", "La Pangée", "La Laurasie", "Le Gondwana"],
      answer: 1,
      explanation: "La Laurasie et le Gondwana sont issus de sa fragmentation."
    },
    {
      type: "qcm",
      question: "Comment s'est formé l'Himalaya ?",
      options: ["Par un énorme volcan", "Par la collision entre l'Inde et l'Asie", "Par l'érosion", "Par la chute d'une météorite"],
      answer: 1,
      explanation: "La plaque indienne pousse toujours contre la plaque eurasienne."
    },
    {
      type: "qcm",
      question: "Que se passe-t-il au niveau d'une dorsale océanique ?",
      options: ["Deux plaques s'écartent et du nouveau plancher océanique se forme", "Une plaque plonge sous une autre", "Deux plaques glissent l'une contre l'autre", "Rien, c'est une zone stable"],
      answer: 0,
      explanation: "C'est une frontière divergente."
    },
    {
      type: "vf",
      question: "La théorie de Wegener a été immédiatement acceptée par les scientifiques.",
      answer: false,
      explanation: "Faux : elle a été rejetée pendant des décennies, avant d'être confirmée dans les années 1960."
    },
    {
      type: "qcm",
      question: "À quelle vitesse approximative l'océan Atlantique s'élargit-il ?",
      options: ["2 à 3 cm par an", "1 mètre par an", "1 km par an", "Il ne bouge pas"],
      answer: 0,
      explanation: "À peu près la vitesse de pousse des ongles."
    }
  ]
});
