const lista = [7, 3, 1, 4, 2, 3, 1, 9];

const input = prompt("Inserisci un numero:");
const N = parseInt(input);

if (isNaN(N)) {
  console.log("Input non valido. Inserisci un numero.");
} else {
  let conteggio = 0;
  for (const numero of lista) {
    if (numero === N) {
      conteggio++;
    }
  }
  console.log(`Il numero ${N} appare ${conteggio} volte nella lista.`);
}