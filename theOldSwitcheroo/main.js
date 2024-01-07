//Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (a,b) => b + 1);
  }

  console.log(vowel2index('hello world'))//should log 'h1ll4 w7rld'
  