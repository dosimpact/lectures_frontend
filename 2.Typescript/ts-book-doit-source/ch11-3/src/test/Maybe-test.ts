import * as R from 'ramda'
import { Maybe, IMaybe, Just, Nothing } from '../classes/Maybe'

const divide = (a: number) => (b: number): IMaybe<number> => 
  b ? Maybe.Just(a/b) : Maybe.Nothing

console.log(
  divide(1)(1).map(R.add(1)).getOrElse(0), // Just(1/1)이 반환된 뒤, R.add(1)에 더해져 2가 됩니다
  divide(1)(0).map(R.add(1)).getOrElse(0) /* Nothing이 반환되어 R.add(1)은 전혀 동작하지 않고, getOrElse(0)가 제공한 값 0이 반환 됩니다 */
)
  