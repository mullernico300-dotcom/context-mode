/* Verwaltung für Lehrkräfte: Lernfelder und Inhalte bearbeiten, exportieren, importieren. */
(function () {
  'use strict';
  const { esc, toast, download } = U;

  const BEREICHE = [
    ['basis', 'Grunddaten'],
    ['themen', 'Themen'],
    ['paragrafen', 'Paragrafen'],
    ['karten', 'Karteikarten'],
    ['quiz', 'Quiz'],
    ['raetsel', 'Rätsel']
  ];

  const LISTEN = {
    themen: {
      name: 'Thema', neu: () => ({ titel: '', text: '', merke: '' }),
      felder: [['titel', 'Überschrift', 'text'], ['text', 'Erklärung („- “ = Aufzählung, **fett**)', 'area'], ['merke', 'Merksatz (optional)', 'text']]
    },
    paragrafen: {
      name: 'Paragraf', neu: () => ({ gruppe: '', ref: '', text: '' }),
      felder: [['gruppe', 'Thema / Überschrift (gleiche Namen werden zusammengefasst)', 'text'], ['ref', 'Fundstelle, z. B. § 622 Abs. 1 BGB', 'text'], ['text', 'Erklärung in einfacher Sprache', 'area']]
    },
    karten: {
      name: 'Karte', neu: () => ({ vorne: '', hinten: '' }),
      felder: [['vorne', 'Vorderseite (Begriff / Frage)', 'area'], ['hinten', 'Rückseite (Erklärung / Antwort)', 'area']]
    },
    raetsel: {
      name: 'Wort', neu: () => ({ wort: '', hinweis: '' }),
      felder: [['wort', 'Lösungswort (ein Wort)', 'text'], ['hinweis', 'Hinweis / Umschreibung', 'text']]
    },
    quiz: { name: 'Frage', neu: () => ({ frage: '', antworten: ['', '', '', ''], richtig: 0, stufe: 1, erklaerung: '' }) }
  };

  let wurzel = null, lfId = null, bereich = 'basis';

  function aktuellesLF() { return Store.daten().lernfelder.find((l) => l.id === lfId); }

  function setze(obj, pfad, wert) {
    const teile = pfad.split('.');
    for (let i = 0; i < teile.length - 1; i++) obj = obj[teile[i]];
    obj[teile[teile.length - 1]] = wert;
  }
  function hole(obj, pfad) { return pfad.split('.').reduce((o, t) => (o == null ? o : o[t]), obj); }

  function feld(pfad, label, typ, wert) {
    const v = esc(wert == null ? '' : wert);
    const eingabe = typ === 'area'
      ? `<textarea data-pfad="${pfad}" rows="3">${v}</textarea>`
      : `<input type="${typ === 'zahl' ? 'number' : typ === 'farbe' ? 'color' : 'text'}" data-pfad="${pfad}" ${typ === 'zahl' ? 'data-zahl' : ''} value="${v}">`;
    return `<label class="feld"><span>${label}</span>${eingabe}</label>`;
  }

  function zeichneListe(lf, key) {
    const def = LISTEN[key];
    const eintraege = lf[key];
    const kopf = (i) => `<div class="eintrag-kopf"><b>${def.name} ${i + 1}</b>
      <span><button class="mini" data-hoch="${key}.${i}" ${i ? '' : 'disabled'} title="Nach oben">↑</button>
      <button class="mini rot" data-entf="${key}.${i}" title="Löschen">✕</button></span></div>`;
    const koerper = (e, i) => key === 'quiz'
      ? `${feld(`quiz.${i}.frage`, 'Frage', 'area', e.frage)}
         <div class="antwort-raster">
           ${e.antworten.slice(0, 4).map((a, j) => `
             <label class="feld antwortfeld"><span><input type="radio" name="r${i}" data-pfad="quiz.${i}.richtig" data-zahl value="${j}" ${e.richtig === j ? 'checked' : ''}> Antwort ${'ABCD'[j]} ${e.richtig === j ? '(richtig)' : ''}</span>
             <input type="text" data-pfad="quiz.${i}.antworten.${j}" value="${esc(a)}"></label>`).join('')}
         </div>
         <div class="zwei">
           <label class="feld"><span>Schwierigkeit</span><select data-pfad="quiz.${i}.stufe" data-zahl>
             ${[[1, 'leicht'], [2, 'mittel'], [3, 'schwer']].map(([n, t]) => `<option value="${n}" ${e.stufe === n ? 'selected' : ''}>${n} – ${t}</option>`).join('')}
           </select></label>
           ${feld(`quiz.${i}.erklaerung`, 'Erklärung nach der Antwort (optional)', 'text', e.erklaerung)}
         </div>`
      : def.felder.map(([k, label, typ]) => feld(`${key}.${i}.${k}`, label, typ, e[k])).join('');
    return `
      ${key === 'quiz' ? '<p class="klein">Den Kreis vor der richtigen Antwort markieren. Im Spiel werden die Antworten gemischt und die Fragen nach Schwierigkeit sortiert (maximal 10 pro Runde).</p>' : ''}
      ${key === 'raetsel' ? '<p class="klein">Tipp: 8–12 Wörter mit je 3–14 Buchstaben ergeben ein gutes Gitter. Wörter, die sich mit keinem anderen kreuzen lassen, werden ausgelassen.</p>' : ''}
      ${eintraege.map((e, i) => `<div class="eintrag">${kopf(i)}${koerper(e, i)}</div>`).join('')}
      ${eintraege.length ? '' : '<p class="klein">Noch keine Einträge.</p>'}
      <button class="btn primaer" data-neu="${key}">＋ ${def.name} hinzufügen</button>`;
  }

  function zeichne() {
    const d = Store.daten();
    if (!d.lernfelder.some((l) => l.id === lfId)) lfId = d.lernfelder[0] ? d.lernfelder[0].id : null;
    const lf = aktuellesLF();
    wurzel.innerHTML = `
      <a class="zurueck" href="#start">← Zur Lernplattform</a>
      <header class="lf-kopf"><h1>Verwaltung</h1>
        <p>Inhalte bearbeiten – Änderungen werden sofort in diesem Browser gespeichert.</p></header>

      <section class="glas block hinweisbox">
        <b>So kommen Änderungen zur Klasse:</b> Bearbeiten → <em>data.js exportieren</em> → die Datei <code>js/data.js</code> im App-Ordner (bzw. auf dem Webspace) ersetzen. Erst dann sehen alle die neuen Inhalte.
        <div class="admin-knoepfe">
          <button class="btn primaer" data-a="exportJs">⬇ data.js exportieren</button>
          <button class="btn" data-a="exportJson">⬇ Sicherung (JSON)</button>
          <label class="btn">⬆ Importieren<input type="file" accept=".json,.js,application/json" data-import hidden></label>
          <button class="btn" data-a="reset" ${Store.hatLokaleAenderungen() ? '' : 'disabled'}>↺ Auf data.js zurücksetzen</button>
        </div>
        <div id="exportBox" class="exportbox" hidden>
          <p class="klein">Falls kein Download startet: Inhalt von <b></b> hier kopieren und als Datei speichern.</p>
          <textarea id="exportText" rows="6" readonly aria-label="Exportierter Inhalt"></textarea>
          <button class="btn" data-a="kopieren">Kopieren</button>
        </div>
      </section>

      <section class="glas block">
        <div class="zwei">
          ${feld('@titel', 'Name der Plattform', 'text', d.titel)}
          ${feld('@untertitel', 'Untertitel', 'text', d.untertitel)}
        </div>
        <h2>Lernfelder</h2>
        <div class="lf-auswahl">
          ${d.lernfelder.map((l) => `<button class="pille ${l.id === lfId ? 'aktiv' : ''} ${Store.erlaubt(l) ? '' : 'gesperrt'}" data-lf="${esc(l.id)}">${esc(U.kurz(l))} · ${esc(l.titel)}</button>`).join('')}
          <button class="pille neu" data-a="neuesLF">＋ Neues Lernfeld</button>
        </div>
      </section>

      ${lf ? `
      <section class="glas block">
        ${Store.erlaubt(lf) ? '' : '<div class="warnung">Dieser Eintrag ist als EStG-/USt-Seminar benannt und wird in der App nicht angezeigt. Die Plattform enthält ausschließlich Lernfelder.</div>'}
        <nav class="tabs innen">
          ${BEREICHE.map(([id, name]) => `<a href="javascript:void 0" data-bereich="${id}" class="${id === bereich ? 'aktiv' : ''}">${name}${lf[id] ? ` <small>${lf[id].length}</small>` : ''}</a>`).join('')}
        </nav>
        ${bereich === 'basis' ? `
          <div class="zwei">
            ${feld('nummer', 'Nummer', 'zahl', lf.nummer)}
            ${feld('farbe', 'Akzentfarbe', 'farbe', lf.farbe)}
          </div>
          ${feld('kurz', 'Kürzel statt „LF + Nummer“ (optional, z. B. SK)', 'text', lf.kurz)}
          ${feld('titel', 'Titel des Lernfelds', 'text', lf.titel)}
          ${feld('beschreibung', 'Kurzbeschreibung', 'text', lf.beschreibung)}
          <label class="feld"><span>Lernziele (eines pro Zeile)</span><textarea rows="6" data-zeilen="lernziele">${esc(lf.lernziele.join('\n'))}</textarea></label>
          <div class="admin-knoepfe">
            <a class="btn" href="#lf-${esc(lf.id)}">👁 Vorschau</a>
            <button class="btn rot" data-a="loescheLF">Lernfeld löschen</button>
          </div>` : zeichneListe(lf, bereich)}
      </section>` : ''}

      <section class="glas block">
        <h2>Eigener Lernfortschritt</h2>
        <p class="klein">Löscht Karteikarten-Status, Highscores und Rätsel-Erfolge in diesem Browser.</p>
        <button class="btn" data-a="fortschritt">Fortschritt löschen</button>
      </section>`;
  }

  function sichern() {
    if (!Store.speichere()) toast('Speichern nicht möglich (Browser-Speicher voll oder gesperrt).');
  }

  function importiere(datei) {
    const leser = new FileReader();
    leser.onload = () => {
      try {
        let text = String(leser.result).trim();
        const start = text.indexOf('{', Math.max(0, text.indexOf('window.LERN_DATEN')));
        text = text.slice(start, text.lastIndexOf('}') + 1);
        if (!Store.ersetze(JSON.parse(text))) throw new Error('Format');
        toast('Inhalte importiert');
        zeichne();
      } catch (e) {
        toast('Die Datei konnte nicht gelesen werden.');
      }
    };
    leser.readAsText(datei);
  }

  /* Zweiter Klick bestätigt: Der Knopf fragt erst „Wirklich?“ und führt beim nächsten Klick aus. */
  function bestaetigt(t) {
    if (t.dataset.sicher) return true;
    const alt = t.innerHTML;
    t.dataset.sicher = '1';
    t.classList.add('sicher');
    t.textContent = 'Wirklich? Nochmal klicken';
    setTimeout(() => { if (t.isConnected) { delete t.dataset.sicher; t.classList.remove('sicher'); t.innerHTML = alt; } }, 3500);
    return false;
  }

  /* Export: Download versuchen und den Inhalt zusätzlich zum Kopieren anzeigen
     (in manchen Umgebungen, z. B. im Artefakt-Viewer, sind Downloads gesperrt). */
  function zeigeExport(name, inhalt, typ) {
    download(name, inhalt, typ);
    const box = wurzel.querySelector('#exportBox');
    box.hidden = false;
    box.querySelector('b').textContent = name;
    const ta = box.querySelector('textarea');
    ta.value = inhalt;
    box.scrollIntoView({ block: 'nearest' });
  }

  function klick(e) {
    const d = Store.daten();
    const lf = aktuellesLF();
    const t = e.target.closest('[data-lf],[data-bereich],[data-neu],[data-entf],[data-hoch],[data-a]');
    if (!t || t.disabled) return;
    const ds = t.dataset;
    if (ds.lf) { lfId = ds.lf; bereich = 'basis'; }
    else if (ds.bereich) bereich = ds.bereich;
    else if (ds.neu) { lf[ds.neu].push(LISTEN[ds.neu].neu()); sichern(); }
    else if (ds.entf) {
      const [key, i] = ds.entf.split('.');
      if (!bestaetigt(t)) return;
      lf[key].splice(Number(i), 1); sichern();
    } else if (ds.hoch) {
      const [key, i] = ds.hoch.split('.');
      const n = Number(i);
      [lf[key][n - 1], lf[key][n]] = [lf[key][n], lf[key][n - 1]]; sichern();
    } else if (ds.a === 'neuesLF') {
      const nr = d.lernfelder.reduce((m, l) => Math.max(m, Number(l.nummer) || 0), 0) + 1;
      const neu = { id: 'lf' + Date.now().toString(36), nummer: nr, titel: 'Neues Lernfeld', beschreibung: '', farbe: '#6366f1', lernziele: [], themen: [], paragrafen: [], karten: [], quiz: [], raetsel: [] };
      d.lernfelder.push(neu); lfId = neu.id; bereich = 'basis'; sichern();
    } else if (ds.a === 'loescheLF') {
      if (!bestaetigt(t)) return;
      d.lernfelder.splice(d.lernfelder.indexOf(lf), 1); lfId = null; sichern();
    } else if (ds.a === 'exportJs') {
      const kopf = '/* Lerninhalte – exportiert aus der Verwaltung am ' + new Date().toLocaleDateString('de-DE') + '. Diese Datei als js/data.js ablegen. */\n';
      zeigeExport('data.js', kopf + 'window.LERN_DATEN = ' + JSON.stringify(d, null, 2) + ';\n', 'text/javascript');
      return;
    } else if (ds.a === 'exportJson') {
      zeigeExport('lerninhalte-sicherung.json', JSON.stringify(d, null, 2), 'application/json');
      return;
    } else if (ds.a === 'kopieren') {
      const ta = wurzel.querySelector('#exportBox textarea');
      ta.select();
      const fertig = () => toast('In die Zwischenablage kopiert');
      try { navigator.clipboard.writeText(ta.value).then(fertig, () => toast('Text ist markiert – bitte mit Strg+C kopieren.')); }
      catch (err) { toast('Text ist markiert – bitte mit Strg+C kopieren.'); }
      return;
    } else if (ds.a === 'reset') {
      if (!bestaetigt(t)) return;
      Store.zuruecksetzen(); lfId = null;
    } else if (ds.a === 'fortschritt') {
      if (!bestaetigt(t)) return;
      Store.fortschrittLoeschen(); toast('Fortschritt gelöscht'); return;
    }
    zeichne();
  }

  function eingabe(e) {
    const t = e.target;
    if (t.matches('[data-import]')) { if (t.files[0]) importiere(t.files[0]); return; }
    const lf = aktuellesLF();
    if (t.dataset.zeilen) {
      lf[t.dataset.zeilen] = t.value.split('\n').map((z) => z.trim()).filter(Boolean);
    } else if (t.dataset.pfad) {
      if (t.type === 'radio' && !t.checked) return;
      const wert = 'zahl' in t.dataset ? Number(t.value) : t.value;
      const pfad = t.dataset.pfad;
      if (pfad[0] === '@') Store.daten()[pfad.slice(1)] = wert;
      else setze(lf, pfad, wert);
      if (pfad === '@titel') document.getElementById('marke').textContent = wert;
    } else return;
    sichern();
    // Ansicht nur neu aufbauen, wo sich Beschriftungen ändern
    if (e.type === 'change' && (t.type === 'radio' || /^(titel|nummer|kurz)$/.test(t.dataset.pfad || ''))) zeichne();
  }

  function zeige(el, id) {
    wurzel = el;
    if (id) lfId = id;
    if (!el._admin) {
      // einmalig je Container registrieren – der Container bleibt über Routenwechsel bestehen
      el._admin = true;
      el.addEventListener('click', (e) => { if (location.hash.startsWith('#verwaltung')) klick(e); });
      el.addEventListener('input', (e) => { if (location.hash.startsWith('#verwaltung')) eingabe(e); });
      el.addEventListener('change', (e) => { if (location.hash.startsWith('#verwaltung')) eingabe(e); });
    }
    zeichne();
  }

  window.Admin = { zeige, hole };
})();
