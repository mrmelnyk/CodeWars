//Determine if the amount of balloons can make the object and its crew fly. 
//Each memnber of the crew will weight 80kgs, and each balloon will provide 4.8gs of lift.
//The weight of the object will be provided for each case.

class Journey {
    constructor(object, crew, balloons){
      this.object = object.weight
      this.crew = crew
      this.balloons = balloons  
    }
    isPossible() {
      return (this.object + (this.crew * 80)) <= (this.balloons * 0.0048)
    }
  }
  