import * as R from "ramda"

type NumtoNumFunc = (n:number) => number
const applyDiscount = (minimum: number, discount: number): NumtoNumFunc =>
  R.pipe(
    R.ifElse( 
      R.flip(R.gte)( minimum ), 
      R.flip(R.subtract)( discount ), 
      R.identity
    ),
    R.tap(amount => console.log(amount))
  )
const calcPrice = applyDiscount(5000, 500) 

const discountedPrice = calcPrice( 6000 ) // 5500
const notDiscountedPrice = calcPrice(4500) // 4500
