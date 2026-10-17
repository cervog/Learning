registerLesson({
  id: "industrie-semi-conducteurs",
  theme: "industrie",
  title: "Les semi-conducteurs",
  subtitle: "Les puces électroniques, pétrole du XXIe siècle",
  minutes: 7,
  intro: "Voitures, smartphones, missiles, frigos, intelligence artificielle : tout fonctionne avec des **puces électroniques**. Leur fabrication est devenue un enjeu géopolitique majeur.",
  sections: [
    {
      title: "Qu'est-ce qu'un semi-conducteur ?",
      text: "Un **semi-conducteur** est un matériau, le plus souvent le **silicium** (tiré du sable), qui conduit l'électricité **plus ou moins selon les conditions**. On peut donc l'utiliser comme interrupteur.\n\nSur une **puce** (ou circuit intégré), on grave des **milliards de transistors**, ces minuscules interrupteurs qui manipulent les 0 et les 1 de l'informatique. Les plus avancés mesurent quelques **nanomètres** — des milliers de fois plus fins qu'un cheveu."
    },
    {
      title: "Une fabrication extrême",
      text: "Les puces sont fabriquées dans des usines géantes, les **fabs** (ou fonderies), qui coûtent **plus de 20 milliards de dollars**. Le silicium est découpé en fines galettes (**wafers**), sur lesquelles on grave les circuits par **photolithographie**, couche après couche, en des centaines d'étapes.\n\nLa production se déroule en **salle blanche**, des milliers de fois plus propre qu'un bloc opératoire : une seule poussière peut ruiner une puce."
    },
    {
      title: "Qui fait quoi ?",
      text: "La chaîne de production est extraordinairement **spécialisée** et mondialisée :\n\n- **Conception** : surtout aux **États-Unis** (Nvidia, Apple, Qualcomm, AMD, Intel).\n- **Fabrication** des puces les plus avancées : principalement **Taïwan**, avec **TSMC**, qui produit l'essentiel des puces de pointe mondiales, et la **Corée du Sud** (**Samsung**).\n- **Machines de gravure** : la société néerlandaise **ASML** est la **seule au monde** à fabriquer les machines de lithographie **EUV** (ultraviolet extrême), indispensables aux puces les plus fines.\n- **Assemblage et test** : surtout en Asie (Chine, Malaisie…)."
    },
    {
      title: "Un enjeu géopolitique",
      text: "La concentration de la production à **Taïwan**, île revendiquée par la Chine, inquiète : on parle de « **bouclier de silicium** ». Une guerre ou un blocus paralyserait l'économie mondiale.\n\nLes **États-Unis** limitent les exportations de puces et de machines avancées vers la **Chine**, qui investit massivement pour devenir autonome. En **2022**, les États-Unis ont adopté le **CHIPS Act** et l'Union européenne, en **2023**, son **Chips Act**, pour relocaliser une partie de la production."
    },
    {
      title: "La pénurie de 2021",
      text: "Pendant la pandémie, la demande d'électronique explose (télétravail, consoles) alors que des usines s'arrêtent. Résultat : une **pénurie mondiale de puces** en **2021–2022**. Des constructeurs automobiles doivent stopper leurs chaînes : une voiture moderne contient plus d'**un millier de puces**.\n\nAujourd'hui, l'essor de l'**intelligence artificielle** fait exploser la demande de puces spécialisées (les **GPU**), faisant de **Nvidia** l'une des entreprises les plus valorisées au monde."
    }
  ],
  funFact: "Une machine de lithographie EUV d'ASML coûte environ **200 millions d'euros**, pèse environ **150 tonnes** et doit être transportée en pièces détachées par **plusieurs avions-cargos**.",
  keyPoints: [
    "Les semi-conducteurs (surtout le silicium) servent à fabriquer des puces contenant des milliards de transistors.",
    "La fabrication a lieu dans des « fabs » à plus de 20 milliards de dollars, en salle blanche.",
    "Conception aux États-Unis, fabrication de pointe à Taïwan (TSMC) et en Corée (Samsung).",
    "ASML (Pays-Bas) est le seul fabricant de machines EUV.",
    "Enjeu géopolitique : Taïwan, rivalité États-Unis–Chine, CHIPS Acts."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel est le matériau le plus utilisé pour fabriquer les puces électroniques ?",
      options: ["Le cuivre", "Le silicium", "L'or", "Le plastique"],
      answer: 1,
      explanation: "Il est extrait du sable (silice)."
    },
    {
      type: "qcm",
      question: "Quelle entreprise taïwanaise fabrique l'essentiel des puces les plus avancées ?",
      options: ["Samsung", "Intel", "TSMC", "Huawei"],
      answer: 2,
      explanation: "TSMC (Taiwan Semiconductor Manufacturing Company)."
    },
    {
      type: "qcm",
      question: "De quel pays vient ASML, seul fabricant de machines de lithographie EUV ?",
      options: ["Les États-Unis", "Le Japon", "Les Pays-Bas", "L'Allemagne"],
      answer: 2,
      explanation: "ASML est une entreprise néerlandaise."
    },
    {
      type: "vf",
      question: "Une voiture moderne contient seulement quelques puces électroniques.",
      answer: false,
      explanation: "Faux : elle en contient souvent plus d'un millier, d'où l'impact de la pénurie de 2021."
    },
    {
      type: "qcm",
      question: "Qu'appelle-t-on le « bouclier de silicium » ?",
      options: ["Une protection contre les virus informatiques", "L'idée que l'importance des puces taïwanaises protège Taïwan", "Une armure militaire", "Un pare-feu chinois"],
      answer: 1,
      explanation: "Le monde entier dépend des usines taïwanaises."
    }
  ]
});
