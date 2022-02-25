목적 : 새로운 타입을 계속 만들어 내기 보다는 원시타입을 조합해서 만들자  
두가지 방법 : 유니온과 교차

## 1 유니언 타입 (Union Types)

- | OR 문법을 사용해서 조합하자.

### 1.1 string | number

- 원시타입의 조합

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedString = padLeft("Hello world", "  ~~ ");
console.log(indentedString);
```

### 1.2 Fish | Bird

- 여기서는 공통된 프로퍼티(교집합)만 가능하다.

```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// declare function getSmallPet(): Fish | Bird;

function getSmallPet(): Fish | Bird {
  return { fly: () => {}, layEggs: () => {}, swim: () => {} };
}

let pet = getSmallPet();
pet.layEggs();
// 두 개의 잠재적인 타입 중 하나에서만 사용할 수 있습니다.
// pet.swim();
```

### 1.3 원시타입 + 객체타입의 유니온

- 객체 공통 속성 교집합을 반영
- 객체 프로퍼티 state = "loading" | "failed" | " success " 는 유니온이 된다.
- switch 구문을 통해서, 타입을 좁혀 나갈 수 있다.

```ts
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// 위 타입들 중 단 하나를 대표하는 타입을 만들었지만,
// 그것이 무엇에 해당하는지 아직 확실하지 않습니다.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

type NetworkStateKey = keyof NetworkState;

function networkStatus(state: NetworkState): string {
  // 현재 TypeScript는 셋 중 어떤 것이
  // state가 될 수 있는 잠재적인 타입인지 알 수 없습니다.

  // 모든 타입에 공유되지 않는 프로퍼티에 접근하려는 시도는
  // 오류를 발생시킵니다.
  // state.code;

  // state에 swtich문을 사용하여, TypeScript는 코드 흐름을 분석하면서
  // 유니언 타입을 좁혀나갈 수 있습니다.
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // 여기서 타입은 NetworkFailedState일 것이며,
      // 따라서 `code` 필드에 접근할 수 있습니다.
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
```

## 2 교차 타입 (Intersection Types)

- & (AND) 문법을 이용해서 조합하자.
- 객체에선 여러 타입을 합치는 과정 ( 직관과 다르다)

### 2.1 ArtworksData & ErrorHandling

```ts
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

// 이 인터페이스들은
// 하나의 에러 핸들링과 자체 데이터로 구성됩니다.
type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  response.artists;
  response.error;
  response.success;

  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};
```

### 2.2 ⚠️ 교차를 통한 믹스인

- 목적 : 두 객체를 하나로 합치고 싶을때~

```ts
// eg) 두 객체를 extends<T1,T2>
// 단, 함수는 T1, T2 객체의 key를 알아내어, 공통된 key만  허용되어야 한다.

// Person , loggable 객체를 합칠 예정임
class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  // JS에서 클래스의 맴버 함수는 prototype 에서 확인 가능하다.
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

// 두 객체를 받아 하나로 합칩니다.
// 단 조건을 합칠때, 함수 제너릭에 의해 First와 Second의 key 만 허용된다.
function extend<First extends {}, Second extends {}>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

const jim = extend(new Person("Jim"), ConsoleLogger.prototype);
jim.log(jim.name);
```
