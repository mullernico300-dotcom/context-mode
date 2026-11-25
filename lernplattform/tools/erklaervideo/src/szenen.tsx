import React from 'react';
import { interpolate } from 'remotion';
import { F, TITEL, Karte, Ueberschrift, Pille, Zaehler, useSzene, eur } from './basis';
import { PREMIUM } from './premium';

/* eslint-disable @typescript-eslint/no-explicit-any */
type D = any;

/* 1 · Titel mit Preisschild */
export const Titel: React.FC<{ d: D }> = ({ d }) => {
  const { rein, frame, akzent } = useSzene();
  const a = rein(0, 0, 90), b = rein(0, 8, 90), c = rein(0, 16, 90);
  const schild = rein(0, 24, 70), frage = rein(1), unterstrich = rein(2);
  const schweben = Math.sin(frame / 22) * 8;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 40px' }}>
      <div style={{ maxWidth: 1080, flex: 'none' }}>
        <div style={{ opacity: a, transform: `translateY(${(1 - a) * 30}px)` }}><Pille farbe={akzent}>{d.kicker}</Pille></div>
        <h1 style={{ fontFamily: TITEL, fontSize: 116, lineHeight: 1, margin: '30px 0 24px', letterSpacing: -3, opacity: b, transform: `translateY(${(1 - b) * 50}px)` }}>
          {d.titel}
          <div style={{ height: 12, borderRadius: 6, marginTop: 14, width: `${unterstrich * 100}%`, background: `linear-gradient(90deg, ${akzent}, ${F.blau})` }} />
        </h1>
        <p style={{ fontSize: 40, color: F.leise, margin: 0, lineHeight: 1.3, maxWidth: 1000, opacity: c, transform: `translateY(${(1 - c) * 30}px)` }}>{d.untertitel}</p>
      </div>
      <div style={{ position: 'relative', transform: `translateY(${schweben}px) rotate(${-8 + (1 - schild) * 30}deg) scale(${0.6 + schild * 0.4})`, opacity: schild }}>
        <Karte leuchten={F.gelb} style={{ padding: '40px 56px', textAlign: 'center' }}>
          <div style={{ fontSize: 34, color: F.leise, fontWeight: 600 }}>{d.preisLabel || 'Maschine'}</div>
          <div style={{ fontFamily: TITEL, fontSize: 100, fontWeight: 700, color: F.gelb, whiteSpace: 'nowrap' }}>{d.preis}</div>
        </Karte>
        <div style={{
          position: 'absolute', right: -40, top: -50, width: 130, height: 130, borderRadius: 99, background: F.rot,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 90, fontWeight: 800,
          transform: `scale(${frage})`, boxShadow: `0 10px 40px ${F.rot}88`,
        }}>?</div>
      </div>
    </div>
  );
};

