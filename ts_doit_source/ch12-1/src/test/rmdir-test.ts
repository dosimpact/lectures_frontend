import {rmdir} from '../fileApi/rmdir'

const deleteDataDir = async (dir) => {
  const result = await rmdir(dir)
  console.log(`'${result}' dir deleted.`) // './data/today' dir deleted.
}
deleteDataDir('./data/today')