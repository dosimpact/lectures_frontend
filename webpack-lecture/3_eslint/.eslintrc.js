module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 추천하는 규칙을 사용하는 옵션
  // -- eslint-config-prettier(프리티어 포멧팅 규칙을 위해 중복된 eslint 규칙 제거)
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  // eslint-plugin-prettier : 프리티어의 규칙을 eslint에 추가(플러그인)
  plugins: ['prettier'],
  rules: {
    // eslint-plugin-prettier : 프리티어의 규칙을 eslint에 추가(규칙)
    'prettier/prettier': 'error',
    // console.log()(function () {})()와 같은 멀티라인 애러 검사
    'no-unexpected-multiline': 'error',
    // 필요이상의 콤마 애러
    'no-extra-semi': 'error',
  },
};
