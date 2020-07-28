const multiply = (result, val) => result * val // 7번 줄에서 사용됩니다.

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tempResult = numbers
  .filter(val => val % 2 != 0)
  .map(val => val * val)
  .reduce(multiply, 1)
let result = Math.round(Math.sqrt(tempResult))
console.log(result) // 13
