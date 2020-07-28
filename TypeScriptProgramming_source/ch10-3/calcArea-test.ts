import {calcArea} from './calcArea'
import {IRectangle, ICircle, ISquare} from './IShape'

const square: ISquare = {tag: 'square', size: 10 }
const rectangle: IRectangle = {tag: 'rectangle', width: 4, height: 5}
const circle: ICircle = { tag: 'circle', radius: 10 }

console.log( 
  calcArea(square), calcArea(rectangle), calcArea(circle) // 100 20 314.1592653589793
) 
