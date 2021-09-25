## ref
- 강의  
https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD/lecture/31727?tab=curriculum

- 블로그  
https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html

- 깃허브  
https://github.com/jeonghwan-kim/lecture-frontend-dev-env


## 주의
- webpack 버전과 loader들의 버전을 직접 명세해서 설치하자.  
- 버전 업으로 인한 argments는 나중에 조정해보자.  
- 여러가지 로더들을 사용하니, 버전에 많이 민감함 편...  
```js
  {
  "name": "1.webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
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
    "webpack-cli": "^3.3.10"
  }
}

```

## 1. NPM

### 프론트 엔드 개발에 Nodejs가 필요한 이유
- 1. 최신 스펙 개발 가능  
- Babel, Typescipt, SASS 사용하려면 트랜스 파일러 필요  

- 2. 빌드 자동화
- 파일 압축, 코드 난독화 등    

- 3. 개발환경 커스터 마이징  
- CRA 툴 있지만 각자의 사정에 맞는 환경에선 Node.js 지식이 필요  

### 패키지 관리  

NPM은 유의적버전(semantic version)을 따른다.
- eg) react:"^16.12.0"  
- 주 버전 Major Version : 16    -> 기존 버전과 호환되지 않게 변경한 경우
- 부 버전 Minor Version : 12    -> 기존 버전과 호환되면서 기능이 추가된 경우
- 수 부전 Patch  Version : 0     -> 기존 버전과 호환되면서 버그를 수정한 경우  

### 버전의 범위 관리
case1 ) 버전을 직접 명시  
- eg) npm install react:16.0.12  

case2 ) 부등호 버전 명시  
- eg) npm install react>=16.0.12  

case3 ) ~ 틸드 버전 명시  

- 마이너 버전이 명시되어 있으면, 패치버전만 변경한다.  
- eg) ~16.0.12 -> 16.0.0 부터 16.1.0 미만 까지 업데이트 가능  


- 마이너 머전이 명시가 없으면, 마이너 버전을 갱신  
- eg) ~0 -> 0.0.0 부터 1.0.0 미만을 포함


case4 ) ^ 버전 명시 --- ✔ 지금 사용하는 방법  
- 정식버전(1.0 이상) 에서는 마이너와 패치 버전을 변경한다.  
- eg) ^16.0.2 는 16.0.0 ~ 17.0.0 미만 

- 정식버전 아래애서는 , 패치버전만 변경한다.   
- eg) ^0.1.2 은  0.1.0 ~ 0.2.0 미만  
- * 마이너는 하위 호환성을 보장하는 규율이 있지만, 정식버전 아래에선 해당되지 않기 때문  

- eg)   "react": "~0" ->  "version": "0.14.10"    
- eg)   "react": "^0.0" ->  "version": "0.0.3"  
- 패치 버전만 변경하면서 설치가 된다. (1.0 이하)  


# 2. Webpack

## 2.1 웹팩이 필요한 이유

배경  
- 모듈시스템이 없어서, 전역 변수들이 오염될 가능성이 있음  
- 즉시실행함수를 이용해서 함수 스코프로 감싸 모듈을 만들었다.  

다양한 모듈 스펙  
- CommonJS : exports 와 require 키워드로 사용 (Node.js)  
- AMD : 비동기 환경 에서 모듈을 사용 (주로 브라우저)  
- UMD : AMD기반 CommonJS까지 지원하는 환경     

### 👨‍💻 1_IIFE immidiately invoked function expression  
- 실습  
### 👨‍💻 2_es_module  
- 실습  

type = module 을 모든 브라우저가 지원하지 않기 때문에  
웹팩을 통해 JS 을 번들링 한다.  

## 2.2 엔트리,아웃풋

webpack 실행하기  
- npm install -D webpack webpack-cli  
- 노드모듈스 폴더 안에 .bin 안에 실행파일들이 설치된다.  
- CLI 명령어를 사용할 수 있게 된다.  

webpack 옵션   
--mode development | prodcution | none  
--entry ./src/app.js
--output dist/main.js

### 👨‍💻 3_webpack_cli
npx webpack --mode development --entry ./src/app.js -o dist

