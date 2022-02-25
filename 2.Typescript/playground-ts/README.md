# 인터페이스

- 값의 형태에 맞춰서 타입검사를 한다.(덕 타이핑,구조적 서브타이핑)

-eg)

- labeledObj는 실제 더 많은 값을 갖지만, 타입검사결과 서브타입만 사용
- 요구하는 프로퍼티만 충족되는지 확인

```ts
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

```ts
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

## Optional Properties

- 프로퍼티이름? : optional 의미

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

console.log(createSquare({}));
console.log(createSquare({ color: "black" }));
console.log(createSquare({ color: "black", width: 2 }));
// { color: 'white', area: 100 }
// { color: 'black', area: 100 }
// { color: 'black', area: 4 }
```

## Readonly properties

- 처음 객체 생성시만 값을 대입, 이후 변경 불가
- readonly vs const : 변수에 사용 예정(const) 프로퍼티에 사용 예정(readonly)

eg) set 불가

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 오류!
```

eg) mutating 함수 사용 불가한 ReadonlyArray

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!
a = ro; // 오류!
```

## Excess Property Checks

- 지정된 프로퍼티 외 들어오면 애러

eg) 초과프로퍼티는 형변환으로 해결

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
  return {
    area: 100,
    color: "white",
  };
}
// ✅ 초과 프로퍼티 검사 결과 - 오류
let mySquare = createSquare({ colour: "red", width: 100 });
// ✅ 타입 단언 (as) 로 해결
let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
```

eg) 문자열 인덱스 서명으로 해결

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // string index signatuer
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  // ✅ 문자열 인덱스 서명 추가로 해결
  console.log(config["colour"]);
  // ...
  return {
    area: 100,
    color: "white",
  };
}
let mySquare = createSquare({ colour: "red", width: 100 });
```

eg) 지양) 다른 변수 할당 후

```
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    area: 100,
    color: "white",
  };
}
//✅ 다른 변수에 할당 후 초과 속성 검사를 피하는 방법은  좋지 않다.
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

```

## 함수 타입 (Function Types)

eg) 함수타입: call signature

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

// ✅ 매개변수 이름 상관없이 타입만 맞으면 가능
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

//✅ contextual typing 이 타입을 추론
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
};
```

## 인덱서블 타입 (Indexable Types)

- index signature 은 string,number 만 지원

```
arr[0],arr[2],req["header"] 등
(사실 숫자도 > string으로 변환, arr[100] = arr["100"])
```

eg) basic

```ts
interface StringArray {
  // ✅ Indexalble Types
  // 숫자로 들어와라 ->그러면 string을 반환해줄께
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let res1: string = myArray[0]; // number > string
let res2 = myArray[1]; // number > string
let res3 = myArray[2]; // number > string
console.log(res3);
```

eg) 인덱스 시그니처는 string 우선

```ts
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 오류: 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될 것입니다!
// ✅ 숫자형이 더 약하다
interface NotOkay {
  [x: number]: Animal; // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  [x: string]: Dog;
}
```

eg) 인덱서블을 사용하면, 다른 프로퍼티의 타입에 제약이 생긴다.

```ts
// NumberDictionary['input'] -> number 만
interface NumberDictionary {
  [index: string]: number;
  length: number; // 성공, length는 숫자입니다
  name: string; // 오류, `name`의 타입은 인덱서의 하위타입이 아닙니다
}

// NumberDictionary['input'] -> number | string 만
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // 성공, length는 숫자입니다
  name: string; // 성공, name은 문자열입니다
}
```

eg) 읽기전용 인덱서블

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // 오류!
```

## 클래스 타입 (Class Types)

### 인터페이스 구현하기 (Implementing an interface)

eg) basic

```ts
//✅ 인터페이스에서는 모두 public
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// ✅ 인터페이스로 private 구현 못한다.
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

### ⚠ 클래스의 스태틱과 인스턴스의 차이점 (Difference between the static and instance sides of classes)

- 클래스 두 가지 타입 : 스태틱 타입, 인스턴스 타입
- new로 인터페이스 생성
- new로 클래스 생성

eg) ⚠ 생성자 인터페이스

```ts
// 생성자 인터페이스
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

// 함수 프로퍼티 인터페이스
interface ClockInterface {
  tick(): void;
}

//
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

// ---
class DigitalClock implements ClockInterface {
  // ✅ 클래스의 생성자는 static 이다.
  constructor(h: number, m: number) {} // ClockConstructor에 의해 검사 받음
  tick() {
    // ClockInterface에 의해 구현됨
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}
// ✅ createClock - 1번째 인자 : 생성자 시그니처 확인
// ✅ createClock - 2,3번째 인자 생성자에 필요한 시그니처
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
```

eg) ⚠ 클래스 표현사용한 생성자

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

const Clock1: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
// const Clock2:typeof Clock
const Clock2 = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("Tuuduu Tuuduu");
  }
};
// 클래스 를 담은 변수를 new를 통해 생성자 호출 결과 non-static 부분들 나옴?
const c1 = new Clock1(10, 20);
console.log(c1);
c1.tick();

// typeof clock인 부분..?
const c2 = new Clock2(10, 20);
console.log(c2);
c2.tick();
```

### 인터페이스 확장하기 (Extending Interfaces)

eg) basic

```ts
interface Shape {
  color: string;
}

// interface 확장
interface Square extends Shape {
  sideLength: number;
}
// interface 형변환
let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```

eg) interface 1,2 >3

```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### ⚠ 하이브리드 타입 (Hybrid Types)

- Function Types + 객체 타입 섞음
- 받아들이기 힘든 타입이다.

```ts
interface Counter {
  (start: number): string; // 이거만 보면 하나의 함수인데
  interval: number; // 변수
  reset(): void; // 함수 변수도 있음
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
console.log(c);
c(10);
c.reset();
c.interval = 5.0;
```

### ⚠ 클래스를 확장한 인터페이스 (Interfaces Extending Classes)

- 클래스 > interface로 확장시 선언부+구현부 중 선언부만 상속
- 인터페이스가 private,protected 프로퍼티도 확장 가능

eg) ⚠ 잘모르겠다.

- class > interface > class 의 상속구조를 가져서, 싸그리 상속받는듯?

```ts
class Control {
  protected state: any;
}

// class를 상속받는다면 구현부는 제거된다.
interface SelectableControl extends Control {
  select(): number;
}

class Button extends Control implements SelectableControl {
  select() {
    return this.state;
  }
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//   private state: any;
//   select() {}
// }

// class Location {}
```
