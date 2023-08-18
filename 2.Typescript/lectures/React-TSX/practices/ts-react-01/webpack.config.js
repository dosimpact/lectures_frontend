const path = require("path");
const webpack = require("webpack");
// entry - loader - plugin - output
module.exports = {
  mode: "development",
  devtool: "eval", // enum
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.js",
    publicPath: "/public",
  },
  // for webpack-dev-server
  devServer: {
    contentBase: __dirname + "/public/",
    inline: true,
    hot: true,
    host: "localhost",
    port: 3000,
    open: true,
  },
};
