/*
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = 'oro'; //prompt

if(userWord === userWordReverse(userWord)){
  console.log('la parola è palindroma');
}else{
  console.log('la parole non è palindroma');
};

const wordReverse = userWordReverse(userWord);
console.log(wordReverse);

function userWordReverse (parola){
  //split trasforma la stringa in un array, reverse lo mette al contrario e join riconmverte l'array in stringa;
  return parola.split('').reverse().join('');
};