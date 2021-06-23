// 역 매핑 (Reverse mappings)
// * 문자열 enum은 역매핑 생성 안함
enum AEnum {
  A,
}
let a = AEnum.A; // A -> 0  로 매핑되어 있음
let nameOfA = AEnum[a]; // "A" ( 0 -> A) 로 역매핑 되어 있음
// console.log(AEnum[0]);

// Enum["A"] = 0 // A -> 0  로 매핑
// Enum[Enum["A"] = 0] = "A";  // ( 0 -> A) 로 역매핑
/*
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
*/
