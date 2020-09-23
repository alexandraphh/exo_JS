// 'use strict';

// //Exercice 1
 
//  // My digital School Forever

//  //Exercice 2

//  /* My Digital School 
//  forever 
//  every day */

//  //Exercice 3

// var string = '42'; 
// var number = 42; 
// var float = 42.000; 
// var boolean = true; 
// var array = [42]; 
// var date = '42'; 
// var objet = {
//      age : 42
//      }; ;
// var toto = null;

//  console.log(string, number, float, boolean, array, date, objet, toto);

//  //Exercice 4

//  var my42count = "quarante-deux";
//  var my42countLength = my42count.length;
//  console.log(my42countLength);

// //Exercice 5

// //Exercice 6

// var myArray42 = ['q','u','a','r', 'a', 'n', 't', 'e', '-', 'd', 'e', 'u', 'x'];

// //Exercice 7

// var myArray42Len = myArray42.length;
// console.log(myArray42Len);

// //Exercice 8
// var monMot = 'q'+'u'+'a'+ 'r'+ 'a'+ 'n'+ 't'+ 'e'+ '-'+ 'd'+ 'e'+ 'u'+ 'x';
// var maPhrase = 'La grande réponse sur la vie, l’univers et le reste !' + ' ' + monMot;
// console.log(maPhrase);

// //Exercice 9
// var rand = Math.random();




// CORRECTION https://docs.google.com/document/d/1ve6Sp5-setGNr088LgmZbz7lms8IG0c5qt-zQlaHcHI/edit#heading=h.9idhmyu0wfz3

'use strict';
/**
 * Exercice 1
 */
 // My digital School Forever

//Exercice 2

 /** My Digital School 
  forever 
  every day */

//Exercice 3

var string = '42'; 
var number = 42; 
var float = 42.0; 
var boolean = true; 
var array = [42]; 
var date = new Date(42, 12, 24); 
var objet = {'42', 42}; 
var und = undefined;
var toto = null;

 console.log(string, number, float, boolean, array, date, objet, toto);

 //Exercice 4

 var my42count = 'quarante-deux'.length;
 // console.log(my42count);

 //Exercice 5

 var value = true;
 var check = value || 42;
 console.log(check);

//Exercice 6

var myArray42 = ['q','u','a','r', 'a', 'n', 't', 'e', '-', 'd', 'e', 'u', 'x'];

//Exercice 7

var myArray42Len = myArray42.length;
console.log(myArray42Len);

//Exercice 8

console.log(myArray42.join('') + 'La grande réponse sur la vie, l\'univers et le reste !');

//Exercice 9

var rand = Math.floor(Math.random() * (42) + 1);
console.log(rand === 42);
// OU console.log(rand);

//Exercice 10

var my42Type = (typeof string, typeof number);
console.log(my42Type);

//Exercice 11

var compute42 = 7 * 6;
// var compute43 = 7 - 6;
// var compute42 = 7 / 6;
// var compute42 = 7 % 6;

console.log(String(compute42), compute42.toString());

//Exercice 12

var myVar = '42424242';
myVar.replace(/42/gi, 'quarante-deux');

//Exercice 13
