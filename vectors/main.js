//Create a Vector class with x and a y attributes that represent component magnitudes in the x and y directions.

//Your vectors should handle vector additon with an .add() method that takes a second vector as an argument and returns a new vector equal to the sum of the vector you call .add() 
//on and the vector you pass in.

class Vector {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    add (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }
}

