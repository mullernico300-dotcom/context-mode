import runpy, json, sys
z=runpy.run_path('fragen_zp.py')['ZP']; a=runpy.run_path('fragen_ap.py')['AP']
alle=[]
for q in z+a:
    assert sum(p for p,_ in q['schema'])==q['punkte'], q['id']
    q=dict(q); q['pruefung']='zp' if q['id'].startswith('zp') else 'ap'
    q['schema']=[[p,k] for p,k in q['schema']]
    alle.append(q)
bereiche = {
 'zp-ao':  {'titel':'Arbeitsabläufe organisieren','kurz':'Arbeitsabläufe','pruefung':'zp','minuten':45,'teil':'Zwischenprüfung, § 9'},
 'zp-stb': {'titel':'Steuererklärungen vorbereiten und Buchhaltungen bearbeiten','kurz':'Steuer & Buchhaltung','pruefung':'zp','minuten':75,'teil':'Zwischenprüfung, § 10'},
 'ap-stb': {'titel':'Sachverhalte steuerrechtlich beurteilen und in Steuererklärungen bearbeiten','kurz':'Steuerwesen','pruefung':'ap','minuten':130,'teil':'Abschlussprüfung, § 14, Gewicht 35 %'},
 'ap-fibu':{'titel':'Sachverhalte im Zusammenhang mit Finanzbuchhaltungen, Entgeltabrechnungen und Jahresabschlüssen bearbeiten','kurz':'Rechnungswesen','pruefung':'ap','minuten':110,'teil':'Abschlussprüfung, § 15, Gewicht 30 %'},
 'ap-wiso':{'titel':'Wirtschafts- und Sozialkunde','kurz':'WiSo','pruefung':'ap','minuten':60,'teil':'Abschlussprüfung, § 17, Gewicht 10 %'},
 'ap-ber': {'titel':'Mandantinnen- und Mandantenberatung mitgestalten','kurz':'Mandantenberatung','pruefung':'ap','minuten':30,'vorbereitung':15,'teil':'Abschlussprüfung, § 16, Gewicht 25 %, Gesprächssimulation'},
}
out='// Prüfungssimulator: Aufgabenbank. Erzeugt aus tools/pruefung/*.py – nicht von Hand ändern.\n'
out+='// Rechtsstand 2025/2026. Aufgaben sind angelehnt an Prüfungen der StBK Niedersachsen oder eigene Aufgaben im Prüfungsstil, keine Originalprüfungen.\n'
out+='window.PRUEFUNG_BEREICHE = '+json.dumps(bereiche,ensure_ascii=False,indent=1)+';\n'
out+='window.PRUEFUNG_FRAGEN = '+json.dumps(alle,ensure_ascii=False,indent=0)+';\n'
open(sys.argv[1],'w').write(out)
print(len(alle))
