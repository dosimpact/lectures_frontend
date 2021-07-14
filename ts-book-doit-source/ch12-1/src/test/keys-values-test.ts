import {IFake, makeFakeData} from '../fake'

const data: IFake = makeFakeData();
const keys = Object.keys(data)
console.log('keys:', keys) // keys: [ 'name', 'email', 'ip', 'phone' ]
const values = Object.values(data)
console.log('values:', values) /* values: ['Glen Harper', 'kakdi@rarnazsiw.mz',
  '25.110.148.227', '(243) 360-8853' ] */