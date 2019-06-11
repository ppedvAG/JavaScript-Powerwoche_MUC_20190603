window.onload = () => {
    // direktes Ausführen nach erfolgreichem Laden des Fensters
    randomLotto();
}

// Funktion um sechs Zufallszahlen aus 49 anzuzeigen
function randomLotto() {
    // Deklaration eines neuen, leeren Arrays
    let lottoZahlen = new Array();
    // statische Festlegung der Durchläufe auf sechs (<=5)
    for (let i = 0; i <= 5; i++) {
        // Generierung einer Zufallszahl mit getRandomNumber-Funktion
        var newNumber = getRandomNumber(49);
        // Prüfung ob die soeben generierte Zufallszahl bereits in unserem Array ist, falls ja wird erneut generiert usw ...
        while (lottoZahlen.includes(newNumber)) {
            newNumber = getRandomNumber(49);
        }
        // Hinzufügen der neu generierten Zufallszahl in das Array
        lottoZahlen.push(newNumber);
    }
    // Für jede dem Array hinzugefügte Zufallszahl (maximal 6, siehe Begrenzung in Zeile 11) schreiben wir diese in eine der Textboxen zur Anzeige
    lottoZahlen.forEach(zahl => {
        let currentInput = document.getElementById("nmb" + lottoZahlen.indexOf(zahl));
        currentInput.value = zahl;
    });
}

// Funktion um sechs Zufallszahlen aus 49 zu generieren und zurück zu liefern
function getRandomNumber(max) {
    // .random() erzeugt eine sehr kleine Zufallszahl (zwischen 0 und 1), deshalb multiplizieren wir sie mit unserem MAX-Wert (49) und runden sie dann auf (ceil)
    // (floor = abrunden)
    let myNumber = Math.ceil(Math.random() * max);
    return myNumber;
}