//write a function that determines if a given non-negative integer is a power of two.

function isPowerOfTwo(n){
  let i = 0;
  while(2**i < n){
    i++;
  }
  return 2**i == n ? true:false;
}

console.log(isPowerOfTwo(4096))//should log true
