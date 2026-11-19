#!/usr/bin/env python3
"""Lernfeld 10 „Jahresabschlüsse erstellen und abschließen“ – Inhalte.

Quelle: Unterrichtsskript LF 10 mit Mitschrift (Lernsituationen 1–3) und ein Test.
Alle Rechenergebnisse in den Musterlösungen werden unten mit Python nachgerechnet (pruefe()).
Aufruf:  python3 tools/lf10_daten.py      -> trägt lf10 in js/data.js ein (ersetzt ein vorhandenes lf10)
"""
import json, os, re

HIER = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HIER), 'js', 'data.js')


def eur(x):
    s = '{:,.2f}'.format(x).replace(',', 'X').replace('.', ',').replace('X', '.')
    return (s[:-3] if s.endswith(',00') else s) + ' €'


# ---------------------------------------------------------------- Rechnungen (Kontrolle)
R = {}
def pruefe():
    # Test Aufgabe 2: Computer
    R['pc_ak'] = 800 - 800 * 0.02 + 20
    assert round(R['pc_ak'], 2) == 804
    # Test Aufgabe 3: Parkplatz
    mek = 2500 + 3500; mgk = mek * 0.2; fek = 60 * 18; fgk = fek * 0.6
    R['park'] = mek + mgk + fek + fgk
    assert R['park'] == 8928
    # Beispiel Grundstück Feldmesser
    assert 120000 + 120000 * 0.05 + 1200 + 80 == 127280
    # Beispiel Lkw
    assert 180000 + 600 + 120 + 90 + 1500 == 182310
    assert round(180000 * .19 + 600 * .19 + 90 * .19 + 1500 * .19, 2) == 34616.10
    # Beispiel Rabatt/Skonto
    assert 10000 * 0.9 * 0.97 == 8730
    assert round(10000 * 0.9 * 1.19 * 0.97, 2) == 10388.70
    # Übung 1 GmbH-Grundstück
    ak = 150000 + 7500 + 4500 + 1250 + 500
    assert ak == 163750 and ak * 0.2 == 32750 and ak * 0.8 == 131000
    assert round(4500 * .19 + 1250 * .19, 2) == 1092.50
    # Übung 2 AG
    assert 300000 + 2200 + 15000 + 5000 == 322200
    assert round(2200 * .19 + 5000 * .19, 2) == 1368
    # Übung 3 Pkw
    assert 30000 + 800 + 300 + 40 + 50 == 31190
    assert round((30000 + 800 + 300 + 40) * .19, 2) == 5916.60
    # Übung 4 Drehautomat
    assert 75000 + 1570 + 8000 + 3600 == 88170
    assert round((75000 + 1570 + 8000 + 3600) * .19, 2) == 16752.30
    # Übung 5 Maschine mit Skonto
    assert 120000 * 0.98 == 117600 and round(120000 * 1.19 * 0.98, 2) == 139944
    # Beispiel Spezialmaschine
    assert 40000 + 10000 + 60000 + 156000 + 10000 == 276000
    # Beispiel Werkzeugmaschine (Wertobergrenze, Anlagen im Bau)
    hk = 40000 + 8000 + 90000 + 126000 + 20000
    assert hk == 284000 and hk * 1.1 == 312400 and 400000 - 312400 == 87600
    # Übung 6, 7, 8
    assert 22000 + 14000 + 86000 + 46000 + 4500 == 172500
    assert 60000 + 6600 + 38500 + 64800 + 20000 == 189900 and 189900 - 20000 == 169900
    assert 48000 + 13700 + 84500 + 124200 + 22200 == 292600 and 292600 - 48000 == 244600
    # Übung 9 Außenanlagen
    m = 68400 + 36000; hk = m + m * .1 + 116400 + 116400 * 1.2
    assert round(hk, 2) == 370920 and round(hk * 1.05, 2) == 389466
    # Übung 10 Bürogebäude
    hk25 = 125000 + 18750 + 96800 + 96800 * 1.4 + 30000
    assert round(hk25, 2) == 406070 and round(hk25 - 30000, 2) == 376070
    hk26 = 74000 + 43500 + 198400
    assert hk26 == 315900 and round(hk25 + hk26, 2) == 721970 and round(198400 * .19, 2) == 37696
    # Beispiel Maschine 48.000 / 8 Jahre
    assert 48000 - 2 * 6000 == 36000 and 36000 - 3 * 6000 == 18000 and 36000 - 15000 == 21000
    assert 15000 / 6 == 2500 and 15000 - 2 * 2500 == 10000 and 48000 - 4 * 6000 == 24000
    # Übung 11
    assert 21000 - 3 * 4200 == 8400 and 8400 - 4200 == 4200 and 8400 - 2000 == 6400
    # Übung 12
    assert 250000 - 7 * 25000 == 75000 and 75000 - 1.5 * 25000 == 37500 and 75000 - 30000 == 45000 and 30000 / 3 == 10000
    # Übung 13
    assert 43000 - 2 * 4300 == 34400 and 34400 - 4 * 4300 == 17200 and 34400 - 12000 == 22400
    assert 12000 / 8 == 1500 and 43000 - 4 * 4300 == 25800 and 10500 - 1500 == 9000
    # Übung 14
    assert 64000 - 3 * 8000 == 40000 and 40000 - 2.5 * 8000 == 20000 and 15000 / 5 == 3000 and 64000 - 5 * 8000 == 24000
    # Zeitliche Abgrenzung
    assert 5700 / 3 * 2 == 3800 and 1800 / 6 * 2 == 600 and 3600 / 6 * 3 == 1800
    assert 800 / 4 * 3 == 600 and 6000 / 6 * 5 == 5000 and 15000 * .04 / 12 * 2 == 100
    assert 20000 * .06 / 12 == 100 and 1800 / 12 * 9 == 1350


# ---------------------------------------------------------------- Paragrafen in einfacher Sprache
G1 = 'Grundlagen des Jahresabschlusses'
G2 = 'Ansatz- und Bewertungsgrundsätze'
G3 = 'Anschaffungskosten'
G4 = 'Herstellungskosten'
G5 = 'Abschreibung, Teilwert und Zuschreibung'
G6 = 'Zeitliche Abgrenzung'

