/* Kreuzworträtsel-Generator: baut aus einer Wortliste automatisch ein Gitter. */
(function () {
  'use strict';

  function norm(w) {
    return String(w || '').toUpperCase().replace(/ß/g, 'SS').replace(/[^A-ZÄÖÜ]/g, '');
  }

  function versuch(eintraege) {
    const gitter = new Map(); // "r,c" -> { ch, h, v }
    const gesetzt = [];
    const get = (r, c) => gitter.get(r + ',' + c);

    function pruefe(w, r, c, dir) {
      const dr = dir === 'v' ? 1 : 0, dc = dir === 'h' ? 1 : 0;
      if (get(r - dr, c - dc) || get(r + dr * w.length, c + dc * w.length)) return -1;
      let kreuzungen = 0;
      for (let i = 0; i < w.length; i++) {
        const rr = r + dr * i, cc = c + dc * i, z = get(rr, cc);
        if (z) {
          if (z.ch !== w[i] || z[dir]) return -1;
          kreuzungen++;
        } else if (get(rr + dc, cc + dr) || get(rr - dc, cc - dr)) {
          return -1; // würde ein fremdes Wort seitlich berühren
        }
      }
      return kreuzungen;
    }

    function setze(e, r, c, dir) {
      const dr = dir === 'v' ? 1 : 0, dc = dir === 'h' ? 1 : 0;
      for (let i = 0; i < e.wort.length; i++) {
        const k = (r + dr * i) + ',' + (c + dc * i);
        const z = gitter.get(k) || { ch: e.wort[i], h: false, v: false };
        z[dir] = true;
        gitter.set(k, z);
      }
      gesetzt.push({ wort: e.wort, hinweis: e.hinweis, r, c, dir });
    }

    function platziere(e) {
      const w = e.wort;
      let beste = [], max = 0;
      for (const [k, z] of gitter) {
        if (z.h && z.v) continue;
        const dir = z.h ? 'v' : 'h';
        const [r, c] = k.split(',').map(Number);
        for (let i = 0; i < w.length; i++) {
          if (w[i] !== z.ch) continue;
          const r0 = dir === 'v' ? r - i : r, c0 = dir === 'h' ? c - i : c;
          const s = pruefe(w, r0, c0, dir);
          if (s > max) { max = s; beste = []; }
          if (s > 0 && s === max) beste.push([r0, c0, dir]);
        }
      }
      if (!beste.length) return false;
      const [r, c, dir] = beste[Math.floor(Math.random() * beste.length)];
      setze(e, r, c, dir);
      return true;
    }

    let offen = eintraege.slice();
    setze(offen.shift(), 0, 0, Math.random() < 0.5 ? 'h' : 'v');
    for (let runde = 0; runde < 3 && offen.length; runde++) {
      offen = offen.filter((e) => !platziere(e));
    }

    let minR = Infinity, minC = Infinity, maxR = -Infinity, maxC = -Infinity;
    for (const k of gitter.keys()) {
      const [r, c] = k.split(',').map(Number);
      minR = Math.min(minR, r); maxR = Math.max(maxR, r);
      minC = Math.min(minC, c); maxC = Math.max(maxC, c);
    }
    gesetzt.forEach((g) => { g.r -= minR; g.c -= minC; });
    return { rows: maxR - minR + 1, cols: maxC - minC + 1, woerter: gesetzt, ausgelassen: offen.map((e) => e.wort) };
  }

  function erzeuge(liste) {
    const gesehen = new Set();
    const eintraege = [];
    (liste || []).forEach((e) => {
      const wort = norm(e.wort);
      if (wort.length < 2 || gesehen.has(wort)) return;
      gesehen.add(wort);
      eintraege.push({ wort, hinweis: e.hinweis || '' });
    });
    if (!eintraege.length) return null;

    let best = null, bestWert = -Infinity;
    for (let n = 0; n < 200; n++) {
      // lange Wörter zuerst, mit etwas Zufall
      const reihenfolge = eintraege
        .map((e) => ({ e, s: e.wort.length + Math.random() * 4 }))
        .sort((a, b) => b.s - a.s)
        .map((x) => x.e);
      const v = versuch(reihenfolge);
      const wert = v.woerter.length * 1000 - v.rows * v.cols - Math.max(0, v.cols - 12) * 150; // schmale Gitter passen aufs Handy
      if (wert > bestWert) { bestWert = wert; best = v; }
    }

    // Nummerierung: von oben links nach unten rechts
    const starts = new Map();
    best.woerter
      .slice()
      .sort((a, b) => a.r - b.r || a.c - b.c)
      .forEach((w) => {
        const k = w.r + ',' + w.c;
        if (!starts.has(k)) starts.set(k, starts.size + 1);
        w.nr = starts.get(k);
      });
    best.woerter.sort((a, b) => a.nr - b.nr);
    best.woerter.forEach((w) => {
      w.zellen = [];
      for (let i = 0; i < w.wort.length; i++) {
        w.zellen.push((w.r + (w.dir === 'v' ? i : 0)) + ',' + (w.c + (w.dir === 'h' ? i : 0)));
      }
    });
    return best;
  }

  window.Kreuzwort = { erzeuge, norm };
})();
