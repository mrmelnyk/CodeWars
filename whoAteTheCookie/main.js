function cookie(x){
    if (x === String(x)) {
      return 'Who ate the last cookie? It was Zach!'
    } else if (x === Number(x)) {
      return 'Who ate the last cookie? It was Monica!'
    } else {
      return 'Who ate the last cookie? It was the dog!'
    }
  }

  console.log(cookie('andrew'))//should log Zach
  console.log(cookie(45))//should log Monica
  console.log(cookie(true))//should log the dog
  console.log(cookie('45'))//should log Zach