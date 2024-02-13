/*
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys.
Men are the Even numbers and Boys are the odd.
Notes
    Return an array/list where Even numbers come first then odds.
    Since, Men are stronger than Boys, Then Even numbers in ascending order While odds in descending.
    Array/list size is at least 4.
    Array/list numbers could be a mixture of positives , negatives.
    Have no fear , It is guaranteed that no Zeroes will exists.
    Repetition of numbers in the array/list could occur, So (duplications are not included when separating).
*/

function menFromBoys(arr){
    let even = [];
    let odd = [];
    for(let i=0; i<arr.length; i++){
      arr[i]%2==0 ? even.push(arr[i]) : odd.push(arr[i]);
    };
    let ans = even.sort((a,b) => a-b).concat(odd.sort((c,d) => d-c));
    return ans.filter((a,b) => ans.indexOf(a) == b);
  }

  console.log(menFromBoys([7,3,14,17,2,10]))//should log [2,10,14,17,7,3]
  