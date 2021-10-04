// ✅ case4 클래스안에서 화살표함수를 매서드로 쓸 때 문제점
// https://simsimjae.tistory.com/452

class Parent {
  constructor() {}
  getName = () => {
    console.log("parent : ", this.name);
  };
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    console.log("Child : ", this.name);
  }
}
class Child2 extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getName = () => {
    // super.getName(); // ❌  TypeError: (intermediate value).getName is not a function
    console.log("Child2 : ", this.name);
  };
}
new Child("dodo").getName();
// parent :  dodo
new Child2("dodo2").getName();
// TypeError: (intermediate value).getName is not a function

// ✅ 문제점1 : 부모가 자식 함수를 오버리이딩 한다.
// - 부모:화살표 , 자식:일반함수

// ✅ 문제점2 : 성능 문제
// 화살표 함수는, 생성자함수로 들어가서 초기화 된다.
// 따라서 100개 인스턴스를 생성하면 함수를 공유하는 것이 아닌, 각자의 함수를 가지게 된다.

class PBabelBefore {
  getName = () => {
    console.log("my name is dodo");
  };
}
class PBabelAfter {
  constructor() {
    // 2. 여기서의 this는 Child의 instance를 가리킵니다.
    this.getName = () => {
      console.log("my name is 심재철");
    };
  }
}

// ✅ 문제점3: 상속문제
// 화살표 함수는 자식에게 건내주지 못한다.
class A {
  handleClick = () => {
    console.log("A.handleClick");
  };

  handleLongClick() {
    console.log("A.handleLongClick");
  }
}

console.log(A.prototype);
// {constructor: ƒ, handleLongClick: ƒ}

new A().handleClick();
// A.handleClick

new A().handleLongClick();
// A.handleLongClick
class B extends A {
  handleClick = () => {
    super.handleClick();
    console.log("B.handleClick");
  };

  handleLongClick() {
    super.handleLongClick();
    console.log("B.handleLongClick");
  }
}

console.log(B.prototype);
// A {constructor: ƒ, handleLongClick: ƒ}
console.log(B.prototype.__proto__);
// {constructor: ƒ, handleLongClick: ƒ}
// new B().handleClick(); ❌
// Uncaught TypeError: (intermediate value).handleClick is not a function
new B().handleLongClick();
// A.handleLongClick
// B.handleLongClick
