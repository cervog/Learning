registerLesson({
  id: "arts-renaissance",
  theme: "arts",
  title: "La Renaissance italienne",
  subtitle: "Quand l'art redécouvre l'Antiquité et invente la perspective",
  minutes: 7,
  intro: "Aux XVe et XVIe siècles, l'Italie connaît une explosion artistique sans équivalent. Léonard, Michel-Ange, Raphaël… Bienvenue dans la **Renaissance**.",
  sections: [
    {
      title: "Une « renaissance » de quoi ?",
      text: "Le terme vient de l'italien *rinascita*, employé par **Giorgio Vasari** en 1550. Les artistes et lettrés pensent faire « renaître » la grandeur de l'**Antiquité gréco-romaine** après le Moyen Âge.\n\nCe mouvement s'appuie sur l'**humanisme**, qui place l'homme au centre de la réflexion et redécouvre les textes antiques. Il naît à **Florence**, riche cité de banquiers où la famille **Médicis** finance artistes et savants : c'est le **mécénat**."
    },
    {
      title: "Une révolution technique : la perspective",
      text: "Vers **1415**, l'architecte **Filippo Brunelleschi** met au point la **perspective linéaire** : les lignes parallèles convergent vers un **point de fuite**, donnant l'illusion de la profondeur sur une surface plane. **Leon Battista Alberti** la théorise en 1435 dans *De pictura*.\n\nBrunelleschi réalise aussi un exploit : le **dôme de la cathédrale de Florence** (Santa Maria del Fiore), construit sans échafaudage central à partir de 1420.\n\nLa **peinture à l'huile**, perfectionnée par les peintres flamands comme **Jan van Eyck**, se diffuse en Italie et permet nuances et transparences."
    },
    {
      title: "Les géants",
      text: "- **Sandro Botticelli** : *La Naissance de Vénus* (vers 1485), inspirée de la mythologie antique.\n- **Léonard de Vinci** (1452–1519) : peintre, ingénieur, anatomiste. *La Cène* (Milan) et *La Joconde* (Louvre), célèbre pour son **sfumato**, un modelé vaporeux sans contours nets.\n- **Michel-Ange** (1475–1564) : le *David* de marbre (1501–1504), les fresques du **plafond de la chapelle Sixtine** (1508–1512) au Vatican.\n- **Raphaël** (1483–1520) : *L'École d'Athènes*, où Platon et Aristote trônent au centre."
    },
    {
      title: "De Florence à Rome",
      text: "Au début du XVIe siècle, le centre de gravité se déplace vers **Rome**, où les papes (comme **Jules II**) commandent des chefs-d'œuvre pour affirmer leur puissance. C'est la **Haute Renaissance**.\n\nÀ **Venise**, une école privilégie la couleur et la lumière, avec **Titien**."
    },
    {
      title: "La diffusion en Europe",
      text: "L'**imprimerie** de **Gutenberg** (vers 1450) diffuse rapidement les idées humanistes. Les rois s'entichent de l'art italien : **François Ier** invite **Léonard de Vinci** en France, au **Clos Lucé près d'Amboise**, où il meurt en 1519 — c'est ainsi que *La Joconde* est restée en France.\n\nLes châteaux de la Loire, comme **Chambord**, portent la marque de cette influence."
    }
  ],
  funFact: "*La Joconde* est relativement petite : environ **77 × 53 cm**. Elle n'est devenue une superstar mondiale qu'après son **vol au Louvre en 1911** par un vitrier italien ; elle ne fut retrouvée que deux ans plus tard.",
  keyPoints: [
    "Renaissance : XVe–XVIe siècles, née à Florence, portée par l'humanisme et le mécénat des Médicis.",
    "Brunelleschi invente la perspective linéaire (vers 1415) et construit le dôme de Florence.",
    "Léonard de Vinci : La Joconde, La Cène, le sfumato.",
    "Michel-Ange : le David et le plafond de la chapelle Sixtine ; Raphaël : L'École d'Athènes.",
    "François Ier accueille Léonard de Vinci à Amboise, où il meurt en 1519."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Dans quelle ville naît la Renaissance italienne ?",
      options: ["Rome", "Venise", "Florence", "Milan"],
      answer: 2,
      explanation: "Florence, sous le mécénat des Médicis."
    },
    {
      type: "qcm",
      question: "Qui a peint le plafond de la chapelle Sixtine ?",
      options: ["Léonard de Vinci", "Raphaël", "Michel-Ange", "Botticelli"],
      answer: 2,
      explanation: "Michel-Ange, entre 1508 et 1512."
    },
    {
      type: "qcm",
      question: "Qu'est-ce que le sfumato ?",
      options: ["Une technique de sculpture", "Un modelé vaporeux sans contours nets", "Un type de fresque", "Un pigment rouge"],
      answer: 1,
      explanation: "Technique emblématique de Léonard de Vinci, visible dans La Joconde."
    },
    {
      type: "qcm",
      question: "Qui met au point la perspective linéaire vers 1415 ?",
      options: ["Filippo Brunelleschi", "Titien", "Giorgio Vasari", "Jan van Eyck"],
      answer: 0,
      explanation: "L'architecte florentin Brunelleschi, théorisée ensuite par Alberti."
    },
    {
      type: "vf",
      question: "Léonard de Vinci est mort en France, près d'Amboise.",
      answer: true,
      explanation: "Vrai : invité par François Ier, il meurt au Clos Lucé en 1519."
    },
    {
      type: "qcm",
      question: "Quelle œuvre de Raphaël montre Platon et Aristote au centre ?",
      options: ["La Naissance de Vénus", "L'École d'Athènes", "La Cène", "Le Printemps"],
      answer: 1,
      explanation: "L'École d'Athènes, fresque du Vatican (1509–1511)."
    }
  ]
});
