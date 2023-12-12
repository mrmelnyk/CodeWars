//Write a function that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower, close to, or higher than b.
//For a to be close to b, the margin must be greater than or equal to the absolute distance between a and b.

function closeCompare(a, b, margin){
    if(margin >= Math.abs(a-b) || a == b) return 0;
    if(a>b) return 1;
    if(a<b) return -1;
  }

  console.log(closeCompare(8,5,2))//should log 1
  