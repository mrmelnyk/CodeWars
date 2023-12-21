//Remove an exclamation mark from the end of a string. You can assume that the input data is always a string, no need to verify it.

function remove(str) {
    return str.replace(/!$/, '');
  }

  console.log(remove('Hi!!!'))//should log 'Hi!!'
  console.log(remove('Hi! Hi!'))//should log 'Hi! Hi'