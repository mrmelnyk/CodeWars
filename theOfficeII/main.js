//You will be provided with a object that has the name of the staff as keys and the department that they work in as values. Each department has a different score based on how boring they are. depending on the score of the whole team return the appropriate statement.

let scale = {
  accounts:1,
  finance:2,
  canteen:10,
  regulation:3,
  trading:6,
  change:6,
  IS:8,
  retail:5,
  cleaning:4,
  'pissing about':25
}

function boredom(staff){
  let value = Obect.values(staff);
  let score = val.reduce((a,b) => a + scale[b], 0);
  return score <= 80 ? 'kill me now' : score > 80 && score < 100 ? 'i can handle this' : 'party time!!';
}

console.log(boredom({tim: 'IS', jim: 'finance', randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning', katie: 'cleaning', laura: 'pissing about', emily: 'regulation', alex: 'regulation', john: 'accounts', kyle: 'canteen'}))//should log 'i can handle this'
