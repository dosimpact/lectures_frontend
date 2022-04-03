# 전역 변수의 문제점


변수의 생명 주기 :   

    1.(allocate) 메모리 공간 확보  
    2.(release) 메모리 공간 해제  
    3.(memory pool) 메모리 공간 반납  

함수 내부 변수의 생명주기는 함수의 생명주기를 기본적으로 따라감  

    지역변수가 더 오래 사는것을 클로저라고 한다.  
    (cf,전역스코프엔 클로저가 없음, 전역=함수 생명주기 )

호이스팅은 스코프를 단위로 동작한다.  

    var 지역변수가 ReferenceError 가 아닌 undefined 출력 ( 14-02 )

전역변수 단점  

    암묵적 결합 - 모든 지역 스코프는 전역변수를 "알고있다."
    긴 생명 주기 - 변수가 안죽는다.  
    스코프 체인 상 종점 - (탐색 느림)  
    네임스페이스 오염   

모듈화 방법  

    전역 스코프를 오염시키지 않을려면 모듈을 이용하자.  
    IIFE 모듈패턴  
    ES6 모듈  
      - type="module" 선언, var 또한 전역변수가 아님  
      - mjs확장자를 추천  
--- 

# 14-01

```javascript
function foo() {
  var x = 'local';
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
```

# 14-02

- 지역변수는 함수 전체에서 유효하다.  
- 아래 예제에서, x는 이미 선언되어 undefined가 나온다.  
- (ReferenceError 가 아니다.)


```javascript
var x = 'global';

function foo() {
  console.log(x); // ①
  var x = 'local';
}

foo();
console.log(x); // global
```

# 14-03

- 전역변수는 긴 생명주기를 가진다.  

```javascript
var x = 1;
// ...
// 변수의 중복 선언. 기존 변수에 값을 재할당한다.
var x = 100;
console.log(x); // 100
```

# 14-04

- 즉시 실행 함수  

```javascript
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
}());

console.log(foo); // ReferenceError: foo is not defined
```

# 14-05

- 전역 네임스페이스 객체를 약속  

```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'Lee';

console.log(MYAPP.name); // Lee
```

# 14-06

- 전역 네임스페이스 객체를 약속  

```javascript
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.person = {
  name: 'Lee',
  address: 'Seoul'
};

console.log(MYAPP.person.name); // Lee
```

--- 

# 14-07

- IIFE 모듈패턴


```javascript
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    }
  };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
```

# 14-08

```html
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script>
```

---

# 1.5.Singleton

```js
// 1.5 싱글톤 패턴
// ✅ 오로지 하나의 인스턴스만 존재함을 보장

const Database = (function () {
  let instance = null;
  function Database(url, dbName) {
    this.url = url;
    this.dbName = dbName;
  }
  function createDatabaseInstance() {
    return new Database();
  }
  function getDatabaseInstance() {
    if (instance === null) {
      instance = createDatabaseInstance();
    }
    return instance;
  }
  return { getDatabaseInstance };
})();

const db1 = Database.getDatabaseInstance();
// another side
const db2 = Database.getDatabaseInstance();
console.log(db1 === db2); // true

```


# 1.6.SingletonC

```js
// using private property
// using static property
// using readonly property

class DataBase {
  // - instance
  static #instance = null;
  // ==
  // - createInstance
  static createInstance() {
    return new DataBase();
  }
  // - getInstance
  static getInstance() {
    if (this.#instance === null) {
      this.#instance = this.createInstance();
    }
    return this.#instance;
  }
  // static + readonly
  static get instance() {
    return this.#instance;
  }
  // -
}
const inst1 = DataBase.getInstance();
const inst2 = DataBase.getInstance();
console.log(inst1);
console.log(inst1 === inst2);
console.log(DataBase.instance);

```