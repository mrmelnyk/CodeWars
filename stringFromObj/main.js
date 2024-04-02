//Write a function that takes an object and returns a string from its key/value pairs.
//The format should be 'KEY = VALUE' and each pair should be separated by a comma.

function solution(pairs){
    return Object.entries(pairs).map(([a,b]) => `${a} = ${b}`).join(',');
  }

  console.log(solution({'a': 1,'b': 2,'c': 3}))//should log 'a = 1,b = 2,c = 3'
  