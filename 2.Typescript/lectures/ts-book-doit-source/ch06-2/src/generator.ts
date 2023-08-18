export function* generator() {
  console.log('genertor started...')
  let value = 1
  while (value < 4) yield value++
  console.log('genertor finished...')
}
