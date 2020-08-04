// 1 Chiedere all'utente i chilometri che vuole percorrere
var km = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
// console.log("la scelta dell'utente è: " + km);

// 2 Quanti anni ha il passeggero
var età = parseInt(prompt('Quanti anni hai?'));
// console.log("la scelta dell'utente è: " + età);

// 3 Il costo del biglietto definito in base ai km (0.21€ al km)
var prezzoKm = 0.21;
var prezzoBiglietto = prezzoKm * km;
// console.log(prezzoBiglietto);

//4 Se è minorenne avrà lo sconto del 20%
// 5 Se ha 65 anni o piu avrà lo sconto del 40%
if (età <= 18) {
 // console.log((prezzoBiglietto / 100) * 20);
 document.getElementById('costo').innerHTML = 'Il prezzo del biglietto è:' + ' ' + ((prezzoBiglietto / 100) * 20) + "€";
} else if (età >= 65) {
 // console.log((prezzoBiglietto / 100) * 40);
 document.getElementById('costo').innerHTML = 'Il prezzo del biglietto è:' + ' ' + ((prezzoBiglietto / 100) * 40) + "€";
} else {
// console.log(prezzoBiglietto);
document.getElementById('costo').innerHTML = 'Il prezzo del biglietto è:' + ' ' + (prezzoBiglietto) + "€";
}
