//Write a function to greet a person. Function will take name as input and greet the person by saying hello. 
//Return null/nil/None if input is empty string or null/nil/None.

function greet(name) {
    if(name == null) return null;
    if(name.length <= 0) return null
    return `hello ${name}!`;
  }

  console.log(greet('Andrew'))//should return 'hello Andrew!
  console.log(greet(''))//should return null
  