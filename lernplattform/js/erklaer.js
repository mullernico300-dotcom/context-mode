/* Erklärvideos: „Neu in den letzten 7 Tagen“ und „Heute wiederholen“ auf der Startseite, dazu das Video auf der Themenseite.
   Daten aus js/erklaervideos.js. Gesehen-Status über Spiel.videoGesehen / Spiel.videoFertig (gibt XP). */
(function () {
  'use strict';
  const { esc, toast } = U;
  const liste = () => (window.ERKLAERVIDEOS || []).filter((v) => v && v.id && v.datei);
  const tag = (d) => { const x = d ? new Date(d + 'T12:00:00') : new Date(); x.setHours(12, 0, 0, 0); return x; };
  const tageHer = (datum) => Math.round((tag() - tag(datum)) / 864e5);
  const gesehen = (v) => !!(window.Spiel && Spiel.videoGesehen('ev-' + v.id));
  const lfVon = (v) => (window.Store ? Store.lernfelder().find((l) => l.id === v.lf) : null);
  const dauer = (s) => Math.floor(s / 60) + ':' + String(Math.round(s % 60)).padStart(2, '0');

  function neu() {
    return liste().filter((v) => { const t = tageHer(v.datum); return t >= 0 && t <= 6; }).sort((a, b) => b.datum.localeCompare(a.datum));
  }
  /* An Tagen ohne neues Video: ein älteres Video zum Wiederholen, bevorzugt noch nicht gesehen, täglich wechselnd */
  function wiederholen() {
    if (neu().some((v) => tageHer(v.datum) === 0)) return null;
    const alt = liste().filter((v) => tageHer(v.datum) > 6);
    const pool = alt.length ? alt : liste();
    if (!pool.length) return null;
    const offen = pool.filter((v) => !gesehen(v));
    const auswahl = offen.length ? offen : pool;
    const n = Math.floor(tag() / 864e5);
    return auswahl[n % auswahl.length];
  }

  function karte(v, etikett) {
    const lf = lfVon(v);
    return `<figure class="glas ev-karte" style="--akzent:${esc(lf ? lf.farbe : '#22c55e')}">
      <video controls playsinline preload="none" poster="${esc(v.poster || '')}" src="${esc(v.datei)}" data-ev="${esc(v.id)}"></video>
      <figcaption>
        <div class="ev-zeile">${etikett ? `<span class="chip ev-etikett">${etikett}</span>` : ''}${lf ? `<span class="lf-nr">${esc(U.kurz(lf))}</span>` : ''}${gesehen(v) ? '<span class="chip gesehen">✓ gesehen</span>' : ''}</div>
        <b>${esc(v.titel)}</b>
        <span>${dauer(v.sek || 0)} min · ${new Date(v.datum + 'T12:00:00').toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit' })}${lf ? ` · <a href="#lf-${esc(lf.id)}">zum Thema</a>` : ''}</span>
      </figcaption>
    </figure>`;
  }

  function startHtml() {
    const n = neu(), w = wiederholen();
    if (!n.length && !w) return '';
    return `<section class="abschnitt" id="erklaervideos">
      <div class="abschnitt-kopf"><h2>🎬 Erklärvideos</h2><span class="klein">${n.length ? `${n.length} neu in den letzten 7 Tagen` : 'Heute wiederholen'}</span></div>
      <div class="ev-reihe">
        ${w ? karte(w, '🔁 Heute wiederholen') : ''}
        ${n.map((v) => karte(v, tageHer(v.datum) === 0 ? '✨ Neu heute' : '🆕 Neu')).join('')}
      </div>
    </section>`;
  }

  function themaHtml(lfId, thema) {
    const vs = liste().filter((v) => v.lf === lfId && v.thema === thema);
    if (!vs.length) return '';
    return `<section class="abschnitt">
      <div class="abschnitt-kopf"><h2>🎓 Erklärvideo</h2><span class="klein">mit Beispielen und Rechenweg · 3–5 Minuten</span></div>
      <div class="ev-reihe">${vs.map((v) => karte(v, '')).join('')}</div>
    </section>`;
  }

  function verdrahte(wurzel) {
    wurzel.querySelectorAll('[data-ev]').forEach((el) => {
      el.addEventListener('play', () => wurzel.querySelectorAll('video').forEach((o) => { if (o !== el) o.pause(); }));
      el.addEventListener('ended', () => { if (window.Spiel && Spiel.videoFertig('ev-' + el.dataset.ev)) toast('Erklärvideo gesehen · +10 XP'); });
    });
  }

  window.Erklaer = { liste, neu, wiederholen, startHtml, themaHtml, verdrahte };
})();
