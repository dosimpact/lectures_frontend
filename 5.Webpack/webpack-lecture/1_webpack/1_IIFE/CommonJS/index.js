// 1. 전역객체 exports 는 여러 속성과 메소들르 정의할 수 있음
const math = require("./math");
console.log(math.adder(1, 2));
console.log(math.adderRef(1, 3));

// 2. module.exports는 하나만 정의할 수 있다. 파일자체를 클래스,메소드로 사용하는 방식
const utils = require("./Utils");
utils.util01();

var VRouter = {};

// ✅ CommonJS VS ES6 모듈 export

// ES6 모듈 export
// export default VRouter;
// export const message = "hi";

// CommonJS 모듈 export
module.exports = {
  default: VRouter,
  message: "hi",
};

// ✅ exports을 가져오려면?  CommonJS VS ES6 모듈 import
// exports 객체 = require("./index")
// exports 객체 <- import * as exports from "./index"
