//given a string replace the characters with a '(' if the there is only one occurence of the character, else replace the character with a ')'.

function encoder(word){
  return word.toLowerCase()
  .split('')
  .map((a,b,c) => c.indexOf(a) == c.lastIndexOf(a) ? '(':')')
  .join('')
}

console.log(encoder('Hello'))//should log '))(()'
