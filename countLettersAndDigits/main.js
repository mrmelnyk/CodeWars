/*
Write a function that can determine how many letters, both upper and lowercase, and digits are in a string. Special characters do not count towards the total.
*/

function countLettersAndDigits(input) {
    let arr = [];
    for(let i=0; i<input.length; i++){
      if(input[i].match(/[a-z0-9]/gi)){
        arr.push(input[i])
      }
    }
    return arr.length;
  }

  console.log(countLettersAndDigits('hel2!?lo'))//should log 6
  


  function adding(x){
    return x.map(a => +a).reduce((b,c) => b+c);
  }

  console.log(adding([3, 4, '3', '5', 2, '3']))//should log 20