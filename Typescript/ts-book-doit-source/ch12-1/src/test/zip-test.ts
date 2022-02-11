import {zip} from '../utils'
import {makeFakeData, IFake} from '../fake'
const data = makeFakeData()
const keys = Object.keys(data), values = Object.values(data)

const fake: IFake = zip(keys, values) as IFake
console.log(fake) /* { name: 'Flora Poole', email: 'hipze@libo.ni',
  ip: '26.211.224.247', phone: '(820) 654-3421' } */