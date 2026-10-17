registerLesson({
  id: "sciences-quantique",
  theme: "sciences",
  title: "La physique quantique",
  subtitle: "Le monde étrange de l'infiniment petit",
  minutes: 7,
  intro: "À l'échelle des atomes, la matière se comporte de façon déroutante : une particule peut être à plusieurs endroits à la fois. Bienvenue dans la **physique quantique**, la théorie la plus précise jamais conçue… et la plus étrange.",
  sections: [
    {
      title: "Les quanta",
      text: "En **1900**, l'Allemand **Max Planck** découvre que l'énergie de la lumière n'est pas émise de façon continue, mais par petits « paquets » indivisibles : les **quanta** (du latin *quantum*, « quantité »).\n\nEn **1905**, Einstein montre que la lumière elle-même est faite de grains d'énergie, les **photons**. En **1913**, **Niels Bohr** propose un modèle de l'atome où les électrons ne peuvent occuper que certaines orbites précises : l'énergie y est **quantifiée**, comme les marches d'un escalier."
    },
    {
      title: "Onde ou particule ?",
      text: "La lumière se comporte tantôt comme une **onde**, tantôt comme une **particule**. En **1924**, le Français **Louis de Broglie** propose que c'est aussi le cas de la matière : les électrons ont un comportement **ondulatoire**. C'est la **dualité onde-corpuscule**.\n\nL'expérience des **fentes de Young** le montre de façon spectaculaire : des électrons envoyés un par un à travers deux fentes forment des **figures d'interférence**, comme s'ils passaient par les deux fentes à la fois… mais si l'on observe par quelle fente ils passent, l'interférence disparaît."
    },
    {
      title: "Probabilités et incertitude",
      text: "En physique quantique, on ne peut pas prédire avec certitude le résultat d'une mesure, seulement sa **probabilité**. Avant la mesure, une particule peut être dans une **superposition** de plusieurs états.\n\nEn **1927**, **Werner Heisenberg** énonce le **principe d'incertitude** : on ne peut pas connaître à la fois, avec une précision parfaite, la **position** et la **vitesse** d'une particule.\n\nCe hasard fondamental déplaisait à Einstein, qui aurait dit : « **Dieu ne joue pas aux dés.** » Bohr lui aurait répondu : « Cessez de dire à Dieu ce qu'il doit faire. »"
    },
    {
      title: "Le chat de Schrödinger",
      text: "Pour montrer l'absurdité apparente de la superposition à notre échelle, **Erwin Schrödinger** imagine en **1935** une expérience de pensée : un chat est enfermé dans une boîte avec un mécanisme qui libère un poison si un atome radioactif se désintègre. Tant qu'on n'ouvre pas la boîte, selon la théorie, le chat serait à la fois **mort et vivant**.\n\nUn autre phénomène troublant est l'**intrication** : deux particules liées restent corrélées même séparées par de grandes distances. Le Français **Alain Aspect** l'a démontré expérimentalement dans les années 1980, ce qui lui a valu le **prix Nobel de physique 2022**."
    },
    {
      title: "La quantique au quotidien",
      text: "Malgré son étrangeté, la physique quantique est partout dans notre vie : sans elle, pas de **transistors** ni de **puces électroniques**, pas de **lasers**, de **LED**, d'**IRM**, de panneaux **solaires** ni d'horloges atomiques (donc pas de GPS).\n\nOn développe aujourd'hui des **ordinateurs quantiques**, qui utilisent des **qubits** pouvant être en superposition de 0 et de 1. Ils pourraient un jour résoudre certains problèmes hors de portée des ordinateurs classiques, et casser les systèmes de chiffrement actuels."
    }
  ],
  funFact: "Le physicien **Richard Feynman**, prix Nobel, a déclaré : « Je crois pouvoir dire sans risque que **personne ne comprend la mécanique quantique**. » Elle fonctionne parfaitement, mais son interprétation reste débattue.",
  keyPoints: [
    "Planck (1900) : l'énergie est émise par paquets, les quanta ; Bohr quantifie l'atome.",
    "Dualité onde-corpuscule (de Broglie, 1924) ; expérience des fentes de Young.",
    "Superposition, probabilités et principe d'incertitude de Heisenberg (1927).",
    "Le chat de Schrödinger (1935) ; l'intrication, démontrée par Alain Aspect (Nobel 2022).",
    "Applications : transistors, lasers, IRM, LED, ordinateurs quantiques."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a découvert en 1900 que l'énergie est émise par « paquets » ?",
      options: ["Albert Einstein", "Max Planck", "Niels Bohr", "Isaac Newton"],
      answer: 1,
      explanation: "Il les a appelés des quanta."
    },
    {
      type: "qcm",
      question: "Que dit le principe d'incertitude de Heisenberg ?",
      options: ["Les atomes n'existent pas", "On ne peut pas connaître parfaitement à la fois la position et la vitesse d'une particule", "La lumière est uniquement une onde", "L'Univers est en expansion"],
      answer: 1,
      explanation: "Énoncé en 1927."
    },
    {
      type: "qcm",
      question: "Que veut illustrer l'expérience du chat de Schrödinger ?",
      options: ["La cruauté des physiciens", "L'étrangeté de la superposition quantique appliquée à notre échelle", "La vitesse de la lumière", "La théorie de l'évolution"],
      answer: 1,
      explanation: "C'est une expérience de pensée, jamais réalisée."
    },
    {
      type: "vf",
      question: "La physique quantique n'a aucune application dans la vie quotidienne.",
      answer: false,
      explanation: "Faux : transistors, lasers, LED, IRM et GPS en dépendent."
    },
    {
      type: "qcm",
      question: "Quel physicien français a reçu le prix Nobel 2022 pour ses travaux sur l'intrication ?",
      options: ["Louis de Broglie", "Alain Aspect", "Pierre Curie", "Serge Haroche"],
      answer: 1,
      explanation: "Avec John Clauser et Anton Zeilinger. Serge Haroche a reçu le Nobel en 2012."
    }
  ]
});
