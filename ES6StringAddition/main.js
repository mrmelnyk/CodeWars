//Write a function that will add two strings together without using '+', '.concat()', or '.join()'.
//There must be a space in between the two strings.

function joinStrings(str1, str2){
  return `${str1} ${str2}`;
}

console.log(joinStrings('Hello', 'World'))//should log 'Hello World'
