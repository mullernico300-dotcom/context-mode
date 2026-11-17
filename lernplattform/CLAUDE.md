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

## Stand

- Bau der Planung (Stundenplan, Tests, Lernplan, Lernregister) ist noch nicht begonnen.
- Wartet auf neue Tokens und auf Entscheidungen: Schultage, Startzeit des Abendlaufs, Mitschrift-Upload, Modell.
