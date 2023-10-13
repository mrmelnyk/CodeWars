//Check to see if the string has the same number of xs and os. Return true if it does, and false if not.
//The string can contain any character.

function XO(str) {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  
  return (o && o.length) == (x && x.length)
}

console.log(XO('xxroo'))//should log true
console.log(XO('xxxafdsxo'))//should log false
console.log(XO('abcdefg'))//should log true