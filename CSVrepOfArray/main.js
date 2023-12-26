//Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
    return array.map(a=>a.map(b=> String(b)).join(',')).join('\n');
  }

  console.log(toCsvText([[1,2,3],[4,5,6],[7,8,9]]))//should log '1,2,3\n4,5,6\n7,8,9'
  