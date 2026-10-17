registerLesson({
  id: "histoire-napoleon",
  theme: "histoire",
  title: "Napoléon Bonaparte",
  subtitle: "Du général corse à l'empereur des Français",
  minutes: 7,
  intro: "Il a dominé l'Europe pendant quinze ans et laissé une empreinte durable sur la France. Génie militaire pour les uns, despote pour les autres : qui était **Napoléon** ?",
  sections: [
    {
      title: "L'ascension d'un général",
      text: "**Napoléon Bonaparte** naît en **1769** à **Ajaccio**, en Corse, un an après le rattachement de l'île à la France. Officier d'artillerie, il profite de la Révolution pour gravir les échelons.\n\nIl se fait connaître par ses victoires lors de la **campagne d'Italie** (1796–1797), puis mène l'**expédition d'Égypte** (1798–1799). De retour à Paris, il prend le pouvoir par le **coup d'État du 18 Brumaire** (9 novembre 1799) et devient **Premier consul**."
    },
    {
      title: "Le Consulat : réorganiser la France",
      text: "En quelques années, Bonaparte crée des institutions qui existent encore :\n\n- le **Code civil** (**1804**), qui unifie le droit en France et inspire de nombreux pays ;\n- les **préfets**, représentants de l'État dans chaque département (1800) ;\n- la **Banque de France** (1800) et le **franc germinal** ;\n- les **lycées** (1802) et la **Légion d'honneur** (1802) ;\n- le **Concordat** avec le pape (1801), qui apaise les tensions religieuses."
    },
    {
      title: "L'Empire",
      text: "Le **2 décembre 1804**, à **Notre-Dame de Paris**, il se sacre **empereur des Français** sous le nom de **Napoléon Ier**, en présence du pape (la scène est immortalisée par **David**).\n\nIl enchaîne les victoires contre les coalitions européennes, la plus célèbre étant **Austerlitz**, le **2 décembre 1805**, contre l'Autriche et la Russie. Mais la flotte française est écrasée par l'Anglais **Nelson** à **Trafalgar** (1805). À son apogée, vers **1811**, le « Grand Empire » domine une grande partie de l'Europe."
    },
    {
      title: "La chute",
      text: "La **guerre d'Espagne** s'enlise. Puis la **campagne de Russie** (**1812**) tourne au désastre : Moscou est incendiée, et la retraite dans le froid (passage de la **Bérézina**) décime la Grande Armée.\n\nVaincu, Napoléon abdique en **1814** et est exilé sur l'île d'**Elbe**. Il s'évade et revient au pouvoir pour les **Cent-Jours** (1815), mais il est définitivement battu à **Waterloo** (Belgique) le **18 juin 1815** par les Britanniques de **Wellington** et les Prussiens de **Blücher**. Exilé sur l'île de **Sainte-Hélène**, au milieu de l'Atlantique sud, il y meurt en **1821**."
    },
    {
      title: "Un héritage contrasté",
      text: "Napoléon a diffusé en Europe certains principes de la Révolution : égalité civile, fin des privilèges féodaux. Ses institutions structurent encore l'État français.\n\nMais il a aussi exercé un **pouvoir autoritaire** (censure, police politique) et ses guerres ont fait des centaines de milliers de morts. En **1802**, il a **rétabli l'esclavage** dans les colonies françaises, que la Révolution avait aboli en 1794. Ses restes reposent depuis 1840 aux **Invalides**, à Paris."
    }
  ],
  funFact: "Napoléon n'était pas petit ! Il mesurait environ **1,69 m**, une taille moyenne pour l'époque. La légende vient en partie de la confusion entre pouces français et anglais, et des caricatures britanniques qui le représentaient en nain colérique.",
  keyPoints: [
    "Né à Ajaccio en 1769 ; prend le pouvoir le 18 Brumaire (1799).",
    "Il crée le Code civil (1804), les préfets, la Banque de France, les lycées, la Légion d'honneur.",
    "Sacré empereur le 2 décembre 1804 ; victoire d'Austerlitz le 2 décembre 1805.",
    "Désastre de la campagne de Russie (1812), défaite de Waterloo (18 juin 1815).",
    "Exilé à Sainte-Hélène, il y meurt en 1821 ; il avait rétabli l'esclavage en 1802."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Où Napoléon est-il né ?",
      options: ["À Paris", "À Ajaccio", "À Toulon", "À Nice"],
      answer: 1,
      explanation: "À Ajaccio, en Corse, en 1769."
    },
    {
      type: "qcm",
      question: "Quelle est sa victoire la plus célèbre, remportée le 2 décembre 1805 ?",
      options: ["Waterloo", "Trafalgar", "Austerlitz", "Iéna"],
      answer: 2,
      explanation: "Contre l'Autriche et la Russie, un an jour pour jour après son sacre."
    },
    {
      type: "qcm",
      question: "Quelle grande réforme juridique est associée à Napoléon ?",
      options: ["La Déclaration des droits de l'homme", "Le Code civil", "La Constitution de 1958", "L'abolition de la peine de mort"],
      answer: 1,
      explanation: "Le Code civil de 1804, toujours en vigueur (modifié) aujourd'hui."
    },
    {
      type: "vf",
      question: "Napoléon a rétabli l'esclavage dans les colonies françaises.",
      answer: true,
      explanation: "Vrai : en 1802. Il ne sera définitivement aboli qu'en 1848."
    },
    {
      type: "qcm",
      question: "Sur quelle île Napoléon est-il mort ?",
      options: ["L'île d'Elbe", "La Corse", "Sainte-Hélène", "La Martinique"],
      answer: 2,
      explanation: "Il y meurt en 1821, après sa défaite à Waterloo."
    },
    {
      type: "qcm",
      question: "Quelle bataille marque la défaite finale de Napoléon en 1815 ?",
      options: ["Waterloo", "Leipzig", "La Bérézina", "Trafalgar"],
      answer: 0,
      explanation: "Le 18 juin 1815, en Belgique."
    }
  ]
});
