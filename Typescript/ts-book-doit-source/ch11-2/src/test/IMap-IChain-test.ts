import {Identity} from '../classes/Identity'

console.log(
  Identity.of(1).map(value => `the count is ${value}`).value(), // the count is 1
  Identity.of(1).chain(value => Identity.of(`the count is ${value}`)).value() // the count is 1
)