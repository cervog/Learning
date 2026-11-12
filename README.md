# Culture Quotidienne 🦉

Une application de culture générale façon Duolingo : **une leçon courte (5 à 10 min) par jour**, suivie d'un **quiz** pour vérifier ce qu'on a retenu.

Thématiques : philosophie, histoire, sciences, arts, géographie, politique, géopolitique, industrie, technologie, économie, finance… (liste extensible dans `content/themes.js`).

## Fonctionnalités

- **Leçon du jour** : le parcours avance d'une leçon par jour (on peut prendre de l'avance avec une « leçon bonus »).
- **Lecture en cartes** : introduction, 4–5 sections courtes, « Le saviez-vous ? » et « À retenir ».
- **Quiz** : QCM et vrai/faux, avec explication après chaque réponse ; les questions ratées reviennent à la fin.
- **Série 🔥, XP ⭐ et suivi de la semaine**, progression par thématique.
- **Révision express** : 8 questions tirées au hasard parmi les leçons déjà faites.
- Fonctionne sur mobile, installable comme application (PWA), hors ligne après la première visite. Mode sombre automatique.
- La progression est enregistrée dans le navigateur (`localStorage`).

## Lancer l'application

Aucune installation ni dépendance. Au choix :

- ouvrir `index.html` directement dans un navigateur ;
- ou lancer un petit serveur (recommandé, active le mode hors ligne) :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Pour l'avoir sur son téléphone, le plus simple est d'activer **GitHub Pages** sur le dépôt (Settings → Pages → branche `main`, dossier `/`), puis « Ajouter à l'écran d'accueil ».

## Structure

```
index.html              page unique
css/style.css           styles
js/app.js               logique (parcours, leçon, quiz, série, XP)
content/themes.js       thématiques (nom, emoji, couleur)
content/index.js        ordre du parcours (liste des ids de leçons)
content/lecons/<id>.js  une leçon par fichier
scripts/valider-contenu.js  vérification du contenu
```

## Ajouter une leçon

1. Créer `content/lecons/<id>.js` :

```js
registerLesson({
  id: "<id>",                 // identique au nom du fichier
  theme: "histoire",          // une clé de content/themes.js
  title: "Titre court",
  subtitle: "Une phrase d'accroche",
  minutes: 7,                 // durée estimée (5 à 10)
  intro: "Paragraphe d'introduction.",
  sections: [                 // 4 à 5 sections courtes
    { title: "Sous-titre", text: "Texte. **gras**, *italique*, paragraphes séparés par une ligne vide,\n\n- listes\n- à puces" }
  ],
  funFact: "Une anecdote (optionnel).",
  keyPoints: ["3 à 5 points à retenir"],
  quiz: [                     // 5 à 6 questions
    { type: "qcm", question: "…?", options: ["A", "B", "C", "D"], answer: 1, explanation: "…" },
    { type: "vf",  question: "Affirmation.", answer: false, explanation: "…" }
  ]
});
```

2. Ajouter l'id à la liste de `content/index.js` (l'ordre = l'ordre du parcours).
3. Vérifier : `node scripts/valider-contenu.js`.

> Les ids des leçons servent à mémoriser la progression : ne pas les renommer une fois publiés.

## Contenu actuel (108 jours)

