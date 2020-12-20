import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'
import {displayPersons} from './displayPersons'

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson)
const nameSortedPersons = R.sortBy(R.prop('name'))(persons)
const ageSortedPersons = R.sortBy(R.prop('age'))(persons)

displayPersons('sorted by name: ')(nameSortedPersons) /* sorted by name:  [
  { name: 'Adrian Elliott', age: 55 },
  { name: 'Alta Reynolds', age: 61 },
  { name: 'Curtis Rhodes', age: 43 },
  { name: 'Jerome Ortiz', age: 57 }
] */
displayPersons('sorted by age: ')(ageSortedPersons) /* sorted by age:  [
  { name: 'Curtis Rhodes', age: 43 },
  { name: 'Adrian Elliott', age: 55 },
  { name: 'Jerome Ortiz', age: 57 },
  { name: 'Alta Reynolds', age: 61 }
] */

