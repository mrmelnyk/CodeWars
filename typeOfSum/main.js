//Return the type of the sum of the two arguments.

function typeOfSum(a, b) {
    return typeof(a + b);
  }

  console.log(typeOfSum(12,3))//should log 'number'
  console.log(typeOfSum('a',23))//should log 'string'
  