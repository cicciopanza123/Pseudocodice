// Giorno 1 - Es 2 (scambio di variabili)
let a = parseInt(prompt("Inserisci A:"));
let b = parseInt(prompt("Inserisci B:"));

let temp = a;
a = b;
b = temp;

console.log("Dopo lo scambio: A =", a, "B =", b);
