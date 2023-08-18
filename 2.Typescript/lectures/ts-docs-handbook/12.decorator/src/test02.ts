function sealed(constructor: Function) {
  console.log("@sealed evaluated");
  Object.seal(constructor); // 생성자 감쌈
  Object.seal(constructor.prototype); // 프로토타입 감쌈
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
    console.log("constructor() called");
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

new Greeter("dodo");
