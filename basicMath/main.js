//Write a function that will add or subtract on the equation of a given string. The answer must be a string as well.

function calculate(str){
    return String(eval(str.replace(/plus/ig, '+').replace(/minus/ig, '-')));
}

console.log(calculate('1plus4minus3'))//should log '2'
