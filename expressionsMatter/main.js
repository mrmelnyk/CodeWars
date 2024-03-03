//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

function expressionMatter(a, b, c) {
    return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  )
}

console.log(expressionMatter(1,3,1))//should log 5
