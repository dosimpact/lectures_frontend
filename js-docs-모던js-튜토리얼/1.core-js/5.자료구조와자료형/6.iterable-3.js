/**
 * string은 대표적인 이터러블 객체
 * surrogate pair(2개의 char = 1개로 해석)
 */
// -- 1
var alert = console.log;
for (let char of "test") {
  // 글자 하나당 한 번 실행됩니다(4회 호출).
  alert(char); // t, e, s, t가 차례대로 출력됨
}
// -- 2
var str = "𝒳😂";
for (let char of str) {
  alert(char); // 𝒳와 😂가 차례대로 출력됨
}

// -- 3

var str = "Hello";

// for..of를 사용한 것과 동일한 작업을 합니다.
// for (var char of str) alert(char);

var iterator = str[Symbol.iterator]();

while (true) {
  var result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력됩니다.
}
