#!/usr/bin/env python3
"""Vertont die Übungsaufgaben aus tools/aufgaben_quelle.txt für die Aufgaben-Videos.

Aufruf:  python3 tools/make_tasks.py <arbeitsordner> <stimme.onnx>
Ergebnis: audio/<id>-f.m4a (Frage), audio/<id>-l.m4a (Lösung), audio/richtig.m4a, audio/falsch.m4a
          und js/aufgaben.js mit Texten, Grafikdaten und Zeitmarken.
"""
import hashlib, json, os, re, subprocess, sys, wave

HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HIER)
sys.path.insert(0, HIER)
from make_videos import sprich, saetze, lade_daten, dauer  # noqa: E402

PAUSE = 0.3
EINHEIT_SPRECH = {'€': 'Euro', 'VE': 'Vieheinheiten', '%': 'Prozent'}


def zahl_de(x):
    if abs(x - round(x)) < 1e-9:
        return '{:,.0f}'.format(x).replace(',', '.')
    return '{:,.2f}'.format(x).replace(',', 'X').replace('.', ',').replace('X', '.')


def lies_quelle():
    aufgaben, akt = [], None
    for roh in open(os.path.join(HIER, 'aufgaben_quelle.txt'), encoding='utf8'):
        z = roh.strip()
        if not z or z.startswith('#'):
            continue
        if z.startswith('@'):
            lf, thema = [x.strip() for x in z[1:].split('|', 1)]
            akt = {'lf': lf, 'thema': thema, 'd': [], 's': [], 'r': []}
            aufgaben.append(akt)
            continue
        art, inhalt = z[0], z[2:].strip()
        if art == 'F':
            akt['f'] = inhalt
        elif art == 'D':
            akt['d'] = [[y.strip() for y in x.split('=', 1)] for x in inhalt.split(';')]
        elif art == 'A':
            if inhalt.startswith('wahl:'):
                opts = [x.strip() for x in inhalt[5:].split('|')]
                akt['typ'] = 'wahl'
                akt['a'] = [i for i, o in enumerate(opts) if o.startswith('*')][0]
                akt['o'] = [o.lstrip('*') for o in opts]
            else:
                m = re.match(r'^(-?[\d.,]+)\s*(.*)$', inhalt)
                akt['typ'] = 'zahl'
                akt['a'] = float(m.group(1).replace(',', '.'))
                akt['e'] = m.group(2).strip()
        elif art == 'S':
            teile = inhalt.split('|', 1)
            schritt = {'t': teile[0].strip()}
            if len(teile) > 1:
                lv = [x.strip() for x in teile[1].rsplit('=', 1)]
                schritt['l'], schritt['v'] = (lv + [''])[:2]
            akt['s'].append(schritt)
        elif art == 'R':
            akt['r'] = [x.strip() for x in inhalt.split(';')]
    return aufgaben


