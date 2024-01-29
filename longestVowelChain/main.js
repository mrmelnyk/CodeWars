/*The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. 
Vowels are any of aeiou.*/

function solve(s){
    let vowels = s.replace(/[^aeiou]/ig, ' ').split(' ');
    let longest = vowels.reduce((a,b) => a.length > b.length ? a : b);
    return longest.length;
  }

  console.log(solve('aajjijoeweeiioojjsjkik'))//should log 6
  