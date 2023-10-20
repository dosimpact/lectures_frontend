# NextJS PlayGround



- [ ] Custom Webpack Config


## Custom Webpack Config

ref : https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

example) bundle-analyzer 설치를 통해 웹팩을 커스터 마이징 해보자  

패키지 설치  
- 자주 사용하는 모듈이므로 next에서 제공해준다.   

```js
//eg - 1
yarn add @next/bundle-analyzer

//eg - 2
yarn add @next/mdx @mdx-js/loader
```

next.config.js
- withBundleAnalyzer 로 객체를 래핑 하도록 한다.  
- 기존의 웹팩 설정은 다음처럼 확장 가능하다.
```js
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // isServer : 웹팩 함수는 server,client 각각 한번씩 실행된다.
    return config
  },
})

```