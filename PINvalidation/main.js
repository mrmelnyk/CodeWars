//write a function that validates a users pin number. the pin must be either 4 or 6 digits long and can only contain numbers.

function validatePIN(pin){
  return (pin.length == 4 || pin.length == 6) && (pin.match(/^[0-9]+$/g)) ? true:false;
}

console.log(validatePIN('1234'))//should log true
console.log(validatePIN('a23456'))//should log false
console.log(validatePIN('453627'))//should log true
