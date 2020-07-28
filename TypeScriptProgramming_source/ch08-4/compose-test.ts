import {f, g, h} from './f-g-h'
import {compose} from './compose'

const composedHGF = compose(h, g, f)
console.log(
  composedHGF('x') // h(g(f(x)))
)