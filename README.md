 Jag  följa dessa steg För att lösa uppgiften:

1 Installera K6 genom Node Package Manager (npm).

2.Importera http-modulen för att utföra alla CRUD-operationer på API:et.

3. Importera Check-funktionen för att validera och göra assertion.

4. Ladda ner url.js och lägg till det i programmet. Det används för att använda URL och URLSearchParams. Jag använde det för att parametrisera ID:et med URL:en.

5. Importera htmlReport från "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js" för att skriva ut testrapporten.

6. Skapa och exportera en konfigurationsobjekt med namnet Options för ett prestandatestverktyg. Det specificeras att testet ska simulera 10 virtuell användare och köras i 30 sekund.

7. Skicka en HTTP POST-förfrågan till https://r7dk2.wiremockapi.cloud/arbetssokande med en JSON-payload som innehåller namn och personnummer. Content-type-header sätts till JSON. Svaret (res) loggas och dess JSON-innehåll loggas också.

8. Logga svarobjektet och dess JSON-innehåll, och försök extrahera värdet av fältet "id" från JSON-svaret.

9. Utför en HTTP GET-förfrågan genom att lägga till det tidigare genererade ID:et till https://r7dk2.wiremockapi.cloud/arbetssokande/Id. Svaret loggas.

10. Validera status 200 och gatuadressen i svaret från GET-förfrågan.

11. Utför en HTTP DELETE-förfrågan till https://r7dk2.wiremockapi.cloud/arbetssokandeL/Id med det tidigare genererade ID:et som parameter.

12. Kontrollera statusrapporten.

13. Skapa en rapport i HTML-format.