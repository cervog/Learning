registerLesson({
  id: "geopolitique-espace",
  theme: "geopolitique",
  title: "La conquête spatiale aujourd'hui",
  subtitle: "Satellites, Lune, Mars : la nouvelle course à l'espace",
  minutes: 6,
  intro: "Plus de 50 ans après les premiers pas sur la Lune, l'espace est redevenu un terrain de rivalité. Mais les acteurs ont changé : de nouvelles puissances et des entreprises privées sont entrées dans la course.",
  sections: [
    {
      title: "De la guerre froide à la coopération",
      text: "Pendant la **guerre froide**, l'espace est une vitrine de la rivalité entre les **États-Unis** et l'**URSS** : Spoutnik (1957), Gagarine (1961), Apollo 11 (1969).\n\nAprès la chute de l'URSS, vient le temps de la **coopération**. La **Station spatiale internationale** (**ISS**), assemblée à partir de **1998**, réunit les États-Unis, la Russie, l'Europe, le Japon et le Canada. Elle tourne autour de la Terre à environ **400 km** d'altitude, en environ 90 minutes, et est occupée en permanence depuis l'an 2000. Sa fin de vie est prévue vers 2030."
    },
    {
      title: "Le « New Space »",
      text: "Depuis les années **2010**, des **entreprises privées** révolutionnent le secteur : c'est le **New Space**.\n\n**SpaceX**, fondée par **Elon Musk** en 2002, a mis au point des **fusées réutilisables** (Falcon 9), dont le premier étage revient se poser après le lancement. Cela fait baisser fortement le coût des lancements. SpaceX transporte aujourd'hui des astronautes vers l'ISS et assure la majorité des lancements mondiaux.\n\nSa constellation **Starlink** compte plusieurs milliers de satellites et fournit un accès à Internet dans le monde entier, y compris à l'armée ukrainienne."
    },
    {
      title: "Les nouvelles puissances",
      text: "- La **Chine** est devenue la deuxième puissance spatiale : elle a sa propre station spatiale, **Tiangong**, a posé un rover sur la **face cachée de la Lune** (2019, une première) et un autre sur Mars (2021). Elle vise des humains sur la Lune vers 2030.\n- L'**Inde** a réussi en **2023** à poser la sonde **Chandrayaan-3** près du **pôle Sud de la Lune**, une première.\n- L'**Europe**, avec l'**Agence spatiale européenne** (ESA) et la fusée **Ariane 6** lancée depuis **Kourou** (Guyane), cherche à garder un accès autonome à l'espace."
    },
    {
      title: "Retour sur la Lune",
      text: "Le programme américain **Artemis** prévoit de ramener des astronautes sur la Lune, dont pour la première fois une femme, et d'y installer une présence durable. Les régions du **pôle Sud lunaire** sont convoitées, car elles contiennent de la **glace d'eau**, qui pourrait fournir de l'eau potable, de l'oxygène et du carburant.\n\nLa Lune serait une étape vers **Mars**, que SpaceX et la NASA rêvent d'atteindre dans les prochaines décennies."
    },
    {
      title: "Un enjeu stratégique",
      text: "L'espace est devenu indispensable : **GPS**, télécommunications, météo, observation de la Terre, renseignement militaire. Plusieurs pays ont créé des **forces spatiales** (la **Space Force** américaine en 2019, le **Commandement de l'espace** français la même année).\n\nLe **traité de l'espace** (**1967**) interdit à tout pays de s'approprier la Lune ou un corps céleste et d'y placer des armes nucléaires. Mais le droit peine à suivre : l'exploitation des ressources spatiales, les **débris spatiaux** (des millions de fragments) et les armes antisatellites inquiètent."
    }
  ],
  funFact: "À bord de l'ISS, les astronautes voient environ **16 levers et couchers de soleil** par jour, puisqu'ils font le tour de la Terre en environ 90 minutes.",
  keyPoints: [
    "Après la course de la guerre froide, l'ISS (depuis 1998) symbolise la coopération spatiale.",
    "Le New Space : SpaceX et ses fusées réutilisables, la constellation Starlink.",
    "La Chine (station Tiangong, face cachée de la Lune) et l'Inde (pôle Sud lunaire, 2023) s'affirment.",
    "Le programme Artemis vise un retour durable sur la Lune, convoitée pour sa glace d'eau.",
    "L'espace est militarisé ; le traité de 1967 interdit l'appropriation des corps célestes."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle entreprise a mis au point des fusées réutilisables qui reviennent se poser ?",
      options: ["Boeing", "SpaceX", "Airbus", "Ariane"],
      answer: 1,
      explanation: "Avec le lanceur Falcon 9."
    },
    {
      type: "qcm",
      question: "Quel pays a posé le premier rover sur la face cachée de la Lune ?",
      options: ["Les États-Unis", "La Russie", "La Chine", "L'Inde"],
      answer: 2,
      explanation: "En 2019, avec la mission Chang'e 4."
    },
    {
      type: "qcm",
      question: "Pourquoi le pôle Sud de la Lune est-il convoité ?",
      options: ["Pour son or", "Pour sa glace d'eau", "Parce qu'il y fait chaud", "Pour son pétrole"],
      answer: 1,
      explanation: "Elle pourrait fournir eau, oxygène et carburant."
    },
    {
      type: "vf",
      question: "Le traité de l'espace de 1967 autorise les pays à s'approprier la Lune.",
      answer: false,
      explanation: "Faux : il interdit toute appropriation nationale des corps célestes."
    },
    {
      type: "qcm",
      question: "D'où sont lancées les fusées européennes Ariane ?",
      options: ["De Cap Canaveral", "De Kourou, en Guyane", "De Baïkonour", "De Toulouse"],
      answer: 1,
      explanation: "Proche de l'équateur, ce site facilite les lancements."
    }
  ]
});
