registerLesson({
  id: "philo-descartes",
  theme: "philosophie",
  title: "Descartes : « Je pense, donc je suis »",
  subtitle: "Douter de tout pour trouver une vérité certaine",
  minutes: 6,
  intro: "Et si tout ce que vous croyez savoir était faux ? C'est la question vertigineuse que se pose **René Descartes**, l'un des pères de la philosophie moderne.",
  sections: [
    {
      title: "Un esprit scientifique",
      text: "**René Descartes** (1596–1650) est un philosophe, mathématicien et physicien français. Il vit une grande partie de sa vie aux **Provinces-Unies** (Pays-Bas), plus tolérantes.\n\nEn **1637**, il publie le **Discours de la méthode**, écrit **en français** et non en latin, la langue savante de l'époque : il veut être lu par tous ceux qui ont du « bon sens », qui est selon lui « la chose du monde la mieux partagée »."
    },
    {
      title: "Le doute méthodique",
      text: "Descartes veut reconstruire le savoir sur des bases solides. Pour cela, il décide de **douter de tout** ce qui peut l'être, au moins une fois dans sa vie :\n\n- **les sens** nous trompent parfois (un bâton plongé dans l'eau paraît brisé) ;\n- je peux **rêver** sans le savoir ;\n- et si un **« malin génie »** tout-puissant me trompait même sur 2 + 3 = 5 ?\n\nCe doute n'est pas sceptique : c'est un **outil** pour trouver ce qui résiste à tout doute."
    },
    {
      title: "Le cogito",
      text: "Au milieu de ce doute radical, une certitude surgit : **même si je me trompe sur tout, pour me tromper, il faut que je pense ; et pour penser, il faut que j'existe.**\n\nD'où la célèbre formule « **Je pense, donc je suis** » (*cogito, ergo sum* en latin), dans le *Discours de la méthode*. Il la développe dans les *Méditations métaphysiques* (**1641**). C'est la **première vérité** indubitable sur laquelle bâtir tout le reste."
    },
    {
      title: "Les quatre règles de la méthode",
      text: "- **Évidence** : n'accepter comme vrai que ce qui est clair et distinct.\n- **Analyse** : diviser chaque difficulté en autant de parties que nécessaire.\n- **Ordre** : aller du plus simple au plus complexe.\n- **Dénombrement** : tout passer en revue pour ne rien oublier.\n\nCes règles ont profondément marqué la démarche scientifique — on parle d'« **esprit cartésien** » pour désigner une pensée rigoureuse et logique."
    },
    {
      title: "Âme, corps et mathématiques",
      text: "Descartes défend le **dualisme** : l'homme est composé de deux substances distinctes, l'**âme** (la pensée) et le **corps** (la matière étendue, qui fonctionne comme une machine). Il considère même les animaux comme des **« animaux-machines »**, une thèse très critiquée.\n\nEn mathématiques, il invente la **géométrie analytique** : repérer un point par des coordonnées sur des axes. On parle encore de **repère cartésien**.\n\nInvité par la **reine Christine de Suède**, il meurt à **Stockholm** en 1650."
    }
  ],
  funFact: "La reine Christine exigeait ses leçons de philosophie à **5 heures du matin**, dans le froid suédois. Descartes, habitué à rester au lit jusqu'à midi pour réfléchir, y contracta une pneumonie dont il mourut quelques mois plus tard.",
  keyPoints: [
    "Descartes (1596–1650) publie le Discours de la méthode en 1637, en français.",
    "Le doute méthodique : douter de tout (sens, rêve, malin génie) pour trouver une certitude.",
    "Première certitude : « Je pense, donc je suis » (cogito).",
    "Quatre règles : évidence, analyse, ordre, dénombrement.",
    "Dualisme âme/corps et invention du repère cartésien."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Dans quel ouvrage figure « Je pense, donc je suis » ?",
      options: ["Le Discours de la méthode", "Le Contrat social", "Les Pensées", "L'Éthique"],
      answer: 0,
      explanation: "Le Discours de la méthode (1637)."
    },
    {
      type: "qcm",
      question: "Pourquoi Descartes écrit-il le Discours de la méthode en français ?",
      options: ["Il ne parlait pas latin", "Pour être lu par tous ceux qui ont du bon sens", "Par ordre du roi", "Pour échapper à la censure"],
      answer: 1,
      explanation: "Il voulait s'adresser au plus grand nombre, pas seulement aux savants."
    },
    {
      type: "vf",
      question: "Le doute cartésien vise à prouver que rien n'est certain.",
      answer: false,
      explanation: "Faux : c'est un doute méthodique, un outil pour trouver une vérité indubitable."
    },
    {
      type: "qcm",
      question: "Qu'appelle-t-on le dualisme cartésien ?",
      options: ["La distinction entre le bien et le mal", "La distinction entre l'âme et le corps", "L'opposition entre raison et foi", "L'existence de deux dieux"],
      answer: 1,
      explanation: "L'âme (pensée) et le corps (matière) sont deux substances distinctes."
    },
    {
      type: "qcm",
      question: "Dans quelle ville Descartes est-il mort ?",
      options: ["Paris", "Amsterdam", "Stockholm", "Rome"],
      answer: 2,
      explanation: "À Stockholm en 1650, invité par la reine Christine de Suède."
    }
  ]
});
