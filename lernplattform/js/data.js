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
        { "vorne": "Was bedeutet „duales System“?", "hinten": "Ausbildung an zwei Lernorten: im Betrieb (Praxis) und in der Berufsschule (Theorie)." },
        { "vorne": "Welches Gesetz regelt die Berufsausbildung?", "hinten": "Das Berufsbildungsgesetz (BBiG)." },
        { "vorne": "Wie lange dauert die Probezeit?", "hinten": "Mindestens 1 Monat, höchstens 4 Monate." },
        { "vorne": "Wie kann in der Probezeit gekündigt werden?", "hinten": "Jederzeit, ohne Frist und ohne Angabe von Gründen – aber schriftlich." },
        { "vorne": "Wann dürfen Auszubildende nach der Probezeit ordentlich kündigen?", "hinten": "Mit 4 Wochen Frist, wenn sie die Berufsausbildung aufgeben oder einen anderen Beruf erlernen wollen." },
        { "vorne": "Nenne drei Pflichten der Auszubildenden.", "hinten": "Zum Beispiel: Lernpflicht, Weisungen befolgen, Berufsschule besuchen, Ausbildungsnachweis führen, Verschwiegenheit." },
        { "vorne": "Nenne drei Pflichten der Ausbildenden.", "hinten": "Zum Beispiel: Ausbildungspflicht, Vergütung zahlen, Ausbildungsmittel stellen, für die Berufsschule freistellen, Zeugnis ausstellen." },
        { "vorne": "Was ist die „zuständige Stelle“?", "hinten": "Die Kammer. Sie überwacht die Ausbildung, führt das Verzeichnis der Ausbildungsverhältnisse und nimmt Prüfungen ab." },
        { "vorne": "Wann endet das Ausbildungsverhältnis?", "hinten": "Mit Ablauf der Ausbildungszeit oder früher mit Bekanntgabe des Bestehens der Abschlussprüfung." },
        { "vorne": "Wie lange dürfen Jugendliche höchstens arbeiten?", "hinten": "Nach dem Jugendarbeitsschutzgesetz grundsätzlich 8 Stunden täglich und 40 Stunden wöchentlich." }
      ],
      "quiz": [
        { "frage": "An welchen zwei Lernorten findet die duale Ausbildung statt?", "antworten": ["Betrieb und Berufsschule", "Betrieb und Universität", "Berufsschule und Kammer", "Kammer und Finanzamt"], "richtig": 0, "stufe": 1, "erklaerung": "Dual heißt: Praxis im Betrieb, Theorie in der Berufsschule." },
        { "frage": "Welches Gesetz ist die wichtigste Grundlage der Berufsausbildung?", "antworten": ["Handelsgesetzbuch", "Berufsbildungsgesetz", "Betriebsverfassungsgesetz", "Kündigungsschutzgesetz"], "richtig": 1, "stufe": 1, "erklaerung": "Das BBiG regelt Vertrag, Rechte, Pflichten und Prüfungen." },
        { "frage": "Wer muss bei einer 17-jährigen Auszubildenden den Vertrag zusätzlich unterschreiben?", "antworten": ["Die Klassenlehrkraft", "Die Kammer", "Die gesetzlichen Vertreter", "Niemand"], "richtig": 2, "stufe": 1, "erklaerung": "Minderjährige sind beschränkt geschäftsfähig – die gesetzlichen Vertreter müssen zustimmen." },
        { "frage": "Wie lange darf die Probezeit höchstens dauern?", "antworten": ["1 Monat", "3 Monate", "4 Monate", "6 Monate"], "richtig": 2, "stufe": 1, "erklaerung": "Mindestens 1 Monat, höchstens 4 Monate." },
        { "frage": "Was gehört NICHT zu den Pflichten der Auszubildenden?", "antworten": ["Berufsschule besuchen", "Ausbildungsmittel selbst bezahlen", "Ausbildungsnachweis führen", "Weisungen befolgen"], "richtig": 1, "stufe": 2, "erklaerung": "Ausbildungsmittel stellt der Ausbildende kostenlos zur Verfügung." },
        { "frage": "Welche Form ist für eine Kündigung des Ausbildungsverhältnisses vorgeschrieben?", "antworten": ["Mündlich genügt", "Per Telefon", "Schriftlich", "Notariell beurkundet"], "richtig": 2, "stufe": 2, "erklaerung": "Die Kündigung muss schriftlich erfolgen." },
        { "frage": "Wer überwacht die Durchführung der Berufsausbildung?", "antworten": ["Das Arbeitsgericht", "Die zuständige Stelle (Kammer)", "Die Berufsschule", "Die Agentur für Arbeit"], "richtig": 1, "stufe": 2, "erklaerung": "Die Kammer führt auch das Verzeichnis der Ausbildungsverhältnisse." },
        { "frage": "Ein Auszubildender möchte nach der Probezeit einen anderen Beruf erlernen. Welche Kündigungsfrist gilt?", "antworten": ["Keine Frist", "2 Wochen", "4 Wochen", "3 Monate"], "richtig": 2, "stufe": 3, "erklaerung": "Bei Berufsaufgabe oder Berufswechsel können Auszubildende mit 4 Wochen Frist kündigen." },
        { "frage": "Unter welcher Voraussetzung kann der Ausbildungsbetrieb nach der Probezeit kündigen?", "antworten": ["Jederzeit mit 4 Wochen Frist", "Nur aus wichtigem Grund", "Nur mit Zustimmung der Berufsschule", "Gar nicht"], "richtig": 1, "stufe": 3, "erklaerung": "Nach der Probezeit ist für den Betrieb nur die fristlose Kündigung aus wichtigem Grund möglich." },
        { "frage": "Wann endet das Ausbildungsverhältnis, wenn die Abschlussprüfung vor Vertragsende bestanden wird?", "antworten": ["Am vertraglich vereinbarten Enddatum", "Am Ende des Monats", "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss", "Am Tag der Zeugnisübergabe in der Schule"], "richtig": 2, "stufe": 3, "erklaerung": "Mit der Bekanntgabe des Bestehens endet die Ausbildung sofort." }
      ],
      "raetsel": [
        { "wort": "PROBEZEIT", "hinweis": "Beginn der Ausbildung, 1 bis 4 Monate" },
        { "wort": "BERUFSSCHULE", "hinweis": "Lernort für die Theorie" },
        { "wort": "KAMMER", "hinweis": "Zuständige Stelle, die die Ausbildung überwacht" },
        { "wort": "ZEUGNIS", "hinweis": "Erhält man am Ende der Ausbildung vom Betrieb" },
        { "wort": "VERGÜTUNG", "hinweis": "Monatliche Zahlung an Auszubildende" },
        { "wort": "KÜNDIGUNG", "hinweis": "Einseitige Beendigung des Vertrags, nur schriftlich" },
        { "wort": "URLAUB", "hinweis": "Bezahlte Erholungszeit" },
        { "wort": "DUAL", "hinweis": "So heißt das System mit zwei Lernorten" },
        { "wort": "LERNPFLICHT", "hinweis": "Wichtigste Pflicht der Auszubildenden" },
        { "wort": "BETRIEB", "hinweis": "Lernort für die Praxis" }
      ]
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
        { "vorne": "Was ist die Inventur?", "hinten": "Die mengen- und wertmäßige Bestandsaufnahme aller Vermögensteile und Schulden zu einem Stichtag." },
        { "vorne": "Was ist das Inventar?", "hinten": "Das ausführliche Bestandsverzeichnis in Staffelform: Vermögen, Schulden, Reinvermögen." },
        { "vorne": "Wie berechnet man das Eigenkapital?", "hinten": "Vermögen minus Schulden." },
        { "vorne": "Was steht auf der Aktivseite der Bilanz?", "hinten": "Das Vermögen: Anlagevermögen und Umlaufvermögen (Mittelverwendung)." },
        { "vorne": "Was steht auf der Passivseite der Bilanz?", "hinten": "Das Kapital: Eigenkapital und Fremdkapital (Mittelherkunft)." },
        { "vorne": "Wie lautet die Grundform des Buchungssatzes?", "hinten": "Soll an Haben." },
        { "vorne": "Auf welcher Seite nehmen Aktivkonten zu?", "hinten": "Im Soll." },
        { "vorne": "Auf welcher Seite nehmen Passivkonten zu?", "hinten": "Im Haben." },
        { "vorne": "Was ist ein Aktivtausch?", "hinten": "Ein Aktivposten nimmt zu, ein anderer nimmt um denselben Betrag ab. Die Bilanzsumme bleibt gleich." },
        { "vorne": "Über welches Konto werden Erfolgskonten abgeschlossen?", "hinten": "Über das Gewinn- und Verlustkonto (GuV)." }
      ],
      "quiz": [
        { "frage": "Wie nennt man die Bestandsaufnahme durch Zählen, Messen und Wiegen?", "antworten": ["Inventar", "Inventur", "Bilanz", "Buchung"], "richtig": 1, "stufe": 1, "erklaerung": "Die Inventur ist die Tätigkeit, das Inventar ihr Ergebnis." },
        { "frage": "Was gilt für jede Bilanz?", "antworten": ["Aktiva = Passiva", "Aktiva > Passiva", "Soll > Haben", "Vermögen = Schulden"], "richtig": 0, "stufe": 1, "erklaerung": "Beide Seiten der Bilanz sind immer gleich groß." },
        { "frage": "Auf welcher Seite der Bilanz steht das Eigenkapital?", "antworten": ["Aktivseite", "Passivseite", "Auf beiden Seiten", "Es steht nicht in der Bilanz"], "richtig": 1, "stufe": 1, "erklaerung": "Die Passivseite zeigt die Mittelherkunft: Eigen- und Fremdkapital." },
        { "frage": "Wie lautet der Grundsatz zur Belegpflicht?", "antworten": ["Keine Buchung ohne Beleg", "Kein Beleg ohne Unterschrift", "Jede Buchung braucht zwei Belege", "Belege sind freiwillig"], "richtig": 0, "stufe": 1, "erklaerung": "Jede Buchung muss durch einen Beleg nachweisbar sein." },
        { "frage": "Bargeld wird vom Bankkonto abgehoben. Wie lautet der Buchungssatz?", "antworten": ["Bank an Kasse", "Kasse an Bank", "Kasse an Eigenkapital", "Bank an Forderungen"], "richtig": 1, "stufe": 2, "erklaerung": "Die Kasse (Aktivkonto) nimmt im Soll zu, die Bank im Haben ab." },
        { "frage": "Ein Kunde überweist eine offene Rechnung. Wie wird gebucht?", "antworten": ["Forderungen an Bank", "Bank an Verbindlichkeiten", "Bank an Forderungen", "Kasse an Bank"], "richtig": 2, "stufe": 2, "erklaerung": "Das Bankguthaben steigt (Soll), die Forderung erlischt (Haben)." },
        { "frage": "Auf welcher Seite werden Aufwendungen gebucht?", "antworten": ["Im Haben", "Im Soll", "Auf beiden Seiten", "Gar nicht, nur in der Bilanz"], "richtig": 1, "stufe": 2, "erklaerung": "Aufwendungen mindern das Eigenkapital und stehen daher im Soll." },
        { "frage": "Waren werden auf Ziel eingekauft. Welche Bilanzveränderung liegt vor?", "antworten": ["Aktivtausch", "Passivtausch", "Aktiv-Passiv-Mehrung", "Aktiv-Passiv-Minderung"], "richtig": 2, "stufe": 3, "erklaerung": "Vermögen und Verbindlichkeiten nehmen zu – die Bilanzsumme steigt." },
        { "frage": "Eine Lieferantenverbindlichkeit wird in ein Darlehen umgewandelt. Was liegt vor?", "antworten": ["Aktivtausch", "Passivtausch", "Bilanzverlängerung", "Bilanzverkürzung"], "richtig": 1, "stufe": 3, "erklaerung": "Zwei Passivposten ändern sich gegenläufig, die Bilanzsumme bleibt gleich." },
        { "frage": "Wohin wird der Saldo des GuV-Kontos übertragen?", "antworten": ["Auf das Bankkonto", "Auf das Eigenkapitalkonto", "Auf das Kassenkonto", "Auf das Konto Verbindlichkeiten"], "richtig": 1, "stufe": 3, "erklaerung": "Gewinn erhöht, Verlust mindert das Eigenkapital." }
      ],
      "raetsel": [
        { "wort": "INVENTUR", "hinweis": "Bestandsaufnahme durch Zählen, Messen, Wiegen" },
        { "wort": "INVENTAR", "hinweis": "Ausführliches Bestandsverzeichnis in Staffelform" },
        { "wort": "BILANZ", "hinweis": "Kurzfassung des Inventars in Kontenform" },
        { "wort": "AKTIVA", "hinweis": "Linke Seite der Bilanz" },
        { "wort": "PASSIVA", "hinweis": "Rechte Seite der Bilanz" },
        { "wort": "SOLL", "hinweis": "Linke Seite eines Kontos" },
        { "wort": "HABEN", "hinweis": "Rechte Seite eines Kontos" },
        { "wort": "BELEG", "hinweis": "Ohne ihn keine Buchung" },
        { "wort": "EIGENKAPITAL", "hinweis": "Vermögen minus Schulden" },
        { "wort": "AUFWAND", "hinweis": "Mindert das Eigenkapital" },
        { "wort": "ERTRAG", "hinweis": "Erhöht das Eigenkapital" },
        { "wort": "SALDO", "hinweis": "Unterschied zwischen Soll- und Habenseite" }
      ]
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
        { "vorne": "Was bedeutet Geschäftsfähigkeit?", "hinten": "Die Fähigkeit, Rechtsgeschäfte selbstständig und wirksam abzuschließen." },
        { "vorne": "Wer ist geschäftsunfähig?", "hinten": "Kinder unter 7 Jahren (und dauerhaft Geisteskranke)." },
        { "vorne": "Was bedeutet „schwebend unwirksam“?", "hinten": "Der Vertrag eines beschränkt Geschäftsfähigen wird erst wirksam, wenn die gesetzlichen Vertreter ihn genehmigen." },
        { "vorne": "Wie kommt ein Vertrag zustande?", "hinten": "Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme." },
        { "vorne": "Ist eine Schaufensterauslage ein verbindliches Angebot?", "hinten": "Nein. Sie ist nur eine Aufforderung an Kunden, selbst ein Angebot abzugeben." },
        { "vorne": "Welche Pflichten hat der Verkäufer?", "hinten": "Die Sache mangelfrei übergeben und dem Käufer das Eigentum verschaffen." },
        { "vorne": "Welche Pflichten hat der Käufer?", "hinten": "Den Kaufpreis zahlen und die Sache abnehmen." },
        { "vorne": "Unterschied zwischen Besitz und Eigentum?", "hinten": "Besitz = tatsächliche Herrschaft über eine Sache. Eigentum = rechtliche Herrschaft." },
        { "vorne": "Welches Recht hat der Käufer bei einem Mangel zuerst?", "hinten": "Nacherfüllung: Nachbesserung oder Ersatzlieferung." },
        { "vorne": "Wie lang ist die regelmäßige Verjährungsfrist?", "hinten": "3 Jahre, beginnend am Ende des Jahres, in dem der Anspruch entstanden ist." }
      ],
      "quiz": [
        { "frage": "Ab welchem Alter ist man voll geschäftsfähig?", "antworten": ["16 Jahre", "18 Jahre", "21 Jahre", "14 Jahre"], "richtig": 1, "stufe": 1, "erklaerung": "Mit Vollendung des 18. Lebensjahres." },
        { "frage": "Wodurch kommt ein Vertrag zustande?", "antworten": ["Durch Antrag und Annahme", "Durch Zahlung", "Durch Lieferung", "Durch eine Rechnung"], "richtig": 0, "stufe": 1, "erklaerung": "Zwei übereinstimmende Willenserklärungen sind nötig." },
        { "frage": "Was ist die Hauptpflicht des Käufers?", "antworten": ["Die Ware prüfen", "Den Kaufpreis zahlen und die Ware abnehmen", "Eine Quittung ausstellen", "Die Ware versichern"], "richtig": 1, "stufe": 1, "erklaerung": "Zahlung und Abnahme sind die Pflichten des Käufers." },
        { "frage": "Ein Sechsjähriger kauft ein Spielzeug. Der Vertrag ist …", "antworten": ["wirksam", "schwebend unwirksam", "nichtig", "anfechtbar"], "richtig": 2, "stufe": 1, "erklaerung": "Kinder unter 7 sind geschäftsunfähig – ihre Willenserklärungen sind nichtig." },
        { "frage": "Wer ein Auto mietet, ist …", "antworten": ["Eigentümer", "Besitzer", "Eigentümer und Besitzer", "keines von beidem"], "richtig": 1, "stufe": 2, "erklaerung": "Der Mieter hat die tatsächliche Herrschaft (Besitz), Eigentümer bleibt der Vermieter." },
        { "frage": "Wie ist eine Ware im Schaufenster rechtlich einzuordnen?", "antworten": ["Als verbindlicher Antrag", "Als Annahme", "Als Aufforderung, ein Angebot abzugeben", "Als Kaufvertrag"], "richtig": 2, "stufe": 2, "erklaerung": "Der Händler will sich nicht gegenüber jedem binden." },
        { "frage": "Eine 15-Jährige kauft ohne Wissen der Eltern ein teures Smartphone auf Raten. Der Vertrag ist …", "antworten": ["sofort wirksam", "schwebend unwirksam", "von Anfang an nichtig", "nur mündlich gültig"], "richtig": 1, "stufe": 2, "erklaerung": "Er hängt von der Genehmigung der gesetzlichen Vertreter ab." },
        { "frage": "Welches Recht steht dem Käufer bei mangelhafter Ware vorrangig zu?", "antworten": ["Rücktritt", "Minderung", "Nacherfüllung", "Schadensersatz"], "richtig": 2, "stufe": 3, "erklaerung": "Der Verkäufer bekommt zuerst die Chance, nachzubessern oder neu zu liefern." },
        { "frage": "Welcher Vertrag muss notariell beurkundet werden?", "antworten": ["Kauf eines Gebrauchtwagens", "Kauf eines Grundstücks", "Mietvertrag über ein Zimmer", "Kauf eines Laptops"], "richtig": 1, "stufe": 3, "erklaerung": "Für Grundstückskäufe schreibt das Gesetz die notarielle Beurkundung vor." },
        { "frage": "Ein Anspruch entsteht im März 2024. Wann beginnt die regelmäßige Verjährungsfrist?", "antworten": ["Im März 2024", "Am 31.12.2024", "Am 01.01.2024", "Im März 2025"], "richtig": 1, "stufe": 3, "erklaerung": "Sie beginnt mit dem Schluss des Jahres, in dem der Anspruch entstanden ist." }
      ],
      "raetsel": [
        { "wort": "ANTRAG", "hinweis": "Erste Willenserklärung beim Vertragsschluss" },
        { "wort": "ANNAHME", "hinweis": "Zweite Willenserklärung beim Vertragsschluss" },
        { "wort": "KAUFVERTRAG", "hinweis": "Verpflichtet zu Lieferung und Zahlung" },
        { "wort": "EIGENTUM", "hinweis": "Rechtliche Herrschaft über eine Sache" },
        { "wort": "BESITZ", "hinweis": "Tatsächliche Herrschaft über eine Sache" },
        { "wort": "MANGEL", "hinweis": "Fehler an der gelieferten Ware" },
        { "wort": "NICHTIG", "hinweis": "Von Anfang an unwirksam" },
        { "wort": "VERJÄHRUNG", "hinweis": "Nach ihr kann ein Anspruch nicht mehr durchgesetzt werden" },
        { "wort": "RÜCKTRITT", "hinweis": "Rückabwicklung des Vertrags nach gescheiterter Nacherfüllung" },
        { "wort": "MINDERUNG", "hinweis": "Herabsetzung des Kaufpreises" },
        { "wort": "NOTAR", "hinweis": "Beurkundet den Grundstückskauf" }
      ]
    }
  ]
};