/* 2 · Schema als Rechenzeilen */
export const Formel: React.FC<{ d: D }> = ({ d }) => {
  const { rein, akzent } = useSzene();
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} zusatz={<span style={{ marginLeft: 'auto', opacity: rein(0, 12) }}><Pille farbe={F.blau}>{d.ref}</Pille></span>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {d.zeilen.map((z: D, k: number) => {
          const p = rein(k + 1);
          const erg = z.ergebnis;
          const farbe = z.zeichen === '−' ? F.rot : z.zeichen === '+' ? F.blau : erg ? akzent : F.text;
          return (
            <div key={k} style={{ opacity: p, transform: `translateX(${(1 - p) * -120}px)`, marginTop: erg ? 8 : 0 }}>
              <Karte leuchten={erg ? akzent : undefined} style={{ display: 'flex', alignItems: 'center', gap: 30, padding: '13px 36px', background: erg ? akzent + '22' : undefined }}>
                <div style={{ width: 70, fontFamily: TITEL, fontSize: 54, fontWeight: 700, color: farbe, textAlign: 'center' }}>{z.zeichen}</div>
                <div style={{ fontSize: erg ? 48 : 42, fontWeight: erg ? 800 : 650 }}>{z.text}</div>
                <div style={{ marginLeft: 'auto', fontSize: 30, color: F.leise }}>{z.info}</div>
              </Karte>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* 3 · Karten in „gehört dazu“ / „gehört nicht dazu“ sortieren */
export const Sortieren: React.FC<{ d: D }> = ({ d }) => {
  const { rein, frame, cue } = useSzene();
  const spalte = (ja: boolean) => d.karten.filter((k: D) => k.ja === ja);
  const kopf = rein(0, 10);
  const Liste = ({ ja }: { ja: boolean }) => {
    const farbe = ja ? F.gruen : F.rot;
    return (
      <Karte leuchten={farbe + '88'} style={{ flex: 1, padding: '26px 30px', minHeight: 520, opacity: kopf, transform: `translateY(${(1 - kopf) * 40}px)` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
          <div style={{ width: 62, height: 62, borderRadius: 99, background: farbe, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 900, color: F.grund }}>{ja ? '✓' : '✕'}</div>
          <div style={{ fontFamily: TITEL, fontSize: 46, fontWeight: 700, color: farbe }}>{ja ? d.ja : d.nein}</div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {spalte(ja).map((k: D, i: number) => {
            const p = rein(k.satz, i * 7, 140);
            const wackeln = frame - cue(k.satz) - i * 7 < 18 ? Math.sin((frame - cue(k.satz)) / 2) * (1 - p) * 10 : 0;
            return (
              <div key={k.text} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '11px 22px', borderRadius: 16,
                background: farbe + '1f', border: `1.5px solid ${farbe}55`, fontSize: 34, fontWeight: 650,
                opacity: p, transform: `translateY(${(1 - p) * -80}px) scale(${0.7 + 0.3 * p}) rotate(${wackeln}deg)`,
                textDecoration: !ja && k.text === 'Vorsteuer' ? 'none' : undefined,
              }}>
                <span style={{ fontSize: 38 }}>{k.icon}</span>{k.text}
              </div>
            );
          })}
        </div>
      </Karte>
    );
  };
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'flex', gap: 40 }}>
        <Liste ja={true} />
        <Liste ja={false} />
      </div>
    </div>
  );
};

/* 4 · Zeitstrahl Rechnung → Zahlung */
export const Zeitstrahl: React.FC<{ d: D }> = ({ d }) => {
  const { linear, rein, akzent } = useSzene();
  const strich = linear(0, 40, 10);
  const merke = rein(3);
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ position: 'relative', height: 500 }}>
        <div style={{ position: 'absolute', top: 318, left: 0, height: 10, borderRadius: 5, width: `${strich * 100}%`, background: `linear-gradient(90deg, ${F.blau}, ${akzent})` }} />
        <div style={{ position: 'absolute', top: 294, right: 0, fontSize: 60, color: akzent, opacity: strich }}>➜</div>
        {d.punkte.map((pt: D, i: number) => {
          const p = rein(pt.satz);
          const x = i === 0 ? '18%' : '66%';
          const farbe = i === 0 ? F.blau : F.gelb;
          return (
            <div key={i} style={{ position: 'absolute', left: x, top: 0, width: 700, transform: 'translateX(-50%)' }}>
              <Karte leuchten={farbe} style={{ padding: '22px 30px', height: 262, boxSizing: 'border-box', opacity: p, transform: `translateY(${(1 - p) * -40}px)` }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <span style={{ fontFamily: TITEL, fontSize: 52, fontWeight: 700, color: farbe }}>{pt.titel}</span>
                  <span style={{ fontSize: 28, color: F.leise }}>{pt.text}</span>
                </div>
                <div style={{ fontSize: 31, marginTop: 10, fontWeight: 600, lineHeight: 1.25 }}>→ {pt.folge}</div>
                {pt.ref ? <div style={{ marginTop: 12 }}><Pille farbe={F.blau} style={{ fontSize: 24, padding: '6px 16px' }}>{pt.ref}</Pille></div> : null}
              </Karte>
              <div style={{ margin: '34px auto 0', width: 46, height: 46, borderRadius: 99, background: farbe, transform: `scale(${p})`, boxShadow: `0 0 30px ${farbe}` }} />
              <div style={{ textAlign: 'center', marginTop: 18, fontSize: 38, fontWeight: 700, color: farbe, opacity: p }}>{pt.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ opacity: merke, transform: `scale(${0.85 + 0.15 * merke})`, display: 'flex', justifyContent: 'center' }}>
        <Karte leuchten={akzent} style={{ padding: '20px 40px', fontSize: 40, fontWeight: 700 }}>💡 {d.merke ? d.merke : <>Skonto immer vom Preis <u>nach</u> Rabatt rechnen</>}</Karte>
      </div>
    </div>
  );
};

/* 5 · Wasserfall-Diagramm mit Beispielrechnung */
export const Wasserfall: React.FC<{ d: D }> = ({ d }) => {
  const { rein, akzent } = useSzene();
  const sv = rein(0);
  const max = Math.max(...d.balken.map((b: D) => Math.abs(b.wert))), hoehe = 440;
  let stand = 0;
  const balken = d.balken.map((b: D) => {
    let unten = 0, oben = 0;
    if (b.art === 'minus') { oben = stand; unten = stand + b.wert; stand = unten; }
    else if (b.art === 'plus') { unten = stand; oben = stand + b.wert; stand = oben; }
    else { unten = 0; oben = b.wert; stand = b.wert; }
    return { ...b, unten, oben };
  });
  const notiz = rein(d.notiz.satz);
  return (
    <div style={{ padding: '0 80px', display: 'flex', gap: 50 }}>
      <div style={{ width: 560 }}>
        <Ueberschrift text={d.kurzTitel || 'Beispiel'} />
        <Karte style={{ padding: 30, fontSize: d.sachverhalt.length > 160 ? 30 : 36, lineHeight: 1.42, opacity: sv, transform: `translateY(${(1 - sv) * 30}px)` }}>{d.sachverhalt}</Karte>
        <div style={{ marginTop: 30, opacity: notiz, transform: `translateY(${(1 - notiz) * 30}px)` }}>
          <Karte leuchten={F.blau} style={{ padding: '18px 26px', fontSize: 30, fontWeight: 650 }}>🧾 {d.notiz.text}</Karte>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 26, height: hoehe + 170, paddingTop: 40 }}>
        {balken.map((b: D, i: number) => {
          const p = rein(b.satz, b.art === 'zwischen' ? 24 : 0, 90);
          const farbe = b.art === 'minus' ? F.rot : b.art === 'plus' ? F.gelb : b.art === 'ergebnis' ? akzent : b.art === 'zwischen' ? F.blau : F.lila;
          const h = ((b.oben - b.unten) / max) * hoehe;
          const sichtH = Math.max(6, h * p);
          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', opacity: Math.min(1, p * 2) }}>
              <div style={{ position: 'relative', height: hoehe + 70 }}>
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: (b.unten / max) * hoehe + (b.art === 'minus' ? h - sichtH : 0), height: sichtH,
                  borderRadius: 14, background: `linear-gradient(180deg, ${farbe}, ${farbe}99)`,
                  boxShadow: b.art === 'ergebnis' ? `0 0 50px ${farbe}aa` : 'none',
                }} />
                <div style={{
                  position: 'absolute', left: -40, right: -40, textAlign: 'center', bottom: (b.oben / max) * hoehe + 14, whiteSpace: 'nowrap',
                  fontFamily: TITEL, fontSize: (b.art === 'ergebnis' ? 46 : 38) * (balken.length > 5 ? 0.78 : 1), fontWeight: 700, color: farbe,
                }}>
                  {b.art === 'minus' ? '−' : b.art === 'plus' ? '+' : ''}<Zaehler wert={Math.abs(b.wert)} p={p} nk={d.nk || 0} />
                </div>
              </div>
              <div style={{ textAlign: 'center', fontSize: 28, color: b.art === 'ergebnis' ? F.text : F.leise, fontWeight: b.art === 'ergebnis' ? 800 : 600, marginTop: 18, height: 76 }}>{b.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* 6 · Buchungssätze mit Soll und Haben */
export const Buchung: React.FC<{ d: D }> = ({ d }) => {
  const { rein, frame, cue, akzent } = useSzene();
  const fazit = rein(d.fazit.satz);
  const markiert = frame >= cue(3) && frame < cue(4);
  const puls = markiert ? 0.5 + 0.5 * Math.sin((frame - cue(3)) / 5) : 0;
  const Zeile = ({ konto, betrag, p, glanz }: { konto: string; betrag: string; p: number; glanz?: boolean }) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', gap: 20, fontSize: 34, padding: '6px 18px', borderRadius: 14,
      opacity: p, transform: `translateX(${(1 - p) * 40}px)`,
      background: glanz ? `rgba(251,191,36,${0.12 + puls * 0.25})` : 'transparent',
    }}>
      <span style={{ fontWeight: 650 }}>{konto}</span>
      <span style={{ fontFamily: TITEL, fontWeight: 700, color: F.gelb }}>{betrag}</span>
    </div>
  );
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {d.buchungen.map((b: D, i: number) => {
          const p = rein(b.satz);
          return (
            <Karte key={i} style={{ padding: '18px 34px', opacity: p, transform: `translateY(${(1 - p) * 50}px)` }}>
              <div style={{ fontSize: 26, color: F.leise, fontWeight: 700, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 2 }}>{i + 1}. {b.titel}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px 1fr', alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 24, color: F.blau, fontWeight: 800, marginLeft: 18 }}>SOLL</div>
                  {b.soll.map((z: string[], k: number) => <Zeile key={k} konto={z[0]} betrag={z[1]} p={rein(b.satz, 10 + k * 8)} />)}
                </div>
                <div style={{ textAlign: 'center', fontFamily: TITEL, fontSize: 40, fontWeight: 700, color: akzent, opacity: rein(b.satz, 18), paddingTop: 34 }}>an</div>
                <div>
                  <div style={{ fontSize: 24, color: F.rot, fontWeight: 800, marginLeft: 18 }}>HABEN</div>
                  {b.haben.map((z: string[], k: number) => <Zeile key={k} konto={z[0]} betrag={z[1]} p={rein(b.satz, 26 + k * 10)} glanz={i === 1 && k > 0} />)}
                </div>
              </div>
            </Karte>
          );
        })}
      </div>
      <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center', opacity: fazit, transform: `scale(${0.85 + 0.15 * fazit})` }}>
        <Pille farbe={akzent} style={{ fontSize: 34, padding: '12px 30px' }}>✓ {d.fazit.text}</Pille>
      </div>
    </div>
  );
};

/* 7 · Quittungs-Stapel (Grundstück) */
export const Stapel: React.FC<{ d: D }> = ({ d }) => {
  const { rein, linear, akzent } = useSzene();
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
      <div style={{ width: 420, fontSize: 230, textAlign: 'center', opacity: rein(0, 10), transform: `scale(${0.6 + 0.4 * rein(0, 10)})` }}>{d.icon || '🏡'}</div>
      <Karte style={{ flex: 1, padding: '14px 44px 20px' }}>
        {d.zeilen.map((z: D, i: number) => {
          const p = rein(z.satz, (i % 2) * 14);
          const strich = z.raus ? linear(z.satz, 18, 26) : 0;
          return (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: z.ergebnis ? 46 : 38,
              padding: z.ergebnis ? '18px 0 4px' : '11px 0', borderTop: z.ergebnis ? `3px solid ${akzent}` : `1px dashed ${F.linie}`,
              marginTop: z.ergebnis ? 14 : 0, opacity: p, transform: `translateY(${(1 - p) * 20}px)`, position: 'relative',
              color: z.raus ? F.leise : F.text, fontWeight: z.ergebnis ? 800 : 600,
            }}>
              <span>{z.text}</span>
              <span style={{ fontFamily: TITEL, fontWeight: 700, color: z.raus ? F.rot : z.ergebnis ? akzent : F.gelb }}>{z.wert}</span>
              {z.raus ? <div style={{ position: 'absolute', left: 0, top: '50%', height: 5, borderRadius: 3, background: F.rot, width: `${strich * 62}%` }} /> : null}
            </div>
          );
        })}
      </Karte>
      </div>
    </div>
  );
};

