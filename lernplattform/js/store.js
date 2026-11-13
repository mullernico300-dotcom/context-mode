/* Hilfsfunktionen + Datenhaltung (Inhalte und Lernfortschritt im Browser). */
(function () {
  'use strict';

  const U = {
    esc: (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
    mischen(liste) {
      const a = liste.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    schluessel(text) {
      let h = 0;
      const s = String(text);
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
      return 'k' + (h >>> 0).toString(36);
    },
    /* Mini-Formatierung für Erklärtexte: Absätze, "- " Listen, **fett** */
    format(text) {
      const zeilen = String(text || '').split('\n');
      let html = '', inListe = false;
      const fett = (z) => U.esc(z).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      for (const roh of zeilen) {
        const z = roh.trim();
        if (!z) continue;
        if (/^[-•]\s+/.test(z)) {
          if (!inListe) { html += '<ul>'; inListe = true; }
          html += '<li>' + fett(z.replace(/^[-•]\s+/, '')) + '</li>';
        } else {
          if (inListe) { html += '</ul>'; inListe = false; }
          html += '<p>' + fett(z) + '</p>';
        }
      }
      return html + (inListe ? '</ul>' : '');
    },
    /* Kürzel eines Lernfelds: eigenes Kürzel oder "LF <Nummer>" */
    kurz(lf) { return lf.kurz ? String(lf.kurz) : 'LF ' + lf.nummer; },
    toast(text) {
      const t = document.getElementById('toast');
      t.textContent = text;
      t.classList.add('an');
      clearTimeout(U._t);
      U._t = setTimeout(() => t.classList.remove('an'), 2600);
    },
    download(name, inhalt, typ) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([inhalt], { type: typ || 'text/plain' }));
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    }
  };

  const K_DATEN = 'lernplattform.daten.v1';
  const K_FORT = 'lernplattform.fortschritt.v1';

  function lese(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
  }
  function schreibe(key, wert) {
    try { localStorage.setItem(key, JSON.stringify(wert)); return true; } catch (e) { return false; }
  }

  /* Fachlicher Filter: nur Lernfelder – EStG-/USt-Seminare werden nie angezeigt. */
  const SEMINAR = /\b(estg?|ustg?|einkommensteuer(gesetz)?|umsatzsteuer(gesetz)?)[\s\-–:]*seminar|seminar[\s\-–:]*(estg?|ustg?|einkommensteuer|umsatzsteuer)\b/i;
  function erlaubt(lf) {
    return !!lf && lf.typ !== 'seminar' && !SEMINAR.test(String(lf.titel || '') + ' ' + String(lf.id || ''));
  }

  function normalisiere(d) {
    if (!d || !Array.isArray(d.lernfelder)) return null;
    d.titel = d.titel || 'Lernfeld-Trainer';
    d.untertitel = d.untertitel || '';
    d.lernfelder.forEach((lf, i) => {
      lf.id = String(lf.id || 'lf' + (i + 1)).replace(/[^A-Za-z0-9]/g, '');
      lf.nummer = lf.nummer == null ? i + 1 : lf.nummer;
      lf.titel = lf.titel || 'Neues Lernfeld';
      lf.beschreibung = lf.beschreibung || '';
      lf.farbe = lf.farbe || '#6366f1';
      ['lernziele', 'themen', 'paragrafen', 'karten', 'quiz', 'raetsel'].forEach((k) => { if (!Array.isArray(lf[k])) lf[k] = []; });
      lf.quiz.forEach((q) => {
        if (!Array.isArray(q.antworten)) q.antworten = ['', '', '', ''];
        while (q.antworten.length < 4) q.antworten.push('');
        q.richtig = Number(q.richtig) || 0;
        q.stufe = Number(q.stufe) || 1;
      });
    });
    return d;
  }

  let cache = null;

  const Store = {
    erlaubt,
    /* Alle Daten (Arbeitskopie der Lehrkraft aus dem Browser, sonst data.js) */
    daten() {
      if (cache) return cache;
      cache = normalisiere(lese(K_DATEN)) || normalisiere(JSON.parse(JSON.stringify(window.LERN_DATEN || { lernfelder: [] })));
      return cache;
    },
    /* Sichtbare Lernfelder (nach Filter, sortiert nach Nummer) */
    lernfelder() {
      return Store.daten().lernfelder.filter(erlaubt).slice().sort((a, b) => Number(a.nummer) - Number(b.nummer));
    },
    hatLokaleAenderungen() { return !!lese(K_DATEN); },
    speichere() { return schreibe(K_DATEN, Store.daten()); },
    ersetze(neu) {
      const d = normalisiere(neu);
      if (!d) return false;
      cache = d;
      return Store.speichere();
    },
    zuruecksetzen() {
      try { localStorage.removeItem(K_DATEN); } catch (e) { /* Speicher gesperrt */ }
      cache = null;
    },

    /* ---- Lernfortschritt ---- */
    fortschritt() {
      const f = lese(K_FORT) || {};
      f.karten = f.karten || {}; f.quiz = f.quiz || {}; f.raetsel = f.raetsel || {}; f.ziele = f.ziele || {};
      return f;
    },
    setzeKarte(lfId, key, status) {
      const f = Store.fortschritt();
      f.karten[lfId] = f.karten[lfId] || {};
      if (status) f.karten[lfId][key] = status; else delete f.karten[lfId][key];
      schreibe(K_FORT, f);
    },
    kartenStatus(lfId) { return Store.fortschritt().karten[lfId] || {}; },
    setzeQuiz(lfId, punkte, richtige, anzahl) {
      const f = Store.fortschritt();
      const alt = f.quiz[lfId] || { best: 0, spiele: 0, bestRichtige: 0 };
      const neuerRekord = punkte > alt.best;
      f.quiz[lfId] = {
        best: Math.max(alt.best, punkte),
        bestRichtige: Math.max(alt.bestRichtige || 0, richtige),
        anzahl,
        spiele: (alt.spiele || 0) + 1
      };
      schreibe(K_FORT, f);
      return neuerRekord;
    },
    quizStand(lfId) { return Store.fortschritt().quiz[lfId] || null; },
    setzeRaetsel(lfId) {
      const f = Store.fortschritt();
      f.raetsel[lfId] = (f.raetsel[lfId] || 0) + 1;
      schreibe(K_FORT, f);
    },
    raetselGeloest(lfId) { return Store.fortschritt().raetsel[lfId] || 0; },
    zielUmschalten(lfId, key) {
      const f = Store.fortschritt();
      f.ziele[lfId] = f.ziele[lfId] || {};
      if (f.ziele[lfId][key]) delete f.ziele[lfId][key]; else f.ziele[lfId][key] = 1;
      schreibe(K_FORT, f);
    },
    ziele(lfId) { return Store.fortschritt().ziele[lfId] || {}; },
    /* ---- Eigene Ziele (z. B. „Test über Kündigung am 12.12.“) ---- */
    meineZiele() { return Store.fortschritt().meineZiele || []; },
    speichereZiele(liste) {
      const f = Store.fortschritt();
      f.meineZiele = liste;
      return schreibe(K_FORT, f);
    },
    fortschrittLoeschen() { try { localStorage.removeItem(K_FORT); } catch (e) { /* Speicher gesperrt */ } }
  };

  window.U = U;
  window.Store = Store;
})();
