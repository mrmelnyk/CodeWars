//I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
//Example: n = 3, so I expect a 3x3 square back just like below as a string:
    // +++
    // +++
    // +++

    function generateShape(integer){
        let arr = [];
        for(let i=0; i<integer; i++){
          arr.push('+');
        }
        let str = arr.join('');
        let arr2 = [];
        for(let j=0; j<integer; j++){
          arr2.push(str);
        }
        return arr2.join('\n');
      }

      console.log(generateShape(4))//should return '++++\n++++\n++++\n++++'
      