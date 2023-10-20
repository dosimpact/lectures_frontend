
- [design patterns](#design-patterns)
  - [Goal](#goal)
- [Component Layer Design](#component-layer-design)
  - [Goal](#goal-1)
  - [상태관리](#상태관리)
  - [Server State](#server-state)
    - [responsibility](#responsibility)
    - [hook controller](#hook-controller)
    - [api endpoints](#api-endpoints)
- [Broaden your design perspective](#broaden-your-design-perspective)
- [ref)](#ref)


# design patterns

## Goal


--- 

# Component Layer Design


## Goal

컴포넌트간에 역할 및 책임들을 정리할 수 있다.  


## 상태관리

상태관리는 서버상태관리와 클라이언트상태관리로 분리



## Server State

라이브러리 : react-query

### responsibility

cache ( stale time , TTL ).  

    - 새로 받아온 데이터는 캐싱처리. 
    - TTL이 끝난 데이터는 새로운 데이터를 받아오면 교체. 

refresh (cache invalidate).   

    - 서버의 mutation을 요청하면, 바뀐 부분에 한해서 데이터를 stale 처리 후 refresh 되어야 한다. 

prefetch   

    - eg) 대시보드에서 특정 캠페인에 mouse hover 를 하면, 미리 캠페인 세부정보를 받아온다. 

### hook controller

UniformResource Query
    cache/refresh/prefetch

UniformResource Mutation 
    mutation , call refresh 

Query/Mutation
    loading , error handling
    Error Feedback ( consume UI ) 

### api endpoints

apis.js 단일파일에서 모든 endpoint를 관리한다.  

    eg) blog api, settlemet api, reporting api,

react-query 에서 사용하는 키 또한, apis.js에서 관리한다.  

    eg) campaign-api key : [ 'campaign' , '1' ] 



# Broaden your design perspective

설계의 시각 넓히기   
- 1. 백앤드의 컴포넌트 설계 및 디렉터리 구조들을 고려해보면 좋을 것 같다.
- 2. 시스템 아키텍쳐 디자인 공부


# ref)  

https://blog.logrocket.com/react-component-design-patterns-2022/ 