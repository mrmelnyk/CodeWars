//Write a function that calculates the original price of an item before taxes were added.

function withoutTax(price){
    if(price == null) return -1;
    return +(price / 1.15).toFixed(2);
}

console.log(withoutTax(230))//should log 200