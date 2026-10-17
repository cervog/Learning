registerLesson({
  id: "industrie-aeronautique",
  theme: "industrie",
  title: "L'aéronautique, d'Ader à Airbus",
  subtitle: "Comment l'Europe est devenue un géant de l'aviation",
  minutes: 6,
  intro: "À chaque instant, des milliers d'avions de ligne sont en vol au-dessus de la planète. L'aéronautique est l'une des industries les plus complexes au monde, et l'un des rares domaines où l'Europe rivalise d'égal à égal avec les États-Unis.",
  sections: [
    {
      title: "Les pionniers",
      text: "En **1890**, le Français **Clément Ader** décolle de quelques centimètres sur une cinquantaine de mètres avec son **Éole**, un appareil à vapeur. C'est de lui que vient le mot « **avion** ».\n\nMais on attribue généralement le premier vol motorisé et contrôlé aux frères américains **Wilbur et Orville Wright**, le **17 décembre 1903**, à **Kitty Hawk** : 12 secondes et 37 mètres. En **1909**, **Louis Blériot** traverse la **Manche** ; en **1927**, **Charles Lindbergh** réussit la première traversée de l'**Atlantique** en solitaire et sans escale."
    },
    {
      title: "L'ère des avions de ligne",
      text: "Après 1945, l'aviation civile se développe grâce au **moteur à réaction**. Le **Boeing 707** (1958) ouvre l'ère des longs courriers à réaction ; le **Boeing 747** (1970), surnommé « **Jumbo Jet** », démocratise le transport aérien.\n\nLe **Concorde**, développé par la France et le Royaume-Uni, vole à **Mach 2** (deux fois la vitesse du son) et relie Paris à New York en environ **3 h 30**. Trop cher et bruyant, il n'est produit qu'à 20 exemplaires et cesse de voler en **2003**."
    },
    {
      title: "La naissance d'Airbus",
      text: "En **1970**, pour rivaliser avec les géants américains, la **France** et l'**Allemagne**, rejointes par l'Espagne et le Royaume-Uni, créent **Airbus**. Son premier appareil, l'**A300**, est le premier biréacteur gros-porteur du monde.\n\nL'**A320** (1987) introduit les **commandes de vol électriques** et devient l'avion de ligne le plus vendu de l'histoire. L'**A380**, le plus gros avion de ligne au monde (jusqu'à plus de 800 passagers), est un exploit technique mais un échec commercial : sa production s'arrête en 2021.\n\nAirbus a son siège et ses principales chaînes d'assemblage à **Toulouse**."
    },
    {
      title: "Un duopole mondial",
      text: "Le marché des grands avions de ligne est dominé par **deux constructeurs** : **Airbus** (Europe) et **Boeing** (États-Unis). Depuis 2019, Airbus livre plus d'avions que son rival, fragilisé par les accidents du **737 MAX** (2018–2019).\n\nLe chinois **COMAC** tente de s'imposer avec son C919. La France compte aussi d'autres champions : **Dassault Aviation** (Rafale, Falcon), **Safran** (moteurs, notamment le **CFM56** et le **LEAP**, en partenariat avec General Electric), **Thales** (électronique). Le secteur est l'un des premiers postes d'**exportation** français."
    },
    {
      title: "Le défi climatique",
      text: "Le transport aérien représente environ **2,5 %** des émissions mondiales de CO₂, mais sa part augmente, car le trafic croît rapidement.\n\nPour le **décarboner**, l'industrie mise sur des avions plus sobres, des **carburants durables** (biocarburants, carburants de synthèse), et à plus long terme sur l'**hydrogène** ou l'électrique pour les petits appareils. Le défi est immense, car un avion a une durée de vie de 25 à 30 ans."
    }
  ],
  funFact: "Le célèbre surnom « Jumbo » du Boeing 747 vient d'un **éléphant** de cirque géant, Jumbo, star du cirque Barnum à la fin du XIXe siècle.",
  keyPoints: [
    "Clément Ader (1890) invente le mot « avion » ; les frères Wright réalisent le premier vol contrôlé en 1903.",
    "Blériot traverse la Manche (1909), Lindbergh l'Atlantique (1927).",
    "Le Concorde vole à Mach 2 jusqu'en 2003.",
    "Airbus est fondé en 1970 ; l'A320 est l'avion de ligne le plus vendu ; siège à Toulouse.",
    "Duopole Airbus–Boeing ; défi de la décarbonation (carburants durables, hydrogène)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a réalisé le premier vol motorisé et contrôlé en 1903 ?",
      options: ["Clément Ader", "Les frères Wright", "Louis Blériot", "Charles Lindbergh"],
      answer: 1,
      explanation: "À Kitty Hawk, le 17 décembre 1903."
    },
    {
      type: "qcm",
      question: "Dans quelle ville se trouve le siège d'Airbus ?",
      options: ["Paris", "Hambourg", "Toulouse", "Madrid"],
      answer: 2,
      explanation: "Avec ses principales chaînes d'assemblage."
    },
    {
      type: "qcm",
      question: "Quel avion est le plus vendu de l'histoire de l'aviation de ligne ?",
      options: ["Le Boeing 747", "L'A380", "La famille A320", "Le Concorde"],
      answer: 2,
      explanation: "Il a dépassé le Boeing 737 en nombre de commandes."
    },
    {
      type: "vf",
      question: "Le Concorde a été un grand succès commercial, vendu à des centaines d'exemplaires.",
      answer: false,
      explanation: "Faux : seulement 20 exemplaires ont été construits."
    },
    {
      type: "qcm",
      question: "Qui a réussi la première traversée de la Manche en avion en 1909 ?",
      options: ["Louis Blériot", "Roland Garros", "Antoine de Saint-Exupéry", "Jean Mermoz"],
      answer: 0,
      explanation: "De Calais à Douvres."
    }
  ]
});
