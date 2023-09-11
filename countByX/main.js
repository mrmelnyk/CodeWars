//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array.

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++){
      z.push(i*x)
    }
    return z
  }

  console.log(countBy(2,10))//should log [2,4,6,8,10]
  console.log(countBy(3, 21))//should log [3,6,9,12,15,18,21]
  