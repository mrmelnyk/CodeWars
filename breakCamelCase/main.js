//Write a function that breaks camel case and adds a space between the words. Capital letters will remain the same.

function solution(str){
  return (str.replace(/([A-Z])/g, ' $1'));
}

console.log(solution('camelCase'))//should log 'camel Case'
