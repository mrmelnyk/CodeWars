/*
You are given a string of n lines, each substring being n characters long: For example:
s = "abcd\nefgh\nijkl\nmnop"

Task:
Write these two functions:
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

and

A high-order function oper(fct, s) where fct is the function of one variable to apply to the string s (fct will be one of vertMirror, horMirror)
*/

function vertMirror(strng) {
    return strng.split('\n').map(a => a.split('').reverse().join('')).join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct(s);
}

console.log(oper(horMirror, 'qwer\nasdf\nzxcv\nyuio'))//should log 'yuio\nzxcv\nasdf\nqwer'
