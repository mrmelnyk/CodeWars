//The Loch Ness monster keeps trying to trick you and steal your money. The only way to tell if it's actually the Loch Ness monstter is if he asks for 'tree fiddy' (it can also be '3.50' or 'three fifty')
//Write a function that checks the converstations you have to see if the Loch Ness monster is trying to steal from you again.

function isLochNessMonster(s) {
  return s.includes('tree fiddy') || s.includes('three fifty') || s.includes('3.50')
}

console.log(isLochNessMonster('Hey there pal, would you like to buy a map of the area? It will only cost you tree fiddy.'))//shoudl log true
console.log(isLochNessMonster('You better keep your eyes open, we have been seeing a lot of that monster here lately.'))//should log false
