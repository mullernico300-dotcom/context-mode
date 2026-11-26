#!/usr/bin/env python3
"""Quizfragen und Karteikarten für LF 5 (Sozialversicherung) – wird in js/data.js eingetragen.

Aufruf:  python3 tools/fragen_lf5.py
Rechenfragen werden vor dem Eintragen nachgerechnet (assert).
"""
import sys

from fragen_lib import eintragen, eur, q

LF = "lf5"


# --- Rechnungen -------------------------------------------------------------
BBG_KV, BBG_RV = 5812.50, 8450.00
an_anteil_kinderlos = round(2400 * (0.073 + 0.0145 + 0.024 + 0.093 + 0.013), 2)
an_anteil_mit_kind = round(2400 * (0.073 + 0.0145 + 0.018 + 0.093 + 0.013), 2)
assert an_anteil_kinderlos == 522.00 and an_anteil_mit_kind == 507.60
kv_7000 = round(BBG_KV * (0.073 + 0.0145), 2)
assert kv_7000 == 508.59 and round(7000 * 0.0875, 2) == 612.50 and round(BBG_RV * 0.0875, 2) == 739.38
rv_9000 = round(BBG_RV * 0.093, 2)
assert rv_9000 == 785.85 and round(9000 * 0.093, 2) == 837.00 and round(BBG_KV * 0.093, 2) == 540.56
assert round(BBG_RV * 0.186, 2) == 1571.70
assert round(77400 / 12, 2) == 6450.00 and round(69750 / 12, 2) == 5812.50 and round(101400 / 12, 2) == 8450.00


QUIZ = [
    q("Wie viele Zweige hat die gesetzliche Sozialversicherung?",
      ["Fünf", "Vier", "Sechs", "Drei"], 1,
      "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung."),
    q("Welchen Sozialversicherungszweig bezahlt der Arbeitgeber allein?",
      ["Die Unfallversicherung", "Die Rentenversicherung", "Die Pflegeversicherung", "Die Arbeitslosenversicherung"], 1,
      "Den Beitrag zur Unfallversicherung zahlt allein der Unternehmer, § 150 Abs. 1 SGB VII."),
    q("Wer ist Träger der gesetzlichen Unfallversicherung?",
      ["Die Berufsgenossenschaften", "Die Krankenkassen", "Die Deutsche Rentenversicherung", "Die Bundesagentur für Arbeit"], 1,
      "Träger sind die Berufsgenossenschaften (SGB VII). Der Beitrag läuft nicht über die Krankenkasse."),
    q("Wer ist Einzugsstelle für den Gesamtsozialversicherungsbeitrag?",
      ["Die Krankenkasse des Arbeitnehmers", "Das Finanzamt", "Die Berufsgenossenschaft", "Die Deutsche Rentenversicherung"], 1,
      "Die Krankenkasse zieht ein und verteilt an die anderen Träger, § 28h Abs. 1 SGB IV."),
    q("Wann sind die Sozialversicherungsbeiträge spätestens fällig?",
      ["Am drittletzten Bankarbeitstag des Monats, in dem gearbeitet wurde",
       "Am 10. des Folgemonats", "Am letzten Tag des Folgemonats", "Am 15. des Monats, in dem gearbeitet wurde"], 1,
      "Fälligkeit: drittletzter Bankarbeitstag des Arbeitsmonats, § 23 Abs. 1 Satz 2 SGB IV."),
    q("Wie viel Prozent vom allgemeinen Beitragssatz zur Krankenversicherung (14,6 %) zahlt der Arbeitnehmer?",
      ["7,3 %", "14,6 %", "8,75 %", "9,3 %"], 2,
      "Der allgemeine Beitragssatz wird hälftig geteilt: 7,3 %, § 241 SGB V."),
    q("Der durchschnittliche Zusatzbeitrag 2026 beträgt 2,9 %. Wie viel davon zahlt der Arbeitnehmer?",
      ["1,45 %", "2,9 %", "0,725 %", "Nichts"], 2,
      "Auch den Zusatzbeitrag tragen beide je zur Hälfte: 1,45 %, § 249 Abs. 1 SGB V."),
    q("Welche monatliche Grenze gilt 2026 für die Beitragsbemessung in der Kranken- und Pflegeversicherung?",
      ["5.812,50 €", "6.450,00 €", "8.450,00 €", "7.000,00 €"], 2,
      "BBG Kranken-/Pflegeversicherung: 69.750 € im Jahr, 5.812,50 € im Monat, § 223 Abs. 3 SGB V."),
    q("Welche monatliche Grenze gilt 2026 für die Beitragsbemessung in der Renten- und Arbeitslosenversicherung?",
      ["8.450,00 €", "5.812,50 €", "6.450,00 €", "9.000,00 €"], 2,
      "BBG Rentenversicherung: 101.400 € im Jahr, 8.450 € im Monat, § 159 SGB VI. Sie gilt auch für die Arbeitslosenversicherung."),
    q("Ab welchem Monatsverdienst 2026 darf ein Angestellter aus der gesetzlichen Krankenversicherung ausscheiden (Versicherungspflichtgrenze)?",
      ["Über 6.450 €", "Über 5.812,50 €", "Über 8.450 €", "Über 4.800 €"], 2,
      "Versicherungspflichtgrenze 2026: 77.400 € im Jahr, also 6.450 € im Monat, § 6 Abs. 6 SGB V. Nicht mit der Beitragsbemessungsgrenze verwechseln."),
    q("Wie hoch ist der Arbeitnehmeranteil zur Pflegeversicherung bei zwei Kindern unter 25 Jahren?",
      ["1,55 %", "1,8 %", "2,4 %", "1,30 %"], 2,
      "Ab dem 2. Kind unter 25 gibt es 0,25 % Abschlag je Kind: 1,8 % − 0,25 % = 1,55 %, § 55 Abs. 3 SGB XI."),
    q("Lena ist 30, kinderlos und verdient 2.400 € brutto. Wie hoch ist ihr gesamter Arbeitnehmeranteil (KV mit Zusatzbeitrag, PV, RV, AV)?",
      [eur(an_anteil_kinderlos), eur(an_anteil_mit_kind), eur(540.00), eur(504.00)], 3,
      "KV 7,3 % + 1,45 %, PV 2,4 % (kinderlos), RV 9,3 %, AV 1,3 % = 21,75 % von 2.400 € = 522,00 €. Mit Kind wären es nur 507,60 €."),
    q("Brutto 7.000 €. Wie hoch ist der Arbeitnehmeranteil zur Krankenversicherung (7,3 % + 1,45 %)?",
      [eur(kv_7000), eur(612.50), eur(739.38), eur(490.00)], 3,
      "Gedeckelt auf 5.812,50 €: 5.812,50 € × 8,75 % = 508,59 €. Die vollen 7.000 € ergäben 612,50 €."),
    q("Brutto 9.000 €. Wie hoch ist der Arbeitnehmeranteil zur Rentenversicherung?",
      [eur(rv_9000), eur(837.00), eur(540.56), eur(1571.70)], 3,
      "Beitragsbemessungsgrenze 8.450 €: 8.450 € × 9,3 % = 785,85 €. Der Arbeitnehmer zahlt nur den halben Satz."),
    q("Für welche Arbeitgeber gilt die Umlage U1 (Entgeltfortzahlung bei Krankheit)?",
      ["Nur für Arbeitgeber mit bis zu 30 Arbeitnehmern", "Für alle Arbeitgeber", "Nur für Arbeitgeber mit mehr als 30 Arbeitnehmern", "Nur für Arbeitgeber mit Auszubildenden"], 3,
      "U1 zahlen nur kleine Betriebe (bis 30 Arbeitnehmer; Azubis zählen nicht mit, Teilzeit anteilig), § 3 Abs. 1 AAG. U2 zahlen alle."),
    q("Wer zahlt die Insolvenzgeldumlage (U3), 2026 sind es 0,15 %?",
      ["Der Arbeitgeber allein", "Arbeitgeber und Arbeitnehmer je zur Hälfte", "Der Arbeitnehmer allein", "Die Krankenkasse"], 3,
      "Die Umlagen U1 bis U3 trägt der Arbeitgeber allein, §§ 358, 360 SGB III."),
]

