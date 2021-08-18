// 1. 전역객체 exports 는 여러 속성과 메소들르 정의할 수 있음
const math = require("./math");
console.log(math.adder(1, 2));

// 2. module.exports는 하나만 정의할 수 있다. 파일자체를 클래스,메소드로 사용하는 방식
const utils = require("./Utils");
utils.util01();

// ES6 모듈 export
export default VRouter;
export const message = "hi";

// CommonJS 모듈 export
module.exports = {
  default: VRouter,
  message: "hi",
};
