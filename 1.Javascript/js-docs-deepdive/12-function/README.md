
- [함수](#함수)
- [12.2 함수를 사용하는 이유](#122-함수를-사용하는-이유)
- [12.4 함수 정의](#124-함수-정의)
- [함수 선언문 vs 함수 표현식](#함수-선언문-vs-함수-표현식)
- [12-08](#12-08)
- [12-11](#12-11)
- [함수 호이스팅](#함수-호이스팅)
- [12-12](#12-12)
- [12-14](#12-14)
- [12-20](#12-20)
- [12-23](#12-23)
- [12-24](#12-24)
- [12-25](#12-25)
- [즉시 실행 함수](#즉시-실행-함수)
- [12-34](#12-34)
- [재귀 함수](#재귀-함수)
- [12-44](#12-44)
- [12-46](#12-46)
- [중첩 함수](#중첩-함수)
- [12-48](#12-48)
- [콜백 함수(고차 함수)](#콜백-함수고차-함수)
- [12-52](#12-52)
- [12-55](#12-55)
- [순수함수 비순수함수](#순수함수-비순수함수)
- [12-56](#12-56)
- [12-57](#12-57)


# 함수

함수의 형태  
- 함수 선언
- 함수 리터럴
- 


# 12.2 함수를 사용하는 이유

함수를 사용하는 이유  
  - 코드의 재사용  
  - 유지보수의 편리성  
  - 코드의 신뢰성   
  - 코드의 가독성  

# 12.4 함수 정의

함수의 정의 방식   
- 함수 선언문 (함수이름 생략불가)   
- 함수 표현식 (변수+함수리터럴 구성) (함수이름 생략가능) 
- Function 생성자 함수  
- ES6 화살표 함수 

```javascript
// 함수 선언문
function foo() { console.log('foo'); }
// 함수수 표현식 
// - (변수+함수리터럴 구성) (함수이름 생략가능) 
// - 식별자(bar)에 "함수 리터럴"(function~)를 대입한 형태  
// - 함수이름(add)는 함수 몸체에서만 참조가능하다.
function bar = function add(x,y){ return x+y };
// Function 생성자 함수  
// - 클로저 생성 X, (함수 선언,표현식과 다르게 동작함.)  
var adder1 = new Function('x','y','return x+y');
// ES6 화살표 함수 
// - this 바인딩 방식이 다름
// - prototype 프로퍼티 없음
// - arguments 객체 없음
var adder2 = (x,y)=> x+y;
```
--- 

# 함수 선언문 vs 함수 표현식 

# 12-08

- 코드의 문맥에 따라서, 함수 선언문 혹은 표현식 으로 해석이 가능  
- {}가 객체일지, 코드블록일지 중의적인 표현이듯  

```javascript
// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략 불가
function foo() { console.log('foo'); }
foo(); // foo

// 함수 리터럴
// -피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// -함수 리터럴에서는 함수 이름을 생략 가능
(function bar() { console.log('bar'); });
bar(); // ReferenceError: bar is not defined

// var x = '10';  <- 변수 할당(함수 리터럴 보통의 상황)
// '10' ; <- 이런 상황?(함수를 리터럴로 보고, 식별자를 지정안함 )

// foo : 암묵적으로 식별자 foo(함수이름과동일한)생성
// bar : 함수 리터럴 그 자체로 떵그러니.

```


# 12-11

- 익명 함수 표현식, 기명함수 표현식 


```javascript

// 익명 함수 표현식
var add = function (x, y) {
  return x + y;
};
console.log(add(2, 5)); // 7

// 기명 함수 표현식
var add = function foo (x, y) {
  return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

// 함수 이름으로 호출하면 ReferenceError가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // ReferenceError: foo is not defined
```
# 함수 호이스팅 

- 함수 선언문은 함수 리터럴 - 함수 호이스팅 -> 호출가능
- 함수 표현식은 변수가 - 변수 호이스팅 -> 호출불가

- *함수 호이스팅은 피할 것 
- 함수를 선언 후 함수를 호출 해야하는 규칙을 무시하므로, 표현식을 쓸 것.  
  ( JSON 창시자 왈 )  

# 12-12

```javascript
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```


# 12-14

- new Function 은 클로저가 먹지 않는다.  

```javascript
var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
  var a = 10;
  return new Function('x', 'y', 'return x + y + a;');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined
```

# 12-20

- 함수에는 arguments 객체가 있다.  
- 가변적인 매개변수를 처리하도록 도움.  

```javascript
function add(x, y) {
  console.log(arguments);
  // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  return x + y;
}

add(2, 5, 10);
```

# 12-23

- 매개변수 타입 체크 로직 -> 싫으면 Typescript로

```javascript
function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }

  return x + y;
}

console.log(add(2));        // TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.
```

# 12-24

- 매개변수 디폴트 값 (ES6 이전) 
```javascript
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

# 12-25

- 매개변수 디폴트 값 (ES6) 

```javascript
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0
```

# 즉시 실행 함수 

# 12-34
- IIFE 는 그룹연산자(..) 으로 묶어 함수 리터럴로 평가 해야 함  
```javascript
// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());
```

# 재귀 함수  

- 함수 이름은 함수 Body 안에서만 유효하다.  
- > 함수 선언문 : 기명이므로 가능
- > 함수 표현식 : 기명 리터럴 함수 or 식벽자로 가능  



# 12-44

```javascript
// - > 함수 선언문 : 기명이므로 가능
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); // 재귀 호출
}

countdown(10);
```

# 12-46

```javascript
// 함수 표현식 : 기명 리터럴 함수 or 식벽자로 가능  
var factorial = function foo(n) {
  // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if (n <= 1) return 1;
  // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n - 1);

  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  // console.log(factorial === foo); // true
  // return n * foo(n - 1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120
```

# 중첩 함수 

# 12-48

```javascript
function outer() {
  var x = 1; // 중첩 함수

  function inner() {
    var y = 2; // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }
  inner();
}
outer();
```

# 콜백 함수(고차 함수)

Callback Function : 인자로 받은 함수를 가르킴  
HOF : 콜백함수를 받은 함수 (Wrapper 함수의 느낌)  
- "고차함수"는 "콜백함수"를 자신의 일부분으로 "합성" 한다.   


# 12-52

- before  : 콜백함수 매번 생성 되는 ver 
- after   : -> 한번만 생성

```javascript
// before
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
  if (i % 2) console.log(i);
}); // 1 3

// ---
// after 
// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3
```

# 12-55

- 고차함수 : map, filter, reduce

```javascript
// 콜백 함수를 사용하는 고차 함수 map
var res = [1, 2, 3].map(function (item) {
  return item * 2;
});
console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차 함수 filter
res = [1, 2, 3].filter(function (item) {
  return item % 2;
});
console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차 함수 reduce
res = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(res); // 6
```

# 순수함수 비순수함수

순수 함수  : 부수효과(sideEffect)가 없는 함수
비순수 함수 : 외부상태 의존, 외부상태 변경하는 (부수효과)가 있는 함수  

함수형 프로그래밍 : 부수 효과 최대한 피해, 오류 적제  
  * 불변성을 지향  
  * if, while 제거 지향
  * 

# 12-56

- 순수 함수 example)

```javascript
var count = 0; // 현재 카운트를 나타내는 상태
// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}
// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
```

# 12-57

- 비순수 함수 example)


```javascript
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2
```
