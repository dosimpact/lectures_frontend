/**
 * strict mode 가 발생하시키는 애러
 */

// 1. implicit-global

// (function foo() {
//   "use strict";
//   x = 1;
//   console.log(x); //ReferenceError: x is not defined
// })()

// 2. 변수,함수,매개변수에 delete';

// (function foo(x) {
//   "use strict";
//   delete x   // SyntaxError: Delete of an unqualified identifier in strict mode.
//   var y = 10
//   delete y   // SyntaxError: Delete of an unqualified identifier in strict mode.//
//   function bar(){}
//   delete bar // SyntaxError: Delete of an unqualified identifier in strict mode.
//   console.log(x);
// })();

// 3. 중복 매개변수

// (function (x, x) {
//   "use strict";
//   console.log(x); // 20
//   // SyntaxError: Duplicate parameter name not allowed in this context
// })();

// 4. with 의 사용
// (function () {
//   "use strict";
//   with ({ x: 10 }) {
//     // SyntaxError: Strict mode code may not include a with statement
//     console.log(x); // 10
//   }
// })();
