//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//function sumDigits(number) {
//    let num = Math.abs(number)
//    let arr = String(num).split('').map(Number)
//    let fin = arr.reduce((a,b) => a + b, 0)
//    return fin
//  }

//refactored

function sumDigits(number) {
    return String(Math.abs(number)).split('').map(Number).reduce((a,b) => a + b, 0)
}

console.log(sumDigits(10))//should log 1
console.log(sumDigits(-4342))//should log 13