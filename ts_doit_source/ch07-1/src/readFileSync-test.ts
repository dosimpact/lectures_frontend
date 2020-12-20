import {readFileSync} from 'fs'

const buffer: Buffer = readFileSync('./package.json') // package.json 파일의 바이너리 내용
const content: string = buffer.toString()
console.log(content) // package.json 파일의 텍스트 내용

readFileSync('.') // Error: EISDIR: illegal operation on a directory, read