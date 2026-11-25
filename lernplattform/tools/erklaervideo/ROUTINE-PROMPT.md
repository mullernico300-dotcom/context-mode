> Überholt: Die Dashboard-Aufgabe nutzt seit 25.11. den Premium-Ablauf (siehe README.md und CLAUDE.md). Diese Datei bleibt nur als Referenz.

Täglicher Lauf „Lernvideo des Tages“ für den Lernfeld-Trainer. Ziel: Ich bekomme jeden Tag genau ein Lernvideo hier im Dashboard. Montag, Mittwoch und Freitag ein neues, an den anderen Tagen ein älteres zum Wiederholen. Arbeite selbstständig bis zum Ende, ohne Rückfragen, und antworte am Schluss auf Deutsch.

GRUNDLAGEN
- Repository: mullernico300-dotcom/context-mode, Branch claude/interactive-learning-platform-cr2pjr. Lies zuerst lernplattform/CLAUDE.md und lernplattform/tools/erklaervideo/README.md. Pushe nur auf diesen Branch.
- Lern-App (Artefakt): https://claude.ai/artifact/KrzSuUdA1qkGkPm3ynjcgV
- Liste aller bisherigen Lernvideos: lernplattform/js/erklaervideos.js (je Video id, lf, thema, titel, datum, sek, datei, poster).
- Bestimme Wochentag und Datum in der Zeitzone Europe/Berlin.

A) MONTAG, MITTWOCH, FREITAG: NEUES LERNVIDEO ZU EINEM NEUEN THEMA
1. Einrichten: `cd lernplattform/tools/erklaervideo && npm install`, `pip install piper-tts`, Stimme laden mit `python3 -m piper.download_voices de_DE-thorsten-high --data-dir ~/stimmen`. Chrome für Remotion: CHROME=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell (sonst den Pfad unter /opt/pw-browsers suchen). Wenn die Plugins „Remotion“, „Motion Reel“ oder „video-shotcraft“ verfügbar sind, nutze ihre Hinweise für Animation und Gestaltung.
2. Thema wählen: Ein Thema ist eine Paragrafen-Gruppe (`gruppe`) eines Lernfelds in lernplattform/js/data.js. Nimm ein Thema, zu dem es in erklaervideos.js noch kein Video gibt: zuerst themenInfo.pruefung = "hoch", dann Themen mit Musterlösungen (themenInfo.loesungen) oder Übungsaufgaben (js/aufgaben.js), dann der Rest. Seminare und die Zeitung nie.
3. Drehbuch: neue Datei skripte/<lf>-<thema-kurz>.json im Format von skripte/anschaffungskosten.json (id, lf, thema = exakt der Gruppenname, kapitel, titel, kartentitel, farbe = Farbe des Lernfelds, szenen). Aufbau wie bei NotebookLM: Einstieg mit einer Frage aus dem Kanzleialltag, Regel mit Paragraf, Sortier- oder Zeitstrahl-Szene, mindestens ein durchgerechnetes Beispiel (wasserfall, stapel oder grenze) mit Buchungssatz (buchung), typische Fallen, Zusammenfassung. Nur die Szenen-Typen aus src/szenen.tsx verwenden; jede Grafik-Zeile hat ein `satz`-Feld. Gesprochene Sätze kurz, in Du-Form, „Prozent“ und „Paragraf“ ausschreiben.
4. Fachlich korrekt: Inhalte nur aus data.js (paragrafen, themenInfo, loesungen), js/aufgaben.js und tools/lf10_daten.py. Nichts erfinden. Jedes Rechenbeispiel vorher mit einem kurzen Python-Skript nachrechnen.
5. Ton: `python3 ton.py skripte/<datei>.json ~/stimmen/de_DE-thorsten-high.onnx`. Länge etwa 3:30 Minuten (3:15 bis 3:45), sonst Sätze anpassen und neu vertonen.
6. Kontrolle: `GROESSE=720 node render.cjs vorschau.png <je Szene ein Frame kurz vor Szenenende>`, alle Standbilder ansehen. Nichts darf sich überlappen, hinter dem Untertitel verschwinden oder aus einer Karte ragen. Fehler beheben, erneut prüfen.
7. Rendern: `GROESSE=720 KERNE=4 node render.cjs video.mp4` (ca. 30–40 Minuten).
8. In die Lern-App eintragen: `python3 eintragen.py skripte/<datei>.json video.mp4` (hält 15 MB ein, erzeugt Vorschaubild, ergänzt erklaervideos.js). Das Video erscheint dann in der App auf der Seite seines Themas.
9. Veröffentlichen: Lies vorher mit dem Artifact-Tool (action "read", path "js/erklaervideos.js") die veröffentlichte Liste und übernimm Einträge, die dort, aber nicht lokal stehen. Dann publish mit der `url` der Lern-App, `file_path` = lernplattform/artifact.html und in `files` nur js/erklaervideos.js, videos/erklaer/<id>.mp4 und videos/erklaer/<id>.jpg. `capabilities` weglassen, js/data.js nicht ändern.
10. Drehbuch und js/erklaervideos.js committen und pushen (mp4/jpg nicht, sie liegen nur im Artefakt).
11. Zeig mir das neue Video hier im Dashboard: Sende die Datei lernplattform/videos/erklaer/<id>.mp4 mit dem Datei-Senden-Tool (SendUserFile, display "render").

B) DIENSTAG, DONNERSTAG, SAMSTAG, SONNTAG: ALTES VIDEO ZUM WIEDERHOLEN
1. Nichts Neues erstellen, nichts veröffentlichen, nichts committen.
2. Wähle aus erklaervideos.js ein Video: bevorzugt eines, das älter als 7 Tage ist und in den letzten 14 Tagen nicht schon als Wiederholung dran war (sieh in den eigenen früheren Läufen nach, wenn das möglich ist; sonst Tag des Jahres modulo Anzahl der Videos). Gibt es noch kein Video, sag das und beende den Lauf.
3. Hol die Datei aus der Lern-App: Artifact-Tool, action "read", url der Lern-App, path = `datei` des Videos (z. B. videos/erklaer/<id>.mp4).
4. Zeig mir das Video hier im Dashboard: Sende die geladene Datei mit dem Datei-Senden-Tool (SendUserFile, display "render").

ABSCHLUSS (jeden Tag)
- Eine Zeile: „Neues Lernvideo“ oder „Zum Wiederholen“, dazu Titel, Lernfeld und Länge.
- „Darum geht's“: das Thema in 2–3 einfachen Sätzen.
- Drei kurze Kontrollfragen zum Video (Lösungen in einer zweiten, eingeklappten Zeile darunter).
- Hinweis: Das Video steht auch in der Lern-App auf der Themenseite: https://claude.ai/artifact/KrzSuUdA1qkGkPm3ynjcgV
- Wenn ein Schritt nicht ging (Rendern abgebrochen, Veröffentlichen abgelehnt), sag genau welcher, zeig mir stattdessen ein altes Video und lass die App unverändert.
