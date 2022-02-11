목적 : 상수들의 집합을 선언하자.

### 숫자 열거형

- 상수-숫자들을 매핑한 그룹을 만들자.

```ts
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
```

- eg) 열거형 사용

```ts
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
```

- 열거형 상수값을 계산하여 넣자 (계산된 맴버)

```ts
//계산된 맴버화 상수 맴버를 섞어서 사용
const getSomeValue = () => Math.ceil(Math.random() * 10);
enum E {
  B, //  앞에 나온 A가 계산된 멤버이므로 초기화가 필요합니다.
  A = getSomeValue(),
}
```

### 문자 열거형

- 명확한 읽기 좋은 값들로 상수를 구성하자.
- reducer의 action을 만들때라든지
- 리터럴들만 추출할때 keyof 대신, keyof typeof 를 사용해야한다.

```ts
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
```

### 열거형은 런타임에 실제로 존재하는 객체이다

- enum은 컴파일 후 객체로 존재

```ts
// 열거형은 런타임에 실제로 존재하는 객체이다.
enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  console.log(obj);
  return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다.
f(E);
```

### 역매핑

- enum 에서 상수를 얻어오는게 기본목적
- 그 반대도 가능하다!

```ts
// 역 매핑 (Reverse mappings)
// * 문자열 enum은 역매핑 생성 안함
enum AEnum {
  A,
}
let a = AEnum.A; // A -> 0  로 매핑되어 있음
let nameOfA = AEnum[a]; // "A" ( 0 -> A) 로 역매핑 되어 있음
// console.log(AEnum[0]);
```

```js
// Enum["A"] = 0 // A -> 0  로 매핑
// Enum[Enum["A"] = 0] = "A";  // ( 0 -> A) 로 역매핑
var Enum;
(function (Enum) {
  Enum[(Enum["A"] = 0)] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
```

### const 열거형 (const enums)

- 컴파일 타임에서, 완전히 소멸시키고자 함

```ts
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
```

### Ambient 열거형 (Ambient enums)

- 열거형 타입의 모습을 묘사하기 위해 사용

```ts
declare enum Enum {
  A = 1,
  B,
  C = 2,
}
```
