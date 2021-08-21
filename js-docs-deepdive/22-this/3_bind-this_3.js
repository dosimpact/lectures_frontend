/**
 * call,apply,bind
 * 목적 - function의 this는 문맥에따라 예측이 불가능 할 수 있다.
 * 따라서 함수를 호출할때, 의도된 this맥락을 넘겨 줄 수 있다.
 */
const std1 = {
  name: "dodo",
};
const std2 = {
  name: "virus",
  speak: function (to) {
    // ✔ Array.prototype.join.call 을 이용하면 arguments 객체을 배열로 이용 가능
    // console.log(arguments);  //  { '0': 'everybody' }
    // console.log(Array.prototype.join.call(arguments)); //everybody
    console.log(`[${this.name}->${to}] hello ~`);
  },
};

// 1. call로 std2의 this를 바꾸는 경우
std2.speak("everybody");
std2.speak.call(std1, "everybody");
// [virus->everybody] hello ~
// [dodo->everybody] hello ~

// 2. apply도 마찬가지, 다만 인자가 유사배열로 들어간다.
std2.speak.apply(std1, ["dodun"]);
// [dodo->dodun] hello ~

// 3. bind는 this을 묶고 함수를 반환한다.
std2.speak.bind(std1)("someone");
//[dodo->someone] hello ~

// eg) 유사배열 arguments를 slice에 바인딩  - [ 1, 2, 3 ]
function convertArgsToArray() {
  console.log(arguments);
  // Arguments] { '0': 1, '1': 2, '2': 3 } <- ⚠️ 유사배열객체
  return Array.prototype.slice.call(arguments);
}
console.log(convertArgsToArray(1, 2, 3));
