import {range} from '../utils/range'
import {IFake, makeFakeData} from '../fake/makeFakeData'

let data  = [], numberOfFakeData = 1
for(let n of range(numberOfFakeData)) {
  data = [...data, makeFakeData()] 
}
console.log(data) /* [ { name: 'Erik Terry', email: 'benne@meh.bt', ip: '192.191.146.99',
                     phone: '(580) 546-5990' } ] */