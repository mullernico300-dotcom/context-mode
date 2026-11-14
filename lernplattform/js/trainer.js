/* Aufgaben-Videos: Die Stimme stellt eine Aufgabe mit Grafik, nach kurzer Bedenkzeit gibt man
   die Antwort ein, danach wird Schritt für Schritt aufgelöst – mit den passenden Paragrafen. */
(function () {
  'use strict';
  const { esc, mischen, toast } = U;
  const KEY = 'lernplattform.aufgaben.v1';
  const BEDENKZEIT = 15;

  function lade() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* gesperrt */ }
    return s && s.status ? s : { status: {} };
  }
  function merke(id, wert) {
    const s = lade();
    s.status[id] = wert;
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* gesperrt */ }
  }

  const alle = () => window.LERN_AUFGABEN || [];
  const von = (lfId) => alle().filter((a) => a.lf === lfId);

  function themen(lfId) {
    const st = lade().status, liste = [];
    von(lfId).forEach((a) => {
      let t = liste.find((x) => x.name === a.thema);
      if (!t) liste.push(t = { name: a.thema, aufgaben: [], richtig: 0 });
      t.aufgaben.push(a);
      if (st[a.id] === 'r') t.richtig++;
    });
    return liste;
  }

  /* Aufgaben, die zu einem Stichwort passen (für eigene Ziele wie „Test Gewerbesteuer“) – höchstens sechs */
  function passend(lfId, text) {
    const woerter = String(text || '').toLowerCase().split(/[^a-zäöüß0-9§]+/).filter((w) => w.length > 3 && !/^(test|über|klausur|thema|arbeit|lernen|und|oder)$/.test(w));
    if (!woerter.length) return [];
    const st = lade().status;
    const treffer = von(lfId).filter((a) => {
      const heu = (a.thema + ' ' + a.f + ' ' + a.r.join(' ')).toLowerCase();
      return woerter.some((w) => heu.includes(w) || (w.length > 6 && heu.includes(w.slice(0, 6))));
    });
    // noch nicht gelöste zuerst
    return mischen(treffer).sort((a, b) => (st[a.id] === 'r' ? 1 : 0) - (st[b.id] === 'r' ? 1 : 0)).slice(0, 6);
  }

  /* Übersicht im Lernfeld */
  function listeHtml(lf) {
    const ts = themen(lf.id);
    if (!ts.length) return '';
    const st = lade().status;
    const falsch = von(lf.id).filter((a) => st[a.id] === 'f').length;
    const gesamt = von(lf.id).length, richtig = ts.reduce((n, t) => n + t.richtig, 0);
    return `
      <section class="glas block aufg-box">
        <h2>🎬 Aufgaben-Videos</h2>
        <p class="klein">Die Stimme stellt die Aufgabe, du gibst deine Antwort ein, dann wird Schritt für Schritt aufgelöst. ${richtig} von ${gesamt} Aufgaben richtig gelöst.</p>
        <ul class="aufg-liste">
          ${ts.map((t, i) => `
          <li><div class="aufg-text"><b>${esc(t.name)}</b>
              <span>${t.aufgaben.length} Aufgaben · ${t.richtig} richtig</span>
              <div class="balken"><i style="width:${Math.round((t.richtig / t.aufgaben.length) * 100)}%"></i></div></div>
            <a class="btn klein-btn primaer" href="#aufgaben-${esc(lf.id)}-${i}">▶ Starten</a></li>`).join('')}
        </ul>
        ${falsch ? `<a class="btn klein-btn" href="#aufgaben-${esc(lf.id)}-fehler">↻ ${falsch} falsch gelöste wiederholen</a>` : ''}
      </section>`;
  }

  const zahlAus = (text) => {
    let t = String(text).replace(/[^\d.,-]/g, '');
    if (t.includes(',')) t = t.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, '');
    return t === '' ? NaN : Number(t);
  };

  /* Grafik: Kacheln mit Balken, wenn mehrere Euro-Beträge verglichen werden können */
  function kacheln(a) {
    const werte = a.d.map(([, v]) => (/€/.test(v) ? Math.abs(zahlAus(v.replace('−', '-'))) : NaN));
    const max = Math.max(...werte.filter((w) => !isNaN(w)), 0);
    const mitBalken = werte.filter((w) => !isNaN(w)).length >= 2 && max > 0;
    return `<div class="av-kacheln">${a.d.map(([l, v], i) => `
      <div class="av-kachel" style="--i:${i}"><span>${esc(l)}</span><b>${esc(v)}</b>
        ${mitBalken && !isNaN(werte[i]) ? `<i class="${/[−-]/.test(v) ? 'minus' : ''}" style="width:${Math.max(6, (werte[i] / max) * 100)}%"></i>` : ''}</div>`).join('')}</div>`;
  }

  function zeige(app, lfId, wahl) {
    const lf = Store.lernfelder().find((l) => l.id === lfId);
    const ts = lf ? themen(lf.id) : [];
    const st0 = lade().status;
    let liste = [], titel = '';
    if (lf && wahl === 'ziel') { liste = (Trainer.vorgabe || []).slice(); titel = Trainer.vorgabeTitel || 'Mein Ziel'; }
    else if (lf && wahl === 'fehler') { liste = von(lf.id).filter((a) => st0[a.id] === 'f'); titel = 'Wiederholung'; }
    else if (lf && ts[Number(wahl)]) { liste = ts[Number(wahl)].aufgaben; titel = ts[Number(wahl)].name; }
    if (!liste.length) {
      app.innerHTML = `<a class="zurueck" href="${lf ? '#lf-' + esc(lf.id) : '#start'}">← Zurück</a><div class="glas leer">Hier gibt es gerade keine Aufgaben.</div>`;
      return null;
    }

    const ton = new Audio();
    ton.preload = 'auto';
    let i = 0, phase = 'start', antwort = null, richtig = false, zaehlerRichtig = 0, punkte = 0, uhr = null, rest = 0, tonAn = true;
    const ergebnisse = [];

    function spiele(datei, beiZeit, beiEnde) {
      ton.pause();
      ton.onended = ton.ontimeupdate = ton.onerror = null;
      if (!tonAn) { beiZeit(1e9); return beiEnde(); }
      ton.src = 'audio/' + datei + '.m4a';
      ton.ontimeupdate = () => beiZeit(ton.currentTime);
      ton.onended = () => { beiZeit(1e9); beiEnde(); };
      ton.onerror = () => { beiZeit(1e9); beiEnde(); };
      const p = ton.play();
      if (p && p.catch) p.catch(() => { beiZeit(1e9); beiEnde(); });
    }

    function rahmen(inhalt) {
      const a = liste[i];
      app.innerHTML = `
        <a class="zurueck" href="#lf-${esc(lf.id)}">← Zurück zu ${esc(U.kurz(lf))}</a>
        <div class="av" style="--f:${esc(lf.farbe)}">
          <div class="av-kopf"><span class="av-fach">${esc(U.kurz(lf))}</span>
            <span class="av-nr">${phase === 'ende' ? 'Ergebnis' : `Aufgabe ${i + 1} von ${liste.length}`}</span>
            <button class="av-ton" data-av="ton" aria-label="Ton an oder aus" title="Ton an/aus">${tonAn ? '🔊' : '🔇'}</button></div>
          <div class="av-titel">${esc(phase === 'ende' ? titel : a.thema === titel ? titel : titel + ' · ' + a.thema)}</div>
          <div class="av-punkte">${liste.map((_, k) => `<i class="${ergebnisse[k] === true ? 'gut' : ergebnisse[k] === false ? 'schlecht' : k === i && phase !== 'ende' ? 'jetzt' : ''}"></i>`).join('')}</div>
          <div class="av-inhalt">${inhalt}</div>
          <div class="av-balken"><i id="avBalken"></i></div>
        </div>`;
    }

    function zeigeStart() {
      phase = 'start';
      rahmen(`<div class="av-mitte"><p class="av-gross">${liste.length} Aufgaben</p>
        <p>Hör dir die Aufgabe an, denk kurz nach und gib deine Antwort ein. Danach kommt die Lösung mit den Paragrafen.</p>
        <button class="av-start" data-av="los" aria-label="Aufgaben starten">▶</button><p class="av-leise">Ton einschalten</p></div>`);
    }

    function frageHtml(a, alleAn) {
      return `${kacheln(a)}<p class="av-frage">${a.f.split(/\s+/).map((w) => `<span class="${alleAn ? 'an' : ''}">${esc(w)}</span>`).join(' ')}</p>`;
    }

    function zeigeFrage() {
      const a = liste[i];
      phase = 'frage'; antwort = null;
      rahmen(`${frageHtml(a, false)}<div class="av-unten"><button class="av-link" data-av="ueberspringen">⏭ Vorlesen überspringen</button></div>`);
      const spans = [...app.querySelectorAll('.av-frage span')];
      spiele(a.id + '-f', (t) => {
        spans.forEach((s, k) => s.classList.toggle('an', a.wz[k] <= t));
        const b = app.querySelector('#avBalken'); if (b) b.style.width = Math.min(100, (t / a.df) * 100) + '%';
      }, zeigeEingabe);
    }

    function zeigeEingabe() {
      if (phase !== 'frage') return;
      const a = liste[i];
      phase = 'eingabe'; rest = BEDENKZEIT;
      rahmen(`${frageHtml(a, true)}
        <form class="av-eingabe" id="avForm" autocomplete="off">
          <div class="av-zeit"><div class="av-ring" id="avRing" style="--p:1"><b id="avRest">${rest}</b></div><span id="avHinweis">Bedenkzeit</span></div>
          ${a.typ === 'wahl'
            ? `<div class="av-optionen">${a.o.map((o, k) => `<button type="button" class="av-opt" data-opt="${k}">${esc(o)}</button>`).join('')}</div>`
            : `<label class="av-feld"><span>Deine Antwort</span><div><input id="avAntwort" inputmode="decimal" placeholder="Zahl eingeben" aria-label="Deine Antwort"><em>${esc(a.e)}</em></div></label>
               <button class="btn gold" type="submit">Antwort prüfen</button>`}
          <button type="button" class="av-link" data-av="nochmal">↺ Aufgabe nochmal anhören</button>
        </form>`);
      const b = app.querySelector('#avBalken'); if (b) b.style.width = '100%';
      const feld = app.querySelector('#avAntwort');
      if (feld) feld.focus({ preventScroll: true });
      clearInterval(uhr);
      uhr = setInterval(() => {
        rest--;
        const r = app.querySelector('#avRest'), ring = app.querySelector('#avRing');
        if (!r) return clearInterval(uhr);
        r.textContent = Math.max(0, rest);
        ring.style.setProperty('--p', Math.max(0, rest / BEDENKZEIT));
        if (rest <= 0) { clearInterval(uhr); ring.classList.add('fertig'); r.textContent = '✎'; app.querySelector('#avHinweis').textContent = 'Jetzt bist du dran'; }
      }, 1000);
    }

    function pruefe(wert) {
      const a = liste[i];
      clearInterval(uhr);
      if (a.typ === 'wahl') { antwort = a.o[wert]; richtig = wert === a.a; }
      else {
        const z = zahlAus(wert);
        if (isNaN(z)) return toast('Bitte gib eine Zahl ein.');
        antwort = String(wert).trim() + (a.e && !String(wert).includes(a.e) ? ' ' + a.e : '');
        richtig = Math.abs(z - a.a) <= 0.011;
      }
      ergebnisse[i] = richtig;
      merke(a.id, richtig ? 'r' : 'f');
      if (richtig) zaehlerRichtig++;
      const p = richtig ? 8 : 2;
      punkte += p;
      Spiel.xp(p, 'aufgabe');
      zeigeLoesung(true);
    }

    function zeigeLoesung(mitUrteil) {
      const a = liste[i];
      phase = 'loesung';
      rahmen(`
        <div class="av-urteil ${richtig ? 'gut' : 'schlecht'}"><b>${richtig ? '✓ Richtig!' : '✗ Leider nicht richtig'}</b>
          <span>Deine Antwort: ${esc(antwort)}${richtig ? '' : ` · Richtig: ${esc(a.at)}`}</span></div>
        <p class="av-frage alt">${esc(a.f)}</p>
        <ol class="av-schritte">${a.s.map((s) => `<li><span>${esc(s.t)}</span>${s.l ? `<code>${esc(s.l)}${s.v ? ` = <b>${esc(s.v)}</b>` : ''}</code>` : ''}</li>`).join('')}
          <li class="av-ergebnis"><span>Die richtige Antwort</span><code><b>${esc(a.at)}</b></code></li></ol>
        <div class="av-refs" id="avRefs"><span>Wichtig dafür:</span>${a.r.map((r) => `<button class="av-ref" data-ref="${esc(r)}">${esc(r)}</button>`).join('')}</div>
        <div class="av-unten">
          <button class="av-link" data-av="loesung">↺ Lösung nochmal hören</button>
          <button class="btn gold" data-av="weiter">${i === liste.length - 1 ? 'Zum Ergebnis' : 'Nächste Aufgabe →'}</button>
        </div>`);
      const schritte = [...app.querySelectorAll('.av-schritte li')];
      const refs = app.querySelector('#avRefs');
      const zeiten = a.s.map((s) => s.z).concat([a.za]);
      const loesung = () => spiele(a.id + '-l', (t) => {
        schritte.forEach((li, k) => li.classList.toggle('an', zeiten[k] <= t));
        refs.classList.toggle('an', a.zr <= t);
        const b = app.querySelector('#avBalken'); if (b) b.style.width = Math.min(100, (t / a.dl) * 100) + '%';
      }, () => {});
      if (mitUrteil) spiele(richtig ? 'richtig' : 'falsch', () => {}, loesung); else loesung();
    }

    function zeigeEnde() {
      phase = 'ende';
      ton.pause();
      const alles = zaehlerRichtig === liste.length;
      if (alles) Spiel.konfetti();
      rahmen(`<div class="av-mitte"><p class="av-gross">${zaehlerRichtig} von ${liste.length}</p>
        <p>${alles ? 'Alle Aufgaben richtig gelöst. Stark!' : zaehlerRichtig >= liste.length * 0.6 ? 'Gut gemacht. Die falschen Aufgaben kannst du gezielt wiederholen.' : 'Das Thema braucht noch Übung. Schau dir die Paragrafen an und versuch es noch einmal.'}</p>
        <p class="av-leise">+${punkte} XP</p>
        <div class="av-unten mitte"><button class="btn gold" data-av="neu">Nochmal von vorn</button><a class="btn" href="#lf-${esc(lf.id)}">Zur Übersicht</a></div></div>`);
    }

    function klick(e) {
      if (!location.hash.startsWith('#aufgaben-')) return;
      const opt = e.target.closest('[data-opt]');
      if (opt && phase === 'eingabe') return pruefe(Number(opt.dataset.opt));
      const ref = e.target.closest('[data-ref]');
      if (ref) { ton.pause(); return App.sucheParagraf(lf.id, ref.dataset.ref); }
      const t = e.target.closest('[data-av]');
      if (!t) return;
      const was = t.dataset.av;
      if (was === 'ton') { tonAn = !tonAn; if (!tonAn) ton.pause(); t.textContent = tonAn ? '🔊' : '🔇'; return; }
      if (was === 'los') return zeigeFrage();
      if (was === 'ueberspringen') { ton.pause(); return zeigeEingabe(); }
      if (was === 'nochmal') { clearInterval(uhr); return zeigeFrage(); }
      if (was === 'loesung') return zeigeLoesung(false);
      if (was === 'weiter') { if (i === liste.length - 1) return zeigeEnde(); i++; window.scrollTo(0, 0); return zeigeFrage(); }
      if (was === 'neu') { i = 0; zaehlerRichtig = 0; punkte = 0; ergebnisse.length = 0; return zeigeFrage(); }
    }
    function absenden(e) {
      if (e.target.id !== 'avForm') return;
      e.preventDefault();
      const feld = app.querySelector('#avAntwort');
      if (feld && phase === 'eingabe') pruefe(feld.value);
    }
    app.addEventListener('click', klick);
    app.addEventListener('submit', absenden);
    zeigeStart();
    return () => { clearInterval(uhr); ton.pause(); app.removeEventListener('click', klick); app.removeEventListener('submit', absenden); };
  }

  window.Trainer = { zeige, listeHtml, themen, passend, von, vorgabe: null, vorgabeTitel: '' };
})();
