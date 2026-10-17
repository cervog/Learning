registerLesson({
  id: "arts-musique-classique",
  theme: "arts",
  title: "Bach, Mozart, Beethoven",
  subtitle: "Trois géants et trois époques de la musique classique",
  minutes: 7,
  intro: "On dit « musique classique » pour tout ce qui est joué par un orchestre. Mais derrière ce mot se cachent plusieurs époques. Découvrons-les à travers trois compositeurs incontournables.",
  sections: [
    {
      title: "Les grandes périodes",
      text: "- **Musique baroque** (vers 1600–1750) : ornements, contrastes, basse continue. Vivaldi, Haendel, **Bach**.\n- **Période classique** (vers 1750–1820) : clarté, équilibre, élégance. Haydn, **Mozart**, le jeune **Beethoven**.\n- **Romantisme** (XIXe siècle) : expression des émotions et de l'individu. Chopin, Schubert, Liszt, Wagner, Tchaïkovski…\n\nAu sens strict, la musique « classique » ne désigne donc que la période de Haydn et Mozart."
    },
    {
      title: "Jean-Sébastien Bach (1685–1750)",
      text: "Organiste et maître de chapelle allemand, longtemps à **Leipzig**, Bach a composé plus de **1 000 œuvres** : cantates, *Passion selon saint Matthieu*, *Concertos brandebourgeois*, *Le Clavier bien tempéré*, *Toccata et fugue en ré mineur*…\n\nIl est le maître du **contrepoint** : plusieurs mélodies indépendantes qui s'entrelacent harmonieusement, comme dans la **fugue**. Un peu oublié après sa mort, il est redécouvert en 1829 grâce à Mendelssohn. Il est aujourd'hui considéré comme l'un des plus grands compositeurs de tous les temps."
    },
    {
      title: "Wolfgang Amadeus Mozart (1756–1791)",
      text: "Né à **Salzbourg** (Autriche), Mozart est un **enfant prodige** : il compose dès l'âge de 5 ans et parcourt l'Europe pour se produire devant les cours royales.\n\nEn seulement **35 ans de vie**, il compose plus de 600 œuvres dans tous les genres : 41 symphonies, des concertos, de la musique de chambre et des opéras célèbres — *Les Noces de Figaro*, *Don Giovanni*, ***La Flûte enchantée***. Son ***Requiem***, inachevé, a nourri bien des légendes.\n\nLa rivalité avec Salieri popularisée par le film ***Amadeus*** (1984) est largement exagérée."
    },
    {
      title: "Ludwig van Beethoven (1770–1827)",
      text: "Né à **Bonn** et installé à **Vienne**, Beethoven fait le pont entre classicisme et **romantisme**. Il commence à perdre l'audition vers 28 ans et devient **presque totalement sourd** : il compose pourtant ses plus grandes œuvres en entendant la musique « dans sa tête ».\n\nOn lui doit **9 symphonies** — la **5e** et ses quatre notes célèbres « ta-ta-ta-taaa », la **9e** dont le final, l'***Hymne à la joie***, est devenu l'**hymne européen** — ainsi que la sonate *Clair de lune* et *La Lettre à Élise*."
    },
    {
      title: "L'orchestre symphonique",
      text: "Un orchestre symphonique réunit souvent **60 à 100 musiciens**, en quatre familles :\n\n- les **cordes** (violons, altos, violoncelles, contrebasses), les plus nombreuses, devant ;\n- les **bois** (flûtes, hautbois, clarinettes, bassons) ;\n- les **cuivres** (cors, trompettes, trombones, tuba) ;\n- les **percussions** (timbales, cymbales…), au fond.\n\nLe **chef d'orchestre** donne le tempo et l'interprétation. Le **premier violon** (le *Konzertmeister*) donne le *la* pour l'accord."
    }
  ],
  funFact: "À 14 ans, Mozart entend à la chapelle Sixtine le ***Miserere*** d'Allegri, une œuvre dont la partition était secrète et réservée au Vatican. Il la retranscrit **entièrement de mémoire** après une seule écoute (ou deux, selon les versions).",
  keyPoints: [
    "Trois grandes périodes : baroque (Bach), classique (Mozart), romantique (Chopin, Wagner…).",
    "Bach : maître du contrepoint et de la fugue, plus de 1 000 œuvres.",
    "Mozart : enfant prodige de Salzbourg, mort à 35 ans, La Flûte enchantée, Requiem.",
    "Beethoven : devenu sourd, 9 symphonies ; l'Hymne à la joie est l'hymne européen.",
    "L'orchestre : cordes, bois, cuivres, percussions."
  ],
  quiz: [
    {
      type: "qcm",
      question: "À quelle période musicale appartient Jean-Sébastien Bach ?",
      options: ["Baroque", "Classique", "Romantique", "Moderne"],
      answer: 0,
      explanation: "Il est mort en 1750, date qui marque traditionnellement la fin de l'ère baroque."
    },
    {
      type: "qcm",
      question: "Quelle œuvre de Beethoven est devenue l'hymne européen ?",
      options: ["La Lettre à Élise", "L'Hymne à la joie (9e symphonie)", "La 5e symphonie", "La sonate Clair de lune"],
      answer: 1,
      explanation: "Le final de sa 9e symphonie."
    },
    {
      type: "vf",
      question: "Beethoven est devenu presque totalement sourd mais a continué à composer.",
      answer: true,
      explanation: "Vrai : la 9e symphonie a été composée alors qu'il était quasiment sourd."
    },
    {
      type: "qcm",
      question: "Dans quelle ville est né Mozart ?",
      options: ["Vienne", "Salzbourg", "Leipzig", "Bonn"],
      answer: 1,
      explanation: "À Salzbourg, en 1756."
    },
    {
      type: "qcm",
      question: "Quelle famille d'instruments est la plus nombreuse dans un orchestre symphonique ?",
      options: ["Les cuivres", "Les bois", "Les cordes", "Les percussions"],
      answer: 2,
      explanation: "Violons, altos, violoncelles et contrebasses."
    }
  ]
});
