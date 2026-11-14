#!/usr/bin/env python3
"""Erzeugt die Lernvideos (Hochformat, mit Sprecherstimme) aus den Paragrafen in js/data.js.

Ablauf:  python3 tools/make_videos.py plan  <arbeitsordner> <stimme.onnx>   -> Sprechtexte, Ton, plan.json
         node    tools/render_frames.cjs <arbeitsordner>                     -> Einzelbilder
         python3 tools/make_videos.py schnitt <arbeitsordner>               -> videos/*.mp4, *.jpg, js/videos.js

Braucht: pip install piper-tts, eine Piper-Stimme (z. B. de_DE-thorsten-high), ffmpeg, Playwright.
Jedes Video bleibt unter zwei Minuten; lange Themen werden in Teile aufgeteilt.
"""
import hashlib, json, math, os, re, subprocess, sys, wave

HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HIER)
MAX_SEK = 112          # Obergrenze für Szenen je Video (plus Vor- und Abspann < 120 s)
PAUSE_SATZ = 0.28
PAUSE_SZENE = 0.55
GRUPPE = 3             # so viele Wörter werden jeweils gemeinsam hervorgehoben

MONATE = 'Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember'
ORD = {1: 'ersten', 2: 'zweiten', 3: 'dritten', 7: 'siebten', 8: 'achten'}
ZAHL = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn',
        'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn']
ZEHNER = {20: 'zwanzig', 30: 'dreißig'}


def ordnung(n):
    if n in ORD: return ORD[n]
    if n < 20: return ZAHL[n] + 'ten'
    z, e = divmod(n, 10)
    return (ZAHL[e] + 'und' if e else '') + ZEHNER[z * 10] + 'sten'


GESETZE = [
    ('KSchG', 'Kündigungsschutzgesetz'), ('MuSchG', 'Mutterschutzgesetz'), ('BUrlG', 'Bundesurlaubsgesetz'),
    ('ArbZG', 'Arbeitszeitgesetz'), ('EntgFG', 'Entgeltfortzahlungsgesetz'), ('TzBfG', 'Teilzeit- und Befristungsgesetz'),
    ('NachwG', 'Nachweisgesetz'), ('BetrVG', 'Betriebsverfassungsgesetz'), ('ArbGG', 'Arbeitsgerichtsgesetz'),
    ('StBerG', 'Steuerberatungsgesetz'), ('GmbHG', 'GmbH-Gesetz'), ('GewStG', 'Gewerbesteuergesetz'),
    ('KStG', 'Körperschaftsteuergesetz'), ('PartGG', 'Partnerschaftsgesellschaftsgesetz'),
    ('UStDV', 'Umsatzsteuer-Durchführungsverordnung'), ('EStDV', 'Einkommensteuer-Durchführungsverordnung'),
    ('LStR', 'Lohnsteuer-Richtlinien'), ('EStR', 'Einkommensteuer-Richtlinien'), ('DSGVO', 'Datenschutz-Grundverordnung'),
    ('GewO', 'Gewerbeordnung'), ('TVG', 'Tarifvertragsgesetz'), ('BBiG', 'Berufsbildungsgesetz'),
    ('UStG', 'Umsatzsteuergesetz'), ('EStG', 'Einkommensteuergesetz'), ('AGG', 'Allgemeines Gleichbehandlungsgesetz'),
    ('SGB IX', 'Sozialgesetzbuch neun'), ('SGB V', 'Sozialgesetzbuch fünf'), ('SGB III', 'Sozialgesetzbuch drei'),
    ('StGB', 'Strafgesetzbuch'), ('HGB', 'Handelsgesetzbuch'), ('BGB', 'Bürgerliches Gesetzbuch'),
    ('AO', 'Abgabenordnung'), ('GG', 'Grundgesetz'),
]
WOERTER = [
    ('GmbH & Co. KG', 'Ge-em-be-Ha und Co Ka-Ge'), ('USt-IdNr.', 'Umsatzsteuer-Identifikationsnummer'), (' (igE)', ''),
    ('III/V', 'drei und fünf'), ('Steuerklasse VI', 'Steuerklasse sechs'), ('oder IV mit', 'oder vier mit'),
    ('1/12', 'ein Zwölftel'), ('4-Fache', 'Vierfache'), ('4-%-Regel', 'Vier-Prozent-Regel'), ('1-%-Regel', 'Ein-Prozent-Regel'),
    ('5-Tage-Woche', 'Fünf-Tage-Woche'), ('8,5 Stunden', 'achteinhalb Stunden'), ('WG-Zimmer', 'We-Ge-Zimmer'),
    ('GmbH', 'Ge-em-be-Ha'), ('OHG', 'O-Ha-Ge'), (' AG ', ' A-Ge '), (' AG.', ' A-Ge.'), (' AG,', ' A-Ge,'), ('GbR', 'Ge-be-Er'), ('AfA', 'Afa'), ('zum 15.', 'zum fünfzehnten'),
    ('z. B.', 'zum Beispiel'), ('Abs.', 'Absatz'), ('Nr.', 'Nummer'), ('Buchst.', 'Buchstabe'), ('Art.', 'Artikel'),
    ('ff.', 'und folgende'), ('§§', 'Paragrafen'), ('§', 'Paragraf'), ('×', 'mal'), ('−', 'minus'), (' = ', ' ist gleich '),
    (' – ', ', '), ('„', ''), ('“', ''), ('(', ', '), (')', ', '), ('/', ' und '),
]


