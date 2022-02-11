const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        // css,style-loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //file-loader
        // test: /\.png$/,
        // use: ["file-loader"],

        test: /\.png$/,
        loader: "file-loader", // loader라고 불러도 된다.
        options: {
          publicPath: "./dist", // 경로 문제
          name: "[name].[ext]?[hash]", // hash값을 주어,빌드시 캐시 무력화
        },
      },
    ],
  },
};
