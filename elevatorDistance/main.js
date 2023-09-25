//Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. 
//You have travelled a total of 3 + 6 = 9 floors of distance.
//Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

function elevatorDistance(array) {
    let arr = array.slice(1).map((a,b) => a - array[b])
    let pos = arr.map(Math.abs)
    return pos.reduce((x,y) => x+y)
  }

  console.log(elevatorDistance([1,4,6,2]))//should log 9
  