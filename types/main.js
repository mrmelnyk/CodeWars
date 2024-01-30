//Write a function that will accept two parameters: variable and type and check if type of variable is matching type. 
//Return true if types match or false if not.

function typeValidation(variable, type) {
    return typeof variable === type;
  }

  console.log(typeValidation(123,'number'))//should log true
  console.log(typeValidation('456','number'))//should log false
  