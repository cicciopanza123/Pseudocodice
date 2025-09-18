def calcola_fattoriale(n):
    if n < 0:
        return "Errore: il fattoriale non è definito per i numeri negativi."
    elif n == 0:
        return 1
    else:
        prodotto = 1
        for i in range(1, n + 1):
            prodotto *= i
        return prodotto

N = int(input("Inserisci un numero per calcolare il fattoriale: "))
risultato = calcola_fattoriale(N)

print(f"Il fattoriale di {N} è: {risultato}")