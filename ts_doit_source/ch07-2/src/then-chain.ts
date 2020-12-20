Promise.resolve(1)
  .then((value: number) => {
    console.log(value) // 1
    return Promise.resolve(true)
  })
  .then((value: boolean) => {
    console.log(value) // true
    return [1, 2, 3]
  })
  .then((value: number[]) => {
    console.log(value) // [ 1, 2, 3 ]
    return { name: "jack", age: 32}
  })
  .then((value: {name: string, age: number}) => {
    console.log(value) // { name: 'jack', age: 32 }
  })