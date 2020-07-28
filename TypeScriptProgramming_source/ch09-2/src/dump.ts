import * as R from 'ramda'

export const dump = R.pipe(
  R.tap(n => console.log(n))
)