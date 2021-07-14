import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'

const pairs: [string, any][] = R.toPairs(makeRandomIPerson())
const person: IPerson = R.fromPairs(pairs) as IPerson
console.log('person:', person) /* person: {
  name: 'Sadie George',
  age: 35,
  title: 'Tax Specialist',
  location: {
    country: 'RO',
    city: 'Giwraak',
    address: '569 Hopve Lane',
    coordinates: { latitude: -34.78422, longitude: -114.44199 }
  }
} */