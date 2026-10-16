registerLesson({
  id: "geographie-climats",
  theme: "geographie",
  title: "Les grands climats du monde",
  subtitle: "Pourquoi il fait chaud à Dakar et doux à Brest",
  minutes: 6,
  intro: "Désert brûlant, forêt tropicale, toundra gelée… La Terre offre une grande variété de climats. Quels facteurs les expliquent, et comment les classe-t-on ?",
  sections: [
    {
      title: "Météo ou climat ?",
      text: "La **météo** décrit le temps qu'il fait à un moment donné (demain, il pleuvra à Lyon). Le **climat** décrit les conditions **moyennes** d'un lieu sur une longue période, en général **30 ans** : températures, précipitations, saisons.\n\nUn hiver très froid ne contredit donc pas le réchauffement climatique : c'est de la météo, pas du climat."
    },
    {
      title: "Les facteurs qui façonnent le climat",
      text: "- **La latitude** : près de l'équateur, les rayons du Soleil arrivent presque à la verticale et chauffent fort ; vers les pôles, ils sont rasants. L'**inclinaison de l'axe terrestre (environ 23,4°)** crée les saisons.\n- **Les océans et courants** : la mer adoucit les températures. Le **Gulf Stream** (et son prolongement, la dérive nord-atlantique) réchauffe l'Europe de l'Ouest, bien plus douce que le Canada à la même latitude.\n- **L'altitude** : la température baisse d'environ **6,5 °C par 1 000 m**.\n- **La continentalité** : loin des côtes, les écarts entre été et hiver sont extrêmes (Sibérie)."
    },
    {
      title: "La classification de Köppen",
      text: "Proposée par le climatologue **Wladimir Köppen** vers 1900, elle reste la plus utilisée. Elle distingue cinq grands groupes :\n\n- **A – Tropical** : chaud et humide toute l'année (Amazonie, Congo).\n- **B – Aride** : très peu de pluie (Sahara, Australie centrale).\n- **C – Tempéré** : hivers doux (France, climat méditerranéen aux étés secs et chauds).\n- **D – Continental** : hivers très froids, étés chauds (Russie, Canada).\n- **E – Polaire** : froid toute l'année (Antarctique, Groenland)."
    },
    {
      title: "Quelques records et phénomènes",
      text: "Le **Sahara** est le plus grand désert **chaud** du monde. Mais le plus grand désert tout court est l'**Antarctique** : un désert se définit par la faiblesse des précipitations, pas par la chaleur !\n\nLa **mousson**, en Asie du Sud, est un renversement saisonnier des vents : en été, ils apportent des pluies torrentielles depuis l'océan Indien, vitales pour l'agriculture de l'Inde."
    },
    {
      title: "Un climat qui change",
      text: "Depuis l'ère préindustrielle, la température moyenne de la Terre a augmenté d'**environ 1,2 °C**, principalement à cause des **gaz à effet de serre** émis par les activités humaines (combustion du charbon, du pétrole et du gaz). Selon le **GIEC**, cela se traduit par davantage de vagues de chaleur, la fonte des glaces et la montée du niveau des mers.\n\nL'**Accord de Paris** (2015) vise à limiter le réchauffement « nettement en dessous de 2 °C », si possible à 1,5 °C."
    }
  ],
  funFact: "Bordeaux et Montréal sont presque à la même latitude (environ 45° Nord). Pourtant, l'hiver est bien plus rude à Montréal : c'est l'effet combiné de la continentalité et de la douceur apportée par l'Atlantique en Europe.",
  keyPoints: [
    "Le climat = conditions moyennes sur environ 30 ans ; la météo = le temps du moment.",
    "Facteurs principaux : latitude, océans et courants, altitude, continentalité.",
    "Classification de Köppen : tropical, aride, tempéré, continental, polaire.",
    "L'Antarctique est le plus grand désert du monde ; le Sahara, le plus grand désert chaud.",
    "La Terre s'est réchauffée d'environ 1,2 °C depuis l'ère préindustrielle."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Sur quelle durée calcule-t-on habituellement les moyennes climatiques ?",
      options: ["1 an", "5 ans", "30 ans", "100 ans"],
      answer: 2,
      explanation: "Le climat se définit sur une période de référence d'environ 30 ans."
    },
    {
      type: "qcm",
      question: "Quel est le plus grand désert du monde ?",
      options: ["Le Sahara", "Le désert de Gobi", "L'Antarctique", "Le désert d'Arabie"],
      answer: 2,
      explanation: "Un désert se définit par ses faibles précipitations : l'Antarctique est le plus vaste."
    },
    {
      type: "qcm",
      question: "Quel courant océanique adoucit le climat de l'Europe de l'Ouest ?",
      options: ["Le courant de Humboldt", "Le Gulf Stream", "Le Kuroshio", "El Niño"],
      answer: 1,
      explanation: "Le Gulf Stream et la dérive nord-atlantique transportent de la chaleur vers l'Europe."
    },
    {
      type: "vf",
      question: "En montagne, la température baisse d'environ 6,5 °C tous les 1 000 mètres.",
      answer: true,
      explanation: "Vrai : c'est le gradient thermique moyen de l'atmosphère."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que la mousson ?",
      options: ["Un type de tornade", "Un renversement saisonnier des vents apportant de fortes pluies", "Un courant marin froid", "Une vague de froid polaire"],
      answer: 1,
      explanation: "En Asie du Sud, les vents d'été venus de l'océan Indien apportent des pluies abondantes."
    }
  ]
});
