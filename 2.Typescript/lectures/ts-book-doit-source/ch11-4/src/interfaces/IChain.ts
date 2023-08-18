import {IApply} from './IApply'

export interface IChain<T> extends IApply<T> {
  //chain<U>(fn: (T) => U): U
  chain<U>(fn: (T) => U)
}
