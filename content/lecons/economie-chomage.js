registerLesson({
  id: "economie-chomage",
  theme: "economie",
  title: "Le chômage",
  subtitle: "Comment on le mesure, et pourquoi il existe",
  minutes: 6,
  intro: "Le taux de chômage est l'un des chiffres les plus scrutés de l'actualité. Mais qui est vraiment « chômeur », et pourquoi le chômage persiste-t-il même quand l'économie va bien ?",
  sections: [
    {
      title: "Qui est chômeur ?",
      text: "Selon la définition du **Bureau international du travail** (BIT), un **chômeur** est une personne en âge de travailler qui remplit trois conditions :\n\n- elle **n'a pas travaillé**, même une heure, pendant une semaine donnée ;\n- elle est **disponible** pour travailler dans les deux semaines ;\n- elle **cherche activement** un emploi.\n\nLe **taux de chômage** = nombre de chômeurs ÷ **population active** (les personnes qui ont un emploi + les chômeurs). Les étudiants, retraités ou personnes au foyer qui ne cherchent pas d'emploi ne font pas partie de la population active."
    },
    {
      title: "Deux façons de compter en France",
      text: "- L'**INSEE** mesure le chômage au sens du **BIT** grâce à une grande **enquête** trimestrielle auprès des ménages. C'est le chiffre qui permet les comparaisons internationales. Il tourne autour de **7 à 8 %** ces dernières années.\n- **France Travail** (ex-Pôle emploi) compte les **demandeurs d'emploi inscrits**, répartis en catégories (A, B, C…). Ce chiffre est plus élevé, car il inclut des personnes qui travaillent un peu.\n\nOn parle aussi de **halo du chômage** pour les personnes qui voudraient travailler mais ne remplissent pas tous les critères du BIT."
    },
    {
      title: "Les différentes formes de chômage",
      text: "- Le **chômage frictionnel** : le temps nécessaire pour passer d'un emploi à un autre. Il existe même en plein emploi.\n- Le **chômage conjoncturel** : lié à un **ralentissement** de l'activité économique (crise, récession). Il baisse quand la croissance repart.\n- Le **chômage structurel** : il persiste même en période de croissance, à cause d'un décalage entre les **compétences** demandées et celles des chômeurs, de la **désindustrialisation** de certaines régions, ou de rigidités du marché du travail."
    },
    {
      title: "Comment le combattre ?",
      text: "Les économistes proposent des solutions différentes selon le type de chômage :\n\n- **relancer la demande** (approche keynésienne) contre le chômage conjoncturel ;\n- **baisser le coût du travail** (allègements de cotisations sur les bas salaires) ;\n- **former** les chômeurs et les jeunes (formation professionnelle, **apprentissage**) ;\n- **flexibiliser** le marché du travail, à l'image de la **flexisécurité** danoise, qui combine facilité de licenciement, indemnisation généreuse et accompagnement intensif."
    },
    {
      title: "Quelques repères",
      text: "En France, le chômage a fortement augmenté après les **chocs pétroliers** des années 1970, alors qu'il était très faible pendant les **Trente Glorieuses** (environ 2 %). Il a culminé à plus de **10 %** au milieu des années 1990 et après la crise de 2008.\n\nLe **chômage des jeunes** (15–24 ans) est nettement plus élevé, autour de 17 à 19 %. Le **chômage de longue durée** (plus d'un an) est particulièrement difficile à résorber, car les compétences et la confiance s'érodent avec le temps."
    }
  ],
  funFact: "Pendant la **Grande Dépression**, le taux de chômage a atteint environ **25 %** aux États-Unis en **1933** : un actif sur quatre était sans emploi.",
  keyPoints: [
    "Chômeur au sens du BIT : sans emploi, disponible et cherchant activement un emploi.",
    "Taux de chômage = chômeurs ÷ population active.",
    "En France : INSEE (BIT, environ 7 à 8 %) et France Travail (demandeurs d'emploi inscrits).",
    "Chômage frictionnel, conjoncturel et structurel.",
    "Remèdes : relance, baisse du coût du travail, formation, flexisécurité."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Selon le BIT, laquelle de ces personnes est au chômage ?",
      options: ["Un étudiant qui ne cherche pas d'emploi", "Une personne sans emploi qui cherche activement et est disponible", "Un retraité", "Une personne qui a travaillé 10 heures cette semaine"],
      answer: 1,
      explanation: "Il faut être sans emploi, disponible et en recherche active."
    },
    {
      type: "qcm",
      question: "Que comprend la population active ?",
      options: ["Toutes les personnes de 15 à 64 ans", "Les personnes en emploi et les chômeurs", "Seulement les salariés", "Les personnes inscrites à France Travail"],
      answer: 1,
      explanation: "Le taux de chômage se calcule par rapport à elle."
    },
    {
      type: "qcm",
      question: "Comment appelle-t-on le chômage lié au temps de passage d'un emploi à un autre ?",
      options: ["Le chômage structurel", "Le chômage conjoncturel", "Le chômage frictionnel", "Le chômage partiel"],
      answer: 2,
      explanation: "Il existe même quand l'économie est au plein emploi."
    },
    {
      type: "vf",
      question: "Le chômage était très faible en France pendant les Trente Glorieuses.",
      answer: true,
      explanation: "Vrai : autour de 2 %, avant de monter fortement après les chocs pétroliers."
    },
    {
      type: "qcm",
      question: "Quel pays est connu pour son modèle de « flexisécurité » ?",
      options: ["Les États-Unis", "Le Danemark", "Le Japon", "L'Italie"],
      answer: 1,
      explanation: "Il combine flexibilité de l'emploi et sécurité pour les chômeurs."
    }
  ]
});
