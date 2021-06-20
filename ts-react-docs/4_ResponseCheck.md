# 4

### 1. DOM 의 클래스 조작 방법

1. useState로 변수를 만들어서, <div class={state}/> 로 전달하기
   ( react에 의해 컨트롤 되는 방식 가상둠 변경 )

2. useRef 로 class를 조작하는 방식
   screenRef.current?.classList.add("ready");
   ( react에 의해 컨트롤 되는 방식 ? )

3. querySelector를 이용해서 DOM 을 직접 조작하는 방법
   ( react가 아닌, uncontrolled 방식 )

### useRef 3종류

- 1. RefObject를 리턴
- 2. MutableObject를 리턴
- 어떻게 오버로딩을 바꿀까

```ts
- useRef<number> 는 -> readonly 오버로딩    <T>
- useRef<number | null> 은 -> mutable 한 함수로 오버로딩 <T|null>
// 제너릭을 잘 선택해서, 원하는 함수를 오버로딩 해야함
// <T|null> 또한 하나의 타입이다. T만 적으면 더 큰 범위의 <T> 을 선택
```

- NODEJS의 setTimeout대신 window의 setTimeout이 되어야 함
- 1. as unknown as number 라고 강제 타입 변환
- 2. window.setTimeout 이라고 적기, 리턴값이 number로 된다.

- eg) setTimeoutRef, timeRef

```ts
const timerRef = useRef<number>();
const startTime = useRef<number>();
const endTime = useRef<number>();

const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  // state 대기중 - 준비상태로 두고, timer 설정
  if (state === "waiting") {
    setState("ready");
    setMent("준비..");
    const timer = window.setTimeout(() => {
      setState("now");
      setMent("클릭!!");
      startTime.current = Date.now();
    }, Math.floor(Math.random() * 1000 + 1000));
    timerRef.current = timer;
  }
  // 너무 빨리 누른 경우
  if (state === "ready") {
    setState("waiting");
    setMent("너무빨리 눌렀음, 시작하려면 다시 클릭");
    clearTimeout(timerRef.current);
  }
  // 적절하게 누른 경우
  if (state === "now") {
    endTime.current = Date.now();
    setTimeLogger((t) => [...t, endTime.current! - startTime.current!]);
    setState("waiting");
    setMent("시작하려면 클릭");
  }
};
```

- [] 빈배열은 naver[]로 추론된다.
- [] as number[] 로 단언가능
