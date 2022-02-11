

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