// babel.config.js:
module.exports = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '79',
          ie: '11', // ie 11까지 지원하는 코드를 만든다
        },
        useBuiltIns: 'usage', // 폴리필 사용 방식 지정
        corejs: {
          // 폴리필 버전 지정
          version: 2,
        },
      },
    ],
  ],
};
