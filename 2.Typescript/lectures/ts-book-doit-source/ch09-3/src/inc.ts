import * as R from 'ramda'

const numbers: number[] = R.range(1, 9 + 1)

const incNumbers = R.pipe(
  R.tap(a => console.log('before inc:', a)), // before inc: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  R.map(R.inc),
  R.tap(a => console.log('after inc:', a)), // after inc: [ 2, 3, 4,  5, 6, 7, 8, 9, 10  ]
)

const newNumbers = incNumbers(numbers)
//console.log(newNumbers) // [ 2, 3, 4,  5, 6, 7, 8, 9, 10 ]