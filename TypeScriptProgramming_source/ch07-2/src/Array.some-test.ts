const isAnyTrue = (values: boolean[]) => values.some((value => value == true))

console.log(
  isAnyTrue([false, true, false]), // true
  isAnyTrue([false, false, false]), // false
)
