// 동일한 클로저는 주도록 한다.
const counter = (function () {
  let num = 0;
  return {
    increase: function () {
      num += 1;
      return num;
    },
    decrease: function () {
      num -= 1;
      return num;
    },
  };
})();

console.log(counter.increase(), " ", counter.increase());
console.log(counter.increase(), " ", counter.increase());
console.log(counter.decrease()); // 3
console.log(counter.increase());
console.log(counter.decrease()); // 3
