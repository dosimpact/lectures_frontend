# 01 setup


```js
npm init -y
npm install -D webpack@5.4.0 webpack-cli@4.5.0 webpack-dev-server@3.11.0  html-webpack-plugin@5.1.0
npm install faker@5.1.0
```

```js

npm install -D webpack webpack-cli webpack-dev-server  
npm install -D html-webpack-plugin
npm install -D css-loader style-loader file-loader url-loader

npm install faker

```


# source 설명


## 06

패키지 리스트 업

```
    "faker": "^5.1.0", // 시드 데이터 모듈 
    "html-webpack-plugin": "^4.5.0", // html에 js link  플러그인 
    "nodemon": "^2.0.6",        // 
    "webpack": "^5.3.2",        // 
    "webpack-cli": "^4.1.0",    //
    "webpack-dev-server": "^3.11.0" //
```
## 07

faker 코드 

## 09

webpack build 및 devserver 실행

## 10 

remote app 실행 환경 구축

## 12

### 웹팩으로 모듈 통합

Webpack v5 으로 통합
- Module Federation 기능 (2020.12) 나온 얼마 안된 기술   
- 마이크로 프론트의 기술에 대한 갈증을 해결해줄 수 있는?!


## 16,17

cart remote app 추가


## 19

shared 모듈 설정
shared 모듈 설정시 remoteApp의 isolation 환경에서 오류가 나온다.

## 020_-_mfe 

shared 모듈 설정시 remoteApp의 isolation 환경에서 오류가 나온다.
-> shared 모듈을 웹팩이 관리하기 떄문에 ?   
-> import 구문을 async로 변경하면 해결  

## 021_-_mfe

다른 버전의  faker.js 을 remoteApp 에서 사용한다면 , 다시 2번 모듈을 요청하게 된다.
( 다른 메이저 버전이라면 ... )

시멘틱 버전 중 캐럿을 사용하므로, major 버전이 같다면 1번만 모듈을 요청하게 된다.
( webpack 이 이런것들을 알아서 해주니 좋군 )

## 022_-_mfe

