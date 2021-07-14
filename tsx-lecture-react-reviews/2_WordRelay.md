# 2

- 끝말잇기
- useCallback 사용해서, 최적화 해보기
  ( 모든 handler 함수에 적용, [] 캡처에 들어갈 변수 고민! )

## useCallback

- 목적 : 컴포넌트 함수가 리랜더링될때, 같은 함수는 또 만들필요 없음
- 타이핑 : 내부 콜백함수를 맞춰야 한다.
- [] 안의 캡처는, 함수안에서 변경되는 부분들 넣기
- eg) useState 캡쳐 변수

```ts
const handleSubmit = useCallback(
  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  },
  [word, ans]
);

const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  setAns(e.currentTarget.value);
}, []);
```

- usecallback 제너릭 타이핑

```ts
const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
  (e) => {
    e.preventDefault();
  },
  [word, value]
);
```
