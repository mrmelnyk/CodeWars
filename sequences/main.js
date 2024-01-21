//Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series  0, 1, 3, 6, 10, 15, 21, 28,... 
//When n < 0 return the sequence with negative terms.

function sumOfN(n) {
    let array = [];
    array[0] = 0;
    for (var i = 1; i < Math.abs(n)+1; i++) {
      if (n > 0) array[i] = array[i-1]+i;
      else array[i] = array[i-1]-i;
    }
    return array;
  };

  console.log(sumOfN(6))//should log [0,1,3,6,10,15,21]
  