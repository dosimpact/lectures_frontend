// ✅ 팩토리 패턴 : 같은 그룹의 객체들을 찍어내는 패턴

/**
프로토타입 내용 보충
- 요약 : 프로토타입은 하위 객체에 프로퍼티 추가 제공해준다. 
>본인 객체에 없는 속성은 상위 프로토타입체인을 살핀다. 계속 ~

✅ prototype vs __proto__
- prototype 은 생성자함수가 찍어낼 객체의 부모객체를 가르킨다.
- __proto__ 는 인스턴스객체에서 prototype으로의 접근자 프로퍼티이다.

✅ 프로토 타입 체인 : 
- 본인의 프로퍼티가 없다면, 프로토 타입 체인으로 상위로 올라가서 찾는다.

✅ for ... in  [vs] Object.values 
- for ... in 에서는 프로토타입체인까지 탐색하여 객체를 열거하지만
- Object.values 에서는 본인의 객체의 프로퍼티만 보여준다.
- 따라서 for ... in 문에서, hasOwnProperty를 통해 본인의 객체만 선별 가능


✅ eg) 이미 생성된 객체에 프로토타입 체인 추가하기
car1.__proto__ = ParentCar // 생성된 객체에 , 프로토타입 체인을 추가

✅ eg)
ParentCar.prototype = 어떤 객체 // new ParentCar했을때, 참조할 상위 프로토타입 추가
ParentCar.prototype.addtionalFunction // 프로토타입에 함수 추가하기
*/

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
