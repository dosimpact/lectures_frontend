// 암묵적 전역
// - 변수 호이스팅 대상 아니다.
// - 전역 객체에 등록이 된다.
// - delete 가능
// ⚠️ 특이 : 전역변수 - 현재 node 에서는 global객체에 안담긴다.  

console.log(x); // undefined
// console.log(y); // ReferenceError: y is not defined

var x = 1;
function foo() {
  y = 10; // 암묵적 전역 -> 호이스팅 x
}
foo();
console.log(x); // 1
console.log(globalThis.x); // 웹에선 전역 등록 1 | node에선  undefined
// 암묵적 전역 -> 전역객체 등록 ()
console.log(y); // 10
console.log(globalThis.y); //10
delete x
delete y
// 변수는 delete 불가
console.log(x); // 1
// console.log(y); // ReferenceError: y is not defined
console.log(globalThis.y); // undefined