P = [
    (G1, '§ 238 Abs. 1 HGB', 'Jeder Kaufmann muss Bücher führen. Darin müssen seine Geschäfte und sein Vermögen so stehen, wie es die Grundsätze ordnungsmäßiger Buchführung (GoB) verlangen.'),
    (G1, '§ 241a HGB', 'Ein Einzelkaufmann ist von Buchführung, Inventar und Bilanz befreit, wenn er an zwei Abschlussstichtagen hintereinander höchstens 800.000 € Umsatz und 80.000 € Jahresüberschuss hat. Er darf dann eine Einnahmenüberschussrechnung machen. Für OHG, KG und GmbH gilt die Befreiung nicht.'),
    (G1, '§ 240 HGB', 'Zu Beginn und am Ende jedes Geschäftsjahres wird ein Inventar aufgestellt: ein genaues Verzeichnis aller Vermögensgegenstände und Schulden mit Menge und Wert. Die Bestandsaufnahme dafür heißt Inventur.'),
    (G1, '§ 242 HGB', 'Am Ende jedes Geschäftsjahres stellt der Kaufmann eine Bilanz und eine Gewinn- und Verlustrechnung auf. Beide zusammen sind der Jahresabschluss (bei Einzelunternehmen und Personengesellschaften).'),
    (G1, '§ 243 und § 245 HGB', 'Der Jahresabschluss muss klar und übersichtlich sein und die GoB einhalten. Er wird in angemessener Zeit aufgestellt und vom Kaufmann (bei Gesellschaften von allen persönlich haftenden Gesellschaftern) mit Datum unterschrieben.'),
    (G1, '§ 264 Abs. 1 HGB', 'Bei Kapitalgesellschaften (GmbH, UG, AG) und bei Personengesellschaften ohne natürliche Person als Vollhafter (z. B. GmbH & Co. KG, § 264a) gehört zum Jahresabschluss zusätzlich der Anhang. Mittelgroße und große Gesellschaften stellen außerdem einen Lagebericht auf – der gehört aber nicht zum Jahresabschluss.'),
    (G1, '§ 267 HGB', 'Kapitalgesellschaften werden in klein, mittelgroß und groß eingeteilt. Entscheidend sind Bilanzsumme, Umsatz und Zahl der Arbeitnehmer. Klein ist, wer an zwei Stichtagen hintereinander zwei von drei Grenzen nicht überschreitet: 7,5 Mio. € Bilanzsumme, 15 Mio. € Umsatz, 50 Arbeitnehmer.'),
    (G1, '§ 284 HGB', 'Der Anhang erklärt die Zahlen von Bilanz und GuV genauer, nennt die angewandten Ansatz- und Bewertungsmethoden und enthält in der Regel den Anlagenspiegel (§ 284 Abs. 3 HGB).'),
    (G1, '§ 289 HGB', 'Der Lagebericht beschreibt den Geschäftsverlauf und die wirtschaftliche Lage des Unternehmens und die voraussichtliche Entwicklung mit ihren Chancen und Risiken. Er ist eine Ergänzung, kein Teil des Jahresabschlusses.'),
    (G1, '§ 140 AO', 'Wer schon nach anderen Gesetzen (vor allem nach dem HGB) Bücher führen muss, muss das auch für die Steuer tun. Man nennt das abgeleitete Buchführungspflicht.'),
    (G1, '§ 141 AO', 'Gewerbetreibende sowie Land- und Forstwirte, die nicht schon nach HGB buchen müssen, werden buchführungspflichtig, wenn ihr Umsatz über 800.000 € oder ihr Gewinn über 80.000 € im Jahr liegt. Die Pflicht beginnt mit dem Wirtschaftsjahr, nachdem das Finanzamt sie mitgeteilt hat.'),
    (G1, '§ 5 Abs. 1 Satz 1 EStG', 'Maßgeblichkeitsprinzip: In die Steuerbilanz kommt das Betriebsvermögen, das nach den handelsrechtlichen GoB auszuweisen ist. Die Handelsbilanz ist also die Grundlage der Steuerbilanz – außer das Steuerrecht schreibt etwas anderes vor oder ein steuerliches Wahlrecht wird anders ausgeübt.'),
    (G1, '§ 60 Abs. 2 EStDV', 'Weichen Handels- und Steuerbilanz voneinander ab, legt man der Steuererklärung eine Überleitungsrechnung bei oder erstellt eine eigene Steuerbilanz. Stimmen beide überein, spricht man von einer Einheitsbilanz.'),
    (G1, '§ 5b EStG', 'Bilanz und GuV werden dem Finanzamt elektronisch übermittelt (E-Bilanz).'),

    (G2, '§ 246 Abs. 1 HGB', 'Vollständigkeitsgebot: In den Jahresabschluss gehören alle Vermögensgegenstände, Schulden, Rechnungsabgrenzungsposten, Aufwendungen und Erträge – egal ob gekauft oder selbst hergestellt.'),
    (G2, '§ 246 Abs. 2 HGB', 'Verrechnungsverbot: Aktivposten dürfen nicht mit Passivposten und Aufwendungen nicht mit Erträgen verrechnet werden. Beispiel: Eine Forderung an einen Kunden wird nicht mit einer Schuld bei ihm „weggerechnet“.'),
    (G2, '§ 247 HGB', 'In der Bilanz werden Anlagevermögen, Umlaufvermögen, Eigenkapital, Schulden und Rechnungsabgrenzungsposten getrennt ausgewiesen. Zum Anlagevermögen gehört nur, was dauerhaft dem Betrieb dienen soll.'),
    (G2, '§ 248 Abs. 1 HGB', 'Ansatzverbot: Kosten für die Gründung, für die Beschaffung von Eigenkapital und für den Abschluss von Versicherungsverträgen dürfen nicht aktiviert werden.'),
    (G2, '§ 248 Abs. 2 HGB', 'Selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens (z. B. selbst programmierte Software) dürfen handelsrechtlich aktiviert werden (Wahlrecht). Selbst geschaffene Marken, Drucktitel, Verlagsrechte und Kundenlisten dürfen nie aktiviert werden.'),
    (G2, '§ 5 Abs. 2 EStG', 'Steuerlich dürfen immaterielle Wirtschaftsgüter des Anlagevermögens nur aktiviert werden, wenn sie entgeltlich erworben wurden. Selbst geschaffene bleiben in der Steuerbilanz weg.'),
    (G2, 'R 4.2 Abs. 1 EStR', 'Betriebsvermögen: Mehr als 50 % betriebliche Nutzung = notwendiges Betriebsvermögen. 10 bis 50 % = gewillkürtes Betriebsvermögen (darf zugeordnet werden). Unter 10 % = notwendiges Privatvermögen.'),
    (G2, '§ 252 Abs. 1 Nr. 1 HGB', 'Bilanzidentität: Die Werte in der Eröffnungsbilanz müssen genau mit der Schlussbilanz des Vorjahres übereinstimmen.'),
    (G2, '§ 252 Abs. 1 Nr. 2 HGB', 'Unternehmensfortführung (going concern): Man bewertet so, als ob das Unternehmen weiterläuft – nicht mit Zerschlagungs- oder Verkaufswerten, solange keine echten Gründe dagegen sprechen.'),
    (G2, '§ 252 Abs. 1 Nr. 3 HGB', 'Einzelbewertung und Stichtagsprinzip: Jeder Vermögensgegenstand und jede Schuld wird einzeln und mit dem Wert am Abschlussstichtag bewertet. Ausnahmen: Festwert, Gruppenbewertung und Verbrauchsfolgen (§ 240 Abs. 3 und 4, § 256 HGB).'),
    (G2, '§ 252 Abs. 1 Nr. 4 HGB', 'Vorsichtsprinzip: Alle vorhersehbaren Risiken und Verluste bis zum Stichtag werden berücksichtigt, auch wenn man sie erst bis zur Aufstellung erfährt (Wertaufhellung). Gewinne erst, wenn sie verwirklicht sind (Realisationsprinzip). Verluste schon, wenn sie drohen (Imparitätsprinzip).'),
    (G2, '§ 252 Abs. 1 Nr. 5 HGB', 'Periodenabgrenzung: Aufwendungen und Erträge gehören in das Jahr, zu dem sie wirtschaftlich gehören – egal, wann bezahlt wird.'),
    (G2, '§ 252 Abs. 1 Nr. 6 HGB', 'Bewertungsstetigkeit: Die Bewertungsmethoden des Vorjahres werden beibehalten. Man darf nicht jedes Jahr so abschreiben, „wie es gerade passt“.'),
    (G2, '§ 253 Abs. 1 Satz 1 HGB', 'Anschaffungskostenprinzip: Vermögensgegenstände werden höchstens mit ihren Anschaffungs- oder Herstellungskosten angesetzt (abzüglich Abschreibungen). Wertsteigerungen darüber hinaus dürfen nicht gezeigt werden.'),
    (G2, '§ 253 Abs. 4 HGB', 'Umlaufvermögen (z. B. Waren, Wertpapiere zum Verkauf): Ist der Wert am Stichtag niedriger, muss darauf abgeschrieben werden – auch wenn die Wertminderung nur vorübergehend ist (strenges Niederstwertprinzip).'),

    (G3, '§ 255 Abs. 1 HGB', 'Anschaffungskosten sind alle Ausgaben, um einen Vermögensgegenstand zu erwerben und betriebsbereit zu machen, soweit sie ihm einzeln zugeordnet werden können. Schema: Anschaffungspreis + Anschaffungsnebenkosten + nachträgliche Anschaffungskosten − Anschaffungspreisminderungen.'),
    (G3, '§ 6 Abs. 1 Nr. 1 und 2 EStG', 'Auch in der Steuerbilanz werden Wirtschaftsgüter mit den Anschaffungs- oder Herstellungskosten bewertet. Der Begriff ist derselbe wie im HGB.'),
    (G3, '§ 9b Abs. 1 EStG', 'Vorsteuer, die abgezogen werden darf, gehört nicht zu den Anschaffungskosten. Für Unternehmer mit Vorsteuerabzug rechnet man also immer mit Nettobeträgen.'),
    (G3, '§ 17 Abs. 1 UStG', 'Mindert sich der Preis nachträglich (Skonto, Bonus, Rabatt nach der Rechnung), werden die Anschaffungskosten und die Vorsteuer berichtigt. Ein Rabatt in der Rechnung mindert die Anschaffungskosten sofort.'),
    (G3, '§ 255 Abs. 1 HGB (Nebenkosten)', 'Zu den Anschaffungsnebenkosten gehören z. B. Fracht, Überführung, Transportversicherung, Montage, Fundament, Zulassung, Kennzeichen, Beschriftung; bei Grundstücken Grunderwerbsteuer, Notar für den Kaufvertrag, Grundbucheintrag und Makler.'),
    (G3, '§ 255 Abs. 3 HGB', 'Finanzierungskosten gehören nicht zu den Anschaffungskosten: Zinsen, Notar und Grundbuch für eine Grundschuld (Darlehenssicherung) sind sofort Aufwand. Ebenso laufende Kosten wie Tankfüllung, Kfz-Steuer und Kfz-Versicherung.'),
    (G3, '§ 11 GrEStG', 'Die Grunderwerbsteuer beträgt bundesweit 3,5 % des Kaufpreises, die Länder legen aber eigene Sätze fest (z. B. Niedersachsen und Sachsen-Anhalt 5 %). Sie gehört zu den Anschaffungskosten des Grundstücks.'),
    (G3, 'R 7.1 und H 6.4 EStR/EStH', 'Beim bebauten Grundstück werden die Anschaffungskosten (mit allen Nebenkosten) auf Grund und Boden (nicht abnutzbar, keine AfA) und Gebäude (abnutzbar) aufgeteilt. Wird ein wertloses Gebäude in Abbruchabsicht gekauft und abgerissen, gehören Kaufpreis und Abbruchkosten zum Grund und Boden.'),
    (G3, '§ 6 Abs. 2 EStG', 'Geringwertige Wirtschaftsgüter: Bewegliche, selbstständig nutzbare Anlagegüter mit Anschaffungskosten bis 800 € netto dürfen sofort voll abgeschrieben werden. Ab 250 € werden sie in einem Verzeichnis geführt.'),
    (G3, '§ 6 Abs. 2a EStG', 'Sammelposten: Wirtschaftsgüter über 250 € bis 1.000 € netto können stattdessen in einen jährlichen Sammelposten kommen, der über 5 Jahre mit je 20 % aufgelöst wird.'),

    (G4, '§ 255 Abs. 2 Satz 1 HGB', 'Herstellungskosten sind alle Aufwendungen für den Verbrauch von Gütern und Diensten, um einen Vermögensgegenstand selbst herzustellen, zu erweitern oder wesentlich zu verbessern.'),
    (G4, '§ 255 Abs. 2 Satz 2 HGB', 'Pflicht (Wertuntergrenze): Materialeinzelkosten, Fertigungseinzelkosten und Sondereinzelkosten der Fertigung (z. B. Konstruktionspläne, Modelle) plus angemessene Teile der Material- und Fertigungsgemeinkosten.'),
    (G4, '§ 255 Abs. 2 Satz 3 HGB', 'Wahlrecht: angemessene Teile der allgemeinen Verwaltungskosten, der Kosten für soziale Einrichtungen, freiwillige soziale Leistungen und die betriebliche Altersversorgung. Mit ihnen erreicht man die Wertobergrenze.'),
    (G4, '§ 255 Abs. 2 Satz 4 HGB', 'Verbot: Forschungskosten und Vertriebskosten dürfen nie in die Herstellungskosten. Ein Gewinnzuschlag gehört ebenfalls nicht hinein – Herstellungskosten sind Kosten, kein Verkaufspreis.'),
    (G4, '§ 255 Abs. 3 HGB', 'Zinsen für Fremdkapital gehören grundsätzlich nicht zu den Herstellungskosten. Nur wenn ein Kredit gezielt die Herstellung finanziert, dürfen die Zinsen für den Herstellungszeitraum einbezogen werden.'),
    (G4, '§ 6 Abs. 1 Nr. 1b EStG', 'Steuerlich gelten dieselben Pflichtbestandteile. Die Wahlrechte (allgemeine Verwaltung, soziale Kosten) müssen in der Steuerbilanz genauso ausgeübt werden wie in der Handelsbilanz (Übereinstimmungsvorbehalt).'),
    (G4, 'R 6.3 EStR', 'Die Richtlinie zählt die Bestandteile der steuerlichen Herstellungskosten im Einzelnen auf. Die steuerliche Untergrenze entspricht der handelsrechtlichen Wertuntergrenze.'),
    (G4, '§ 247 Abs. 2 HGB (Anlagen im Bau)', 'Ist eine selbst gebaute Anlage am Bilanzstichtag noch nicht fertig, werden die bisherigen Herstellungskosten als „Anlagen im Bau“ aktiviert. Sie werden noch nicht abgeschrieben. Bei Fertigstellung bucht man sie auf das richtige Anlagekonto um.'),

    (G5, '§ 253 Abs. 3 Satz 1 und 2 HGB', 'Anlagevermögen, das sich abnutzt, wird planmäßig über die Nutzungsdauer abgeschrieben. Anschaffungs- oder Herstellungskosten minus Abschreibung = fortgeführte Anschaffungs- oder Herstellungskosten.'),
    (G5, '§ 7 Abs. 1 EStG', 'Lineare AfA: Anschaffungskosten geteilt durch die betriebsgewöhnliche Nutzungsdauer, jedes Jahr gleich viel. Im Anschaffungsjahr nur monatsgenau ab dem Monat der Anschaffung (Satz 4).'),
    (G5, '§ 7 Abs. 2 EStG', 'Degressive AfA: Für bewegliche Anlagegüter, die vom 1. Juli 2025 bis Ende 2027 angeschafft werden, darf wieder degressiv abgeschrieben werden: höchstens das Dreifache der linearen AfA und höchstens 30 % vom Restbuchwert.'),
    (G5, '§ 253 Abs. 3 Satz 5 HGB', 'Sinkt der Wert eines Anlagegutes voraussichtlich dauerhaft unter den Buchwert, muss außerplanmäßig auf den niedrigeren Wert abgeschrieben werden (Pflicht). Bei nur vorübergehender Wertminderung ist das beim Sachanlagevermögen verboten.'),
    (G5, '§ 253 Abs. 3 Satz 6 HGB', 'Ausnahme Finanzanlagen (z. B. Beteiligungen): Hier darf man auch bei nur vorübergehender Wertminderung abschreiben (Wahlrecht).'),
    (G5, '§ 6 Abs. 1 Nr. 1 Satz 2 EStG', 'Steuerlich darf auf den niedrigeren Teilwert nur abgeschrieben werden, wenn die Wertminderung voraussichtlich dauerhaft ist. Es ist ein Wahlrecht – man kann auch beim höheren Buchwert bleiben.'),
    (G5, '§ 6 Abs. 1 Nr. 1 Satz 3 EStG', 'Teilwert ist der Betrag, den ein Käufer des ganzen Betriebs für dieses eine Wirtschaftsgut zahlen würde, wenn er den Betrieb fortführt. Gründe für einen niedrigen Teilwert: Fehlmaßnahme, gesunkene Wiederbeschaffungskosten, geringere Rentabilität.'),
    (G5, 'BMF-Schreiben zur Teilwertabschreibung', 'Dauerhaft ist eine Wertminderung beim abnutzbaren Anlagevermögen, wenn der Wert am Stichtag mindestens für die halbe Restnutzungsdauer unter dem planmäßigen Restbuchwert liegt. Man vergleicht also den Teilwert mit dem Buchwert, den das Gut nach der halben Restnutzungsdauer hätte.'),
    (G5, '§ 7 Abs. 1 Satz 7 EStG', 'Absetzung für außergewöhnliche technische oder wirtschaftliche Abnutzung (AfaA): Wird ein Gut z. B. durch einen Unfall oder fehlende Nutzbarkeit außergewöhnlich entwertet, darf zusätzlich zur normalen AfA abgeschrieben werden.'),
    (G5, '§ 11c Abs. 2 EStDV', 'Nach einer Teilwertabschreibung oder AfaA wird die weitere AfA vom neuen, niedrigeren Wert über die Restnutzungsdauer berechnet.'),
    (G5, '§ 253 Abs. 5 HGB', 'Wertaufholungsgebot: Fällt der Grund für eine außerplanmäßige Abschreibung weg, muss wieder zugeschrieben werden – höchstens bis zu den fortgeführten Anschaffungs- oder Herstellungskosten (also dem Wert ohne die außerplanmäßige Abschreibung). Ausnahme: Geschäfts- oder Firmenwert.'),
    (G5, '§ 6 Abs. 1 Nr. 1 Satz 4 EStG', 'Auch steuerlich muss zugeschrieben werden, wenn der Teilwert wieder steigt. Obergrenze sind die fortgeführten Anschaffungs- oder Herstellungskosten. Die Zuschreibung ist ein Ertrag.'),

    (G6, '§ 252 Abs. 1 Nr. 5 HGB', 'Aufwendungen und Erträge gehören in das Geschäftsjahr, zu dem sie wirtschaftlich gehören – unabhängig davon, wann das Geld fließt. Dafür gibt es Rechnungsabgrenzungsposten und sonstige Forderungen und Verbindlichkeiten.'),
    (G6, '§ 250 Abs. 1 HGB', 'Aktiver Rechnungsabgrenzungsposten (ARAP): Das Unternehmen hat vor dem Stichtag schon bezahlt, der Aufwand gehört aber (teilweise) in das neue Jahr. Beispiel: Versicherung, Miete, Zinsen, Kfz-Steuer im Voraus bezahlt.'),
    (G6, '§ 250 Abs. 2 HGB', 'Passiver Rechnungsabgrenzungsposten (PRAP): Das Unternehmen hat vor dem Stichtag schon Geld bekommen, der Ertrag gehört aber (teilweise) in das neue Jahr. Beispiel: Miete oder Zinsen im Voraus erhalten.'),
    (G6, '§ 5 Abs. 5 Satz 1 EStG', 'Steuerlich gelten dieselben Regeln: Rechnungsabgrenzungsposten nur für Einnahmen und Ausgaben vor dem Stichtag, die Ertrag oder Aufwand für eine bestimmte Zeit danach sind.'),
    (G6, '§ 5 Abs. 5 Satz 2 EStG', 'Steuerlich darf ein Rechnungsabgrenzungsposten wegfallen, wenn die einzelne Ausgabe oder Einnahme 800 € nicht übersteigt. Das Wahlrecht muss dann einheitlich für alle solchen Fälle ausgeübt werden.'),
    (G6, '§ 246 Abs. 1 HGB (sonstige Forderungen)', 'Sonstige Forderung (sonstiger Vermögensgegenstand): Der Ertrag gehört ins alte Jahr, das Geld kommt erst im neuen Jahr. Beispiel: Dezembermiete oder Dezemberzinsen werden im Januar gezahlt.'),
    (G6, '§ 246 Abs. 1 HGB (sonstige Verbindlichkeiten)', 'Sonstige Verbindlichkeit: Der Aufwand gehört ins alte Jahr, bezahlt wird erst im neuen Jahr. Beispiel: Zinsen, Pacht, Löhne oder Beiträge für das alte Jahr, die erst später fällig sind.'),
    (G6, '§ 11 Abs. 1 Satz 5 EStG', 'Das Zufluss- und Abflussprinzip gilt nur für Einnahmenüberschussrechner. Wer bilanziert, grenzt immer periodengerecht ab.'),
    (G6, '§ 15 Abs. 1 Satz 1 Nr. 1 UStG', 'Bei Vorauszahlungen darf die Vorsteuer schon abgezogen werden, sobald eine Rechnung vorliegt und bezahlt ist – auch wenn die Leistung erst im neuen Jahr erbracht wird. Die Vorsteuer wird nicht abgegrenzt.'),
]


