// Prüfungssimulator: Aufgabenbank. Erzeugt aus tools/pruefung/*.py – nicht von Hand ändern.
// Rechtsstand 2025/2026. Aufgaben sind angelehnt an Prüfungen der StBK Niedersachsen oder eigene Aufgaben im Prüfungsstil, keine Originalprüfungen.
window.PRUEFUNG_BEREICHE = {
 "zp-ao": {
  "titel": "Arbeitsabläufe organisieren",
  "kurz": "Arbeitsabläufe",
  "pruefung": "zp",
  "minuten": 45,
  "teil": "Zwischenprüfung, § 9"
 },
 "zp-stb": {
  "titel": "Steuererklärungen vorbereiten und Buchhaltungen bearbeiten",
  "kurz": "Steuer & Buchhaltung",
  "pruefung": "zp",
  "minuten": 75,
  "teil": "Zwischenprüfung, § 10"
 },
 "ap-stb": {
  "titel": "Sachverhalte steuerrechtlich beurteilen und in Steuererklärungen bearbeiten",
  "kurz": "Steuerwesen",
  "pruefung": "ap",
  "minuten": 130,
  "teil": "Abschlussprüfung, § 14, Gewicht 35 %"
 },
 "ap-fibu": {
  "titel": "Sachverhalte im Zusammenhang mit Finanzbuchhaltungen, Entgeltabrechnungen und Jahresabschlüssen bearbeiten",
  "kurz": "Rechnungswesen",
  "pruefung": "ap",
  "minuten": 110,
  "teil": "Abschlussprüfung, § 15, Gewicht 30 %"
 },
 "ap-wiso": {
  "titel": "Wirtschafts- und Sozialkunde",
  "kurz": "WiSo",
  "pruefung": "ap",
  "minuten": 60,
  "teil": "Abschlussprüfung, § 17, Gewicht 10 %"
 },
 "ap-ber": {
  "titel": "Mandantinnen- und Mandantenberatung mitgestalten",
  "kurz": "Mandantenberatung",
  "pruefung": "ap",
  "minuten": 30,
  "vorbereitung": 15,
  "teil": "Abschlussprüfung, § 16, Gewicht 25 %, Gesprächssimulation"
 }
};
window.PRUEFUNG_FRAGEN = [
{
"id": "zp-ao-01",
"bereich": "zp-ao",
"thema": "Abgabefristen",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 7,
"sachverhalt": "Jonas Brehm war bis Januar 2025 angestellter Elektroniker. Am 1. Februar 2025 hat er ein eigenes Elektrogeschäft eröffnet. In steuerlichen Angelegenheiten lässt er sich von Ihrer Kanzlei vertreten.",
"aufgabe": "Erläutern Sie, bis zu welchem Zeitpunkt die Einkommensteuererklärung 2025 abgegeben werden muss. Gehen Sie auch darauf ein, welche Frist ohne steuerliche Beratung gelten würde.",
"loesung": "**Ohne Beratung:** Die Erklärung ist spätestens sieben Monate nach Ablauf des Kalenderjahres abzugeben, also bis **31.07.2026** (§ 149 Abs. 2 Satz 1 AO).\n**Mit Beratung durch die Kanzlei:** Die Frist endet am letzten Tag des Monats Februar des zweiten auf das Steuerjahr folgenden Kalenderjahres (§ 149 Abs. 3 AO), also am 28.02.2027.\nDer 28.02.2027 ist ein **Sonntag**. Die Frist endet deshalb erst mit Ablauf des nächsten Werktags, **Montag, 01.03.2027** (§ 108 Abs. 3 AO).\nDas Finanzamt kann die Erklärung im Einzelfall vorab anfordern (§ 149 Abs. 4 AO); dann gilt eine Frist von vier Monaten nach Bekanntgabe der Anforderung.",
"schema": [
[
1,
"Ohne Beratung: 31.07.2026 (§ 149 Abs. 2 AO)"
],
[
2,
"Mit Beratung: letzter Tag im Februar des zweiten Folgejahres (§ 149 Abs. 3 AO)"
],
[
1,
"Datum 28.02.2027 genannt"
],
[
2,
"Sonntag erkannt, Fristende Montag 01.03.2027 (§ 108 Abs. 3 AO)"
],
[
1,
"Vorabanforderung durch das Finanzamt möglich"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-02",
"bereich": "zp-ao",
"thema": "Einkommensteuer-Vorauszahlungen",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 5,
"sachverhalt": "Der Steuerberater teilt Jonas Brehm (Elektrogeschäft seit 01.02.2025) mit, dass er künftig Einkommensteuer-Vorauszahlungen leisten muss.",
"aufgabe": "Nennen Sie die Fälligkeitstermine der Vorauszahlungen und erläutern Sie kurz, wie deren Höhe festgelegt wird.",
"loesung": "Die Vorauszahlungen sind vierteljährlich fällig am **10. März, 10. Juni, 10. September und 10. Dezember** (§ 37 Abs. 1 EStG).\nDas Finanzamt setzt sie durch **Vorauszahlungsbescheid** fest. Grundlage ist die Einkommensteuer, die sich bei der letzten Veranlagung ergeben hat, bzw. bei einem Gründer die voraussichtliche Steuer nach seinen Angaben (§ 37 Abs. 3 EStG).",
"schema": [
[
1,
"10. März"
],
[
1,
"10. Juni"
],
[
1,
"10. September"
],
[
1,
"10. Dezember"
],
[
1,
"Festsetzung durch Vorauszahlungsbescheid nach voraussichtlicher Steuer (§ 37 Abs. 3 EStG)"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-03",
"bereich": "zp-ao",
"thema": "Dauerfristverlängerung",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Jonas Brehm muss seine Umsatzsteuer-Voranmeldungen monatlich abgeben. Er möchte ab 2026 eine Dauerfristverlängerung beantragen. Seine Umsatzsteuer-Vorauszahlungen für Februar bis Dezember 2025 (elf Monate) betrugen zusammen 22.000 EUR. Er hat keine Dauerfristverlängerung im Jahr 2025 gehabt.",
"aufgabe": "a) Erläutern Sie, bis wann der Antrag gestellt werden muss.\nb) Erläutern Sie, welche weitere Verpflichtung mit dem Antrag verbunden ist, und berechnen Sie den Betrag.",
"loesung": "**a)** Der Antrag ist bis zu dem Zeitpunkt zu stellen, an dem die erste Voranmeldung des Jahres abzugeben ist, für die die Verlängerung gelten soll (§ 48 Abs. 1 UStDV). Die Voranmeldung Januar 2026 ist am 10.02.2026 fällig, also muss der Antrag bis **10.02.2026** gestellt werden.\n**b)** Monatszahler müssen eine **Sondervorauszahlung** anmelden und entrichten (§ 47 Abs. 1 UStDV). Sie beträgt ein Elftel der Vorauszahlungen des Vorjahres.\nWurde die Tätigkeit nur in einem Teil des Vorjahres ausgeübt, ist die Summe in eine Jahressumme umzurechnen (§ 47 Abs. 2 UStDV):\n- 22.000 EUR : 11 Monate × 12 Monate = 24.000 EUR\n- Sondervorauszahlung: 24.000 EUR : 11 = **2.181,82 EUR**\nSie ist bis 10.02.2026 zu zahlen und wird auf die Vorauszahlung für Dezember 2026 angerechnet (§ 48 Abs. 4 UStDV). Danach verlängern sich Abgabe- und Zahlungsfrist jeweils um einen Monat (§ 46 UStDV).",
"schema": [
[
2,
"Antragsfrist 10.02.2026"
],
[
1,
"Begründung: Termin der Januar-Voranmeldung (§ 48 Abs. 1 UStDV)"
],
[
2,
"Sondervorauszahlung 1/11 der Vorjahresvorauszahlungen (§ 47 Abs. 1 UStDV)"
],
[
2,
"Umrechnung auf das volle Jahr: 24.000 EUR (§ 47 Abs. 2 UStDV)"
],
[
1,
"Ergebnis 2.181,82 EUR"
],
[
1,
"Anrechnung auf die Dezember-Vorauszahlung"
],
[
1,
"Wirkung: Fristen verlängern sich um einen Monat"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-04",
"bereich": "zp-ao",
"thema": "Befugnis zur Hilfeleistung in Steuersachen",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Die Auszubildende Lea Krüger wird von einem Bekannten gefragt, ob sie ihm kostenlos seine Einkommensteuererklärung erstellt. Außerdem möchte sie die Steuererklärung ihrer Eltern machen – ebenfalls ohne Bezahlung.",
"aufgabe": "a) Erläutern Sie, ob Lea die Steuererklärung für den Bekannten erstellen darf.\nb) Wie ist der Fall bei ihren Eltern zu beurteilen?",
"loesung": "**a)** Hilfeleistung in Steuersachen darf **geschäftsmäßig** nur von dazu befugten Personen ausgeübt werden, z. B. Steuerberatern (§§ 2, 3 StBerG). Das gilt ausdrücklich auch für **unentgeltliche** und nebenberufliche Tätigkeiten (§ 2 Satz 2 StBerG). Geschäftsmäßig handelt, wer selbständig und mit Wiederholungsabsicht tätig wird.\nLea ist nicht befugt. Eine solche Hilfeleistung ist verboten (§ 5 StBerG) und kann als Ordnungswidrigkeit mit Bußgeld geahndet werden (§ 160 StBerG). Sie darf die Erklärung also nicht erstellen.\n**b)** Erlaubt ist die unentgeltliche Hilfeleistung für **Angehörige** im Sinne des § 15 AO (§ 6 Nr. 2 StBerG). Eltern sind Verwandte in gerader Linie und damit Angehörige (§ 15 Abs. 1 Nr. 3 AO). Lea darf die Erklärung ihrer Eltern also kostenlos erstellen.",
"schema": [
[
2,
"Nur befugte Personen dürfen geschäftsmäßig helfen (§§ 2, 3 StBerG)"
],
[
2,
"Auch unentgeltliche Hilfe ist erfasst"
],
[
1,
"Lea ist nicht befugt – verboten (§ 5 StBerG)"
],
[
1,
"Ordnungswidrigkeit / Bußgeld (§ 160 StBerG)"
],
[
2,
"Ausnahme: unentgeltlich für Angehörige (§ 6 Nr. 2 StBerG)"
],
[
2,
"Eltern sind Angehörige (§ 15 AO) – erlaubt"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-05",
"bereich": "zp-ao",
"thema": "Verschwiegenheit im Kanzleialltag",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Der Auszubildende Timo nimmt einen Anruf des Mandanten Carsten Kosel entgegen. Kosel berichtet aufgeregt, dass gerade eine unangemeldete Kassen-Nachschau des Finanzamts in seinem Café stattfindet, und will die Steuerberaterin sprechen. Timo läuft in den Besprechungsraum, in dem die Steuerberaterin mit einer anderen Mandantin spricht, und sagt laut: „Herr Kosel hat das Finanzamt im Laden und braucht sofort einen Rückruf!“",
"aufgabe": "a) Erläutern Sie, ob Timo richtig gehandelt hat.\nb) Beschreiben Sie, wie Timo hätte vorgehen sollen.",
"loesung": "**a)** Timo hat nicht richtig gehandelt.\n- Er hat gegen die **Verschwiegenheitspflicht** verstoßen. Sie gilt für die Steuerberaterin (§ 57 Abs. 1 StBerG) und für ihre Mitarbeiter (§ 62 StBerG). Schon die Tatsache, dass jemand Mandant ist, und erst recht eine Nachschau des Finanzamts sind geschützt.\n- Die unbefugte Weitergabe von Mandantengeheimnissen ist strafbar (§ 203 StGB) und verletzt den Datenschutz.\n- Außerdem stört er das Mandantengespräch und wirkt unprofessionell.\n**b)** Timo hätte eine **Gesprächsnotiz** schreiben sollen (Name, Rückrufnummer, Anliegen, Dringlichkeit, Uhrzeit) und sie der Steuerberaterin **diskret** übergeben, z. B. als Zettel ohne Inhalt für Dritte. Bei Eilbedürftigkeit hätte er einen anderen Berufsträger als Vertretung einschalten können. Dem Mandanten sagt er einen schnellen Rückruf zu.",
"schema": [
[
1,
"Nicht richtig gehandelt"
],
[
2,
"Verschwiegenheitspflicht verletzt (§ 57 / § 62 StBerG), auch das Mandatsverhältnis ist geschützt"
],
[
1,
"Strafbarkeit (§ 203 StGB) oder Datenschutz genannt"
],
[
1,
"Störung des laufenden Gesprächs"
],
[
2,
"Diskrete schriftliche Gesprächsnotiz mit Inhalt"
],
[
1,
"Vertretung oder schneller Rückruf organisiert"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-06",
"bereich": "zp-ao",
"thema": "Datenschutz beim Datentransport",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Die Steuerfachangestellte Saskia soll beim Mandanten die Buchführungsdaten des Quartals abholen, weil der Mandant keine elektronische Übermittlung möchte. Den verschlüsselten Kanzlei-USB-Stick hat sie vergessen. Sie speichert die Daten deshalb auf ihrem privaten, unverschlüsselten USB-Stick.",
"aufgabe": "Erläutern Sie, ob diese Vorgehensweise datenschutzrechtlich zu empfehlen ist, und schlagen Sie bessere Lösungen vor.",
"loesung": "Die Vorgehensweise ist **nicht zu empfehlen**.\n- Buchführungsdaten enthalten personenbezogene Daten (z. B. Kunden, Lieferanten, Mitarbeiter). Sie müssen so verarbeitet werden, dass ihre Sicherheit gewährleistet ist – Grundsatz der **Integrität und Vertraulichkeit** (Art. 5 Abs. 1 Buchst. f DSGVO).\n- Die Kanzlei muss geeignete **technische und organisatorische Maßnahmen** treffen, insbesondere Verschlüsselung (Art. 32 DSGVO).\n- Risiken: Verlust oder Diebstahl des Sticks, Schadsoftware vom privaten Gerät, keine Kontrolle über spätere Löschung, Daten verlassen den Verantwortungsbereich der Kanzlei.\n- Zusätzlich ist die Verschwiegenheitspflicht berührt (§ 57 StBerG, § 203 StGB).\n- Geht der Stick verloren, liegt eine Datenpanne vor, die binnen **72 Stunden** der Aufsichtsbehörde zu melden ist (Art. 33 DSGVO).\n**Besser:** den Kanzlei-Stick holen oder einen neuen Termin vereinbaren, die Daten verschlüsselt über ein Kanzleiportal (z. B. DATEV Unternehmen online) übertragen oder ausschließlich verschlüsselte Kanzlei-Hardware nutzen.",
"schema": [
[
1,
"Nicht zu empfehlen"
],
[
2,
"Integrität und Vertraulichkeit (Art. 5 DSGVO)"
],
[
2,
"Technisch-organisatorische Maßnahmen / Verschlüsselung (Art. 32 DSGVO)"
],
[
2,
"Mindestens zwei konkrete Risiken"
],
[
1,
"Meldepflicht bei Verlust binnen 72 Stunden (Art. 33 DSGVO)"
],
[
2,
"Sichere Alternativen genannt"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-07",
"bereich": "zp-ao",
"thema": "Einspruchsfrist berechnen",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 8,
"sachverhalt": "Der Einkommensteuerbescheid 2024 der Mandantin Petra Lindner trägt das Datum Montag, 2. Februar 2026. Er wurde an diesem Tag mit einfachem Brief zur Post gegeben. Frau Lindner meint, die Einspruchsfrist ende am 2. März 2026.",
"aufgabe": "Berechnen Sie das Ende der Einspruchsfrist und begründen Sie Ihre Lösung mit den gesetzlichen Vorschriften.",
"loesung": "Die Einspruchsfrist beträgt **einen Monat nach Bekanntgabe** des Bescheids (§ 355 Abs. 1 AO).\nEin per Post übermittelter Verwaltungsakt gilt am **vierten Tag nach der Aufgabe zur Post** als bekanntgegeben (§ 122 Abs. 2 Nr. 1 AO, seit 2025 vier statt drei Tage).\n- Aufgabe zur Post: Montag, 02.02.2026\n- Bekanntgabe: **Freitag, 06.02.2026** (Werktag, keine Verschiebung)\nDer Tag der Bekanntgabe wird nicht mitgerechnet (§ 108 Abs. 1 AO i. V. m. § 187 Abs. 1 BGB). Die Frist endet mit Ablauf des Tages im Folgemonat, der dieselbe Zahl trägt (§ 188 Abs. 2 BGB):\n- Fristende: **Freitag, 06.03.2026, 24 Uhr** – ein Werktag, also keine Verschiebung nach § 108 Abs. 3 AO.\nFrau Lindner irrt: Maßgeblich ist nicht das Bescheiddatum, sondern der Tag der Bekanntgabe.",
"schema": [
[
1,
"Einspruchsfrist ein Monat (§ 355 AO)"
],
[
2,
"Bekanntgabe am vierten Tag: 06.02.2026 (§ 122 Abs. 2 AO)"
],
[
1,
"Werktag – keine Verschiebung geprüft"
],
[
1,
"Berechnung nach §§ 187, 188 BGB"
],
[
2,
"Fristende 06.03.2026"
],
[
1,
"Bescheiddatum ist nicht maßgeblich – Mandantin irrt"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-08",
"bereich": "zp-ao",
"thema": "Fristenkontrolle organisieren",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "In Ihrer Kanzlei ist im letzten Jahr eine Einspruchsfrist versäumt worden. Die Kanzleileitung bittet Sie, Vorschläge für eine sichere Fristenkontrolle zu machen.",
"aufgabe": "Nennen und erläutern Sie drei Maßnahmen, mit denen die Kanzlei sicherstellt, dass keine Fristen versäumt werden.",
"loesung": "Mögliche Maßnahmen (drei genügen):\n- **Zentraler Fristenkalender** (digital): Jede Frist wird sofort beim Posteingang mit Eingangsdatum eingetragen; Bekanntgabetag und Fristende werden berechnet.\n- **Vorfristen** als Wiedervorlage, z. B. eine Woche vor Fristablauf, damit Zeit zum Handeln bleibt.\n- **Vier-Augen-Prinzip:** Eine Frist wird erst gelöscht, wenn die Erledigung (z. B. Einspruch versandt) nachgewiesen ist.\n- **Vertretungsregelung** bei Urlaub oder Krankheit, damit Fristen nicht liegen bleiben.\n- **Postausgangskontrolle** mit Nachweis (z. B. Sendeprotokoll, ELSTER-Übertragungsprotokoll).",
"schema": [
[
2,
"Erste Maßnahme mit Erläuterung"
],
[
2,
"Zweite Maßnahme mit Erläuterung"
],
[
2,
"Dritte Maßnahme mit Erläuterung"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-09",
"bereich": "zp-ao",
"thema": "Probezeit in der Ausbildung",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Im Ausbildungsvertrag der Auszubildenden Anja Seefeld vom 01.08.2025 ist eine Probezeit von sechs Monaten vereinbart.",
"aufgabe": "Erläutern Sie, ob die vereinbarte Probezeit zulässig ist, und was während der Probezeit für eine Kündigung gilt.",
"loesung": "Die Probezeit muss **mindestens einen Monat und darf höchstens vier Monate** betragen (§ 20 Satz 2 BBiG). Sechs Monate sind **unzulässig**.\nDie Vereinbarung ist insoweit nichtig, weil sie zuungunsten der Auszubildenden vom Gesetz abweicht (§ 25 BBiG). Die Probezeit beträgt höchstens vier Monate und endet am **30.11.2025**.\nWährend der Probezeit kann das Ausbildungsverhältnis von beiden Seiten **jederzeit ohne Einhalten einer Frist** gekündigt werden (§ 22 Abs. 1 BBiG), aber nur **schriftlich** (§ 22 Abs. 3 BBiG).",
"schema": [
[
2,
"Rahmen ein bis vier Monate (§ 20 BBiG)"
],
[
1,
"Sechs Monate unzulässig"
],
[
1,
"Höchstens vier Monate – Ende 30.11.2025"
],
[
2,
"Kündigung jederzeit ohne Frist, schriftlich (§ 22 Abs. 1, 3 BBiG)"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-10",
"bereich": "zp-ao",
"thema": "Fristlose Kündigung in der Ausbildung",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 12,
"sachverhalt": "Steuerberater Michael Schöne erfährt am Sonntag, 02.03.2025, dass seine Auszubildende Anja Seefeld Außenstehenden von der wirtschaftlichen Lage eines Mandanten erzählt hat. Die Probezeit ist abgelaufen. Mit Schreiben vom 21.03.2025 kündigt er ihr fristlos und nennt den Grund.",
"aufgabe": "a) Erläutern Sie, ob ein Grund für eine fristlose Kündigung vorliegt.\nb) Erläutern Sie, ob die Kündigung rechtswirksam ist.",
"loesung": "**a)** Nach der Probezeit kann der Ausbildende nur noch **aus einem wichtigen Grund ohne Kündigungsfrist** kündigen (§ 22 Abs. 2 Nr. 1 BBiG).\nAuszubildende müssen über Betriebs- und Geschäftsgeheimnisse Stillschweigen wahren (§ 13 Satz 2 Nr. 6 BBiG); für Mitarbeiter einer Steuerkanzlei gilt zusätzlich § 62 StBerG. Die Weitergabe von Mandanteninformationen ist ein **schwerer Vertrauensbruch** und grundsätzlich ein wichtiger Grund. Eine vorherige Abmahnung ist bei so schweren Verstößen in der Regel entbehrlich.\n**b)** Die Kündigung muss schriftlich mit Angabe der Gründe erfolgen (§ 22 Abs. 3 BBiG) – das ist erfüllt.\nSie ist aber **unwirksam**, wenn die zugrunde liegenden Tatsachen dem Kündigenden länger als **zwei Wochen** bekannt sind (§ 22 Abs. 4 Satz 1 BBiG). Kenntnis am 02.03.2025 – die Frist endete Mitte März (16.03., wegen des Sonntags spätestens 17.03.2025). Die Kündigung vom 21.03.2025 ist **zu spät** und damit unwirksam.",
"schema": [
[
2,
"Nach der Probezeit nur aus wichtigem Grund (§ 22 Abs. 2 Nr. 1 BBiG)"
],
[
2,
"Verschwiegenheitsverstoß = wichtiger Grund (§ 13 BBiG / § 62 StBerG)"
],
[
1,
"Abmahnung entbehrlich"
],
[
2,
"Zwei-Wochen-Frist (§ 22 Abs. 4 BBiG)"
],
[
2,
"Fristablauf Mitte März – 21.03. zu spät"
],
[
1,
"Kündigung unwirksam"
],
[
2,
"Schriftform mit Gründen (§ 22 Abs. 3 BBiG) geprüft"
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-11",
"bereich": "zp-ao",
"thema": "Anrechnung der Berufsschulzeit",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Arbeitsabläufe organisieren (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Die volljährige Auszubildende Jessica Jakob hat laut Ausbildungsvertrag eine Ausbildungszeit von 40 Stunden an fünf Tagen (8 Stunden täglich). Berufsschulunterricht hat sie dienstags von 8:00 bis 13:10 Uhr (sechs Unterrichtsstunden zu je 45 Minuten) und freitags von 8:00 bis 11:20 Uhr (vier Unterrichtsstunden).",
"aufgabe": "Erläutern Sie, wie die Berufsschultage auf die wöchentliche Ausbildungszeit angerechnet werden, und ermitteln Sie, wie viele Stunden Jessica in dieser Woche noch in der Kanzlei arbeiten muss.",
"loesung": "**Dienstag:** Es ist ein Berufsschultag mit **mehr als fünf Unterrichtsstunden** zu je mindestens 45 Minuten. An einem solchen Tag darf Jessica einmal in der Woche **nicht mehr beschäftigt** werden (§ 15 Abs. 1 Satz 2 Nr. 2 BBiG). Er wird mit der **durchschnittlichen täglichen Ausbildungszeit von 8 Stunden** angerechnet (§ 15 Abs. 2 Nr. 2 BBiG).\n**Freitag:** Angerechnet wird die **Unterrichtszeit einschließlich der Pausen** (§ 15 Abs. 2 Nr. 1 BBiG): 8:00 bis 11:20 Uhr = **3 Stunden 20 Minuten**. Danach kann sie in die Kanzlei.\n**Berechnung:**\n- 40 Std. − 8 Std. (Dienstag) − 3 Std. 20 Min. (Freitag) = **28 Std. 40 Min.** Ausbildungszeit in der Kanzlei.",
"schema": [
[
2,
"Dienstag: mehr als fünf Stunden – Beschäftigungsverbot (§ 15 Abs. 1 BBiG)"
],
[
2,
"Dienstag mit 8 Stunden angerechnet (§ 15 Abs. 2 Nr. 2 BBiG)"
],
[
2,
"Freitag: Unterrichtszeit inkl. Pausen = 3 Std. 20 Min. (§ 15 Abs. 2 Nr. 1 BBiG)"
],
[
2,
"Rest des Freitags im Betrieb möglich"
],
[
2,
"Ergebnis 28 Std. 40 Min."
]
],
"pruefung": "zp"
},
{
"id": "zp-ao-12",
"bereich": "zp-ao",
"thema": "Informationsbeschaffung",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "Ein Mandant fragt nach einer Gesetzesänderung, die er in den Nachrichten gehört hat. Ihre Ausbilderin bittet Sie, sich zuverlässig über den aktuellen Stand zu informieren.",
"aufgabe": "Nennen Sie drei geeignete Informationsquellen und beurteilen Sie jeweils kurz ihre Verlässlichkeit.",
"loesung": "Geeignete Quellen (drei genügen):\n- **Gesetzestexte** (z. B. gesetze-im-internet.de, Bundesgesetzblatt): amtlich und verbindlich, aber ohne Erläuterung.\n- **BMF-Schreiben / Bundessteuerblatt:** Verwaltungsauffassung, bindet die Finanzämter – wichtig für die Praxis.\n- **Fachdatenbanken** (z. B. DATEV LEXinform, NWB, Haufe): aktuell, kommentiert, Quellen nachvollziehbar.\n- **Rundschreiben der Steuerberaterkammer**, Fachzeitschriften: verlässlich, mit Praxishinweisen.\n- Nachrichten und soziale Medien eignen sich nur als Hinweis – Inhalte immer an amtlichen Quellen prüfen.",
"schema": [
[
2,
"Erste Quelle mit Beurteilung"
],
[
2,
"Zweite Quelle mit Beurteilung"
],
[
2,
"Dritte Quelle mit Beurteilung"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-01",
"bereich": "zp-stb",
"thema": "Bruttoarbeitslohn",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Mia Berger ist das ganze Jahr 2025 angestellt. Ihr Bruttogehalt beträgt 3.400 EUR monatlich, im Dezember erhält sie zusätzlich 1.700 EUR Weihnachtsgeld. Ihr Arbeitgeber zahlt ihr zusätzlich zum ohnehin geschuldeten Lohn monatlich 150 EUR für die Unterbringung ihrer dreijährigen Tochter in einem Kindergarten. Außerdem erhält sie jeden Monat einen Tankgutschein im Wert von 50 EUR.",
"aufgabe": "Ermitteln Sie den steuerpflichtigen Bruttoarbeitslohn 2025. Nichtansätze sind zu begründen.",
"loesung": "- Gehalt: 3.400 EUR × 12 = **40.800 EUR**\n- Weihnachtsgeld: **1.700 EUR**\n- Kindergartenzuschuss: **steuerfrei**, weil er zusätzlich zum ohnehin geschuldeten Lohn für ein nicht schulpflichtiges Kind gezahlt wird (§ 3 Nr. 33 EStG).\n- Tankgutschein: Sachbezug bis **50 EUR im Monat** bleibt außer Ansatz (§ 8 Abs. 2 Satz 11 EStG) – Freigrenze eingehalten.\n**Steuerpflichtiger Bruttoarbeitslohn: 42.500 EUR**",
"schema": [
[
1,
"Gehalt 40.800 EUR"
],
[
1,
"Weihnachtsgeld 1.700 EUR"
],
[
1,
"Kindergartenzuschuss steuerfrei"
],
[
1,
"Begründung § 3 Nr. 33 EStG (zusätzlich, nicht schulpflichtig)"
],
[
1,
"Gutschein: 50-EUR-Freigrenze (§ 8 Abs. 2 Satz 11 EStG)"
],
[
1,
"Ergebnis 42.500 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-02",
"bereich": "zp-stb",
"thema": "Personalrabatt",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 5,
"sachverhalt": "Sandro Santini arbeitet bei einem Modehändler. Am 21.07.2025 kauft er aus dem Sortiment seines Arbeitgebers Lederbekleidung für 1.800 EUR. Im Laden wird diese Ware Kunden für 3.500 EUR angeboten.",
"aufgabe": "Ermitteln Sie den steuerpflichtigen geldwerten Vorteil.",
"loesung": "Für Waren, die der Arbeitgeber nicht überwiegend für seine Arbeitnehmer herstellt oder vertreibt, gilt die **Rabattregelung** (§ 8 Abs. 3 EStG):\n- Endpreis 3.500 EUR × 96 % = 3.360 EUR\n- abzüglich gezahltes Entgelt 1.800 EUR = 1.560 EUR\n- abzüglich Rabattfreibetrag 1.080 EUR\n- **Steuerpflichtiger geldwerter Vorteil: 480 EUR**",
"schema": [
[
1,
"Rabattregelung § 8 Abs. 3 EStG"
],
[
1,
"96 % des Endpreises = 3.360 EUR"
],
[
1,
"Vorteil vor Freibetrag 1.560 EUR"
],
[
1,
"Rabattfreibetrag 1.080 EUR"
],
[
1,
"Ergebnis 480 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-03",
"bereich": "zp-stb",
"thema": "Entfernungspauschale",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 5,
"sachverhalt": "Sandro Santini fährt 2025 an 210 Tagen mit seinem eigenen Pkw zur 32 km entfernten ersten Tätigkeitsstätte. An acht dieser Tage fuhr er wegen eines Abendtermins zweimal hin und zurück.",
"aufgabe": "Berechnen Sie die Entfernungspauschale 2025.",
"loesung": "Die Entfernungspauschale gilt je Arbeitstag für die **einfache Entfernung**, unabhängig vom Verkehrsmittel (§ 9 Abs. 1 Satz 3 Nr. 4 EStG):\n- erste 20 km × 0,30 EUR = 6,00 EUR\n- ab dem 21. km: 12 km × 0,38 EUR = 4,56 EUR\n- je Tag 10,56 EUR × 210 Tage = **2.217,60 EUR** (aufgerundet 2.218 EUR)\nDie zweite Fahrt an acht Tagen bleibt unberücksichtigt, weil je Arbeitstag nur eine Fahrt angesetzt wird.",
"schema": [
[
1,
"0,30 EUR für die ersten 20 km"
],
[
1,
"0,38 EUR ab dem 21. km"
],
[
1,
"210 Tage × 10,56 EUR = 2.217,60 EUR"
],
[
1,
"Doppelfahrten ohne Ansatz"
],
[
1,
"Rechtsgrundlage § 9 Abs. 1 Satz 3 Nr. 4 EStG"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-04",
"bereich": "zp-stb",
"thema": "Homeoffice-Pauschale",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 4,
"sachverhalt": "Marie Santini arbeitet 2025 an 90 Tagen ausschließlich von zu Hause. An den übrigen 130 Arbeitstagen fährt sie mit dem Fahrrad zu ihrem Büro in der Kanzlei, wo ihr ein fester Arbeitsplatz zur Verfügung steht.",
"aufgabe": "Ermitteln Sie die abziehbare Tagespauschale für das häusliche Arbeiten.",
"loesung": "Für jeden Tag, an dem sie überwiegend zu Hause arbeitet und **nicht** die erste Tätigkeitsstätte aufsucht, gibt es eine **Tagespauschale von 6 EUR**, höchstens **1.260 EUR** im Jahr (§ 9 Abs. 5 i. V. m. § 4 Abs. 5 Satz 1 Nr. 6c EStG).\n- 90 Tage × 6 EUR = **540 EUR**\nAn den 130 Bürotagen gibt es keine Pauschale, weil ihr dort ein Arbeitsplatz zur Verfügung steht; für diese Tage gilt die Entfernungspauschale.",
"schema": [
[
1,
"6 EUR je Homeoffice-Tag"
],
[
1,
"90 × 6 = 540 EUR"
],
[
1,
"Bürotage ohne Pauschale – Arbeitsplatz vorhanden"
],
[
1,
"Höchstbetrag 1.260 EUR / Rechtsgrundlage"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-05",
"bereich": "zp-stb",
"thema": "Arbeitsmittel",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 5,
"sachverhalt": "Marie Santini kauft am 10.10.2025 einen höhenverstellbaren Schreibtisch für 1.428 EUR (1.200 EUR netto), den sie ausschließlich beruflich nutzt (Nutzungsdauer 13 Jahre). Außerdem kauft sie ein Fachbuch für 45 EUR.",
"aufgabe": "Ermitteln Sie die Werbungskosten für diese Arbeitsmittel 2025.",
"loesung": "Arbeitnehmer dürfen Arbeitsmittel sofort abziehen, wenn die Anschaffungskosten **ohne Umsatzsteuer 800 EUR** nicht übersteigen (§ 9 Abs. 1 Satz 3 Nr. 7 i. V. m. § 6 Abs. 2 EStG) – brutto also bis 952 EUR.\n- Schreibtisch: 1.200 EUR netto > 800 EUR → **Abschreibung** über 13 Jahre, monatsgenau ab Oktober (§ 7 Abs. 1 Satz 4 EStG): 1.428 EUR : 13 × 3/12 = **27,46 EUR**\n- Fachbuch: **45 EUR** sofort\n- **Werbungskosten: 72,46 EUR**",
"schema": [
[
1,
"Grenze 800 EUR netto / 952 EUR brutto"
],
[
1,
"Schreibtisch muss abgeschrieben werden"
],
[
1,
"Zeitanteilig 3/12 = 27,46 EUR"
],
[
1,
"Fachbuch 45 EUR sofort"
],
[
1,
"Summe 72,46 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-06",
"bereich": "zp-stb",
"thema": "Reisekosten bei Fortbildung",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Marie Santini fährt vom 12.02. bis 16.02.2025 mit ihrem eigenen Pkw zu einer 275 km entfernten Fortbildung nach Nürnberg. Die Seminargebühr trägt ihr Arbeitgeber, sonst erstattet er nichts. Für vier Übernachtungen ohne Frühstück zahlt sie 320 EUR.",
"aufgabe": "Ermitteln Sie die abziehbaren Werbungskosten für diese Reise.",
"loesung": "- **Fahrtkosten:** 275 km × 2 × 0,30 EUR = **165,00 EUR** (je gefahrenem Kilometer, § 9 Abs. 1 Satz 3 Nr. 4a EStG)\n- **Verpflegungsmehraufwand** (§ 9 Abs. 4a EStG):\n  - Anreisetag 12.02.: 14 EUR\n  - drei volle Tage (13.–15.02.): 3 × 28 EUR = 84 EUR\n  - Abreisetag 16.02.: 14 EUR\n  - zusammen **112,00 EUR**\n- **Übernachtung:** tatsächliche Kosten **320,00 EUR**\n- **Werbungskosten: 597,00 EUR**",
"schema": [
[
1,
"Fahrt mit 0,30 EUR je gefahrenem km"
],
[
1,
"Fahrtkosten 165 EUR"
],
[
1,
"An- und Abreisetag je 14 EUR"
],
[
1,
"Volle Tage 3 × 28 EUR"
],
[
1,
"Übernachtung 320 EUR"
],
[
1,
"Summe 597 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-07",
"bereich": "zp-stb",
"thema": "Arbeitnehmer-Pauschbetrag",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 3,
"sachverhalt": "Thomas Lehmann hat 2025 einen Bruttoarbeitslohn von 36.000 EUR. Er kann Werbungskosten von 980 EUR nachweisen.",
"aufgabe": "Ermitteln Sie seine Einkünfte aus nichtselbständiger Arbeit.",
"loesung": "Ohne Nachweis wird ein **Arbeitnehmer-Pauschbetrag von 1.230 EUR** abgezogen (§ 9a Satz 1 Nr. 1 Buchst. a EStG). Die nachgewiesenen 980 EUR sind niedriger, also wird der Pauschbetrag angesetzt.\n- 36.000 EUR − 1.230 EUR = **34.770 EUR**",
"schema": [
[
1,
"Pauschbetrag 1.230 EUR"
],
[
1,
"Vergleich: Pauschbetrag höher"
],
[
1,
"Einkünfte 34.770 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-08",
"bereich": "zp-stb",
"thema": "Arbeitslosengeld",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 4,
"sachverhalt": "Sandro Santini war vom 01.01. bis 28.02.2025 arbeitslos und erhielt Arbeitslosengeld von insgesamt 4.050 EUR.",
"aufgabe": "Erläutern Sie die steuerliche Behandlung des Arbeitslosengeldes.",
"loesung": "- Arbeitslosengeld ist **steuerfrei** (§ 3 Nr. 2 Buchst. a EStG) und gehört nicht zu den Einkünften.\n- Es unterliegt aber dem **Progressionsvorbehalt** (§ 32b EStG): Es erhöht den Steuersatz für das übrige Einkommen.\n- Weil die Lohnersatzleistung mehr als 410 EUR beträgt, besteht eine **Pflicht zur Abgabe** der Einkommensteuererklärung (§ 46 Abs. 2 Nr. 1 EStG).",
"schema": [
[
1,
"Steuerfrei (§ 3 Nr. 2 EStG)"
],
[
1,
"Nicht in den Einkünften"
],
[
1,
"Progressionsvorbehalt (§ 32b EStG)"
],
[
1,
"Pflichtveranlagung, da mehr als 410 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-09",
"bereich": "zp-stb",
"thema": "Kinderbetreuungskosten",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 5,
"sachverhalt": "Mia Berger zahlt 2025 für den Kindergartenplatz ihrer dreijährigen Tochter monatlich 350 EUR. Darin sind 40 EUR Essensgeld enthalten. Ihr Arbeitgeber zahlt ihr monatlich einen steuerfreien Zuschuss von 150 EUR für die Betreuung.",
"aufgabe": "Ermitteln Sie die abziehbaren Sonderausgaben für Kinderbetreuung.",
"loesung": "Abziehbar sind ab 2025 **80 % der Betreuungskosten, höchstens 4.800 EUR** je Kind unter 14 Jahren (§ 10 Abs. 1 Nr. 5 EStG).\n- Essensgeld ist Verpflegung und **nicht** begünstigt: 350 − 40 = 310 EUR\n- Der steuerfreie Arbeitgeberzuschuss mindert die eigenen Kosten: 310 − 150 = 160 EUR\n- 160 EUR × 12 = 1.920 EUR\n- davon 80 % = **1.536 EUR** (Höchstbetrag nicht überschritten)",
"schema": [
[
1,
"Essensgeld nicht begünstigt"
],
[
1,
"Steuerfreier Zuschuss mindert die Kosten"
],
[
1,
"Jahreskosten 1.920 EUR"
],
[
1,
"80 % = 1.536 EUR"
],
[
1,
"Höchstbetrag 4.800 EUR / Kind unter 14 (§ 10 Abs. 1 Nr. 5 EStG)"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-10",
"bereich": "zp-stb",
"thema": "Inzahlungnahme beim Verkauf",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 7,
"sachverhalt": "Jana Merian betreibt ein Fahrradgeschäft (Regelbesteuerung, vereinbarte Entgelte). Am 24.07.2025 verkauft sie im Laden ein Rennrad für 2.380 EUR brutto an den Privatkunden Paul Klein. Er gibt sein altes Fahrrad für 150 EUR in Zahlung und zahlt den Rest bar.",
"aufgabe": "Beurteilen Sie den Vorgang umsatzsteuerlich und bilden Sie den Buchungssatz zum 24.07.2025.",
"loesung": "- Lieferung des Rennrads: steuerbar und steuerpflichtig im Inland (§ 1 Abs. 1 Nr. 1, § 3 Abs. 1 und 6 UStG).\n- Weil Herr Klein mit einem Gegenstand und Geld bezahlt, liegt ein **Tausch mit Baraufgabe** vor (§ 3 Abs. 12 Satz 2 UStG).\n- Bemessungsgrundlage ist der Wert der Gegenleistung (§ 10 Abs. 2 Satz 2 UStG): 150 EUR + 2.230 EUR = 2.380 EUR brutto → **2.000 EUR netto**, Umsatzsteuer **380 EUR**.\n- Aus dem Kauf des Altrads vom Privatmann gibt es **keine Vorsteuer**.\n**Buchung:**\n- Kasse 2.230,00 EUR und Wareneingang (Gebrauchtrad) 150,00 EUR\n- an Umsatzerlöse 19 % 2.000,00 EUR und Umsatzsteuer 19 % 380,00 EUR",
"schema": [
[
1,
"Lieferung steuerbar und steuerpflichtig"
],
[
1,
"Tausch mit Baraufgabe (§ 3 Abs. 12 UStG)"
],
[
1,
"Bemessungsgrundlage 2.000 EUR"
],
[
1,
"Umsatzsteuer 380 EUR"
],
[
1,
"Keine Vorsteuer aus der Inzahlungnahme"
],
[
2,
"Vollständiger Buchungssatz"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-11",
"bereich": "zp-stb",
"thema": "Vermietung und Option",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Jana Merian vermietet ein Geschäftshaus. Sie hat, soweit möglich, auf die Steuerbefreiung verzichtet.\na) Erdgeschoss an einen Lebensmittelmarkt: Der Mieter überweist monatlich 3.570 EUR.\nb) Obergeschoss an eine Zahnarztpraxis: Der Mieter überweist monatlich 2.400 EUR.",
"aufgabe": "Beurteilen Sie beide Vermietungen umsatzsteuerlich (steuerbar, steuerfrei/steuerpflichtig, Umsatzsteuer) und begründen Sie, ob eine Option möglich ist.",
"loesung": "Grundstücksvermietungen sind sonstige Leistungen am Ort des Grundstücks (§ 3a Abs. 3 Nr. 1 UStG), also im Inland steuerbar, und grundsätzlich **steuerfrei** (§ 4 Nr. 12 Buchst. a UStG).\n**a) Lebensmittelmarkt:** Ein Verzicht auf die Steuerbefreiung ist möglich, wenn an einen Unternehmer für dessen Unternehmen vermietet wird (§ 9 Abs. 1 UStG) und der Mieter das Objekt für **steuerpflichtige Umsätze** nutzt (§ 9 Abs. 2 UStG). Beides ist erfüllt → **steuerpflichtig**:\n- 3.570 EUR : 1,19 = **3.000 EUR** Bemessungsgrundlage, **570 EUR** Umsatzsteuer monatlich\n**b) Zahnarztpraxis:** Der Zahnarzt erbringt **steuerfreie** Heilbehandlungen (§ 4 Nr. 14 UStG). Eine Option ist deshalb **ausgeschlossen** (§ 9 Abs. 2 UStG) → **steuerfrei**, 2.400 EUR ohne Umsatzsteuer. Vorsteuern, die auf diesen Teil entfallen, sind nicht abziehbar (§ 15 Abs. 2 Nr. 1 UStG).",
"schema": [
[
1,
"Sonstige Leistung, Ort am Grundstück, steuerbar"
],
[
1,
"Grundsätzlich steuerfrei (§ 4 Nr. 12a UStG)"
],
[
2,
"a) Option möglich (§ 9 Abs. 1 und 2 UStG)"
],
[
2,
"a) 3.000 EUR / 570 EUR"
],
[
1,
"b) steuerfrei"
],
[
2,
"b) Option ausgeschlossen – Mieter hat steuerfreie Umsätze (§ 4 Nr. 14 UStG)"
],
[
1,
"b) keine Umsatzsteuer / kein Vorsteuerabzug"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-12",
"bereich": "zp-stb",
"thema": "Mahngebühren",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 4,
"sachverhalt": "Jana Merian stellt einem säumigen Kunden Mahngebühren von 70 EUR in Rechnung.",
"aufgabe": "Beurteilen Sie die Mahngebühren umsatzsteuerlich und buchen Sie den Vorgang.",
"loesung": "Mahngebühren sind **Schadensersatz**. Ihnen steht keine Leistung gegenüber, es fehlt also an einem Leistungsaustausch. Sie sind **nicht steuerbar** (Abschn. 1.3 UStAE).\n**Buchung:** Forderungen aus Lieferungen und Leistungen 70 EUR an sonstige betriebliche Erträge (Mahngebühren) 70 EUR – ohne Umsatzsteuer.",
"schema": [
[
1,
"Nicht steuerbar"
],
[
2,
"Begründung: Schadensersatz, kein Leistungsaustausch"
],
[
1,
"Buchung ohne Umsatzsteuer"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-13",
"bereich": "zp-stb",
"thema": "Innergemeinschaftlicher Erwerb",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "Jana Merian kauft am 18.08.2025 Fahrradschlösser für 1.000 EUR bei einem Großhändler in den Niederlanden. Beide verwenden ihre USt-IdNr. Die Ware wird nach Kassel geliefert.",
"aufgabe": "Beurteilen Sie den Vorgang umsatzsteuerlich und buchen Sie ihn.",
"loesung": "- **Innergemeinschaftlicher Erwerb** (§ 1 Abs. 1 Nr. 5, § 1a UStG): Ware gelangt aus einem EU-Staat in einen anderen, beide sind Unternehmer.\n- Ort: dort, wo die Beförderung endet – **Inland** (§ 3d Satz 1 UStG) → steuerbar und steuerpflichtig.\n- Bemessungsgrundlage **1.000 EUR** (§ 10 Abs. 1 UStG), Erwerbsteuer **190 EUR**. Die Steuer schuldet die Erwerberin (§ 13a Abs. 1 Nr. 2 UStG).\n- Gleichzeitig ist sie als **Vorsteuer** abziehbar (§ 15 Abs. 1 Satz 1 Nr. 3 UStG).\n**Buchung:** Wareneingang i. g. Erwerb 1.000 EUR und Vorsteuer aus i. g. Erwerb 190 EUR an Verbindlichkeiten 1.000 EUR und Umsatzsteuer aus i. g. Erwerb 190 EUR.",
"schema": [
[
1,
"Innergemeinschaftlicher Erwerb"
],
[
1,
"Ort im Inland (§ 3d UStG)"
],
[
1,
"Bemessungsgrundlage 1.000 EUR, Steuer 190 EUR"
],
[
1,
"Erwerberin schuldet die Steuer"
],
[
1,
"Vorsteuerabzug 190 EUR"
],
[
1,
"Buchungssatz"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-14",
"bereich": "zp-stb",
"thema": "Wareneinkauf auf Ziel",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 3,
"sachverhalt": "Jana Merian kauft am 03.07.2025 Fahrradsitze für 1.130,50 EUR brutto auf Ziel.",
"aufgabe": "Buchen Sie den Vorgang.",
"loesung": "- Nettobetrag: 1.130,50 EUR : 1,19 = **950,00 EUR**\n- Vorsteuer: **180,50 EUR**\n**Buchung:** Wareneingang 19 % 950,00 EUR und Vorsteuer 19 % 180,50 EUR an Verbindlichkeiten aus Lieferungen und Leistungen 1.130,50 EUR.",
"schema": [
[
1,
"Wareneingang 950 EUR"
],
[
1,
"Vorsteuer 180,50 EUR"
],
[
1,
"an Verbindlichkeiten 1.130,50 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-15",
"bereich": "zp-stb",
"thema": "Zahlung mit Skonto",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 5,
"sachverhalt": "Jana Merian bezahlt eine Lieferantenrechnung über 2.380 EUR brutto (Waren) innerhalb der Skontofrist per Banküberweisung unter Abzug von 2 % Skonto.",
"aufgabe": "Berechnen Sie den Zahlbetrag und buchen Sie die Zahlung.",
"loesung": "- Skonto: 2.380 EUR × 2 % = 47,60 EUR brutto → **40,00 EUR netto** und **7,60 EUR Vorsteuer**\n- Zahlbetrag: 2.380,00 − 47,60 = **2.332,40 EUR**\n- Durch den Skonto mindert sich das Entgelt; die Vorsteuer ist zu berichtigen (§ 17 Abs. 1 UStG).\n**Buchung:** Verbindlichkeiten 2.380,00 EUR an Bank 2.332,40 EUR, erhaltene Skonti 19 % 40,00 EUR und Vorsteuer 19 % 7,60 EUR.",
"schema": [
[
1,
"Zahlbetrag 2.332,40 EUR"
],
[
1,
"Skonto 47,60 EUR brutto"
],
[
1,
"Aufteilung 40,00 / 7,60 EUR"
],
[
1,
"Vorsteuerberichtigung (§ 17 UStG)"
],
[
1,
"Buchungssatz"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-16",
"bereich": "zp-stb",
"thema": "Entnahme von Waren",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "Jana Merian entnimmt am 24.04.2025 einen Fahrradanhänger aus dem Warenbestand, um ihn ihrem Bruder zu schenken. Verkaufspreis im Laden: 499 EUR. Einkaufspreis zum Zeitpunkt der Entnahme: 238 EUR inklusive 19 % Umsatzsteuer. Beim Einkauf hatte sie den Vorsteuerabzug.",
"aufgabe": "Beurteilen Sie den Vorgang umsatzsteuerlich und buchen Sie ihn.",
"loesung": "- Die Entnahme für private Zwecke ist eine **unentgeltliche Wertabgabe**, die einer Lieferung gegen Entgelt gleichgestellt ist (§ 3 Abs. 1b Satz 1 Nr. 1 UStG), weil beim Kauf ein Vorsteuerabzug bestand.\n- Bemessungsgrundlage ist der **Einkaufspreis zum Zeitpunkt der Entnahme**, nicht der Verkaufspreis (§ 10 Abs. 4 Satz 1 Nr. 1 UStG): 238 EUR : 1,19 = **200 EUR**, Umsatzsteuer **38 EUR**.\n**Buchung:** Privatentnahmen 238 EUR an unentgeltliche Wertabgaben (Entnahme von Gegenständen) 19 % 200 EUR und Umsatzsteuer 19 % 38 EUR.",
"schema": [
[
1,
"Unentgeltliche Wertabgabe (§ 3 Abs. 1b UStG)"
],
[
1,
"Voraussetzung: Vorsteuerabzug beim Kauf"
],
[
1,
"Bemessungsgrundlage Einkaufspreis 200 EUR"
],
[
1,
"Umsatzsteuer 38 EUR"
],
[
2,
"Buchungssatz"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-17",
"bereich": "zp-stb",
"thema": "Wareneinsatz, Rohgewinn, Reingewinn",
"quelle": "angelehnt an: Zwischenprüfung März 2026, Steuererklärungen vorbereiten und Buchhaltungen bearbeiten (StBK Niedersachsen)",
"punkte": 11,
"sachverhalt": "Aus der Buchführung der Selim Textilhandel e. K. für März 2026:\n- Warenanfangsbestand 18.000 EUR, Wareneinkäufe 80.000 EUR, erhaltene Boni und Skonti 2.000 EUR, Warenendbestand 21.000 EUR\n- Umsatzerlöse 250.000 EUR, gewährte Boni und Skonti 3.000 EUR\n- Personalaufwand 55.000 EUR, Abschreibungen 2.500 EUR, übrige Aufwendungen 19.500 EUR",
"aufgabe": "Ermitteln Sie nachvollziehbar für März 2026: a) den Wareneinsatz, b) den Rohgewinn, c) den Reingewinn.",
"loesung": "**a) Wareneinsatz:**\n- 18.000 + 80.000 − 2.000 − 21.000 = **75.000 EUR**\n**b) Rohgewinn:**\n- Nettoumsatz: 250.000 − 3.000 = 247.000 EUR\n- Rohgewinn: 247.000 − 75.000 = **172.000 EUR**\n**c) Reingewinn:**\n- Aufwendungen: 55.000 + 2.500 + 19.500 = 77.000 EUR\n- Reingewinn: 172.000 − 77.000 = **95.000 EUR**",
"schema": [
[
1,
"Anfangsbestand + Einkäufe"
],
[
1,
"− erhaltene Boni/Skonti"
],
[
1,
"− Endbestand"
],
[
1,
"Wareneinsatz 75.000 EUR"
],
[
1,
"Nettoumsatz 247.000 EUR"
],
[
1,
"Formel Rohgewinn"
],
[
1,
"Rohgewinn 172.000 EUR"
],
[
2,
"Summe der Aufwendungen 77.000 EUR"
],
[
2,
"Reingewinn 95.000 EUR"
]
],
"pruefung": "zp"
},
{
"id": "zp-stb-18",
"bereich": "zp-stb",
"thema": "Kennzahlen auswerten",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 5,
"sachverhalt": "Für die Selim Textilhandel e. K. gilt für März 2026: Wareneinsatz 75.000 EUR, Nettoumsatz 247.000 EUR, Rohgewinn 172.000 EUR.",
"aufgabe": "Berechnen Sie den Rohgewinnaufschlagsatz und die Handelsspanne und erläutern Sie kurz den Unterschied.",
"loesung": "- **Rohgewinnaufschlagsatz** = Rohgewinn : Wareneinsatz × 100 = 172.000 : 75.000 × 100 = **229,33 %**\n- **Handelsspanne** = Rohgewinn : Nettoumsatz × 100 = 172.000 : 247.000 × 100 = **69,64 %**\nDer Aufschlagsatz bezieht sich auf den Einkaufswert (wie viel wird aufgeschlagen), die Handelsspanne auf den Verkaufserlös (welcher Anteil des Umsatzes bleibt als Rohgewinn).",
"schema": [
[
1,
"Formel Aufschlagsatz"
],
[
1,
"229,33 %"
],
[
1,
"Formel Handelsspanne"
],
[
1,
"69,64 %"
],
[
1,
"Unterschied erklärt"
]
],
"pruefung": "zp"
},
{
"id": "ap-stb-01",
"bereich": "ap-stb",
"thema": "Einkünfte aus Kapitalvermögen",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Die ledige Hanna Vogt (keine Kirchensteuerpflicht) erhielt 2025 von ihrer Bank eine Dividendengutschrift von 1.104,38 EUR. Einen Freistellungsauftrag hat sie nicht erteilt. Weitere Kapitalerträge hatte sie nicht. Ihr persönlicher Steuersatz liegt über 25 %.",
"aufgabe": "a) Ermitteln Sie die Bruttodividende, die einbehaltene Kapitalertragsteuer und den Solidaritätszuschlag.\nb) Erläutern Sie, wie Frau Vogt zu viel gezahlte Steuer zurückerhalten kann, und berechnen Sie den Betrag.",
"loesung": "**a)** Die Bank hat 25 % Kapitalertragsteuer (§ 43a Abs. 1 Nr. 1 EStG) und 5,5 % Solidaritätszuschlag darauf einbehalten. Netto sind das 73,625 % des Bruttobetrags:\n- Bruttodividende: 1.104,38 : 0,73625 = **1.500,00 EUR**\n- Kapitalertragsteuer 25 %: **375,00 EUR**\n- Solidaritätszuschlag 5,5 % von 375 EUR: **20,62 EUR**\n**b)** Jedem Steuerpflichtigen steht ein **Sparer-Pauschbetrag von 1.000 EUR** zu (§ 20 Abs. 9 EStG). Ohne Freistellungsauftrag (§ 44a EStG) konnte die Bank ihn nicht berücksichtigen.\nFrau Vogt beantragt in der Einkommensteuererklärung (Anlage KAP) die Überprüfung des Steuereinbehalts (§ 32d Abs. 4 EStG):\n- steuerpflichtig: 1.500 − 1.000 = 500 EUR\n- Steuer darauf: 125 EUR KapESt + 6,87 EUR Soli\n- Erstattung: 375,00 − 125,00 = **250,00 EUR** KapESt und 20,62 − 6,87 = **13,75 EUR** Soli\nEine Günstigerprüfung (§ 32d Abs. 6 EStG) lohnt nicht, weil ihr persönlicher Steuersatz über 25 % liegt.",
"schema": [
[
1,
"Rechenweg über 73,625 %"
],
[
1,
"Brutto 1.500 EUR"
],
[
1,
"KapESt 375 EUR"
],
[
1,
"Soli 20,62 EUR"
],
[
1,
"Sparer-Pauschbetrag 1.000 EUR (§ 20 Abs. 9 EStG)"
],
[
1,
"Antrag in der Erklärung (§ 32d Abs. 4 EStG)"
],
[
1,
"Erstattung 250 EUR + 13,75 EUR"
],
[
1,
"Günstigerprüfung (§ 32d Abs. 6) geprüft"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-02",
"bereich": "ap-stb",
"thema": "Haushaltsnahe Aufwendungen (§ 35a EStG)",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Familie Kern hat 2025 in ihrem selbst bewohnten Einfamilienhaus folgende Aufwendungen:\n1. Badsanierung: Rechnung über Arbeitslohn 3.000 EUR, Fahrtkosten 150 EUR und Material 4.000 EUR (alle Beträge brutto), per Überweisung bezahlt.\n2. Gartenpflege durch einen selbständigen Gärtner: 600 EUR, gegen Quittung bar bezahlt.\n3. Eine Haushaltshilfe auf Minijob-Basis (Haushaltsscheckverfahren): Lohn und Abgaben zusammen 2.900 EUR.",
"aufgabe": "Ermitteln Sie die Steuerermäßigung nach § 35a EStG. Begründen Sie Nichtansätze.",
"loesung": "**1. Handwerkerleistung** (§ 35a Abs. 3 EStG): 20 % der **Arbeitskosten einschließlich Fahrtkosten**, höchstens 1.200 EUR. Materialkosten sind nicht begünstigt.\n- 3.150 EUR × 20 % = **630 EUR**\n**2. Gärtner:** Gartenpflege wäre eine haushaltsnahe Dienstleistung (§ 35a Abs. 2 EStG). Voraussetzung ist aber eine Rechnung und die **Zahlung auf das Konto** des Leistenden (§ 35a Abs. 5 Satz 3 EStG). Bei Barzahlung gibt es **keine Ermäßigung**.\n**3. Minijob im Haushalt** (§ 35a Abs. 1 EStG): 20 %, höchstens **510 EUR**.\n- 2.900 EUR × 20 % = 580 EUR → begrenzt auf **510 EUR**\n**Steuerermäßigung insgesamt: 1.140 EUR** – sie wird direkt von der Einkommensteuer abgezogen.",
"schema": [
[
1,
"Nur Arbeits- und Fahrtkosten, kein Material"
],
[
1,
"630 EUR"
],
[
1,
"Höchstbetrag 1.200 EUR genannt"
],
[
2,
"Gärtner: Barzahlung schädlich (§ 35a Abs. 5 EStG)"
],
[
2,
"Minijob 20 %, höchstens 510 EUR"
],
[
1,
"Gesamt 1.140 EUR, Abzug von der Steuer"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-03",
"bereich": "ap-stb",
"thema": "Gewerbliche oder freiberufliche Einkünfte",
"quelle": "angelehnt an: Musterprüfung Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Vier Mandanten haben sich 2025 selbständig gemacht:\na) Dr. Lena Thiel eröffnet eine Zahnarztpraxis.\nb) Marco Rühl betreibt einen Friseursalon mit zwei Angestellten.\nc) Dipl.-Ing. Kai Brandt führt ein Ingenieurbüro und beschäftigt drei angestellte Ingenieure. Er leitet alle Aufträge selbst und prüft jedes Ergebnis.\nd) Sabine Holz übersetzt als Übersetzerin Verträge aus dem Englischen.",
"aufgabe": "Ordnen Sie die Einkünfte zu und erläutern Sie zwei steuerliche Folgen der Zuordnung.",
"loesung": "- **a)** Zahnärztin: Katalogberuf → **selbständige Arbeit** (§ 18 Abs. 1 Nr. 1 EStG).\n- **b)** Friseur: kein freier Beruf, selbständige nachhaltige Betätigung mit Gewinnabsicht → **Gewerbebetrieb** (§ 15 Abs. 2 EStG).\n- **c)** Ingenieur: Katalogberuf. Fachlich vorgebildete Mitarbeiter sind unschädlich, solange er **leitend und eigenverantwortlich** tätig bleibt (§ 18 Abs. 1 Nr. 1 Satz 3 EStG) → **selbständige Arbeit**.\n- **d)** Übersetzerin: Katalogberuf → **selbständige Arbeit**.\n**Folgen:**\n- Nur Gewerbebetriebe unterliegen der **Gewerbesteuer** (§ 2 GewStG) und müssen ein Gewerbe anmelden (§ 14 GewO).\n- Die **Buchführungspflicht** nach § 141 AO trifft nur Gewerbetreibende (und Land- und Forstwirte). Freiberufler dürfen den Gewinn immer durch **Einnahmenüberschussrechnung** ermitteln (§ 4 Abs. 3 EStG).",
"schema": [
[
1,
"a) § 18"
],
[
1,
"b) § 15"
],
[
2,
"c) § 18 – leitend und eigenverantwortlich"
],
[
1,
"d) § 18"
],
[
2,
"Folge Gewerbesteuer / Gewerbeanmeldung"
],
[
1,
"Folge Buchführungspflicht / EÜR"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-04",
"bereich": "ap-stb",
"thema": "Einnahmenüberschussrechnung",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Die Übersetzerin Sabine Holz ermittelt ihren Gewinn nach § 4 Abs. 3 EStG und versteuert ihre Umsätze regulär. Für 2025 sind noch zu beurteilen:\n1. Rechnung vom 15.12.2025 über 1.190 EUR (inkl. 190 EUR USt), Zahlungseingang am 05.01.2026.\n2. Die Büromiete für Januar 2026 (600 EUR, fällig am 01.01.2026) überwies sie bereits am 29.12.2025.\n3. Am 15.11.2025 kaufte und bezahlte sie einen Laptop für 1.190 EUR (inkl. 190 EUR USt).",
"aufgabe": "Erläutern Sie die Auswirkungen der Vorgänge auf den Gewinn 2025.",
"loesung": "Bei der EÜR gilt das **Zufluss- und Abflussprinzip** (§ 11 EStG).\n**1.** Zufluss erst am 05.01.2026 (§ 11 Abs. 1 Satz 1 EStG) → **keine Betriebseinnahme 2025**, sondern 2026 (1.190 EUR inkl. USt).\n**2.** Miete ist eine **regelmäßig wiederkehrende Ausgabe**. Sie wurde kurze Zeit vor Beginn des Jahres gezahlt, zu dem sie wirtschaftlich gehört, und ist auch innerhalb dieses Zeitraums fällig (10-Tage-Regel, § 11 Abs. 2 Satz 2 EStG) → **Betriebsausgabe 2026**, nicht 2025.\n**3.** Der Laptop ist ein abnutzbares Wirtschaftsgut des Anlagevermögens. Für Computerhardware darf eine **Nutzungsdauer von einem Jahr** angenommen werden (BMF-Schreiben vom 22.02.2022). Er wird 2025 vollständig abgeschrieben → **Betriebsausgabe 1.000 EUR**.\nDie gezahlte **Vorsteuer von 190 EUR** ist im Zahlungsjahr ebenfalls **Betriebsausgabe** 2025.\n**Gewinnauswirkung 2025: − 1.190 EUR**",
"schema": [
[
1,
"Zufluss-/Abflussprinzip § 11 EStG"
],
[
1,
"1. Einnahme erst 2026"
],
[
2,
"2. regelmäßig wiederkehrend, 10-Tage-Regel → 2026"
],
[
2,
"3. AfA mit 1 Jahr Nutzungsdauer: 1.000 EUR"
],
[
1,
"3. Vorsteuer 190 EUR als BA"
],
[
1,
"Summe − 1.190 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-05",
"bereich": "ap-stb",
"thema": "Geschenke und Bewirtung",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Der Großhändler Ole Brandt (Regelbesteuerung) hat 2025:\n1. zehn Geschäftsfreunden zu Weihnachten je ein Weinpräsent für 45 EUR netto zzgl. 8,55 EUR USt geschenkt,\n2. einem Großkunden eine Kamera für 120 EUR netto zzgl. 22,80 EUR USt geschenkt,\n3. Geschäftsfreunde im Restaurant bewirtet: 300 EUR netto zzgl. 57 EUR USt, dazu 20 EUR Trinkgeld. Ein ordnungsgemäßer Bewirtungsbeleg liegt vor.",
"aufgabe": "Ermitteln Sie jeweils die abziehbaren Betriebsausgaben und die abziehbare Vorsteuer.",
"loesung": "**1.** Geschenke an Geschäftsfreunde sind nur abziehbar, wenn die Kosten je Empfänger und Jahr **50 EUR netto** nicht übersteigen (§ 4 Abs. 5 Satz 1 Nr. 1 EStG). 45 EUR liegen darunter → **BA 450 EUR**, **Vorsteuer 85,50 EUR** abziehbar.\n**2.** 120 EUR > 50 EUR → **keine Betriebsausgabe** (nicht abziehbar, Gewinn außerhalb der Bilanz erhöhen). Die **Vorsteuer** ist ebenfalls **nicht abziehbar** (§ 15 Abs. 1a UStG).\n**3.** Bewirtungskosten sind zu **70 %** abziehbar (§ 4 Abs. 5 Satz 1 Nr. 2 EStG); das Trinkgeld gehört dazu:\n- 320 EUR × 70 % = **224 EUR** BA; 96 EUR nicht abziehbar\n- Die **Vorsteuer von 57 EUR** ist **voll** abziehbar (§ 15 Abs. 1a Satz 2 UStG).\nVoraussetzung: Beleg mit Ort, Tag, Teilnehmern, Anlass und Höhe; maschinell erstellte Rechnung der Gaststätte.\nHinweis 2026: Speisen in der Gastronomie unterliegen seit 01.01.2026 dauerhaft 7 % USt, Getränke weiter 19 %.",
"schema": [
[
1,
"50-EUR-Grenze netto je Empfänger"
],
[
1,
"1. BA 450 EUR"
],
[
1,
"1. Vorsteuer 85,50 EUR"
],
[
1,
"2. nicht abziehbar"
],
[
1,
"2. Vorsteuer nicht abziehbar (§ 15 Abs. 1a UStG)"
],
[
1,
"3. 70 % von 320 EUR = 224 EUR"
],
[
1,
"3. Vorsteuer 57 EUR voll"
],
[
1,
"3. Formvorschriften des Bewirtungsbelegs"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-06",
"bereich": "ap-stb",
"thema": "Reisekosten eines Unternehmers",
"quelle": "angelehnt an: Musterprüfung Steuerwesen (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Ole Brandt reist von Montag, 8:00 Uhr, bis Mittwoch, 19:00 Uhr, zu einer Messe in Leipzig. Das Hotel berechnet für zwei Nächte je 120 EUR netto „Übernachtung inkl. Frühstück“ als Gesamtbetrag. Die Fahrtkosten sind bereits gebucht.",
"aufgabe": "Ermitteln Sie die abziehbaren Betriebsausgaben für Verpflegung und Übernachtung (ertragsteuerlich, Nettobeträge).",
"loesung": "**Verpflegungsmehraufwand** (§ 4 Abs. 5 Satz 1 Nr. 5 i. V. m. § 9 Abs. 4a EStG):\n- Anreisetag Montag: 14 EUR\n- Dienstag (24 Std. abwesend): 28 EUR\n- Abreisetag Mittwoch: 14 EUR\n- zusammen **56 EUR**\n**Übernachtung:** Das Frühstück ist Verpflegung und mit den Pauschalen abgegolten. Ist es nicht gesondert ausgewiesen, wird es mit **20 % der Tagespauschale von 28 EUR = 5,60 EUR** je Frühstück herausgerechnet:\n- 240 EUR − 2 × 5,60 EUR = **228,80 EUR**\n**Betriebsausgaben insgesamt: 284,80 EUR**",
"schema": [
[
1,
"An- und Abreisetag je 14 EUR"
],
[
1,
"Voller Tag 28 EUR"
],
[
1,
"Summe 56 EUR"
],
[
1,
"Frühstück herausrechnen: 5,60 EUR je Frühstück"
],
[
1,
"Übernachtung 228,80 EUR"
],
[
1,
"Gesamt 284,80 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-07",
"bereich": "ap-stb",
"thema": "Ort der sonstigen Leistung und Reverse Charge",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Die Werbeagentur Lux GmbH in Hannover (Regelbesteuerung) hat im Mai 2026 folgende Vorgänge:\na) Ein Unternehmensberater aus Wien berät die GmbH für 5.000 EUR. Er rechnet ohne Umsatzsteuer ab.\nb) Die GmbH entwirft für ein Unternehmen in Lyon (mit französischer USt-IdNr.) eine Werbekampagne für 3.000 EUR.",
"aufgabe": "Beurteilen Sie beide Leistungen umsatzsteuerlich und nennen Sie die Pflichten der Lux GmbH.",
"loesung": "Beide Vorgänge sind **sonstige Leistungen zwischen Unternehmern** (§ 3 Abs. 9 UStG). Ort ist dort, wo der **Empfänger** sein Unternehmen betreibt (§ 3a Abs. 2 UStG).\n**a)** Ort: Hannover → **steuerbar und steuerpflichtig** im Inland. Weil der Berater im Ausland ansässig ist, schuldet die **Lux GmbH die Steuer** (§ 13b Abs. 1, Abs. 5 Satz 1 UStG):\n- 5.000 EUR × 19 % = **950 EUR**, entsteht mit Ablauf des Monats der Leistung (Mai 2026)\n- gleichzeitig **Vorsteuerabzug 950 EUR** (§ 15 Abs. 1 Satz 1 Nr. 4 UStG) → im Ergebnis keine Belastung\n**b)** Ort: Lyon → in Deutschland **nicht steuerbar**. Der französische Kunde schuldet die Steuer in Frankreich.\n- Rechnung ohne deutsche USt mit Hinweis „Steuerschuldnerschaft des Leistungsempfängers“ und beiden USt-IdNrn. (§ 14a Abs. 1 UStG)\n- Meldung in der **Zusammenfassenden Meldung** (§ 18a UStG) und in der Voranmeldung",
"schema": [
[
1,
"B2B-Grundregel § 3a Abs. 2 UStG"
],
[
1,
"a) Ort Inland, steuerpflichtig"
],
[
1,
"a) Lux GmbH schuldet die Steuer (§ 13b UStG)"
],
[
1,
"a) 950 EUR und Vorsteuerabzug"
],
[
1,
"b) nicht steuerbar in Deutschland"
],
[
1,
"b) Rechnung mit Reverse-Charge-Hinweis"
],
[
1,
"b) Zusammenfassende Meldung"
],
[
1,
"Entstehung mit Ablauf des Leistungsmonats"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-08",
"bereich": "ap-stb",
"thema": "Kleinunternehmerregelung ab 2025",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Thomas Bell betreibt seit Jahren einen Hausmeisterservice. Sein Gesamtumsatz betrug 2024 23.500 EUR und 2025 31.000 EUR. Auf die Kleinunternehmerregelung hat er nie verzichtet.",
"aufgabe": "Erläutern Sie, wie Herr Bell 2025 und 2026 umsatzsteuerlich zu behandeln ist, und nennen Sie die Folgen.",
"loesung": "Seit 2025 gilt (§ 19 Abs. 1 UStG): Ein im Inland ansässiger Unternehmer ist Kleinunternehmer, wenn der Gesamtumsatz im **Vorjahr 25.000 EUR** nicht überschritten hat und im **laufenden Jahr 100.000 EUR** nicht überschreitet.\n**2025:** Vorjahr 23.500 EUR ≤ 25.000 EUR, laufendes Jahr 31.000 EUR ≤ 100.000 EUR → **Kleinunternehmer**. Seine Umsätze sind **steuerfrei** (§ 19 Abs. 1 UStG).\n- Rechnungen ohne Steuerausweis, mit Hinweis auf die Steuerbefreiung für Kleinunternehmer\n- **kein Vorsteuerabzug** (§ 15 Abs. 2 UStG)\n**2026:** Vorjahr 31.000 EUR > 25.000 EUR → **Regelbesteuerung** ab 01.01.2026: Umsatzsteuer ausweisen, Voranmeldungen abgeben, Vorsteuerabzug.\nHinweis: Wird die 100.000-EUR-Grenze im laufenden Jahr überschritten, endet die Regelung sofort mit dem Umsatz, der die Grenze übersteigt. Ein Verzicht (Option) bindet fünf Jahre (§ 19 Abs. 3 UStG).",
"schema": [
[
2,
"Grenzen 25.000 / 100.000 EUR (§ 19 UStG)"
],
[
1,
"2025 Kleinunternehmer"
],
[
1,
"Umsätze steuerfrei, Rechnungshinweis"
],
[
1,
"Kein Vorsteuerabzug"
],
[
2,
"2026 Regelbesteuerung, Begründung Vorjahr"
],
[
1,
"Sofortiges Ende bei 100.000 EUR oder Option 5 Jahre"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-09",
"bereich": "ap-stb",
"thema": "Einspruch",
"quelle": "angelehnt an: Musterprüfung Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Mandant Jens Ortmann erhält seinen Einkommensteuerbescheid 2024 mit einer Nachzahlung von 2.400 EUR. Das Finanzamt hat Fahrtkosten von 1.800 EUR nicht anerkannt, die er aber belegen kann.",
"aufgabe": "Erläutern Sie, wie Herr Ortmann gegen den Bescheid vorgehen kann (Form, Frist, Begründung) und was mit der Nachzahlung geschieht.",
"loesung": "- **Rechtsbehelf:** Einspruch (§ 347 AO).\n- **Form:** schriftlich oder elektronisch (z. B. über ELSTER), der Einspruchsführer muss erkennbar sein (§ 357 Abs. 1 AO). Eine falsche Bezeichnung schadet nicht.\n- **Frist:** ein Monat nach Bekanntgabe (§ 355 Abs. 1 AO); Bekanntgabe am vierten Tag nach Aufgabe zur Post (§ 122 Abs. 2 AO).\n- **Begründung:** gesetzlich nicht vorgeschrieben, aber sinnvoll (§ 357 Abs. 3 AO): Belege der Fahrtkosten beifügen.\n- **Zahlung:** Der Einspruch hemmt die Vollziehung nicht (§ 361 Abs. 1 AO). Herr Ortmann kann **Aussetzung der Vollziehung** für den strittigen Teil beantragen (§ 361 Abs. 2 AO).\n- **Verböserung:** Das Finanzamt prüft den ganzen Fall neu und kann den Bescheid auch verschlechtern, muss aber vorher darauf hinweisen (§ 367 Abs. 2 AO). Dann kann der Einspruch zurückgenommen werden.\n- Alternative innerhalb der Einspruchsfrist: schlichter Änderungsantrag (§ 172 Abs. 1 Satz 1 Nr. 2a AO).",
"schema": [
[
1,
"Einspruch § 347 AO"
],
[
1,
"Form § 357 AO"
],
[
1,
"Frist ein Monat ab Bekanntgabe"
],
[
1,
"Begründung sinnvoll, nicht Pflicht"
],
[
2,
"Keine aufschiebende Wirkung, AdV beantragen (§ 361 AO)"
],
[
1,
"Verböserung mit Hinweis (§ 367 Abs. 2 AO)"
],
[
1,
"Alternative schlichter Änderungsantrag"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-10",
"bereich": "ap-stb",
"thema": "Säumniszuschlag",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "Eine Einkommensteuer-Abschlusszahlung von 2.375 EUR war am Donnerstag, 16.04.2026, fällig. Der Mandant überweist den Betrag; er wird dem Finanzamt am Freitag, 22.05.2026, gutgeschrieben.",
"aufgabe": "Berechnen Sie den Säumniszuschlag und erläutern Sie die Rechtsgrundlagen.",
"loesung": "- Wird eine Steuer nicht bis zum Ablauf des Fälligkeitstags entrichtet, entsteht für **jeden angefangenen Monat** ein Säumniszuschlag von **1 %** des auf **50 EUR abgerundeten** Rückstands (§ 240 Abs. 1 AO).\n- Bei Überweisung ist der Tag der **Gutschrift** maßgeblich (§ 224 Abs. 2 Nr. 2 AO).\n- Die **Schonfrist von drei Tagen** (§ 240 Abs. 3 AO) ist überschritten, deshalb wird ab dem Fälligkeitstag gerechnet.\n- Säumnis: 1. Monat 17.04.–16.05.2026, 2. Monat ab 17.05.2026 → **2 angefangene Monate**\n- 2.350 EUR × 1 % × 2 = **47 EUR**",
"schema": [
[
1,
"1 % je angefangenen Monat (§ 240 AO)"
],
[
1,
"Abrundung auf 2.350 EUR"
],
[
1,
"Tag der Gutschrift maßgeblich"
],
[
1,
"Schonfrist überschritten"
],
[
1,
"2 Monate"
],
[
1,
"47 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-11",
"bereich": "ap-stb",
"thema": "Verspätungszuschlag",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 6,
"sachverhalt": "Die nicht beratene Mandantin Rita Funk musste ihre Einkommensteuererklärung 2024 bis Donnerstag, 31.07.2025, abgeben. Sie reicht sie ohne Fristverlängerung erst am Montag, 20.10.2025, ein. Festgesetzte Einkommensteuer: 6.400 EUR, einbehaltene Lohnsteuer: 5.600 EUR.",
"aufgabe": "Erläutern Sie, ob ein Verspätungszuschlag festgesetzt werden muss oder kann, und berechnen Sie ihn.",
"loesung": "- Die Erklärung wurde **nicht binnen 14 Monaten** nach Ablauf des Jahres verspätet abgegeben, sondern früher → **kein Pflichtzuschlag** nach § 152 Abs. 2 AO.\n- Das Finanzamt **kann** nach pflichtgemäßem Ermessen einen Zuschlag festsetzen (§ 152 Abs. 1 AO), außer die Verspätung ist entschuldbar.\n- Verspätung: 01.08.–20.10.2025 → **3 angefangene Monate**\n- Höhe (§ 152 Abs. 5 AO): 0,25 % der festgesetzten Steuer abzüglich Steuerabzugsbeträge je Monat, mindestens **10 EUR je Monat**:\n  - 6.400 − 5.600 = 800 EUR × 0,25 % = 2 EUR je Monat → Mindestbetrag greift\n  - 10 EUR × 3 = **30 EUR**",
"schema": [
[
1,
"Kein Pflichtzuschlag – 14 Monate nicht überschritten"
],
[
1,
"Ermessenszuschlag § 152 Abs. 1 AO"
],
[
1,
"3 angefangene Monate"
],
[
1,
"Bemessung 0,25 % von 800 EUR"
],
[
1,
"Mindestens 10 EUR je Monat"
],
[
1,
"30 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-stb-12",
"bereich": "ap-stb",
"thema": "Kindergeld oder Kinderfreibeträge",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Steuerwesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Die Eheleute Kurz werden für 2025 zusammen veranlagt. Ihr Sohn ist 8 Jahre alt; sie erhielten 2025 Kindergeld von 255 EUR monatlich. Das zu versteuernde Einkommen ohne Freibeträge für Kinder beträgt 90.000 EUR.\nEinkommensteuer laut Splittingtarif 2025: bei 90.000 EUR = 17.922 EUR, bei 80.400 EUR = 14.768 EUR.",
"aufgabe": "Führen Sie die Günstigerprüfung durch und ermitteln Sie die festzusetzende Einkommensteuer.",
"loesung": "Das Finanzamt prüft von Amts wegen, ob das Kindergeld oder die Freibeträge günstiger sind (§ 31 EStG).\n- **Freibeträge 2025 für zusammenveranlagte Eltern:** Kinderfreibetrag 6.672 EUR + Freibetrag für Betreuung, Erziehung oder Ausbildung 2.928 EUR = **9.600 EUR** (§ 32 Abs. 6 EStG)\n- Steuer ohne Freibeträge: 17.922 EUR\n- Steuer mit Freibeträgen (zvE 80.400 EUR): 14.768 EUR\n- **Steuerersparnis: 3.154 EUR**\n- **Kindergeld:** 255 EUR × 12 = **3.060 EUR**\nDie Ersparnis ist höher als das Kindergeld → **Freibeträge sind günstiger**. Das Kindergeld wird der Steuer hinzugerechnet (§ 31 Satz 4 EStG, § 2 Abs. 6 EStG):\n- 14.768 EUR + 3.060 EUR = **17.828 EUR** festzusetzende Einkommensteuer (94 EUR weniger als ohne Freibeträge)",
"schema": [
[
1,
"Günstigerprüfung § 31 EStG"
],
[
2,
"Freibeträge 9.600 EUR (6.672 + 2.928)"
],
[
1,
"Ersparnis 3.154 EUR"
],
[
1,
"Kindergeld 3.060 EUR"
],
[
1,
"Freibeträge günstiger"
],
[
2,
"Hinzurechnung Kindergeld: 17.828 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-01",
"bereich": "ap-fibu",
"thema": "Inzahlungnahme eines Anlageguts",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Der Bauunternehmer Erik Saal (Regelbesteuerung, Bilanzierung) kauft am 05.08.2025 einen neuen Firmen-Pkw. Sein alter Firmenwagen (Buchwert am 05.08.2025: 6.000 EUR; Abschreibung bis zu diesem Tag bereits gebucht) wird vom Autohaus für 8.000 EUR zzgl. 1.520 EUR USt in Zahlung genommen und mit dem Kaufpreis verrechnet.",
"aufgabe": "Buchen Sie den Verkauf und den Abgang des alten Pkw.",
"loesung": "Die Inzahlungnahme ist ein **Tausch mit Baraufgabe**: Herr Saal liefert seinen alten Pkw an das Autohaus. Diese Lieferung ist steuerbar und steuerpflichtig (§ 1 Abs. 1 Nr. 1, § 3 Abs. 12 UStG).\n**Verkauf (Verrechnung mit der Kaufpreisschuld):**\n- Verbindlichkeiten aus Lieferungen und Leistungen 9.520 EUR\n- an Erlöse aus Anlagenverkäufen 19 % 8.000 EUR und Umsatzsteuer 19 % 1.520 EUR\n**Abgang zum Buchwert:**\n- Anlagenabgänge (Restbuchwert bei Buchgewinn) 6.000 EUR an Pkw 6.000 EUR\n**Ergebnis:** Buchgewinn 8.000 − 6.000 = **2.000 EUR**",
"schema": [
[
1,
"Tausch mit Baraufgabe / steuerpflichtige Lieferung"
],
[
2,
"Buchung des Verkaufs mit USt 1.520 EUR"
],
[
1,
"Verrechnung mit der Verbindlichkeit"
],
[
2,
"Abgang des Buchwerts 6.000 EUR"
],
[
2,
"Buchgewinn 2.000 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-02",
"bereich": "ap-fibu",
"thema": "Anschaffungskosten und Abschreibung",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Rechnung des Autohauses vom 05.08.2025 für den neuen Pkw von Erik Saal (betriebliche Nutzung 100 %):\n- Listenpreis 50.000 EUR netto, abzüglich 4 % Rabatt\n- Überführung 800 EUR netto\n- Tankfüllung 90 EUR netto\n- zzgl. 19 % USt\nZusätzlich zahlte er 250 EUR Zulassungsgebühr (ohne USt) und 1.200 EUR Kfz-Versicherung für ein Jahr. Nutzungsdauer: 6 Jahre. Herr Saal wünscht die lineare Abschreibung.",
"aufgabe": "Ermitteln Sie die Anschaffungskosten, die Abschreibung 2025 und den Bilanzansatz zum 31.12.2025.",
"loesung": "**Anschaffungskosten** (§ 255 Abs. 1 HGB, § 6 Abs. 1 Nr. 1 EStG): Kaufpreis abzüglich Preisminderungen zuzüglich Nebenkosten, die anfallen, um den Pkw betriebsbereit zu machen.\n- Listenpreis 50.000 EUR − 4 % Rabatt (2.000 EUR) = 48.000 EUR\n- + Überführung 800 EUR\n- + Zulassung 250 EUR\n- = **49.050 EUR**\nNicht dazu: Tankfüllung (laufende Betriebskosten), Versicherung (laufende Kosten, anteilig aktiver Rechnungsabgrenzungsposten), Vorsteuer (abziehbar, § 9b EStG).\n**Abschreibung 2025** (§ 7 Abs. 1 EStG, zeitanteilig ab August = 5 Monate):\n- 49.050 EUR : 6 Jahre = 8.175 EUR × 5/12 = **3.406,25 EUR**\n**Bilanzansatz 31.12.2025:** 49.050 − 3.406,25 = **45.643,75 EUR**\nHinweis: Für Anschaffungen ab dem 01.07.2025 wäre auch die degressive Abschreibung mit 30 % möglich (§ 7 Abs. 2 EStG).",
"schema": [
[
1,
"Rabatt abgezogen"
],
[
1,
"Überführung als Nebenkosten"
],
[
1,
"Zulassung als Nebenkosten"
],
[
1,
"Tankfüllung nicht AK"
],
[
1,
"Versicherung nicht AK"
],
[
1,
"AK 49.050 EUR"
],
[
1,
"Zeitanteilig 5/12"
],
[
2,
"AfA 3.406,25 EUR"
],
[
1,
"Bilanzansatz 45.643,75 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-03",
"bereich": "ap-fibu",
"thema": "Aktive Rechnungsabgrenzung",
"quelle": "angelehnt an: Musterprüfung Rechnungswesen (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Erik Saal überweist am 01.10.2025 die Kfz-Versicherung für den Zeitraum 01.10.2025 bis 30.09.2026 über 1.200 EUR. Gebucht wurde: Versicherungen an Bank 1.200 EUR.",
"aufgabe": "Erläutern Sie die notwendige Abschlussbuchung zum 31.12.2025 und bilden Sie den Buchungssatz.",
"loesung": "Ausgaben vor dem Abschlussstichtag, die Aufwand für eine **bestimmte Zeit danach** darstellen, sind als **aktiver Rechnungsabgrenzungsposten** auszuweisen (§ 250 Abs. 1 HGB, § 5 Abs. 5 Satz 1 Nr. 1 EStG).\n- Aufwand 2025: Oktober bis Dezember = 3/12 = 300 EUR\n- Aufwand 2026: Januar bis September = 9/12 = **900 EUR**\n**Buchung zum 31.12.2025:** Aktive Rechnungsabgrenzung 900 EUR an Versicherungen 900 EUR.\nIm Jahr 2026 wird der Posten aufgelöst: Versicherungen an Aktive Rechnungsabgrenzung 900 EUR.",
"schema": [
[
1,
"Rechtsgrundlage § 250 HGB / § 5 Abs. 5 EStG"
],
[
1,
"Bestimmte Zeit nach dem Stichtag"
],
[
1,
"Aufteilung 3/12 zu 9/12"
],
[
2,
"Buchungssatz ARAP 900 EUR"
],
[
1,
"Auflösung 2026"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-04",
"bereich": "ap-fibu",
"thema": "Sonstige Forderung",
"quelle": "angelehnt an: Musterprüfung Rechnungswesen (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Erik Saal vermietet eine Lagerhalle an einen Unternehmer und hat wirksam auf die Steuerbefreiung verzichtet. Die Miete für Dezember 2025 (2.000 EUR zzgl. 380 EUR USt) ist erst am 08.01.2026 auf seinem Konto eingegangen. Er versteuert nach vereinbarten Entgelten.",
"aufgabe": "Erläutern Sie die Behandlung zum 31.12.2025 und buchen Sie den Vorgang.",
"loesung": "Der **Ertrag** gehört wirtschaftlich in das Jahr 2025, die Zahlung erfolgt erst 2026 → **sonstige Forderung** (antizipativer Posten, § 252 Abs. 1 Nr. 5 HGB – periodengerechte Abgrenzung).\nDie **Umsatzsteuer** entsteht bei der Sollbesteuerung mit Ablauf des Voranmeldungszeitraums, in dem die Leistung ausgeführt wurde (§ 13 Abs. 1 Nr. 1 Buchst. a UStG) → Dezember 2025.\n**Buchung zum 31.12.2025:** Sonstige Vermögensgegenstände 2.380 EUR an Mieterträge 2.000 EUR und Umsatzsteuer 19 % 380 EUR.\n**Zahlung 2026:** Bank an Sonstige Vermögensgegenstände 2.380 EUR.",
"schema": [
[
2,
"Ertrag 2025, Zahlung 2026 → sonstige Forderung"
],
[
1,
"USt entsteht im Dezember 2025"
],
[
2,
"Buchungssatz 31.12."
],
[
1,
"Buchung 2026"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-05",
"bereich": "ap-fibu",
"thema": "Rückstellungen",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Für den Jahresabschluss 2025 der Saal Bau e. K. ist noch zu berücksichtigen:\na) Die Kosten für die Erstellung des Jahresabschlusses 2025 werden voraussichtlich 2.800 EUR netto betragen.\nb) Eine im Herbst 2025 unterlassene Reparatur am Lagerdach (5.000 EUR netto) wird im Februar 2026 nachgeholt.",
"aufgabe": "Erläutern Sie, ob und in welcher Höhe Rückstellungen zu bilden sind, und buchen Sie.",
"loesung": "Rückstellungen sind für **ungewisse Verbindlichkeiten** und bestimmte Aufwendungen zu bilden (§ 249 HGB); sie gelten über § 5 Abs. 1 EStG auch steuerlich.\n**a)** Die Pflicht zur Aufstellung des Abschlusses besteht öffentlich-rechtlich (§ 242 HGB) → Rückstellung für ungewisse Verbindlichkeiten, Ansatz **ohne Vorsteuer** (Erfüllungsbetrag, § 253 Abs. 1 Satz 2 HGB): **2.800 EUR**.\n- Buchung: Abschluss- und Prüfungskosten an sonstige Rückstellungen 2.800 EUR\n**b)** Unterlassene Instandhaltung, die **innerhalb von drei Monaten** nachgeholt wird → **Pflichtrückstellung** (§ 249 Abs. 1 Satz 2 Nr. 1 HGB), auch steuerlich: **5.000 EUR**.\n- Buchung: Instandhaltung betrieblicher Räume an sonstige Rückstellungen 5.000 EUR",
"schema": [
[
1,
"Rechtsgrundlage § 249 HGB"
],
[
1,
"a) Rückstellung 2.800 EUR netto"
],
[
1,
"a) Buchung"
],
[
2,
"b) Nachholung in drei Monaten → Pflicht"
],
[
1,
"b) Buchung 5.000 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-06",
"bereich": "ap-fibu",
"thema": "Lohnabrechnung",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Die Angestellte Sarah Lenz (Steuerklasse I, ein Kind, evangelisch, Niedersachsen) erhält im März 2026 ein Bruttogehalt von 3.200 EUR. Lohnsteuer laut Tabelle: 380,00 EUR, Solidaritätszuschlag: 0,00 EUR.\nRechnen Sie mit folgenden Arbeitnehmeranteilen: Krankenversicherung 8,75 % (inkl. halber Zusatzbeitrag), Rentenversicherung 9,3 %, Arbeitslosenversicherung 1,3 %, Pflegeversicherung 1,8 %. Der Arbeitgeberanteil ist genauso hoch (Umlagen bleiben unberücksichtigt). Das Gehalt wird am 31.03.2026 überwiesen.",
"aufgabe": "Erstellen Sie die Gehaltsabrechnung und bilden Sie die Buchungssätze.",
"loesung": "**Abrechnung:**\n- Bruttogehalt 3.200,00 EUR\n- − Lohnsteuer 380,00 EUR\n- − Kirchensteuer 9 % (Niedersachsen) von 380 EUR: 34,20 EUR\n- − Solidaritätszuschlag 0,00 EUR\n- − Krankenversicherung 8,75 %: 280,00 EUR\n- − Rentenversicherung 9,3 %: 297,60 EUR\n- − Arbeitslosenversicherung 1,3 %: 41,60 EUR\n- − Pflegeversicherung 1,8 %: 57,60 EUR (kein Kinderlosenzuschlag, sie hat ein Kind)\n- = **Auszahlung 2.109,00 EUR**\nSozialversicherung Arbeitnehmeranteil zusammen: **676,80 EUR**\n**Buchungen:**\n- Gehälter 3.200,00 EUR an Bank 2.109,00 EUR, Verbindlichkeiten Lohn- und Kirchensteuer 414,20 EUR, Verbindlichkeiten soziale Sicherheit 676,80 EUR\n- Gesetzliche soziale Aufwendungen 676,80 EUR an Verbindlichkeiten soziale Sicherheit 676,80 EUR\nDie Beiträge (1.353,60 EUR) sind am drittletzten Bankarbeitstag des Monats an die Krankenkasse fällig, die Lohnsteuer-Anmeldung bis zum 10. des Folgemonats.",
"schema": [
[
1,
"Kirchensteuer 34,20 EUR"
],
[
2,
"Sozialversicherungsbeiträge einzeln richtig"
],
[
1,
"Kein Kinderlosenzuschlag erkannt"
],
[
1,
"Auszahlung 2.109,00 EUR"
],
[
2,
"Buchung Gehalt"
],
[
2,
"Buchung Arbeitgeberanteil"
],
[
1,
"Fälligkeiten genannt"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-07",
"bereich": "ap-fibu",
"thema": "Minijob 2026",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Erik Saal stellt ab 01.01.2026 eine Aushilfe für Büroarbeiten ein. Lohn: 550 EUR im Monat. Die Aushilfe ist gesetzlich krankenversichert, hat keine weitere Beschäftigung und keinen Befreiungsantrag zur Rentenversicherung gestellt.",
"aufgabe": "Erläutern Sie, ob ein Minijob vorliegt, und ermitteln Sie die Abgaben für Arbeitgeber und Aushilfe (ohne Umlagen).",
"loesung": "Die **Geringfügigkeitsgrenze** ist an den Mindestlohn gekoppelt: 2026 gilt 13,90 EUR × 130 : 3 = **603 EUR** im Monat (§ 8 Abs. 1a SGB IV). 550 EUR liegen darunter → **Minijob**.\n**Arbeitgeber** (Pauschalabgaben an die Minijob-Zentrale):\n- Krankenversicherung 13 %: 71,50 EUR\n- Rentenversicherung 15 %: 82,50 EUR\n- Pauschsteuer 2 % (§ 40a Abs. 2 EStG): 11,00 EUR\n- zusammen **165,00 EUR**\n**Aushilfe:** Rentenversicherung 3,6 % = **19,80 EUR** Eigenanteil, weil sie keinen Befreiungsantrag gestellt hat. Auszahlung 530,20 EUR.",
"schema": [
[
2,
"Grenze 2026: 603 EUR"
],
[
1,
"KV 13 % / RV 15 %"
],
[
1,
"Pauschsteuer 2 %"
],
[
1,
"AG gesamt 165 EUR"
],
[
1,
"AN-Anteil RV 3,6 % = 19,80 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-08",
"bereich": "ap-fibu",
"thema": "Bewertung im Umlaufvermögen",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Im Umlaufvermögen der Saal Bau e. K. befinden sich zum 31.12.2025:\na) Aktien, gekauft für 10.000 EUR. Börsenkurs am 31.12.2025: 8.500 EUR. Bis zur Bilanzaufstellung im März 2026 steigt der Kurs wieder auf 9.800 EUR.\nb) Baumaterial mit Anschaffungskosten von 4.000 EUR. Durch einen Wasserschaden ist es dauerhaft nur noch 2.500 EUR wert.",
"aufgabe": "Erläutern Sie die Bewertung in Handels- und Steuerbilanz.",
"loesung": "**Handelsbilanz:** Für das Umlaufvermögen gilt das **strenge Niederstwertprinzip** (§ 253 Abs. 4 HGB): Ist der Wert am Stichtag niedriger, muss abgeschrieben werden.\n- a) **8.500 EUR** (Abschreibung 1.500 EUR)\n- b) **2.500 EUR** (Abschreibung 1.500 EUR)\n**Steuerbilanz:** Eine Teilwertabschreibung ist nur bei **voraussichtlich dauernder Wertminderung** zulässig und dann ein Wahlrecht (§ 6 Abs. 1 Nr. 2 Satz 2 EStG).\n- a) Börsennotierte Aktien: dauernd nur, soweit der Kurs am Stichtag die Bagatellgrenze von 5 % unterschreitet; werterhellende Kursentwicklungen danach bleiben unberücksichtigt (BMF-Schreiben zur Teilwertabschreibung). Der Kursverlust (15 %) übersteigt 5 % → Teilwert **8.500 EUR** zulässig.\n- b) Dauernde Wertminderung → Teilwert **2.500 EUR** zulässig.\nBeide Wahlrechte können unabhängig von der Handelsbilanz ausgeübt werden (§ 5 Abs. 1 Satz 1 2. Halbsatz EStG).",
"schema": [
[
2,
"Strenges Niederstwertprinzip § 253 Abs. 4 HGB"
],
[
1,
"HB a) 8.500 / b) 2.500 EUR"
],
[
2,
"Steuer: nur bei dauernder Wertminderung, Wahlrecht"
],
[
1,
"a) Bagatellgrenze 5 %, Stichtagskurs maßgeblich"
],
[
1,
"b) Teilwert 2.500 EUR"
],
[
1,
"Eigenständige Ausübung in der Steuerbilanz"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-09",
"bereich": "ap-fibu",
"thema": "Einzelwertberichtigung",
"quelle": "angelehnt an: Musterprüfung Rechnungswesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Ein Kunde der Saal Bau e. K. schuldet seit Oktober 2025 11.900 EUR (10.000 EUR netto + 1.900 EUR USt). Er ist in Zahlungsschwierigkeiten; ein Insolvenzverfahren ist nicht eröffnet. Am Bilanzstichtag rechnet Herr Saal mit einem Ausfall von 40 %.",
"aufgabe": "Erläutern Sie die Behandlung zum 31.12.2025 und bilden Sie die Buchungssätze.",
"loesung": "- Die Forderung ist **zweifelhaft**, sie wird umgebucht: Zweifelhafte Forderungen an Forderungen aus Lieferungen und Leistungen 11.900 EUR.\n- Forderungen sind mit dem **niedrigeren beizulegenden Wert** anzusetzen (§ 253 Abs. 4 HGB). Wertberichtigt wird nur der **Nettobetrag**, weil die Umsatzsteuer erst bei tatsächlicher **Uneinbringlichkeit** berichtigt wird (§ 17 Abs. 2 Nr. 1 UStG):\n  - 10.000 EUR × 40 % = **4.000 EUR**\n- Buchung: Einstellung in die Einzelwertberichtigung 4.000 EUR an Einzelwertberichtigung zu Forderungen 4.000 EUR\n- Bilanzausweis: 11.900 − 4.000 = **7.900 EUR**\n- Steuerlich zulässig, weil die Wertminderung voraussichtlich dauernd ist (§ 6 Abs. 1 Nr. 2 Satz 2 EStG).",
"schema": [
[
1,
"Umbuchung auf zweifelhafte Forderungen"
],
[
1,
"Niederstwert § 253 Abs. 4 HGB"
],
[
2,
"Nur Nettobetrag, USt erst bei Uneinbringlichkeit"
],
[
1,
"EWB 4.000 EUR"
],
[
2,
"Buchungssatz EWB"
],
[
1,
"Bilanzwert 7.900 EUR"
]
],
"pruefung": "ap"
},
{
"id": "ap-fibu-10",
"bereich": "ap-fibu",
"thema": "Bilanzkennzahlen",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Rechnungswesen (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Aus der Bilanz der Saal Bau e. K. zum 31.12.2025 (in EUR):\n- Anlagevermögen 300.000, Vorräte 80.000, Forderungen 60.000, liquide Mittel 20.000\n- Eigenkapital 180.000, langfristige Verbindlichkeiten 170.000, kurzfristige Verbindlichkeiten 110.000",
"aufgabe": "Berechnen Sie die Eigenkapitalquote, die Anlagendeckung I und die Liquidität 2. Grades und beurteilen Sie die Ergebnisse kurz.",
"loesung": "Bilanzsumme: 300.000 + 80.000 + 60.000 + 20.000 = **460.000 EUR**\n- **Eigenkapitalquote** = Eigenkapital : Gesamtkapital × 100 = 180.000 : 460.000 × 100 = **39,13 %** → solide, liegt über dem Durchschnitt kleiner Betriebe.\n- **Anlagendeckung I** = Eigenkapital : Anlagevermögen × 100 = 180.000 : 300.000 × 100 = **60 %** → das Anlagevermögen ist nur zu 60 % mit Eigenkapital finanziert; mit dem langfristigen Fremdkapital (Anlagendeckung II = 116,67 %) ist die **goldene Bilanzregel** aber erfüllt.\n- **Liquidität 2. Grades** = (liquide Mittel + Forderungen) : kurzfristige Verbindlichkeiten × 100 = 80.000 : 110.000 × 100 = **72,73 %** → unter dem Richtwert von 100 %. Kurzfristige Schulden sind nicht voll gedeckt; die Zahlungsfähigkeit sollte beobachtet werden.",
"schema": [
[
1,
"Bilanzsumme 460.000 EUR"
],
[
1,
"EK-Quote 39,13 %"
],
[
1,
"Beurteilung EK-Quote"
],
[
1,
"Anlagendeckung I 60 %"
],
[
1,
"Beurteilung mit langfristigem Kapital"
],
[
1,
"Liquidität 2. Grades 72,73 %"
],
[
2,
"Beurteilung: unter 100 %"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-01",
"bereich": "ap-wiso",
"thema": "Geschäftsfähigkeit",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Der 17-jährige Auszubildende Leon kauft ohne Wissen seiner Eltern:\na) ein Smartphone für 600 EUR, zahlbar in 12 Monatsraten,\nb) einen Kinogutschein für 25 EUR, den er mit seinem Taschengeld bar bezahlt.",
"aufgabe": "Beurteilen Sie die Wirksamkeit beider Verträge.",
"loesung": "Leon ist **beschränkt geschäftsfähig** (§ 106 BGB). Verträge, die ihm nicht lediglich einen rechtlichen Vorteil bringen, brauchen die **Einwilligung** der gesetzlichen Vertreter (§ 107 BGB).\n**a)** Ohne Einwilligung ist der Vertrag **schwebend unwirksam** (§ 108 Abs. 1 BGB). Er wird wirksam, wenn die Eltern ihn **genehmigen**; verweigern sie die Genehmigung, ist er von Anfang an unwirksam. Der **Taschengeldparagraf** greift nicht, weil Leon die Leistung nicht vollständig bewirkt hat (Ratenzahlung). Fordert der Händler die Eltern zur Erklärung auf, gilt das Schweigen nach zwei Wochen als Verweigerung (§ 108 Abs. 2 BGB).\n**b)** Der Vertrag ist **von Anfang an wirksam** (§ 110 BGB): Leon hat die Leistung vollständig mit Mitteln bewirkt, die ihm zur freien Verfügung überlassen wurden.",
"schema": [
[
1,
"Beschränkt geschäftsfähig § 106 BGB"
],
[
1,
"Einwilligung erforderlich § 107 BGB"
],
[
2,
"a) schwebend unwirksam, Genehmigung (§ 108 BGB)"
],
[
1,
"a) § 110 greift nicht wegen Raten"
],
[
1,
"a) Aufforderung: Schweigen = Verweigerung"
],
[
2,
"b) wirksam nach § 110 BGB"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-02",
"bereich": "ap-wiso",
"thema": "Vertragsarten",
"quelle": "angelehnt an: Musterprüfung Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "In der Kanzlei fallen folgende Vorgänge an:\na) Die Kanzlei lässt sich von einem Schreiner einen Aktenschrank nach Maß anfertigen.\nb) Die Kanzlei stellt eine neue Steuerfachangestellte ein.\nc) Ein Mandant überlässt der Kanzlei kostenlos für eine Woche einen Beamer.\nd) Die Kanzlei nimmt bei ihrer Bank 30.000 EUR für neue Hardware auf.",
"aufgabe": "Bestimmen Sie die Vertragsart und nennen Sie jeweils die Hauptpflichten.",
"loesung": "- **a) Werkvertrag** (§ 631 BGB): Der Schreiner schuldet einen **Erfolg**, das fertige mangelfreie Werk; die Kanzlei schuldet die Vergütung und muss das Werk abnehmen (§ 640 BGB). (Wird ein beweglicher Gegenstand hergestellt und geliefert, wendet man nach § 650 BGB Kaufrecht an – beide Antworten sind vertretbar, wenn sie begründet sind.)\n- **b) Arbeitsvertrag** (§ 611a BGB): Die Angestellte leistet **weisungsgebundene Arbeit**, der Arbeitgeber zahlt das Gehalt.\n- **c) Leihvertrag** (§ 598 BGB): **unentgeltliche** Gebrauchsüberlassung; die Kanzlei muss den Beamer zurückgeben (§ 604 BGB).\n- **d) Darlehensvertrag** (§ 488 BGB): Die Bank stellt das Geld zur Verfügung; die Kanzlei zahlt Zinsen und zahlt das Darlehen zurück.",
"schema": [
[
2,
"a) Werkvertrag / Werklieferung mit Begründung"
],
[
2,
"b) Arbeitsvertrag"
],
[
2,
"c) Leihe, unentgeltlich"
],
[
2,
"d) Darlehen, Zins und Rückzahlung"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-03",
"bereich": "ap-wiso",
"thema": "Kaufmannseigenschaft und Firma",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Nina Petersen eröffnet in Hannover einen Onlinehandel für Sportartikel. Sie erwartet schon im ersten Jahr 900.000 EUR Umsatz, beschäftigt sechs Mitarbeiter und braucht eine umfangreiche Lager- und Buchhaltungsorganisation. Sie möchte unter „Sporty Hannover“ auftreten.",
"aufgabe": "Erläutern Sie, ob Frau Petersen Kauffrau ist, welche Folgen sich daraus ergeben und wie die Firma lauten muss.",
"loesung": "Sie betreibt ein **Handelsgewerbe**, das nach Art und Umfang einen **in kaufmännischer Weise eingerichteten Geschäftsbetrieb** erfordert (Umsatz, Mitarbeiter, Organisation). Sie ist daher **Istkauffrau** (§ 1 HGB) – kraft Gesetzes, die Eintragung ins Handelsregister wirkt nur deklaratorisch.\n**Folgen:**\n- Pflicht zur Eintragung ins Handelsregister (§ 29 HGB)\n- Buchführungs- und Bilanzierungspflicht (§§ 238, 242 HGB)\n- Prokura kann erteilt werden (§ 48 HGB); strengere Regeln, z. B. unverzügliche Rügepflicht beim Handelskauf (§ 377 HGB)\n**Firma:** Der Name, unter dem sie ihre Geschäfte betreibt (§ 17 HGB). Eine Fantasiefirma ist zulässig, muss aber Kennzeichnungs- und Unterscheidungskraft haben (§ 18 HGB) und einen **Rechtsformzusatz** enthalten (§ 19 Abs. 1 Nr. 1 HGB): z. B. „**Sporty Hannover e. K.**“ oder „e. Kfr.“",
"schema": [
[
2,
"Istkauffrau § 1 HGB mit Begründung"
],
[
1,
"Eintragung deklaratorisch"
],
[
2,
"Zwei Folgen (Handelsregister, Buchführung, Prokura, § 377)"
],
[
1,
"Firmenbegriff § 17 HGB"
],
[
2,
"Rechtsformzusatz e. K. (§ 19 HGB)"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-04",
"bereich": "ap-wiso",
"thema": "Gründung einer GmbH",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 10,
"sachverhalt": "Die Mandanten Ali Demir und Jana Ross wollen zusammen eine IT-Firma als GmbH gründen. Sie haben zusammen 20.000 EUR Eigenkapital und fragen, was zu beachten ist.",
"aufgabe": "Erläutern Sie die wesentlichen Schritte der Gründung und Regeln zu Stammkapital, Einzahlung und Haftung.",
"loesung": "- **Gesellschaftsvertrag** in **notarieller Form** (§ 2 GmbHG), Inhalt u. a. Firma, Sitz, Gegenstand, Stammkapital, Geschäftsanteile (§ 3 GmbHG).\n- **Stammkapital** mindestens **25.000 EUR** (§ 5 Abs. 1 GmbHG). Mit 20.000 EUR reicht das nicht für eine reguläre GmbH; möglich wäre eine **Unternehmergesellschaft (haftungsbeschränkt)** ab 1 EUR, die 25 % ihres Gewinns zurücklegen muss (§ 5a GmbHG).\n- **Einzahlung vor Anmeldung:** auf jeden Geschäftsanteil mindestens ein Viertel, insgesamt mindestens **12.500 EUR** (§ 7 Abs. 2 GmbHG). Die Mandanten könnten also mit 12.500 EUR Einzahlung eine GmbH mit 25.000 EUR Stammkapital gründen, schulden den Rest aber der Gesellschaft.\n- **Bestellung eines Geschäftsführers** (§ 6 GmbHG) und **Anmeldung zum Handelsregister** durch die Geschäftsführer über den Notar (§§ 7, 8 GmbHG).\n- **Haftung:** Vor der Eintragung besteht die GmbH als solche nicht; wer in ihrem Namen handelt, haftet **persönlich** (§ 11 Abs. 2 GmbHG). Ab Eintragung haftet nur das **Gesellschaftsvermögen** (§ 13 Abs. 2 GmbHG).\n- Weitere Schritte: Gewerbeanmeldung, Anzeige beim Finanzamt (§ 137 AO, Fragebogen zur steuerlichen Erfassung).",
"schema": [
[
1,
"Notarieller Gesellschaftsvertrag"
],
[
2,
"Stammkapital 25.000 EUR – 20.000 reichen nicht"
],
[
1,
"Alternative UG (haftungsbeschränkt)"
],
[
2,
"Mindesteinzahlung 12.500 EUR / ein Viertel"
],
[
1,
"Geschäftsführer und Handelsregister"
],
[
2,
"Handelndenhaftung vor Eintragung, danach nur GmbH-Vermögen"
],
[
1,
"Gewerbe / Finanzamt"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-05",
"bereich": "ap-wiso",
"thema": "Urlaubsanspruch bei Eintritt",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Kim Arnold beginnt am 01.04.2026 als Steuerfachangestellte in einer Kanzlei (5-Tage-Woche). Im Arbeitsvertrag ist nur der gesetzliche Urlaub vereinbart. Sie möchte im Juli zwei Wochen Urlaub nehmen.",
"aufgabe": "Ermitteln Sie ihren Urlaubsanspruch für 2026 und erläutern Sie, ob sie im Juli Urlaub nehmen kann.",
"loesung": "- Der gesetzliche Urlaub beträgt **24 Werktage** bei einer 6-Tage-Woche (§ 3 Abs. 1 BUrlG). Bei einer 5-Tage-Woche sind das 24 : 6 × 5 = **20 Arbeitstage**.\n- Der volle Anspruch entsteht erstmals nach einer **Wartezeit von sechs Monaten** (§ 4 BUrlG). Kim erfüllt sie am **30.09.2026** und erwirbt dann den **vollen Jahresurlaub von 20 Arbeitstagen** (kein Teilurlaub, weil sie die Wartezeit noch im Kalenderjahr erfüllt, § 5 Abs. 1 Buchst. a BUrlG).\n- **Juli:** Die Wartezeit ist noch nicht erfüllt, ein Anspruch besteht noch nicht. Der Arbeitgeber **kann** ihr aber freiwillig Urlaub vorab gewähren.",
"schema": [
[
1,
"24 Werktage § 3 BUrlG"
],
[
1,
"Umrechnung 20 Arbeitstage"
],
[
1,
"Wartezeit sechs Monate § 4 BUrlG"
],
[
2,
"Voller Anspruch 20 Tage ab 30.09."
],
[
1,
"Juli: kein Anspruch, nur freiwillig"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-06",
"bereich": "ap-wiso",
"thema": "Krankheit im Urlaub",
"quelle": "angelehnt an: Musterprüfung Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 6,
"sachverhalt": "Kim Arnold erkrankt während ihres zweiwöchigen Urlaubs im Oktober für vier Tage. Sie geht am zweiten Krankheitstag zum Arzt und meldet sich sofort bei der Kanzlei.",
"aufgabe": "Erläutern Sie, was mit den Urlaubstagen geschieht und welche Pflichten Kim hat.",
"loesung": "- Erkrankt ein Arbeitnehmer während des Urlaubs, werden die durch **ärztliches Zeugnis** nachgewiesenen Tage der Arbeitsunfähigkeit **nicht auf den Urlaub angerechnet** (§ 9 BUrlG). Kim erhält die vier Tage zurück; eine eigenmächtige Verlängerung des Urlaubs ist aber nicht erlaubt.\n- **Anzeigepflicht:** Sie muss die Arbeitsunfähigkeit und die voraussichtliche Dauer **unverzüglich** mitteilen (§ 5 Abs. 1 Satz 1 EntgFG) – erfüllt.\n- **Nachweis:** Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, muss sie am folgenden Arbeitstag ärztlich festgestellt sein (§ 5 Abs. 1 Satz 2 EntgFG). Die Krankenkasse stellt dem Arbeitgeber die **elektronische AU** zum Abruf bereit (§ 5 Abs. 1a EntgFG).\n- Für die Krankheitstage erhält sie **Entgeltfortzahlung** bis zu sechs Wochen (§ 3 EntgFG).",
"schema": [
[
2,
"Keine Anrechnung mit Attest § 9 BUrlG"
],
[
1,
"Unverzügliche Anzeige"
],
[
1,
"Nachweis ab dem 4. Tag / eAU"
],
[
1,
"Keine eigenmächtige Verlängerung"
],
[
1,
"Entgeltfortzahlung § 3 EntgFG"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-07",
"bereich": "ap-wiso",
"thema": "Urlaub im Minijob",
"quelle": "eigene Aufgabe im Stil der Kammerprüfung",
"punkte": 4,
"sachverhalt": "Die Aushilfe Ella arbeitet auf Minijob-Basis an zwei festen Tagen pro Woche in der Kanzlei. Ihr Chef meint, Minijobber hätten keinen Anspruch auf Urlaub.",
"aufgabe": "Nehmen Sie Stellung und berechnen Sie den gesetzlichen Urlaubsanspruch.",
"loesung": "Der Chef irrt: Minijobber sind **Arbeitnehmer** und haben denselben Urlaubsanspruch wie Vollzeitkräfte (§ 1 BUrlG; Gleichbehandlung von Teilzeitkräften, § 4 TzBfG).\n- Berechnung nach Arbeitstagen: 24 Werktage : 6 × 2 Arbeitstage = **8 Urlaubstage** im Jahr\n- Während des Urlaubs wird der Lohn weitergezahlt (§ 11 BUrlG).",
"schema": [
[
1,
"Chef irrt – auch Minijobber haben Anspruch"
],
[
1,
"Rechtsgrundlage BUrlG / TzBfG"
],
[
1,
"8 Urlaubstage"
],
[
1,
"Urlaubsentgelt wird gezahlt"
]
],
"pruefung": "ap"
},
{
"id": "ap-wiso-08",
"bereich": "ap-wiso",
"thema": "Darlehensarten",
"quelle": "angelehnt an: Abschlussprüfung Sommer 2026, Wirtschafts- und Sozialkunde (StBK Niedersachsen)",
"punkte": 8,
"sachverhalt": "Ein Mandant benötigt für eine Maschine ein Darlehen von 60.000 EUR für 5 Jahre, Zinssatz 5 % pro Jahr. Die Bank bietet ein Fälligkeitsdarlehen, ein Abzahlungsdarlehen (Ratentilgung) und ein Annuitätendarlehen an.",
"aufgabe": "Erläutern Sie die drei Darlehensarten und berechnen Sie für das Fälligkeits- und das Abzahlungsdarlehen die Belastung im ersten Jahr.",
"loesung": "- **Fälligkeitsdarlehen:** Während der Laufzeit nur Zinsen, die Tilgung erfolgt in einer Summe am Ende.\n  - 1. Jahr: Zinsen 60.000 × 5 % = **3.000 EUR**, Tilgung 0 EUR → Belastung **3.000 EUR**; im 5. Jahr 63.000 EUR\n- **Abzahlungsdarlehen:** gleich hohe Tilgung, sinkende Zinsen, dadurch sinkende Belastung.\n  - Tilgung 60.000 : 5 = 12.000 EUR\n  - 1. Jahr: 12.000 + 3.000 Zinsen = **15.000 EUR**\n- **Annuitätendarlehen:** gleichbleibende Rate (Annuität) aus Zins und Tilgung; der Zinsanteil sinkt, der Tilgungsanteil steigt. Gut planbar.\n- Gesamtzinsen sind beim Fälligkeitsdarlehen am höchsten, weil die volle Schuld bis zum Ende verzinst wird.",
"schema": [
[
1,
"Fälligkeitsdarlehen erklärt"
],
[
1,
"Zinsen 3.000 EUR"
],
[
1,
"Abzahlungsdarlehen erklärt"
],
[
1,
"Tilgung 12.000 EUR"
],
[
1,
"Belastung 15.000 EUR"
],
[
2,
"Annuitätendarlehen erklärt"
],
[
1,
"Vergleich der Gesamtzinsen"
]
],
"pruefung": "ap"
},
{
"id": "ap-ber-01",
"bereich": "ap-ber",
"thema": "Nebengewerbe und Kleinunternehmer",
"quelle": "eigene Aufgabe nach der Prüfungsform Gesprächssimulation (§ 16 StFachAngAusbV)",
"punkte": 100,
"gespraech": true,
"sachverhalt": "Ihre Mandantin Laura Wendt (28) ist angestellte Erzieherin. Seit März 2026 verkauft sie nebenbei selbst genähte Kinderkleidung über einen Onlineshop. Sie erwartet 2026 etwa 12.000 EUR Umsatz und 4.000 EUR Kosten (Stoffe, Nähmaschine 900 EUR netto, Versand). Sie hat davon noch niemandem erzählt und kommt mit folgenden Fragen in die Kanzlei:\n- Muss ich das irgendwo anmelden?\n- Muss ich Umsatzsteuer berechnen?\n- Was passiert mit der Einkommensteuer, ich bin doch schon angestellt?\n- Was muss ich aufbewahren?",
"aufgabe": "Bereiten Sie sich 15 Minuten vor und führen Sie das Beratungsgespräch (höchstens 30 Minuten). Sprechen Sie Ihre Antworten laut oder notieren Sie Stichpunkte.",
"loesung": "**Erwartungshorizont (Fachinhalt):**\n- **Anmeldungen:** Gewerbeanmeldung bei der Gemeinde (§ 14 GewO), das Finanzamt erhält eine Mitteilung; zusätzlich Fragebogen zur steuerlichen Erfassung über ELSTER binnen eines Monats (§ 138 AO). Arbeitgeber informieren, wenn der Arbeitsvertrag eine Nebentätigkeit anzeigepflichtig macht.\n- **Umsatzsteuer:** Kleinunternehmerin (§ 19 UStG): Vorjahr 0 EUR, laufendes Jahr voraussichtlich unter 25.000 EUR → Umsätze steuerfrei, keine USt in Rechnungen, Hinweis auf § 19 UStG, kein Vorsteuerabzug. Option zur Regelbesteuerung bindet fünf Jahre – lohnt sich bei Endkunden meist nicht.\n- **Einkommensteuer:** Einkünfte aus Gewerbebetrieb (§ 15 EStG), Gewinn per Einnahmenüberschussrechnung (§ 4 Abs. 3 EStG, Anlage EÜR): ca. 12.000 − 4.000 = 8.000 EUR (Nähmaschine über 800 EUR → Abschreibung, nicht sofort). Pflicht zur Abgabe einer Erklärung, weil die Nebeneinkünfte 410 EUR übersteigen (§ 46 Abs. 2 Nr. 1 EStG). Der Gewinn wird mit dem Gehalt zusammengerechnet; mit Nachzahlung und Vorauszahlungen rechnen – Rücklage bilden.\n- **Gewerbesteuer:** Freibetrag 24.500 EUR (§ 11 Abs. 1 GewStG) → keine Gewerbesteuer.\n- **Aufbewahrung:** Belege, Rechnungen und Aufzeichnungen 8 Jahre (Buchungsbelege) bzw. 10 Jahre (Bücher, Abschlüsse) (§ 147 AO); Einnahmen und Ausgaben laufend aufzeichnen.\n**Erwartungshorizont (Gesprächsführung):** freundliche Begrüßung, Anliegen klären, Fachbegriffe erklären, aktiv zuhören, Nachfragen ermöglichen, am Ende zusammenfassen und nächste Schritte vereinbaren (z. B. Kanzlei übernimmt Fragebogen, Mandantin sammelt Belege).",
"schema": [
[
10,
"Gesprächseröffnung: Begrüßung, Anliegen erfragt, Gesprächsziel genannt"
],
[
15,
"Anmeldung Gewerbe und Finanzamt richtig erklärt"
],
[
15,
"Kleinunternehmerregelung mit Grenzen und Folgen"
],
[
15,
"Einkommensteuer: Einkünfte aus Gewerbebetrieb, EÜR, Pflichtveranlagung, Vorauszahlungen"
],
[
5,
"Gewerbesteuer-Freibetrag"
],
[
10,
"Aufbewahrungsfristen und Aufzeichnungen"
],
[
15,
"Verständliche Sprache, Fachbegriffe erklärt, auf Fragen eingegangen"
],
[
15,
"Zusammenfassung und vereinbarte nächste Schritte"
]
],
"pruefung": "ap"
},
{
"id": "ap-ber-02",
"bereich": "ap-ber",
"thema": "Haushaltshilfe auf Minijob-Basis",
"quelle": "eigene Aufgabe nach der Prüfungsform Gesprächssimulation (§ 16 StFachAngAusbV)",
"punkte": 100,
"gespraech": true,
"sachverhalt": "Das Ehepaar Böhm (beide berufstätig, zwei Kinder) möchte ab Januar 2026 eine Haushaltshilfe für Putzen und Bügeln beschäftigen, 8 Stunden pro Woche zu 15 EUR. Bisher bezahlen sie eine Nachbarin bar „ohne Papiere“. Sie fragen:\n- Dürfen wir das so weitermachen?\n- Was kostet uns eine legale Anstellung?\n- Können wir das von der Steuer absetzen?\n- Was ist, wenn die Hilfe krank wird oder Urlaub braucht?",
"aufgabe": "Bereiten Sie sich 15 Minuten vor und führen Sie das Beratungsgespräch (höchstens 30 Minuten). Sprechen Sie Ihre Antworten laut oder notieren Sie Stichpunkte.",
"loesung": "**Erwartungshorizont (Fachinhalt):**\n- **Bisherige Praxis:** Schwarzarbeit ist eine Ordnungswidrigkeit (Schwarzarbeitsbekämpfungsgesetz); Beiträge und Steuern können nachgefordert werden, kein Unfallversicherungsschutz für die Hilfe. Empfehlung: sofort anmelden.\n- **Minijob prüfen:** 8 Std. × 15 EUR × 4,33 Wochen ≈ **520 EUR** im Monat ≤ Geringfügigkeitsgrenze 2026 von **603 EUR** → Minijob im Privathaushalt.\n- **Haushaltsscheckverfahren** über die Minijob-Zentrale: Anmeldung mit Haushaltsscheck, Abgaben werden halbjährlich vom Konto eingezogen.\n- **Kosten:** Arbeitgeber-Abgaben im Privathaushalt ca. 15 % (KV 5 %, RV 5 %, Pauschsteuer 2 %, Unfallversicherung 1,6 %, Umlagen) – deutlich günstiger als im gewerblichen Bereich. Die Hilfe zahlt 13,6 % RV, wenn sie sich nicht befreien lässt.\n- **Steuer:** 20 % der Aufwendungen, höchstens **510 EUR** im Jahr direkt von der Steuer (§ 35a Abs. 1 EStG). Bei ca. 6.240 EUR Lohn + Abgaben ist der Höchstbetrag erreicht. Barzahlung des Lohns schadet hier nicht: Die Pflicht zur Zahlung aufs Konto gilt nur für Dienstleistungen und Handwerker (§ 35a Abs. 5 Satz 3 EStG).\n- **Arbeitsrecht:** Die Hilfe ist Arbeitnehmerin: Anspruch auf Mindestlohn (2026: 13,90 EUR), Urlaub (bei zwei Arbeitstagen pro Woche 8 Tage), Entgeltfortzahlung bei Krankheit bis zu sechs Wochen; die Umlage U1 erstattet einen Teil.\n**Erwartungshorizont (Gesprächsführung):** Vertrauen schaffen, ohne zu belehren auf die Risiken hinweisen, Zahlen verständlich darstellen, nächste Schritte vereinbaren (Haushaltsscheck ausfüllen, Arbeitsvertrag aufsetzen).",
"schema": [
[
10,
"Gesprächseröffnung und Klärung des Anliegens"
],
[
10,
"Risiken der Schwarzarbeit sachlich erklärt"
],
[
15,
"Minijob-Grenze 2026 geprüft und Haushaltsscheckverfahren erklärt"
],
[
10,
"Kosten für Arbeitgeber und Hilfe"
],
[
15,
"Steuerermäßigung 20 %, höchstens 510 EUR"
],
[
10,
"Arbeitsrechte: Urlaub, Krankheit, Mindestlohn"
],
[
15,
"Verständlichkeit und Mandantenorientierung"
],
[
15,
"Zusammenfassung und nächste Schritte"
]
],
"pruefung": "ap"
}
];
