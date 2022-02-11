//✅ call과 apply, bind 메서드를 이용한 명시적인 this 바인딩

// - 명시적으로 바인딩 하자
// ✅ case1. apply
// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// foo라는 빈 객체 생성
let foo = {};

// Person 생성자 함수를 apply를 통해 호출
Person.apply(foo, ["foo", 25]);
// { name: 'foo', age: 25 }
console.dir(foo);

// ✅ case1-1. apply 활용
//  - 유사 배열을 Array.함수에 적용하기
function func() {
  // [Arguments] { '0': 1, '1': 2, '2': 3 } - 이게 유사 배열?!(iterator가 있다.)
  console.dir(arguments);
  // arguments 객체를 배열로 변환
  let args = Array.prototype.slice.apply(arguments, [1, 3]);
  console.dir(args);
}

func(1, 2, 3);

// ✅ case2. call
function say(greetings, ask) {
  console.log(greetings + " " + this.name + " " + ask);
}

let foo2 = { name: "hyojin" };

say.apply(foo2, ["Hello!", "What are you doing?"]); // Hello! hyojin What are you doing?
say.call(foo2, "Hi!", "How old are you?"); // Hi! hyojin How old are you?

// ✅ case3. bind
function say(greetings, ask) {
  console.log(greetings + " " + this.name + " " + ask);
}

let foo3 = { name: "hyojin" };
let bar3 = say.bind(foo);

bar3("Hello!", "Nice to meet you"); // Hello! hyojin Nice to meet you

// ✅ case3.1 bind + setTimeout
// - setTimeout 의 콜백함수는 this 문맥을 받지 않는다.
function hello() {
  console.log(this.name);
}
let obj = {
  name: "hyojin",
  hello: hello,
};
obj.hello(); // hyojin
setTimeout(obj.hello, 100); // 'global context'
setTimeout(obj.hello.bind(obj), 100); //hyojin
name = "global context";
