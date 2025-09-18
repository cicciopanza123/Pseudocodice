// Giorno 3 - Somma dei primi n numeri
let n = parseInt(prompt("Inserisci un numero:"));
let somma = 0;

for (let i = 1; i <= n; i++) {
    somma += i;
}

console.log("La somma dei primi " + n + " numeri è: " + somma);
