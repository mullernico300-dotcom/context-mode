# Lernfeld-Trainer – interaktive Lernplattform für die Klasse

Eine Web-App ohne Installation, ohne Anmeldung und ohne Server-Logik. Für jedes Lernfeld (LF) gibt es:

| Format | Was es kann |
| --- | --- |
| 📖 **Themen** | Lernziele zum Abhaken, Erklärungen als aufklappbare Infoboxen mit Merksatz |
| § **Paragrafen** | Die wichtigen Paragrafen je Fach in einfacher Sprache, nach Themen gruppiert, mit Suche und „verstanden“-Haken |
| 🃏 **Karteikarten** | Umdrehen per Tipp/Klick, „Schon gewusst“ / „Noch üben“, Filter nach Stapel, Mischen |
| 🏆 **Quiz-Show** | Bis zu 10 Fragen mit steigender Schwierigkeit, Punktestufen, Sicherheitsstufen, Timer, zwei Joker, Highscore |
| 🧩 **Kreuzworträtsel** | Wird automatisch aus der Wortliste erzeugt, prüft jedes vollständig ausgefüllte Wort sofort (grün/rot) |
| ▶ **Tages-Training** | 7 gemischte Fragen aus allen Fächern mit drei Herzen; eigene Fehler kommen wieder dran |
| ⚡ **Paare-Spiel** | Begriff und Erklärung auf Zeit zuordnen, mit Bestzeit |
| 🔥 **Punkte, Serie, Abzeichen** | XP und Level, Tagesziel, Lerntage in Folge, 13 Abzeichen |

Die App behandelt **ausschließlich Lernfelder**. Einträge, die als EStG- oder USt-Seminar benannt sind, werden weder in der Navigation noch in den Inhalten angezeigt (Filter in `js/store.js`).

> Die Lernfelder 1–3 sind **Beispielinhalte**. LF 6, LF 8 und Sozialkunde enthalten die Paragrafen aus dem Lernregister, in einfache Sprache übertragen. Die Erklärungen ersetzen nicht den Gesetzestext; Beträge und Fristen bitte vor dem Einsatz prüfen.

## Starten

**Am einfachsten:** Ordner `lernplattform` herunterladen und `index.html` doppelklicken. Fertig – es wird kein Build-Schritt und keine Internetverbindung benötigt.

**Mit lokalem Webserver** (optional, z. B. zum Testen auf dem Handy im selben WLAN):

```bash
cd lernplattform
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

## Für die Klasse bereitstellen (Hosting)

Die App besteht nur aus statischen Dateien und läuft auf jedem Webspace:

- **GitHub Pages:** Repository → *Settings* → *Pages* → Branch wählen. Die App ist dann unter `https://<name>.github.io/<repo>/lernplattform/` erreichbar.
- **Netlify / Cloudflare Pages:** den Ordner `lernplattform` per Drag-and-drop hochladen.
- **Schulserver, IServ, Moodle, Nextcloud-Webspace:** den Ordner unverändert hochladen und `index.html` verlinken.
- **Ohne Internet:** den Ordner per USB-Stick oder Tauschlaufwerk verteilen.

## Inhalte pflegen

Alle Inhalte stehen in **einer einzigen Datei**: `js/data.js`. Es gibt zwei Wege, sie zu ändern.

### Weg 1: Verwaltung in der App (empfohlen)

1. In der App oben rechts auf **⚙ Verwaltung** klicken.
2. Lernfeld auswählen oder **＋ Neues Lernfeld** anlegen.
3. In den Reitern *Grunddaten, Themen, Paragrafen, Karteikarten, Quiz, Rätsel* Einträge hinzufügen, ändern, sortieren oder löschen. Jede Eingabe wird sofort im eigenen Browser gespeichert; mit **👁 Vorschau** lässt sich das Ergebnis direkt ansehen.
4. Auf **⬇ data.js exportieren** klicken und die heruntergeladene Datei als `js/data.js` in den App-Ordner (bzw. auf den Webspace) kopieren.

Wichtig: Schritt 4 ist nötig, damit die Klasse die Änderungen sieht. Die Verwaltung speichert zunächst nur im Browser der Lehrkraft – die App hat bewusst keinen Server und keine Benutzerkonten. Aus demselben Grund ist die Verwaltung nicht passwortgeschützt: Wer dort etwas ändert, ändert nur die eigene Ansicht.