/* 8 · Grenze für geringwertige Wirtschaftsgüter als Balken */
export const Grenze: React.FC<{ d: D }> = ({ d }) => {
  const { rein, frame, cue, akzent } = useSzene();
  const breite = 1500;
  const skala = rein(0, 8);
  let summe = 0;
  const teile = d.teile.map((t: D) => { const s = { ...t, von: summe }; summe += t.wert; return s; });
  const p2 = d.teile[1] ? rein(d.teile[1].satz, 10) : 1;
  const ueber = p2 > 0.5 && summe > d.grenze;
  const erg = rein(d.ergebnis.satz, 34);
  const wackel = ueber && frame - cue(2) < 60 ? Math.sin(frame / 1.6) * 4 * (1 - erg) : 0;
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} zusatz={<span style={{ marginLeft: 'auto', opacity: skala }}><Pille farbe={F.blau}>{d.ref}</Pille></span>} />
      <div style={{ position: 'relative', width: breite, margin: '120px auto 0', opacity: skala }}>
        <div style={{ height: 120, borderRadius: 24, background: 'rgba(255,255,255,0.07)', border: `1.5px solid ${F.linie}`, overflow: 'hidden', position: 'relative', transform: `translateX(${wackel}px)` }}>
          {teile.map((t: D, i: number) => {
            const p = rein(t.satz, i ? 10 : 0, 60);
            const farbe = i === 0 ? (ueber && !d.ergebnis.ok ? F.rot : akzent) : F.gelb;
            return <div key={i} style={{ position: 'absolute', top: 0, bottom: 0, left: (t.von / d.max) * breite, width: (t.wert / d.max) * breite * p, background: `linear-gradient(90deg, ${farbe}cc, ${farbe})` }} />;
          })}
        </div>
        <div style={{ position: 'absolute', left: (d.grenze / d.max) * breite - 3, top: -70, bottom: -70, width: 6, borderRadius: 3, background: F.text, boxShadow: `0 0 20px ${F.text}` }} />
        <div style={{ position: 'absolute', left: (d.grenze / d.max) * breite - 400, top: -130, width: 800, textAlign: 'center', fontSize: 36, fontWeight: 800, whiteSpace: 'nowrap' }}>{d.grenzeLabel || 'Grenze ' + eur(d.grenze)}</div>
        {teile.map((t: D, i: number) => {
          const p = rein(t.satz, i ? 10 : 0);
          return <div key={i} style={{ position: 'absolute', top: 140 + i * 60, left: (t.von / d.max) * breite, fontSize: 34, fontWeight: 650, opacity: p, color: i ? F.gelb : F.text, whiteSpace: 'nowrap' }}>{i ? '+ ' : ''}{t.label}: {d.einheit ? t.wert.toLocaleString('de-DE') + ' ' + d.einheit : eur(t.wert)}</div>;
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 150, opacity: erg, transform: `scale(${0.8 + 0.2 * erg})` }}>
        <Pille farbe={d.ergebnis.ok ? akzent : F.rot} style={{ fontSize: 48, padding: '18px 40px' }}>{d.ergebnis.ok ? '✓' : '✕'} {d.ergebnis.text}</Pille>
      </div>
    </div>
  );
};

