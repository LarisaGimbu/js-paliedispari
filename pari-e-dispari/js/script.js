/*
  L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri
  Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  Dichiariamo chi ha vinto.
*/

const userNumber = 3; //prompt

let computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);

function getRandomNumber (min, max){
  return Math.floor(Math.random()*(max - min +1) +min);
}

let somma = userNumber + computerNumber;
console.log(somma);