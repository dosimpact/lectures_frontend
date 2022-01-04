# 리액트 테스트 정리

---

## 1. 리액트 테스트에 대해서

### 테스팅의 이유

- 안정적인 어플리케이션으로 애러 이슈 최소화
- unit 테스트로 이슈 지점 파악으로 디버깅 시간 단축화
- 리팩토링을 위한 발판

### React Testing Library

- React Testing Library : React + DOM Testing Library.
- DOM Testing Library : DOM 객체 테스팅 솔루션.

```
npm install -D @testing-library/react
```

### DOM 이란?

Document Object Model 이다.

- 문서객체모델
- DOM은 XML,HTML 문서의 각 항목을 계층적으로 표현하여, 생성, 변형, 삭제 할 수 있도록 돕는 인터페이스 입니다.

웹페이지 빌드 과정 ( CRP )

- Critical Rendering Path.
- 웹 브라우저가 HTML 문서를 읽고, 스타일을 입히고 뷰포트에 표시하는 과정

### Jest 란 ?

Facebook에서 만든 JS 테스팅 라이브러리

- 단위 테스트 위해서 이용한다.

Jest 가 테스트 파일을 찾는 방법

- 1. {filename}.test.js
- 2. {filename}.spec.js
- 3. tests 폴더 이름을 가진 하위 파일들

### 테스트 함수 - 쿼리함수 문서 살펴보기

@testing-library/react": "^12.1.2 의 문서  
https://testing-library.com/docs/react-testing-library/intro/

Core API - Queries 섹션을 살펴보자.  
https://testing-library.com/docs/queries/about/.

쿼리 함수란 ?

- 페이지 안 (스크린)에서 요소를 찾기 위한 함수이다.
- get , find , query 가 있다.
- 차이점은 요소가 없을때 오류 여부, promise 여부 등

```
getBy..
일치하는 요소를 반환한다.
- 없다면 오류
- 2개 이상이라면 오류

getByAll..
- 2개 이상의 요소를 반환

queryBy..
쿼리에 대해 일치하는 노드를 반환
- 없다면 null 을 반환 (오류는 없다.)
- 2개 이상이라면 오류

findBy..
- 요소가 발견되면 Promise를 반환 한다.
- getBy 와 waitFor 을 합친것으로 보면 된다.

waitFor
- 일정 시간동안 기다려서

ref:
https://testing-library.com/docs/queries/about/#types-of-queries

```

---

## 2. 간단한 앱 만들며 테스트

## 3. 더 나은 리액트 테스트를 위해 참고할 것들

## 4. 여행 상품 판매 앱 만들기

## 5. React Context를 이용한 상품 가격 처리

## 6. 주문 요약, 주문 완료 페이지 만들기

## ref

따라하며 배우는 리액트 테스트

https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8/dashboard
