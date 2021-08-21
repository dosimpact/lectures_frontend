// 매서드 this bind

// eg) this는 호출한 객체이다.
var anotherPeron = { name: "another" };
var person = {
  name: "dodo",
  getName() {
    return this.name;
  },
};

console.log(person.getName()); //dodo
anotherPeron.getName = person.getName;
console.log(anotherPeron.getName()); // another

// eg)
// 생성자 함수의 this는 생성될 인스턴를 가르킬 예정
function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}
const st1 = new Person("st1");
console.log(st1.getName()); // st1

// eg) 프로토 타입 또한 this바인딩이 될 수 있다.
Person.prototype.name = "protoPerson";
Person.prototype.getName = function () {
  return this.name;
};
console.log(Person.prototype.getName()); // protoPerson
