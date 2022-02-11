// padLeft("Hello world", 4); // "Hello world"를 반환합니다.
// declare function padLeft(value: string, padding: any): string;
// // ---생략---
// // 컴파일 타임에는 통과하지만, 런타임에는 오류가 발생합니다.
// let indentedString = padLeft("Hello world", true);

// import { padLeft } from "./lib";
// import { ZipCodeValidator, mainValidator } from "./validator/AddressVD";

// let indentedString = padLeft("Hello world", 10);
// console.log(indentedString);
import { ADDER, SUBSTRATOR } from "./cal";
console.log(new ADDER().op(1, 2));
console.log(new SUBSTRATOR().op(1, 2));
