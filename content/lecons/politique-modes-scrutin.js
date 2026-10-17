registerLesson({
  id: "politique-modes-scrutin",
  theme: "politique",
  title: "Les modes de scrutin",
  subtitle: "Majoritaire ou proportionnel : comment on transforme des voix en sièges",
  minutes: 6,
  intro: "Avec exactement les mêmes votes, deux systèmes électoraux différents peuvent donner des majorités opposées. Le choix du **mode de scrutin** est donc un enjeu politique majeur.",
  sections: [
    {
      title: "Le scrutin majoritaire",
      text: "Le candidat ou la liste qui obtient le **plus de voix** l'emporte et prend tout.\n\n- **À un tour** (Royaume-Uni, États-Unis) : celui qui arrive **en tête** est élu, même avec 30 % des voix. On l'appelle le « *first past the post* ».\n- **À deux tours** (France) : il faut la **majorité absolue** (plus de 50 %) au premier tour ; sinon, un second tour départage les candidats les mieux placés.\n\n**Avantages** : des **majorités stables**, un lien direct entre l'élu et sa circonscription. **Inconvénients** : les petits partis sont **sous-représentés**, et un parti peut obtenir la majorité des sièges avec une minorité des voix."
    },
    {
      title: "Le scrutin proportionnel",
      text: "Chaque liste obtient un **nombre de sièges proportionnel** à son nombre de voix. Avec 20 % des voix, on obtient environ 20 % des sièges.\n\nIl est utilisé dans de nombreux pays européens (Pays-Bas, Espagne, Israël…) et, en France, pour les **élections européennes** et en partie pour les élections régionales et municipales. Un **seuil** minimum est souvent fixé (5 % aux européennes en France) pour éviter un émiettement excessif.\n\n**Avantages** : une représentation **fidèle** de la diversité des opinions. **Inconvénients** : il est souvent difficile d'obtenir une majorité, ce qui oblige à des **coalitions** parfois instables."
    },
    {
      title: "Les systèmes mixtes",
      text: "Certains pays combinent les deux logiques. En **Allemagne**, chaque électeur dispose de **deux voix** : l'une pour élire un député de sa circonscription (au scrutin majoritaire), l'autre pour une liste de parti, qui détermine la répartition proportionnelle des sièges au **Bundestag**.\n\nD'autres systèmes existent, comme le **vote préférentiel** (en Irlande, en Australie) où l'électeur **classe** les candidats par ordre de préférence."
    },
    {
      title: "En France",
      text: "- **Élection présidentielle** : scrutin **majoritaire à deux tours**, au suffrage universel direct. Seuls les deux candidats arrivés en tête restent au second tour.\n- **Élections législatives** : scrutin **majoritaire à deux tours** dans **577 circonscriptions**. Pour se maintenir au second tour, un candidat doit obtenir au moins **12,5 % des inscrits**. La proportionnelle n'a été utilisée qu'une fois sous la Ve République, en **1986**.\n- **Élections européennes** : scrutin **proportionnel** sur une liste nationale.\n- **Élections municipales** : un système mixte qui donne une **prime majoritaire** (la moitié des sièges) à la liste arrivée en tête."
    },
    {
      title: "Les États-Unis et le collège électoral",
      text: "Le président américain n'est pas élu directement par le nombre total de voix. Dans chaque État, le candidat arrivé en tête remporte en général **tous les grands électeurs** de l'État. Il faut obtenir **270** grands électeurs sur 538 pour gagner.\n\nRésultat : un candidat peut être élu en ayant **moins de voix** que son adversaire au niveau national. C'est arrivé en **2000** (George W. Bush face à Al Gore) et en **2016** (Donald Trump face à Hillary Clinton)."
    }
  ],
  funFact: "Le mot « **gerrymandering** » désigne le découpage des circonscriptions pour favoriser un parti. Il vient du gouverneur américain **Elbridge Gerry** qui, en 1812, avait créé une circonscription si tordue qu'on la compara à une salamandre (*salamander*).",
  keyPoints: [
    "Scrutin majoritaire (à un ou deux tours) : des majorités stables, mais les petits partis sont sous-représentés.",
    "Scrutin proportionnel : représentation fidèle, mais coalitions souvent nécessaires.",
    "Systèmes mixtes : l'Allemagne et ses deux voix.",
    "En France : majoritaire à deux tours pour la présidentielle et les législatives, proportionnelle aux européennes.",
    "Aux États-Unis, le collège électoral peut élire un candidat minoritaire en voix (2000, 2016)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel mode de scrutin est utilisé pour les élections législatives en France ?",
      options: ["La proportionnelle intégrale", "Le scrutin majoritaire à deux tours", "Le scrutin majoritaire à un tour", "Le vote préférentiel"],
      answer: 1,
      explanation: "Dans 577 circonscriptions."
    },
    {
      type: "qcm",
      question: "Quel est le principal avantage du scrutin proportionnel ?",
      options: ["Il donne toujours une majorité stable", "Il représente fidèlement la diversité des opinions", "Il est plus rapide", "Il favorise les grands partis"],
      answer: 1,
      explanation: "Mais il oblige souvent à former des coalitions."
    },
    {
      type: "qcm",
      question: "Combien de grands électeurs faut-il pour être élu président des États-Unis ?",
      options: ["50", "270", "435", "538"],
      answer: 1,
      explanation: "Sur un total de 538."
    },
    {
      type: "vf",
      question: "Aux États-Unis, un candidat peut devenir président en ayant obtenu moins de voix que son adversaire.",
      answer: true,
      explanation: "Vrai : c'est arrivé en 2000 et en 2016."
    },
    {
      type: "qcm",
      question: "Quelles élections se font à la proportionnelle en France ?",
      options: ["La présidentielle", "Les législatives", "Les européennes", "Aucune"],
      answer: 2,
      explanation: "Sur une liste nationale, avec un seuil de 5 %."
    }
  ]
});
