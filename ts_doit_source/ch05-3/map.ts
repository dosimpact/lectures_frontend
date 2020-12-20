import {range} from  './range'

let names: string[] = range(1, 5 + 1)
  .map((val, index) => `[${index}]: ${val}`)
console.log(names) // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]