import {readFile} from '../fileApi'

async function* readFileGenerator() {
  yield 1
  const result = await readFile('./package.json')
  yield result
}
// for(let value of readFileGenerator())
//   console.log(value)