#!/usr/bin/env python3
"""Vertont ein Drehbuch (skripte/<name>.json) satzweise mit Piper und schreibt die Zeitleiste für Remotion.

Aufruf:  python3 ton.py skripte/anschaffungskosten.json <stimme.onnx> [<cache-ordner>]
Ergebnis: public/<id>/sNN.wav (eine Tonspur je Szene) und src/daten/aktuell.json (Drehbuch + Zeitmarken).
Jeder Satz bekommt eine Startzeit; die Grafiken einer Szene erscheinen genau dann, wenn ihr Satz beginnt.
"""
import hashlib, json, os, sys, wave

HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HIER, '..'))
from make_videos import sprich  # noqa: E402  gleiche Ausspracheregeln wie die übrigen Videos

VOR = 0.6       # Stille am Szenenanfang (Grafik baut sich auf)
PAUSE = 0.45    # zwischen zwei Sätzen
NACH = 0.9      # am Szenenende
RATE = 22050


def main(skript, stimme, cache=None):
    from piper import PiperVoice
    voice = PiperVoice.load(stimme)
    d = json.load(open(skript, encoding='utf8'))
    cache = cache or os.path.join(HIER, '.cache')
    os.makedirs(cache, exist_ok=True)
    ziel = os.path.join(HIER, 'public', d['id'])
    os.makedirs(ziel, exist_ok=True)

    def ton(text):
        pfad = os.path.join(cache, hashlib.sha1(text.encode()).hexdigest()[:16] + '.wav')
        if not os.path.exists(pfad):
            with wave.open(pfad, 'wb') as w:
                voice.synthesize_wav(text, w)
        return pfad

    gesamt = 0.0
    for n, sz in enumerate(d['szenen']):
        datei = 's%02d.wav' % (n + 1)
        starts, t = [], VOR
        with wave.open(os.path.join(ziel, datei), 'wb') as aus:
            aus.setnchannels(1); aus.setsampwidth(2); aus.setframerate(RATE)
            aus.writeframes(b'\x00\x00' * int(VOR * RATE))
            for i, satz in enumerate(sz['saetze']):
                with wave.open(ton(sprich(satz))) as w:
                    dauer = w.getnframes() / w.getframerate()
                    starts.append({'start': round(t, 3), 'dauer': round(dauer, 3)})
                    aus.writeframes(w.readframes(w.getnframes()))
                t += dauer
                pause = PAUSE if i < len(sz['saetze']) - 1 else NACH
                aus.writeframes(b'\x00\x00' * int(pause * RATE))
                t += pause
        sz['ton'] = d['id'] + '/' + datei
        sz['zeiten'] = starts
        sz['dauer'] = round(t, 3)
        gesamt += t
        print('Szene %2d %-11s %5.1f s  %d Sätze' % (n + 1, sz['typ'], t, len(sz['saetze'])))
    d['dauer'] = round(gesamt, 3)
    os.makedirs(os.path.join(HIER, 'src', 'daten'), exist_ok=True)
    json.dump(d, open(os.path.join(HIER, 'src', 'daten', 'aktuell.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
    print('Gesamt: %d:%02d min' % (gesamt // 60, gesamt % 60))


if __name__ == '__main__':
    main(*sys.argv[1:])
