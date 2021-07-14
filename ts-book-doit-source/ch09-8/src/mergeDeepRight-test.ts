import * as R from 'ramda'
import {IPerson, makeRandomIPerson} from './model/person'
import {ILocation, makeRandomILocation} from './model/location'
import {ICoordinates, makeRandomICoordinates} from './model/coordinates'

const person: IPerson = makeRandomIPerson()
const location: ILocation = makeRandomILocation()
const coordinates: ICoordinates = makeRandomICoordinates()

const newLocation = R.mergeDeepRight(location, {coordinates})
const newPerson = R.mergeDeepRight(person, {location: newLocation})

console.log('person:', person) /* person: {
  name: 'Olive Barrett',
  age: 23,
  title: 'Superintendent',
  location: {
    country: 'CG',
    city: 'Jekinvup',
    address: '596 Jojoh Circle',
    coordinates: { latitude: 28.39547, longitude: -71.19589 }
  }
} */
console.log('newPerson:', newPerson) /*
newPerson: {
  name: 'Olive Barrett',
  age: 23,
  title: 'Superintendent',
  location: {
    country: 'TR',
    city: 'Ubsogri',
    address: '1149 Bejo Glen',
    coordinates: { latitude: -43.47301, longitude: -7.63088 }
  }
} */