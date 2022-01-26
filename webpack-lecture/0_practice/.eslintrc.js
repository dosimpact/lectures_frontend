module.exports = {
  // eslint 적용 환경
  // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // 추천하는 rules 셋
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    // "prettier"
  ],
  rules: {
    // eslint-plugin-prettier : 프리티어의 규칙을 eslint에 추가(규칙)
    // 'prettier/prettier': 'error',
    // 미사용 변수 애러
    'no-unused-vars': 'warn', // error | warn | off
    // console.log()(function () {})()와 같은 멀티라인 애러 검사
    // "no-unexpected-multiline": "error",
    // 필요이상의 콤마 애러
    // "no-extra-semi": "error",
  },
};

// https://eslint.org/docs/rules/
