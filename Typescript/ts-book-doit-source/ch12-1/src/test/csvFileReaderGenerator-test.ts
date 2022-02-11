import { csvFileReaderGenerator } from '../csvFileReaderGenerator'

for(let obj of csvFileReaderGenerator('./data/fake.csv'))
  console.log(obj)
