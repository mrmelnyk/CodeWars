//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters.  
//Your task is to convert that string to either lowercase only or uppercase only based on:
//--make as few changes as possible.
//--if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let upper = s.length - s.replace(/[A-Z]/g, '').length
    let lower = s.length - s.replace(/[a-z]/g, '').length
    
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve('hellowORLd'))//should log 'helloworld'
console.log(solve('ANOTHERone'))//should log 'ANOTHERONE'
console.log(solve('andanOTHER'))//should log 'andanother'