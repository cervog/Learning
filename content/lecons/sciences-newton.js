registerLesson({
  id: "sciences-newton",
  theme: "sciences",
  title: "Newton et la gravitation",
  subtitle: "La même loi pour la pomme et pour la Lune",
  minutes: 6,
  intro: "Pourquoi une pomme tombe-t-elle, alors que la Lune ne nous tombe pas dessus ? En répondant à cette question, **Isaac Newton** a bâti la physique moderne.",
  sections: [
    {
      title: "Avant Newton : Copernic, Kepler, Galilée",
      text: "En **1543**, **Nicolas Copernic** propose que la Terre tourne autour du Soleil, et non l'inverse : c'est l'**héliocentrisme**. **Johannes Kepler** montre ensuite que les planètes suivent des orbites **elliptiques**.\n\n**Galilée** observe au télescope les lunes de Jupiter (1610) et étudie la chute des corps : sans résistance de l'air, tous les objets tombent **à la même vitesse**. Condamné par l'Église en **1633**, il doit renier l'héliocentrisme."
    },
    {
      title: "Isaac Newton",
      text: "**Isaac Newton** (1643–1727) est un physicien et mathématicien anglais. En **1687**, il publie les ***Principia Mathematica***, l'un des livres les plus importants de l'histoire des sciences.\n\nIl invente aussi (en même temps que l'Allemand **Leibniz**) le **calcul infinitésimal**, montre que la lumière blanche est composée de toutes les couleurs grâce à un **prisme**, et construit un télescope à miroir."
    },
    {
      title: "Les trois lois du mouvement",
      text: "- **Principe d'inertie** : un objet reste immobile ou continue en ligne droite à vitesse constante tant qu'aucune force ne s'exerce sur lui.\n- **Principe fondamental** : la force est égale à la masse multipliée par l'accélération (**F = m × a**). Plus un objet est lourd, plus il faut de force pour le mettre en mouvement.\n- **Action-réaction** : quand un objet exerce une force sur un autre, celui-ci exerce une force égale et opposée. C'est ainsi qu'une **fusée** avance : elle éjecte des gaz vers l'arrière, et ceux-ci la poussent vers l'avant."
    },
    {
      title: "La gravitation universelle",
      text: "Newton comprend que la force qui fait tomber une pomme est **la même** que celle qui maintient la Lune en orbite autour de la Terre et les planètes autour du Soleil.\n\nSa loi : **deux corps s'attirent** avec une force proportionnelle à leurs **masses** et inversement proportionnelle au **carré de la distance** qui les sépare. Si la distance double, la force est divisée par quatre.\n\nLa Lune « tombe » en permanence vers la Terre, mais comme elle avance très vite sur le côté, elle tourne autour sans jamais la toucher."
    },
    {
      title: "Un triomphe… puis des limites",
      text: "Grâce aux lois de Newton, l'astronome **Edmond Halley** prédit le retour de la comète qui porte son nom (1758), et l'on découvre **Neptune** en **1846** par le calcul, avant même de l'observer, grâce au Français **Le Verrier**.\n\nAu XXe siècle, la **relativité** d'Einstein et la mécanique quantique montrent que la physique de Newton n'est pas valable pour des vitesses proches de celle de la lumière ou à l'échelle des atomes. Mais elle reste parfaitement suffisante pour construire des ponts ou envoyer des sondes dans l'espace."
    }
  ],
  funFact: "L'histoire de la **pomme** qui tombe sur la tête de Newton est sans doute embellie. Mais Newton lui-même racontait avoir eu l'idée de la gravitation en voyant une pomme tomber dans le jardin de sa mère, vers 1666. L'unité de force, le **newton** (N), porte son nom.",
  keyPoints: [
    "Copernic (héliocentrisme, 1543), Kepler (orbites elliptiques), Galilée (chute des corps).",
    "Newton publie les Principia Mathematica en 1687.",
    "Trois lois : inertie, F = m × a, action-réaction.",
    "Gravitation universelle : attraction proportionnelle aux masses et inversement proportionnelle au carré de la distance.",
    "La physique de Newton est complétée au XXe siècle par la relativité et la mécanique quantique."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel ouvrage Newton publie-t-il en 1687 ?",
      options: ["L'Origine des espèces", "Les Principia Mathematica", "Le Dialogue sur les deux grands systèmes du monde", "L'Encyclopédie"],
      answer: 1,
      explanation: "Il y expose ses lois du mouvement et la gravitation universelle."
    },
    {
      type: "qcm",
      question: "Que dit la deuxième loi de Newton ?",
      options: ["E = mc²", "F = m × a", "Tout corps flotte sur l'eau", "La Terre est au centre de l'Univers"],
      answer: 1,
      explanation: "La force est égale à la masse multipliée par l'accélération."
    },
    {
      type: "qcm",
      question: "Si la distance entre deux corps double, la force de gravitation est…",
      options: ["doublée", "divisée par deux", "divisée par quatre", "inchangée"],
      answer: 2,
      explanation: "Elle est inversement proportionnelle au carré de la distance."
    },
    {
      type: "vf",
      question: "Sans résistance de l'air, une plume et un marteau tombent à la même vitesse.",
      answer: true,
      explanation: "Vrai : l'astronaute David Scott l'a démontré sur la Lune en 1971."
    },
    {
      type: "qcm",
      question: "Quelle planète a été découverte par le calcul avant d'être observée ?",
      options: ["Mars", "Uranus", "Neptune", "Pluton"],
      answer: 2,
      explanation: "Grâce aux calculs d'Urbain Le Verrier en 1846."
    }
  ]
});
