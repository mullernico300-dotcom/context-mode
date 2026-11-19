/*
 * LERNINHALTE – diese Datei ist die einzige Stelle, an der Inhalte gepflegt werden.
 *
 * Bearbeiten: entweder direkt hier im Text-Editor ODER bequem in der App unter
 * "Verwaltung" und danach dort "data.js exportieren" und diese Datei ersetzen.
 *
 * Aufbau eines Lernfelds:
 *   id          eindeutiger Kurzname ohne Leerzeichen (z. B. "lf4")
 *   nummer      Nummer des Lernfelds
 *   titel       Überschrift
 *   beschreibung kurzer Einleitungssatz
 *   farbe       Akzentfarbe (Hex)
 *   lernziele   Liste von Sätzen
 *   themen      Infoboxen: { titel, text, merke }   (im Text: "- " = Aufzählung, **fett**)
 *   karten      Karteikarten: { vorne, hinten }
 *   quiz        Fragen: { frage, antworten:[4 Texte], richtig: 0-3, stufe: 1-3, erklaerung }
 *   raetsel     Kreuzworträtsel: { wort, hinweis }   (ein Wort, ohne Leerzeichen)
 *   paragrafen  Paragrafen in einfacher Sprache: { gruppe, ref, text }
 *   registerId / registerStand  Herkunft aus dem Lernregister (für die Wochen-Aktualisierung, nicht ändern)
 *   themenInfo  je Thema (Name der Paragrafen-Gruppe): { ueberblick, achten[], fallen[], pruefung: hoch|mittel|gering, pruefungText, quelle }
 *   kurz        optionales Kürzel statt "LF <nummer>" (z. B. "SK" für ein Fach ohne LF-Nummer)
 *
 * Hinweis: Es werden ausschließlich Lernfelder angezeigt. Einträge, die als
 * EStG-/USt-Seminar benannt sind, blendet die App automatisch aus.
 */
