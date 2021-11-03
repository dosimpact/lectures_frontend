//✅ this는 프로토타입 체인까지도 뒤진다.

// this.객체프로퍼티
// 1순위, this바인드된 본인 객체에서 찾는다.
// 1.2 순위 this바인드된 본인 객체의 프로토 타입 체인에서 찾는다.
// 2순위 상위 스코프체인에서 찾는다  ❌

function Car(a) {
  this.a = "Car overide-a";
  // 프로토타입에서도 a라는 변수를 제공해주지만, 인스턴스의 프로퍼티 a도 있고, 이를 먼저 참조한다.
}
Car.prototype.a = "9999-a";
Car.prototype.b = "9999-b";
Car.prototype.c = "9999-c";

function Truck() {
  this.b = "Truck overide-b";
  // b프로퍼티를 인스턴스에서 가지게 된다.
}
Truck.prototype = new Car(); // extends
Truck.prototype.c = "Truck  prototype override-c";
// Truck 프로토타입 객체에서 c 프로퍼티를 가진다.

// TEST - 1
const car1 = new Car();
console.log(car1.a); // Car overide-a
// ✅ 생성시 override -
console.log(car1.b); // 9999-b
console.log(car1.c); // 9999-c

console.dir(car1); // Car { a: 'Car overide-a' }
console.dir(car1.__proto__); // { a: '9999-a', b: '9999-b', c: '9999-c' }
// ✅ Car객체가 생성될때 동시에 만들어진 인스턴스와, 프로토타입객체를 보면 원래의 a는 잘 살아 있다.

const truck1 = new Truck();
console.log(truck1.a); // Car overide-a
// ✅ 프로토타입 Car객체 생성시 만들어진 a프로퍼티이네
console.log(truck1.b); // Truck overide-b
// ✅ 트럭 생성자 함수에서 만들어진 프로퍼티 b이네
console.log(truck1.c); // Truck  prototype override-c
// ✅ 프로토타입 Car객체 생성시, 재할당된 c프로퍼티 이네

console.dir(truck1); // Car { b: 'Truck overide-b' }
console.dir(truck1.__proto__); // Car { a: 'Car overide-a', c: 'Truck  prototype override-c' }
console.dir(truck1.__proto__.__proto__); // { a: '9999-a', b: '9999-b', c: '9999-c' }
