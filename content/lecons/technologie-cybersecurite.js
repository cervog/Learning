registerLesson({
  id: "technologie-cybersecurite",
  theme: "technologie",
  title: "La cybersécurité",
  subtitle: "Comprendre les menaces numériques et s'en protéger",
  minutes: 6,
  intro: "Hôpitaux paralysés, comptes piratés, données volées : les cyberattaques sont devenues l'une des principales menaces pour les entreprises, les États et les particuliers. Voici l'essentiel pour comprendre et se protéger.",
  sections: [
    {
      title: "Les principales menaces",
      text: "- **L'hameçonnage** (*phishing*) : un faux message (e-mail, SMS) imitant une banque, un service de livraison ou l'administration pour vous faire cliquer sur un lien et voler vos identifiants. C'est la menace la plus répandue.\n- **Le rançongiciel** (*ransomware*) : un logiciel qui **chiffre** les fichiers d'une organisation et exige une **rançon** pour les débloquer. Des hôpitaux et des collectivités en ont été victimes.\n- **Les virus et logiciels espions**, qui infectent un appareil.\n- **Les fuites de données** : des millions de mots de passe ou de numéros de clients volés et revendus.\n- **L'attaque par déni de service** (DDoS) : saturer un site de requêtes pour le rendre inaccessible."
    },
    {
      title: "L'ingénierie sociale",
      text: "La plupart des attaques ne commencent pas par une prouesse technique, mais par la **manipulation d'un humain** : c'est l'**ingénierie sociale**. Les pirates jouent sur l'**urgence** (« votre compte sera bloqué dans 24 h »), l'**autorité** (un faux PDG qui demande un virement urgent) ou la **curiosité**.\n\nL'**arnaque au président** et l'**arnaque au faux conseiller bancaire** coûtent chaque année des millions d'euros. Règle d'or : une banque ou une administration ne vous demandera **jamais** votre mot de passe ou un code de validation par téléphone ou par e-mail."
    },
    {
      title: "Les bons réflexes",
      text: "- Utiliser des **mots de passe longs et différents** pour chaque service, idéalement avec un **gestionnaire de mots de passe**.\n- Activer la **double authentification** (un code envoyé sur le téléphone ou une application en plus du mot de passe) : elle bloque la grande majorité des piratages de comptes.\n- Faire les **mises à jour** de ses appareils et applications, qui corrigent des failles de sécurité.\n- **Vérifier l'expéditeur** et ne pas cliquer sur un lien douteux ; en cas de doute, aller directement sur le site officiel.\n- Faire des **sauvegardes** régulières, déconnectées, pour pouvoir récupérer ses fichiers.\n- Se méfier des réseaux **Wi-Fi publics**."
    },
    {
      title: "Une guerre invisible",
      text: "Les États mènent aussi des opérations dans le **cyberespace** : espionnage, sabotage, désinformation. Exemples célèbres :\n\n- **Stuxnet** (révélé en 2010), un virus attribué aux États-Unis et à Israël, qui a saboté des centrifugeuses du programme nucléaire iranien ;\n- **NotPetya** (2017), une attaque attribuée à la Russie qui visait l'Ukraine et a paralysé des entreprises dans le monde entier (Maersk, Saint-Gobain…).\n\nEn France, l'**ANSSI** (Agence nationale de la sécurité des systèmes d'information) protège les infrastructures sensibles, et l'armée dispose d'un **Commandement de la cyberdéfense**."
    },
    {
      title: "Que faire si l'on est victime ?",
      text: "En France, le site officiel **cybermalveillance.gouv.fr** aide les particuliers et les entreprises victimes à réagir. Quelques réflexes :\n\n- changer immédiatement ses **mots de passe** et prévenir sa **banque** en cas de fraude bancaire ;\n- **ne jamais payer** une rançon, ce qui ne garantit pas de récupérer ses données et finance les criminels ;\n- **porter plainte** auprès de la police ou de la gendarmerie ;\n- signaler les sites et messages frauduleux sur la plateforme **Pharos** ou au **33700** pour les SMS indésirables."
    }
  ],
  funFact: "Pendant des années, l'un des mots de passe les plus utilisés au monde a été… « **123456** ». Un pirate peut le trouver en moins d'une seconde.",
  keyPoints: [
    "Menaces principales : hameçonnage, rançongiciels, fuites de données, déni de service.",
    "L'ingénierie sociale manipule l'humain (urgence, autorité) : une banque ne demande jamais vos codes.",
    "Bons réflexes : mots de passe uniques, double authentification, mises à jour, sauvegardes.",
    "Les États se livrent une cyberguerre (Stuxnet, NotPetya) ; l'ANSSI protège la France.",
    "En cas d'attaque : cybermalveillance.gouv.fr, ne pas payer de rançon, porter plainte."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qu'est-ce que l'hameçonnage (phishing) ?",
      options: ["Un virus qui détruit l'ordinateur", "Un faux message destiné à voler vos identifiants", "Une technique de pêche numérique légale", "Une mise à jour de sécurité"],
      answer: 1,
      explanation: "C'est la menace la plus répandue."
    },
    {
      type: "qcm",
      question: "Que fait un rançongiciel ?",
      options: ["Il chiffre vos fichiers et exige une rançon", "Il accélère votre ordinateur", "Il protège vos données", "Il envoie des publicités"],
      answer: 0,
      explanation: "Il ne faut jamais payer la rançon."
    },
    {
      type: "qcm",
      question: "Quelle mesure bloque la grande majorité des piratages de comptes ?",
      options: ["Changer de navigateur", "La double authentification", "Éteindre son ordinateur la nuit", "Utiliser le même mot de passe partout"],
      answer: 1,
      explanation: "Un second facteur en plus du mot de passe."
    },
    {
      type: "vf",
      question: "Votre banque peut vous demander votre mot de passe par e-mail.",
      answer: false,
      explanation: "Faux : une banque ne le demande jamais. C'est le signe d'une arnaque."
    },
    {
      type: "qcm",
      question: "Quel virus a saboté des centrifugeuses du programme nucléaire iranien ?",
      options: ["WannaCry", "Stuxnet", "NotPetya", "I Love You"],
      answer: 1,
      explanation: "Révélé en 2010."
    }
  ]
});