# ---------------------------------------------------------------- Themen-Texte mit Musterlösungen
def L(titel, aufgabe, loesung, hinweis=''):
    d = {'titel': titel, 'aufgabe': aufgabe, 'loesung': loesung}
    if hinweis:
        d['hinweis'] = hinweis
    return d

INFO = {
 G1: dict(
  ueberblick='Am Ende jedes Geschäftsjahres zieht ein Unternehmen Bilanz. Wer das muss, steht im HGB (Kaufleute) und in der AO (Steuerrecht). Einzelunternehmen und Personengesellschaften erstellen Bilanz und GuV, Kapitalgesellschaften zusätzlich einen Anhang und – ab mittlerer Größe – einen Lagebericht. Aus der Handelsbilanz wird über das Maßgeblichkeitsprinzip die Steuerbilanz abgeleitet; Abweichungen gleicht man mit einer Überleitungsrechnung aus.',
  achten=[
   'Bilanzierungspflicht prüfen: Kaufmann nach §§ 1–6 HGB? Dann § 238 HGB. Einzelkaufmann unter 800.000 € Umsatz und 80.000 € Gewinn? Dann Befreiung nach § 241a HGB.',
   'Steuerlich: § 140 AO (abgeleitet aus dem HGB) und § 141 AO (eigene Grenzen 800.000 € / 80.000 € für Gewerbetreibende und Land- und Forstwirte).',
   'Bestandteile: Einzelunternehmen und OHG/KG mit natürlicher Person als Vollhafter = Bilanz + GuV. GmbH, AG, GmbH & Co. KG = Bilanz + GuV + Anhang.',
   'Der Lagebericht ist kein Teil des Jahresabschlusses. Kleine Kapitalgesellschaften brauchen keinen.',
   'Steuerlicher Gewinn: Handelsbilanzgewinn + nicht abziehbare Betriebsausgaben (z. B. Geschenke über 50 €, 30 % der Bewirtung) = steuerliches Ergebnis.'
  ],
  fallen=[
   '„Teil des Jahresabschlusses einer Kapitalgesellschaft“ ist der Anhang – nicht der Lagebericht (im Test so abgefragt).',
   '§ 241a HGB gilt nur für Einzelkaufleute, nicht für OHG oder GmbH.',
   'Die Grenzen von § 241a HGB und § 141 AO liegen beide bei 800.000 € Umsatz und 80.000 € Gewinn – ältere Bücher nennen noch 600.000 € / 60.000 €.',
   'Den Anlagenspiegel findet man heute in § 284 Abs. 3 HGB (früher § 268 Abs. 2 HGB).'
  ],
  pruefung='hoch',
  pruefungText='Zuordnungsfragen (Anhang oder Lagebericht, wer ist buchführungspflichtig?) kommen in Tests und in der Abschlussprüfung im Rechnungswesen regelmäßig vor.',
  loesungen=[
   L('Test 1: Anhang oder Lagebericht?',
     'Ordnen Sie zu: a) Teil des Jahresabschlusses, b) Darstellung der wirtschaftlichen Lage, c) Erläuterung der Werte der Bilanz und GuV, d) Teil des Jahresabschlusses einer Kapitalgesellschaft.',
     '- a) Anhang\n- b) Lagebericht\n- c) Anhang\n- d) Anhang – der Anhang gehört bei Kapitalgesellschaften zum Jahresabschluss (§ 264 Abs. 1 HGB), der Lagebericht nicht.',
     'In der Mitschrift stand bei d) „Lagebericht“ – das war der Fehler im Test.'),
   L('Übung 1: Anhang oder Lagebericht?',
     'Ordnen Sie die sieben Aussagen dem Anhang oder dem Lagebericht zu.',
     '- Wirtschaftlichkeitsbericht mit Geschäftsverlauf, Ergebnis und Entwicklung → **Lagebericht** (§ 289 HGB)\n- Werte der Bilanz und GuV werden kommentiert → **Anhang** (§ 284 HGB)\n- Angaben zu Bilanzansatz- und Bewertungswahlrechten → **Anhang**\n- Freiwillige Informationen zur Selbstdarstellung (z. B. Umweltbilanz) → **Lagebericht**\n- Enthält in der Regel den Anlagenspiegel → **Anhang** (§ 284 Abs. 3 HGB)\n- Gehört nicht zum Jahresabschluss → **Lagebericht**\n- Gehört zum Jahresabschluss einer Kapitalgesellschaft → **Anhang**'),
   L('Beispiel: steuerliches Ergebnis der Tischlerei',
     'Handelsrechtlicher Gewinn 2025: 65.400 €. Darin als Aufwand gebucht: nicht abziehbare Geschenke 2.380 € (§ 4 Abs. 5 Nr. 1 EStG) und nicht abziehbare Bewirtungsaufwendungen 500 € (§ 4 Abs. 5 Nr. 2 EStG). Berechnen Sie das steuerliche Ergebnis.',
     '- Gewinn laut Handelsbilanz: 65.400 €\n- + nicht abziehbare Geschenke: 2.380 €\n- + nicht abziehbare Bewirtung: 500 €\n- = **steuerlicher Gewinn: 68.280 €**\nDie nicht abziehbaren Betriebsausgaben mindern den Handelsbilanzgewinn, dürfen den steuerlichen Gewinn aber nicht mindern. Deshalb werden sie außerhalb der Bilanz wieder hinzugerechnet.')
  ]),
 G2: dict(
  ueberblick='Bevor man rechnet, klärt man zwei Fragen: Darf oder muss etwas überhaupt in die Bilanz (Ansatz: Pflicht, Wahlrecht, Verbot)? Und mit welchem Wert (Bewertung)? Die allgemeinen Bewertungsgrundsätze stehen in § 252 HGB – von der Bilanzidentität bis zur Stetigkeit. Dazu kommen das Anschaffungskostenprinzip als Obergrenze und das Niederstwertprinzip.',
  achten=[
   'Ansatz: Pflicht (§ 246 Abs. 1), Wahlrecht (§ 248 Abs. 2 selbst geschaffene immaterielle Güter), Verbot (§ 248 Abs. 1 Gründungskosten u. a.).',
   'Die sechs Grundsätze aus § 252 Abs. 1 HGB in der Reihenfolge: 1 Bilanzidentität, 2 Fortführung, 3 Einzelbewertung/Stichtag, 4 Vorsicht (Realisation und Imparität), 5 Periodenabgrenzung, 6 Stetigkeit.',
   'Wertsteigerungen über die Anschaffungskosten hinaus dürfen nie gezeigt werden (§ 253 Abs. 1 HGB).',
   'Wertminderungen im Umlaufvermögen müssen immer gezeigt werden (§ 253 Abs. 4 HGB).',
   'Bei Prüfungsaufgaben immer: richtig/falsch + Grundsatz + Paragraf + kurze Begründung.'
  ],
  fallen=[
   'Realisationsprinzip und Imparitätsprinzip verwechseln: Gewinne erst bei Verkauf, Verluste schon, wenn sie drohen.',
   'Wein mit gesunkenem Wert abzuschreiben ist richtig (Imparität/Niederstwert) – mit gestiegenem Wert hochzuschreiben ist falsch (Anschaffungskostenprinzip).',
   'Liquidationswerte nur, wenn die Fortführung wirklich nicht mehr möglich ist – eine bloße Überlegung der Inhaber reicht nicht.',
   'Selbst geschaffene Software: handelsrechtlich Wahlrecht, steuerlich Verbot (§ 5 Abs. 2 EStG) – das führt zu einer Abweichung zwischen Handels- und Steuerbilanz.'
  ],
  pruefung='hoch',
  pruefungText='Fallaufgaben „Prüfen Sie die Auffassung des Steuerberaters mithilfe von § 252 HGB“ sind ein Klassiker. Punkte gibt es für das Ergebnis, den genannten Grundsatz und die Begründung.',
  loesungen=[
   L('Übung 2: Die Auffassungen von Steuerberater Schneider (§ 252 HGB)',
     'a) Neubeginn ohne Rücksicht auf die Vorjahreswerte. b) Alle Vermögensgegenstände zum halben Buchwert, weil die OHG vielleicht 2026 aufgelöst wird. c) Die gesamte Geschäftsausstattung als eine Position mit 20 % abschreiben. d) Wein (AK 10.000 €) nur noch zur Hälfte verkäuflich – Abschreibung um 5.000 €. e) Wein (AK 8.000 €) jetzt 30.000 € wert – Ansatz mit 30.000 €. f) Nur nach Zahlungsvorgängen buchen. g) Abschreibungen jedes Jahr nach eigenem Ermessen.',
     '- a) **Falsch.** Bilanzidentität (§ 252 Abs. 1 Nr. 1 HGB): Die Eröffnungsbilanz 2025 muss mit der Schlussbilanz 2024 übereinstimmen.\n- b) **Falsch.** Unternehmensfortführung (Nr. 2): Solange die Auflösung nicht feststeht, wird mit Fortführungswerten bewertet; zudem verstößt der pauschale halbe Wert gegen die Einzelbewertung.\n- c) **Falsch.** Einzelbewertung (Nr. 3): Jeder Gegenstand wird einzeln mit seiner Nutzungsdauer abgeschrieben.\n- d) **Richtig.** Vorsichtsprinzip/Imparitätsprinzip (Nr. 4) und strenges Niederstwertprinzip für Vorräte (§ 253 Abs. 4 HGB): Der drohende Verlust muss schon jetzt gezeigt werden. Ansatz 5.000 €.\n- e) **Falsch.** Realisationsprinzip (Nr. 4) und Anschaffungskostenprinzip (§ 253 Abs. 1 HGB): höchstens 8.000 €. Der Gewinn entsteht erst beim Verkauf.\n- f) **Falsch.** Periodenabgrenzung (Nr. 5): Aufwand und Ertrag gehören in das Jahr, zu dem sie wirtschaftlich gehören.\n- g) **Falsch.** Bewertungsstetigkeit (Nr. 6): Die bisherigen Methoden werden beibehalten.',
     'Bei d) steht in der Mitschrift nur „Vorsichtsprinzip“. Für volle Punkte zusätzlich das Imparitätsprinzip und § 253 Abs. 4 HGB nennen.')
  ]),
 G3: dict(
  ueberblick='Gekaufte Anlagegüter werden mit ihren Anschaffungskosten aktiviert. Dazu gehört alles, was nötig ist, um das Gut zu erwerben und betriebsbereit zu machen. Abziehbare Vorsteuer gehört nie dazu. Preisminderungen wie Rabatt und Skonto mindern die Anschaffungskosten. Laufende Kosten und Finanzierungskosten sind sofort Aufwand.',
  achten=[
   '1. Anschaffungspreis (netto).',
   '2. + Anschaffungsnebenkosten: Fracht, Überführung, Montage, Fundament, Zulassung, Kennzeichen, Beschriftung; beim Grundstück Grunderwerbsteuer, Notar für den Kaufvertrag, Grundbuch, Makler.',
   '3. + nachträgliche Anschaffungskosten.',
   '4. − Anschaffungspreisminderungen: Rabatt sofort, Skonto und Bonus nachträglich (Vorsteuer nach § 17 UStG berichtigen).',
   '5. = Anschaffungskosten. Danach prüfen: GWG bis 800 € netto? Sammelposten 250 bis 1.000 €? Beim bebauten Grundstück aufteilen in Grund und Boden und Gebäude.'
  ],
  fallen=[
   'Skonto immer vom Rechnungsbetrag nach Rabatt rechnen.',
   'Tankfüllung, Kfz-Steuer und Kfz-Versicherung sind keine Anschaffungskosten, sondern Kfz-Kosten.',
   'Notar und Grundbuch für eine Grundschuld sind Finanzierungskosten (Aufwand), keine Anschaffungskosten.',
   'Die Zulassungsgebühr hat keine Umsatzsteuer – keine Vorsteuer daraus buchen.',
   'Die Vorsteuer wird beim Grundstück nicht auf Boden und Gebäude „aufgeteilt“ – sie ist ein eigenes Konto. Aufteilen muss man nur die Anschaffungskosten.',
   'GWG-Grenze 800 € gilt für die Anschaffungskosten insgesamt (mit Nebenkosten, nach Skonto). Der Computer im Test kostet 804 € – also kein GWG.'
  ],
  pruefung='hoch',
  pruefungText='Anschaffungskosten mit Buchungssätzen und Gewinn- und Bilanzauswirkung sind fester Bestandteil jeder Abschlussprüfung im Rechnungswesen.',
  loesungen=[
   L('Test 2: Computer mit Skonto und Zustellung',
     'Am 01.12.25 wird ein Computer für 800 € + USt auf Ziel gekauft und am 31.12.25 unter Abzug von 2 % Skonto per Bank bezahlt. Für die Zustellung werden am 30.12.25 20 € + USt bar an UPS gezahlt. a) Anschaffungskosten? b) Buchungssätze mit Gewinn- und Bilanzauswirkung.',
     '**a) Anschaffungskosten**\n- Anschaffungspreis: 800,00 €\n- + Nebenkosten Zustellung: 20,00 €\n- − Skonto 2 % von 800 €: 16,00 €\n- = **804,00 €** (über 800 € → kein geringwertiges Wirtschaftsgut; möglich ist der Sammelposten oder die Abschreibung über die Nutzungsdauer, für Computer darf 1 Jahr angesetzt werden)\n**b) Buchungen**\n- 01.12.: Betriebs- und Geschäftsausstattung 800,00 € und Vorsteuer 152,00 € an Verbindlichkeiten aLuL 952,00 € – erfolgsneutral, Bilanzverlängerung 952 €\n- 30.12.: Betriebs- und Geschäftsausstattung 20,00 € und Vorsteuer 3,80 € an Kasse 23,80 € – erfolgsneutral, Aktivtausch\n- 31.12.: Verbindlichkeiten aLuL 952,00 € an Bank 932,96 €, Betriebs- und Geschäftsausstattung 16,00 € und Vorsteuer 3,04 € – erfolgsneutral, Bilanzverkürzung 952 €'),
   L('Beispiel: unbebautes Grundstück',
     'Kaufpreis 120.000 €, 5 % Grunderwerbsteuer, Notar 1.200 € + USt, Grundbuch 80 €. Alles per Bank.',
     '- Kaufpreis: 120.000 €\n- + Grunderwerbsteuer 5 %: 6.000 €\n- + Notar Kaufvertrag: 1.200 €\n- + Grundbuch: 80 €\n- = **Anschaffungskosten 127.280 €**\nBuchungen: unbebaute Grundstücke 120.000 € an Bank; unbebaute Grundstücke 6.000 € an Bank; unbebaute Grundstücke 1.200 € und Vorsteuer 228 € an Bank 1.428 €; unbebaute Grundstücke 80 € an Bank. Erfolgsneutral, Aktivtausch.'),
   L('Beispiel: Lkw mit Nebenkosten',
     'Lkw 180.000 € + USt, Überführung 600 € + USt (Bank), Zulassung 120 € bar, Nummernschilder 90 € + USt bar, Schriftzug 1.500 € + USt (Bank nach Rechnung).',
     '- Kaufpreis 180.000 € + Überführung 600 € + Zulassung 120 € + Nummernschilder 90 € + Schriftzug 1.500 €\n- = **Anschaffungskosten 182.310 €**\n- Vorsteuer: 34.200 € + 114 € + 17,10 € + 285 € = 34.616,10 € (die Zulassungsgebühr hat keine Umsatzsteuer)\nBuchungen: Fuhrpark an Bank bzw. Kasse bzw. Verbindlichkeiten, jeweils mit Vorsteuer. Erfolgsneutral.'),
   L('Beispiel: Maschine mit Rabatt und Skonto',
     'Maschine 10.000 € + USt auf Ziel, 10 % Treuerabatt, Zahlung mit 3 % Skonto vom Zieleinkaufspreis.',
     '- Listenpreis: 10.000 €\n- − Rabatt 10 %: 1.000 €\n- = Zieleinkaufspreis: 9.000 € (+ 1.710 € USt = 10.710 €)\n- − Skonto 3 %: 270 €\n- = **Anschaffungskosten 8.730 €**\nKauf: Maschinen 9.000 € und Vorsteuer 1.710 € an Verbindlichkeiten aLuL 10.710 €.\nZahlung: Verbindlichkeiten aLuL 10.710 € an Bank 10.388,70 €, Maschinen 270 € und Vorsteuer 51,30 €. Erfolgsneutral.'),
   L('Übung 1: bebautes Grundstück einer GmbH',
     'Kaufpreis 150.000 €, davon 20 % Grund und Boden. Grunderwerbsteuer 5 %, Makler 4.500 € + USt, Notar 1.250 € + USt, Grundbuch 500 €. Alles per Bank.',
     '- Kaufpreis 150.000 € + Grunderwerbsteuer 7.500 € + Makler 4.500 € + Notar 1.250 € + Grundbuch 500 €\n- = **Anschaffungskosten 163.750 €**\n- davon Grund und Boden 20 %: **32.750 €**, Gebäude 80 %: **131.000 €**\n- Vorsteuer: 855 € (Makler) + 237,50 € (Notar) = 1.092,50 €\nBuchung: Grund und Boden 32.750 €, Gebäude 131.000 € und Vorsteuer 1.092,50 € an Bank 164.842,50 €. Erfolgsneutral, Aktivtausch.'),
   L('Übung 2: Grundstück mit wertlosem Schuppen',
     'Kaufpreis 300.000 €. Notar Kaufvertrag 2.200 € + USt, Notar Grundschuld 500 € + USt, Grunderwerbsteuer 5 %, Abbruch des Schuppens 5.000 € + USt. Alles per Bank.',
     '- Kaufpreis 300.000 € + Notar Kaufvertrag 2.200 € + Grunderwerbsteuer 15.000 € + Abbruch 5.000 €\n- = **Anschaffungskosten Grund und Boden 322.200 €** (Gebäude wertlos und in Abbruchabsicht gekauft)\n- Vorsteuer: 418 € + 950 € = 1.368 €\n- Notar für die Grundschuld: **500 € Aufwand** (Finanzierungskosten) + 95 € Vorsteuer\nBuchungen: Grund und Boden 322.200 € und Vorsteuer 1.368 € an Bank 323.568 € – erfolgsneutral. Nebenkosten des Geldverkehrs 500 € und Vorsteuer 95 € an Bank 595 € – Gewinn −500 €.'),
   L('Übung 3: Pkw mit Rechnung',
     'Listenpreis 30.000 €, Anhängerkupplung 800 €, Überführung 300 €, Nummernschilder 40 €, Tankfüllung 50 € (alle netto + 19 % USt), Zulassung 50 € ohne USt. Zahlung per Bank 37.166,10 €.',
     '- 30.000 € + 800 € + 300 € + 40 € + 50 € Zulassung\n- = **Anschaffungskosten 31.190 €** (Tankfüllung gehört nicht dazu)\n- Vorsteuer auf die Anschaffungskosten: 5.916,60 €\nBuchungen: Pkw 31.190 € und Vorsteuer 5.916,60 € an Bank 37.106,60 € – erfolgsneutral. Kfz-Kosten 50 € und Vorsteuer 9,50 € an Bank 59,50 € – Gewinn −50 €.'),
   L('Übung 4: Drehautomat mit Fundament',
     'Drehautomat 75.000 € + USt, Fracht und Transportversicherung 1.570 € + USt, Fundament 8.000 € + USt, Elektroanschlüsse 3.600 € + USt.',
     '- 75.000 € + 1.570 € + 8.000 € + 3.600 €\n- = **Anschaffungskosten 88.170 €** (alles ist nötig, um die Maschine betriebsbereit zu machen)\n- Vorsteuer: 16.752,30 €\nBuchung: Maschinen 88.170 € und Vorsteuer 16.752,30 € an Verbindlichkeiten aLuL 104.922,30 €. Erfolgsneutral, Bilanzverlängerung.'),
   L('Übung 5: Maschine mit 2 % Skonto',
     'Maschine 120.000 € netto auf Ziel, Zahlung im Mai mit 2 % Skonto.',
     '- 120.000 € − 2 % Skonto 2.400 € = **Anschaffungskosten 117.600 €**\nKauf: Maschinen 120.000 € und Vorsteuer 22.800 € an Verbindlichkeiten aLuL 142.800 €.\nZahlung: Verbindlichkeiten aLuL 142.800 € an Bank 139.944 €, Maschinen 2.400 € und Vorsteuer 456 €. Beides erfolgsneutral.')
  ]),
 G4: dict(
  ueberblick='Stellt ein Unternehmen ein Anlagegut selbst her (Maschine, Gebäude, Parkplatz), wird es mit den Herstellungskosten aktiviert. Pflicht sind Einzelkosten und angemessene Gemeinkosten von Material und Fertigung (Wertuntergrenze). Verwaltungskosten sind ein Wahlrecht (Wertobergrenze). Vertriebskosten, Forschung und Gewinnzuschlag sind verboten. Weil Material und Löhne schon als Aufwand gebucht sind, gleicht das Ertragskonto „andere aktivierte Eigenleistungen“ diesen Aufwand aus.',
  achten=[
   '1. Materialeinzelkosten + Materialgemeinkosten (Zuschlag auf die Materialeinzelkosten).',
   '2. + Fertigungseinzelkosten (Löhne) + Fertigungsgemeinkosten (Zuschlag auf die Löhne).',
   '3. + Sondereinzelkosten der Fertigung (Konstruktionspläne, Modelle, Architekt) – immer netto.',
   '4. = Wertuntergrenze. Wahlweise + allgemeine Verwaltungskosten = Wertobergrenze.',
   '5. Buchen: Anlagekonto an „andere aktivierte Eigenleistungen“; nicht fertig am Stichtag = „Anlagen im Bau“.'
  ],
  fallen=[
   'Vertriebskosten und Gewinnzuschlag nie einrechnen – auch nicht bei der Wertobergrenze.',
   '„Niedrigster Wert“ = Wertuntergrenze (ohne Verwaltungskosten). „Höchster Wert“ = Wertobergrenze.',
   'Steuerlich müssen die Verwaltungskosten genauso behandelt werden wie in der Handelsbilanz (§ 6 Abs. 1 Nr. 1b EStG).',
   'Wird eine Fremdleistung per Bank bezahlt, steht im Buchungssatz Bank – nicht Verbindlichkeiten. In der Mitschrift stand bei den Übungen 7, 8 und 10 „Verbindlichkeiten aLuL“; dadurch stimmt auch die Bilanzauswirkung nicht.',
   'Außenanlagen (Wege, Parkplätze, Pflanzungen) sind eigene Wirtschaftsgüter mit eigener Nutzungsdauer – nicht Grund und Boden und nicht Gebäude.',
   'Erst addieren, dann runden: In der Mitschrift zu Übung 9 steht 383.466 €, richtig ist 389.466 €.'
  ],
  pruefung='hoch',
  pruefungText='Herstellungskosten-Schemata mit Wertunter- und Wertobergrenze und dem Buchungssatz über „andere aktivierte Eigenleistungen“ sind typische Aufgaben in Klassenarbeiten und in der Abschlussprüfung.',
  loesungen=[
   L('Test 3: Parkplatz in Eigenleistung',
     'Zugekauftes Material 2.500 € + USt (auf Ziel), Material aus dem Lager 3.500 €, 60 Stunden zu 18 €, Materialgemeinkosten 20 %, Fertigungsgemeinkosten 60 %. a) Niedrigste handelsrechtliche Herstellungskosten? b) Buchung mit Gewinn- und Bilanzauswirkung.',
     '**a)**\n- Materialeinzelkosten: 2.500 € + 3.500 € = 6.000 €\n- + Materialgemeinkosten 20 %: 1.200 €\n- + Fertigungslöhne 60 × 18 €: 1.080 €\n- + Fertigungsgemeinkosten 60 %: 648 €\n- = **Herstellungskosten (Wertuntergrenze) 8.928 €**\n**b)** Außenanlagen 8.928 € und Vorsteuer 475 € an Verbindlichkeiten aLuL 2.975 € und andere aktivierte Eigenleistungen 6.428 €.\nGewinn +6.428 € (der Aufwand für Lagermaterial, Löhne und Gemeinkosten wird ausgeglichen), Bilanzverlängerung 9.403 €.'),
   L('Beispiel: Spezialmaschine (niedrigster Wert)',
     'Material 40.000 €, Materialgemeinkosten 25 %, Fertigungslöhne 60.000 €, Fertigungsgemeinkosten 260 %, Konstruktionspläne 10.000 €, Verwaltung 10 %, Vertrieb 6 %.',
     '- 40.000 € + 10.000 € + 60.000 € + 156.000 € + 10.000 €\n- = **Wertuntergrenze 276.000 €** (Verwaltung ist Wahlrecht, Vertrieb verboten)\nBuchung: Maschinen 276.000 € an andere aktivierte Eigenleistungen 276.000 €. Gewinn +276.000 €, Bilanzverlängerung (Maschinen und Eigenkapital).'),
   L('Beispiel: Werkzeugmaschine – Anlagen im Bau',
     'Material 40.000 €, Fertigungslöhne 90.000 €, Konstruktion 20.000 €. Zuschläge: Material 20 %, Fertigung 140 %, Verwaltung 10 %, Vertrieb 5 %. Am Stichtag nicht fertig, Wertobergrenze. Später: fertig am 30.03.26, Herstellungskosten insgesamt 400.000 €.',
     '- 40.000 € + 8.000 € + 90.000 € + 126.000 € + 20.000 € = 284.000 €\n- + Verwaltung 10 %: 28.400 €\n- = **Wertobergrenze 312.400 €** (Vertrieb nie)\n31.12.25: Anlagen im Bau 312.400 € an andere aktivierte Eigenleistungen 312.400 €. Gewinn +312.400 €.\n30.03.26: Maschinen 400.000 € an Anlagen im Bau 312.400 € und andere aktivierte Eigenleistungen 87.600 €. Gewinn 2026 +87.600 €.'),
   L('Übung 6: Maschine – Gewinn so niedrig wie möglich',
     'Material 22.000 €, Materialgemeinkosten 14.000 €, Fertigungslöhne 86.000 €, Fertigungsgemeinkosten 46.000 €, Sondereinzelkosten 4.500 €, Verwaltung 2.000 €.',
     '- 22.000 € + 14.000 € + 86.000 € + 46.000 € + 4.500 €\n- = **Wertuntergrenze 172.500 €** (die Verwaltungskosten bleiben weg)\nBuchung: Maschinen 172.500 € an andere aktivierte Eigenleistungen 172.500 €. Gewinn und Bilanzsumme +172.500 €.'),
   L('Übung 7: Spezialdrehbank mit Ingenieurbüro',
     'Material 60.000 €, Materialgemeinkosten 6.600 €, Fertigungslöhne 38.500 €, Fertigungsgemeinkosten 64.800 €, Ingenieurbüro 23.800 € inkl. USt (per Bank), Verwaltung 1.240 €, Gewinnzuschlag 15 %, Vertrieb 450 €.',
     '- 60.000 € + 6.600 € + 38.500 € + 64.800 € + 20.000 € (Ingenieurbüro netto)\n- = **niedrigster Wert 189.900 €** – in Handels- und Steuerbilanz gleich (Verwaltung Wahlrecht, Gewinn und Vertrieb verboten)\nBuchung: Maschinen 189.900 € und Vorsteuer 3.800 € an andere aktivierte Eigenleistungen 169.900 € und **Bank** 23.800 €.\nGewinn +169.900 €, Bilanzsumme +169.900 €.',
     'Die Mitschrift bucht „Verbindlichkeiten aLuL 23.800 €“ und kommt so auf 193.700 € Bilanzauswirkung. Das Ingenieurbüro wurde aber per Bank bezahlt.'),
   L('Übung 8: Lackiergerät',
     'Material 48.000 € + USt (Bank), Fertigungslöhne 84.500 €, Fertigungsgemeinkosten 124.200 €, Verwaltung 2.400 €, Pläne aus dem eigenen Konstruktionsbüro 22.200 €, Materialgemeinkosten 13.700 €. Niedrigste HK?',
     '- 48.000 € + 13.700 € + 84.500 € + 124.200 € + 22.200 €\n- = **Wertuntergrenze 292.600 €**\nBuchung: Maschinen 292.600 € und Vorsteuer 9.120 € an andere aktivierte Eigenleistungen 244.600 € und **Bank** 57.120 €.\nGewinn +244.600 €, Bilanzsumme +244.600 €.',
     'Auch hier wurde per Bank bezahlt – in der Mitschrift steht „Verbindlichkeiten“, daher stimmt die Bilanzauswirkung von 301.720 € nicht.'),
   L('Übung 9: Außenanlagen der Landschaftsgärtnerei',
     'Material aus dem Lager 68.400 €, Pflanzen 36.000 €, Fertigungslöhne 116.400 €. Zuschläge: Material 10 %, Fertigung 120 %, Verwaltung 5 %. Handelsrechtlich werden die Verwaltungskosten einbezogen. Steuerlicher Wert?',
     '- Materialeinzelkosten: 68.400 € + 36.000 € = 104.400 €\n- + Materialgemeinkosten 10 %: 10.440 €\n- + Fertigungslöhne: 116.400 €\n- + Fertigungsgemeinkosten 120 %: 139.680 €\n- = 370.920 €\n- + Verwaltung 5 %: 18.546 €\n- = **389.466 €** – steuerlich genauso wie in der Handelsbilanz (§ 6 Abs. 1 Nr. 1b EStG)\nBuchung: Außenanlagen 389.466 € an andere aktivierte Eigenleistungen 389.466 €. Gewinn und Bilanzsumme +389.466 €.',
     'Mitschrift: 370.920 € + 18.546 € wurde als 383.466 € addiert – richtig sind 389.466 €.'),
   L('Übung 10: Bürogebäude über zwei Jahre',
     '2025: Fertigungslöhne 96.800 €, Fertigungsgemeinkosten 140 %, Material 125.000 €, Materialgemeinkosten 15 %, Architekt 30.000 € + USt (Bank). Fertig im September 2026 mit weiteren Fertigungslöhnen 74.000 €, Fertigungsgemeinkosten 43.500 € und Fremdleistungen 198.400 € + USt (Bank).',
     '**31.12.25**\n- 125.000 € + 18.750 € + 96.800 € + 135.520 € + 30.000 € = **406.070 €**\n- Anlagen im Bau 406.070 € und Vorsteuer 5.700 € an andere aktivierte Eigenleistungen 376.070 € und Bank 35.700 €\n- Gewinn +376.070 €, Bilanzsumme +376.070 €\n**Fertigstellung 2026**\n- 74.000 € + 43.500 € + 198.400 € = 315.900 € → Herstellungskosten gesamt **721.970 €**\n- Geschäftsbauten 721.970 € und Vorsteuer 37.696 € an Anlagen im Bau 406.070 €, andere aktivierte Eigenleistungen 117.500 € und Bank 236.096 €\n- Gewinn 2026 +117.500 €',
     'Für Profis: Erhält ein Bauunternehmen selbst Bauleistungen, schuldet es oft die Umsatzsteuer nach § 13b UStG. Die Aufgabe rechnet vereinfacht mit Vorsteuer.')
  ]),
 G5: dict(
  ueberblick='Abnutzbare Anlagegüter werden planmäßig abgeschrieben. Sinkt der Wert stärker, prüft man, ob die Wertminderung dauerhaft ist: Liegt der Teilwert unter dem Buchwert, den das Gut nach der halben Restnutzungsdauer hätte? Dann muss man handelsrechtlich außerplanmäßig abschreiben, steuerlich darf man auf den Teilwert gehen. Fällt der Grund später weg, wird zugeschrieben – höchstens bis zu den fortgeführten Anschaffungskosten.',
  achten=[
   '1. Vorläufiger Buchwert am Stichtag = Anschaffungskosten − bisherige AfA (inklusive AfA des laufenden Jahres).',
   '2. Restnutzungsdauer bestimmen und halbieren.',
   '3. Planmäßiger Restbuchwert nach der halben Restnutzungsdauer berechnen.',
   '4. Vergleich: Teilwert kleiner? → dauerhaft → Handelsbilanz Pflicht, Steuerbilanz Wahlrecht. Teilwert größer? → vorübergehend → keine Abschreibung.',
   '5. Folgejahre: AfA = neuer Buchwert : Restnutzungsdauer. Zuschreibung höchstens bis zum Buchwert ohne außerplanmäßige Abschreibung.'
  ],
  fallen=[
   'Die AfA des laufenden Jahres zuerst buchen, dann die außerplanmäßige Abschreibung vom vorläufigen Buchwert berechnen.',
   'Die Restnutzungsdauer zählt ab dem Stichtag – nicht ab der Anschaffung.',
   'Zuschreibung nicht bis zum Marktwert, wenn dieser über den fortgeführten Anschaffungskosten liegt (Übung 14: Wert 27.000 €, Zuschreibung nur bis 24.000 €).',
   'Vorübergehende Wertminderung beim Sachanlagevermögen: In der Handelsbilanz verboten – anders als im Umlaufvermögen.',
   'Konten: planmäßige AfA und außerplanmäßige Abschreibung getrennt buchen; die Zuschreibung ist ein Ertrag.'
  ],
  pruefung='hoch',
  pruefungText='Teilwertabschreibung mit Prüfung der halben Restnutzungsdauer und spätere Zuschreibung ist eine der häufigsten Rechenaufgaben zum Jahresabschluss.',
  loesungen=[
   L('Beispiel: Maschine 48.000 € (Teilwert und Zuschreibung)',
     'AK 48.000 € (Januar 23), Nutzungsdauer 8 Jahre. Im Jahr 24 sinkt der Wert auf 15.000 €. 2026 steigt er wieder auf 19.000 €.',
     '**31.12.24**\n- Vorläufiger Buchwert: 48.000 € − 2 × 6.000 € = 36.000 €\n- Restnutzungsdauer 6 Jahre, halb = 3 Jahre → planmäßig 36.000 € − 3 × 6.000 € = 18.000 €\n- 15.000 € < 18.000 € → **dauerhaft**\n- AfA 6.000 € und außerplanmäßige Abschreibung 21.000 € an Maschinen → Buchwert 15.000 €; Gewinn −27.000 €. Handelsbilanz Pflicht, Steuerbilanz Wahlrecht.\n**2025**: AfA 15.000 € : 6 = 2.500 € → Buchwert 12.500 €\n**31.12.26**\n- Buchwert nach AfA: 10.000 €\n- Fortgeführte AK: 48.000 € − 4 × 6.000 € = 24.000 €\n- Zuschreibung auf 19.000 € (unter 24.000 €): **9.000 €** – Maschinen an Erträge aus Zuschreibungen\n- Gewinn 2026: −2.500 € + 9.000 € = +6.500 €'),
   L('Übung 11: EDV-Anlage',
     'AK 21.000 € (Januar 23), Nutzungsdauer 5 Jahre. Im Jahr 25 sinkt der Wert auf a) 2.000 €, b) 7.000 €.',
     '- AfA 4.200 € pro Jahr; vorläufiger Buchwert 31.12.25: 21.000 € − 3 × 4.200 € = 8.400 €\n- Restnutzungsdauer 2 Jahre, halb = 1 Jahr → planmäßig 4.200 €\n- **a)** 2.000 € < 4.200 € → dauerhaft. AfA 4.200 € und außerplanmäßige Abschreibung 6.400 € → Buchwert 2.000 €. Gewinn −10.600 € in Handels- und Steuerbilanz.\n- **b)** 7.000 € > 4.200 € → nicht dauerhaft. Nur AfA 4.200 € → Buchwert 4.200 €. Gewinn −4.200 €.'),
   L('Übung 12: Lkw',
     'AK 250.000 € (15.01.18), Nutzungsdauer 10 Jahre. Im Jahr 24 sinkt der Wert auf 30.000 €.',
     '- AfA 25.000 € pro Jahr; vorläufiger Buchwert 31.12.24: 250.000 € − 7 × 25.000 € = 75.000 €\n- Restnutzungsdauer 3 Jahre, halb = 1,5 Jahre → planmäßig 75.000 € − 37.500 € = 37.500 €\n- 30.000 € < 37.500 € → dauerhaft: AfA 25.000 € und außerplanmäßige Abschreibung 45.000 € → **Buchwert 31.12.24: 30.000 €**, Gewinn −70.000 €\n- 2025: AfA 30.000 € : 3 = 10.000 € → **Buchwert 31.12.25: 20.000 €**, Gewinn −10.000 €'),
   L('Übung 13: Maschine 43.000 €',
     'AK 43.000 € (Januar 22), Nutzungsdauer 10 Jahre. Im Jahr 23 sinkt der Teilwert auf 12.000 €. a) dauerhaft? b) Buchung 31.12.23 c) AfA 2024 d) 2025 steigt der Wert auf 15.000 €.',
     '- **a)** Vorläufiger Buchwert 31.12.23: 43.000 € − 2 × 4.300 € = 34.400 €. Restnutzungsdauer 8, halb 4 → planmäßig 17.200 €. 12.000 € < 17.200 € → **dauerhaft**.\n- **b)** AfA 4.300 € und außerplanmäßige Abschreibung 22.400 € → Buchwert 12.000 €. Gewinn −26.700 €.\n- **c)** AfA 2024: 12.000 € : 8 = 1.500 € → Buchwert 10.500 €.\n- **d)** AfA 2025: 1.500 € → 9.000 €. Fortgeführte AK: 43.000 € − 4 × 4.300 € = 25.800 €. Zuschreibung auf 15.000 €: **6.000 €**. Buchwert 31.12.25: 15.000 €. Gewinn 2025: +4.500 €.'),
   L('Übung 14: Maschine einer GmbH',
     'AK 64.000 € (Januar 21), Nutzungsdauer 8 Jahre. 2023 sinkt der Wert auf 15.000 €. 2025 fällt der Grund weg, der Wert steigt auf 27.000 €.',
     '- 31.12.23: vorläufiger Buchwert 40.000 €; Restnutzungsdauer 5, halb 2,5 → planmäßig 20.000 €; 15.000 € < 20.000 € → dauerhaft. AfA 8.000 € und außerplanmäßige Abschreibung 25.000 € → **Buchwert 15.000 €**, Gewinn −33.000 €.\n- 31.12.24: AfA 15.000 € : 5 = 3.000 € → **Buchwert 12.000 €**, Gewinn −3.000 €.\n- 31.12.25: AfA 3.000 € → 9.000 €. Fortgeführte AK: 64.000 € − 5 × 8.000 € = 24.000 €. Der Wert von 27.000 € liegt darüber → Zuschreibung nur bis 24.000 €: **15.000 €**. **Buchwert 24.000 €**, Gewinn +12.000 €.')
  ]),
 G6: dict(
  ueberblick='Wer bilanziert, ordnet Aufwand und Ertrag dem Jahr zu, zu dem sie wirtschaftlich gehören. Fließt das Geld vor dem Stichtag, die Leistung kommt aber danach, bildet man einen Rechnungsabgrenzungsposten (transitorisch: aktiv bei Ausgaben, passiv bei Einnahmen). Fließt das Geld erst nach dem Stichtag, gehört der Vorgang aber ins alte Jahr, bucht man eine sonstige Forderung oder sonstige Verbindlichkeit (antizipativ).',
  achten=[
   '1. Zeitraum der Leistung bestimmen und den Betrag pro Monat ausrechnen.',
   '2. Welcher Teil gehört ins alte Jahr, welcher ins neue?',
   '3. Geld schon geflossen? Ausgabe → ARAP, Einnahme → PRAP. Geld fließt erst später? Ertrag → sonstige Forderung, Aufwand → sonstige Verbindlichkeit.',
   '4. Buchungssätze für das alte Jahr (Stichtag) und für das neue Jahr (Auflösung oder Zahlung) angeben.',
   '5. Zu jeder Buchung Gewinn- und Bilanzauswirkung nennen.'
  ],
  fallen=[
   'Merksatz: ARAP = „Ausgabe jetzt, Aufwand später“. PRAP = „Einnahme jetzt, Ertrag später“.',
   'Sonstige Forderung/Verbindlichkeit: „Ertrag/Aufwand jetzt, Zahlung später“.',
   'Die Vorsteuer wird nicht abgegrenzt – sie ist mit Rechnung und Zahlung sofort abziehbar.',
   'Steuerlich darf der RAP bei Beträgen bis 800 € wegfallen (§ 5 Abs. 5 Satz 2 EStG) – nur einheitlich für alle Fälle.',
   'Monate sauber zählen: Dezember bis Februar sind 3 Monate, April bis Dezember 9 Monate.'
  ],
  pruefung='hoch',
  pruefungText='Zeitliche Abgrenzung mit Buchungen zum Stichtag und im Folgejahr gehört zu fast jeder Klausur und Abschlussprüfung im Rechnungswesen.',
  loesungen=[
   L('Beispiele aus dem Skript',
     'a) Kfz-Versicherung 1.800 € für 2026, bezahlt am 18.12.25. b) Spedition erhält am 30.11.25 Zinsen 5.700 € für ein Vierteljahr im Voraus. c) Miete 1.800 € für 01.11.25–30.04.26, Eingang im Januar 2026. d) Pacht 3.600 € für Oktober 25 bis März 26, Zahlung am 01.04.26.',
     '- **a)** 18.12.: Kfz-Versicherung 1.800 € an Bank. 31.12.: **ARAP 1.800 €** an Kfz-Versicherung. Gewinn 2025: 0 €; 2026 Auflösung: Kfz-Versicherung an ARAP, Gewinn −1.800 €.\n- **b)** 1.900 € pro Monat, Dezember gehört zu 2025. 30.11.: Bank an Zinserträge 5.700 €. 31.12.: Zinserträge an **PRAP 3.800 €**. Gewinn 2025 +1.900 €, 2026 +3.800 €.\n- **c)** 300 € pro Monat, November und Dezember = 600 €. 31.12.: **sonstige Vermögensgegenstände 600 €** an Mieterträge. Januar: Bank 1.800 € an sonstige Vermögensgegenstände 600 € und Mieterträge 1.200 €.\n- **d)** 600 € pro Monat, Oktober bis Dezember = 1.800 €. 31.12.: Pachtaufwand an **sonstige Verbindlichkeiten 1.800 €**. 01.04.26: sonstige Verbindlichkeiten 1.800 € und Pachtaufwand 1.800 € an Bank 3.600 €.'),
   L('Übung 1 und 2: Vorauszahlungen',
     '1) Zinsen 800 € für Dezember 25 bis März 26, im Dezember im Voraus bezahlt. 2) Versicherung 6.000 € für Dezember bis Mai, bezahlt im November 2025.',
     '- **1)** 200 € pro Monat. Dezember: Zinsaufwand 800 € an Bank. 31.12.: **ARAP 600 €** an Zinsaufwand. Gewinn 2025 −200 €, 2026 −600 €.\n- **2)** 1.000 € pro Monat. November: Versicherungen 6.000 € an Bank. 31.12.: **ARAP 5.000 €** an Versicherungen. Gewinn 2025 −1.000 €, 2026 −5.000 €.'),
   L('Übung 3 und 4: Zinsen aus Darlehen',
     '3) Darlehen 15.000 € ab 01.08.25 zu 4 %, Zinsen vierteljährlich im Voraus; am 02.11.25 kommt die Zahlung für das zweite Vierteljahr. 4) Darlehen 20.000 € ab 01.08.25 zu 6 %, Zinsen monatlich nachträglich zum Monatsersten.',
     '- **3)** 15.000 € × 4 % = 600 € im Jahr = 50 € pro Monat; zweites Vierteljahr = November bis Januar = 150 €. 02.11.: Bank an Zinserträge 150 €. 31.12.: Zinserträge an **PRAP 50 €**. Gewinn 2025 +100 €, 2026 +50 €.\n- **4)** 20.000 € × 6 % : 12 = 100 € pro Monat. Die Dezemberzinsen kommen im Januar: 31.12.: **sonstige Vermögensgegenstände 100 €** an Zinserträge. Januar: Bank an sonstige Vermögensgegenstände 100 €. Gewinn 2025 +100 €, 2026 0 €.',
     'Steuerlich dürfte der PRAP von 50 € wegfallen (§ 5 Abs. 5 Satz 2 EStG), handelsrechtlich nicht.'),
   L('Übung 5: Zinsen nachträglich',
     'Darlehen 40.000 €, jährliche Zinsen 1.800 €, nächste Zahlung am 31.03.26.',
     '- 1.800 € : 12 = 150 € pro Monat; April bis Dezember 2025 = 9 Monate = 1.350 €\n- 31.12.25: Zinsaufwand an **sonstige Verbindlichkeiten 1.350 €** – Gewinn −1.350 €, Bilanzverlängerung\n- 31.03.26: sonstige Verbindlichkeiten 1.350 € und Zinsaufwand 450 € an Bank 1.800 € – Gewinn 2026 −450 €'),
   L('Übung 6: Miete im Voraus bezahlt',
     'Die Dezember- und Januarmiete von 2.000 € + USt wurde Ende Dezember per Bank bezahlt. Eine ordnungsgemäße Rechnung liegt vor.',
     'Annahme: 2.000 € für beide Monate, also 1.000 € pro Monat.\n- Ende Dezember: Mietaufwand 2.000 € und Vorsteuer 380 € an Bank 2.380 €\n- 31.12.: **ARAP 1.000 €** an Mietaufwand – Gewinn 2025 −1.000 €\n- 2026: Mietaufwand an ARAP 1.000 € – Gewinn 2026 −1.000 €\n- Die Vorsteuer bleibt komplett im Dezember (Rechnung und Zahlung liegen vor).',
     'Ist mit 2.000 € die Miete je Monat gemeint, ist der ARAP 2.000 € groß (und die Vorsteuer 760 €). Steuerlich ist der ARAP in beiden Fällen Pflicht, weil der Betrag über 800 € liegt.')
  ]),
}

