// babel.config.js :
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79",
          ie: "11", // ie 11까지 지원하는 코드를 만든다
        },
      },
    ],
  ],
};
