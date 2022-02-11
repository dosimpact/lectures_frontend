## 41.3 디바운스와 스로틀

## ref

[https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa](https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa)

## 목적

목적 : 특정 이벤트는 필요이상으로 발생되어, 메인스레드에 영향을 미칠만큼의 핸들러가 작동되면 성능 이슈
그래서 이벤트를 적절하게 실행

디바운싱 : 연이어 호출되는 함수 중, 마지막 호출되는 함수만 실행하도록 함
쓰로틀링 : 마지막 함수 호출 후, 일정시간동안 함수가 호출되지 않도록 함

## 디바운싱 구현

- 알고리즘  
  setTimeout 으로 0.2초뒤에 함수를 호출하도록 한다.  
  만약에 0.2가 지나지 않아 또 함수가 호출요청이 오면, 기존 요청은 취소하고
  setTimeout 으로 함수를 다시 시작한다.

```js
var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    console.log("여기에 ajax 요청", e.target.value);
  }, 200);
});
```

## 쓰로틀링 구현

- 알고리즘  
  함수 요청이 오면, setTimer로 0.2 초뒤 실행한다.  
  0.2초 전에 함수 요청이 또 오면, 무시한다.
  0.2초 후 함수가 실행되면 다시 함수 요청을 받을 수 있는 상태로 만든다.

```js
var timer;
document.querySelector("#input").addEventListener("input", function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      console.log("여기에 ajax 요청", e.target.value);
    }, 200);
  }
});
```

## 클로저 버전의 디바운스, 쓰로틀링 구현 (브라우저)

```ts
export const throttling = (cb: Function, ms: number) => {
  // ✅ 타이머 자유 변수 설정
  let timer: number | null = null;

  return (e: any) => {
    // ✅ 타이머가 없는경우만 실행시킨다. 그외 이벤트는 무시
    if (!timer) {
      timer = window.setTimeout(() => {
        timer = null;
        if (cb) {
          cb(e);
        }
      }, ms);
    }
  };
};
// cb는 input element에 거는 핸들러 함수라고 가정하자.
// onChange = {(e)=>{}} 에서 cb는 (e)=>{} 가 된다.
// 이를 디바운싱 미들웨어 같은? 함수로 감싸보자.
export const debouncing = (cb: Function, ms: number) => {
  // ✅ 타이머 자유 변수 설정
  let timer: number | null = null;

  // e는 이벤트 객체이다.
  return (e: any) => {
    // ✅ 타이머가 있는 경우 초기화 하여
    if (timer) {
      clearTimeout(timer);
    }
    // ✅ 타이머 + 콜백함수를 준비한다.
    timer = window.setTimeout(() => {
      timer = null;
      // 원래 부르려고 했던 함수를 불러주자
      if (cb) {
        cb(e);
      }
    }, ms);
  };
};
```

```tsx
<input
  className="tickerInput"
  type="text"
  placeholder="코드,기업명을 입력해주세요"
  autoComplete="off"
  {...register("term", { required: true })}
  // ✅ onChange에 디바운스 적용
  onChange={debouncing((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("term", e.target.value);
  }, 100)}
  // ✅ onKeyDown에 디바운스 적용
  onKeyDown={debouncing((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onKeyDownEnter) {
      onKeyDownEnter(e);
      setValue("term", "");
    }
  }, 100)}
></input>
```
