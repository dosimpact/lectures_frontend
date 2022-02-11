// ## 생성자 + this 동적 바인딩

// 생성자 함수에서 this를 사용한다.
// this는 생성자 함수 자체를 가르키는것이 옳은가?
// 생성자 함수를 실행할때, this는 인스턴스를 동적으로 가르키게 된다.

// 동적 this 바인딩 이다. ( 바인딩은 식별자-값을 묶는것)

// 생성자 함수 정의
function Circle(radius) {
  this.radius = radius;
}
// prototype 함수 정의 , 과연 이때 this는 누구일까?
Circle.prototype.getDiameter = function () {
  return this.radius * 2;
};

// 생성자 함수를 호출하므로써, this가 동적 바인딩 된다.
const c1 = new Circle(10);
console.log(c1.getDiameter()); // 20

// 없던 this를 만들어서 넣을 수 도 있다.
console.log(Circle.prototype.getDiameter()); // NaN
console.log(Circle.prototype.getDiameter.call({ radius: 20 })); // 40
