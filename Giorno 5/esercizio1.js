function calcolaFattoriale(n) {
  if (n < 0) {
    return "Errore: il fattoriale non è definito per i numeri negativi.";
  } else if (n === 0) {
    return 1;
  } else {
    let prodotto = 1;
    for (let i = 1; i <= n; i++) {
      prodotto *= i;
    }
    return prodotto;
  }
}

const input = prompt("Inserisci un numero per calcolare il fattoriale:");
const N = parseInt(input);

if (isNaN(N)) {
  console.log("Input non valido. Inserisci un numero.");
} else {
  const risultato = calcolaFattoriale(N);
  console.log(`Il fattoriale di ${N} è: ${risultato}`);
}