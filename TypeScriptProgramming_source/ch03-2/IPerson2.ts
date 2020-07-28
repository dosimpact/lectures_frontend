interface IPerson2 {
  name: string
  age: number
  etc?: boolean
}

let good1: IPerson2 = { name: 'Jack', age: 32 }
// let bad1: IPerson2 = {name: "Jack"}; // age 속성이 없으므로 오류
// let bad2: IPerson2 = {age: 32}; // name 속성이 없으므로 오류
// let bad3: IPerson2 = {}; // name 과 age 속성이 모두 없으므로 오류
let good2: IPerson2 = { name: 'Jack', age: 32, etc: true } // etc란 속성이 있으므로 오류
