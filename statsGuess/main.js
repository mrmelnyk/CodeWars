//You're given a function with four arguments:
    //the number of blue marbles you put in the bag to start
    //the number of red marbles you put in the bag to start
    //the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
    //the number of red marbles pulled out so far (always lower than the starting number of red marbles)
//Finish the function so that you return the probability of drawing a blue marble from the bag, expressed as a float.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled)/((redStart - redPulled) + (blueStart - bluePulled))
  }

  console.log(guessBlue(5,7,4,3))//should log 0.2
  