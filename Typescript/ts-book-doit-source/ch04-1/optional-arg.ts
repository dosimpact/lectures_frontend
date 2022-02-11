function fn(arg?: number) {
  console.log(`arg: ${arg}`)
}

fn(1) // 1
fn() // undefined

type OptionalArgFunc = (string, number?) => void
let h: OptionalArgFunc = fn
