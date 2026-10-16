registerLesson({
  id: "economie-offre-demande",
  theme: "economie",
  title: "L'offre et la demande",
  subtitle: "Le mécanisme de base qui fixe les prix",
  minutes: 6,
  intro: "Pourquoi le prix des fraises chute-t-il en été ? Pourquoi les billets d'avion sont-ils plus chers pendant les vacances ? Tout s'explique (ou presque) par la rencontre de l'**offre** et de la **demande**.",
  sections: [
    {
      title: "Le marché, lieu de rencontre",
      text: "En économie, un **marché** est le lieu (physique ou virtuel) où se rencontrent ceux qui veulent vendre un bien — **l'offre** — et ceux qui veulent l'acheter — **la demande**.\n\nDe leur confrontation naît un **prix**. Ce mécanisme a été formalisé par l'économiste britannique **Alfred Marshall** (1890), qui le comparait aux deux lames d'une paire de ciseaux : l'offre et la demande coupent ensemble."
    },
    {
      title: "Deux lois simples",
      text: "- **Loi de la demande** : quand le prix **augmente**, la quantité demandée **diminue** (on achète moins de ce qui est cher).\n- **Loi de l'offre** : quand le prix **augmente**, la quantité offerte **augmente** (produire devient plus rentable).\n\nSur un graphique, la demande est une courbe qui descend, l'offre une courbe qui monte. Elles se croisent en un point : le **prix d'équilibre**, où la quantité offerte égale la quantité demandée."
    },
    {
      title: "Pénurie et excédent",
      text: "Si le prix est **trop bas** (par exemple bloqué par l'État), les acheteurs sont nombreux mais les vendeurs rares : c'est la **pénurie** (files d'attente, rationnement).\n\nSi le prix est **trop haut**, les produits restent invendus : c'est l'**excédent** (stocks, soldes). Sur un marché libre, ces déséquilibres poussent naturellement le prix vers l'équilibre."
    },
    {
      title: "Quand les courbes se déplacent",
      text: "Un événement extérieur peut déplacer toute une courbe :\n\n- Une **gelée détruit les récoltes de café** au Brésil → l'offre baisse → le prix du café monte.\n- Une **mode** rend un produit populaire → la demande augmente → le prix monte.\n- Une **innovation** baisse les coûts de production → l'offre augmente → le prix baisse (c'est l'histoire des téléviseurs à écran plat).\n\nL'**élasticité** mesure la sensibilité de la demande au prix : faible pour l'essence ou les médicaments (on en a besoin), forte pour les produits de luxe ou facilement remplaçables."
    },
    {
      title: "La « main invisible »",
      text: "Dès **1776**, dans *La Richesse des nations*, **Adam Smith** décrit la « **main invisible** » : chacun poursuivant son intérêt personnel, le marché coordonne spontanément les activités de tous.\n\nMais le marché a ses limites, appelées **défaillances de marché** : pollution, monopoles, biens publics, informations cachées… C'est là que l'État intervient souvent (taxes, régulation, services publics)."
    }
  ],
  funFact: "Le prix des billets d'avion ou des VTC qui change selon l'heure s'appelle la **tarification dynamique** : un algorithme ajuste le prix en temps réel selon l'offre et la demande.",
  keyPoints: [
    "Le prix naît de la rencontre entre l'offre (vendeurs) et la demande (acheteurs).",
    "Prix ↑ → demande ↓ et offre ↑.",
    "Prix trop bas → pénurie ; prix trop haut → excédent.",
    "Un choc (récolte, mode, innovation) déplace les courbes et change le prix d'équilibre.",
    "Adam Smith (1776) : la « main invisible » du marché."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Selon la loi de la demande, si le prix d'un bien augmente…",
      options: ["La quantité demandée augmente", "La quantité demandée diminue", "Rien ne change", "L'offre diminue"],
      answer: 1,
      explanation: "Plus un bien est cher, moins on en achète (en général)."
    },
    {
      type: "qcm",
      question: "Une gelée détruit une grande partie des récoltes de café. Que se passe-t-il ?",
      options: ["Le prix du café baisse", "Le prix du café augmente", "La demande de café disparaît", "Rien"],
      answer: 1,
      explanation: "L'offre diminue alors que la demande reste stable : le prix monte."
    },
    {
      type: "qcm",
      question: "Que provoque un prix fixé en dessous du prix d'équilibre ?",
      options: ["Un excédent", "Une pénurie", "Une inflation", "Un équilibre parfait"],
      answer: 1,
      explanation: "Beaucoup d'acheteurs, peu de vendeurs : pénurie et files d'attente."
    },
    {
      type: "qcm",
      question: "Qui a parlé de la « main invisible » du marché ?",
      options: ["Karl Marx", "John Maynard Keynes", "Adam Smith", "Milton Friedman"],
      answer: 2,
      explanation: "Adam Smith, dans La Richesse des nations (1776)."
    },
    {
      type: "vf",
      question: "La demande d'essence est très sensible au prix à court terme (forte élasticité).",
      answer: false,
      explanation: "Faux : on a besoin d'essence pour se déplacer, la demande baisse peu quand le prix monte."
    }
  ]
});
