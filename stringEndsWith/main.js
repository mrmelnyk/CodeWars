//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//function solution(str, ending){
//    if (str.slice(-ending.length) == ending) {
//      return true
//    } else if (ending.length < 1) {
//      return true
//    } else {
//      return false
//    }
//  }

//refactoring

function solution(str, ending) {
    return str.endsWith(ending)
}



  console.log(solution('andrew', 'rew'))//should log true
  console.log(solution('nicolette', 'ett'))//should log false
