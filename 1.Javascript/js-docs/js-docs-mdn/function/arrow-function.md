## 화살표 함수

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- 1. 자신의 this,arguments,super,new.target을 바인딩 하지 않는다.

- 2.  바인딩 되지 않은 this

```js
// eg) function 안의 this는 전역객체이다.
function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;

  setInterval(function growUp() {
    // 비엄격 모드에서, growUp() 함수는 `this`를
    // 전역 객체로 정의하고, 이는 Person() 생성자에
    // 정의된 `this`와 다름.
    this.age++;
  }, 1000);
}
var p = new Person();

// eg) that을 이용해서해결 (ES3/5)
function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    // 콜백은  `that` 변수를 참조하고 이것은 값이 기대한 객체이다.
    that.age++;
  }, 1000);
}

// eg) 화살표함수의 this는 Person이다.
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this|는 Person 객체를 참조
  }, 1000);
}

var p = new Person();
```
