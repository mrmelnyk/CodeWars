//Given 2 pairs of values each representing a road (the number of cars on it and its name), 
//construct an object whose turngreen method returns the name of the road with the most traffic at the moment of the method call, and clears that road from cars.
//After both roads are clear of traffic, or if the number of cars on both roads is the same from the beginning, return an empty value instead.

class SmartTrafficLight {
    constructor(st1, st2) {
      this.st1 = st1
      this.st2 = st2
    }
    
    turnGreen() {
      if (this.st1[0] === this.st2[0]){
        return null;
      }
      if (this.st1[0] > this.st2[0]){
        this.st1[0] = 0
        return `${this.st1[1]}`
      } else {
        this.st2[0] = 0
        return `${this.st2[1]}`
      }
    }
  }

  test = new SmartTrafficLight([34, '3rd Ave'], [73, '5th St'])
  console.log(test.turnGreen())//should log '5th St'