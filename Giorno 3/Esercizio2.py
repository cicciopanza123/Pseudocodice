N = int(input("Inserisci un numero intero N: "))
somma = 0

for i in range(1, N+1):
    numero_pari = 2 * i
    somma += numero_pari

print("La somma dei primi", N, "numeri pari è:", somma)


