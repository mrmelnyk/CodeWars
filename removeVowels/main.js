//Create a function that removes all the vowels from a string.

function removeVowels(str){
  return str.replace(/[aeiou]/ig, '');
}

console.log(removeVowels('happy times'))//should log 'hppy tms'
