const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js", // entry point가 여러개일 수 있다.
    main2: "./src/app2.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js", // entry포인트가 여러개인 경우 name 변수를 동적으로 할당해준다.
  },
  // 로더를 실행시키는 규칙
  module: {
    rules: [{ test: /\.js$/, use: [path.resolve("./my-webpack-loader.js")] }],
  },
};
