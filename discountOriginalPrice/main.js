//Write a function that returns the original price of an item. You will be given the discounted price and the sale percentage.

function OGPrice(dp, sp){
  return Math.round((dp / (1-(sp/100)))*100)/100;
}

console.log(OGPrice(75,25))//should log 100
