# 1

- 구구단 Exmaple을 작성하자.  
목표  
- useState 사용, useRef 사용하여 input에 포커스  


## useRef 타이핑 

- useRef를 이용해서, HTMLElement 객체를 참조한다.  
- JSX 오브젝트를 참조할 것이다. (제너릭 이용)
- !타입단언 :  null 값이 추론되어도 단언을 할 수 있다.

```ts
  const InputRef = useRef<HTMLInputElement>(null);
  ...

interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }

```

## 디버깅  

- onSubmit 핸들러 함수가 호출이 안된다.    
- class컴포넌트에서, 맴버함수와 화살표 맴버 함수의 차이를 관찰 해보기  


```js

  mySubmit3(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state);
  }// 안먹힘
  mySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };// 먹힘

<form onSubmit={this.onSubmit}>
```
