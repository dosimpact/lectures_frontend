# 0

## webpack react ts (minimal setting)

- 이슈, awesome-typescript-loader 는 아직 typescript:3.9 까지밖에  
  (의존성 트리 이슈 -> typescript 를 다운 그래이드 하여 해결 )
- 이슈, webpack-dev-server가 의존하는 파일이 webpack-cli 에 없음  
   (webpack-cli 와 webpack-dev-server 버전 일치 )
  [Ref][https://velog.io/@adam2/webpack-dev-server-%ec%82%ac%ec%9a%a9%ed%95%98%ea%b8%b0%ec%82%bd%ec%a7%88%ed%9b%84%ea%b8%b0#webpack-dev-server%ec%9d%98-%eb%8f%99%ec%9e%91%ec%9b%90%eb%a6%ac]

  <br/>

## install

- package.json

```json
  "scripts": {
    "dev": "webpack-dev-server --hot --open"
  },
  "dependencies": {
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.5",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "typescript": "^3.7.5"
  },
  "devDependencies": {
    "awesome-typescript-loader": "^5.2.1",
    "react-hot-loader": "^4.8.4",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.3.1"
  }
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "lib": ["es5", "es2015", "es2016", "dom"],
    "jsx": "react"
  }
}
```

- webpack.config.json

```js
const path = require("path");

module.exports = {
  name: "number-baseball-dev",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  entry: {
    app: "./client",
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
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
};
```
