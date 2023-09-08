//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a-b);
    return sorted[0] + sorted[1]
  }

  console.log(sumTwoSmallestNumbers([123, 3, 67, 390, 11]))//should log 14
  console.log(sumTwoSmallestNumbers([86744, 10, 38394002, 67778373, 2349890266432]))//should log 86754
  