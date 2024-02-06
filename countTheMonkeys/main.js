/*You take your son to the forest to see the monkeys. 
You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.*/

function monkeyCount(n) {
    let count = 0,
        arr = [];
    while(count < n){
      count++;
      arr.push(count);
    }
    return arr;
  }

  console.log(monkeyCount(7))//should log [1,2,3,4,5,6,7]
  