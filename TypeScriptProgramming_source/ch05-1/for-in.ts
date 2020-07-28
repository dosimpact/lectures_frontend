let names = ['Jack', 'Jane', 'Steve']

for (let index in names) {
  const name = names[index]
  console.log(`[${index}]: ${name}`) // [0]: Jack [1]: Jane  [2]: Steve
}
