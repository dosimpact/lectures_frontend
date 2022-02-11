/**
 * strict mode 적용에 의한 변화
 */

// 1. 일반함수의 this
//     - 생성자 아니면 this는 undefined

// (function () {
//   "use strict";
//   function foo() {
//     console.log(this); // undefined
//   }
//   foo();
//   function Bar() {
//     console.log(this); // Bar {}
//   }
//   new Bar();
// })();

// 2. arguments 객체
//     - 불변
(function () {
  //   "use strict";
  function foo(a) {
    a = 10;
    console.log(arguments);
    // [Arguments] { '0': 10 }
    // [Arguments] { '0': 2 }
  }
  foo(2);
})();
