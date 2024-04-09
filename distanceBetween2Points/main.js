/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.
*/

function distanceBetweenPoints(a, b) {
    return Math.hypot((a.x - b.x), (a.y - b.y))
  }

  