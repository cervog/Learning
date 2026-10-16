/* Culture Quotidienne — application monopage sans dépendance.
 * Routes (hash) : #/ accueil · #/lecon/<id> · #/quiz/<id> · #/revision · #/stats
 */
(function () {
  "use strict";

  const XP_PAR_BONNE_REPONSE = 10;
  const XP_BONUS_LECON = 20;
  const STORAGE_KEY = "culture-quotidienne-v1";

  // ---------- Chargement du contenu ----------

  const lessons = {};
  window.registerLesson = function (lesson) {
    lessons[lesson.id] = lesson;
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = () => { console.warn("Leçon introuvable :", src); resolve(); };
      document.body.appendChild(s);
    });
  }

  function orderedLessons() {
    return (window.LESSON_INDEX || []).map((id) => lessons[id]).filter(Boolean);
  }

  // ---------- Persistance ----------

  function defaultState() {
    return { xp: 0, completed: {}, days: {}, streak: { count: 0, last: null }, bestStreak: 0 };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { /* stockage indisponible : on repart de zéro */ }
    return defaultState();
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  let state = loadState();

  // ---------- Dates ----------

  function dayKey(d) {
    d = d || new Date();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const j = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + j;
  }

  function shiftDay(key, delta) {
    const [y, m, d] = key.split("-").map(Number);
    return dayKey(new Date(y, m - 1, d + delta));
  }

  function currentStreak() {
    const { count, last } = state.streak;
    const today = dayKey();
    if (last === today || last === shiftDay(today, -1)) return count;
    return 0;
  }

  function doneToday() {
    return Boolean(state.days[dayKey()] && state.days[dayKey()].lessons > 0);
  }

  function recordActivity(xp, lessonDone) {
    const today = dayKey();
    const day = state.days[today] || { xp: 0, lessons: 0 };
    day.xp += xp;
    if (lessonDone) day.lessons += 1;
    state.days[today] = day;
    state.xp += xp;

    if (lessonDone && state.streak.last !== today) {
      state.streak.count = state.streak.last === shiftDay(today, -1) ? state.streak.count + 1 : 1;
      state.streak.last = today;
      state.bestStreak = Math.max(state.bestStreak || 0, state.streak.count);
    }
    saveState();
  }

  // ---------- Utilitaires ----------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Mini-markdown : paragraphes (ligne vide), **gras**, *italique*, listes "- ".
  function rich(text) {
    return String(text).trim().split(/\n\s*\n/).map((block) => {
      const lines = block.split("\n");
      const inline = (l) => esc(l)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");
      if (lines.every((l) => /^\s*- /.test(l))) {
        return "<ul>" + lines.map((l) => "<li>" + inline(l.replace(/^\s*- /, "")) + "</li>").join("") + "</ul>";
      }
      return "<p>" + lines.map(inline).join("<br>") + "</p>";
    }).join("");
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function theme(lesson) {
    return (window.THEMES || {})[lesson.theme] || { nom: lesson.theme, emoji: "📚", couleur: "#58cc02" };
  }

  function themeChip(lesson) {
    const t = theme(lesson);
    return `<span class="chip" style="--c:${t.couleur}">${t.emoji} ${esc(t.nom)}</span>`;
  }

  function nextLesson() {
    return orderedLessons().find((l) => !state.completed[l.id]) || null;
  }

  const app = document.getElementById("app");

  function render(html, cls) {
    app.className = cls || "";
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // ---------- Accueil ----------

  function weekStrip() {
    const today = dayKey();
    const labels = ["D", "L", "M", "M", "J", "V", "S"];
    let html = "";
    for (let i = 6; i >= 0; i--) {
      const k = shiftDay(today, -i);
      const [y, m, d] = k.split("-").map(Number);
      const done = state.days[k] && state.days[k].lessons > 0;
      html += `<div class="day ${done ? "done" : ""} ${k === today ? "today" : ""}">
        <span class="dot">${done ? "🔥" : ""}</span><span>${labels[new Date(y, m - 1, d).getDay()]}</span></div>`;
    }
    return `<div class="week">${html}</div>`;
  }

  function topBar() {
    const all = orderedLessons();
    const done = all.filter((l) => state.completed[l.id]).length;
    const streak = currentStreak();
    return `<header class="topbar">
      <span class="stat ${streak > 0 ? "fire" : ""}" title="Série de jours">🔥 ${streak}</span>
      <span class="stat xp" title="Points d'expérience">⭐ ${state.xp} XP</span>
      <span class="stat" title="Leçons terminées">📚 ${done}/${all.length}</span>
    </header>`;
  }

  function viewHome() {
    const all = orderedLessons();
    const next = nextLesson();
    const today = doneToday();
    let hero;

    if (!next) {
      hero = `<section class="hero card">
        <h2>🏆 Parcours terminé !</h2>
        <p>Tu as terminé les ${all.length} leçons disponibles. Entretiens tes connaissances avec une révision express en attendant les prochaines.</p>
        <a class="btn" href="#/revision">Révision express</a>
      </section>`;
    } else {
      const t = theme(next);
      hero = `<section class="hero card" style="--c:${t.couleur}">
        <p class="eyebrow">${today ? "✅ Objectif du jour atteint — leçon bonus" : "Leçon du jour"}</p>
        <div class="hero-emoji">${t.emoji}</div>
        ${themeChip(next)}
        <h2>${esc(next.title)}</h2>
        <p class="muted">${esc(next.subtitle || "")}</p>
        <p class="meta">⏱️ ${next.minutes || 7} min · ❓ ${next.quiz.length} questions</p>
        <a class="btn" href="#/lecon/${next.id}">${today ? "Continuer quand même" : "Commencer"}</a>
      </section>`;
    }

    const path = all.map((l, i) => {
      const t = theme(l);
      const c = state.completed[l.id];
      const status = c ? "done" : (next && l.id === next.id ? "current" : "locked");
      const offset = [0, 1, 2, 1, 0, -1, -2, -1][i % 8];
      return `<a class="node ${status}" href="#/lecon/${l.id}" style="--c:${t.couleur};--o:${offset}">
        <span class="bubble">${c ? "✓" : t.emoji}</span>
        <span class="node-label"><small>Jour ${i + 1}</small>${esc(l.title)}${c ? ` <em>${c.best}%</em>` : ""}</span>
      </a>`;
    }).join("");

    const canReview = all.some((l) => state.completed[l.id]);

    render(`${topBar()}
      ${weekStrip()}
      ${hero}
      <nav class="actions">
        <a class="btn ghost ${canReview ? "" : "disabled"}" href="${canReview ? "#/revision" : "#/"}">🔁 Révision express</a>
        <a class="btn ghost" href="#/stats">📊 Progression</a>
      </nav>
      <h3 class="section-title">Ton parcours</h3>
      <div class="path">${path}</div>`, "home");
  }

  // ---------- Leçon ----------

  function viewLesson(id) {
    const lesson = lessons[id];
    if (!lesson) return go("#/");
    const t = theme(lesson);

    const cards = [];
    cards.push(`<div class="hero-emoji big">${t.emoji}</div>${themeChip(lesson)}
      <h2>${esc(lesson.title)}</h2>${lesson.intro ? rich(lesson.intro) : ""}`);
    lesson.sections.forEach((s) => cards.push(`<h3>${esc(s.title)}</h3>${rich(s.text)}`));
    if (lesson.funFact) cards.push(`<h3>💡 Le saviez-vous ?</h3>${rich(lesson.funFact)}`);
    cards.push(`<h3>📌 À retenir</h3><ul class="keypoints">${lesson.keyPoints.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>`);

    let i = 0;
    function show() {
      const last = i === cards.length - 1;
      render(`<header class="lesson-bar">
          <a class="close" href="#/" aria-label="Quitter">✕</a>
          <div class="progress"><div style="width:${((i + 1) / cards.length) * 100}%"></div></div>
        </header>
        <article class="card reading" style="--c:${t.couleur}">${cards[i]}</article>
        <footer class="bottom">
          ${i > 0 ? `<button class="btn ghost" id="prev">Retour</button>` : ""}
          <button class="btn" id="next">${last ? "Passer au quiz 🎯" : "Continuer"}</button>
        </footer>`, "lesson");
      document.getElementById("next").onclick = () => {
        if (last) return go("#/quiz/" + id);
        i++; show();
      };
      const prev = document.getElementById("prev");
      if (prev) prev.onclick = () => { i--; show(); };
    }
    show();
  }

  // ---------- Quiz ----------

  function prepareQuestion(q, lesson) {
    if (q.type === "vf") {
      return { q: q.question, options: ["Vrai", "Faux"], answer: q.answer ? 0 : 1, explanation: q.explanation, lesson };
    }
    const order = shuffle(q.options.map((_, k) => k));
    return {
      q: q.question,
      options: order.map((k) => q.options[k]),
      answer: order.indexOf(q.answer),
      explanation: q.explanation,
      lesson
    };
  }

  function runQuiz(questions, opts) {
    const queue = questions.map((q, k) => Object.assign({ key: k }, q));
    const firstTry = {};
    const retried = new Set();
    let pos = 0;

    function show() {
      if (pos >= queue.length) return finish();
      const cur = queue[pos];
      const answeredCount = Object.keys(firstTry).length;
      render(`<header class="lesson-bar">
          <a class="close" href="#/" aria-label="Quitter">✕</a>
          <div class="progress"><div style="width:${(answeredCount / questions.length) * 100}%"></div></div>
        </header>
        <section class="quiz">
          ${retried.has(cur.key) && firstTry[cur.key] === false ? `<p class="eyebrow retry">↺ Erreur précédente</p>` : ""}
          ${opts.mixed ? themeChip(cur.lesson) : ""}
          <h2 class="question">${esc(cur.q)}</h2>
          <div class="options">
            ${cur.options.map((o, k) => `<button class="option" data-k="${k}">${esc(o)}</button>`).join("")}
          </div>
        </section>
        <footer class="bottom feedback" id="fb">
          <button class="btn" id="check" disabled>Vérifier</button>
        </footer>`, "quiz-view");

      let chosen = null;
      const buttons = app.querySelectorAll(".option");
      const check = document.getElementById("check");
      buttons.forEach((b) => b.onclick = () => {
        buttons.forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
        chosen = Number(b.dataset.k);
        check.disabled = false;
      });

      check.onclick = () => {
        const ok = chosen === cur.answer;
        if (!(cur.key in firstTry)) firstTry[cur.key] = ok;
        if (!ok && !retried.has(cur.key)) { retried.add(cur.key); queue.push(cur); }
        buttons.forEach((b) => {
          b.disabled = true;
          const k = Number(b.dataset.k);
          if (k === cur.answer) b.classList.add("correct");
          else if (k === chosen) b.classList.add("wrong");
        });
        const fb = document.getElementById("fb");
        fb.className = "bottom feedback " + (ok ? "ok" : "ko");
        fb.innerHTML = `<div class="fb-text">
            <strong>${ok ? "🎉 Bien joué !" : "😬 Pas tout à fait…"}</strong>
            ${ok ? "" : `<span>Bonne réponse : ${esc(cur.options[cur.answer])}</span>`}
            ${cur.explanation ? `<span class="expl">${esc(cur.explanation)}</span>` : ""}
          </div>
          <button class="btn" id="cont">Continuer</button>`;
        document.getElementById("cont").onclick = () => { pos++; show(); };
      };
    }

    function finish() {
      const correct = Object.values(firstTry).filter(Boolean).length;
      const score = Math.round((correct / questions.length) * 100);
      opts.onFinish({ correct, total: questions.length, score });
    }

    show();
  }

  function viewQuiz(id) {
    const lesson = lessons[id];
    if (!lesson) return go("#/");
    const questions = shuffle(lesson.quiz.map((q) => prepareQuestion(q, lesson)));
    runQuiz(questions, {
      onFinish: ({ correct, total, score }) => {
        const wasDoneToday = doneToday();
        const already = state.completed[id];
        const xp = correct * XP_PAR_BONNE_REPONSE + (already ? 0 : XP_BONUS_LECON);
        state.completed[id] = {
          date: already ? already.date : dayKey(),
          best: Math.max(score, already ? already.best : 0),
          attempts: (already ? already.attempts : 0) + 1
        };
        recordActivity(xp, true);
        viewResults({ correct, total, score, xp, streakUp: !wasDoneToday, lesson });
      }
    });
  }

  function viewReview() {
    const done = orderedLessons().filter((l) => state.completed[l.id]);
    if (!done.length) return go("#/");
    const pool = [];
    done.forEach((l) => l.quiz.forEach((q) => pool.push(prepareQuestion(q, l))));
    const questions = shuffle(pool).slice(0, 8);
    runQuiz(questions, {
      mixed: true,
      onFinish: ({ correct, total, score }) => {
        const xp = correct * XP_PAR_BONNE_REPONSE;
        recordActivity(xp, false);
        viewResults({ correct, total, score, xp, streakUp: false, review: true });
      }
    });
  }

  function viewResults(r) {
    const mood = r.score === 100 ? "🏆" : r.score >= 70 ? "🎉" : r.score >= 40 ? "💪" : "📖";
    const msg = r.score === 100 ? "Parfait, sans faute !" : r.score >= 70 ? "Très bien joué !" : r.score >= 40 ? "Pas mal, continue comme ça !" : "Relis la leçon, ça viendra !";
    render(`<section class="results">
        <div class="hero-emoji big">${mood}</div>
        <h2>${r.review ? "Révision terminée" : "Leçon terminée !"}</h2>
        <p class="muted">${msg}</p>
        <div class="tiles three">
          <div class="tile"><span>Score</span><strong>${r.score}%</strong><small>${r.correct}/${r.total} du premier coup</small></div>
          <div class="tile xp"><span>XP gagnés</span><strong>+${r.xp}</strong></div>
          <div class="tile fire"><span>Série</span><strong>🔥 ${currentStreak()}</strong><small>${r.streakUp ? "+1 jour !" : "jour(s)"}</small></div>
        </div>
        ${r.lesson ? `<details class="card recap"><summary>📌 Revoir l'essentiel</summary>
          <ul class="keypoints">${r.lesson.keyPoints.map((k) => `<li>${esc(k)}</li>`).join("")}</ul></details>` : ""}
      </section>
      <footer class="bottom">
        ${r.lesson && r.score < 100 ? `<a class="btn ghost" href="#/lecon/${r.lesson.id}">Revoir la leçon</a>` : ""}
        <a class="btn" href="#/">Terminer</a>
      </footer>`, "results-view");
  }

  // ---------- Progression ----------

  function viewStats() {
    const all = orderedLessons();
    const byTheme = {};
    all.forEach((l) => {
      byTheme[l.theme] = byTheme[l.theme] || { total: 0, done: 0, lesson: l };
      byTheme[l.theme].total++;
      if (state.completed[l.id]) byTheme[l.theme].done++;
    });
    const rows = Object.values(byTheme).map(({ total, done, lesson }) => {
      const t = theme(lesson);
      return `<div class="theme-row" style="--c:${t.couleur}">
        <span>${t.emoji} ${esc(t.nom)}</span>
        <div class="progress small"><div style="width:${(done / total) * 100}%"></div></div>
        <span class="muted">${done}/${total}</span>
      </div>`;
    }).join("");
    const daysActive = Object.values(state.days).filter((d) => d.lessons > 0).length;

    render(`<header class="lesson-bar"><a class="close" href="#/" aria-label="Retour">←</a><h2>Progression</h2></header>
      <div class="tiles">
        <div class="tile fire"><span>Série actuelle</span><strong>🔥 ${currentStreak()}</strong></div>
        <div class="tile"><span>Meilleure série</span><strong>${state.bestStreak || 0}</strong></div>
        <div class="tile xp"><span>XP total</span><strong>${state.xp}</strong></div>
        <div class="tile"><span>Jours actifs</span><strong>${daysActive}</strong></div>
      </div>
      <section class="card"><h3>Par thématique</h3>${rows}</section>
      <button class="btn ghost danger" id="reset">Réinitialiser ma progression</button>`, "stats");
    document.getElementById("reset").onclick = () => {
      if (confirm("Effacer toute ta progression ?")) { state = defaultState(); saveState(); go("#/"); }
    };
  }

  // ---------- Routeur ----------

  function go(hash) {
    if (location.hash === hash) route(); else location.hash = hash;
  }

  function route() {
    const parts = (location.hash || "#/").slice(2).split("/");
    switch (parts[0]) {
      case "lecon": return viewLesson(parts[1]);
      case "quiz": return viewQuiz(parts[1]);
      case "revision": return viewReview();
      case "stats": return viewStats();
      default: return viewHome();
    }
  }

  window.addEventListener("hashchange", route);

  Promise.all((window.LESSON_INDEX || []).map((id) => loadScript("content/lecons/" + id + ".js")))
    .then(route);

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
