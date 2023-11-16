//given an array of numbers, check if any of the numbers match the character codes for lower case vowels. if they do, change to array value to a string of that vowel.

function isVow(a){
  let vowels = ['a','e','i','o','u'];
  return a.map(x => vowels.includes(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}

console.log(isVow([101,123,111,34,45,144]))//should log ['e',123,'o',34,45,144]
