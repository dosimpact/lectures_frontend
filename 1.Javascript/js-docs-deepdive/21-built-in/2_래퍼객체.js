/**
 * 래퍼 객체
 * 원시 타임에 대해 객체처럼 접근하면,
 * 임시 래퍼 객체를 생성하고,
 * 접근이 끝나면 객체를 가비지 콜렉팅 한다.
 */

// eg) 래퍼객체 가비지 콜렉팅
const str = "hello";
str.name = "Lee"; // 래퍼 객체 생성과 동시에 할당되고
console.log(str.name); // 바로 가비지 콜렉팅 된다. // undefined
console.log(typeof str, str); // string hello
