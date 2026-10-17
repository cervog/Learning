registerLesson({
  id: "geographie-demographie",
  theme: "geographie",
  title: "La population mondiale",
  subtitle: "8 milliards d'humains : où, combien, et demain ?",
  minutes: 6,
  intro: "En 1800, nous étions environ **1 milliard**. Nous sommes plus de **8 milliards** aujourd'hui. Comment expliquer cette explosion, et que nous réserve l'avenir ?",
  sections: [
    {
      title: "Une croissance spectaculaire",
      text: "Pendant des millénaires, la population humaine augmente très lentement. Puis elle s'emballe :\n\n- **1 milliard** vers **1800** ;\n- **2 milliards** en 1927 ;\n- **4 milliards** en 1974 ;\n- **8 milliards** en **novembre 2022**, selon l'ONU.\n\nLa croissance ralentit cependant : le taux de croissance annuel de la population mondiale, qui dépassait 2 % dans les années 1960, est aujourd'hui inférieur à 1 %."
    },
    {
      title: "La transition démographique",
      text: "Les démographes expliquent cette évolution par la **transition démographique**, en plusieurs étapes :\n\n- **Avant** : natalité et mortalité sont toutes deux **élevées** ; la population augmente peu.\n- **Phase 1** : grâce aux progrès de l'hygiène, de la médecine et de l'alimentation, la **mortalité baisse**, mais la natalité reste forte : la population **explose**.\n- **Phase 2** : avec l'urbanisation, l'éducation des femmes et la contraception, la **natalité baisse** à son tour.\n- **Après** : natalité et mortalité sont **faibles** ; la population se stabilise, voire diminue.\n\nL'Europe a fait sa transition aux XIXe et XXe siècles ; une grande partie de l'Afrique est encore en pleine transition."
    },
    {
      title: "Où vivent les humains ?",
      text: "L'**Asie** rassemble environ **60 %** de la population mondiale. Les deux géants sont l'**Inde** (devenue le pays le plus peuplé en **2023**) et la **Chine**, avec chacune plus de **1,4 milliard** d'habitants. Suivent les **États-Unis**, l'**Indonésie** et le **Pakistan**.\n\nLa population est très inégalement répartie : de fortes densités dans les vallées fertiles et sur les littoraux (vallée du Gange, delta du Nil, est de la Chine), de quasi-déserts humains ailleurs (Sahara, Sibérie, Amazonie).\n\nDepuis **2007**, plus de la moitié de l'humanité vit en **ville**. Les plus grandes agglomérations dépassent 30 millions d'habitants (Tokyo, Delhi, Shanghai, Jakarta selon les définitions)."
    },
    {
      title: "Des situations contrastées",
      text: "Le monde est démographiquement coupé en deux :\n\n- de nombreux pays d'**Afrique subsaharienne** ont encore une **forte fécondité** (plus de 4 ou 5 enfants par femme au Niger, au Tchad…) et une population très **jeune**. L'Afrique pourrait compter environ **2,5 milliards** d'habitants en 2050.\n- l'**Europe**, le **Japon**, la **Corée du Sud** ou la **Chine** ont une fécondité **inférieure au seuil de renouvellement** (environ **2,1 enfants par femme**) et une population **vieillissante**. La Corée du Sud détient le record mondial de la fécondité la plus faible, autour de **0,7 enfant par femme**.\n\nEn France, la fécondité est d'environ **1,6 enfant par femme**, l'une des plus élevées d'Europe."
    },
    {
      title: "Et demain ?",
      text: "Selon les projections de l'ONU, la population mondiale devrait atteindre un **pic** d'environ **10,3 milliards** vers le milieu des **années 2080**, avant de légèrement décliner.\n\nLes grands défis : nourrir et loger une population croissante en Afrique et en Asie du Sud, financer les retraites et la dépendance dans les pays vieillissants, gérer les **migrations** et réduire l'**impact environnemental** de l'humanité."
    }
  ],
  funFact: "On estime qu'environ **100 à 120 milliards** d'êtres humains ont vécu sur Terre depuis l'apparition de notre espèce. Les 8 milliards de vivants actuels représentent donc environ **7 %** de tous les humains ayant jamais existé.",
  keyPoints: [
    "1 milliard d'humains vers 1800, 8 milliards en novembre 2022.",
    "La transition démographique : baisse de la mortalité, puis de la natalité.",
    "L'Inde est le pays le plus peuplé depuis 2023, devant la Chine ; l'Asie concentre environ 60 % de l'humanité.",
    "Le seuil de renouvellement est d'environ 2,1 enfants par femme ; l'Afrique est jeune, l'Europe et l'Asie de l'Est vieillissent.",
    "Pic attendu d'environ 10,3 milliards vers les années 2080."
  ],
  quiz: [
    {
      type: "qcm",
      question: "En quelle année la population mondiale a-t-elle atteint 8 milliards ?",
      options: ["2000", "2011", "2022", "2030"],
      answer: 2,
      explanation: "En novembre 2022, selon l'ONU."
    },
    {
      type: "qcm",
      question: "Quel est le pays le plus peuplé du monde depuis 2023 ?",
      options: ["La Chine", "L'Inde", "Les États-Unis", "L'Indonésie"],
      answer: 1,
      explanation: "L'Inde a dépassé la Chine."
    },
    {
      type: "qcm",
      question: "Quel est approximativement le seuil de renouvellement des générations ?",
      options: ["1 enfant par femme", "2,1 enfants par femme", "3 enfants par femme", "5 enfants par femme"],
      answer: 1,
      explanation: "En dessous, la population finit par diminuer (hors migrations)."
    },
    {
      type: "vf",
      question: "Lors de la première phase de la transition démographique, la natalité baisse avant la mortalité.",
      answer: false,
      explanation: "Faux : c'est d'abord la mortalité qui baisse, ce qui provoque une forte croissance de la population."
    },
    {
      type: "qcm",
      question: "Quel continent concentre environ 60 % de la population mondiale ?",
      options: ["L'Afrique", "L'Europe", "L'Asie", "L'Amérique"],
      answer: 2,
      explanation: "Avec notamment l'Inde et la Chine."
    }
  ]
});
