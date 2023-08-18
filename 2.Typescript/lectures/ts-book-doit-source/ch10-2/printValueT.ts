import {IValuable} from './IValuable'

export const printValueT = <Q, T extends IValuable<Q> >(o: T) => console.log(o.value)
export {IValuable}