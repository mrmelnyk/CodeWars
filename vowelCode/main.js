//write a function that replaces all the vowels in a string with a number.
//a-1
//e-2
//i-3
//o-4
//u-5
//and then write a function that reverses the process, retruning the string to the original.

function encode(string) {
    return string.replace(/a/g,1)
      .replace(/e/g,2)
      .replace(/i/g,3)
      .replace(/o/g,4)
      .replace(/u/g,5)
  }
  
  function decode(string) {
    return string.replace(/1/g,'a')
      .replace(/2/g,'e')
      .replace(/3/g,'i')
      .replace(/4/g,'o')
      .replace(/5/g,'u')
  }

  console.log(encode('hello world'))//should log 'h2ll4 w4rld'
  console.log(decode('th3s 3s 1 t2st'))//should log 'this is a test'

  