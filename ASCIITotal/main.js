//given a string, return the sum of all the characters as an integer. the function should be able to handle all printable ASCII characters.

function uniTotal (str) {
    return str.split('').map(a => a.charCodeAt(0)).reduce((b,c) => b+c, 0)
  }

  console.log(uniTotal('aaa'))//should log 291
  