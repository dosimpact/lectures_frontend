const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');

const MyWebpackPlugin = require('./my-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { before } = require('./mock-api');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // 정적파일을 제공할 경로. 기본값은 웹팩 아웃풋이다.
    contentBase: path.join(__dirname, 'dist'),
    // 브라우져를 통해 접근하는 경로. 기본값은 '/' 이다. (?)
    publicPath: '/',
    // 도메인을 맞추어야 하는 상황 (쿠기 기반 인증)
    // host: 'dev.domain.com',
    overlay: true,
    // 메시지 수준 'none', 'errors-only', 'minimal', 'normal', 'verbose'
    stats: 'errors-only',
    //히스토리 API를 사용하는 SPA 개발시 설정한다. 404가 발생하면 index.html로 리다이렉트한다.
    historyApiFallback: true,
    hot: false,
    before,
  },
  module: {
    rules: [
      {
        // css,style-loader
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
        loader: 'url-loader',
        options: {
          publicPath: '.',
          limit: 20 * 1000,
          fallback: 'file-loader',
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    // ✅ env 등 상수를 정의해주는 플러그 인이다.
    new webpack.DefinePlugin({
      TWO: '1+1', // 값을 리턴
      TRHEE: JSON.stringify('1+2'), //문자열 자체를 리턴
      'api.domain': JSON.stringify('http://dev.api.domain.com'), //객체도 OK
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 경로를 지정
      templateParameters: {
        // 템플릿에 주입할 파라매터 변수 지정
        env: '(개발용)',
      },
      minify: false,
    }),
  ],
});