def sprich(text, ist_ref=False):
    """Schreibweise -> Sprechtext (Abkürzungen ausschreiben, Daten und Beträge lesbar machen)."""
    t = ' ' + text + ' '
    t = re.sub(r'\bR (\d+)\.(\d+)', r'Richtlinie \1 Punkt \2', t)
    t = re.sub(r'\bKG\b', 'Ka-Ge', t.replace('GmbH & Co. KG', WOERTER[0][1]))
    for kurz, lang in GESETZE:
        t = re.sub(r'(?<![A-Za-zÄÖÜäöü])' + re.escape(kurz) + r'(?![A-Za-zÄÖÜäöü])', lang, t)
    for a, b in WOERTER:
        t = t.replace(a, b)
    t = re.sub(r'\bbis (\d+)\. (' + MONATE + r')', r'bis zum \1. \2', t)
    t = re.sub(r'(\d+)\. (' + MONATE + r')', lambda m: ordnung(int(m.group(1))) + ' ' + m.group(2), t)
    t = re.sub(r'(?<![\d.])([123])\. (?=[A-Za-zÄÖÜäöü])', lambda m: ['Erstens: ', 'Zweitens: ', 'Drittens: '][int(m.group(1)) - 1], t)
    t = re.sub(r'\b0,(\d\d) (?:€|Euro)', lambda m: str(int(m.group(1))) + ' Cent', t)
    t = re.sub(r'\b(\d+),(\d\d) (?:€|Euro)', r'\1 Euro \2', t)
    t = t.replace('€', 'Euro')
    t = re.sub(r'\s*,\s*,', ',', t)
    t = re.sub(r'\s+([,.!?:])', r'\1', t)
    t = re.sub(r',\s*([.!?:])', r'\1', t)
    return re.sub(r'\s+', ' ', t).strip(' ,')


def saetze(text):
    """Teilt einen Anzeigetext in Sätze, ohne an Abkürzungen zu trennen."""
    t = text
    for a in ('z. B.', 'Abs.', 'Nr.', 'Buchst.', 'Art.', 'ff.', 'Co.'):
        t = t.replace(a, a.replace('. ', '.\u00a0').replace('.', '\u2024'))
    t = re.sub(r'(\d)\. ', '\\1\u2024 ', t)
    teile = re.split(r'(?<=[.!?:])\s+', t)
    return [x.replace('\u2024', '.').replace('\u00a0', ' ').strip() for x in teile if x.strip()]