QUIZ = [
 ('Wer muss keinen Jahresabschluss nach HGB aufstellen?', ['Eine GmbH mit 300.000 € Umsatz', 'Ein Einzelkaufmann mit 600.000 € Umsatz und 50.000 € Gewinn in zwei Jahren', 'Eine OHG mit 400.000 € Umsatz', 'Eine AG'], 1, 1, '§ 241a HGB befreit nur Einzelkaufleute unter 800.000 € Umsatz und 80.000 € Jahresüberschuss.'),
 ('Was gehört bei einer GmbH zum Jahresabschluss?', ['Bilanz und GuV', 'Bilanz, GuV und Lagebericht', 'Bilanz, GuV und Anhang', 'Nur die Bilanz'], 2, 1, '§ 264 Abs. 1 HGB: Bilanz, GuV und Anhang. Der Lagebericht ist kein Teil des Jahresabschlusses.'),
 ('Welcher Grundsatz verlangt, dass die Eröffnungsbilanz der Schlussbilanz des Vorjahres entspricht?', ['Stetigkeit', 'Bilanzidentität', 'Einzelbewertung', 'Vorsicht'], 1, 1, '§ 252 Abs. 1 Nr. 1 HGB.'),
 ('Wein im Lager (AK 8.000 €) ist jetzt 30.000 € wert. Wie wird er bilanziert?', ['30.000 €', '19.000 €', '8.000 €', 'Wahlrecht zwischen 8.000 € und 30.000 €'], 2, 2, 'Anschaffungskostenprinzip und Realisationsprinzip: höchstens 8.000 €.'),
 ('Welche Kosten gehören zu den Anschaffungskosten eines Pkw?', ['Tankfüllung', 'Kfz-Versicherung', 'Zulassung und Überführung', 'Kfz-Steuer'], 2, 1, 'Nur Kosten, um den Pkw zu erwerben und betriebsbereit zu machen.'),
 ('Ein Computer kostet 800 € netto, dazu 20 € Versand, 2 % Skonto auf 800 €. Ist er ein GWG?', ['Ja, Kaufpreis 800 €', 'Nein, die Anschaffungskosten sind 804 €', 'Ja, nach Skonto 784 €', 'Computer sind nie GWG'], 1, 2, 'GWG-Grenze 800 € gilt für die gesamten Anschaffungskosten: 800 − 16 + 20 = 804 €.'),
 ('Wohin gehört der Notar für die Eintragung einer Grundschuld?', ['Anschaffungskosten Grund und Boden', 'Anschaffungskosten Gebäude', 'Sofort Aufwand (Finanzierungskosten)', 'Aktiver Rechnungsabgrenzungsposten'], 2, 2, 'Kosten der Finanzierung sind keine Anschaffungskosten.'),
 ('Welche Kosten dürfen nie in die Herstellungskosten?', ['Materialgemeinkosten', 'Allgemeine Verwaltungskosten', 'Vertriebskosten', 'Sondereinzelkosten der Fertigung'], 2, 1, '§ 255 Abs. 2 Satz 4 HGB: Vertriebs- und Forschungskosten sind verboten.'),
 ('Was ist die Wertobergrenze der Herstellungskosten?', ['Wertuntergrenze + Verwaltungskosten', 'Wertuntergrenze + Vertriebskosten', 'Selbstkosten + Gewinn', 'Nur Einzelkosten'], 0, 2, 'Die Wahlbestandteile (Verwaltung, soziale Kosten) führen zur Obergrenze.'),
 ('Mit welcher Buchung wird eine selbst gebaute Maschine aktiviert?', ['Maschinen an Bank', 'Maschinen an andere aktivierte Eigenleistungen', 'Materialaufwand an Maschinen', 'Maschinen an Umsatzerlöse'], 1, 2, 'Das Ertragskonto gleicht den schon gebuchten Aufwand aus.'),
 ('Die Steuerbilanz bezieht die Verwaltungskosten nicht ein, die Handelsbilanz schon. Ist das erlaubt?', ['Ja, immer', 'Nein, das Wahlrecht muss übereinstimmen', 'Nur bei Kapitalgesellschaften', 'Nur bei Gebäuden'], 1, 3, '§ 6 Abs. 1 Nr. 1b EStG: Übereinstimmungsvorbehalt.'),
 ('Wann ist eine Wertminderung beim abnutzbaren Anlagevermögen dauerhaft?', ['Wenn sie mehr als 10 % beträgt', 'Wenn der Wert mindestens für die halbe Restnutzungsdauer unter dem planmäßigen Restbuchwert liegt', 'Wenn sie über ein Jahr dauert', 'Immer'], 1, 2, 'Prüfung nach dem BMF-Schreiben zur Teilwertabschreibung.'),
 ('Vorübergehende Wertminderung einer Maschine – was gilt in der Handelsbilanz?', ['Abschreibungspflicht', 'Abschreibungswahlrecht', 'Abschreibungsverbot', 'Zuschreibungspflicht'], 2, 2, '§ 253 Abs. 3 Satz 5 HGB: außerplanmäßig nur bei dauerhafter Wertminderung (Ausnahme Finanzanlagen).'),
 ('Bis zu welchem Wert darf nach einer Teilwertabschreibung höchstens zugeschrieben werden?', ['Bis zum Marktwert', 'Bis zu den ursprünglichen Anschaffungskosten', 'Bis zu den fortgeführten Anschaffungskosten', 'Gar nicht'], 2, 2, '§ 253 Abs. 5 HGB, § 6 Abs. 1 Nr. 1 Satz 4 EStG.'),
 ('Versicherung für Dezember bis Mai im November bezahlt. Was entsteht am 31.12.?', ['Passiver RAP', 'Aktiver RAP', 'Sonstige Forderung', 'Sonstige Verbindlichkeit'], 1, 1, 'Ausgabe jetzt, Aufwand später = ARAP.'),
 ('Zinsen für Dezember werden erst im Januar bezahlt. Was bucht der Schuldner am 31.12.?', ['ARAP', 'PRAP', 'Sonstige Verbindlichkeit', 'Sonstige Forderung'], 2, 1, 'Aufwand jetzt, Zahlung später = sonstige Verbindlichkeit.'),
 ('Miete für Dezember bis Februar im Dezember erhalten. Was entsteht beim Vermieter?', ['ARAP', 'PRAP', 'Sonstige Forderung', 'Rückstellung'], 1, 1, 'Einnahme jetzt, Ertrag später = PRAP.'),
 ('Bis zu welchem Betrag darf steuerlich auf einen Rechnungsabgrenzungsposten verzichtet werden?', ['250 €', '800 €', '1.000 €', 'Gar nicht'], 1, 3, '§ 5 Abs. 5 Satz 2 EStG – einheitlich für alle Fälle.'),
]

