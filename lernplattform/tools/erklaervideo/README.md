# Erklärvideos im NotebookLM-Stil (Remotion)

Ein Video entsteht aus einem Drehbuch (`skripte/<thema>.json`): Szenen mit Grafik-Typ, Daten und den gesprochenen Sätzen.
Jede Grafik erscheint genau in dem Moment, in dem ihr Satz beginnt (Feld `satz`).

## Ablauf

```bash
cd lernplattform/tools/erklaervideo
npm install                                   # einmalig
python3 ton.py skripte/anschaffungskosten.json <stimme.onnx>   # Piper-Stimme, Zeitleiste -> src/daten/aktuell.json
CHROME=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell \
  node render.cjs video.mp4                   # 1920×1080, 30 fps, H.264 mit Ton
node render.cjs vorschau.png 400,1500         # nur Standbilder dieser Frames
```

Stimme: `de_DE-thorsten-high` (Piper, lokal, kostet keine Tokens). Ausspracheregeln aus `tools/make_videos.py` (`sprich`).

## Szenen-Typen (`src/szenen.tsx`)

| Typ | Grafik |
| --- | --- |
| `titel` | Titel mit Preisschild und Frage |
| `formel` | Rechenschema Zeile für Zeile mit Paragraf |
| `sortieren` | Karten fliegen in „gehört dazu“ / „gehört nicht dazu“ |
| `zeitstrahl` | zwei Zeitpunkte mit Erklärkarten und Merksatz |
| `wasserfall` | Wasserfall-Diagramm für Rechenwege (Zahlen zählen hoch) |
| `buchung` | Buchungssätze mit Soll, „an“, Haben, markierte Zeilen |
| `stapel` | Quittung mit Summenzeile, durchgestrichene Posten |
| `grenze` | Balken mit Grenzlinie (z. B. GWG 800 €) |
| `fallen` | Warnkarten „Typische Fallen“ |
| `merke` | Zusammenfassung mit Haken und Aufruf zum Üben |

### Premium-Szenen (src/premium.tsx, Beispiel: skripte/lf8-gewinnverteilung.json)

| Typ | Grafik |
|---|---|
| `intro` | Titel Wort für Wort, Betrag zählt hoch, Münzen fliegen zu den Personen |
| `kapitel` | Kapitelkarte mit großer Ziffer („Teil 1“) |
| `vergleich` | Tabelle mit Spalten (z. B. GbR/OHG/KG), Zeilen, Hervorhebung einer Spalte; Werte mit ✓ grün, ✗ rot, ⚠ gelb |
| `kreis` | Ringdiagramm für einen Verteilungsschlüssel mit Beträgen |
| `verteilung` | Gestapelte Säulen je Person, Stufe für Stufe, Summen und Probe |
| `quiz` | Frage mit drei Antworten, Countdown-Ring, Auflösung mit Stempel; Denkpause im Drehbuch als Satz `[pause 5]` |

Premium-Ablauf: im Drehbuch `"stil": "premium"` und `"musik": "<id>/musik.wav"` setzen → `python3 ton.py …` → `python3 klang.py <id>` (Musik und Klänge, selbst erzeugt) → Full HD rendern ohne `GROESSE` → `BREITE=1920 python3 eintragen.py …`. Premium bringt außerdem Lichtpunkte im Hintergrund, eine langsame Kamerafahrt und Wusch-Klänge beim Szenenwechsel.

Beträge im Drehbuch werden vorher per Skript nachgerechnet; im gesprochenen Text „Prozent“ ausschreiben.
