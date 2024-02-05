//Write a function that returns the first x multiples of n. Assume that x is a positive integer.

function multiples(x, n){
    let arr = [];
    let i = 0;
    while(i<x){
        i++;
        arr.push(i);
    }
    return arr.map(a => a*=n);
}

console.log(multiples(3, 5))//should log [5,10,15]
