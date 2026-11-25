#!/usr/bin/env python3
"""Erzeugt Musik und Soundeffekte für Premium-Videos selbst (keine fremden Dateien, keine Lizenzfragen).

Aufruf:  python3 klang.py <video-id>
Liest die Länge aus src/daten/<id>.json und schreibt
  public/<id>/musik.wav        ruhiger Klangteppich (Am – F – C – G) mit sanftem Arpeggio
  public/klang/whoosh.wav      Szenenwechsel
  public/klang/kapitel.wav     Kapitelkarte (tiefer Schlag + Wusch)
  public/klang/tick.wav        Countdown beim Quiz
  public/klang/richtig.wav     Auflösung / Probe
Im Drehbuch: "stil": "premium" und "musik": "<id>/musik.wav".
"""
import json, os, sys, wave
import numpy as np

HIER = os.path.dirname(os.path.abspath(__file__))
SR = 32000


def schreibe(pfad, x):
    os.makedirs(os.path.dirname(pfad), exist_ok=True)
    x = np.clip(x, -1, 1)
    with wave.open(pfad, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((x * 32767).astype(np.int16).tobytes())


def tiefpass(x, a):
    """Einpoliger Tiefpass; a darf ein Array sein (zeitlich veränderlich)."""
    y = np.empty_like(x); v = 0.0
    a = np.broadcast_to(a, x.shape)
    for i in range(len(x)):
        v += a[i] * (x[i] - v); y[i] = v
    return y


def ton(freq, dauer, abkling=3.0, obert=0.25):
    t = np.arange(int(dauer * SR)) / SR
    return (np.sin(2 * np.pi * freq * t) + obert * np.sin(4 * np.pi * freq * t)) * np.exp(-abkling * t)


def musik(sekunden):
    rng = np.random.default_rng(7)
    akkorde = [  # Am, F, C, G – je 4 Sekunden
        [110.0, 130.81, 164.81, 220.0], [87.31, 110.0, 130.81, 174.61],
        [130.81, 164.81, 196.0, 261.63], [98.0, 123.47, 146.83, 196.0],
    ]
    takt = 4.0
    n = int(sekunden * SR)
    t = np.arange(n) / SR
    pad = np.zeros(n)
    for k in range(int(sekunden // takt) + 2):
        tone = akkorde[k % 4]
        start = int((k * takt - 0.8) * SR)
        laenge = int((takt + 1.6) * SR)
        s0, s1 = max(0, start), min(n, start + laenge)
        if s1 <= s0:
            continue
        tt = (np.arange(s0, s1) - start) / SR
        huelle = np.sin(np.pi * np.clip(tt / (takt + 1.6), 0, 1)) ** 1.5
        stimme = np.zeros(s1 - s0)
        for f in tone:
            for verstimmt in (1.0, 1.003, 0.997):
                stimme += np.sin(2 * np.pi * f * verstimmt * t[s0:s1] + rng.uniform(0, 6.28))
        pad[s0:s1] += stimme * huelle / 12
        # Arpeggio eine Oktave höher, Achtel im Abstand von 0,5 s, sehr leise
        for j, f in enumerate([tone[0] * 2, tone[2] * 2, tone[3] * 2, tone[1] * 4, tone[3] * 2, tone[2] * 2, tone[0] * 4, tone[2] * 2]):
            a = int((k * takt + j * 0.5) * SR)
            if a >= n:
                break
            nt = ton(f, 1.2, abkling=4.0, obert=0.1)[: n - a]
            pad[a:a + len(nt)] += nt * 0.045
    sub = np.zeros(n)
    for k in range(int(sekunden // takt) + 1):
        a = int(k * takt * SR)
        nt = ton(akkorde[k % 4][0] / 2, takt, abkling=0.6, obert=0)[: max(0, n - a)]
        sub[a:a + len(nt)] += nt * 0.18
    x = tiefpass(pad, 0.18) + sub
    return x / np.max(np.abs(x)) * 0.6


def whoosh(dauer=0.75, hoch=0.32):
    rng = np.random.default_rng(1)
    m = int(dauer * SR); u = np.linspace(0, 1, m)
    rauschen = rng.normal(0, 1, m)
    a = 0.015 + hoch * np.sin(np.pi * u) ** 2
    x = tiefpass(rauschen, a) - tiefpass(rauschen, a * 0.15)
    x *= np.sin(np.pi * u) ** 2
    return x / np.max(np.abs(x)) * 0.8


def main(vid):
    d = json.load(open(os.path.join(HIER, 'src', 'daten', vid + '.json'), encoding='utf8'))
    schreibe(os.path.join(HIER, 'public', vid, 'musik.wav'), musik(d['dauer'] + 2))
    schreibe(os.path.join(HIER, 'public', 'klang', 'whoosh.wav'), whoosh())
    schlag = ton(55, 1.2, abkling=4.5, obert=0.5) * 0.9
    w = whoosh(1.0, 0.25) * 0.6
    k = np.zeros(int(1.3 * SR)); k[:len(schlag)] += schlag; k[:len(w)] += w
    schreibe(os.path.join(HIER, 'public', 'klang', 'kapitel.wav'), k / np.max(np.abs(k)) * 0.85)
    schreibe(os.path.join(HIER, 'public', 'klang', 'tick.wav'), np.concatenate([ton(1500, 0.06, abkling=60, obert=0.3) * 0.7, np.zeros(int(0.1 * SR))]))
    r = np.zeros(int(0.9 * SR))
    for verz, f in ((0.0, 1046.5), (0.11, 1568.0)):
        nt = ton(f, 0.8 - verz, abkling=5.0, obert=0.2); a = int(verz * SR); r[a:a + len(nt)] += nt
    schreibe(os.path.join(HIER, 'public', 'klang', 'richtig.wav'), r / np.max(np.abs(r)) * 0.8)
    print('Klang erzeugt für', vid, '(%.0f s Musik)' % (d['dauer'] + 2))


if __name__ == '__main__':
    main(sys.argv[1])
