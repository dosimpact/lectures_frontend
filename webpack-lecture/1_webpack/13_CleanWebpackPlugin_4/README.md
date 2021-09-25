### 2.6.4 CleanWebpackPlugin

이전 빌드 결과물을 제거하는 플러그인

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
```