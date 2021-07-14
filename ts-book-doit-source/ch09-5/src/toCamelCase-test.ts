import {toCamelCase} from './toCamelCase'

console.log(
  toCamelCase(" ")("Hello world"), // helloWorld 
  toCamelCase("_")("Hello_Albert_Einstein") // helloAlbertEinstein
)