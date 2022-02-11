function person(_name, _age) {
  this.name = _name;
  this.age = _age;
}
/* Peson객체 메소드 추가 */
person.prototype.changeName = function (newName) {
  this.name = newName;
};
// 1
const p = new person("Youngjin", "22");
console.log(p.name); // Youngjin 이 출력
// 2
p.changeName("Requiem");
console.log(p.name); // Requiem 이 출력
//************************************
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  changeName(newName) {
    this.name = newName;
  }
}
const p = new Person("Youngjin", "22");
console.log(p.name); // Youngjin 이 출력
p.changeName("Requiem");
console.log(p.name); // Requiem 이 출력
