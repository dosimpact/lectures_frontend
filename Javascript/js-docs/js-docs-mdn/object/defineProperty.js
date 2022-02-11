// 1. defineProperty
// 객체에 새로운 속성을 정의, 변경
const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});
try {
  object1.property1 = 77;
  // throws an error in strict mode
} catch (error) {}

console.log(object1.property1);
// expected output: 42
