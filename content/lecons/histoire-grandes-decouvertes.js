registerLesson({
  id: "histoire-grandes-decouvertes",
  theme: "histoire",
  title: "Les grandes découvertes",
  subtitle: "Quand l'Europe partit à la conquête des océans",
  minutes: 7,
  intro: "À la fin du XVe siècle, des navigateurs européens se lancent sur des océans inconnus. En quelques décennies, ils changent la carte du monde… et le destin de continents entiers.",
  sections: [
    {
      title: "Pourquoi partir ?",
      text: "Les Européens cherchent une **route maritime vers l'Asie**, pour accéder directement aux **épices** (poivre, cannelle, girofle), à la soie et à l'or, sans passer par les intermédiaires arabes et vénitiens. La prise de Constantinople par les Ottomans en **1453** rend les routes terrestres plus difficiles.\n\nD'autres motivations s'y ajoutent : la soif de **gloire**, l'envie de répandre le **christianisme**, la curiosité scientifique."
    },
    {
      title: "Les outils de la navigation",
      text: "Ces voyages sont rendus possibles par des innovations :\n\n- la **caravelle**, navire léger et maniable, capable de remonter le vent ;\n- la **boussole**, venue de Chine, et l'**astrolabe**, pour calculer la latitude grâce aux étoiles ;\n- des **cartes** plus précises (les portulans).\n\nAu Portugal, le prince **Henri le Navigateur** encourage dès le début du XVe siècle l'exploration des côtes africaines."
    },
    {
      title: "Les grands voyages",
      text: "- **1488** : le Portugais **Bartolomeu Dias** franchit le **cap de Bonne-Espérance**, à la pointe sud de l'Afrique.\n- **1492** : **Christophe Colomb**, un Génois au service de l'Espagne, veut rejoindre l'Asie par l'ouest. Le **12 octobre**, il atteint une île des **Bahamas**, persuadé d'être aux Indes : il appelle les habitants « Indiens ».\n- **1498** : **Vasco de Gama** atteint **Calicut**, en Inde, en contournant l'Afrique.\n- **1519–1522** : l'expédition de **Magellan** réalise le **premier tour du monde**. Magellan meurt aux Philippines ; seuls 18 survivants rentrent en Espagne avec **Elcano**."
    },
    {
      title: "Le partage du monde et la conquête",
      text: "En **1494**, le **traité de Tordesillas**, sous l'arbitrage du pape, partage les terres nouvelles entre l'**Espagne** et le **Portugal** selon une ligne nord-sud : c'est pourquoi on parle **portugais au Brésil** et espagnol dans le reste de l'Amérique latine.\n\nLes **conquistadors** soumettent les grands empires amérindiens : **Hernán Cortés** renverse les **Aztèques** (Mexique, 1521), **Francisco Pizarro** les **Incas** (Pérou, 1532)."
    },
    {
      title: "Des conséquences immenses",
      text: "Pour les Amérindiens, c'est une **catastrophe** : les maladies apportées par les Européens (variole, rougeole), contre lesquelles ils n'ont aucune immunité, les guerres et le travail forcé font s'effondrer la population, qui chute de **plus de 80 %** selon de nombreuses estimations.\n\nCommence aussi la **traite transatlantique** : des millions d'Africains sont déportés comme esclaves vers les Amériques.\n\nC'est le début de la mondialisation des échanges : c'est l'« **échange colombien** ». Les Européens découvrent la **pomme de terre**, la **tomate**, le **maïs**, le **cacao** ; ils apportent en Amérique le cheval, le blé, la canne à sucre."
    }
  ],
  funFact: "L'Amérique ne porte pas le nom de Colomb, mais celui d'**Amerigo Vespucci**, un navigateur florentin qui comprit le premier qu'il s'agissait d'un « **Nouveau Monde** ». Le cartographe Martin Waldseemüller inscrivit le nom « America » sur une carte en 1507.",
  keyPoints: [
    "Les Européens cherchent une route maritime vers les épices d'Asie.",
    "Caravelle, boussole, astrolabe rendent possibles les grands voyages.",
    "Dias (1488), Colomb (1492), Vasco de Gama (1498), Magellan (premier tour du monde, 1519–1522).",
    "Traité de Tordesillas (1494) ; conquête des Aztèques (Cortés) et des Incas (Pizarro).",
    "Conséquences : effondrement des populations amérindiennes, traite négrière, échange colombien."
  ],
  quiz: [
    {
      type: "qcm",
      question: "En quelle année Christophe Colomb atteint-il l'Amérique ?",
      options: ["1453", "1488", "1492", "1519"],
      answer: 2,
      explanation: "Le 12 octobre 1492, aux Bahamas."
    },
    {
      type: "qcm",
      question: "Quelle expédition réalise le premier tour du monde ?",
      options: ["Celle de Colomb", "Celle de Magellan", "Celle de Vasco de Gama", "Celle de Cortés"],
      answer: 1,
      explanation: "Entre 1519 et 1522 ; Magellan meurt en route, Elcano termine le voyage."
    },
    {
      type: "qcm",
      question: "Pourquoi parle-t-on portugais au Brésil ?",
      options: ["À cause du traité de Tordesillas", "Parce que Colomb était portugais", "Parce que le Brésil a été découvert par Magellan", "À cause d'un hasard linguistique"],
      answer: 0,
      explanation: "Le traité de 1494 attribue cette partie de l'Amérique au Portugal."
    },
    {
      type: "vf",
      question: "Colomb savait qu'il avait découvert un nouveau continent.",
      answer: false,
      explanation: "Faux : il croyait avoir atteint les Indes, d'où le nom d'« Indiens » donné aux Amérindiens."
    },
    {
      type: "qcm",
      question: "Quel empire Hernán Cortés a-t-il renversé ?",
      options: ["L'empire inca", "L'empire aztèque", "L'empire maya", "L'empire mongol"],
      answer: 1,
      explanation: "Au Mexique, en 1521. Pizarro a renversé les Incas."
    }
  ]
});
