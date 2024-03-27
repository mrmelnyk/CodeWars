/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. 
The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. 
You can assume both words will contain the dividing letter.
*/

function stringMerge(str1, str2, l){
    let arr1 = str1.split('').slice(0, str1.indexOf(l));
    let arr2 = str2.split('').slice(str2.indexOf(l));
    return arr1.concat(arr2).join('');
  }

  console.log(stringMerge('person','here', 'e'))//should log 'pere'
  