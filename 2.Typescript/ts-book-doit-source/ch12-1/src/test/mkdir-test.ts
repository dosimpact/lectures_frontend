import {mkdir} from '../fileApi/mkdir'

const makeDataDir = async(dirname: string) => {
  let result = await mkdir(dirname)
  console.log(`'${result}' dir created`) // './data/today' dir created
}
makeDataDir('./data/today')