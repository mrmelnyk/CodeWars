//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health>=damage ? health - damage:0;
  }

  console.log(combat(100, 40))//should log 60
  console.log(combat(45, 12))//should log 33
  console.log(combat(20, 30))//should log 0
  console.log(combat(20, 20))//should log 0
  