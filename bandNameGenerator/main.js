/*
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/

function bandNameGenerator(str) {
    let arr = str.split('');
    let short = arr.slice(0,-1);
    let cap = short.join('')
    if(arr[0] == arr[arr.length-1]) return (cap.charAt(0).toUpperCase() + cap.slice(1)) + arr.join('');
    return 'The ' + (str.charAt(0).toUpperCase() + str.slice(1));
  }

  console.log(bandNameGenerator('dolphin'))//should log 'The Dolphin'
  console.log(bandNameGenerator('tart'))//should log 'Tartart'
  