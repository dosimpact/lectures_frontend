//  숫자 열거형
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up, // 0부터 매핑
  Down,
  Left,
  Right,
}

//eg , 응답에 대한 열거형
enum SResponse {
  No = 0,
  Yes = 1,
}
const respond = (msg: string, res: SResponse) => {
  return `${msg}  `;
};
// 열거형 객체를 사용하다
respond("hello", SResponse.No);

//계산된 맴버화 상수 맴버를 섞어서 사용
const getSomeValue = () => Math.ceil(Math.random() * 10);
enum E {
  B, //  앞에 나온 A가 계산된 멤버이므로 초기화가 필요합니다.
  A = getSomeValue(),
}
