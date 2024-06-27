/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. 
The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. 
Words can be any consecutive sequence of non space characters. 
*/

function validSpacing(s) {
    let trm = s.trim();
    let ans = trm.replace(/\s+/g, ' ');
    return ans == s ? true : false;
  }

  console.log(validSpacing('  hello world '))//should log false
  