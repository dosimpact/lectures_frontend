const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");

const MyWebpackPlugin = require("./my-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
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
    new webpack.DefinePlugin({
      TWO: "1+1",
      TRHEE: JSON.stringify("1+2"),
      "api.domain": JSON.stringify("http://dev.api.domain.com"), //객체도 OK
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: "(프로덕션용)",
      },
      minify: {
        collapseWhitespace: true, //빈칸제거 > 한줄로 html 을 만들어 준다.
        removeComments: true, // 주석 제거
      },
    }),
    new MiniCssExtractPlugin({ filename: `[name].css` })
  ],
});
