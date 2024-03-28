//Given a list of integers and a number for length, find the product of the maximal numbers.

function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).slice(0, size).reduce((c,d) => c*d);
  }

  console.log(maxProduct([10,8,7,9], 3))//should log 720
  