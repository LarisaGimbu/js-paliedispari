/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
*/

const userChoice = 'pari';
const userNumber = 3; //prompt
const text = document.getElementById('text');

let computerNumber = getRandomNumber(1, 5);
// console.log(computerNumber);

function getRandomNumber (min, max){
  return Math.floor(Math.random()*(max - min +1) +min);
}

let somma = userNumber + computerNumber;
// console.log(somma);


let output = pariODispari(somma);
text.innerHTML = output;

function pariODispari (numero){
  if(((numero % 2) && (userChoice==='dispari')) || ((numero % 2 === 0) && (userChoice === 'pari'))) {
    return `<h3>Hai Vinto!</h3> Hai scelto <strong>${userChoice}</strong>, il tuo numero è <strong>${userNumber}</strong> mentre quello del computer è <strong>${computerNumber}</strong>. La somma dei vostri numeri è <strong>${somma}</strong>. `;
  }

  return `<h3>Hai Perso!</h3> Hai scelto <strong>${userChoice}</strong>, il tuo numero è <strong>${userNumber}</strong> mentre quello del computer è <strong>${computerNumber}</strong>. La somma dei vostri numeri è <strong>${somma}</strong>. Hai Perso!`;
}