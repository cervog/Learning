registerLesson({
  id: "sciences-effet-de-serre",
  theme: "sciences",
  title: "L'effet de serre et le réchauffement climatique",
  subtitle: "Un phénomène naturel amplifié par l'homme",
  minutes: 7,
  intro: "Sans effet de serre, la Terre serait une boule de glace à **−18 °C**. Avec trop d'effet de serre, elle surchauffe. Comprendre ce mécanisme, c'est comprendre l'un des grands défis du siècle.",
  sections: [
    {
      title: "Un phénomène naturel et vital",
      text: "Le Soleil chauffe la surface de la Terre, qui renvoie une partie de cette énergie sous forme de **rayonnement infrarouge** (de la chaleur). Certains gaz de l'atmosphère **absorbent** ce rayonnement et le renvoient en partie vers le sol, comme les vitres d'une serre : c'est l'**effet de serre**.\n\nGrâce à lui, la température moyenne de la Terre est d'environ **+15 °C** au lieu de −18 °C. Sans lui, la vie telle que nous la connaissons serait impossible."
    },
    {
      title: "Les gaz à effet de serre",
      text: "- La **vapeur d'eau** est le principal gaz à effet de serre naturel.\n- Le **dioxyde de carbone** (CO₂) : émis par la combustion du **charbon**, du **pétrole** et du **gaz**, et par la déforestation. Il reste des siècles dans l'atmosphère.\n- Le **méthane** (CH₄) : élevage des ruminants, rizières, décharges, fuites de gaz. Bien plus puissant que le CO₂, mais qui reste moins longtemps.\n- Le **protoxyde d'azote** (N₂O) : engrais agricoles.\n\nLa concentration de CO₂ est passée d'environ **280 ppm** (parties par million) avant la révolution industrielle à plus de **420 ppm** aujourd'hui, un niveau inédit depuis des millions d'années."
    },
    {
      title: "Une découverte ancienne",
      text: "Dès **1824**, le Français **Joseph Fourier** décrit le rôle de l'atmosphère dans le maintien de la chaleur terrestre. En **1856**, l'Américaine **Eunice Foote** montre que le CO₂ retient la chaleur, et l'Irlandais **John Tyndall** le mesure précisément en 1859.\n\nEn **1896**, le Suédois **Svante Arrhenius** calcule que doubler le CO₂ réchaufferait la planète de plusieurs degrés. Depuis 1958, la **courbe de Keeling**, mesurée à Hawaï, montre la hausse continue du CO₂ dans l'air."
    },
    {
      title: "Les conséquences",
      text: "Le **GIEC** (Groupe d'experts intergouvernemental sur l'évolution du climat), créé en **1988**, établit que le réchauffement actuel est **sans équivoque d'origine humaine**. La Terre s'est réchauffée d'environ **1,2 à 1,3 °C** depuis l'ère préindustrielle. Conséquences :\n\n- vagues de chaleur, sécheresses et incendies plus fréquents ;\n- fonte des glaciers et des calottes polaires ;\n- **montée du niveau des mers** (environ 20 cm depuis 1900) ;\n- acidification des océans, menaces sur la biodiversité (coraux) ;\n- pluies extrêmes et inondations."
    },
    {
      title: "Que faire ?",
      text: "L'**Accord de Paris** (**2015**) vise à limiter le réchauffement « nettement en dessous de 2 °C », si possible à **1,5 °C**. Pour cela, il faut atteindre la **neutralité carbone** vers le milieu du siècle : ne pas émettre plus de CO₂ que ce que la nature et les technologies peuvent absorber.\n\nLes leviers : réduire l'usage des **énergies fossiles** (électricité bas-carbone, transports électriques, isolation des bâtiments), lutter contre la **déforestation**, changer certaines habitudes de consommation. Il faut aussi s'**adapter** aux changements déjà inévitables."
    }
  ],
  funFact: "Le **méthane** émis par les ruminants vient surtout de leurs **rots**, et non de leurs flatulences comme on le croit souvent : il est produit par la fermentation dans leur estomac.",
  keyPoints: [
    "L'effet de serre est naturel et vital : sans lui, la Terre serait à −18 °C.",
    "Principaux gaz : vapeur d'eau, CO₂, méthane, protoxyde d'azote.",
    "Le CO₂ est passé de 280 ppm à plus de 420 ppm à cause des énergies fossiles.",
    "Découvert par Fourier (1824), Foote, Tyndall et Arrhenius ; le GIEC est créé en 1988.",
    "Accord de Paris (2015) : limiter le réchauffement à 1,5–2 °C, neutralité carbone."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quelle serait la température moyenne de la Terre sans effet de serre ?",
      options: ["+30 °C", "+15 °C", "0 °C", "−18 °C"],
      answer: 3,
      explanation: "Elle est d'environ +15 °C grâce à l'effet de serre naturel."
    },
    {
      type: "qcm",
      question: "Quelle est la principale source d'émissions de CO₂ d'origine humaine ?",
      options: ["La respiration humaine", "La combustion des énergies fossiles", "Les volcans", "Les océans"],
      answer: 1,
      explanation: "Charbon, pétrole et gaz."
    },
    {
      type: "vf",
      question: "L'effet de serre est un phénomène entièrement créé par l'homme.",
      answer: false,
      explanation: "Faux : il est naturel. C'est son renforcement par les activités humaines qui pose problème."
    },
    {
      type: "qcm",
      question: "Que signifie GIEC ?",
      options: ["Groupe international des énergies carbonées", "Groupe d'experts intergouvernemental sur l'évolution du climat", "Gouvernement européen du climat", "Grand institut d'études climatiques"],
      answer: 1,
      explanation: "Créé en 1988 sous l'égide de l'ONU."
    },
    {
      type: "qcm",
      question: "Quel objectif fixe l'Accord de Paris de 2015 ?",
      options: ["Arrêter totalement le réchauffement en 2020", "Limiter le réchauffement nettement en dessous de 2 °C, si possible à 1,5 °C", "Interdire le pétrole", "Refroidir la planète de 1 °C"],
      answer: 1,
      explanation: "Il a été adopté lors de la COP21 à Paris."
    }
  ]
});
