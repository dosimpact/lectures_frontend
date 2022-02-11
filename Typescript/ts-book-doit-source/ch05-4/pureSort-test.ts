import { pureSort } from './pureSort'

let beforeSort = [6, 2, 9, 0]
const afterSort = pureSort(beforeSort)
console.log(beforeSort, afterSort) // [ 6, 2, 9, 0 ] [ 0, 2, 6, 9 ]
