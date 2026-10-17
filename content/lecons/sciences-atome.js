registerLesson({
  id: "sciences-atome",
  theme: "sciences",
  title: "L'atome et le tableau périodique",
  subtitle: "Les briques de toute la matière",
  minutes: 6,
  intro: "Votre corps, l'air, une étoile : tout est fait d'**atomes**. Il en existe environ 118 sortes, rangées dans un tableau génial inventé par un chimiste russe.",
  sections: [
    {
      title: "Une idée vieille de 2 400 ans",
      text: "Vers **400 av. J.-C.**, le philosophe grec **Démocrite** imagine que la matière est faite de minuscules particules **indivisibles** : les **atomes** (*atomos*, « que l'on ne peut couper »).\n\nIl faut attendre le début du XIXe siècle pour que le chimiste anglais **John Dalton** en fasse une théorie scientifique. Ironie : on découvrira ensuite que l'atome… est bien divisible !"
    },
    {
      title: "La structure de l'atome",
      text: "Un atome est composé :\n\n- d'un **noyau** central, formé de **protons** (charge positive) et de **neutrons** (sans charge) ;\n- d'**électrons** (charge négative), qui se déplacent autour du noyau.\n\nL'atome est surtout fait de **vide** : si le noyau avait la taille d'une bille au centre d'un stade de football, les électrons évolueraient au niveau des tribunes. Pourtant, presque toute la masse est concentrée dans le noyau. Cette structure a été découverte par **Ernest Rutherford** en **1911**."
    },
    {
      title: "Éléments et numéro atomique",
      text: "Ce qui distingue un élément chimique d'un autre, c'est le **nombre de protons** dans son noyau : c'est le **numéro atomique**.\n\n- **1 proton** : l'**hydrogène** (H), l'élément le plus simple et le plus abondant de l'Univers ;\n- **6** : le **carbone** (C), base de la vie ;\n- **8** : l'**oxygène** (O) ;\n- **26** : le **fer** (Fe) ;\n- **79** : l'**or** (Au, du latin *aurum*).\n\nDes atomes d'un même élément avec un nombre différent de neutrons sont des **isotopes** (par exemple le carbone 14, utilisé pour dater les vestiges)."
    },
    {
      title: "Le tableau de Mendeleïev",
      text: "En **1869**, le chimiste russe **Dmitri Mendeleïev** classe les éléments connus par masse croissante et remarque que leurs propriétés se **répètent périodiquement**. Il les organise en un **tableau périodique**, avec un coup de génie : il laisse des **cases vides** pour des éléments encore inconnus et prédit leurs propriétés. Le gallium (1875) et le germanium (1886) sont découverts plus tard, conformes à ses prédictions.\n\nAujourd'hui, le tableau compte **118 éléments**, dont environ 90 existent à l'état naturel. Les **colonnes** regroupent des éléments aux propriétés semblables : les **gaz nobles** (hélium, néon…) à droite, très stables ; les **métaux alcalins** (sodium, potassium) à gauche, très réactifs."
    },
    {
      title: "Les molécules",
      text: "Les atomes s'assemblent en **molécules** en partageant ou en échangeant des électrons : ce sont les **liaisons chimiques**.\n\nUne molécule d'**eau** (H₂O) est faite de deux atomes d'hydrogène et d'un atome d'oxygène ; le **dioxyde de carbone** (CO₂) d'un carbone et de deux oxygènes. Le sel de cuisine est du **chlorure de sodium** (NaCl). La chimie est l'étude de ces assemblages et de leurs transformations."
    }
  ],
  funFact: "Une seule goutte d'eau contient environ **1,5 trilliard** (1,5 × 10²¹) de molécules. Si chacune était un grain de sable, il y aurait de quoi recouvrir la France d'une couche de plusieurs mètres.",
  keyPoints: [
    "Démocrite imagine les atomes vers 400 av. J.-C. ; Dalton en fait une théorie scientifique.",
    "Un atome = un noyau (protons + neutrons) entouré d'électrons ; il est surtout fait de vide.",
    "Le numéro atomique (nombre de protons) définit l'élément : H = 1, C = 6, O = 8.",
    "Mendeleïev crée le tableau périodique en 1869 et prédit des éléments inconnus.",
    "Le tableau compte 118 éléments ; les atomes forment des molécules (H₂O, CO₂)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a créé le tableau périodique des éléments ?",
      options: ["Marie Curie", "Dmitri Mendeleïev", "Antoine Lavoisier", "Albert Einstein"],
      answer: 1,
      explanation: "En 1869."
    },
    {
      type: "qcm",
      question: "Qu'est-ce qui définit un élément chimique ?",
      options: ["Son nombre de neutrons", "Son nombre de protons", "Sa couleur", "Sa masse uniquement"],
      answer: 1,
      explanation: "C'est le numéro atomique."
    },
    {
      type: "qcm",
      question: "Quel est l'élément le plus abondant de l'Univers ?",
      options: ["L'oxygène", "Le carbone", "L'hydrogène", "Le fer"],
      answer: 2,
      explanation: "Il compte un seul proton."
    },
    {
      type: "vf",
      question: "L'atome est essentiellement constitué de vide.",
      answer: true,
      explanation: "Vrai : le noyau est minuscule par rapport à la taille de l'atome."
    },
    {
      type: "qcm",
      question: "Quel est le symbole chimique de l'or ?",
      options: ["Or", "Go", "Au", "Ag"],
      answer: 2,
      explanation: "Du latin aurum. Ag est l'argent (argentum)."
    }
  ]
});
