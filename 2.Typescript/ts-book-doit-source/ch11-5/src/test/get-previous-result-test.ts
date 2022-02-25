import {IO} from '../classes/IO'

const result = IO.of((a1) => {
  console.log('first map called', a1)
  return a1
})
.map((a2) => {
  console.log('second map called', a2)
  return a2 + 1
})
.chain(a3 => {
  return new IO(() => {
    console.log('io started', a3)
    return a3 + 2
  })
})
.chain(a4 => {
  return new IO(() => {
    console.log('second chain called', a4)
    return a4 + 3
  })
})
.runIO(1)

