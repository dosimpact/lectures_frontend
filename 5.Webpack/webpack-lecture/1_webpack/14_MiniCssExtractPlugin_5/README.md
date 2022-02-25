
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