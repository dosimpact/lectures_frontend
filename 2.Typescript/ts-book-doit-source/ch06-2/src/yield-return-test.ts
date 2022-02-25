import { random, gen } from './yield-return'
const iter = gen()
while (true) {
  const { value, done } = iter.next(random(10, 1))
  if (done) break
  console.log(value)
}
