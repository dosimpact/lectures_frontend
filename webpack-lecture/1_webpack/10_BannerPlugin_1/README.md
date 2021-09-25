
### 2.6.1 BannerPlugin  👨‍💻 10_plugin_1

깃 커밋 해시를 배너에 추가해보자
- 다음 명령어로 커밋해시를 구함 
>git rev-parse --short HEAD

배너 플러그인 생성자를 이용해서 플러그인을 넣자.
- childProcess.execSync 을 이용해 명령어가 반환하는 값을 넣는다.
- Date().toLocalString() 으로 현재시간을 가져온다.
```js
const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const banner = require("./banner");

module.exports = {
  plugins: [
    // ✅ 웹팩은 BannerPlugin 기본 제공
    new webpack.BannerPlugin({
      banner: () => `
      Build Date: ${new Date().toLocaleString()}
      Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
      Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    // ✅ 배너 함수를 따로 빼도 좋다.
    // new webpack.BannerPlugin(banner),
  ],
};
```
