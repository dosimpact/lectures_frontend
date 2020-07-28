import {readFileSync, readFile} from 'fs'

// package.json 파일을 동기 방식으로 읽는 예
console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync("./package.json")
console.log(buffer.toString())

//  package.json 파일을 비동기 방식으로 읽는 예
readFile("./package.json", (error: Error, buffer: Buffer) => {
  console.log('read package.json using asynchronous api...')
  console.log(buffer.toString())
})

// Promise 와 async/await 구문을 사용한 예
const readFilePromise = (filename: string): Promise<string> => 
  new Promise<string>( (resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if(error)
        reject(error)
      else
        resolve(buffer.toString())
    })
  }); // Promise 객체를 만들 때는 세미콜론이 반드시 있어야 합니다

(async () => {
  const content = await readFilePromise('./package.json')
  console.log('read package.json using Promise and async/await...')
  console.log(content)
})()

