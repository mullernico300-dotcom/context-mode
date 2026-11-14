/* Lernplattform – Ansichten für Lernende: Start, Themen, Karteikarten, Quiz, Kreuzworträtsel. */
(function () {
  'use strict';
  const { esc, mischen, schluessel, format, toast } = U;
  const app = document.getElementById('app');
  let aufraeumen = null;

  /* ---------------- Router ---------------- */
  function route() {
    if (aufraeumen) { aufraeumen(); aufraeumen = null; }
    // Routen: #start · #lf-<id> · #lf-<id>-<reiter> · #verwaltung · #verwaltung-<id>
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    let teile = [];
    if (/^verwaltung(-|$)/.test(h)) teile = ['admin', h.slice(11)];
    else if (h.startsWith('lf-')) {
      const m = /^(.+)-(themen|paragrafen|karten|quiz|raetsel)$/.exec(h.slice(3));
      teile = m ? ['lf', m[1], m[2]] : ['lf', h.slice(3)];
    }
    const d = Store.daten();
    document.getElementById('marke').textContent = d.titel;
    document.title = d.titel;
    document.documentElement.style.removeProperty('--akzent');
    Spiel.zeigeChip();
    if (h === 'training') { aufraeumen = Spiel.zeigeTraining(app); return; }
    if (h === 'videos' || h.startsWith('videos-')) { aufraeumen = Spiel.zeigeVideos(app, h.slice(7)); return; }
    if (h.startsWith('paare-')) {
      const lfP = Store.lernfelder().find((l) => l.id === h.slice(6));
      if (lfP) { document.documentElement.style.setProperty('--akzent', lfP.farbe); aufraeumen = Spiel.zeigePaare(app, lfP); return; }
    }
    if (teile[0] === 'admin') return Admin.zeige(app, teile[1]);
    if (teile[0] === 'lf') {
      const lf = Store.lernfelder().find((l) => l.id === teile[1]);
      if (lf) return zeigeLF(lf, teile[2] || 'themen');
    }
    zeigeStart();
  }
  window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });

  /* ---------------- Startseite ---------------- */
  function lfStatistik(lf) {
    const st = Store.kartenStatus(lf.id);
    const karten = Spiel.kartenFuer(lf);
    const gewusst = karten.filter((k) => st[schluessel(k.vorne)] === 'gewusst').length;
    return { ziele: Store.meineZiele().filter((z) => z.lfId === lf.id && !z.erledigt).length, gewusst, karten: karten.length, quiz: Store.quizStand(lf.id), raetsel: Store.raetselGeloest(lf.id) };
  }

  /* ---- Eigene Ziele auf der Startseite ---- */
  let suchVorgabe = ''; // Stichwort, mit dem der Paragrafen-Reiter geöffnet wird

  function tageBis(datum) {
    if (!datum) return null;
    const heute = new Date(); heute.setHours(0, 0, 0, 0);
    const ziel = new Date(datum + 'T00:00:00');
    return isNaN(ziel) ? null : Math.round((ziel - heute) / 864e5);
  }

  function zieleHtml(lf) {
    const ziele = Store.meineZiele().filter((z) => z.lfId === lf.id).sort((a, b) =>
      (a.erledigt ? 1 : 0) - (b.erledigt ? 1 : 0) || String(a.datum || '9999').localeCompare(String(b.datum || '9999')));
    const karte = (z) => {
      const t = tageBis(z.datum);
      const wann = t === null ? '' : t < 0 ? 'vorbei' : t === 0 ? 'heute' : t === 1 ? 'morgen' : `in ${t} Tagen`;
      const datum = z.datum ? new Date(z.datum + 'T12:00:00').toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' }) : '';
      const info = [z.stichwort ? 'Stichwort: ' + z.stichwort : '', datum].filter(Boolean).join(' · ');
      const treffer = z.stichwort && lf.paragrafen.some((p) => (p.ref + ' ' + p.text + ' ' + (p.gruppe || '')).toLowerCase().includes(z.stichwort.toLowerCase()));
      return `
        <li class="ziel ${z.erledigt ? 'erledigt' : ''} ${t !== null && t >= 0 && t <= 3 && !z.erledigt ? 'bald' : ''}">
          <label class="haken" title="Als geschafft markieren"><input type="checkbox" data-ziel-fertig="${esc(z.id)}" ${z.erledigt ? 'checked' : ''} aria-label="Ziel geschafft"></label>
          <div class="ziel-text"><b>${esc(z.titel)}</b>${info ? `<span>${esc(info)}</span>` : ''}</div>
          ${wann && !z.erledigt ? `<span class="chip wann">${wann}</span>` : ''}
          ${treffer ? `<button class="btn klein-btn" data-ziel-lernen="${esc(z.id)}">§ Paragrafen dazu</button>` : ''}
          <button class="mini rot" data-ziel-weg="${esc(z.id)}" aria-label="Ziel löschen" title="Ziel löschen">✕</button>
        </li>`;
    };
    return `
      <section class="glas block ziele-box">
        <h2>🎯 Meine Ziele</h2>
        <p class="klein">Trag ein, worauf du in diesem Fach gerade lernst – zum Beispiel einen Test zu einem bestimmten Thema.</p>
        ${ziele.length ? `<ul class="ziel-liste">${ziele.map(karte).join('')}</ul>` : ''}
        <details class="ziel-neu">
        <summary class="btn">＋ Neues Ziel eintragen</summary>
        <form id="zielForm" class="ziel-form" autocomplete="off">
          <label class="feld breit"><span>Mein Ziel</span><input type="text" id="zielTitel" maxlength="120" placeholder="z. B. Test über Kündigung und Kündigungsschutz" required></label>
          <label class="feld"><span>Stichwort zum Suchen (optional)</span><input type="text" id="zielStichwort" maxlength="40" placeholder="z. B. Kündigung"></label>
          <label class="feld"><span>Datum (optional)</span><input type="date" id="zielDatum"></label>
          <button class="btn primaer" type="submit">＋ Ziel speichern</button>
        </form>
        </details>
      </section>`;
  }

  function verdrahteZiele(el, lf) {
    const neu = () => { el.querySelector('.ziele-box').outerHTML = zieleHtml(lf); };
    el.addEventListener('submit', (e) => {
      if (e.target.id !== 'zielForm') return;
      e.preventDefault();
      const titel = el.querySelector('#zielTitel').value.trim();
      if (!titel) return;
      const liste = Store.meineZiele();
      liste.push({
        id: 'z' + Date.now().toString(36),
        titel,
        lfId: lf.id,
        stichwort: el.querySelector('#zielStichwort').value.trim(),
        datum: el.querySelector('#zielDatum').value,
        erledigt: false
      });
      toast(Store.speichereZiele(liste) ? 'Ziel gespeichert' : 'Speichern nicht möglich – der Browser-Speicher ist gesperrt.');
      neu();
    });
    el.addEventListener('change', (e) => {
      const id = e.target.dataset.zielFertig;
      if (!id) return;
      const liste = Store.meineZiele();
      const z = liste.find((x) => x.id === id);
      if (z) { z.erledigt = e.target.checked; Store.speichereZiele(liste); if (z.erledigt) { toast('Stark – Ziel geschafft! +10 XP'); Spiel.xp(10, 'ziel'); Spiel.konfetti(); } }
      neu();
    });
    el.addEventListener('click', (e) => {
      const weg = e.target.closest('[data-ziel-weg]');
      if (weg) { Store.speichereZiele(Store.meineZiele().filter((x) => x.id !== weg.dataset.zielWeg)); return neu(); }
      const lernen = e.target.closest('[data-ziel-lernen]');
      if (!lernen) return;
      const z = Store.meineZiele().find((x) => x.id === lernen.dataset.zielLernen);
      if (!z) return;
      suchVorgabe = z.stichwort || '';
      location.hash = '#lf-' + lf.id + '-paragrafen';
    });
  }

  function zeigeStart() {
    const d = Store.daten();
    const lfs = Store.lernfelder();
    app.innerHTML = `
      <div id="startseite">
      <section class="hero">
        <h1>${esc(d.titel)}</h1>
        <p>${esc(d.untertitel)}</p>
      </section>
      ${Spiel.startHtml()}
      ${lfs.length ? '' : '<div class="glas leer">Noch keine Lernfelder vorhanden. Unter <a href="#verwaltung">Verwaltung</a> kannst du welche anlegen.</div>'}
      <section class="raster">
        ${lfs.map((lf) => {
          const s = lfStatistik(lf);
          const pct = s.karten ? Math.round((s.gewusst / s.karten) * 100) : 0;
          return `
          <a class="glas lf-karte" href="#lf-${esc(lf.id)}" style="--akzent:${esc(lf.farbe)}">
            <span class="lf-nr">${esc(U.kurz(lf))}</span>
            <h2>${esc(lf.titel)}</h2>
            <p>${esc(lf.beschreibung)}</p>
            <div class="balken"><i style="width:${pct}%"></i></div>
            <div class="chips">
              ${s.ziele ? `<span class="chip">🎯 ${s.ziele} ${s.ziele === 1 ? 'Ziel' : 'Ziele'}</span>` : ''}
              ${lf.paragrafen.length ? `<span class="chip">§ ${lf.paragrafen.length}</span>` : ''}
              <span class="chip">🃏 ${s.gewusst}/${s.karten}</span>
              <span class="chip">🏆 ${s.quiz ? s.quiz.best.toLocaleString('de-DE') : '–'}</span>
              <span class="chip">🧩 ${s.raetsel ? 'gelöst' : 'offen'}</span>
            </div>
          </a>`;
        }).join('')}
      </section>
      </div>`;
  }

  /* ---------------- Lernfeld-Rahmen ---------------- */
  const TABS = [
    ['themen', '📖', 'Themen'],
    ['paragrafen', '§', 'Paragrafen'],
    ['karten', '🃏', 'Karten'],
    ['quiz', '🏆', 'Quiz'],
    ['raetsel', '🧩', 'Rätsel']
  ];

  function zeigeLF(lf, tab) {
    document.documentElement.style.setProperty('--akzent', lf.farbe);
    if (!TABS.some((t) => t[0] === tab)) tab = 'themen';
    app.innerHTML = `
      <a class="zurueck" href="#start">← Alle Lernfelder</a>
      <header class="lf-kopf">
        <span class="lf-nr">${esc(U.kurz(lf))}</span>
        <h1>${esc(lf.titel)}</h1>
        <p>${esc(lf.beschreibung)}</p>
        ${Spiel.videosVon(lf.id).length ? `<a class="btn video-knopf klein-btn" href="#videos-${esc(lf.id)}">🎬 ${Spiel.videosVon(lf.id).length} Lernvideos</a>` : ''}
      </header>
      <nav class="tabs glas" aria-label="Lernformate">
        ${TABS.map(([id, icon, name]) => `<a href="#lf-${esc(lf.id)}-${id}" class="${id === tab ? 'aktiv' : ''}"><span>${icon}</span>${name}</a>`).join('')}
      </nav>
      <div id="inhalt"></div>`;
    const ziel = document.getElementById('inhalt');
    ({ themen: zeigeThemen, paragrafen: zeigeParagrafen, karten: zeigeKarten, quiz: zeigeQuiz, raetsel: zeigeRaetsel })[tab](lf, ziel);
  }

  /* ---------------- 1. Themen & Erklärungen ---------------- */
  function zeigeThemen(lf, el) {
    const erledigt = Store.ziele(lf.id);
    el.innerHTML = `
      ${zieleHtml(lf)}
      ${lf.lernziele.length ? `
      <section class="glas block">
        <h2>📌 Lernziele aus dem Lehrplan</h2>
        <ul class="ziele">
          ${lf.lernziele.map((z) => {
            const k = schluessel(z);
            return `<li><label><input type="checkbox" data-ziel="${k}" ${erledigt[k] ? 'checked' : ''}><span>${esc(z)}</span></label></li>`;
          }).join('')}
        </ul>
      </section>` : ''}
      ${lf.themen.map((t, i) => `
      <details class="glas block thema" ${i === 0 ? 'open' : ''}>
        <summary><span class="nr">${i + 1}</span><h2>${esc(t.titel)}</h2></summary>
        <div class="text">${format(t.text)}</div>
        ${t.merke ? `<div class="merke"><b>Merke</b>${esc(t.merke)}</div>` : ''}
      </details>`).join('')}
      ${lf.themen.length ? '' : '<div class="glas leer">Für dieses Lernfeld gibt es noch keine Erklärungen.</div>'}
      <div class="weiter-zeile">
        <a class="btn primaer" href="#lf-${esc(lf.id)}-paragrafen">Weiter zu den Paragrafen →</a>
      </div>`;
    el.addEventListener('change', (e) => {
      if (e.target.dataset.ziel) Store.zielUmschalten(lf.id, e.target.dataset.ziel);
    });
    verdrahteZiele(el, lf);
  }

  /* ---------------- Paragrafen in einfacher Sprache ---------------- */
  function zeigeParagrafen(lf, el) {
    if (!lf.paragrafen.length) { el.innerHTML = '<div class="glas leer">Für dieses Fach sind noch keine Paragrafen hinterlegt.</div>'; return; }
    const gelernt = () => Store.ziele(lf.id);
    let suche = suchVorgabe;
    suchVorgabe = '';

    function liste() {
      const q = suche.trim().toLowerCase();
      const g = gelernt();
      const treffer = lf.paragrafen.filter((p) => !q || (p.ref + ' ' + p.text + ' ' + (p.gruppe || '')).toLowerCase().includes(q));
      const gruppen = [];
      treffer.forEach((p) => {
        const name = p.gruppe || 'Allgemein';
        let gr = gruppen.find((x) => x.name === name);
        if (!gr) gruppen.push(gr = { name, eintraege: [] });
        gr.eintraege.push(p);
      });
      const fertig = lf.paragrafen.filter((p) => g['p' + schluessel(p.ref + p.text)]).length;
      el.querySelector('#pZahl').textContent = `${treffer.length} von ${lf.paragrafen.length} Paragrafen · ${fertig} verstanden`;
      el.querySelector('#pListe').innerHTML = gruppen.length ? gruppen.map((gr) => `
        <details class="glas block pgruppe" open>
          <summary><h2>${esc(gr.name)}</h2><span class="chip">${gr.eintraege.length}</span></summary>
          ${gr.eintraege.map((p) => {
            const k = 'p' + schluessel(p.ref + p.text);
            return `<article class="para ${g[k] ? 'ok' : ''}">
              <div class="para-kopf"><span class="ref">${esc(p.ref)}</span>
                <label class="haken"><input type="checkbox" data-para="${k}" ${g[k] ? 'checked' : ''}> verstanden</label></div>
              <p>${esc(p.text)}</p>
            </article>`;
          }).join('')}
        </details>`).join('') : '<div class="glas leer">Kein Paragraf passt zu deiner Suche.</div>';
    }

    el.innerHTML = `
      <section class="glas block psuche">
        <label class="feld"><span>Paragraf oder Stichwort suchen</span>
          <input type="search" id="pSuche" value="${esc(suche)}" placeholder="z. B. § 622, Urlaub, Geschenke" autocomplete="off"></label>
        <div class="klein" id="pZahl"></div>
        <p class="klein">Die Paragrafen sind hier in einfachen Worten erklärt. Für Prüfung und Praxis gilt immer der genaue Gesetzestext – Beträge und Fristen können sich ändern.</p>
      </section>
      <div id="pListe"></div>`;
    el.addEventListener('input', (e) => { if (e.target.id === 'pSuche') { suche = e.target.value; liste(); } });
    el.addEventListener('change', (e) => {
      if (!e.target.dataset.para) return;
      Store.zielUmschalten(lf.id, e.target.dataset.para);
      if (e.target.checked) Spiel.xp(2, 'para');
      e.target.closest('.para').classList.toggle('ok', e.target.checked);
      const g = gelernt();
      const fertig = lf.paragrafen.filter((p) => g['p' + schluessel(p.ref + p.text)]).length;
      el.querySelector('#pZahl').textContent = el.querySelector('#pZahl').textContent.replace(/· \d+ verstanden/, `· ${fertig} verstanden`);
    });
    liste();
  }

  /* ---------------- 2. Karteikarten ---------------- */
  function zeigeKarten(lf, el) {
    const alleKarten = Spiel.kartenFuer(lf); // eigene Karten oder automatisch aus den Paragrafen
    if (!alleKarten.length) { el.innerHTML = '<div class="glas leer">Noch keine Karteikarten vorhanden.</div>'; return; }
    const z = { filter: 'alle', stapel: [], i: 0, offen: false };
    if (alleKarten.some((k) => !Spiel.faellig(lf.id, schluessel(k.vorne)))) z.filter = 'faellig'; // wer schon gelernt hat, startet mit den fälligen Karten

    function baueStapel(gemischt) {
      const st = Store.kartenStatus(lf.id);
      let karten = alleKarten.map((k) => ({ ...k, key: schluessel(k.vorne) }));
      if (z.filter === 'faellig') karten = karten.filter((k) => Spiel.faellig(lf.id, k.key));
      if (z.filter === 'ueben') karten = karten.filter((k) => st[k.key] === 'ueben');
      if (z.filter === 'gewusst') karten = karten.filter((k) => st[k.key] === 'gewusst');
      if (z.filter === 'neu') karten = karten.filter((k) => !st[k.key]);
      z.stapel = gemischt ? mischen(karten) : karten;
      z.i = 0; z.offen = false;
    }

    function zeichne() {
      const st = Store.kartenStatus(lf.id);
      const alle = alleKarten.map((k) => st[schluessel(k.vorne)]);
      const n = { alle: alle.length, ueben: alle.filter((s) => s === 'ueben').length, gewusst: alle.filter((s) => s === 'gewusst').length, neu: alle.filter((s) => !s).length, faellig: alleKarten.filter((k) => Spiel.faellig(lf.id, schluessel(k.vorne))).length };
      const k = z.stapel[z.i];
      const status = k ? st[k.key] : null;
      el.innerHTML = `
        <div class="filter">
          ${[['faellig', '⏰ Heute dran'], ['alle', 'Alle'], ['neu', 'Neu'], ['ueben', 'Noch üben'], ['gewusst', 'Schon gewusst']].map(([id, name]) =>
            `<button class="pille ${z.filter === id ? 'aktiv' : ''}" data-filter="${id}">${name} <b>${n[id]}</b></button>`).join('')}
        </div>
        ${k ? `
        <div class="karten-info"><span>Karte ${z.i + 1} von ${z.stapel.length}</span>
          <span class="chip" title="Karteikasten: Fach 5 = sitzt sicher">Fach ${Spiel.fach(lf.id, k.key) || 1} von 5</span>
          ${status ? `<span class="marke ${status}">${status === 'gewusst' ? '✓ Schon gewusst' : '↻ Noch üben'}</span>` : ''}</div>
        <div class="karte ${z.offen ? 'offen' : ''}" data-akt="drehen" tabindex="0" role="button" aria-label="Karte umdrehen">
          <div class="karte-innen">
            <div class="seite vorne glas"><small>Frage</small><p>${esc(k.vorne)}</p><em>Tippen zum Umdrehen</em></div>
            <div class="seite hinten glas"><small>Antwort</small><p>${esc(k.hinten)}</p></div>
          </div>
        </div>
        <div class="karten-knoepfe">
          <button class="btn rund" data-akt="zurueck" aria-label="Vorherige Karte">←</button>
          <button class="btn ueben" data-akt="ueben">↻ Noch üben</button>
          <button class="btn gewusst" data-akt="gewusst">✓ Gewusst</button>
          <button class="btn rund" data-akt="vor" aria-label="Nächste Karte">→</button>
        </div>
        <div class="karten-extra">
          <a class="link" href="#paare-${esc(lf.id)}">⚡ Paare-Spiel</a>
          <button class="link" data-akt="mischen">🔀 Mischen</button>
          <button class="link" data-akt="reset">Fortschritt zurücksetzen</button>
        </div>` : `
        <div class="glas leer">
          ${z.filter === 'faellig' ? '🎉 Für heute ist alles wiederholt. Morgen gibt es neue Karten.' : z.filter === 'ueben' ? '🎉 Kein Stapel „Noch üben“ – alles sitzt!' : 'In diesem Stapel sind keine Karten.'}
          <br><button class="btn" data-filter="alle" style="margin-top:14px">Alle Karten anzeigen</button>
        </div>`}`;
    }

    function bewerte(status) {
      const k = z.stapel[z.i];
      if (!k) return;
      Store.setzeKarte(lf.id, k.key, status);
      Spiel.bewerteKarte(lf.id, k.key, status === 'gewusst');
      Spiel.xp(status === 'gewusst' ? 3 : 1);
      // Karte, die nicht mehr zum Filter passt, fällt aus dem Stapel
      if (z.filter !== 'alle' && z.filter !== status) {
        z.stapel.splice(z.i, 1);
        if (z.i >= z.stapel.length) z.i = 0;
      } else if (z.stapel.length) {
        z.i = (z.i + 1) % z.stapel.length;
      }
      z.offen = false;
      zeichne();
    }

    function aktion(a) {
      if (a === 'drehen') {
        z.offen = !z.offen;
        const k = el.querySelector('.karte');
        if (k) k.classList.toggle('offen', z.offen);
        return;
      }
      if (a === 'vor' && z.stapel.length) { z.i = (z.i + 1) % z.stapel.length; z.offen = false; }
      if (a === 'zurueck' && z.stapel.length) { z.i = (z.i - 1 + z.stapel.length) % z.stapel.length; z.offen = false; }
      if (a === 'gewusst' || a === 'ueben') return bewerte(a);
      if (a === 'mischen') { baueStapel(true); toast('Karten gemischt'); }
      if (a === 'reset') {
        alleKarten.forEach((k) => Store.setzeKarte(lf.id, schluessel(k.vorne), null));
        baueStapel(false);
        toast('Fortschritt zurückgesetzt');
      }
      zeichne();
    }

    el.addEventListener('click', (e) => {
      const f = e.target.closest('[data-filter]');
      if (f) { z.filter = f.dataset.filter; baueStapel(false); return zeichne(); }
      const a = e.target.closest('[data-akt]');
      if (a) aktion(a.dataset.akt);
    });
    const taste = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); aktion('drehen'); }
      if (e.key === 'ArrowRight') aktion('vor');
      if (e.key === 'ArrowLeft') aktion('zurueck');
    };
    document.addEventListener('keydown', taste);
    aufraeumen = () => document.removeEventListener('keydown', taste);

    baueStapel(false);
    zeichne();
  }

  /* ---------------- 3. Quiz-Show ---------------- */
  const STUFEN = [50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000];
  const ZEIT = 30;

  function zeigeQuiz(lf, el) {
    const gueltig = Spiel.quizFuer(lf); // eigene Fragen, sonst automatisch aus den Paragrafen
    if (gueltig.length < 2) { el.innerHTML = '<div class="glas leer">Für das Quiz werden mindestens 2 Fragen benötigt.</div>'; return; }
    let z = null, timer = null;
    aufraeumen = () => clearInterval(timer);

    function waehleFragen() {
      // nach Schwierigkeit sortiert, innerhalb einer Stufe gemischt; maximal 10
      let sortiert = mischen(gueltig).sort((a, b) => a.stufe - b.stufe);
      const n = Math.min(10, sortiert.length);
      if (sortiert.length > n) {
        const auswahl = [];
        for (let i = 0; i < n; i++) auswahl.push(sortiert[Math.floor((i * sortiert.length) / n)]);
        sortiert = auswahl;
      }
      return sortiert.map((q) => ({
        frage: q.frage,
        erklaerung: q.erklaerung,
        optionen: mischen(q.antworten.map((t, i) => ({ t, richtig: i === q.richtig })).filter((o) => o.t))
      }));
    }

    function sicherheit(i) { return (i + 1) % 3 === 0; } // jede 3. Stufe ist sicher
    function sicherePunkte(bisIndex) {
      let p = 0;
      for (let i = 0; i < bisIndex; i++) if (sicherheit(i)) p = STUFEN[i];
      return p;
    }

    function start() {
      const fragen = waehleFragen();
      z = { fragen, i: 0, phase: 'frage', wahl: null, weg: [], joker: { fifty: true, zeit: true }, zeit: ZEIT, ende: null };
      zeichne();
      starteTimer();
    }

    function starteTimer() {
      clearInterval(timer);
      timer = setInterval(() => {
        z.zeit--;
        zeigeZeit();
        if (z.zeit <= 0) antworte(-1);
      }, 1000);
    }

    function zeigeZeit() {
      const t = el.querySelector('.uhr');
      if (!t) return;
      t.querySelector('b').textContent = Math.max(0, z.zeit);
      t.classList.toggle('knapp', z.zeit <= 10);
      t.style.setProperty('--p', Math.max(0, Math.min(1, z.zeit / ZEIT)));
    }

    function antworte(idx) {
      if (z.phase !== 'frage') return;
      clearInterval(timer);
      z.wahl = idx;
      z.phase = 'spannung';
      zeichne();
      setTimeout(() => {
        if (!z || z.phase !== 'spannung') return;
        z.phase = 'aufgeloest';
        zeichne();
      }, idx < 0 ? 0 : 900);
    }

    function weiter() {
      const f = z.fragen[z.i];
      const richtig = z.wahl >= 0 && f.optionen[z.wahl].richtig;
      if (richtig) { Spiel.xp(5); Spiel.loescheFehler(f.frage); } else Spiel.merkeFehler(lf.id, f);
      if (!richtig) return beende('falsch', sicherePunkte(z.i), z.i);
      if (z.i === z.fragen.length - 1) return beende('gewonnen', STUFEN[z.i], z.i + 1);
      z.i++; z.phase = 'frage'; z.wahl = null; z.weg = []; z.zeit = ZEIT;
      zeichne();
      starteTimer();
    }

    function beende(art, punkte, richtige) {
      clearInterval(timer);
      const rekord = Store.setzeQuiz(lf.id, punkte, richtige, z.fragen.length);
      if (art === 'gewonnen') { Spiel.xp(20, 'quizsieg'); Spiel.konfetti(); }
      z.phase = 'ende';
      z.ende = { art, punkte, richtige, rekord };
      zeichne();
    }

    function leiter() {
      return `<ol class="leiter glas">
        ${z.fragen.map((_, i) => `<li class="${i === z.i && z.phase !== 'ende' ? 'jetzt' : ''} ${i < z.i ? 'geschafft' : ''} ${sicherheit(i) ? 'sicher' : ''}">
          <span>${i + 1}</span><b>${STUFEN[i].toLocaleString('de-DE')}</b></li>`).reverse().join('')}
      </ol>`;
    }

    function zeichne() {
      if (!z) {
        const stand = Store.quizStand(lf.id);
        el.innerHTML = `
          <section class="buehne start">
            <div class="strahler"></div>
            <h2>Die Quiz-Show</h2>
            <p>${Math.min(10, gueltig.length)} Fragen – von leicht bis knifflig. Pro Frage ${ZEIT} Sekunden.<br>
            Jede dritte Stufe ist eine Sicherheitsstufe. Zwei Joker helfen dir.</p>
            ${stand ? `<div class="rekord">🏆 Dein Highscore: <b>${stand.best.toLocaleString('de-DE')}</b> Punkte · ${stand.bestRichtige} von ${stand.anzahl} richtig · ${stand.spiele} Spiele</div>` : ''}
            <button class="btn gold" data-q="start">Spiel starten</button>
          </section>`;
        return;
      }
      if (z.phase === 'ende') {
        const e = z.ende;
        const sterne = Math.max(e.richtige ? 1 : 0, Math.round((e.richtige / z.fragen.length) * 3));
        const titel = { gewonnen: 'Hauptgewinn! 🎉', falsch: 'Leider vorbei', aufgehoert: 'Clever aufgehört' }[e.art];
        el.innerHTML = `
          <section class="buehne start">
            <div class="strahler"></div>
            <div class="sterne">${'★'.repeat(sterne)}<span>${'★'.repeat(3 - sterne)}</span></div>
            <h2>${titel}</h2>
            <div class="punkte">${e.punkte.toLocaleString('de-DE')} <small>Punkte</small></div>
            <p>${e.richtige} von ${z.fragen.length} Fragen richtig beantwortet.</p>
            ${e.rekord ? '<div class="rekord neu">⭐ Neuer Highscore!</div>' : `<div class="rekord">Highscore: <b>${Store.quizStand(lf.id).best.toLocaleString('de-DE')}</b></div>`}
            <button class="btn gold" data-q="start">Nochmal spielen</button>
          </section>`;
        return;
      }
      const f = z.fragen[z.i];
      const aufgeloest = z.phase === 'aufgeloest';
      const richtig = aufgeloest && z.wahl >= 0 && f.optionen[z.wahl].richtig;
      el.innerHTML = `
        <section class="buehne spiel">
          <div class="quiz-haupt">
            <div class="quiz-kopf">
              <div class="uhr" style="--p:${z.zeit / ZEIT}"><b>${z.zeit}</b></div>
              <div class="stufe">Frage ${z.i + 1} / ${z.fragen.length}<br><b>${STUFEN[z.i].toLocaleString('de-DE')} Punkte</b></div>
              <div class="joker">
                <button data-q="fifty" ${z.joker.fifty && z.phase === 'frage' ? '' : 'disabled'} class="${z.joker.fifty ? '' : 'weg'}" title="Zwei falsche Antworten entfernen">50:50</button>
                <button data-q="zeit" ${z.joker.zeit && z.phase === 'frage' ? '' : 'disabled'} class="${z.joker.zeit ? '' : 'weg'}" title="30 Sekunden mehr Zeit">+30s</button>
              </div>
            </div>
            <div class="frage">${esc(f.frage)}</div>
            <div class="antworten">
              ${f.optionen.map((o, i) => {
                let k = '';
                if (z.weg.includes(i)) k = 'weg';
                else if (aufgeloest && o.richtig) k = 'richtig';
                else if (aufgeloest && i === z.wahl) k = 'falsch';
                else if (i === z.wahl) k = 'gewaehlt';
                return `<button class="antwort ${k}" data-antwort="${i}" ${z.phase !== 'frage' || k === 'weg' ? 'disabled' : ''}><i>${'ABCD'[i]}</i><span>${esc(o.t)}</span></button>`;
              }).join('')}
            </div>
            ${aufgeloest ? `
            <div class="feedback ${richtig ? 'gut' : 'schlecht'}">
              <b>${richtig ? '✓ Richtig!' : z.wahl < 0 ? '⏱ Zeit abgelaufen!' : '✗ Leider falsch.'}</b>
              ${f.erklaerung ? `<span>${esc(f.erklaerung)}</span>` : ''}
              <button class="btn gold" data-q="weiter">${richtig ? (z.i === z.fragen.length - 1 ? 'Zum Ergebnis' : 'Nächste Frage →') : 'Zum Ergebnis'}</button>
            </div>` : `
            <div class="quiz-fuss">
              <button class="link hell" data-q="aufhoeren" ${z.phase === 'frage' ? '' : 'disabled'}>Aufhören und ${(z.i ? STUFEN[z.i - 1] : 0).toLocaleString('de-DE')} Punkte sichern</button>
            </div>`}
          </div>
          ${leiter()}
        </section>`;
    }

    el.addEventListener('click', (e) => {
      const a = e.target.closest('[data-antwort]');
      if (a && !a.disabled) return antworte(Number(a.dataset.antwort));
      const b = e.target.closest('[data-q]');
      if (!b || b.disabled) return;
      const q = b.dataset.q;
      if (q === 'start') return start();
      if (q === 'weiter') return weiter();
      if (q === 'aufhoeren') return beende('aufgehoert', z.i ? STUFEN[z.i - 1] : 0, z.i);
      if (q === 'fifty') {
        const f = z.fragen[z.i];
        const falsche = mischen(f.optionen.map((o, i) => (o.richtig ? -1 : i)).filter((i) => i >= 0));
        z.weg = falsche.slice(0, Math.max(0, f.optionen.length - 2));
        z.joker.fifty = false;
        zeichne();
      }
      if (q === 'zeit') { z.zeit += 30; z.joker.zeit = false; zeichne(); }
    });

    zeichne();
  }

  /* ---------------- 4. Kreuzworträtsel ---------------- */
  function zeigeRaetsel(lf, el) {
    let r = null, eingabe = {}, aktiv = 0, fertig = false;

    function neu() {
      r = Kreuzwort.erzeuge(lf.raetsel);
      eingabe = {}; aktiv = 0; fertig = false;
      zeichne();
    }

    function zeichne() {
      if (!r) { el.innerHTML = '<div class="glas leer">Noch keine Rätselwörter vorhanden.</div>'; return; }
      const nummern = {}, belegt = new Set();
      r.woerter.forEach((w) => { nummern[w.zellen[0]] = w.nr; w.zellen.forEach((k) => belegt.add(k)); });
      let zellen = '';
      for (let y = 0; y < r.rows; y++) {
        for (let x = 0; x < r.cols; x++) {
          const k = y + ',' + x;
          zellen += belegt.has(k)
            ? `<div class="zelle" data-k="${k}">${nummern[k] ? `<sup>${nummern[k]}</sup>` : ''}<input maxlength="2" autocomplete="off" autocapitalize="characters" autocorrect="off" spellcheck="false" enterkeyhint="next" aria-label="Zeile ${y + 1}, Spalte ${x + 1}"></div>`
            : '<div class="zelle leer"></div>';
        }
      }
      const liste = (dir, titel) => {
        const ws = r.woerter.map((w, i) => ({ w, i })).filter((x) => x.w.dir === dir);
        return ws.length ? `<div><h3>${titel}</h3><ol>${ws.map(({ w, i }) =>
          `<li data-wort="${i}"><b>${w.nr}</b><span>${esc(w.hinweis || '(kein Hinweis)')} <small>(${w.wort.length})</small></span></li>`).join('')}</ol></div>` : '';
      };
      el.innerHTML = `
        <div class="raetsel">
          <section class="glas block raetsel-feld">
            <div class="aktiver-hinweis" id="aktHinweis"></div>
            <div class="gitter-rahmen"><div class="gitter" style="--cols:${r.cols}">${zellen}</div></div>
            <div class="raetsel-status" id="rStatus"></div>
            <div class="raetsel-knoepfe">
              <button class="btn" data-r="buchstabe">💡 Buchstabe</button>
              <button class="btn" data-r="wort">Wort lösen</button>
              <button class="btn" data-r="leeren">Leeren</button>
              <button class="btn" data-r="neu">🔀 Neues Rätsel</button>
            </div>
            <p class="klein">Ein Wort wird geprüft, sobald es vollständig ausgefüllt ist: grün = richtig, rot = falsch. Umlaute (Ä, Ö, Ü) sind je ein Feld, ß wird zu SS.</p>
          </section>
          <section class="glas block hinweise">${liste('h', 'Waagerecht →')}${liste('v', 'Senkrecht ↓')}</section>
        </div>`;
      passeGroesse();
      aktualisiere();
    }

    /* Zellgröße so wählen, dass das Gitter in die verfügbare Breite passt */
    function passeGroesse() {
      const rahmen = el.querySelector('.gitter-rahmen');
      if (!rahmen || !r) return;
      const z = Math.floor((rahmen.clientWidth - (r.cols - 1) * 2) / r.cols);
      rahmen.firstElementChild.style.setProperty('--z', Math.max(18, Math.min(42, z)) + 'px');
    }
    window.addEventListener('resize', passeGroesse);
    aufraeumen = () => window.removeEventListener('resize', passeGroesse);

    const zelleEl = (k) => el.querySelector(`.zelle[data-k="${k}"]`);
    const wortVoll = (w) => w.zellen.every((k) => eingabe[k]);
    const wortRichtig = (w) => w.zellen.every((k, i) => eingabe[k] === w.wort[i]);

    function aktualisiere() {
      const zustand = {};
      r.woerter.forEach((w) => {
        if (!wortVoll(w)) return;
        w.zellen.forEach((k, i) => {
          const ok = eingabe[k] === w.wort[i];
          if (!ok) zustand[k] = 'falsch'; else if (zustand[k] !== 'falsch') zustand[k] = 'richtig';
        });
      });
      const akt = r.woerter[aktiv];
      el.querySelectorAll('.zelle[data-k]').forEach((z) => {
        const k = z.dataset.k;
        const inp = z.querySelector('input');
        if (inp.value !== (eingabe[k] || '')) inp.value = eingabe[k] || '';
        z.classList.toggle('richtig', zustand[k] === 'richtig');
        z.classList.toggle('falsch', zustand[k] === 'falsch');
        z.classList.toggle('imwort', akt.zellen.includes(k));
      });
      let geloest = 0;
      el.querySelectorAll('[data-wort]').forEach((li) => {
        const w = r.woerter[Number(li.dataset.wort)];
        const ok = wortRichtig(w);
        if (ok) geloest++;
        li.classList.toggle('ok', ok);
        li.classList.toggle('fehler', wortVoll(w) && !ok);
        li.classList.toggle('aktiv', Number(li.dataset.wort) === aktiv);
      });
      el.querySelector('#aktHinweis').innerHTML = `<b>${akt.nr} ${akt.dir === 'h' ? '→' : '↓'}</b> ${esc(akt.hinweis || '')}`;
      const alle = geloest === r.woerter.length;
      el.querySelector('#rStatus').innerHTML = alle
        ? '<div class="erfolg">🎉 Geschafft – alle Wörter sind richtig!</div>'
        : `<span>${geloest} von ${r.woerter.length} Wörtern gelöst</span>`;
      if (alle && !fertig) { fertig = true; Store.setzeRaetsel(lf.id); toast('Rätsel gelöst! +25 XP'); Spiel.xp(25, 'raetsel'); Spiel.konfetti(); }
    }

    function fokus(k) {
      const z = zelleEl(k);
      if (!z) return;
      const i = z.querySelector('input');
      i.focus({ preventScroll: true });
      i.select();
      // selbst scrollen, damit das Feld nicht unter der schwebenden Kopfleiste landet
      const b = z.getBoundingClientRect();
      if (b.top < 150 || b.bottom > window.innerHeight - 20) window.scrollBy({ top: b.top - Math.min(260, window.innerHeight / 3), behavior: 'instant' });
    }

    function waehleZelle(k, umschalten) {
      const treffer = r.woerter.map((w, i) => ({ w, i })).filter((x) => x.w.zellen.includes(k));
      if (!treffer.length) return;
      const istAktiv = treffer.some((t) => t.i === aktiv);
      if (istAktiv && umschalten && treffer.length > 1) aktiv = treffer.find((t) => t.i !== aktiv).i;
      else if (!istAktiv) aktiv = (treffer.find((t) => t.w.dir === r.woerter[aktiv].dir) || treffer[0]).i;
      aktualisiere();
    }

    function schritt(k, d) {
      const w = r.woerter[aktiv];
      const pos = w.zellen.indexOf(k) + d;
      if (pos >= 0 && pos < w.zellen.length) fokus(w.zellen[pos]);
    }

    let letzteZelle = null;
    el.addEventListener('focusin', (e) => {
      const z = e.target.closest('.zelle[data-k]');
      if (!z) return;
      waehleZelle(z.dataset.k, false);
      e.target.select();
    });
    el.addEventListener('pointerdown', (e) => {
      const z = e.target.closest('.zelle[data-k]');
      if (z && document.activeElement === z.querySelector('input') && letzteZelle === z.dataset.k) waehleZelle(z.dataset.k, true);
      letzteZelle = z ? z.dataset.k : null;
    });
    el.addEventListener('input', (e) => {
      const z = e.target.closest('.zelle[data-k]');
      if (!z) return;
      const k = z.dataset.k;
      const ch = Kreuzwort.norm(e.target.value).slice(-1);
      if (ch) eingabe[k] = ch; else delete eingabe[k];
      aktualisiere();
      if (ch) schritt(k, 1);
    });
    el.addEventListener('keydown', (e) => {
      const z = e.target.closest('.zelle[data-k]');
      if (!z) return;
      const k = z.dataset.k;
      const [y, x] = k.split(',').map(Number);
      const gehe = (ny, nx) => { if (zelleEl(ny + ',' + nx)) { e.preventDefault(); fokus(ny + ',' + nx); } };
      if (e.key === 'Backspace') {
        e.preventDefault();
        if (eingabe[k]) { delete eingabe[k]; aktualisiere(); } else {
          const w = r.woerter[aktiv], pos = w.zellen.indexOf(k);
          if (pos > 0) { delete eingabe[w.zellen[pos - 1]]; aktualisiere(); fokus(w.zellen[pos - 1]); }
        }
      } else if (e.key === 'ArrowRight') gehe(y, x + 1);
      else if (e.key === 'ArrowLeft') gehe(y, x - 1);
      else if (e.key === 'ArrowDown') gehe(y + 1, x);
      else if (e.key === 'ArrowUp') gehe(y - 1, x);
      else if (e.key === ' ') { e.preventDefault(); waehleZelle(k, true); }
    });
    el.addEventListener('click', (e) => {
      const li = e.target.closest('[data-wort]');
      if (li) {
        aktiv = Number(li.dataset.wort);
        const w = r.woerter[aktiv];
        aktualisiere();
        fokus(w.zellen.find((k) => !eingabe[k]) || w.zellen[0]);
        return;
      }
      const b = e.target.closest('[data-r]');
      if (!b) return;
      const w = r.woerter[aktiv];
      if (b.dataset.r === 'neu') return neu();
      if (b.dataset.r === 'leeren') { eingabe = {}; fertig = false; }
      if (b.dataset.r === 'wort') w.zellen.forEach((k, i) => { eingabe[k] = w.wort[i]; });
      if (b.dataset.r === 'buchstabe') {
        const i = w.zellen.findIndex((k, j) => eingabe[k] !== w.wort[j]);
        if (i >= 0) eingabe[w.zellen[i]] = w.wort[i];
      }
      aktualisiere();
    });

    neu();
  }

  window.App = { route, setzeAufraeumen(f) { aufraeumen = f; } };
  route();
})();
