//Write a function that converts a given number into its binary representation if it is even, and its hexidecimal representation if it is odd.

function evensAndOdds(num){
    return num%2 == 0 ? num.toString(2) : num.toString(16);
  }

  console.log(evensAndOdds(2))//should log '10'
  console.log(evensAndOdds(47))//should log '2f'
  