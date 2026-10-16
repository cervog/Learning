registerLesson({
  id: "technologie-internet",
  theme: "technologie",
  title: "Comment fonctionne Internet ?",
  subtitle: "Paquets, adresses IP, DNS… et pourquoi le Web n'est pas Internet",
  minutes: 7,
  intro: "Vous l'utilisez des dizaines de fois par jour, mais savez-vous ce qui se passe quand vous tapez une adresse dans votre navigateur ? Démystifions **Internet**.",
  sections: [
    {
      title: "Un réseau de réseaux",
      text: "**Internet** est l'interconnexion de millions de réseaux informatiques à travers le monde. Son ancêtre, **ARPANET**, est un projet de l'armée américaine lancé en **1969** pour relier des universités et centres de recherche.\n\nEn **1974**, **Vinton Cerf** et **Robert Kahn** conçoivent le langage commun qui permet à des réseaux différents de se parler : **TCP/IP**. ARPANET l'adopte le **1er janvier 1983**, date souvent considérée comme la naissance de l'Internet moderne."
    },
    {
      title: "Des paquets et des adresses",
      text: "Les données (un e-mail, une vidéo) sont découpées en petits morceaux appelés **paquets**. Chaque paquet voyage indépendamment, de **routeur** en routeur, et peut emprunter un chemin différent ; ils sont réassemblés à l'arrivée. Si un chemin est coupé, les paquets en prennent un autre : c'est ce qui rend Internet si robuste.\n\nChaque machine connectée possède une **adresse IP** (comme 93.184.216.34). Le format historique **IPv4** n'offre qu'environ **4,3 milliards** d'adresses, ce qui ne suffit plus : son successeur **IPv6** en offre un nombre quasi illimité."
    },
    {
      title: "Le DNS, l'annuaire d'Internet",
      text: "Personne ne retient des adresses IP. Le **DNS** (*Domain Name System*) traduit les noms de domaine lisibles (comme *wikipedia.org*) en adresses IP.\n\nQuand vous tapez une adresse, votre ordinateur interroge d'abord un serveur DNS — comme on cherche un numéro dans un annuaire — avant de contacter le bon serveur."
    },
    {
      title: "Internet n'est pas le Web",
      text: "Le **Web** (*World Wide Web*) n'est qu'**un des services** d'Internet, comme l'e-mail ou la visioconférence. Il a été inventé par **Tim Berners-Lee** au **CERN**, près de Genève, en **1989–1991**.\n\nIl repose sur trois briques : les **URL** (adresses des pages), le langage **HTML** (pour écrire les pages) et le protocole **HTTP** (pour les échanger). Le « S » de **HTTPS** signifie que la communication est **chiffrée** : personne ne peut lire les données en chemin."
    },
    {
      title: "Une infrastructure bien physique",
      text: "On parle de « cloud », mais Internet est très matériel. Plus de **99 % du trafic intercontinental** passe par des **câbles sous-marins** en fibre optique posés au fond des océans — et non par satellite.\n\nLes données sont stockées dans d'immenses **centres de données** (*data centers*), qui consomment beaucoup d'électricité pour fonctionner et être refroidis."
    }
  ],
  funFact: "Le tout premier site Web, créé par Tim Berners-Lee, est toujours en ligne à l'adresse *info.cern.ch*. Le CERN a placé la technologie du Web dans le **domaine public en 1993**, ce qui a permis son explosion.",
  keyPoints: [
    "Internet est un réseau de réseaux, né d'ARPANET (1969).",
    "TCP/IP (Cerf et Kahn, 1974) est le langage commun d'Internet, adopté en 1983.",
    "Les données voyagent en paquets ; chaque machine a une adresse IP (IPv4, IPv6).",
    "Le DNS traduit les noms de domaine en adresses IP.",
    "Le Web (Tim Berners-Lee, CERN, 1989) n'est qu'un service d'Internet ; plus de 99 % du trafic intercontinental passe par des câbles sous-marins."
  ],
  quiz: [
    {
      type: "qcm",
      question: "Qui a inventé le World Wide Web ?",
      options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Vinton Cerf"],
      answer: 1,
      explanation: "Tim Berners-Lee, au CERN, à partir de 1989."
    },
    {
      type: "qcm",
      question: "À quoi sert le DNS ?",
      options: ["À chiffrer les données", "À traduire les noms de domaine en adresses IP", "À accélérer le Wi-Fi", "À stocker les vidéos"],
      answer: 1,
      explanation: "C'est l'annuaire d'Internet."
    },
    {
      type: "vf",
      question: "Internet et le Web désignent exactement la même chose.",
      answer: false,
      explanation: "Faux : le Web est un service parmi d'autres (e-mail, etc.) qui utilise Internet."
    },
    {
      type: "qcm",
      question: "Comment passe l'essentiel du trafic Internet entre les continents ?",
      options: ["Par satellite", "Par des câbles sous-marins", "Par ondes radio", "Par le réseau électrique"],
      answer: 1,
      explanation: "Plus de 99 % du trafic intercontinental emprunte des câbles sous-marins en fibre optique."
    },
    {
      type: "qcm",
      question: "Que signifie le « S » de HTTPS ?",
      options: ["Que le site est rapide", "Que la communication est sécurisée (chiffrée)", "Que le site est situé en Suisse", "Que le site est payant"],
      answer: 1,
      explanation: "S pour « Secure » : les échanges sont chiffrés."
    },
    {
      type: "qcm",
      question: "Quel était l'ancêtre d'Internet, lancé en 1969 ?",
      options: ["Minitel", "ARPANET", "Usenet", "Ethernet"],
      answer: 1,
      explanation: "ARPANET, un projet financé par le département de la Défense américain."
    }
  ]
});
