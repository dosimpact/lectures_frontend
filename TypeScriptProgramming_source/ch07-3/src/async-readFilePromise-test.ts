import { readFilePromise } from './readFilePromise' // 07-2절의 readFilePromise.ts입니다.

const readFilesAll = async (filenames: string[]) => {
  return await Promise.all(filenames.map(filename => readFilePromise(filename)))
}

readFilesAll(['./package.json', './tsconfig.json'])
  .then(([packageJson, tsconfigJson]: string[]) => {
    console.log('<package.json>: ', packageJson)
    console.log('<tsconfig.json>: ', tsconfigJson)
  })
  .catch(err => console.log('error:', err.message))
