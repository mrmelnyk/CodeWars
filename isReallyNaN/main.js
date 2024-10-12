//Write a function that returns true only if passed in an argument that evaluates to NaN, else return false.

function isReallyNaN(val) {
    return val !== val ? true : false;
};

console.log(isReallyNaN(NaN))//should log true
console.log(isReallyNaN(undefined))//should log false
console.log(isReallyNaN(45))//should log false