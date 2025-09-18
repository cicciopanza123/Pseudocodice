// Giorno 2 - Es 2
let anno = parseInt(prompt("Inserisci un anno:"));

if ((anno % 4 === 0 && anno % 100 !== 0) || (anno % 400 === 0)) {
    console.log("L'anno è bisestile");
} else {
    console.log("L'anno non è bisestile");
}
