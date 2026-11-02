class Getraenkeautomat {
    produkte;
    geld = 0;
    valideMuenzen = [0.5, 1, 2];

    constructor(produkte) {
        this.produkte = produkte || [
            new Product("Cola", 1.5, 10),
            new Product("Fanta", 1.5, 10),
            new Product("Wasser", 1.0, 10)
        ];
    }

    geldEinwerfen(muenze){
        if(this.valideMuenzen.includes(muenze)) {
            this.geld += muenze;
            return "Geld im Automat: " + this.geld.toFixed(2) + " €";
        }
        return "Diese Muenze wird nicht akzeptiert."
    }

    geldAnzeigen(){
        return "Geld im Automat: " + this.geld.toFixed(2) + " €";
    }

    geldRausholen(){
        if(this.geld > 0) {
            const geldZurueck = this.geld;
            this.geld = 0;
            return "Rueckgabe: " + geldZurueck.toFixed(2) + " €";
        }
        return "Kein Geld im Automat.";
    }

    kaufen(produktName = "Cola") {
        const produkt = this.produkte.find(p => p.name.toLowerCase() === produktName.toLowerCase());
        if (!produkt) {
            return "Produkt nicht gefunden.";
        }
        if(this.geld < produkt.preis) {
            return "Nicht genug Geld im Automat.";
        }
        if(produkt.menge <= 0) {
            return "Produkt nicht mehr verfügbar.";
        }
        this.geld -= produkt.preis;
        produkt.menge--;
        return "Hier ist dein " + produkt.name + "! " + this.geldRausholen();
    }
}