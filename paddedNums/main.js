//Write a function that returns a 5 digit padded value inside the string format of 'Value is value' 

function solution(value){
  return `Value is ${String(value).padStart(5,0)}`;
}

console.log(solution(109))//should log 00109
