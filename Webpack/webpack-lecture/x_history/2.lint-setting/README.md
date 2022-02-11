# Practice

웹팩 환경설정과 다음의 로더 및 플러그인을 실습합니다.

- [x] webpack config

  - [x] webpack-merge
    - 분리된 prod,dev 환경을 공통 설정과 통합 합니다.
  - [ ] webpack- v4 to v5
    - 마이그레이션 연습

- [x] webpack 로더

  - [x] 커스텀 로더
    - 나만의 로더를 제작
  - [x] css-loader
    - css 파일 처리 (raw-loader 대처 가능)
  - [x] style-loader
    - html 로드시 스타일 로딩
  - [x] file-loader
    - 이미지 등의 파일 require 처리
  - [x] url-loader
    - base64 변환 처리
  - [x] babel-loader
    - webpack에서 바벨기능 처리
  - [x] sass-loader
    - scss 파일 처리

- [x] webpack 플러그인

  - [x] 커스텀 플러그인
    - 나만의 플로그인 로직
  - [x] BannerPlugin
    - 번들결과 파일 상단의 코멘트
  - [x] DefinePlugin
    - 환경변수 설정
  - [x] HtmlWebpackPlugin
    - Html에 js 파일 링크
  - [x] CleanWebpackPlugin
    - 번들결과 클리닝
  - [x] MiniCssExtractPlugin
    - css 최적화
  - [x] Webpack Bundle Analyzer
    - 번들링 되는 JS 파일릐 크기를 분석

- [x] 바벨

  - [x] 커스텀 플러그인
  - [x] 바벨 플러그인 리스트 확인
  - [x] 바벨 프리셋 리스트 확인
  - [x] 폴리필 설정 방법
  - [x] 웹팩 통합 (babel-loader)
  - [x] SASS 처리 (sass-loader)
  - [ ] JSX 처리
  - [ ] Typescipt(TSX) 처리

- [ ] eslint

  - [x] npx eslint --init ==> .eslintrc 생성
  - [x] rules 리스트 확인 https://eslint.org/docs/rules/
  - [x] extends로 추천규칙 셋 추가

- [x] prettier(formatter)

  - [x] prettier 설치 및 .prettierrc 환경 설정 파일 생성
  - [x] eslint-config-prettier, eslint-plugin-prettier 설치 후 린터 통합 적용

- [ ] webpack Dev Server
  - [ ] 옵션( hot reload )
  - [ ] 미들웨어

### cf) feedback

- use는 뒤에서부터 처리된다.
- css의 url 문법도 require & import 처럼 다른 모듈을 필요로 하는 문법이다.  
   이를 file-loader가 처리한다.  
   경로설정역시 options에서 해결해야할 문제

```
   background-image: url(../assets/bg.png);
```

- css-loader vs style-loader  
   css-loader는 css을 파일로 바라보고 처리하는 모듈이다.  
   js 파일을 만들면서 import "app.css" 을 처리.  
   또한 css안의 url() 을 require 문으로 파일을 처리.  
   그래서 raw-loader 로 대처 가능하다.

  > 여기까지는 스타일 파일만 처리했다.

  style-loader 는 html 문서 로드시 스타일관련 파일을 불러오도록 만들어준다.  
   즉, html에 js를 로딩할때 CSS도 불러오도록 만든다.  
   또한 css파일을 추출한 경우 MiniCssExtractPlugin.loader는
  html에 css:link 구문을 삽입시켜준다

- 비어있는 .babelrc 설정파일은 오류를 낸다.
  또한 .babelrc 와 babel.config.js 는 다르다 ( 필요시 찾아볼 것)

- esLint의 규칙은 다음에서 확인 가능하다. https://eslint.org/docs/rules/

- sass 로더 추가하기  
  그냥 sass-loader를 설치하면 12버전인데 이는 webpack v5 이상이 필요하다.  
  webpack v4 환경에서는 sass-loader@^8.0.0 버전으로 설치하자  
  그러면 node-sass 가 필요하다는 오류가 나온다. 설치하자  
  node-sass 7버전이 깔리는데 node-sass@^4.0.0 버전으로 설치

- version align  
  webpack v4와 v5는 정말 많이 바뀌었다.  
  패키지 매니저로 플러그인 설치시 웹팩과의 버 align이 제대로 동작 안함  
  그래서 미리 프리셋 버전을 사용하거나 하나식 버전을 맞추어 나가자.

```json
// package.json
{
  "name": "0_practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "webpack": "cross-env NODE_ENV=development webpack --config webpack/webpack.dev.js",
    "webpack:prod": "cross-env NODE_ENV=production webpack --config webpack/webpack.prod.js --progress",
    "lint": "eslint src/test.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "core-js": "2"
  },
  "devDependencies": {
    "@babel/cli": "^7.15.7",
    "@babel/core": "^7.15.5",
    "@babel/plugin-transform-arrow-functions": "^7.16.7",
    "@babel/plugin-transform-block-scoping": "^7.16.7",
    "@babel/plugin-transform-strict-mode": "^7.16.7",
    "@babel/preset-env": "^7.16.7",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.3",
    "css-loader": "^3.4.1",
    "eslint": "^8.6.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.0.0",
    "prettier": "^2.5.1",
    "rimraf": "^3.0.2",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.1.2",
    "url-loader": "^4.1.1",
    "webpack": "^4.46.0",
    "webpack-bundle-analyzer": "^4.5.0",
    "webpack-cli": "^3.3.10",
    "webpack-merge": "^5.8.0"
  }
}
// .eslintrc.js

// .prettierrc

// babel.config.js

// webpack.common.js

// webpack.dev.js

// webpack.prod.js
```
