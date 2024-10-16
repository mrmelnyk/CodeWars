/*
Complete the function to create backronyms. 
Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words.
*/

function makeBackronym(str){
    return str.toUpperCase().split('').map(a => dict[a]).join(' ')
  }
  