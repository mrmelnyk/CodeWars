//Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
    return parseInt(hexString, 16)
  }

  console.log(hexToDec('a'))//should log 10
  console.log(hexToDec('FF'))//should log 255