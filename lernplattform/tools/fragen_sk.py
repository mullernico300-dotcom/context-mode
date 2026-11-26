#!/usr/bin/env python3
"""Quizfragen und Karteikarten für Sozialkunde (Arbeitsrecht, BGB) – wird in js/data.js eingetragen.

Aufruf:  python3 tools/fragen_sk.py
In jeder Frage steht die RICHTIGE Antwort zuerst; fragen_lib.q() mischt sie fest an eine andere Stelle.
"""
import math
import sys

from fragen_lib import eintragen, q

LF = "sk"

# Teilurlaub: Eintritt 1. September, 5-Tage-Woche (20 Tage), Wartezeit noch nicht erfüllt: 4 volle Monate
teil = 20 * 4 / 12
assert round(teil, 2) == 6.67 and math.floor(teil + 0.5) == 7

QUIZ = [
    q("Ab wann ist ein Mensch rechtsfähig, kann also Rechte und Pflichten haben?",
      ["Mit Vollendung der Geburt", "Mit 7 Jahren", "Mit 18 Jahren", "Mit dem Schulabschluss"], 1,
      "Jeder Mensch ist ab der vollendeten Geburt rechtsfähig, § 1 BGB. Geschäftsfähig wird man erst später."),
    q("Ab welchem Alter ist man beschränkt geschäftsfähig?",
      ["Ab 7 Jahren", "Ab 14 Jahren", "Ab 16 Jahren", "Ab 18 Jahren"], 1,
      "Unter 7 Jahren: geschäftsunfähig. Von 7 bis 17 Jahren: beschränkt geschäftsfähig, §§ 104 bis 106 BGB. Ab 18: voll."),
    q("Ein 15-Jähriger kauft sich ein Spiel und bezahlt sofort bar vom Taschengeld. Wie ist der Kauf zu beurteilen?",
      ["Von Anfang an wirksam (Taschengeldparagraph)", "Schwebend unwirksam, die Eltern müssen zustimmen",
       "Nichtig, weil er noch nicht volljährig ist", "Nur wirksam, wenn der Verkäufer das Alter nicht kannte"], 2,
      "Wer mit Taschengeld sofort bezahlt, schließt einen von Anfang an gültigen Vertrag, § 110 BGB."),
    q("Wie muss ein Grundstückskauf beurkundet werden?",
      ["Vom Notar", "Schriftlich ohne Notar", "Mündlich reicht", "Per E-Mail"], 2,
      "Ohne notarielle Beurkundung ist der Vertrag nichtig, § 311b Abs. 1 BGB. Er wird erst mit der Grundbucheintragung geheilt."),
    q("Wann muss man seine Erklärung wegen eines Irrtums (z. B. vertippt) anfechten?",
      ["Sofort, nachdem man den Irrtum bemerkt hat", "Innerhalb eines Jahres", "Innerhalb von 3 Wochen", "Jederzeit"], 2,
      "Die Irrtumsanfechtung muss unverzüglich erfolgen, § 121 BGB. Bei Täuschung oder Drohung bleibt ein Jahr Zeit, § 124 BGB."),
    q("Ein Bewerber wird im Vorstellungsgespräch gefragt, ob er schwanger sei. Darf er lügen?",
      ["Ja, die Frage ist unzulässig", "Nein, dann kann der Arbeitgeber anfechten",
       "Nur schriftlich", "Nur wenn er die Stelle unbedingt will"], 1,
      "Bei unzulässigen Fragen darf man lügen, ohne dass der Arbeitgeber anfechten kann. Bei zulässigen Fragen wäre das anders, § 123 BGB."),
    q("Wie lange darf ein Arbeitsvertrag ohne sachlichen Grund höchstens befristet werden?",
      ["2 Jahre", "1 Jahr", "3 Jahre", "5 Jahre"], 2,
      "Ohne Grund höchstens 2 Jahre, mit höchstens drei Verlängerungen, und die Befristung muss schriftlich sein, § 14 TzBfG."),
    q("Ein Arbeitnehmer arbeitet 7 Stunden am Tag. Wie lang muss die Pause mindestens sein?",
      ["30 Minuten", "15 Minuten", "45 Minuten", "60 Minuten"], 1,
      "Bei mehr als 6 Stunden: 30 Minuten, bei mehr als 9 Stunden: 45 Minuten, § 4 ArbZG."),
    q("Mira fängt am 1. September an (5-Tage-Woche, 20 Urlaubstage). Wie viel Urlaub hat sie im ersten Jahr?",
      ["7 Tage", "6 Tage", "20 Tage", "5 Tage"], 3,
      "Wartezeit von 6 Monaten noch nicht erfüllt: Teilurlaub 1/12 je vollem Monat. 4/12 von 20 Tagen = 6,67, aufgerundet 7 Tage, § 5 BUrlG."),
    q("Wie lange zahlt der Arbeitgeber bei Krankheit den Lohn weiter?",
      ["Bis zu 6 Wochen", "Bis zu 4 Wochen", "Bis zu 3 Monate", "Nur 3 Tage"], 1,
      "Entgeltfortzahlung bis zu 6 Wochen, danach zahlt die Krankenkasse Krankengeld, § 3 EntgFG, § 44 SGB V."),
    q("Wie lange nach der Geburt darf eine Frau auf keinen Fall arbeiten (Normalfall)?",
      ["8 Wochen", "6 Wochen", "12 Wochen", "4 Monate"], 2,
      "8 Wochen nach der Geburt, bei Früh- und Mehrlingsgeburten 12 Wochen, § 3 Abs. 2 MuSchG."),
    q("Wer zahlt in den Schutzfristen vor und nach der Geburt?",
      ["Krankenkasse (Mutterschaftsgeld) und Arbeitgeber (Zuschuss)", "Der Arbeitgeber allein", "Die Agentur für Arbeit", "Niemand"], 3,
      "Die Krankenkasse zahlt höchstens 13 € am Tag, der Arbeitgeber legt bis zum Nettolohn drauf, §§ 19, 20 MuSchG."),
    q("Wie muss eine Kündigung erklärt werden?",
      ["Schriftlich auf Papier mit Unterschrift", "Per E-Mail", "Per WhatsApp", "Mündlich"], 1,
      "Kündigung und Aufhebungsvertrag brauchen die Schriftform mit eigenhändiger Unterschrift, § 623 BGB."),
    q("Wie lange hat man Zeit, gegen eine Kündigung zu klagen?",
      ["3 Wochen ab Erhalt", "1 Woche", "4 Wochen", "3 Monate"], 2,
      "Die Klagefrist beträgt 3 Wochen ab Zugang der Kündigung, § 4 KSchG. Danach gilt die Kündigung meist als wirksam."),
    q("Wann gilt der allgemeine Kündigungsschutz des Kündigungsschutzgesetzes?",
      ["Nach mehr als 6 Monaten im Betrieb mit mehr als 10 Arbeitnehmern", "Ab dem ersten Tag in jedem Betrieb",
       "Nach 2 Jahren im Betrieb", "Nur für Betriebe mit Betriebsrat"], 3,
      "Voraussetzungen: länger als 6 Monate im Betrieb und mehr als 10 Arbeitnehmer, §§ 1, 23 KSchG."),
    q("Wer muss einer Kündigung eines schwerbehinderten Menschen vorher zustimmen?",
      ["Das Integrationsamt", "Das Arbeitsgericht", "Die Krankenkasse", "Der Betriebsrat allein"], 1,
      "Die Zustimmung des Integrationsamts ist vor der Kündigung nötig, sobald das Arbeitsverhältnis länger als 6 Monate besteht, § 168 SGB IX."),
]

