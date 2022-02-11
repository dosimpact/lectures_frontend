/**
 * 빌트인 전역 프로퍼티의 종류-2
 * parseFloat, parseInt
 */

// parseFloat, parseInt

// eg) 진수 변환 (2진수)
// (2진수->10진수) - 2진수로 문자열을 해석
console.log(parseInt("1010", 2)); // 8+2 = 10
// (10진수->2진수) -
console.log(Number(10).toString(2)); // 1010

// eg) 진수 변환 (16진수)
// (10진수->16진수) - 2진수로 문자열을 해석
console.log(parseInt("0xf")); // 15
console.log(parseInt("f", 16)); // 15
// (16진수->10진수) -
console.log(Number(15).toString(16)); // f

// eg) 가능한 만큼 숫자로 변환
console.log(parseInt("12 12 hell world")); // 12
// - 앞뒤 공백은 무시된다.
console.log(parseInt(" 112 ")); // 112
