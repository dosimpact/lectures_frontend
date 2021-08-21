// private static 변수처럼 사용
// 동일한 자유변수 num을 공유 한다.
const Counter = (function () {
  let num = 0;
  function Counter() {}
  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return --num;
  };
  return Counter;
})();

const c1 = new Counter();
const c2 = new Counter();
console.log(c1.increase(), c1.increase(), c1.increase());
console.log(c2.increase(), c2.increase(), c2.increase());
const c3 = new Counter();
console.log(c3.decrease(), c3.decrease(), c3.decrease());
// 1 2 3
// 4 5 6
// 5 4 3
