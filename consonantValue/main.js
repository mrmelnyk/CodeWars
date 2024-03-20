//Given a string of lowercase letters, with no spaces, return the highest value of the consonant substrings. 

function consonantVal(s){
  //makes an array with the letters in the position of their numeric values
  let alpha = ' abcdefghijklmnopqrstuvwxyz'.split('');
  let largest = 0;
  
  //removes all of the vowels and replace them with spaces. 
  let arr = s.replace(/[aeiou]/g, ' ').split(' ');
  
  //replaces all of the letters with their numeric values.
  let nums = arr.map(a => a.split('').map(b => alpha.indexOf(b));
  
  //remove any empty arrays that were create by vowel substrings with a length greater than 1.
  nums = nums.filter(c => c.length);
  
  //add together the substrings of the consonants to get a total value.
  let arr2 = nums.map(d => d.reduce((x,y) => x+y));
  
  //loop over the array values and determine which is the largest.
  for(let i=0; i<arr2.length; i++){
    if(arr2[i] > largest) largest = arr2[i];
  }
  return largest;
}

console.log(consonantVal('strength'))//should log 57
