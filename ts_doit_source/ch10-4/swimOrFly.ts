import {Bird, Fish} from './BirdAndFish'
import {isFlyable} from './isFlyable'
import {isSwimmable} from './isSwimmable'

export const swimOrFly = (o: Fish | Bird) => {
  if(isSwimmable(o))
    o.swim()
  else if(isFlyable(o))
    o.fly()
}