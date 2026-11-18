/* Planer: Stundenplan, Schul-/Arbeitstage, Tests mit Lernplan, Noten.
   Alles hier ist persönlich und bleibt NUR im Browser dieses Geräts (localStorage).
   Schulzeiten, Pausen und Fächer kommen aus js/schule.js (window.SCHULE), sonst aus den Lernfeldern. */
(function () {
  'use strict';
  const { esc, toast } = U;
  const KEY = 'lernplattform.planer.v1';
  const TAGE = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
  const KURZ = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const ARTEN = [['ka', 'Klassenarbeit', 2], ['test', 'Test', 1], ['muendlich', 'Mündlich', 1], ['referat', 'Referat', 1], ['sonst', 'Sonstiges', 1]];

  /* ---------------- Speicher ---------------- */
  function leer() { return { faecher: null, vorlage: {}, tage: {}, tests: [], noten: [], erledigt: {} }; }
  function lade() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* gesperrt */ }
    s = Object.assign(leer(), s || {});
    ['vorlage', 'tage', 'erledigt'].forEach((k) => { if (!s[k] || typeof s[k] !== 'object') s[k] = {}; });
    ['tests', 'noten'].forEach((k) => { if (!Array.isArray(s[k])) s[k] = []; });
    return s;
  }
  function sichere(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); return true; }
    catch (e) { toast('Speichern nicht möglich – der Browser-Speicher ist gesperrt oder voll.'); return false; }
  }

  /* ---------------- Datum ---------------- */
  const iso = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const ausIso = (t) => { const [y, m, d] = t.split('-').map(Number); return new Date(y, m - 1, d); };
  const heute = () => iso(new Date());
  const plus = (t, n) => { const d = ausIso(t); d.setDate(d.getDate() + n); return iso(d); };
  const tageZwischen = (a, b) => Math.round((ausIso(b) - ausIso(a)) / 864e5);
  const wochentag = (t) => (ausIso(t).getDay() + 6) % 7; // 0 = Montag
  const montag = (t) => plus(t, -wochentag(t));
  const schoen = (t, opt) => ausIso(t).toLocaleDateString('de-DE', opt || { weekday: 'short', day: '2-digit', month: '2-digit' });
  function kw(t) {
    const d = ausIso(t); d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
    const j = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - j) / 864e5 - 3 + ((j.getDay() + 6) % 7)) / 7);
  }

  /* ---------------- Schule: Zeiten, Pausen, Stunden-Raster ---------------- */
  const minuten = (z) => { const [h, m] = z.split(':').map(Number); return h * 60 + m; };
  const uhr = (m) => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  function schule() {
    const S = window.SCHULE || {};
    return { beginn: S.beginn || '08:00', ende: S.ende || '15:00', stunde: S.stunde || 45, pausen: S.pausen || [] };
  }
  /* Stunden-Slots zu je 45 Minuten, die nicht in eine Pause fallen. block = Abschnitt zwischen zwei Pausen. */
  function raster() {
    const sc = schule();
    const pausen = sc.pausen.map(([a, b]) => [minuten(a), minuten(b)]).sort((x, y) => x[0] - y[0]);
    const slots = [];
    let t = minuten(sc.beginn), block = 0;
    const ende = minuten(sc.ende);
    while (t + sc.stunde <= ende) {
      const p = pausen.find(([a, b]) => t < b && t + sc.stunde > a);
      if (p) { t = p[1]; block++; continue; }
      slots.push({ nr: slots.length + 1, von: t, bis: t + sc.stunde, block });
      t += sc.stunde;
    }
    return { slots, pausen };
  }

  /* ---------------- Fächer ---------------- */
  function faecher(s) {
    s = s || lade();
    if (Array.isArray(s.faecher) && s.faecher.length) return s.faecher;
    if (window.SCHULE && Array.isArray(window.SCHULE.faecher)) return window.SCHULE.faecher.map((f) => ({ ...f }));
    return Store.lernfelder().map((l) => ({ id: l.id, name: U.kurz(l), lehrkraft: '' }));
  }
  const fachVon = (id, s) => faecher(s).find((f) => f.id === id) || { id, name: id || '–', lehrkraft: '' };
  /* passendes Lernfeld mit Inhalten (id gleich, sonst Name „LF 6“ → lf6, „Sozialkunde“ → sk) */
  function lernfeldZu(fachId, s) {
    const lfs = Store.lernfelder();
    const f = fachVon(fachId, s);
    let lf = lfs.find((l) => l.id === f.id);
    if (!lf) { const m = /lf\s*0*(\d+)/i.exec(f.name || ''); if (m) lf = lfs.find((l) => String(l.nummer) === m[1] && /^lf/i.test(l.id)); }
    if (!lf && /sozial/i.test(f.name || '')) lf = lfs.find((l) => /sozial/i.test(l.kurz || '') || l.id === 'sk');
    return lf || null;
  }

  /* ---------------- Stunden eines Tages (zusammengelegt zu 45/90 Minuten) ---------------- */
  function stundenAm(wt, s) {
    s = s || lade();
    const belegung = s.vorlage[wt] || [];
    const { slots } = raster();
    const aus = [];
    slots.forEach((sl, i) => {
      const fach = belegung[i];
      if (!fach) return;
      const vor = aus[aus.length - 1];
      if (vor && vor.fach === fach && vor.block === sl.block && vor.bis === sl.von && vor.dauer < 90) { vor.bis = sl.bis; vor.dauer += 45; return; }
      aus.push({ fach, von: sl.von, bis: sl.bis, block: sl.block, dauer: 45 });
    });
    return aus;
  }
  const schulende = (wt, s) => { const st = stundenAm(wt, s); return st.length ? st[st.length - 1].bis : null; };

  /* ---------------- Lernplan zu einem Test ---------------- */
  function woerter(text) {
    return String(text || '').toLowerCase().split(/[^a-zäöüß0-9§]+/).filter((w) => w.length > 3 && !/^(test|über|klausur|thema|arbeit|lernen|und|oder|kapitel)$/.test(w));
  }
  function aufgabenFuer(test, s) {
    const lf = lernfeldZu(test.fach, s);
    if (!lf || !window.Trainer) return { lf, liste: [] };
    const alle = Trainer.von(lf.id);
    const genau = alle.filter((a) => a.thema.toLowerCase() === String(test.thema || '').toLowerCase());
    let liste = genau;
    if (!liste.length) {
      const ws = woerter(test.thema);
      liste = ws.length ? alle.filter((a) => {
        const heu = (a.thema + ' ' + a.f + ' ' + a.r.join(' ')).toLowerCase();
        return ws.some((w) => heu.includes(w) || (w.length > 6 && heu.includes(w.slice(0, 6))));
      }) : [];
    }
    return { lf, liste: liste.slice().sort((a, b) => a.id.localeCompare(b.id)) };
  }
  function paragrafenFuer(test, lf) {
    if (!lf) return [];
    const ws = woerter(test.thema);
    const exakt = lf.paragrafen.filter((p) => (p.gruppe || '').toLowerCase().startsWith(String(test.thema || '').toLowerCase()));
    if (exakt.length) return exakt;
    return ws.length ? lf.paragrafen.filter((p) => ws.some((w) => (p.gruppe + ' ' + p.text + ' ' + p.ref).toLowerCase().includes(w))) : [];
  }
  /* Tage vor dem Test, an denen gelernt wird (inkl. Wochenende, ohne Testtag) */
  function lerntage(test) {
    const n = Math.max(1, Math.min(21, Number(test.lerntage) || 4));
    const tage = [];
    for (let k = n; k >= 1; k--) tage.push(plus(test.datum, -k));
    return tage;
  }
  /* Aufgaben eines Lerntags: gleichmäßig verteilt, letzter Tag = Generalprobe mit allen offenen/falschen */
  function aufgabenAm(test, tag, s) {
    const { lf, liste } = aufgabenFuer(test, s);
    const tage = lerntage(test);
    const k = tage.indexOf(tag);
    if (k < 0 || !liste.length) return { lf, liste: [], letzter: false };
    const letzter = k === tage.length - 1;
    if (letzter && tage.length > 1) {
      const st = Trainer.status();
      const offen = liste.filter((a) => st[a.id] !== 'r');
      const auswahl = (offen.length ? offen : liste).slice(0, 10);
      return { lf, liste: auswahl, letzter };
    }
    const teile = Math.max(1, tage.length - (tage.length > 1 ? 1 : 0));
    return { lf, liste: liste.filter((_, i) => i % teile === k), letzter };
  }

  /* ---------------- Noten ---------------- */
  function noteWert(text) {
    const t = String(text || '').trim().replace(',', '.');
    const m = /^([1-6](?:\.\d+)?)\s*([+-])?$/.exec(t);
    if (!m) return NaN;
    let v = Number(m[1]);
    if (m[2] === '+') v -= 0.3;
    if (m[2] === '-') v += 0.3;
    return Math.max(1, Math.min(6, Math.round(v * 100) / 100));
  }
  function schnitt(noten) {
    const g = noten.reduce((n, x) => n + (Number(x.gewicht) || 1), 0);
    return g ? noten.reduce((n, x) => n + x.wert * (Number(x.gewicht) || 1), 0) / g : null;
  }
  const zahl2 = (v) => v == null ? '–' : v.toFixed(2).replace('.', ',');
  const notenFarbe = (v) => v == null ? '' : v <= 2.5 ? 'gut' : v <= 3.5 ? 'mittel' : 'schlecht';

  /* ---------------- Sicherung (Export/Import) ---------------- */
  async function exportieren(box) {
    const s = lade();
    const text = JSON.stringify({ art: 'lernfeld-trainer-planer', version: 1, stand: new Date().toISOString(), daten: s }, null, 1);
    const name = 'planer-sicherung-' + heute() + '.json';
    let gespeichert = false;
    try {
      const dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null;
      if (dl) { await dl.save({ filename: name, data: new Blob([text], { type: 'application/json' }) }); gespeichert = true; }
    } catch (e) { /* abgelehnt oder nicht verfügbar: Text zum Kopieren bleibt */ }
    if (!gespeichert && !(window.claude && window.claude.use)) { U.download(name, text, 'application/json'); }
    box.hidden = false;
    box.querySelector('textarea').value = text;
    toast(gespeichert ? 'Sicherung gespeichert' : 'Sicherung erstellt – kopiere den Text oder speichere die Datei');
  }
  function importieren(text) {
    let j;
    try { j = JSON.parse(text); } catch (e) { return toast('Das ist keine gültige Sicherung.'); }
    const d = j && j.art === 'lernfeld-trainer-planer' ? j.daten : null;
    if (!d || typeof d !== 'object') return toast('Das ist keine Sicherung des Planers.');
    const s = Object.assign(leer(), d);
    if (sichere(s)) toast('Sicherung eingespielt');
  }

  /* =====================================================================
     Ansichten
     ===================================================================== */
  const REITER = [['heute', '☀️', 'Heute'], ['kalender', '📅', 'Kalender'], ['stundenplan', '🕘', 'Stunden'], ['tests', '📝', 'Tests'], ['noten', '🎓', 'Noten']];
  let zustand = { monat: null, wochentag: 0, woche: null, offenTest: null };

  function zeige(app, reiter) {
    if (!REITER.some((r) => r[0] === reiter)) reiter = 'heute';
    app.innerHTML = `
      <a class="zurueck" href="#start">← Zur Übersicht</a>
      <header class="lf-kopf"><span class="lf-nr pl-marke">Planer</span><h1>Mein Schulplan</h1>
        <p>Stundenplan, Tests und Noten. <b>Alles hier bleibt nur auf diesem Gerät</b> – niemand sonst sieht es.</p></header>
      <nav class="tabs glas pl-tabs" aria-label="Planer">
        ${REITER.map(([id, icon, name]) => `<a href="#planer-${id}" class="${id === reiter ? 'aktiv' : ''}"><span>${icon}</span>${name}</a>`).join('')}
      </nav>
      <div id="plInhalt"></div>`;
    const el = app.querySelector('#plInhalt');
    ({ heute: zeigeHeute, kalender: zeigeKalender, stundenplan: zeigeStundenplan, tests: zeigeTests, noten: zeigeNoten })[reiter](el);
    return null;
  }

  /* ---------------- Heute ---------------- */
  function aktiveTests(s, tag) {
    return s.tests.filter((t) => t.datum >= tag).sort((a, b) => a.datum.localeCompare(b.datum));
  }
  function lernKarte(t, tag, s) {
    const f = fachVon(t.fach, s);
    const rest = tageZwischen(tag, t.datum);
    const tage = lerntage(t);
    const k = tage.indexOf(tag);
    const { lf, liste, letzter } = aufgabenAm(t, tag, s);
    const erledigt = (s.erledigt[t.id] || {})[tag];
    const paras = paragrafenFuer(t, lf);
    const vid = lf && window.Spiel ? Spiel.videosVon(lf.id).find((v) => woerter(t.thema).some((w) => (v.titel + ' ' + v.refs.join(' ')).toLowerCase().includes(w))) : null;
    let aufgabe;
    if (rest === 0) aufgabe = '<p class="pl-gross">Heute ist der Test. Viel Erfolg! 🍀</p>';
    else if (k < 0) aufgabe = `<p class="klein">Die Lernphase beginnt am ${esc(schoen(tage[0]))}.</p>`;
    else if (!liste.length) aufgabe = `<p class="klein">Zu diesem Thema gibt es noch keine Übungsaufgaben. ${paras.length ? 'Lies heute die Paragrafen dazu.' : 'Lade Unterlagen dazu hoch – daraus entstehen Aufgaben.'}</p>`;
    else aufgabe = `<p><b>Tag ${k + 1} von ${tage.length}</b> · ${letzter && tage.length > 1 ? 'Generalprobe' : 'Heute'}: ${liste.length} ${liste.length === 1 ? 'Aufgabe' : 'Aufgaben'}
        ${erledigt ? `<span class="chip pl-ok">✓ erledigt · ${erledigt.richtig}/${erledigt.gesamt} richtig</span>` : ''}</p>
        <button class="btn primaer" data-pl-lernen="${esc(t.id)}">${erledigt ? '↻ Nochmal üben' : '▶ Heutige Aufgaben starten'}</button>`;
    return `
      <article class="glas block pl-test" style="--akzent:${esc(lf ? lf.farbe : '#6366f1')}">
        <div class="pl-test-kopf"><span class="lf-nr">${esc(f.name)}</span>
          <span class="chip ${rest <= 1 ? 'pl-bald' : ''}">${rest === 0 ? 'heute' : rest === 1 ? 'morgen' : 'in ' + rest + ' Tagen'} · ${esc(schoen(t.datum))}</span></div>
        <h2>${esc(t.thema || 'Test')}</h2>
        ${aufgabe}
        <div class="pl-links">
          ${paras.length && lf ? `<button class="btn klein-btn" data-pl-para="${esc(t.id)}">§ ${paras.length} Paragrafen</button>` : ''}
          ${vid ? `<a class="btn klein-btn" href="#videos-${esc(lf.id)}">🎬 Erklärvideo</a>` : ''}
          ${lf ? `<a class="btn klein-btn" href="#lf-${esc(lf.id)}">${esc(U.kurz(lf))} öffnen</a>` : ''}
        </div>
      </article>`;
  }
  function tagesTimeline(tag, s) {
    const wt = wochentag(tag);
    if (wt > 4) return '<p class="klein">Wochenende – keine Schule.</p>';
    const art = s.tage[tag];
    const wahl = `<div class="pl-art">
        <button class="pille ${art === 'schule' ? 'aktiv' : ''}" data-pl-art="schule">🏫 Schule</button>
        <button class="pille ${art === 'arbeit' ? 'aktiv' : ''}" data-pl-art="arbeit">💼 Arbeit</button></div>`;
    if (art !== 'schule') return wahl + (art === 'arbeit' ? '<p class="klein">Heute ist ein Arbeitstag.</p>' : '<p class="klein">Ist heute Schule oder Arbeit? Tippe auf eins von beiden.</p>');
    const st = stundenAm(wt, s);
    if (!st.length) return wahl + '<p class="klein">Für diesen Wochentag ist noch kein Stundenplan eingetragen. <a href="#planer-stundenplan">Jetzt eintragen</a></p>';
    const jetzt = (new Date()).getHours() * 60 + (new Date()).getMinutes();
    return wahl + `<ol class="pl-zeitleiste">${st.map((x) => {
      const f = fachVon(x.fach, s);
      const laeuft = tag === heute() && jetzt >= x.von && jetzt < x.bis;
      return `<li class="${laeuft ? 'jetzt' : ''}"><time>${uhr(x.von)}–${uhr(x.bis)}</time><b>${esc(f.name)}</b><span>${esc(f.lehrkraft || '')}${x.dauer === 90 ? ' · Doppelstunde' : ''}</span></li>`;
    }).join('')}</ol>
      <p class="klein">Schulende ${uhr(schulende(wt, s))} Uhr</p>`;
  }
  function zeigeHeute(el) {
    const s = lade(), tag = heute();
    const tests = aktiveTests(s, tag);
    const jetztDran = tests.filter((t) => t.datum === tag || lerntage(t).includes(tag));
    const spaeter = tests.filter((t) => !jetztDran.includes(t));
    const neu = !Object.keys(s.vorlage).length && !s.tests.length && !Object.keys(s.tage).length;
    el.innerHTML = `
      ${neu ? `<section class="glas block pl-start"><h2>So richtest du deinen Planer ein</h2>
        <ol><li><a href="#planer-stundenplan">Stundenplan eintragen</a> – einmal, für jeden Wochentag.</li>
        <li><a href="#planer-kalender">Im Kalender markieren</a>, wann Schule und wann Arbeit ist.</li>
        <li><a href="#planer-tests">Tests eintragen</a> – der Lernplan verteilt die Aufgaben auf die Tage davor.</li></ol></section>` : ''}
      <section class="glas block"><h2>${esc(schoen(tag, { weekday: 'long', day: 'numeric', month: 'long' }))}</h2>${tagesTimeline(tag, s)}</section>
      ${jetztDran.length ? `<h2 class="pl-zw">Heute lernen</h2>${jetztDran.map((t) => lernKarte(t, tag, s)).join('')}` : `<section class="glas block"><h2>Heute lernen</h2><p class="klein">${tests.length ? 'Heute steht kein Lerntag an.' : 'Noch kein Test eingetragen.'} <a href="#planer-tests">Test eintragen</a></p></section>`}
      ${spaeter.length ? `<section class="glas block"><h2>Nächste Tests</h2><ul class="pl-liste">${spaeter.slice(0, 6).map((t) => `<li><b>${esc(fachVon(t.fach, s).name)}</b> ${esc(t.thema)}<span>${esc(schoen(t.datum))} · in ${tageZwischen(tag, t.datum)} Tagen · Lernen ab ${esc(schoen(lerntage(t)[0]))}</span></li>`).join('')}</ul></section>` : ''}`;
    el.onclick = (e) => {
      const a = e.target.closest('[data-pl-art]');
      if (a) { const st = lade(); st.tage[tag] = st.tage[tag] === a.dataset.plArt ? undefined : a.dataset.plArt; if (!st.tage[tag]) delete st.tage[tag]; sichere(st); return zeigeHeute(el); }
      const l = e.target.closest('[data-pl-lernen]');
      if (l) return starteLernen(l.dataset.plLernen, tag);
      const p = e.target.closest('[data-pl-para]');
      if (p) {
        const st = lade(); const t = st.tests.find((x) => x.id === p.dataset.plPara);
        const lf = t && lernfeldZu(t.fach, st);
        const ps = t ? paragrafenFuer(t, lf) : [];
        if (lf) App.sucheParagraf(lf.id, ps.length && ps[0].gruppe ? ps[0].gruppe : t.thema);
      }
    };
  }
  function starteLernen(testId, tag) {
    const s = lade();
    const t = s.tests.find((x) => x.id === testId);
    if (!t) return;
    const { lf, liste } = aufgabenAm(t, tag, s);
    if (!lf || !liste.length) return toast('Für heute gibt es keine Aufgaben.');
    Trainer.vorgabe = liste;
    Trainer.vorgabeTitel = 'Test: ' + (t.thema || fachVon(t.fach, s).name);
    Trainer.beiEnde = (erg) => {
      const st = lade();
      st.erledigt[testId] = st.erledigt[testId] || {};
      st.erledigt[testId][tag] = erg;
      sichere(st);
    };
    location.hash = '#aufgaben-' + lf.id + '-ziel';
  }

  /* ---------------- Kalender ---------------- */
  function zeigeKalender(el) {
    const s = lade(), tag = heute();
    if (!zustand.monat) zustand.monat = tag.slice(0, 7);
    const [y, m] = zustand.monat.split('-').map(Number);
    const erster = iso(new Date(y, m - 1, 1));
    const start = montag(erster);
    const letzter = iso(new Date(y, m, 0));
    const ende = plus(montag(letzter), 6);
    const testAm = {}, lernAm = {};
    s.tests.forEach((t) => { (testAm[t.datum] = testAm[t.datum] || []).push(t); lerntage(t).forEach((d) => { (lernAm[d] = lernAm[d] || []).push(t); }); });
    let html = '';
    for (let w = start; w <= ende; w = plus(w, 7)) {
      html += `<button class="pl-kw ${zustand.woche === w ? 'aktiv' : ''}" data-pl-woche="${w}" title="Woche bearbeiten">KW<br>${kw(w)}</button>`;
      for (let i = 0; i < 7; i++) {
        const d = plus(w, i);
        const art = s.tage[d];
        const klassen = ['pl-tag', d.slice(0, 7) !== zustand.monat ? 'fremd' : '', i > 4 ? 'we' : '', art || '', d === tag ? 'heute' : '', lernAm[d] ? 'lernen' : ''].join(' ');
        html += `<button class="${klassen}" ${i > 4 ? 'disabled' : `data-pl-tag="${d}"`} aria-label="${esc(schoen(d, { weekday: 'long', day: 'numeric', month: 'long' }))}${art ? ', ' + (art === 'schule' ? 'Schule' : 'Arbeit') : ''}">
          <span class="pl-nr">${ausIso(d).getDate()}</span>
          ${art ? `<span class="pl-sym">${art === 'schule' ? '🏫' : '💼'}</span>` : ''}
          ${testAm[d] ? '<span class="pl-testpunkt" title="Test">📝</span>' : ''}</button>`;
      }
    }
    const monatsTests = s.tests.filter((t) => t.datum.slice(0, 7) === zustand.monat).sort((a, b) => a.datum.localeCompare(b.datum));
    el.innerHTML = `
      <section class="glas block">
        <div class="pl-monat"><button class="mini" data-pl-monat="-1" aria-label="Vorheriger Monat">‹</button>
          <h2>${new Date(y, m - 1, 1).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</h2>
          <button class="mini" data-pl-monat="1" aria-label="Nächster Monat">›</button></div>
        <p class="klein">Tippe auf einen Tag: leer → 🏫 Schule → 💼 Arbeit → leer. Tippe auf „KW“, um eine ganze Woche festzulegen oder zu kopieren.</p>
        <div class="pl-gitter">
          <span></span>${KURZ.map((k) => `<span class="pl-kopf">${k}</span>`).join('')}
          ${html}
        </div>
        <div class="pl-legende"><span>🏫 Schule</span><span>💼 Arbeit</span><span><i class="pl-l-lernen"></i> Lerntag</span><span>📝 Test</span></div>
      </section>
      ${zustand.woche ? wochenBox(s) : ''}
      ${monatsTests.length ? `<section class="glas block"><h2>Tests im ${new Date(y, m - 1, 1).toLocaleDateString('de-DE', { month: 'long' })}</h2>
        <ul class="pl-liste">${monatsTests.map((t) => `<li><b>${esc(schoen(t.datum))}</b> ${esc(fachVon(t.fach, s).name)} · ${esc(t.thema)}</li>`).join('')}</ul></section>` : ''}`;
    el.onclick = (e) => {
      const mo = e.target.closest('[data-pl-monat]');
      if (mo) { const d = new Date(y, m - 1 + Number(mo.dataset.plMonat), 1); zustand.monat = iso(d).slice(0, 7); zustand.woche = null; return zeigeKalender(el); }
      const t = e.target.closest('[data-pl-tag]');
      if (t) {
        const st = lade(), d = t.dataset.plTag;
        st.tage[d] = !st.tage[d] ? 'schule' : st.tage[d] === 'schule' ? 'arbeit' : undefined;
        if (!st.tage[d]) delete st.tage[d];
        sichere(st); return zeigeKalender(el);
      }
      const w = e.target.closest('[data-pl-woche]');
      if (w) { zustand.woche = zustand.woche === w.dataset.plWoche ? null : w.dataset.plWoche; zeigeKalender(el); const b = el.querySelector('.pl-wochenbox'); if (b) b.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      const a = e.target.closest('[data-pl-wart]');
      if (a) {
        const st = lade();
        for (let i = 0; i < 5; i++) { const d = plus(zustand.woche, i); if (a.dataset.plWart === 'leer') delete st.tage[d]; else st.tage[d] = a.dataset.plWart; }
        sichere(st); return zeigeKalender(el);
      }
      if (e.target.closest('[data-pl-kopieren]')) {
        const n = Number(el.querySelector('#plWochen').value) || 1;
        const st = lade();
        for (let k = 1; k <= n; k++) for (let i = 0; i < 5; i++) {
          const von = plus(zustand.woche, i), nach = plus(zustand.woche, k * 7 + i);
          if (st.tage[von]) st.tage[nach] = st.tage[von]; else delete st.tage[nach];
        }
        sichere(st); toast(`Woche auf die nächsten ${n} ${n === 1 ? 'Woche' : 'Wochen'} kopiert`); return zeigeKalender(el);
      }
    };
  }
  function wochenBox(s) {
    const w = zustand.woche;
    const muster = [0, 1, 2, 3, 4].map((i) => { const a = s.tage[plus(w, i)]; return `${KURZ[i]} ${a === 'schule' ? '🏫' : a === 'arbeit' ? '💼' : '–'}`; }).join(' · ');
    return `<section class="glas block pl-wochenbox">
      <h2>KW ${kw(w)} · ${esc(schoen(w))} – ${esc(schoen(plus(w, 4)))}</h2>
      <p class="klein">${muster}</p>
      <div class="admin-knoepfe">
        <button class="btn" data-pl-wart="schule">🏫 Ganze Woche Schule</button>
        <button class="btn" data-pl-wart="arbeit">💼 Ganze Woche Arbeit</button>
        <button class="btn" data-pl-wart="leer">Leeren</button>
      </div>
      <div class="pl-kopierzeile">
        <label class="feld"><span>Diese Woche kopieren auf die nächsten</span>
          <select id="plWochen">${[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((n) => `<option value="${n}">${n} ${n === 1 ? 'Woche' : 'Wochen'}</option>`).join('')}</select></label>
        <button class="btn primaer" data-pl-kopieren>⧉ Kopieren</button>
      </div>
    </section>`;
  }

  /* ---------------- Stundenplan ---------------- */
  function zeigeStundenplan(el) {
    const s = lade();
    const wt = zustand.wochentag;
    const { slots, pausen } = raster();
    const belegung = s.vorlage[wt] || [];
    const fs = faecher(s);
    let zeilen = '', vorBlock = 0;
    slots.forEach((sl, i) => {
      if (sl.block !== vorBlock) {
        const p = pausen.find(([a, b]) => b <= sl.von && b > (slots[i - 1] ? slots[i - 1].bis - 1 : 0));
        zeilen += `<li class="pl-pause">☕ Pause${p ? ` ${uhr(p[0])}–${uhr(p[1])}` : ''}</li>`;
        vorBlock = sl.block;
      }
      const wert = belegung[i] || '';
      const gleichVor = i > 0 && belegung[i - 1] && belegung[i - 1] === wert && slots[i - 1].block === sl.block;
      zeilen += `<li class="pl-slot ${wert ? 'belegt' : ''} ${gleichVor ? 'doppel' : ''}">
        <time>${sl.nr}. Stunde<br><b>${uhr(sl.von)}–${uhr(sl.bis)}</b></time>
        <select data-pl-slot="${i}" aria-label="${sl.nr}. Stunde am ${TAGE[wt]}">
          <option value="">– frei –</option>
          ${fs.map((f) => `<option value="${esc(f.id)}" ${f.id === wert ? 'selected' : ''}>${esc(f.name)}${f.lehrkraft ? ' · ' + esc(f.lehrkraft) : ''}</option>`).join('')}
        </select></li>`;
    });
    const ende = schulende(wt, s);
    el.innerHTML = `
      <section class="glas block">
        <div class="filter pl-wt">${TAGE.map((t, i) => `<button class="pille ${i === wt ? 'aktiv' : ''}" data-pl-wt="${i}">${t.slice(0, 2)}<b>${stundenAm(i, s).length || ''}</b></button>`).join('')}</div>
        <h2>${TAGE[wt]}</h2>
        <p class="klein">Wähle für jede Stunde das Fach. Zwei gleiche Stunden hintereinander ohne Pause dazwischen zählen als Doppelstunde (90 Minuten).</p>
        <ol class="pl-raster">${zeilen}</ol>
        <p class="pl-ende">${ende ? `Schulende am ${TAGE[wt]}: <b>${uhr(ende)} Uhr</b>` : 'An diesem Tag ist noch nichts eingetragen.'}</p>
        <div class="pl-kopierzeile">
          <span class="klein">⧉ ${TAGE[wt]} kopieren nach:</span>
          <div class="pl-checks">${TAGE.map((t, i) => i === wt ? '' : `<label><input type="checkbox" value="${i}" data-pl-ziel> ${t.slice(0, 2)}</label>`).join('')}</div>
          <button class="btn" data-pl-tagkopie>Kopieren</button>
          <button class="btn rot" data-pl-tagleer>Tag leeren</button>
        </div>
      </section>
      <details class="glas block pl-faecher">
        <summary><h2>Fächer und Lehrkräfte</h2></summary>
        <p class="klein">Die Auswahl oben kommt aus dieser Liste. Änderungen gelten nur auf diesem Gerät.</p>
        <ul class="pl-fachliste">${fs.map((f, i) => `<li>
          <input value="${esc(f.name)}" data-pl-fname="${i}" aria-label="Fach">
          <input value="${esc(f.lehrkraft || '')}" data-pl-flehr="${i}" placeholder="Lehrkraft" aria-label="Lehrkraft">
          <button class="mini rot" data-pl-fweg="${i}" aria-label="Fach entfernen">✕</button></li>`).join('')}</ul>
        <button class="btn" data-pl-fneu>＋ Fach hinzufügen</button>
      </details>
      ${planUebersicht(s)}`;
    const neuZeichnen = () => zeigeStundenplan(el);
    el.onchange = (e) => {
      const sl = e.target.dataset.plSlot;
      if (sl != null) {
        const st = lade();
        const b = (st.vorlage[wt] || []).slice();
        b[Number(sl)] = e.target.value;
        st.vorlage[wt] = b;
        sichere(st); return neuZeichnen();
      }
      const n = e.target.dataset.plFname, l = e.target.dataset.plFlehr;
      if (n != null || l != null) {
        const st = lade(); const f = faecher(st).map((x) => ({ ...x }));
        if (n != null) f[Number(n)].name = e.target.value.trim() || f[Number(n)].name;
        if (l != null) f[Number(l)].lehrkraft = e.target.value.trim();
        st.faecher = f; sichere(st); toast('Gespeichert');
      }
    };
    el.onclick = (e) => {
      const w = e.target.closest('[data-pl-wt]');
      if (w) { zustand.wochentag = Number(w.dataset.plWt); return neuZeichnen(); }
      if (e.target.closest('[data-pl-tagkopie]')) {
        const ziele = [...el.querySelectorAll('[data-pl-ziel]:checked')].map((x) => Number(x.value));
        if (!ziele.length) return toast('Wähle mindestens einen Tag aus.');
        const st = lade();
        ziele.forEach((z) => { st.vorlage[z] = (st.vorlage[wt] || []).slice(); });
        sichere(st); toast(`${TAGE[wt]} kopiert`); return neuZeichnen();
      }
      const leerKn = e.target.closest('[data-pl-tagleer]');
      if (leerKn) { if (!zweiterKlick(leerKn)) return; const st = lade(); delete st.vorlage[wt]; sichere(st); return neuZeichnen(); }
      if (e.target.closest('[data-pl-fneu]')) { const st = lade(); const f = faecher(st).map((x) => ({ ...x })); f.push({ id: 'f' + Date.now().toString(36), name: 'Neues Fach', lehrkraft: '' }); st.faecher = f; sichere(st); return neuZeichnen(); }
      const fw = e.target.closest('[data-pl-fweg]');
      if (fw) { if (!zweiterKlick(fw)) return; const st = lade(); const f = faecher(st).map((x) => ({ ...x })); f.splice(Number(fw.dataset.plFweg), 1); st.faecher = f; sichere(st); return neuZeichnen(); }
    };
  }
  function planUebersicht(s) {
    const tage = [0, 1, 2, 3, 4].map((i) => stundenAm(i, s));
    if (!tage.some((t) => t.length)) return '';
    return `<section class="glas block"><h2>Wochenübersicht</h2>
      <div class="pl-woche">${tage.map((st, i) => `<div><h3>${TAGE[i]}</h3>${st.length ? st.map((x) => `<p><time>${uhr(x.von)}</time> ${esc(fachVon(x.fach, s).name)}</p>`).join('') + `<p class="klein">bis ${uhr(st[st.length - 1].bis)}</p>` : '<p class="klein">–</p>'}</div>`).join('')}</div></section>`;
  }

  /* ---------------- Tests ---------------- */
  function themenVorschlaege(fachId, s) {
    const lf = lernfeldZu(fachId, s);
    if (!lf) return [];
    const n = new Set();
    if (window.Trainer) Trainer.themen(lf.id).forEach((t) => n.add(t.name));
    lf.paragrafen.forEach((p) => p.gruppe && n.add(p.gruppe));
    return [...n];
  }
  function zeigeTests(el) {
    const s = lade(), tag = heute();
    const fs = faecher(s);
    const kommend = s.tests.filter((t) => t.datum >= tag).sort((a, b) => a.datum.localeCompare(b.datum));
    const vorbei = s.tests.filter((t) => t.datum < tag).sort((a, b) => b.datum.localeCompare(a.datum));
    const startFach = el.dataset.fach || (fs[0] && fs[0].id) || '';
    const plan = (t) => {
      const tage = lerntage(t);
      const { liste } = aufgabenFuer(t, s);
      return `<ol class="pl-plan">${tage.map((d) => {
        const n = aufgabenAm(t, d, s).liste.length;
        const e = (s.erledigt[t.id] || {})[d];
        return `<li class="${d < tag ? 'vorbei' : ''} ${d === tag ? 'heute' : ''}"><time>${esc(schoen(d))}</time><span>${liste.length ? n + ' Aufgaben' : 'Paragrafen lesen'}</span>${e ? `<b>✓ ${e.richtig}/${e.gesamt}</b>` : ''}</li>`;
      }).join('')}<li class="pl-testtag"><time>${esc(schoen(t.datum))}</time><span>📝 Test</span></li></ol>`;
    };
    const karte = (t, alt) => {
      const f = fachVon(t.fach, s);
      const { liste } = aufgabenFuer(t, s);
      return `<li class="glas pl-testzeile ${alt ? 'alt' : ''}">
        <div class="pl-tz-kopf"><div><b>${esc(f.name)} · ${esc(t.thema || 'ohne Thema')}</b>
          <span>${esc(schoen(t.datum, { weekday: 'long', day: 'numeric', month: 'long' }))} · ${t.lerntage} ${Number(t.lerntage) === 1 ? 'Lerntag' : 'Lerntage'} · ${liste.length} passende Aufgaben</span></div>
          <button class="mini rot" data-pl-testweg="${esc(t.id)}" aria-label="Test löschen">✕</button></div>
        ${alt ? '' : plan(t)}
      </li>`;
    };
    el.innerHTML = `
      <section class="glas block">
        <h2>Test eintragen</h2>
        <form id="plTestForm" class="pl-form" autocomplete="off">
          <label class="feld"><span>Fach</span><select id="plTFach">${fs.map((f) => `<option value="${esc(f.id)}" ${f.id === startFach ? 'selected' : ''}>${esc(f.name)}</option>`).join('')}</select></label>
          <label class="feld breit"><span>Thema</span><input id="plTThema" list="plThemen" maxlength="80" placeholder="z. B. Geschenke und Bewirtung" required>
            <datalist id="plThemen">${themenVorschlaege(startFach, s).map((t) => `<option value="${esc(t)}">`).join('')}</datalist></label>
          <label class="feld"><span>Datum</span><input type="date" id="plTDatum" required min="${tag}"></label>
          <label class="feld"><span>Lerntage vorher</span><input type="number" id="plTTage" min="1" max="21" value="4" required></label>
          <button class="btn primaer" type="submit">＋ Test speichern</button>
        </form>
        <p class="klein">Der Lernplan verteilt die passenden Übungsaufgaben auf die Tage vor dem Test. Am letzten Tag kommt eine Generalprobe mit allem, was noch nicht sitzt.</p>
      </section>
      ${kommend.length ? `<h2 class="pl-zw">Kommende Tests</h2><ul class="pl-tests">${kommend.map((t) => karte(t)).join('')}</ul>` : '<div class="glas leer">Noch keine kommenden Tests.</div>'}
      ${vorbei.length ? `<details class="glas block"><summary><h2>Vergangene Tests (${vorbei.length})</h2></summary><ul class="pl-tests">${vorbei.map((t) => karte(t, true)).join('')}</ul></details>` : ''}`;
    el.onchange = (e) => {
      if (e.target.id === 'plTFach') {
        el.dataset.fach = e.target.value;
        el.querySelector('#plThemen').innerHTML = themenVorschlaege(e.target.value, lade()).map((t) => `<option value="${esc(t)}">`).join('');
      }
    };
    el.onsubmit = (e) => {
      if (e.target.id !== 'plTestForm') return;
      e.preventDefault();
      const st = lade();
      const t = {
        id: 't' + Date.now().toString(36),
        fach: el.querySelector('#plTFach').value,
        thema: el.querySelector('#plTThema').value.trim(),
        datum: el.querySelector('#plTDatum').value,
        lerntage: Math.max(1, Math.min(21, Number(el.querySelector('#plTTage').value) || 4))
      };
      if (!t.datum) return toast('Bitte ein Datum wählen.');
      st.tests.push(t);
      if (sichere(st)) {
        const n = aufgabenFuer(t, st).liste.length;
        toast(n ? `Test gespeichert – ${n} passende Aufgaben im Lernplan` : 'Test gespeichert – zu diesem Thema gibt es noch keine Aufgaben');
      }
      zeigeTests(el);
    };
    el.onclick = (e) => {
      const w = e.target.closest('[data-pl-testweg]');
      if (w) {
        if (!zweiterKlick(w)) return;
        const st = lade();
        st.tests = st.tests.filter((t) => t.id !== w.dataset.plTestweg);
        delete st.erledigt[w.dataset.plTestweg];
        sichere(st); zeigeTests(el);
      }
    };
  }

  /* ---------------- Noten ---------------- */
  function zeigeNoten(el) {
    const s = lade(), fs = faecher(s);
    const proFach = fs.map((f) => ({ f, noten: s.noten.filter((n) => n.fach === f.id).sort((a, b) => String(a.datum).localeCompare(String(b.datum))) }));
    const mitNoten = proFach.filter((x) => x.noten.length);
    const schnitte = mitNoten.map((x) => schnitt(x.noten));
    const gesamt = schnitte.length ? schnitte.reduce((a, b) => a + b, 0) / schnitte.length : null;
    const artName = (id) => (ARTEN.find((a) => a[0] === id) || [, 'Sonstiges'])[1];
    el.innerHTML = `
      <section class="glas block pl-gesamt">
        <div class="pl-note-gross ${notenFarbe(gesamt)}"><small>Gesamtnote</small><b>${zahl2(gesamt)}</b></div>
        <div><p>${mitNoten.length ? `Durchschnitt aus ${mitNoten.length} ${mitNoten.length === 1 ? 'Fach' : 'Fächern'}, jedes Fach zählt gleich.` : 'Trag deine erste Note ein.'}</p>
          <p class="klein">🔒 Deine Noten liegen nur in diesem Browser. Niemand sonst sieht sie – sichere sie ab und zu unten als Datei.</p></div>
      </section>
      <section class="glas block">
        <h2>Note eintragen</h2>
        <form id="plNoteForm" class="pl-form" autocomplete="off">
          <label class="feld"><span>Fach</span><select id="plNFach">${fs.map((f) => `<option value="${esc(f.id)}">${esc(f.name)}</option>`).join('')}</select></label>
          <label class="feld"><span>Note</span><input id="plNNote" inputmode="decimal" placeholder="z. B. 2, 2+, 2-, 2,5" required></label>
          <label class="feld"><span>Art</span><select id="plNArt">${ARTEN.map(([id, n]) => `<option value="${id}">${n}</option>`).join('')}</select></label>
          <label class="feld"><span>Gewicht</span><input type="number" id="plNGewicht" min="0.5" max="5" step="0.5" value="2"></label>
          <label class="feld"><span>Datum</span><input type="date" id="plNDatum" value="${heute()}"></label>
          <button class="btn primaer" type="submit">＋ Note speichern</button>
        </form>
        <p class="klein">„+“ verbessert um 0,3 (2+ = 1,7), „−“ verschlechtert um 0,3 (2− = 2,3). Klassenarbeiten zählen standardmäßig doppelt.</p>
      </section>
      ${proFach.map(({ f, noten }) => {
        const sn = schnitt(noten);
        return `<section class="glas block pl-fach">
          <div class="pl-fach-kopf"><div><h2>${esc(f.name)}</h2><span class="klein">${esc(f.lehrkraft || '')}</span></div>
            <div class="pl-note-klein ${notenFarbe(sn)}">${zahl2(sn)}</div></div>
          ${noten.length ? `<ul class="pl-noten">${noten.map((n) => `<li><b>${esc(n.text)}</b><span>${esc(artName(n.art))} · ×${String(n.gewicht).replace('.', ',')} · ${n.datum ? esc(schoen(n.datum)) : ''}</span>
            <button class="mini rot" data-pl-noteweg="${esc(n.id)}" aria-label="Note löschen">✕</button></li>`).join('')}</ul>` : '<p class="klein">Noch keine Noten.</p>'}
        </section>`;
      }).join('')}
      <section class="glas block">
        <h2>Sicherung</h2>
        <p class="klein">Enthält Stundenplan, Kalender, Tests und Noten. So kannst du alles auf ein anderes Gerät übertragen oder nach dem Löschen des Browser-Speichers wiederherstellen.</p>
        <div class="admin-knoepfe">
          <button class="btn primaer" data-pl-export>⬇ Sicherung erstellen</button>
          <label class="btn">⬆ Datei einspielen<input type="file" accept=".json,application/json" data-pl-import hidden></label>
          <button class="btn" data-pl-einfuegen>Text einfügen</button>
        </div>
        <div class="exportbox" id="plExport" hidden><textarea rows="5" readonly aria-label="Sicherung"></textarea><button class="btn" data-pl-kopie>Kopieren</button></div>
        <div class="exportbox" id="plImport" hidden><textarea rows="5" aria-label="Sicherung einfügen" placeholder="Sicherungstext hier einfügen"></textarea><button class="btn primaer" data-pl-importtext>Einspielen</button></div>
      </section>`;
    el.onchange = (e) => {
      if (e.target.id === 'plNArt') el.querySelector('#plNGewicht').value = (ARTEN.find((a) => a[0] === e.target.value) || [, , 1])[2];
      if (e.target.matches('[data-pl-import]') && e.target.files[0]) {
        const r = new FileReader();
        r.onload = () => { importieren(String(r.result)); zeigeNoten(el); };
        r.readAsText(e.target.files[0]);
      }
    };
    el.onsubmit = (e) => {
      if (e.target.id !== 'plNoteForm') return;
      e.preventDefault();
      const text = el.querySelector('#plNNote').value.trim().replace('−', '-');
      const wert = noteWert(text);
      if (isNaN(wert)) return toast('Bitte eine Note von 1 bis 6 eingeben, z. B. 2, 2+ oder 2,5.');
      const st = lade();
      st.noten.push({ id: 'n' + Date.now().toString(36), fach: el.querySelector('#plNFach').value, text: text.replace('-', '−'), wert,
        art: el.querySelector('#plNArt').value, gewicht: Number(el.querySelector('#plNGewicht').value) || 1, datum: el.querySelector('#plNDatum').value });
      if (sichere(st)) toast('Note gespeichert');
      zeigeNoten(el);
    };
    el.onclick = (e) => {
      const w = e.target.closest('[data-pl-noteweg]');
      if (w) { if (!zweiterKlick(w)) return; const st = lade(); st.noten = st.noten.filter((n) => n.id !== w.dataset.plNoteweg); sichere(st); return zeigeNoten(el); }
      if (e.target.closest('[data-pl-export]')) return exportieren(el.querySelector('#plExport'));
      if (e.target.closest('[data-pl-kopie]')) {
        const ta = el.querySelector('#plExport textarea'); ta.select();
        try { navigator.clipboard.writeText(ta.value).then(() => toast('Kopiert'), () => toast('Text ist markiert – mit Strg+C kopieren.')); } catch (err) { toast('Text ist markiert – mit Strg+C kopieren.'); }
        return;
      }
      if (e.target.closest('[data-pl-einfuegen]')) { el.querySelector('#plImport').hidden = false; el.querySelector('#plImport textarea').focus(); return; }
      if (e.target.closest('[data-pl-importtext]')) { importieren(el.querySelector('#plImport textarea').value); return zeigeNoten(el); }
    };
  }

  /* Löschen erst beim zweiten Tipp (im Artefakt gibt es keine Bestätigungsdialoge) */
  function zweiterKlick(knopf) {
    if (knopf.dataset.sicher) return true;
    const alt = knopf.innerHTML;
    knopf.dataset.sicher = '1';
    knopf.classList.add('sicher');
    knopf.textContent = 'Sicher?';
    setTimeout(() => { if (knopf.isConnected) { delete knopf.dataset.sicher; knopf.classList.remove('sicher'); knopf.innerHTML = alt; } }, 3000);
    return false;
  }

  /* ---------------- Wochenplan für die Startseite ---------------- */
  let wochenAuswahl = null;
  function wocheHtml() {
    const s = lade(), tag = heute();
    const wt = wochentag(tag);
    const start = wt > 4 ? plus(montag(tag), 7) : montag(tag); // am Wochenende: nächste Woche
    const tage = [0, 1, 2, 3, 4].map((i) => plus(start, i));
    if (!wochenAuswahl || !tage.includes(wochenAuswahl)) wochenAuswahl = tage.includes(tag) ? tag : tage[0];
    const ausw = wochenAuswahl;
    const testAm = {};
    s.tests.forEach((t) => { (testAm[t.datum] = testAm[t.datum] || []).push(t); });
    const lernAm = (d) => s.tests.filter((t) => lerntage(t).includes(d));
    const kommend = aktiveTests(s, tag);
    const art = s.tage[ausw];
    const st = art === 'schule' ? stundenAm(wochentag(ausw), s) : [];
    const istHeute = ausw === tag;
    const titel = (istHeute ? 'Heute · ' : '') + schoen(ausw, { weekday: 'long', day: 'numeric', month: 'long' });
    let detail;
    if (!art) {
      detail = `<p class="klein">Noch nicht festgelegt. Ist an diesem Tag Schule oder Arbeit?</p>
        <div class="pl-art"><button class="pille" data-wo-art="schule">🏫 Schule</button><button class="pille" data-wo-art="arbeit">💼 Arbeit</button></div>`;
    } else if (art === 'arbeit') {
      detail = `<p class="wo-arbeit">💼 Arbeitstag</p><button class="link" data-wo-art="schule">Doch Schule?</button>`;
    } else if (!st.length) {
      detail = '<p class="klein">🏫 Schultag – für diesen Wochentag ist noch kein Stundenplan eingetragen. <a href="#planer-stundenplan">Jetzt eintragen</a></p>';
    } else {
      const jetzt = new Date().getHours() * 60 + new Date().getMinutes();
      detail = `<ol class="wo-stunden">${st.map((x) => {
        const f = fachVon(x.fach, s);
        const lf = lernfeldZu(x.fach, s);
        const laeuft = istHeute && jetzt >= x.von && jetzt < x.bis;
        const vorbei = istHeute && jetzt >= x.bis;
        return `<li class="${laeuft ? 'jetzt' : ''} ${vorbei ? 'vorbei' : ''}" style="--akzent:${esc(lf ? lf.farbe : '#94a3b8')}">
          <time>${uhr(x.von)}<br><small>${uhr(x.bis)}</small></time>
          <div><b>${esc(f.name)}</b><span>${esc(f.lehrkraft || '')}${x.dauer === 90 ? ' · 90 Min.' : ''}</span></div>
          ${laeuft ? '<em>jetzt</em>' : ''}</li>`;
      }).join('')}</ol>
      <p class="wo-ende">Schulende ${uhr(st[st.length - 1].bis)} Uhr</p>`;
    }
    const testsHeute = testAm[ausw] || [];
    const lernen = lernAm(ausw);
    const lernHtml = lernen.map((t) => {
      const { lf, liste } = aufgabenAm(t, ausw, s);
      const erl = (s.erledigt[t.id] || {})[ausw];
      return `<div class="wo-lernen" style="--akzent:${esc(lf ? lf.farbe : '#6366f1')}">
        <div><b>Lernen für ${esc(fachVon(t.fach, s).name)}: ${esc(t.thema)}</b>
          <span>Test ${esc(schoen(t.datum))} · ${liste.length ? liste.length + ' Aufgaben' : 'Paragrafen lesen'}${erl ? ` · ✓ ${erl.richtig}/${erl.gesamt}` : ''}</span></div>
        ${istHeute && liste.length ? `<button class="btn primaer klein-btn" data-pl-lernen="${esc(t.id)}">${erl ? '↻' : '▶'} Lernen</button>` : ''}
      </div>`;
    }).join('');
    return `
      <section class="glas block wo" id="wochenplan">
        <div class="wo-kopf"><h2>${wt > 4 ? 'Nächste Woche' : 'Diese Woche'}</h2>
          <a class="link" href="#planer-kalender">Kalender ›</a></div>
        <div class="wo-tage" role="tablist">${tage.map((d, i) => {
          const a = s.tage[d];
          return `<button role="tab" aria-selected="${d === ausw}" class="wo-tag ${a || ''} ${d === tag ? 'heute' : ''} ${d === ausw ? 'aktiv' : ''}" data-wo-tag="${d}">
            <small>${KURZ[i]}</small><b>${ausIso(d).getDate()}</b>
            <span>${a === 'schule' ? '🏫' : a === 'arbeit' ? '💼' : '·'}</span>
            ${testAm[d] ? '<i class="wo-test" title="Test">📝</i>' : lernAm(d).length ? '<i class="wo-lern" title="Lerntag"></i>' : ''}</button>`;
        }).join('')}</div>
        <div class="wo-detail">
          <h3>${esc(titel)}</h3>
          ${testsHeute.map((t) => `<p class="wo-testtag">📝 Test: ${esc(fachVon(t.fach, s).name)} · ${esc(t.thema)}</p>`).join('')}
          ${detail}
          ${lernHtml}
        </div>
        ${kommend.length ? `<div class="wo-naechste"><h3>Nächste Tests</h3>${kommend.slice(0, 3).map((t) => {
          const n = tageZwischen(tag, t.datum);
          return `<a href="#planer-tests" class="wo-test-zeile"><span class="wo-tage-bis ${n <= 2 ? 'bald' : ''}">${n === 0 ? 'heute' : n === 1 ? 'morgen' : n + ' Tage'}</span><b>${esc(fachVon(t.fach, s).name)} · ${esc(t.thema)}</b><small>${esc(schoen(t.datum))}</small></a>`;
        }).join('')}</div>` : `<p class="klein wo-hinweis">Noch kein Test eingetragen. <a href="#planer-tests">Test eintragen</a> – dann verteilt der Lernplan die Aufgaben auf die Tage davor.</p>`}
      </section>`;
  }
  function verdrahteWoche(wurzel) {
    wurzel.addEventListener('click', (e) => {
      const box = wurzel.querySelector('#wochenplan');
      if (!box || !box.contains(e.target)) return;
      const neu = () => { box.outerHTML = wocheHtml(); };
      const t = e.target.closest('[data-wo-tag]');
      if (t) { wochenAuswahl = t.dataset.woTag; return neu(); }
      const a = e.target.closest('[data-wo-art]');
      if (a) { const st = lade(); st.tage[wochenAuswahl] = a.dataset.woArt; sichere(st); return neu(); }
      const l = e.target.closest('[data-pl-lernen]');
      if (l) return starteLernen(l.dataset.plLernen, heute());
    });
  }

  /* ---------------- Kachel für die Startseite ---------------- */
  function startHtml() {
    const s = lade(), tag = heute();
    const dran = aktiveTests(s, tag).filter((t) => t.datum === tag || lerntage(t).includes(tag));
    const naechster = aktiveTests(s, tag)[0];
    const art = s.tage[tag];
    const ende = art === 'schule' && wochentag(tag) < 5 ? schulende(wochentag(tag), s) : null;
    const offen = dran.filter((t) => t.datum !== tag && !(s.erledigt[t.id] || {})[tag] && aufgabenAm(t, tag, s).liste.length);
    return `
      <a class="glas block pl-kachel" href="#planer">
        <span class="pl-k-icon">📅</span>
        <div><b>${dran.length ? (offen.length ? `Heute ${offen.length} ${offen.length === 1 ? 'Lerneinheit' : 'Lerneinheiten'} für deine Tests` : 'Heutige Lerneinheiten erledigt ✓') : naechster ? `Nächster Test: ${esc(fachVon(naechster.fach, s).name)} ${esc(naechster.thema)}` : 'Mein Schulplan'}</b>
          <span>${art === 'schule' ? `Heute Schule${ende ? ' bis ' + uhr(ende) + ' Uhr' : ''}` : art === 'arbeit' ? 'Heute Arbeit' : 'Stundenplan, Tests und Noten'}${naechster && !dran.length ? ` · ${esc(schoen(naechster.datum))}` : ''}</span></div>
        <span class="pl-k-pfeil">›</span>
      </a>`;
  }

  window.Planer = { zeige, startHtml, wocheHtml, verdrahteWoche, fachVon, lernfeldZu, lade, raster, stundenAm, schulende, aufgabenAm, lerntage, noteWert, schnitt };
})();
