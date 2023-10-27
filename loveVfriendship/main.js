//Using a letter's numerical position in the alphabet, calculate the value of words by adding all their letters together.

function wordsToMarks(string){
  let str = 0;
  for(let i = 0; i < string.length; i++){
    str += string.charCodeAt(i) - 96;
  }
  return str;
}

console.log(wordsToMarks('love'))//should log 54
console.log(wordsToMarks('family'))//should log 66
