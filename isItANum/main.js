//Given a string s, write a function that will return true if its a valid single integer or floating number, or false if its not.

function isDigit(s){
    return s == parseFloat(s);
}

console.log(isDigit(' 1 '))//should log true
console.log(isDigit('-34 4'))//should log false
