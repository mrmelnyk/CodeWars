//Given a string of words, return a string made from only the first characters of each word in the original string.

function makeString(s){
    return s.split(' ').map(a => a.slice(0,1)).join('');
  }

  console.log(makeString('how everyone yells'))//should log 'hey'
  