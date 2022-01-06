const path = require("path");
const webpack  = require("webpack");
const childProcess = require("child_process")

const MyWebpackPlugin = require("./webpack/my-webpack-plugin");

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
        test: /\.js$/,
        use: [path.resolve("webpack/my-webpack-loader.js")],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png)$/,
      //   loader: "file-loader",
      //   options: {
      //       publicPath: "./dist/", // 경로 문제
      //       name: '[path][name].[ext]',
      //       // name: '[name].[contenthash].[ext]',
      //     },
      // },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          limit: 20 * 1000,
          fallback: "file-loader",
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    //new MyWebpackPlugin()
    new webpack.BannerPlugin({
      banner: () => `
      Build Date: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}`,
    }),
  ],
};
