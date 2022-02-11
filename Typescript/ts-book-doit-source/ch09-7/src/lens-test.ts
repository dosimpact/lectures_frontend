import * as R from 'ramda'
import {makeLens, getter, setter, setterUsingFunc} from './lens'
import {IPerson, makeRandomIPerson} from './model/person'

const nameLens = makeLens('name')
const getName = getter(nameLens)
const setName = setter(nameLens)
const setNameUsingFunc = setterUsingFunc(nameLens)

const person: IPerson = makeRandomIPerson()

const name = getName(person)
const newPerson = setName('Albert Einstein')(person)
const anotherPerson = setNameUsingFunc(name => `'Mr. ${name}'`)(person)
const capitalPerson = setNameUsingFunc(R.toUpper)(person)

console.log(
  name, getName(newPerson), getName(anotherPerson), getName(capitalPerson)
  // Micheal Chandler Albert Einstein 'Mr. Micheal Chandler' MICHEAL CHANDLER
)