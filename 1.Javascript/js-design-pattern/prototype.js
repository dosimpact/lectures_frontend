// ✅ 프로토타입 내용 보충

// ✅ 클로저를 이용한 , 생성자함수에서 private변수 만들기
// - 생성자 함수는, new키워드를 통해 객체를 생성한다.
// - 생성자 함수안에 함수는 클로저이다. 이를 이용해서 생성자함수에서 받는 객체를 은닉 가능

// eg)
const BMW = function (color) {
  const __color = color;
  this.getColor = function () {
    return __color;
    // return this.__color;
  };
};
const b1 = new BMW("red");
console.log(b1.getColor());
