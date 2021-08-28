// ##  📌 this는 호출한 객체를 참조한다.

// 누가 나를 불렀는가?( 어떤객체가 나를 불렀는가? )
// 누가 = this

// 🟢 (1) this 가 window(global)

function squre(n) {
  console.log(this); // window(browser), global(node.js)
  return n * n;
}
squre(10);

// 🟢 (2) this 가 리터럴객체
const circle = {
  radius: 10,
  getDia: function () {
    return this.radius * 2;
  },
  getRaius: () => {
    // ⚠️ 왜 안될까 ㅜ
    return this.radius;
  },
};
// 객체 circle이 호출했으므로, this는 circle
console.log(circle.getDia()); // 20
// cf) ()=>은 this 바인드를 하지 않는다.
console.log(circle.getRaius()); // undefined

// 🟢 (3) this 가 인스턴스
function Person(name) {
  this.name = name;
  console.log(this);
}
new Person("dodo"); // Person { name: 'dodo' }

// 🟢 (4) (엄격모드) 일반함수에서 global 객체가 this되는건 의미가 없다.
// - undefined 가 나온다.

(function () {
  "use strict";
  (function foo() {
    console.log(this); // undefined
  })();
})();
