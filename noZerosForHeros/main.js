//Numbers ending with zeros are boring.
//They might be fun in your world, but not here.
//Get rid of them. Only the ending ones.
//Zero alone is fine, don't worry about it. Poor guy anyway.

function noBoringZeros(n) {
    let str = String(n).replace(/0+$/, '')
    return +str
    }

console.log(noBoringZeros(6000))//should log 6
console.log(noBoringZeros(10120))//should log 1012
