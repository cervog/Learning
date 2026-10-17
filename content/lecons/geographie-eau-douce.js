registerLesson({
  id: "geographie-eau-douce",
  theme: "geographie",
  title: "L'eau douce, une ressource vitale",
  subtitle: "La planète bleue manque-t-elle d'eau ?",
  minutes: 6,
  intro: "La Terre est couverte d'eau, et pourtant plus de deux milliards de personnes n'ont pas accès à une eau potable gérée en toute sécurité. Comment est-ce possible ?",
  sections: [
    {
      title: "Très peu d'eau utilisable",
      text: "Environ **97,5 %** de l'eau de la planète est **salée** (océans et mers). Seuls **2,5 %** sont de l'**eau douce**.\n\nEt cette eau douce est surtout difficile d'accès : environ **70 %** est bloquée dans les **glaciers** et les calottes polaires (Antarctique, Groenland), et la plus grande partie du reste se trouve dans les **nappes souterraines**. Les lacs et rivières ne représentent qu'une infime partie de l'eau de la planète, moins de 1 % de l'eau douce."
    },
    {
      title: "Le cycle de l'eau",
      text: "L'eau circule en permanence : elle **s'évapore** des océans et des sols, **se condense** en nuages, retombe en **précipitations** (pluie, neige), puis **ruisselle** vers les rivières ou **s'infiltre** dans le sol pour recharger les nappes, avant de rejoindre la mer.\n\nCe cycle, alimenté par l'énergie du Soleil, renouvelle sans cesse l'eau douce. Le problème n'est donc pas tant la quantité totale que sa **répartition** dans l'espace et dans le temps."
    },
    {
      title: "Une ressource inégalement répartie",
      text: "Quelques pays concentrent une grande partie des ressources en eau douce : le **Brésil** (grâce à l'Amazone), la **Russie**, le **Canada**, les États-Unis, la Chine, l'Indonésie…\n\nÀ l'inverse, le **Moyen-Orient** et l'**Afrique du Nord** sont les régions les plus touchées par le **stress hydrique**. Des pays comme l'Arabie saoudite ou Israël dépendent largement du **dessalement** de l'eau de mer, coûteux en énergie.\n\nSelon l'ONU, environ **2,2 milliards** de personnes n'ont pas accès à des services d'eau potable gérés en toute sécurité, ce qui provoque des maladies comme le **choléra**."
    },
    {
      title: "À quoi sert l'eau ?",
      text: "Au niveau mondial, l'eau prélevée est utilisée :\n\n- à environ **70 %** pour l'**agriculture** (irrigation) ;\n- à environ **20 %** pour l'**industrie** et l'énergie (refroidissement des centrales) ;\n- à environ **10 %** pour les usages **domestiques**.\n\nL'**eau virtuelle** désigne l'eau nécessaire pour produire un bien : il faut environ **15 000 litres** d'eau pour produire 1 kg de bœuf, et plusieurs milliers de litres pour un jean en coton. Une mer entière, la **mer d'Aral** (Asie centrale), a presque disparu à cause de l'irrigation intensive du coton à l'époque soviétique."
    },
    {
      title: "Les défis",
      text: "Le **réchauffement climatique** intensifie les sécheresses et les inondations, et fait fondre les glaciers qui alimentent de grands fleuves d'Asie. La **croissance démographique** et l'urbanisation augmentent la demande.\n\nL'eau est source de **tensions** entre pays partageant un même fleuve (le Nil, le Tigre et l'Euphrate, l'Indus…). Les solutions : réduire le **gaspillage** et les fuites, développer l'**irrigation goutte-à-goutte**, réutiliser les eaux usées traitées, protéger les nappes de la pollution. Depuis **2010**, l'ONU reconnaît l'accès à l'eau potable comme un **droit humain**."
    }
  ],
  funFact: "Si toute l'eau de la Terre tenait dans une **bouteille de 1,5 litre**, l'eau douce facilement accessible (lacs et rivières) représenterait à peine **quelques gouttes**.",
  keyPoints: [
    "97,5 % de l'eau de la Terre est salée ; l'eau douce est surtout dans les glaciers et les nappes souterraines.",
    "Le cycle de l'eau renouvelle sans cesse l'eau douce ; le problème est sa répartition.",
    "Le Moyen-Orient et l'Afrique du Nord souffrent le plus du stress hydrique ; 2,2 milliards de personnes manquent d'eau potable sûre.",
    "L'agriculture utilise environ 70 % de l'eau prélevée ; la mer d'Aral a presque disparu.",
    "Depuis 2010, l'accès à l'eau potable est reconnu comme un droit humain par l'ONU."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle part de l'eau de la Terre est de l'eau douce ?",
      options: ["Environ 2,5 %", "Environ 25 %", "Environ 50 %", "Environ 75 %"],
      answer: 0,
      explanation: "Le reste est de l'eau salée."
    },
    {
      type: "qcm",
      question: "Où se trouve la plus grande partie de l'eau douce de la planète ?",
      options: ["Dans les lacs", "Dans les glaciers et calottes polaires", "Dans les rivières", "Dans l'atmosphère"],
      answer: 1,
      explanation: "Environ 70 % de l'eau douce est sous forme de glace."
    },
    {
      type: "qcm",
      question: "Quelle activité consomme le plus d'eau dans le monde ?",
      options: ["Les usages domestiques", "L'industrie", "L'agriculture", "Les loisirs"],
      answer: 2,
      explanation: "Environ 70 % de l'eau prélevée sert à l'irrigation."
    },
    {
      type: "vf",
      question: "La mer d'Aral a presque disparu à cause de l'irrigation intensive.",
      answer: true,
      explanation: "Vrai : les fleuves qui l'alimentaient ont été détournés pour irriguer le coton."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que le dessalement ?",
      options: ["Retirer le sel de l'eau de mer pour la rendre potable", "Ajouter du sel dans l'eau", "Faire fondre les glaciers", "Filtrer l'eau de pluie"],
      answer: 0,
      explanation: "Une technique très utilisée au Moyen-Orient, mais gourmande en énergie."
    }
  ]
});
