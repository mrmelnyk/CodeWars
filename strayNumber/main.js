//You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//Complete the method which accepts such an array, and returns that single different number.
//The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    return numbers.reduce((x, y) => x ^ y);
  }

  console.log(stray([1,1,1,1,2]))//should log 2
  console.log(stray([3,3,33,3,3]))//should log 33