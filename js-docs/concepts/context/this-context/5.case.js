//✅ 화살표 함수( Arrow Function )에서의 this 바인딩
// 1. 화살표 함수는 항상 상위 스코프의 this를 상속받습니다.
// 2. 화살표 함수는 bind(), call()과 같은 메서드로 this를 바인딩 할 수 없습니다.

// ✅ case1. 화살표 함수의 정적 this 바인딩, 달라지는 외부 this 환경
function foo() {
  // 화살표 함수 return
  return (a) => {
    // 여기서 'this'는 어휘적으로 상위 스코프인 'foo()'에서 상속됩니다.
    console.log(this.a);
  };
}
let obj1 = {
  a: 2,
};
let obj2 = {
  a: 3,
};
// this의 결정
foo.call(obj1)(); // 2
foo.call(obj2)(); // 3

// 정적 바인딩 실패
let bar = foo.call(obj1);
bar.call(obj2); // 2

// ✅ case1.2 setTimeout 함수와 화살표 함수 - 1
// - 화살표함수는 this바인딩 객체가 정적으로 결정된다.
function foo2() {
  setTimeout(() => {
    // 여기서 'this'는 어휘적으로 'foo2()'에서 상속됩니다.
    console.log(this.a);
  }, 100);
}

let obj = {
  a: 20,
};
foo2.call(obj); // 20
foo2.call({ a: 30 }); // 30

// ✅ case1.3  setTimeout 함수와 화살표 함수 - 2
// window.setTimeout의 this는 window이지만,
// 화살표함수의 this는 상위 스코프의 this다
function foo3() {
  return {
    first: "hyojin",
    last: "lee",
    asyncFn: function () {
      console.log(this); // {first: "hyojin", last: "lee", setTimeFunc: ƒ}
      setTimeout(() => {
        console.log(this.first);
      }, 100);
    },
  };
}
let bar3 = foo3();
bar3.asyncFn(); // hyojin