KARTEN = [
    ("Nenne die fünf Zweige der Sozialversicherung.",
     "Krankenversicherung (SGB V), Pflegeversicherung (SGB XI), Rentenversicherung (SGB VI), Arbeitslosenversicherung (SGB III), Unfallversicherung (SGB VII)."),
    ("Welcher Zweig wird allein vom Arbeitgeber bezahlt?",
     "Die Unfallversicherung (§ 150 Abs. 1 SGB VII). Sie geht direkt an die Berufsgenossenschaft."),
    ("Woraus besteht der Gesamtsozialversicherungsbeitrag?",
     "Aus den Beiträgen zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung (§ 28d SGB IV). Die Unfallversicherung gehört nicht dazu."),
    ("Wer zahlt den Gesamtsozialversicherungsbeitrag an wen?",
     "Der Arbeitgeber schuldet und zahlt ihn (§ 28e SGB IV) an die Krankenkasse des Arbeitnehmers als Einzugsstelle (§ 28h SGB IV)."),
    ("Wann sind die Beiträge fällig?",
     "Spätestens am drittletzten Bankarbeitstag des Monats, in dem gearbeitet wurde (§ 23 Abs. 1 Satz 2 SGB IV)."),
    ("Wie hoch ist der Arbeitnehmeranteil 2026 in den einzelnen Zweigen?",
     "KV 7,3 % + 1,45 % Zusatzbeitrag, PV 1,8 % (kinderlos ab 23: 2,4 %), RV 9,3 %, AV 1,3 %. Zusammen 21,15 %, kinderlos 21,75 %."),
    ("Was ist der Unterschied zwischen Versicherungspflichtgrenze und Beitragsbemessungsgrenze?",
     "Versicherungspflichtgrenze (6.450 €/Monat): ab hier darf man aus der gesetzlichen Krankenversicherung aussteigen. Beitragsbemessungsgrenze (KV/PV 5.812,50 €, RV/AV 8.450 €): bis hierhin werden Beiträge berechnet."),
    ("Was zahlt ein Kinderloser ab 23 in der Pflegeversicherung?",
     "Einen Zuschlag von 0,6 %, den der Arbeitnehmer allein trägt: Anteil 2,4 % statt 1,8 % (§ 55 Abs. 3 SGB XI)."),
    ("Wie sinkt der Pflegebeitrag mit Kindern?",
     "Ab dem 2. Kind unter 25: Abschlag 0,25 % je Kind. 2 Kinder 1,55 %, 3 Kinder 1,30 %, 4 Kinder 1,05 %, ab 5 Kindern 0,80 %."),
    ("Was sind die Umlagen U1, U2 und U3?",
     "U1: Entgeltfortzahlung bei Krankheit (nur Betriebe bis 30 Arbeitnehmer). U2: Mutterschaft (alle Arbeitgeber). U3: Insolvenzgeld (0,15 % 2026). Alle zahlt der Arbeitgeber allein."),
]


if __name__ == "__main__":
    sys.exit(eintragen(LF, QUIZ, KARTEN))
