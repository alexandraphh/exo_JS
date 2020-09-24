'use strict'; 

//Exercice 1

function myPutStr(putStr) {
  if (typeof(putStr) == 'string') {
    return "Je suis un String";
  } else if (typeof(putStr) == 'number') {
    return "Et pourquoi pas 42 ?";
  }
}

// Exercice 2

function computeSurfaceM2 (length, width) {
  return length*width;
}

// Exercice 3


// Exercice 4


// Exercice 5
function realTimeClock(){
	var stop = false;
	var date = new Date();
	console.log(date.getHours()+":"+date.getMinutes());
}
realTimeClock();