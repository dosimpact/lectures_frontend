// "use strict";

// x 변수는 foo 스코프에 없으면 referenceError가 나와야 하는데
// 전역에다 변수를 싸질러 놓는다. (암묵적 전역)
// 이를 막기위해 use strict 모드를 활성화 or EsLint 사용
function foo() {
  x = 10;
}
foo();
console.log(x);
// 10
// ReferenceError: x is not defined
