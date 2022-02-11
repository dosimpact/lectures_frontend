import {nullable} from './nullable'
import {IValuable} from './IValuable'
import {IFunctor} from './IFunctor'

export class None implements IValuable<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable) {
    return defaultValue
  }
  map<U>(fn: (T) =>  U) {
    return new None
  }
}