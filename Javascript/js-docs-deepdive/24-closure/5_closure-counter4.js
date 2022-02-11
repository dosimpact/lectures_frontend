// 함수형 프로그래밍
// 은닉화된 변수를 다룰 수 있는 함수를 받아서 내어줌
// makerCounter마다 별개의 클로져를 만든다. ---> 수정
// counter가 변수를 공유하도록

const counter = (() => {
  let counter = 2;
  return (predicate) => {
    counter = predicate(counter);
    return counter;
  };
})(); // IIFE

const double = (n) => n * n;
const ddouble = (n) => n * n * n;

console.log(counter(double));
console.log(counter(double));
console.log(counter(ddouble));
console.log(counter(ddouble));
// 4
// 16
// 4096
// 68719476736
