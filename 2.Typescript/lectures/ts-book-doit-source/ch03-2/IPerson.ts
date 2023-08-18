interface IPerson {
  name: string
  age: number
}

let good: IPerson = { name: 'Jack', age: 32 }
// let bad1: IPerson = {name: "Jack"}; // age 속성이 없으므로 오류
// let bad2: IPerson = {age: 32}; // name 속성이 없으므로 오류
// let bad3: IPerson = {}; // name 과 age 속성이 모두 없으므로 오류
// let bad4: IPerson = { name: "Jack", age: 32, etc: true}; // etc란 속성이 있으므로 오류
