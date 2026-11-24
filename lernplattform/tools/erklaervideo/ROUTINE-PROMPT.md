Täglicher Lauf „Erklärvideos“ für den Lernfeld-Trainer. Arbeite selbstständig bis zum Ende, ohne Rückfragen, und antworte am Schluss auf Deutsch.

GRUNDLAGEN
- Repository: mullernico300-dotcom/context-mode, Branch claude/interactive-learning-platform-cr2pjr. Lies zuerst lernplattform/CLAUDE.md und lernplattform/tools/erklaervideo/README.md. Pushe nur auf diesen Branch.
- Lern-App (Artefakt): https://claude.ai/artifact/KrzSuUdA1qkGkPm3ynjcgV
- Videoliste der App: lernplattform/js/erklaervideos.js (Feld `datum` je Video).
- Heutiger Wochentag und Datum in Europe/Berlin bestimmen.

A) MONTAG, MITTWOCH UND FREITAG: EIN NEUES ERKLÄRVIDEO ERSTELLEN
1. Einrichten: `cd lernplattform/tools/erklaervideo && npm install`, `pip install piper-tts`, Stimme mit `python3 -m piper.download_voices de_DE-thorsten-high --data-dir ~/stimmen` laden. Chrome für Remotion: CHROME=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell (sonst den Pfad unter /opt/pw-browsers suchen). Wenn die Plugins „Remotion“, „Motion Reel“ oder „video-shotcraft“ verfügbar sind, nutze ihre Hinweise für Animation und Gestaltung.
2. Thema wählen: Lies lernplattform/js/data.js. Ein Thema ist eine Paragrafen-Gruppe (`gruppe`) eines Lernfelds. Nimm ein Thema, zu dem es in erklaervideos.js noch kein Video gibt. Reihenfolge: zuerst themenInfo.pruefung = "hoch", dann Themen mit Musterlösungen (themenInfo.loesungen) oder Übungsaufgaben (js/aufgaben.js), dann der Rest. Seminare (EStG-/USt-Seminar) und die Zeitung nie.
3. Drehbuch schreiben: neue Datei skripte/<lf>-<thema-kurz>.json im Format von skripte/anschaffungskosten.json (Felder id, lf, thema = exakt der Gruppenname, kapitel, titel, kartentitel, farbe = Farbe des Lernfelds, szenen). Aufbau wie bei NotebookLM: Einstieg mit einer Frage aus dem Alltag einer Steuerkanzlei, Regel mit Paragraf, Sortier- oder Zeitstrahl-Szene, mindestens ein durchgerechnetes Beispiel (wasserfall/stapel/grenze) mit Buchungssatz (buchung), typische Fallen, Zusammenfassung mit Aufruf zum Üben. Nutze nur die vorhandenen Szenen-Typen aus src/szenen.tsx; jede Grafik-Zeile hat ein `satz`-Feld für den Satz, bei dem sie erscheint. Gesprochene Sätze: kurz, Du-Form, „Prozent“ und „Paragraf“ ausschreiben.
4. Fachlich korrekt bleiben: Inhalte nur aus data.js (paragrafen, themenInfo, loesungen), js/aufgaben.js und tools/lf10_daten.py. Keine erfundenen Beträge, Fristen oder Paragrafen. Rechne jedes Beispiel mit einem kurzen Python-Skript nach, bevor du es ins Drehbuch schreibst.
5. Ton und Länge: `python3 ton.py skripte/<datei>.json ~/stimmen/de_DE-thorsten-high.onnx`. Die Gesamtlänge muss zwischen 3:00 und 5:00 Minuten liegen; sonst Sätze kürzen oder ergänzen und neu vertonen.
6. Kontrolle vor dem Rendern: `GROESSE=720 node render.cjs vorschau.png <je Szene ein Frame kurz vor Szenenende>` und alle Standbilder ansehen. Nichts darf sich überlappen oder hinter dem Untertitel verschwinden, kein Text ragt aus Karten. Fehler in den Daten oder in src/szenen.tsx beheben und erneut prüfen.
7. Rendern: `GROESSE=720 KERNE=4 node render.cjs video.mp4` (dauert ohne Grafikkarte etwa 30–40 Minuten).
8. In die App eintragen: `python3 eintragen.py skripte/<datei>.json video.mp4`. Das Skript hält 15 MB ein und gibt die zu veröffentlichenden Dateien aus.
9. Veröffentlichen: Lies vorher mit dem Artifact-Tool (action "read", path "js/erklaervideos.js") die veröffentlichte Videoliste und übernimm Einträge, die dort, aber nicht lokal stehen. Dann publish mit der `url` der Lern-App, `file_path` = lernplattform/artifact.html und in `files` nur {"js/erklaervideos.js", "videos/erklaer/<id>.mp4", "videos/erklaer/<id>.jpg"}. Lass `capabilities` weg. Ändere js/data.js nicht.
10. Committen und pushen: Drehbuch, js/erklaervideos.js (die mp4/jpg sind per .gitignore ausgeschlossen, falls nicht: nicht committen).

B) DIENSTAG, DONNERSTAG, SAMSTAG, SONNTAG: KEIN NEUES VIDEO
Erstelle nichts und veröffentliche nichts. Wähle aus erklaervideos.js ein Video, das älter als 7 Tage ist (sonst das älteste), und zwar jeden Tag ein anderes (Tag des Jahres modulo Anzahl). Es erscheint in der App automatisch unter „Heute wiederholen“.

ABSCHLUSS (jeden Tag, für das Dashboard)
- Was heute passiert ist: neues Video (Titel, Lernfeld, Thema, Länge) oder „Heute wiederholen: <Titel>“.
- Liste „Erklärvideos der letzten 7 Tage“: je Video Datum, Titel, Lernfeld, Länge.
- Hinweis: alle Videos stehen in der Lern-App unter Start → „🎬 Erklärvideos“ und auf der jeweiligen Themenseite: https://claude.ai/artifact/KrzSuUdA1qkGkPm3ynjcgV
- Wenn ein Schritt nicht ging (Rendern abgebrochen, Veröffentlichen abgelehnt), sag genau welcher und lass die App unverändert.
