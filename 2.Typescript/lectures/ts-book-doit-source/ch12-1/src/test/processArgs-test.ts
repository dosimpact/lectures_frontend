// ts-node src/test/processArgs-test.ts data/fake.csv 100000
process.argv.forEach((val: string, index: number) => {
  console.log(index + ': ' + val)
})
/*
0: C:\scoop\apps\nodejs-lts\current\bin\node_modules\ts-node\dist\bin.js
1: D:\code\ch08\08-5\src\test\processArgs-test.ts
2: data/fake.csv
3: 1000000
*/