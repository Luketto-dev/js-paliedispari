//Pari e Dispari
//L’utente sceglie pari o dispari tramite un prompt
//L’utente inserisce anche un numero da 1 a 5.
//Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

let scelta = prompt("scegli tra pari e dispari");

let numeroUtente = parseInt(prompt("segli un numero da 1 a 5"));
console.log(numeroUtente)

function generaNumeroRandom(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
}

let numeroComputer = generaNumeroRandom(1, 5)

console.log(numeroComputer)


let sommaNumeri = numeroComputer + numeroUtente;

function isPari(numero){

    result = numero % 2 === 0

    return result
}

let sommaIsPari = isPari(sommaNumeri)


if (scelta === "pari" && sommaIsPari) {
    console.log("l'utente ha vinto")
}else{
    console.log("il computer ha vinto")
}


