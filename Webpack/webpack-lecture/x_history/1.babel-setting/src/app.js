import "./styles/app.css";

"use strict";

// test - 커스텀 플러그인으로 const -> var 변환 여부 체크 
const HELL = "HELL";

// arrow function 일반함수로 변환 여부 체크 ( babel preset )
const alert = (msg) => window.alert(msg);

new Promise();

console.log("webpack practice");
console.log(process.env.NODE_ENV); // development
console.log(process.env.TWO); //undefined
console.log(TWO); //2
console.log(TRHEE); //1+2
console.log(api.domain); //http://dev.api.domain.com
