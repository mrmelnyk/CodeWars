//Write a function that removes all the non-digit characters and parses the remaining to a number.

function numFromString(s){
  return Number(s.match(/[0-9]/g).join(''));
}

console.log(numFromString('Hell3o Wor9ld'))//should log 39
