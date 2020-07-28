import * as R from 'ramda'
import {flatMap} from './flatMap'

const unnest = flatMap(R.identity)

const array = [ [1], [2], [3] ]
R.pipe(
  unnest,
  R.tap(n => console.log(n)) // [ 1, 2, 3 ]
)(array)