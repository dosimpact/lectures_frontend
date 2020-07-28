import { range } from './range'

let squres: number[] = range(1, 5 + 1).map((val: number) => val * val)
console.log(squres) //[ 1, 4, 9, 16, 25 ]