def main(arbeit, stimme):
    from piper import PiperVoice
    voice = PiperVoice.load(stimme)
    os.makedirs(os.path.join(arbeit, 'ton'), exist_ok=True)
    ziel = os.path.join(APP, 'audio')
    os.makedirs(ziel, exist_ok=True)

    def ton(text):
        pfad = os.path.join(arbeit, 'ton', hashlib.sha1(text.encode()).hexdigest()[:16] + '.wav')
        if not os.path.exists(pfad):
            with wave.open(pfad, 'wb') as w:
                voice.synthesize_wav(text, w)
        return pfad

    def schreibe(name, teile):
        """teile: [(wav, pause_danach)] -> m4a; gibt Startzeiten und Gesamtdauer zurück."""
        roh = os.path.join(arbeit, name + '.wav')
        starts, t = [], 0.0
        with wave.open(roh, 'wb') as aus:
            aus.setnchannels(1); aus.setsampwidth(2); aus.setframerate(22050)
            for pfad, pause in teile:
                starts.append(round(t, 2))
                with wave.open(pfad) as w:
                    aus.writeframes(w.readframes(w.getnframes()))
                    t += w.getnframes() / w.getframerate()
                aus.writeframes(b'\x00\x00' * int(pause * 22050))
                t += pause
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', roh, '-c:a', 'aac', '-b:a', '48k', '-ar', '44100', '-ac', '1',
                        '-movflags', '+faststart', os.path.join(ziel, name + '.m4a')], check=True)
        return starts, round(t, 2)

    # Themen den Paragrafen-Gruppen zuordnen (damit App und Suche dieselben Namen nutzen)
    gruppen = {}
    for lf in lade_daten()['lernfelder']:
        for p in lf.get('paragrafen', []):
            gruppen.setdefault(lf['id'], [])
            if p['gruppe'] not in gruppen[lf['id']]:
                gruppen[lf['id']].append(p['gruppe'])

    schreibe('richtig', [(ton('Richtig! Sehr gut.'), 0.25)])
    schreibe('falsch', [(ton('Das ist leider nicht richtig. Schauen wir uns die Lösung an.'), 0.25)])

    aus, zaehler = [], {}
    for a in lies_quelle():
        passend = [g for g in gruppen[a['lf']] if g.startswith(a['thema'])]
        assert len(passend) == 1, (a['lf'], a['thema'], passend)
        a['thema'] = passend[0]
        zaehler[a['lf']] = zaehler.get(a['lf'], 0) + 1
        a['id'] = '%s-a%02d' % (a['lf'], zaehler[a['lf']])

        # Frage: Wörter mit Zeitmarken für die mitlaufende Hervorhebung
        teile, zeiten, t = [], [], 0.0
        for satz in saetze(a['f']):
            w = ton(sprich(satz)); d = dauer(w)
            ws = satz.split(); gesamt = sum(len(x) + 1 for x in ws); start = t
            for x in ws:
                zeiten.append(round(start, 2)); start += d * (len(x) + 1) / gesamt
            teile.append((w, PAUSE)); t += d + PAUSE
        teile.append((ton('Denk kurz nach und wähle deine Antwort.' if a['typ'] == 'wahl' else 'Denk kurz nach und gib deine Antwort ein.'), 0.2))
        _, a['df'] = schreibe(a['id'] + '-f', teile)
        a['wz'] = zeiten
        a['zf'] = round(t, 2)  # hier endet die eigentliche Frage

        # Lösung: Schritte, richtige Antwort, Paragrafen
        if a['typ'] == 'wahl':
            antwort = a['o'][a['a']]
            antwort_sprech = antwort
        else:
            antwort = (zahl_de(a['a']) + ' ' + a['e']).strip()
            antwort_sprech = (zahl_de(a['a']) + ' ' + EINHEIT_SPRECH.get(a['e'], a['e'])).strip()
        a['at'] = antwort
        teile = [(ton(sprich(s['t'])), 0.45) for s in a['s']]
        teile.append((ton(sprich('Die richtige Antwort ist: %s.' % antwort_sprech)), 0.4))
        refs = [sprich(re.sub(r' \(.*?\)$', '', r)) for r in a['r'][:2]]
        teile.append((ton('Wichtig dafür: %s.' % ' und '.join(refs)), 0.3))
        starts, a['dl'] = schreibe(a['id'] + '-l', teile)
        for s, z in zip(a['s'], starts):
            s['z'] = z
        a['za'], a['zr'] = starts[-2], starts[-1]
        aus.append(a)
        print('%-9s %5.1fs + %5.1fs  %s' % (a['id'], a['df'], a['dl'], a['thema'][:40]))

    with open(os.path.join(APP, 'js', 'aufgaben.js'), 'w', encoding='utf8') as f:
        f.write('/* Übungsaufgaben mit Zeitmarken – erzeugt von tools/make_tasks.py aus tools/aufgaben_quelle.txt. */\nwindow.LERN_AUFGABEN = '
                + json.dumps(aus, ensure_ascii=False, separators=(',', ':')).replace('},{"lf"', '},\n{"lf"') + ';\n')
    groesse = sum(os.path.getsize(os.path.join(ziel, x)) for x in os.listdir(ziel))
    print(len(aus), 'Aufgaben,', round(sum(a['df'] + a['dl'] for a in aus) / 60, 1), 'Minuten Ton,', round(groesse / 1e6, 1), 'MB')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
