registerLesson({
  id: "arts-art-moderne",
  theme: "arts",
  title: "Picasso et l'art moderne",
  subtitle: "Quand l'art cesse d'imiter la réalité",
  minutes: 7,
  intro: "Visages éclatés, taches de couleur, urinoir exposé dans un musée… Au début du XXe siècle, les artistes rompent avec des siècles de tradition. Bienvenue dans l'**art moderne**.",
  sections: [
    {
      title: "La photographie change tout",
      text: "Depuis la Renaissance, la peinture cherchait à **représenter fidèlement** le monde. Mais avec l'invention de la **photographie** (vers 1839), cette mission perd de son sens.\n\nLes artistes explorent alors d'autres voies : exprimer des émotions, jouer avec les formes et les couleurs, interroger la nature même de l'art. Les impressionnistes, puis **Cézanne**, ont ouvert la voie."
    },
    {
      title: "Le fauvisme et le cubisme",
      text: "En **1905**, des toiles aux **couleurs pures et violentes** font scandale au Salon d'automne. Un critique parle de « **fauves** ». Leur chef de file est **Henri Matisse**.\n\nEn **1907**, **Pablo Picasso** (1881–1973) peint ***Les Demoiselles d'Avignon***, inspiré par les arts africains et ibériques. Avec **Georges Braque**, il invente le **cubisme** : un objet est représenté **sous plusieurs angles à la fois**, décomposé en formes géométriques. C'est une révolution du regard."
    },
    {
      title: "Picasso, un génie aux multiples périodes",
      text: "Espagnol installé en France, Picasso a produit des dizaines de milliers d'œuvres en changeant sans cesse de style :\n\n- la **période bleue** (1901–1904), mélancolique ;\n- la **période rose**, avec ses saltimbanques ;\n- le **cubisme** ;\n- un retour au classicisme, puis le surréalisme…\n\nSon tableau le plus célèbre, ***Guernica*** (1937), dénonce le bombardement de la ville basque par l'aviation allemande et italienne pendant la guerre d'Espagne. Il est exposé à Madrid, au musée Reina Sofía."
    },
    {
      title: "L'abstraction et Dada",
      text: "Vers **1910**, le Russe **Vassily Kandinsky** peint parmi les premières œuvres **abstraites** : plus aucun objet reconnaissable, seulement des formes et des couleurs qui doivent toucher l'âme comme la musique. Le Néerlandais **Piet Mondrian** réduit la peinture à des lignes noires et des rectangles de couleurs primaires.\n\nPendant la Première Guerre mondiale, le mouvement **Dada** (Zurich, 1916) se moque de tout. En **1917**, **Marcel Duchamp** expose un **urinoir** signé « R. Mutt » et intitulé ***Fontaine*** : c'est le principe du **ready-made**. Est de l'art ce que l'artiste décide d'appeler de l'art."
    },
    {
      title: "Le surréalisme",
      text: "Fondé par le poète **André Breton** avec le *Manifeste du surréalisme* (**1924**), le **surréalisme** veut explorer l'**inconscient** et les **rêves**, inspiré par Freud.\n\nSes peintres créent des images étranges et poétiques : **Salvador Dalí** et ses montres molles (*La Persistance de la mémoire*, 1931), **René Magritte** et sa pipe accompagnée de l'inscription « **Ceci n'est pas une pipe** » (*La Trahison des images*) — car ce n'est qu'une **image** de pipe !"
    }
  ],
  funFact: "Le nom complet de Picasso compte plus d'une vingtaine de mots : **Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso**.",
  keyPoints: [
    "La photographie libère la peinture de l'obligation d'imiter la réalité.",
    "Fauvisme (Matisse, 1905) : couleurs pures ; cubisme (Picasso et Braque, 1907) : plusieurs points de vue à la fois.",
    "Guernica (1937) de Picasso dénonce les horreurs de la guerre.",
    "Kandinsky et Mondrian inventent l'abstraction ; Duchamp et le ready-made (Fontaine, 1917).",
    "Surréalisme (Breton, 1924) : rêve et inconscient, avec Dalí et Magritte."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quel mouvement Picasso a-t-il inventé avec Georges Braque ?",
      options: ["Le fauvisme", "Le cubisme", "Le surréalisme", "L'impressionnisme"],
      answer: 1,
      explanation: "Le cubisme représente les objets sous plusieurs angles en même temps."
    },
    {
      type: "qcm",
      question: "Quel événement le tableau Guernica dénonce-t-il ?",
      options: ["La Première Guerre mondiale", "Le bombardement d'une ville basque pendant la guerre d'Espagne", "La révolution russe", "La bombe d'Hiroshima"],
      answer: 1,
      explanation: "En 1937, par l'aviation allemande et italienne alliée de Franco."
    },
    {
      type: "qcm",
      question: "Quel artiste a exposé un urinoir intitulé Fontaine ?",
      options: ["Salvador Dalí", "Henri Matisse", "Marcel Duchamp", "Andy Warhol"],
      answer: 2,
      explanation: "En 1917 : c'est le principe du ready-made."
    },
    {
      type: "vf",
      question: "« Ceci n'est pas une pipe » est une œuvre de René Magritte.",
      answer: true,
      explanation: "Vrai : La Trahison des images, qui rappelle qu'une image n'est pas l'objet lui-même."
    },
    {
      type: "qcm",
      question: "Qui est considéré comme l'un des pionniers de la peinture abstraite ?",
      options: ["Vassily Kandinsky", "Claude Monet", "Léonard de Vinci", "Auguste Renoir"],
      answer: 0,
      explanation: "Vers 1910, Kandinsky peint des œuvres sans aucun objet reconnaissable."
    }
  ]
});
