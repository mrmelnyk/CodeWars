function lowercaseCount(str) {
    return str.length - str.replace(/[a-z]/g, '').length
}

console.log(lowercaseCount('asadfDJDJISSNJD'))//should log 5
console.log(lowercaseCount('abc@$#%$^&*()'))//should log 3