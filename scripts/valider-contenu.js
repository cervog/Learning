#!/usr/bin/env node
// Vérifie que toutes les leçons listées dans content/index.js sont présentes et bien formées.
// Usage : node scripts/valider-contenu.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {}, lessons: [] };
ctx.registerLesson = (l) => ctx.lessons.push(l);
vm.createContext(ctx);

const run = (file) => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), ctx, { filename: file });
run("content/themes.js");
run("content/index.js");

const errors = [];
const index = ctx.window.LESSON_INDEX;
const themes = ctx.window.THEMES;

if (new Set(index).size !== index.length) errors.push("content/index.js contient des doublons");

for (const id of index) {
  const file = `content/lecons/${id}.js`;
  if (!fs.existsSync(path.join(root, file))) { errors.push(`${id} : fichier ${file} manquant`); continue; }
  const before = ctx.lessons.length;
  run(file);
  const l = ctx.lessons[before];
  const err = (m) => errors.push(`${id} : ${m}`);
  if (!l) { err("registerLesson() n'a pas été appelé"); continue; }
  if (l.id !== id) err(`l'id « ${l.id} » ne correspond pas au nom du fichier`);
  if (!themes[l.theme]) err(`thème inconnu « ${l.theme} » (voir content/themes.js)`);
  for (const k of ["title", "intro"]) if (!l[k]) err(`champ « ${k} » manquant`);
  if (!Array.isArray(l.sections) || l.sections.length < 3) err("au moins 3 sections attendues");
  (l.sections || []).forEach((s, i) => { if (!s.title || !s.text) err(`section ${i + 1} incomplète`); });
  if (!Array.isArray(l.keyPoints) || l.keyPoints.length < 3) err("au moins 3 keyPoints attendus");
  if (!Array.isArray(l.quiz) || l.quiz.length < 4) err("au moins 4 questions de quiz attendues");
  (l.quiz || []).forEach((q, i) => {
    const n = `question ${i + 1}`;
    if (!q.question) err(`${n} : texte manquant`);
    if (q.type === "vf") {
      if (typeof q.answer !== "boolean") err(`${n} : answer doit être true/false`);
    } else if (q.type === "qcm") {
      if (!Array.isArray(q.options) || q.options.length < 2) err(`${n} : options manquantes`);
      else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) err(`${n} : answer hors limites`);
    } else err(`${n} : type « ${q.type} » inconnu (qcm ou vf)`);
  });
}

const orphans = fs.readdirSync(path.join(root, "content/lecons"))
  .map((f) => f.replace(/\.js$/, "")).filter((id) => !index.includes(id));
orphans.forEach((id) => errors.push(`${id} : fichier présent mais absent de content/index.js`));

if (errors.length) {
  console.error("❌ " + errors.length + " problème(s) :\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(`✅ ${index.length} leçons valides (${ctx.lessons.reduce((n, l) => n + l.quiz.length, 0)} questions).`);