Weitere Knöpfe: **Sicherung (JSON)** speichert einen Stand, **Importieren** lädt eine Sicherung oder eine `data.js` wieder ein, **Auf data.js zurücksetzen** verwirft die Änderungen im Browser.

### Weg 2: Datei direkt bearbeiten

`js/data.js` in einem Text-Editor öffnen. Ein Lernfeld sieht so aus:

```js
{
  "id": "lf4",                 // eindeutig, ohne Leerzeichen
  "nummer": 4,
  "titel": "Titel des Lernfelds",
  "beschreibung": "Ein Satz zur Einordnung.",
  "farbe": "#10b981",          // Akzentfarbe
  "lernziele": ["Ich kann …", "Ich kenne …"],
  "themen": [
    { "titel": "Überschrift", "text": "Absatz.\n- Aufzählung\n- mit **fett**", "merke": "Merksatz" }
  ],
  "karten": [
    { "vorne": "Begriff oder Frage", "hinten": "Erklärung" }
  ],
  "quiz": [
    { "frage": "…?", "antworten": ["A", "B", "C", "D"], "richtig": 0, "stufe": 1, "erklaerung": "optional" }
  ],
  "raetsel": [
    { "wort": "BILANZ", "hinweis": "Umschreibung" }
  ],
  "paragrafen": [
    { "gruppe": "Kündigung", "ref": "§ 622 Abs. 1 BGB", "text": "Erklärung in einfachen Worten" }
  ],
  "kurz": "SK"                 // optional: Kürzel statt "LF 4", z. B. für Sozialkunde
}
```

Hinweise:

- `richtig` ist die Position der richtigen Antwort, gezählt ab 0 (0 = erste Antwort). Im Spiel werden die Antworten gemischt.
- `stufe`: 1 = leicht, 2 = mittel, 3 = schwer. Das Quiz sortiert danach und wählt bei mehr als 10 Fragen gleichmäßig aus.
- Rätselwörter: ein Wort ohne Leerzeichen, am besten 3–14 Buchstaben, 8–12 Wörter pro Lernfeld. Umlaute bleiben erhalten, `ß` wird zu `SS`. Wörter, die sich mit keinem anderen kreuzen lassen, werden ausgelassen.
- Neue Lernfelder einfach als weiteren Block (durch Komma getrennt) in die Liste `lernfelder` einfügen.

## Als Artefakt in Claude

`artifact.html` ist dieselbe Seite ohne HTML-Gerüst. Sie wird zusammen mit `css/` und `js/` als Artefakt veröffentlicht. Für neue Inhalte genügt es, dort `js/data.js` zu ersetzen. Die Felder `registerId` und `registerStand` in `data.js` merken, aus welchem Fach des Lernregisters ein Eintrag stammt und wie aktuell er ist.

## Automatische Inhalte und Wiederholen

- Hat ein Fach keine eigenen Karteikarten, entstehen sie automatisch aus den Paragrafen („Was regelt § …?“). Hat es weniger als fünf Quizfragen, kommen Zuordnungsfragen aus den Paragrafen dazu.
- Karteikarten wandern durch fünf Fächer. Gewusste Karten kommen nach 1, 3, 7 und 21 Tagen wieder, nicht gewusste sofort. Der Filter „Heute dran“ zeigt, was fällig ist.

## Lernfortschritt und Datenschutz

Karteikarten-Status, Highscores und gelöste Rätsel werden nur lokal im Browser des jeweiligen Geräts gespeichert (`localStorage`). Es werden keine Daten übertragen, es gibt keine Konten, keine Cookies, keine externen Dienste und keine Schriftarten von Dritten.

## Aufbau

```
lernplattform/
├── index.html          Seitengerüst
├── artifact.html       dieselbe Seite für die Veröffentlichung als Artefakt
├── css/style.css       Design (mobile-first, Glas-Optik)
└── js/
    ├── data.js         ALLE Inhalte – diese Datei wird gepflegt
    ├── store.js        Laden/Speichern, Lernfortschritt, Lernfeld-Filter
    ├── crossword.js    Kreuzworträtsel-Generator
    ├── extras.js       Punkte, Serie, Abzeichen, Tages-Training, Paare-Spiel, Wiederhol-Abstände
    ├── admin.js        Verwaltung
    └── app.js          Start, Themen, Paragrafen, Karteikarten, Quiz, Rätsel
```
