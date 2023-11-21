//given a number return a string with a dash (-) be3fore and after each odd number.
//Do not begin or end the string with a dash, and if there is a negative number the negative sign should be removed. If the given variable is not a number return NaN.

function dashatizeIt(num){
  return String(num).split('').map(a =>  a%2 ? '-'+a+'-':a).join('').split('-').filter(b => b != '').join('-');
}

console.log(dashatizeIt(4635))//should log '46-3-5'
