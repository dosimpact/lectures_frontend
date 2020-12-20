import * as R from 'ramda'
import {Nothing, Just} from '../classes/Maybe'

console.log( 
  Nothing.of().isJust(),                       // false
  Nothing.of().isNothing(),                    // true
  Nothing.of().getOrElse(1),                   // 1
  Nothing.of().map(x => x + 1).getOrElse(1),   // 1
  Nothing.of().ap(1).getOrElse(1),             // 1
  Nothing.of().chain(Just.of).getOrElse(1),    // 1 
)