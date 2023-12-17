//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
    return s.split('').map(a => a.toLowerCase() == a ? a.toUpperCase() : a.toLowerCase()).join('');
  }

  console.log(alternateCase('abc'))//should log 'ABC'
  console.log(alternateCase('AbC'))//should log 'aBc'
  