//given an array, return the name of the player that is choosen based of the variable of goose.

function duckDuckGoose(player, goose){
  return goose ? player[(goose - 1)%player.length].name:'';
}