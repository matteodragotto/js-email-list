# JS - AJAX

### Esercizio:

- Attraverso l’apposita API di Boolean

- https://flynn.boolean.careers/exercises/api/random/mail

- Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

#### Bonus
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
- Mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API

## Esecuzione:

1. Importo il cdn di axios in html
2. In js richiamo come endpoint l'api di boolean
3. Richiamo axios in javascript e verifico la ricezione dei dati
4. Creo una nuova variabile che avrà come valore la mail generata casualmente
5. Dato che le mail devono essere 10 posso pushare ogni mail dentro un array fino a quando non ne ho 10 dando quindi una lunghezza predefinita all'array
6. Posso poi stampare le mail in pagina