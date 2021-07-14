import {IPerson, makeIPerson} from './makeIPerson'
import {makeRandomILocation} from '../location'
import Chance from 'chance'
import {range} from 'ramda'

const c = new Chance

export const makeRandomIPerson = (): IPerson => 
  makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation())