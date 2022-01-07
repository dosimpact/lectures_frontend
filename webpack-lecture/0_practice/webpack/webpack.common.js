const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

const MyWebpackPlugin = require("./my-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
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
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () => `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}`,
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "BundleAnalyzerReport.html",
      openAnalyzer: false,
    }),
  ]
};
