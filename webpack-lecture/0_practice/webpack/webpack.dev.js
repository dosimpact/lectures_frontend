const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

const MyWebpackPlugin = require("./my-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common,{
  mode: "development",
  watch:true,
  module: {
    rules: [
      {
        // css,style-loader
        test: /\.css$/,
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
          publicPath: ".",
          limit: 20 * 1000,
          fallback: "file-loader",
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    // ✅ env 등 상수를 정의해주는 플러그 인이다.
    new webpack.DefinePlugin({
      TWO: "1+1", // 값을 리턴
      TRHEE: JSON.stringify("1+2"), //문자열 자체를 리턴
      "api.domain": JSON.stringify("http://dev.api.domain.com"), //객체도 OK
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 경로를 지정
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정
        env:"(개발용)"
      },
      minify:false
    })
  ],
})