| Jour | Thème | Leçon |
|---|---|---|
| 1 | Philosophie | Socrate : « Je sais que je ne sais rien » |
| 2 | Histoire | La Révolution française (1789–1799) |
| 3 | Sciences | Darwin et la théorie de l'évolution |
| 4 | Économie | L'offre et la demande |
| 5 | Géographie | Les grands climats du monde |
| 6 | Arts | La Renaissance italienne |
| 7 | Politique | La séparation des pouvoirs |
| 8 | Géopolitique | Les détroits stratégiques |
| 9 | Finance | Taux d'intérêt et banques centrales |
| 10 | Technologie | Comment fonctionne Internet ? |
| 11 | Industrie | La révolution industrielle |
| 12 | Histoire | La guerre froide (1947–1991) |
| 13 | Philosophie | Descartes : « Je pense, donc je suis » |
| 14 | Technologie | L'intelligence artificielle |
| 15 | Philosophie | Platon et l'allégorie de la caverne |
| 16 | Histoire | L'Égypte des pharaons |
| 17 | Sciences | L'ADN, le code de la vie |
| 18 | Arts | L'impressionnisme |
| 19 | Économie | Le PIB et la croissance |
| 20 | Géopolitique | L'ONU et le Conseil de sécurité |
| 21 | Littérature | Homère : l'Iliade et l'Odyssée |
| 22 | Politique | Comment fonctionne l'Union européenne ? |
| 23 | Finance | La Bourse et les actions |
| 24 | Sciences | Le Big Bang et l'histoire de l'Univers |
| 25 | Histoire | Rome : de la République à l'Empire |
| 26 | Religions | Les trois grands monothéismes |
| 27 | Industrie | L'énergie nucléaire |
| 28 | Philosophie | Le stoïcisme |
| 29 | Économie | L'inflation |
| 30 | Géographie | La tectonique des plaques |
| 31 | Technologie | Petite histoire de l'ordinateur |
| 32 | Arts | Bach, Mozart, Beethoven |
| 33 | Histoire | Napoléon Bonaparte |
| 34 | Géopolitique | La Chine, une puissance mondiale |
| 35 | Sciences | Le système solaire |
| 36 | Littérature | Molière et la comédie classique |
| 37 | Finance | La crise financière de 2008 |
| 38 | Politique | La Ve République |
| 39 | Religions | Le bouddhisme |
| 40 | Histoire | La Première Guerre mondiale (1914–1918) |
| 41 | Économie | La mondialisation |
| 42 | Arts | Picasso et l'art moderne |
| 43 | Industrie | Les semi-conducteurs |
| 44 | Philosophie | Sartre, Camus et l'existentialisme |
| 45 | Histoire | La Seconde Guerre mondiale (1939–1945) |
| 46 | Sciences | L'atome et le tableau périodique |
| 47 | Géopolitique | Le pétrole et l'OPEP |
| 48 | Littérature | Victor Hugo |
| 49 | Droit | Les bases du droit français |
| 50 | Sciences | Les vaccins et le système immunitaire |
| 51 | Histoire | La décolonisation |
| 52 | Géographie | La population mondiale |
| 53 | Arts | Une petite histoire du cinéma |
| 54 | Finance | Le bitcoin et les cryptomonnaies |
| 55 | Philosophie | Aristote, le savant universel |
| 56 | Histoire | Le Moyen Âge et la féodalité |
| 57 | Sciences | Newton et la gravitation |
| 58 | Économie | Keynes contre les libéraux |
| 59 | Arts | Les cathédrales gothiques |
| 60 | Géopolitique | L'OTAN |
| 61 | Droit | Le contrat |
| 62 | Littérature | Shakespeare |
| 63 | Technologie | Comment fonctionne le GPS ? |
| 64 | Histoire | Les grandes découvertes |
| 65 | Géographie | Les grands fleuves du monde |
| 66 | Finance | Le FMI et la Banque mondiale |
| 67 | Politique | La démocratie, d'Athènes à nos jours |
| 68 | Droit | La responsabilité civile |
| 69 | Philosophie | Les Lumières |
| 70 | Sciences | Einstein et la relativité |
| 71 | Arts | L'histoire de la photographie |
| 72 | Histoire | La naissance des États-Unis |
| 73 | Industrie | L'industrie automobile |
| 74 | Religions | L'hindouisme |
| 75 | Géopolitique | L'Arctique, nouvelle frontière |
| 76 | Économie | Le chômage |
| 77 | Droit | Le droit du travail |
| 78 | Littérature | Baudelaire et Les Fleurs du mal |
| 79 | Sciences | Le cerveau humain |
| 80 | Histoire | La révolution russe de 1917 |
| 81 | Politique | Machiavel et Le Prince |
| 82 | Philosophie | Kant et la morale du devoir |
| 83 | Droit | Le droit de la famille |
| 84 | Géographie | Les océans |
| 85 | Arts | Le jazz |
| 86 | Histoire | La crise de 1929 et la Grande Dépression |
| 87 | Sciences | L'effet de serre et le réchauffement climatique |
| 88 | Littérature | Zola et le naturalisme |
| 89 | Géopolitique | La conquête spatiale aujourd'hui |
| 90 | Économie | Déficit et dette publique |
| 91 | Droit | Héritage et successions |
| 92 | Industrie | L'aéronautique, d'Ader à Airbus |
| 93 | Religions | La laïcité à la française |
| 94 | Philosophie | Nietzsche : « Dieu est mort » |
| 95 | Histoire | Gengis Khan et l'Empire mongol |
| 96 | Droit | De l'enquête au procès pénal |
| 97 | Géographie | L'eau douce, une ressource vitale |
| 98 | Sciences | La physique quantique |
| 99 | Arts | Le pop art et l'art contemporain |
| 100 | Politique | Les modes de scrutin |
| 101 | Géopolitique | L'Inde, puissance montante |
| 102 | Droit | Les droits du consommateur |
| 103 | Littérature | Orwell, 1984 et les dystopies |
| 104 | Finance | Épargner et placer son argent |
| 105 | Technologie | La cybersécurité |
| 106 | Droit | Le RGPD et vos données personnelles |
| 107 | Géographie | Les forêts du monde |
| 108 | Droit | Les droits de l'homme |
