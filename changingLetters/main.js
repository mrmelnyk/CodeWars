//Write a function that capitalizes all the vowels in a given string.

function swap(str){
  return str.replace(/[aeiou]/g, a => a.toUpperCase());
}

console.log(swap('Hello World'))//should log 'HEllO WOrld'