KARTEN = [
 ('Was gehört zum Jahresabschluss eines Einzelunternehmens?', 'Bilanz und Gewinn- und Verlustrechnung (§ 242 Abs. 3 HGB).'),
 ('Was gehört zusätzlich zum Jahresabschluss einer GmbH?', 'Der Anhang (§ 264 Abs. 1 HGB). Mittelgroße und große GmbHs erstellen zusätzlich einen Lagebericht, der aber kein Teil des Jahresabschlusses ist.'),
 ('Was ist das Maßgeblichkeitsprinzip?', 'Die Handelsbilanz ist Grundlage der Steuerbilanz (§ 5 Abs. 1 EStG), außer das Steuerrecht schreibt etwas anderes vor.'),
 ('Die 6 Grundsätze aus § 252 Abs. 1 HGB?', 'Bilanzidentität, Unternehmensfortführung, Einzelbewertung/Stichtag, Vorsicht (Realisation, Imparität), Periodenabgrenzung, Stetigkeit.'),
 ('Realisationsprinzip vs. Imparitätsprinzip?', 'Gewinne erst zeigen, wenn sie verwirklicht sind. Verluste schon zeigen, wenn sie drohen.'),
 ('Schema der Anschaffungskosten?', 'Anschaffungspreis + Nebenkosten + nachträgliche AK − Preisminderungen = Anschaffungskosten.'),
 ('Gehört die Vorsteuer zu den Anschaffungskosten?', 'Nein, abziehbare Vorsteuer nie (§ 9b Abs. 1 EStG).'),
 ('Was ist ein GWG?', 'Bewegliches, selbstständig nutzbares Anlagegut bis 800 € netto – darf sofort abgeschrieben werden (§ 6 Abs. 2 EStG).'),
 ('Pflichtbestandteile der Herstellungskosten?', 'Material- und Fertigungseinzelkosten, Sondereinzelkosten der Fertigung, angemessene Material- und Fertigungsgemeinkosten.'),
 ('Was ist bei den Herstellungskosten verboten?', 'Vertriebskosten, Forschungskosten und ein Gewinnzuschlag.'),
 ('Was sind „Anlagen im Bau“?', 'Selbst erstellte Anlagen, die am Stichtag noch nicht fertig sind. Keine AfA, bei Fertigstellung umbuchen.'),
 ('Wie prüft man eine dauerhafte Wertminderung?', 'Teilwert < Buchwert nach der halben Restnutzungsdauer → dauerhaft.'),
 ('Folge dauerhafter Wertminderung in HB und SB?', 'Handelsbilanz: Pflicht zur außerplanmäßigen Abschreibung. Steuerbilanz: Wahlrecht zur Teilwertabschreibung.'),
 ('Was ist eine Zuschreibung?', 'Wertaufholung, wenn der Grund für die Abschreibung wegfällt – höchstens bis zu den fortgeführten Anschaffungskosten. Ertrag.'),
 ('ARAP oder PRAP?', 'ARAP: Ausgabe jetzt, Aufwand später. PRAP: Einnahme jetzt, Ertrag später (§ 250 HGB).'),
 ('Sonstige Forderung oder sonstige Verbindlichkeit?', 'Sonstige Forderung: Ertrag jetzt, Geld später. Sonstige Verbindlichkeit: Aufwand jetzt, Zahlung später.'),
]

