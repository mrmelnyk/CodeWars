//For every increment of 2 litres you get a 5 cent discount on your gas up to 25 cents off.
//Write a function that take your litres and the price per litre and return how much your gas will cost with the applicable discount.

function fuelPrice(L, priceperL){
  if(L >= 10) return +((priceperL - 0.25)*L).toFixed(2);
  if(L >= 8) return +((priceperL - 0.2)*L).toFixed(2);
  if(L >= 6) return +((priceperL - 0.15)*L).toFixed(2);
  if(L >= 4) return +((priceperL - 0.1)*L).toFixed(2);
  if(L >= 2) return +((priceperL - 0.05)*L).toFixed(2);
  return +(priceperL * L).toFixed(2);
}

console.log(fuelPrice(5, 5.6))//should log 27.50
