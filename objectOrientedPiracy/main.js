//You are the leader of a small pirate crew and you need to make a system to determine if ships are worth plundering. In order to do so, you must compare the draft of the ship (how low it sits in the water) and the number of crew on board. Each crew member is worth 1.5 unit and there has to be a draft more than 20 for it to be worth it. Using objects to create your system return true if it's worth your time to plunder the ship and false if it's not.

class Ship {
  constructor(draft, crew){
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt(){
    return this.draft - this.crew*1.5 > 20;
  }
}

let titanic = new Ship (100, 20)
console.log(titanic.isWorthIt())// should log true