### 👨‍💻 4_webpack_config  

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js", // entry point가 여러개일 수 있다.
    main2: "./src/app2.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js", // entry포인트가 여러개인 경우 name 변수를 동적으로 할당해준다.
  },
};
// 실행 명령어
// 1. npx webpack
// script : "build":"webpack"
```
### 👨‍💻 4_webpack_config - 실습



## 2.3 로더

로더의 역할  
- 웹팩은 모든 파일을 모듈로 바라본다.  
- JS, CSS, SCSS, Image, Font -> 전부 모듈로 인식하므로 import 사용가능  
- eg)
- 1) TS ---> JS 변환,
- 2) image ---> data url 변환,
- 3) CSS 파일을 ---> JS안으로 로딩  

### 👨‍💻 5_loader

- eg) .js 파일의 console.log 를 alert 으로 바꾸자.  
- my-webpack-loader.js  
```js
module.exports = function myWebpackLoader(content) {
  console.log("mywebpackloader 동작");
  //   return content;
  return content.replace("console.log(", "alert(");
};
```
- webpack.config.js
```js
  ...
  // 로더를 실행시키는 규칙
  module: {
    rules: [{ test: /\.js$/, use: [path.resolve("./my-webpack-loader.js")] }],
  },
```

## 2.4 다양한 로더

### css-loader , style-loader
- CSS를 모듈로 바라보자.  
>npm install css-loader  
>npm install style-loader

- css-로더는 css파일을 JS안에 넣어줄 뿐  
- style-로더가 JS안의 CSS를 CSSOM으로 바꿔주어 브라우저에서 그리도록 한다.  
- webpack.config.js  
```js
...
  module: {
    // use는 뒤에서부터 앞으로 처리된다.
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
```

### file-loader
- CSS 안의 배경 등 파일들을 불러올때 file-loader가 필요하다.  
```css
body{
    /* background-color: brown; */
    background-image: url(bg.png);
    width: 100vw;
    height: 100vh;
}
```
- webpack.config.js  
```css
    ...  {
        //file-loader
        // test: /\.png$/,
        // use: ["file-loader"],

        test: /\.png$/,
        loader: "file-loader", // loader라고 불러도 된다.
        options: {
          publicPath: "./dist", // 경로 문제
          name: "[name].[ext]?[hash]", // hash값을 주어,빌드시 캐시 무력화
        },
   ...   
```


### url-loader  

- 용량이 작은 파일은 네트워크 통신으로 가져오지 말고, dataURL스키마로 넣으면 어떻까?  
- 이 기능을 해주는 것이 url loader 이다.  
- webpack.config.js  

```js
    rules: [
      {
        test: /\.(png|jpg|jpge|svg|gif)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist",
          name: "[name].[ext]?[hash]",
          limit: 20 * 1000, //20kb 미안의 파일은 base64인코딩을 한다. 그외는 file-loader가 실행
        },
      },
    ],
```
결과 : 
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/...



## 2.5 플러그인  

로더 : 파일단위로 처리  
플러그인 : 번들단위로 처리  
- eg) JS 코드 난독화  
- eg) 특정 텍스트 추출  


### 커스텀 플러그인  👨‍💻 9_custom_plugin

파일 위에 번들 날짜를 추가하는 배너플러그인을 만들어 보자.  
- my-webpack-plugin.js  
- 로더와 다르게 클래스로 만들어서 넣는다.  
```js
class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done 플러그인 실행 done 일때,
    compiler.hooks.done.tap("My Plugin", (stats) => {
      console.log("✔ MyPlugin: done");
    });

    // compiler.plugin() 함수로 후처리한다
    compiler.plugin("emit", (compilation, callback) => {
      const source = compilation.assets["main.js"].source();
      compilation.assets["main.js"].source = () => {
        const banner = [
          "/**",
          " * 이것은 BannerPlugin이 처리한 결과입니다.",
          " * Build Date: 2021-08-18",
          " */",
        ].join("\n");
        return banner + "\n" + source;
      };
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;

```

- webpack.config.js  
```js
module.exports = {
  ...
  plugins: [new MyWebpackPlugin()],
}
```

## 2.6 자주사용하는 플러그인  

### 2.6.1 BannerPlugin  👨‍💻 10_plugin_1

깃 커밋 해시를 배너에 추가해보자
- 다음 명령어로 커밋해시를 구함 
>git rev-parse --short HEAD

배너 플러그인 생성자를 이용해서 플러그인을 넣자.
- childProcess.execSync 을 이용해 명령어가 반환하는 값을 넣는다.
- Date().toLocalString() 으로 현재시간을 가져온다.
```js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const banner = require("./banner");

module.exports = {
  plugins: [
    // ✅ 웹팩은 BannerPlugin 기본 제공
    new webpack.BannerPlugin({
      banner: () => `
      Build Date: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    // ✅ 배너 함수를 따로 빼도 좋다.
    // new webpack.BannerPlugin(banner),
  ],
};
```

### 2.6.2 DefinePlugin

베포환경에 따라서 env가 달라진다. 이런 환경변수를 DefinePlugin을 통해 주입

기본으로 제공해주는 env가 process.env.NODE_ENV 이다.
- webpack의 mode에 따라서 NODE_ENV 값이 달라진다.

```js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const banner = require("./banner");

module.exports = {
  
  plugins: [
    // ✅ env 등 상수를 정의해주는 플러그 인이다.
    new webpack.DefinePlugin({
      TWO: "1+1", // 값을 리턴
      TRHEE: JSON.stringify("1+2"), //문자열 자체를 리턴
      "api.domain": JSON.stringify("http://dev.api.domain.com"), //객체도 OK
    }),
  ],
};

```
```
console.log(process.env.NODE_ENV);
console.log(process.env.TWO);
console.log(TWO);
console.log(TRHEE);
console.log(api.domain);
```

### 2.6.3 HtmlWebpackPlugin


HTML을 후처리하는데 사용한다.
- 빌드 타임의 값 넣기
- 코드를 압축
- index.html 도 src에서 dist로 옮기고 싶다면 소스로 관리 가능

eg) 
- 1) src로 옮겨진 index.html > dist로 빌드된 index.html
- * 자동으로 main.js가 추가된것을 확인
- 2) templateParameters 넣어보기
- 3) minify 옵션으로, html의 주석을 제거, 공백을 제거3


```js
const path = require("path");
const webpack = require("webpack");
const banner = require("./banner");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    // ✅ script:src="main.js" 을 자동으로 넣어준다.
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 경로를 지정
      // 템플릿에 주입할 파라매터 변수 지정
      templateParameters: {
        env:
          process.env.NODE_ENV === "development" ? "(개발용)" : "(프로덕션용)",
      },
      minify:
        process.env.NODE_ENV === "development"
          ? false
          : {
              collapseWhitespace: true, //빈칸제거 > 한줄로 html 을 만들어 준다.
              removeComments: true, // 주석 제거
            },
    }),
  ],
};
// ✅ window 에서는 cross-env모듈을 이용해서 NODE_ENV을 주자
//npx cross-env NODE_ENV=production npm run build
//npx cross-env NODE_ENV=development npm run build

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document <%= env  %> </title>
    <!-- 이것은 주석입니다. -->
</head>
<body>
    <!-- <script type="module" src="src/app.js"></script> -->
    <!-- <script src="dist/main.js"></script> -->
</body>
</html>
```

### 2.6.4 CleanWebpackPlugin

이전 빌드 결과물을 제거하는 플러그인

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
```

### 2.6.5 MiniCssExtractPlugin

스타일 시트가 많아지면 하나의 JS로 만드는게 부담이 된다.
- CSS 파일을 분리해서 JS,CSS 파일 각각 하나로 만들자

$ npm install -D mini-css-extract-plugin

webpack.config.js:
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
}
---
// 프로덕션 환경에서는 별도의 CSS 파일으로 추출하는 플러그인을 적용했으므로 다른 로더가 필요
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
    ],
  },
}
```


### 추가) webpack.dev, webpack.prod 분리하기
👨‍💻 15_webpack_configSplit  

webpack을 환경설정시 개발을 위한 설정과 베포를 위한 설정이 매우 다르다.
- 이를 분리해서 webpack.common.js, webpack.dev.js, webpack.prod.js


```
  "scripts": {
    "build:dev": "cross-env NODE_ENV=development webpack --config webpack.dev.js --progress",
    "build:prod": "cross-env NODE_ENV=production webpack --config webpack.prod.js --progress"
  },
```

webpack.common.js
```js
const path = require("path");

module.exports = {
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000, // 10Kb
        },
      },
    ],
  },
  plugins: [],
};

``` 

webpack.dev.js

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `Dev Build Time ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: "(개발용)",
      },
    }),
    new CleanWebpackPlugin(),
  ],
});

```
webpack.prod.js
```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `Prod Build Time ${new Date().toLocaleString()}`,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: "(베포용)",
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `[name].css` }),
  ],
});


```