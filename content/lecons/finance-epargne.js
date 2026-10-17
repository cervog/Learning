registerLesson({
  id: "finance-epargne",
  theme: "finance",
  title: "Épargner et placer son argent",
  subtitle: "Livret A, assurance-vie, PEA : les bases",
  minutes: 7,
  intro: "Les Français sont parmi les plus gros épargnants d'Europe. Mais épargner ne suffit pas : encore faut-il savoir **où** placer son argent. Voici les grands principes et les principaux placements en France.",
  sections: [
    {
      title: "Le triangle d'or",
      text: "Tout placement se juge selon trois critères, qu'on ne peut jamais réunir parfaitement en même temps :\n\n- le **rendement** : combien il rapporte ;\n- le **risque** : la possibilité de perdre de l'argent ;\n- la **liquidité** : la facilité à récupérer son argent rapidement.\n\nUn placement sans risque et disponible à tout moment rapporte peu. Un placement potentiellement très rentable comporte toujours un risque. Méfiez-vous des promesses de **rendement élevé sans risque** : c'est le signe d'une **arnaque**."
    },
    {
      title: "L'épargne de précaution",
      text: "Avant tout placement, il est conseillé de se constituer une **épargne de précaution**, souvent estimée à **3 à 6 mois de dépenses**, pour faire face aux imprévus (panne de voiture, perte d'emploi).\n\nElle se place sur des **livrets réglementés**, sans risque et disponibles à tout moment, dont les intérêts sont **exonérés d'impôt** :\n\n- le **Livret A** (plafond de **22 950 €**), dont le taux est fixé par l'État ;\n- le **LDDS** (livret de développement durable et solidaire) ;\n- le **LEP** (livret d'épargne populaire), mieux rémunéré, réservé aux revenus modestes."
    },
    {
      title: "L'assurance-vie et le PEA",
      text: "Pour un horizon plus long :\n\n- l'**assurance-vie**, placement préféré des Français : malgré son nom, c'est une enveloppe d'épargne. Elle combine des **fonds en euros** (capital garanti, rendement modeste) et des **unités de compte** (actions, immobilier…, plus risquées). Elle offre une **fiscalité avantageuse** après 8 ans et des avantages pour la transmission.\n- le **PEA** (plan d'épargne en actions) : il permet d'investir en **actions européennes**, avec une fiscalité avantageuse après **5 ans**.\n- le **PER** (plan d'épargne retraite) : pour préparer sa retraite, avec une déduction fiscale à l'entrée, mais l'argent est en principe bloqué jusqu'à la retraite."
    },
    {
      title: "La magie des intérêts composés",
      text: "Quand on réinvestit les gains, ceux-ci produisent à leur tour des gains : ce sont les **intérêts composés**. Avec le temps, l'effet devient spectaculaire.\n\nExemple : placer **100 € par mois** à **5 % par an** pendant **30 ans** représente 36 000 € versés, mais aboutit à environ **83 000 €**. Le **temps** est donc le meilleur allié de l'épargnant : mieux vaut commencer tôt, même avec de petites sommes.\n\nÀ l'inverse, l'**inflation** est son ennemie : un placement qui rapporte 2 % quand l'inflation est de 3 % fait **perdre** du pouvoir d'achat."
    },
    {
      title: "Les principes de base",
      text: "- **Diversifier** : ne pas mettre tous ses œufs dans le même panier (livrets, actions, immobilier…).\n- **Adapter** ses placements à son **horizon** : l'argent dont on aura besoin bientôt ne doit pas être placé en Bourse.\n- **Investir régulièrement** (par exemple chaque mois) pour lisser les variations des marchés.\n- **Surveiller les frais**, qui rongent le rendement sur le long terme.\n- **Ne pas investir dans ce qu'on ne comprend pas**, et se méfier des « conseils » sur les réseaux sociaux.\n\nEn France, l'**AMF** (Autorité des marchés financiers) publie des listes noires de sites frauduleux."
    }
  ],
  funFact: "Le **Livret A** a été créé en **1818**, après les guerres napoléoniennes, pour encourager l'épargne populaire. Les fonds collectés servent notamment à financer le **logement social**.",
  keyPoints: [
    "Tout placement se juge selon le rendement, le risque et la liquidité.",
    "L'épargne de précaution (3 à 6 mois de dépenses) se place sur des livrets réglementés (Livret A, LDDS, LEP).",
    "Pour le long terme : assurance-vie (avantages après 8 ans), PEA (après 5 ans), PER (retraite).",
    "Les intérêts composés rendent le temps très précieux ; l'inflation ronge l'épargne.",
    "Diversifier, adapter à son horizon, investir régulièrement, surveiller les frais."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quels sont les trois critères d'un placement ?",
      options: ["Prix, couleur, durée", "Rendement, risque, liquidité", "Banque, pays, monnaie", "Impôt, inflation, frais"],
      answer: 1,
      explanation: "On ne peut jamais réunir parfaitement les trois."
    },
    {
      type: "qcm",
      question: "Quel est le plafond du Livret A ?",
      options: ["10 000 €", "22 950 €", "50 000 €", "Il n'y a pas de plafond"],
      answer: 1,
      explanation: "Pour un particulier."
    },
    {
      type: "qcm",
      question: "Après combien d'années l'assurance-vie bénéficie-t-elle d'une fiscalité plus avantageuse ?",
      options: ["1 an", "5 ans", "8 ans", "20 ans"],
      answer: 2,
      explanation: "Le PEA, lui, devient avantageux après 5 ans."
    },
    {
      type: "vf",
      question: "Un placement qui promet un rendement très élevé sans aucun risque est probablement une arnaque.",
      answer: true,
      explanation: "Vrai : plus le rendement espéré est élevé, plus le risque l'est aussi."
    },
    {
      type: "qcm",
      question: "Quel organisme surveille les placements financiers et publie des listes noires en France ?",
      options: ["La BCE", "L'AMF", "L'INSEE", "Le FMI"],
      answer: 1,
      explanation: "L'Autorité des marchés financiers."
    }
  ]
});
