registerLesson({
  id: "sciences-evolution",
  theme: "sciences",
  title: "Darwin et la théorie de l'évolution",
  subtitle: "Comment les espèces se transforment au fil des générations",
  minutes: 7,
  intro: "Pourquoi existe-t-il des millions d'espèces si différentes ? En 1859, un naturaliste anglais propose une réponse qui va bouleverser la biologie : la **sélection naturelle**.",
  sections: [
    {
      title: "Le voyage du Beagle",
      text: "**Charles Darwin** (1809–1882) embarque à 22 ans sur le navire **HMS Beagle** pour un tour du monde de cinq ans (**1831–1836**). Il observe fossiles, plantes et animaux.\n\nAux îles **Galápagos** (Équateur), il remarque que des oiseaux proches — les fameux « pinsons de Darwin » — ont des becs différents selon l'île et la nourriture disponible. Une question l'obsède : et si les espèces n'étaient pas fixes, mais se transformaient ?"
    },
    {
      title: "La sélection naturelle",
      text: "En **1859**, Darwin publie **L'Origine des espèces**. Son raisonnement tient en quatre idées :\n\n- **Variation** : les individus d'une même espèce sont tous un peu différents.\n- **Hérédité** : une partie de ces différences se transmet aux descendants.\n- **Lutte pour l'existence** : il naît plus d'individus que le milieu ne peut en nourrir.\n- **Survie différentielle** : ceux dont les caractères sont avantageux dans leur milieu survivent et se reproduisent davantage.\n\nAu fil des générations, les caractères avantageux se répandent : l'espèce se transforme. Le naturaliste **Alfred Russel Wallace** était arrivé indépendamment aux mêmes conclusions ; leurs travaux sont présentés ensemble en 1858."
    },
    {
      title: "La théorie aujourd'hui",
      text: "Darwin ignorait comment les caractères se transmettaient. La réponse vient de la **génétique**, initiée par **Gregor Mendel** (1865) et redécouverte vers 1900. Au XXe siècle, la **théorie synthétique de l'évolution** réunit Darwin et la génétique : les variations proviennent de **mutations** de l'ADN et de la recombinaison des gènes.\n\nD'autres mécanismes s'ajoutent à la sélection naturelle, comme la **dérive génétique** (le hasard qui modifie la fréquence des gènes, surtout dans les petites populations)."
    },
    {
      title: "Trois idées fausses",
      text: "- **« L'homme descend du singe »** : non, l'homme et les chimpanzés actuels partagent un **ancêtre commun** qui vivait il y a environ 6 à 7 millions d'années. Ce sont des « cousins ».\n- **« L'évolution a un but »** : non, elle n'a pas de direction prédéfinie ; elle répond aux pressions du milieu.\n- **« La loi du plus fort »** : l'expression « survie du plus apte » (de Herbert Spencer) désigne le **mieux adapté** à son environnement, pas le plus fort."
    },
    {
      title: "Les preuves",
      text: "L'évolution est soutenue par de multiples indices convergents : les **fossiles** (formes de transition comme *Archaeopteryx*, entre dinosaures et oiseaux), l'**anatomie comparée** (le bras humain, l'aile de chauve-souris et la nageoire de baleine ont les mêmes os), la comparaison de l'**ADN** entre espèces…\n\nOn l'observe même en direct : l'apparition de **bactéries résistantes aux antibiotiques** est un exemple de sélection naturelle à l'œuvre en quelques années."
    }
  ],
  funFact: "Darwin a attendu plus de **20 ans** avant de publier sa théorie, conscient du scandale qu'elle allait provoquer. C'est la lettre de Wallace, en 1858, qui l'a poussé à se décider.",
  keyPoints: [
    "Darwin publie L'Origine des espèces en 1859, après le voyage du Beagle (1831–1836).",
    "Sélection naturelle : variation + hérédité + lutte pour l'existence → les mieux adaptés se reproduisent davantage.",
    "Wallace est le co-découvreur de la sélection naturelle.",
    "La génétique (Mendel, ADN, mutations) explique l'origine des variations.",
    "L'homme ne descend pas du singe actuel : il partage un ancêtre commun avec les chimpanzés."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel ouvrage Darwin publie-t-il en 1859 ?",
      options: ["Le Capital", "L'Origine des espèces", "Principia Mathematica", "Le Discours de la méthode"],
      answer: 1,
      explanation: "L'Origine des espèces expose la théorie de la sélection naturelle."
    },
    {
      type: "qcm",
      question: "Dans quel archipel Darwin observe-t-il ses célèbres pinsons ?",
      options: ["Les Galápagos", "Les Canaries", "Hawaï", "Les Açores"],
      answer: 0,
      explanation: "Aux Galápagos, les becs des pinsons varient selon l'île et la nourriture."
    },
    {
      type: "vf",
      question: "Selon la théorie de l'évolution, l'homme descend du chimpanzé.",
      answer: false,
      explanation: "Faux : l'homme et le chimpanzé partagent un ancêtre commun, il y a environ 6 à 7 millions d'années."
    },
    {
      type: "qcm",
      question: "Qui a découvert la sélection naturelle indépendamment de Darwin ?",
      options: ["Lamarck", "Mendel", "Alfred Russel Wallace", "Pasteur"],
      answer: 2,
      explanation: "Wallace et Darwin présentent leurs travaux ensemble en 1858."
    },
    {
      type: "qcm",
      question: "Quel phénomène actuel illustre la sélection naturelle ?",
      options: ["La rotation de la Terre", "La résistance des bactéries aux antibiotiques", "Les marées", "La photosynthèse"],
      answer: 1,
      explanation: "Les bactéries résistantes survivent au traitement et se multiplient."
    },
    {
      type: "vf",
      question: "« Survie du plus apte » signifie survie du plus fort physiquement.",
      answer: false,
      explanation: "Faux : il s'agit du mieux adapté à son environnement."
    }
  ]
});
