const path = require("path");
const webpack = require("webpack");
const banner = require("./banner");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        // css,style-loader
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpge|svg|gif)$/,
        loader: "url-loader",
        options: {
          // publicPath: "./dist",
          name: "[name].[ext]?[hash]",
          limit: 20 * 1000, //20kb 미안의 파일은 base64인코딩을 한다. 그외는 file-loader가 실행
        },
      },
    ],
  },
  plugins: [
    // ✅ 웹팩은 BannerPlugin 기본 제공
    // new webpack.BannerPlugin({
    //   banner: () => `
    //   Build Date: ${new Date().toLocaleString()}
    //   Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
    //   Author: ${childProcess.execSync("git config user.name")}
    //   `,
    // }),
    // ✅ 배너 함수를 따로 빼도 좋다.
    new webpack.BannerPlugin(banner),
    // ✅ env 등 상수를 정의해주는 플러그 인이다.
    new webpack.DefinePlugin({
      TWO: "1+1", // 값을 리턴
      TRHEE: JSON.stringify("1+2"), //문자열 자체를 리턴
      "api.domain": JSON.stringify("http://dev.api.domain.com"), //객체도 OK
    }),
    // ✅ script:src="main.js" 을 자동으로 넣어준다.
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 경로를 지정
      // 템플릿에 주입할 파라매터 변수 지정
      templateParameters: {
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
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
// ✅ window 에서는 cross-env모듈을 이용해서 NODE_ENV을 주자
//npx cross-env NODE_ENV=production npm run build
//npx cross-env NODE_ENV=development npm run build