def lade_daten():
    s = open(os.path.join(APP, 'js', 'data.js'), encoding='utf8').read()
    i = s.index('window.LERN_DATEN = ') + len('window.LERN_DATEN = ')
    return json.loads(s[i:].rstrip().rstrip(';'))


def dauer(pfad):
    with wave.open(pfad) as w:
        return w.getnframes() / w.getframerate()


def plan(arbeit, stimme):
    from piper import PiperVoice
    voice = PiperVoice.load(stimme)
    os.makedirs(os.path.join(arbeit, 'ton'), exist_ok=True)

    def ton(text):
        pfad = os.path.join(arbeit, 'ton', hashlib.sha1(text.encode()).hexdigest()[:16] + '.wav')
        if not os.path.exists(pfad):
            with wave.open(pfad, 'wb') as w:
                voice.synthesize_wav(text, w)
        return pfad

    videos = []
    for lf in lade_daten()['lernfelder']:
        if not lf.get('paragrafen'):
            continue
        fach = lf.get('kurz') or 'LF %s' % lf['nummer']
        fach_sprech = lf.get('kurz') or 'Lernfeld %s' % lf['nummer']
        gruppen = []
        for p in lf['paragrafen']:
            if not gruppen or gruppen[-1][0] != p['gruppe']:
                gruppen.append((p['gruppe'], []))
            gruppen[-1][1].append(p)
        nr = 0
        for name, paras in gruppen:
            szenen = []
            for p in paras:
                ref_wav = ton(sprich(re.sub(r' \(.*?\)$', '', p['ref']), True) + '.')
                teile, woerter, t = [(ref_wav, dauer(ref_wav) + 0.3)], [], dauer(ref_wav) + 0.3
                for satz in saetze(p['text']):
                    w = ton(sprich(satz))
                    d = dauer(w)
                    ws = satz.split()
                    gesamt = sum(len(x) + 1 for x in ws)
                    start = t
                    for x in ws:
                        woerter.append({'w': x, 't': round(start, 3)})
                        start += d * (len(x) + 1) / gesamt
                    teile.append((w, d + PAUSE_SATZ))
                    t += d + PAUSE_SATZ
                szenen.append({'ref': p['ref'], 'text': p['text'], 'woerter': woerter, 'ton': teile,
                               'ref_ende': round(teile[0][1], 3), 'dauer': round(t + PAUSE_SZENE, 3)})
            gesamt = sum(s['dauer'] for s in szenen)
            n = max(1, math.ceil(gesamt / MAX_SEK))
            # Szenen der Reihe nach gleichmäßig auf n Teile verteilen; passt ein Teil nicht, einen Teil mehr nehmen
            while True:
                fertig, lauf = [[] for _ in range(n)], 0
                for sz in szenen:
                    mitte = lauf + sz['dauer'] / 2
                    fertig[min(n - 1, int(mitte / (gesamt / n)))].append(sz)
                    lauf += sz['dauer']
                fertig = [t for t in fertig if t]
                if all(sum(x['dauer'] for x in t) <= MAX_SEK or len(t) == 1 for t in fertig):
                    break
                n += 1
            for i, tl in enumerate(fertig):
                nr += 1
                teil = ' Teil %d von %d.' % (i + 1, len(fertig)) if len(fertig) > 1 else ''
                vor = ton('%s. %s.%s' % (fach_sprech, sprich(name), teil))
                nach = ton('Geschafft! Teste dein Wissen jetzt im Quiz.')
                videos.append({
                    'id': '%s-%02d' % (lf['id'], nr), 'lfId': lf['id'], 'fach': fach, 'farbe': lf['farbe'],
                    'titel': name, 'teil': i + 1, 'teile': len(fertig),
                    'vor': [vor, round(dauer(vor) + 0.6, 3)], 'nach': [nach, round(dauer(nach) + 0.8, 3)], 'szenen': tl,
                    'dauer': round(dauer(vor) + 0.6 + sum(s['dauer'] for s in tl) + dauer(nach) + 0.8, 2)})
    json.dump({'gruppe': GRUPPE, 'videos': videos}, open(os.path.join(arbeit, 'plan.json'), 'w', encoding='utf8'), ensure_ascii=False)
    for v in videos:
        print('%-8s %5.1fs  %2d Szenen  %s%s' % (v['id'], v['dauer'], len(v['szenen']), v['titel'], ' (%d/%d)' % (v['teil'], v['teile']) if v['teile'] > 1 else ''))
    print(len(videos), 'Videos,', round(sum(v['dauer'] for v in videos) / 60, 1), 'Minuten, längstes', max(v['dauer'] for v in videos), 's')


