import {map} from './map'

const square = value => value * value
export const squaredMap = map(square)
// export const squaredMap = a => map(square)(a)