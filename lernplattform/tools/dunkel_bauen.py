#!/usr/bin/env python3
"""Erzeugt css/dunkel.css aus css/style.css.

Alle Regeln, die feste helle Flächen (#fff, Pastelltöne, weißes Glas) oder dunkle
Statusschrift setzen, bekommen eine Überschreibung unter :root[data-theme="dark"].
Die Tokens (--text, --flaeche, ...) und der Glas-Look der unteren Leiste stehen
von Hand im Kopf der Datei (tools/dunkel_kopf.css).

Aufruf:  python3 tools/dunkel_bauen.py
"""
import re
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
QUELLE = WURZEL / "css" / "style.css"
KOPF = Path(__file__).resolve().parent / "dunkel_kopf.css"
ZIEL = WURZEL / "css" / "dunkel.css"

DUNKEL = ':root[data-theme="dark"]'

# Rahmen dunkler Karten (eigener Farbverlauf): nicht umfärben
UEBERSPRINGEN = re.compile(r"^\s*\.(av|clip|uhr|hero-karte|ev-video|video|unten)\b")

FLAECHEN = {
    "#fff": "var(--flaeche)", "#ffffff": "var(--flaeche)",
    "#eef0f8": "var(--flaeche-2)", "#f7f8fc": "var(--flaeche-2)",
    "#eef2ff": "var(--flaeche-2)", "#f4f5fb": "var(--flaeche-2)",
    "#fff7ed": "rgba(245, 158, 11, 0.14)", "#fef3c7": "rgba(245, 158, 11, 0.16)",
    "#fdf0d5": "rgba(245, 158, 11, 0.16)",
    "#ffe0e5": "rgba(244, 63, 94, 0.16)", "#fee2e2": "rgba(244, 63, 94, 0.16)",
    "#fde2e2": "rgba(244, 63, 94, 0.16)",
    "#d6f5e6": "rgba(16, 185, 129, 0.16)", "#ecfdf5": "rgba(16, 185, 129, 0.14)",
    "#dcfce7": "rgba(16, 185, 129, 0.16)", "#e3f5ea": "rgba(16, 185, 129, 0.16)",
    "#fff1d6": "rgba(245, 158, 11, 0.15)", "#fff6e0": "rgba(245, 158, 11, 0.14)", "#fff4e5": "rgba(245, 158, 11, 0.14)",
    "#ffe8ec": "rgba(244, 63, 94, 0.16)",
    "#e0e7ff": "rgba(99, 102, 241, 0.20)", "#eef0ff": "rgba(99, 102, 241, 0.16)",
    "#f1f5f9": "var(--flaeche-2)",
}
RAENDER = {
    "#c5c9e6": "var(--linie)", "#cfd3ee": "var(--linie)", "#dde0f2": "var(--linie)",
    "#c7cdf5": "var(--linie)", "#c7cdf8": "var(--linie)", "#e4e7f3": "var(--linie)",
    "#f5d48a": "rgba(245, 158, 11, 0.32)", "#f7d9a8": "rgba(245, 158, 11, 0.32)",
}
SCHRIFT = {
    "#08764b": "#6ee7b7", "#08623d": "#6ee7b7", "#14532d": "#86efac", "#15803d": "#86efac",
    "#b45309": "#fbbf24", "#92400e": "#fcd34d", "#8a5300": "#fcd34d", "#7a4b00": "#fcd34d",
    "#b3213a": "#fda4af", "#8f1d31": "#fda4af", "#b91c1c": "#fca5a5", "#9b1c1c": "#fca5a5",
    "#7f1d1d": "#fca5a5",
}
WEISS_GLAS = re.compile(r"rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*(0?\.\d+|1)\s*\)")
MIX_WEISS = re.compile(r"(color-mix\(in srgb,[^)]*?),\s*white\)")


def regeln(text, tiefe=0):
    """Zerlegt CSS in (Selektor, Körper)-Paare; @media bleibt als Gruppe erhalten."""
    out, i, n = [], 0, len(text)
    while i < n:
        j = text.find("{", i)
        if j < 0:
            break
        kopf = text[i:j].strip()
        k, d = j + 1, 1
        while k < n and d:
            d += {"{": 1, "}": -1}.get(text[k], 0)
            k += 1
        koerper = text[j + 1:k - 1]
        out.append((kopf, koerper))
        i = k
    return out


