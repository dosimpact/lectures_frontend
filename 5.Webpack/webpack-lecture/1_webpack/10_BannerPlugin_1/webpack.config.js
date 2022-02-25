const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const banner = require("./banner");

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
        test: /\.(png|jpg|jpge|svg|gif)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist",
          name: "[name].[ext]?[hash]",
          limit: 20 * 1000, //20kb 미안의 파일은 base64인코딩을 한다. 그외는 file-loader가 실행
        },
      },
    ],
  },
  plugins: [
    // ✅ 웹팩은 BannerPlugin 기본 제공
    new webpack.BannerPlugin({
      banner: () => `
      Build Date: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    // ✅ 배너 함수를 따로 빼도 좋다.
    // new webpack.BannerPlugin(banner),
  ],
};
