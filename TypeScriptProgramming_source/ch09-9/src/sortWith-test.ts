import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'
import {displayPersons} from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortWith([
  R.descend(R.prop('name'))
])(persons)

displayPersons('sorted by name: ')(nameSortedPersons) /* sorted by name:  [
  { name: 'Sadie Webb', age: 23 },
  { name: 'Rosetta Davidson', age: 52 },
  { name: 'Maggie Diaz', age: 23 },
  { name: 'Anne Conner', age: 41 }
] */