/*Write a function that takes a string and a number, converts the characters in the string into their numeric position in the alphabet, 
and adds each single digit in the number to the numeric value of the characters. If the numeric values array length is greater than the length of the string,
loop back to the beginning of the string and start over from the first digit.

Eg. 
    word: 'scout' number: 1939

   s  c  o  u  t
  19  3 15 21 20
  + 1  9  3  9  1
  ---------------
   20 12 18 30 21

   */

   function encode(str, n){
    let key = n.toString();
    return str.split('').map((a,b) => a.charCodeAt() - 96 + +key[b % key.length]);
  }

  console.log(encode('scout', 1939))//should log [20,12,18,30,21]
  