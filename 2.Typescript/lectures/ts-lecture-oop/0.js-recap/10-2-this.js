// ✔ this는 호출되는 맥락에 따라서 다르다.

// 1. 글로벌에서는 this - window 객체
console.log(this);

function simpleFunc() {
  console.log(this);
}
// - 글로벌에서 함수 호출은 window가 생략되어 있음!
// - this는 window을 예상
simpleFunc();
window.simpleFunc();

console.clear();
// 2. thid 가 바뀌는 경우
class Counter {
  count = 0;
  // function의 this는 변할 여지가 충분히 많다.
  decrease = function () {
    console.log("decrease function", this);
  };
  // ()=>는 생성당시의 this을 bind 한다.
  increase = () => {
    console.log("increase arrow", this);
  };
}
// 2.1 - function 변수를 밖으로 뺌
// - Counter 클래스의 인스턴스 매소드의 this는 예상대로 Counter 자체이다.
const counter = new Counter();
counter.decrease();
// - 만약에 counter 인스턴스에서 increase 만 따로 분리한다면?
// - counter.decrease 포인터 변수를 할당하여 this정보 잃어버림
// this -> undefined
const caller = counter.decrease;
caller();

class Bob {}
const bob = new Bob();
// 2.2 a 객체의 함수를 b객체에 넣을때
// - this는 Bob으로 교체
bob.run = counter.decrease;
bob.run();

// 2.3 Counter this을 묶어서 전달하려면 bind 이용
// -  this -> Counter
const bindedcaller = counter.decrease.bind(counter);
bindedcaller();

// 2.4 arrow funtion은 this bind가 되어서 나옴
const autoBindedcaller = counter.increase;
autoBindedcaller();

bob.run = counter.increase;
bob.run();

// cf) var의 문제
// 1) 중복 재선언 가능
// let과 const는 중복선언시 애러

// 2) 호이스팅 -
// let과 const는

// 3) 스코프 문제 - 함수 스코프이다.
// let과 const는 - 블록 스코프 이다.

// 4) window객체 등록 된다.
// - let과 const는 window.변수명 해도 없다.
// - fucntion또한 window에 등록된다.
