import * as R from 'ramda'

const duplicate = (n: number): number[] => [n, n]
const array = [1, 2, 3]
const dupArray = R.chain(duplicate)(array)
console.log(dupArray) // [ 1, 1, 2, 2, 3, 3 ]

//R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]