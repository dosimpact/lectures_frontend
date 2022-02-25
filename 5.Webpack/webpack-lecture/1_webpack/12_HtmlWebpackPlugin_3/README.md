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
