//Write a function that accepts fight string consists of only small letters and return who wins the fight. 
//When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
//The left side letters and their power:
    //w - 4
    //p - 3
    //b - 2
    //s - 1
//The right side letters and their power:
    //m - 4
    //q - 3
    //d - 2
    //z - 1

    function alphabetWar(fight){
        let powers = {
            'w': -4,
            'p': -3,
            'b': -2,
            's': -1,
            'm': 4,
            'q': 3,
            'd': 2,
            'z': 1,
        };
            
        let num = fight.split('').reduce((a,b) => a+(powers[b] || 0),0);
        if(num > 0) return "Right side wins!";
        if(num < 0) return "Left side wins!"
        return "Let's fight again!";
      }

      console.log(alphabetWar('zzzss'))//should log 'Right side wins!'
      