def stille(w, sek, rate):
    w.writeframes(b'\x00\x00' * int(sek * rate))


def schnitt(arbeit):
    p = json.load(open(os.path.join(arbeit, 'plan.json'), encoding='utf8'))
    ziel = os.path.join(APP, 'videos')
    os.makedirs(ziel, exist_ok=True)
    liste = []
    for v in p['videos']:
        bilder = json.load(open(os.path.join(arbeit, 'bilder', v['id'], 'zeiten.json')))
        # Tonspur: Vorspann, je Szene Paragraf + Sätze mit Pausen, Abspann
        ton = os.path.join(arbeit, v['id'] + '.wav')
        with wave.open(ton, 'wb') as aus:
            aus.setnchannels(1); aus.setsampwidth(2); aus.setframerate(22050)

            def dazu(pfad, laenge):
                with wave.open(pfad) as w:
                    aus.writeframes(w.readframes(w.getnframes()))
                    stille(aus, laenge - w.getnframes() / w.getframerate(), 22050)
            dazu(*v['vor'])
            for s in v['szenen']:
                for pfad, laenge in s['ton']:
                    dazu(pfad, laenge)
                stille(aus, PAUSE_SZENE, 22050)
            dazu(*v['nach'])
        concat = os.path.join(arbeit, v['id'] + '.txt')
        with open(concat, 'w') as f:
            for datei, sek in bilder:
                f.write("file '%s'\nduration %.3f\n" % (os.path.join(arbeit, 'bilder', v['id'], datei), sek))
            f.write("file '%s'\n" % os.path.join(arbeit, 'bilder', v['id'], bilder[-1][0]))
        mp4 = os.path.join(ziel, v['id'] + '.mp4')
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', concat, '-i', ton,
                        '-vf', 'fps=10,format=yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-tune', 'stillimage',
                        '-g', '40', '-c:a', 'aac', '-b:a', '64k', '-ar', '44100', '-ac', '1', '-movflags', '+faststart',
                        '-shortest', mp4], check=True)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', os.path.join(arbeit, 'bilder', v['id'], bilder[0][0]),
                        '-vf', 'scale=360:-1', '-q:v', '5', os.path.join(ziel, v['id'] + '.jpg')], check=True)
        sek = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', mp4],
                                   capture_output=True, text=True).stdout.strip())
        liste.append({'id': v['id'], 'lfId': v['lfId'], 'titel': v['titel'], 'teil': v['teil'], 'teile': v['teile'],
                      'sek': round(sek), 'refs': [s['ref'] for s in v['szenen']]})
        print('%-8s %5.1fs %6.0f kB' % (v['id'], sek, os.path.getsize(mp4) / 1024))
    with open(os.path.join(APP, 'js', 'videos.js'), 'w', encoding='utf8') as f:
        f.write('/* Liste der Lernvideos – wird von tools/make_videos.py erzeugt. */\nwindow.LERN_VIDEOS = '
                + json.dumps(liste, ensure_ascii=False, indent=1) + ';\n')
    print(len(liste), 'Videos,', round(sum(os.path.getsize(os.path.join(ziel, x['id'] + '.mp4')) for x in liste) / 1e6, 1), 'MB')


if __name__ == '__main__':
    if sys.argv[1] == 'plan':
        plan(sys.argv[2], sys.argv[3])
    elif sys.argv[1] == 'schnitt':
        schnitt(sys.argv[2])
    elif sys.argv[1] == 'probe':
        for z in sys.stdin:
            print(sprich(z.strip()))
