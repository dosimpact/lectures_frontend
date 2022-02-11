import {Option} from './Option'
import {IValuable} from './IValuable'
import {IFunctor} from './IFunctor'

export const parseJson = <T>(json: string): IValuable<T> & IFunctor<T> => {
  try {
    const value = JSON.parse(json)
    return Option.Some<T>(value)
  } catch(e) {
    return Option.None
  }
}