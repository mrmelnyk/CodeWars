//you are given two arrays. the first is the key to the exam and the second is the students answers. If a question is answered correctly 4 points are awarded, if it is wrong one point
//is taken away, and if it's left blank it is 0 points. If the score is less than 0 return 0.

function checkExam(array1, array2) {
    let score = 0;
    for (let i=0;i<array1.length;i++){
      if(array1[i] == array2[i]){
        score += 4;
      } else if(array2[i] === ''){
        score += 0;
      } else {
        score -= 1;
      }
    }
    if(score < 0){
        return 0;
      } else {
        return score;
      }
  }

  console.log(checkExam(['a','b','b','c','d'], ['a','a','b','','c']))//should log 6
  