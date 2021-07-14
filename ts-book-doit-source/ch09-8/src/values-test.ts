import * as R from 'ramda'
import {makeRandomIPerson} from './model/person'

const values: any[] = R.values(makeRandomIPerson())
console.log('values:', values) /* values: [
  'Dora Young',
  62,
  'MIS Manager',
  {
    country: 'ST',
    city: 'Wuarujov',
    address: '1937 Sijuw Point',
    coordinates: { latitude: 83.83357, longitude: 12.53624 }
  }
] */