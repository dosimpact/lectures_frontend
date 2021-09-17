// ✅ ## 19.1 객체지향 프로그래밍

// - 객체는 속성과 함수의 묶음이다.

// eg) ✅ 객체의 속성과 함수를 표현
// -- 속성 반지금
// -- 함수 : 지름,둘래,너비

const circle = {
  radius: 5,
  // ✅  화살표함수는 이럴때 사용하는것이 아님!
  getDiameter: () => {
    // circle.radius
    return this.radius * 2;
  },
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  },
  getArea: function () {
    return 3.14 * this.radius;
  },
};
console.log(circle);
console.log(circle.getDiameter()); //NaN
console.log(circle.getArea()); //15.7
console.log(circle.getPerimeter()); // 31.4
