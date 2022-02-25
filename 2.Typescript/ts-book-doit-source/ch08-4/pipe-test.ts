import {f, g, h} from './f-g-h'
import {pipe} from './pipe'

const piped = pipe(f, g, h)
console.log(
  piped('x') // h(g(f(x)))
)