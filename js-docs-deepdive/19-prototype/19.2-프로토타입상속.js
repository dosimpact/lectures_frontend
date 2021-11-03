// ✅ ## 19.1 객체지향 프로그래밍

// - 객체는 속성과 함수의 묶음이다.

// eg) ✅ 객체의 속성과 함수를 표현
// -- 속성 반지름
// -- 함수 : 지름,둘래,너비

const circle = {
  radius: 5,
  // ✅  화살표함수는 매서드로 사용하면 안된다.
  getDiameter: () => {
    // circle.radius
    return this.radius * 2;
  },
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  },
  getArea: function () {
    return 3.14 * this.radius * this.radius;
  },
};
console.log(circle);
console.log(circle.getDiameter()); //NaN
console.log(circle.getArea()); //15.7
console.log(circle.getPerimeter()); // 31.4

// ✅ ## 19.2 상속과 프로토 타입

// 생성자 함수 정의
function Circle(radius) {
  this.radius = radius;
  // this.getArea = function () {};
}
// 프로토타입 함수 정의
// - Circle을 new로 생성하면 공유받는 프로토타입 함수들이 있을것이다.
Circle.prototype.getDiameter = function () {
  return this.radius * 2;
};
Circle.prototype.getPerimeter = function () {
  return 2 * 3.14 * this.radius;
};
Circle.prototype.getArea = function () {
  return 3.14 * this.radius * this.radius;
};

const c1 = new Circle(10);
console.log(c1.getPerimeter());
