registerLesson({
  id: "histoire-moyen-age",
  theme: "histoire",
  title: "Le Moyen Âge et la féodalité",
  subtitle: "Mille ans de seigneurs, de moines et de paysans",
  minutes: 7,
  intro: "Le Moyen Âge s'étend sur **mille ans**, de la chute de Rome (476) à la fin du XVe siècle. Loin d'être un simple « âge sombre », c'est une période de grandes transformations.",
  sections: [
    {
      title: "Une longue période",
      text: "Les historiens datent traditionnellement le Moyen Âge de **476** (fin de l'Empire romain d'Occident) à **1453** (prise de Constantinople) ou **1492** (arrivée de Colomb en Amérique). On le divise en trois temps :\n\n- le **haut Moyen Âge** (Ve–Xe siècle) : royaumes barbares, **Clovis** (roi des Francs, baptisé vers 496–499), **Charlemagne** (couronné empereur en **800**) ;\n- le **Moyen Âge central** (XIe–XIIIe siècle) : essor démographique, villes, cathédrales ;\n- le **bas Moyen Âge** (XIVe–XVe siècle) : crises, peste, guerre de Cent Ans."
    },
    {
      title: "Seigneurs et vassaux",
      text: "Après l'éclatement de l'empire de Charlemagne, le pouvoir du roi s'affaiblit. Le pouvoir réel passe aux **seigneurs**, installés dans leurs **châteaux forts**. C'est la **féodalité**.\n\nUn seigneur (le **vassal**) prête **hommage** à un seigneur plus puissant (son **suzerain**) : il lui jure fidélité et lui doit une aide militaire. En échange, il reçoit un **fief**, généralement une terre. Cette chaîne de liens personnels relie les chevaliers jusqu'au roi."
    },
    {
      title: "Ceux qui prient, combattent et travaillent",
      text: "Vers l'an 1000, les clercs décrivent une société divisée en **trois ordres** :\n\n- **ceux qui prient** (*oratores*) : le **clergé** ;\n- **ceux qui combattent** (*bellatores*) : les **nobles** et chevaliers ;\n- **ceux qui travaillent** (*laboratores*) : les **paysans**, l'immense majorité.\n\nLes paysans vivent dans la **seigneurie** et doivent au seigneur des taxes et des corvées. Les **serfs**, non libres, sont attachés à la terre. L'**Église** encadre toute la vie : baptême, messe, fêtes, et perçoit la **dîme**."
    },
    {
      title: "L'essor des XIe–XIIIe siècles",
      text: "Grâce aux progrès agricoles (charrue, assolement triennal, moulins), la population européenne augmente fortement. Les **villes** renaissent, avec leurs marchands, artisans organisés en **corporations**, et foires (comme celles de Champagne).\n\nC'est aussi l'époque des **croisades** (à partir de **1095**), des **universités** (Bologne, Paris, Oxford), de l'art **roman** puis **gothique**, et des grands ordres monastiques (Cluny, Cîteaux)."
    },
    {
      title: "Les crises de la fin du Moyen Âge",
      text: "Le XIVe siècle est terrible. La **peste noire** (**1347–1352**) tue **entre un tiers et la moitié** de la population européenne.\n\nLa **guerre de Cent Ans** (**1337–1453**) oppose les rois de France et d'Angleterre. Elle est marquée par l'épopée de **Jeanne d'Arc**, qui délivre Orléans en **1429**, fait sacrer Charles VII à Reims, puis est brûlée vive à **Rouen** en **1431**.\n\nÀ la fin du XVe siècle, le pouvoir royal s'est renforcé, et l'imprimerie et les grandes découvertes ouvrent une nouvelle époque : la Renaissance."
    }
  ],
  funFact: "Contrairement à une idée reçue, les savants du Moyen Âge **savaient que la Terre était ronde**. Ce savoir, hérité des Grecs, était largement admis par les érudits. Le mythe d'un Moyen Âge croyant à une Terre plate date surtout du XIXe siècle.",
  keyPoints: [
    "Le Moyen Âge va de 476 à 1453 ou 1492 ; Charlemagne est couronné empereur en 800.",
    "La féodalité : le vassal prête hommage au suzerain et reçoit un fief.",
    "Trois ordres : ceux qui prient, ceux qui combattent, ceux qui travaillent.",
    "Essor des XIe–XIIIe siècles : villes, universités, croisades, cathédrales.",
    "Crises : peste noire (1347–1352), guerre de Cent Ans (1337–1453), Jeanne d'Arc."
  ],
  quiz: [
    {
      type: "qcm",
      question: "En quelle année Charlemagne est-il couronné empereur ?",
      options: ["476", "800", "1066", "1453"],
      answer: 1,
      explanation: "À Rome, le jour de Noël de l'an 800."
    },
    {
      type: "qcm",
      question: "Que reçoit un vassal en échange de sa fidélité ?",
      options: ["Un salaire", "Un fief", "Un titre de roi", "Une église"],
      answer: 1,
      explanation: "Généralement une terre, qui lui assure des revenus."
    },
    {
      type: "qcm",
      question: "Quelle proportion de la population européenne la peste noire a-t-elle tuée ?",
      options: ["Environ 5 %", "Entre un tiers et la moitié", "Environ 90 %", "Moins de 1 %"],
      answer: 1,
      explanation: "Entre 1347 et 1352."
    },
    {
      type: "vf",
      question: "Au Moyen Âge, les savants pensaient que la Terre était plate.",
      answer: false,
      explanation: "Faux : la rotondité de la Terre, héritée des Grecs, était admise par les érudits."
    },
    {
      type: "qcm",
      question: "Où Jeanne d'Arc a-t-elle été brûlée en 1431 ?",
      options: ["À Orléans", "À Reims", "À Rouen", "À Paris"],
      answer: 2,
      explanation: "À Rouen, alors sous contrôle anglais."
    }
  ]
});
