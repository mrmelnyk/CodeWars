//Write a function that take two arguments: string and separator. Split the string into words, split the words into characters, join the characters with the separator inserted, and join the string back with the original spacing.

function splitAndMerge(str, sep){
  let arr = string.split(' ');
  return arr.map(a => a.split('').join(`${separator}`)).join(' ');
}

console.log(splitAndMerge('Hello World', '-'))//should log 'H-e-l-l-o W-o-r-l-d'
