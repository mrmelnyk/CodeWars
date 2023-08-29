function solution(start, finish) {
    let remainder = (finish - start) % 3
    return ((finish - start) - remainder) / 3 + remainder
}

console.log(solution(1, 5))//should log 2