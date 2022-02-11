# index

```ts
Partial<T>    : ?로 바꾸자.
Readonly<T>   : readonly 객체로 바꾸자
Record<K,T>   : 두 타입을 key-value로 바꾸자
Pick<T,K>     : type 에서 원하는것만 고르자
Omit<T,K>     : type 에서 원하는것만 빼자
Exclude<T,U>  : T - U
Extract<T,U>  : T intersection U
NonNullable<T>  : T 에서 null,undefined 제거
Parameters<T>             : 함수의 params 타입 추출
ConstructorParameters<T>  : 생성자 함수의 params 타입 추출
ReturnType<T>             : 리턴 params 타입 추출
InstanceType<T>           : 인스턴스 타입 추출
Required<T>               : ?를 제거 하자
ThisParameterType         : ⚠ 함수 타입의 this가 있나 보자?
OmitThisParameter         : ⚠ 함수 타입의 this를 제거
ThisType<T>               : ⚠ this의 타입을 가져오자 ? | GenericType을 다시 이용하자 ?
```

[https://typescript-kr.github.io/pages/utility-types.html](https://typescript-kr.github.io/pages/utility-types.html)

## Partial<T> , Required<T>

// eg) Partial<T> , Required<T>  
// Partial : 프로퍼티 optional 변경  
// Required : 프로퍼티 필수로 변경

```ts
// todo 정의
interface Todo {
  title: string;
  description: string;
}

// Partial 타입으로 일부만 가져 온다.
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

// tests
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//Required<T>
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; // 성공

const obj2: Required<Props> = { a: 5, b: "23" }; // 반드시 필요
```

## Readonly<T>

// 객체를 freeze 하고 싶을 때

```ts
interface TodoR {
  title: string;
}
// 프로퍼티를 readonly로 변경한다.
const todo: Readonly<TodoR> = {
  title: "Delete inactive users",
};

// 오류: 읽기 전용 프로퍼티에 재할당할 수 없음
// todo.title = "Hello";
```

// Object.freeze 을 표현 할 수 있다.  
// function freeze<T>(obj: T): Readonly<T>;

```ts
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

//  error TS2540: Cannot assign to 'name' because it is a read-only property.
const res = freeze({ name: "dodo" });
// res.name = "dr";
```

## Record<T>

```ts
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

// Record
// page의 문자리터럴을 key로
// pageInfo의 객체를 value로 매핑해준다.
const x: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};
```

## Pick<T>, Omit<T>

// 일부 프로퍼티만 선택
// 일부 프로퍼티만 제거

```ts
// Pick
interface Todo5 {
  title: string;
  description: string;
  completed: boolean;
}

// 일부 프로피티만 선택한다.
type TodoPreview = Pick<Todo5, "title" | "completed">;

const todo5: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Omit
interface Todo6 {
  title: string;
  description: string;
  completed: boolean;
}

type Todo6Preview = Omit<Todo6, "description">;

const todo6: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Exclude<T,U>, Extract<T,U>, NonNullable<T>

```ts
// Exclude<T,U>
// T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성합니다.
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Extract<T,U>
// T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성합니다.
type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void

// NonNullable<T>
// T에서 null 과 undefined를 제외한 타입을 구성합니다.
type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]
```

## Parameters<T>, ConstructorParameters<T>, ReturnType<T>, InstanceType<T>

// 목적 : 타입을 각각
// 함수 params, 생성자 params, return params 으로 타입을 구성, 인스턴스 타입으로 구성

```ts
// Parameters<T>
declare function f1(arg: { a: number; b: string }): void;
type Type0 = Parameters<() => string>; // []
type Type1 = Parameters<(s: string) => void>; // [string]
type Type2 = Parameters<<T>(arg: T) => T>; // [unknown]
type Type4 = Parameters<typeof f1>; // [{ a: number, b: string }]
type Type5 = Parameters<any>; // unknown[]
type Type6 = Parameters<never>; // never
// type Type7 = Parameters<string>;  // 오류
// type Type8 = Parameters<Function>;  // 오류

// ConstructorParameters<T>
// 생성자 함수 타입의 모든 매개변수 타입을 추출 ?
type CType0 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type CType1 = ConstructorParameters<FunctionConstructor>; // string[]
type CType2 = ConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]

// ReturnType<T>
// 함수 T의 리턴 타입으로 구성된 타입을 만듭니다.
declare function f1(): { a: number; b: string };
type RType0 = ReturnType<() => string>; // string
type RType1 = ReturnType<(s: string) => void>; // void
type RType2 = ReturnType<<T>() => T>; // {}
type RType3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type RType4 = ReturnType<typeof f1>; // { a: number, b: string }
type RType5 = ReturnType<any>; // any
type RType6 = ReturnType<never>; // any
// type RType7 = ReturnType<string>;  // 오류
// type RType8 = ReturnType<Function>;  // 오류

class C {
  x = 0;
  y = 0;
}
// eg) InstanceType<T>
// ⚠ ? 뭐가 다른거지 , 클래스 타입 vs 인스턴스 타입 ... ? prototype이 빠지는가?
// 생성자 함수 타입 T의 인스턴스 타입으로 구성된 타입을 만듭니다.
type TypeInst0 = InstanceType<typeof C>; // C
type TypeInst1 = InstanceType<any>; // any
type TypeInst2 = InstanceType<never>; // any
// type TypeInst3 = InstanceType<string>; // 오류
// type TypeInst4 = InstanceType<Function>; // 오류
```

## ThisParameterType,OmitThisParameter, ThisType

```ts
// 1.This 관련된 타입

// 1.1 ThisParameterType
// 함수의 this 매개변수 타입
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// 1.2 OmitThisParameter
// 함수 타입에서 'this' 매개변수를 제거
function toHex2(this: Number) {
  return this.toString(16);
}

// `bind`의 반환 타입은 이미 `OmitThisParameter`을 사용하고 있습니다, 이는 단지 예제를 위한 것입니다.
const fiveToHex2: OmitThisParameter<typeof toHex2> = toHex2.bind(5);

console.log(fiveToHex2());

// 1.3 ThisType<T>
// --noImplicitThis 로 컴파일
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // 메서드 안의 'this 타입은 D & M 입니다.
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj08 = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // 강하게 타입이 정해진 this
      this.y += dy; // 강하게 타입이 정해진 this
    },
  },
});

obj08.x = 10;
obj08.y = 20;
obj08.moveBy(5, 5);
```
