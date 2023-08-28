function solution(a, b){
    if (a.length > b.length) {
      return `${b}${a}${b}`;
    } else if (a.length < b.length) {
      return `${a}${b}${a}`;
    } else {
      return 'You never said what to do with an invalid string!';
    }
  }

  console.log(solution('1', '22'))//should log '1221'
  console.log(solution('11111', '22'))//should log '221111122'