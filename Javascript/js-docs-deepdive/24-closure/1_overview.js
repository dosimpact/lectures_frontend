// https://hyunseob.github.io/2016/08/30/javascript-closure/

// 클로저(함수) 정의 : 자유변수를 가르키는 함수이다.
// 🟢 eg)
function getClosure(arg) {
  var text = "variable1 " + arg;
  return function () {
    return text;
  };
}
var closure = getClosure("hell");
console.log(closure()); // variable1 hell
var closure = getClosure("world");
console.log(closure()); // variable1 world
// 내부 변수 text는 사라지지 않고 각 함수마다 다른 컨텍스트에 존재한다.

//🟢 eg) 은닉화
function person(name) {
  var _name = name;
  return function () {
    return _name;
  };
}
var p1 = person("pica");
console.log(p1()); // pica
p1.name = "mutated"; // not effected
console.log(p1()); // pica

//🟢 eg) 반복문+closure+setTimeout
var i = 0;
for (i = 1; i < 10; i++) {
  setTimeout(
    ((j) => {
      return () => console.log(j);
    })(i),
    100
  );
}
console.log("-------------");
var i = 0;
for (i = 10; i < 20; i++) {
  setTimeout(
    (function (j) {
      return function () {
        console.log(j);
      };
    })(i),
    100
  );
}

// 🟢 eg)클로저 성능을 위해 메모리 release하기
function person(name) {
  var _name = name;
  return function () {
    return _name;
  };
}
var p1 = person("minsu");
var p2 = person("gug");
console.log(p1());
console.log(p2());
// 메모리 release
p1 = null;
p2 = null;
