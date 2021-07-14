# 제네릭

## 제네릭의 Hello World (Hello World of Generics)

eg)

```ts
// generic hello world
// make identity - any
// ✅ any로 제너릭을 만족하지만, 타입을 단언할 수 없다.
// function identity(arg: any) {
// return arg;
// }
// ✅ T 라는 타입을 받아서 사용
// make identity - generic
function identity<T>(arg: T): T {
  return arg;
}
// ✅ 제너릭 타입 변수 작업
// T를 이용해서 배열로 인자타입을 만들자, 비로소 lenght 사용 가능
function loggingIdentity<T>(arg: Array<T>): T[] {
  console.log(arg.length);
  return arg;
}
console.log(identity<string>("hello generic"));
console.log(loggingIdentity<string>(["a", "b"]));
```

## 제네릭 타입 (Generic Types)

```ts
// 제네릭 타입 (Generic Types)
// ✅ function Generic
function identity<T>(arg: T): T {
  console.log("identity");
  return arg;
}
// ✅ arrow function Generic
let myIdentity = <T>(arg: T): T => {
  console.log("myIdentity");
  return arg;
};
// ✅ arrow | return type Generic
let myIdentity2: <T>(arg: T) => T = identity;
// ✅ 인터페이스 , 함수 콜 시그니처
interface IMyIdentity3 {
  <T>(arg: T): T;
}
let myIdentity3: IMyIdentity3 = identity;
// ✅ 제너릭된 인터페이스, 제너릭 타입 이용해서 함수 콜 시그니처 만들기
interface IMyIdentity4<T> {
  (arg: T): T;
}
// string으로 일반화 되어있음
let myIdentity4: IMyIdentity4<string> = identity;
```

## 제네릭 클래스 (Generic Classes)

```ts
// 제네릭 클래스 (Generic Classes)
class GenericNumber<T> {
  //🚀 어쩔수 없이 초기화를 했는데, generic add 함수를 x+y 하고 싶은데 못함
  add: (x: T, y: T) => T;
  constructor(public zeroValue: T) {
    this.add = (x, y) => {
      return x;
    };
  }
}
// number로 타입 정하고, inst 생성
let myGenericNumber = new GenericNumber<number>(10);
myGenericNumber.add = (x, y) => {
  return x + y;
};
myGenericNumber.zeroValue = 10;
console.log(myGenericNumber.add(10, 20));
// string으로 타입 정하고 inst 생성
let myGenericString = new GenericNumber<string>("hello");
myGenericString.add = (x, y) => {
  return x + y;
};
myGenericString.zeroValue = "good";
console.log(myGenericString.add("hello", "word"));
```

## 제네릭 제약조건 (Generic Constraints)

- extends 키워드 : 제너릭 타입 제약
  eg) length가 있는 arg를 받고 싶을때

```ts
// function loggingIdentity<T>(arg: T): T {
// console.log(arg.length); // 오류: T에는 .length가 없습니다.
// return arg;
// }
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 이제 .length 프로퍼티가 있는 것을 알기 때문에 더 이상 오류가 발생하지 않습니다.
  return arg;
}
loggingIdentity({ length: 10 });
```

- 제너릭 타입을 이용해서 또 다른 제너릭 타입 제약조건 만들 수 있다.
  eg) 함수 첫번째 인자 obj 받기, 두번째 인자는 obj의 키만 가능하도록

```ts
let x = { a: 1, b: 2, c: 3, d: 4 };
//eg) 오브젝트의 타입을 받아서, 2번째 인자는 obj의 key만 받을 수 있게끔
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
getProperty(x, "a");
// getProperty(x, "m"); // 애러
```

cf) typeof, keyof

```ts
let x = { a: 1, b: 2, c: 3, d: 4 };
type my = typeof x;
/*
a: number;
b: number;
c: number;
d: number;
*/
type my2 = keyof typeof x;
// "a" | "b" | "c" | "d"
```

## 제네릭에서 클래스 타입 사용 (Using Class Types in Generics)

```ts
// 클래스 타입
// eg) 클래스 제약 + 팩토리 함수 리턴 타입
// 팩토리함수에서, 리턴값으로 클래스 타입을 반환하고 싶을떄
// + 추가로 동물 클래스의 하위 클래스만 제너릭 제약 조건
// eg) factory(Lion).[라이언 클래스의 타입들 ]
// eg) factory(Bee).[Bee 클래스의 타입들 ]
interface BeeKeeper {
  hasMask: boolean;
}
interface ZooKeeper {
  nameTag: string;
}
class Animal {
  constructor(public name: string) {}
}
class Bee extends Animal {
  keeper: BeeKeeper;
  constructor() {
    super("Bee");
    this.keeper = { hasMask: false };
  }
}
class Zoo extends Animal {
  keeper: ZooKeeper;
  constructor() {
    super("Zoo");
    this.keeper = { nameTag: "nameTag" };
  }
}
// 클래스 자체를 받는것 - 생성자 받기
// 생성자 키워드 new 라고 시그니처로 받고, 리턴으로 제너릭 타입
// 제너릭 제약은 Animal
function createInstance<A extends Animal>(cls: new () => A): A {
  return new cls();
}
createInstance(Zoo).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
// createInstance(BeeKeeper); // error 제너릭 제약
```
