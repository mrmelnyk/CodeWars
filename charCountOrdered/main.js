//Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

function orderedCount(text) {
    let obj = {}
    let arr = []
    for(let i=0; i<text.length; i++){
      obj[text[i]] = obj[text[i]] || 0
      !obj[text[i]] && arr.push(text[i])
      obj[text[i]]++
    }
    return arr.map((a,b)=>([a,obj[a]]))
  }

  console.log(orderedCount('hello world'))//should log [[h,1],[e,1],[l,3],[o,2],[w,1],[r,1],[d,1]]
  