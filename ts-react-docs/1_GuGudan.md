# 1

## useRef 타이핑

- useRef를 이용해서, 랜더링에 걸리지 안도록 객체를 참조한다.
- JSX 오브젝트를 참조할 것이다. ( 제너릭 이용)
- HTMLElement
- ! 으로 null 값이 추론되어도 단언을 할 수 있다.

```ts
  const InputRef = useRef<HTMLInputElement>(null);
  ...

interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }

```
