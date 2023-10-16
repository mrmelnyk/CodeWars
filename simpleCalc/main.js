//Build a simple calculator that takes in two values and an operator sign. If the calculator recieves a value that doesn't work return 'unknown value'.

function calculator(a,b,sign){
  if(sign == '+'){
    return a + b;
  } else if(sign == '-'){
    return a - b;
  } else if(sign == '*'){
    return a * b;
  } else if(sign == '/'){
    return a / b;
  } else {
    return 'unknown value';
  }
}

console.log(calculator(1,1,'+'))//should log 2