window.LERN_DATEN = {
  "titel": "Lernfeld-Trainer",
  "untertitel": "Erklären, üben, spielen – alle Lernfelder an einem Ort.",
  "lernfelder": [
    {
      "id": "lf1",
      "nummer": 1,
      "titel": "Ausbildung und Betrieb mitgestalten",
      "beschreibung": "Duales System, Ausbildungsvertrag sowie Rechte und Pflichten in der Ausbildung.",
      "farbe": "#6366f1",
      "lernziele": [
        "Ich kann das duale Ausbildungssystem und seine Lernorte erklären.",
        "Ich kenne die wichtigsten Inhalte des Berufsausbildungsvertrags.",
        "Ich kann Rechte und Pflichten von Auszubildenden und Ausbildenden unterscheiden.",
        "Ich weiß, wie ein Ausbildungsverhältnis beginnt und endet."
      ],
      "themen": [
        {
          "titel": "Das duale System",
          "text": "Die Berufsausbildung findet an **zwei Lernorten** statt:\n- **Betrieb:** vermittelt die praktischen Fertigkeiten nach der Ausbildungsordnung.\n- **Berufsschule:** vermittelt die Theorie nach dem Rahmenlehrplan, gegliedert in Lernfelder.\nÜberwacht wird die Ausbildung von der **zuständigen Stelle** (der Kammer). Sie führt das Verzeichnis der Ausbildungsverhältnisse und nimmt die Prüfungen ab.",
          "merke": "Dual = zwei Lernorte: Betrieb (Praxis) und Berufsschule (Theorie)."
        },
        {
          "titel": "Der Berufsausbildungsvertrag",
          "text": "Grundlage ist das **Berufsbildungsgesetz (BBiG)**. Der Vertrag wird zwischen Ausbildendem und Auszubildendem geschlossen; bei Minderjährigen unterschreiben zusätzlich die gesetzlichen Vertreter.\nMindestinhalte sind unter anderem:\n- Art, Gliederung und Ziel der Ausbildung\n- Beginn und Dauer\n- Dauer der täglichen Ausbildungszeit\n- Dauer der Probezeit\n- Höhe der Vergütung\n- Dauer des Urlaubs\n- Voraussetzungen der Kündigung",
          "merke": "Die Probezeit dauert mindestens 1 Monat und höchstens 4 Monate."
        },
        {
          "titel": "Rechte und Pflichten",
          "text": "**Pflichten der Auszubildenden:**\n- Lernpflicht und sorgfältiges Ausführen der Aufgaben\n- Weisungen befolgen, Betriebsordnung beachten\n- Berufsschule besuchen, Ausbildungsnachweis führen\n- Verschwiegenheit über Betriebs- und Mandantengeheimnisse\n**Pflichten der Ausbildenden:**\n- Ausbildungspflicht: alle Inhalte planmäßig vermitteln\n- Ausbildungsmittel kostenlos bereitstellen\n- für die Berufsschule und Prüfungen freistellen\n- angemessene Vergütung zahlen\n- am Ende ein Zeugnis ausstellen",
          "merke": "Die Pflichten der einen Seite sind die Rechte der anderen."
        },
        {
          "titel": "Beginn und Ende der Ausbildung",
          "text": "Die Ausbildung beginnt mit der **Probezeit**. In dieser Zeit können beide Seiten jederzeit **ohne Frist** kündigen.\nNach der Probezeit gilt:\n- Kündigung aus **wichtigem Grund** ohne Frist (beide Seiten)\n- Auszubildende mit **4 Wochen Frist**, wenn sie die Ausbildung aufgeben oder den Beruf wechseln\n- Jede Kündigung muss **schriftlich** erfolgen\nDas Ausbildungsverhältnis endet regulär mit dem Ablauf der Ausbildungszeit oder vorher mit Bekanntgabe des Bestehens der Abschlussprüfung.",
          "merke": "Nach der Probezeit kann der Betrieb nur noch aus wichtigem Grund kündigen."
        }
      ],
      "karten": [
        {
          "vorne": "Was bedeutet „duales System“?",
          "hinten": "Ausbildung an zwei Lernorten: im Betrieb (Praxis) und in der Berufsschule (Theorie)."
        },
        {
          "vorne": "Welches Gesetz regelt die Berufsausbildung?",
          "hinten": "Das Berufsbildungsgesetz (BBiG)."
        },
        {
          "vorne": "Wie lange dauert die Probezeit?",
          "hinten": "Mindestens 1 Monat, höchstens 4 Monate."
        },
        {
          "vorne": "Wie kann in der Probezeit gekündigt werden?",
          "hinten": "Jederzeit, ohne Frist und ohne Angabe von Gründen – aber schriftlich."
        },
        {
          "vorne": "Wann dürfen Auszubildende nach der Probezeit ordentlich kündigen?",
          "hinten": "Mit 4 Wochen Frist, wenn sie die Berufsausbildung aufgeben oder einen anderen Beruf erlernen wollen."
        },
        {
          "vorne": "Nenne drei Pflichten der Auszubildenden.",
          "hinten": "Zum Beispiel: Lernpflicht, Weisungen befolgen, Berufsschule besuchen, Ausbildungsnachweis führen, Verschwiegenheit."
        },
        {
          "vorne": "Nenne drei Pflichten der Ausbildenden.",
          "hinten": "Zum Beispiel: Ausbildungspflicht, Vergütung zahlen, Ausbildungsmittel stellen, für die Berufsschule freistellen, Zeugnis ausstellen."
        },
        {
          "vorne": "Was ist die „zuständige Stelle“?",
          "hinten": "Die Kammer. Sie überwacht die Ausbildung, führt das Verzeichnis der Ausbildungsverhältnisse und nimmt Prüfungen ab."
        },
        {
          "vorne": "Wann endet das Ausbildungsverhältnis?",
          "hinten": "Mit Ablauf der Ausbildungszeit oder früher mit Bekanntgabe des Bestehens der Abschlussprüfung."
        },
        {
          "vorne": "Wie lange dürfen Jugendliche höchstens arbeiten?",
          "hinten": "Nach dem Jugendarbeitsschutzgesetz grundsätzlich 8 Stunden täglich und 40 Stunden wöchentlich."
        }
      ],
      "quiz": [
        {
          "frage": "An welchen zwei Lernorten findet die duale Ausbildung statt?",
          "antworten": [
            "Betrieb und Berufsschule",
            "Betrieb und Universität",
            "Berufsschule und Kammer",
            "Kammer und Finanzamt"
          ],
          "richtig": 0,
          "stufe": 1,
          "erklaerung": "Dual heißt: Praxis im Betrieb, Theorie in der Berufsschule."
        },
        {
          "frage": "Welches Gesetz ist die wichtigste Grundlage der Berufsausbildung?",
          "antworten": [
            "Handelsgesetzbuch",
            "Berufsbildungsgesetz",
            "Betriebsverfassungsgesetz",
            "Kündigungsschutzgesetz"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Das BBiG regelt Vertrag, Rechte, Pflichten und Prüfungen."
        },
        {
          "frage": "Wer muss bei einer 17-jährigen Auszubildenden den Vertrag zusätzlich unterschreiben?",
          "antworten": [
            "Die Klassenlehrkraft",
            "Die Kammer",
            "Die gesetzlichen Vertreter",
            "Niemand"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "Minderjährige sind beschränkt geschäftsfähig – die gesetzlichen Vertreter müssen zustimmen."
        },
        {
          "frage": "Wie lange darf die Probezeit höchstens dauern?",
          "antworten": [
            "1 Monat",
            "3 Monate",
            "4 Monate",
            "6 Monate"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "Mindestens 1 Monat, höchstens 4 Monate."
        },
        {
          "frage": "Was gehört NICHT zu den Pflichten der Auszubildenden?",
          "antworten": [
            "Berufsschule besuchen",
            "Ausbildungsmittel selbst bezahlen",
            "Ausbildungsnachweis führen",
            "Weisungen befolgen"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Ausbildungsmittel stellt der Ausbildende kostenlos zur Verfügung."
        },
        {
          "frage": "Welche Form ist für eine Kündigung des Ausbildungsverhältnisses vorgeschrieben?",
          "antworten": [
            "Mündlich genügt",
            "Per Telefon",
            "Schriftlich",
            "Notariell beurkundet"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "Die Kündigung muss schriftlich erfolgen."
        },
        {
          "frage": "Wer überwacht die Durchführung der Berufsausbildung?",
          "antworten": [
            "Das Arbeitsgericht",
            "Die zuständige Stelle (Kammer)",
            "Die Berufsschule",
            "Die Agentur für Arbeit"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Die Kammer führt auch das Verzeichnis der Ausbildungsverhältnisse."
        },
        {
          "frage": "Ein Auszubildender möchte nach der Probezeit einen anderen Beruf erlernen. Welche Kündigungsfrist gilt?",
          "antworten": [
            "Keine Frist",
            "2 Wochen",
            "4 Wochen",
            "3 Monate"
          ],
          "richtig": 2,
          "stufe": 3,
          "erklaerung": "Bei Berufsaufgabe oder Berufswechsel können Auszubildende mit 4 Wochen Frist kündigen."
        },
        {
          "frage": "Unter welcher Voraussetzung kann der Ausbildungsbetrieb nach der Probezeit kündigen?",
          "antworten": [
            "Jederzeit mit 4 Wochen Frist",
            "Nur aus wichtigem Grund",
            "Nur mit Zustimmung der Berufsschule",
            "Gar nicht"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "Nach der Probezeit ist für den Betrieb nur die fristlose Kündigung aus wichtigem Grund möglich."
        },
        {
          "frage": "Wann endet das Ausbildungsverhältnis, wenn die Abschlussprüfung vor Vertragsende bestanden wird?",
          "antworten": [
            "Am vertraglich vereinbarten Enddatum",
            "Am Ende des Monats",
            "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss",
            "Am Tag der Zeugnisübergabe in der Schule"
          ],
          "richtig": 2,
          "stufe": 3,
          "erklaerung": "Mit der Bekanntgabe des Bestehens endet die Ausbildung sofort."
        }
      ],
      "raetsel": [
        {
          "wort": "PROBEZEIT",
          "hinweis": "Beginn der Ausbildung, 1 bis 4 Monate"
        },
        {
          "wort": "BERUFSSCHULE",
          "hinweis": "Lernort für die Theorie"
        },
        {
          "wort": "KAMMER",
          "hinweis": "Zuständige Stelle, die die Ausbildung überwacht"
        },
        {
          "wort": "ZEUGNIS",
          "hinweis": "Erhält man am Ende der Ausbildung vom Betrieb"
        },
        {
          "wort": "VERGÜTUNG",
          "hinweis": "Monatliche Zahlung an Auszubildende"
        },
        {
          "wort": "KÜNDIGUNG",
          "hinweis": "Einseitige Beendigung des Vertrags, nur schriftlich"
        },
        {
          "wort": "URLAUB",
          "hinweis": "Bezahlte Erholungszeit"
        },
        {
          "wort": "DUAL",
          "hinweis": "So heißt das System mit zwei Lernorten"
        },
        {
          "wort": "LERNPFLICHT",
          "hinweis": "Wichtigste Pflicht der Auszubildenden"
        },
        {
          "wort": "BETRIEB",
          "hinweis": "Lernort für die Praxis"
        }
      ],
      "paragrafen": []
    },
    {
      "id": "lf2",
      "nummer": 2,
      "titel": "Geschäftsvorfälle erfassen und buchen",
      "beschreibung": "Von der Inventur über die Bilanz bis zum Buchungssatz.",
      "farbe": "#0ea5a4",
      "lernziele": [
        "Ich kann Inventur, Inventar und Bilanz unterscheiden.",
        "Ich kann den Aufbau der Bilanz erklären.",
        "Ich kann einfache Buchungssätze bilden.",
        "Ich weiß, wie Bestands- und Erfolgskonten abgeschlossen werden."
      ],
      "themen": [
        {
          "titel": "Inventur, Inventar, Bilanz",
          "text": "- **Inventur:** die Tätigkeit – alle Vermögensteile und Schulden werden mengen- und wertmäßig aufgenommen (zählen, messen, wiegen, schätzen).\n- **Inventar:** das Ergebnis – ein ausführliches Verzeichnis in Staffelform: Vermögen, Schulden, Reinvermögen.\n- **Bilanz:** die Kurzfassung in Kontenform, ohne Mengenangaben.",
          "merke": "Inventur ist die Tätigkeit, Inventar das Verzeichnis, Bilanz die Kurzfassung."
        },
        {
          "titel": "Aufbau der Bilanz",
          "text": "**Aktiva (links)** zeigen die Mittelverwendung:\n- Anlagevermögen\n- Umlaufvermögen\n**Passiva (rechts)** zeigen die Mittelherkunft:\n- Eigenkapital\n- Fremdkapital (Schulden)\nBeide Seiten sind immer gleich groß. Das Eigenkapital ergibt sich als Vermögen minus Schulden.",
          "merke": "Summe Aktiva = Summe Passiva."
        },
        {
          "titel": "Konten und Buchungssatz",
          "text": "Jeder Geschäftsvorfall wird auf mindestens zwei Konten gebucht – einmal im **Soll**, einmal im **Haben**.\n- **Aktivkonten:** Anfangsbestand und Zugänge im Soll, Abgänge im Haben.\n- **Passivkonten:** Anfangsbestand und Zugänge im Haben, Abgänge im Soll.\nDer Buchungssatz lautet immer **Soll an Haben**, zum Beispiel bei einer Barabhebung vom Bankkonto: Kasse an Bank.",
          "merke": "Keine Buchung ohne Beleg – und immer Soll an Haben."
        },
        {
          "titel": "Erfolgskonten",
          "text": "Aufwendungen und Erträge verändern das Eigenkapital.\n- **Aufwandskonten** werden im Soll gebucht (z. B. Miete, Löhne).\n- **Ertragskonten** werden im Haben gebucht (z. B. Umsatzerlöse, Zinserträge).\nBeide werden über das **Gewinn- und Verlustkonto (GuV)** abgeschlossen. Dessen Saldo – Gewinn oder Verlust – wird auf das Eigenkapitalkonto übertragen.",
          "merke": "Erträge größer als Aufwendungen = Gewinn."
        }
      ],
      "karten": [
        {
          "vorne": "Was ist die Inventur?",
          "hinten": "Die mengen- und wertmäßige Bestandsaufnahme aller Vermögensteile und Schulden zu einem Stichtag."
        },
        {
          "vorne": "Was ist das Inventar?",
          "hinten": "Das ausführliche Bestandsverzeichnis in Staffelform: Vermögen, Schulden, Reinvermögen."
        },
        {
          "vorne": "Wie berechnet man das Eigenkapital?",
          "hinten": "Vermögen minus Schulden."
        },
        {
          "vorne": "Was steht auf der Aktivseite der Bilanz?",
          "hinten": "Das Vermögen: Anlagevermögen und Umlaufvermögen (Mittelverwendung)."
        },
        {
          "vorne": "Was steht auf der Passivseite der Bilanz?",
          "hinten": "Das Kapital: Eigenkapital und Fremdkapital (Mittelherkunft)."
        },
        {
          "vorne": "Wie lautet die Grundform des Buchungssatzes?",
          "hinten": "Soll an Haben."
        },
        {
          "vorne": "Auf welcher Seite nehmen Aktivkonten zu?",
          "hinten": "Im Soll."
        },
        {
          "vorne": "Auf welcher Seite nehmen Passivkonten zu?",
          "hinten": "Im Haben."
        },
        {
          "vorne": "Was ist ein Aktivtausch?",
          "hinten": "Ein Aktivposten nimmt zu, ein anderer nimmt um denselben Betrag ab. Die Bilanzsumme bleibt gleich."
        },
        {
          "vorne": "Über welches Konto werden Erfolgskonten abgeschlossen?",
          "hinten": "Über das Gewinn- und Verlustkonto (GuV)."
        }
      ],
      "quiz": [
        {
          "frage": "Wie nennt man die Bestandsaufnahme durch Zählen, Messen und Wiegen?",
          "antworten": [
            "Inventar",
            "Inventur",
            "Bilanz",
            "Buchung"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Die Inventur ist die Tätigkeit, das Inventar ihr Ergebnis."
        },
        {
          "frage": "Was gilt für jede Bilanz?",
          "antworten": [
            "Aktiva = Passiva",
            "Aktiva > Passiva",
            "Soll > Haben",
            "Vermögen = Schulden"
          ],
          "richtig": 0,
          "stufe": 1,
          "erklaerung": "Beide Seiten der Bilanz sind immer gleich groß."
        },
        {
          "frage": "Auf welcher Seite der Bilanz steht das Eigenkapital?",
          "antworten": [
            "Aktivseite",
            "Passivseite",
            "Auf beiden Seiten",
            "Es steht nicht in der Bilanz"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Die Passivseite zeigt die Mittelherkunft: Eigen- und Fremdkapital."
        },
        {
          "frage": "Wie lautet der Grundsatz zur Belegpflicht?",
          "antworten": [
            "Keine Buchung ohne Beleg",
            "Kein Beleg ohne Unterschrift",
            "Jede Buchung braucht zwei Belege",
            "Belege sind freiwillig"
          ],
          "richtig": 0,
          "stufe": 1,
          "erklaerung": "Jede Buchung muss durch einen Beleg nachweisbar sein."
        },
        {
          "frage": "Bargeld wird vom Bankkonto abgehoben. Wie lautet der Buchungssatz?",
          "antworten": [
            "Bank an Kasse",
            "Kasse an Bank",
            "Kasse an Eigenkapital",
            "Bank an Forderungen"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Die Kasse (Aktivkonto) nimmt im Soll zu, die Bank im Haben ab."
        },
        {
          "frage": "Ein Kunde überweist eine offene Rechnung. Wie wird gebucht?",
          "antworten": [
            "Forderungen an Bank",
            "Bank an Verbindlichkeiten",
            "Bank an Forderungen",
            "Kasse an Bank"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "Das Bankguthaben steigt (Soll), die Forderung erlischt (Haben)."
        },
        {
          "frage": "Auf welcher Seite werden Aufwendungen gebucht?",
          "antworten": [
            "Im Haben",
            "Im Soll",
            "Auf beiden Seiten",
            "Gar nicht, nur in der Bilanz"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Aufwendungen mindern das Eigenkapital und stehen daher im Soll."
        },
        {
          "frage": "Waren werden auf Ziel eingekauft. Welche Bilanzveränderung liegt vor?",
          "antworten": [
            "Aktivtausch",
            "Passivtausch",
            "Aktiv-Passiv-Mehrung",
            "Aktiv-Passiv-Minderung"
          ],
          "richtig": 2,
          "stufe": 3,
          "erklaerung": "Vermögen und Verbindlichkeiten nehmen zu – die Bilanzsumme steigt."
        },
        {
          "frage": "Eine Lieferantenverbindlichkeit wird in ein Darlehen umgewandelt. Was liegt vor?",
          "antworten": [
            "Aktivtausch",
            "Passivtausch",
            "Bilanzverlängerung",
            "Bilanzverkürzung"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "Zwei Passivposten ändern sich gegenläufig, die Bilanzsumme bleibt gleich."
        },
        {
          "frage": "Wohin wird der Saldo des GuV-Kontos übertragen?",
          "antworten": [
            "Auf das Bankkonto",
            "Auf das Eigenkapitalkonto",
            "Auf das Kassenkonto",
            "Auf das Konto Verbindlichkeiten"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "Gewinn erhöht, Verlust mindert das Eigenkapital."
        }
      ],
      "raetsel": [
        {
          "wort": "INVENTUR",
          "hinweis": "Bestandsaufnahme durch Zählen, Messen, Wiegen"
        },
        {
          "wort": "INVENTAR",
          "hinweis": "Ausführliches Bestandsverzeichnis in Staffelform"
        },
        {
          "wort": "BILANZ",
          "hinweis": "Kurzfassung des Inventars in Kontenform"
        },
        {
          "wort": "AKTIVA",
          "hinweis": "Linke Seite der Bilanz"
        },
        {
          "wort": "PASSIVA",
          "hinweis": "Rechte Seite der Bilanz"
        },
        {
          "wort": "SOLL",
          "hinweis": "Linke Seite eines Kontos"
        },
        {
          "wort": "HABEN",
          "hinweis": "Rechte Seite eines Kontos"
        },
        {
          "wort": "BELEG",
          "hinweis": "Ohne ihn keine Buchung"
        },
        {
          "wort": "EIGENKAPITAL",
          "hinweis": "Vermögen minus Schulden"
        },
        {
          "wort": "AUFWAND",
          "hinweis": "Mindert das Eigenkapital"
        },
        {
          "wort": "ERTRAG",
          "hinweis": "Erhöht das Eigenkapital"
        },
        {
          "wort": "SALDO",
          "hinweis": "Unterschied zwischen Soll- und Habenseite"
        }
      ],
      "paragrafen": []
    },
    {
      "id": "lf3",
      "nummer": 3,
      "titel": "Verträge schließen und erfüllen",
      "beschreibung": "Geschäftsfähigkeit, Willenserklärungen und der Kaufvertrag.",
      "farbe": "#f59e0b",
      "lernziele": [
        "Ich kann die Stufen der Geschäftsfähigkeit unterscheiden.",
        "Ich kann erklären, wie ein Vertrag zustande kommt.",
        "Ich kenne die Pflichten aus dem Kaufvertrag.",
        "Ich kann die Rechte des Käufers bei Mängeln nennen."
      ],
      "themen": [
        {
          "titel": "Geschäftsfähigkeit",
          "text": "Geschäftsfähigkeit ist die Fähigkeit, Rechtsgeschäfte wirksam abzuschließen.\n- **Geschäftsunfähig:** Kinder unter 7 Jahren. Ihre Willenserklärungen sind nichtig.\n- **Beschränkt geschäftsfähig:** von 7 bis unter 18 Jahren. Verträge ohne Zustimmung der gesetzlichen Vertreter sind schwebend unwirksam.\n- **Voll geschäftsfähig:** ab 18 Jahren.\nAusnahme: Was Minderjährige mit eigenem Taschengeld sofort bezahlen, ist von Anfang an wirksam.",
          "merke": "Unter 7: geschäftsunfähig. 7 bis 17: beschränkt. Ab 18: voll geschäftsfähig."
        },
        {
          "titel": "So entsteht ein Vertrag",
          "text": "Ein Vertrag kommt durch zwei **übereinstimmende Willenserklärungen** zustande: **Antrag** (Angebot) und **Annahme**.\n- Eine Schaufensterauslage oder ein Prospekt ist kein Antrag, sondern nur eine Aufforderung, selbst ein Angebot abzugeben.\n- Schweigen gilt grundsätzlich nicht als Annahme.\n- Verträge sind in der Regel formfrei. Ausnahme zum Beispiel: Der Grundstückskauf muss notariell beurkundet werden.",
          "merke": "Antrag + Annahme = Vertrag."
        },
        {
          "titel": "Der Kaufvertrag",
          "text": "Mit dem Kaufvertrag entstehen Pflichten (**Verpflichtungsgeschäft**):\n- **Verkäufer:** Sache mangelfrei übergeben und das Eigentum verschaffen.\n- **Käufer:** Kaufpreis zahlen und die Sache abnehmen.\nMit Übergabe und Zahlung werden die Pflichten erfüllt (**Erfüllungsgeschäft**).\n**Besitz** ist die tatsächliche Herrschaft über eine Sache, **Eigentum** die rechtliche.",
          "merke": "Wer ein Buch ausleiht, ist Besitzer – Eigentümer bleibt der Verleiher."
        },
        {
          "titel": "Wenn etwas schiefgeht",
          "text": "Ist die Ware mangelhaft, hat der Käufer zunächst Anspruch auf **Nacherfüllung**: Nachbesserung oder Ersatzlieferung.\nErst wenn die Nacherfüllung scheitert, kommen in Betracht:\n- Rücktritt vom Vertrag\n- Minderung des Kaufpreises\n- Schadensersatz\nMängelansprüche bei beweglichen Sachen verjähren in der Regel nach **2 Jahren**. Die regelmäßige Verjährungsfrist beträgt **3 Jahre** und beginnt am Ende des Jahres, in dem der Anspruch entstanden ist.",
          "merke": "Zuerst Nacherfüllung – dann Rücktritt oder Minderung."
        }
      ],
      "karten": [
        {
          "vorne": "Was bedeutet Geschäftsfähigkeit?",
          "hinten": "Die Fähigkeit, Rechtsgeschäfte selbstständig und wirksam abzuschließen."
        },
        {
          "vorne": "Wer ist geschäftsunfähig?",
          "hinten": "Kinder unter 7 Jahren (und dauerhaft Geisteskranke)."
        },
        {
          "vorne": "Was bedeutet „schwebend unwirksam“?",
          "hinten": "Der Vertrag eines beschränkt Geschäftsfähigen wird erst wirksam, wenn die gesetzlichen Vertreter ihn genehmigen."
        },
        {
          "vorne": "Wie kommt ein Vertrag zustande?",
          "hinten": "Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme."
        },
        {
          "vorne": "Ist eine Schaufensterauslage ein verbindliches Angebot?",
          "hinten": "Nein. Sie ist nur eine Aufforderung an Kunden, selbst ein Angebot abzugeben."
        },
        {
          "vorne": "Welche Pflichten hat der Verkäufer?",
          "hinten": "Die Sache mangelfrei übergeben und dem Käufer das Eigentum verschaffen."
        },
        {
          "vorne": "Welche Pflichten hat der Käufer?",
          "hinten": "Den Kaufpreis zahlen und die Sache abnehmen."
        },
        {
          "vorne": "Unterschied zwischen Besitz und Eigentum?",
          "hinten": "Besitz = tatsächliche Herrschaft über eine Sache. Eigentum = rechtliche Herrschaft."
        },
        {
          "vorne": "Welches Recht hat der Käufer bei einem Mangel zuerst?",
          "hinten": "Nacherfüllung: Nachbesserung oder Ersatzlieferung."
        },
        {
          "vorne": "Wie lang ist die regelmäßige Verjährungsfrist?",
          "hinten": "3 Jahre, beginnend am Ende des Jahres, in dem der Anspruch entstanden ist."
        }
      ],
      "quiz": [
        {
          "frage": "Ab welchem Alter ist man voll geschäftsfähig?",
          "antworten": [
            "16 Jahre",
            "18 Jahre",
            "21 Jahre",
            "14 Jahre"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Mit Vollendung des 18. Lebensjahres."
        },
        {
          "frage": "Wodurch kommt ein Vertrag zustande?",
          "antworten": [
            "Durch Antrag und Annahme",
            "Durch Zahlung",
            "Durch Lieferung",
            "Durch eine Rechnung"
          ],
          "richtig": 0,
          "stufe": 1,
          "erklaerung": "Zwei übereinstimmende Willenserklärungen sind nötig."
        },
        {
          "frage": "Was ist die Hauptpflicht des Käufers?",
          "antworten": [
            "Die Ware prüfen",
            "Den Kaufpreis zahlen und die Ware abnehmen",
            "Eine Quittung ausstellen",
            "Die Ware versichern"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Zahlung und Abnahme sind die Pflichten des Käufers."
        },
        {
          "frage": "Ein Sechsjähriger kauft ein Spielzeug. Der Vertrag ist …",
          "antworten": [
            "wirksam",
            "schwebend unwirksam",
            "nichtig",
            "anfechtbar"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "Kinder unter 7 sind geschäftsunfähig – ihre Willenserklärungen sind nichtig."
        },
        {
          "frage": "Wer ein Auto mietet, ist …",
          "antworten": [
            "Eigentümer",
            "Besitzer",
            "Eigentümer und Besitzer",
            "keines von beidem"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Der Mieter hat die tatsächliche Herrschaft (Besitz), Eigentümer bleibt der Vermieter."
        },
        {
          "frage": "Wie ist eine Ware im Schaufenster rechtlich einzuordnen?",
          "antworten": [
            "Als verbindlicher Antrag",
            "Als Annahme",
            "Als Aufforderung, ein Angebot abzugeben",
            "Als Kaufvertrag"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "Der Händler will sich nicht gegenüber jedem binden."
        },
        {
          "frage": "Eine 15-Jährige kauft ohne Wissen der Eltern ein teures Smartphone auf Raten. Der Vertrag ist …",
          "antworten": [
            "sofort wirksam",
            "schwebend unwirksam",
            "von Anfang an nichtig",
            "nur mündlich gültig"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Er hängt von der Genehmigung der gesetzlichen Vertreter ab."
        },
        {
          "frage": "Welches Recht steht dem Käufer bei mangelhafter Ware vorrangig zu?",
          "antworten": [
            "Rücktritt",
            "Minderung",
            "Nacherfüllung",
            "Schadensersatz"
          ],
          "richtig": 2,
          "stufe": 3,
          "erklaerung": "Der Verkäufer bekommt zuerst die Chance, nachzubessern oder neu zu liefern."
        },
        {
          "frage": "Welcher Vertrag muss notariell beurkundet werden?",
          "antworten": [
            "Kauf eines Gebrauchtwagens",
            "Kauf eines Grundstücks",
            "Mietvertrag über ein Zimmer",
            "Kauf eines Laptops"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "Für Grundstückskäufe schreibt das Gesetz die notarielle Beurkundung vor."
        },
        {
          "frage": "Ein Anspruch entsteht im März 2024. Wann beginnt die regelmäßige Verjährungsfrist?",
          "antworten": [
            "Im März 2024",
            "Am 31.12.2024",
            "Am 01.01.2024",
            "Im März 2025"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "Sie beginnt mit dem Schluss des Jahres, in dem der Anspruch entstanden ist."
        }
      ],
      "raetsel": [
        {
          "wort": "ANTRAG",
          "hinweis": "Erste Willenserklärung beim Vertragsschluss"
        },
        {
          "wort": "ANNAHME",
          "hinweis": "Zweite Willenserklärung beim Vertragsschluss"
        },
        {
          "wort": "KAUFVERTRAG",
          "hinweis": "Verpflichtet zu Lieferung und Zahlung"
        },
        {
          "wort": "EIGENTUM",
          "hinweis": "Rechtliche Herrschaft über eine Sache"
        },
        {
          "wort": "BESITZ",
          "hinweis": "Tatsächliche Herrschaft über eine Sache"
        },
        {
          "wort": "MANGEL",
          "hinweis": "Fehler an der gelieferten Ware"
        },
        {
          "wort": "NICHTIG",
          "hinweis": "Von Anfang an unwirksam"
        },
        {
          "wort": "VERJÄHRUNG",
          "hinweis": "Nach ihr kann ein Anspruch nicht mehr durchgesetzt werden"
        },
        {
          "wort": "RÜCKTRITT",
          "hinweis": "Rückabwicklung des Vertrags nach gescheiterter Nacherfüllung"
        },
        {
          "wort": "MINDERUNG",
          "hinweis": "Herabsetzung des Kaufpreises"
        },
        {
          "wort": "NOTAR",
          "hinweis": "Beurkundet den Grundstückskauf"
        }
      ],
      "paragrafen": []
    },
    {
      "id": "lf5",
      "nummer": 5,
      "titel": "Sozialversicherung und Lohnnebenkosten",
      "beschreibung": "Die fünf Zweige der Sozialversicherung, ihre Beiträge und die Pflichten des Arbeitgebers.",
      "farbe": "#0f6b6f",
      "lernziele": [
        "Ich kann die fünf Zweige der Sozialversicherung und ihre Träger nennen.",
        "Ich weiß, wer die Beiträge trägt und wer sie zahlt.",
        "Ich kenne die Beitragssätze und Beitragsbemessungsgrenzen 2026.",
        "Ich kann Umlagen U1, U2 und U3 unterscheiden."
      ],
      "themen": [],
      "paragrafen": [
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "SGB V",
          "text": "Die Krankenversicherung (SGB V) zahlt Vorsorge, Krankenbehandlung, Krankengeld, Zahnersatz, Reha und das Mutterschaftsgeld. Träger sind die Krankenkassen."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "SGB XI",
          "text": "Die Pflegeversicherung hilft bei Pflegebedürftigkeit. Träger sind die Pflegekassen bei den Krankenkassen."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "SGB VI",
          "text": "Die Rentenversicherung zahlt Reha, Alters-, Erwerbsminderungs- und Hinterbliebenenrenten und Zuschüsse zur Krankenversicherung der Rentner. Träger ist die Deutsche Rentenversicherung."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "SGB III",
          "text": "Die Arbeitsförderung zahlt Arbeitslosengeld, Kurzarbeitergeld und Insolvenzgeld. Sie vermittelt Arbeit, berät zum Beruf und fördert Aus- und Weiterbildung. Träger ist die Bundesagentur für Arbeit."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "SGB VII, § 150 Abs. 1 SGB VII",
          "text": "Die Unfallversicherung bietet Prävention, Heilbehandlung, Verletztengeld sowie Unfall- und Hinterbliebenenrenten. Den Beitrag zahlt allein der Unternehmer. Träger sind die Berufsgenossenschaften."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 249 Abs. 1 SGB V",
          "text": "Den Beitrag zur Krankenversicherung samt Zusatzbeitrag tragen Arbeitgeber und Arbeitnehmer je zur Hälfte."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 58 Abs. 1 SGB XI",
          "text": "Den Pflegeversicherungsbeitrag tragen beide je zur Hälfte. Den Zuschlag für Kinderlose zahlt der Arbeitnehmer allein. In Sachsen ist die Aufteilung anders (§ 58 Abs. 3 SGB XI)."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 168 Abs. 1 Nr. 1 SGB VI",
          "text": "Den Rentenversicherungsbeitrag tragen Arbeitgeber und Arbeitnehmer je zur Hälfte."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 346 Abs. 1 SGB III",
          "text": "Den Beitrag zur Arbeitslosenversicherung tragen beide je zur Hälfte."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 28d SGB IV",
          "text": "Der Gesamtsozialversicherungsbeitrag besteht aus den Beiträgen zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 28e Abs. 1, § 28g SGB IV",
          "text": "Der Arbeitgeber schuldet und zahlt den Gesamtsozialversicherungsbeitrag. Den Arbeitnehmeranteil zieht er vom Lohn ab."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 28h Abs. 1 SGB IV",
          "text": "Einzugsstelle ist die Krankenkasse des Arbeitnehmers. Sie verteilt das Geld an die anderen Träger."
        },
        {
          "gruppe": "Die fünf Zweige der Sozialversicherung",
          "ref": "§ 23 Abs. 1 Satz 2 SGB IV",
          "text": "Die Beiträge sind spätestens am drittletzten Bankarbeitstag des Monats fällig, in dem gearbeitet wurde."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 241 SGB V",
          "text": "Der allgemeine Beitragssatz zur Krankenversicherung beträgt 14,6 %. Davon zahlt der Arbeitnehmer 7,3 %."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 242, § 242a SGB V",
          "text": "Dazu kommt ein Zusatzbeitrag der Krankenkasse. Der durchschnittliche Zusatzbeitrag 2026 beträgt 2,9 %, der Arbeitnehmer zahlt 1,45 %."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 6 Abs. 6 und 7, § 223 Abs. 3 SGB V",
          "text": "Die Versicherungspflichtgrenze 2026 liegt bei 77.400 € im Jahr (6.450 € im Monat). Die Beitragsbemessungsgrenze für Kranken- und Pflegeversicherung beträgt 69.750 € im Jahr (5.812,50 € im Monat). Verdienst darüber ist beitragsfrei."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 55 Abs. 1 SGB XI",
          "text": "Der Beitragssatz zur Pflegeversicherung beträgt 3,6 %. Der Arbeitnehmer zahlt 1,8 %."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 55 Abs. 3 SGB XI",
          "text": "Kinderlose ab 23 Jahren zahlen 0,6 % Zuschlag, der Arbeitnehmer dann also 2,4 %. Ab dem 2. Kind unter 25 Jahren gibt es einen Abschlag von 0,25 % je Kind. Der Arbeitnehmeranteil beträgt bei 2 Kindern 1,55 %, bei 3 Kindern 1,30 %, bei 4 Kindern 1,05 % und ab 5 Kindern 0,80 %."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 158, § 159 SGB VI",
          "text": "Der Beitragssatz zur Rentenversicherung beträgt 18,6 %. Der Arbeitnehmer zahlt 9,3 %. Die Beitragsbemessungsgrenze 2026 beträgt bundesweit 101.400 € im Jahr (8.450 € im Monat)."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 341 Abs. 2 und 4 SGB III",
          "text": "Der Beitragssatz zur Arbeitslosenversicherung beträgt 2,6 %. Der Arbeitnehmer zahlt 1,3 %. Es gilt die Beitragsbemessungsgrenze der Rentenversicherung."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 1, § 3 Abs. 1 AAG",
          "text": "Die Umlage U1 (Entgeltfortzahlung bei Krankheit) zahlen nur Arbeitgeber mit bis zu 30 Arbeitnehmern. Azubis und schwerbehinderte Menschen zählen nicht mit, Teilzeitkräfte anteilig. Die Umlage U2 (Mutterschaft) zahlen alle Arbeitgeber. Sie erstattet 100 % (Zuschuss zum Mutterschaftsgeld nach § 20 MuSchG und Mutterschutzlohn)."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§ 7 AAG",
          "text": "Die Umlagen trägt der Arbeitgeber allein. Die Höhe legt die Krankenkasse in ihrer Satzung fest."
        },
        {
          "gruppe": "Beiträge berechnen: Grenzen und Beitragssätze 2026",
          "ref": "§§ 358, 360 SGB III",
          "text": "Die Insolvenzgeldumlage (U3) zahlt nur der Arbeitgeber. 2026 beträgt sie 0,15 % des rentenversicherungspflichtigen Entgelts, auch für Auszubildende."
        }
      ],
      "karten": [],
      "quiz": [],
      "raetsel": [],
      "registerId": "0fbsnlzh1hsp4s16gp2y",
      "registerStand": 1794599471386,
      "themenInfo": {
        "Die fünf Zweige der Sozialversicherung": {
          "ueberblick": "Die gesetzliche Sozialversicherung hat fünf Zweige: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung. KV, PV, RV und AV tragen Arbeitgeber und Arbeitnehmer grundsätzlich je zur Hälfte; ihre Beiträge bilden zusammen den Gesamtsozialversicherungsbeitrag. Die Unfallversicherung zahlt der Arbeitgeber allein an die Berufsgenossenschaft. Der Arbeitgeber behält den Arbeitnehmeranteil vom Lohn ein und überweist alles an die Krankenkasse als Einzugsstelle.",
          "achten": [
            "Merksatz: 4 Zweige halb-halb (KV, PV, RV, AV), 1 Zweig nur Arbeitgeber (UV).",
            "Bei „Wer erhält die Beiträge?“: Gesamtsozialversicherungsbeitrag an die Krankenkasse (Einzugsstelle, § 28h SGB IV); UV-Beitrag direkt an die Berufsgenossenschaft; Minijob an die Minijob-Zentrale.",
            "Immer das passende Sozialgesetzbuch dazuschreiben (SGB V, XI, VI, III, VII)."
          ],
          "fallen": [
            "Unfallversicherung gehört nicht zum Gesamtsozialversicherungsbeitrag und hat keinen Arbeitnehmeranteil.",
            "Der Zusatzbeitrag zur KV wird ebenfalls halbiert (seit 2019), nicht vom Arbeitnehmer allein getragen.",
            "Kinderlosenzuschlag in der PV trägt nur der Arbeitnehmer."
          ],
          "pruefung": "mittel",
          "pruefungText": "Zweige, Träger und Beitragstragung werden eher als Kurzfragen gestellt (WiSo, mündliche Prüfung) oder als Einstieg in eine Entgeltabrechnung. In WiSo-Prüfungen kommt Sozialversicherung z. B. über Minijob-Fälle (welche Beiträge, an welche Stelle).",
          "quelle": "Lernregister"
        },
        "Beiträge berechnen: Grenzen und Beitragssätze 2026": {
          "ueberblick": "Der Beitrag ist beitragspflichtiges Entgelt mal Beitragssatz, höchstens bis zur Beitragsbemessungsgrenze. Es gibt zwei Grenzen: 5.812,50 € im Monat für KV und PV, 8.450 € für RV und AV. Die Versicherungspflichtgrenze (6.450 € im Monat) entscheidet dagegen, ob jemand überhaupt gesetzlich krankenversichert sein muss. Der Arbeitnehmeranteil beträgt im Normalfall 21,15 %, der PV-Satz hängt von der Kinderzahl ab.",
          "achten": [
            "1. Brutto mit BBG KV/PV (5.812,50 €) und RV/AV (8.450 €) vergleichen; jeweils den kleineren Wert als Basis nehmen.",
            "2. PV-Satz nach Kinderzahl/Alter bestimmen (kinderlos ab 23: 2,4 %; ein Kind 1,8 %; je weiteres Kind −0,25 %).",
            "3. Jeden Zweig einzeln rechnen und auf Cent runden: KV 7,3 %, ZKV halber Zusatzbeitrag, PV, RV 9,3 %, AV 1,3 %.",
            "4. Summe bilden und Probe mit dem Gesamtsatz (z. B. 21,15 % × Brutto, wenn keine Grenze überschritten)."
          ],
          "fallen": [
            "Beitragsbemessungsgrenze ≠ Versicherungspflichtgrenze: Die BBG deckelt den Beitrag, die JAEG entscheidet über die Pflicht zur gesetzlichen KV.",
            "Bei Brutto zwischen 5.812,50 € und 8.450 € unterschiedliche Basis: KV/PV gedeckelt, RV/AV vom vollen Brutto (Hildegard, Peter).",
            "Folie nennt „zum 01.01.2025“, die Zahlen sind aber die Werte 2026 (2025 wären 5.512,50 € und 8.050 €). Geprüft: Die Werte 5.812,50 €, 8.450 €, 6.450 €, 2,9 % und 0,15 % stimmen für 2026.",
            "Der PV-Abschlag gilt nur für Kinder unter 25 Jahren; der AG-Anteil bleibt immer 1,8 % (außer Sachsen)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Entgeltabrechnung ist Teil des Abschlussprüfungsbereichs „Finanzbuchhaltungen, Entgeltabrechnungen und Jahresabschlüsse“ (§ 15 StFachAngAusbV). Typisch: Beiträge mit BBG berechnen, AN- und AG-Anteil trennen und die Abrechnung buchen. Die Werte des Prüfungsjahres stehen meist im Aufgabentext.",
          "quelle": "Lernregister"
        }
      }
    },
    {
      "id": "lf6",
      "nummer": 6,
      "titel": "Einkauf über die Grenze und Steuerpflicht",
      "beschreibung": "Innergemeinschaftlicher Erwerb, Einfuhr aus dem Drittland und die persönliche Einkommensteuerpflicht.",
      "farbe": "#8a4fbf",
      "lernziele": [
        "Ich kann einen innergemeinschaftlichen Erwerb erkennen und prüfen.",
        "Ich kann Einfuhr und innergemeinschaftlichen Erwerb unterscheiden.",
        "Ich kann unbeschränkte und beschränkte Steuerpflicht erklären.",
        "Ich kenne die Veranlagungsarten für Ehepaare und die Abgabefristen."
      ],
      "themen": [],
      "karten": [],
      "quiz": [],
      "raetsel": [],
      "paragrafen": [
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1 Abs. 1 Nr. 5 UStG",
          "text": "Kaufst du als Unternehmen Ware aus einem anderen EU-Land, fällt dafür in Deutschland Umsatzsteuer an. Das nennt man „innergemeinschaftlicher Erwerb“ (igE)."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1a Abs. 1 UStG",
          "text": "Drei Dinge müssen stimmen: 1. Die Ware kommt wirklich von einem EU-Land in ein anderes. 2. Der Käufer ist ein Unternehmer und kauft für seine Firma. 3. Der Verkäufer ist auch ein Unternehmer und kein Kleinunternehmer."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1a Abs. 2 UStG",
          "text": "Bringt eine Firma ihre eigene Ware aus einem EU-Land dauerhaft nach Deutschland (z. B. ins eigene Lager), zählt das auch als Erwerb – obwohl niemand etwas gekauft hat. Das heißt „Verbringen“."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1a Abs. 3 UStG",
          "text": "Ausnahme für „Halbunternehmer“ (z. B. Kleinunternehmer, Ärzte mit nur steuerfreien Umsätzen): Kaufen sie nur wenig im EU-Ausland ein (unter der Erwerbsschwelle von 12.500 € im Jahr), müssen sie keinen Erwerb versteuern."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1a Abs. 4 UStG",
          "text": "Diese Halbunternehmer dürfen freiwillig auf die Erwerbsschwelle verzichten. Wer beim Einkauf seine USt-IdNr. angibt, hat damit verzichtet – und ist daran mindestens zwei Jahre gebunden."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 1b UStG",
          "text": "Bei neuen Fahrzeugen aus dem EU-Ausland gilt immer: Der Käufer versteuert in Deutschland. Das gilt sogar für Privatleute."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 3d Satz 1 UStG",
          "text": "Wo wird versteuert? Dort, wo die Ware am Ende der Fahrt ankommt. Landet sie in Deutschland, ist der Erwerb in Deutschland."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 3d Satz 2 UStG",
          "text": "Benutzt der Käufer die USt-IdNr. eines anderen Landes als des Ankunftslandes, muss er zusätzlich auch dort versteuern – so lange, bis er nachweist, dass im Ankunftsland versteuert wurde."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 4b UStG",
          "text": "In wenigen Fällen ist der Erwerb steuerfrei. Der Normalfall ist aber: Der Erwerb ist steuerpflichtig."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 10 Abs. 1 UStG",
          "text": "Die Steuer wird vom Entgelt berechnet. Das ist alles, was der Käufer bezahlt – ohne die Umsatzsteuer selbst."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 10 Abs. 4 Satz 1 Nr. 1 UStG",
          "text": "Beim Verbringen gibt es keinen Kaufpreis. Dann nimmt man den Einkaufspreis der Ware plus Nebenkosten (oder die Selbstkosten)."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 12 Abs. 1 und 2 UStG",
          "text": "Der normale Steuersatz ist 19 %. Für bestimmte Waren wie Lebensmittel oder Bücher gilt der ermäßigte Satz von 7 %."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 13 Abs. 1 Nr. 6 UStG",
          "text": "Die Steuer entsteht, wenn die Rechnung ausgestellt wird – spätestens aber am Ende des Monats nach dem Erwerb. Wann bezahlt wird, ist egal."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 13a Abs. 1 Nr. 2 UStG",
          "text": "Die Steuer schuldet der Käufer (Erwerber), nicht der Verkäufer."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 3 UStG",
          "text": "Die Erwerbsteuer darf der Unternehmer gleichzeitig als Vorsteuer abziehen. Meist ergibt das am Ende null. Die „Strafsteuer“ nach § 3d Satz 2 ist aber nicht abziehbar."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 17 Abs. 1 UStG",
          "text": "Wird der Preis später niedriger (z. B. durch Skonto oder Rabatt), müssen Erwerbsteuer und Vorsteuer entsprechend korrigiert werden."
        },
        {
          "gruppe": "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)",
          "ref": "§ 3 Abs. 6 Satz 1 UStG",
          "text": "Für den Verkäufer gilt: Seine Lieferung findet dort statt, wo der Transport beginnt. Dort ist sie als innergemeinschaftliche Lieferung normalerweise steuerfrei."
        },
        {
          "gruppe": "Einkauf aus einem Nicht-EU-Land (Einfuhr)",
          "ref": "§ 1 Abs. 1 Nr. 4 UStG",
          "text": "Kommt Ware aus einem Land außerhalb der EU (Drittland, z. B. China oder USA) nach Deutschland, ist das eine „Einfuhr“. Dafür erhebt der Zoll die Einfuhrumsatzsteuer."
        },
        {
          "gruppe": "Einkauf aus einem Nicht-EU-Land (Einfuhr)",
          "ref": "§ 11 Abs. 1 und 3 UStG",
          "text": "So wird die Einfuhrumsatzsteuer berechnet: Zollwert der Ware + Zoll + Transportkosten bis zum ersten Zielort in der EU. Auf diese Summe kommen 19 % oder 7 %."
        },
        {
          "gruppe": "Einkauf aus einem Nicht-EU-Land (Einfuhr)",
          "ref": "§ 21 Abs. 2 UStG",
          "text": "Für die Einfuhrumsatzsteuer gelten die Regeln des Zolls. Bezahlen muss sie, wer die Ware beim Zoll anmeldet."
        },
        {
          "gruppe": "Einkauf aus einem Nicht-EU-Land (Einfuhr)",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 2 UStG",
          "text": "Die bezahlte Einfuhrumsatzsteuer darf ein Unternehmer als Vorsteuer abziehen, wenn die Ware für seine Firma eingeführt wurde."
        },
        {
          "gruppe": "Einkauf aus einem Nicht-EU-Land (Einfuhr)",
          "ref": "§ 3 Abs. 8 UStG",
          "text": "Liefert der ausländische Verkäufer „verzollt und versteuert“, zahlt er die Einfuhrumsatzsteuer. Dann gilt seine Lieferung als in Deutschland ausgeführt und der Kunde zieht die Vorsteuer ganz normal aus der Rechnung."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 1 Abs. 1 EStG",
          "text": "Wer in Deutschland wohnt oder sich hier gewöhnlich aufhält, ist „unbeschränkt steuerpflichtig“. Das heißt: Alle Einkünfte aus der ganzen Welt werden in Deutschland versteuert. Das gilt nur für Menschen (natürliche Personen)."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 8 AO",
          "text": "Einen Wohnsitz hat man dort, wo man eine Wohnung hat, die man behalten und benutzen will. Auch ein Zimmer bei den Eltern oder ein WG-Zimmer zählt."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 9 AO",
          "text": "Gewöhnlicher Aufenthalt bedeutet: Man ist nicht nur kurz da. Wer länger als 6 Monate am Stück in Deutschland ist, hat ihn immer – und zwar vom ersten Tag an."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 1 Abs. 2 EStG",
          "text": "Deutsche, die für den deutschen Staat im Ausland arbeiten (z. B. Diplomaten), bleiben in Deutschland unbeschränkt steuerpflichtig."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 1 Abs. 3 EStG",
          "text": "Wer nicht in Deutschland wohnt, aber fast sein ganzes Einkommen (mindestens 90 %) hier verdient, kann auf Antrag wie ein Inländer behandelt werden."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 1 Abs. 4 EStG",
          "text": "Wer nicht in Deutschland wohnt, aber hier Einkünfte hat, ist „beschränkt steuerpflichtig“. Er versteuert nur die deutschen Einkünfte."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 49 EStG",
          "text": "Hier steht, was deutsche (inländische) Einkünfte sind – zum Beispiel Lohn für Arbeit, die in Deutschland gemacht wird, oder eine deutsche gesetzliche Rente."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 50 Abs. 1 EStG",
          "text": "Beschränkt Steuerpflichtige bekommen viele Vergünstigungen nicht, z. B. keine außergewöhnlichen Belastungen und keine Kinderfreibeträge."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 2 Abs. 7 Satz 3 EStG",
          "text": "Zieht jemand im Laufe des Jahres nach Deutschland oder weg, gibt es trotzdem nur eine Steuererklärung für das ganze Jahr."
        },
        {
          "gruppe": "Wer muss in Deutschland Einkommensteuer zahlen?",
          "ref": "§ 180 Abs. 1 Satz 1 Nr. 2 Buchst. a AO",
          "text": "Eine OHG oder KG zahlt selbst keine Einkommensteuer. Ihr Gewinn wird festgestellt, auf die Gesellschafter verteilt und von jedem selbst versteuert."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 26 Abs. 1 EStG",
          "text": "Ehepaare dürfen wählen: gemeinsame Steuererklärung (Zusammenveranlagung) oder jeder für sich (Einzelveranlagung). Bedingung: Beide wohnen in Deutschland und leben nicht dauernd getrennt. Es reicht, wenn das an einem Tag im Jahr so war."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 26 Abs. 2 EStG",
          "text": "Die Wahl wird jedes Jahr neu getroffen. Sagt das Paar nichts, gilt die Zusammenveranlagung."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 26a EStG",
          "text": "Einzelveranlagung: Jeder versteuert seine eigenen Einkünfte. Kosten wie Sonderausgaben zieht der ab, der sie bezahlt hat – oder auf gemeinsamen Antrag jeder die Hälfte."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 26b, § 32a Abs. 5 EStG",
          "text": "Zusammenveranlagung: Die Einkünfte beider werden zusammengezählt. Dann wird das Einkommen halbiert, die Steuer dafür berechnet und verdoppelt. Das ist der Splittingtarif – er lohnt sich, wenn einer viel mehr verdient."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 32a Abs. 6 EStG",
          "text": "Stirbt ein Ehepartner, bekommt der andere im Jahr danach noch einmal den günstigen Splittingtarif („Gnadensplitting“)."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 46 Abs. 2 Nr. 1 EStG",
          "text": "Arbeitnehmer müssen eine Steuererklärung abgeben, wenn sie mehr als 410 € Nebeneinkünfte haben oder mehr als 410 € Lohnersatz bekommen haben (z. B. Elterngeld, Krankengeld)."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 46 Abs. 2 Nr. 2 und 3a EStG",
          "text": "Pflicht zur Steuererklärung auch bei zwei Jobs gleichzeitig (Steuerklasse VI) und bei Ehepaaren mit den Steuerklassen III/V oder IV mit Faktor."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 46 Abs. 2 Nr. 8 EStG",
          "text": "Wer nicht muss, darf trotzdem freiwillig eine Steuererklärung abgeben, z. B. um Geld zurückzubekommen. Dafür hat man vier Jahre Zeit."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 46 Abs. 3 EStG, § 70 EStDV",
          "text": "Kleine Nebeneinkünfte bis 410 € bleiben für Arbeitnehmer steuerfrei. Zwischen 410 € und 820 € gibt es einen gleitenden Abzug (Härteausgleich)."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 149 AO",
          "text": "Abgabefrist: ohne Steuerberater bis 31. Juli des Folgejahres, mit Steuerberater bis Ende Februar des übernächsten Jahres. Fällt das Ende auf ein Wochenende oder einen Feiertag, gilt der nächste Werktag."
        },
        {
          "gruppe": "Ehepaare, Pflicht zur Steuererklärung und Fristen",
          "ref": "§ 169, § 170 AO",
          "text": "Nach vier Jahren darf das Finanzamt die Steuer nicht mehr festsetzen (Festsetzungsfrist). Die Frist beginnt am Ende des Jahres, in dem die Steuer entstanden ist."
        }
      ],
      "registerId": "iq1aemufhjk50450ky6x",
      "registerStand": 1794514339782,
      "themenInfo": {
        "Einkauf aus einem anderen EU-Land (innergemeinschaftlicher Erwerb)": {
          "ueberblick": "Gelangt eine Ware aus einem EU-Mitgliedstaat in einen anderen, liefert der Verkäufer im Abgangsland steuerfrei (innergemeinschaftliche Lieferung) und der Käufer versteuert den Kauf im Bestimmungsland als innergemeinschaftlichen Erwerb (igE). So wird die Ware mit der Umsatzsteuer des Landes belastet, in dem sie ankommt. Der deutsche Unternehmer schuldet die Erwerbsteuer selbst und zieht sie im selben Voranmeldungszeitraum wieder als Vorsteuer ab – bei vollem Vorsteuerabzug bleibt also keine Belastung. Kommt die Ware aus einem Drittland (z. B. USA, Schweiz, Albanien, Serbien), ist kein igE, sondern die Einfuhr (Einfuhrumsatzsteuer) zu prüfen. Wie ein igE behandelt wird auch das Verbringen eigener Gegenstände in eine deutsche Betriebsstätte zur dauerhaften Nutzung.",
          "achten": [
            "Erst klären: Woher kommt die Ware? EU-Staat → igE prüfen; Drittland → Einfuhr (§ 1 Abs. 1 Nr. 4 UStG). Maßgeblich ist, wo die Ware zollrechtlich in den freien Verkehr kommt, nicht die Durchfahrt.",
            "In der Lösungstabelle als „Art des Umsatzes“ ausdrücklich „innergemeinschaftlicher Erwerb“ bzw. „innergemeinschaftliches Verbringen (§ 1a Abs. 2 UStG)“ schreiben – das Wort allein bringt oft schon einen Punkt.",
            "Entstehung: Rechnungsdatum mit dem Ende des Folgemonats vergleichen – das frühere Datum gewinnt. Das Zahlungsdatum ignorieren.",
            "In der Umsatzsteuer-Voranmeldung: Bemessungsgrundlage des igE zu 19 % in Kennzahl 89, zu 7 % in Kennzahl 93; die Vorsteuer aus igE in Kennzahl 61."
          ],
          "fallen": [
            "Durchfahrt durch EU-Staaten macht aus Drittlandsware keinen igE (Albanien über Österreich nach Deutschland → Einfuhr).",
            "Ware aus dem Drittland, die bereits in einem anderen EU-Staat verzollt wurde (Serbien → Slowenien), ist danach Gemeinschaftsware: in Deutschland igE, keine Einfuhr.",
            "Die USt-IdNr. ersetzt nicht die Prüfung der Tatbestandsmerkmale des § 1a UStG.",
            "Erwerbsteuer nur aus § 3d Satz 2 UStG (falsche/fremde USt-IdNr.) ist NICHT als Vorsteuer abziehbar – doppelte Besteuerung bis zum Nachweis, dann Berichtigung nach § 17 Abs. 2 Nr. 4 UStG.",
            "Erwerbsschwelle 12.500 € gilt nur für Halbunternehmer (§ 1a Abs. 3 UStG) – beim normalen regelbesteuerten Unternehmer spielt sie keine Rolle."
          ],
          "pruefung": "mittel",
          "pruefungText": "In der Abschlussprüfung (Bereich Steuerrecht) ist Umsatzsteuer jedes Mal ein eigener Sachverhalt mit Lösungstabelle; EU-Warenbezüge tauchen dort regelmäßig als einer von mehreren Teilsachverhalten auf (z. B. Fernseher von einem Unternehmen aus Linz/Österreich, Berlin Winter 2023/24). Gefragt sind dann Art des Umsatzes (igE), Ort (§ 3d Satz 1), steuerbar/steuerpflichtig, Bemessungsgrundlage, Erwerbsteuer, Entstehung, Steuerschuldner und Vorsteuer – jeweils mit Paragraph.",
          "quelle": "Lernregister"
        },
        "Einkauf aus einem Nicht-EU-Land (Einfuhr)": {
          "ueberblick": "Kommt Ware aus einem Drittland (z. B. China, USA, Brasilien) nach Deutschland, liegt eine steuerbare Einfuhr vor; der Zoll erhebt Einfuhrumsatzsteuer auf den Zollwert plus Zoll und Beförderungskosten bis zum ersten Bestimmungsort. Unternehmer ziehen die entstandene Einfuhrumsatzsteuer als Vorsteuer ab, Privatpersonen nicht. Liefert der ausländische Lieferer „verzollt und versteuert“ und schuldet er selbst die Einfuhrumsatzsteuer, verlagert sich der Ort seiner Lieferung ins Inland – er muss sich dann in Deutschland registrieren und eine Rechnung mit deutscher Umsatzsteuer stellen. Wird die Ware zuerst in einem anderen EU-Staat eingeführt, ist der Erwerb in Deutschland ein innergemeinschaftlicher Erwerb.",
          "achten": [
            "„Verzollt und versteuert“ ⇒ § 3 Abs. 8 ⇒ inländische Lieferung, Vorsteuer aus Rechnung (Nr. 1).",
            "Buchung unverzollt: Wareneingang an Verbindlichkeiten; EUSt (Vorsteuer aus EUSt) an Bank."
          ],
          "fallen": [
            "Ein Lieferer, der nach § 3 Abs. 8 im Inland liefert, muss sich in Deutschland umsatzsteuerlich registrieren.",
            "Privatpersonen (z. B. Motorradkauf in den USA) zahlen EUSt ohne Vorsteuerabzug.",
            "Ermäßigter Satz für Kunst nur unter den Voraussetzungen der Anlage 2 (z. B. Lieferung durch den Urheber) – prüfen.",
            "Zitat § 13a Abs. 2 UStG ist vertretbar: Er verweist für die EUSt auf § 21 Abs. 2 UStG (Zollrecht)."
          ],
          "pruefung": "mittel",
          "pruefungText": "Drittlandsfälle (Einfuhr, EUSt als Vorsteuer, Buchung unverzollt/verzollt) erscheinen in USt-Sachverhalten und in der Buchführung (LF 6).",
          "quelle": "Lernregister"
        },
        "Wer muss in Deutschland Einkommensteuer zahlen?": {
          "ueberblick": "Einkommensteuerpflichtig sind nur natürliche Personen. Wer im Inland einen Wohnsitz oder gewöhnlichen Aufenthalt hat, ist unbeschränkt steuerpflichtig und versteuert sein Welteinkommen. Deutsche im Auslandsdienst des Staates sind erweitert unbeschränkt steuerpflichtig; Grenzpendler können auf Antrag als unbeschränkt steuerpflichtig behandelt werden, wenn fast alle Einkünfte in Deutschland steuerpflichtig sind. Alle anderen mit inländischen Einkünften sind beschränkt steuerpflichtig. Wechselt die Steuerpflicht im Jahr, gibt es trotzdem nur eine Veranlagung.",
          "achten": [
            "Aufenthaltsdauer in Tagen ausrechnen (Monate einzeln addieren) und mit 183 Tagen / 6 Monaten vergleichen.",
            "90-%-Test: inländische Einkünfte ÷ Welteinkünfte; Grundfreibetrag-Test: ausländische Einkünfte ≤ 12.348 €. Eine Grenze reicht."
          ],
          "fallen": [
            "Zitate: § 1 Abs. 1 S. 1 EStG (nicht „Nr. 1“); der Wohnsitz steht in § 8 AO, nicht im EStG.",
            "Für § 1 Abs. 3 ist § 19 EStG keine Rechtsgrundlage – richtig ist § 1 Abs. 3 S. 2 EStG.",
            "Die 6 Monate nach § 9 S. 2 AO wirken ab Beginn des Aufenthalts (rückwirkend), nicht erst ab dem 7. Monat.",
            "Bei Wegzug im Jahr: nicht zwei Veranlagungen, sondern eine (§ 2 Abs. 7 S. 3 EStG)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Die Prüfung der persönlichen Steuerpflicht steht am Anfang jedes ESt-Veranlagungsfalls; eigene Kurzfälle (Saisonarbeiter, Wegzug, Grenzpendler) sind häufig.",
          "quelle": "Lernregister"
        },
        "Ehepaare, Pflicht zur Steuererklärung und Fristen": {
          "ueberblick": "Ehegatten, die beide unbeschränkt steuerpflichtig sind und nicht dauernd getrennt leben, haben ein Wahlrecht zwischen Zusammenveranlagung (Splittingtarif) und Einzelveranlagung (Grundtarif); es genügt, dass die Voraussetzungen an einem Tag im Jahr vorliegen. Im Jahr nach dem Tod eines Ehegatten gilt für den Überlebenden noch der Splittingtarif (Gnadensplitting). Arbeitnehmer werden nur in den Fällen des § 46 Abs. 2 EStG von Amts wegen veranlagt, sonst auf Antrag innerhalb von vier Jahren. Pflichterklärungen sind ohne Berater bis 31.07. des Folgejahres, mit Berater bis Ende Februar des zweiten Folgejahres abzugeben.",
          "achten": [
            "Ehegatten: 1. verheiratet (auch Heirat am 28.12.)? 2. beide unbeschränkt? 3. nicht dauernd getrennt (an mindestens einem Tag)? ⇒ Wahlrecht § 26; sonst Einzelveranlagung § 25 mit Grundtarif.",
            "Todesfall: Todesjahr ⇒ Zusammenveranlagung möglich; Folgejahr ⇒ Gnadensplitting § 32a Abs. 6 S. 1 Nr. 1; danach Grundtarif.",
            "§ 46: Fall für Fall die Nrn. 1–7 prüfen; trifft keine zu ⇒ Antrag (Nr. 8).",
            "Fristen: Datum + Wochentag prüfen (§ 108 Abs. 3 AO)."
          ],
          "fallen": [
            "Entfernungspauschale ab 2026: einheitlich 0,38 € ab dem 1. km – die vorhandene Lösung rechnet noch „0,30 €/0,38 € ab dem 21. km“.",
            "Nils (ein Arbeitgeber, StKl I) ist kein Pflichtfall nach Nr. 2 (das betrifft mehrere Arbeitgeber) – Antragsveranlagung Nr. 8.",
            "Frau Wolf (Ehemann 2025 gestorben): 2026 Einzelveranlagung mit Splittingtarif – nicht Grundtarif.",
            "Kinderbetreuung seit VZ 2025: 80 %, max. 4.800 € je Kind (alte Aufgaben: 2/3, 4.000 €).",
            "Fristende 31.07.2027 ist ein Samstag ⇒ Montag 02.08.2027; Beraterfrist 29.02.2028 (Schaltjahr)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Veranlagungsart, Tarif und Erklärungspflicht gehören in jeden Veranlagungsfall; Westfalen-Lippe Sommer 2026: „Veranlagung von Eheleuten“ und „Steuererklärungspflicht“ als eigene Teilaufgaben.",
          "quelle": "Lernregister"
        }
      }
    },
    {
      "id": "lf8",
      "nummer": 8,
      "titel": "Gewinneinkünfte ermitteln",
      "beschreibung": "Einkunftsarten, Gewerbebetrieb, Rechtsformen sowie Geschenke, Bewirtung und Reisekosten.",
      "farbe": "#2f6fd1",
      "lernziele": [
        "Ich kann die sieben Einkunftsarten nennen und zuordnen.",
        "Ich kann die Merkmale eines Gewerbebetriebs prüfen.",
        "Ich weiß, welche Betriebsausgaben nur teilweise abziehbar sind.",
        "Ich kann Geschenke, Bewirtung und Reisekosten richtig behandeln."
      ],
      "themen": [],
      "karten": [],
      "quiz": [],
      "raetsel": [],
      "paragrafen": [
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 1 EStG",
          "text": "Es gibt sieben Einkunftsarten: Land- und Forstwirtschaft, Gewerbebetrieb, selbständige Arbeit, nichtselbständige Arbeit (Lohn), Kapitalvermögen, Vermietung und sonstige Einkünfte. Was in keine davon passt, ist nicht steuerbar (z. B. ein Lottogewinn)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 2 EStG",
          "text": "Bei den ersten drei Einkunftsarten rechnet man den Gewinn aus (Gewinneinkünfte). Bei den anderen vier rechnet man Einnahmen minus Werbungskosten (Überschusseinkünfte)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 3 EStG",
          "text": "Alle Einkünfte zusammengezählt ergeben die „Summe der Einkünfte“. Zieht man bestimmte Entlastungsbeträge ab, hat man den „Gesamtbetrag der Einkünfte“."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 4 und 5 EStG",
          "text": "Vom Gesamtbetrag gehen Sonderausgaben und außergewöhnliche Belastungen ab – das ergibt das Einkommen. Nach Abzug von Kinderfreibeträgen bleibt das „zu versteuernde Einkommen“. Darauf wird die Steuer berechnet."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 3 EStG",
          "text": "Liste der steuerfreien Einnahmen. Wichtig: „steuerfrei“ heißt, die Einnahme gehört eigentlich zu einer Einkunftsart, wird aber verschont. Das ist etwas anderes als „nicht steuerbar“."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 3 Nr. 2 EStG",
          "text": "Arbeitslosengeld ist steuerfrei."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 3 Nr. 51 EStG",
          "text": "Trinkgeld, das Gäste oder Kunden einem Arbeitnehmer freiwillig geben, ist steuerfrei."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 32b EStG",
          "text": "Progressionsvorbehalt: Steuerfreie Leistungen wie Arbeitslosengeld oder Elterngeld werden zwar nicht selbst besteuert, sie erhöhen aber den Steuersatz für das übrige Einkommen."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 8 Abs. 1 EStG",
          "text": "Einnahmen sind alles, was man in Geld oder als Sachwert bekommt (z. B. auch ein Firmenwagen zur privaten Nutzung)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 19 Abs. 1 EStG",
          "text": "Arbeitslohn gehört zu den Einkünften aus nichtselbständiger Arbeit. Auch deine Ausbildungsvergütung fällt darunter."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 18 Abs. 1 Nr. 1 EStG",
          "text": "Freie Berufe wie Arzt, Rechtsanwalt oder Steuerberater haben Einkünfte aus selbständiger Arbeit – nicht aus Gewerbebetrieb."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 9a EStG",
          "text": "Pauschbeträge: Arbeitnehmer bekommen ohne Nachweis 1.230 € Werbungskosten abgezogen. Bei Renten und Pensionen sind es 102 €."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 20 Abs. 9, § 32d EStG",
          "text": "Bei Zinsen und Dividenden gibt es den Sparer-Pauschbetrag von 1.000 € (Ehepaare 2.000 €). Was darüber liegt, wird meist pauschal mit 25 % besteuert (Abgeltungsteuer)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 38, § 36 Abs. 2 EStG",
          "text": "Die Lohnsteuer ist keine eigene Steuer. Sie ist eine Vorauszahlung auf die Einkommensteuer, die der Arbeitgeber direkt vom Lohn abzieht. Bei der Steuererklärung wird sie angerechnet."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "Art. 106 GG",
          "text": "Die Einkommensteuer ist eine Gemeinschaftsteuer: Bund und Länder bekommen je 42,5 %, die Gemeinden 15 %."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "Art. 105 Abs. 2, Art. 106 Abs. 3 und 5, Art. 108 Abs. 2 GG",
          "text": "Der Bund macht die Steuergesetze. Die Einkommensteuer ist eine Gemeinschaftsteuer: Bund und Länder bekommen je 42,5 %, die Gemeinden 15 %. Verwaltet wird sie von den Landesfinanzbehörden (Finanzämtern)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "Art. 80 GG, EStDV, LStDV",
          "text": "Verordnungen wie die EStDV und die LStDV erlässt die Bundesregierung mit Zustimmung des Bundesrates. Sie gelten für alle verbindlich."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "EStR, LStR, EStH, LStH (Art. 108 Abs. 7 GG)",
          "text": "Richtlinien sind Anweisungen an die Finanzverwaltung. Sie binden nur die Behörden, nicht die Gerichte. Bürger können sich aber auf sie berufen, wenn sie günstiger sind."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 1 Abs. 1 EStG",
          "text": "Einkommensteuer zahlen natürliche Personen, also Menschen. Eine GmbH zahlt stattdessen Körperschaftsteuer."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 39 Abs. 2 Nr. 2 AO, § 180 AO",
          "text": "Bei einer Personengesellschaft (z. B. OHG) wird der Gewinn den Gesellschaftern anteilig zugerechnet. Das Finanzamt stellt ihn gesondert und einheitlich fest. Besteuert wird dann bei jedem Gesellschafter."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 2 Satz 1 Nr. 1 und 2 EStG",
          "text": "Einkünfte sind entweder der Gewinn (Gewinneinkünfte) oder der Überschuss der Einnahmen über die Werbungskosten (Überschusseinkünfte)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 19 Abs. 2 EStG",
          "text": "Für Versorgungsbezüge (Pensionen) gibt es einen Versorgungsfreibetrag mit Zuschlag."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 24a, § 24b, § 13 Abs. 3 EStG",
          "text": "Von der Summe der Einkünfte gehen noch der Altersentlastungsbetrag, der Entlastungsbetrag für Alleinerziehende und der Freibetrag für Land- und Forstwirte ab. Das Ergebnis ist der Gesamtbetrag der Einkünfte."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 4, § 10d EStG",
          "text": "Vom Gesamtbetrag der Einkünfte gehen ein Verlustabzug (Verlust aus anderen Jahren), Sonderausgaben und außergewöhnliche Belastungen ab. Das Ergebnis ist das Einkommen."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 5, § 31, § 32 Abs. 6 EStG",
          "text": "Vom Einkommen gehen die Freibeträge für Kinder ab, aber nur, wenn sie günstiger sind als das Kindergeld. Das Ergebnis ist das zu versteuernde Einkommen."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 32a, § 2 Abs. 6, §§ 35, 35a EStG",
          "text": "Aus dem zu versteuernden Einkommen ergibt der Tarif die tarifliche Einkommensteuer. Abzüglich Steuerermäßigungen ist das die festzusetzende Steuer. Davon werden Lohnsteuer und Vorauszahlungen abgezogen. Übrig bleibt eine Erstattung oder eine Nachzahlung."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 22 Nr. 1 und 2, § 23, § 20 Abs. 2 EStG",
          "text": "Private Verkäufe sind meist nicht steuerbar. Ausnahmen sind private Veräußerungsgeschäfte (§ 23), wesentliche Beteiligungen (§ 17) und Kapitalanlagen (§ 20 Abs. 2)."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 1 Abs. 1 Nr. 1 ErbStG",
          "text": "Eine Erbschaft unterliegt der Erbschaftsteuer, nicht der Einkommensteuer."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 18 Abs. 1 Nr. 1 Satz 1 und 2 EStG",
          "text": "Freiberufler haben Einkünfte aus selbständiger Arbeit. Dazu zählen wissenschaftliche, künstlerische, schriftstellerische, unterrichtende und erzieherische Tätigkeiten. Außerdem gibt es Katalogberufe wie Ärzte, Rechtsanwälte, Architekten, Ingenieure, Steuerberater, Wirtschaftsprüfer, Journalisten und Dolmetscher."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 18 Abs. 1 Nr. 1 Satz 3 und 4 EStG",
          "text": "Ein Freiberufler darf fachlich vorgebildete Mitarbeiter einsetzen. Er muss aber selbst leitend und eigenverantwortlich arbeiten. Eine Vertretung bei Krankheit oder Urlaub schadet nicht."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 18 Abs. 1 Nr. 3, Abs. 2 EStG",
          "text": "Auch Testamentsvollstreckung, Vermögensverwaltung für andere und die Arbeit im Aufsichtsrat sind selbständige Arbeit. Eine einmalige Tätigkeit reicht, sie muss nicht dauerhaft sein."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 18 Abs. 4 Satz 2 EStG",
          "text": "Für Freiberufler-Gesellschaften (z. B. eine GbR) gelten viele Regeln der Gewerbebetriebe entsprechend, etwa die zu Mitunternehmern und Sondervergütungen."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 4 Abs. 3 EStG, § 141 AO",
          "text": "Freiberufler müssen keine Bücher führen. Sie ermitteln den Gewinn meist per Einnahmen-Überschuss-Rechnung. Freiwillig geht auch der Betriebsvermögensvergleich."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 2 Abs. 1 GewStG",
          "text": "Gewerbesteuer zahlen nur Gewerbebetriebe. Freiberufler zahlen keine Gewerbesteuer."
        },
        {
          "gruppe": "Grundbegriffe: Einkünfte und das Rechenschema",
          "ref": "§ 19 Abs. 1 Satz 1 Nr. 1 EStG, § 1 Abs. 2 LStDV",
          "text": "Nichtselbständig arbeitet, wer seine Arbeitskraft schuldet und weisungsgebunden in den Betrieb eingegliedert ist. Entscheidend ist das Gesamtbild der Verhältnisse."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 4 EStG",
          "text": "Betriebsausgaben sind Kosten, die durch den Betrieb entstehen. Sie mindern den Gewinn."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 9 Abs. 1 EStG",
          "text": "Werbungskosten sind Kosten, die man hat, um Einnahmen zu erzielen und zu behalten – z. B. Fachbücher, Arbeitsmittel oder Zinsen für ein vermietetes Haus."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 12 Nr. 1 EStG",
          "text": "Private Lebenshaltungskosten darf man nicht abziehen – auch nicht, wenn sie dem Beruf nützen. Beispiele: normale Kleidung, Friseur, Essen."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 1, § 5, § 4 Abs. 3 EStG",
          "text": "Zwei Wege zum Gewinn: 1. Bilanz (Vermögen am Jahresende minus Vermögen am Jahresanfang, plus Entnahmen, minus Einlagen). 2. Einnahmen-Überschuss-Rechnung (Betriebseinnahmen minus Betriebsausgaben) für alle, die keine Bücher führen müssen."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 5 EStG",
          "text": "Manche Betriebsausgaben darf man gar nicht oder nur teilweise abziehen, z. B. teure Geschenke, 30 % der Bewirtungskosten, Bußgelder und Bestechungsgelder."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 5b EStG",
          "text": "Die Gewerbesteuer ist keine Betriebsausgabe. Zum Ausgleich wird sie nach § 35 EStG auf die Einkommensteuer angerechnet."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 4a EStG",
          "text": "Nimmt der Unternehmer mehr Geld aus dem Betrieb, als er an Gewinn und Einlagen hat (Überentnahme), darf er einen Teil seiner Schuldzinsen nicht abziehen."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 6 Abs. 1 Nr. 4 EStG",
          "text": "Nimmt der Unternehmer etwas für sich privat aus dem Betrieb, wird das mit dem aktuellen Wert angesetzt. Für den privat genutzten Firmenwagen gilt die 1-%-Regel (1 % vom Listenpreis pro Monat) oder das Fahrtenbuch."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 6 Abs. 2 EStG",
          "text": "Geringwertige Wirtschaftsgüter: Was höchstens 800 € netto kostet, darf sofort komplett als Betriebsausgabe abgezogen werden."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 7 EStG",
          "text": "Abschreibung (AfA): Teure Anschaffungen werden über ihre Nutzungsdauer verteilt abgezogen – jedes Jahr ein Teil."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 7g EStG",
          "text": "Kleine Betriebe dürfen schon vor einem geplanten Kauf bis zu 50 % der Kosten vom Gewinn abziehen (Investitionsabzugsbetrag). Das spart früher Steuern."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 3 und Abs. 1 EStG",
          "text": "Bei Gewinneinkünften heißen die Einnahmen Betriebseinnahmen."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 9 Abs. 1 Satz 3 Nr. 1 und 6 EStG",
          "text": "Schuldzinsen, die zu einer Einkunftsart gehören (z. B. für ein vermietetes Haus), sind Werbungskosten. Auch Arbeitsmittel wie Fachliteratur zählen dazu."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 21 EStG",
          "text": "Vermietung und Verpachtung ist eine Überschusseinkunftsart. Deshalb gibt es dort Werbungskosten statt Betriebsausgaben."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 6 Abs. 1 Nr. 4 und 5 EStG",
          "text": "Entnahmen und Einlagen werden mit dem Teilwert angesetzt. Privatnutzung des Firmenwagens: Bei mehr als 50 % betrieblicher Nutzung gilt 1 % des Listenpreises im Monat, alternativ ein Fahrtenbuch."
        },
        {
          "gruppe": "Betriebsausgaben, Werbungskosten und private Kosten",
          "ref": "§ 4 Abs. 5 Satz 1 EStG",
          "text": "Manche Betriebsausgaben darf man nicht oder nur teilweise abziehen. Beispiele: Geschenke über 50 € je Empfänger und Jahr, Bewirtung nur zu 70 %, Gästehäuser, Jagd und Segeljachten, unangemessene Kosten, Geldbußen und Bestechungsgelder."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 2 EStG",
          "text": "Ein Gewerbebetrieb hat vier Merkmale: selbständig, nachhaltig (auf Wiederholung angelegt), mit der Absicht Gewinn zu machen und am Markt für alle erkennbar. Außerdem darf es keine Landwirtschaft und kein freier Beruf sein."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 2 Satz 3 EStG",
          "text": "Wer auf Dauer keinen Gewinn machen will, betreibt nur ein Hobby („Liebhaberei“). Dann gibt es keine Einkünfte – und Verluste zählen steuerlich nicht."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 1 EStG",
          "text": "Der Gewinn eines Einzelunternehmers gehört zu den Einkünften aus Gewerbebetrieb."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 2 EStG",
          "text": "Gesellschafter einer OHG oder KG heißen Mitunternehmer. Ihr Gewinnanteil ist Einkunft aus Gewerbebetrieb. Dazu zählt auch, was sie von der Gesellschaft für ihre Arbeit, für ein Darlehen oder für Miete bekommen (Sondervergütungen)."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 3 Nr. 1 EStG",
          "text": "Abfärbung: Macht eine Personengesellschaft auch nur einen kleinen Teil gewerblich, gilt alles als gewerblich. Beispiel: Eine Ärzte-Gemeinschaft verkauft nebenbei Produkte."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 3 Nr. 2 EStG",
          "text": "Eine GmbH & Co. KG ist immer gewerblich – egal, was sie tatsächlich macht („gewerbliche Prägung“)."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15a EStG",
          "text": "Ein Kommanditist darf Verluste nur bis zur Höhe seiner Einlage sofort abziehen. Der Rest wird aufgehoben und mit späteren Gewinnen aus dieser Beteiligung verrechnet."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 20 Abs. 1 Nr. 4 EStG",
          "text": "Ein typischer stiller Gesellschafter gibt nur Geld und hat nichts zu sagen. Sein Gewinnanteil ist Einkunft aus Kapitalvermögen, nicht aus Gewerbebetrieb."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 4a EStG",
          "text": "Das Wirtschaftsjahr ist normalerweise das Kalenderjahr. Nur Betriebe, die im Handelsregister stehen, dürfen ein anderes wählen. Der Gewinn zählt dann für das Kalenderjahr, in dem das Wirtschaftsjahr endet."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 35 EStG",
          "text": "Wer Gewerbesteuer zahlt, bekommt dafür einen Abzug bei der Einkommensteuer: das 4-Fache des Gewerbesteuer-Messbetrags, höchstens aber die tatsächlich gezahlte Gewerbesteuer."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 11 GewStG",
          "text": "Bei der Gewerbesteuer haben Einzelunternehmen und Personengesellschaften einen Freibetrag von 24.500 €. Die Messzahl ist 3,5 %. Gewerbesteuer = Messbetrag × Hebesatz der Gemeinde."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 2 Satz 1 EStG",
          "text": "Ein Gewerbebetrieb ist selbständig, nachhaltig, will Gewinn machen und nimmt am allgemeinen Wirtschaftsverkehr teil. Land- und Forstwirtschaft, freie Berufe und reine Vermögensverwaltung gehören nicht dazu."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 3 EStG",
          "text": "Auch die persönlich haftenden Gesellschafter einer KGaA haben gewerbliche Einkünfte, soweit ihr Gewinn nicht auf das Grundkapital entfällt."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 2 Abs. 3, § 10d EStG (Gewerbebetrieb)",
          "text": "Alle gewerblichen Einkünfte einer Person bilden zusammen eine Einkunftsart. Ein Verlust aus einer Quelle wird mit Gewinnen aus anderen verrechnet. Bleibt ein Verlust übrig, kommt der Verlustabzug nach § 10d in Betracht."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 3 Nr. 1 EStG, H 15.8 (5) EStH",
          "text": "Die Abfärbung gilt nicht, wenn die gewerblichen Umsätze höchstens 3 % der Gesamtumsätze und höchstens 24.500 € im Jahr betragen. Für Einzelunternehmer gilt sie nicht, dort sind es zwei getrennte Betriebe."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 15 Abs. 4 EStG",
          "text": "Verluste aus gewerblicher Tierzucht, aus Termingeschäften und aus stillen Gesellschaften mit Kapitalgesellschaften darf man nicht mit anderen Einkünften verrechnen. Sie mindern nur Gewinne der gleichen Art in anderen Jahren."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 24 Nr. 2 EStG",
          "text": "Zahlungen nach der Betriebsaufgabe bleiben Einkünfte aus Gewerbebetrieb (nachträgliche Einkünfte)."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 4a Abs. 1 Satz 2 Nr. 2 und 3, Abs. 2 Nr. 2 EStG",
          "text": "Nur im Handelsregister eingetragene Gewerbetreibende dürfen ein abweichendes Wirtschaftsjahr haben. Die Umstellung geht nur im Einvernehmen mit dem Finanzamt. Alle anderen haben das Kalenderjahr. Der Gewinn zählt in dem Jahr, in dem das Wirtschaftsjahr endet."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 8b EStDV",
          "text": "Ein Rumpfwirtschaftsjahr ist kürzer als zwölf Monate, z. B. bei der Umstellung des Wirtschaftsjahres."
        },
        {
          "gruppe": "Gewerbebetrieb",
          "ref": "§ 180 Abs. 1 Satz 1 Nr. 2 Buchst. a AO",
          "text": "Der Gewinn einer Personengesellschaft wird einheitlich und gesondert festgestellt und den Gesellschaftern zugerechnet."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 1, § 2 HGB",
          "text": "Kaufmann ist, wer ein Handelsgewerbe betreibt, das einen kaufmännisch eingerichteten Betrieb braucht. Kleine Gewerbetreibende können sich freiwillig ins Handelsregister eintragen lassen."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 126 HGB",
          "text": "Bei der OHG haften alle Gesellschafter persönlich und unbegrenzt – auch mit ihrem Privatvermögen."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 171 HGB",
          "text": "Bei der KG haftet der Kommanditist nur bis zu seiner eingetragenen Haftsumme. Hat er seine Einlage bezahlt, haftet er nicht weiter."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 230 HGB",
          "text": "Stille Gesellschaft: Jemand beteiligt sich mit Geld an einem Betrieb, tritt aber nach außen nicht auf und haftet Dritten gegenüber nicht."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§§ 705 ff. BGB",
          "text": "Die GbR ist die einfachste Personengesellschaft. Sie entsteht ohne Formalitäten, sobald sich mindestens zwei Personen für einen gemeinsamen Zweck zusammentun."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 721 BGB",
          "text": "In der GbR haften die Gesellschafter persönlich für die Schulden der Gesellschaft."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 709 Abs. 3 BGB, § 120 HGB",
          "text": "Steht im Gesellschaftsvertrag nichts, wird der Gewinn nach den vereinbarten Anteilen verteilt – sonst nach dem Wert der Beiträge, sonst nach Köpfen. Die alte 4-%-Regel gibt es seit 2024 nicht mehr."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "PartGG",
          "text": "Die Partnerschaftsgesellschaft ist nur für freie Berufe (z. B. Steuerberater, Ärzte). Sie entsteht erst mit der Eintragung ins Partnerschaftsregister."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 1a KStG",
          "text": "OHG, KG und Partnerschaft können beantragen, steuerlich wie eine GmbH behandelt zu werden (Option zur Körperschaftsteuer)."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 116, § 124 HGB",
          "text": "Bei der OHG führen die Gesellschafter die Geschäfte und vertreten die Gesellschaft."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 121, § 168 HGB a. F.",
          "text": "Die alte Vier-Prozent-Regel für die Gewinnverteilung ist seit 2024 entfallen. Ältere Lehrbücher nennen sie noch."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 2 EStG (Sondervergütungen)",
          "text": "Vergütungen, die ein Gesellschafter für seine Tätigkeit, ein Darlehen oder die Überlassung von Gegenständen von der Gesellschaft bekommt, zählen zu seinem Gewinnanteil. Sie heißen Sondervergütungen."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 166, § 233 HGB",
          "text": "Kommanditisten und stille Gesellschafter haben Kontrollrechte. Sie sind ein Anzeichen dafür, dass jemand als Mitunternehmer mitentscheidet."
        },
        {
          "gruppe": "Rechtsformen und Gewinnverteilung",
          "ref": "§ 715 BGB",
          "text": "Bei der GbR führen alle Gesellschafter gemeinsam die Geschäfte."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 16 Abs. 1 EStG",
          "text": "Auch der Gewinn aus dem Verkauf des ganzen Betriebs gehört zu den Einkünften aus Gewerbebetrieb."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 16 Abs. 2 EStG",
          "text": "Formel: Verkaufspreis − Kosten des Verkaufs − Buchwert des Betriebsvermögens = Veräußerungsgewinn."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 16 Abs. 3 EStG",
          "text": "Die Aufgabe des Betriebs wird wie ein Verkauf behandelt. Was der Unternehmer ins Privatvermögen übernimmt, wird mit dem normalen Marktwert angesetzt."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 16 Abs. 4 EStG",
          "text": "Freibetrag von 45.000 € – nur auf Antrag, nur einmal im Leben und nur, wer mindestens 55 Jahre alt oder dauernd berufsunfähig ist. Liegt der Gewinn über 136.000 €, schmilzt der Freibetrag ab; ab 181.000 € ist er weg."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 34 EStG",
          "text": "Für einmalige große Gewinne (z. B. aus dem Betriebsverkauf) gibt es eine mildere Steuerberechnung: die Fünftelregelung oder auf Antrag einen ermäßigten Steuersatz."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 17 EStG",
          "text": "Wer mit mindestens 1 % an einer GmbH oder AG beteiligt war und seine Anteile aus dem Privatvermögen verkauft, hat Einkünfte aus Gewerbebetrieb."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 14 EStG",
          "text": "Der Gewinn aus dem Verkauf eines land- oder forstwirtschaftlichen Betriebs gehört in das Jahr des Verkaufs."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 16 Abs. 3b EStG",
          "text": "Bei Betriebsunterbrechung oder Verpachtung im Ganzen gilt der Betrieb erst als aufgegeben, wenn der Inhaber das ausdrücklich erklärt oder das Finanzamt davon erfährt. Gibt er die Erklärung innerhalb von drei Monaten nach dem gewählten Zeitpunkt ab, wirkt sie darauf zurück."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "§ 6b EStG",
          "text": "Gewinne aus dem Verkauf z. B. von Grundstücken oder Gebäuden (Mindestbesitzzeit sechs Jahre) kann man auf neue Wirtschaftsgüter übertragen oder in eine Rücklage stellen. Wer § 6b nutzt, kann dafür die Fünftelregelung nach § 34 Abs. 1 EStG nicht nutzen."
        },
        {
          "gruppe": "Betrieb verkaufen oder aufgeben",
          "ref": "Rechenweg § 16 Abs. 1 und 2 EStG, R 7.1 GewStR",
          "text": "Der Veräußerungsgewinn ist der Verkaufspreis minus Verkaufskosten minus Buchwert des Betriebsvermögens. Er unterliegt beim Einzelunternehmer nicht der Gewerbesteuer."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 13 Abs. 1 EStG",
          "text": "Tierhaltung gehört nur zur Landwirtschaft, wenn genug eigene Fläche da ist. Sind es zu viele Tiere pro Hektar, wird der Überschuss zum Gewerbe."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 13 Abs. 3 EStG",
          "text": "Landwirte bekommen einen Freibetrag von 900 € (Ehepaare 1.800 €), wenn ihre Summe der Einkünfte nicht über 30.700 € (61.400 €) liegt."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 4a Abs. 1 Satz 2 Nr. 1 EStG",
          "text": "Das Wirtschaftsjahr der Landwirte geht vom 1. Juli bis 30. Juni. Der Gewinn wird nach Monaten auf die beiden Kalenderjahre aufgeteilt."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 13 Abs. 1 Nr. 1 EStG",
          "text": "Tierhaltung gehört zur Landwirtschaft, solange sie zur Fläche passt. Die Grenze in Vieheinheiten (VE): erste 20 ha 10 VE, nächste 10 ha 7 VE, nächste 20 ha 6 VE, nächste 50 ha 3 VE, darüber 1,5 VE je Hektar. Wird die Grenze dauerhaft überschritten, wird der Tierzweig gewerblich (§ 241 BewG)."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 13 Abs. 1 Nr. 2 EStG",
          "text": "Sonstige land- und forstwirtschaftliche Nutzung sind z. B. Imkerei, Fischzucht und Wanderschäferei."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 4a Abs. 1 Satz 2 Nr. 1 EStG, § 8c EStDV",
          "text": "Das Wirtschaftsjahr der Landwirte läuft vom 1. Juli bis 30. Juni. Abweichend gilt: Futterbau 1.5.–30.4., reine Forstwirtschaft 1.10.–30.9., reiner Weinbau 1.9.–31.8. Gartenbau hat kein Sonder-Wirtschaftsjahr."
        },
        {
          "gruppe": "Land- und Forstwirtschaft",
          "ref": "§ 4a Abs. 2 Nr. 1 EStG",
          "text": "Der Gewinn des Wirtschaftsjahres wird zeitanteilig auf die beiden Kalenderjahre aufgeteilt. Veräußerungsgewinne sind davon ausgenommen."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 1 EStG",
          "text": "Geschenke an Kunden und Geschäftspartner sind nur abziehbar, wenn sie pro Person und Jahr zusammen höchstens 50 € netto kosten. Achtung, Freigrenze: Bei 50,01 € ist alles nicht abziehbar."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 4 Abs. 7 EStG",
          "text": "Geschenke müssen einzeln und getrennt aufgezeichnet werden (eigenes Konto, mit Namen des Empfängers). Sonst sind sie nicht abziehbar."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 15 Abs. 1a UStG",
          "text": "Ist das Geschenk nicht abziehbar (über 50 €), gibt es auch keinen Vorsteuerabzug."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 37b EStG",
          "text": "Der Schenker kann die Steuer für den Beschenkten pauschal mit 30 % übernehmen. Dann muss der Empfänger das Geschenk nicht selbst versteuern."
        },
        {
          "gruppe": "Geschenke",
          "ref": "R 19.6 LStR",
          "text": "Kleine Aufmerksamkeiten an eigene Mitarbeiter zu einem persönlichen Anlass (Geburtstag, Hochzeit) sind bis 60 € brutto steuerfrei."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 8 Abs. 2 Satz 11 EStG",
          "text": "Sachbezüge für Arbeitnehmer (z. B. Tankgutschein) sind bis 50 € im Monat steuerfrei."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 19 Abs. 1 Satz 1 Nr. 1a EStG",
          "text": "Betriebsfeiern: Pro Mitarbeiter sind 110 € steuerfrei – für bis zu zwei Feiern im Jahr."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 1 EStG (Berechnung)",
          "text": "Für die 50-€-Grenze zählt der Wert ohne abziehbare Vorsteuer. Verpackung und Versand zählen nicht. Geschenke an denselben Empfänger werden zusammengerechnet. Gegenstände, die nur im Betrieb nutzbar sind, sind ausgenommen (R 4.10 Abs. 2–4 EStR)."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 3 Abs. 1b Satz 1 Nr. 3 UStG",
          "text": "Geschenke von Gegenständen mit Vorsteuerabzug über geringem Wert gelten als unentgeltliche Wertabgabe."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 10 EStG",
          "text": "Bestechungsgelder sind nie als Betriebsausgabe abziehbar."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 37b Abs. 1 bis 3 EStG",
          "text": "Wer Geschenke oder Sachzuwendungen pauschal versteuert, zahlt 30 % (zuzüglich Soli und Kirchensteuer) auf die Kosten inklusive Umsatzsteuer. Das Wahlrecht gilt einheitlich für alle Zuwendungen eines Jahres, höchstens 10.000 € je Empfänger und Jahr. Der Empfänger muss unterrichtet werden und versteuert nichts. Das gilt auch für Sachzuwendungen an Arbeitnehmer."
        },
        {
          "gruppe": "Geschenke",
          "ref": "§ 40 Abs. 2 Satz 1 Nr. 2 EStG",
          "text": "Den Rest einer Betriebsveranstaltung über dem Freibetrag kann der Arbeitgeber pauschal mit 25 % versteuern."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 2 EStG",
          "text": "Geschäftsessen mit Kunden: Nur 70 % der angemessenen Kosten sind Betriebsausgabe. 30 % sind nicht abziehbar."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "§ 15 Abs. 1a Satz 2 UStG",
          "text": "Die Vorsteuer aus dem Geschäftsessen ist trotzdem zu 100 % abziehbar."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "R 4.10 EStR",
          "text": "Zum Nachweis braucht man eine maschinell erstellte Rechnung und Angaben zu Ort, Tag, Teilnehmern, Anlass und Höhe."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "§ 33 UStDV",
          "text": "Kleinbetragsrechnung: Bis 250 € brutto reicht eine vereinfachte Rechnung. Darüber muss der Name des Unternehmers auf der Rechnung stehen."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "§ 12 Abs. 2 Nr. 15 UStG",
          "text": "Seit 2026 gilt für Speisen im Restaurant 7 % Umsatzsteuer. Für Getränke bleiben es 19 %."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 7 EStG",
          "text": "Unangemessene Aufwendungen darf man nicht abziehen."
        },
        {
          "gruppe": "Bewirtung",
          "ref": "R 4.10 Abs. 5 bis 9 EStR",
          "text": "Für die Bewirtung muss man Ort, Tag, Teilnehmer, Anlass und Höhe der Kosten nachweisen. Die Rechnung muss maschinell erstellt sein."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 9 Abs. 4a EStG",
          "text": "Für Essen auf Geschäftsreisen gibt es nur Pauschalen: 14 € bei mehr als 8 Stunden Abwesenheit sowie für An- und Abreisetag, 28 € für jeden vollen Tag. Die echten Kosten sind egal."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 9 Abs. 4a Satz 8 EStG",
          "text": "Bekommt man ein Essen gestellt, wird die Pauschale gekürzt: 5,60 € für das Frühstück, je 11,20 € für Mittag- und Abendessen."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 9 Abs. 1 Satz 3 Nr. 4a EStG",
          "text": "Fahrten mit dem privaten Auto auf einer Geschäftsreise: 0,30 € pro gefahrenem Kilometer."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 12 Abs. 2 Nr. 10 und 11 UStG",
          "text": "7 % Umsatzsteuer gelten für Bahnfahrten, Taxi bis 50 km und Hotelübernachtungen. Das Hotelfrühstück hat 19 %."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 34 UStDV",
          "text": "Fahrkarten gelten als Rechnung. Daraus darf Vorsteuer gezogen werden."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 4 Abs. 5 Satz 1 Nr. 5 EStG, R 4.12 EStR",
          "text": "Auch Unternehmer bekommen für Verpflegung auf Reisen nur die Pauschalen: eintägig mehr als 8 Stunden 14 €, mehrtägig An- und Abreisetag je 14 €, voller Tag 28 €."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 15 Abs. 1 UStG, §§ 33, 34 UStDV",
          "text": "Die Vorsteuer aus Reisekosten kann man mit Rechnung, Kleinbetragsrechnung (bis 250 €) oder Fahrausweis abziehen."
        },
        {
          "gruppe": "Reisekosten",
          "ref": "§ 12 Abs. 2 Nr. 10 und 11 UStG (Steuersätze)",
          "text": "7 % gelten für Bahn-Personenverkehr, Taxi bis 50 km und Übernachtungen. Das Frühstück wird mit 19 % besteuert."
        }
      ],
      "registerId": "tmo7i73oqoibj79hwtql",
      "registerStand": 1794599390428,
      "themenInfo": {
        "Grundbegriffe: Einkünfte und das Rechenschema": {
          "ueberblick": "Bevor du rechnest, prüfst du drei Stufen. Erstens: Fällt die Einnahme unter eine der sieben Einkunftsarten des § 2 Abs. 1 EStG? Wenn nicht, ist sie nicht steuerbar (Lotto, Erbschaft, Schenkung, privater Verkauf von Gebrauchtem). Zweitens: Ist sie steuerbar, kann § 3 EStG sie befreien, dann ist sie steuerfrei. Drittens: Greift keine Befreiung, ist sie steuerpflichtig.",
          "achten": [
            "1. Frage: Welche Einkunftsart? Keine ⇒ „nicht steuerbar“ und fertig.",
            "2. Frage: Gibt es eine Befreiung in § 3 EStG? Ja ⇒ „steuerfrei“ und die Nummer angeben (z. B. § 3 Nr. 2, Nr. 51).",
            "3. Sonst „steuerpflichtig“. Bei Gewinneinkünften zusätzlich „Betriebseinnahme“, bei Überschusseinkünften „Einnahme (§ 8)“ ankreuzen.",
            "Steuerpflichtig heißt nur „dem Grunde nach“: ob wirklich Steuer anfällt, entscheidet erst der Grundfreibetrag.",
            "Schema auswendig: Einkünfte (7 Arten) → Summe → − AEB, − § 24b, − § 13 Abs. 3 = GdE → − § 10d, − SA, − agB = Einkommen → − Kinderfreibeträge, − Härteausgleich = zvE → Tarif → − Ermäßigungen = festzusetzende ESt → − Lohnsteuer/VZ."
          ],
          "fallen": [
            "Nicht steuerbar und steuerfrei verwechseln: Bei Lotto und Erbschaft gehört KEINE § 3-Nummer in die Tabelle (in deiner Lösung stand bei b) und g) eine „3“).",
            "Arbeitslosengeld ist steuerfrei, wirkt aber über den Progressionsvorbehalt auf den Steuersatz.",
            "Trinkgeld nur steuerfrei, wenn es freiwillig von Dritten kommt; ein Anspruch darauf (z. B. Bedienungszuschlag) ist Arbeitslohn.",
            "Schreibweisen: Bundesrat, Einkommensteuer-Durchführungsverordnung, EStH, Verwaltungsvorschrift, Härteausgleich, zu versteuerndes Einkommen.",
            "Personengesellschaft: nicht „die Gesellschaften“, sondern die einzelnen Gesellschafter werden besteuert."
          ],
          "pruefung": "hoch",
          "pruefungText": "Zuordnungs-Tabellen (nicht steuerbar / steuerfrei / steuerpflichtig mit § 3-Nummer) sind ein Klassiker in Zwischenprüfung und Klassenarbeiten. Punkte gibt es meist für das Kreuz und die Rechtsgrundlage.",
          "quelle": "Lernregister"
        },
        "Betriebsausgaben, Werbungskosten und private Kosten": {
          "ueberblick": "Aufwand bei Gewinneinkünften heißt Betriebsausgabe, bei Überschusseinkünften Werbungskosten. Was zur privaten Lebensführung gehört, ist gar nicht abziehbar, auch wenn es dem Beruf nützt. Entscheidend ist der Veranlassungszusammenhang: betrieblich, beruflich oder privat.",
          "achten": [
            "Erst die Einkunftsart bestimmen: Gewinneinkunft (§§ 13, 15, 18) ⇒ BA; Überschusseinkunft (§§ 19–22) ⇒ WK.",
            "Dann fragen: Ist es auch privat nutzbar? Wenn ja und nicht trennbar ⇒ KPL (§ 12 Nr. 1).",
            "In der Begründung immer den Paragraphen nennen: § 4 Abs. 4, § 9 oder § 12 Nr. 1 EStG."
          ],
          "fallen": [
            "Das Wort „allgemein“: Ein allgemeines Nachschlagewerk ist privat (KPL), nur Fachliteratur ist WK. Hier lag dein Fehler beim Biologielehrer.",
            "Kunst im anerkannten Arbeitszimmer bleibt privat.",
            "Steuerberatung für den Mantelbogen ist privat; nur der Teil für Anlagen zu Einkunftsarten ist BA/WK.",
            "Kontoführungsgebühren: grundsätzlich privat, die Finanzverwaltung erkennt aber ohne Nachweis 16 € im Jahr als WK an. Frag, was eure Lehrkraft erwartet."
          ],
          "pruefung": "hoch",
          "pruefungText": "BA/WK/KPL-Zuordnungen kommen in fast jeder Grundlagen-Klausur vor, oft als „nur eine Möglichkeit“-Tabelle.",
          "quelle": "Lernregister"
        },
        "Gewerbebetrieb": {
          "ueberblick": "Ein Gewerbebetrieb liegt vor, wenn vier positive Merkmale erfüllt sind und keine Ausnahme greift. Wer Einkünfte aus Gewerbebetrieb hat, hängt von der Rechtsform ab: Einzelunternehmer direkt, bei OHG und KG die Gesellschafter als Mitunternehmer. Die Personengesellschaft selbst zahlt Gewerbesteuer, aber keine Einkommensteuer.",
          "achten": [
            "Gewerbe prüfen: vier positive Merkmale nacheinander abhaken, dann die drei Ausschlüsse (L+F, freier Beruf, Vermögensverwaltung).",
            "Bei Rechtsformfragen immer drei Punkte nennen: Haftung, Geschäftsführung/Vertretung, Steuern.",
            "Steuern bei OHG/KG: Gesellschaft ⇒ Gewerbesteuer; Gesellschafter ⇒ Einkommensteuer auf den Anteil (§ 15 Abs. 1 S. 1 Nr. 2 EStG).",
            "1. Liegt ein Gewerbebetrieb vor? Die vier Merkmale des § 15 Abs. 2 S. 1 EStG abhaken, dann die drei Ausschlüsse (Land- und Forstwirtschaft, freier Beruf, andere selbständige Arbeit) und die private Vermögensverwaltung prüfen.",
            "4. Gewinn ermitteln: § 5 i. V. m. § 4 Abs. 1 bei Buchführungspflicht, sonst § 4 Abs. 3. Entnahmen und Einlagen mit dem Teilwert ansetzen (§ 6 Abs. 1 Nr. 4 und 5)."
          ],
          "fallen": [
            "Vermögensverwaltung steht nicht im Gesetzestext, sie ist Rechtsprechung. Schreib als Fundstelle § 15 Abs. 2 EStG.",
            "„EStH § 15 Rz. 2 ff.“ ist keine korrekte Zitierweise; richtig ist R 15.x EStR bzw. H 15.x EStH.",
            "Personengesellschaften zahlen keine Einkommensteuer.",
            "Stiller: typisch = Kapitalvermögen (§ 20), atypisch = Gewerbebetrieb (§ 15). „Inhaber versteuert entsprechend seiner Tätigkeit“ ist zu ungenau.",
            "Eine freiberufliche GbR mit gewerblichem Nebengeschäft kann insgesamt gewerblich werden (Abfärbung)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Rechtsformvergleich (Haftung, Geschäftsführung, Steuern) kommt in WiSo und in der Mandantenberatung, die Merkmale des § 15 Abs. 2 bei Abgrenzungsfällen im Steuerteil.",
          "quelle": "Lernregister"
        },
        "Rechtsformen und Gewinnverteilung": {
          "ueberblick": "Der Gewinn einer OHG oder KG wird den Gesellschaftern zugerechnet und dort versteuert, egal ob er ausgezahlt wird. Verteilt wird nach dem Gesellschaftsvertrag, meist in drei Stufen: Vorab für die Tätigkeit, Zinsen auf das Kapital, Rest nach einem Schlüssel. Ohne Vertrag gilt seit 2024 das Beteiligungsverhältnis.",
          "achten": [
            "1. Steuerlichen Gewinn bestimmen (Gesellschaftsgewinn + Sondervergütungen).",
            "2. Vorab-Tätigkeitsvergütungen abziehen.",
            "3. Zinsen je Kapitalanteil (Kapital × Satz) abziehen.",
            "4. Rest nach Schlüssel: Teile addieren (8 : 2 : 1 = 11), Rest ÷ Teile × Anteil.",
            "5. Je Gesellschafter addieren. Probe: Summe = Gesamtgewinn. Rundungs-Cent beim letzten Gesellschafter ausgleichen."
          ],
          "fallen": [
            "Verhältniszahlen addieren: 4 : 1 sind 5 Teile, nicht 4.",
            "Reihenfolge Vorab ⇒ Zinsen ⇒ Rest; bei „aus dem verbleibenden Restgewinn“ genau lesen.",
            "Ohne Vertrag nicht mehr 4 %, sondern § 120 HGB i. V. m. § 709 Abs. 3 BGB.",
            "Immer die Probe machen; in der Lösungsdatei zu Aufgabe 5 fehlten so 40.000 €.",
            "Ein Gesellschafter-Geschäftsführer der OHG hat keine Einkünfte aus § 19."
          ],
          "pruefung": "hoch",
          "pruefungText": "Kam in Niedersachsen mehrfach vor: Sommer 2025 Steuerwesen (OHG, Kapitalverzinsung und Köpfe), Winter 2025 Rechnungswesen (Korrektur von Gesellschafterzahlungen und Verteilung), Winter 2024/25 (abweichendes Wj).",
          "quelle": "Lernregister"
        },
        "Betrieb verkaufen oder aufgeben": {
          "ueberblick": "Wird der ganze Betrieb verkauft, gehört der Gewinn daraus zu den Einkünften aus Gewerbebetrieb. Er berechnet sich als Preis minus Kosten minus Buchwert des Kapitals. Wer 55 Jahre alt oder dauernd berufsunfähig ist, bekommt einmal im Leben einen Freibetrag.",
          "achten": [
            "Kapital = übertragene Aktiva − übernommene Passiva (Buchwerte).",
            "Gewinn berechnen, dann Alter prüfen, dann Freibetrag: 45.000 − (Gewinn − 136.000), mindestens 0.",
            "Laufenden Gewinn und Entnahmegewinne getrennt dazurechnen."
          ],
          "fallen": [
            "Nicht übernommene Verbindlichkeiten bleiben beim Verkäufer und mindern das übertragene Kapital nicht.",
            "Die 136.000-€-Grenze bezieht sich auf den Veräußerungsgewinn, nicht auf den Preis.",
            "Zurückbehaltener Pkw = Entnahme zum Teilwert (gemeiner Wert) minus Buchwert.",
            "Alter prüfen: mit 45 kein Freibetrag."
          ],
          "pruefung": "mittel",
          "pruefungText": "In den angesehenen Niedersachsen-Aufgabenübersichten nicht aufgefallen; gehört aber zu den Grundlagen der Gewinneinkünfte und steht in den Musterklausuren Einkommensteuer.",
          "quelle": "Lernregister"
        },
        "Land- und Forstwirtschaft": {
          "ueberblick": "Land- und Forstwirte haben ein gesetzlich festgelegtes Wirtschaftsjahr (1.7. bis 30.6.). Der Gewinn wird zeitanteilig auf die beiden Kalenderjahre verteilt. Bei Tierhaltung entscheidet die Fläche, wie viele Vieheinheiten (VE) noch Landwirtschaft sind; wird die Grenze nachhaltig überschritten, wird ein ganzer Tierzweig zum Gewerbebetrieb.",
          "achten": [
            "Wj bestimmen (Regel 1.7.–30.6., sonst § 8c EStDV), dann die Monate je Kalenderjahr zählen.",
            "Gewinn × Monate/12 je Wj, dann je Kalenderjahr addieren. Erst ungerundet addieren, dann runden.",
            "Rumpf-Wj bei Eröffnung: Gewinn × Monate im Jahr / Monate des Rumpf-Wj.",
            "VE-Prüfung: 1. Fläche in VE-Grenze umrechnen (gestaffelt), 2. Tiere in VE umrechnen, 3. vergleichen, 4. bei Überschreitung ganzen Zweig herausnehmen.",
            "§ 13 Abs. 3: erst die Summe der Einkünfte bilden, dann prüfen, ob 30.700 € überschritten sind."
          ],
          "fallen": [
            "Das „Einvernehmen mit dem Finanzamt“ gilt nur für Gewerbetreibende (§ 4a Abs. 1 S. 2 Nr. 2), nicht für L+F.",
            "Ein Wj 1.4.–31.3. gibt es bei L+F nicht.",
            "Rechenfehler: 18.000 + 47.250 = 65.250 €, nicht 62.250 €.",
            "Freibetrag § 13 Abs. 3: bei 30.720 € Summe der Einkünfte schon weg (Grenze 30.700 €).",
            "Bei Verkauf endet das Wj mit dem Verkauf (Rumpf-Wj); euer Blatt rechnet teils vereinfachend mit vollem Wj. Frag die Lehrkraft."
          ],
          "pruefung": "mittel",
          "pruefungText": "Zeitanteilige Gewinnaufteilung beim Wj der L+F und die VE-Prüfung sind beliebte Rechenaufgaben in Klassenarbeiten; in Kammerprüfungen eher selten und dann als Teil eines größeren ESt-Falls.",
          "quelle": "Lernregister"
        },
        "Geschenke": {
          "ueberblick": "Geschenke an Kunden und Geschäftsfreunde sind nur abziehbar, wenn sie je Empfänger und Jahr zusammen höchstens 50 € netto kosten. Es ist eine Freigrenze: schon 1 Cent darüber und alles ist nicht abziehbar, dann gibt es auch keine Vorsteuer. Geschenke müssen auf eigenen Konten mit Empfänger festgehalten werden.",
          "achten": [
            "1. Geschenk? Unentgeltlich, an Nichtarbeitnehmer, keine Gegenleistung, kein Streuartikel.",
            "2. Nur betrieblich nutzbar (Fachbuch für Arzt)? ⇒ voll abziehbar.",
            "3. Netto aller Geschenke an diesen Empfänger im Jahr zusammenrechnen, auch Geld; ohne Verpackung/Versand.",
            "4. ≤ 50 € netto ⇒ Geschenke abzugsfähig + Vorsteuer. > 50 € ⇒ Geschenke nicht abzugsfähig mit Bruttobetrag.",
            "5. Paragraphen dazuschreiben: § 4 Abs. 5 S. 1 Nr. 1 EStG und § 15 Abs. 1a UStG."
          ],
          "fallen": [
            "Freigrenze, kein Freibetrag: bei 50,01 € ist alles weg.",
            "Netto prüfen: 59,50 € brutto bei 19 % sind genau 50 € netto ⇒ abziehbar.",
            "Zusammenrechnen: 28 € Geschenk + 150 € Geld = 178 € ⇒ auch das erste Geschenk wird nicht abziehbar, Vorsteuer korrigieren.",
            "Geldgeschenke haben keine Umsatzsteuer, zählen aber für die 50 €.",
            "Alte Lehrbücher nennen 35 €; seit 2024 gilt 50 €."
          ],
          "pruefung": "hoch",
          "pruefungText": "Zwischenprüfung 2024 Niedersachsen: Vorsteuerabzug bei Geschenken (Lebensmittel 7 % und Wein 19 %); Sommer 2025: USt-Fälle mit Geschenken. Rechtsgrundlage wird fast immer verlangt.",
          "quelle": "Lernregister"
        },
        "Bewirtung": {
          "ueberblick": "Bewirtungen aus geschäftlichem Anlass sind nur zu 70 % als Betriebsausgabe abziehbar, die Vorsteuer aber zu 100 %. Unangemessen hohe Kosten sind gar nicht abziehbar, auch nicht die Vorsteuer darauf. Der Beleg braucht Ort, Tag, Teilnehmer, Anlass und Höhe.",
          "achten": [
            "1. Netto und USt herausrechnen.",
            "2. Angemessen und unangemessen (netto) trennen.",
            "3. Angemessen: 70 % Bewirtungskosten, 30 % nicht abziehbare Bewirtungskosten.",
            "4. Vorsteuer 100 % auf den angemessenen Teil; unangemessen netto + seine USt ⇒ nicht abziehbare Betriebsausgaben.",
            "5. Probe: Soll = Brutto. Gewinnauswirkung nur in Höhe des abziehbaren Teils."
          ],
          "fallen": [
            "Vorsteuer nicht auf 70 % kürzen.",
            "Unangemessenen Teil nicht noch einmal 70/30 aufteilen.",
            "Speisen 7 % (seit 2026), Getränke 19 %: Satz auf der Rechnung nehmen.",
            "Betriebsfeier mit eigenen Mitarbeitern ist keine Geschäftsfreunde-Bewirtung.",
            "Private Kreditkarte ⇒ „an Privateinlage“."
          ],
          "pruefung": "hoch",
          "pruefungText": "Niedersachsen: Zwischenprüfung 2024 (USt aus Bewirtung mit verschiedenen Sätzen), Winter 2025 Rechnungswesen (Bewirtung mit privater Kreditkarte, Gewinnauswirkung), Winter 2025 Steuerwesen (GmbH: Bewirtung hinzurechnen).",
          "quelle": "Lernregister"
        },
        "Reisekosten": {
          "ueberblick": "Fahrt-, Übernachtungs- und Nebenkosten einer Geschäftsreise sind in tatsächlicher Höhe Betriebsausgaben. Verpflegung darf nur mit den Pauschalen abgezogen werden. Vorsteuer gibt es nur aus Belegen, nie aus einer Pauschale.",
          "achten": [
            "1. Abwesenheitsdauer und Kalendertage bestimmen ⇒ Pauschale.",
            "2. Jeden Beleg netto/USt aufteilen (Steuersatz prüfen).",
            "3. Fahrt: betrieblicher Pkw tatsächliche Kosten, Privat-Pkw 0,30 €/km.",
            "4. Essen mit Rechnung: VSt aus der Rechnung, Aufwand nur in Höhe der Pauschale, Rest Privatentnahme.",
            "5. Buchen auf Reisekosten Unternehmer (Fahrt, Übernachtung, Verpflegung)."
          ],
          "fallen": [
            "Kilometerangaben beim betrieblichen Pkw sind Ablenkung.",
            "Genau 8 Std. ergibt 0 €; 07:00–16:00 sind 9 Std. ⇒ 14 €.",
            "Zwei Übernachtungen = drei Tage: 14 + 28 + 14 = 56 €.",
            "Hotel 7 %, Frühstück 19 %; Bahn/Taxi 7 %; Tanken/Parken 19 %.",
            "Keine Vorsteuer aus der Verpflegungspauschale."
          ],
          "pruefung": "hoch",
          "pruefungText": "Winter 2025 Rechnungswesen Niedersachsen: Geschäftsreise zur Messe mit Pkw, Übernachtung, Verpflegung, Nebenkosten – Berechnung, Buchung, Gewinnauswirkung. Entspricht den Aufgaben 10 und 11 deines NABA-Blatts.",
          "quelle": "Lernregister"
        }
      }
    },
    {
      "id": "lf10",
      "nummer": 10,
      "titel": "Jahresabschlüsse erstellen und abschließen",
      "beschreibung": "Bilanzierungspflicht, Bewertungsgrundsätze, Anschaffungs- und Herstellungskosten, Teilwert und Zuschreibung sowie zeitliche Abgrenzung.",
      "farbe": "#15803d",
      "lernziele": [
        "Ich kann prüfen, wer einen Jahresabschluss aufstellen muss und was dazugehört.",
        "Ich kann die Grundsätze aus § 252 HGB auf Fälle anwenden.",
        "Ich kann Anschaffungs- und Herstellungskosten berechnen und buchen.",
        "Ich kann eine dauerhafte Wertminderung prüfen und Zuschreibungen berechnen.",
        "Ich kann Rechnungsabgrenzungsposten, sonstige Forderungen und Verbindlichkeiten bilden."
      ],
      "themen": [],
      "karten": [
        {
          "vorne": "Was gehört zum Jahresabschluss eines Einzelunternehmens?",
          "hinten": "Bilanz und Gewinn- und Verlustrechnung (§ 242 Abs. 3 HGB)."
        },
        {
          "vorne": "Was gehört zusätzlich zum Jahresabschluss einer GmbH?",
          "hinten": "Der Anhang (§ 264 Abs. 1 HGB). Mittelgroße und große GmbHs erstellen zusätzlich einen Lagebericht, der aber kein Teil des Jahresabschlusses ist."
        },
        {
          "vorne": "Was ist das Maßgeblichkeitsprinzip?",
          "hinten": "Die Handelsbilanz ist Grundlage der Steuerbilanz (§ 5 Abs. 1 EStG), außer das Steuerrecht schreibt etwas anderes vor."
        },
        {
          "vorne": "Die 6 Grundsätze aus § 252 Abs. 1 HGB?",
          "hinten": "Bilanzidentität, Unternehmensfortführung, Einzelbewertung/Stichtag, Vorsicht (Realisation, Imparität), Periodenabgrenzung, Stetigkeit."
        },
        {
          "vorne": "Realisationsprinzip vs. Imparitätsprinzip?",
          "hinten": "Gewinne erst zeigen, wenn sie verwirklicht sind. Verluste schon zeigen, wenn sie drohen."
        },
        {
          "vorne": "Schema der Anschaffungskosten?",
          "hinten": "Anschaffungspreis + Nebenkosten + nachträgliche AK − Preisminderungen = Anschaffungskosten."
        },
        {
          "vorne": "Gehört die Vorsteuer zu den Anschaffungskosten?",
          "hinten": "Nein, abziehbare Vorsteuer nie (§ 9b Abs. 1 EStG)."
        },
        {
          "vorne": "Was ist ein GWG?",
          "hinten": "Bewegliches, selbstständig nutzbares Anlagegut bis 800 € netto – darf sofort abgeschrieben werden (§ 6 Abs. 2 EStG)."
        },
        {
          "vorne": "Pflichtbestandteile der Herstellungskosten?",
          "hinten": "Material- und Fertigungseinzelkosten, Sondereinzelkosten der Fertigung, angemessene Material- und Fertigungsgemeinkosten."
        },
        {
          "vorne": "Was ist bei den Herstellungskosten verboten?",
          "hinten": "Vertriebskosten, Forschungskosten und ein Gewinnzuschlag."
        },
        {
          "vorne": "Was sind „Anlagen im Bau“?",
          "hinten": "Selbst erstellte Anlagen, die am Stichtag noch nicht fertig sind. Keine AfA, bei Fertigstellung umbuchen."
        },
        {
          "vorne": "Wie prüft man eine dauerhafte Wertminderung?",
          "hinten": "Teilwert < Buchwert nach der halben Restnutzungsdauer → dauerhaft."
        },
        {
          "vorne": "Folge dauerhafter Wertminderung in HB und SB?",
          "hinten": "Handelsbilanz: Pflicht zur außerplanmäßigen Abschreibung. Steuerbilanz: Wahlrecht zur Teilwertabschreibung."
        },
        {
          "vorne": "Was ist eine Zuschreibung?",
          "hinten": "Wertaufholung, wenn der Grund für die Abschreibung wegfällt – höchstens bis zu den fortgeführten Anschaffungskosten. Ertrag."
        },
        {
          "vorne": "ARAP oder PRAP?",
          "hinten": "ARAP: Ausgabe jetzt, Aufwand später. PRAP: Einnahme jetzt, Ertrag später (§ 250 HGB)."
        },
        {
          "vorne": "Sonstige Forderung oder sonstige Verbindlichkeit?",
          "hinten": "Sonstige Forderung: Ertrag jetzt, Geld später. Sonstige Verbindlichkeit: Aufwand jetzt, Zahlung später."
        }
      ],
      "quiz": [
        {
          "frage": "Wer muss keinen Jahresabschluss nach HGB aufstellen?",
          "antworten": [
            "Eine GmbH mit 300.000 € Umsatz",
            "Ein Einzelkaufmann mit 600.000 € Umsatz und 50.000 € Gewinn in zwei Jahren",
            "Eine OHG mit 400.000 € Umsatz",
            "Eine AG"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "§ 241a HGB befreit nur Einzelkaufleute unter 800.000 € Umsatz und 80.000 € Jahresüberschuss."
        },
        {
          "frage": "Was gehört bei einer GmbH zum Jahresabschluss?",
          "antworten": [
            "Bilanz und GuV",
            "Bilanz, GuV und Lagebericht",
            "Bilanz, GuV und Anhang",
            "Nur die Bilanz"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "§ 264 Abs. 1 HGB: Bilanz, GuV und Anhang. Der Lagebericht ist kein Teil des Jahresabschlusses."
        },
        {
          "frage": "Welcher Grundsatz verlangt, dass die Eröffnungsbilanz der Schlussbilanz des Vorjahres entspricht?",
          "antworten": [
            "Stetigkeit",
            "Bilanzidentität",
            "Einzelbewertung",
            "Vorsicht"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "§ 252 Abs. 1 Nr. 1 HGB."
        },
        {
          "frage": "Wein im Lager (AK 8.000 €) ist jetzt 30.000 € wert. Wie wird er bilanziert?",
          "antworten": [
            "30.000 €",
            "19.000 €",
            "8.000 €",
            "Wahlrecht zwischen 8.000 € und 30.000 €"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "Anschaffungskostenprinzip und Realisationsprinzip: höchstens 8.000 €."
        },
        {
          "frage": "Welche Kosten gehören zu den Anschaffungskosten eines Pkw?",
          "antworten": [
            "Tankfüllung",
            "Kfz-Versicherung",
            "Zulassung und Überführung",
            "Kfz-Steuer"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "Nur Kosten, um den Pkw zu erwerben und betriebsbereit zu machen."
        },
        {
          "frage": "Ein Computer kostet 800 € netto, dazu 20 € Versand, 2 % Skonto auf 800 €. Ist er ein GWG?",
          "antworten": [
            "Ja, Kaufpreis 800 €",
            "Nein, die Anschaffungskosten sind 804 €",
            "Ja, nach Skonto 784 €",
            "Computer sind nie GWG"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "GWG-Grenze 800 € gilt für die gesamten Anschaffungskosten: 800 − 16 + 20 = 804 €."
        },
        {
          "frage": "Wohin gehört der Notar für die Eintragung einer Grundschuld?",
          "antworten": [
            "Anschaffungskosten Grund und Boden",
            "Anschaffungskosten Gebäude",
            "Sofort Aufwand (Finanzierungskosten)",
            "Aktiver Rechnungsabgrenzungsposten"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "Kosten der Finanzierung sind keine Anschaffungskosten."
        },
        {
          "frage": "Welche Kosten dürfen nie in die Herstellungskosten?",
          "antworten": [
            "Materialgemeinkosten",
            "Allgemeine Verwaltungskosten",
            "Vertriebskosten",
            "Sondereinzelkosten der Fertigung"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "§ 255 Abs. 2 Satz 4 HGB: Vertriebs- und Forschungskosten sind verboten."
        },
        {
          "frage": "Was ist die Wertobergrenze der Herstellungskosten?",
          "antworten": [
            "Wertuntergrenze + Verwaltungskosten",
            "Wertuntergrenze + Vertriebskosten",
            "Selbstkosten + Gewinn",
            "Nur Einzelkosten"
          ],
          "richtig": 0,
          "stufe": 2,
          "erklaerung": "Die Wahlbestandteile (Verwaltung, soziale Kosten) führen zur Obergrenze."
        },
        {
          "frage": "Mit welcher Buchung wird eine selbst gebaute Maschine aktiviert?",
          "antworten": [
            "Maschinen an Bank",
            "Maschinen an andere aktivierte Eigenleistungen",
            "Materialaufwand an Maschinen",
            "Maschinen an Umsatzerlöse"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Das Ertragskonto gleicht den schon gebuchten Aufwand aus."
        },
        {
          "frage": "Die Steuerbilanz bezieht die Verwaltungskosten nicht ein, die Handelsbilanz schon. Ist das erlaubt?",
          "antworten": [
            "Ja, immer",
            "Nein, das Wahlrecht muss übereinstimmen",
            "Nur bei Kapitalgesellschaften",
            "Nur bei Gebäuden"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "§ 6 Abs. 1 Nr. 1b EStG: Übereinstimmungsvorbehalt."
        },
        {
          "frage": "Wann ist eine Wertminderung beim abnutzbaren Anlagevermögen dauerhaft?",
          "antworten": [
            "Wenn sie mehr als 10 % beträgt",
            "Wenn der Wert mindestens für die halbe Restnutzungsdauer unter dem planmäßigen Restbuchwert liegt",
            "Wenn sie über ein Jahr dauert",
            "Immer"
          ],
          "richtig": 1,
          "stufe": 2,
          "erklaerung": "Prüfung nach dem BMF-Schreiben zur Teilwertabschreibung."
        },
        {
          "frage": "Vorübergehende Wertminderung einer Maschine – was gilt in der Handelsbilanz?",
          "antworten": [
            "Abschreibungspflicht",
            "Abschreibungswahlrecht",
            "Abschreibungsverbot",
            "Zuschreibungspflicht"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "§ 253 Abs. 3 Satz 5 HGB: außerplanmäßig nur bei dauerhafter Wertminderung (Ausnahme Finanzanlagen)."
        },
        {
          "frage": "Bis zu welchem Wert darf nach einer Teilwertabschreibung höchstens zugeschrieben werden?",
          "antworten": [
            "Bis zum Marktwert",
            "Bis zu den ursprünglichen Anschaffungskosten",
            "Bis zu den fortgeführten Anschaffungskosten",
            "Gar nicht"
          ],
          "richtig": 2,
          "stufe": 2,
          "erklaerung": "§ 253 Abs. 5 HGB, § 6 Abs. 1 Nr. 1 Satz 4 EStG."
        },
        {
          "frage": "Versicherung für Dezember bis Mai im November bezahlt. Was entsteht am 31.12.?",
          "antworten": [
            "Passiver RAP",
            "Aktiver RAP",
            "Sonstige Forderung",
            "Sonstige Verbindlichkeit"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Ausgabe jetzt, Aufwand später = ARAP."
        },
        {
          "frage": "Zinsen für Dezember werden erst im Januar bezahlt. Was bucht der Schuldner am 31.12.?",
          "antworten": [
            "ARAP",
            "PRAP",
            "Sonstige Verbindlichkeit",
            "Sonstige Forderung"
          ],
          "richtig": 2,
          "stufe": 1,
          "erklaerung": "Aufwand jetzt, Zahlung später = sonstige Verbindlichkeit."
        },
        {
          "frage": "Miete für Dezember bis Februar im Dezember erhalten. Was entsteht beim Vermieter?",
          "antworten": [
            "ARAP",
            "PRAP",
            "Sonstige Forderung",
            "Rückstellung"
          ],
          "richtig": 1,
          "stufe": 1,
          "erklaerung": "Einnahme jetzt, Ertrag später = PRAP."
        },
        {
          "frage": "Bis zu welchem Betrag darf steuerlich auf einen Rechnungsabgrenzungsposten verzichtet werden?",
          "antworten": [
            "250 €",
            "800 €",
            "1.000 €",
            "Gar nicht"
          ],
          "richtig": 1,
          "stufe": 3,
          "erklaerung": "§ 5 Abs. 5 Satz 2 EStG – einheitlich für alle Fälle."
        }
      ],
      "raetsel": [
        {
          "wort": "ANHANG",
          "hinweis": "Teil des Jahresabschlusses einer GmbH, erläutert Bilanz und GuV"
        },
        {
          "wort": "LAGEBERICHT",
          "hinweis": "Beschreibt Geschäftsverlauf, Chancen und Risiken – kein Teil des Jahresabschlusses"
        },
        {
          "wort": "INVENTUR",
          "hinweis": "Bestandsaufnahme zum Abschlussstichtag"
        },
        {
          "wort": "MASSGEBLICHKEIT",
          "hinweis": "Prinzip: Die Handelsbilanz ist Grundlage der Steuerbilanz"
        },
        {
          "wort": "STETIGKEIT",
          "hinweis": "Grundsatz: Bewertungsmethoden werden beibehalten"
        },
        {
          "wort": "IMPARITAET",
          "hinweis": "Prinzip: drohende Verluste zeigen, Gewinne erst bei Verwirklichung"
        },
        {
          "wort": "SKONTO",
          "hinweis": "Nachträgliche Preisminderung bei schneller Zahlung"
        },
        {
          "wort": "NEBENKOSTEN",
          "hinweis": "Fracht, Montage, Zulassung erhöhen die Anschaffungskosten"
        },
        {
          "wort": "VERTRIEBSKOSTEN",
          "hinweis": "Dürfen nie in die Herstellungskosten"
        },
        {
          "wort": "TEILWERT",
          "hinweis": "Steuerlicher Wert, den ein Betriebserwerber für ein einzelnes Wirtschaftsgut zahlen würde"
        },
        {
          "wort": "ZUSCHREIBUNG",
          "hinweis": "Wertaufholung nach Wegfall des Abschreibungsgrundes"
        },
        {
          "wort": "ABGRENZUNG",
          "hinweis": "Zuordnung von Aufwand und Ertrag zum richtigen Geschäftsjahr"
        }
      ],
      "paragrafen": [
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 238 Abs. 1 HGB",
          "text": "Jeder Kaufmann muss Bücher führen. Darin müssen seine Geschäfte und sein Vermögen so stehen, wie es die Grundsätze ordnungsmäßiger Buchführung (GoB) verlangen."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 241a HGB",
          "text": "Ein Einzelkaufmann ist von Buchführung, Inventar und Bilanz befreit, wenn er an zwei Abschlussstichtagen hintereinander höchstens 800.000 € Umsatz und 80.000 € Jahresüberschuss hat. Er darf dann eine Einnahmenüberschussrechnung machen. Für OHG, KG und GmbH gilt die Befreiung nicht."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 240 HGB",
          "text": "Zu Beginn und am Ende jedes Geschäftsjahres wird ein Inventar aufgestellt: ein genaues Verzeichnis aller Vermögensgegenstände und Schulden mit Menge und Wert. Die Bestandsaufnahme dafür heißt Inventur."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 242 HGB",
          "text": "Am Ende jedes Geschäftsjahres stellt der Kaufmann eine Bilanz und eine Gewinn- und Verlustrechnung auf. Beide zusammen sind der Jahresabschluss (bei Einzelunternehmen und Personengesellschaften)."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 243 und § 245 HGB",
          "text": "Der Jahresabschluss muss klar und übersichtlich sein und die GoB einhalten. Er wird in angemessener Zeit aufgestellt und vom Kaufmann (bei Gesellschaften von allen persönlich haftenden Gesellschaftern) mit Datum unterschrieben."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 264 Abs. 1 HGB",
          "text": "Bei Kapitalgesellschaften (GmbH, UG, AG) und bei Personengesellschaften ohne natürliche Person als Vollhafter (z. B. GmbH & Co. KG, § 264a) gehört zum Jahresabschluss zusätzlich der Anhang. Mittelgroße und große Gesellschaften stellen außerdem einen Lagebericht auf – der gehört aber nicht zum Jahresabschluss."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 267 HGB",
          "text": "Kapitalgesellschaften werden in klein, mittelgroß und groß eingeteilt. Entscheidend sind Bilanzsumme, Umsatz und Zahl der Arbeitnehmer. Klein ist, wer an zwei Stichtagen hintereinander zwei von drei Grenzen nicht überschreitet: 7,5 Mio. € Bilanzsumme, 15 Mio. € Umsatz, 50 Arbeitnehmer."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 284 HGB",
          "text": "Der Anhang erklärt die Zahlen von Bilanz und GuV genauer, nennt die angewandten Ansatz- und Bewertungsmethoden und enthält in der Regel den Anlagenspiegel (§ 284 Abs. 3 HGB)."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 289 HGB",
          "text": "Der Lagebericht beschreibt den Geschäftsverlauf und die wirtschaftliche Lage des Unternehmens und die voraussichtliche Entwicklung mit ihren Chancen und Risiken. Er ist eine Ergänzung, kein Teil des Jahresabschlusses."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 140 AO",
          "text": "Wer schon nach anderen Gesetzen (vor allem nach dem HGB) Bücher führen muss, muss das auch für die Steuer tun. Man nennt das abgeleitete Buchführungspflicht."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 141 AO",
          "text": "Gewerbetreibende sowie Land- und Forstwirte, die nicht schon nach HGB buchen müssen, werden buchführungspflichtig, wenn ihr Umsatz über 800.000 € oder ihr Gewinn über 80.000 € im Jahr liegt. Die Pflicht beginnt mit dem Wirtschaftsjahr, nachdem das Finanzamt sie mitgeteilt hat."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 5 Abs. 1 Satz 1 EStG",
          "text": "Maßgeblichkeitsprinzip: In die Steuerbilanz kommt das Betriebsvermögen, das nach den handelsrechtlichen GoB auszuweisen ist. Die Handelsbilanz ist also die Grundlage der Steuerbilanz – außer das Steuerrecht schreibt etwas anderes vor oder ein steuerliches Wahlrecht wird anders ausgeübt."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 60 Abs. 2 EStDV",
          "text": "Weichen Handels- und Steuerbilanz voneinander ab, legt man der Steuererklärung eine Überleitungsrechnung bei oder erstellt eine eigene Steuerbilanz. Stimmen beide überein, spricht man von einer Einheitsbilanz."
        },
        {
          "gruppe": "Grundlagen des Jahresabschlusses",
          "ref": "§ 5b EStG",
          "text": "Bilanz und GuV werden dem Finanzamt elektronisch übermittelt (E-Bilanz)."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 246 Abs. 1 HGB",
          "text": "Vollständigkeitsgebot: In den Jahresabschluss gehören alle Vermögensgegenstände, Schulden, Rechnungsabgrenzungsposten, Aufwendungen und Erträge – egal ob gekauft oder selbst hergestellt."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 246 Abs. 2 HGB",
          "text": "Verrechnungsverbot: Aktivposten dürfen nicht mit Passivposten und Aufwendungen nicht mit Erträgen verrechnet werden. Beispiel: Eine Forderung an einen Kunden wird nicht mit einer Schuld bei ihm „weggerechnet“."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 247 HGB",
          "text": "In der Bilanz werden Anlagevermögen, Umlaufvermögen, Eigenkapital, Schulden und Rechnungsabgrenzungsposten getrennt ausgewiesen. Zum Anlagevermögen gehört nur, was dauerhaft dem Betrieb dienen soll."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 248 Abs. 1 HGB",
          "text": "Ansatzverbot: Kosten für die Gründung, für die Beschaffung von Eigenkapital und für den Abschluss von Versicherungsverträgen dürfen nicht aktiviert werden."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 248 Abs. 2 HGB",
          "text": "Selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens (z. B. selbst programmierte Software) dürfen handelsrechtlich aktiviert werden (Wahlrecht). Selbst geschaffene Marken, Drucktitel, Verlagsrechte und Kundenlisten dürfen nie aktiviert werden."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 5 Abs. 2 EStG",
          "text": "Steuerlich dürfen immaterielle Wirtschaftsgüter des Anlagevermögens nur aktiviert werden, wenn sie entgeltlich erworben wurden. Selbst geschaffene bleiben in der Steuerbilanz weg."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "R 4.2 Abs. 1 EStR",
          "text": "Betriebsvermögen: Mehr als 50 % betriebliche Nutzung = notwendiges Betriebsvermögen. 10 bis 50 % = gewillkürtes Betriebsvermögen (darf zugeordnet werden). Unter 10 % = notwendiges Privatvermögen."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 1 HGB",
          "text": "Bilanzidentität: Die Werte in der Eröffnungsbilanz müssen genau mit der Schlussbilanz des Vorjahres übereinstimmen."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 2 HGB",
          "text": "Unternehmensfortführung (going concern): Man bewertet so, als ob das Unternehmen weiterläuft – nicht mit Zerschlagungs- oder Verkaufswerten, solange keine echten Gründe dagegen sprechen."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 3 HGB",
          "text": "Einzelbewertung und Stichtagsprinzip: Jeder Vermögensgegenstand und jede Schuld wird einzeln und mit dem Wert am Abschlussstichtag bewertet. Ausnahmen: Festwert, Gruppenbewertung und Verbrauchsfolgen (§ 240 Abs. 3 und 4, § 256 HGB)."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 4 HGB",
          "text": "Vorsichtsprinzip: Alle vorhersehbaren Risiken und Verluste bis zum Stichtag werden berücksichtigt, auch wenn man sie erst bis zur Aufstellung erfährt (Wertaufhellung). Gewinne erst, wenn sie verwirklicht sind (Realisationsprinzip). Verluste schon, wenn sie drohen (Imparitätsprinzip)."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 5 HGB",
          "text": "Periodenabgrenzung: Aufwendungen und Erträge gehören in das Jahr, zu dem sie wirtschaftlich gehören – egal, wann bezahlt wird."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 252 Abs. 1 Nr. 6 HGB",
          "text": "Bewertungsstetigkeit: Die Bewertungsmethoden des Vorjahres werden beibehalten. Man darf nicht jedes Jahr so abschreiben, „wie es gerade passt“."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 253 Abs. 1 Satz 1 HGB",
          "text": "Anschaffungskostenprinzip: Vermögensgegenstände werden höchstens mit ihren Anschaffungs- oder Herstellungskosten angesetzt (abzüglich Abschreibungen). Wertsteigerungen darüber hinaus dürfen nicht gezeigt werden."
        },
        {
          "gruppe": "Ansatz- und Bewertungsgrundsätze",
          "ref": "§ 253 Abs. 4 HGB",
          "text": "Umlaufvermögen (z. B. Waren, Wertpapiere zum Verkauf): Ist der Wert am Stichtag niedriger, muss darauf abgeschrieben werden – auch wenn die Wertminderung nur vorübergehend ist (strenges Niederstwertprinzip)."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 255 Abs. 1 HGB",
          "text": "Anschaffungskosten sind alle Ausgaben, um einen Vermögensgegenstand zu erwerben und betriebsbereit zu machen, soweit sie ihm einzeln zugeordnet werden können. Schema: Anschaffungspreis + Anschaffungsnebenkosten + nachträgliche Anschaffungskosten − Anschaffungspreisminderungen."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 6 Abs. 1 Nr. 1 und 2 EStG",
          "text": "Auch in der Steuerbilanz werden Wirtschaftsgüter mit den Anschaffungs- oder Herstellungskosten bewertet. Der Begriff ist derselbe wie im HGB."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 9b Abs. 1 EStG",
          "text": "Vorsteuer, die abgezogen werden darf, gehört nicht zu den Anschaffungskosten. Für Unternehmer mit Vorsteuerabzug rechnet man also immer mit Nettobeträgen."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 17 Abs. 1 UStG",
          "text": "Mindert sich der Preis nachträglich (Skonto, Bonus, Rabatt nach der Rechnung), werden die Anschaffungskosten und die Vorsteuer berichtigt. Ein Rabatt in der Rechnung mindert die Anschaffungskosten sofort."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 255 Abs. 1 HGB (Nebenkosten)",
          "text": "Zu den Anschaffungsnebenkosten gehören z. B. Fracht, Überführung, Transportversicherung, Montage, Fundament, Zulassung, Kennzeichen, Beschriftung; bei Grundstücken Grunderwerbsteuer, Notar für den Kaufvertrag, Grundbucheintrag und Makler."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 255 Abs. 3 HGB",
          "text": "Finanzierungskosten gehören nicht zu den Anschaffungskosten: Zinsen, Notar und Grundbuch für eine Grundschuld (Darlehenssicherung) sind sofort Aufwand. Ebenso laufende Kosten wie Tankfüllung, Kfz-Steuer und Kfz-Versicherung."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 11 GrEStG",
          "text": "Die Grunderwerbsteuer beträgt bundesweit 3,5 % des Kaufpreises, die Länder legen aber eigene Sätze fest (z. B. Niedersachsen und Sachsen-Anhalt 5 %). Sie gehört zu den Anschaffungskosten des Grundstücks."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "R 7.1 und H 6.4 EStR/EStH",
          "text": "Beim bebauten Grundstück werden die Anschaffungskosten (mit allen Nebenkosten) auf Grund und Boden (nicht abnutzbar, keine AfA) und Gebäude (abnutzbar) aufgeteilt. Wird ein wertloses Gebäude in Abbruchabsicht gekauft und abgerissen, gehören Kaufpreis und Abbruchkosten zum Grund und Boden."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 6 Abs. 2 EStG",
          "text": "Geringwertige Wirtschaftsgüter: Bewegliche, selbstständig nutzbare Anlagegüter mit Anschaffungskosten bis 800 € netto dürfen sofort voll abgeschrieben werden. Ab 250 € werden sie in einem Verzeichnis geführt."
        },
        {
          "gruppe": "Anschaffungskosten",
          "ref": "§ 6 Abs. 2a EStG",
          "text": "Sammelposten: Wirtschaftsgüter über 250 € bis 1.000 € netto können stattdessen in einen jährlichen Sammelposten kommen, der über 5 Jahre mit je 20 % aufgelöst wird."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 255 Abs. 2 Satz 1 HGB",
          "text": "Herstellungskosten sind alle Aufwendungen für den Verbrauch von Gütern und Diensten, um einen Vermögensgegenstand selbst herzustellen, zu erweitern oder wesentlich zu verbessern."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 255 Abs. 2 Satz 2 HGB",
          "text": "Pflicht (Wertuntergrenze): Materialeinzelkosten, Fertigungseinzelkosten und Sondereinzelkosten der Fertigung (z. B. Konstruktionspläne, Modelle) plus angemessene Teile der Material- und Fertigungsgemeinkosten."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 255 Abs. 2 Satz 3 HGB",
          "text": "Wahlrecht: angemessene Teile der allgemeinen Verwaltungskosten, der Kosten für soziale Einrichtungen, freiwillige soziale Leistungen und die betriebliche Altersversorgung. Mit ihnen erreicht man die Wertobergrenze."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 255 Abs. 2 Satz 4 HGB",
          "text": "Verbot: Forschungskosten und Vertriebskosten dürfen nie in die Herstellungskosten. Ein Gewinnzuschlag gehört ebenfalls nicht hinein – Herstellungskosten sind Kosten, kein Verkaufspreis."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 255 Abs. 3 HGB",
          "text": "Zinsen für Fremdkapital gehören grundsätzlich nicht zu den Herstellungskosten. Nur wenn ein Kredit gezielt die Herstellung finanziert, dürfen die Zinsen für den Herstellungszeitraum einbezogen werden."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 6 Abs. 1 Nr. 1b EStG",
          "text": "Steuerlich gelten dieselben Pflichtbestandteile. Die Wahlrechte (allgemeine Verwaltung, soziale Kosten) müssen in der Steuerbilanz genauso ausgeübt werden wie in der Handelsbilanz (Übereinstimmungsvorbehalt)."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "R 6.3 EStR",
          "text": "Die Richtlinie zählt die Bestandteile der steuerlichen Herstellungskosten im Einzelnen auf. Die steuerliche Untergrenze entspricht der handelsrechtlichen Wertuntergrenze."
        },
        {
          "gruppe": "Herstellungskosten",
          "ref": "§ 247 Abs. 2 HGB (Anlagen im Bau)",
          "text": "Ist eine selbst gebaute Anlage am Bilanzstichtag noch nicht fertig, werden die bisherigen Herstellungskosten als „Anlagen im Bau“ aktiviert. Sie werden noch nicht abgeschrieben. Bei Fertigstellung bucht man sie auf das richtige Anlagekonto um."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 253 Abs. 3 Satz 1 und 2 HGB",
          "text": "Anlagevermögen, das sich abnutzt, wird planmäßig über die Nutzungsdauer abgeschrieben. Anschaffungs- oder Herstellungskosten minus Abschreibung = fortgeführte Anschaffungs- oder Herstellungskosten."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 7 Abs. 1 EStG",
          "text": "Lineare AfA: Anschaffungskosten geteilt durch die betriebsgewöhnliche Nutzungsdauer, jedes Jahr gleich viel. Im Anschaffungsjahr nur monatsgenau ab dem Monat der Anschaffung (Satz 4)."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 7 Abs. 2 EStG",
          "text": "Degressive AfA: Für bewegliche Anlagegüter, die vom 1. Juli 2025 bis Ende 2027 angeschafft werden, darf wieder degressiv abgeschrieben werden: höchstens das Dreifache der linearen AfA und höchstens 30 % vom Restbuchwert."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 253 Abs. 3 Satz 5 HGB",
          "text": "Sinkt der Wert eines Anlagegutes voraussichtlich dauerhaft unter den Buchwert, muss außerplanmäßig auf den niedrigeren Wert abgeschrieben werden (Pflicht). Bei nur vorübergehender Wertminderung ist das beim Sachanlagevermögen verboten."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 253 Abs. 3 Satz 6 HGB",
          "text": "Ausnahme Finanzanlagen (z. B. Beteiligungen): Hier darf man auch bei nur vorübergehender Wertminderung abschreiben (Wahlrecht)."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 6 Abs. 1 Nr. 1 Satz 2 EStG",
          "text": "Steuerlich darf auf den niedrigeren Teilwert nur abgeschrieben werden, wenn die Wertminderung voraussichtlich dauerhaft ist. Es ist ein Wahlrecht – man kann auch beim höheren Buchwert bleiben."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 6 Abs. 1 Nr. 1 Satz 3 EStG",
          "text": "Teilwert ist der Betrag, den ein Käufer des ganzen Betriebs für dieses eine Wirtschaftsgut zahlen würde, wenn er den Betrieb fortführt. Gründe für einen niedrigen Teilwert: Fehlmaßnahme, gesunkene Wiederbeschaffungskosten, geringere Rentabilität."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "BMF-Schreiben zur Teilwertabschreibung",
          "text": "Dauerhaft ist eine Wertminderung beim abnutzbaren Anlagevermögen, wenn der Wert am Stichtag mindestens für die halbe Restnutzungsdauer unter dem planmäßigen Restbuchwert liegt. Man vergleicht also den Teilwert mit dem Buchwert, den das Gut nach der halben Restnutzungsdauer hätte."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 7 Abs. 1 Satz 7 EStG",
          "text": "Absetzung für außergewöhnliche technische oder wirtschaftliche Abnutzung (AfaA): Wird ein Gut z. B. durch einen Unfall oder fehlende Nutzbarkeit außergewöhnlich entwertet, darf zusätzlich zur normalen AfA abgeschrieben werden."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 11c Abs. 2 EStDV",
          "text": "Nach einer Teilwertabschreibung oder AfaA wird die weitere AfA vom neuen, niedrigeren Wert über die Restnutzungsdauer berechnet."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 253 Abs. 5 HGB",
          "text": "Wertaufholungsgebot: Fällt der Grund für eine außerplanmäßige Abschreibung weg, muss wieder zugeschrieben werden – höchstens bis zu den fortgeführten Anschaffungs- oder Herstellungskosten (also dem Wert ohne die außerplanmäßige Abschreibung). Ausnahme: Geschäfts- oder Firmenwert."
        },
        {
          "gruppe": "Abschreibung, Teilwert und Zuschreibung",
          "ref": "§ 6 Abs. 1 Nr. 1 Satz 4 EStG",
          "text": "Auch steuerlich muss zugeschrieben werden, wenn der Teilwert wieder steigt. Obergrenze sind die fortgeführten Anschaffungs- oder Herstellungskosten. Die Zuschreibung ist ein Ertrag."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 252 Abs. 1 Nr. 5 HGB",
          "text": "Aufwendungen und Erträge gehören in das Geschäftsjahr, zu dem sie wirtschaftlich gehören – unabhängig davon, wann das Geld fließt. Dafür gibt es Rechnungsabgrenzungsposten und sonstige Forderungen und Verbindlichkeiten."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 250 Abs. 1 HGB",
          "text": "Aktiver Rechnungsabgrenzungsposten (ARAP): Das Unternehmen hat vor dem Stichtag schon bezahlt, der Aufwand gehört aber (teilweise) in das neue Jahr. Beispiel: Versicherung, Miete, Zinsen, Kfz-Steuer im Voraus bezahlt."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 250 Abs. 2 HGB",
          "text": "Passiver Rechnungsabgrenzungsposten (PRAP): Das Unternehmen hat vor dem Stichtag schon Geld bekommen, der Ertrag gehört aber (teilweise) in das neue Jahr. Beispiel: Miete oder Zinsen im Voraus erhalten."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 5 Abs. 5 Satz 1 EStG",
          "text": "Steuerlich gelten dieselben Regeln: Rechnungsabgrenzungsposten nur für Einnahmen und Ausgaben vor dem Stichtag, die Ertrag oder Aufwand für eine bestimmte Zeit danach sind."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 5 Abs. 5 Satz 2 EStG",
          "text": "Steuerlich darf ein Rechnungsabgrenzungsposten wegfallen, wenn die einzelne Ausgabe oder Einnahme 800 € nicht übersteigt. Das Wahlrecht muss dann einheitlich für alle solchen Fälle ausgeübt werden."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 246 Abs. 1 HGB (sonstige Forderungen)",
          "text": "Sonstige Forderung (sonstiger Vermögensgegenstand): Der Ertrag gehört ins alte Jahr, das Geld kommt erst im neuen Jahr. Beispiel: Dezembermiete oder Dezemberzinsen werden im Januar gezahlt."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 246 Abs. 1 HGB (sonstige Verbindlichkeiten)",
          "text": "Sonstige Verbindlichkeit: Der Aufwand gehört ins alte Jahr, bezahlt wird erst im neuen Jahr. Beispiel: Zinsen, Pacht, Löhne oder Beiträge für das alte Jahr, die erst später fällig sind."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 11 Abs. 1 Satz 5 EStG",
          "text": "Das Zufluss- und Abflussprinzip gilt nur für Einnahmenüberschussrechner. Wer bilanziert, grenzt immer periodengerecht ab."
        },
        {
          "gruppe": "Zeitliche Abgrenzung",
          "ref": "§ 15 Abs. 1 Satz 1 Nr. 1 UStG",
          "text": "Bei Vorauszahlungen darf die Vorsteuer schon abgezogen werden, sobald eine Rechnung vorliegt und bezahlt ist – auch wenn die Leistung erst im neuen Jahr erbracht wird. Die Vorsteuer wird nicht abgegrenzt."
        }
      ],
      "themenInfo": {
        "Grundlagen des Jahresabschlusses": {
          "ueberblick": "Am Ende jedes Geschäftsjahres zieht ein Unternehmen Bilanz. Wer das muss, steht im HGB (Kaufleute) und in der AO (Steuerrecht). Einzelunternehmen und Personengesellschaften erstellen Bilanz und GuV, Kapitalgesellschaften zusätzlich einen Anhang und – ab mittlerer Größe – einen Lagebericht. Aus der Handelsbilanz wird über das Maßgeblichkeitsprinzip die Steuerbilanz abgeleitet; Abweichungen gleicht man mit einer Überleitungsrechnung aus.",
          "achten": [
            "Bilanzierungspflicht prüfen: Kaufmann nach §§ 1–6 HGB? Dann § 238 HGB. Einzelkaufmann unter 800.000 € Umsatz und 80.000 € Gewinn? Dann Befreiung nach § 241a HGB.",
            "Steuerlich: § 140 AO (abgeleitet aus dem HGB) und § 141 AO (eigene Grenzen 800.000 € / 80.000 € für Gewerbetreibende und Land- und Forstwirte).",
            "Bestandteile: Einzelunternehmen und OHG/KG mit natürlicher Person als Vollhafter = Bilanz + GuV. GmbH, AG, GmbH & Co. KG = Bilanz + GuV + Anhang.",
            "Der Lagebericht ist kein Teil des Jahresabschlusses. Kleine Kapitalgesellschaften brauchen keinen.",
            "Steuerlicher Gewinn: Handelsbilanzgewinn + nicht abziehbare Betriebsausgaben (z. B. Geschenke über 50 €, 30 % der Bewirtung) = steuerliches Ergebnis."
          ],
          "fallen": [
            "„Teil des Jahresabschlusses einer Kapitalgesellschaft“ ist der Anhang – nicht der Lagebericht (im Test so abgefragt).",
            "§ 241a HGB gilt nur für Einzelkaufleute, nicht für OHG oder GmbH.",
            "Die Grenzen von § 241a HGB und § 141 AO liegen beide bei 800.000 € Umsatz und 80.000 € Gewinn – ältere Bücher nennen noch 600.000 € / 60.000 €.",
            "Den Anlagenspiegel findet man heute in § 284 Abs. 3 HGB (früher § 268 Abs. 2 HGB)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Zuordnungsfragen (Anhang oder Lagebericht, wer ist buchführungspflichtig?) kommen in Tests und in der Abschlussprüfung im Rechnungswesen regelmäßig vor.",
          "loesungen": [
            {
              "titel": "Test 1: Anhang oder Lagebericht?",
              "aufgabe": "Ordnen Sie zu: a) Teil des Jahresabschlusses, b) Darstellung der wirtschaftlichen Lage, c) Erläuterung der Werte der Bilanz und GuV, d) Teil des Jahresabschlusses einer Kapitalgesellschaft.",
              "loesung": "- a) Anhang\n- b) Lagebericht\n- c) Anhang\n- d) Anhang – der Anhang gehört bei Kapitalgesellschaften zum Jahresabschluss (§ 264 Abs. 1 HGB), der Lagebericht nicht.",
              "hinweis": "In der Mitschrift stand bei d) „Lagebericht“ – das war der Fehler im Test."
            },
            {
              "titel": "Übung 1: Anhang oder Lagebericht?",
              "aufgabe": "Ordnen Sie die sieben Aussagen dem Anhang oder dem Lagebericht zu.",
              "loesung": "- Wirtschaftlichkeitsbericht mit Geschäftsverlauf, Ergebnis und Entwicklung → **Lagebericht** (§ 289 HGB)\n- Werte der Bilanz und GuV werden kommentiert → **Anhang** (§ 284 HGB)\n- Angaben zu Bilanzansatz- und Bewertungswahlrechten → **Anhang**\n- Freiwillige Informationen zur Selbstdarstellung (z. B. Umweltbilanz) → **Lagebericht**\n- Enthält in der Regel den Anlagenspiegel → **Anhang** (§ 284 Abs. 3 HGB)\n- Gehört nicht zum Jahresabschluss → **Lagebericht**\n- Gehört zum Jahresabschluss einer Kapitalgesellschaft → **Anhang**"
            },
            {
              "titel": "Beispiel: steuerliches Ergebnis der Tischlerei",
              "aufgabe": "Handelsrechtlicher Gewinn 2025: 65.400 €. Darin als Aufwand gebucht: nicht abziehbare Geschenke 2.380 € (§ 4 Abs. 5 Nr. 1 EStG) und nicht abziehbare Bewirtungsaufwendungen 500 € (§ 4 Abs. 5 Nr. 2 EStG). Berechnen Sie das steuerliche Ergebnis.",
              "loesung": "- Gewinn laut Handelsbilanz: 65.400 €\n- + nicht abziehbare Geschenke: 2.380 €\n- + nicht abziehbare Bewirtung: 500 €\n- = **steuerlicher Gewinn: 68.280 €**\nDie nicht abziehbaren Betriebsausgaben mindern den Handelsbilanzgewinn, dürfen den steuerlichen Gewinn aber nicht mindern. Deshalb werden sie außerhalb der Bilanz wieder hinzugerechnet."
            }
          ],
          "quelle": "Mitschrift LF 10"
        },
        "Ansatz- und Bewertungsgrundsätze": {
          "ueberblick": "Bevor man rechnet, klärt man zwei Fragen: Darf oder muss etwas überhaupt in die Bilanz (Ansatz: Pflicht, Wahlrecht, Verbot)? Und mit welchem Wert (Bewertung)? Die allgemeinen Bewertungsgrundsätze stehen in § 252 HGB – von der Bilanzidentität bis zur Stetigkeit. Dazu kommen das Anschaffungskostenprinzip als Obergrenze und das Niederstwertprinzip.",
          "achten": [
            "Ansatz: Pflicht (§ 246 Abs. 1), Wahlrecht (§ 248 Abs. 2 selbst geschaffene immaterielle Güter), Verbot (§ 248 Abs. 1 Gründungskosten u. a.).",
            "Die sechs Grundsätze aus § 252 Abs. 1 HGB in der Reihenfolge: 1 Bilanzidentität, 2 Fortführung, 3 Einzelbewertung/Stichtag, 4 Vorsicht (Realisation und Imparität), 5 Periodenabgrenzung, 6 Stetigkeit.",
            "Wertsteigerungen über die Anschaffungskosten hinaus dürfen nie gezeigt werden (§ 253 Abs. 1 HGB).",
            "Wertminderungen im Umlaufvermögen müssen immer gezeigt werden (§ 253 Abs. 4 HGB).",
            "Bei Prüfungsaufgaben immer: richtig/falsch + Grundsatz + Paragraf + kurze Begründung."
          ],
          "fallen": [
            "Realisationsprinzip und Imparitätsprinzip verwechseln: Gewinne erst bei Verkauf, Verluste schon, wenn sie drohen.",
            "Wein mit gesunkenem Wert abzuschreiben ist richtig (Imparität/Niederstwert) – mit gestiegenem Wert hochzuschreiben ist falsch (Anschaffungskostenprinzip).",
            "Liquidationswerte nur, wenn die Fortführung wirklich nicht mehr möglich ist – eine bloße Überlegung der Inhaber reicht nicht.",
            "Selbst geschaffene Software: handelsrechtlich Wahlrecht, steuerlich Verbot (§ 5 Abs. 2 EStG) – das führt zu einer Abweichung zwischen Handels- und Steuerbilanz."
          ],
          "pruefung": "hoch",
          "pruefungText": "Fallaufgaben „Prüfen Sie die Auffassung des Steuerberaters mithilfe von § 252 HGB“ sind ein Klassiker. Punkte gibt es für das Ergebnis, den genannten Grundsatz und die Begründung.",
          "loesungen": [
            {
              "titel": "Übung 2: Die Auffassungen von Steuerberater Schneider (§ 252 HGB)",
              "aufgabe": "a) Neubeginn ohne Rücksicht auf die Vorjahreswerte. b) Alle Vermögensgegenstände zum halben Buchwert, weil die OHG vielleicht 2026 aufgelöst wird. c) Die gesamte Geschäftsausstattung als eine Position mit 20 % abschreiben. d) Wein (AK 10.000 €) nur noch zur Hälfte verkäuflich – Abschreibung um 5.000 €. e) Wein (AK 8.000 €) jetzt 30.000 € wert – Ansatz mit 30.000 €. f) Nur nach Zahlungsvorgängen buchen. g) Abschreibungen jedes Jahr nach eigenem Ermessen.",
              "loesung": "- a) **Falsch.** Bilanzidentität (§ 252 Abs. 1 Nr. 1 HGB): Die Eröffnungsbilanz 2025 muss mit der Schlussbilanz 2024 übereinstimmen.\n- b) **Falsch.** Unternehmensfortführung (Nr. 2): Solange die Auflösung nicht feststeht, wird mit Fortführungswerten bewertet; zudem verstößt der pauschale halbe Wert gegen die Einzelbewertung.\n- c) **Falsch.** Einzelbewertung (Nr. 3): Jeder Gegenstand wird einzeln mit seiner Nutzungsdauer abgeschrieben.\n- d) **Richtig.** Vorsichtsprinzip/Imparitätsprinzip (Nr. 4) und strenges Niederstwertprinzip für Vorräte (§ 253 Abs. 4 HGB): Der drohende Verlust muss schon jetzt gezeigt werden. Ansatz 5.000 €.\n- e) **Falsch.** Realisationsprinzip (Nr. 4) und Anschaffungskostenprinzip (§ 253 Abs. 1 HGB): höchstens 8.000 €. Der Gewinn entsteht erst beim Verkauf.\n- f) **Falsch.** Periodenabgrenzung (Nr. 5): Aufwand und Ertrag gehören in das Jahr, zu dem sie wirtschaftlich gehören.\n- g) **Falsch.** Bewertungsstetigkeit (Nr. 6): Die bisherigen Methoden werden beibehalten.",
              "hinweis": "Bei d) steht in der Mitschrift nur „Vorsichtsprinzip“. Für volle Punkte zusätzlich das Imparitätsprinzip und § 253 Abs. 4 HGB nennen."
            }
          ],
          "quelle": "Mitschrift LF 10"
        },
        "Anschaffungskosten": {
          "ueberblick": "Gekaufte Anlagegüter werden mit ihren Anschaffungskosten aktiviert. Dazu gehört alles, was nötig ist, um das Gut zu erwerben und betriebsbereit zu machen. Abziehbare Vorsteuer gehört nie dazu. Preisminderungen wie Rabatt und Skonto mindern die Anschaffungskosten. Laufende Kosten und Finanzierungskosten sind sofort Aufwand.",
          "achten": [
            "1. Anschaffungspreis (netto).",
            "2. + Anschaffungsnebenkosten: Fracht, Überführung, Montage, Fundament, Zulassung, Kennzeichen, Beschriftung; beim Grundstück Grunderwerbsteuer, Notar für den Kaufvertrag, Grundbuch, Makler.",
            "3. + nachträgliche Anschaffungskosten.",
            "4. − Anschaffungspreisminderungen: Rabatt sofort, Skonto und Bonus nachträglich (Vorsteuer nach § 17 UStG berichtigen).",
            "5. = Anschaffungskosten. Danach prüfen: GWG bis 800 € netto? Sammelposten 250 bis 1.000 €? Beim bebauten Grundstück aufteilen in Grund und Boden und Gebäude."
          ],
          "fallen": [
            "Skonto immer vom Rechnungsbetrag nach Rabatt rechnen.",
            "Tankfüllung, Kfz-Steuer und Kfz-Versicherung sind keine Anschaffungskosten, sondern Kfz-Kosten.",
            "Notar und Grundbuch für eine Grundschuld sind Finanzierungskosten (Aufwand), keine Anschaffungskosten.",
            "Die Zulassungsgebühr hat keine Umsatzsteuer – keine Vorsteuer daraus buchen.",
            "Die Vorsteuer wird beim Grundstück nicht auf Boden und Gebäude „aufgeteilt“ – sie ist ein eigenes Konto. Aufteilen muss man nur die Anschaffungskosten.",
            "GWG-Grenze 800 € gilt für die Anschaffungskosten insgesamt (mit Nebenkosten, nach Skonto). Der Computer im Test kostet 804 € – also kein GWG."
          ],
          "pruefung": "hoch",
          "pruefungText": "Anschaffungskosten mit Buchungssätzen und Gewinn- und Bilanzauswirkung sind fester Bestandteil jeder Abschlussprüfung im Rechnungswesen.",
          "loesungen": [
            {
              "titel": "Test 2: Computer mit Skonto und Zustellung",
              "aufgabe": "Am 01.12.25 wird ein Computer für 800 € + USt auf Ziel gekauft und am 31.12.25 unter Abzug von 2 % Skonto per Bank bezahlt. Für die Zustellung werden am 30.12.25 20 € + USt bar an UPS gezahlt. a) Anschaffungskosten? b) Buchungssätze mit Gewinn- und Bilanzauswirkung.",
              "loesung": "**a) Anschaffungskosten**\n- Anschaffungspreis: 800,00 €\n- + Nebenkosten Zustellung: 20,00 €\n- − Skonto 2 % von 800 €: 16,00 €\n- = **804,00 €** (über 800 € → kein geringwertiges Wirtschaftsgut; möglich ist der Sammelposten oder die Abschreibung über die Nutzungsdauer, für Computer darf 1 Jahr angesetzt werden)\n**b) Buchungen**\n- 01.12.: Betriebs- und Geschäftsausstattung 800,00 € und Vorsteuer 152,00 € an Verbindlichkeiten aLuL 952,00 € – erfolgsneutral, Bilanzverlängerung 952 €\n- 30.12.: Betriebs- und Geschäftsausstattung 20,00 € und Vorsteuer 3,80 € an Kasse 23,80 € – erfolgsneutral, Aktivtausch\n- 31.12.: Verbindlichkeiten aLuL 952,00 € an Bank 932,96 €, Betriebs- und Geschäftsausstattung 16,00 € und Vorsteuer 3,04 € – erfolgsneutral, Bilanzverkürzung 952 €"
            },
            {
              "titel": "Beispiel: unbebautes Grundstück",
              "aufgabe": "Kaufpreis 120.000 €, 5 % Grunderwerbsteuer, Notar 1.200 € + USt, Grundbuch 80 €. Alles per Bank.",
              "loesung": "- Kaufpreis: 120.000 €\n- + Grunderwerbsteuer 5 %: 6.000 €\n- + Notar Kaufvertrag: 1.200 €\n- + Grundbuch: 80 €\n- = **Anschaffungskosten 127.280 €**\nBuchungen: unbebaute Grundstücke 120.000 € an Bank; unbebaute Grundstücke 6.000 € an Bank; unbebaute Grundstücke 1.200 € und Vorsteuer 228 € an Bank 1.428 €; unbebaute Grundstücke 80 € an Bank. Erfolgsneutral, Aktivtausch."
            },
            {
              "titel": "Beispiel: Lkw mit Nebenkosten",
              "aufgabe": "Lkw 180.000 € + USt, Überführung 600 € + USt (Bank), Zulassung 120 € bar, Nummernschilder 90 € + USt bar, Schriftzug 1.500 € + USt (Bank nach Rechnung).",
              "loesung": "- Kaufpreis 180.000 € + Überführung 600 € + Zulassung 120 € + Nummernschilder 90 € + Schriftzug 1.500 €\n- = **Anschaffungskosten 182.310 €**\n- Vorsteuer: 34.200 € + 114 € + 17,10 € + 285 € = 34.616,10 € (die Zulassungsgebühr hat keine Umsatzsteuer)\nBuchungen: Fuhrpark an Bank bzw. Kasse bzw. Verbindlichkeiten, jeweils mit Vorsteuer. Erfolgsneutral."
            },
            {
              "titel": "Beispiel: Maschine mit Rabatt und Skonto",
              "aufgabe": "Maschine 10.000 € + USt auf Ziel, 10 % Treuerabatt, Zahlung mit 3 % Skonto vom Zieleinkaufspreis.",
              "loesung": "- Listenpreis: 10.000 €\n- − Rabatt 10 %: 1.000 €\n- = Zieleinkaufspreis: 9.000 € (+ 1.710 € USt = 10.710 €)\n- − Skonto 3 %: 270 €\n- = **Anschaffungskosten 8.730 €**\nKauf: Maschinen 9.000 € und Vorsteuer 1.710 € an Verbindlichkeiten aLuL 10.710 €.\nZahlung: Verbindlichkeiten aLuL 10.710 € an Bank 10.388,70 €, Maschinen 270 € und Vorsteuer 51,30 €. Erfolgsneutral."
            },
            {
              "titel": "Übung 1: bebautes Grundstück einer GmbH",
              "aufgabe": "Kaufpreis 150.000 €, davon 20 % Grund und Boden. Grunderwerbsteuer 5 %, Makler 4.500 € + USt, Notar 1.250 € + USt, Grundbuch 500 €. Alles per Bank.",
              "loesung": "- Kaufpreis 150.000 € + Grunderwerbsteuer 7.500 € + Makler 4.500 € + Notar 1.250 € + Grundbuch 500 €\n- = **Anschaffungskosten 163.750 €**\n- davon Grund und Boden 20 %: **32.750 €**, Gebäude 80 %: **131.000 €**\n- Vorsteuer: 855 € (Makler) + 237,50 € (Notar) = 1.092,50 €\nBuchung: Grund und Boden 32.750 €, Gebäude 131.000 € und Vorsteuer 1.092,50 € an Bank 164.842,50 €. Erfolgsneutral, Aktivtausch."
            },
            {
              "titel": "Übung 2: Grundstück mit wertlosem Schuppen",
              "aufgabe": "Kaufpreis 300.000 €. Notar Kaufvertrag 2.200 € + USt, Notar Grundschuld 500 € + USt, Grunderwerbsteuer 5 %, Abbruch des Schuppens 5.000 € + USt. Alles per Bank.",
              "loesung": "- Kaufpreis 300.000 € + Notar Kaufvertrag 2.200 € + Grunderwerbsteuer 15.000 € + Abbruch 5.000 €\n- = **Anschaffungskosten Grund und Boden 322.200 €** (Gebäude wertlos und in Abbruchabsicht gekauft)\n- Vorsteuer: 418 € + 950 € = 1.368 €\n- Notar für die Grundschuld: **500 € Aufwand** (Finanzierungskosten) + 95 € Vorsteuer\nBuchungen: Grund und Boden 322.200 € und Vorsteuer 1.368 € an Bank 323.568 € – erfolgsneutral. Nebenkosten des Geldverkehrs 500 € und Vorsteuer 95 € an Bank 595 € – Gewinn −500 €."
            },
            {
              "titel": "Übung 3: Pkw mit Rechnung",
              "aufgabe": "Listenpreis 30.000 €, Anhängerkupplung 800 €, Überführung 300 €, Nummernschilder 40 €, Tankfüllung 50 € (alle netto + 19 % USt), Zulassung 50 € ohne USt. Zahlung per Bank 37.166,10 €.",
              "loesung": "- 30.000 € + 800 € + 300 € + 40 € + 50 € Zulassung\n- = **Anschaffungskosten 31.190 €** (Tankfüllung gehört nicht dazu)\n- Vorsteuer auf die Anschaffungskosten: 5.916,60 €\nBuchungen: Pkw 31.190 € und Vorsteuer 5.916,60 € an Bank 37.106,60 € – erfolgsneutral. Kfz-Kosten 50 € und Vorsteuer 9,50 € an Bank 59,50 € – Gewinn −50 €."
            },
            {
              "titel": "Übung 4: Drehautomat mit Fundament",
              "aufgabe": "Drehautomat 75.000 € + USt, Fracht und Transportversicherung 1.570 € + USt, Fundament 8.000 € + USt, Elektroanschlüsse 3.600 € + USt.",
              "loesung": "- 75.000 € + 1.570 € + 8.000 € + 3.600 €\n- = **Anschaffungskosten 88.170 €** (alles ist nötig, um die Maschine betriebsbereit zu machen)\n- Vorsteuer: 16.752,30 €\nBuchung: Maschinen 88.170 € und Vorsteuer 16.752,30 € an Verbindlichkeiten aLuL 104.922,30 €. Erfolgsneutral, Bilanzverlängerung."
            },
            {
              "titel": "Übung 5: Maschine mit 2 % Skonto",
              "aufgabe": "Maschine 120.000 € netto auf Ziel, Zahlung im Mai mit 2 % Skonto.",
              "loesung": "- 120.000 € − 2 % Skonto 2.400 € = **Anschaffungskosten 117.600 €**\nKauf: Maschinen 120.000 € und Vorsteuer 22.800 € an Verbindlichkeiten aLuL 142.800 €.\nZahlung: Verbindlichkeiten aLuL 142.800 € an Bank 139.944 €, Maschinen 2.400 € und Vorsteuer 456 €. Beides erfolgsneutral."
            }
          ],
          "quelle": "Mitschrift LF 10"
        },
        "Herstellungskosten": {
          "ueberblick": "Stellt ein Unternehmen ein Anlagegut selbst her (Maschine, Gebäude, Parkplatz), wird es mit den Herstellungskosten aktiviert. Pflicht sind Einzelkosten und angemessene Gemeinkosten von Material und Fertigung (Wertuntergrenze). Verwaltungskosten sind ein Wahlrecht (Wertobergrenze). Vertriebskosten, Forschung und Gewinnzuschlag sind verboten. Weil Material und Löhne schon als Aufwand gebucht sind, gleicht das Ertragskonto „andere aktivierte Eigenleistungen“ diesen Aufwand aus.",
          "achten": [
            "1. Materialeinzelkosten + Materialgemeinkosten (Zuschlag auf die Materialeinzelkosten).",
            "2. + Fertigungseinzelkosten (Löhne) + Fertigungsgemeinkosten (Zuschlag auf die Löhne).",
            "3. + Sondereinzelkosten der Fertigung (Konstruktionspläne, Modelle, Architekt) – immer netto.",
            "4. = Wertuntergrenze. Wahlweise + allgemeine Verwaltungskosten = Wertobergrenze.",
            "5. Buchen: Anlagekonto an „andere aktivierte Eigenleistungen“; nicht fertig am Stichtag = „Anlagen im Bau“."
          ],
          "fallen": [
            "Vertriebskosten und Gewinnzuschlag nie einrechnen – auch nicht bei der Wertobergrenze.",
            "„Niedrigster Wert“ = Wertuntergrenze (ohne Verwaltungskosten). „Höchster Wert“ = Wertobergrenze.",
            "Steuerlich müssen die Verwaltungskosten genauso behandelt werden wie in der Handelsbilanz (§ 6 Abs. 1 Nr. 1b EStG).",
            "Wird eine Fremdleistung per Bank bezahlt, steht im Buchungssatz Bank – nicht Verbindlichkeiten. In der Mitschrift stand bei den Übungen 7, 8 und 10 „Verbindlichkeiten aLuL“; dadurch stimmt auch die Bilanzauswirkung nicht.",
            "Außenanlagen (Wege, Parkplätze, Pflanzungen) sind eigene Wirtschaftsgüter mit eigener Nutzungsdauer – nicht Grund und Boden und nicht Gebäude.",
            "Erst addieren, dann runden: In der Mitschrift zu Übung 9 steht 383.466 €, richtig ist 389.466 €."
          ],
          "pruefung": "hoch",
          "pruefungText": "Herstellungskosten-Schemata mit Wertunter- und Wertobergrenze und dem Buchungssatz über „andere aktivierte Eigenleistungen“ sind typische Aufgaben in Klassenarbeiten und in der Abschlussprüfung.",
          "loesungen": [
            {
              "titel": "Test 3: Parkplatz in Eigenleistung",
              "aufgabe": "Zugekauftes Material 2.500 € + USt (auf Ziel), Material aus dem Lager 3.500 €, 60 Stunden zu 18 €, Materialgemeinkosten 20 %, Fertigungsgemeinkosten 60 %. a) Niedrigste handelsrechtliche Herstellungskosten? b) Buchung mit Gewinn- und Bilanzauswirkung.",
              "loesung": "**a)**\n- Materialeinzelkosten: 2.500 € + 3.500 € = 6.000 €\n- + Materialgemeinkosten 20 %: 1.200 €\n- + Fertigungslöhne 60 × 18 €: 1.080 €\n- + Fertigungsgemeinkosten 60 %: 648 €\n- = **Herstellungskosten (Wertuntergrenze) 8.928 €**\n**b)** Außenanlagen 8.928 € und Vorsteuer 475 € an Verbindlichkeiten aLuL 2.975 € und andere aktivierte Eigenleistungen 6.428 €.\nGewinn +6.428 € (der Aufwand für Lagermaterial, Löhne und Gemeinkosten wird ausgeglichen), Bilanzverlängerung 9.403 €."
            },
            {
              "titel": "Beispiel: Spezialmaschine (niedrigster Wert)",
              "aufgabe": "Material 40.000 €, Materialgemeinkosten 25 %, Fertigungslöhne 60.000 €, Fertigungsgemeinkosten 260 %, Konstruktionspläne 10.000 €, Verwaltung 10 %, Vertrieb 6 %.",
              "loesung": "- 40.000 € + 10.000 € + 60.000 € + 156.000 € + 10.000 €\n- = **Wertuntergrenze 276.000 €** (Verwaltung ist Wahlrecht, Vertrieb verboten)\nBuchung: Maschinen 276.000 € an andere aktivierte Eigenleistungen 276.000 €. Gewinn +276.000 €, Bilanzverlängerung (Maschinen und Eigenkapital)."
            },
            {
              "titel": "Beispiel: Werkzeugmaschine – Anlagen im Bau",
              "aufgabe": "Material 40.000 €, Fertigungslöhne 90.000 €, Konstruktion 20.000 €. Zuschläge: Material 20 %, Fertigung 140 %, Verwaltung 10 %, Vertrieb 5 %. Am Stichtag nicht fertig, Wertobergrenze. Später: fertig am 30.03.26, Herstellungskosten insgesamt 400.000 €.",
              "loesung": "- 40.000 € + 8.000 € + 90.000 € + 126.000 € + 20.000 € = 284.000 €\n- + Verwaltung 10 %: 28.400 €\n- = **Wertobergrenze 312.400 €** (Vertrieb nie)\n31.12.25: Anlagen im Bau 312.400 € an andere aktivierte Eigenleistungen 312.400 €. Gewinn +312.400 €.\n30.03.26: Maschinen 400.000 € an Anlagen im Bau 312.400 € und andere aktivierte Eigenleistungen 87.600 €. Gewinn 2026 +87.600 €."
            },
            {
              "titel": "Übung 6: Maschine – Gewinn so niedrig wie möglich",
              "aufgabe": "Material 22.000 €, Materialgemeinkosten 14.000 €, Fertigungslöhne 86.000 €, Fertigungsgemeinkosten 46.000 €, Sondereinzelkosten 4.500 €, Verwaltung 2.000 €.",
              "loesung": "- 22.000 € + 14.000 € + 86.000 € + 46.000 € + 4.500 €\n- = **Wertuntergrenze 172.500 €** (die Verwaltungskosten bleiben weg)\nBuchung: Maschinen 172.500 € an andere aktivierte Eigenleistungen 172.500 €. Gewinn und Bilanzsumme +172.500 €."
            },
            {
              "titel": "Übung 7: Spezialdrehbank mit Ingenieurbüro",
              "aufgabe": "Material 60.000 €, Materialgemeinkosten 6.600 €, Fertigungslöhne 38.500 €, Fertigungsgemeinkosten 64.800 €, Ingenieurbüro 23.800 € inkl. USt (per Bank), Verwaltung 1.240 €, Gewinnzuschlag 15 %, Vertrieb 450 €.",
              "loesung": "- 60.000 € + 6.600 € + 38.500 € + 64.800 € + 20.000 € (Ingenieurbüro netto)\n- = **niedrigster Wert 189.900 €** – in Handels- und Steuerbilanz gleich (Verwaltung Wahlrecht, Gewinn und Vertrieb verboten)\nBuchung: Maschinen 189.900 € und Vorsteuer 3.800 € an andere aktivierte Eigenleistungen 169.900 € und **Bank** 23.800 €.\nGewinn +169.900 €, Bilanzsumme +169.900 €.",
              "hinweis": "Die Mitschrift bucht „Verbindlichkeiten aLuL 23.800 €“ und kommt so auf 193.700 € Bilanzauswirkung. Das Ingenieurbüro wurde aber per Bank bezahlt."
            },
            {
              "titel": "Übung 8: Lackiergerät",
              "aufgabe": "Material 48.000 € + USt (Bank), Fertigungslöhne 84.500 €, Fertigungsgemeinkosten 124.200 €, Verwaltung 2.400 €, Pläne aus dem eigenen Konstruktionsbüro 22.200 €, Materialgemeinkosten 13.700 €. Niedrigste HK?",
              "loesung": "- 48.000 € + 13.700 € + 84.500 € + 124.200 € + 22.200 €\n- = **Wertuntergrenze 292.600 €**\nBuchung: Maschinen 292.600 € und Vorsteuer 9.120 € an andere aktivierte Eigenleistungen 244.600 € und **Bank** 57.120 €.\nGewinn +244.600 €, Bilanzsumme +244.600 €.",
              "hinweis": "Auch hier wurde per Bank bezahlt – in der Mitschrift steht „Verbindlichkeiten“, daher stimmt die Bilanzauswirkung von 301.720 € nicht."
            },
            {
              "titel": "Übung 9: Außenanlagen der Landschaftsgärtnerei",
              "aufgabe": "Material aus dem Lager 68.400 €, Pflanzen 36.000 €, Fertigungslöhne 116.400 €. Zuschläge: Material 10 %, Fertigung 120 %, Verwaltung 5 %. Handelsrechtlich werden die Verwaltungskosten einbezogen. Steuerlicher Wert?",
              "loesung": "- Materialeinzelkosten: 68.400 € + 36.000 € = 104.400 €\n- + Materialgemeinkosten 10 %: 10.440 €\n- + Fertigungslöhne: 116.400 €\n- + Fertigungsgemeinkosten 120 %: 139.680 €\n- = 370.920 €\n- + Verwaltung 5 %: 18.546 €\n- = **389.466 €** – steuerlich genauso wie in der Handelsbilanz (§ 6 Abs. 1 Nr. 1b EStG)\nBuchung: Außenanlagen 389.466 € an andere aktivierte Eigenleistungen 389.466 €. Gewinn und Bilanzsumme +389.466 €.",
              "hinweis": "Mitschrift: 370.920 € + 18.546 € wurde als 383.466 € addiert – richtig sind 389.466 €."
            },
            {
              "titel": "Übung 10: Bürogebäude über zwei Jahre",
              "aufgabe": "2025: Fertigungslöhne 96.800 €, Fertigungsgemeinkosten 140 %, Material 125.000 €, Materialgemeinkosten 15 %, Architekt 30.000 € + USt (Bank). Fertig im September 2026 mit weiteren Fertigungslöhnen 74.000 €, Fertigungsgemeinkosten 43.500 € und Fremdleistungen 198.400 € + USt (Bank).",
              "loesung": "**31.12.25**\n- 125.000 € + 18.750 € + 96.800 € + 135.520 € + 30.000 € = **406.070 €**\n- Anlagen im Bau 406.070 € und Vorsteuer 5.700 € an andere aktivierte Eigenleistungen 376.070 € und Bank 35.700 €\n- Gewinn +376.070 €, Bilanzsumme +376.070 €\n**Fertigstellung 2026**\n- 74.000 € + 43.500 € + 198.400 € = 315.900 € → Herstellungskosten gesamt **721.970 €**\n- Geschäftsbauten 721.970 € und Vorsteuer 37.696 € an Anlagen im Bau 406.070 €, andere aktivierte Eigenleistungen 117.500 € und Bank 236.096 €\n- Gewinn 2026 +117.500 €",
              "hinweis": "Für Profis: Erhält ein Bauunternehmen selbst Bauleistungen, schuldet es oft die Umsatzsteuer nach § 13b UStG. Die Aufgabe rechnet vereinfacht mit Vorsteuer."
            }
          ],
          "quelle": "Mitschrift LF 10"
        },
        "Abschreibung, Teilwert und Zuschreibung": {
          "ueberblick": "Abnutzbare Anlagegüter werden planmäßig abgeschrieben. Sinkt der Wert stärker, prüft man, ob die Wertminderung dauerhaft ist: Liegt der Teilwert unter dem Buchwert, den das Gut nach der halben Restnutzungsdauer hätte? Dann muss man handelsrechtlich außerplanmäßig abschreiben, steuerlich darf man auf den Teilwert gehen. Fällt der Grund später weg, wird zugeschrieben – höchstens bis zu den fortgeführten Anschaffungskosten.",
          "achten": [
            "1. Vorläufiger Buchwert am Stichtag = Anschaffungskosten − bisherige AfA (inklusive AfA des laufenden Jahres).",
            "2. Restnutzungsdauer bestimmen und halbieren.",
            "3. Planmäßiger Restbuchwert nach der halben Restnutzungsdauer berechnen.",
            "4. Vergleich: Teilwert kleiner? → dauerhaft → Handelsbilanz Pflicht, Steuerbilanz Wahlrecht. Teilwert größer? → vorübergehend → keine Abschreibung.",
            "5. Folgejahre: AfA = neuer Buchwert : Restnutzungsdauer. Zuschreibung höchstens bis zum Buchwert ohne außerplanmäßige Abschreibung."
          ],
          "fallen": [
            "Die AfA des laufenden Jahres zuerst buchen, dann die außerplanmäßige Abschreibung vom vorläufigen Buchwert berechnen.",
            "Die Restnutzungsdauer zählt ab dem Stichtag – nicht ab der Anschaffung.",
            "Zuschreibung nicht bis zum Marktwert, wenn dieser über den fortgeführten Anschaffungskosten liegt (Übung 14: Wert 27.000 €, Zuschreibung nur bis 24.000 €).",
            "Vorübergehende Wertminderung beim Sachanlagevermögen: In der Handelsbilanz verboten – anders als im Umlaufvermögen.",
            "Konten: planmäßige AfA und außerplanmäßige Abschreibung getrennt buchen; die Zuschreibung ist ein Ertrag."
          ],
          "pruefung": "hoch",
          "pruefungText": "Teilwertabschreibung mit Prüfung der halben Restnutzungsdauer und spätere Zuschreibung ist eine der häufigsten Rechenaufgaben zum Jahresabschluss.",
          "loesungen": [
            {
              "titel": "Beispiel: Maschine 48.000 € (Teilwert und Zuschreibung)",
              "aufgabe": "AK 48.000 € (Januar 23), Nutzungsdauer 8 Jahre. Im Jahr 24 sinkt der Wert auf 15.000 €. 2026 steigt er wieder auf 19.000 €.",
              "loesung": "**31.12.24**\n- Vorläufiger Buchwert: 48.000 € − 2 × 6.000 € = 36.000 €\n- Restnutzungsdauer 6 Jahre, halb = 3 Jahre → planmäßig 36.000 € − 3 × 6.000 € = 18.000 €\n- 15.000 € < 18.000 € → **dauerhaft**\n- AfA 6.000 € und außerplanmäßige Abschreibung 21.000 € an Maschinen → Buchwert 15.000 €; Gewinn −27.000 €. Handelsbilanz Pflicht, Steuerbilanz Wahlrecht.\n**2025**: AfA 15.000 € : 6 = 2.500 € → Buchwert 12.500 €\n**31.12.26**\n- Buchwert nach AfA: 10.000 €\n- Fortgeführte AK: 48.000 € − 4 × 6.000 € = 24.000 €\n- Zuschreibung auf 19.000 € (unter 24.000 €): **9.000 €** – Maschinen an Erträge aus Zuschreibungen\n- Gewinn 2026: −2.500 € + 9.000 € = +6.500 €"
            },
            {
              "titel": "Übung 11: EDV-Anlage",
              "aufgabe": "AK 21.000 € (Januar 23), Nutzungsdauer 5 Jahre. Im Jahr 25 sinkt der Wert auf a) 2.000 €, b) 7.000 €.",
              "loesung": "- AfA 4.200 € pro Jahr; vorläufiger Buchwert 31.12.25: 21.000 € − 3 × 4.200 € = 8.400 €\n- Restnutzungsdauer 2 Jahre, halb = 1 Jahr → planmäßig 4.200 €\n- **a)** 2.000 € < 4.200 € → dauerhaft. AfA 4.200 € und außerplanmäßige Abschreibung 6.400 € → Buchwert 2.000 €. Gewinn −10.600 € in Handels- und Steuerbilanz.\n- **b)** 7.000 € > 4.200 € → nicht dauerhaft. Nur AfA 4.200 € → Buchwert 4.200 €. Gewinn −4.200 €."
            },
            {
              "titel": "Übung 12: Lkw",
              "aufgabe": "AK 250.000 € (15.01.18), Nutzungsdauer 10 Jahre. Im Jahr 24 sinkt der Wert auf 30.000 €.",
              "loesung": "- AfA 25.000 € pro Jahr; vorläufiger Buchwert 31.12.24: 250.000 € − 7 × 25.000 € = 75.000 €\n- Restnutzungsdauer 3 Jahre, halb = 1,5 Jahre → planmäßig 75.000 € − 37.500 € = 37.500 €\n- 30.000 € < 37.500 € → dauerhaft: AfA 25.000 € und außerplanmäßige Abschreibung 45.000 € → **Buchwert 31.12.24: 30.000 €**, Gewinn −70.000 €\n- 2025: AfA 30.000 € : 3 = 10.000 € → **Buchwert 31.12.25: 20.000 €**, Gewinn −10.000 €"
            },
            {
              "titel": "Übung 13: Maschine 43.000 €",
              "aufgabe": "AK 43.000 € (Januar 22), Nutzungsdauer 10 Jahre. Im Jahr 23 sinkt der Teilwert auf 12.000 €. a) dauerhaft? b) Buchung 31.12.23 c) AfA 2024 d) 2025 steigt der Wert auf 15.000 €.",
              "loesung": "- **a)** Vorläufiger Buchwert 31.12.23: 43.000 € − 2 × 4.300 € = 34.400 €. Restnutzungsdauer 8, halb 4 → planmäßig 17.200 €. 12.000 € < 17.200 € → **dauerhaft**.\n- **b)** AfA 4.300 € und außerplanmäßige Abschreibung 22.400 € → Buchwert 12.000 €. Gewinn −26.700 €.\n- **c)** AfA 2024: 12.000 € : 8 = 1.500 € → Buchwert 10.500 €.\n- **d)** AfA 2025: 1.500 € → 9.000 €. Fortgeführte AK: 43.000 € − 4 × 4.300 € = 25.800 €. Zuschreibung auf 15.000 €: **6.000 €**. Buchwert 31.12.25: 15.000 €. Gewinn 2025: +4.500 €."
            },
            {
              "titel": "Übung 14: Maschine einer GmbH",
              "aufgabe": "AK 64.000 € (Januar 21), Nutzungsdauer 8 Jahre. 2023 sinkt der Wert auf 15.000 €. 2025 fällt der Grund weg, der Wert steigt auf 27.000 €.",
              "loesung": "- 31.12.23: vorläufiger Buchwert 40.000 €; Restnutzungsdauer 5, halb 2,5 → planmäßig 20.000 €; 15.000 € < 20.000 € → dauerhaft. AfA 8.000 € und außerplanmäßige Abschreibung 25.000 € → **Buchwert 15.000 €**, Gewinn −33.000 €.\n- 31.12.24: AfA 15.000 € : 5 = 3.000 € → **Buchwert 12.000 €**, Gewinn −3.000 €.\n- 31.12.25: AfA 3.000 € → 9.000 €. Fortgeführte AK: 64.000 € − 5 × 8.000 € = 24.000 €. Der Wert von 27.000 € liegt darüber → Zuschreibung nur bis 24.000 €: **15.000 €**. **Buchwert 24.000 €**, Gewinn +12.000 €."
            }
          ],
          "quelle": "Mitschrift LF 10"
        },
        "Zeitliche Abgrenzung": {
          "ueberblick": "Wer bilanziert, ordnet Aufwand und Ertrag dem Jahr zu, zu dem sie wirtschaftlich gehören. Fließt das Geld vor dem Stichtag, die Leistung kommt aber danach, bildet man einen Rechnungsabgrenzungsposten (transitorisch: aktiv bei Ausgaben, passiv bei Einnahmen). Fließt das Geld erst nach dem Stichtag, gehört der Vorgang aber ins alte Jahr, bucht man eine sonstige Forderung oder sonstige Verbindlichkeit (antizipativ).",
          "achten": [
            "1. Zeitraum der Leistung bestimmen und den Betrag pro Monat ausrechnen.",
            "2. Welcher Teil gehört ins alte Jahr, welcher ins neue?",
            "3. Geld schon geflossen? Ausgabe → ARAP, Einnahme → PRAP. Geld fließt erst später? Ertrag → sonstige Forderung, Aufwand → sonstige Verbindlichkeit.",
            "4. Buchungssätze für das alte Jahr (Stichtag) und für das neue Jahr (Auflösung oder Zahlung) angeben.",
            "5. Zu jeder Buchung Gewinn- und Bilanzauswirkung nennen."
          ],
          "fallen": [
            "Merksatz: ARAP = „Ausgabe jetzt, Aufwand später“. PRAP = „Einnahme jetzt, Ertrag später“.",
            "Sonstige Forderung/Verbindlichkeit: „Ertrag/Aufwand jetzt, Zahlung später“.",
            "Die Vorsteuer wird nicht abgegrenzt – sie ist mit Rechnung und Zahlung sofort abziehbar.",
            "Steuerlich darf der RAP bei Beträgen bis 800 € wegfallen (§ 5 Abs. 5 Satz 2 EStG) – nur einheitlich für alle Fälle.",
            "Monate sauber zählen: Dezember bis Februar sind 3 Monate, April bis Dezember 9 Monate."
          ],
          "pruefung": "hoch",
          "pruefungText": "Zeitliche Abgrenzung mit Buchungen zum Stichtag und im Folgejahr gehört zu fast jeder Klausur und Abschlussprüfung im Rechnungswesen.",
          "loesungen": [
            {
              "titel": "Beispiele aus dem Skript",
              "aufgabe": "a) Kfz-Versicherung 1.800 € für 2026, bezahlt am 18.12.25. b) Spedition erhält am 30.11.25 Zinsen 5.700 € für ein Vierteljahr im Voraus. c) Miete 1.800 € für 01.11.25–30.04.26, Eingang im Januar 2026. d) Pacht 3.600 € für Oktober 25 bis März 26, Zahlung am 01.04.26.",
              "loesung": "- **a)** 18.12.: Kfz-Versicherung 1.800 € an Bank. 31.12.: **ARAP 1.800 €** an Kfz-Versicherung. Gewinn 2025: 0 €; 2026 Auflösung: Kfz-Versicherung an ARAP, Gewinn −1.800 €.\n- **b)** 1.900 € pro Monat, Dezember gehört zu 2025. 30.11.: Bank an Zinserträge 5.700 €. 31.12.: Zinserträge an **PRAP 3.800 €**. Gewinn 2025 +1.900 €, 2026 +3.800 €.\n- **c)** 300 € pro Monat, November und Dezember = 600 €. 31.12.: **sonstige Vermögensgegenstände 600 €** an Mieterträge. Januar: Bank 1.800 € an sonstige Vermögensgegenstände 600 € und Mieterträge 1.200 €.\n- **d)** 600 € pro Monat, Oktober bis Dezember = 1.800 €. 31.12.: Pachtaufwand an **sonstige Verbindlichkeiten 1.800 €**. 01.04.26: sonstige Verbindlichkeiten 1.800 € und Pachtaufwand 1.800 € an Bank 3.600 €."
            },
            {
              "titel": "Übung 1 und 2: Vorauszahlungen",
              "aufgabe": "1) Zinsen 800 € für Dezember 25 bis März 26, im Dezember im Voraus bezahlt. 2) Versicherung 6.000 € für Dezember bis Mai, bezahlt im November 2025.",
              "loesung": "- **1)** 200 € pro Monat. Dezember: Zinsaufwand 800 € an Bank. 31.12.: **ARAP 600 €** an Zinsaufwand. Gewinn 2025 −200 €, 2026 −600 €.\n- **2)** 1.000 € pro Monat. November: Versicherungen 6.000 € an Bank. 31.12.: **ARAP 5.000 €** an Versicherungen. Gewinn 2025 −1.000 €, 2026 −5.000 €."
            },
            {
              "titel": "Übung 3 und 4: Zinsen aus Darlehen",
              "aufgabe": "3) Darlehen 15.000 € ab 01.08.25 zu 4 %, Zinsen vierteljährlich im Voraus; am 02.11.25 kommt die Zahlung für das zweite Vierteljahr. 4) Darlehen 20.000 € ab 01.08.25 zu 6 %, Zinsen monatlich nachträglich zum Monatsersten.",
              "loesung": "- **3)** 15.000 € × 4 % = 600 € im Jahr = 50 € pro Monat; zweites Vierteljahr = November bis Januar = 150 €. 02.11.: Bank an Zinserträge 150 €. 31.12.: Zinserträge an **PRAP 50 €**. Gewinn 2025 +100 €, 2026 +50 €.\n- **4)** 20.000 € × 6 % : 12 = 100 € pro Monat. Die Dezemberzinsen kommen im Januar: 31.12.: **sonstige Vermögensgegenstände 100 €** an Zinserträge. Januar: Bank an sonstige Vermögensgegenstände 100 €. Gewinn 2025 +100 €, 2026 0 €.",
              "hinweis": "Steuerlich dürfte der PRAP von 50 € wegfallen (§ 5 Abs. 5 Satz 2 EStG), handelsrechtlich nicht."
            },
            {
              "titel": "Übung 5: Zinsen nachträglich",
              "aufgabe": "Darlehen 40.000 €, jährliche Zinsen 1.800 €, nächste Zahlung am 31.03.26.",
              "loesung": "- 1.800 € : 12 = 150 € pro Monat; April bis Dezember 2025 = 9 Monate = 1.350 €\n- 31.12.25: Zinsaufwand an **sonstige Verbindlichkeiten 1.350 €** – Gewinn −1.350 €, Bilanzverlängerung\n- 31.03.26: sonstige Verbindlichkeiten 1.350 € und Zinsaufwand 450 € an Bank 1.800 € – Gewinn 2026 −450 €"
            },
            {
              "titel": "Übung 6: Miete im Voraus bezahlt",
              "aufgabe": "Die Dezember- und Januarmiete von 2.000 € + USt wurde Ende Dezember per Bank bezahlt. Eine ordnungsgemäße Rechnung liegt vor.",
              "loesung": "Annahme: 2.000 € für beide Monate, also 1.000 € pro Monat.\n- Ende Dezember: Mietaufwand 2.000 € und Vorsteuer 380 € an Bank 2.380 €\n- 31.12.: **ARAP 1.000 €** an Mietaufwand – Gewinn 2025 −1.000 €\n- 2026: Mietaufwand an ARAP 1.000 € – Gewinn 2026 −1.000 €\n- Die Vorsteuer bleibt komplett im Dezember (Rechnung und Zahlung liegen vor).",
              "hinweis": "Ist mit 2.000 € die Miete je Monat gemeint, ist der ARAP 2.000 € groß (und die Vorsteuer 760 €). Steuerlich ist der ARAP in beiden Fällen Pflicht, weil der Betrag über 800 € liegt."
            }
          ],
          "quelle": "Mitschrift LF 10"
        }
      }
    },
    {
      "id": "sk",
      "nummer": 90,
      "titel": "Recht und Arbeitsrecht",
      "beschreibung": "Rechtsgrundlagen, Arbeitsvertrag, Arbeitsschutz, Mutterschutz und Kündigung.",
      "farbe": "#b2364f",
      "lernziele": [
        "Ich kann Geschäftsfähigkeit und Formvorschriften erklären.",
        "Ich kenne Arbeitszeit-, Pausen- und Urlaubsregeln.",
        "Ich kann die Schutzfristen im Mutterschutz berechnen.",
        "Ich kenne Kündigungsfristen und den Kündigungsschutz."
      ],
      "themen": [],
      "karten": [],
      "quiz": [],
      "raetsel": [],
      "paragrafen": [
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 3 Abs. 1 AO",
          "text": "Steuern sind Geldzahlungen an den Staat, für die man keine direkte Gegenleistung bekommt. Der Staat finanziert damit seine Aufgaben."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 1 BGB",
          "text": "Jeder Mensch ist rechtsfähig – ab dem Moment, in dem seine Geburt vollendet ist. Rechtsfähig heißt: Man kann Rechte und Pflichten haben."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 13 Abs. 1 GmbHG",
          "text": "Eine GmbH ist eine juristische Person. Sie hat eigene Rechte und Pflichten – wie ein Mensch, nur eben als Firma."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 73 StBerG",
          "text": "Die Steuerberaterkammer ist eine Körperschaft des öffentlichen Rechts, also eine juristische Person des Staates."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 57 Abs. 3 und 4 StBerG",
          "text": "Steuerberater dürfen nebenbei z. B. lehren, Vorträge halten oder prüfen. Ein eigenes Gewerbe (z. B. ein Laden) ist ihnen grundsätzlich nicht erlaubt."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 90, § 91 BGB",
          "text": "Sachen sind nur Dinge, die man anfassen kann. Vertretbare Sachen sind austauschbar und werden nach Zahl, Maß oder Gewicht gehandelt (z. B. Geld, Mehl, Schrauben)."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 929 BGB",
          "text": "Eigentum an beweglichen Sachen geht über durch Einigung und Übergabe. Hat der Käufer die Sache schon (z. B. vorher geliehen), reicht die Einigung."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 930 BGB",
          "text": "Der Verkäufer darf die Sache auch behalten und z. B. vom neuen Eigentümer mieten. Dann ersetzt diese Abmachung die Übergabe."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 931 BGB",
          "text": "Liegt die Sache gerade bei jemand Drittem, tritt der Verkäufer seinen Anspruch auf Herausgabe an den Käufer ab. Auch das ersetzt die Übergabe."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§ 873, § 925 BGB",
          "text": "Bei Grundstücken geht Eigentum so über: Einigung vor dem Notar (Auflassung) und Eintragung im Grundbuch."
        },
        {
          "gruppe": "Recht, Personen, Sachen und Eigentum",
          "ref": "§§ 187, 188 BGB",
          "text": "Fristen berechnen: Der Tag, an dem etwas passiert, zählt nicht mit. Eine Wochenfrist endet am gleichen Wochentag, eine Monatsfrist am Tag mit der gleichen Zahl."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 104, § 105 BGB",
          "text": "Kinder unter 7 Jahren sind geschäftsunfähig. Was sie erklären, ist rechtlich ungültig (nichtig)."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 106 bis § 108 BGB",
          "text": "Von 7 bis 17 Jahren ist man beschränkt geschäftsfähig. Für Verträge braucht man die Zustimmung der Eltern – außer man hat nur Vorteile (z. B. ein Geschenk). Ohne Zustimmung hängt der Vertrag in der Luft („schwebend unwirksam“), bis die Eltern Ja oder Nein sagen."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 110 BGB",
          "text": "Taschengeldparagraph: Bezahlt ein Minderjähriger etwas sofort mit seinem Taschengeld, ist der Kauf von Anfang an gültig."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 112 BGB",
          "text": "Darf ein Minderjähriger mit Erlaubnis der Eltern und des Familiengerichts ein eigenes Geschäft führen, ist er für alles, was dazugehört, voll geschäftsfähig."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 125 BGB",
          "text": "Schreibt das Gesetz eine bestimmte Form vor (z. B. schriftlich) und wird sie nicht eingehalten, ist das Geschäft nichtig."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 311b Abs. 1 BGB",
          "text": "Ein Grundstückskauf muss vom Notar beurkundet werden. Ohne Notar ist der Vertrag ungültig – er wird aber gültig, sobald der Käufer im Grundbuch steht."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 766 BGB",
          "text": "Eine Bürgschaft muss schriftlich erklärt werden (Ausnahme: Kaufleute)."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 550 BGB",
          "text": "Ein Mietvertrag für länger als ein Jahr soll schriftlich sein. Fehlt die Schriftform, ist er trotzdem gültig – er läuft dann auf unbestimmte Zeit."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 117 BGB",
          "text": "Ein Scheingeschäft, das beide nur zum Schein abschließen, ist nichtig."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 119, § 121 BGB",
          "text": "Wer sich bei seiner Erklärung geirrt hat (z. B. vertippt oder versprochen), kann anfechten. Das muss sofort passieren, nachdem man den Irrtum bemerkt hat."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 123, § 124 BGB",
          "text": "Wer getäuscht oder bedroht wurde, kann anfechten. Dafür hat man ein Jahr Zeit."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 142 BGB",
          "text": "Nach einer wirksamen Anfechtung gilt das Geschäft als von Anfang an ungültig."
        },
        {
          "gruppe": "Rechtsgeschäfte: Wer darf was, Form und Fehler",
          "ref": "§ 10, § 11 BBiG",
          "text": "Der Ausbildungsvertrag wird zwischen Betrieb und Azubi geschlossen. Die wichtigsten Inhalte müssen vor Beginn der Ausbildung festgehalten werden (schriftlich oder elektronisch)."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 611a BGB",
          "text": "Arbeitsvertrag: Der Arbeitnehmer arbeitet nach Anweisung des Arbeitgebers. Dafür zahlt der Arbeitgeber den vereinbarten Lohn."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "Art. 12 GG",
          "text": "Berufsfreiheit: Jeder darf Beruf, Arbeitsplatz und Ausbildungsstätte frei wählen."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 4 Abs. 3 TVG",
          "text": "Günstigkeitsprinzip: Vom Tarifvertrag darf man nur abweichen, wenn es für den Arbeitnehmer besser ist."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 77 BetrVG",
          "text": "Betriebsvereinbarungen zwischen Arbeitgeber und Betriebsrat müssen schriftlich sein und gelten dann verbindlich für alle im Betrieb."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 1, § 7 AGG",
          "text": "Niemand darf im Beruf benachteiligt werden wegen Herkunft, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 8, § 9 AGG",
          "text": "Eine unterschiedliche Behandlung ist ausnahmsweise erlaubt, wenn ein Merkmal für den Job wirklich nötig ist, sowie bei kirchlichen Arbeitgebern."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 15 AGG",
          "text": "Wer diskriminiert wird, kann Schadensersatz und Entschädigung verlangen. Einen Anspruch auf die Stelle gibt es aber nicht."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 670 BGB",
          "text": "Lädt ein Betrieb zum Vorstellungsgespräch ein, muss er die nötigen Kosten (z. B. Fahrtkosten) erstatten – außer er hat das vorher ausdrücklich ausgeschlossen."
        },
        {
          "gruppe": "Bewerbung und Regeln im Arbeitsrecht",
          "ref": "§ 123 BGB (Bewerbung)",
          "text": "Lügt ein Bewerber bei einer erlaubten Frage, kann der Arbeitgeber den Vertrag anfechten. Bei unerlaubten Fragen (z. B. nach einer Schwangerschaft) darf man lügen, ohne dass etwas passiert."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 2 NachwG",
          "text": "Ein Arbeitsvertrag ist auch mündlich gültig. Der Arbeitgeber muss die wichtigsten Punkte aber schriftlich aushändigen: z. B. Beginn, Tätigkeit, Lohn, Arbeitszeit, Urlaub, Kündigungsfristen."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 4 NachwG",
          "text": "Händigt der Arbeitgeber die Vertragsbedingungen nicht schriftlich aus, droht ein Bußgeld bis 2.000 €. Der Arbeitsvertrag bleibt trotzdem gültig."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 14 TzBfG",
          "text": "Ein befristeter Vertrag braucht einen sachlichen Grund – oder er ist ohne Grund höchstens 2 Jahre lang erlaubt (mit höchstens drei Verlängerungen). Die Befristung muss schriftlich sein."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 16 TzBfG",
          "text": "Ist die Befristung ungültig, gilt der Vertrag als unbefristet."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 614 BGB",
          "text": "Der Lohn wird nach der Arbeit gezahlt – bei Monatslohn also am Monatsende."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 106 GewO",
          "text": "Weisungsrecht: Der Arbeitgeber darf festlegen, was, wo und wann gearbeitet wird. Er muss dabei fair bleiben."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 60 HGB",
          "text": "Wettbewerbsverbot: Solange man angestellt ist, darf man dem eigenen Arbeitgeber keine Konkurrenz machen."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "§ 299 StGB",
          "text": "Schmiergeld annehmen ist strafbar. In der Steuerkanzlei gilt zusätzlich eine strenge Schweigepflicht (§ 57, § 62 StBerG, § 203 StGB)."
        },
        {
          "gruppe": "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten",
          "ref": "Art. 5, 6 DSGVO",
          "text": "Datenschutz: Daten von Mitarbeitern (z. B. die private Handynummer) dürfen nur mit Erlaubnis oder gesetzlicher Grundlage weitergegeben werden."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 3 ArbZG",
          "text": "Die Arbeitszeit beträgt höchstens 8 Stunden pro Werktag. 10 Stunden sind erlaubt, wenn es im Durchschnitt bei 8 bleibt. Pro Woche sind das höchstens 48 Stunden (6 Werktage × 8)."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 4 ArbZG",
          "text": "Pausen: bei mehr als 6 Stunden Arbeit mindestens 30 Minuten, bei mehr als 9 Stunden 45 Minuten. Man darf sie in Stücke von mindestens 15 Minuten teilen. Länger als 6 Stunden ohne Pause ist verboten."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 5 ArbZG",
          "text": "Nach Feierabend müssen mindestens 11 Stunden Ruhe liegen, bevor man wieder arbeitet."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 3 BUrlG",
          "text": "Mindesturlaub: 24 Werktage im Jahr. Werktage sind Montag bis Samstag. Bei einer 5-Tage-Woche sind das 20 Urlaubstage."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 4 BUrlG",
          "text": "Den vollen Urlaub bekommt man erst, wenn man 6 Monate im Betrieb ist (Wartezeit)."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 5 BUrlG",
          "text": "In den ersten 6 Monaten gibt es Teilurlaub: für jeden vollen Monat 1/12 des Jahresurlaubs. Halbe Tage und mehr werden aufgerundet."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 9 BUrlG",
          "text": "Wird man im Urlaub krank und hat ein Attest, zählen diese Tage nicht als Urlaub."
        },
        {
          "gruppe": "Arbeitszeit, Pausen und Urlaub",
          "ref": "§ 13 BUrlG",
          "text": "Vom Urlaubsgesetz darf nur zugunsten des Arbeitnehmers abgewichen werden."
        },
        {
          "gruppe": "Krankheit",
          "ref": "§ 3 EntgFG",
          "text": "Wer krank ist, bekommt bis zu 6 Wochen weiter seinen Lohn vom Arbeitgeber. Das gilt erst, wenn man 4 Wochen im Betrieb ist."
        },
        {
          "gruppe": "Krankheit",
          "ref": "§ 5 EntgFG",
          "text": "Man muss sich sofort krankmelden. Dauert die Krankheit länger als 3 Kalendertage, braucht man spätestens am nächsten Arbeitstag eine Krankschreibung vom Arzt."
        },
        {
          "gruppe": "Krankheit",
          "ref": "§ 44 SGB V",
          "text": "Nach 6 Wochen Krankheit endet die Lohnfortzahlung. Dann zahlt die Krankenkasse Krankengeld."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 1 MuSchG",
          "text": "Das Gesetz schützt alle Frauen, die beschäftigt sind – auch Azubis und Praktikantinnen. Für Selbständige gilt es nicht."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 3 Abs. 1 MuSchG",
          "text": "In den 6 Wochen vor der Geburt muss die Frau nicht arbeiten. Sie darf nur, wenn sie es ausdrücklich will – und kann das jederzeit zurücknehmen."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 3 Abs. 2 MuSchG",
          "text": "In den 8 Wochen nach der Geburt darf sie auf keinen Fall arbeiten. Bei Frühgeburten und Mehrlingen sind es 12 Wochen."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 4 bis § 6 MuSchG",
          "text": "Schwangere dürfen höchstens 8,5 Stunden am Tag arbeiten. Nachtarbeit (20 bis 6 Uhr) sowie Sonn- und Feiertagsarbeit sind grundsätzlich verboten."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 11, § 12 MuSchG",
          "text": "Verboten sind gefährliche Arbeiten, z. B. schwere körperliche Arbeit, Gefahrstoffe, Akkord- und Fließbandarbeit."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 13 MuSchG",
          "text": "Ist der Arbeitsplatz gefährlich, gilt diese Reihenfolge: 1. Arbeitsplatz umgestalten, 2. anderen Arbeitsplatz geben, 3. erst zuletzt ein Beschäftigungsverbot."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 15 MuSchG",
          "text": "Die Frau soll dem Arbeitgeber sagen, dass sie schwanger ist, sobald sie es weiß. Es ist aber keine Pflicht."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 17 MuSchG",
          "text": "Kündigungsverbot: Während der Schwangerschaft und bis 4 Monate nach der Geburt darf der Arbeitgeber nicht kündigen."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 18 MuSchG",
          "text": "Bei einem Beschäftigungsverbot außerhalb der Schutzfristen zahlt der Arbeitgeber den Durchschnittslohn der letzten 3 Monate weiter (Mutterschutzlohn)."
        },
        {
          "gruppe": "Mutterschutz",
          "ref": "§ 19, § 20 MuSchG",
          "text": "Während der Schutzfristen zahlt die Krankenkasse Mutterschaftsgeld (höchstens 13 € pro Tag). Der Arbeitgeber legt den Rest bis zum Nettolohn drauf."
        },
        {
          "gruppe": "Schwerbehinderte Menschen",
          "ref": "§ 2 Abs. 2 SGB IX",
          "text": "Schwerbehindert ist, wer einen Grad der Behinderung von mindestens 50 hat."
        },
        {
          "gruppe": "Schwerbehinderte Menschen",
          "ref": "§ 154 SGB IX",
          "text": "Betriebe mit mindestens 20 Arbeitsplätzen müssen 5 % davon mit schwerbehinderten Menschen besetzen. Sonst zahlen sie eine Ausgleichsabgabe."
        },
        {
          "gruppe": "Schwerbehinderte Menschen",
          "ref": "§ 168 SGB IX",
          "text": "Schwerbehinderten Menschen darf nur gekündigt werden, wenn das Integrationsamt vorher zugestimmt hat. Das gilt, sobald sie länger als 6 Monate im Betrieb sind."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 623 BGB",
          "text": "Kündigung und Aufhebungsvertrag müssen schriftlich auf Papier mit Unterschrift sein. E-Mail, WhatsApp oder mündlich ist ungültig."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 130 BGB",
          "text": "Eine Kündigung wirkt erst, wenn sie beim Empfänger ankommt (z. B. im Briefkasten liegt)."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 622 Abs. 1 BGB",
          "text": "Normale Kündigungsfrist: 4 Wochen zum 15. oder zum Monatsende. Das gilt für beide Seiten."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 622 Abs. 2 BGB",
          "text": "Je länger man im Betrieb ist, desto länger wird die Frist für den Arbeitgeber: nach 2 Jahren 1 Monat, nach 5 Jahren 2 Monate, nach 8 Jahren 3 Monate – bis zu 7 Monate nach 20 Jahren. Immer zum Monatsende."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 622 Abs. 3 BGB",
          "text": "In der Probezeit (höchstens 6 Monate) beträgt die Kündigungsfrist nur 2 Wochen."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 626 BGB",
          "text": "Fristlose Kündigung: nur aus einem wichtigen Grund, wenn Weiterarbeiten unzumutbar ist (z. B. Diebstahl). Sie muss innerhalb von 2 Wochen ausgesprochen werden, nachdem der Grund bekannt wurde."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 102 BetrVG",
          "text": "Gibt es einen Betriebsrat, muss er vor jeder Kündigung angehört werden. Sonst ist die Kündigung ungültig."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 1, § 23 KSchG",
          "text": "Der Kündigungsschutz gilt, wenn man länger als 6 Monate im Betrieb ist und der Betrieb mehr als 10 Arbeitnehmer hat."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 1 Abs. 2 KSchG",
          "text": "Greift der Kündigungsschutz, braucht der Arbeitgeber für die Kündigung einen Grund: in der Person (z. B. lange Krankheit), im Verhalten (z. B. ständiges Zuspätkommen) oder im Betrieb (z. B. Auftragsmangel)."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 1 Abs. 3 KSchG",
          "text": "Bei betriebsbedingten Kündigungen muss der Arbeitgeber sozial auswählen: nach Betriebszugehörigkeit, Alter, Unterhaltspflichten und Schwerbehinderung."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 4 KSchG",
          "text": "Wer gegen die Kündigung klagen will, hat dafür nur 3 Wochen Zeit ab Erhalt der Kündigung."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 22 BBiG",
          "text": "Azubis: In der Probezeit können beide Seiten jederzeit kündigen. Danach kann der Betrieb nur fristlos aus wichtigem Grund kündigen. Der Azubi kann mit 4 Wochen Frist gehen, wenn er die Ausbildung aufgibt oder den Beruf wechselt."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 15 KSchG",
          "text": "Mitglieder des Betriebsrats und der Jugend- und Auszubildendenvertretung sind während ihrer Amtszeit und ein Jahr danach vor normalen Kündigungen geschützt."
        },
        {
          "gruppe": "Kündigung und Kündigungsschutz",
          "ref": "§ 159 SGB III",
          "text": "Wer selbst kündigt oder einen Aufhebungsvertrag unterschreibt, ohne wichtigen Grund, bekommt meist 12 Wochen lang kein Arbeitslosengeld (Sperrzeit)."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 109 GewO, § 630 BGB",
          "text": "Am Ende hat jeder Anspruch auf ein schriftliches Zeugnis. Das einfache Zeugnis nennt Art und Dauer der Tätigkeit. Auf Wunsch gibt es ein qualifiziertes Zeugnis mit Leistung und Verhalten."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 109 Abs. 2 GewO",
          "text": "Das Zeugnis muss klar und verständlich sein. Versteckte Botschaften oder Geheimcodes sind verboten."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 16 BBiG",
          "text": "Auch Azubis bekommen am Ende der Ausbildung ein Zeugnis vom Betrieb."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 2 ArbGG",
          "text": "Für Streit zwischen Arbeitnehmer und Arbeitgeber ist das Arbeitsgericht zuständig."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 11 ArbGG",
          "text": "Vor dem Arbeitsgericht (erste Instanz) darf man sich selbst vertreten. Ein Anwalt ist nicht nötig."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 12a ArbGG",
          "text": "In der ersten Instanz zahlt jeder seinen eigenen Anwalt – auch wer gewinnt."
        },
        {
          "gruppe": "Zeugnis und Arbeitsgericht",
          "ref": "§ 54 ArbGG",
          "text": "Das Verfahren beginnt mit einem Gütetermin. Dort soll möglichst eine Einigung (Vergleich) gefunden werden."
        }
      ],
      "kurz": "Sozialkunde",
      "registerId": "zjxpf2nl7b6a5z8nue61",
      "registerStand": 1794514339782,
      "themenInfo": {
        "Recht, Personen, Sachen und Eigentum": {
          "ueberblick": "Die Rechtsordnung unterscheidet öffentliches Recht (Über- und Unterordnung, z. B. Bürger – Finanzamt) und Privatrecht (Gleichordnung, z. B. Kaufvertrag). Rechtssubjekte sind natürliche Personen und juristische Personen des öffentlichen Rechts (z. B. Steuerberaterkammer) oder des Privatrechts (z. B. GmbH). Sachen sind körperliche Gegenstände; vertretbare Sachen sind nach Maß, Zahl oder Gewicht bestimmbar, nicht vertretbare sind Einzelstücke. Eigentum an beweglichen Sachen wird durch Einigung und Übergabe übertragen; die Übergabe kann entfallen oder durch Abtretung des Herausgabeanspruchs ersetzt werden.",
          "achten": [
            "Rechtssubjekt einordnen: Mensch ⇒ natürliche Person; Kammer, Gemeinde, Finanzamt-Träger ⇒ jur. Person des öffentlichen Rechts; GmbH, AG, eingetragener Verein ⇒ jur. Person des Privatrechts.",
            "Vereinbarkeit mit dem StB-Beruf: Ist es gewerblich (§ 57 Abs. 4 Nr. 1) oder Arbeitnehmertätigkeit (Nr. 2)? Dann unvereinbar; sonst Katalog § 57 Abs. 3 prüfen.",
            "Antwort immer mit Paragraph (z. B. „Einigung nach § 929 S. 2 BGB, Übergabe entfällt“)."
          ],
          "fallen": [
            "Die Vorstandsvorsitzende einer AG ist selbst eine natürliche Person – die AG ist die juristische Person.",
            "Die Gewerbesteuer verwalten Finanzamt (Messbetrag) und Gemeinde (Festsetzung/Erhebung); in Ankreuzaufgaben meist „Landesbehörde“ für den Messbetrag.",
            "Ein Rechtsanwalt mit eigener Kanzlei ist natürliche Person – kein Unternehmen mit eigener Rechtspersönlichkeit."
          ],
          "pruefung": "mittel",
          "pruefungText": "Kurzfragen aus dem BGB-Allgemeinteil und Sachenrecht gehören zum Prüfungsbereich Wirtschafts- und Sozialkunde (10 %, 60 Minuten); in Westfalen-Lippe Sommer 2026 waren Schuld- und Sachenrecht 16 von 100 Punkten. Berufsrecht (Vereinbarkeit, Kammer) kommt eher in der Zwischenprüfung (LF 1).",
          "quelle": "Lernregister"
        },
        "Rechtsgeschäfte: Wer darf was, Form und Fehler": {
          "ueberblick": "Ein Rechtsgeschäft ist wirksam, wenn die Beteiligten geschäftsfähig sind, die vorgeschriebene Form eingehalten ist und kein Nichtigkeitsgrund vorliegt. Kinder unter 7 Jahren sind geschäftsunfähig, ihre Willenserklärungen sind nichtig; Minderjährige von 7 bis 17 sind beschränkt geschäftsfähig und brauchen die Zustimmung der Eltern, außer beim Taschengeldgeschäft. Formverstöße (z. B. mündlicher Grundstückskauf, mündliche Kündigung) und Scheingeschäfte führen zur Nichtigkeit. Irrtümer und Täuschung machen ein Geschäft dagegen nur anfechtbar – es ist bis zur Anfechtung wirksam.",
          "achten": [
            "Wirksamkeit prüfen in Reihenfolge: 1. Geschäftsfähigkeit (§§ 104–113) 2. Form (§ 125 + Spezialnorm) 3. Gesetz/Sitten (§§ 134, 138) 4. Scheingeschäft (§ 117) 5. Anfechtbarkeit (§§ 119, 123).",
            "Ergebnis klar benennen: „nichtig“ (von Anfang an unwirksam), „schwebend unwirksam“ (Genehmigung möglich), „anfechtbar“ (wirksam bis zur Anfechtung).",
            "Vertragsart + Form + Paragraph als Dreiklang angeben: z. B. „Bürgschaftsvertrag – Schriftform – § 766 S. 1 BGB“."
          ],
          "fallen": [
            "Fehler in der Lösung korrigiert: Martha (6 Jahre) kauft einen Lolli vom Taschengeld – das Geschäft ist nichtig (§ 104 Nr. 1, § 105 Abs. 1 BGB), nicht wirksam. Der Taschengeldparagraph § 110 gilt erst ab 7 Jahren.",
            "Berufsausbildungsvertrag: Rechtsgrundlage ist § 10 und § 11 BBiG, nicht § 611 BGB (Dienstvertrag). Der Vertrag selbst ist formfrei, nur der Inhalt ist schriftlich niederzulegen – ein Verstoß macht ihn nicht nichtig.",
            "Mietvertrag über 2 Jahre ohne Schriftform ist nicht nichtig, sondern gilt als unbefristet (§ 550 BGB).",
            "Mündliche Kündigung ist nichtig (§ 623, § 125 BGB) – auch wenn der Chef sie „annimmt“."
          ],
          "pruefung": "hoch",
          "pruefungText": "Geschäftsfähigkeit, Formvorschriften und Wirksamkeit (wirksam/anfechtbar/nichtig) sind Dauerbrenner in WiSo und der Zwischenprüfung (z. B. Westfalen-Lippe 2026: 16-Jährige kauft Nähmaschine für 900 €, Minderjährige betreibt Schneiderei – §§ 107, 110, 112 BGB).",
          "quelle": "Lernregister"
        },
        "Bewerbung und Regeln im Arbeitsrecht": {
          "ueberblick": "Arbeitsrecht ergibt sich aus Grundgesetz, Gesetzen (BGB, BBiG, JArbSchG …), Tarifverträgen, Betriebsvereinbarungen und Einzelarbeitsverträgen. Grundsätzlich geht das ranghöhere Recht vor (Rangprinzip); eine rangniedrigere Regelung gilt aber, wenn sie für den Arbeitnehmer günstiger ist (Günstigkeitsprinzip). Arbeitnehmer ist, wer aufgrund eines privatrechtlichen Vertrags weisungsgebunden und fremdbestimmt gegen Entgelt arbeitet – nicht Beamte, Richter, Soldaten, Vorstände und GmbH-Geschäftsführer. Im Bewerbungsverfahren gelten Offenbarungspflichten, das eingeschränkte Fragerecht des Arbeitgebers (AGG) und die Erstattung der Vorstellungskosten.",
          "achten": [
            "Rangfolge auswendig: Grundgesetz > Gesetze/Verordnungen > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag; Ausnahme Günstigkeitsprinzip.",
            "Rechtsfolge einer Lüge: zulässige Frage ⇒ Anfechtung § 123 BGB; unzulässige Frage ⇒ keine Folgen."
          ],
          "fallen": [
            "Fehler in der Mitschrift korrigiert: Die Frage nach einer Schwangerschaft ist grundsätzlich unzulässig – auch bei einem befristeten Arbeitsvertrag (§ 3 Abs. 1 S. 2, § 7 AGG; EuGH). Die Bewerberin darf lügen.",
            "Frage nach Schwerbehinderung vor der Einstellung ist grundsätzlich unzulässig (§ 7 AGG); zulässig sind Fragen nach konkreten gesundheitlichen Anforderungen der Stelle (z. B. Flugtauglichkeit beim Piloten).",
            "HIV-Infektion: Frage grundsätzlich unzulässig (außer bei Ansteckungsgefahr im Beruf); akute AIDS-Erkrankung, die die Arbeitsfähigkeit betrifft, darf erfragt werden.",
            "Vorstands-AG und GmbH-Geschäftsführer sind keine Arbeitnehmer (Organe), auch wenn sie Gehalt beziehen."
          ],
          "pruefung": "mittel",
          "pruefungText": "Rangfolge/Günstigkeitsprinzip, Arbeitnehmerbegriff und zulässige/unzulässige Fragen sind klassische Kurzfragen in WiSo und Zwischenprüfung (LF 1).",
          "quelle": "Lernregister"
        },
        "Arbeitsvertrag: Form, Befristung, Rechte und Pflichten": {
          "ueberblick": "Ein unbefristeter Arbeitsvertrag ist formfrei, auch mündlich wirksam; der Arbeitgeber muss aber die wesentlichen Vertragsbedingungen nach dem Nachweisgesetz schriftlich aushändigen. Ein Verstoß macht den Vertrag nicht unwirksam, ist aber eine Ordnungswidrigkeit. Die Befristung eines Arbeitsvertrags braucht dagegen die Schriftform – fehlt sie, gilt der Vertrag als unbefristet. Aus dem Arbeitsvertrag folgen Hauptpflichten (Arbeit gegen Vergütung) und Nebenpflichten (Treue- und Fürsorgepflicht).",
          "achten": [
            "Formfrage beantworten: unbefristet ⇒ formfrei (NachwG beachten); befristet ⇒ Schriftform § 14 Abs. 4 TzBfG, sonst unbefristet § 16 TzBfG; Kündigung ⇒ Schriftform § 623 BGB.",
            "Pflichtverletzungsfälle: Wer verletzt (AG oder AN)? Welche Pflicht (Haupt-/Nebenpflicht)? Paragraph nennen."
          ],
          "fallen": [
            "Nachweisgesetz: Es droht eine Geldbuße (Ordnungswidrigkeit), keine „Geldstrafe“ – und der Vertrag bleibt wirksam.",
            "Gehalt am Ende des Folgemonats verstößt gegen die Fälligkeit (§ 614 BGB) – Vergütungspflicht verletzt."
          ],
          "pruefung": "mittel",
          "pruefungText": "Formfragen (unbefristet/befristet, NachwG) und Zuordnung von Pflichtverletzungen zu Rechten/Pflichten kommen in WiSo und der Zwischenprüfung vor.",
          "quelle": "Lernregister"
        },
        "Arbeitszeit, Pausen und Urlaub": {
          "ueberblick": "Die Fallsituationen verbinden Bundesurlaubsgesetz, Arbeitszeitgesetz und Entgeltfortzahlungsgesetz. Der gesetzliche Mindesturlaub von 24 Werktagen entspricht bei einer 5-Tage-Woche 20 Arbeitstagen; vertraglich darf mehr vereinbart werden. Vor Ablauf der 6-monatigen Wartezeit gibt es nur Teilurlaub. Bei Krankheit wird das Entgelt bis zu 6 Wochen fortgezahlt; bei derselben Krankheit (Fortsetzungserkrankung) entsteht ein neuer Anspruch nur unter den Fristen des § 3 Abs. 1 S. 2 EntgFG.",
          "achten": [
            "Urlaub: 1. Wartezeit erfüllt? 2. Wenn nicht: Teilurlaub = Jahresurlaub ÷ 12 × volle Monate, aufrunden ab 0,5. 3. Bei Teilzeit: Urlaubstage × Arbeitstage/Woche ÷ 6 (Werktage) bzw. ÷ 5 (Arbeitstage).",
            "Pausen: Arbeitszeit = Anwesenheit − Pausen; danach Pausenstufe nach § 4 ArbZG.",
            "Fortsetzungserkrankung: Monate seit Ende der letzten AU (6-Monats-Grenze) und seit Beginn der ersten AU (12-Monats-Grenze) zählen.",
            "Urlaubsrechnung: gesetzlich 24 Werktage ÷ 6 × Arbeitstage/Woche (5-Tage-Woche ⇒ 20 Arbeitstage).",
            "Teilurlaub: Jahresurlaub ÷ 12 × volle Monate; ab 0,5 Tagen aufrunden (§ 5 Abs. 2 BUrlG)."
          ],
          "fallen": [
            "Zitat korrigiert: Teilurlaub steht in § 5 Abs. 1 Buchst. a BUrlG (in der Datei „§ 5 Abs. 1a“).",
            "Teilurlaub aus vertraglichem Urlaub (23 Tage) ergibt 6 Tage, aus dem gesetzlichen (20 Tage) nur 5 Tage – Aufgabenstellung genau lesen.",
            "Verzicht auf Pausen und früher Gehen ist unzulässig.",
            "Werktage ≠ Arbeitstage: Samstag ist Werktag (§ 3 Abs. 2 BUrlG).",
            "Wartezeit Entgeltfortzahlung 4 Wochen (§ 3 Abs. 3 EntgFG) ≠ Wartezeit Urlaub 6 Monate (§ 4 BUrlG)."
          ],
          "pruefung": "hoch",
          "pruefungText": "Urlaubsberechnung (voller Anspruch, Teilurlaub, Umrechnung auf Arbeitstage) und Entgeltfortzahlung waren in Westfalen-Lippe Sommer 2026 mit 13 bzw. weiteren Punkten der größte Teil des Arbeitsrechts.",
          "quelle": "Lernregister"
        },
        "Krankheit": {
          "ueberblick": "Wer krank ist, meldet sich sofort beim Arbeitgeber. Dauert die Krankheit länger als drei Kalendertage, braucht man spätestens am nächsten Arbeitstag eine ärztliche Bescheinigung. Der Arbeitgeber zahlt bis zu sechs Wochen den Lohn weiter, wenn das Arbeitsverhältnis schon vier Wochen besteht. Danach zahlt die Krankenkasse Krankengeld.",
          "achten": [
            "Die drei Tage sind Kalendertage, nicht Arbeitstage – auch das Wochenende zählt mit.",
            "Lohnfortzahlung gibt es erst nach vier Wochen im Betrieb (Wartezeit).",
            "Wird man im Urlaub krank und hat ein Attest, zählen diese Tage nicht als Urlaub.",
            "Bei derselben Krankheit beginnen die sechs Wochen nur neu, wenn man vorher mindestens sechs Monate deswegen nicht krank war oder seit Beginn der ersten Erkrankung zwölf Monate vergangen sind."
          ],
          "fallen": [
            "Krankmelden und Krankschreibung sind zwei verschiedene Pflichten: Melden sofort, Bescheinigung erst ab dem vierten Kalendertag.",
            "Nach sechs Wochen zahlt nicht mehr der Arbeitgeber, sondern die Krankenkasse – und zwar weniger als den vollen Lohn."
          ],
          "pruefung": "hoch",
          "pruefungText": "Urlaubsberechnung (voller Anspruch, Teilurlaub, Umrechnung auf Arbeitstage) und Entgeltfortzahlung waren in Westfalen-Lippe Sommer 2026 mit 13 bzw. weiteren Punkten der größte Teil des Arbeitsrechts.",
          "quelle": "neu geschrieben"
        },
        "Mutterschutz": {
          "ueberblick": "Das Mutterschutzgesetz schützt Gesundheit und Einkommen schwangerer und stillender Frauen in Beschäftigung (auch Azubis und Praktikantinnen, nicht Selbständige). Die Schutzfrist beginnt 6 Wochen vor dem voraussichtlichen Entbindungstermin und endet 8 Wochen (bei Früh-, Mehrlingsgeburt oder Behinderung des Kindes 12 Wochen) nach der tatsächlichen Geburt; bei vorzeitiger Geburt verlängert sich die Frist danach um die nicht genommenen Tage. Während der Schwangerschaft und bis 4 Monate nach der Entbindung darf der Arbeitgeber nicht kündigen. Finanziell sichern Mutterschaftsgeld der Krankenkasse, Arbeitgeberzuschuss und – bei Beschäftigungsverboten außerhalb der Schutzfristen – Mutterschutzlohn.",
          "achten": [
            "Beginn: voraussichtlicher Entbindungstermin − 42 Tage.",
            "Ende: tatsächliche Geburt + 56 Tage (bzw. 84 Tage) + bei vorzeitiger Geburt die nicht genommenen Tage vor der Geburt.",
            "Kündigung: Schwangerschaft bekannt oder binnen 2 Wochen nach Zugang mitgeteilt? ⇒ Verbot bis 4 Monate nach Entbindung; Ausnahme nur mit Zulassung der Behörde.",
            "Leistungen zuordnen: Schutzfrist ⇒ Mutterschaftsgeld (KK) + AG-Zuschuss; Beschäftigungsverbot außerhalb ⇒ Mutterschutzlohn (AG)."
          ],
          "fallen": [
            "Die Schutzfrist nach der Geburt beträgt dann 12 Wochen – sie wird nicht „um“ 12 Wochen verlängert.",
            "„Mutterschaftslohn“ gibt es nicht: Mutterschutzlohn (AG, außerhalb der Schutzfristen) ≠ Mutterschaftsgeld (Krankenkasse, in den Schutzfristen).",
            "Die Mitteilung der Schwangerschaft ist eine Soll-Vorschrift, keine Pflicht.",
            "Kündigungsverbot ≠ Beschäftigungsverbot ≠ Verlängerung des Vertrags: Befristung, Aufhebungsvertrag und Eigenkündigung bleiben möglich.",
            "Geburt nach dem errechneten Termin verkürzt die Zeit nach der Geburt nicht – sie bleibt 8 Wochen."
          ],
          "pruefung": "mittel",
          "pruefungText": "Mutterschutz und besonderer Kündigungsschutz sind typische WiSo- und Zwischenprüfungsfragen (Schutzfristen berechnen, Kündigungsverbot, Leistungen unterscheiden).",
          "quelle": "Lernregister"
        },
        "Schwerbehinderte Menschen": {
          "ueberblick": "Schwerbehindert ist, wer einen Grad der Behinderung von mindestens 50 hat. Betriebe mit mindestens 20 Arbeitsplätzen müssen 5 % davon mit schwerbehinderten Menschen besetzen, sonst zahlen sie eine Ausgleichsabgabe. Schwerbehinderte Menschen haben einen besonderen Kündigungsschutz: Nach sechs Monaten im Betrieb darf nur noch mit vorheriger Zustimmung des Integrationsamts gekündigt werden.",
          "achten": [
            "Grenze für „schwerbehindert“: Grad der Behinderung 50.",
            "Pflichtquote 5 %, erst ab 20 Arbeitsplätzen im Jahresdurchschnitt.",
            "Ausbildungsplätze zählen bei der Berechnung nicht mit.",
            "Schwerbehinderte Menschen bekommen zusätzlich fünf Arbeitstage Urlaub im Jahr (bei einer Fünf-Tage-Woche)."
          ],
          "fallen": [
            "Die Zustimmung des Integrationsamts muss vor der Kündigung vorliegen, nicht danach.",
            "Der besondere Kündigungsschutz gilt erst, wenn das Arbeitsverhältnis länger als sechs Monate besteht."
          ],
          "pruefung": "mittel",
          "pruefungText": "Arbeitsrecht/Arbeitsschutz ist im Prüfungsbereich WiSo regelmäßig vertreten (Westfalen-Lippe Sommer 2026: Teil „Arbeitsrecht und Soziale Sicherung“ 24 Punkte mit Urlaubsanspruch, Krankheit im Urlaub, Minijob und Entgeltfortzahlung).",
          "quelle": "neu geschrieben"
        },
        "Kündigung und Kündigungsschutz": {
          "ueberblick": "Ein Arbeitsverhältnis endet durch Zeitablauf (Befristung), Aufhebungsvertrag oder Kündigung. Die Kündigung ist eine einseitige, empfangsbedürftige Willenserklärung; unter Anwesenden wird sie mit Übergabe, unter Abwesenden mit Zugang (z. B. Einwurf in den Briefkasten) wirksam und braucht immer die Schriftform. Die ordentliche Kündigung muss die Fristen des § 622 BGB einhalten, die außerordentliche setzt einen wichtigen Grund voraus und muss binnen 2 Wochen erklärt werden. In Betrieben mit mehr als 10 Arbeitnehmern und nach 6 Monaten Beschäftigung muss eine Kündigung durch den Arbeitgeber sozial gerechtfertigt sein; bestimmte Gruppen haben besonderen Kündigungsschutz.",
          "achten": [
            "Fristberechnung: Zugang + Frist (4 Wochen = 28 Tage) ⇒ nächster zulässiger Endtermin (15. oder Monatsende; bei verlängerten Fristen nur Monatsende). Rückwärts: Endtermin − Frist = spätester Zugang.",
            "Sozialpunkte (Beispielschema): Dienstjahre bis 10 je 1 Punkt, danach je 2; Lebensalter 1 Punkt/Jahr (max. 55); Kind 4, verheiratet 8; Schwerbehinderung bis GdB 50 5 Punkte + 1 je weitere 10."
          ],
          "fallen": [
            "Verlängerte Fristen (Abs. 2) gelten nur für die Kündigung durch den Arbeitgeber und nur zum Monatsende.",
            "Besonderer Kündigungsschutz schließt nur die ordentliche Kündigung aus (Schwangere: auch die außerordentliche, außer Behördenzulassung).",
            "Fristlose Kündigung: Ausschlussfrist 2 Wochen ab Kenntnis (§ 626 Abs. 2) – danach nicht mehr möglich."
          ],
          "pruefung": "hoch",
          "pruefungText": "Kündigungsfristen berechnen, Wirksamkeit (Schriftform, Betriebsrat), KSchG-Voraussetzungen und besonderer Kündigungsschutz sind Schwerpunkt im WiSo-Teil Arbeitsrecht (laut Neuordnungs-Information Schwerpunkt „Kündigungsschutz und Vertragsarten“).",
          "quelle": "Lernregister"
        },
        "Zeugnis und Arbeitsgericht": {
          "ueberblick": "Bei Beendigung des Arbeits- oder Ausbildungsverhältnisses hat der Arbeitnehmer Anspruch auf ein schriftliches Zeugnis: einfach (Art und Dauer der Tätigkeit) oder qualifiziert (zusätzlich Leistung und Verhalten). Das Zeugnis muss wohlwollend und wahr sein – deshalb hat sich eine verschlüsselte Zeugnissprache entwickelt. Streitigkeiten aus dem Arbeitsverhältnis entscheiden die Arbeitsgerichte (Arbeitsgericht, Landesarbeitsgericht, Bundesarbeitsgericht in Erfurt) mit Berufsrichtern und ehrenamtlichen Richtern aus Arbeitnehmer- und Arbeitgeberkreisen; am Anfang steht eine Güteverhandlung.",
          "achten": [
            "Aufbau qualifiziertes Zeugnis: Einleitung/Personalien, Tätigkeitsbeschreibung, Leistungsbeurteilung, Führungsbeurteilung, Schlusssatz."
          ],
          "fallen": [
            "Fehlende Teile (z. B. kein Verhalten gegenüber Vorgesetzten, kein Bedauern, kein Dank) sind negative Signale.",
            "Anwaltskosten 1. Instanz trägt jeder selbst (§ 12a ArbGG) – nicht der Verlierer."
          ],
          "pruefung": "gering",
          "pruefungText": "Zeugnisnoten und Instanzenzug werden eher als Kurzfragen in WiSo/Zwischenprüfung gefragt.",
          "quelle": "Lernregister"
        }
      }
    }
  ]
};
