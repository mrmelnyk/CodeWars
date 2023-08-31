//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    while(n%5 != 0) {
      n++
    }
    return n
  }

  console.log(roundToNext5(3))//should log 5
  console.log(roundToNext5(0))//should log 0
  console.log(roundToNext5(23))//should log 25
  console.log(roundToNext5(-6))//should log -5
  