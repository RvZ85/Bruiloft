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
De RSVP is gekoppeld aan Web3Forms en werkt ook op GitHub Pages.

Instelling:
- Web3Forms endpoint: https://api.web3forms.com/submit
- De access key staat als publieke client-side key in index.html.
- Web3Forms verstuurt inzendingen naar het e-mailadres dat aan die key is gekoppeld.
- Na een succesvolle inzending wordt de gast doorgestuurd naar bedankt.html.
- De redirect wordt via JavaScript dynamisch opgebouwd, zodat dit ook werkt wanneer de site in een GitHub Pages repository-submap staat.
- Honeypot/botcheck is toegevoegd.

BELANGRIJK VOOR PUBLICATIE
1. Upload de volledige inhoud van deze map naar GitHub.
2. Activeer GitHub Pages voor de juiste branch/map.
3. Open de gepubliceerde URL en doe één echte test-RSVP.
4. Controleer of de e-mail binnenkomt en of de bedankpagina verschijnt.
5. Controleer ook het Web3Forms-dashboard voor de testinzending.

De Web3Forms access key is volgens Web3Forms bedoeld als publieke client-side sleutel; hij hoeft dus niet als wachtwoord verborgen te worden.

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
