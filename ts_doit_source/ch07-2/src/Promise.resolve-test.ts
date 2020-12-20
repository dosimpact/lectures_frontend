Promise.resolve(1).then(value => console.log(value)) // 1

Promise.resolve('hello').then(value => console.log(value)) // hello

Promise.resolve([1, 2, 3]).then(value => console.log(value)) //  [ 1 2 3 ]

Promise.resolve({ name: 'Jack', age: 32 }).then(value => console.log(value)) // { name: 'Jack', age: 32 }
