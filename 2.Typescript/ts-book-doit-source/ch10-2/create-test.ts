import {create} from './create'

class Point { constructor(public x: number, public y: number) {} }
[
  create(Date), // 2019-11-22T03:59:57.920Z
  create(Point, 0, 0) // Point { x: 0, y: 0 }
].forEach(s => console.log(s))