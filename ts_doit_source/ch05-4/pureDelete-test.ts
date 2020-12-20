import {pureDelete} from './pureDelete'

const mixedArray: object[] = [
  [], {name:"Jack"}, {name:"Jane", age: 32}, ["description"]
]
const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
console.log(
  mixedArray, // [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ]
  objectsOnly // [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
)