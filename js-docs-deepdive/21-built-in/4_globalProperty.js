/**
 * 빌트인 전역 프로퍼티
 * Infinity NaN undefined eval isFinite isNaN
 */
//Infinity
console.log(globalThis.Infinity); // Infinity
console.log(3 / 0); //Infinity
console.log(-3 / 0); // - Infinity
console.log(typeof Infinity); // number

//NaN
console.log(globalThis.NaN); // NaN
console.log(Number("hello")); // NaN
console.log(typeof NaN); // number

// undefined
console.log(globalThis.undefined); // undefined

// eval
// - 기존의 스코프를 동적으로 수정한다. (마치 원래있는 선언된 변수처럼)
// - 엄격모든에선 eval함수 자체의 스코프에서 실행된다.
// - eval 코드는 최적화 없어 느리고, 보안에 취약하므로 사용은 금지

// isFinite
console.log(isFinite(null)); // true

// isNaN
// - 숫자 타입으로 변환후에 NaN인지 검사
console.log(isNaN(null)); //false
console.log(isNaN("10")); //false
console.log(isNaN(Number("10"))); //false
console.log(isNaN(" ")); //false
console.log(isNaN(" hello ")); //true
