// 열거형은 런타임에 실제로 존재하는 객체이다.
enum E {
  X,
  Y,
  Z,
}

// function f(obj: { X: number }) {
//   console.log(obj);
//   return obj.X;
// }

// // E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다.
// f(E);
