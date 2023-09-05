//A square of squares
//You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
//However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! 
//If you just had a way to know, whether you're currently working in vain… 
//Wait! That's it! You just have to check if your number of building blocks is a perfect square.

//Task
//Given an integral number, determine if it's a square number.
//The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
    return Math.ceil(Math.sqrt(n)) == Math.floor(Math.sqrt(n))
  }

  console.log(isSquare(5))//should log false
  console.log(isSquare(25))//should log true - 5*5