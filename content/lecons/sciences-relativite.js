registerLesson({
  id: "sciences-relativite",
  theme: "sciences",
  title: "Einstein et la relativité",
  subtitle: "Quand le temps et l'espace deviennent élastiques",
  minutes: 7,
  intro: "Le temps ne s'écoule pas au même rythme pour tout le monde, et la masse peut se transformer en énergie. Ces idées folles sont celles d'**Albert Einstein**, et elles sont vérifiées chaque jour.",
  sections: [
    {
      title: "L'année miraculeuse",
      text: "En **1905**, **Albert Einstein** a 26 ans et travaille comme employé à l'**Office des brevets de Berne**, en Suisse. Cette année-là, il publie quatre articles qui révolutionnent la physique : sur l'effet photoélectrique, le mouvement des particules, la **relativité restreinte** et la célèbre équation **E = mc²**.\n\nOn appelle 1905 son « **année miraculeuse** ». Il reçoit le **prix Nobel de physique en 1921**… non pas pour la relativité, mais pour l'**effet photoélectrique**."
    },
    {
      title: "La relativité restreinte",
      text: "Einstein part de deux principes :\n\n- les lois de la physique sont les mêmes pour tous les observateurs en mouvement uniforme ;\n- la **vitesse de la lumière** dans le vide est **toujours la même** (environ 300 000 km/s), quelle que soit la vitesse de celui qui l'observe.\n\nConséquence surprenante : **le temps n'est pas absolu**. Pour un objet qui se déplace très vite, le temps **ralentit** (la **dilatation du temps**). Rien ne peut dépasser la vitesse de la lumière."
    },
    {
      title: "E = mc²",
      text: "L'équation la plus célèbre du monde signifie que **la masse et l'énergie sont équivalentes** : E (l'énergie) est égale à m (la masse) multipliée par c² (la vitesse de la lumière au carré).\n\nComme c² est un nombre gigantesque, une **toute petite masse** contient une **énergie colossale**. C'est ce qui explique l'énergie du Soleil, celle des centrales nucléaires… et la puissance des bombes atomiques."
    },
    {
      title: "La relativité générale",
      text: "En **1915**, Einstein publie la **relativité générale**, une nouvelle théorie de la **gravitation**. Pour lui, la gravité n'est pas une force à distance comme chez Newton : les masses **courbent l'espace-temps**, comme une boule de bowling déforme une toile tendue. Les objets suivent ensuite ces courbes.\n\nPrédictions vérifiées :\n\n- la **lumière est déviée** par le Soleil (observé lors d'une éclipse en **1919**, ce qui rend Einstein mondialement célèbre) ;\n- le temps passe **plus lentement** près d'une grande masse ;\n- l'existence des **trous noirs** et des **ondes gravitationnelles**, détectées pour la première fois en **2015**."
    },
    {
      title: "Einstein, l'homme",
      text: "Né en **1879** à **Ulm**, en Allemagne, dans une famille juive, Einstein quitte l'Allemagne lors de l'arrivée au pouvoir d'Hitler en **1933** et s'installe aux **États-Unis**, à Princeton.\n\nEn **1939**, il signe une lettre au président Roosevelt l'alertant sur la possibilité d'une bombe atomique allemande, ce qui contribue au lancement du **projet Manhattan**, auquel il ne participe pas. Pacifiste, il le regrettera. Il meurt en **1955**."
    }
  ],
  funFact: "Le temps passe un peu plus vite **en haut d'une montagne** qu'au niveau de la mer, car la gravité y est plus faible. Des horloges atomiques ultra-précises ont même mesuré la différence pour un écart de hauteur de quelques dizaines de centimètres !",
  keyPoints: [
    "1905, l'année miraculeuse : relativité restreinte et E = mc².",
    "La vitesse de la lumière est constante ; le temps ralentit pour un objet très rapide.",
    "E = mc² : une petite masse contient une énorme énergie.",
    "Relativité générale (1915) : les masses courbent l'espace-temps ; confirmée en 1919.",
    "Nobel 1921 pour l'effet photoélectrique ; Einstein fuit l'Allemagne nazie en 1933."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Que signifie l'équation E = mc² ?",
      options: ["L'énergie dépend de la couleur", "La masse et l'énergie sont équivalentes", "La vitesse est égale à la masse", "Le temps est absolu"],
      answer: 1,
      explanation: "Une petite masse contient une énergie colossale."
    },
    {
      type: "qcm",
      question: "Pour quelle découverte Einstein a-t-il reçu le prix Nobel ?",
      options: ["La relativité restreinte", "La relativité générale", "L'effet photoélectrique", "La bombe atomique"],
      answer: 2,
      explanation: "Le prix Nobel de physique 1921."
    },
    {
      type: "vf",
      question: "Selon la relativité, le temps s'écoule de la même façon pour tout le monde.",
      answer: false,
      explanation: "Faux : il dépend de la vitesse et de la gravité."
    },
    {
      type: "qcm",
      question: "Selon la relativité générale, qu'est-ce que la gravité ?",
      options: ["Une force magnétique", "Une courbure de l'espace-temps causée par les masses", "Une illusion d'optique", "Un effet de la rotation de la Terre"],
      answer: 1,
      explanation: "Comme une boule déformant une toile tendue."
    },
    {
      type: "qcm",
      question: "Où travaillait Einstein en 1905 ?",
      options: ["À l'université de Princeton", "À l'Office des brevets de Berne", "Au CERN", "À la Sorbonne"],
      answer: 1,
      explanation: "Il y examinait des demandes de brevets."
    }
  ]
});
