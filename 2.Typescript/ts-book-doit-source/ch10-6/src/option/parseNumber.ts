import {Option} from './Option'
import {IValuable} from './IValuable'
import {IFunctor} from './IFunctor'

export const parseNumber = (n: string): IFunctor<number> & IValuable<number> => {
  const value = parseInt(n)
  return isNaN(value) ? Option.None : Option.Some(value)
}