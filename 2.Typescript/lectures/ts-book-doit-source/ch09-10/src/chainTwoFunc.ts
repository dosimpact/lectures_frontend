import * as R from 'ramda'

export const chainTwoFunc = (firstFn, secondFn) => (x) => firstFn(secondFn(x), x)