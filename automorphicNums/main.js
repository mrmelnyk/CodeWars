//Given a number determine if it Automorphic or not. A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
//25 squared is 625, Ends with the same number's digits which are 25.

function automorphic(n){
    return String(n**2).match(String(n)) ?'Automorphic':'Not!!'; 
  }

  console.log(automorphic(25))//should log 'Automorphic'
  console.log(automorphic(13))//should log 'Not!!'
  