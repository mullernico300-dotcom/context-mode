import React, { createContext, useContext } from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from 'remotion';

/* Farben und Schriften – dunkles Studio-Design mit Akzentfarbe des Lernfelds */
export const F = {
  grund: '#0a0f1f',
  grund2: '#121a35',
  text: '#f3f5ff',
  leise: '#9aa6c8',
  linie: 'rgba(255,255,255,0.10)',
  glas: 'rgba(255,255,255,0.06)',
  gruen: '#22c55e',
  rot: '#f43f5e',
  gelb: '#fbbf24',
  blau: '#38bdf8',
  lila: '#a78bfa',
};
export const SCHRIFT = "'Inter', system-ui, sans-serif";
export const TITEL = "'Space Grotesk', 'Inter', sans-serif";

/* Szenen-Kontext: Zeitmarken der Sätze in Frames */
type Zeit = { start: number; dauer: number };
export const SzeneCtx = createContext<{ zeiten: Zeit[]; akzent: string; dauer: number }>({ zeiten: [], akzent: F.gruen, dauer: 0 });

export function useSzene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { zeiten, akzent, dauer } = useContext(SzeneCtx);
  /* Frame, an dem Satz i beginnt (leicht vorgezogen, damit die Grafik mit dem ersten Wort steht) */
  const cue = (i: number) => (i <= 0 ? 4 : Math.max(0, Math.round((zeiten[Math.min(i, zeiten.length - 1)]?.start ?? 0) * fps) - 6));
  /* Federnder Einstieg 0 → 1 ab Satz i */
  const rein = (i: number, verzug = 0, steif = 120) =>
    spring({ frame: frame - cue(i) - verzug, fps, config: { damping: 18, stiffness: steif, mass: 0.8 } });
  const linear = (i: number, laenge = 20, verzug = 0) =>
    interpolate(frame - cue(i) - verzug, [0, laenge], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
  const ab = (i: number) => frame >= cue(i);
  return { frame, fps, cue, rein, linear, ab, akzent, dauer: dauer * fps };
}

export const eur = (x: number, nk = 0) =>
  x.toLocaleString('de-DE', { minimumFractionDigits: nk, maximumFractionDigits: nk }) + ' €';

/* Glas-Karte */
export const Karte: React.FC<{ style?: React.CSSProperties; children: React.ReactNode; leuchten?: string }> = ({ style, children, leuchten }) => (
  <div
    style={{
      background: 'linear-gradient(160deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
      border: `1.5px solid ${leuchten || F.linie}`,
      borderRadius: 28,
      boxShadow: leuchten ? `0 0 0 1px ${leuchten}33, 0 20px 60px ${leuchten}33` : '0 20px 60px rgba(0,0,0,0.35)',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Ueberschrift: React.FC<{ text: string; zusatz?: React.ReactNode }> = ({ text, zusatz }) => {
  const { rein, akzent } = useSzene();
  const p = rein(0);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 44, opacity: p, transform: `translateY(${(1 - p) * 30}px)` }}>
      <div style={{ width: 10, height: 58, borderRadius: 6, background: akzent }} />
      <h2 style={{ fontFamily: TITEL, fontSize: 66, fontWeight: 700, margin: 0, letterSpacing: -1 }}>{text}</h2>
      {zusatz}
    </div>
  );
};

export const Pille: React.FC<{ farbe: string; children: React.ReactNode; style?: React.CSSProperties }> = ({ farbe, children, style }) => (
  <span
    style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', borderRadius: 999,
      background: farbe + '22', color: farbe, border: `1.5px solid ${farbe}66`, fontWeight: 700, fontSize: 28, ...style,
    }}
  >
    {children}
  </span>
);

/* Zählt eine Zahl hoch, während p von 0 auf 1 läuft */
export const Zaehler: React.FC<{ wert: number; p: number; nk?: number }> = ({ wert, p, nk = 0 }) => (
  <>{eur(Math.round(wert * Math.min(1, Math.max(0, p)) * 100) / 100, nk)}</>
);
