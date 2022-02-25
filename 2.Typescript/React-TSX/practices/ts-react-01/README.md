## webpack react ts (minimal setting)

- 이슈, awesome-typescript-loader 는 아직 typescript:3.9 까지밖에  
  (의존성 트리 이슈 -> typescript 를 다운 그래이드 하여 해결 )
- 이슈, webpack-dev-server가 의존하는 파일이 webpack-cli 에 없음  
   (webpack-cli 와 webpack-dev-server 버전 일치 )
  [Ref][https://velog.io/@adam2/webpack-dev-server-%ec%82%ac%ec%9a%a9%ed%95%98%ea%b8%b0%ec%82%bd%ec%a7%88%ed%9b%84%ea%b8%b0#webpack-dev-server%ec%9d%98-%eb%8f%99%ec%9e%91%ec%9b%90%eb%a6%ac]

  <br/>

- install

```js
npm i react react-dom typescript
npm i -D webpack webpack-cli awesome-typescript-loader
npm i -D webpack-dev-server
npm i -D @types/react @types/react-dom
```

- package.json ( 이슈2 해결 )

```
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
```

- tsconfig.json

```js
{
  "compilerOptions": {
    "strict": true,
    "lib": ["es5", "es2015", "dom"],
    "jsx": "react"
  }
}

```

- webpack.config.js

```js
const path = require("path");
const webpack = require("webpack");
// entry - loader - plugin - output
module.exports = {
  mode: "development",
  devtool: "eval", // enum
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
    publicPath: "/public",
  },
  // for webpack-dev-server
  devServer: {
    contentBase: __dirname + "/public/",
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
  },
};
```
