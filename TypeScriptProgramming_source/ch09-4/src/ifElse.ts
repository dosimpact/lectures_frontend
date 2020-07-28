import * as R from 'ramda'

const input: number[] = R.range(1, 10 + 1), halfValue = input[input.length / 2] // 6

const subtractOrAdd = R.pipe(
  R.map( R.ifElse(
    R.lte(halfValue), //x => half <= x,
    R.inc,
    R.dec,
  ) ),
  R.tap(a => console.log(a)) // [ 0, 1, 2, 3, 4, 7, 8, 9, 10, 11 ]
)
const result = subtractOrAdd(input)