// const 열거형 (const enums)
// 일반적인 enum과 달리 컴파일 과정에서 완전히 소멸
const enum CDirections {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  CDirections.Up,
  CDirections.Down,
  CDirections.Left,
  CDirections.Right,
];

// 컴파일 결과
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
