# Babel


### 바벨 목적  
- 브라우저마다 스펙이 달라, JS코드는 동일하게 작동하지 않을 수 있다.
- 크로스 브라우징 이슈를 해결해 주는것이 바벨이다.
- ECMAScript2015+,Typescript,JSX 등 다른언어를 포함하여 모든 브라우저에서 동작하도록 하는것이 목표


### 트랜스 파일 vs 빌드  
- 추상화 수준이 다른 변환은 빌드
- 트랜스 파일은 추상화수준이 같다. (TS->JS,JSX->JS) 이므로 여전히 코드를 읽을 수 있다.

### 바벨의 단계

1. 파싱 Parsing : 토큰화 이후 추상 구문 트리 (AST) 로 변환
2. 변환 Transforming : AST를 변환 (eg) const -> var로)
3. 출력 Printing : 파일로 출력


## 바벨 설치 

```
// 바벨 코어, 명령어를 위한 cli 설치
npm install -D @babel/core  @babel/cli
```

## 바벨 실행 

```
// 바벨 실행
>npx babel app.js
const alert = msg => window.alert(msg);

// 바벨 실행 + 플러그인
npx babel app.js --plugins ./myplugin.js
```
## 01 플러그인

바벨은 파싱과 출력만 담당하고 변환 작업은 다른 녀석이 처리하데 이것을 "플러그인" 이라고 부른다.


### 플러그인 - 커스텀 플러그인 작성

커스텀 플러그인 작성    
eg) 식별자를 출력하고, 뒤집어주는 플러그인
```js
// myplugin.js:
module.exports = function myplugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        // 바벨이 만든 AST 노드를 출력한다
        console.log("Identifier() name:", name);

        // 변환작업: 코드 문자열을 역순으로 변환한다
        path.node.name = name.split("").reverse().join("");
      },
    },
  };
};

```

eg) const 를 var로 바꿔주는 플러그인
```js
// myplugin2.js:
module.exports = function myplugin() {
  return {
    visitor: {
      // https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-block-scoping/src/index.js#L26
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind); // const

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};

```


### 플러그인 -  @babel 플러그인 

직접 바벨 플러그인을 만들지 말고 다운로드 해서 사용해 보자.  
- 물론 나중에는 이런 플러그인들을 프리셋으로 설정  

```js
npm install -D @babel/plugin-transform-block-scoping
npm install -D @babel/plugin-transform-arrow-functions
npm install -D @babel/plugin-transform-strict-mode

// const -> var 로 변환해주는 등 블록 스코프>함수 스코프로 변환
npx babel app.js --plugins @babel/plugin-transform-block-scoping

// 화살표 함수 변환 추가
npx babel app.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-arrow-functions


// babel.config.js: 추가
module.exports = {
  plugins: [
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-strict-mode",
  ],
};


// 설정파일 추가 후 
npx babel app.js

```
👨‍💻 01_plugin

## 02 프리셋


### 커스텀 프리셋

@babel/프리셋을 따로 파일로 만들어서 babel설정파일에 넣을 수 있다.

```js
// mypreset.js
module.exports = function mypreset() {
  return {
    plugins: [
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-transform-block-scoping",
      "@babel/plugin-transform-strict-mode",
    ],
  }
}
```

```js
// babel.config.js
module.exports = {
  presets: ["./mypreset.js"],
}
```

cf) 플러그인 리스트 
https://babeljs.io/docs/en/plugins-list  


👨‍💻 02_custom_preset


### @babel 프리셋

프리셋을 다운 받아 설정파일에 넣으면   
지금까지 했던 설정을 한번에 할 수 있다.  
>npm install -D @babel/preset-env

```js
// babel.config.js:
module.exports = {
  presets: ["@babel/preset-env"],
}
```
👨‍💻 03_babel_preset  


이처럼 바벨은 목적에 따라 몇 가지 프리셋을 제공한다.  

    preset-env  
    preset-flow  
    preset-react  
    preset-typescript  

preset-env는 ECMAScript2015+를 변환할 때 사용한다.   
preset-flow, preset-react, preset-typescript는 flow, 리액트, 타입스크립트를 변환하기 위한 프리셋이다.  


## 04 env target 설정과 폴리필

### env target 설정

예) 크롬 79버전은 화살표 함수를 이해하므로 바벨이 변환하지 않는다. 
예) ie11 지원을 하려면, 화살표 함수를 일반함수로 바벨이 변환 한다. 

```js
// babel.config.js :
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79", 
          ie: "11", // ie 11까지 지원하는 코드를 만든다
        },
      },
    ],
  ],
}
```
### 폴리필 설정

useBuiltIns 옵션이 false 라고 설정되어 있어 폴리필이 적용되지 않았다.  
ie11을 지원하기 위해서는, 이 옵션을 활성화(usage) 시켜야 한다.  

```js
// babel.config.js:
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        //"usage"|"entry"|false (기본) 폴리필 사용 방식 지정
        useBuiltIns: "usage",
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
}
```

변환 결과 
- ie에서 Promise 를 사용하기 위한, 모듈을 불러오도록 하는것을 볼 수 있다. 

```js
npx babel src/app.js
"use strict";

require("core-js/modules/es6.promise");
require("core-js/modules/es6.object.to-string");

new Promise();
```

## 05 웹팩으로의 통합 - 바벨

babel.config.js 을 바벨로더가 인식하니 웹팩에다 설정을 구지 안해도 된다.  

>npm install -D babel-loader
>npm i core-js@2

```js
// webpack.config.js:
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      },
    ],
  },
}
```

```
// npm i core-js@2 설치가 없다면 나오는 애러

ERROR in ./app.js
Module not found: Error: Can't resolve 'core-js/modules/es6.object.to-string.js' in 'D:\Lecture\ts\lectures_js-es6-ts_02\webpack-lecture\2_babel\05_webpack_babel'
 @ ./app.js 1:0-49

ERROR in ./app.js
Module not found: Error: Can't resolve 'core-js/modules/es6.promise.js' in 'D:\Lecture\ts\lectures_js-es6-ts_02\webpack-lecture\2_babel\05_webpack_babel'
 @ ./app.js 2:0-40
```


👨‍💻 05_webpack_babel