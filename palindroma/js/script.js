//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


let parolaInserita = prompt("inserisci una parola")

//let arrayLettere = parolaInserita.split("")

//console.log(arrayLettere)

//let parolaAlContrario = "";

function isPalindroma(parola) {
    let parolaScomposta = parola.split("")
    let parolaAlContrario = "";

    let palindromo = false

    for (let i = (parolaScomposta.length - 1); i >= 0; i--) {

        let lettera = parolaScomposta[i];

        console.log(typeof(lettera))

        console.log(i + " " + lettera)

        parolaAlContrario += lettera;
        
    }

    console.log(parolaAlContrario)

    if (parolaInserita === parolaAlContrario) {

        palindromo = true;
    
    }

    return palindromo;
}



console.log(isPalindroma(parolaInserita))