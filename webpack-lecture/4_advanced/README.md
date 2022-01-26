# 웹팩 개발 서버

## devServer 환경 설정

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

필요시 API 모킹을 도와주는 미들웨어를 더해줄 수 있다.

```js
// 설치
npm i -D connect-api-mocker

// webpack.dev.js
  devServer: {
    before: require('./mock-api').before,
  },

//
curl http://localhost:8080/api
{
  "message": "server is running"
}

```

## HRM

HRM = hot module replace ( 핫모듈 리플레이스 )
