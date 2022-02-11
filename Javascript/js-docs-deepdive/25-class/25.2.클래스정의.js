// ✅ 25.2 클래스 정의

// 클래스 선언
class Person1 {}
// 익명 클래스, 표현식
const Person2 = class {};
// 기명 클래스 ,표현식
const Person3 = class Person33 {};

// ✅ 클래스는 일급객체이다.
// 1. 런타임에 생성 가능, 무명의 리터럴로 생성할 수 있다.
// 2. 변수나, 자료구조에 저장 가능
// 3. 함수의 매개변수 전달 가능
// 4. 함수의 반환값으로 생성 가능

// ✅ 25.1 생성자 함수 방식 -> 클래스 방식
class Person4 {
  // 1. 생성자
  constructor(name) {
    this.name = name;
  }
  // 2. 매서드
  sayHi() {
    console.log(`Hi my Name is ${this.name}`);
  }
  static getInfo() {
    console.log("Person static method~");
  }
}
var p1 = new Person4("dodo");
var p2 = new Person4("nana");
p1.sayHi();
p2.sayHi();
Person4.getInfo();

// 25.3 클래스 호이스팅
// ✅ 클래스는 호이스팅이 발생된다.
// 하지만 let,const 처럼 TDZ이 있기때문에 초기화전에 접근이 불가능 하다.
