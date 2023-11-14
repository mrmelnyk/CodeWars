//write a function that returns a string from the given arrays. the first array will be the two teams playing and the second will be the final score of the game.

function uefaEuro2016(teams, scores){
    if(scores[0] > scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
  }

  console.log(uefaEuro2016([Germany, Italy], [2,0]))//should log 'At match Germany - Italy, Germany won!'
  console.log(uefaEuro2016([USA, Portugal], [1,1]))//should log 'At match USA - Portugal, teams played draw.'
  