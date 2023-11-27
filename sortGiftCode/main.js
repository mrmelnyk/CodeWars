//Unique gift codes are given to each gift, but they need to be in alphabetical order. Sort the gift codes into the right order.

function sortGiftCode(code){
    return code.split('').sort().join('');
  }

  console.log(sortGiftCode('acbedgf'))//should log 'abcdefg'
  