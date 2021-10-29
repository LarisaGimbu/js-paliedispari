/*
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Inserire una parola per verificare se è palindroma o meno');
const text = document.getElementById('text');

//se la parola inserita dall'utente è uguale alla funzione la quale inverte la stringa allora palindroma altrimenti non palindroma.
if(userWord === userWordReverse(userWord)){
  text.innerHTML = `La parola da te scelta è <strong>${userWord}</strong> ed è una parola palindroma.`
}else{
  text.innerHTML = `La parola <strong>${userWord}</strong> al contrario diventa <strong>${userWordReverse(userWord)}</strong>. Non è una parola palindroma.`

};

//do alla funzione userWordReverse il parametro della parola inserita dall'utente
const wordReverse = userWordReverse(userWord);
// console.log(wordReverse);

function userWordReverse (parola){
  //split trasforma la stringa in un array, reverse la mette al contrario e join riconverte l'array in stringa;
  return parola.split('').reverse().join('');
};