registerLesson({
  id: "technologie-gps",
  theme: "technologie",
  title: "Comment fonctionne le GPS ?",
  subtitle: "Des satellites, des horloges atomiques… et Einstein",
  minutes: 6,
  intro: "Votre téléphone sait où vous êtes à quelques mètres près, n'importe où sur Terre. Derrière ce petit point bleu se cache une prouesse technologique.",
  sections: [
    {
      title: "Un système militaire devenu civil",
      text: "Le **GPS** (*Global Positioning System*) a été développé par l'**armée américaine** à partir des années **1970**. Il devient pleinement opérationnel en **1995**.\n\nEn **1983**, après qu'un avion de ligne coréen égaré a été abattu par l'URSS, le président Reagan annonce que le GPS sera ouvert aux usages civils. En **2000**, les États-Unis suppriment la dégradation volontaire du signal civil, qui passe d'une précision d'environ 100 mètres à une dizaine de mètres."
    },
    {
      title: "Une constellation de satellites",
      text: "Le système repose sur une trentaine de **satellites** qui tournent autour de la Terre à environ **20 000 km d'altitude**, répartis pour qu'au moins quatre soient visibles partout sur le globe.\n\nChaque satellite émet en permanence un signal radio indiquant sa **position** et l'**heure exacte** d'émission, donnée par des **horloges atomiques** embarquées d'une précision extraordinaire. Votre téléphone **n'émet rien** : il se contente d'écouter."
    },
    {
      title: "Le calcul de position",
      text: "Le récepteur compare l'heure d'émission du signal et l'heure de réception. Comme les ondes radio voyagent à la **vitesse de la lumière** (environ 300 000 km/s), il en déduit sa **distance** à chaque satellite.\n\nAvec la distance à **trois satellites**, il peut calculer sa position : c'est la **trilatération**. Un **quatrième satellite** est nécessaire pour corriger l'imprécision de l'horloge du téléphone, bien moins précise qu'une horloge atomique.\n\nUne erreur d'**un millionième de seconde** fausserait la position d'environ **300 mètres** !"
    },
    {
      title: "Einstein dans votre poche",
      text: "Le GPS doit tenir compte de la **relativité** d'Einstein :\n\n- la **relativité restreinte** : les satellites se déplacent vite, leurs horloges **ralentissent** d'environ 7 microsecondes par jour ;\n- la **relativité générale** : plus loin de la Terre, la gravité est plus faible et le temps passe **plus vite**, d'environ 45 microsecondes par jour.\n\nBilan : les horloges des satellites avancent d'environ **38 microsecondes par jour**. Sans correction, l'erreur de position s'accumulerait de plusieurs **kilomètres par jour**."
    },
    {
      title: "Les autres systèmes",
      text: "D'autres puissances ont développé leur propre système pour ne pas dépendre des États-Unis :\n\n- **Galileo**, le système **européen**, civil, opérationnel depuis **2016** et plus précis que le GPS ;\n- **GLONASS**, le système **russe** ;\n- **BeiDou**, le système **chinois**, complet depuis 2020.\n\nLes smartphones modernes combinent souvent plusieurs de ces systèmes, ainsi que le Wi-Fi et les antennes mobiles, pour gagner en rapidité et en précision."
    }
  ],
  funFact: "Le GPS ne sert pas qu'à se repérer : ses horloges atomiques fournissent une **heure de référence** ultra-précise utilisée pour synchroniser les réseaux de téléphonie mobile, les réseaux électriques et les transactions boursières.",
  keyPoints: [
    "Le GPS, développé par l'armée américaine, est pleinement opérationnel depuis 1995.",
    "Une trentaine de satellites à environ 20 000 km envoient leur position et l'heure exacte.",
    "Le téléphone calcule sa distance à au moins quatre satellites (trilatération) ; il n'émet rien.",
    "Le système doit corriger les effets de la relativité d'Einstein (environ 38 microsecondes par jour).",
    "Autres systèmes : Galileo (Europe), GLONASS (Russie), BeiDou (Chine)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a développé le GPS ?",
      options: ["L'Union européenne", "L'armée américaine", "Google", "L'URSS"],
      answer: 1,
      explanation: "À partir des années 1970."
    },
    {
      type: "qcm",
      question: "De combien de satellites un récepteur a-t-il besoin au minimum pour une position précise en 3D ?",
      options: ["1", "2", "4", "10"],
      answer: 2,
      explanation: "Trois pour la position, un quatrième pour corriger l'horloge du récepteur."
    },
    {
      type: "vf",
      question: "Votre téléphone envoie un signal aux satellites GPS pour être localisé.",
      answer: false,
      explanation: "Faux : il ne fait qu'écouter les signaux des satellites."
    },
    {
      type: "qcm",
      question: "Quelle théorie scientifique est indispensable au bon fonctionnement du GPS ?",
      options: ["La théorie de l'évolution", "La relativité d'Einstein", "La tectonique des plaques", "La théorie du Big Bang"],
      answer: 1,
      explanation: "Le temps ne s'écoule pas au même rythme dans les satellites et sur Terre."
    },
    {
      type: "qcm",
      question: "Comment s'appelle le système de positionnement européen ?",
      options: ["GLONASS", "BeiDou", "Galileo", "Copernicus"],
      answer: 2,
      explanation: "Opérationnel depuis 2016. Copernicus est le programme européen d'observation de la Terre."
    }
  ]
});
