//Write a function that takes in 3 values. The first and the third are numbers and the second is a character. When the character is a '+,-,/,*' the function will return the corresponding mathematical function. If the character does not match the operators, or if the function tries to divide by 0, return null.

function calculate(num1, operation, num2){
  if(num2 == 0 && operation == '/') return null;
  if(operation != '+' && operation != '-' && operation != '*' && operation != '/') return null;
  return eval(num1+operation+num2);
}

console.log(calculate(3,'*',5))//should log 15
