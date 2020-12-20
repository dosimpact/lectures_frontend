import {pipe} from './pipe'
import {squaredMap} from './squaredMap'

const fourSquare = pipe(
  squaredMap,
  squaredMap
)
console.log(
  fourSquare([3, 4]) // [81, 256] <- [(3*3)*(3*3), (4*4)*(4*4)]
)
