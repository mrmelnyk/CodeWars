//Given a string, detect whether or not it is a paragram. Return true if it is, else return false.

function detectPanagram(str){
    let lc = str.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lc.includes(char)){
            return false;
        }
    }
    return true;
}

console.log(detectPanagram('The quick fox jumps over the lazy brown dog'))//should log true
console.log(detectPanagram('Hello World!'))//should log false
