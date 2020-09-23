'use strict';

//Exercice 1
var age = prompt("Quel âge avez-vous ?");
console.log(age);

if (age >= 42) {
  alert("Vous êtes le patron");
}else if(age >= 18) {
  alert("Vous pouvez entrer vous êtes majeur, vous avez " + age + ' ans.')
}else if(age <= 17) {
  alert("Vous ne pouvez pas entrez vous n’êtes pas majeur, vous avez " + age + ' ans.');
}else {
  alert("Entrez une valeur valable");
}
 

//Exercice 2
var rand = Math.floor(Math.random() * (31));
console.log(rand);
if (rand = 0 || rand <= 10) {
    alert('Cool');
}else if (rand = 11 || rand <=20) {
    alert('Tepid');
}else if (rand = 21 || rand <= 30) {
    alert('Warm');
}


//Exercice 3
var day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "not defined day"
    break;
}

console.log(day);


//Exercice 4
var histoire = prompt("Choisissez votre fin d'histoire : 1 : Heureuse, 2 : Triste, 3 : Morale");

if (histoire == 1) {
  window.alert("Ils vécurent heureux");
}else if(histoire == 2) {
  window.alert("Ils finissent par se séparer");
}else if(histoire == 3) {
  window.alert("La grande réponse sur la vie, l’univers et le reste !");
}else {
  window.alert("On ne connait pas la fin de cette histoire");
}


// Exercice 5
var number = prompt("Entrez un nombre pair");
alert(isPair(number));

function isPair(number){
  if(number%2==0){
    return "OK";
  }
  return number + " is not pair";
}


// Exercice 6
var ternaire = ternaire != undefined ? "cette variable n'existe pas" : 42;


// Exercice 7
var family = prompt("Ecrivez un nombre");

switch(Math.trunc(family/10)){
  case 0:
    alert("Ce chiffre fait partie de la famille des 0");
    break;
  case 1:
    alert("Ce chiffre fait partie de la famille des 10");
    break;
  case 2:
    alert("Ce chiffre fait partie de la famille des 20");
    break;
  case 3:
    alert("Ce chiffre fait partie de la famille des 30");
    break;
  case 4:
    alert("Ce chiffre fait partie de la famille des 40");
    break;
  default:
    alert("Ce chiffre n'a pas de famille");
    break;
}