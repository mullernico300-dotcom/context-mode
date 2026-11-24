/* Rendert das Erklärvideo aus src/daten/aktuell.json.
   Aufruf: [GROESSE=720] node render.cjs <ausgabe.mp4> [standbild-frames, z. B. 100,900,2000]
   Mit Standbild-Frames werden statt des Videos nur PNG-Vorschauen erzeugt. */
const path = require('path');
const { bundle } = require('@remotion/bundler');
const { selectComposition, renderMedia, renderStill } = require('@remotion/renderer');

(async () => {
  const ziel = process.argv[2] || 'video.mp4';
  const stills = process.argv[3] ? process.argv[3].split(',').map(Number) : null;
  const serveUrl = await bundle({ entryPoint: path.join(__dirname, 'src/index.ts'), publicDir: path.join(__dirname, 'public') });
  const browserExecutable = process.env.CHROME || '/opt/pw-browsers/chromium';
  const chromiumOptions = { gl: 'swangle' };
  /* DREHBUCH=src/daten/<id>.json wählt das Video; ohne Angabe gilt src/daten/aktuell.json */
  const inputProps = { drehbuch: JSON.parse(require('fs').readFileSync(process.env.DREHBUCH || path.join(__dirname, 'src/daten/aktuell.json'), 'utf8')) };
  const composition = await selectComposition({ serveUrl, id: 'Erklaervideo', browserExecutable, chromiumOptions, inputProps });
  if (stills) {
    for (const f of stills) {
      const out = ziel.replace(/\.png$/, '') + '-' + f + '.png';
      await renderStill({ composition, serveUrl, output: out, frame: f, browserExecutable, chromiumOptions, inputProps, scale: process.env.GROESSE === '720' ? 2 / 3 : 1 });
      console.log('Standbild', out);
    }
    return;
  }
  let zuletzt = -1;
  await renderMedia({
    composition, serveUrl, codec: 'h264', outputLocation: ziel, browserExecutable, chromiumOptions, inputProps,
    /* GROESSE=720 rendert 1280×720 (schneller, kleiner – Standard für die App, Dateien ≤ 15 MB) */
    scale: process.env.GROESSE === '720' ? 2 / 3 : 1,
    crf: process.env.GROESSE === '720' ? 27 : 20, audioBitrate: process.env.GROESSE === '720' ? '96k' : '128k',
    concurrency: Number(process.env.KERNE || 4),
    onProgress: ({ progress }) => { const p = Math.floor(progress * 20); if (p !== zuletzt) { zuletzt = p; console.log(Math.round(progress * 100) + ' %'); } },
  });
  console.log('fertig:', ziel, composition.durationInFrames / composition.fps, 's');
})().catch((e) => { console.error(e); process.exit(1); });
