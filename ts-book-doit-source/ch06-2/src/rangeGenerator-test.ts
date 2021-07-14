import { rangeGenerator } from './rangeGenerator'
// while 패턴으로 동작하는 생성기
let iterator = rangeGenerator(1, 3 + 1)
while (1) {
  const { value, done } = iterator.next()
  if (done) break
  console.log(value) // 1 2 3
}
// for...of 패턴으로 동작하는 생성기
for (let value of rangeGenerator(4, 6 + 1)) console.log(value)
