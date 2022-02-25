import * as math from "./math.js"; // 1.import *  --- export, export default,
import { sub } from "./math.js"; // 2. import { } --- export
import basicUtils from "./math.js"; // 3. import var --- export default
import mathing, { sum } from "./math.js"; // 4. import var,{} --- export, export default,
//1.
console.log("math", math.default.sum(100, 200));
console.log("math", math.dobule(200));
//2.
console.log("sub", sub(10, 3));
//3.
console.log("basicUtils", basicUtils.sum(10, 20));
//4.
console.log("mathing", mathing.sub(100, 20), sum(100, 20));
