class Monad<T> {
  constructor(public value: T) {}
  static of<U>(value: U): Monad<U> {
    return new Monad<U>(value)
  }
  map<U>(fn: (x: T) => U): Monad<U> {
    return new Monad<U>(fn(this.value))
  }
}

const callMonad = fn => b => Monad.of(b).map(fn).value

console.log(
  callMonad((a: number) => a + 1)(1), // 2
  callMonad((a: number[]) => a.map(value => value + 1))([1, 2, 3, 4]) // [2, 3, 4, 5]
)
