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

## Contenu actuel (14 jours)

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
