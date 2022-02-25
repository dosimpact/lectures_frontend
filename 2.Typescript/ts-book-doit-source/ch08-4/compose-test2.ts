import {compose} from './compose'

const inc = x => x + 1

const composed = compose(inc, inc, inc)
console.log(
  composed(1) // 4
)