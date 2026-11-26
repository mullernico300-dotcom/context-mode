"""Gemeinsame Funktionen für tools/fragen_<lf>.py (Quizfragen und Karteikarten in js/data.js eintragen)."""
import json
import random
import re
import zlib
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "js" / "data.js"


def eur(x):
    return f"{x:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".") + " €"


def q(frage, antworten, stufe, erklaerung):
    """antworten[0] ist die RICHTIGE Antwort; sie wird je Frage fest (aus dem Text abgeleitet) an eine
    andere Stelle gesetzt, damit nicht immer A stimmt."""
    assert len(antworten) == 4 and len(set(antworten)) == 4, frage
    rng = random.Random(zlib.crc32(frage.encode("utf-8")))
    pos = rng.randrange(4)
    richtige, rest = antworten[0], list(antworten[1:])
    liste = rest[:pos] + [richtige] + rest[pos:]
    return {"frage": frage, "antworten": liste, "richtig": pos, "stufe": stufe, "erklaerung": erklaerung}


def eintragen(lfid, quiz, karten):
    text = DATA.read_text(encoding="utf-8")
    start = text.index(f'"id": "{lfid}"')
    rest = text[start + 10:]
    naechste = [rest.find(k) for k in ('"id": "lf', '"id": "sk"') if rest.find(k) >= 0]
    ende = start + 10 + min(naechste) if naechste else len(text)
    block = text[start:ende]
    m = re.compile(r'"karten": \[\],\n(\s*)"quiz": \[\],').search(block)
    if not m:
        print(f"{lfid}: karten/quiz sind schon belegt – nichts geändert")
        return 1
    ein = m.group(1)

    def dumpe(wert):
        return json.dumps(wert, ensure_ascii=False, indent=2).replace("\n", "\n" + ein)

    kk = [{"vorne": v, "hinten": h} for v, h in karten]
    neu = f'"karten": {dumpe(kk)},\n{ein}"quiz": {dumpe(quiz)},'
    block = block[:m.start()] + neu + block[m.end():]
    DATA.write_text(text[:start] + block + text[ende:], encoding="utf-8")
    pos = [x["richtig"] for x in quiz]
    print(f"{lfid}: {len(quiz)} Quizfragen (richtige Stelle A/B/C/D: {[pos.count(i) for i in range(4)]}), {len(kk)} Karten eingetragen")
    return 0
