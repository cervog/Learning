registerLesson({
  id: "droit-consommation",
  theme: "droit",
  title: "Les droits du consommateur",
  subtitle: "Rétractation, garanties, démarchage : ce que la loi vous garantit",
  minutes: 6,
  intro: "Un achat en ligne qui ne convient pas, un appareil qui tombe en panne au bout de six mois, un démarcheur insistant : le **droit de la consommation** protège le consommateur, considéré comme la partie faible face au professionnel.",
  sections: [
    {
      title: "Le droit de rétractation",
      text: "Pour un achat **à distance** (sur Internet, par téléphone, par catalogue) ou lors d'un **démarchage à domicile**, le consommateur dispose d'un délai de **14 jours** pour changer d'avis, **sans avoir à se justifier** ni à payer de pénalités (hors frais de retour, si le vendeur l'a précisé).\n\nLe délai court à partir de la **réception du bien** (ou de la conclusion du contrat pour un service). Le vendeur doit rembourser dans les 14 jours suivant la rétractation.\n\n**Attention** : ce droit **n'existe pas** pour un achat en **magasin**. Un magasin qui accepte les échanges le fait par geste commercial. Certains produits en sont aussi exclus (biens personnalisés, denrées périssables, billets de spectacle datés…)."
    },
    {
      title: "La garantie légale de conformité",
      text: "Pour tout bien acheté auprès d'un professionnel, la **garantie légale de conformité** s'applique pendant **2 ans** à compter de la livraison pour un bien **neuf** (au moins 1 an pour un bien d'occasion).\n\nSi le produit tombe en panne ou ne correspond pas à ce qui était promis, le vendeur doit le **réparer** ou le **remplacer**, sans frais. Si c'est impossible, le consommateur peut obtenir une réduction du prix ou un remboursement. Pendant les **2 ans**, le défaut est **présumé** exister dès l'achat : c'est au vendeur de prouver le contraire.\n\nCette garantie est **gratuite et obligatoire**. Les « extensions de garantie » vendues en magasin s'y ajoutent mais ne la remplacent pas."
    },
    {
      title: "D'autres protections",
      text: "- La **garantie des vices cachés** (Code civil) : si un défaut caché rend le bien impropre à son usage, on peut agir dans les **2 ans** suivant sa découverte, même pour un achat entre particuliers.\n- Les **clauses abusives**, qui créent un déséquilibre important au détriment du consommateur, sont réputées **non écrites**.\n- Le **crédit à la consommation** est encadré : information obligatoire, délai de rétractation de **14 jours**.\n- Contre le démarchage téléphonique, on peut s'inscrire gratuitement sur la liste d'opposition **Bloctel**.\n- L'**obsolescence programmée** (réduire volontairement la durée de vie d'un produit) est un **délit** depuis **2015**."
    },
    {
      title: "Que faire en cas de litige ?",
      text: "En cas de problème avec un professionnel :\n\n- lui adresser d'abord une **réclamation écrite**, idéalement par lettre recommandée avec accusé de réception ;\n- saisir gratuitement le **médiateur de la consommation** dont dépend le professionnel (ses coordonnées doivent figurer dans ses conditions générales) ;\n- se faire aider par une **association de consommateurs** (UFC-Que Choisir, CLCV…) ;\n- signaler le problème sur la plateforme **SignalConso** de la **DGCCRF**, l'administration chargée de protéger les consommateurs ;\n- en dernier recours, saisir le **tribunal judiciaire** ; pour les petits litiges, une procédure simplifiée existe."
    },
    {
      title: "Une protection européenne",
      text: "Une grande partie du droit de la consommation français vient du **droit européen** : le délai de rétractation de 14 jours et la garantie légale de 2 ans sont harmonisés dans toute l'**Union européenne**.\n\nDepuis la **loi Hamon** de **2014**, les associations agréées peuvent intenter une **action de groupe** au nom de nombreux consommateurs victimes d'un même professionnel. Et un **indice de réparabilité**, puis de durabilité, doit être affiché sur certains appareils électroniques pour aider à choisir des produits qui durent."
    }
  ],
  funFact: "Depuis juin 2023, la **résiliation en ligne** doit être aussi simple que la souscription : un bouton « **résilier votre contrat** » doit être facilement accessible pour les abonnements souscrits sur Internet (téléphone, box, salle de sport…).",
  keyPoints: [
    "Achat à distance ou démarchage : 14 jours pour se rétracter sans justification ; pas de droit de rétractation en magasin.",
    "Garantie légale de conformité : 2 ans pour un bien neuf, gratuite et obligatoire.",
    "Garantie des vices cachés, clauses abusives, Bloctel, obsolescence programmée punie depuis 2015.",
    "Litige : réclamation écrite, médiateur de la consommation, associations, SignalConso (DGCCRF).",
    "Beaucoup de règles sont européennes ; action de groupe depuis la loi Hamon (2014)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Combien de temps a-t-on pour se rétracter après un achat sur Internet ?",
      options: ["7 jours", "14 jours", "30 jours", "1 an"],
      answer: 1,
      explanation: "À partir de la réception du bien."
    },
    {
      type: "vf",
      question: "Le droit de rétractation de 14 jours s'applique aussi aux achats en magasin.",
      answer: false,
      explanation: "Faux : en magasin, un échange ou un remboursement n'est qu'un geste commercial."
    },
    {
      type: "qcm",
      question: "Quelle est la durée de la garantie légale de conformité pour un bien neuf ?",
      options: ["6 mois", "1 an", "2 ans", "5 ans"],
      answer: 2,
      explanation: "Elle est gratuite et obligatoire."
    },
    {
      type: "qcm",
      question: "Sur quelle liste peut-on s'inscrire pour limiter le démarchage téléphonique ?",
      options: ["SignalConso", "Bloctel", "Pharos", "France Connect"],
      answer: 1,
      explanation: "L'inscription est gratuite."
    },
    {
      type: "qcm",
      question: "Quelle administration est chargée de protéger les consommateurs en France ?",
      options: ["La CNIL", "La DGCCRF", "L'URSSAF", "L'AMF"],
      answer: 1,
      explanation: "La Direction générale de la concurrence, de la consommation et de la répression des fraudes."
    }
  ]
});
