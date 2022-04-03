- [스코프](#스코프)
- [예제](#예제)
- [13-01](#13-01)
- [13-02](#13-02)
- [13-03](#13-03)
- [13-04](#13-04)
- [13-05](#13-05)
- [13-06](#13-06)
- [13-07](#13-07)
- [13-08](#13-08)
- [13-09](#13-09)

# 스코프 

keyword : 함수레벨-블록레벨 스코프, 스코프체인,  정적-동적 스코프

--- 

스코프 : 모든 식별자(변수 이름,함수 이름,클래스 이름)은 유효범위를 가진다.  

    어떤 변수는 { 가 시작한 이후 } 가 나온 순간 죽는 변수가 있다.  
    어떤 변수는 함수의 시작과 종료의 생명주기와 함께 가는 변수도 있다.   
    이러한 유효범위를 스코프라고 함  

식별자 결정 : 이름이 같은 두 변수중 어떤 변수를 참조할지 결정하는 것   

    이를 통해 JS엔진이, 식별자 검색하는 규칙을 안다.  

렉시컬 환경 : 코드가 어디서 실행되고 주변에 어떤 코드가 있는지에 대한 환경 (위치,주변 코드)  
실행 컨텍스트 : 렉시컬 환경에서 코드의 문맥을 실행하는 것.  

**스코프 체인** : 스코프가 계층적으로 연결된 것  

    모든 지역 스코프는 최상위 스코프를 가르키게 된다.(지역스코프는 상위를 "알고 있음")  
    변수의 탐색을 단방향으로 할 수 있는 렉시컬환경의 자료구조가 동작  

**함수 레벨 스코프** : var에 해당  
**블록 레벨 스코프** : let과 const에 해당  

    *블록 레벨  if,for,while,try/catch,{} 등  

상위 스코프를 결정하는 방식  
   - "함수를 어디서 호출" 했는지에 따라 함수의 상위 스코프 결정  
     - >**동적 스코프**

   - "함수를 어디서 정의" 했는지에 따라 함수의 상위 스코프 결정  
     - >**정적 스코프(렉시컬 스코프)**
     - 함수를 실행할때마다, 상위 스코프를 다시 계산할 필요가 없다.
     - JS 가 채택하는 방식이다. (이는 클로저와 관계가 있음) 

--- 

# 예제

# 13-01

```javascript
function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
  console.log(x, y); // 2 5
  return x + y;
}
add(2, 5);
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined
```

# 13-02


```javascript
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수
if (true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    var var5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined
```

# 13-03

```javascript
var x = "global";
function foo() {
  var x = "local";
  console.log(x); // ①
}
foo();
console.log(x); // ②
/*
local
global
*/
```

# 13-04

- var 는 중복 선언 가능  
- let,const 는 중복 선언 불가 
```javascript
function foo() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x); // 2
}
foo();
```

# 13-05

```javascript
function bar() {
  let x = 1;
  // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
  let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();
```

# 13-06

- 스코프 체인 : 근접한 상위 스코프를 먼저 참조  

```javascript
// 전역 함수
function foo() {
  console.log('global function foo');
}

function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }

  foo(); // ①
}

bar();
```

# 13-07

- 함수 레벨 스코프 예)
```javascript
var x = 1;

if (true) {
  // var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}

console.log(x); // 10
```

# 13-08

- 함수 레벨 스코프 예) 
```javascript
var i = 10;

// for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5
```

# 13-09

- 렉시컬 스코프를 따르는 예제

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```
