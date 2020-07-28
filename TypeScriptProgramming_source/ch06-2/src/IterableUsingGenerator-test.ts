import { IterableUsingGenerator } from './IterableUsingGenerator'
for (let item of new IterableUsingGenerator([1, 2, 3])) {
  console.log(item) // 1 2 3
}
for (let item of new IterableUsingGenerator(['hello', 'world', '!'])) {
  console.log(item) // hello world !
}
