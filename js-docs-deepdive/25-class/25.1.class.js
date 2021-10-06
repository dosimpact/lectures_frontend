//✅ 25.1 클래스는 단순히 프로토타입의 문법적 설탕인가?

// ✅ ES5 생성자함수를 통해 클래스 만들기
var Person = (function () {
  // 1.생성자 함수
  function Person(name) {
    this.name = name;
  }
  // 2.프로토 타입 메서드
  Person.prototype.sayHi = function () {
    console.log(`Hi my Name is ${this.name}`);
  };
  //3.정적 메서드
  Person.getInfo = function () {
    console.log("Person static method~");
  };
  // 4. 생성자 함수 반환
  return Person;
})();

var p1 = new Person("dodo");
var p2 = new Person("nana");
p1.sayHi();
p2.sayHi();
Person.getInfo();

// ✅ 클래스와 생성자 함수와 다른점
// 1. 클래스는 new없이 호출시 오류
// 2. 클래스에선 super, extends 키워드 사용 가능
// 3. 클래스는 호이스팅+TDZ, 생성자 함수,함수 표현식은 함수호이스팅,변수 호이스팅
// 4. class 내 모든 코드에 strcit mode 적용
// 5. 클래스의 생성자,메서드,정적메서드 모두 [[Enumerable]] 이 false, 열거되지 않는다.

// *새로운 객체 생성 매커니즘으로 봐야 한다.
