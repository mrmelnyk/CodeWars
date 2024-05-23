//Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

function filterLucky(x) {
    return x.filter(a => a.toString().match(/7/));
  }

  console.log(filterLucky([7,45,86,20,667,234,2,5,107]))//should log [7,667,107]
  