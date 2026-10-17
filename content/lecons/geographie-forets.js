registerLesson({
  id: "geographie-forets",
  theme: "geographie",
  title: "Les forêts du monde",
  subtitle: "Poumons verts, réservoirs de vie… et menacées",
  minutes: 6,
  intro: "Les forêts couvrent environ **un tiers** des terres émergées. Elles abritent la majorité des espèces terrestres et jouent un rôle clé pour le climat. Petit tour du monde des grandes forêts.",
  sections: [
    {
      title: "Trois grands types de forêts",
      text: "- Les **forêts tropicales** (Amazonie, bassin du Congo, Asie du Sud-Est) : chaudes et humides toute l'année, elles abritent une **biodiversité** extraordinaire.\n- Les **forêts tempérées** (Europe, est des États-Unis, Chine) : arbres à feuilles caduques (chênes, hêtres) et conifères.\n- Les **forêts boréales**, ou **taïga** (Russie, Canada, Scandinavie) : immenses forêts de conifères. C'est le plus grand ensemble forestier du monde.\n\nLa **Russie** est le pays qui possède le plus de forêts, suivie du **Brésil**, du **Canada**, des États-Unis et de la Chine."
    },
    {
      title: "L'Amazonie",
      text: "La **forêt amazonienne** est la plus grande forêt tropicale du monde, avec environ **5,5 millions de km²**, soit environ dix fois la France. Environ **60 %** se trouvent au **Brésil**, le reste dans huit autres pays, dont la **Guyane française**.\n\nElle abrite environ **10 %** des espèces connues de la planète et des centaines de peuples autochtones. Les scientifiques craignent qu'à cause de la déforestation et du réchauffement, elle atteigne un **point de bascule** au-delà duquel une partie se transformerait en savane."
    },
    {
      title: "Pourquoi les forêts sont vitales",
      text: "- Elles **stockent du carbone** : les arbres absorbent du CO₂ pour pousser. Les forêts sont l'un des grands **puits de carbone** de la planète.\n- Elles abritent environ **80 %** de la biodiversité terrestre.\n- Elles **régulent le cycle de l'eau** : l'Amazonie produit une grande partie de ses propres pluies et alimente des « rivières volantes » d'humidité jusqu'au sud du Brésil.\n- Elles protègent les sols de l'érosion et fournissent bois, nourriture et médicaments à plus d'un milliard de personnes.\n\nAttention à une idée reçue : l'Amazonie n'est pas vraiment le « poumon de la planète », car elle consomme presque autant d'oxygène qu'elle en produit. L'oxygène vient surtout du **phytoplancton** des océans."
    },
    {
      title: "La déforestation",
      text: "Chaque année, environ **10 millions d'hectares** de forêts disparaissent dans le monde, principalement dans les **tropiques**. Les causes principales :\n\n- l'**élevage bovin** (surtout en Amazonie) ;\n- les cultures de **soja** (souvent pour nourrir le bétail), d'**huile de palme** (Indonésie, Malaisie), de cacao ;\n- l'exploitation du **bois** et des mines.\n\nLa déforestation est responsable d'environ **10 %** des émissions mondiales de gaz à effet de serre. L'Union européenne a adopté une loi pour interdire l'importation de produits issus de la déforestation."
    },
    {
      title: "Et en France ?",
      text: "Contrairement à une idée reçue, la forêt française **progresse** : elle couvre environ **31 %** du territoire métropolitain, contre environ 19 % au milieu du XIXe siècle, grâce à l'exode rural et au reboisement. La plus grande forêt artificielle d'Europe est celle des **Landes de Gascogne**, plantée de pins maritimes au XIXe siècle.\n\nMais les forêts françaises souffrent des **sécheresses**, des parasites (scolytes) et des **incendies**, comme ceux de Gironde en 2022."
    }
  ],
  funFact: "Un seul hectare de forêt amazonienne peut abriter **plus d'espèces d'arbres** (parfois plusieurs centaines) que toute l'Europe réunie.",
  keyPoints: [
    "Les forêts couvrent environ un tiers des terres ; trois types : tropicales, tempérées, boréales (taïga).",
    "L'Amazonie, plus grande forêt tropicale, est à 60 % au Brésil et menacée d'un point de bascule.",
    "Les forêts stockent du carbone, abritent 80 % de la biodiversité terrestre et régulent l'eau.",
    "La déforestation (élevage, soja, palmier à huile) détruit environ 10 millions d'hectares par an.",
    "En France, la forêt progresse (environ 31 % du territoire) mais souffre des sécheresses."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel pays possède la plus grande surface de forêts au monde ?",
      options: ["Le Brésil", "Le Canada", "La Russie", "Les États-Unis"],
      answer: 2,
      explanation: "Grâce à l'immense taïga sibérienne."
    },
    {
      type: "qcm",
      question: "Quelle est la principale cause de la déforestation en Amazonie ?",
      options: ["Les incendies naturels", "L'élevage bovin", "La construction de villes", "Le tourisme"],
      answer: 1,
      explanation: "Les forêts sont rasées pour créer des pâturages."
    },
    {
      type: "vf",
      question: "L'Amazonie produit la majorité de l'oxygène que nous respirons.",
      answer: false,
      explanation: "Faux : elle consomme presque autant d'oxygène qu'elle en produit. L'oxygène vient surtout du phytoplancton océanique."
    },
    {
      type: "qcm",
      question: "Comment appelle-t-on la grande forêt de conifères des régions froides ?",
      options: ["La savane", "La taïga", "La toundra", "La mangrove"],
      answer: 1,
      explanation: "Elle couvre la Russie, le Canada et la Scandinavie."
    },
    {
      type: "qcm",
      question: "Comment évolue la surface forestière en France métropolitaine ?",
      options: ["Elle diminue fortement", "Elle progresse", "Elle a disparu", "Elle est stable depuis le Moyen Âge"],
      answer: 1,
      explanation: "Elle couvre environ 31 % du territoire, contre 19 % au XIXe siècle."
    }
  ]
});
