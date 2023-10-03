//Your task, is to create N×N multiplication table, of size provided in parameter.
//For example, when given size is 3:

    //1 2 3
    //2 4 6
    //3 6 9

//For the given example, the return value should be:

    //[[1,2,3],[2,4,6],[3,6,9]]

    multiplicationTable = function(size) {
        let result = []
        for (let i = 0; i < size; i++){
          result[i] = []  
            for (let j = 0; j < size; j++){
                result[i][j] = (i + 1)*(j + 1)
            }
        }
          return result
      }

      console.log(multiplicationTable(4))//should log [[1,2,3,4], [2,4,6,8], [3,6,9,12], [4,8,12,16]]