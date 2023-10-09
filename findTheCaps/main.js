//Take a string of words and return an array with the position of each capital letter within the string.
 
 function capitals(word) {
   return word.match(/[A-Z]/g).map(a => word.indexOf(a));
 }
 
 console.log(capitals('Are You reTurning The CAPS'))//should log [0,4,9,17,21,22,23,24]
 