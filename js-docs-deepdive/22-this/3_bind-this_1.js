// 일반함수에서 this 바인딩 하기
// 1. that-this이용
// 2. bind,apply,call 이용
// 3. 화살표 함수 이용 (상위 스코프의 this를 가르킨다.(호출객체가 아닌))

// eg1) this - that 전달
var value = 1;
var obj = {
  value: 100,
  foo: function () {
    const that = this;
    setTimeout(() => {
      console.log(that.value);
    }, 1);
  },
};
obj.foo(); // 100

// eg2) bind 이용
var value = 1;
var obj = {
  value: 100,
  foo: function () {
    setTimeout(
      function () {
        console.log(this.value);
      }.bind(this),
      1
    );
  },
};
obj.foo(); // 100

// eg2) arrow functino
var value = 1;
var obj = {
  value: 100,
  foo: function () {
    setTimeout(() => {
      console.log(this.value);
    }, 1);
  },
};
obj.foo(); // 100
