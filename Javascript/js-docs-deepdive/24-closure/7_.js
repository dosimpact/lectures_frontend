// 생성자 , public, private , 프로토 타입 메서드
const Person = (function (name, age) {
  let _age = age; // private
  function Person(name, age) {
    this.name = name; //public
    _age = age; // private
  }
  Person.prototype.sayHi = function () {
    console.log(`name : ${this.name}  age : ${_age}`);
  };
  return Person;
})();
// 문제 : private 변수를 참조할 수 없음
// Person.prototype.sayHi = function () {
//   console.log(`name : ${this.name}  age : ${_age}`);
// };

const me = new Person("p1", 20);
me.sayHi();
console.log(me.name);
console.log(me._age); // undefined

const you = new Person("p2", 21);
you.sayHi();
console.log(you.name);
console.log(you._age); // undefined
