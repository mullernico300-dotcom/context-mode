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
      ]
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
        }
      ]
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
          "text": "Hält der Arbeitgeber das nicht ein, droht ein Bußgeld bis 2.000 €. Der Arbeitsvertrag bleibt trotzdem gültig."
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
          "text": "Vorher gibt es Teilurlaub: für jeden vollen Monat 1/12 des Jahresurlaubs. Halbe Tage und mehr werden aufgerundet."
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
          "text": "Nach den 6 Wochen zahlt die Krankenkasse Krankengeld."
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
          "text": "Dann braucht der Arbeitgeber einen Grund: in der Person (z. B. lange Krankheit), im Verhalten (z. B. ständiges Zuspätkommen) oder im Betrieb (z. B. Auftragsmangel)."
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
      "kurz": "Sozialkunde"
    }
  ]
};
