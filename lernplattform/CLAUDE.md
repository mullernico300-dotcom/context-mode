# Projektnotizen Lernfeld-Trainer

Diese Datei wird bei jeder Sitzung gelesen. Sie hält die Entscheidungen zu Modellen und Kosten fest.

## Modellwahl (verbindlich für den Bau der Planung)

Ein Modell kann Claude nicht selbst wechseln. Der Nutzer stellt es mit `/model` ein. Wenn die aktuelle Sitzung nicht das passende Modell nutzt, weist Claude darauf hin, statt weiterzuarbeiten.

| Aufgabe | Kosten | Modell |
| --- | --- | --- |
| Stundenplan, Tests, Lernzeit, Tagesplan verteilen | 0 | kein Modell, normaler Code |
| Prüfen, ob neue Dateien da sind | 0 | kein Modell |
| Rechenwege und Beträge nachrechnen | 0 | kein Modell, Python-Skript |
| Stimme, Schnitt, Bilder der Videos | 0 | kein Modell, lokal |
| Mitschrift-Foto lesen und Thema zuordnen | mittel | Haiku 5.5 |
| Paragrafen in einfacher Sprache erklären | hoch | Sonnet 5.5 |
| Sprechtexte für Videos formulieren | hoch | Sonnet 5.5 |
| Aufgaben mit Lösung, einfache Fälle | hoch | Sonnet 5.5 |
| Aufgaben zu Steuer, Verjährung, Gesellschaftsrecht | sehr hoch | Opus 5.5 |
| Änderungen am App-Code, klein | hoch | Sonnet 5.5 |
| Änderungen am App-Code, Umbau | sehr hoch | Opus 5.5 |
| Gesamtprüfung eines Testpakets vor Veröffentlichung | sehr hoch | Fable 5.2 |

## Kostenregeln

- Tests und Videos entstehen nur für Themen, zu denen ein Test eingetragen wurde.
- Alte Videos bleiben erhalten.
- Der Abendlauf an Schultagen prüft zuerst, ob neue Mitschrift da ist. Ohne neue Dateien endet er sofort.
- Rechnen übernehmen Skripte, nicht das Modell.
- Vor dem Start eines größeren Laufs nennt Claude die geschätzten Tokens und fragt nach.

## Stand (18.11.)

