// Giorno 2 - Es 1
let a = parseInt(prompt("Inserisci A:"));
let b = parseInt(prompt("Inserisci B:"));
let c = parseInt(prompt("Inserisci C:"));

if (a > b && a > c) {
    console.log("Il maggiore è:", a);
} else if (b > a && b > c) {
    console.log("Il maggiore è:", b);
} else {
    console.log("Il maggiore è:", c);
}
