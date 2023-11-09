//Write a function that will check if two given characters are the same case.

    //If either of the characters is not a letter, return -1
    //If both characters are the same case, return 1
    //If both characters are letters, but not the same case, return 0

    function sameCase(a, b){
        if ((a.match(/[a-z]/g) && b.match(/[a-z]/g)) ||( a.match(/[A-Z]/g) && b.match(/[A-Z]/g))){
          return 1;
        } else if((a.match(/[A-Z]/g) && b.match(/[a-z]/g)) || (a.match(/[a-z]/g) && b.match(/[A-Z]/g))) {
          return 0;
        } else {
          return -1;
        }
      }

      console.log(sameCase('a','b'))//should log 1
      console.log(sameCase('B', '1'))//shoudl log -1
      console.log(sameCase('a','B'))//should log 0