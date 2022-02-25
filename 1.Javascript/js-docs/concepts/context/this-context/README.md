# this가 바인딩 되는 5가지 규칙

## 1. 객체의 매서드를 호출할때

// ✅ case1. 객체의 매서드를 호출할때, 타 객체의 메서드를 가져와 호출할때
// ✅ case2. 객체에 함수를 붙이고 때기
// ✅ case3. 객체 메서드에서 내부 함수가 호출되는 경우

## 2. 함수를 호출할 때의 this 바인딩

// ✅ case1.객체 매서드의, 내부 함수호출은 일반함수 호출이므로, window 객체가 바인딩 된다.
// ✅ case2. 내부함수 호출을 this(바인딩) 대신 that(스코프)으로 해결

## 3. 생성자 함수를 호출할 때 this 바인딩

## 4. call과 apply, bind 메서드를 이용한 명시적인 this 바인딩

// ✅ case1. apply
// ✅ case1-1. apply 활용
// ✅ case2. call
// ✅ case3. bind
// ✅ case3.1 bind + setTimeout

## 5. 화살표 함수( Arrow Function )에서의 this 바인딩

// ✅ case1. 화살표 함수의 정적 this 바인딩, 달라지는 외부 this 환경
// ✅ case1.2 setTimeout 함수와 화살표 함수
// ✅ case1.3 setTimeout 함수와 화살표 함수 - 2

// ✅ case2 매서드로 화살표함수를 쓰는 경우
// ✅ case3 클래스안에서 일반함수+bind vs 화살표함수
// ✅ case4 클래스안에서 화살표함수를 매서드로 쓸 때 문제점1,2,3

## ref

https://hyojin96.tistory.com/entry/객체의-메서드를-호출할-때-this?category=846712

## 6. 생성자 함수 vs class

https://uiyoji-journal.tistory.com/101
https://bluayer.com/25
https://simsimjae.tistory.com/452
https://hoilzz.github.io/javascript/arrow-functions-in-class-properties/

## 질의 응답

- case1

```js
const obj1 = {
  name: "dodo",
  sayName: function () {
    console.log(`my name : ${this.name}`);
  },
};
const obj2 = {
  name: "nana",
};

console.log(obj1.sayName());
obj2.sayName = obj1.sayName;
console.log(obj2.sayName());
```

- ANS

```
my name : dodo
my name : nana
```

- case2

```js
const obj1 = {
  name: "dodo",
  sayName: function () {
    console.log(`my name : ${this.name}`);
  },
};
const obj2 = {
  name: "nana",
};
function speak() {
  console.log(`[${this.name}] is speaking...`);
}

obj1.speak = speak;
obj1.speak();
speak.call(obj2);
```

- ANS

```
[dodo] is speaking...
[nana] is speaking...
```

- case3

```js
const obj1 = {
  name: "dodo",
  age: 12,
  sayName: function () {
    function sayAge() {
      console.log(`my age : ${this.age}`);
    }
    console.log(`my name : ${this.name}`);
    sayAge();
  },
};

obj1.sayName();
```

- ANS

```
my name : dodo
my age : undefined
```

- case4

```js
const obj1 = {
  name: "dodo",
  age: 12,
  sayName: function () {
    function sayAge() {
      console.log(`my age : ${this.age}`);
    }
    console.log(`my name : ${this.name}`);
    sayAge.call(this);
  },
};

obj1.sayName();
```

- ANS

```
my name : dodo
my age : 12
```

- case5

```js
var value = 100;

var obj = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log(this.value);
    function func2() {
      this.value += 1;
      console.log(this.value);
      function func3() {
        this.value += 1;
        console.log(this.value);
      }
      func3();
    }
    func2();
  },
};
obj.func1();
```

- ANS

```
2
101
102
```

- case6

```js
var value = 100;
var obj = {
  value: 1,
  func1: function () {
    // 변수 that에 this 저장
    var that = this;
    this.value += 1;
    console.log(this.value); // 2 출력

    // func2 내부 함수
    function func2() {
      that.value += 1;
      console.log(that.value); // 3 출력

      // func3 내부 함수
      function func3() {
        that.value += 1;
        console.log(that.value); // 4 출력
      }
      func3();
    }
    func2();
  },
};

obj.func1();
```

- ANS

```
2
3
4
```

- case7

```js
function Person(name, age = 20) {
  this.name = name;
  this.age = age;
  return "hacked"; // new 는 이를 리턴하지 않는다.
}

const p1 = new Person("dodo");
console.log(p1);
```

- ANS

```
Person { name: 'dodo', age: 20 }
hacked
nana 20
```

- case8

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let foo = {};
Person.apply(foo, ["foo", 25]);
console.dir(foo);
```

- ANS

```
{ name: 'foo', age: 25 }
```

- case9

```js
function func() {
  console.dir(arguments);
  let args = Array.prototype.slice.apply(arguments, [1, 3]);
  console.dir(args);
}

func(1, 2, 3);
```

- ANS

```
[Arguments] { '0': 1, '1': 2, '2': 3 }
[ 2, 3 ]
```

- case10

```js
function say(greetings, ask) {
  console.log(greetings + " " + this.name + " " + ask);
}

let foo2 = { name: "hyojin" };

say.apply(foo2, ["Hello!", "What are you doing?"]);
say.call(foo2, "Hi!", "How old are you?");
```

- ANS

```
// Hello! hyojin What are you doing?
// Hi! hyojin How old are you?
```

- case11

```js
function say(greetings, ask) {
  console.log(greetings + " " + this.name + " " + ask);
}

let foo3 = { name: "hyojin" };
let bar3 = say.bind(foo);

bar3("Hello!", "Nice to meet you");
```

- ANS

```
Hello! foo Nice to meet you
```

- case12

```js
function hello() {
  console.log(this.name);
}
let obj = {
  name: "hyojin",
  hello: hello,
};
obj.hello();
setTimeout(obj.hello, 100);
setTimeout(obj.hello.bind(obj), 100);
name = "global context";
```

- ANS

```
hyojin
global context(undefined)
hyojin

```

- case13

```js
function foo() {
  return (a) => {
    console.log(this.a);
  };
}
let obj1 = {
  a: 2,
};
let obj2 = {
  a: 3,
};
foo.call(obj1)();
foo.call(obj2)();
let bar = foo.call(obj1);
bar.call(obj2);
```

- ANS

```
2
3
2
```

- case14

```js
function foo2() {
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}
let obj = {
  a: 20,
};
foo2.call(obj);
foo2.call({ a: 30 });
```

- ANS

```
20
30
```

```js
function foo3() {
  return {
    first: "hyojin",
    last: "lee",
    asyncFn: function () {
      console.log(this);
      setTimeout(() => {
        console.log(this.first);
      }, 100);
    },
  };
}
let bar3 = foo3();
bar3.asyncFn();
```

- ANS

```
{ first: 'hyojin', last: 'lee', asyncFn: [Function: asyncFn] }
hyojin
```
