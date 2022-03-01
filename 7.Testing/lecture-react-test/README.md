# 인프런 - 따라하며 배우는 리액트 테스트

ref : https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8/lecture/92045?tab=curriculum&volume=0.39&speed=2

- [인프런 - 따라하며 배우는 리액트 테스트](#인프런---따라하며-배우는-리액트-테스트)
  - [Goal](#goal)
- [1.Section 리액트 테스트에 대해서](#1section-리액트-테스트에-대해서)
  - [Testing Library](#testing-library)
  - [documents](#documents)
- [2.Section 리액트 테스트를 위한 모듈 설치 및 설정](#2section-리액트-테스트를-위한-모듈-설치-및-설정)
- [3.Section 간단한 앱 만들며 테스트](#3section-간단한-앱-만들며-테스트)
- [4.Section 더 나은 리액트 테스트를 위해 참고할 것들](#4section-더-나은-리액트-테스트를-위해-참고할-것들)
- [5.Section 여행 상품 판매 앱 만들기](#5section-여행-상품-판매-앱-만들기)
- [6.Section React Context를 이용한 상품 가격 처리](#6section-react-context를-이용한-상품-가격-처리)
- [7.Section 주문 요약, 주문 완료 페이지 만들기](#7section-주문-요약-주문-완료-페이지-만들기)

---

## Goal

- [ ] testing tools 
- [ ] test with class components
- [ ] test with function components
- [ ] test with redux (global state)
- [ ] test with hooks

---

# 1.Section 리액트 테스트에 대해서


## Testing Library

React Testing Library : React 구성요소 test api   

    DOM Testing Library 위에 구축  
    Airbnb에서 만든 Enzyme 대처  

        Enzyme > Implementation Driven Test  
        React Testing Library > Behavior Driven Test  
    

DOM Testing Library : DOM(Node) test api 

    https://testing-library.com/docs/


Jest : Javascript Testing Library  

    facebook made
    ```
        // 파일 이름 규칙
        {filename}.test.js , {filename}.spec.js , files in "tests" folder
    ```


## documents 

https://testing-library.com/docs/queries/about/  


```
Type of Query	0 Matches	1 Match	    >1 Matches	        Retry (Async/Await)

Single Element				

getBy...	Throw error	Return element	Throw error	No
queryBy...	Return null	Return element	Throw error	No
findBy...	Throw error	Return element	Throw error	Yes

Multiple Elements				

getAllBy...	    Throw error	    Return array	Return array	No
queryAllBy...	Return []	    Return array	Return array	No
findAllBy...	Throw error	    Return array	Return array	Yes

```

# 2.Section 리액트 테스트를 위한 모듈 설치 및 설정  

```
ESLint Setting 

	npm install eslint-plugin-testing-library eslint-plugin-jest-dom 

	remove - package.json eslint-settings key value
	
	.eslintrc.js
	
	module.exports = {
	  plugins: ["testing-library", "jest-dom"],
	  extends: [
	    "eslint:recommanded",
	    "react-app",
	    "react-app/jest",
	    "plugin:testing-library/react",
	    "plugin:jest-dom/recommended",
	  ],
	};
```

# 3.Section 간단한 앱 만들며 테스트  

# 4.Section 더 나은 리액트 테스트를 위해 참고할 것들  

# 5.Section 여행 상품 판매 앱 만들기  

# 6.Section React Context를 이용한 상품 가격 처리  

# 7.Section 주문 요약, 주문 완료 페이지 만들기  
