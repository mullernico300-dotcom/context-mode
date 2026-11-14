/* Rendert die Einzelbilder der Lernvideos (720×1280) aus plan.json.
   Aufruf: node tools/render_frames.js <arbeitsordner> [video-id]
   Schriften: npm install @fontsource/inter @fontsource/space-grotesk im Arbeitsordner. */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const arbeit = path.resolve(process.argv[2]);
const nur = process.argv[3];
const plan = JSON.parse(fs.readFileSync(path.join(arbeit, 'plan.json'), 'utf8'));
const schrift = (p) => 'data:font/woff2;base64,' + fs.readFileSync(path.join(arbeit, 'node_modules', p)).toString('base64');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const SEITE = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:400;src:url(${schrift('@fontsource/inter/files/inter-latin-400-normal.woff2')})}
@font-face{font-family:Inter;font-weight:600;src:url(${schrift('@fontsource/inter/files/inter-latin-600-normal.woff2')})}
@font-face{font-family:Inter;font-weight:700;src:url(${schrift('@fontsource/inter/files/inter-latin-700-normal.woff2')})}
@font-face{font-family:Grotesk;font-weight:700;src:url(${schrift('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2')})}
*{box-sizing:border-box;margin:0}
body{width:720px;height:1280px;overflow:hidden;font-family:Inter,sans-serif;color:#fff;
  background:radial-gradient(90% 55% at 15% 0%, color-mix(in srgb, var(--f) 78%, #000) 0%, transparent 70%),
             radial-gradient(80% 50% at 100% 100%, color-mix(in srgb, var(--f) 45%, #000) 0%, transparent 70%), #0d0f24}
.rahmen{position:absolute;inset:0;padding:64px 56px 150px;display:flex;flex-direction:column;gap:30px}
.kopf{display:flex;align-items:center;justify-content:space-between;gap:16px}
.fach{background:var(--f);font-weight:700;font-size:27px;padding:9px 22px;border-radius:99px;letter-spacing:.02em}
.teil{font-size:25px;font-weight:600;opacity:.75}
.titel{font-family:Grotesk,Inter,sans-serif;font-size:42px;line-height:1.14;font-weight:700;letter-spacing:-.01em;opacity:.92}
.karte{flex:1;min-height:0;border-radius:44px;padding:44px 42px;background:rgba(255,255,255,.09);border:2px solid rgba(255,255,255,.2);
  display:flex;flex-direction:column;gap:26px;justify-content:center}
.ref{font-family:Grotesk,Inter,sans-serif;font-weight:700;font-size:56px;line-height:1.08;color:#fde68a;letter-spacing:-.01em}
.ref.klein{font-size:44px}
.text{font-size:var(--g,42px);line-height:1.36;font-weight:600}
.text span{color:rgba(255,255,255,.3)}
.text span.an{color:#fff}
.text span.jetzt{color:#fde68a}
.fuss{position:absolute;left:56px;right:56px;bottom:56px;display:grid;gap:16px}
.zeile{display:flex;justify-content:space-between;align-items:center;font-size:24px;font-weight:600;opacity:.8}
.punkte{display:flex;gap:9px}
.punkte i{width:13px;height:13px;border-radius:50%;background:rgba(255,255,255,.28)}
.punkte i.an{background:#fff}.punkte i.jetzt{background:#fde68a;width:34px;border-radius:9px}
.balken{height:10px;border-radius:9px;background:rgba(255,255,255,.2);overflow:hidden}
.balken b{display:block;height:100%;background:#fde68a;border-radius:9px}
.gross{flex:1;display:flex;flex-direction:column;justify-content:center;gap:34px}
.gross h1{font-family:Grotesk,Inter,sans-serif;font-size:82px;line-height:1.04;letter-spacing:-.02em}
.gross p{font-size:36px;line-height:1.35;font-weight:600;opacity:.85}
.liste{display:flex;flex-wrap:wrap;gap:12px}
.liste span{font-size:26px;font-weight:600;padding:8px 18px;border-radius:99px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.22)}
.marke{font-size:30px;font-weight:700;color:#fde68a}
</style></head><body><div class="rahmen" id="r"></div><div class="fuss" id="f"></div></body></html>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: 1 });
  await page.setContent(SEITE);
  await page.evaluate(() => document.fonts.ready);

  for (const v of plan.videos) {
    if (nur && v.id !== nur) continue;
    const ziel = path.join(arbeit, 'bilder', v.id);
    fs.mkdirSync(ziel, { recursive: true });
    const zeiten = [];
    let n = 0, vergangen = 0;
    const kopf = `<div class="kopf"><span class="fach">${esc(v.fach)}</span>${v.teile > 1 ? `<span class="teil">Teil ${v.teil} von ${v.teile}</span>` : ''}</div>`;
    const fuss = (i) => `<div class="zeile"><span class="punkte">${v.szenen.map((_, k) => `<i class="${k < i ? 'an' : k === i ? 'jetzt' : ''}"></i>`).join('')}</span><span>Lernfeld-Trainer</span></div>
      <div class="balken"><b style="width:${Math.min(100, (vergangen / v.dauer) * 100).toFixed(1)}%"></b></div>`;
    const bild = async (sek) => {
      const datei = String(n++).padStart(4, '0') + '.jpg';
      await page.screenshot({ path: path.join(ziel, datei), type: 'jpeg', quality: 92 });
      zeiten.push([datei, Number(sek.toFixed(3))]);
      vergangen += sek;
    };
    await page.evaluate((f) => document.body.style.setProperty('--f', f), v.farbe);

    // Vorspann
    await page.evaluate(([r, f]) => { document.getElementById('r').innerHTML = r; document.getElementById('f').innerHTML = f; }, [
      `${kopf}<div class="gross"><p class="marke">In unter 2 Minuten erklärt</p><h1>${esc(v.titel)}</h1>
        <div class="liste">${v.szenen.map((s) => `<span>${esc(s.ref)}</span>`).join('')}</div></div>`, fuss(-1)]);
    await page.evaluate(() => { // Überschrift verkleinern, bis alles passt
      const h = document.querySelector('.gross h1'); let g = 82;
      while (document.querySelector('.gross').scrollHeight > document.querySelector('.gross').clientHeight + 1 && g > 44) { g -= 4; h.style.fontSize = g + 'px'; }
    });
    await bild(v.vor[1]);

    // Szenen: ein Bild je Wortgruppe, gesprochene Wörter werden hell
    for (let i = 0; i < v.szenen.length; i++) {
      const s = v.szenen[i];
      await page.evaluate(([r]) => { document.getElementById('r').innerHTML = r; }, [
        `${kopf}<div class="titel">${esc(v.titel)}</div><div class="karte"><div class="ref ${s.ref.length > 22 ? 'klein' : ''}">${esc(s.ref)}</div>
          <div class="text">${s.woerter.map((w) => `<span>${esc(w.w)}</span>`).join(' ')}</div></div>`]);
      await page.evaluate(() => { // Schrift verkleinern, bis der Text in die Karte passt
        const k = document.querySelector('.karte'), t = document.querySelector('.text'); let g = 42;
        k.style.justifyContent = 'flex-start';
        while (k.scrollHeight > k.clientHeight + 1 && g > 22) { g -= 1; t.style.setProperty('--g', g + 'px'); }
        k.style.justifyContent = '';
      });
      const zeig = async (bis, von) => {
        await page.evaluate(([b, a, f]) => {
          document.querySelectorAll('.text span').forEach((el, k) => { el.className = k >= a && k < b ? 'an jetzt' : k < b ? 'an' : ''; });
          document.getElementById('f').innerHTML = f;
        }, [bis, von, fuss(i)]);
      };
      await zeig(0, 0);
      await bild(s.woerter.length ? s.woerter[0].t : s.dauer);
      for (let a = 0; a < s.woerter.length; a += plan.gruppe) {
        const b = Math.min(s.woerter.length, a + plan.gruppe);
        const ende = b < s.woerter.length ? s.woerter[b].t : s.dauer;
        await zeig(b, a);
        await bild(ende - s.woerter[a].t);
      }
    }

    // Abspann
    await page.evaluate(([r, f]) => { document.getElementById('r').innerHTML = r; document.getElementById('f').innerHTML = f; }, [
      `${kopf}<div class="gross"><h1>Geschafft!</h1><p>Teste dein Wissen jetzt im Quiz.</p>
        <div class="liste">${v.szenen.map((s) => `<span>${esc(s.ref)}</span>`).join('')}</div></div>`, fuss(v.szenen.length)]);
    await bild(v.nach[1]);
    fs.writeFileSync(path.join(ziel, 'zeiten.json'), JSON.stringify(zeiten));
    console.log(v.id, n, 'Bilder');
  }
  await browser.close();
})();
