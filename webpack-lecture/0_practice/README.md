# Practice

- [x] webpack config
- [x] 로더
  - [x] 커스텀 로더
  - [x] css-loader
  - [x] style-loader
  - [x] scss-loader
  - [x] file-loader
  - [x] url-loader
- [ ] 플러그인
  - [x] 커스텀 플러그인
  - [x] BannerPlugin
  - [ ] DefinePlugin
  - [ ] HtmlWebpackPlugin
  - [ ] CleanWebpackPlugin
  - [ ] MiniCssExtractPlugin

cf)

- use는 뒤에서부터 처리된다.

- css의 url 문법도 require & import 처럼 다른 모듈을 필요로 하는 문법이다.  
   이를 file-loader가 처리한다.  
   경로설정역시 options에서 해결해야할 문제

```
   background-image: url(../assets/bg.png);
```

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
    "webpack-cli": "^3.3.10"
  }
```
