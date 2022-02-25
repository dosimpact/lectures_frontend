import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'

const originalPerson: IPerson = makeRandomIPerson()
const keys: string [] = R.keys(originalPerson)
const values: any[] = R.values(originalPerson)
const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson
console.log('originalPerson:', originalPerson, 'zippedPerson:', zippedPerson) /* originalPerson: {
  name: 'Amy Burgess',
  age: 63,
  title: 'Program Manager',
  location: {
    country: 'AQ',
    city: 'Hahmegsel',
    address: '154 Neser View',
    coordinates: { latitude: -77.55442, longitude: -82.01775 }
  }
} zippedPerson: {
  name: 'Amy Burgess',
  age: 63,
  title: 'Program Manager',
  location: {
    country: 'AQ',
    city: 'Hahmegsel',
    address: '154 Neser View',
    coordinates: { latitude: -77.55442, longitude: -82.01775 }
  }
} */