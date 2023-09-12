//Write a function which takes a number and returns the corresponding ASCII char for that value.

function getChar(c){
    return String.fromCharCode(c)
  }

  console.log(getChar(65))//should log 'A'
  console.log(getChar(111))//shoudl log 'o'
  console.log(getChar(75))//should log 'K'
  