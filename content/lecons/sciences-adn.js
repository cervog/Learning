registerLesson({
  id: "sciences-adn",
  theme: "sciences",
  title: "L'ADN, le code de la vie",
  subtitle: "Comment une molécule contient les instructions de tout être vivant",
  minutes: 7,
  intro: "Chacune de vos cellules contient environ **2 mètres** d'une molécule extraordinaire, repliée dans un noyau minuscule. Elle porte toutes les instructions pour vous construire : l'**ADN**.",
  sections: [
    {
      title: "Une double hélice",
      text: "L'**ADN** (acide désoxyribonucléique) a la forme d'une **double hélice**, comme une échelle torsadée. Sa structure est décrite en **1953** par **James Watson** et **Francis Crick**, en s'appuyant notamment sur les images aux rayons X de **Rosalind Franklin**. Watson, Crick et Maurice Wilkins reçoivent le prix Nobel en 1962 ; Franklin, morte en 1958, n'est pas récompensée.\n\nLes « barreaux » de l'échelle sont formés de quatre molécules appelées **bases** : **A** (adénine), **T** (thymine), **G** (guanine) et **C** (cytosine). Elles s'associent toujours par paires : **A avec T**, **G avec C**."
    },
    {
      title: "Gènes et protéines",
      text: "L'ordre des bases forme un **code**, comme les lettres d'un texte. Un **gène** est une portion d'ADN qui contient la « recette » d'une **protéine**. Les protéines font presque tout le travail dans le corps : elles construisent les tissus, transportent l'oxygène (l'hémoglobine), digèrent les aliments (les enzymes)…\n\nPour fabriquer une protéine, le gène est d'abord recopié en **ARN messager**, qui sort du noyau et est lu par les **ribosomes**."
    },
    {
      title: "Le génome humain",
      text: "L'ensemble de notre ADN s'appelle le **génome**. Il compte environ **3 milliards de paires de bases** et seulement **20 000 gènes** environ — bien moins qu'on ne l'imaginait. Il a été séquencé (lu en entier) par le **Projet génome humain**, achevé en **2003**.\n\nL'ADN est rangé dans **46 chromosomes** (23 paires) : la moitié vient de la mère, l'autre du père. Deux humains partagent environ **99,9 %** de leur ADN."
    },
    {
      title: "Mutations et hérédité",
      text: "Lors de la copie de l'ADN, des erreurs peuvent se produire : ce sont les **mutations**. La plupart sont sans effet, certaines provoquent des maladies, d'autres apportent un avantage : elles sont le moteur de l'**évolution**.\n\nC'est le moine **Gregor Mendel** qui, en croisant des **petits pois** dans les années 1860, a découvert les lois de l'hérédité, bien avant que l'on connaisse l'ADN."
    },
    {
      title: "Des applications révolutionnaires",
      text: "- **Police scientifique** : l'empreinte génétique identifie une personne à partir d'un cheveu ou d'une goutte de sang.\n- **Médecine** : tests génétiques, thérapies géniques, vaccins à ARN messager.\n- **CRISPR-Cas9** : des « ciseaux moléculaires » qui permettent de modifier l'ADN avec précision. La Française **Emmanuelle Charpentier** et l'Américaine **Jennifer Doudna** ont reçu le **prix Nobel de chimie 2020** pour cette découverte.\n\nCes progrès soulèvent des questions éthiques importantes, notamment sur la modification de l'ADN des embryons humains."
    }
  ],
  funFact: "Nous partageons environ **98 à 99 %** de notre ADN avec le chimpanzé… et environ **60 %** de nos gènes ont un équivalent chez la banane !",
  keyPoints: [
    "L'ADN est une double hélice (Watson et Crick, 1953, grâce aux images de Rosalind Franklin).",
    "Quatre bases : A, T, G, C, appariées A–T et G–C.",
    "Un gène est une portion d'ADN codant une protéine.",
    "Le génome humain : environ 3 milliards de paires de bases, 20 000 gènes, 46 chromosomes.",
    "CRISPR-Cas9 permet d'éditer l'ADN (Nobel 2020 : Charpentier et Doudna)."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle forme a la molécule d'ADN ?",
      options: ["Une sphère", "Une double hélice", "Un triangle", "Une simple chaîne droite"],
      answer: 1,
      explanation: "Décrite par Watson et Crick en 1953."
    },
    {
      type: "qcm",
      question: "Avec quelle base l'adénine (A) s'apparie-t-elle ?",
      options: ["La guanine (G)", "La cytosine (C)", "La thymine (T)", "Une autre adénine"],
      answer: 2,
      explanation: "Les paires sont toujours A–T et G–C."
    },
    {
      type: "qcm",
      question: "Combien de chromosomes possède une cellule humaine ordinaire ?",
      options: ["23", "46", "64", "100"],
      answer: 1,
      explanation: "46 chromosomes, soit 23 paires."
    },
    {
      type: "vf",
      question: "Rosalind Franklin a reçu le prix Nobel pour la découverte de la structure de l'ADN.",
      answer: false,
      explanation: "Faux : ses images ont été décisives, mais elle est morte en 1958, avant le Nobel de 1962."
    },
    {
      type: "qcm",
      question: "À quoi sert CRISPR-Cas9 ?",
      options: ["À dater les fossiles", "À modifier l'ADN avec précision", "À observer les étoiles", "À fabriquer des vaccins classiques"],
      answer: 1,
      explanation: "Ce sont des « ciseaux moléculaires » capables d'éditer le génome."
    },
    {
      type: "qcm",
      question: "Qui a découvert les lois de l'hérédité en croisant des petits pois ?",
      options: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "Francis Crick"],
      answer: 2,
      explanation: "Le moine Gregor Mendel, dans les années 1860."
    }
  ]
});
