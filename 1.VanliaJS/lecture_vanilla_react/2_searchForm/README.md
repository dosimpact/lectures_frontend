## 목적

- MVC 의 기본 폴더 구조를 보자.

## MVC 패턴

model, view, controller 각각의 책임 범위가 있다.

- model : globalState 관리  
  Store.js, storage.js
- view : html 및 이벤트 관리
  views/\*.js
- controller : 이벤트 관리

## start

```
npx lite-server --baseDir=./1_vanlia
```
