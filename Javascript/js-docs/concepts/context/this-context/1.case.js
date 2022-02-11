// ✅ 객체의 매서드를 호출할때

// ✅ 용어 확인
// 메서드 : 객체안에 프로퍼티로 함수가 되어 있는 경우
// 함수 : 전역에 선언된 함수

// ✅ 규칙 1. this는 동적으로 바인딩된다.
// - 호출 시점에 누가 호출했는가를 봐라.
// - 특히 내부함수를 주의해서 봐라

// ✅ case1. 객체의 매서드를 호출할때, 타 객체의 메서드를 가져와 호출할때
// - obj1,obj2 는 같은함수참조(sayName)
// - 그 같은 함수의 this는 각각 obj1, obj2에 바인딩

const obj1 = {
  name: "pp-1", // 프로퍼티:값
  sayName: function () {
    console.log("Name : ", this.name);
  }, // 프로퍼티:함수
};
const obj2 = { name: "pp-2" };
obj2.sayName = obj1.sayName; // 같은 함수 참조
obj1.sayName(); // Name :  pp-1
obj2.sayName(); // Name :  pp-2

// ✅ case2. 객체에 함수를 붙이고 때기
// - 객체에서 외부함수를 가져와서 호출, 외부함수.call
// - 객체에서 메서드를 때서 호출하는 경우

const person3 = {
  name: "pp-3",
  sayBye: function () {
    console.log(`[${this.name}] bye`);
  },
};
function sayHi() {
  console.log(`[${this.name}] hi`);
}
// ✅ -- 외부함수 > 메서드로
// - (window).sayHi 이고, this에는 name 속성이 없다
sayHi(); // [undefined] hi
person3.sayHi = sayHi;
// - (person3).sayHi , this는 person3 이다.
person3.sayHi(); //  [pp-3] hi
// - call을 이용해서 , this는 person3을 바인딩 시킨다.
sayHi.call(person3); //[pp-3] hi

// ✅ -- 매서드 > 외부함수로
// - this = person3
person3.sayBye(); // [pp-3] bye
// - this = window
let sayBye = person3.sayBye;
sayBye(); // [undefined] bye

// ✅ case3. 객체 메서드에서 내부 함수가 호출되는 경우

const person4 = {
  name: "pp-4",
  sayGreeting: function () {
    function saySuperGreeting() {
      console.log(`[${this.name}] SuperGreeting~`);
    }
    // this - window (내부함수임을 주의!)
    saySuperGreeting();
  },
};
// this - person4
person4.sayGreeting(); // [undefined] SuperGreeting~

// ✅ case3.1 객체 메서드에 함수가 호출되는 경우
// - call로 this 바인드

const person5 = {
  name: "pp-5",
  sayGreeting: function () {
    function saySuperGreeting() {
      console.log(`[${this.name}] SuperGreeting~`);
    }
    // this <- person5 (내부함수임을 주의!)
    saySuperGreeting.call(this);
  },
};
// this <- person5
person5.sayGreeting(); // [pp-5] SuperGreeting~
