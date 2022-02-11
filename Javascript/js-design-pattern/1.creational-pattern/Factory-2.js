// ✅ 팩토리 패턴 : 같은 그룹의 객체들을 찍어내는 패턴

/**
✅ 객체 CarMarker
- factory
- CarMaker.prototype <- Compact, Convertable, SUV
*/

// ✅ eg) 팩토리패턴
// 생성자 함수 정의
function CarMarker() {
  this.door = 0; // public
}
CarMarker.prototype.drive = function () {
  return `[dirve] door ${this.door}`;
};

// 팩토리 메서드 정의
CarMarker.factory = function (type) {
  // (1)입력 타입으로 매칭되는 생성자 함수가 있는가?
  // (2)생성자 함수의 프로토 타입은 지정되어 있는가?
  // 생성하기
  if (typeof CarMarker[type] !== "function") {
    throw "CarMaker factory type doesn't exists";
  }
  if (!(CarMarker[type].prototype instanceof CarMarker)) {
    CarMarker[type].prototype = new CarMarker();
  }
  return new CarMarker[type]();
};

// 자식 생성자 메서드 정의
CarMarker.Compact = function () {
  this.door = 4; // 맴버변수 override
};
CarMarker.Convertable = function () {
  this.door = 2;
};
CarMarker.SUV = function () {
  this.door = 24;
};

var inst = CarMarker.factory("SUV");
console.log(inst);
console.log(inst.door);
var inst = CarMarker.factory("Compact");
console.log(inst);
var inst = CarMarker.factory("Convertable");
console.log(inst);
