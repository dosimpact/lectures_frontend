import {readFileGenerator} from '../fileApi'

for(let value of readFileGenerator("data/fake-100000.csv")) {
  console.log('<line>', value, '</line >') // <line> name,email,ip,phone </line >
  break // 시간상 첫 줄만 프린트
}
