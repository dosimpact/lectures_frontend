// 1. obj 선언
// 객체 속성을 추가,변경,삭제 가능
// seal(밀봉) 안되어 있음
var obj = {
  prop: function () {},
  foo: "bar",
};

// 새 속성이 추가되고, 기존 속성은 변경되거나 제거될 수 있음
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;
console.log(Object.isSealed(obj) === true);

// 2.  seal 사용
// freeze 와 다른점 : 쓰기 가능한 속성의 값은 밀봉 후에도 변경 가능 ( 삭제는 불가능 )
var o = Object.seal(obj);
console.log(o === obj);
console.log(Object.isSealed(obj) === true);

// 밀봉한 객체의 속성값은 밀봉 전과 마찬가지로 변경할 수 있음
obj.foo = "quux";
console.log(obj.foo); // 'quux' 가 출력됨

// 데이터 속성과 접근자 속성 사이의 전환은 불가
try {
  Object.defineProperty(obj, "foo", {
    get: function () {
      return "g";
    },
  }); // TypeError 발생
} catch (error) {}

// 속성값의 변경을 제외한 어떤 변경도 적용되지 않음
obj.quaxxor = "the friendly duck"; // 에러가 나지는 않지만 속성은 추가되지 않음
delete obj.foo; // 에러가 나지는 않지만 속성이 삭제되지 않음

// strict mode 에서는 속성값의 변경을 제외한 모든 변경은 TypeError 발생
function fail() {
  "use strict";
  delete obj.foo; // TypeError 발생
  obj.sparky = "arf"; // TypeEror 발생
}
fail();

// Object.defineProperty() 메서드를 이용한 속성의 추가도 TypeError 발생
Object.defineProperty(obj, "ohai", { value: 17 }); // TypeErorr 발생
Object.defineProperty(obj, "foo", { value: "eit" }); // 속성값의 변경은 가능함
