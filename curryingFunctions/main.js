//Write a function that takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

function multiplyAll(arr) {
    return (num) => {
      return arr.map(a => a*num)
    }
  }

  console.log(multiplyAll([1,2,3,4])(2))//should log [2,4,6,8]
  