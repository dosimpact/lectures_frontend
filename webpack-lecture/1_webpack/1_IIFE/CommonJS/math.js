function adder(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// ✅ module.exports vs exports
// var module = {exports:{}}
// var exports = module.exports
// -- exports와 module.exports는 같은 객체를 가리킨다.

// ✅ exports 사용
exports.adder = adder;
exports.sub = sub;

// ✅ module.exports 사용
// 결국 리턴되는것은 module.exports 이다.
// -- const math = exports 객체 = require("./math");
module.exports.adderRef = adder;
