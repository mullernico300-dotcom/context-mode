import React from 'react';
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/space-grotesk/700.css';
import { F, SCHRIFT, TITEL, SzeneCtx } from './basis';
import { SZENEN } from './szenen';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Drehbuch = any;

export const framesVon = (d: Drehbuch, fps: number) => d.szenen.map((s: any) => Math.round(s.dauer * fps));

/* Bewegter Hintergrund: weiche Farbflächen und feines Raster */
const Hintergrund: React.FC<{ akzent: string }> = ({ akzent }) => {
  const f = useCurrentFrame();
  const blob = (farbe: string, x: number, y: number, r: number, t: number) => (
    <div style={{
      position: 'absolute', width: r, height: r, borderRadius: '50%', filter: 'blur(120px)', opacity: 0.35,
      background: farbe, left: x + Math.sin(f / t) * 120, top: y + Math.cos(f / (t * 1.3)) * 90,
    }} />
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(120% 120% at 20% 0%, ${F.grund2}, ${F.grund})`, overflow: 'hidden' }}>
      {blob(akzent, -200, -150, 900, 90)}
      {blob(F.blau, 1300, 500, 800, 110)}
      {blob(F.lila, 600, 700, 700, 130)}
      <AbsoluteFill style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />
    </AbsoluteFill>
  );
};

/* Untertitel: aktueller Satz, Wörter werden beim Sprechen hell */
const Untertitel: React.FC<{ satz: string; t: number; dauer: number }> = ({ satz, t, dauer }) => {
  const woerter = satz.split(' ');
  const gesamt = woerter.reduce((n, w) => n + w.length + 1, 0);
  let lauf = 0;
  const anteil = Math.min(1, Math.max(0, t / dauer));
  return (
    <div style={{ fontSize: 38, lineHeight: 1.35, fontWeight: 600, textAlign: 'center', maxWidth: 1500 }}>
      {woerter.map((w, i) => {
        const an = lauf / gesamt <= anteil;
        lauf += w.length + 1;
        return <span key={i} style={{ color: an ? F.text : 'rgba(243,245,255,0.38)' }}>{w} </span>;
      })}
    </div>
  );
};

export const Erklaervideo: React.FC<{ drehbuch: Drehbuch }> = ({ drehbuch: d }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const laengen = framesVon(d, fps);
  const starts = laengen.map((_: number, i: number) => laengen.slice(0, i).reduce((a: number, b: number) => a + b, 0));
  const akt = Math.max(0, starts.findIndex((s: number, i: number) => frame >= s && frame < s + laengen[i]));
  const sz = d.szenen[akt];
  const tSzene = (frame - starts[akt]) / fps;
  let satzNr = 0;
  sz.zeiten.forEach((z: any, i: number) => { if (tSzene >= z.start - 0.05) satzNr = i; });
  const z = sz.zeiten[satzNr];
  const akzent = d.farbe;

  return (
    <AbsoluteFill style={{ fontFamily: SCHRIFT, color: F.text }}>
      <Hintergrund akzent={akzent} />

      {/* Szenen mit Ton */}
      {d.szenen.map((s: any, i: number) => {
        const Szene = SZENEN[s.typ];
        return (
          <Sequence key={i} from={starts[i]} durationInFrames={laengen[i]}>
            <Audio src={staticFile(s.ton)} />
            <SzeneCtx.Provider value={{ zeiten: s.zeiten, akzent, dauer: s.dauer }}>
              <Uebergang laenge={laengen[i]}>
                <AbsoluteFill style={{ top: 150, bottom: 190 }}>
                  <Szene d={s.daten} />
                </AbsoluteFill>
              </Uebergang>
            </SzeneCtx.Provider>
          </Sequence>
        );
      })}

      {/* Kopfzeile mit Kapitel und Fortschritt */}
      <div style={{ position: 'absolute', top: 44, left: 80, right: 80, display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ width: 54, height: 54, borderRadius: 16, background: akzent, color: F.grund, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TITEL, fontWeight: 700, fontSize: 30 }}>
          {d.lf.replace('lf', '')}
        </div>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{d.kapitel}<span style={{ color: F.leise, fontWeight: 600 }}> · {d.titel}</span></div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          {laengen.map((l: number, i: number) => {
            const p = i < akt ? 1 : i > akt ? 0 : (frame - starts[i]) / l;
            return (
              <div key={i} style={{ width: 54, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.14)', overflow: 'hidden' }}>
                <div style={{ width: `${p * 100}%`, height: '100%', background: akzent }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Untertitel */}
      <div style={{ position: 'absolute', left: 120, right: 120, bottom: 46, display: 'flex', justifyContent: 'center' }}>
        <div style={{ padding: '22px 40px', borderRadius: 26, background: 'rgba(5,8,20,0.62)', border: `1px solid ${F.linie}`, backdropFilter: 'blur(12px)' }}>
          {z ? <Untertitel satz={sz.saetze[satzNr]} t={tSzene - z.start} dauer={z.dauer} /> : null}
        </div>
      </div>

      {/* Ausblenden am Ende */}
      <AbsoluteFill style={{ background: F.grund, opacity: interpolate(frame, [durationInFrames - 20, durationInFrames], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }) }} />
    </AbsoluteFill>
  );
};

/* Weiche Blende zwischen den Szenen */
const Uebergang: React.FC<{ laenge: number; children: React.ReactNode }> = ({ laenge, children }) => {
  const f = useCurrentFrame();
  const rein = interpolate(f, [0, 14], [0, 1], { extrapolateRight: 'clamp' });
  const raus = interpolate(f, [laenge - 12, laenge], [1, 0], { extrapolateLeft: 'clamp' });
  return (
    <AbsoluteFill style={{ opacity: Math.min(rein, raus), transform: `scale(${0.97 + 0.03 * rein}) translateY(${(1 - rein) * 20}px)` }}>
      {children}
    </AbsoluteFill>
  );
};
