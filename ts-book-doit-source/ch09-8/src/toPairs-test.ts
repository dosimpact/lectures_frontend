import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'

const person: IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)
console.log('pairs', pairs)
/* pairs [
  [ 'name', 'Jeff Bridges' ],
  [ 'age', 57 ],
  [ 'title', 'Flight Engineer' ],
  [
    'location',
    {
      country: 'LY',
      city: 'Guvmevu',
      address: '701 Veuha Plaza',
      coordinates: [Object]
    }
  ]
] */