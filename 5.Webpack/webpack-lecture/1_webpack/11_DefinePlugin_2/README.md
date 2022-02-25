### 2.6.2 DefinePlugin

베포환경에 따라서 env가 달라진다. 이런 환경변수를 DefinePlugin을 통해 주입

기본으로 제공해주는 env가 process.env.NODE_ENV 이다.
- webpack의 mode에 따라서 NODE_ENV 값이 달라진다.

```js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const banner = require("./banner");

module.exports = {
  
  plugins: [
    // ✅ env 등 상수를 정의해주는 플러그 인이다.
    new webpack.DefinePlugin({
      TWO: "1+1", // 값을 리턴
      TRHEE: JSON.stringify("1+2"), //문자열 자체를 리턴
      "api.domain": JSON.stringify("http://dev.api.domain.com"), //객체도 OK
    }),
  ],
};

```
```
console.log(process.env.NODE_ENV);
console.log(process.env.TWO);
console.log(TWO);
console.log(TRHEE);
console.log(api.domain);
```
