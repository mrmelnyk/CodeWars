//Reverse every other word in a given string, then return the string. 
//Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
//Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
    return str.split(' ').map(function(a,b){
      return b%2 == 0 ? a : a.split('').reverse().join('')
    }).join(' ').trim();
  }

  console.log(reverse('let me see if this works, please!'))//should log 'let em see fi this ,skrow please!'
  