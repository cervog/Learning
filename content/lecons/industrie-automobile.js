registerLesson({
  id: "industrie-automobile",
  theme: "industrie",
  title: "L'industrie automobile",
  subtitle: "Du moteur à explosion à la voiture électrique",
  minutes: 6,
  intro: "Plus de **90 millions** de véhicules sont produits chaque année dans le monde. L'automobile a façonné nos villes, nos économies et nos modes de vie. Et elle vit aujourd'hui sa plus grande révolution depuis un siècle.",
  sections: [
    {
      title: "Les débuts",
      text: "En **1886**, l'Allemand **Carl Benz** dépose le brevet de la première **automobile** à moteur à essence, un tricycle. Sa femme **Bertha Benz** réalise en 1888 le premier long trajet en voiture (environ 100 km), pour prouver qu'elle fonctionne.\n\nLa **France** joue un rôle pionnier : **Panhard et Levassor**, **Peugeot**, **Renault** (fondé en 1899). Les premières courses automobiles et le mot « automobile » lui-même sont français. Les premières voitures sont des objets de luxe, fabriquées à la main."
    },
    {
      title: "La production de masse",
      text: "En **1908**, **Henry Ford** lance la **Ford T**, une voiture simple et robuste. En **1913**, il introduit la **chaîne de montage** mobile : le temps d'assemblage d'une voiture passe d'environ 12 heures à 1 h 30. Le prix baisse fortement et la Ford T est vendue à plus de **15 millions** d'exemplaires.\n\nFord double aussi les salaires de ses ouvriers (le « *five dollar day* », 1914) pour qu'ils puissent acheter les voitures qu'ils fabriquent : c'est le **fordisme**."
    },
    {
      title: "Le modèle japonais",
      text: "Après 1945, le constructeur japonais **Toyota** invente une autre organisation : le **toyotisme** ou « *lean manufacturing* ». Il produit **à la demande** et en **flux tendu** (le « juste-à-temps »), avec peu de stocks, et mise sur la **qualité** et l'amélioration continue (*kaizen*).\n\nCe modèle est copié dans le monde entier. **Toyota** est devenu le **premier constructeur mondial** en nombre de véhicules vendus, devant **Volkswagen**."
    },
    {
      title: "Les géants d'aujourd'hui",
      text: "Le secteur est dominé par de grands groupes : Toyota, Volkswagen, **Hyundai-Kia**, **Stellantis** (né en **2021** de la fusion de PSA Peugeot-Citroën et Fiat-Chrysler), General Motors, Ford, **Renault-Nissan-Mitsubishi**…\n\nLa **Chine** est devenue de loin le **premier producteur** mondial d'automobiles, avec environ un tiers de la production. Ses constructeurs, comme **BYD**, s'imposent notamment dans l'électrique."
    },
    {
      title: "La révolution électrique",
      text: "Pour lutter contre le réchauffement climatique, de nombreux pays imposent la fin des moteurs thermiques : l'**Union européenne** prévoit l'interdiction de la vente de voitures neuves émettant du CO₂ à partir de **2035**.\n\nL'américain **Tesla** a popularisé la voiture électrique moderne à partir de 2008. Aujourd'hui, la Chine domine la production de **batteries** et de voitures électriques. Les constructeurs historiques européens doivent se réinventer, tout en faisant face à la concurrence chinoise et à d'autres défis : voiture **autonome**, logiciels, recyclage des batteries."
    }
  ],
  funFact: "Henry Ford aurait dit de la Ford T : « Le client peut choisir la couleur de sa voiture, **pourvu qu'elle soit noire** ». La peinture noire séchait en effet plus vite, ce qui accélérait la production.",
  keyPoints: [
    "Carl Benz brevète la première automobile à essence en 1886 ; la France est pionnière.",
    "Ford T (1908) et chaîne de montage (1913) : la production de masse, le fordisme.",
    "Le toyotisme : flux tendu, juste-à-temps, qualité ; Toyota est le premier constructeur mondial.",
    "Stellantis naît en 2021 ; la Chine est le premier producteur mondial.",
    "La transition vers l'électrique : fin des ventes de voitures thermiques neuves prévue en 2035 dans l'UE."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a breveté la première automobile à essence en 1886 ?",
      options: ["Henry Ford", "Carl Benz", "Louis Renault", "Gottlieb Daimler"],
      answer: 1,
      explanation: "Un tricycle à moteur à explosion."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que le « juste-à-temps » ?",
      options: ["Produire en grande quantité à l'avance", "Produire à la demande avec peu de stocks", "Livrer en moins de 24 heures", "Travailler la nuit"],
      answer: 1,
      explanation: "C'est un principe clé du toyotisme."
    },
    {
      type: "qcm",
      question: "Quel groupe est né en 2021 de la fusion de PSA et Fiat-Chrysler ?",
      options: ["Renault-Nissan", "Stellantis", "Volkswagen", "BYD"],
      answer: 1,
      explanation: "Il regroupe notamment Peugeot, Citroën, Fiat, Jeep et Opel."
    },
    {
      type: "vf",
      question: "Les États-Unis sont aujourd'hui le premier producteur mondial d'automobiles.",
      answer: false,
      explanation: "Faux : c'est la Chine, avec environ un tiers de la production mondiale."
    },
    {
      type: "qcm",
      question: "Quelle innovation Henry Ford introduit-il en 1913 ?",
      options: ["Le moteur électrique", "La chaîne de montage mobile", "Le robot industriel", "La ceinture de sécurité"],
      answer: 1,
      explanation: "Elle réduit fortement le temps et le coût de fabrication."
    }
  ]
});
