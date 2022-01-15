const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", // name => 없어도 무관, 컨벤션이다.
      remotes: {
        // - src/bootstrap.js에서 import 구문을 해석할때 node_modules에 없으면 이곳을 본다.
        // import 'products/ProductsIndex'; 이 구문에서의 products 는
        // 아래의 key값인 products와 일치해야 한다.
        // - myProducts@ 는 remote app의 name: "myProducts" 설정과 매핑되어야 한다.
        // - remoteEntry.js 라는 이름은 컨벤션으로 가져가는것이 좋다.
        // 이는 remote app의 filename: "remoteEntry.js", 설정과 매핑되어야 한다.
        //- import "productsApp/ProductsIndex"; 요청시 exposes 의 key 값과 매핑되어야 한다.
        productsApp: "myProducts@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
