- [Svelte.js 입문 가이드](#sveltejs-입문-가이드)
- [개요](#개요)
- [시작하기](#시작하기)

# Svelte.js 입문 가이드

https://www.inflearn.com/course/%EC%8A%A4%EB%B2%A8%ED%8A%B8-%EC%9E%85%EB%AC%B8-%EA%B0%80%EC%9D%B4%EB%93%9C/dashboard

# 개요
1. 강사 소개 및 Svelte 통계

2. Svelte 특징 분석
https://svelte.dev/ 

장단점

```js
1.Write less code
Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript

높은 가독성 유지. 
개발 시간 단축.
쉬운 리팩토링
쉬운 디버깅
더 작은 번들 (SPA 최적화)
낮은 러닝 커브  

---

2.No virtual DOM
Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast  

No Diffing  
No Overhead  
빠른 성능(퍼포먼스)  

*가상돔 생성, 비교, 갱신 없이, 바로 RealDOM을 건드리게 된다.  

---

3.Truly reactive
No more complex state management libraries — Svelte brings reactivity to JavaScript itself

*reactive : application의 상태 변화가 DOM에 자동 반영되는 현상.
Framework-less VanliaJS
Only use `devDependencies` : 개발 의존성 모듈로만 관리해도 동작한다.  
명시적 설계(창의적 작업) : 

--- example)
<script>
	let name = 'world!';
</script>
<button on:click={()=>{name=name+"dodo"}} >
	change!
</button>
<h1>Hello {name}!~</h1>


단점

    1. 낮은 성숙도(생태계)
    2. CDN 미제공 (런타임에서 작동하지 않기때문, 컴파일러가 반드시 필요)
    3. IE 지원 X

```

3. REPL 사용법

4. VS Code에서 Svelte 프로젝트 시작하기

템플릿 : 
https://github.com/sveltejs/template
https://github.com/sveltejs/template-webpack

```
npx degit "sveltejs/sapper-template#webpack" my-app

```

5. NPX 설치 확인

# 시작하기

1. 선언적 렌더링
```

리액티브 변수 선언
단방향 바인딩 데이터 
양방향 바인딩 데이터
이벤트 바인딩

```
2. 조건문과 반복문

3. 이벤트 핸들링

4. 컴포넌트

5. 스토어

6. Todo 예제 만들기