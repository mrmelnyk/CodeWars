//Write a function that returns the sum of a sequence of integers. The sequence is defined by 3 non-negative integers: begin, end, step. If begin is greater than end return 0.

function sumOfsequence(begin, end, step){
  let arr = [];
  if(end<begin) return 0;
  for(let i=begin; i<=end; i+=step){
    arr.push(i);
  }
  return arr.reduce((a,b) => a+b);
}

console.log(sumOfsequence(1,5,1))//should log 15
