# 웹팩 개발 서버

프론트 파일을 제공해주는 서버환경(dev)을 구축하자.

- api 연동, CORS 환경
- credentials

```js
// 설치
npm i -D webpack-dev-server

// package.json
  "scripts": {
    "start": "webpack-dev-server --config webpack/webpack.dev.js",
  },
```