/* 9 · Typische Fallen */
export const Fallen: React.FC<{ d: D }> = ({ d }) => {
  const { rein, frame, cue } = useSzene();
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'flex', gap: 34 }}>
        {d.karten.map((k: D, i: number) => {
          const p = rein(k.satz, 0, 150);
          const schuetteln = frame - cue(k.satz) < 16 ? Math.sin((frame - cue(k.satz)) * 1.4) * 6 : 0;
          return (
            <Karte key={i} leuchten={F.rot} style={{ flex: 1, padding: '40px 36px', minHeight: 440, opacity: p, transform: `translateY(${(1 - p) * 80}px) rotate(${schuetteln}deg)` }}>
              <div style={{ fontSize: 90 }}>⚠️</div>
              <div style={{ fontFamily: TITEL, fontSize: 30, color: F.rot, fontWeight: 700, margin: '20px 0 8px' }}>FALLE {i + 1}</div>
              <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15 }}>{k.titel}</div>
              <div style={{ fontSize: 34, color: F.leise, marginTop: 18, lineHeight: 1.35 }}>{k.text}</div>
            </Karte>
          );
        })}
      </div>
    </div>
  );
};

/* 10 · Zusammenfassung mit Haken */
export const Merke: React.FC<{ d: D }> = ({ d }) => {
  const { rein, akzent } = useSzene();
  const aufruf = rein(2);
  return (
    <div style={{ padding: '0 80px' }}>
      <Ueberschrift text={d.ueberschrift} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {d.punkte.map((pt: D, i: number) => {
          const p = rein(pt.satz, (i % 2) * 22);
          return (
            <Karte key={i} style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '30px 34px', opacity: p, transform: `translateY(${(1 - p) * 40}px)` }}>
              <div style={{ width: 72, height: 72, flex: 'none', borderRadius: 99, background: akzent, color: F.grund, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 46, fontWeight: 900, transform: `scale(${interpolate(p, [0, 0.6, 1], [0, 1.25, 1])})` }}>✓</div>
              <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2 }}>{pt.text}</div>
            </Karte>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 54, opacity: aufruf, transform: `scale(${0.8 + 0.2 * aufruf})` }}>
        <div style={{ padding: '24px 50px', borderRadius: 999, background: `linear-gradient(90deg, ${akzent}, ${F.blau})`, color: F.grund, fontSize: 46, fontWeight: 900, boxShadow: `0 20px 60px ${akzent}66` }}>▶ {d.aufruf}</div>
      </div>
    </div>
  );
};

export const SZENEN: Record<string, React.FC<{ d: D }>> = {
  titel: Titel, formel: Formel, sortieren: Sortieren, zeitstrahl: Zeitstrahl, wasserfall: Wasserfall,
  buchung: Buchung, stapel: Stapel, grenze: Grenze, fallen: Fallen, merke: Merke,
  ...PREMIUM,
};
