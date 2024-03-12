//Write a function that takes a number and returns the number of times you must multiply the digits until you reach a single digit.

function persistence(num) {
    let count = 0;
    num = num.toString()
    while(num.length > 1){
      num = num.split('').map(a => +a).reduce((b,c) => b*c).toString();
      count++;
    }
    return count;
  }

  console.log(persistence(999))//should log 4
  