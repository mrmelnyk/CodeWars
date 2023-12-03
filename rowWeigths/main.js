//Given an array of the weights of people, divid the array into two teams of odd and even and then return a new array where the first value is the total weight of team 1 and the second value is the total weight of team 2.

function rowWeights(array){
    let odd = [],
        even = [];
    for(let i=0; i<array.length; i++){
      i%2 == 0 ? even.push(array[i]):odd.push(array[i])
    }
    return [even.length == 0 ? 0 :even.reduce((a,b) => a+b), odd.length == 0 ? 0 :odd.reduce((a,b) => a+b)]
  }

  console.log(rowWeights([70,58,75,34,91]))//should log [236,92]
  