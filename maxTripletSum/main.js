//Given an array/list [] of n integers, find maximum triplet sum in the array Without duplications.

/*
function maxTriSum(numbers){
    let ordered = numbers.sort((a,b) => b-a);
    let singles = ordered.filter((a,b) => ordered.indexOf(a) == b);
    let largest = singles.slice(0,3);
    return largest.reduce((a,b) => a+b);
  }*/

  function maxTriSum(num){
    return num.sort((a,b) => b-a).filter((c,d) => num.indexOf(c) == d).slice(0,3).reduce((e,f) => e+f);
  }

  console.log(maxTriSum([3,3,4,1,2,7,4]))//should log 14
  