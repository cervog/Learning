registerLesson({
  id: "arts-photographie",
  theme: "arts",
  title: "L'histoire de la photographie",
  subtitle: "Fixer la lumière : une invention française",
  minutes: 6,
  intro: "Nous prenons aujourd'hui des milliards de photos chaque jour. Pourtant, il a fallu des siècles de recherches pour réussir à **fixer une image** durablement.",
  sections: [
    {
      title: "La chambre noire",
      text: "Le principe de la **camera obscura** (chambre noire) est connu depuis l'Antiquité : la lumière qui passe par un petit trou dans une pièce obscure projette une image **inversée** du monde extérieur sur le mur opposé.\n\nLes peintres de la Renaissance l'utilisent pour dessiner. Mais personne ne sait encore **fixer** cette image : il faut pour cela trouver une substance chimique sensible à la lumière."
    },
    {
      title: "Niépce et Daguerre",
      text: "Vers **1826–1827**, le Français **Nicéphore Niépce** réalise la plus ancienne photographie conservée : ***Point de vue du Gras***, une vue depuis la fenêtre de sa maison en Bourgogne. Le temps de pose dure **plusieurs heures**, voire plusieurs jours.\n\nSon associé **Louis Daguerre** met au point le **daguerréotype**, une image unique sur plaque de cuivre argentée, avec un temps de pose de quelques minutes. En **1839**, l'État français l'achète et l'offre « **au monde** » : cette date est considérée comme la naissance officielle de la photographie."
    },
    {
      title: "La photo devient reproductible",
      text: "À la même époque, l'Anglais **William Henry Fox Talbot** invente le procédé **négatif-positif** (le calotype) : à partir d'un négatif, on peut tirer **autant d'exemplaires** que l'on veut. C'est ce principe qui dominera jusqu'au numérique.\n\nLa photographie bouleverse la société : portraits de famille, reportages de guerre (guerre de Crimée, guerre de Sécession), photographie scientifique. Le Parisien **Nadar** devient le grand portraitiste de son époque et réalise les premières photos aériennes depuis un ballon."
    },
    {
      title: "La photographie pour tous",
      text: "En **1888**, l'Américain **George Eastman** lance l'appareil **Kodak**, avec ce slogan : « **Vous appuyez sur le bouton, nous faisons le reste.** » On renvoie l'appareil à l'usine pour faire développer la pellicule.\n\nAu XXe siècle viennent le petit format 24×36 avec le **Leica** (1925), la photographie **couleur** (le Kodachrome en 1935), et l'appareil **Polaroid** à développement instantané (1948)."
    },
    {
      title: "Un art à part entière",
      text: "La photographie s'impose comme un art et comme un témoignage. **Henri Cartier-Bresson** théorise l'« **instant décisif** », le moment précis où tout s'organise dans l'image. **Robert Doisneau** immortalise le Paris populaire (*Le Baiser de l'Hôtel de Ville*, 1950). Le **photojournalisme** se développe avec l'agence **Magnum** (1947) et le magazine *Life*.\n\nLe premier appareil photo **numérique** est mis au point par **Kodak** en **1975**… mais l'entreprise, trop attachée à la pellicule, n'a pas su prendre le virage et a fait faillite en 2012. Aujourd'hui, le **smartphone** est l'appareil photo le plus utilisé au monde."
    }
  ],
  funFact: "Sur les premiers daguerréotypes de rues de Paris, les rues paraissent **désertes** : les passants et les calèches bougeaient trop vite pour être captés pendant la longue pose. Seul un homme immobile qui se faisait cirer les chaussures apparaît sur une célèbre vue du boulevard du Temple (1838) : c'est sans doute le premier être humain photographié.",
  keyPoints: [
    "La camera obscura projette une image, mais il faut une chimie sensible pour la fixer.",
    "Niépce réalise la plus ancienne photo conservée (vers 1827) ; le daguerréotype est offert au monde en 1839.",
    "Talbot invente le négatif-positif, qui permet de reproduire les images.",
    "Kodak (1888) démocratise la photo ; puis Leica, la couleur, le Polaroid.",
    "Cartier-Bresson, Doisneau, Magnum ; Kodak invente le numérique en 1975 mais fait faillite en 2012."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a réalisé la plus ancienne photographie conservée ?",
      options: ["Louis Daguerre", "Nicéphore Niépce", "Nadar", "George Eastman"],
      answer: 1,
      explanation: "Point de vue du Gras, vers 1826–1827."
    },
    {
      type: "qcm",
      question: "Quelle année est considérée comme la naissance officielle de la photographie ?",
      options: ["1789", "1839", "1888", "1925"],
      answer: 1,
      explanation: "L'État français offre alors le procédé de Daguerre au monde."
    },
    {
      type: "qcm",
      question: "Quel photographe a théorisé « l'instant décisif » ?",
      options: ["Robert Doisneau", "Henri Cartier-Bresson", "Nadar", "Man Ray"],
      answer: 1,
      explanation: "Le cofondateur de l'agence Magnum."
    },
    {
      type: "vf",
      question: "C'est Kodak qui a inventé le premier appareil photo numérique.",
      answer: true,
      explanation: "Vrai, en 1975, mais l'entreprise n'a pas su exploiter cette invention."
    },
    {
      type: "qcm",
      question: "Pourquoi les rues paraissent-elles vides sur les premiers daguerréotypes ?",
      options: ["Les rues étaient vraiment désertes", "Les passants bougeaient trop pendant la longue pose", "Les photographes effaçaient les gens", "Il était interdit de photographier les passants"],
      answer: 1,
      explanation: "Seuls les objets immobiles apparaissaient sur l'image."
    }
  ]
});
