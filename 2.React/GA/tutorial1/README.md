- [install](#install)
- [목표 설정](#목표-설정)
- [ReactGA initialize](#reactga-initialize)
- [page view](#page-view)
- [event](#event)
- [조회하기](#조회하기)
- [퍼널 만들기](#퍼널-만들기)
- [실습](#실습)

## install

```
yarn add react-ga
yarn add react-router-dom
```

## 목표 설정 

- 1. KPI 설정   
- 2. 퍼널 설정  


## ReactGA initialize

```js

ReactGA.initialize('UA-000000-01', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

```

## page view

goal : 사용자의 window.location을 구독 

```

```

## event

goal : 사용자의 커스텀 이벤트를 기록

## 조회하기


## 퍼널 만들기


## 실습

```
Job List Item Impression
Job List Item Click 
Job Detail Page Impression 
Job Detail Apply Click A Group
Job Detail Apply Click B Group 

```