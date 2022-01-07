# Practice

웹팩 환경설정과 다음의 로더 및 플러그인을 실습합니다.

- [x] webpack config

  - [x] webpack-merge

- [x] webpack 로더

  - [x] 커스텀 로더
  - [x] css-loader
  - [x] style-loader
  - [x] scss-loader
  - [x] file-loader
  - [x] url-loader
  - [x] babel-loader

- [x] webpack 플러그인

  - [x] 커스텀 플러그인
  - [x] BannerPlugin
  - [x] DefinePlugin
  - [x] HtmlWebpackPlugin
  - [x] CleanWebpackPlugin
  - [x] MiniCssExtractPlugin
  - [x] Webpack Bundle Analyzer

- [x] 바벨

  - [x] 커스텀 플러그인
  - [x] 바벨 플러그인 리스트 확인
  - [x] 바벨 프리셋 리스트 확인
  - [x] 폴리필 설정 방법
  - [x] 웹팩 통합 (babel-loader)

- [ ] eslint

  - [x] npx eslint --init ==> .eslintrc 생성
  - [x] rules 리스트 확인 https://eslint.org/docs/rules/
  - [x] extends로 추천규칙 셋 추가

- [ ] prettier(formatter)

  - [x] prettier 설치 및 .prettierrc 환경 설정 파일 생성
  - [x] eslint-config-prettier, eslint-plugin-prettier 설치 후 린터 통합 적용

- [ ] webpack Dev Server
  - [ ] 옵션( hot reload )
  - [ ] 미들웨어

cf) feedback

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

- version align

```js
  "devDependencies": {
    "cross-env": "^7.0.3",
    "css-loader": "^3.4.1",
    "file-loader": "^5.0.2",
    "style-loader": "^1.1.2",
    "html-webpack-plugin": "^3.2.0",
    "clean-webpack-plugin": "^3.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-merge": "^5.8.0"
  }
```

```

yarn add -D @babel/cli@^7.15.7 @babel/core@^7.15.5
yarn add -D @babel/plugin-transform-arrow-functions
yarn add -D @babel/plugin-transform-block-scoping
yarn add -D @babel/plugin-transform-strict-mode
yarn add -D @babel/preset-env

yarn add -D eslint
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier


```
