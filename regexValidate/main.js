//Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. 
//Return false otherwise. You can assume the input will always be a number.

function validateCode (code) {
    let arr = code.toString().split('');
    return (arr[0] == 1 || arr[0] == 2 || arr[0] == 3) ? true: false;
  }

  console.log(validateCode(158398))//should log true
  console.log(validateCode(59657))//should log false
  