KARTEN = [
    ("Was bedeutet „rechtsfähig“, und ab wann ist man es?",
     "Man kann Rechte und Pflichten haben. Jeder Mensch ist es ab der vollendeten Geburt (§ 1 BGB), eine GmbH als juristische Person ebenfalls."),
    ("Wie geht das Eigentum auf den Käufer über?",
     "Bewegliche Sachen: Einigung und Übergabe (§ 929 BGB). Grundstücke: Auflassung vor dem Notar und Eintragung im Grundbuch (§§ 873, 925 BGB)."),
    ("Die drei Stufen der Geschäftsfähigkeit",
     "Unter 7 Jahren geschäftsunfähig (nichtig), 7 bis 17 beschränkt geschäftsfähig (Eltern müssen zustimmen), ab 18 voll geschäftsfähig (§§ 104 bis 106 BGB)."),
    ("Was besagt der Taschengeldparagraph?",
     "Zahlt ein Minderjähriger mit seinem Taschengeld sofort, ist der Kauf von Anfang an wirksam (§ 110 BGB)."),
    ("Welche Formvorschriften musst du kennen?",
     "Grundstückskauf: Notar (§ 311b). Bürgschaft: schriftlich (§ 766). Mietvertrag über 1 Jahr: soll schriftlich sein, sonst unbefristet (§ 550). Verstoß: nichtig (§ 125 BGB)."),
    ("Anfechtung: Gründe, Fristen, Folge",
     "Irrtum: sofort (§§ 119, 121). Täuschung oder Drohung: 1 Jahr (§§ 123, 124). Folge: Das Geschäft ist von Anfang an nichtig (§ 142 BGB)."),
    ("Was verbietet das AGG, und was bekommt, wer diskriminiert wurde?",
     "Benachteiligung wegen Herkunft, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität. Es gibt Schadensersatz und Entschädigung, aber keinen Anspruch auf die Stelle (§ 15 AGG)."),
    ("Wie ist der Arbeitsvertrag zu dokumentieren?",
     "Er gilt auch mündlich. Die wichtigsten Bedingungen muss der Arbeitgeber schriftlich aushändigen (§ 2 NachwG). Sonst droht ein Bußgeld bis 2.000 € (§ 4 NachwG)."),
    ("Befristung: Wann ist sie zulässig?",
     "Mit sachlichem Grund, oder ohne Grund höchstens 2 Jahre mit höchstens drei Verlängerungen. Schriftform nötig. Ist sie ungültig, gilt der Vertrag als unbefristet (§§ 14, 16 TzBfG)."),
    ("Arbeitszeit, Pausen und Ruhezeit",
     "8 Stunden täglich (bis 10 Stunden bei Durchschnitt 8). Pause: über 6 Stunden 30 Minuten, über 9 Stunden 45 Minuten. Nach Feierabend 11 Stunden Ruhe (§§ 3 bis 5 ArbZG)."),
    ("Wie viel Urlaub gibt es mindestens?",
     "24 Werktage (Montag bis Samstag), das sind 20 Tage bei der 5-Tage-Woche. Voller Anspruch nach 6 Monaten Wartezeit, davor 1/12 je vollem Monat (§§ 3 bis 5 BUrlG)."),
    ("Was gilt bei Krankheit?",
     "Lohn bis zu 6 Wochen vom Arbeitgeber, nach 4 Wochen im Betrieb. Sofort krankmelden, Krankschreibung bei mehr als 3 Kalendertagen. Danach Krankengeld (§§ 3, 5 EntgFG, § 44 SGB V)."),
    ("Mutterschutz: Fristen, Verbote und Geld",
     "6 Wochen vor und 8 Wochen nach der Geburt (12 bei Früh- oder Mehrlingsgeburt). Kein Nachtdienst, kein Sonntag, nichts Gefährliches. Kündigungsverbot bis 4 Monate nach der Geburt. Mutterschaftsgeld höchstens 13 € am Tag (§§ 3 bis 20 MuSchG)."),
    ("Kündigung: Form, Fristen, Klage",
     "Schriftlich mit Unterschrift (§ 623 BGB). Normal 4 Wochen zum 15. oder Monatsende, in der Probezeit 2 Wochen (§ 622). Fristlos nur aus wichtigem Grund binnen 2 Wochen (§ 626). Klagefrist 3 Wochen (§ 4 KSchG)."),
    ("Wann gilt der Kündigungsschutz, und welche Gründe gibt es?",
     "Nach mehr als 6 Monaten in Betrieben mit mehr als 10 Arbeitnehmern (§§ 1, 23 KSchG). Gründe: Person (z. B. lange Krankheit), Verhalten (z. B. ständiges Zuspätkommen) oder Betrieb (z. B. Auftragsmangel)."),
]

if __name__ == "__main__":
    sys.exit(eintragen(LF, QUIZ, KARTEN))
