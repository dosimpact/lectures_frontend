목적 : 데코레이터, 손쉬운 추가 기능
대상 :

```
1. 클래스 선언
2. 매서드
3. 접근자
4. 프로퍼티
5. 매개변수
```

- 데코레이터 팩토리 선언

```ts
// 0. 원형
// 데코레이터 팩토리
function color(value: string) {
  return function (target: unknown) {
    // 데코레이터
    // 'target'과 'value' 변수를 가지고 무언가를 수행합니다.
  };
}
```

## 데코레이터 합성 , 평가

- 표현 목적 : f(g(x)) 라는 합성함수

```
- 1. 단일식일 경우
@f @g x
- 2. 행
@f
@g
x
```

1. 데코레이터 평가 : top down
2. 함수 호출 : bottom up

### 데코레이터 평가 (Eval)

- JS코드를 해석할때, 데코레이터를 적용을 어떻게 하는가
- 1. 클래스 데코레이터 -> 클래스에  
     eg) @Module({})
- 2. 매개변수 데코레이터 -> 생성자  
     eg) @Inject() private readonly Xservice
- 3. 인스턴스,정적맴버 적용  
     eg) @IsString() name:string;

## 1. 클래스 데코레이터

- 목적 : 클래스의 정의를 관찰, 수정, 교체 등
- 적용 : 클래스의 생성자에 영향

### eg1)

- 클래스 객체 자체에 seal로 감싸고자 한다.

```ts
function sealed(constructor: Function) {
  console.log("@sealed evaluated");
  Object.seal(constructor); // 생성자 감쌈
  Object.seal(constructor.prototype); // 프로토타입 감쌈
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
    console.log("constructor() called");
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

new Greeter("dodo");
```

### eg2)

- 생성자 함수를 확장 하고자 한다.

```ts
// 생성자가 호출되고, 아래 데코레이터로인해 추가 프로퍼티

/* cf) 생성자 인터페이스
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
} */

/* cf) 
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T)
- 1) T extends 는 제너릭 제약이다.
적어도 뒤에 나오는 타입을 갖춘 타입을 받을 수 있다.

-2)  { new (...args: any[]): {} } 는 생성자 타입이다.
- new 라는 키워드가 특징이다.
- 생성자 함수 리턴 타입이 {} 이므로 빈 객체를 생성하는 부분
- 생성자의 매개변수는 ...args로 받는다. any[] 타입으로 ~

*/
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter2 {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter2("world"));
```
