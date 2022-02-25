import { curriedSum } from './curriedSum'
console.log(
  curriedSum(), // [Function]
  curriedSum(1), // [Function]
  curriedSum(1)(2), // [Function]
  curriedSum(1)(2)(3), // [Function]
  curriedSum(1)(2)(3)(4) // 10
)
