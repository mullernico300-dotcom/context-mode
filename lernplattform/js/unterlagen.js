/* Unterlagen: das Lernregister im Lernfeld-Trainer.
   Fächer, Themen, Dateien und Lernübersichten liegen in der Datenbank des Artefakts (für alle lesbar,
   schreiben nur Bearbeiter). Hochladen dürfen nur Bearbeiter – das prüft der Server, die Oberfläche
   blendet den Upload für alle anderen nur zusätzlich aus. Seminare werden nie angezeigt. */
(function () {
  'use strict';
  const { esc, toast } = U;
  const SAMMLUNGEN = ['subjects', 'topics', 'files', 'summaries'];
  const daten = { subjects: [], topics: [], files: [], summaries: [] };
  let db = null, assets = null, user = null, bereit = false, fehler = '', darfSchreiben = false, gestartet = false;
  const hoerer = new Set();

  /* Bereiche: Lernfelder (mit Lernübersicht und Aufgaben) sowie Seminare und Zeitung (nur zum Nachlesen) */
  const bereichVon = (s) => (s && s.bereich) || (/seminar/i.test((s && s.name) || '') ? 'seminar' : 'lernfeld');
  const sortiert = (l) => l.sort((a, b) => String(a.name).localeCompare(String(b.name), 'de', { numeric: true }));
  const faecher = () => sortiert(daten.subjects.filter((s) => bereichVon(s) === 'lernfeld'));
  const ausBereich = (b) => sortiert(daten.subjects.filter((s) => bereichVon(s) === b));
  const BEREICHE = { seminar: { titel: 'Seminare', etikett: 'Seminar' }, zeitung: { titel: 'Die Steuerfachangestellten-Zeitung', etikett: 'Zeitung' } };
  const fach = (id) => daten.subjects.find((s) => s.id === id);
  const themaVon = (id) => daten.topics.find((t) => t.id === id);
  const melden = () => hoerer.forEach((f) => { try { f(); } catch (e) { /* Ansicht weg */ } });

  /* Fach im Register ↔ Lernfeld im Trainer („LF 6“ → lf6, „Sozialkunde“ → sk) */
  function lernfeldZu(subject) {
    const lfs = Store.lernfelder();
    const m = /lf\s*0*(\d+)/i.exec(subject.name || '');
    if (m) return lfs.find((l) => String(l.nummer) === m[1] && /^lf/i.test(l.id)) || null;
    if (/sozial/i.test(subject.name || '')) return lfs.find((l) => l.id === 'sk') || null;
    return null;
  }
  const fuerLernfeld = (lfId) => faecher().find((s) => { const lf = lernfeldZu(s); return lf && lf.id === lfId; }) || null;

  async function starte() {
    if (gestartet) return;
    gestartet = true;
    if (!(window.claude && window.claude.use)) { fehler = 'nur-artefakt'; bereit = true; return melden(); }
    const uhr = setTimeout(() => { if (!bereit) { fehler = 'zeit'; bereit = true; melden(); } }, 10000);
    try {
      db = await window.claude.use('db');
      if (!db) { clearTimeout(uhr); fehler = 'abgemeldet'; bereit = true; return melden(); }
      SAMMLUNGEN.forEach((n) => db.collection(n).onSnapshot((snap) => {
        daten[n] = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        clearTimeout(uhr); bereit = true; fehler = ''; melden();
      }, () => { clearTimeout(uhr); fehler = 'laden'; bereit = true; melden(); }));
      [user, assets] = await Promise.all([window.claude.use('user'), window.claude.use('assets')]);
      darfSchreiben = !!(assets && user && (await user.canEdit()));
      melden();
    } catch (e) { clearTimeout(uhr); fehler = 'laden'; bereit = true; melden(); }
  }

  const dateiUrl = (f) => f.url || ('/_blob/' + f.assetId);
  const endung = (f) => { const m = /\.([a-z0-9]+)$/i.exec(f.name || ''); return m ? m[1].slice(0, 4).toUpperCase() : 'DATEI'; };
  const datum = (ms) => ms ? new Date(ms).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';

  function hinweis() {
    if (!bereit) return '<div class="glas leer">Unterlagen werden geladen …</div>';
    if (fehler === 'nur-artefakt') return '<div class="glas leer">Die Unterlagen gibt es nur in der Artefakt-Version auf claude.ai.</div>';
    if (fehler === 'abgemeldet') return '<div class="glas leer">Melde dich bei claude.ai an, um die Unterlagen zu sehen.</div>';
    if (fehler) return '<div class="glas leer">Die Unterlagen konnten gerade nicht geladen werden. Lade die Seite neu.</div>';
    return '';
  }

  /* ---------------- Übersicht aller Fächer ---------------- */
  function zeigeUebersicht(el) {
    const h = hinweis();
    if (h) { el.innerHTML = '<a class="zurueck" href="#start">← Zur Übersicht</a>' + h; return; }
    const fs = faecher();
    el.innerHTML = `
      <a class="zurueck" href="#start">← Zur Übersicht</a>
      <header class="lf-kopf"><span class="lf-nr">Unterlagen</span><h1>Lernregister</h1>
        <p>Arbeitsblätter, Lösungen und Skripte, sortiert nach Fach und Thema, mit Lernübersicht.</p></header>
      ${darfSchreiben ? uploadHtml(null) : ''}
      <section class="raster">${fs.map((s) => {
        const n = daten.files.filter((f) => f.subjectId === s.id).length;
        const t = daten.topics.filter((x) => x.subjectId === s.id).length;
        const sum = daten.summaries.find((x) => x.id === s.id);
        return `<a class="glas lf-karte" href="#unterlagen-${esc(s.id)}" style="--akzent:${esc(s.color || '#6366f1')}">
          <span class="lf-nr">${esc(s.name)}</span>
          <h2>${n} ${n === 1 ? 'Datei' : 'Dateien'}</h2>
          <p>${t} ${t === 1 ? 'Thema' : 'Themen'}${sum && (sum.sections || []).length ? ` · Lernübersicht mit ${sum.sections.length} Abschnitten` : ''}</p></a>`;
      }).join('')}</section>
      ${fs.length ? '' : '<div class="glas leer">Noch keine Unterlagen.</div>'}
      ${abteilungHtml('seminar')}
      ${abteilungHtml('zeitung')}`;
    verdrahteUpload(el, null);
  }

  /* Abteilung Seminare / Zeitung: nur Dateien zum Nachlesen */
  function abteilungHtml(b) {
    const liste = ausBereich(b);
    if (!liste.length) return '';
    return `<section class="abschnitt ul-abteilung">
      <div class="abschnitt-kopf"><h2>${esc(BEREICHE[b].titel)}</h2><span class="klein">nur zum Nachlesen</span></div>
      <div class="fach-raster">${liste.map((s) => {
        const n = daten.files.filter((f) => f.subjectId === s.id).length;
        return `<a class="glas fach-karte" href="#unterlagen-${esc(s.id)}" style="--akzent:${esc(s.color || '#0f766e')}">
          <div class="fach-karte-kopf"><span class="lf-nr">${esc(BEREICHE[b].etikett)}</span></div>
          <h3>${esc(s.name)}</h3><p>${n ? `${n} ${n === 1 ? 'Datei' : 'Dateien'}` : 'Noch keine Dateien'}</p></a>`;
      }).join('')}</div>
    </section>`;
  }

  /* Nur die Seminare (Route #unterlagen-seminare) */
  function zeigeSeminare(el) {
    const h = hinweis();
    if (h) { el.innerHTML = '<a class="zurueck" href="#start">← Zur Übersicht</a>' + h; return; }
    el.innerHTML = `<a class="zurueck" href="#unterlagen">← Alle Unterlagen</a>
      <header class="lf-kopf"><span class="lf-nr">Unterlagen</span><h1>Seminare</h1>
        <p>Unterlagen aus den Seminaren zum Nachlesen. Daraus entstehen keine Aufgaben.</p></header>
      ${abteilungHtml('seminar') || '<div class="glas leer">Noch keine Seminar-Unterlagen.</div>'}`;
  }

  /* ---------------- Ein Fach ---------------- */
  function zeigeFach(el, id) {
    const h = hinweis();
    const s = fach(id);
    if (h || !s) { el.innerHTML = '<a class="zurueck" href="#unterlagen">← Alle Fächer</a>' + (h || '<div class="glas leer">Dieses Fach gibt es nicht.</div>'); return; }
    const nurLesen = bereichVon(s) !== 'lernfeld';
    const lf = nurLesen ? null : lernfeldZu(s);
    const themen = daten.topics.filter((t) => t.subjectId === s.id).sort((a, b) => String(a.name).localeCompare(String(b.name), 'de'));
    const dateien = daten.files.filter((f) => f.subjectId === s.id).sort((a, b) => (b.created || 0) - (a.created || 0));
    const sum = daten.summaries.find((x) => x.id === s.id);
    const abschnitte = nurLesen ? [] : (sum && sum.sections) || [];
    const liste = (a) => (a || []).length ? `<ul>${a.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
    const gruppe = (t) => {
      const fs = dateien.filter((f) => f.topicId === (t && t.id));
      const ab = abschnitte.filter((x) => x.topicId === (t && t.id));
      if (!fs.length && !ab.length) return '';
      return `<details class="glas block ul-thema" ${t ? '' : 'open'}>
        <summary><h2>${esc(t ? t.name : 'Ohne Thema')}</h2><span class="chip">${fs.length} ${fs.length === 1 ? 'Datei' : 'Dateien'}</span></summary>
        ${fs.length ? `<ul class="ul-dateien">${fs.map((f) => `<li><span class="ul-typ">${esc(endung(f))}</span>
          <div><a href="${esc(dateiUrl(f))}" target="_blank" rel="noopener">${esc(f.name)}</a><span class="klein">${datum(f.created)}</span></div>
          ${darfSchreiben ? `<button class="mini rot" data-ul-weg="${esc(f.id)}" aria-label="Datei löschen">✕</button>` : ''}</li>`).join('')}</ul>` : ''}
        ${ab.map((x) => `<article class="ul-abschnitt">
          <div class="ul-ab-kopf"><h3>${esc(x.name)}</h3>${x.examLevel ? `<span class="chip">Prüfungsrelevanz ${esc(x.examLevel)}</span>` : ''}</div>
          ${x.overview ? `<p>${esc(x.overview)}</p>` : ''}
          ${(x.laws || []).length ? `<h4>Paragrafen</h4><dl class="ul-paras">${x.laws.map((l) => `<dt>${esc(l.ref)}</dt><dd>${esc(l.content)}</dd>`).join('')}</dl>` : ''}
          ${(x.tips || []).length ? `<h4>So löst du die Aufgaben</h4>${liste(x.tips)}` : ''}
          ${(x.traps || []).length ? `<div class="ul-fallen"><h4>Typische Fallen</h4>${liste(x.traps)}</div>` : ''}
          ${(x.cases || []).length ? `<h4>Fälle aus deinen Unterlagen</h4>${x.cases.map((c) => `<details class="ul-fall"><summary>${esc(c.title)}</summary><p><b>Sachverhalt:</b> ${esc(c.sachverhalt)}</p><p><b>Lösung:</b> ${esc(c.loesung)}</p></details>`).join('')}` : ''}
        </article>`).join('')}
      </details>`;
    };
    el.innerHTML = `
      <a class="zurueck" href="${bereichVon(s) === 'seminar' ? '#unterlagen-seminare' : '#unterlagen'}">← ${bereichVon(s) === 'seminar' ? 'Alle Seminare' : 'Alle Unterlagen'}</a>
      <header class="lf-kopf" style="--akzent:${esc(s.color || '#6366f1')}"><span class="lf-nr">${nurLesen ? esc(BEREICHE[bereichVon(s)].etikett) : 'Unterlagen'}</span><h1>${esc(s.name)}</h1>
        <p>${dateien.length} ${dateien.length === 1 ? 'Datei' : 'Dateien'} · ${themen.length} ${themen.length === 1 ? 'Thema' : 'Themen'}${abschnitte.length ? ` · ${abschnitte.length} Abschnitte in der Lernübersicht` : ''}</p>
        ${lf ? `<a class="btn klein-btn" href="#lf-${esc(lf.id)}">Zum Lernfeld ${esc(U.kurz(lf))} →</a>` : ''}</header>
      ${darfSchreiben ? uploadHtml(s.id) : ''}
      ${themen.map(gruppe).join('')}
      ${gruppe(null) || ''}
      ${!dateien.length && !abschnitte.length ? '<div class="glas leer">In diesem Fach liegen noch keine Unterlagen.</div>' : ''}
      ${nurLesen ? '<p class="klein ul-fuss">Nur zum Nachlesen – aus diesen Dateien entstehen keine Aufgaben.</p>' : dateien.some((f) => !(sum && (sum.includedFileIds || []).includes(f.id))) ? '<p class="klein ul-fuss">Neue Dateien werden im Abendlauf in die Lernübersicht eingearbeitet.</p>' : ''}`;
    verdrahteUpload(el, s.id);
  }

  /* ---------------- Hochladen (nur Bearbeiter) ---------------- */
  function uploadHtml(subjectId) {
    const fs = faecher();
    const optionen = (l) => l.map((s) => `<option value="${esc(s.id)}">${esc(s.name)}</option>`).join('');
    const themen = subjectId ? daten.topics.filter((t) => t.subjectId === subjectId) : [];
    return `<section class="glas block ul-upload">
      <h2>⬆ Dateien hochladen</h2>
      <p class="klein">Nur du siehst diesen Bereich. PDF, Fotos oder Textdateien bis 20 MB.</p>
      <form id="ulForm" class="pl-form" autocomplete="off">
        ${subjectId ? `<input type="hidden" id="ulFach" value="${esc(subjectId)}">` : `<label class="feld"><span>Fach</span><select id="ulFach" required><option value="">Ordner wählen</option><optgroup label="Lernfelder">${optionen(fs)}</optgroup>${ausBereich('seminar').length ? `<optgroup label="Seminare">${optionen(ausBereich('seminar'))}</optgroup>` : ''}${ausBereich('zeitung').length ? `<optgroup label="Zeitung">${optionen(ausBereich('zeitung'))}</optgroup>` : ''}<option value="__neu">＋ Neuer Ordner …</option></select></label>
        <label class="feld" id="ulNeuFachBox" hidden><span>Name des neuen Ordners</span><input id="ulNeuFach" maxlength="60" placeholder="z. B. LF 7 oder Seminar Bilanzsteuerrecht"></label>`}
        ${subjectId === 'zeitung' ? '<label class="feld"><span>Ausgabe</span><input id="ulThema" list="ulThemen" maxlength="60" placeholder="z. B. Ausgabe März 2026 (leer = ohne)">' : '<label class="feld"><span>Thema</span><input id="ulThema" list="ulThemen" maxlength="60" placeholder="z. B. Reisekosten (leer = ohne Thema)">'}
          <datalist id="ulThemen">${themen.map((t) => `<option value="${esc(t.name)}">`).join('')}</datalist></label>
        <label class="feld breit"><span>Dateien</span><input type="file" id="ulDateien" multiple accept=".pdf,image/*,.txt,.md,.csv" required></label>
        <button class="btn primaer" type="submit">Hochladen</button>
      </form>
      <p class="klein" id="ulStatus" role="status"></p>
    </section>`;
  }

  function verdrahteUpload(el, subjectId) {
    el.onchange = (e) => {
      if (e.target.id === 'ulFach') {
        const box = el.querySelector('#ulNeuFachBox');
        if (box) box.hidden = e.target.value !== '__neu';
        el.querySelector('#ulThemen').innerHTML = daten.topics.filter((t) => t.subjectId === e.target.value).map((t) => `<option value="${esc(t.name)}">`).join('');
      }
    };
    el.onsubmit = async (e) => {
      if (e.target.id !== 'ulForm') return;
      e.preventDefault();
      if (!darfSchreiben) return toast('Hochladen darf nur der Besitzer.');
      const status = el.querySelector('#ulStatus');
      const knopf = e.target.querySelector('button[type=submit]');
      const dateien = [...el.querySelector('#ulDateien').files];
      if (!dateien.length) return;
      knopf.disabled = true;
      try {
        let sid = el.querySelector('#ulFach').value;
        if (sid === '__neu') {
          const name = el.querySelector('#ulNeuFach').value.trim();
          if (!name) { knopf.disabled = false; return toast('Bitte einen Namen für das Fach eingeben.'); }
          const vorh = daten.subjects.find((s) => s.name.toLowerCase() === name.toLowerCase());
          sid = vorh ? vorh.id : (await db.collection('subjects').add({ name, color: '#6366f1', created: Date.now(), bereich: /seminar/i.test(name) ? 'seminar' : /zeitung/i.test(name) ? 'zeitung' : 'lernfeld' })).id;
        }
        if (!sid) { knopf.disabled = false; return toast('Bitte ein Fach wählen.'); }
        const tname = el.querySelector('#ulThema').value.trim();
        let tid = null;
        if (tname) {
          const vorh = daten.topics.find((t) => t.subjectId === sid && t.name.toLowerCase() === tname.toLowerCase());
          tid = vorh ? vorh.id : (await db.collection('topics').add({ subjectId: sid, name: tname, created: Date.now() })).id;
        }
        let ok = 0;
        for (const f of dateien) {
          status.textContent = `Lade „${f.name}“ hoch …`;
          try {
            const r = await assets.upload(f);
            await db.collection('files').add({ name: f.name, assetId: r.id, url: r.url, contentType: r.contentType || f.type, size: r.sizeBytes, subjectId: sid, topicId: tid, created: Date.now(), sortedBy: 'manual' });
            ok++;
          } catch (err) {
            toast(err && err.code === 'too_large' ? `„${f.name}“ ist zu groß (höchstens 20 MB).` : err && err.code === 'unsupported_type' ? `Dateityp von „${f.name}“ wird nicht unterstützt.` : `„${f.name}“ konnte nicht hochgeladen werden.`);
          }
        }
        status.textContent = ok ? `${ok} ${ok === 1 ? 'Datei' : 'Dateien'} hochgeladen. Die Lernübersicht wird im Abendlauf ergänzt.` : '';
        e.target.reset();
      } catch (err) {
        toast(err && /permission|denied|not_granted|forbidden/i.test(String(err.code || err.message)) ? 'Hochladen darf nur der Besitzer.' : 'Hochladen hat nicht geklappt. Bitte noch einmal versuchen.');
      }
      knopf.disabled = false;
    };
    el.onclick = async (e) => {
      const w = e.target.closest('[data-ul-weg]');
      if (!w || !darfSchreiben) return;
      if (!w.dataset.sicher) { w.dataset.sicher = '1'; w.classList.add('sicher'); w.textContent = 'Sicher?'; setTimeout(() => { if (w.isConnected) { delete w.dataset.sicher; w.classList.remove('sicher'); w.textContent = '✕'; } }, 3000); return; }
      const f = daten.files.find((x) => x.id === w.dataset.ulWeg);
      try {
        await db.doc('files/' + w.dataset.ulWeg).delete();
        if (f && f.assetId) { try { await assets.delete(f.assetId); } catch (err) { /* Datei bleibt im Speicher */ } }
        toast('Datei gelöscht');
      } catch (err) { toast('Löschen hat nicht geklappt.'); }
    };
  }

  function zeige(app, id) {
    starte();
    const zeichne = () => (id === 'seminare' ? zeigeSeminare(app) : id ? zeigeFach(app, id) : zeigeUebersicht(app));
    hoerer.add(zeichne);
    zeichne();
    return () => { hoerer.delete(zeichne); app.onchange = app.onsubmit = app.onclick = null; };
  }

  /* Knopf im Lernfeld: „📂 Unterlagen“ – erscheint, sobald die Daten geladen sind */
  function knopfFuer(lfId, ziel) {
    starte();
    const setze = () => {
      if (!ziel.isConnected) return hoerer.delete(setze);
      const s = fuerLernfeld(lfId);
      const n = s ? daten.files.filter((f) => f.subjectId === s.id).length : 0;
      ziel.innerHTML = s ? `<a class="btn klein-btn" href="#unterlagen-${esc(s.id)}">📂 Unterlagen${n ? ` (${n})` : ''}</a>` : '';
    };
    hoerer.add(setze);
    setze();
  }

  window.Unterlagen = { zeige, knopfFuer, starte };
})();
