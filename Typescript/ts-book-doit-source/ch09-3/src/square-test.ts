import * as R from 'ramda'
import {square} from './quadratic'

const input: number[] = R.range(1, 10 + 1)
const squareAferInc = R.pipe(
  R.inc, // (x + 1)
  square // (x + 1) ** 2
)
const squareResult = R.pipe(
  R.map(squareAferInc),
  R.tap(a => console.log(a)) // [ 4, 9, 16, 25, 36, 49, 64, 81, 100, 121 ]
)(input)