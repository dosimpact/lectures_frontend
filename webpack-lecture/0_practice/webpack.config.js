const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

const MyWebpackPlugin = require("./webpack/my-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        // css,style-loader
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
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
    //new MyWebpackPlugin()
    new webpack.BannerPlugin({
      banner: () => `
      Build Date: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}`,
    }),
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
        env:
          process.env.NODE_ENV === "development" ? "(개발용)" : "(프로덕션용)",
      },
      minify:
        process.env.NODE_ENV === "development"
          ? false
          : {
              collapseWhitespace: true, //빈칸제거 > 한줄로 html 을 만들어 준다.
              removeComments: true, // 주석 제거
            },
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
