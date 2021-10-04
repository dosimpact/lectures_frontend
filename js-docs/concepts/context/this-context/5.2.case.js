// ✅ case2.1 매서드로 화살표함수를 쓰는 경우
// - 화살표 함수를 메서드로 사용하면 안된다.
// + new키워드와 같이 사용할 수 없음
// + prototype 속성이 없음
// + yield 키워드를 사용 할 수 없음

const foo4 = {
  name: "foo4",
  sayName: () => {
    console.log(`my name is ${this.name}`, this);
  },
};
foo4.sayName();
// my name is undefined {}

class Component {}
