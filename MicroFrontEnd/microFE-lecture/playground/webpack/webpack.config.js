const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    app: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  devServer: {},
  module: {
    rules: [
      // ✅ 커스텀 로더 예시
      {
        test: /\.(txt)$/,
        use: [path.resolve(__dirname, "./loaders/myLoader.js")],
      },
      // 스타일
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // file-loader
        test: /\.png/,
        type: "asset/resource",
      },
      // url-loader(v4)
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   use: ["file-loader"],
      // },
      {
        // url-loader
        test: /\.jpg/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
