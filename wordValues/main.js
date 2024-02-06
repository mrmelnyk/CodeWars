/*Given a list of strings of lowercase letter and spaces, where each letter is represented by a value from its position in the alphabet, return a list of the total value of each string multiplied by its position in the list (starting from 1) 
*/

function wordValue(a){
  let arr = a.map(x => x.replace(/\s/g, '').split('').map(y => y.charCodeat()-96).reduce((b,c) => b + c, 0));
  return arr.map((x,i) => x * (i+1));
}

console.log(wordValue(['abc', 'abc abc']))//should log [6,24]
