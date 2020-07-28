import {makeRandomILocation, ILocation} from './model/location'

const location: ILocation = makeRandomILocation()
console.log(location) /* {
  country: 'CC',
  city: 'Waslivuc',
  address: '1971 Avrad Junction',
  coordinates: { latitude: 84.78191, longitude: 95.01291 }
} */