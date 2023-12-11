//Write a function that calculates the area of a square when given the length of a circular arc from opposite corners of the square.

function squareArea(a){
    let r = (4*a)/(2*Math.PI);
    return r*r;
}

console.log(squareArea(2))//should log ~1.62
