// 문자열 열거형 (String enums)

// 읽기 좋은 값들로 가능
enum ADirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
const Go = (gap: number, dir: ADirection) => {};
Go(1, ADirection.Down);

// 컴파일 시점에서 열거형 (Enums at compile time)
// enum은 keyof 만 하면 예상하던 결과와 다르다.
type AD = keyof typeof ADirection;
const GoTo = (gap: number, dir: AD) => {};
GoTo(1, "Down");
