//Create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
    p= BigInt(p);
    return ((factorial(p-1n) + 1n) % (p * p) ) == 0n;
  }
  function factorial(num){
   return num <= 1n ?  1n: num*factorial(num-1n);
  }