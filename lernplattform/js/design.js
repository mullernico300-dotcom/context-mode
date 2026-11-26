/* Darstellung: Schalter hell / dunkel / automatisch und die Glas-Leiste unten.
   Der erste Anstrich (data-theme) wird schon im Kopf der Seite gesetzt, damit nichts aufblitzt. */
(function () {
  'use strict';
  const KEY = 'lernplattform.design';
  const MODI = ['auto', 'hell', 'dunkel'];
  const SYMBOL = { auto: '🌗', hell: '☀️', dunkel: '🌙' };
  const NAME = { auto: 'Automatisch', hell: 'Hell', dunkel: 'Dunkel' };
  const html = document.documentElement;
  const system = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function lese() { try { const m = localStorage.getItem(KEY); return MODI.includes(m) ? m : 'auto'; } catch (e) { return 'auto'; } }
  function schreibe(m) { try { localStorage.setItem(KEY, m); } catch (e) { /* Speicher gesperrt: Wahl gilt nur bis zum Schließen */ } }

  let modus = lese();

  function anwenden() {
    const dunkel = modus === 'dunkel' || (modus === 'auto' && system && system.matches);
    html.setAttribute('data-theme', dunkel ? 'dark' : 'light');
    html.setAttribute('data-modus', modus);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dunkel ? '#0a0a0c' : '#eef2ff');
    const k = document.getElementById('themeKnopf');
    if (k) {
      k.innerHTML = `${SYMBOL[modus]}<small class="nur-breit">${NAME[modus]}</small>`;
      const naechster = MODI[(MODI.indexOf(modus) + 1) % MODI.length];
      k.title = `Darstellung: ${NAME[modus]} (tippen für ${NAME[naechster]})`;
      k.setAttribute('aria-label', k.title);
    }
  }

  function schalter() {
    const nav = document.querySelector('.leiste nav');
    if (!nav || document.getElementById('themeKnopf')) return;
    const k = document.createElement('button');
    k.type = 'button'; k.id = 'themeKnopf'; k.className = 'thema-knopf';
    k.addEventListener('click', () => {
      modus = MODI[(MODI.indexOf(modus) + 1) % MODI.length];
      schreibe(modus);
      anwenden();
    });
    nav.insertBefore(k, nav.firstChild);
    anwenden();
  }

  if (system && system.addEventListener) system.addEventListener('change', () => { if (modus === 'auto') anwenden(); });

  /* ---------- Untere Glas-Leiste: gleitende Linse + Verkleinern beim Scrollen ---------- */
  function leiste() {
    const nav = document.querySelector('.unten');
    if (!nav || nav.querySelector('.unten-linse')) return;
    const linse = document.createElement('i');
    linse.className = 'unten-linse';
    linse.setAttribute('aria-hidden', 'true');
    nav.insertBefore(linse, nav.firstChild);

    function setze() {
      const a = nav.querySelector('a.aktiv');
      if (!a || getComputedStyle(nav).display === 'none') { nav.classList.remove('mit-linse'); return; }
      const n = nav.getBoundingClientRect();
      const r = a.getBoundingClientRect();
      nav.style.setProperty('--lx', `${Math.round(r.left - n.left - 1)}px`);
      nav.style.setProperty('--lw', `${Math.round(r.width)}px`);
      nav.classList.add('mit-linse');
    }
    // Während der Größenänderung mehrere Bilder lang nachführen
    let laeuft = 0;
    function nachfuehren() {
      const ende = performance.now() + 650;
      if (laeuft) return;
      laeuft = 1;
      (function schritt() {
        setze();
        if (performance.now() < ende) requestAnimationFrame(schritt); else laeuft = 0;
      })();
    }
    new MutationObserver(nachfuehren).observe(nav, { attributes: true, subtree: true, attributeFilter: ['class'] });
    window.addEventListener('resize', nachfuehren);
    window.addEventListener('hashchange', () => setTimeout(nachfuehren, 30));
    setTimeout(nachfuehren, 60);

    // Scrollen: nach unten kompakt, nach oben (oder ganz oben) wieder groß
    let letzte = window.scrollY, tick = false;
    function pruefe() {
      tick = false;
      const y = window.scrollY;
      const d = y - letzte;
      if (y < 24) nav.classList.remove('klein');
      else if (d > 6) nav.classList.add('klein');
      else if (d < -6) nav.classList.remove('klein');
      if (Math.abs(d) > 6) letzte = y;
      nachfuehren();
    }
    window.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(pruefe); } }, { passive: true });
    // Antippen der kleinen Leiste öffnet sie wieder
    nav.addEventListener('click', (e) => { if (nav.classList.contains('klein') && !e.target.closest('a')) nav.classList.remove('klein'); });
  }

  function start() { schalter(); leiste(); anwenden(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
