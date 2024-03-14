//Given a string, write a function that will ensure that it is a question by adding a question mark to the end. If there is already a question mark, return the string.

function ensureQuestion(s){
  return s.replace(/[?]/, '') + '?';
}


console.log(ensureQuestion('Yes'))//should log 'Yes?'