import {ICoordinates} from './ICoordinates'
import {makeICoordinates} from './makeICoordinates'
import Chance from 'chance'
const c = new Chance

export const makeRandomICoordinates = (): ICoordinates => 
  makeICoordinates(c.latitude(), c.longitude())