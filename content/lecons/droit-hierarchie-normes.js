registerLesson({
  id: "droit-hierarchie-normes",
  theme: "droit",
  title: "Les bases du droit français",
  subtitle: "Hiérarchie des normes, tribunaux et grands principes",
  minutes: 7,
  intro: "« Nul n'est censé ignorer la loi »… mais qui sait vraiment comment le droit est organisé ? Voici les bases pour s'y retrouver.",
  sections: [
    {
      title: "La pyramide des normes",
      text: "Toutes les règles de droit ne se valent pas. Le juriste autrichien **Hans Kelsen** a théorisé la **hiérarchie des normes**, souvent représentée par une **pyramide** : chaque règle doit respecter celles qui lui sont supérieures.\n\n- Au sommet : la **Constitution** (et le « bloc de constitutionnalité », qui inclut la **Déclaration de 1789**) ;\n- puis les **traités internationaux** et le **droit de l'Union européenne** ;\n- puis les **lois**, votées par le Parlement ;\n- puis les **règlements** (décrets du gouvernement, arrêtés des ministres, préfets, maires).\n\nUn décret contraire à une loi peut être annulé par le juge."
    },
    {
      title: "Droit public et droit privé",
      text: "Le droit se divise en deux grandes branches :\n\n- le **droit privé** règle les relations entre **personnes privées** : droit civil (famille, contrats, propriété), droit du travail, droit commercial, droit pénal (souvent rattaché au privé) ;\n- le **droit public** règle l'organisation de l'**État** et ses relations avec les citoyens : droit constitutionnel, droit administratif, droit fiscal.\n\nLe **Code civil** de **1804**, dit « Code Napoléon », reste le texte fondateur du droit privé français."
    },
    {
      title: "Deux ordres de juridictions",
      text: "La France a une particularité : deux ordres de tribunaux séparés.\n\n- L'**ordre judiciaire** juge les litiges entre particuliers et les infractions pénales. Au sommet : la **Cour de cassation**.\n- L'**ordre administratif** juge les litiges avec l'**administration** (un permis refusé, une décision d'une mairie…). Au sommet : le **Conseil d'État**.\n\nEn cas de doute sur l'ordre compétent, c'est le **Tribunal des conflits** qui tranche. On peut généralement faire **appel** d'un jugement devant une **cour d'appel**, puis former un pourvoi en cassation, où l'on ne rejuge pas les faits mais seulement l'application du droit."
    },
    {
      title: "Les infractions pénales",
      text: "Le droit pénal classe les infractions en trois catégories, selon leur gravité :\n\n- les **contraventions** (excès de vitesse léger, tapage) : jugées par le **tribunal de police** ;\n- les **délits** (vol, conduite en état d'ivresse) : jugés par le **tribunal correctionnel** ;\n- les **crimes** (meurtre, viol) : jugés par la **cour d'assises**, avec des **jurés** citoyens tirés au sort, ou par la cour criminelle départementale pour certains crimes.\n\nLa **peine de mort** a été abolie en France en **1981**, à l'initiative du garde des Sceaux **Robert Badinter**."
    },
    {
      title: "Les grands principes",
      text: "- **La présomption d'innocence** : toute personne est présumée innocente tant que sa culpabilité n'a pas été établie.\n- **La légalité des délits et des peines** : on ne peut être puni que pour un acte prévu par la loi au moment des faits (*nullum crimen sine lege*).\n- **La non-rétroactivité** de la loi pénale plus sévère.\n- **Le droit à un procès équitable** et à un avocat.\n- **« Nul n'est censé ignorer la loi »** : on ne peut pas se défendre en disant qu'on ne la connaissait pas."
    }
  ],
  funFact: "Le site officiel **Légifrance** publie gratuitement l'ensemble des lois, codes et décisions de justice. Il existe plus de **70 codes** en vigueur en France : code civil, code pénal, code du travail, code de la route…",
  keyPoints: [
    "Hiérarchie des normes (Kelsen) : Constitution > traités > lois > règlements.",
    "Droit privé (relations entre particuliers) et droit public (État et administration).",
    "Ordre judiciaire (Cour de cassation) et ordre administratif (Conseil d'État).",
    "Contraventions, délits, crimes ; peine de mort abolie en 1981 (Badinter).",
    "Grands principes : présomption d'innocence, légalité des peines, procès équitable."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle norme est au sommet de la hiérarchie en droit français ?",
      options: ["La loi", "Le décret", "La Constitution", "Le Code civil"],
      answer: 2,
      explanation: "Toutes les autres normes doivent la respecter."
    },
    {
      type: "qcm",
      question: "Quelle juridiction est au sommet de l'ordre administratif ?",
      options: ["La Cour de cassation", "Le Conseil d'État", "Le Conseil constitutionnel", "La cour d'assises"],
      answer: 1,
      explanation: "La Cour de cassation est au sommet de l'ordre judiciaire."
    },
    {
      type: "qcm",
      question: "Quelle juridiction juge les crimes, avec des jurés tirés au sort ?",
      options: ["Le tribunal de police", "Le tribunal correctionnel", "La cour d'assises", "Le tribunal administratif"],
      answer: 2,
      explanation: "Les jurés sont des citoyens tirés au sort sur les listes électorales."
    },
    {
      type: "vf",
      question: "Un vol est classé comme un délit.",
      answer: true,
      explanation: "Vrai : il relève du tribunal correctionnel (sauf circonstances aggravantes graves, comme un vol à main armée, qui est un crime)."
    },
    {
      type: "qcm",
      question: "En quelle année la peine de mort a-t-elle été abolie en France ?",
      options: ["1945", "1958", "1981", "2007"],
      answer: 2,
      explanation: "Sous l'impulsion de Robert Badinter. Son abolition est inscrite dans la Constitution depuis 2007."
    }
  ]
});
