function billboard(name, price = 30) {
    let total = 0
    for (let i =0;i < name.length; i++){
      total+=price
    } return total
  } 

  console.log(billboard('Andrew Donald'))//should log 390
  console.log(billboard('Nicolette Marie Gray', 50))//should log 1000