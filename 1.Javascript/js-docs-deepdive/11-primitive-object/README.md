
- [원시 값과 객체의 비교](#원시-값과-객체의-비교)
- [11-01](#11-01)
- [11-02](#11-02)
- [11-03](#11-03)
- [11-04](#11-04)
- [11-05](#11-05)
- [11-06](#11-06)
- [11-07](#11-07)
- [11-08](#11-08)
- [11-09](#11-09)
- [11-10](#11-10)
- [객체](#객체)
- [11-11](#11-11)
- [11-12](#11-12)
- [11-13](#11-13)
- [11-14](#11-14)
- [11-15](#11-15)
- [11-16](#11-16)
- [11-17](#11-17)
- [11-18](#11-18)

# 원시 값과 객체의 비교 


원시 타입과 객체 타입의 차이   

    - immutable vs mutable
    - 변수에 실제값 vs 변수에 참조 값   
    - pass by value vs pass by ref  

immutable : 값이 불변한다는 뜻  
    - var score = 80  
    - score 라는 변수는 undefined에서 값이 80으로 할당된다.   
    - score = 90; 을 하는 순간  
    - 기존의 메모리공간은 그대로 두고  
    - 90이 할당된 새로운 메모리 공간이 score변수가 된다.    
    - 변수는 교체가능하고, 값은 변하지 않는다. 이러한 값의 특성 =  불변성 이라고 한다.   
    - mutable 한 경우는, 같은 메모리 공간의 값을 바꿔간다.  

--- 

# 11-01

```javascript
// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}
```

# 11-02

JS 에서는 1개의 문자열당 2바이트 공간을 차지한다.  
  - 그러면서 가변공간을 할당 후 원시타임처럼 불변성을 가진다.  


```javascript
// 문자열은 0개 이상의 문자들로 이뤄진 집합이다.
var str1 = '';      // 0개의 문자로 이뤄진 문자열(빈 문자열)
var str2 = 'Hello'; // 5개의 문자로 이뤄진 문자열
```

# 11-03

```javascript
// str은 새로운 공간에 할당된 world 문자열을 가르킨다 ( 불변성)
var str = 'Hello';
str = 'world';
```

# 11-04
```javascript
// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
var str = 'string';
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING
```

# 11-05

```javascript
var str = 'string';
// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시값이므로 변경할 수 없다. 이때 에러가 발생하지 않는다.
str[0] = 'S';
console.log(str); // string (불변성)
```

# 11-06

```javascript
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // ? -- 80 유지, 값에의한 전달
```

# 11-07

```javascript
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true -- 다른 메모리공간의 80이다. 
```

# 11-08

```javascript
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy);    // 80  80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy);    // 100  80
console.log(score === copy); // false
```

# 11-09

```javascript
var x = 10; // x라는 식별자는, 10이라는 값이 저장된 메모리의 주소값에 대한 별칭이다.
```

# 11-10

```javascript
var copy = score; // 값에 의한 전달도 사실, 메모리 주소를 전달 할 수 있다.
// TMI - 파이썬의 변수는 , 
// 두 변수가 - 동일한 메모리 주소를 가르키다가
copy = 999;
// 변수에 값을 넣을때야 비로소, 메모리 주소를 옮겨간다. (lazy한 불변성)
// 이는 ECMA 스펙에 명시되지 않아 브라우저 마다 다를 수 있다. !
```
---

# 객체

JS의 객체는 해시 테이블과 유사하지만 더 최적화 된 방식으로 구현되었다.  
  - 객체는 동적으로 프로퍼티가 추가가 된다. 히든 클래스 방식을 이용한다.  
  - C++ 같은 클래스 기반의 언어보다 느린 단점을 극복한다.  

# 11-11

```javascript
// person 이라는 변수는 안을 가보면 객체를 가르키는 주소값을 값으로 가진다.
var person = {
  name: 'Lee'
};
```

# 11-12

```javascript
// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
var person = {
  name: 'Lee'
};

// person 변수에 저장되어 있는 참조값으로 실제 객체에 접근해서 그 객체를 반환한다.
console.log(person); // {name: "Lee"}
```

# 11-13

```javascript
// 객체는 뮤터블한 특성을 가지고 있다.
var person = {
  name: 'Lee'
};

// 프로퍼티 값 갱신
person.name = 'Kim';
// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // {name: "Kim", address: "Seoul"}
```

# 11-14

```javascript
const o = { x: { y: 1 } };

// 얕은 복사 - one Layer 만 복사가된다. 
// 반면 깊은 복사는 객체안의 모든 객체가 deepcopy 되어진다. 

const c1 = { ...o }; // 35장 "스프레드 문법" 참고
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false
```

# 11-15

```javascript
const v = 1;

// "깊은 복사"라고 부르기도 한다. (원시값)
const c1 = v;
console.log(c1 === v); // true
// 원시값의 할당은 === 깊은복사라고도 ..

const o = { x: 1 };
// "얕은 복사"라고 부르기도 한다. (객체인경우)
const c2 = o;
console.log(c2 === o); // true
```

# 11-16

```javascript
var person = {
  name: 'Lee'
};

// 참조값을 복사(얕은 복사)
var copy = person;
```

# 11-17

```javascript
var person = {
  name: 'Lee'
};

// 참조값을 복사(얕은 복사). copy와 person은 동일한 참조값을 갖는다.
var copy = person;

// copy와 person은 동일한 객체를 참조한다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = 'Kim';
// person을 통해 객체를 변경한다.
person.address = 'Seoul';

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
console.log(person); // {name: "Kim", address: "Seoul"}
console.log(copy);   // {name: "Kim", address: "Seoul"}
```

# 11-18

```javascript
var person1 = {
  name: 'Lee'
};

var person2 = {
  name: 'Lee'
};

console.log(person1 === person2); // false -- 메모리 주소값 비교
console.log(person1.name === person2.name); // true -- 프리미티브 값 비교
```
