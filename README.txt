ROBBERT & MELLANIE — WEBSITE V1
================================

INHOUD
- index.html       complete one-page trouwwebsite
- styles.css       responsive styling
- script.js        countdown, mobiel menu en RSVP-logica
- bedankt.html     bevestigingspagina na RSVP
- assets/          foto's, logo en sfeerelementen

LOKAAL BEKIJKEN
Open index.html in een browser. Voor de beste lokale test kun je in deze map een simpele webserver starten, bijvoorbeeld:
  python -m http.server 8000
Daarna: http://localhost:8000

RSVP OPSLAG + E-MAILMELDINGEN
De formulieren zijn voorbereid op Netlify Forms. Zodra de site op Netlify staat:
1. Deploy de map als site op Netlify.
2. Netlify herkent het formulier met de naam "rsvp" automatisch.
3. In Netlify: Site configuration > Forms > Form notifications.
4. Voeg een e-mailnotificatie toe naar: rvanzijverden@hotmail.com
5. Inzendingen blijven daarnaast in het Netlify Forms-overzicht bewaard en kunnen als CSV worden geëxporteerd.

Belangrijk: vóór publicatie graag één test-RSVP uitvoeren. Netlify/e-mailmeldingen werken pas na deployment; lokaal wordt niets verstuurd.

RSVP-LOGICA
- Maximaal 4 gasten per huishouden/stel.
- Mogelijkheid om ook af te melden ("Helaas niet").
- Keuzes: Hele dag / Ceremonie + taart & toast / Diner / Feest.
- Bij "Hele dag" worden de losse onderdelen automatisch geselecteerd.
- Vlees / Vis / Vega verschijnt alleen als diner is geselecteerd.
- Per gast: naam + menu + allergieën/dieetwensen/opmerking.
- Overnachten in de kas: ja/nee, op basis van het opgegeven aantal gasten.
- Light ontbijt 10:30: ja/nee, op basis van het opgegeven aantal gasten.

NOG LATER AAN TE PASSEN
- Contactgegevens ceremoniemeesters (staat nu als 'volgt').
- Eventueel definitieve domeinnaam/hosting.
- Eventuele extra foto's of muziek.
- Controleer de accommodatie-links vlak voor verzending van de uitnodigingen.
