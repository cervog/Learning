registerLesson({
  id: "histoire-egypte-antique",
  theme: "histoire",
  title: "L'Égypte des pharaons",
  subtitle: "Trois mille ans de civilisation au bord du Nil",
  minutes: 7,
  intro: "Pyramides, momies, hiéroglyphes… L'**Égypte antique** fascine depuis toujours. Cette civilisation a duré **près de 3 000 ans**, bien plus longtemps que l'Empire romain.",
  sections: [
    {
      title: "Un don du Nil",
      text: "L'historien grec **Hérodote** disait que l'Égypte est « un **don du Nil** ». Au milieu du désert, le fleuve offre une bande de terre fertile : chaque été, sa **crue** dépose un limon noir très riche. Les Égyptiens appelaient d'ailleurs leur pays *Kemet*, la « terre noire ».\n\nVers **3100 av. J.-C.**, la Haute et la Basse-Égypte sont unifiées sous un même roi. Commence alors l'histoire des **pharaons**, divisée en trois grandes périodes : l'**Ancien**, le **Moyen** et le **Nouvel Empire**."
    },
    {
      title: "Le pharaon, roi et dieu",
      text: "Le **pharaon** est à la fois un roi et un être divin, intermédiaire entre les dieux et les hommes. Il garantit la **Maât**, l'ordre du monde et la justice.\n\nLes Égyptiens adorent de nombreux dieux : **Rê** (le soleil), **Osiris** (dieu des morts), **Isis**, **Horus** (à tête de faucon), **Anubis** (à tête de chacal)… Seul **Akhenaton** (vers 1350 av. J.-C.) tente d'imposer le culte d'un dieu unique, **Aton** ; ce culte est abandonné après sa mort."
    },
    {
      title: "Les pyramides et la vie après la mort",
      text: "Les Égyptiens croient en une vie après la mort. Pour que l'âme survive, le corps doit être conservé : c'est la **momification**. Le défunt est jugé par Osiris : son cœur est pesé contre la plume de Maât.\n\nLes plus célèbres tombeaux sont les **pyramides de Gizeh**, construites sous l'Ancien Empire (vers **2600–2500 av. J.-C.**). La **pyramide de Khéops**, haute d'environ 146 m à l'origine, est la seule des **Sept Merveilles du monde antique** encore debout. Elles ont été bâties par des milliers d'**ouvriers** organisés et rémunérés — et non par des esclaves, comme on l'a longtemps cru.\n\nAu Nouvel Empire, les pharaons se font enterrer dans la **Vallée des Rois**, près de Louxor."
    },
    {
      title: "Ramsès, Toutânkhamon, Cléopâtre",
      text: "- **Toutânkhamon** est un pharaon mineur mort jeune, mais son tombeau, découvert intact par **Howard Carter en 1922**, l'a rendu célèbre.\n- **Ramsès II** (XIIIe siècle av. J.-C.) régna environ 66 ans et fit construire les temples d'**Abou Simbel**.\n- **Cléopâtre VII**, la dernière reine, était d'origine grecque (dynastie des Ptolémées, issue d'un général d'Alexandre le Grand). Après sa mort en **30 av. J.-C.**, l'Égypte devient une province romaine."
    },
    {
      title: "Le déchiffrement des hiéroglyphes",
      text: "Les **hiéroglyphes** mêlent des signes qui représentent des sons et d'autres qui représentent des idées. Leur sens avait été oublié pendant près de 1 500 ans.\n\nEn **1799**, pendant l'expédition de Bonaparte en Égypte, des soldats découvrent la **pierre de Rosette** : un même texte écrit en hiéroglyphes, en démotique et en **grec ancien**. Grâce à elle, le Français **Jean-François Champollion** déchiffre les hiéroglyphes en **1822**."
    }
  ],
  funFact: "Cléopâtre a vécu plus près de nous dans le temps (environ 2 000 ans) que de la construction de la pyramide de Khéops (environ 2 500 ans avant elle) !",
  keyPoints: [
    "L'Égypte antique dure près de 3 000 ans, de l'unification (v. 3100 av. J.-C.) à la conquête romaine (30 av. J.-C.).",
    "Le Nil et sa crue rendent possible l'agriculture : l'Égypte est « un don du Nil ».",
    "Le pharaon est un roi-dieu ; la momification prépare la vie après la mort.",
    "La pyramide de Khéops est la seule des Sept Merveilles antiques encore debout.",
    "Champollion déchiffre les hiéroglyphes en 1822 grâce à la pierre de Rosette."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a déchiffré les hiéroglyphes ?",
      options: ["Howard Carter", "Jean-François Champollion", "Hérodote", "Napoléon Bonaparte"],
      answer: 1,
      explanation: "Champollion, en 1822, grâce à la pierre de Rosette."
    },
    {
      type: "qcm",
      question: "Pourquoi la pierre de Rosette a-t-elle été si utile ?",
      options: ["Elle contenait une carte de l'Égypte", "Elle présentait le même texte en hiéroglyphes et en grec ancien", "Elle indiquait l'entrée des pyramides", "Elle était en or"],
      answer: 1,
      explanation: "Le grec, connu, a servi de clé pour comprendre les hiéroglyphes."
    },
    {
      type: "vf",
      question: "Les pyramides de Gizeh ont été construites par des esclaves.",
      answer: false,
      explanation: "Faux : les fouilles montrent qu'il s'agissait d'ouvriers organisés, nourris et rémunérés."
    },
    {
      type: "qcm",
      question: "Quel tombeau a été découvert intact en 1922 ?",
      options: ["Celui de Ramsès II", "Celui de Toutânkhamon", "Celui de Cléopâtre", "Celui de Khéops"],
      answer: 1,
      explanation: "Découvert par Howard Carter dans la Vallée des Rois."
    },
    {
      type: "qcm",
      question: "Que signifie l'expression « l'Égypte est un don du Nil » ?",
      options: ["Le Nil était un dieu", "Sans les crues fertiles du Nil, la civilisation égyptienne n'aurait pas pu exister", "Le Nil a été offert par les Grecs", "L'Égypte était entièrement inondée"],
      answer: 1,
      explanation: "Le limon déposé par la crue rendait l'agriculture possible au milieu du désert."
    }
  ]
});
