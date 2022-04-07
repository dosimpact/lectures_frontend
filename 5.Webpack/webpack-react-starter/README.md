
## ref

https://github.com/RiyaNegi/react-webpack 

## webpack - react setting

```
npm init -y
yarn add react react-dom 
yarn add -D webpack webpack-cli webpack-dev-server
yarn add -D html-webpack-plugin mini-css-extract-plugin
yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader style-loader

```

```js
/.babelrc
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

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));


```