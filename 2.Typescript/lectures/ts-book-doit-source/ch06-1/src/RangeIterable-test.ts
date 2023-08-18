import { RangeIterable } from './RangeIterable'
const iterable = new RangeIterable(1, 3 + 1)

for (let value of iterable) {
  console.log(value)
}
