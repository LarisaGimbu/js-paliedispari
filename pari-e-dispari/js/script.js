/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
*/

const userChoice = prompt('Scegliere fra pari o dispari')
const userNumber = parseInt(prompt('Inserire un numero compreso tra 1 e 5')) ;
const text = document.getElementById('text');

//richiamo la funzione dando un minimo e un massimo
let computerNumber = getRandomNumber(1, 5);

//la funzione mi crea un numero casuale fra un minimo e un massimo
function getRandomNumber (min, max){
  return Math.floor(Math.random()*(max - min +1) +min);
}

//trovo la somma
let somma = userNumber + computerNumber;


let formValido = true;
let errorMsg = '';

//mi proteggo da eventuali bug
if((userChoice != 'pari') && (userChoice != 'dispari')){
  formValido = false;
  errorMsg = 'Deve inserire "pari" o "dispari"';
}
if(isNaN(userNumber)){
  formValido = false
  errorMsg = 'Deve inserire un numero';
}
if((userNumber < 0) || (userNumber > 5)){
  formValido= false
  errorMsg = 'Deve inserie un numero compreso fra 1 e 5';
}

//richiamo la funzione che mi da il risultato del gioco utilizzando come parametro la somma 
let output = pariODispari(somma);

// se la forma è valida (true) stampo il return della funzione altrimenti stampo il messaggio di errore
if(formValido){
  text.innerHTML = output;
}else{
  text.innerHTML = errorMsg;
}

//creo la funzione che mi da il risultato del gioco
function pariODispari (numero){
  //se la somma è uguale alla scelta dell'utente (pari o dispari) allora return Ha vinto altrimenti ha perso
  if(((numero % 2) && (userChoice==='dispari')) || ((numero % 2 === 0) && (userChoice === 'pari'))) {
    return `<h3>Hai Vinto!</h3> Hai scelto <strong>${userChoice}</strong>, il tuo numero è <strong>${userNumber}</strong> mentre quello del computer è <strong>${computerNumber}</strong>. La somma dei vostri numeri è <strong>${somma}</strong>. `;
  }

  return `<h3>Hai Perso!</h3> Hai scelto <strong>${userChoice}</strong>, il tuo numero è <strong>${userNumber}</strong> mentre quello del computer è <strong>${computerNumber}</strong>. La somma dei vostri numeri è <strong>${somma}</strong>.`;
}