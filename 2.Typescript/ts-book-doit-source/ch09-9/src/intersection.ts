import * as R from 'ramda'

const result = R.intersection([1,2,3,4], [7,6,5,4,3])
console.log(result) // [3, 4]