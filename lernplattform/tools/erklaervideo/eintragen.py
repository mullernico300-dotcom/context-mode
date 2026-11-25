#!/usr/bin/env python3
"""Trägt ein fertig gerendertes Erklärvideo in die Lern-App ein.

Aufruf:  python3 eintragen.py skripte/<thema>.json <video.mp4> [datum JJJJ-MM-TT]
- kopiert das Video nach lernplattform/videos/erklaer/<id>.mp4 (höchstens 15 MB; sonst wird es neu kodiert)
- erzeugt das Vorschaubild <id>.jpg aus Sekunde 12
- ergänzt js/erklaervideos.js (ein vorhandener Eintrag mit derselben id wird ersetzt)
Gibt am Ende die Liste der Dateien aus, die veröffentlicht werden müssen.
"""
import datetime, json, os, subprocess, sys

HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.abspath(os.path.join(HIER, '..', '..'))
GRENZE = 15 * 1000 * 1000
BREITE = os.environ.get('BREITE', '1280')  # BREITE=1920 behält Full HD (Premium-Videos)


def dauer(datei):
    r = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', datei], capture_output=True, text=True, check=True)
    return float(r.stdout.strip())


def main(skript, video, datum=None):
    d = json.load(open(skript, encoding='utf8'))
    for feld in ('id', 'lf', 'thema', 'titel'):
        assert d.get(feld), 'Im Drehbuch fehlt das Feld ' + feld
    datum = datum or datetime.date.today().isoformat()
    ziel = os.path.join(APP, 'videos', 'erklaer')
    os.makedirs(ziel, exist_ok=True)
    mp4 = os.path.join(ziel, d['id'] + '.mp4')
    jpg = os.path.join(ziel, d['id'] + '.jpg')
    crf = 27
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', video, '-vf', 'scale=%s:-2' % BREITE, '-c:v', 'libx264', '-preset', 'slow',
                    '-crf', str(crf), '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', mp4], check=True)
    while os.path.getsize(mp4) > GRENZE and crf < 40:
        crf += 3
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', video, '-vf', 'scale=%s:-2' % BREITE, '-c:v', 'libx264', '-preset', 'slow',
                        '-crf', str(crf), '-c:a', 'aac', '-b:a', '80k', '-movflags', '+faststart', mp4], check=True)
    assert os.path.getsize(mp4) <= GRENZE, 'Video bleibt über 15 MB'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', '12', '-i', mp4, '-frames:v', '1', '-q:v', '3', jpg], check=True)

    js = os.path.join(APP, 'js', 'erklaervideos.js')
    text = open(js, encoding='utf8').read()
    i = text.index('window.ERKLAERVIDEOS = ') + len('window.ERKLAERVIDEOS = ')
    liste = json.loads(text[i:].rstrip().rstrip(';'))
    eintrag = {'id': d['id'], 'lf': d['lf'], 'thema': d['thema'], 'titel': d.get('kartentitel') or d['titel'],
               'datum': datum, 'sek': round(dauer(mp4), 1), 'datei': 'videos/erklaer/%s.mp4' % d['id'], 'poster': 'videos/erklaer/%s.jpg' % d['id']}
    liste = [x for x in liste if x.get('id') != d['id']] + [eintrag]
    open(js, 'w', encoding='utf8').write(text[:i] + json.dumps(liste, ensure_ascii=False, indent=1) + ';\n')
    print('eingetragen:', eintrag['id'], '%.1f MB' % (os.path.getsize(mp4) / 1e6), 'crf', crf)
    print('VEROEFFENTLICHEN:', 'js/erklaervideos.js', eintrag['datei'], eintrag['poster'])


if __name__ == '__main__':
    main(*sys.argv[1:])
