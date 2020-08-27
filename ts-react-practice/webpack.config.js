const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map
  // 해당 확장자를 가진 파일들을 변환한다.
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  // entry pointer 파일은 client이고,
  entry: {
    app: "./client",
  },
  // ts,tsx를 만나면 해당 로더를 이용한다.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [],
  // output 파일은 app.js 이고 이를 HTML 이랑 연결시킬거다.
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
};
