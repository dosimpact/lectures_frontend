import {IPerson, makeRandomIPerson} from './model/person'

const person: IPerson = makeRandomIPerson()
console.log(person) /* {
  name: 'Lettie Rodriquez',
  age: 29,
  title: 'Transportation Manager',
  location: {
    country: 'CR',
    city: 'Pozmoume',
    address: '1466 Nohnu View',
    coordinates: { latitude: 36.17419, longitude: 122.31801 }
  }
}
*/