registerLesson({
  id: "droit-droits-humains",
  theme: "droit",
  title: "Les droits de l'homme",
  subtitle: "De la Déclaration de 1789 à la Cour européenne",
  minutes: 6,
  intro: "Liberté d'expression, interdiction de la torture, droit à un procès équitable : ces droits nous semblent aller de soi. Ils sont pourtant le fruit d'une longue histoire et restent bafoués dans de nombreux pays.",
  sections: [
    {
      title: "Les premières déclarations",
      text: "Dès **1215**, la **Magna Carta** anglaise limite le pouvoir du roi. En **1689**, le **Bill of Rights** anglais garantit certains droits au Parlement et aux sujets.\n\nAu XVIIIe siècle, inspirés par les Lumières et l'idée de **droits naturels**, les Américains (**Déclaration d'indépendance**, 1776) puis les Français adoptent des textes fondateurs. La **Déclaration des droits de l'homme et du citoyen** du **26 août 1789** proclame que « les hommes naissent et demeurent **libres et égaux en droits** » et garantit la liberté, la propriété, la sûreté et la résistance à l'oppression."
    },
    {
      title: "Des droits pas encore pour tous",
      text: "En 1789, ces droits sont loin d'être universels : les **femmes** n'ont pas les mêmes droits que les hommes, et l'**esclavage** persiste dans les colonies.\n\nEn **1791**, **Olympe de Gouges** rédige la ***Déclaration des droits de la femme et de la citoyenne*** : « La femme naît libre et demeure égale à l'homme en droits. » Elle est guillotinée en 1793. L'esclavage est aboli en 1794, rétabli par Napoléon en 1802, puis définitivement aboli en France en **1848**, grâce à **Victor Schœlcher**."
    },
    {
      title: "La Déclaration universelle de 1948",
      text: "Après les horreurs de la Seconde Guerre mondiale et de la Shoah, l'**ONU** adopte la **Déclaration universelle des droits de l'homme** (DUDH) le **10 décembre 1948**, à Paris, au palais de Chaillot. Le juriste français **René Cassin**, qui a participé à sa rédaction aux côtés d'**Eleanor Roosevelt**, recevra le prix Nobel de la paix en 1968.\n\nElle proclame des droits **civils et politiques** (liberté d'expression, de religion, droit de vote, interdiction de la torture et de l'esclavage) mais aussi **économiques et sociaux** (droit au travail, à l'éducation, à la santé). Le 10 décembre est la **Journée des droits de l'homme**."
    },
    {
      title: "La Convention européenne et la CEDH",
      text: "La DUDH n'est pas juridiquement contraignante. En Europe, le **Conseil de l'Europe** adopte en **1950** la **Convention européenne des droits de l'homme**, qui, elle, est **obligatoire** pour les 46 États membres.\n\nLa **Cour européenne des droits de l'homme** (**CEDH**), installée à **Strasbourg**, veille à son respect. Tout citoyen peut la saisir après avoir épuisé les recours dans son pays. Elle a condamné de nombreuses fois la France, par exemple pour l'état des prisons ou la durée excessive des procédures. Ne pas la confondre avec la Cour de justice de l'Union européenne, à Luxembourg."
    },
    {
      title: "La justice internationale",
      text: "Pour juger les crimes les plus graves, la communauté internationale a créé des juridictions : les tribunaux de **Nuremberg** et de Tokyo après 1945, puis les tribunaux pour l'ex-Yougoslavie et le Rwanda dans les années 1990.\n\nEn **2002** est créée la **Cour pénale internationale** (**CPI**), à **La Haye**, qui juge les individus accusés de **génocide**, de **crimes contre l'humanité** et de **crimes de guerre**. Mais plusieurs grandes puissances, dont les **États-Unis**, la **Chine** et la **Russie**, n'en sont pas membres. Des ONG comme **Amnesty International** (1961) ou **Human Rights Watch** dénoncent les violations des droits partout dans le monde."
    }
  ],
  funFact: "La Déclaration universelle des droits de l'homme est le document le plus **traduit** au monde : elle existe dans plus de **500 langues**, du français à l'inuktitut en passant par le breton.",
  keyPoints: [
    "Magna Carta (1215), Bill of Rights (1689), Déclaration d'indépendance (1776), DDHC (26 août 1789).",
    "Olympe de Gouges réclame les droits des femmes (1791) ; l'esclavage est aboli en France en 1848.",
    "Déclaration universelle des droits de l'homme adoptée par l'ONU le 10 décembre 1948 à Paris (René Cassin).",
    "Convention européenne (1950) et CEDH à Strasbourg : des droits juridiquement contraignants.",
    "La Cour pénale internationale (2002, La Haye) juge génocides, crimes contre l'humanité et crimes de guerre."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Quand et où la Déclaration universelle des droits de l'homme a-t-elle été adoptée ?",
      options: ["En 1789 à Versailles", "En 1948 à Paris", "En 1950 à Strasbourg", "En 1945 à San Francisco"],
      answer: 1,
      explanation: "Le 10 décembre 1948, au palais de Chaillot."
    },
    {
      type: "qcm",
      question: "Qui a rédigé la Déclaration des droits de la femme et de la citoyenne ?",
      options: ["Simone de Beauvoir", "Olympe de Gouges", "Marie Curie", "George Sand"],
      answer: 1,
      explanation: "En 1791 ; elle est guillotinée en 1793."
    },
    {
      type: "qcm",
      question: "Où siège la Cour européenne des droits de l'homme ?",
      options: ["À Bruxelles", "À Luxembourg", "À Strasbourg", "À La Haye"],
      answer: 2,
      explanation: "Elle dépend du Conseil de l'Europe."
    },
    {
      type: "vf",
      question: "Les États-Unis sont membres de la Cour pénale internationale.",
      answer: false,
      explanation: "Faux : comme la Chine et la Russie, ils n'en sont pas membres."
    },
    {
      type: "qcm",
      question: "En quelle année l'esclavage a-t-il été définitivement aboli en France ?",
      options: ["1789", "1794", "1848", "1905"],
      answer: 2,
      explanation: "Grâce à Victor Schœlcher."
    }
  ]
});
