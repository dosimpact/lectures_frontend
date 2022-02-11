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
    // use는 뒤에서부터 앞으로 처리된다.
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};
