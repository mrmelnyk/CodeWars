//Create a function that finds the integral of the expression passed.
//In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
//The output should be a string, and the coefficient and exponent will always be positive integers.

function integrate(coef, expo) {
    return `${coef/(expo+1)}x^${expo+1}` 
  }

  console.log(integrate(40,3))//should log '10x^4'
  