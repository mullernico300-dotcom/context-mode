import React from 'react';
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from 'remotion';
import { F, TITEL, Karte, Ueberschrift, Pille, Zaehler, useSzene, eur } from './basis';

/* Zusätzliche Szenen-Typen für besonders aufwendige Videos:
   intro, kapitel, vergleich, kreis, verteilung, quiz. Jede Grafik hat ein `satz`-Feld wie in szenen.tsx. */

/* eslint-disable @typescript-eslint/no-explicit-any */
type D = any;

/* Kinetischer Einstieg: Titel Wort für Wort, Betrag zählt hoch und verteilt sich auf Personen */
export const Intro: React.FC<{ d: D }> = ({ d }) => {
  const { rein, linear, akzent, frame } = useSzene();
  const worte: string[] = d.titel.split(' ');
  const kick = rein(0, 0, 90), unter = rein(0, 26, 80);
  const topf = rein(d.satzBetrag, 0, 90), zahl = linear(d.satzBetrag, 50, 6);
  const teilen = linear(d.satzTeilen, 40);
  const n = d.personen.length, abstand = 430;
  return (
    <AbsoluteFill style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
      <div style={{ opacity: kick, transform: `translateY(${(1 - kick) * -24}px)` }}><Pille farbe={akzent}>{d.kicker}</Pille></div>
      <h1 style={{ fontFamily: TITEL, fontSize: 124, lineHeight: 1.05, margin: '24px 0 8px', letterSpacing: -3, display: 'flex', gap: 30 }}>
        {worte.map((w, i) => {
          const p = rein(0, 8 + i * 6, 120);
          return (
            <span key={i} style={{ display: 'inline-block', opacity: p, color: i === worte.length - 1 ? akzent : F.text, transform: `translateY(${(1 - p) * 90}px) rotate(${(1 - p) * (i % 2 ? 10 : -10)}deg)` }}>{w}</span>
          );
        })}
      </h1>
      <p style={{ fontSize: 40, color: F.leise, margin: 0, opacity: unter }}>{d.untertitel}</p>
      <div style={{ position: 'relative', width: 1500, height: 360, marginTop: 34 }}>
        {/* Gewinn-Topf */}
        <div style={{ position: 'absolute', left: '50%', top: 0, transform: `translateX(-50%) scale(${0.7 + 0.3 * topf})`, opacity: topf * (1 - 0.65 * teilen) }}>
          <Karte leuchten={F.gelb} style={{ padding: '16px 50px', textAlign: 'center' }}>
            <div style={{ fontSize: 28, color: F.leise, fontWeight: 600 }}>{d.betragLabel}</div>
            <div style={{ fontFamily: TITEL, fontSize: 80, fontWeight: 700, color: F.gelb, whiteSpace: 'nowrap' }}>{eur(Math.round(d.betrag * zahl / 1000) * 1000)}</div>
          </Karte>
        </div>
        {d.personen.map((ps: D, i: number) => {
          const x = (i - (n - 1) / 2) * abstand;
          const auf = rein(0, 40 + i * 8, 90);
          const flug = Math.min(1, Math.max(0, teilen * 1.6 - i * 0.3));
          const ankunft = flug >= 1 ? 1 : 0;
          const bogen = Math.sin(flug * Math.PI) * -70;
          return (
            <React.Fragment key={i}>
              <div style={{ position: 'absolute', left: `calc(50% + ${x}px)`, top: 175, transform: `translateX(-50%) scale(${0.6 + 0.4 * auf})`, opacity: auf, textAlign: 'center' }}>
                <div style={{ width: 120, height: 120, margin: '0 auto', borderRadius: 99, background: F.glas, border: `3px solid ${ankunft ? F.gelb : akzent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 68, boxShadow: ankunft ? `0 0 40px ${F.gelb}88` : 'none' }}>{ps.icon}</div>
                <div style={{ fontSize: 36, fontWeight: 800, marginTop: 10 }}>{ps.name}</div>
              </div>
              {flug > 0 && flug < 1 && (
                <div style={{ position: 'absolute', left: `calc(50% + ${x * flug}px)`, top: 70 + 100 * flug + bogen, transform: `translateX(-50%) rotate(${flug * 360}deg)`, width: 64, height: 64, borderRadius: 99, background: `radial-gradient(circle at 35% 35%, #fde68a, ${F.gelb})`, color: F.grund, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 900, boxShadow: `0 6px 20px ${F.gelb}66` }}>€</div>
              )}
              {ankunft > 0 && (
                <div style={{ position: 'absolute', left: `calc(50% + ${x + 62}px)`, top: 160, width: 50, height: 50, borderRadius: 99, background: F.rot, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 900, transform: `scale(${1 + Math.sin(frame / 6) * 0.06})` }}>?</div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* Kapitelkarte: große Ziffer, Lichtstreifen, Titel */
export const Kapitel: React.FC<{ d: D }> = ({ d }) => {
  const { rein, linear, akzent } = useSzene();
  const wisch = linear(0, 22), nr = rein(0, 2, 70), t = rein(0, 10, 90), s = rein(0, 20, 90);
  return (
    <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 4, background: `linear-gradient(90deg, transparent, ${akzent}, transparent)`, transform: `scaleX(${wisch})`, opacity: 0.6 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 70 }}>
        <div style={{ fontFamily: TITEL, fontSize: 360, fontWeight: 700, lineHeight: 1, color: 'transparent', WebkitTextStroke: `5px ${akzent}`, opacity: nr, transform: `scale(${1.5 - 0.5 * nr})`, textShadow: `0 0 80px ${akzent}55` }}>{d.nr}</div>
        <div>
          <div style={{ fontSize: 34, letterSpacing: 10, textTransform: 'uppercase', color: akzent, fontWeight: 800, opacity: t }}>Teil {d.nr}</div>
          <div style={{ fontFamily: TITEL, fontSize: 112, fontWeight: 700, lineHeight: 1.05, opacity: t, transform: `translateX(${(1 - t) * 80}px)` }}>{d.titel}</div>
          <div style={{ fontSize: 44, color: F.leise, marginTop: 10, opacity: s, transform: `translateX(${(1 - s) * 80}px)` }}>{d.text}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* Vergleichstabelle: Spalten erscheinen mit ihrem Satz, Zeilen mit ihrem Satz, eine Spalte kann hervorgehoben werden */
export const Vergleich: React.FC<{ d: D }> = ({ d }) => {
  const { rein, akzent } = useSzene();
  const fok = d.fokus ? rein(d.fokus.satz) : 0;
  const dimm = (j: number) => (d.fokus && d.fokus.spalte !== j ? fok * 0.6 : 0);
  return (
    <div style={{ padding: '0 70px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'grid', gridTemplateColumns: `250px repeat(${d.spalten.length}, 1fr)`, gap: 18 }}>
        <div />
        {d.spalten.map((s: D, j: number) => {
          const p = rein(s.satz, 0, 110), f = d.fokus && d.fokus.spalte === j ? fok : 0;
          return (
            <Karte key={j} leuchten={f > 0.02 ? akzent : undefined} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, opacity: p * (1 - dimm(j)), transform: `translateY(${(1 - p) * 40}px) scale(${1 + 0.04 * f})` }}>
              <span style={{ fontSize: 54 }}>{s.icon}</span>
              <span style={{ fontFamily: TITEL, fontSize: 54, fontWeight: 700 }}>{s.titel}</span>
            </Karte>
          );
        })}
        {d.zeilen.map((z: D, i: number) => (
          <React.Fragment key={i}>
            <div style={{ fontSize: 34, fontWeight: 700, color: F.leise, display: 'flex', alignItems: 'center', opacity: rein(Math.min(z.satz, ...d.spalten.map((s: D) => s.satz))) }}>{z.label}</div>
            {z.werte.map((w: string, j: number) => {
              const p = rein(Math.max(z.satz, d.spalten[j].satz), 8 + i * 5, 110);
              const farbe = w.startsWith('✓') ? F.gruen : w.startsWith('✗') ? F.rot : w.startsWith('⚠') ? F.gelb : F.text;
              return (
                <div key={j} style={{ background: F.glas, border: `1.5px solid ${farbe === F.text ? F.linie : farbe + '55'}`, borderRadius: 18, padding: '16px 22px', fontSize: 34, fontWeight: 650, lineHeight: 1.25, color: farbe, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 128, opacity: p * (1 - dimm(j)), transform: `translateY(${(1 - p) * 26}px)` }}>{w}</div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const FARBEN = (akzent: string) => [akzent, F.gelb, F.lila, F.gruen];

/* Ringdiagramm: Schlüssel-Verteilung mit Legende und Beträgen */
export const Kreis: React.FC<{ d: D }> = ({ d }) => {
  const { rein, linear, akzent } = useSzene();
  const farben = FARBEN(akzent);
  const summe = d.teile.reduce((a: number, t: D) => a + t.anteil, 0);
  const R = 180, U = 2 * Math.PI * R;
  let lauf = 0;
  const mitte = rein(d.mitte.satz), dreh = linear(0, 40);
  return (
    <div style={{ padding: '0 70px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 100, justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 470, height: 470, flex: 'none', opacity: dreh, transform: `rotate(${(1 - dreh) * -40}deg)` }}>
          <svg width={470} height={470} viewBox="0 0 470 470" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={235} cy={235} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={66} />
            {d.teile.flatMap((t: D, i: number) => {
              const elemente: React.ReactNode[] = [];
              for (let k = 0; k < t.anteil; k++) {
                const p = linear(t.satz, 18, k * 7);
                const stueck = U / summe;
                elemente.push(<circle key={i + '-' + k} cx={235} cy={235} r={R} fill="none" stroke={farben[i % farben.length]} strokeWidth={66}
                  strokeDasharray={`${Math.max(0, (stueck - 8) * p)} ${U}`} strokeDashoffset={-(lauf + k) * stueck} />);
              }
              lauf += t.anteil;
              return elemente;
            })}
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', opacity: mitte, transform: `scale(${0.7 + 0.3 * mitte})` }}>
            <div style={{ fontFamily: TITEL, fontSize: 72, fontWeight: 700 }}>{d.mitte.oben}</div>
            <div style={{ fontSize: 30, color: F.gelb, fontWeight: 700, whiteSpace: 'nowrap' }}>{d.mitte.unten}</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 680 }}>
          <Karte style={{ padding: '18px 30px', display: 'flex', alignItems: 'center', opacity: rein(0, 10) }}>
            <span style={{ fontSize: 32, color: F.leise, fontWeight: 600, flex: 1 }}>{d.betragLabel}</span>
            <span style={{ fontFamily: TITEL, fontSize: 52, fontWeight: 700 }}>{eur(d.betrag)}</span>
          </Karte>
          {d.teile.map((t: D, i: number) => {
            const p = rein(t.satz, i * 8);
            const f = farben[i % farben.length];
            return (
              <Karte key={i} style={{ display: 'flex', alignItems: 'center', gap: 22, padding: '18px 30px', opacity: p, transform: `translateX(${(1 - p) * 70}px)` }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: f, flex: 'none' }} />
                <div style={{ fontSize: 38, fontWeight: 750, flex: 1 }}>{t.label} <span style={{ color: F.leise, fontWeight: 600 }}>· {t.anteil} {t.anteil === 1 ? 'Teil' : 'Teile'}</span></div>
                <div style={{ fontFamily: TITEL, fontSize: 48, fontWeight: 700, color: f }}><Zaehler wert={(d.betrag * t.anteil) / summe} p={linear(t.satz, 30, i * 8)} /></div>
              </Karte>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* Gestapelte Säulen: je Person wächst Stufe für Stufe ein Segment, am Ende Summen und Probe */
export const Verteilung: React.FC<{ d: D }> = ({ d }) => {
  const { rein, linear, akzent, cue } = useSzene();
  const farben = FARBEN(akzent);
  const summen = d.personen.map((p: D) => p.werte.reduce((a: number, b: number) => a + b, 0));
  const max = Math.max(...summen), H = 330;
  const tot = rein(d.summeSatz), probe = rein(d.probe.satz, 0, 110);
  return (
    <div style={{ padding: '0 70px', position: 'relative', height: '100%' }}>
      <Ueberschrift text={d.ueberschrift} />
      {/* Legende links */}
      <div style={{ position: 'absolute', left: 70, top: 190, display: 'flex', flexDirection: 'column', gap: 22 }}>
        {d.stufen.map((s: D, k: number) => {
          const p = rein(s.satz);
          return (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 32, fontWeight: 700, opacity: 0.25 + 0.75 * p, transform: `translateX(${(1 - p) * -20}px)` }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: farben[k], boxShadow: p > 0.5 ? `0 0 18px ${farben[k]}` : 'none' }} />{s.label}
            </div>
          );
        })}
      </div>
      {/* Säulen */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 110, marginTop: 10 }}>
        {d.personen.map((ps: D, i: number) => (
          <div key={i} style={{ width: 240, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: TITEL, fontSize: 54, fontWeight: 700, height: 70, opacity: tot, transform: `translateY(${(1 - tot) * 20}px) scale(${0.8 + 0.2 * tot})`, whiteSpace: 'nowrap' }}>
              <Zaehler wert={summen[i]} p={linear(d.summeSatz, 40, i * 6)} />
            </div>
            <div style={{ height: H, width: 190, display: 'flex', flexDirection: 'column-reverse', borderRadius: 18, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
              {ps.werte.map((w: number, k: number) => {
                const p = linear(d.stufen[k].satz, 26, i * 7);
                const h = (H * w * p) / max;
                return (
                  <div key={k} style={{ height: h, flex: 'none', background: `linear-gradient(180deg, ${farben[k]}, ${farben[k]}bb)`, borderTop: h > 2 ? '2px solid rgba(5,8,20,0.6)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: F.grund, fontSize: 26, fontWeight: 900, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {h > 34 ? w.toLocaleString('de-DE') : ''}
                  </div>
                );
              })}
            </div>
            <div style={{ fontSize: 58, marginTop: 14, lineHeight: 1 }}>{ps.icon}</div>
            <div style={{ fontSize: 36, fontWeight: 800, marginTop: 6 }}>{ps.name}</div>
          </div>
        ))}
      </div>
      {/* Probe rechts */}
      <div style={{ position: 'absolute', right: 70, top: 230, width: 330, opacity: probe, transform: `scale(${0.7 + 0.3 * probe}) rotate(${(1 - probe) * 6}deg)` }}>
        <Karte leuchten={F.gruen} style={{ padding: '26px 28px', textAlign: 'center' }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: F.gruen, letterSpacing: 3 }}>✓ PROBE</div>
          <div style={{ fontSize: 30, fontWeight: 650, marginTop: 10, lineHeight: 1.35 }}>{d.probe.text}</div>
        </Karte>
      </div>
      <Sequence from={cue(d.probe.satz) + 8} layout="none"><Audio src={staticFile('klang/richtig.wav')} volume={0.3} /></Sequence>
    </div>
  );
};

/* Quiz mit Countdown-Ring und Auflösung */
export const Quiz: React.FC<{ d: D }> = ({ d }) => {
  const { rein, akzent, frame, cue, fps } = useSzene();
  const f0 = cue(d.satzDenken) + 6, f1 = cue(d.satzLoesung);
  const rest = Math.max(0, Math.min(1, 1 - (frame - f0) / Math.max(1, f1 - f0)));
  const los = rein(d.satzLoesung, 0, 120);
  const ring = rein(d.satzDenken, 0, 90);
  const sek = Math.max(0, Math.ceil((rest * (f1 - f0)) / fps));
  const erk = rein(d.erklaerung.satz);
  const stempel = d.stempel ? rein(d.stempel.satz, 0, 170) : 0;
  const R = 105, U = 2 * Math.PI * R;
  const ticks = Math.floor((f1 - f0) / fps);
  return (
    <div style={{ padding: '0 70px', display: 'flex', gap: 60, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={{ opacity: rein(0, 0, 90) }}><Pille farbe={F.gelb}>❓ Quiz</Pille></div>
        <h2 style={{ fontFamily: TITEL, fontSize: 50, lineHeight: 1.15, margin: '18px 0 24px', opacity: rein(0, 6), transform: `translateY(${(1 - rein(0, 6)) * 30}px)` }}>{d.frage}</h2>
        {d.optionen.map((o: string, i: number) => {
          const p = rein(0, 18 + i * 9), ok = i === d.richtig;
          const aufgeloest = los > 0.02;
          return (
            <div key={i} style={{
              position: 'relative', display: 'flex', alignItems: 'center', gap: 24, padding: '13px 26px', marginBottom: 13, borderRadius: 20,
              background: ok ? `rgba(34,197,94,${0.2 * los})` : 'rgba(255,255,255,0.05)',
              border: `2px solid ${aufgeloest ? (ok ? F.gruen : 'rgba(244,63,94,0.45)') : F.linie}`,
              opacity: p * (ok ? 1 : 1 - 0.45 * los), transform: `translateX(${(1 - p) * 60}px) scale(${ok ? 1 + 0.03 * los : 1})`,
              boxShadow: ok && aufgeloest ? `0 0 40px ${F.gruen}55` : 'none',
            }}>
              <div style={{ width: 52, height: 52, flex: 'none', borderRadius: 14, background: ok && aufgeloest ? F.gruen : 'rgba(255,255,255,0.1)', color: ok && aufgeloest ? F.grund : F.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 900 }}>
                {los > 0.5 ? (ok ? '✓' : '✗') : 'ABC'[i]}
              </div>
              <div style={{ fontSize: 34, fontWeight: 650 }}>{o}</div>
              {d.stempel && d.stempel.index === i && stempel > 0.01 && (
                <div style={{ position: 'absolute', right: 26, top: '50%', transform: `translateY(-50%) rotate(-9deg) scale(${2.2 - 1.2 * stempel})`, opacity: stempel, border: `4px solid ${F.rot}`, color: F.rot, padding: '4px 18px', borderRadius: 12, fontWeight: 900, fontSize: 28, textTransform: 'uppercase', letterSpacing: 2, background: 'rgba(10,15,31,0.85)' }}>{d.stempel.text}</div>
              )}
            </div>
          );
        })}
        <div style={{ marginTop: 10, opacity: erk, transform: `translateY(${(1 - erk) * 20}px)` }}><Pille farbe={F.blau}>{d.erklaerung.text}</Pille></div>
      </div>
      <div style={{ width: 300, height: 300, marginTop: 110, position: 'relative', flex: 'none', opacity: ring, transform: `scale(${0.6 + 0.4 * ring})` }}>
        <svg width={300} height={300} viewBox="0 0 300 300" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={150} cy={150} r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={22} />
          <circle cx={150} cy={150} r={R} fill="none" stroke={los > 0.02 ? F.gruen : rest < 0.35 ? F.rot : akzent} strokeWidth={22} strokeLinecap="round"
            strokeDasharray={`${U * (los > 0.02 ? 1 : rest)} ${U}`} />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: TITEL, fontWeight: 700, fontSize: los > 0.02 ? 120 : 110, color: los > 0.02 ? F.gruen : F.text, transform: `scale(${los > 0.02 ? interpolate(los, [0, 0.6, 1], [0.4, 1.2, 1]) : 1 + 0.08 * Math.max(0, 1 - ((frame - f0) % fps) / 8)})` }}>
          {los > 0.02 ? '✓' : frame < f0 ? '?' : sek}
        </div>
      </div>
      {Array.from({ length: ticks }, (_, k) => (
        <Sequence key={k} from={f0 + k * fps} durationInFrames={fps} layout="none"><Audio src={staticFile('klang/tick.wav')} volume={0.22} /></Sequence>
      ))}
      <Sequence from={f1} layout="none"><Audio src={staticFile('klang/richtig.wav')} volume={0.35} /></Sequence>
    </div>
  );
};

export const PREMIUM: Record<string, React.FC<{ d: D }>> = {
  intro: Intro, kapitel: Kapitel, vergleich: Vergleich, kreis: Kreis, verteilung: Verteilung, quiz: Quiz,
};
