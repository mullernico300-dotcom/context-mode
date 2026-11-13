/* Motivation & Übungsmodi: Punkte (XP), Level, Tages-Serie, Abzeichen, Wiederholen im
   richtigen Abstand, automatische Karten/Fragen aus Paragrafen, Tages-Training, Paare-Spiel. */
(function () {
  'use strict';
  const { esc, mischen, schluessel, toast } = U;
  const KEY = 'lernplattform.spiel.v1';
  const TAGESZIEL = 30;

  /* ---------------- Speicher ---------------- */
  function lade() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* gesperrt */ }
    s = s || {};
    s.xp = s.xp || 0; s.tage = s.tage || {}; s.abzeichen = s.abzeichen || {};
    s.fehler = s.fehler || []; s.box = s.box || {}; s.zaehler = s.zaehler || {}; s.bestzeit = s.bestzeit || {};
    return s;
  }
  function sichere(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* gesperrt */ } }

  function tag(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function plusTage(n) { const d = new Date(); d.setDate(d.getDate() + n); return tag(d); }

  /* ---------------- Level, Serie, Abzeichen ---------------- */
  const levelVon = (xp) => Math.floor(Math.sqrt(xp / 50)) + 1;
  const xpFuerLevel = (l) => 50 * (l - 1) * (l - 1);

  function serie(s) {
    // zählt zusammenhängende Lerntage bis heute (oder bis gestern, wenn heute noch nichts gelernt wurde)
    let n = 0;
    const d = new Date();
    if (!s.tage[tag(d)]) d.setDate(d.getDate() - 1);
    while (s.tage[tag(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  const ABZEICHEN = [
    ['start', '🌱', 'Erster Schritt', 'Die ersten Punkte gesammelt', (s) => s.xp > 0],
    ['serie3', '🔥', '3 Tage am Stück', 'Drei Tage hintereinander gelernt', (s) => serie(s) >= 3],
    ['serie7', '🚀', 'Eine Woche dran', 'Sieben Tage hintereinander gelernt', (s) => serie(s) >= 7],
    ['xp100', '⭐', '100 Punkte', '100 XP gesammelt', (s) => s.xp >= 100],
    ['xp500', '🌟', '500 Punkte', '500 XP gesammelt', (s) => s.xp >= 500],
    ['xp1500', '💎', '1.500 Punkte', '1.500 XP gesammelt', (s) => s.xp >= 1500],
    ['para', '§', 'Paragrafen-Profi', '25 Paragrafen verstanden', (s) => (s.zaehler.para || 0) >= 25],
    ['quiz', '🏆', 'Quiz-Champion', 'Die Quiz-Show komplett gewonnen', (s) => (s.zaehler.quizsieg || 0) >= 1],
    ['raetsel', '🧩', 'Rätselknacker', 'Ein Kreuzworträtsel gelöst', (s) => (s.zaehler.raetsel || 0) >= 1],
    ['paare', '⚡', 'Blitzmerker', 'Paare-Spiel in unter 45 Sekunden', (s) => Object.values(s.bestzeit).some((t) => t < 45)],
    ['ziel', '🎯', 'Zielstrebig', 'Ein eigenes Ziel geschafft', (s) => (s.zaehler.ziel || 0) >= 1],
    ['training', '💪', 'Trainings-Fan', 'Fünf Tages-Trainings beendet', (s) => (s.zaehler.training || 0) >= 5],
    ['fehlerfrei', '🎓', 'Fehlerfrei', 'Ein Tages-Training ohne Fehler', (s) => (s.zaehler.fehlerfrei || 0) >= 1]
  ];

  function pruefeAbzeichen(s) {
    ABZEICHEN.forEach(([id, icon, name, , test]) => {
      if (!s.abzeichen[id] && test(s)) {
        s.abzeichen[id] = tag();
        setTimeout(() => { toast(`${icon} Neues Abzeichen: ${name}`); konfetti(); }, 600);
      }
    });
  }

  function zeigeChip() {
    const c = document.getElementById('xpChip');
    if (!c) return;
    const s = lade();
    c.innerHTML = `<span title="Tage in Folge">🔥 ${serie(s)}</span><span title="Punkte">⭐ ${s.xp.toLocaleString('de-DE')}</span>`;
  }

  /* Punkte vergeben; zaehler = optionaler Name eines Zählers für Abzeichen */
  function xp(n, zaehler) {
    const s = lade();
    const vorher = levelVon(s.xp);
    s.xp += n;
    s.tage[tag()] = (s.tage[tag()] || 0) + n;
    if (zaehler) s.zaehler[zaehler] = (s.zaehler[zaehler] || 0) + 1;
    pruefeAbzeichen(s);
    sichere(s);
    zeigeChip();
    const jetzt = levelVon(s.xp);
    if (jetzt > vorher) { toast(`🎉 Level ${jetzt} erreicht!`); konfetti(); }
  }

  /* ---------------- Konfetti ---------------- */
  function konfetti() {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas');
    c.className = 'konfetti';
    c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    const g = c.getContext('2d');
    const farben = ['#6366f1', '#f59e0b', '#12a36b', '#ec4899', '#0ea5a4', '#fde68a'];
    const teile = Array.from({ length: 110 }, () => ({
      x: c.width / 2 + (Math.random() - 0.5) * c.width * 0.4, y: c.height * 0.35,
      vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 3,
      r: 4 + Math.random() * 5, f: farben[Math.floor(Math.random() * farben.length)], w: Math.random() * 6
    }));
    const start = performance.now();
    (function bild(t) {
      const a = (t - start) / 1900;
      g.clearRect(0, 0, c.width, c.height);
      teile.forEach((p) => {
        p.vy += 0.38; p.x += p.vx; p.y += p.vy; p.w += 0.2;
        g.globalAlpha = Math.max(0, 1 - a);
        g.fillStyle = p.f;
        g.fillRect(p.x, p.y, p.r, p.r * (0.5 + Math.abs(Math.sin(p.w)) * 0.7));
      });
      if (a < 1) requestAnimationFrame(bild); else c.remove();
    })(start);
  }

  /* ---------------- Inhalte automatisch aus Paragrafen ---------------- */
  function kartenFuer(lf) {
    if (lf.karten.length) return lf.karten;
    return lf.paragrafen.map((p) => ({ vorne: `Was regelt ${p.ref}?`, hinten: p.text, thema: p.gruppe }));
  }

  function kurz(text, max) {
    const t = String(text);
    if (t.length <= max) return t;
    const satz = t.slice(0, max);
    const ende = Math.max(satz.lastIndexOf('. '), satz.lastIndexOf('? '), satz.lastIndexOf(': '));
    return ende > max * 0.45 ? satz.slice(0, ende + 1) : satz.slice(0, satz.lastIndexOf(' ')) + ' …';
  }

  function quizFuer(lf) {
    const eigene = lf.quiz.filter((q) => q.frage && q.antworten.filter((a) => a).length >= 2 && q.antworten[q.richtig]);
    if (eigene.length >= 5 || lf.paragrafen.length < 4) return eigene;
    const refs = [...new Set(lf.paragrafen.map((p) => p.ref))];
    const auto = lf.paragrafen.map((p) => {
      // Ablenker: bevorzugt aus demselben Gesetz (z. B. alle „BGB“), damit es nicht zu leicht wird
      const gesetz = p.ref.split(' ').pop();
      const andere = mischen(refs.filter((r) => r !== p.ref));
      const nah = andere.filter((r) => r.endsWith(gesetz));
      const falsch = [...nah, ...andere.filter((r) => !r.endsWith(gesetz))].slice(0, 3);
      return {
        frage: `Welcher Paragraf passt? „${kurz(p.text, 170)}“`,
        antworten: [p.ref, ...falsch],
        richtig: 0,
        stufe: 1 + Math.floor(Math.random() * 3),
        erklaerung: `${p.ref}: ${kurz(p.text, 140)}`
      };
    });
    return eigene.concat(auto);
  }

  /* ---------------- Wiederholen im richtigen Abstand (Karteikasten mit 5 Fächern) ---------------- */
  const ABSTAND = [0, 0, 1, 3, 7, 21]; // Tage bis zur nächsten Wiederholung je Fach
  function bewerteKarte(lfId, key, gewusst) {
    const s = lade();
    s.box[lfId] = s.box[lfId] || {};
    const alt = s.box[lfId][key] || { b: 0 };
    const b = gewusst ? Math.min(5, Math.max(2, alt.b + 1)) : 1; // gewusst: frühestens morgen wieder
    s.box[lfId][key] = { b, f: plusTage(ABSTAND[b]) };
    sichere(s);
  }
  function faellig(lfId, key) {
    const e = (lade().box[lfId] || {})[key];
    return !e || e.f <= tag();
  }
  function fach(lfId, key) { return ((lade().box[lfId] || {})[key] || { b: 0 }).b; }

  /* ---------------- Fehler merken (für das Tages-Training) ---------------- */
  function merkeFehler(lfId, f) {
    const s = lade();
    const id = schluessel(f.frage);
    s.fehler = s.fehler.filter((x) => x.id !== id);
    s.fehler.unshift({ id, lfId, frage: f.frage, erklaerung: f.erklaerung || '', antworten: f.optionen.map((o) => o.t), richtig: f.optionen.findIndex((o) => o.richtig) });
    s.fehler = s.fehler.slice(0, 40);
    sichere(s);
  }
  function loescheFehler(frage) {
    const s = lade();
    const id = schluessel(frage);
    if (s.fehler.some((x) => x.id === id)) { s.fehler = s.fehler.filter((x) => x.id !== id); sichere(s); }
  }

  /* ---------------- Fortschritts-Kachel auf der Startseite ---------------- */
  function startHtml() {
    const s = lade();
    const lvl = levelVon(s.xp);
    const von = xpFuerLevel(lvl), bis = xpFuerLevel(lvl + 1);
    const heute = s.tage[tag()] || 0;
    const p = Math.min(1, heute / TAGESZIEL);
    const woche = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      woche.push({ name: d.toLocaleDateString('de-DE', { weekday: 'short' }).slice(0, 2), an: !!s.tage[tag(d)], heute: i === 0 });
    }
    const hat = ABZEICHEN.filter((a) => s.abzeichen[a[0]]).length;
    return `
      <section class="glas block stand">
        <div class="stand-oben">
          <div class="ring" style="--p:${p}" role="img" aria-label="Tagesziel: ${heute} von ${TAGESZIEL} Punkten"><b>${Math.min(heute, 999)}</b><small>von ${TAGESZIEL}</small></div>
          <div class="stand-text">
            <h2>${heute >= TAGESZIEL ? 'Tagesziel geschafft!' : heute ? 'Weiter so – das Tagesziel ist nah' : 'Bereit für heute?'}</h2>
            <div class="stand-zahlen">
              <span><b>🔥 ${serie(s)}</b> ${serie(s) === 1 ? 'Tag' : 'Tage'} in Folge</span>
              <span><b>Level ${lvl}</b> · ${s.xp.toLocaleString('de-DE')} XP</span>
            </div>
            <div class="balken" title="Fortschritt bis Level ${lvl + 1}"><i style="width:${Math.round(((s.xp - von) / (bis - von)) * 100)}%"></i></div>
            <div class="woche">${woche.map((w) => `<span class="${w.an ? 'an' : ''} ${w.heute ? 'heute' : ''}">${w.name}</span>`).join('')}</div>
          </div>
        </div>
        <a class="btn primaer training-knopf" href="#training">▶ Tages-Training starten <small>7 Fragen · ca. 3 Minuten${s.fehler.length ? ` · ${Math.min(3, s.fehler.length)} aus deinen Fehlern` : ''}</small></a>
        <details class="abz">
          <summary>🏅 Abzeichen <span class="chip">${hat} von ${ABZEICHEN.length}</span></summary>
          <ul>${ABZEICHEN.map(([id, icon, name, text]) => `<li class="${s.abzeichen[id] ? 'hat' : ''}" title="${esc(text)}"><i>${icon}</i><b>${esc(name)}</b><span>${esc(text)}</span></li>`).join('')}</ul>
        </details>
      </section>`;
  }

  /* ---------------- Tages-Training: 7 gemischte Fragen aus allen Fächern ---------------- */
  function zeigeTraining(app) {
    const s0 = lade();
    const lfs = Store.lernfelder();
    const name = (id) => { const l = lfs.find((x) => x.id === id); return l ? U.kurz(l) : ''; };
    let pool = [];
    lfs.forEach((lf) => quizFuer(lf).forEach((q) => pool.push({ lfId: lf.id, frage: q.frage, erklaerung: q.erklaerung || '', antworten: q.antworten, richtig: q.richtig })));
    const alteFehler = mischen(s0.fehler).slice(0, 3).map((f) => ({ ...f, wdh: true }));
    const gesehen = new Set(alteFehler.map((f) => f.frage));
    const fragen = alteFehler.concat(mischen(pool).filter((q) => !gesehen.has(q.frage)).slice(0, 7 - alteFehler.length)).map((q) => ({
      lfId: q.lfId, frage: q.frage, erklaerung: q.erklaerung, wdh: q.wdh,
      optionen: mischen(q.antworten.map((t, i) => ({ t, richtig: i === q.richtig })).filter((o) => o.t))
    }));
    if (fragen.length < 3) {
      app.innerHTML = '<a class="zurueck" href="#start">← Zurück</a><div class="glas leer">Für das Tages-Training gibt es noch zu wenige Fragen.</div>';
      return null;
    }
    const z = { i: 0, wahl: null, richtig: 0, herzen: 3, punkte: 0, ende: false };

    function zeichne() {
      if (z.ende) {
        const perfekt = z.richtig === fragen.length;
        app.innerHTML = `
          <section class="glas block tr-ende">
            <div class="tr-gross">${z.herzen <= 0 ? '💔' : perfekt ? '🏆' : '💪'}</div>
            <h1>${z.herzen <= 0 ? 'Keine Herzen mehr' : perfekt ? 'Perfekt!' : 'Training geschafft!'}</h1>
            <p>${z.richtig} von ${fragen.length} richtig · <b>+${z.punkte} XP</b></p>
            <p class="klein">${z.richtig < fragen.length ? 'Deine Fehler kommen im nächsten Training noch einmal dran.' : 'Alle Antworten saßen.'}</p>
            <div class="admin-knoepfe" style="justify-content:center">
              <a class="btn primaer" href="#start">Zur Übersicht</a>
              <button class="btn" data-tr="neu">Noch eine Runde</button>
            </div>
          </section>`;
        return;
      }
      const f = fragen[z.i];
      const fertig = z.wahl !== null;
      const ok = fertig && f.optionen[z.wahl].richtig;
      app.innerHTML = `
        <div class="tr-kopf">
          <a class="mini" href="#start" aria-label="Training beenden" title="Beenden">✕</a>
          <div class="balken"><i style="width:${(z.i / fragen.length) * 100}%"></i></div>
          <span class="herzen" aria-label="${z.herzen} Herzen">${'❤️'.repeat(z.herzen)}${'🤍'.repeat(3 - z.herzen)}</span>
        </div>
        <section class="glas block tr-frage">
          <span class="chip">${esc(name(f.lfId))}${f.wdh ? ' · Wiederholung' : ''}</span>
          <h2>${esc(f.frage)}</h2>
          <div class="tr-optionen">
            ${f.optionen.map((o, i) => `<button class="tr-opt ${fertig ? (o.richtig ? 'richtig' : i === z.wahl ? 'falsch' : '') : ''}" data-opt="${i}" ${fertig ? 'disabled' : ''}>${esc(o.t)}</button>`).join('')}
          </div>
          ${fertig ? `<div class="tr-feedback ${ok ? 'gut' : 'schlecht'}"><b>${ok ? '✓ Richtig! +5 XP' : '✗ Nicht ganz.'}</b>${f.erklaerung ? `<span>${esc(f.erklaerung)}</span>` : ''}
            <button class="btn primaer" data-tr="weiter">${z.i === fragen.length - 1 || z.herzen <= 0 ? 'Zum Ergebnis' : 'Weiter →'}</button></div>` : ''}
        </section>`;
    }

    function klick(e) {
      if (!location.hash.startsWith('#training')) return;
      const o = e.target.closest('[data-opt]');
      if (o && z.wahl === null) {
        z.wahl = Number(o.dataset.opt);
        const f = fragen[z.i];
        if (f.optionen[z.wahl].richtig) { z.richtig++; z.punkte += 5; xp(5); loescheFehler(f.frage); }
        else { z.herzen--; merkeFehler(f.lfId, f); }
        return zeichne();
      }
      const t = e.target.closest('[data-tr]');
      if (!t) return;
      if (t.dataset.tr === 'neu') { app.removeEventListener('click', klick); return (App.setzeAufraeumen(zeigeTraining(app))); }
      if (z.i === fragen.length - 1 || z.herzen <= 0) {
        z.ende = true;
        const perfekt = z.richtig === fragen.length;
        const bonus = z.herzen > 0 ? (perfekt ? 20 : 10) : 0;
        z.punkte += bonus;
        if (z.herzen > 0) { xp(bonus, 'training'); if (perfekt) { xp(0, 'fehlerfrei'); konfetti(); } }
      } else { z.i++; z.wahl = null; }
      zeichne();
      window.scrollTo(0, 0);
    }
    app.addEventListener('click', klick);
    zeichne();
    return () => app.removeEventListener('click', klick);
  }

  /* ---------------- Paare-Spiel: Begriff und Erklärung zuordnen, auf Zeit ---------------- */
  function zeigePaare(app, lf) {
    const quelle = lf.karten.length
      ? lf.karten.map((k) => ({ a: k.vorne, b: k.hinten }))
      : lf.paragrafen.map((p) => ({ a: p.ref, b: p.text }));
    const paare = mischen(quelle).slice(0, 6);
    let kacheln, offen = null, gefunden = 0, fehler = 0, start = 0, timer = null, gesperrt = false;

    function neu() {
      kacheln = mischen(paare.flatMap((p, i) => [{ id: i, t: p.a, art: 'a' }, { id: i, t: kurz(p.b, 110), art: 'b' }]));
      offen = null; gefunden = 0; fehler = 0; start = 0; gesperrt = false;
      clearInterval(timer);
      const best = lade().bestzeit[lf.id];
      app.innerHTML = `
        <a class="zurueck" href="#lf-${esc(lf.id)}-karten">← Zurück zu den Karten</a>
        <header class="lf-kopf"><span class="lf-nr">${esc(U.kurz(lf))}</span><h1>Paare-Spiel</h1>
          <p>Tippe zwei Kacheln an, die zusammengehören. Die Zeit läuft ab dem ersten Tipp.</p></header>
        <div class="paare-leiste glas"><span>⏱ <b id="pZeit">0,0</b> s</span><span>Fehler: <b id="pFehler">0</b></span><span>Bestzeit: <b>${best ? best.toFixed(1).replace('.', ',') + ' s' : '–'}</b></span></div>
        <div class="paare-gitter">${kacheln.map((k, i) => `<button class="kachel ${k.art}" data-k="${i}">${esc(k.t)}</button>`).join('')}</div>
        <div id="pEnde"></div>`;
    }

    function klick(e) {
      if (!location.hash.startsWith('#paare-')) return;
      if (e.target.closest('[data-paare-neu]')) return neu();
      const el = e.target.closest('.kachel');
      if (!el || gesperrt || el.classList.contains('weg') || el.classList.contains('gewaehlt')) return;
      if (!start) {
        start = performance.now();
        timer = setInterval(() => { const z = document.getElementById('pZeit'); if (z) z.textContent = ((performance.now() - start) / 1000 + fehler * 2).toFixed(1).replace('.', ','); }, 100);
      }
      const k = kacheln[Number(el.dataset.k)];
      if (!offen) { offen = { k, el }; el.classList.add('gewaehlt'); return; }
      if (offen.k.id === k.id && offen.k.art !== k.art) {
        [el, offen.el].forEach((x) => { x.classList.remove('gewaehlt'); x.classList.add('weg'); });
        offen = null; gefunden++;
        if (gefunden === paare.length) fertig();
      } else {
        fehler++;
        document.getElementById('pFehler').textContent = fehler;
        const a = offen.el; offen = null; gesperrt = true;
        [el, a].forEach((x) => x.classList.add('falsch'));
        setTimeout(() => { [el, a].forEach((x) => x.classList.remove('falsch', 'gewaehlt')); gesperrt = false; }, 550);
      }
    }

    function fertig() {
      clearInterval(timer);
      const zeit = (performance.now() - start) / 1000 + fehler * 2; // 2 Strafsekunden je Fehler
      const s = lade();
      const rekord = !s.bestzeit[lf.id] || zeit < s.bestzeit[lf.id];
      if (rekord) { s.bestzeit[lf.id] = zeit; sichere(s); }
      xp(15, 'paare');
      konfetti();
      document.getElementById('pZeit').textContent = zeit.toFixed(1).replace('.', ',');
      document.getElementById('pEnde').innerHTML = `
        <section class="glas block tr-ende"><div class="tr-gross">${rekord ? '⚡' : '🎉'}</div>
          <h1>${zeit.toFixed(1).replace('.', ',')} Sekunden</h1>
          <p>${rekord ? 'Neue Bestzeit!' : 'Geschafft!'} ${fehler ? `(inklusive ${fehler * 2} Strafsekunden)` : 'Ohne einen einzigen Fehler.'} · <b>+15 XP</b></p>
          <button class="btn primaer" data-paare-neu>Nochmal spielen</button></section>`;
    }

    if (paare.length < 3) {
      app.innerHTML = `<a class="zurueck" href="#lf-${esc(lf.id)}">← Zurück</a><div class="glas leer">Für das Paare-Spiel braucht dieses Fach mindestens drei Karten oder Paragrafen.</div>`;
      return null;
    }
    app.addEventListener('click', klick);
    neu();
    return () => { clearInterval(timer); app.removeEventListener('click', klick); };
  }

  window.Spiel = { xp, konfetti, kartenFuer, quizFuer, bewerteKarte, faellig, fach, merkeFehler, loescheFehler, startHtml, zeigeTraining, zeigePaare, zeigeChip };
  zeigeChip();
})();
