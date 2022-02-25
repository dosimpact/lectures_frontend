const makeNames = (): () => string => {
  const names = ["Jack", "Jane", "Smith"]
  let index = 0;
  return (): string => {
    if(index == names.length)
      index = 0
    return names[index++]
  }
}

const makeName: ()=>string = makeNames();
console.log(
  [1, 2, 3, 4, 5, 6].map(n => makeName()) // [ 'Jack', 'Jane', 'Smith', 'Jack', 'Jane', 'Smith' ]
)

