const automat = new Getraenkeautomat();
console.log(automat.kaufen()); // Nicht genug Geld im Automat.
console.log(automat.geldEinwerfen(0.2)); // Diese Münze wird nicht akzeptiert.
console.log(automat.geldEinwerfen(2)); // Geld im Automat: 2.00 €
console.log(automat.kaufen()); // Hier ist deine Cola! Rückgeld: 0.50 €
console.log(automat.geldAnzeigen()); // Geld im Automat: 0.00 €
console.log(automat.geldEinwerfen(1));
console.log(automat.geldRausholen()); // Rückgabe: 1.00 €
console.log(automat.geldRausholen()); // Kein Geld im Automat.
