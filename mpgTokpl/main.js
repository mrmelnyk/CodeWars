function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    const km = 1.609344
    const l = 4.54609188
    return Number(((mpg * km) / l).toFixed(2))
  }

  console.log(converter(10))//should log 3.54
  console.log(converter(30))//should log 10.62