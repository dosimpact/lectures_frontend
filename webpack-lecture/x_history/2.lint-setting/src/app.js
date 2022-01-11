import './styles/app.css';
import './styles/app.scss';
import './assets/test.txt';

// test - 커스텀 플러그인으로 const -> var 변환 여부 체크
const HELL = 'HELL';

// arrow function 일반함수로 변환 여부 체크 ( babel preset )
const alert = (msg) => window.alert(msg);

const promise = () => new Promise();

console.log('webpack practice');
console.log(process.env.NODE_ENV); // development
console.log(process.env.TWO); //undefined
console.log(TWO); //2
console.log(TRHEE); //1+2
console.log(api.domain); //http://dev.api.domain.com

// ASI 수행이 필요한 부분
// eslint 의 no-extra-semi 규칙에 걸리는 부분 입니다.
// console.log()(function () {})();;;

// prettier 가 변경하는 코드
// console.log("----------------매 우 긴 문 장 입 니 다 80자가 넘 는 코 드 입 니 다.----------------")

// prettier 가 변경하는 코드
// (function(){ return {func(){ return this }} })().func().func().func();
