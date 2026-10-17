registerLesson({
  id: "technologie-ordinateur",
  theme: "technologie",
  title: "Petite histoire de l'ordinateur",
  subtitle: "Des machines à calculer géantes au smartphone",
  minutes: 7,
  intro: "Votre téléphone est des millions de fois plus puissant que l'ordinateur qui a guidé les astronautes vers la Lune. Comment en est-on arrivé là ?",
  sections: [
    {
      title: "Les ancêtres",
      text: "En **1642**, **Blaise Pascal** invente la **Pascaline**, une machine à additionner mécanique. Au XIXe siècle, l'Anglais **Charles Babbage** conçoit une « **machine analytique** » programmable, jamais achevée. **Ada Lovelace** écrit pour elle ce qui est considéré comme le **premier programme informatique** (1843).\n\nEn **1936**, **Alan Turing** décrit mathématiquement une machine universelle capable d'exécuter n'importe quel calcul : la **machine de Turing**, fondement théorique de l'informatique."
    },
    {
      title: "Les premiers ordinateurs",
      text: "Pendant la Seconde Guerre mondiale, Turing contribue à casser le code allemand **Enigma** à Bletchley Park. En 1945, l'**ENIAC** américain, l'un des premiers ordinateurs électroniques, pèse **30 tonnes**, occupe une grande salle et utilise près de **18 000 tubes à vide**.\n\nLe mathématicien **John von Neumann** décrit l'architecture que suivent encore presque tous nos ordinateurs : un **processeur**, une **mémoire** qui stocke à la fois les données et les programmes, et des entrées-sorties."
    },
    {
      title: "Le transistor et la puce",
      text: "En **1947**, aux laboratoires **Bell**, trois chercheurs inventent le **transistor**, un petit interrupteur électronique qui remplace les tubes à vide fragiles et énergivores.\n\nPuis vient le **circuit intégré** (fin des années 1950) : des transistors gravés ensemble sur une puce de **silicium**. En **1971**, **Intel** commercialise le premier **microprocesseur**, le 4004, avec 2 300 transistors. Les puces actuelles en contiennent **des dizaines de milliards**.\n\nEn **1965**, Gordon Moore, cofondateur d'Intel, prédit que le nombre de transistors sur une puce doublera régulièrement (tous les deux ans environ) : c'est la **loi de Moore**, vérifiée pendant des décennies."
    },
    {
      title: "L'ordinateur pour tous",
      text: "Dans les années **1970–1980**, l'ordinateur entre dans les foyers : l'**Apple II** (1977), l'**IBM PC** (1981), le **Macintosh** (1984), qui popularise la souris et les fenêtres. **Microsoft** équipe la plupart des PC avec MS-DOS puis **Windows** (1985).\n\nEn France, le **Minitel** (1980) permet dès cette époque de consulter des services en ligne.\n\nEn **2007**, l'**iPhone** fait du smartphone un ordinateur de poche connecté à Internet."
    },
    {
      title: "Comment ça marche, en bref",
      text: "Un ordinateur ne comprend que deux états : courant ou pas de courant, **1 ou 0**. C'est le **binaire**. Un **bit** est un 0 ou un 1 ; un **octet** regroupe 8 bits.\n\n- Le **processeur** (CPU) exécute les instructions, des milliards par seconde.\n- La **mémoire vive** (RAM) garde les données en cours d'utilisation (effacée à l'extinction).\n- Le **stockage** (disque dur, SSD) conserve les fichiers durablement.\n- Le **système d'exploitation** (Windows, macOS, Linux, Android, iOS) fait le lien entre le matériel et les applications."
    }
  ],
  funFact: "Le mot « **bug** » informatique est souvent associé à **Grace Hopper** : en 1947, son équipe trouva un **papillon de nuit** coincé dans un relais de l'ordinateur Mark II et le colla dans le journal de bord avec la mention « first actual case of bug being found ».",
  keyPoints: [
    "Pascaline (1642), machine de Babbage et premier programme d'Ada Lovelace (1843).",
    "Turing (1936) pose les bases théoriques ; l'ENIAC (1945) pèse 30 tonnes.",
    "Le transistor (1947) puis le microprocesseur (Intel, 1971) permettent la miniaturisation.",
    "Loi de Moore : le nombre de transistors double environ tous les deux ans.",
    "Tout est codé en binaire (0 et 1) ; un octet = 8 bits."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a écrit ce qui est considéré comme le premier programme informatique ?",
      options: ["Alan Turing", "Ada Lovelace", "Blaise Pascal", "Bill Gates"],
      answer: 1,
      explanation: "En 1843, pour la machine analytique de Babbage."
    },
    {
      type: "qcm",
      question: "Quelle invention de 1947 a permis de miniaturiser l'électronique ?",
      options: ["Le transistor", "La souris", "Le laser", "Le Wi-Fi"],
      answer: 0,
      explanation: "Inventé aux laboratoires Bell, il remplace les tubes à vide."
    },
    {
      type: "qcm",
      question: "Que prédit la loi de Moore ?",
      options: ["Que les ordinateurs deviendront conscients", "Que le nombre de transistors sur une puce double environ tous les deux ans", "Que le prix des ordinateurs doublera", "Qu'Internet s'arrêtera"],
      answer: 1,
      explanation: "Formulée par Gordon Moore en 1965."
    },
    {
      type: "qcm",
      question: "Combien de bits contient un octet ?",
      options: ["2", "8", "10", "1 000"],
      answer: 1,
      explanation: "Un octet = 8 bits, ce qui permet 256 combinaisons."
    },
    {
      type: "vf",
      question: "La mémoire vive (RAM) conserve les données même quand l'ordinateur est éteint.",
      answer: false,
      explanation: "Faux : c'est le rôle du stockage (disque dur, SSD). La RAM s'efface à l'extinction."
    }
  ]
});
