// 생성자 , public, private
function Person(name, age) {
  this.name = name; //public
  let _age = age; // private

  this.sayHi = function () {
    console.log(`name : ${this.name}  age : ${_age}`);
  };
}
const me = new Person("p1", 20);
me.sayHi();
console.log(me.name);
console.log(me._age); // undefined

const you = new Person("p2", 21);
you.sayHi();
console.log(you.name);
console.log(you._age); // undefined