def deklarationen(koerper):
    teile, tief, akt = [], 0, ""
    for z in koerper:
        if z == "(":
            tief += 1
        elif z == ")":
            tief -= 1
        if z == ";" and tief == 0:
            teile.append(akt)
            akt = ""
        else:
            akt += z
    if akt.strip():
        teile.append(akt)
    ergebnis = []
    for t in teile:
        if ":" in t:
            e, w = t.split(":", 1)
            ergebnis.append((e.strip().lower(), w.strip()))
    return ergebnis


def weiss_zu_dunkel(wert):
    def ersetze(m):
        a = float(m.group(1))
        if a < 0.5:
            return m.group(0)
        return "rgba(255, 255, 255, 0.07)" if a < 0.78 else "rgba(255, 255, 255, 0.10)"
    return WEISS_GLAS.sub(ersetze, wert)


def umfaerben(deks):
    neu = []
    hat_flaeche = False
    for eig, wert in deks:
        low = wert.lower().replace("!important", "").strip()
        imp = " !important" if "!important" in wert.lower() else ""
        if eig in ("background", "background-color"):
            if low in FLAECHEN:
                neu.append((eig, FLAECHEN[low] + imp))
                hat_flaeche = True
                continue
            if "gradient" not in low:
                w2 = weiss_zu_dunkel(wert)
                w2 = MIX_WEISS.sub(r"\1, var(--flaeche))", w2)
                if w2 != wert:
                    neu.append((eig, w2))
                    hat_flaeche = True
                    continue
        elif eig.startswith("border") or eig == "outline":
            w2 = weiss_zu_dunkel(wert)
            w2 = w2.replace("rgba(255, 255, 255, 0.07)", "var(--linie)").replace("rgba(255, 255, 255, 0.10)", "var(--linie)")
            for hexf, ersatz in RAENDER.items():
                w2 = re.sub(re.escape(hexf) + r"\b", ersatz, w2, flags=re.I)
            if w2 != wert:
                neu.append((eig, w2))
                continue
        elif eig == "color":
            if low in SCHRIFT:
                neu.append((eig, SCHRIFT[low] + imp))
                continue
    # Dunkle Standardschrift auf umgefärbter Fläche
    if hat_flaeche and not any(e == "color" for e, _ in neu):
        if not any(e == "color" and w.lower().startswith(("#fff", "rgba(255")) for e, w in deks):
            neu.append(("color", "var(--text)"))
    return neu


def selektoren_dunkel(sel):
    teile = [s.strip() for s in re.split(r",(?![^(]*\))", sel) if s.strip()]
    teile = [s for s in teile if not UEBERSPRINGEN.match(s)]
    return ",\n".join(f"{DUNKEL} {s}" for s in teile)


def erzeuge(text, einrueck=""):
    ausgabe = []
    for kopf, koerper in regeln(text):
        if kopf.startswith("@media") or kopf.startswith("@supports"):
            inner = erzeuge(koerper, einrueck + "  ")
            if inner.strip():
                ausgabe.append(f"{einrueck}{kopf} {{\n{inner}{einrueck}}}\n")
            continue
        if kopf.startswith("@") or not kopf:
            continue
        neu = umfaerben(deklarationen(koerper))
        sel = selektoren_dunkel(kopf)
        if neu and sel:
            zeilen = "".join(f"{einrueck}  {e}: {w};\n" for e, w in neu)
            ausgabe.append(f"{einrueck}{sel} {{\n{zeilen}{einrueck}}}\n")
    return "".join(ausgabe)


def main():
    quelle = QUELLE.read_text(encoding="utf-8")
    quelle = re.sub(r"/\*.*?\*/", "", quelle, flags=re.S)
    kopf = KOPF.read_text(encoding="utf-8")
    ziel = (
        "/* Dunkelmodus und Glas-Leiste. ERZEUGT von tools/dunkel_bauen.py aus css/style.css – nicht von Hand ändern,\n"
        "   Ergänzungen gehören in tools/dunkel_kopf.css. */\n"
        + kopf
        + "\n/* ---- automatisch abgeleitete Überschreibungen ---- */\n"
        + erzeuge(quelle)
    )
    ZIEL.write_text(ziel, encoding="utf-8")
    print(f"{ZIEL.relative_to(WURZEL)}: {len(ziel)} Zeichen, {ziel.count(DUNKEL)} Regeln")


if __name__ == "__main__":
    sys.exit(main())
