//You are given a card as an argument. Return the suit of that card (in lowercase).

function defineSuit(card){
  if(card.match('♣️')){
    return 'clubs';
  } else if(card.match('♦️')){
    return 'diamonds';
  } else if(card.match('♥️')){
    return 'hearts';
  }else {
    return 'spades';
  }
}

console.log(defineSuit('Q♥️'))//should log 'hearts'
