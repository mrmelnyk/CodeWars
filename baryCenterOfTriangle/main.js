/*
The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. 
The three medians of a triangle intersect at the same point, called the barycenter or the centroid. 
Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, 
receives the coordinates of the three vertices A, B and C  as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).
*/

function barTriang(p1, p2, p3){
    return [+((p1[0]+p2[0]+p3[0])/3).toFixed(4),
          +((p1[1]+p2[1]+p3[1])/3).toFixed(4)];
}

console.log(barTriang([4, 6], [12, 4], [10, 10]))//should log [8.6667, 6.6667]
//just need to change something to push to github
