
# mobx-tutorials

## 1. webpack - react setting. 

ref : https://github.com/RiyaNegi/react-webpack 
목적 : setting webpack - react js env   

```
npm init -y
yarn add react react-dom 
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin mini-css-extract-plugin
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader

```

```js
/.babelrc 
or
/babel.config.json

{
  "presets": ["@babel/preset-env", "@bable/preset-react"]
}
```

```js
/.webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    // open: true, // browser auto open
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
```

```js
/src
.
├── App.js
├── index.html
└── index.js

import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;

---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

--- 

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

```

## 2. webpack - decorators & typescript react setting

- typescript  
  - allowJS
  - paths settings


- javascript - decorators
  - babel settings

```
yarn add -D @babel/plugin-proposal-decorators

./babel.config.json 
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}

// *- 플러그인의 순서가 중요하다.
// * 플러그인 decorators 의 설정에 따라, export 부분의 데코레이터 적용 유무가 바뀐다.
```

## 3. ts.config - IDE Settings


```
	- IDE 단에서, javascript 루트 프로젝트로 알아먹기 위함, 
	- 실제 Javascript 변환은 babel 이 담당한다.
	- 코드를 작성하는 도중의 도움을 주는 IDE는 jsconfig.json 을 기준으로 문법 오류를 알려줌
	( eg) 데코레이터 - 원래 없는 기능이므로 오류발생 -> jsconfig 설정 )
	- tsconfig.json 으로 사용해도 된다. ( allowJs : true  의 자손 파일 이므로, ) 
		○ *tsc 변환 과정 + IDE 도움 두개를 같이 가져 가자.


tsc --init
    "allowJs": true,    
    "experimentalDecorators": true,  
```

## 3.1 webpack - alias settings.

- 1. configure webpack for babel compile. 
- 2. configure ts.config for IDE resolve. 


```
// 1. configure webpack for babel compile. 
// ref : https://webpack.js.org/configuration/resolve/#resolve-aliasfields
// no need in webpack5. ->> yarn add -D babel-plugin-module-resolver

// webpack.config.js

  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
    },
  },
---
// 2. configure ts.config for IDE resolve. 

// tsconfig.json
    "baseUrl": "./" /* Base directory to resolve non-absolute module names. */,
    "paths": {
      "@components/*": ["src/components/*"]
    } /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */,


```

## issue handling 

### babel loose:true options warnings

problem) 

```
다음 설정을 함.
    ["@babel/plugin-proposal-class-properties", { "loose": true }],

- "@babel/preset-env" 에는 숨겨진 플러그인들이 있다.
- "@babel/plugin-proposal-class-properties", { "loose": true } 의 loose ture 은,
  다음 두개의 플러그인에 대해서도 loose ture 을 맞춰 주어야 함. 

-     ["@babel/plugin-proposal-private-methods", { "loose": true }], --> 이것도 true 
-     ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]  --> 이것도 true

```

sol) babel.config.json

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  ]
}

```

# mobx

## mobx install

```
yarn add mobx mobx-react
yarn add -D @babel/plugin-proposal-decorators
```

## mobx concepts. 

### scripts

state : 객체    
-  observable 로 감싸기.  

action : 객체를 변화시키는 함수  

observer  
- observable 로 객체가 변하면 이를 구독.  

MobX 도 원래 웹을 위해서 나온 상태관리 도구는 아니다.  
- 공식문서에는 여러 유틸 함수들이 많지만, 전부 사용하지는 않는다.  

Mobx의 대표 함수들  

- observable : 변화 감지 대상을 고르고  
- runInAction,action : 변화를 시키는 함수를 만들고   
- action, reaction : 변화시 호출할 함수를 등록하고 끝.  

```
// observable : 변화를 감지할 객체를 감싸는 HOF

// runInAction : 액션(상태변화)를 단위로 묶어서 실행,
//  - 일련의 액션들을 묶어서 하나의 액션으로 처리함.
// action : runInAction은 바로 실행되지만, 액션은 나중에 호출 시 실행되도록 함.

// autorun :  observable 객체의 생성시 -> 콜백호출
//            observable 객체의 변화 감지 -> 콜백호출
// reaction : observable 객체의 프로퍼티 변화 감지 -> 콜백호출
```

웹 브라우저에서, 클래스를 막 찍어내야 하는 상황이 생길까?    
- 클래스들이 싱글톤처럼 더 다루어 지지 않는가?   


## mobx-react concepts. 

### Global State Manage
mobx-react 에서 observer 를 제공해준다.  
- observer는 obserable객체가 변경되었을때, 리랜더링이 되도록 한다.  

- 함수형 컴포넌트 적용 : useObserver
- 클래스 컴포넌트 적용 : @observer or observer HOC 적용. 
- observer 객체를 임포트 해서 사용하면 된다. 즉, provider가 필요 없음. 
- mobx 에서도, contextAPI를 권장하고 있고 provider + inject 조합을 비추천한다.  

### Local State Manage

mobx-react 를 사용하면 useState를 대처할 수 있다. ( 로컬State 대처)
- 위 경우 global state를 위해, observer 객체를 임포트 하였다.   
- 하지만 로컬의(클래스,함수)컴포넌트의 상태를 관리할 목적으로 mobx를 사용해도 된다.  

- 함수형 컴포넌트 적용 : useLocalStore
- 클래스 컴포넌트 적용 : @observer 객체 안에서 observable 객체 만들기.  
  - 혹은 @observable 로 감싸도 된다.
  - + @action 을 이용해서, mobx 상태를 바꾸는 함수를 명시해주는 것을 권장.  


contextAPI를 만들어서 코딩 컨밴션을 만들 수 있다.
- 글로벌 import 를 해도 아무 문제가 없다. 
- 코드를 일부 묶어서, 훅으로 만들어서 사용해도 된다.  
- 내 생각에는, mobx의 비즈니스 로직을 작성 할 때 좋을 것 같긴 하다.    
- ( Repository(CRUD로직) -  Servic(비즈니스 로직) ) 로 나누는 것 처럼    

obserable 객체를 구조분해시 관찰 기능이 꺼저 버린다.
- 반드시 객체를 이용해서, 변경을 해야 한다.  

  ```js
  // PASS , proxy-setter 거쳐서 변경된다.  
  state.age = 10 // obserable
  // FAIL , getter 함수로 원시값이 나오고, 이는 더 이상 proxy를 거치지 않는다.
  const  { age } = state; 
  age = 10; // not obserable
  ```

## mobx configure
ref : https://ko.mobx.js.org/configuration.html

```js
import { configure } from "mobx"

configure({
    enforceActions: "always", // 
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true
})

enforceActions의 목표는 이벤트 핸들러를 action으로 래핑하는 것을 잊지 않도록 하는 것입니다.

가능한 옵션:
  "observed" (디폴트): 관찰되는 모든 state는 action을 통해 변경되어야 합니다. 
    해당 사항은 디폴트로 설정되어 있으며, 중요한 애플리케이션에서 권장되는 엄격 모드입니다.
  "never": state는 어디에서나 변경할 수 있습니다.
  "always": state의 변경과 생성은 항상 action을 통해 변경해야 합니다.

always는 @action, action() 을 쓰도록 한다. 
- action() : this을 쓰려면 function으로 만들어야 한다.  
  * ()=>{ } 을 쓰려면, state 명시하여 가능   
  * 조금더 알아보기 : ()=>{} 는 this 바인딩이 action에 의해 변경된다.?? 

```



## practice 

1. class component todo store 

```
1. obserable store 
+ action

2. observer component 

```

2. function component todo store 

```


```

3. function component todo store with ContextAPI

```

```
