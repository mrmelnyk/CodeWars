//In a fight between George Saint Pierre and Connor McGregor you have to write a function that returns the winner catch phrase.

function quote(fighter){
  return fighter.match(/George Saint Pierre/ig) ? "I am not impressed by your performance." : "I'd like to take this chane to apologize.. To absolutely NOBODY!";
}

console.log(quote('george saint pierre'))//should log "I am not impressed by your performance."