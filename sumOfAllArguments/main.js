//Write a function that finds the sum of all its arguments.

function sum() {
    return Array.prototype.reduce.call(arguments, function(a,b){
      return a + b;
    }, 0);
  }

  console.log(sum(1,2,3,4,5))//should log 15
  