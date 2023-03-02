/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento!

Palindromo:
-prendere una parola in input e salvarla in variabile con .value
-elem btn
-creare  una variabile output elem


onClick:
-SE parola == null || ""
        -si restituisce un alert 
    -ALTRIMENTI
    applicare metodoPalindromo

-metodo palindromo:
    -riceve una variabile di tipo stringa 
    -si creano due indici per scorrerla
   
        -FINCHé indice1<indice 2
         -SE il numero su indice1 != al num in indice2
            -return False
        return true
*/

let userParolaEl = document.getElementById("user-parola");

let outputEl = document.getElementById("palindrome-output");

let btnPalindrome = document.getElementById("btn-palindromo");

let userParola;

btnPalindrome.addEventListener("click", function(){
    userParola = userParolaEl.value;

    if(userParola == null || userParola == ""){
        alert("Invalid Argument");
    } else{
        outputEl.innerHTML = isPalindrome(userParola);
    }
})


function isPalindrome(string){
    let i = 0;
    let j = string.length-1;

    while (i < j){
        if(string[i] != string[j]){
            return false;
        }
        i++;
        j--;
    } 
    return true;
}

/*fine palindromo------------------------------------------------------*/


/*Pari o Dispari? ----------------------------------------------------*/

/*
-creare una varEl per input pari/dispari
-" per input numero da 1 a 5
-creare una var dove inserire il numero del pc
-creare una varEl per il risultato totale da collegare a span
-" per il button gioca!

-creare var risultato
-creare var risultatoPariDispari;

button.onClick{

-fare controlli sugli input


-richiami metod random1-5 per assegnare il val a pc
-sommi il totale e salvi in risultato
-assegni a risultatoPariDispari totale.isPair con metodo
-SE totale==true && input.value == pari 
    risultatoTotale.innerHTML = il totale è" + totale
     + ", " + risultatoPariDispari + "hai vinto"
ALTRIMENTI SE totale==false && input.value == dispari 
    risultatoTotale.innerHTML = il totale è" + totale
     + ", " + risultatoPariDispari + "hai vinto"
ALTRIMENTI
    risultatoTotale.innerHTML = il totale è" + totale
     + ", " + risultatoPariDispari + "hai perso"
}

metodo random:
-creare metodo che presi in input due num(min,max)
-restituisca in modo casuale un numero, compreso fra le due cifre

metodo isPair: 
-creare un metodo che preso in input un numero
-SE numero è pari
    return true
-Altrimenti return False
*/