const N = parseInt(prompt("Inserisci un numero intero N:"));

if (isNaN(N) || N <= 0) {
    console.log("Per favore, inserisci un numero intero positivo.");
} else {
    let somma = 0;

    for (let i = 1; i <= N; i++) {
        const numeroPari = 2 * i;
        somma += numeroPari;
    }
    console.log(`La somma dei primi ${N} numeri pari è: ${somma}`);
}