- Planer gebaut (js/planer.js): Heute, Kalender (Schule/Arbeit je Tag, Woche kopieren), Stundenplan (45/90 Min, Pausen, Tag kopieren), Tests mit Lernplan, Noten mit Schnitt und Sicherung. Alles nur im Browser des Geräts (localStorage).
- Unterlagen gebaut (js/unterlagen.js): Fächer, Themen, Dateien, Lernübersichten in der Artefakt-Datenbank (subjects, topics, files, summaries). Lesen: alle mit Link; schreiben/hochladen: nur Bearbeiter (Regeln write "admin", assets nur für Bearbeiter). Geprüft mit as_level view/interact.
- Lernregister übernommen (Seminare inzwischen als Nachlese-Ordner ergänzt): 6 Fächer, 13 Themen, 15 Dateien, 4 Lernübersichten. Das Lernregister selbst ist noch nicht gelöscht.
- Schulzeiten, Pausen, Fächer und Lehrkräfte stehen in js/schule.js. Die Datei wird nur im Artefakt veröffentlicht und ist per lernplattform/.gitignore vom Repository ausgeschlossen. Vorlage: js/schule.beispiel.js.
- Übersicht neu (18.11.): Startseite mit Wochenplan (Mo–Fr, Stunden des gewählten Tages, Tests, Lernaufgaben), Lernfeld zeigt zuerst Themen-Kacheln, jedes Thema hat eine eigene Seite (#thema-<lf>-<n>) mit Videos, Übungsaufgaben, Paragrafen und Karteikarten zum Thema. Ein Thema = Paragrafen-Gruppe gleichen Namens wie Aufgaben-Thema und Video-Titel. Untere Navigation auf dem Handy, Schriften Inter und Space Grotesk.
- Themen-Texte (18.11.): data.js hat je Lernfeld `themenInfo` (Überblick, Darauf achten, Typische Fallen, Prüfungsrelevanz hoch/mittel/gering mit Begründung). 23 Themen aus den Lernregister-Abschnitten übernommen, „Krankheit“ und „Schwerbehinderte Menschen“ neu geschrieben. Der Sonntagslauf darf `themenInfo` nicht löschen.
- Prüfungssimulator (18.11.): js/pruefung.js, Route #pruefung. Aufgabenbank js/pruefung-fragen.js wird aus tools/pruefung/fragen_zp.py und fragen_ap.py mit `python3 tools/pruefung/bau.py js/pruefung-fragen.js` erzeugt – nur die .py-Dateien ändern. 30 Aufgaben Zwischenprüfung (§ 9: 12, § 10: 18), 30 Abschlussprüfung (§ 14: 12, § 15: 10, § 17: 8) und 2 Gesprächssimulationen (§ 16). Keine Originalprüfungen übernehmen, nur angelehnt (Quelle je Aufgabe). Zeitlimit = Punkte × Bereichszeit / 100. Notenschlüssel 92/81/67/50/30. Pause-Knopf hält die Uhr an (Restzeit wird gespeichert); wer den Simulator verlässt oder die Seite schließt, unterbricht automatisch. Modus „Einzelne Aufgaben“ (#pruefung-aufgaben): Filter nach Prüfung, Bereich, Suche; eigener Speicherplatz `einzel`, damit eine offene ganze Prüfung erhalten bleibt; beste Punktzahl je Aufgabe in `erledigt`. Antworten, Selbstbewertung und Verlauf nur im localStorage (`lernplattform.pruefung.v1`). Jedes Jahr Rechtsstand prüfen (Pauschbeträge, Minijob-Grenze, Kindergeld).
- Seminare und Zeitung (18.11.): in der Datenbank als subjects mit Feld `bereich` ("seminar" bzw. "zeitung", Zeitung hat die id `zeitung`). Nur zum Nachlesen: keine Lernübersicht, keine Aufgaben, kein Lernfeld-Link. Der Abendlauf darf aus diesen Ordnern nichts erzeugen. Startseite verlinkt #unterlagen-seminare und #unterlagen-zeitung.
- Geplant, noch nicht gebaut: Prüfungsthemen-Liste des Besitzers (nur für ihn lesbar) und Inhalte in der Datenbank statt in festen Dateien, damit der Nachtlauf Aufgaben, Videos, Karten, Quiz und Rätsel für neue Themen und große neue Dateien ergänzen kann, ohne die Seite neu zu veröffentlichen. Tages-Training soll dann auch aus der Datenbank lesen.
- Offen: Abendlauf (Sonnet/medium) mit dem Nutzer abstimmen. Er läuft außerhalb der App und kann die lokalen Stundenpläne nicht lesen, deshalb braucht er die Schulende-Zeiten pro Wochentag vom Nutzer.

## Entscheidungen für die Planung (Stand 17.11.)

- **Dateien hochladen:** nur der Besitzer. Die Schreibrechte setzt das Artefakt auf dem Server durch. Beim Bau prüfen, wie sich das für jemanden mit reinem Link verhält.
- **Stundenplan:** wird von jedem per Handeingabe erstellt (Fächer, Wochentage, Schulwochen). Kein Foto-Auslesen, das spart Tokens und hält Fotos aus dem Dienst heraus. Der Plan bleibt pro Person, nicht sichtbar für andere.
- **Tests und Lernzeiten:** jeder trägt selbst ein, pro Person.
- **Noten:** jeder trägt selbst ein, nur auf dem eigenen Gerät gespeichert, nicht sichtbar für andere. Pro Fach ein Durchschnitt, daraus die Gesamtnote. Export/Import als Sicherung einbauen.
- **Modell:** vor Bau Sonnet oder Opus wählen (siehe Tabelle oben). Bei jedem Wechsel oder Unteragenten vorher Bescheid geben.
- **Bau:** erst mit neuen Tokens und nach Freigabe der Schultage, Startzeit des Abendlaufs und Mitschrift-Upload.

## Videos bei Tests (verbindlich)

- Wird ein Test eingetragen (z. B. „EStG, Geschenke, in 4 Tagen“), entsteht genau ein Erklärvideo zu diesem Thema: was der Begriff bedeutet und welche Paragrafen beachtet werden müssen.
- Gibt es zum Thema schon ein Video, wird es wiederverwendet. Es entsteht nichts Neues.
- Es entstehen keine Videos für Themen ohne Test.
- Alte Videos bleiben erhalten.

## Länge und Inhalt der Test-Videos (verbindlich)

- Test-Videos dauern 3 bis 5 Minuten. Die 2-Minuten-Grenze gilt nur noch für die Paragrafen-Videos.
- Jedes Test-Video erklärt das Thema mit Beispielaufgaben und zeigt die Lösungen mit Rechenweg und Paragrafen.
- Längere Videos kosten mehr Tokens (Text und Aufgaben), deshalb nur für eingetragene Tests.

## Stundenplan-Eingabe (Ergänzung)

- Der Stundenplan ändert sich nicht. Eingetragen wird er einmal, pro Person, von Hand.
- Schulwochen werden getrennt markiert. Der Plan gilt für alle markierten Schulwochen.
- Ein Knopf „Kopieren“ übernimmt einen Tag oder die ganze Woche in alle markierten Schulwochen, damit nichts doppelt eingetragen werden muss.
- Reine Eingabe ohne KI, also keine Tokens.

## Startzeit des Abendlaufs (entschieden)

- Der Lauf startet eine Minute nach Schulende des jeweiligen Tages, z. B. 14:41 Uhr bei Schulende 14:40 Uhr.
- Die Schulende-Zeit kommt aus dem Stundenplan. Sie kann an jedem Wochentag anders sein.
- An Tagen ohne Schule startet nichts.

## Mitschrift und Lernregister (entschieden)

- Für den Anfang liest der Abendlauf alle Inhalte aus dem Lernregister (Fächer, Themen, Dateien, Lernübersichten).
- Danach lädt der Nutzer die Dateien direkt in den Lernfeld-Trainer hoch. Das Lernregister wird dann nicht mehr gebraucht.
- Vor dem Abschalten des Lernregisters: alle Inhalte in den Lernfeld-Trainer übernehmen und prüfen, dass nichts fehlt.
