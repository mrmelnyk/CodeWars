//You have to create a function named reverseIt.
//Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. 
//If the data is any other type, return it as it is.

function reverseIt(data){
    if (String(data) === data) {
      return data.split('').reverse().join('')
    } else if (Number(data) === data) {
      return Number(String(data).split('').reverse().join(''))
    } else {
      return data
    }
   }

   console.log(reverseIt([1,2,3]))//should log [1,2,3]
   console.log(reverseIt('Andrew'))//should log 'werdnA'
   console.log(reverseIt(456123))//should log 321654