RAETSEL = [
 ('ANHANG', 'Teil des Jahresabschlusses einer GmbH, erläutert Bilanz und GuV'),
 ('LAGEBERICHT', 'Beschreibt Geschäftsverlauf, Chancen und Risiken – kein Teil des Jahresabschlusses'),
 ('INVENTUR', 'Bestandsaufnahme zum Abschlussstichtag'),
 ('MASSGEBLICHKEIT', 'Prinzip: Die Handelsbilanz ist Grundlage der Steuerbilanz'),
 ('STETIGKEIT', 'Grundsatz: Bewertungsmethoden werden beibehalten'),
 ('IMPARITAET', 'Prinzip: drohende Verluste zeigen, Gewinne erst bei Verwirklichung'),
 ('SKONTO', 'Nachträgliche Preisminderung bei schneller Zahlung'),
 ('NEBENKOSTEN', 'Fracht, Montage, Zulassung erhöhen die Anschaffungskosten'),
 ('VERTRIEBSKOSTEN', 'Dürfen nie in die Herstellungskosten'),
 ('TEILWERT', 'Steuerlicher Wert, den ein Betriebserwerber für ein einzelnes Wirtschaftsgut zahlen würde'),
 ('ZUSCHREIBUNG', 'Wertaufholung nach Wegfall des Abschreibungsgrundes'),
 ('ABGRENZUNG', 'Zuordnung von Aufwand und Ertrag zum richtigen Geschäftsjahr'),
]


