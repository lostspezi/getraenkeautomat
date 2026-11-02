class Getraenkeautomat {
    kosten = 1.5;
    menge = 5;
    geld = 0;
    valideMuenzen = [0.5, 1, 2];

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

    kaufen(){
        if(this.menge <= 0) {
            return "Getraenk ist ausverkauft.";
        }
        if(this.geld < this.kosten) {
            return "Nicht genug Geld im Automat.";
        }
        this.geld -= this.kosten;
        this.menge--;
        return "Hier ist deine Cola! " + this.geldRausholen();
    }
}