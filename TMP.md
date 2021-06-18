## 2

### 2.1

- array.includs는 es2016문법이라 , tsconfig lib에 es2016이 없다면 애러

### 2.2

- SFC -> React.FunctionComponent 라고 변경되었다.
  (SFC (Deprecated))
- 인터페이스 파일은 따로 보관하는것이 깔끔

- npm i -D webpack-dev-server
- package.json 변경

```js
scripts:{
    "dev":"webpack-dev-server --hot"
}
```

- webpack.config.js 변경

```
output:{
    publicPath:"/dist"
}
```

### 2.3

- useRef 3종류
- 1. RefObject를 리턴
- 2. MutableObject를 리턴

- 어떻게 오버로딩을 바꿀까

```
- useRef<number> 는 -> readonly 오버로딩    <T>
- useRef<number | null> 은 -> mutable 한 함수로 오버로딩 <T|null>
// 제너릭을 잘 선택해서, 원하는 함수를 오버로딩 해야함
// <T|null> 또한 하나의 타입이다. T만 적으면 더 큰 범위의 <T> 을 선택
```

- NODEJS의 setTimeout대신 window의 setTimeout이 되어야 함
- 1. as unknown as number 라고 강제 타입 변환
- 2. window.setTimeout 이라고 적기, 리턴값이 number로 된다.

### 2.4

- [] 빈배열은 naver[]로 추론된다.
- [] as number[] 로 단언가능

## 3

### 3.1

- 객체 -> const

```js
const scores = { R: -1, S: 0, P: 1 };
//-> typing이 number로 된다.
const scores = { R: -1, S: 0, P: 1 } as const;
//-> typeing이 readonly + literal 로 변경됨
```

- keyof + typeof 이용
- 객체 -> const 후, key만 유니온 type 으로 가져오고 싶다.
- 객체 -> const 후, value만 유니온 type 으로 가져오고 싶다.

```js
const scores = { R: -1, S: 0, P: 1 } as const;
type keysOfScores = keyof typeof scores // R|S|P
type valuesOfScores = keyof scores[keyof typeof scores] // -1|0|0
```

- !단언으로 mapping에 있어 null 제거하기

```js
const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['바위', '가위', '보']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!
}
```

### 3.2

- useMemo
- 리랜더링 될때마다, 값을 유지하고 싶다면 useMemo사용!

```
 const lottoNumber = useMemo(getNumber(),[])
```

- FunctionComponent
- 별명 : FC
- 버려진 멸병 : SFC, StatelessComponent ( useState 훅때문에 더이상 stateless하지 않다.)

### 3.3
