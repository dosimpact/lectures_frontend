// 함수형 프로그래밍
// 은닉화된 변수를 다룰 수 있는 함수를 받아서 내어줌
// makerCounter마다 별개의 클로져를 만든다.

function makeCounter(predicate) {
  let counter = 2;
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

const double = (n) => n * n;
const ddouble = (n) => n * n * n;
// 별개의 카운터가 생긴다.
const doubler = makeCounter(double);
console.log(doubler());
console.log(doubler());
// 별개의 카운터가 생긴다.
const ddoubler = makeCounter(ddouble);
console.log(ddoubler());
console.log(ddoubler());
