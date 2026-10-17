registerLesson({
  id: "arts-jazz",
  theme: "arts",
  title: "Le jazz",
  subtitle: "La grande musique née de l'Amérique noire",
  minutes: 6,
  intro: "Né au tournant du XXe siècle dans le sud des États-Unis, le **jazz** est devenu une musique universelle. Il a donné naissance à presque toutes les musiques populaires modernes.",
  sections: [
    {
      title: "Des racines africaines-américaines",
      text: "Le jazz naît vers **1900** à **La Nouvelle-Orléans**, ville portuaire de Louisiane où se mêlent cultures africaines, européennes et caribéennes.\n\nIl puise dans les musiques des **Afro-Américains**, descendants d'esclaves : les **work songs** (chants de travail), les **negro spirituals** et le **gospel** (chants religieux), le **blues**, musique mélancolique au schéma de douze mesures, et le **ragtime**, un style de piano syncopé popularisé par **Scott Joplin**."
    },
    {
      title: "Ce qui fait le jazz",
      text: "- **L'improvisation** : les musiciens inventent des mélodies en direct sur une grille d'accords.\n- **Le swing** : une manière de jouer le rythme, avec un balancement caractéristique.\n- **La syncope** : des accents placés à contretemps.\n- **Les « blue notes »** : des notes légèrement abaissées, héritées du blues.\n- **L'interaction** entre les musiciens, qui se répondent comme dans une conversation."
    },
    {
      title: "Les grands noms",
      text: "- **Louis Armstrong** (1901–1971), trompettiste et chanteur à la voix rauque, l'un des premiers grands solistes (*What a Wonderful World*).\n- **Duke Ellington** et **Count Basie**, chefs de grands orchestres de l'ère du **swing** (années 1930), la musique de danse de l'époque.\n- **Billie Holiday** et **Ella Fitzgerald**, immenses chanteuses. *Strange Fruit* (1939) de Billie Holiday dénonce les lynchages.\n- **Charlie Parker** et **Dizzy Gillespie**, inventeurs du **bebop** (années 1940), rapide et complexe.\n- **Miles Davis** (*Kind of Blue*, 1959, l'album de jazz le plus vendu) et **John Coltrane** (*A Love Supreme*)."
    },
    {
      title: "Le jazz en France",
      text: "Le jazz arrive en France avec les soldats américains en **1917–1918**. Paris devient l'une de ses capitales dans l'entre-deux-guerres : **Joséphine Baker** triomphe dans la *Revue nègre* (1925).\n\nLe guitariste manouche **Django Reinhardt**, qui joue avec seulement deux doigts valides à la main gauche après un incendie, invente avec le violoniste **Stéphane Grappelli** le **jazz manouche**. Après 1945, les clubs de Saint-Germain-des-Prés accueillent de nombreux musiciens américains fuyant la ségrégation."
    },
    {
      title: "Un héritage immense",
      text: "Le jazz a influencé presque toutes les musiques qui l'ont suivi : le **rhythm and blues**, le **rock'n'roll**, la **soul**, le **funk** et le **hip-hop**, qui échantillonne beaucoup de disques de jazz.\n\nIl est aussi indissociable de l'histoire de la **lutte des Afro-Américains** pour leurs droits. L'UNESCO a créé en **2011** la **Journée internationale du jazz**, célébrée chaque **30 avril**."
    }
  ],
  funFact: "Le célèbre « **scat** », ces onomatopées chantées comme un instrument (« ba-dou-bi-dou-ba »), aurait été popularisé par Louis Armstrong en **1926** lors de l'enregistrement de *Heebie Jeebies* : ayant laissé tomber sa partition, il aurait continué à chanter en improvisant des syllabes.",
  keyPoints: [
    "Le jazz naît vers 1900 à La Nouvelle-Orléans, nourri du blues, du gospel et du ragtime.",
    "Ses caractéristiques : improvisation, swing, syncope, blue notes.",
    "Grands noms : Louis Armstrong, Duke Ellington, Billie Holiday, Charlie Parker, Miles Davis.",
    "En France : Joséphine Baker, Django Reinhardt et le jazz manouche.",
    "Il a influencé le rock, la soul, le funk et le hip-hop."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Dans quelle ville le jazz est-il né ?",
      options: ["New York", "Chicago", "La Nouvelle-Orléans", "Los Angeles"],
      answer: 2,
      explanation: "En Louisiane, vers 1900."
    },
    {
      type: "qcm",
      question: "Quel élément est au cœur du jazz ?",
      options: ["La partition écrite note à note", "L'improvisation", "L'absence de rythme", "L'orchestre symphonique"],
      answer: 1,
      explanation: "Les musiciens inventent des mélodies en direct."
    },
    {
      type: "qcm",
      question: "Quel album de Miles Davis est l'album de jazz le plus vendu ?",
      options: ["A Love Supreme", "Kind of Blue", "What a Wonderful World", "Strange Fruit"],
      answer: 1,
      explanation: "Sorti en 1959."
    },
    {
      type: "vf",
      question: "Django Reinhardt est l'inventeur du jazz manouche.",
      answer: true,
      explanation: "Vrai, avec le violoniste Stéphane Grappelli."
    },
    {
      type: "qcm",
      question: "Quel style de jazz rapide et complexe apparaît dans les années 1940 ?",
      options: ["Le ragtime", "Le swing", "Le bebop", "Le gospel"],
      answer: 2,
      explanation: "Avec Charlie Parker et Dizzy Gillespie."
    }
  ]
});
