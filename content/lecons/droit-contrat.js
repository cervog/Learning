registerLesson({
  id: "droit-contrat",
  theme: "droit",
  title: "Le contrat",
  subtitle: "Ce qui fait qu'un accord engage vraiment",
  minutes: 7,
  intro: "Acheter une baguette, louer un appartement, s'abonner à une plateforme : vous concluez des **contrats** tous les jours, souvent sans le savoir. Voici les règles essentielles du droit des contrats français.",
  sections: [
    {
      title: "Qu'est-ce qu'un contrat ?",
      text: "Selon l'**article 1101 du Code civil**, le contrat est « **un accord de volontés** entre deux ou plusieurs personnes destiné à créer, modifier, transmettre ou éteindre des **obligations** ».\n\nEn principe, aucun formalisme n'est exigé : un contrat peut être **oral**. C'est le principe du **consensualisme** : l'échange des consentements suffit. Acheter un café au comptoir, c'est conclure un contrat de vente.\n\nCertains contrats exigent toutefois un **écrit** ou un **acte notarié** (vente immobilière, contrat de mariage, crédit à la consommation…)."
    },
    {
      title: "Les grands principes",
      text: "Le droit des contrats a été profondément réformé en **2016**. Il repose sur quelques principes fondamentaux :\n\n- la **liberté contractuelle** : chacun est libre de contracter ou non, de choisir son cocontractant et le contenu du contrat, dans les limites de la loi et de l'**ordre public** (art. 1102) ;\n- la **force obligatoire** : « Les contrats légalement formés **tiennent lieu de loi** à ceux qui les ont faits » (art. 1103) ;\n- la **bonne foi** : les contrats doivent être négociés, formés et exécutés de bonne foi (art. 1104).\n\nUne fois signé, un contrat ne peut donc pas être modifié ou rompu par une seule des parties, sauf exceptions prévues par la loi ou le contrat."
    },
    {
      title: "Les conditions de validité",
      text: "Pour être valable, un contrat doit réunir trois conditions (art. 1128) :\n\n- le **consentement** des parties, qui doit être libre et éclairé ;\n- leur **capacité** de contracter : un mineur ou un majeur sous tutelle ne peut pas, seul, conclure n'importe quel contrat ;\n- un **contenu licite et certain** : on ne peut pas contracter sur une chose interdite (vendre de la drogue, un organe…).\n\nLe consentement peut être **vicié** par :\n\n- l'**erreur** sur une qualité essentielle (acheter un « Picasso » qui est une copie) ;\n- le **dol** : une manœuvre ou un mensonge pour tromper l'autre partie ;\n- la **violence**, y compris l'abus d'un état de dépendance.\n\nUn contrat qui ne remplit pas ces conditions peut être annulé : c'est la **nullité**."
    },
    {
      title: "Quand l'autre ne respecte pas le contrat",
      text: "En cas d'**inexécution**, la victime dispose de plusieurs options (art. 1217), qu'elle peut parfois cumuler :\n\n- refuser d'exécuter sa propre obligation (**exception d'inexécution**) : ne pas payer un travail non réalisé ;\n- demander l'**exécution forcée** ;\n- obtenir une **réduction du prix** ;\n- demander la **résolution**, c'est-à-dire l'anéantissement du contrat ;\n- réclamer des **dommages et intérêts**.\n\nLe débiteur peut être libéré en cas de **force majeure** : un événement imprévisible, irrésistible et échappant à son contrôle (une catastrophe naturelle, par exemple)."
    },
    {
      title: "Prouver un contrat",
      text: "Un contrat oral est valable, mais il est difficile à **prouver**. Pour tout acte portant sur une somme supérieure à **1 500 €**, la loi exige en principe une preuve **écrite** (art. 1359).\n\nL'écrit peut être un **acte sous signature privée** (signé par les parties) ou un **acte authentique** (rédigé par un notaire), qui a une force probante supérieure. La **signature électronique** a la même valeur que la signature manuscrite, à certaines conditions.\n\nConseil pratique : pour un engagement important, gardez toujours une trace écrite (contrat, devis signé, e-mails, factures)."
    }
  ],
  funFact: "Depuis la réforme de 2016, un contrat peut être renégocié en cas d'**imprévision** (art. 1195) : si un changement de circonstances imprévisible rend son exécution excessivement coûteuse pour une partie, celle-ci peut demander une renégociation, et à défaut saisir le juge. Avant, la jurisprudence l'interdisait depuis le célèbre arrêt du **Canal de Craponne** (1876).",
  keyPoints: [
    "Le contrat est un accord de volontés créant des obligations ; il peut être oral (consensualisme).",
    "Principes : liberté contractuelle, force obligatoire (le contrat tient lieu de loi), bonne foi.",
    "Validité : consentement, capacité, contenu licite et certain ; vices du consentement : erreur, dol, violence.",
    "Inexécution : exception d'inexécution, exécution forcée, réduction du prix, résolution, dommages et intérêts.",
    "Au-delà de 1 500 €, la preuve d'un contrat doit en principe être écrite."
  ],
  quiz: [
    {
      type: "vf",
      question: "Un contrat conclu oralement n'a aucune valeur juridique.",
      answer: false,
      explanation: "Faux : en principe, l'échange des consentements suffit. L'écrit sert surtout à la preuve."
    },
    {
      type: "qcm",
      question: "Que signifie le « dol » ?",
      options: ["Un retard de paiement", "Une manœuvre ou un mensonge pour tromper l'autre partie", "Une clause du contrat", "Le prix de vente"],
      answer: 1,
      explanation: "C'est un vice du consentement qui peut entraîner la nullité du contrat."
    },
    {
      type: "qcm",
      question: "Que dit l'article 1103 du Code civil ?",
      options: ["Les contrats sont toujours révocables", "Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits", "Tout contrat doit être signé chez un notaire", "Seuls les majeurs peuvent signer"],
      answer: 1,
      explanation: "C'est le principe de la force obligatoire."
    },
    {
      type: "qcm",
      question: "Au-delà de quelle somme la preuve d'un contrat doit-elle en principe être écrite ?",
      options: ["150 €", "1 500 €", "15 000 €", "Il n'y a pas de seuil"],
      answer: 1,
      explanation: "Article 1359 du Code civil."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que l'exception d'inexécution ?",
      options: ["Refuser d'exécuter son obligation tant que l'autre n'exécute pas la sienne", "Annuler le contrat devant le notaire", "Une amende pénale", "Un délai de rétractation"],
      answer: 0,
      explanation: "Par exemple, ne pas payer un travail qui n'a pas été réalisé."
    }
  ]
});
