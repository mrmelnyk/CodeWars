//Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//Your task is to return a number from a string.
//You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
    return Number(value.replace(/[a-z]/ig, ''))
  }


console.log(filterString('asdfj123'))//should log 123
console.log(filterString('1ad2dfskjl3fdlkj4'))//should log 1234