def baue():
    pruefe()
    themen_info = {}
    for g, d in INFO.items():
        d = dict(d)
        d['quelle'] = 'Mitschrift LF 10'
        themen_info[g] = d
    return {
        'id': 'lf10', 'nummer': 10,
        'titel': 'Jahresabschlüsse erstellen und abschließen',
        'beschreibung': 'Bilanzierungspflicht, Bewertungsgrundsätze, Anschaffungs- und Herstellungskosten, Teilwert und Zuschreibung sowie zeitliche Abgrenzung.',
        'farbe': '#15803d',
        'lernziele': [
            'Ich kann prüfen, wer einen Jahresabschluss aufstellen muss und was dazugehört.',
            'Ich kann die Grundsätze aus § 252 HGB auf Fälle anwenden.',
            'Ich kann Anschaffungs- und Herstellungskosten berechnen und buchen.',
            'Ich kann eine dauerhafte Wertminderung prüfen und Zuschreibungen berechnen.',
            'Ich kann Rechnungsabgrenzungsposten, sonstige Forderungen und Verbindlichkeiten bilden.',
        ],
        'themen': [],
        'karten': [{'vorne': v, 'hinten': h} for v, h in KARTEN],
        'quiz': [{'frage': f, 'antworten': a, 'richtig': r, 'stufe': s, 'erklaerung': e} for f, a, r, s, e in QUIZ],
        'raetsel': [{'wort': w, 'hinweis': h} for w, h in RAETSEL],
        'paragrafen': [{'gruppe': g, 'ref': r, 'text': t} for g, r, t in P],
        'themenInfo': themen_info,
    }


def eintragen():
    s = open(DATA, encoding='utf8').read()
    i = s.index('window.LERN_DATEN = ') + len('window.LERN_DATEN = ')
    daten = json.loads(s[i:].rstrip().rstrip(';'))
    lfs = [l for l in daten['lernfelder'] if l['id'] != 'lf10']
    neu = baue()
    pos = next((k for k, l in enumerate(lfs) if isinstance(l.get('nummer'), int) and l['nummer'] > 10), len(lfs))
    lfs.insert(pos, neu)
    daten['lernfelder'] = lfs
    open(DATA, 'w', encoding='utf8').write(s[:i] + json.dumps(daten, ensure_ascii=False, indent=2) + ';\n')
    print('lf10 eingetragen:', len(neu['paragrafen']), 'Paragrafen,', len(neu['quiz']), 'Quizfragen,', len(neu['karten']), 'Karten,',
          len(neu['raetsel']), 'Rätselwörter,', sum(len(v['loesungen']) for v in neu['themenInfo'].values()), 'Musterlösungen')


if __name__ == '__main__':
    eintragen()
