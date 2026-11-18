/* Vorlage für js/schule.js (Schulzeiten, Pausen, Fächer mit Lehrkraft für die Auswahl im Planer).
   Kopieren nach js/schule.js und anpassen. js/schule.js ist von git ausgeschlossen. */
window.SCHULE = {
  beginn: '08:00',
  ende: '15:00',
  stunde: 45,
  pausen: [['09:30', '09:45'], ['11:15', '11:30'], ['13:00', '13:30']],
  faecher: [
    { id: 'lf1', name: 'LF 1', lehrkraft: '' },
    { id: 'sk', name: 'Sozialkunde', lehrkraft: '' }
  ]
};
