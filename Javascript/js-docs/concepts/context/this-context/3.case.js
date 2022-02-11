// ✅ 생성자 함수를 호출할 때 this 바인딩

// ✅ 생성자 함수 동작 과정
// 1. 빈객체생성(및 프로토타입체인 설정) 및 this바인딩
// 2. this를 통한 프로퍼티 생성
// 3. 생성된 객체 리턴

function Person(name, age = 20) {
  this.name = name;
  this.age = age;
  return "hacked"; // new 는 이를 리턴하지 않는다.
}

const p1 = new Person("dodo");
console.log(p1);

// ✅ new를 붙이지 않고 생성자 함수를 호출하면 ?
// - this바인딩 방식이 다르다. (this는 윈도우, 리턴되는 객체가 없다.)
// Person { name: 'dodo', age: 20 }
const p2 = Person("nana");
console.log(p2); // hacked
console.log(name, age); // name,age
