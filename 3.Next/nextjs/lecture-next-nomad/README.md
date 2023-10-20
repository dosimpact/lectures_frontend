## 1 FRAMEWORK OVERVIEW

install

```js
npx create-next-app@latest --typescript
```

## Concepts

### pages 디렉터리 기반의 라우팅 제공

    index.js가 디렉터리 자체를 가르키고
    about.js는 디렉터리의 파일이라고 보면된다.
    이런 디렉터리 구조가 그대로 url 라우팅에 반영이 된다.
    *pages의 모듈들은 export default 을 반드시 해주어야 하는 규칙이 있다.

### SSR - Server Side Rendering

    [Pre-Render]
    리액트와 다르게 Next에서는 Pre-Render 기능을 제공해 준다.
    리액트는 div#id 로부터 요소를 그린다.
    반대로 Next는 이미 초기 화면이 HTML이 완성되어 있다.

    [hydrate]
    정적인 HTML 파일을 리액트 컴포넌트로 만들어주는 작업
    동적인 페이지가 된다.

`ReactDOM.render(element, container[, callback]) `

컨테이너 DOM에 리액트 엘리먼트를 렌더링하는 함수이다.  
이 render함수는 컨테이너의 자식으로 리액트 컴포넌트를 넣어주는데,  
기존에 이미 렌더링 된 리액트 컴포넌트가 있다면 새로 렌더링 하는게 아니라 업데이트만 해준다.  
그리고 렌더링이 완료되면 세번쨰 인자로 전달된 콜백이 실행되게 할 수 있다.

즉 ReactDom의 render메소드는 컴포넌트를 렌더링한 후에 콜백을 실행한다.

반면에, ReactDom에는 hydrate라는 메소드도 존재한다.

`ReactDOM.hydrate(element, container[, callback])`
보면 메소드 모양이 render와 똑같다.  
hydrate는 렌더링은 하지 않고 이벤트 핸들러만 붙여준다.  
서버사이드렌더링을 해서 이미 마크업이 채워져있는 경우에는 굳이 render 메소드를 사용할 필요가 없다.  
SSR을 하는 경우에는 hydrate로 콜백만 붙여야 한다.

# NextJS - Features

- [ ] styling

  - [ ] CSS Module
  - [ ] Styles JSX
  - [ ] styled-components

- [ ] next/link,next/router
- [ ] next/head
- [ ] SSR
- [ ] SSG
- [ ] overrideComponent
      ` _app.js, 404.js`

## Router

useRouter

```js

```

## Styles

- global.css 파일은 \_app.js 에만 임포트 가능
- pages, components 에는 css.module 만 가능

### CSS 모듈 패턴

특징

    CSS 클래스 이름 중복으로 인한 스타일 충돌 문제 해결
    2개의 파일을 관리해야 한다. 또한 많은 클래스 이름을 기억하긴 쉽지 않다.

###

## Redux

### ref

리액트의 hydration이란?  
https://simsimjae.tistory.com/389
