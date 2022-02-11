import { mergeArray } from './mergeArray'

const mergedArray1: string[] = mergeArray(['Hello'], ['World'])
console.log(mergedArray1) // [ 'Hello', 'World' ]

const mergedArray2: number[] = mergeArray([1], [2, 3], [4, 5, 6], [7, 8, 9, 10])
console.log(mergedArray2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
