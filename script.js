const produkte = [
    new Product("Vodka", 1.5, 10),
    new Product("Rum", 1.5, 10),
    new Product("Korn", 1.0, 10)
];

const automat = new Getraenkeautomat(produkte);

function produktListe() {
    return automat.produkte
        .map(p => p.name + " (" + p.preis.toFixed(2) + " €, noch " + p.menge + ")")
        .join(", ");
}

function muenzenEinwerfen() {
    while (true) {
        const eingabe = prompt(
            automat.geldAnzeigen() + "\n" +
            "Bitte Münze einwerfen (0.5, 1, 2).\n" +
            "Leer lassen bzw. 'fertig' = weiter zur Getränkewahl, Abbrechen = Geld zurück."
        );

        if (eingabe === null) {
            return false;
        }
        if (eingabe.trim() === "" || eingabe.trim().toLowerCase() === "fertig") {
            if (automat.geld > 0) {
                return true;
            }
            alert("Bitte zuerst Geld einwerfen.");
            continue;
        }

        const muenze = parseFloat(eingabe.replace(",", "."));
        alert(automat.geldEinwerfen(muenze));
    }
}

function getraenkWaehlen() {
    while (true) {
        const produktName = prompt(
            automat.geldAnzeigen() + "\n" +
            "Welches Getränk möchten Sie? " + produktListe() + "\n" +
            "Abbrechen = zurück zur Münzeingabe."
        );

        if (produktName === null) {
            return "geld";
        }

        const produkt = automat.produkte.find(p => p.name.toLowerCase() === produktName.trim().toLowerCase());
        const geldVorher = automat.geld;
        alert(automat.kaufen(produktName.trim()));

        if (automat.geld !== geldVorher) {
            return "gekauft";
        }
        if (produkt && geldVorher < produkt.preis) {
            return "geld";
        }
    }
}

let weiter = true;
while (weiter) {
    if (!muenzenEinwerfen()) {
        alert(automat.geldRausholen());
        break;
    }

    const status = getraenkWaehlen();
    if (status === "gekauft") {
        weiter = confirm("Möchten Sie noch ein Getränk kaufen?");
    }
}

alert("Auf Wiedersehen!");
