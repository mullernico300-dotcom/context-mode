/* Prüfungssimulator: Zwischen- und Abschlussprüfung Steuerfachangestellte (StFachAngAusbV 2023).
   Aufgaben aus js/pruefung-fragen.js. Antworten, Selbstbewertung und Verlauf bleiben nur auf diesem Gerät. */
(function () {
  'use strict';
  const { esc, toast, mischen } = U;
  const KEY = 'lernplattform.pruefung.v1';
  const B = () => window.PRUEFUNG_BEREICHE || {};
  const F = () => window.PRUEFUNG_FRAGEN || [];
  const ART = { zp: 'Zwischenprüfung', ap: 'Abschlussprüfung' };
  let tick = null;

  /* ---------------- Speicher ---------------- */
  function lade() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* gesperrt */ }
    s = Object.assign({ lauf: null, gespraech: null, verlauf: [] }, s || {});
    if (!Array.isArray(s.verlauf)) s.verlauf = [];
    return s;
  }
  function sichere(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { toast('Speichern nicht möglich – der Browser-Speicher ist gesperrt oder voll.'); }
  }

  /* ---------------- Hilfen ---------------- */
  const frage = (id) => F().find((q) => q.id === id);
  const schriftlich = (art) => Object.keys(B()).filter((b) => B()[b].pruefung === art && b !== 'ap-ber');
  const minutenFuer = (q) => (q.punkte * B()[q.bereich].minuten) / 100;
  const gesamtMinuten = (ids) => Math.ceil(ids.reduce((n, id) => n + minutenFuer(frage(id)), 0));
  const kurzName = (b) => (B()[b] && (B()[b].kurz || B()[b].titel)) || b;
  /* Notenschlüssel der Steuerberaterkammern (Punkte von 100) */
  function note(prozent) {
    const p = Math.floor(prozent + 1e-9);
    if (p >= 92) return [1, 'sehr gut'];
    if (p >= 81) return [2, 'gut'];
    if (p >= 67) return [3, 'befriedigend'];
    if (p >= 50) return [4, 'ausreichend'];
    if (p >= 30) return [5, 'mangelhaft'];
    return [6, 'ungenügend'];
  }
  function uhr(sek) {
    sek = Math.max(0, Math.round(sek));
    const h = Math.floor(sek / 3600), m = Math.floor((sek % 3600) / 60), s = sek % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
  }
  /* Mini-Markdown für Lösungen: **fett**, Listen mit „- “ (eingerückt = Unterpunkt), Absätze */
  function text(md) {
    const zeilen = String(md || '').split('\n');
    let html = '', liste = false;
    const inline = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    zeilen.forEach((z) => {
      const m = /^(\s*)- (.*)$/.exec(z);
      if (m) {
        if (!liste) { html += '<ul>'; liste = true; }
        html += `<li${m[1].length ? ' class="unter"' : ''}>${inline(m[2])}</li>`;
      } else {
        if (liste) { html += '</ul>'; liste = false; }
        if (z.trim()) html += `<p>${inline(z)}</p>`;
      }
    });
    if (liste) html += '</ul>';
    return html;
  }
  function stoppeUhr() { if (tick) { clearInterval(tick); tick = null; } }

  /* ---------------- Einstieg ---------------- */
  function zeige(app, teil) {
    stoppeUhr();
    const s = lade();
    if (teil === 'lauf' && s.lauf) return zeigeLauf(app);
    if (teil === 'auswertung' && s.lauf) return zeigeAuswertung(app);
    if (teil === 'gespraech' && s.gespraech) return zeigeGespraech(app);
    return zeigeStart(app);
  }

  /* ---------------- Startseite ---------------- */
  function zeigeStart(app) {
    const s = lade();
    let art = 'ap';
    app.innerHTML = `
      <a class="zurueck" href="#start">← Zur Übersicht</a>
      <header class="lf-kopf"><span class="lf-nr pr-marke">Prüfung</span><h1>Prüfungssimulator</h1>
        <p>Übe mit Aufgaben im Stil der Kammerprüfung: ausführlich antworten, mit Zeitdruck wie in der echten Prüfung, danach Musterlösung und Punkteschema.</p></header>
      ${s.lauf ? `<section class="glas block pr-weiter"><b>Du hast eine Simulation offen</b> (${esc(ART[s.lauf.art])}, ${s.lauf.ids.length} Aufgaben${s.lauf.abgegeben ? ', abgegeben' : ''}).
        <div class="pr-knoepfe"><a class="btn primaer" href="#pruefung-${s.lauf.abgegeben ? 'auswertung' : 'lauf'}">${s.lauf.abgegeben ? 'Zur Auswertung' : 'Weiter schreiben'}</a>
        <button class="btn rot" id="prVerwerfen">Verwerfen</button></div></section>` : ''}
      <section class="glas block">
        <h2>1. Welche Prüfung?</h2>
        <div class="pr-wahl" role="radiogroup" aria-label="Prüfung">
          <button class="pr-art" data-art="zp" role="radio"><b>Zwischenprüfung</b><span>2 Bereiche · 120 Min.</span></button>
          <button class="pr-art" data-art="ap" role="radio"><b>Abschlussprüfung</b><span>3 schriftliche Bereiche · 300 Min. + Gespräch</span></button>
        </div>
        <h2>2. Welche Bereiche?</h2>
        <div id="prBereiche" class="pr-bereiche"></div>
        <h2>3. Wie viele Aufgaben?</h2>
        <div class="pr-zeile">
          <select id="prAnzahl" aria-label="Anzahl der Aufgaben">
            <option value="alle">Alle Aufgaben der gewählten Bereiche</option>
            <option value="15">15 zufällige Aufgaben</option>
            <option value="10">10 zufällige Aufgaben</option>
            <option value="5">5 zufällige Aufgaben</option>
          </select>
          <label class="pr-haken"><input type="checkbox" id="prUhr" checked> Mit Zeitlimit wie in der Prüfung</label>
        </div>
        <p class="klein" id="prInfo"></p>
        <button class="btn primaer gross" id="prStart">▶ Simulation starten</button>
      </section>
      <section class="glas block" id="prGespraechBox">
        <h2>🗣️ Mündlich: Gesprächssimulation</h2>
        <p>In der Abschlussprüfung wählst du aus <b>zwei Aufgaben</b> eine aus, bereitest dich <b>15 Minuten</b> vor und führst dann ein Beratungsgespräch von <b>höchstens 30 Minuten</b> (§ 16). Übe es hier mit Timer und Erwartungshorizont – am besten laut, mit jemandem als Mandant oder mit der Sprachaufnahme deines Handys.</p>
        <div class="pr-gespraeche">${F().filter((q) => q.gespraech).map((q) => `
          <button class="glas pr-gespraech" data-gespraech="${esc(q.id)}"><b>${esc(q.thema)}</b><span>${esc(q.sachverhalt.split('\n')[0].slice(0, 120))}…</span></button>`).join('')}</div>
      </section>
      <details class="glas block pr-info">
        <summary><b>So läuft die Prüfung seit der neuen Ausbildungsverordnung</b></summary>
        <p>Seit dem Ausbildungsjahrgang 2023 gilt die neue Verordnung (StFachAngAusbV) mit Lernfeldern in der Berufsschule. Die Prüfungsbereiche sind nicht mehr nach Fächern, sondern nach <b>beruflichen Handlungen</b> geschnitten:</p>
        <ul>
          <li><b>Zwischenprüfung</b> (§§ 8–10): „Arbeitsabläufe organisieren“ (45 Min.) und „Steuererklärungen vorbereiten und Buchhaltungen bearbeiten“ (75 Min.). Sie zählt nicht für die Endnote, zeigt dir aber deinen Stand.</li>
          <li><b>Abschlussprüfung</b> (§§ 13–18): Steuerwesen 130 Min. (35 %), Rechnungswesen mit Entgelt und Jahresabschluss 110 Min. (30 %), Mandantenberatung als Gesprächssimulation (25 %), Wirtschafts- und Sozialkunde 60 Min. (10 %).</li>
          <li><b>Bestanden</b> ist die Prüfung, wenn das Gesamtergebnis, der Bereich Steuerwesen und mindestens zwei weitere Bereiche mindestens „ausreichend“ sind und kein Bereich „ungenügend“ ist (§ 18).</li>
          <li>Eine <b>mündliche Ergänzungsprüfung</b> (15 Min.) ist in einem schriftlichen Bereich möglich, wenn sie das Bestehen ermöglicht; Gewichtung 2 : 1 (§ 19).</li>
        </ul>
        <p><b>Zeit pro Aufgabe:</b> Die Kammer verteilt 100 Punkte je Bereich. Für jeden Punkt hast du also Bereichszeit ÷ 100 – im Steuerwesen 1,3 Min., im Rechnungswesen 1,1 Min., in WiSo 0,6 Min. Danach rechnet der Timer.</p>
        <p><b>Punkte gibt es</b> meist je 0,5 bis 1 Punkt für jeden richtigen Gedankenschritt: Ergebnis, Begründung, Rechenweg. Paragrafen in Klammern bringen allein keine Punkte, machen deine Begründung aber nachvollziehbar.</p>
        <p><b>Noten:</b> 100–92 sehr gut · 91–81 gut · 80–67 befriedigend · 66–50 ausreichend · 49–30 mangelhaft · unter 30 ungenügend.</p>
        <p class="klein">Die Aufgaben sind an Prüfungen der Steuerberaterkammer Niedersachsen angelehnt oder im Prüfungsstil selbst geschrieben – keine Originalprüfungen. Rechtsstand 2025/2026 (Veranlagungsjahr 2025, Lohn und Umsatzsteuer 2026).</p>
      </details>
      ${s.verlauf.length ? `<section class="glas block"><h2>📈 Deine bisherigen Simulationen</h2>
        <ul class="pr-verlauf">${s.verlauf.slice().reverse().slice(0, 12).map((v) => `<li><span>${esc(new Date(v.datum).toLocaleDateString('de-DE'))}</span><b>${esc(v.titel)}</b><span>${v.punkte} / ${v.max} P.</span><span class="chip pr-note n${v.note}">Note ${v.note}</span></li>`).join('')}</ul>
        <p class="klein">Der Verlauf bleibt nur auf diesem Gerät.</p></section>` : ''}`;

    const el = (sel) => app.querySelector(sel);
    function bereiche() {
      const ids = schriftlich(art);
      el('#prBereiche').innerHTML = ids.map((b) => {
        const fr = F().filter((q) => q.bereich === b);
        const p = fr.reduce((n, q) => n + q.punkte, 0);
        return `<label class="glas pr-bereich"><input type="checkbox" value="${esc(b)}" checked>
          <span><b>${esc(B()[b].titel)}</b><small>${esc(B()[b].teil)} · ${B()[b].minuten} Min. für 100 Punkte · ${fr.length} Aufgaben (${p} P.)</small></span></label>`;
      }).join('');
      app.querySelectorAll('.pr-art').forEach((k) => { const an = k.dataset.art === art; k.classList.toggle('aktiv', an); k.setAttribute('aria-checked', an); });
      el('#prGespraechBox').hidden = art !== 'ap';
      info();
    }
    function auswahl() {
      const bs = [...app.querySelectorAll('#prBereiche input:checked')].map((i) => i.value);
      let fr = F().filter((q) => bs.includes(q.bereich));
      const n = el('#prAnzahl').value;
      if (n !== 'alle') {
        fr = mischen(fr).slice(0, Number(n));
        fr.sort((a, b) => bs.indexOf(a.bereich) - bs.indexOf(b.bereich));
      }
      return fr.map((q) => q.id);
    }
    function info() {
      const bs = [...app.querySelectorAll('#prBereiche input:checked')].map((i) => i.value);
      const fr = F().filter((q) => bs.includes(q.bereich));
      const n = el('#prAnzahl').value === 'alle' ? fr.length : Math.min(fr.length, Number(el('#prAnzahl').value));
      const min = el('#prAnzahl').value === 'alle' ? gesamtMinuten(fr.map((q) => q.id)) : null;
      el('#prInfo').textContent = !bs.length ? 'Wähle mindestens einen Bereich.'
        : `${n} Aufgaben` + (min ? ` · Bearbeitungszeit ${min} Min.` : ' · Zeit wird nach den Punkten der gezogenen Aufgaben berechnet') + (el('#prUhr').checked ? '' : ' · ohne Zeitlimit');
      el('#prStart').disabled = !bs.length;
    }
    app.querySelectorAll('.pr-art').forEach((k) => k.addEventListener('click', () => { art = k.dataset.art; bereiche(); }));
    el('#prBereiche').addEventListener('change', info);
    el('#prAnzahl').addEventListener('change', info);
    el('#prUhr').addEventListener('change', info);
    el('#prStart').addEventListener('click', () => {
      const ids = auswahl();
      if (!ids.length) return;
      const st = lade();
      if (st.lauf && !confirm('Die offene Simulation wird dabei verworfen. Neu starten?')) return;
      const min = gesamtMinuten(ids);
      st.lauf = { art, ids, antworten: {}, haken: {}, start: Date.now(), minuten: min, ende: el('#prUhr').checked ? Date.now() + min * 60000 : null, abgegeben: null, pos: 0 };
      sichere(st);
      location.hash = '#pruefung-lauf';
    });
    const verwerfen = el('#prVerwerfen');
    if (verwerfen) verwerfen.addEventListener('click', () => {
      if (!confirm('Offene Simulation mit allen Antworten löschen?')) return;
      const st = lade(); st.lauf = null; sichere(st); zeigeStart(app);
    });
    app.querySelectorAll('[data-gespraech]').forEach((k) => k.addEventListener('click', () => {
      const st = lade();
      st.gespraech = { id: k.dataset.gespraech, phase: 'vorbereitung', ende: Date.now() + 15 * 60000, notizen: '', haken: {} };
      sichere(st);
      location.hash = '#pruefung-gespraech';
    }));
    bereiche();
    return stoppeUhr;
  }

  /* ---------------- Simulation schreiben ---------------- */
  function zeigeLauf(app) {
    const s = lade();
    const lauf = s.lauf;
    if (lauf.abgegeben) { location.hash = '#pruefung-auswertung'; return null; }
    let pos = Math.min(lauf.pos || 0, lauf.ids.length - 1);
    app.innerHTML = `
      <div class="pr-leiste glas" id="prLeiste">
        <div><span class="eyebrow">${esc(ART[lauf.art])}</span><b id="prStand"></b></div>
        <div class="pr-uhr" id="prUhr" role="timer" aria-live="off">${lauf.ende ? '' : 'ohne Zeitlimit'}</div>
        <button class="btn primaer klein-btn" id="prAbgeben">Abgeben</button>
      </div>
      <nav class="pr-nummern" id="prNummern" aria-label="Aufgaben"></nav>
      <article class="glas block pr-aufgabe" id="prAufgabe"></article>
      <div class="pr-knoepfe pr-blaettern">
        <button class="btn" id="prZurueck">← Zurück</button>
        <button class="btn primaer" id="prVor">Weiter →</button>
      </div>`;
    const el = (sel) => app.querySelector(sel);
    function speichere() {
      const st = lade(); if (!st.lauf) return;
      st.lauf.antworten = lauf.antworten; st.lauf.pos = pos; sichere(st);
    }
    function nummern() {
      el('#prNummern').innerHTML = lauf.ids.map((id, i) => {
        const q = frage(id);
        const neuerBereich = i === 0 || frage(lauf.ids[i - 1]).bereich !== q.bereich;
        return `${neuerBereich ? `<span class="pr-trenner">${esc(kurzName(q.bereich))}</span>` : ''}<button class="pr-nr ${i === pos ? 'aktiv' : ''} ${(lauf.antworten[id] || '').trim() ? 'fertig' : ''}" data-i="${i}" aria-label="Aufgabe ${i + 1}">${i + 1}</button>`;
      }).join('');
      const fertig = lauf.ids.filter((id) => (lauf.antworten[id] || '').trim()).length;
      el('#prStand').textContent = `${fertig} von ${lauf.ids.length} bearbeitet`;
    }
    function aufgabe() {
      const id = lauf.ids[pos];
      const q = frage(id);
      el('#prAufgabe').innerHTML = `
        <p class="eyebrow">Aufgabe ${pos + 1} von ${lauf.ids.length} · ${esc(kurzName(q.bereich))}</p>
        <h2>${esc(q.thema)}</h2>
        <p class="pr-meta"><span class="chip">${String(q.punkte).replace('.', ',')} Punkte</span><span class="chip">≈ ${Math.round(minutenFuer(q))} Min.</span></p>
        <div class="pr-sachverhalt"><h3>Sachverhalt</h3>${text(q.sachverhalt)}</div>
        <div class="pr-frage"><h3>Aufgabe</h3>${text(q.aufgabe)}</div>
        <label class="pr-antwort-label" for="prAntwort">Deine Antwort – mit Begründung, Rechenweg und Rechtsgrundlagen</label>
        <textarea id="prAntwort" class="pr-antwort" rows="12" spellcheck="true" placeholder="Schreib so, wie du es in der Prüfung aufschreiben würdest …">${esc(lauf.antworten[id] || '')}</textarea>
        <p class="klein" id="prZeichen"></p>`;
      const ta = el('#prAntwort');
      const zaehle = () => { const w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; el('#prZeichen').textContent = `${w} Wörter · wird automatisch gespeichert`; };
      let warte = null;
      ta.addEventListener('input', () => {
        lauf.antworten[id] = ta.value; zaehle();
        clearTimeout(warte); warte = setTimeout(() => { speichere(); nummern(); }, 400);
      });
      ta.addEventListener('blur', () => { speichere(); nummern(); });
      zaehle();
      el('#prZurueck').disabled = pos === 0;
      el('#prVor').textContent = pos === lauf.ids.length - 1 ? 'Abgeben ✓' : 'Weiter →';
      nummern();
    }
    function gehe(i) { lauf.antworten[lauf.ids[pos]] = el('#prAntwort').value; pos = i; speichere(); aufgabe(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    function abgeben(auto) {
      lauf.antworten[lauf.ids[pos]] = el('#prAntwort').value;
      const offen = lauf.ids.filter((id) => !(lauf.antworten[id] || '').trim()).length;
      if (!auto && !confirm(offen ? `${offen} Aufgaben sind noch leer. Trotzdem abgeben?` : 'Simulation abgeben und auswerten?')) return;
      const st = lade(); if (!st.lauf) return;
      st.lauf.antworten = lauf.antworten; st.lauf.abgegeben = Date.now(); sichere(st);
      stoppeUhr();
      if (auto) toast('⏰ Die Zeit ist um – deine Antworten wurden abgegeben.');
      location.hash = '#pruefung-auswertung';
    }
    el('#prNummern').addEventListener('click', (e) => { const b = e.target.closest('[data-i]'); if (b) gehe(Number(b.dataset.i)); });
    el('#prZurueck').addEventListener('click', () => pos > 0 && gehe(pos - 1));
    el('#prVor').addEventListener('click', () => (pos < lauf.ids.length - 1 ? gehe(pos + 1) : abgeben(false)));
    el('#prAbgeben').addEventListener('click', () => abgeben(false));
    if (lauf.ende) {
      const uhrEl = el('#prUhr');
      const lauft = () => {
        const rest = (lauf.ende - Date.now()) / 1000;
        uhrEl.textContent = '⏱ ' + uhr(rest);
        uhrEl.classList.toggle('gelb', rest <= 600 && rest > 300);
        uhrEl.classList.toggle('rot', rest <= 300);
        if (rest <= 0) abgeben(true);
      };
      lauft();
      tick = setInterval(lauft, 1000);
    }
    aufgabe();
    return () => { if (el('#prAntwort')) { lauf.antworten[lauf.ids[pos]] = el('#prAntwort').value; speichere(); } stoppeUhr(); };
  }

  /* ---------------- Auswertung ---------------- */
  function punkteVon(q, haken) {
    const h = haken[q.id] || [];
    return q.schema.reduce((n, [p], i) => n + (h[i] ? p : 0), 0);
  }
  function zeigeAuswertung(app) {
    const s = lade();
    const lauf = s.lauf;
    const fragen = lauf.ids.map(frage).filter(Boolean);
    const bereiche = [...new Set(fragen.map((q) => q.bereich))];
    app.innerHTML = `
      <a class="zurueck" href="#pruefung">← Zum Prüfungssimulator</a>
      <header class="lf-kopf"><span class="lf-nr pr-marke">Auswertung</span><h1>${esc(ART[lauf.art])}: deine Auswertung</h1>
        <p>Vergleiche deine Antwort mit der Musterlösung und hake ehrlich ab, was du richtig hast. Daraus ergeben sich Punkte und Note – so wie die Korrektur der Kammer.</p></header>
      <section class="glas block pr-ergebnis" id="prErgebnis"></section>
      ${fragen.map((q, i) => `
      <article class="glas block pr-loesung" id="prL-${esc(q.id)}">
        <p class="eyebrow">Aufgabe ${i + 1} · ${esc(kurzName(q.bereich))}</p>
        <h2>${esc(q.thema)} <span class="chip pr-qpunkte" data-qp="${esc(q.id)}"></span></h2>
        <details><summary>Sachverhalt und Aufgabe</summary>${text(q.sachverhalt)}<div class="pr-frage">${text(q.aufgabe)}</div></details>
        <div class="pr-zwei">
          <div class="pr-deine"><h3>Deine Antwort</h3>${(lauf.antworten[q.id] || '').trim() ? `<div class="pr-antwort-zeigen">${esc(lauf.antworten[q.id])}</div>` : '<p class="klein">Keine Antwort abgegeben.</p>'}</div>
          <div class="pr-muster"><h3>Musterlösung</h3>${text(q.loesung)}</div>
        </div>
        <h3>Dafür gibt es Punkte</h3>
        <ul class="pr-schema">${q.schema.map(([p, k], j) => `
          <li><label><input type="checkbox" data-q="${esc(q.id)}" data-j="${j}" ${(lauf.haken[q.id] || [])[j] ? 'checked' : ''}><span>${esc(k)}</span><b>${String(p).replace('.', ',')} P.</b></label></li>`).join('')}</ul>
        <p class="klein">Quelle: ${esc(q.quelle)}</p>
      </article>`).join('')}
      <div class="pr-knoepfe"><button class="btn primaer gross" id="prFertig">✓ Auswertung abschließen</button><a class="btn" href="#pruefung">Später weitermachen</a></div>`;
    const el = (sel) => app.querySelector(sel);
    function rechne() {
      const st = lade(); const l = st.lauf;
      const proBereich = bereiche.map((b) => {
        const fr = fragen.filter((q) => q.bereich === b);
        const max = fr.reduce((n, q) => n + q.punkte, 0);
        const erreicht = fr.reduce((n, q) => n + punkteVon(q, l.haken), 0);
        return { b, max, erreicht, prozent: max ? (erreicht / max) * 100 : 0 };
      });
      const max = proBereich.reduce((n, x) => n + x.max, 0);
      const erreicht = proBereich.reduce((n, x) => n + x.erreicht, 0);
      const prozent = max ? (erreicht / max) * 100 : 0;
      const [n, wort] = note(prozent);
      fragen.forEach((q) => { const c = app.querySelector(`[data-qp="${q.id}"]`); if (c) c.textContent = `${String(punkteVon(q, l.haken)).replace('.', ',')} / ${String(q.punkte).replace('.', ',')} P.`; });
      const fmt = (x) => (Math.round(x * 10) / 10).toLocaleString('de-DE');
      const zeit = l.abgegeben ? Math.round((l.abgegeben - l.start) / 60000) : null;
      let bestehen = '';
      const ap = ['ap-stb', 'ap-fibu', 'ap-wiso'];
      if (l.art === 'ap' && ap.every((b) => bereiche.includes(b)) && l.ids.length === F().filter((q) => ap.includes(q.bereich)).length) {
        const g = { 'ap-stb': 35, 'ap-fibu': 30, 'ap-wiso': 10 };
        const pb = Object.fromEntries(proBereich.map((x) => [x.b, x.prozent]));
        const schnitt = ap.reduce((sum, b) => sum + pb[b] * g[b], 0) / 75;
        const ok = pb['ap-stb'] >= 50 && schnitt >= 50 && ap.filter((b) => pb[b] >= 50).length >= 3 && ap.every((b) => pb[b] >= 30);
        bestehen = `<p class="pr-bestehen ${ok ? 'ok' : 'nein'}">${ok ? '✓ Schriftlich auf Bestehenskurs' : '✗ So würde es schriftlich noch nicht reichen'}: gewichtet (35 : 30 : 10) ${fmt(schnitt)} %. Für das Bestehen zählt zusätzlich die Mandantenberatung (25 %) – übe sie in der Gesprächssimulation.</p>`;
      }
      el('#prErgebnis').innerHTML = `
        <div class="pr-gesamt"><div class="pr-notenkreis n${n}"><b>${n}</b><span>${wort}</span></div>
          <div><h2>${fmt(erreicht)} von ${fmt(max)} Punkten · ${fmt(prozent)} %</h2>
          <p class="klein">${fragen.length} Aufgaben${zeit !== null ? ` · bearbeitet in ${zeit} Min.` : ''}${l.ende ? ` · Zeitvorgabe ${l.minuten} Min.` : ''}</p></div></div>
        <ul class="pr-bereichsnoten">${proBereich.map((x) => { const [nb] = note(x.prozent); return `<li><span>${esc(kurzName(x.b))}</span><span>${fmt(x.erreicht)} / ${fmt(x.max)} P.</span><span class="chip pr-note n${nb}">Note ${nb}</span></li>`; }).join('')}</ul>
        ${bestehen}`;
      return { erreicht, max, n };
    }
    app.addEventListener('change', (e) => {
      const c = e.target.closest('[data-q]');
      if (!c) return;
      const st = lade(); if (!st.lauf) return;
      const h = st.lauf.haken[c.dataset.q] || [];
      h[Number(c.dataset.j)] = c.checked;
      st.lauf.haken[c.dataset.q] = h;
      sichere(st); rechne();
    });
    el('#prFertig').addEventListener('click', () => {
      const r = rechne();
      const st = lade();
      const titel = ART[st.lauf.art] + ' · ' + bereiche.map(kurzName).join(', ');
      st.verlauf.push({ datum: Date.now(), titel, punkte: Math.round(r.erreicht * 10) / 10, max: r.max, note: r.n });
      st.verlauf = st.verlauf.slice(-50);
      st.lauf = null;
      sichere(st);
      if (window.Spiel) { Spiel.xp(10 + fragen.length * 2, 'pruefung'); if (r.n <= 2) Spiel.konfetti(); }
      toast(`Gespeichert: Note ${r.n}`);
      location.hash = '#pruefung';
    });
    rechne();
    return null;
  }

  /* ---------------- Gesprächssimulation ---------------- */
  function zeigeGespraech(app) {
    const s = lade();
    const g = s.gespraech;
    const q = frage(g.id);
    if (!q) { s.gespraech = null; sichere(s); return zeigeStart(app); }
    const phasen = { vorbereitung: '1 · Vorbereitung (15 Min.)', gespraech: '2 · Gespräch (max. 30 Min.)', auswertung: '3 · Auswertung' };
    app.innerHTML = `
      <a class="zurueck" href="#pruefung">← Zum Prüfungssimulator</a>
      <header class="lf-kopf"><span class="lf-nr pr-marke">Gespräch</span><h1>${esc(q.thema)}</h1>
        <p>${Object.entries(phasen).map(([k, v]) => `<span class="chip ${k === g.phase ? 'pr-phase' : ''}">${v}</span>`).join(' ')}</p></header>
      ${g.phase !== 'auswertung' ? `<div class="pr-leiste glas"><div><span class="eyebrow">${esc(phasen[g.phase])}</span><b>${g.phase === 'vorbereitung' ? 'Lies den Fall und notiere dir Stichpunkte' : 'Führe jetzt das Gespräch – laut!'}</b></div>
        <div class="pr-uhr" id="prUhr" role="timer"></div>
        <button class="btn primaer klein-btn" id="prNaechste">${g.phase === 'vorbereitung' ? 'Gespräch beginnen' : 'Gespräch beenden'}</button></div>` : ''}
      <article class="glas block pr-aufgabe">
        <div class="pr-sachverhalt"><h3>Fall</h3>${text(q.sachverhalt)}</div>
        <div class="pr-frage"><h3>Aufgabe</h3>${text(q.aufgabe)}</div>
        ${g.phase === 'gespraech' ? `<div class="pr-tipps"><h3>So läuft es gut</h3><ul><li>Begrüßen, vorstellen, Anliegen in eigenen Worten wiederholen.</li><li>Jede Frage der Mandantin nacheinander beantworten – einfach, ohne Fachchinesisch.</li><li>Zwischendurch nachfragen: „Ist das so verständlich?“</li><li>Zum Schluss zusammenfassen und nächste Schritte vereinbaren.</li></ul></div>` : ''}
        <label class="pr-antwort-label" for="prNotizen">Deine Stichpunkte</label>
        <textarea id="prNotizen" class="pr-antwort" rows="8" ${g.phase === 'auswertung' ? 'readonly' : ''}>${esc(g.notizen || '')}</textarea>
      </article>
      ${g.phase === 'auswertung' ? `
      <article class="glas block pr-loesung">
        <h2>Erwartungshorizont <span class="chip" id="prGp"></span></h2>
        <div class="pr-muster">${text(q.loesung)}</div>
        <h3>Bewertungskriterien – hake ab, was dir gelungen ist</h3>
        <ul class="pr-schema">${q.schema.map(([p, k], j) => `<li><label><input type="checkbox" data-j="${j}" ${(g.haken || {})[j] ? 'checked' : ''}><span>${esc(k)}</span><b>${p} P.</b></label></li>`).join('')}</ul>
        <p class="klein">In der echten Prüfung bewerten zwei bis drei Prüfer. Quelle: ${esc(q.quelle)}</p>
      </article>
      <div class="pr-knoepfe"><button class="btn primaer gross" id="prGFertig">✓ Fertig und speichern</button></div>` : ''}`;
    const el = (sel) => app.querySelector(sel);
    const notiz = el('#prNotizen');
    if (g.phase !== 'auswertung') notiz.addEventListener('input', () => { const st = lade(); if (st.gespraech) { st.gespraech.notizen = notiz.value; sichere(st); } });
    function weiter() {
      const st = lade(); if (!st.gespraech) return;
      st.gespraech.notizen = notiz.value;
      if (st.gespraech.phase === 'vorbereitung') { st.gespraech.phase = 'gespraech'; st.gespraech.ende = Date.now() + 30 * 60000; }
      else st.gespraech.phase = 'auswertung';
      sichere(st); stoppeUhr(); zeigeGespraech(app);
    }
    if (g.phase !== 'auswertung') {
      el('#prNaechste').addEventListener('click', weiter);
      const uhrEl = el('#prUhr');
      const lauft = () => {
        const rest = (g.ende - Date.now()) / 1000;
        uhrEl.textContent = '⏱ ' + uhr(rest);
        uhrEl.classList.toggle('gelb', rest <= 300 && rest > 120);
        uhrEl.classList.toggle('rot', rest <= 120);
        if (rest <= 0) { toast(g.phase === 'vorbereitung' ? '⏰ Vorbereitung vorbei – jetzt beginnt das Gespräch.' : '⏰ 30 Minuten sind um.'); weiter(); }
      };
      lauft(); tick = setInterval(lauft, 1000);
    } else {
      const rechne = () => { const st = lade(); const pkt = q.schema.reduce((n, [p], j) => n + ((st.gespraech.haken || {})[j] ? p : 0), 0); el('#prGp').textContent = `${pkt} / ${q.punkte} P. · Note ${note(pkt)[0]}`; return pkt; };
      app.addEventListener('change', (e) => {
        const c = e.target.closest('[data-j]'); if (!c) return;
        const st = lade(); st.gespraech.haken = st.gespraech.haken || {}; st.gespraech.haken[c.dataset.j] = c.checked; sichere(st); rechne();
      });
      rechne();
      el('#prGFertig').addEventListener('click', () => {
        const pkt = rechne();
        const st = lade();
        st.verlauf.push({ datum: Date.now(), titel: 'Gesprächssimulation · ' + q.thema, punkte: pkt, max: q.punkte, note: note(pkt)[0] });
        st.gespraech = null; sichere(st);
        if (window.Spiel) Spiel.xp(15, 'pruefung');
        toast('Gespräch gespeichert');
        location.hash = '#pruefung';
      });
    }
    return stoppeUhr;
  }

  /* Kachel für die Startseite */
  function startKachel() {
    const s = lade();
    const offen = s.lauf && !s.lauf.abgegeben;
    const letzte = s.verlauf[s.verlauf.length - 1];
    return `<a class="glas pr-kachel" href="#pruefung${offen ? '-lauf' : ''}">
      <span class="pr-kachel-icon">📝</span>
      <span><b>Prüfungssimulator</b><small>${offen ? 'Simulation offen – weiterschreiben' : `Zwischen- und Abschlussprüfung · ${F().filter((q) => !q.gespraech).length} Aufgaben + Gespräch`}${letzte ? ` · zuletzt Note ${letzte.note}` : ''}</small></span>
      <span class="pr-pfeil">→</span></a>`;
  }

  window.Pruefung = { zeige, startKachel, note };
})();
