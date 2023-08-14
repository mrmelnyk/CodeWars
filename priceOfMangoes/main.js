function mango(quantity, price) {
    return price * (quantity - Math.floor(quantity / 3))
}

//tests
console.log(mango(6,4))//should return 16
console.log(mango(9,5))//should return 30