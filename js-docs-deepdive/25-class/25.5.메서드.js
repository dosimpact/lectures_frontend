// ✅ 25.5 매서드
// 클래스에는 3가지, 생성자, 프로토타입 매서드, 정적 메서드 를 선언가능

// 클래스는 함수다.
class Person {
  constructor(name) {
    this.name = name;
  }
}
console.log(typeof Person); // 클래스는 함수다.
console.dir(Person);

// ✅클래스는 함수다.
// class Person
//  arguments: (...)
//  caller: (...)
//  length: 1
//  name: "Person"
//  prototype: {constructor: ƒ}
//  [[FunctionLocation]]: VM239:3
//  [[Prototype]]: ƒ ()
//  [[Scopes]]: Scopes[2]
