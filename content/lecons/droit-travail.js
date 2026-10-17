registerLesson({
  id: "droit-travail",
  theme: "droit",
  title: "Le droit du travail",
  subtitle: "CDI, CDD, durée du travail, licenciement : l'essentiel",
  minutes: 7,
  intro: "Le **droit du travail** encadre les relations entre employeurs et salariés. Il est né pour protéger le salarié, considéré comme la partie la plus faible. Voici ce qu'il faut savoir.",
  sections: [
    {
      title: "Le contrat de travail",
      text: "Il y a **contrat de travail** dès que trois éléments sont réunis :\n\n- une **prestation de travail** ;\n- une **rémunération** ;\n- un **lien de subordination** : le salarié travaille sous l'autorité de l'employeur, qui peut lui donner des ordres, contrôler son travail et le sanctionner.\n\nC'est ce lien qui distingue le salarié d'un travailleur **indépendant**. Les juges peuvent d'ailleurs **requalifier** en contrat de travail une fausse relation d'indépendant, comme ce fut le cas pour des chauffeurs de VTC.\n\nLes règles figurent dans le **Code du travail**, complété par les **conventions collectives** propres à chaque secteur."
    },
    {
      title: "CDI et CDD",
      text: "- Le **CDI** (contrat à durée indéterminée) est la **forme normale** du contrat de travail. Il peut commencer par une **période d'essai** (en principe 2 mois maximum pour un employé, 3 pour un agent de maîtrise ou technicien, 4 pour un cadre, renouvelable une fois si un accord de branche le prévoit).\n- Le **CDD** (contrat à durée déterminée) n'est autorisé que dans des **cas précis** : remplacement d'un salarié absent, accroissement temporaire d'activité, emploi saisonnier… Il doit être **écrit** et sa durée est limitée, généralement à **18 mois** renouvellements compris. À son terme, le salarié perçoit en principe une **prime de précarité** de **10 %** des salaires bruts.\n\nUn CDD qui ne respecte pas ces règles peut être **requalifié en CDI** par le juge."
    },
    {
      title: "Temps de travail et salaire",
      text: "- La **durée légale** du travail est de **35 heures** par semaine depuis les **lois Aubry** (1998–2000). Au-delà, les **heures supplémentaires** sont majorées (en principe +25 % pour les 8 premières, +50 % ensuite).\n- La durée maximale est de **10 heures par jour** et **48 heures par semaine**, sauf exceptions.\n- Le salarié a droit à **5 semaines de congés payés** par an (2,5 jours ouvrables par mois travaillé). La 5e semaine date de **1982** ; les deux premières, du **Front populaire** en **1936**.\n- Le **SMIC** (salaire minimum interprofessionnel de croissance), revalorisé au moins chaque année, s'établit autour de **1 800 € brut** par mois pour un temps plein."
    },
    {
      title: "La rupture du contrat",
      text: "Un CDI peut prendre fin de plusieurs façons :\n\n- la **démission**, à l'initiative du salarié, qui doit en principe respecter un préavis ;\n- le **licenciement**, à l'initiative de l'employeur, qui doit reposer sur une **cause réelle et sérieuse**. Il peut être **personnel** (faute, insuffisance professionnelle) ou **économique** (difficultés de l'entreprise, réorganisation). Une procédure stricte s'impose, avec un **entretien préalable** ;\n- la **rupture conventionnelle** (créée en **2008**) : employeur et salarié se mettent d'accord pour rompre le contrat. Le salarié touche une indemnité et peut bénéficier de l'**assurance chômage**, ce qui n'est en principe pas le cas en cas de démission.\n\nLes litiges sont jugés par le **conseil de prud'hommes**, composé à parts égales de représentants des salariés et des employeurs."
    },
    {
      title: "Les droits collectifs",
      text: "Les salariés disposent aussi de droits collectifs, conquis au fil de l'histoire :\n\n- la **liberté syndicale**, reconnue par la **loi Waldeck-Rousseau** de **1884** ;\n- le **droit de grève**, garanti par le **Préambule de la Constitution de 1946** : une cessation collective et concertée du travail pour appuyer des revendications professionnelles. Le salaire n'est pas versé pendant la grève, mais le gréviste ne peut pas être sanctionné ;\n- la représentation du personnel par le **CSE** (comité social et économique) dans les entreprises d'au moins **11 salariés**."
    }
  ],
  funFact: "Le premier grand texte du droit du travail français est une loi de **1841**, qui interdit le travail des enfants de **moins de 8 ans** dans les manufactures et limite à 8 heures par jour celui des enfants de 8 à 12 ans. Le premier **Code du travail** date de **1910**.",
  keyPoints: [
    "Contrat de travail = prestation + rémunération + lien de subordination.",
    "Le CDI est la norme ; le CDD est réservé à des cas précis, limité en durée, avec une prime de précarité de 10 %.",
    "Durée légale : 35 heures ; 5 semaines de congés payés ; SMIC d'environ 1 800 € brut.",
    "Rupture : démission, licenciement (cause réelle et sérieuse), rupture conventionnelle (2008).",
    "Litiges devant les prud'hommes ; liberté syndicale (1884) et droit de grève (1946)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel élément distingue un salarié d'un travailleur indépendant ?",
      options: ["Le montant du salaire", "Le lien de subordination", "Le lieu de travail", "Le nombre d'heures"],
      answer: 1,
      explanation: "Le salarié travaille sous l'autorité d'un employeur."
    },
    {
      type: "qcm",
      question: "Quelle est la durée légale du travail en France ?",
      options: ["35 heures par semaine", "39 heures par semaine", "40 heures par semaine", "48 heures par semaine"],
      answer: 0,
      explanation: "Depuis les lois Aubry ; 48 heures est la durée maximale hebdomadaire."
    },
    {
      type: "vf",
      question: "Un employeur peut recourir librement au CDD pour n'importe quel poste permanent.",
      answer: false,
      explanation: "Faux : le CDD n'est autorisé que dans des cas précis, sinon il peut être requalifié en CDI."
    },
    {
      type: "qcm",
      question: "Quel mode de rupture, créé en 2008, repose sur un accord entre employeur et salarié ?",
      options: ["La démission", "Le licenciement économique", "La rupture conventionnelle", "La mise à pied"],
      answer: 2,
      explanation: "Elle permet au salarié de bénéficier de l'assurance chômage."
    },
    {
      type: "qcm",
      question: "Quelle juridiction juge les litiges entre salariés et employeurs ?",
      options: ["Le tribunal de commerce", "Le conseil de prud'hommes", "La cour d'assises", "Le Conseil d'État"],
      answer: 1,
      explanation: "Il est composé à parts égales de représentants des salariés et des employeurs."
    }
  ]
});
