/**
 * globalThis 는 window, global 등 host객체마다 부르는
 * 전역객체 이름을 통일한것
 */

// 브라우저 환경
// console.log(globalThis === this); // true
// console.log(globalThis === window); // true

// console.log(globalThis === self); // true
// console.log(globalThis === frames); // true

// nodejs 환경
console.log(globalThis === this); // true
console.log(globalThis === global); // true

/**
 * 1. 전역객체는 생성자 함수 없음
 * 2. 전역객체는 생략 가능
 * 3. 전역객체는 표준 빌트인 객체도 가지고 있음
 * 4. 전역객체에는 호스트 환경에 필요한 프로퍼티가 추가되어 있음
 * 5. 암묵적 전역은 전역객체의 속성으로 들어간다.
 */
// eg) 2.전역객체는 생략 가능
console.log(parseInt("10.1"), globalThis.parseInt("10.12"));
//10 10

// eg) 3. 전역객체는 표준 빌트인 객체도 가지고 있음
globalThis.Number(10);
globalThis.Array(10);

// eg) 4. 전역객체에는 호스트 환경에 필요한 프로퍼티가 추가되어 있음
globalThis.XMLHttpRequest;
globalThis.document;

// eg) 5. 암묵적 전역은 전역객체의 속성으로 들어간다.
// ⚠️ window환경에서는 전역으로 들어가는데 , Node에선 안된다.
// - 암묵적 전역으로 만들어지는 변수는 호이스팅 대상도 아니며,
// - 전역객체의 프로퍼티를 넣은것같은 효과이다.(delete 가능)
var foo = 1;
console.log(globalThis.foo); // 전역 변수
bar = 2;
console.log(globalThis.bar); // 암묵적 전역
function three() {
  // 전역 함수
  return 3;
}
console.log(globalThis.three());
