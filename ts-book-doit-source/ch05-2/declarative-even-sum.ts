import { range } from './range'
import { fold } from './fold'
import { filter } from './filter'

let numbers: number[] = range(1, 100 + 1)
const isEven = (n: number): boolean => n % 2 == 0
let result = fold(filter(numbers, isEven), (result, value) => result + value, 0)
console.log(result) // 2550
