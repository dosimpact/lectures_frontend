const x = {};
const y = {};
// 1. 빈 오브젝트 처럼 보이지만 Prototype:Object 가 들어 있음
console.log(x);
console.log(y);
// - toString 과 같은 함수는 프로토에서 나온 것
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
// 2. Array 또한 __proto__:Array을 받고, 이는 __proto__:Object를 소유
console.log(array);

// console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // 3. Instance member level
  // - 각 객체마다 공통부분인 makeCoffee을 가지고 있음
  // this.makeCoffee = (shots) => {
  //   console.log("making... ☕️");
  // };
}
// 4. Prototype member level
// - prototype 으로 넣어주면 공통 속성이 된다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making... ☕️");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
// - Object 프로토에는 {  makeCoffee와 , 기존 Object 프로토가 있음 }
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
// 5.  프로토타입 상속 : Object.create 을 이용
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
